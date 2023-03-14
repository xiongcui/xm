<template>
  <view class="home">
    <view class="custom_head" :style="{ height: globalData.navHeight + 'px' }">
      <view
        class="flex-row"
        :style="{
          width: '100%',
          height: globalData.navObj + 'px',
          'padding-top': globalData.navTop + 'px',
          'padding-right': globalData.navObjWid + 5 + 'px',
        }"
      >
        <view class="head_left">
          <view class="select-city">
            {{ city }}
            <image
              src="../../assets/images/common/back.png"
              class="roll-down"
            ></image>
          </view>
          <view class="head_sign" @tap="showSign">
            <image
              src="../../assets/images/icon_signed.jpg"
              v-if="is_today_sign"
            ></image>
            <image src="../../assets/images/icon_sign.jpg" v-else></image>
          </view>
        </view>
        <view class="head_nav"> 虾米约拍 </view>
      </view>
    </view>
    <view :style="{ height: globalData.navHeight + 'px' }"></view>
    <block>
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
                  mode="aspectFill"
                  :src="'https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/9f7062c8-67b9-11ed-ae45-473a871aac32.jpg'"
                  class="swiper-item-img"
                ></image>
              </view>
            </swiper-item>
          </block>
        </swiper>
      </view>
    </block>
    <view class="news">
      <view class="news-title">消息</view>
      <view class="news-line">|</view>
      <view class="news-txt">看大佬如何用手机拍出黑白大片</view>
      <view class="news-btn">去看看</view>
    </view>
    <view class="page-nav">
      <view class="page-nav-top">
        <view class="page-nav-item">
          <image
            src="../../assets/images/icon_model.png"
            class="page-nav-img"
          ></image>
          <text class="page-nav-text">模特</text>
        </view>
        <view class="page-nav-item">
          <image
            src="../../assets/images/take.png"
            class="page-nav-img"
          ></image>
          <text class="page-nav-text">摄影</text>
        </view>
        <view class="page-nav-item">
          <image
            src="../../assets/images/more1.png"
            class="page-nav-img"
          ></image>
          <text class="page-nav-text">作品</text>
        </view>
        <view class="page-nav-item">
          <image
            src="../../assets/images/moka.png"
            class="page-nav-img"
          ></image>
          <text class="page-nav-text">模卡</text>
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
      city: "北京",
      is_today_sign: 0,
      background: ["demo-text-1", "demo-text-2", "demo-text-3"],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      showModal: false,
      interval: 2000,
      duration: 500,
    };
  },
  created() {
    this.globalData = this.globalData;
  },
};
</script>

<style lang="scss" scoped></style>
