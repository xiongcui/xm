<template>
  <view class="componets-list">
    <view class="componets-box">
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
          北京市
        </view>
        <view class="tonggao-read">
          <image src="../../assets/images/eyes.png"></image>
          男
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "tonggaoList",
};
</script>

<style lang="scss" scoped></style>
