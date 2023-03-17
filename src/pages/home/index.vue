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
      <view class="page-nav-bottom">
        <view class="page-nav-box nav_bg1">
          <view class="page-nav-left">
            <view class="page-nav-title">约拍</view>
            <view class="page-nav-desc">你约我拍</view>
          </view>
          <view class="page-nav-rt">
            <image src="../../assets/images/common/photo_white.png"></image>
          </view>
        </view>
        <view class="page-nav-box nav_bg2">
          <view class="page-nav-left">
            <view class="page-nav-title">通告</view>
            <view class="page-nav-desc">招募公告</view>
          </view>
          <view class="page-nav-rt">
            <image src="../../assets/images/common/tonggao_white.png"></image>
          </view>
        </view>
      </view>
    </view>
    <view class="recommend">
      <view class="recommend-title">
        <view class="recommend-name"> 通告推荐 </view>
        <view class="recommend-tips"> 1分钟前***发布了人像创作</view>
        <view class="recommend-more">更多</view>
      </view>
      <view class="recommend-ct">
        <view class="recommend-box">
          <view class="tonggao-recommend">
            <view class="tonggao-recommend-top">
              <view class="tonggao-recommend-img">
                <image
                  src="../../assets/images/activity.png"
                  mode="aspectFill"
                ></image>
              </view>
              <view class="tonggao-recommend-info">
                <view class="tonggao-info-title">
                  <view class="recommend-label"> 人像创作 </view>
                  <view class="tonggao-txt">面向全国招聘优质模特</view>
                </view>
                <view class="tonggao-info-desc">
                  内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</view
                >
                <view class="tonggao-tags">
                  <view class="tag-item">面向地区：2</view>
                  <view class="tag-item">性别要求：3</view>
                </view>
                <view class="tonggao-recommend-price">
                  <view class="pirce"> ¥200/时 </view>
                  <view class="recommend-btn">立即报名</view>
                </view>
              </view>
            </view>
          </view>
          <view class="tonggao-bottom">
            <view class="tonggao-head">
              <image src="../../assets/images/arrow-right.png"></image>
              Anne
            </view>
            <view class="tonggao-yuepai">
              <image src="../../assets/images/user/index/yuepai.png"></image>
              {{ 2 }}
            </view>
            <view class="tonggao-read">
              <image src="../../assets/images/eyes.png"></image>
              {{ 3 }}
            </view>
          </view>
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
