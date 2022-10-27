<template>
  <view class="appointment">
    <view class="appointment-list">
      <view class="appointment-item">
        <image
          src="../../../assets/images/cameraman.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">摄影师</text>
      </view>
      <view class="appointment-item">
        <image
          src="../../../assets/images/cameraman1.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">摄像师</text>
      </view>
      <view class="appointment-item">
        <image
          src="../../../assets/images/makeup.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">造型师</text>
      </view>
      <view class="appointment-item">
        <image
          src="../../../assets/images/model.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">经纪人</text>
      </view>
      <view class="appointment-item">
        <image
          src="../../../assets/images/ps.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">导演</text>
      </view>
      <view class="appointment-item">
        <image
          src="../../../assets/images/business.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">商家</text>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "appointment",
};
</script>

<style lang="scss" scoped></style>
