<template>
  <view class="application">
    <view class="application-info">
      <view class="application-info-top">
        <view class="application-title"> {{ title }} </view>
        <view class="application-bt">
          <view class="application-loction">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/local.png"
            ></image>
            {{ address }}
          </view>
          <view class="application-time">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/time.png"
            ></image>
            {{ begin_datetime }}
          </view>
          <view class="application-price">
            ¥<text class="price">{{ original_amount }}</text
            >元
          </view>
        </view>
      </view>
      <view class="application-info-bt">
        <view class="application-item">
          <view class="application-label"> 场景 </view>
          <view class="application-content-none"> {{ scene }}</view>
        </view>
        <view class="application-item" v-if="role">
          <view class="application-label"> 角色 </view>
          <view class="application-content-none"> {{ role }}</view>
        </view>
      </view>
    </view>
    <view class="application-cost">
      <!-- <view class="application-item">
        <view class="application-label"> 报名费用 </view>
        <view class="application-content"> ¥ 100.00</view>
      </view> -->
      <view
        class="application-item"
        v-for="(item, index) in expense_details"
        :key="index"
      >
        <view class="application-label">
          {{ item.name }}
          <view class="application-tag" v-if="item.tips">
            {{ item.tips }}
          </view>
        </view>
        <view class="application-content"> ¥ {{ item.amount }}</view>
      </view>
      <!-- <view class="application-item">
        <view class="application-label"> 早鸟优惠 </view>
        <view class="application-content"> - ¥ 20.00</view>
      </view>
      <view class="application-item">
        <view class="application-label"> 特享优惠 </view>
        <view class="application-content"> - ¥ 20.00</view>
      </view> -->
      <view class="application-split"></view>
      <view class="application-item">
        <view class="application-label blod"> 实际支付 </view>
        <view class="application-content price-style">
          ¥{{ actual_payment }}</view
        >
      </view>
    </view>
    <view class="payment">
      <!-- <view class="application-item">
        <view class="application-label">微信支付 </view>
        <view class="application-content">
          <view
            @tap="choosePayment"
            class="check_box"
            :class="payment === 1 ? 'check_box_ed' : ''"
            data-status="1"
          >
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                payment === 1 ? 1 : 0
              }.png`"
            ></image>
          </view>
        </view>
      </view> -->
      <view
        class="application-item"
        v-for="(item, index) in payment_method"
        :key="index"
      >
        <view class="application-label">
          {{ item.method }}
          <!-- <text class="balance">金币余额20</text> -->
        </view>
        <view class="application-content">
          <view
            @tap="choosePayment(index)"
            class="check_box"
            :class="item.is_select === 1 ? 'check_box_ed' : ''"
          >
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                item.is_select === 1 ? 1 : 0
              }.png`"
            ></image>
          </view>
        </view>
      </view>
    </view>
    <view
      class="application-fixed"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <view class="application-fixed-left">
        <view class="application-fixed-price"> ¥{{ actual_payment }} </view>
        <view class="reduction">共减免¥{{ reduce_payment }}</view>
      </view>
      <view class="application-fixed-rt" @tap="confirmPayment"> 确认支付 </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { sceneInfo, applicationPay, applyResult } from "../../../api/index.js";
import { openPage } from "../../../utils/util";
import clickThrottle from "../../../utils/clickThrottle";
export default {
  name: "application",
  data() {
    return {
      isIphoneX: false,
      message: "",
      payment: 1,
      scene_oid: "",
      teams_oid: "",
      title: "",
      address: "",
      begin_datetime: "",
      actual_payment: "",
      expense_details: [],
      payment_method: [],
      original_amount: "",
      reduce_payment: "",
      scene: "",
      role: "",
      service: "",
      apply_wait: "",
      roles_oid: "",
    };
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  methods: {
    choosePayment(index) {
      this.payment_method.map((item) => {
        item.is_select = 0;
      });
      this.payment_method[index].is_select = !this.payment_method[index]
        .is_select
        ? 1
        : 0;
    },
    confirmPayment() {
      if (!clickThrottle()) return;
      let params = {
        roles_oid: this.roles_oid,
      };
      if (this.apply_wait) {
        params.apply_wait = this.apply_wait;
      }
      this.applicationPay(params);
    },
    async sceneInfo(params) {
      try {
        let res = await sceneInfo(params);
        this.title = res.data.data.topic.title;
        this.scene = res.data.data.selected.scene_name;
        this.role = res.data.data.selected.roles_name
          ? res.data.data.selected.roles_name
          : "";
        this.original_amount = res.data.data.topic.original_amount.amount;
        this.address = res.data.data.topic.address;
        this.begin_datetime = res.data.data.topic.begin_datetime;
        this.actual_payment = res.data.data.expense.details.actual_amount;
        this.reduce_payment = res.data.data.expense.details.reduce_amount;
        this.expense_details = res.data.data.expense.details.details;
        this.payment_method = res.data.data.payment_method;
      } catch (error) {}
    },
    async applicationPay(params) {
      try {
        let res = await applicationPay(params);
        let data = res.data.data;
        if (data.pay_type == "wx_pay") {
          let _this = this;
          wx.requestPayment({
            timeStamp: data.req_data.result.timeStamp,
            nonceStr: data.req_data.result.nonceStr,
            package: data.req_data.result.package,
            signType: data.req_data.result.signType,
            paySign: data.req_data.result.paySign,
            success: function (res) {
              console.log(res, "成功了");
              _this.applyResult({
                roles_oid: _this.roles_oid,
              });
            },
            fail: function (res) {},
            complete: function (res) {},
          });
        } else if (data.pay_type == "no_pay") {
          this.applyResult({
            roles_oid: this.roles_oid,
          });
        }
      } catch (error) {}
    },
    async applyResult(params) {
      wx.showLoading({
        title: "正在提交中...",
      });
      try {
        let res = await applyResult(params);
        wx.hideLoading();
        openPage(
          "/packageActivity/pages/applicationConfirm/index?result=" +
            res.data.data.result +
            "&desc=" +
            res.data.data.desc +
            "&wechat_qrc=" +
            res.data.data.wechat_qrc
        );
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    if (options.roles_oid) {
      this.roles_oid = options.roles_oid;
      this.sceneInfo({
        roles_oid: this.roles_oid,
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
