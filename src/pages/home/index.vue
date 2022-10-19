<template>
  <view class="home">
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
      </view>
    </view>
    <view :style="{ height: globalData.navHeight + 'px' }"></view>
    <view class="page-bg"></view>
    <view class="page-section page-section-spacing swiper">
      <swiper
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <block v-for="(item, index) in background" :key="index">
          <swiper-item>
            <view class="swiper-item">
              <image
                mode="center"
                :src="
                  require('../../assets/images/lanmao' + (index + 1) + '.jpg')
                "
                class="swiper-item-img"
              ></image>
            </view>
          </swiper-item>
        </block>
      </swiper>
    </view>
    <view class="page_nav">
      <view class="page_nav_item">
        <view class="page_nav_icon">
          <image
            src="../../assets/images/user/index/like.png"
            class="page_nav_img"
          ></image>
        </view>
        <text class="page_nav_text">通告</text>
      </view>
      <view class="page_nav_item">
        <view class="page_nav_icon">
          <image
            src="../../assets/images/user/index/like.png"
            class="page_nav_img"
          ></image>
        </view>
        <text class="page_nav_text">约单</text>
      </view>
      <view class="page_nav_item">
        <view class="page_nav_icon">
          <image
            src="../../assets/images/user/index/like.png"
            class="page_nav_img"
          ></image>
        </view>
        <text class="page_nav_text">活动</text>
      </view>
      <view class="page_nav_item">
        <view class="page_nav_icon">
          <image
            src="../../assets/images/user/index/like.png"
            class="page_nav_img"
          ></image>
        </view>
        <text class="page_nav_text">待定</text>
      </view>
    </view>
    <view class="nav_list">
      <scroll-view class="swiper_tab" :enhanced="true" :scrollX="true">
        <view class="nav_list_ct">
          <text
            class="nav_item"
            v-for="(item, index) in navList"
            :key="index"
            :class="navActive == index ? 'nav_active' : ''"
            >{{ item.name }}</text
          >
        </view>
      </scroll-view>
      <view class="sizer_block ub">
        <view class="gradient"></view>
        <view class="sizer ub" :class="sizer_num.length ? 'is_sizer' : ''">
          <view class="ub">
            <view>筛选</view>
            <block v-if="sizer_num.length">
              <view class="sizer_dian">·</view>
              <view>{{ sizer_num.length }}</view>
            </block>
          </view>
          <view class="sizer_img">
            <image
              src="../../assets/images/common/sizered.png"
              v-if="sizer_num.length"
            ></image>
            <image src="../../assets/images/common/sizer.png" v-else></image>
          </view>
        </view>
      </view>
    </view>
    <view class="list_main">
      <view class="list_box">
        <view class="list_top">
          <view class="list_top_left">
            <image
              src="../../assets/images/avatar_default.png"
              class="avatar"
            ></image>
            <view class="list_info">
              <view class="list_name">
                BinWon
                <!-- <image></image> -->
              </view>
              <view class="list_p">
                <text> 摄影 | 北京</text>
                <image
                  src="../../assets/images/common/icon_real.png"
                  class="list_p_img"
                ></image>
                <image
                  src="../../assets/images/common/icon_pledge.png"
                  class="list_p_img"
                ></image>
              </view>
            </view>
          </view>
          <view class="list_collection">
            <image src="../../assets/images/common/icon_favorite.png"></image>
          </view>
        </view>
        <view class="list_content">
          <view class="list_title">约模特·希望互勉</view>
          <view class="list_loction"> 北京 </view>
        </view>
        <view class="list_desc">
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </view>
        <view class="list_img">
          <scroll-view :enhanced="true" :scrollX="true">
            <image
              src="../../assets/images/lanmao1.jpg"
              mode="center"
              class="list_img_item"
            ></image>
            <image
              src="../../assets/images/lanmao1.jpg"
              mode="center"
              class="list_img_item"
            ></image>
            <image
              src="../../assets/images/lanmao1.jpg"
              mode="center"
              class="list_img_item"
            ></image>
            <image
              src="../../assets/images/lanmao1.jpg"
              mode="center"
              class="list_img_item"
            ></image>
          </scroll-view>
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
      globalData: {
        navHeight: 0,
        navTop: 0,
        navObj: 0,
        navObjWid: 0,
      },
      statusBarHeight: 20,
      search: "",
      background: ["demo-text-1", "demo-text-2", "demo-text-3"],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500,
      sizer_num: [],
      navActive: 0,
      navList: [
        {
          name: "约拍",
          value: 0,
        },
        {
          name: "约拍2",
          value: 1,
        },
        {
          name: "约拍3",
          value: 2,
        },
        {
          name: "约拍4",
          value: 3,
        },
        {
          name: "约拍5",
          value: 4,
        },
        {
          name: "约拍6",
          value: 5,
        },
        {
          name: "约拍7",
          value: 6,
        },
        {
          name: "约拍8",
          value: 7,
        },
      ],
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
