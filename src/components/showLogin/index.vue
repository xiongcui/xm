<template>
  <view class="login-tost" @tap="login">
    <view class="login-tost-left">
      <text class="login-tost-title">安全、快捷、高效、可靠</text>
      <text class="login-tost-p">享受优质模特与摄影约拍服务</text>
    </view>
    <view class="login-tost-rt">
      <text>立即登录</text>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "showLogin",
  methods: {
    login() {
      this.$emit("getUserProfile");
    },
  },
};
</script>

<style lang="scss" scoped></style>
