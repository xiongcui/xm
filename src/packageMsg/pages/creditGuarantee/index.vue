<template>
  <view class="credit-guarantee">
    <view class="credit-top">
      <view>缴纳保证金</view>
      <image
        src="https://yuepai-oss.qubeitech.com/static/images/common/security.png"
        class="security"
      ></image>
      <view>享专属特权</view>
      <view class="credit-info">
        <view class="credit-item">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/securityRed.png"
          ></image>
          信用标识提醒
        </view>
        <view class="credit-item">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/userRed.png"
          ></image>
          约拍优质模特
        </view>
        <view class="credit-item">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/guaranteeRed.png"
          ></image>
          约拍信用担保
        </view>
        <view class="credit-item">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/giftRed.png"
          ></image>
          尊享福利特权
        </view>
      </view>
    </view>
    <view class="price"> 300元 </view>
    <!-- <view v-if="is_security === 0">
      <view class="submit-red" @tap="submitSecurity">立即存入</view>
      <view class="or">或</view>
      <view class="submit-yellow" @tap="goVip">成为VIP</view>
      <view class="credit-tips">VIP免担保金 自动享担保权益 >></view>
    </view> -->
    <!-- <view v-if="is_security === 1">
      <view class="credit-tips">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/guaranteed.png"
          class="credit-icon"
        ></image>
        您已存入保障金，已享受担保权益
      </view>
      <view class="submit-red">申请提取保证金</view>
    </view> -->
    <view v-if="is_security === 1">
      <view class="credit-tips">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/guaranteed.png"
          class="credit-icon"
        ></image>
        您已存入保障金，已享受担保权益
      </view>
      <view class="submit-red" @tap="withdrawalOfMargin">申请提取保证金</view>
    </view>
    <view v-if="is_security === 0">
      <view class="submit-red" @tap="submitSecurity">立即存入</view>
    </view>
    <view class="credit-content">
      <view>
        保证金3个月后可随时全额提现，3个月内退款扣15%服务费，3个月后0服务费。存入保证金后即同意以下内容：
      </view>
      <view> 1.在交流以及拍摄过程中，不会有恶意欺骗行为； </view>
      <view> 2.如果在联系确认已经达成拍摄约定后，不会随意毁约； </view>
      <view> 3.对于摄影师，拍摄完成后，会按照约定返片给对方； </view>
      <view>
        4.在对方没有同意的情况下，不会公开对方隐私；
        如果违反了其中一条，经客服同双方调查确认后，可以扣除保证金；
      </view>
    </view>
    <view class="margin-modal" @tap="marginClose" v-if="marginVisible">
      <view class="margin-ct">
        <view class="margin-title">申请提取保证金</view>
        <view class="margin-tip">提取保证金后将不在享受担保权益</view>
        <view class="margin-p">按以下两种方式提取保证金</view>
        <view class="margin-p">1、添加客服微信：binywon（备注：保证金）</view>
        <view class="margin-p"
          >2、点击咨询在线客服申请提取保证金核实通过后，预计24小时到账</view
        >
        <view class="margin-btns">
          <text @tap.stop="marginClose">放弃提取</text>
          <text @tap.stop="customerService">在线客服</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { errortip, openPage } from "../../../utils/util";
import { securityOpen, securityInfo } from "../../../api/index";
import "./index.scss";
export default {
  name: "creditGuarantee",
  data() {
    return {
      is_security: 0,
      is_member: 0,
      marginVisible: false,
    };
  },
  methods: {
    goVip() {
      openPage("/packageVip/pages/vip/index");
    },
    submitSecurity() {
      this.securityOpen({
        amount: 300,
      });
    },
    marginClose() {
      this.marginVisible = false;
    },
    customerService() {
      wx.openCustomerServiceChat({
        extInfo: { url: "https://work.weixin.qq.com/kfid/kfc70400e4245eaa1b6" },
        corpId: "ww9ad8086390afbfaa",
        success(res) {},
      });
    },
    withdrawalOfMargin() {
      this.marginVisible = true;
    },
    async securityOpen(params) {
      try {
        let res = await securityOpen(params);
        console.log(res, "");
        let data = res.data.data;
        let _this = this;
        wx.requestPayment({
          timeStamp: data.result.timeStamp,
          nonceStr: data.result.nonceStr,
          package: data.result.package,
          signType: data.result.signType,
          paySign: data.result.paySign,
          success: function (res) {
            console.log(res, "成功了");
            errortip("存入成功");
            _this.securityInfo("");
          },
          fail: function (res) {},
          complete: function (res) {},
        });
      } catch (error) {}
    },
    async securityInfo(params) {
      try {
        let res = await securityInfo(params);
        this.is_security = res.data.data.is_security;
        this.is_member = res.data.data.is_member;
      } catch (error) {}
    },
  },
  created() {
    this.securityInfo("");
  },
};
</script>

<style lang="scss" scoped></style>
