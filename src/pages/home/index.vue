<template>
  <view>
    <view class="custom_head" :style="{ height: globalData.navHeight + 'px' }">
      <view
        class="flex-row"
        :style="{
          height: globalData.navObj + 'px',
          'padding-top': globalData.navTop + 'px',
          'padding-right': globalData.navObjWid + 5 + 'px',
        }"
      >
        <view class="head_sign">
          <image src="../../assets/images/common/icon_sign.png"></image>
          <text>签到</text>
        </view>
        <view class="search">
          <input
            :value="search"
            class="search-input"
            placeholder="搜索约拍"
            placeholder-class="placeholder-style"
          />
        </view>
        <!-- <view class="head_nav">
          <view class="nav_item"> 通告 </view>
          <view class="nav_item"> 约单 </view>
          <view class="nav_item"> 活动 </view>
        </view> -->
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
      globalData: {
        navHeight: 0,
        navTop: 0,
        navObj: 0,
        navObjWid: 0,
      },
      statusBarHeight: 20,
      search: "",
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
  mounted() {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: (res) => {
        //导航高度
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          navObjWid =
            res.windowWidth - menuButtonObject.right + menuButtonObject.width, // 胶囊按钮与右侧的距离 = windowWidth - right+胶囊宽度
          navHeight =
            statusBarHeight +
            menuButtonObject.height +
            (menuButtonObject.top - statusBarHeight) * 2;
        this.globalData.navHeight = navHeight; //导航栏总体高度
        this.globalData.navTop = navTop; //胶囊距离顶部距离
        this.globalData.navObj = menuButtonObject.height; //胶囊高度
        this.globalData.navObjWid = navObjWid; //胶囊宽度(包括右边距离)
        // console.log(navHeight,navTop,menuButtonObject.height,navObjWid)
      },
      fail(err) {
        console.log(err);
      },
    });
  },
};
</script>

<style lang="scss">
.home {
  padding: 30px;
}
</style>
