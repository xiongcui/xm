<template>
  <view class="tonggao">
    <view class="hot-tg">
      <view class="tg-title">热门通告</view>
      <view class="hot-type">
        <view class="hot-item">品牌种草</view>
        <view class="hot-item">探店推广</view>
        <view class="hot-item">发型创作</view>
        <view class="hot-item">人像创作</view>
      </view>
    </view>
    <view class="select-type">
      <view class="tg-title">选择分类</view>
      <view class="select-list">
        <view class="select-item">
          <image src="../../../assets/images/tonggao/xiangce.png"></image>
          <text>作品创作</text>
        </view>
        <view class="select-item">
          <image src="../../../assets/images/tonggao/hezuo.png"></image>
          <text>合作招募</text>
        </view>
        <view class="select-item">
          <image src="../../../assets/images/tonggao/dianshang.png"></image>
          <text>电商拍摄</text>
        </view>
        <view class="select-item">
          <image src="../../../assets/images/tonggao/guanggao.png"></image>
          <text>广告宣传</text>
        </view>
        <view class="select-item">
          <image src="../../../assets/images/tonggao/yingshi.png"></image>
          <text>影视视频</text>
        </view>
        <view class="select-item">
          <image src="../../../assets/images/tonggao/shangye.png"></image>
          <text>商业活动</text>
        </view>
      </view>
    </view>
    <view class="tonggao-mask" v-if="false">
      <view class="mask-box">
        <view class="mask-title">
          作品创作
          <view class="close"></view>
        </view>
        <view class="mask-ct">
          <view class="mask-item">发型创作</view>
          <view class="mask-item">发型创作</view>
          <view class="mask-item">发型创作</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "tonggao",
};
</script>

<style lang="scss" scoped></style>
