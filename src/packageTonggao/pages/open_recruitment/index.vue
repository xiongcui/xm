<template>
  <view class="open-box">
    <view class="open-title"> 您将展示火爆通告 </view>
    <view class="open-desc">该通告竞争激烈，需要支付费用才可展示</view>
    <view class="open-list">
      <view class="open-item active">
        <view class="day">7天</view>
        <view>70金币/通告</view>
      </view>
      <view class="open-item">
        <view class="day">7天</view>
        <view>70金币/通告</view>
      </view>
      <view class="open-item">
        <view class="day">7天</view>
        <view>70金币/通告</view>
      </view>
      <view class="open-item">
        <view class="day">7天</view>
        <view>70金币/通告</view>
      </view>
    </view>
    <view class="open-tips">
      温馨提示：通告发布价格根据地区、职类、平台差异有所不同
    </view>
    <view class="open-bottom">
      <view class="open-bottom-left">
        <view class="coin">70 金币</view>
        <view>剩余：100金币</view>
      </view>
      <view class="open-bottom-rt">
        <view class="open-btn">立即开放</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "open_recruitment",
};
</script>

<style lang="scss" scoped></style>
