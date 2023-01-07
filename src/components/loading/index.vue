<template>
  <view class="layout-loading" v-show="showLoading">
    <view class="layout-content">
      <view class="loader-animation">
        <view class="animation-box">
          <text></text>
          <text></text>
          <text></text>
          <text></text>
          <text></text>
        </view>
        <view class="loading-label">加载中</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "loading",
  props: {
    showLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
