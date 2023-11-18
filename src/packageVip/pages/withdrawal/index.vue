<template>
  <view class="withdrawal">
    <view class="withdrawal-box">
      <view class="withdrawal-title">
        <text class="withdrawal-lable-blod">提现至</text>
        <text class="withdrawal-tips">(请选择提现账户)</text>
      </view>
      <view class="withdrawal-select">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/select2_1.png"
        ></image>
        <text class="withdrawal-lable">微信钱包</text>
        <text class="withdrawal-tips">(立即到账)</text>
      </view>
    </view>
    <view class="withdrawal-box">
      <view class="withdrawal-title">
        <text class="withdrawal-lable-blod">提现金额</text>
      </view>
      <view class="withdrawal-input">
        <view class="unit">¥</view>
        <input
          placeholder="请输入提现金额"
          class="withdrawal-blance"
          v-model="blance"
        />
      </view>
      <view class="withdrawal-blance-tips">
        <text class="blance-tips">可提现余额¥0.00</text>
        <text class="full-withdrawal">全部提现</text>
      </view>
    </view>
    <view class="immediate-withdrawal">
      <text class="submit" @tap="submit">立即提现</text>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "withdrawal",
  data() {
    return {
      blance: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
