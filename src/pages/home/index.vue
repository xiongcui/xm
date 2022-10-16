<template>
  <view class="home">
    <view class="pagenav">
      <view
        :style="{
          height: statusBarHeight + 'px',
        }"
      ></view>
      <view class="pagetop ub">
        <view class="sign">
          <image src="../../assets/images/common/icon_signed.png"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "home",
  data() {
    return {
      statusBarHeight: 20,
    };
  },
  methods: {
    map() {
      wx.getLocation({
        type: "gcj02", //返回可以用于 wx.openLocation 的经纬度
        success(res) {
          const latitude = res.latitude;
          const longitude = res.longitude;
          wx.openLocation({
            latitude,
            longitude,
            scale: 18,
          });
        },
      });
    },
  },
};
</script>

<style lang="scss">
.home {
  padding: 30px;
}
</style>
