<template>
  <view class="identity">
    <view class="identity-tips">
      <image src="../../../assets/images/common/warning.png"></image>
      身份一年只能修改2次，当前剩余2次，请谨慎选择
    </view>
    <view class="identity-choice">
      <view class="identity-choice-title"
        >已选择（最多选择3个身份，第1个为主身份）</view
      >
      <view class="identity-choice-box">
        <text class="identity-choice-item identity-choice-active">
          <text class="identity-choice-main">主</text>模特
        </text>
        <text class="identity-choice-item"> 修图师 </text>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "identity",
};
</script>

<style lang="scss" scoped></style>
