<template>
  <view class="grade">
    <view class="grade-top">
      <view class="grade-info">
        <view class="grade-info-left">
          <view class="grade-info-box">
            <view class="grade-name">Anne</view>
            <view class="grade-leavel">LV.3</view>
          </view>
          <view class="growth">成长值：200</view>
        </view>
        <view class="grade-info-rt"> 成长指南 </view>
      </view>
      <swiper class="swiper-container" @change="bindChange" :current="current">
        <swiper-item
          class="swiper-item"
          v-for="(item, index) in list"
          :key="index"
          @tap="clickChange(index)"
        >
          <text
            class="swiper-leavel"
            :class="current == index ? 'active' : 'scale'"
            v-if="index < 3"
            >{{ item }}</text
          >
          <text
            v-else
            class="swiper-leavel grey"
            :class="current == index ? 'active' : 'scale'"
          >
            {{ item }}
          </text>
        </swiper-item>
        <!-- <swiper-item class="swiper-item">
          <text class="swiper-leavel">LV3</text>
        </swiper-item>
        <swiper-item class="swiper-item">
          <text class="swiper-leavel">LV4</text>
        </swiper-item>
        <swiper-item class="swiper-item">
          <text class="swiper-leavel grey">LV5</text>
        </swiper-item>
        <swiper-item class="swiper-item">
          <text class="swiper-leavel grey scale">LV6</text>
        </swiper-item> -->
      </swiper>
    </view>
    <view class="grade-card">
      <text class="triangle"></text>
      <view class="schedule">
        <view
          class="schedule-bg"
          :style="{
            width: '50%',
          }"
        ></view>
        <text class="schedule-num">10 / 20</text>
      </view>
      <view class="grade-card-txt">下一等级可超越98%的用户</view>
      <view class="fast-grade">
        <text class="fast-grade-txt">如何才能快速成长呢？</text>
        <text class="fast-grade-btn">成为VIP会员翻倍成长</text>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "grade",
  data() {
    return {
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      duration: 500,
      interval: 5000,
      list: ["LV1", "LV2", "LV3", "LV4", "LV5", "LV6", "LV7"],
      current: 2,
    };
  },
  methods: {
    bindChange(e) {
      this.current = e.detail.current;
    },
    clickChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss" scoped></style>
