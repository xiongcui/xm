<template>
  <view class="msg-box">
    <view class="msg-icon">
      <view class="msg-icon-item">
        <image src="../../assets/images/msg/fabulous.png"></image>
        <text>赞与访客</text>
        <view class="msg-num">1</view>
      </view>
      <view class="msg-icon-item">
        <image src="../../assets/images/msg/yuepai.png"></image>
        <text>收到约拍</text>
        <view class="msg-num">22</view>
      </view>
      <view class="msg-icon-item">
        <image src="../../assets/images/msg/baoming.png"></image>
        <text>收到报名</text>
        <view class="msg-num">33</view>
      </view>
      <view class="msg-icon-item">
        <image src="../../assets/images/msg/contact.png"></image>
        <text>收到联系</text>
        <view class="msg-num">99+</view>
      </view>
    </view>
    <view class="msg-notification">
      <view class="notification-left">
        <image src="../../assets/images/msg/xiaoxi.png"></image>
      </view>
      <view class="notification-rt">
        <view class="notification-title">
          <text>消息通知</text>
          <text class="notification-time">昨天</text>
        </view>
        <view class="notification-txt">您有一条审核通知</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "msg",
};
</script>

<style lang="scss" scoped></style>
