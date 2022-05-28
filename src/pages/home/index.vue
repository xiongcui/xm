<template>
  <view class="home">
    <button type="primary" @tap="map">获取位置</button>
  </view>
</template>

<script>
export default {
  name: "home",
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
