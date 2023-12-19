<template>
  <view class="w-progress">
    <view class="withdrawal-box">
      <view class="withdrawal-title">提现进度</view>
      <block v-if="stepList.length">
        <view class="step" :key="index" v-for="(item, index) in stepList">
          <view class="item_left">
            <view
              class="line"
              :class="item.status == 0 ? '' : 'lineActive'"
              v-if="index != stepList.length - 1"
            ></view>
            <view class="iconbox">
              <view class="circle active"></view>
            </view>
          </view>
          <view class="item_right">
            <view class="item_title">
              <view class="item_title_left">
                {{ item.order_status_desc }}
              </view>
              <view class="item_title_rt">{{ item.create_time }}</view>
            </view>
            <view class="item_content">
              <view class="cntext">{{ item.describe }}</view>
            </view>
          </view>
        </view>
      </block>
      <view class="no-withdrawal-data" v-else>
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/loading.gif"
        ></image>
        提现申请已提交，正在处理中，请耐心等待
      </view>
      <view class="withdrawal-info">
        <view class="withdrawal-item">
          <view class="withdrawal-left"> 流水号 </view>
          <view class="withdrawal-rt"> {{ order_no }} </view>
        </view>
        <view class="withdrawal-item">
          <view class="withdrawal-left"> 创建时间 </view>
          <view class="withdrawal-rt"> {{ create_time }} </view>
        </view>
      </view>
    </view>
    <view class="withdrawal-tips">
      <view class="withdrawal-p">预计2小时到账，若未及时到账请联系客服</view>
      <view class="withdrawal-p">客服微信：BinyWon</view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { orderInfo } from "../../../api/index.js";
export default {
  name: "withdrawalProgress",
  data() {
    return {
      order_no: "",
      stepList: [],
      create_time: "",
    };
  },
  methods: {
    async orderInfo(params) {
      try {
        let res = await orderInfo(params);
        this.stepList = res.data.data.item;
        this.create_time = res.data.data.base.create_time;
        this.order_no = res.data.data.base.order_no;
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    if (options.order_no) {
      this.order_no = options.order_no;
      this.orderInfo({
        order_no: this.order_no,
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
