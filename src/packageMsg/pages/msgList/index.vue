<template>
  <view class="msg-list">
    <view class="msg-box">
      <view class="msg-title">
        <text>通告审核</text>
        <text class="success">审核通过</text>
      </view>
      <view class="msg-content">
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </view>
      <view class="msg-bt">
        <text>1小时前</text>
        <text>点击查看 ></text>
      </view>
    </view>
    <view class="msg-box">
      <view class="msg-title">
        <text>通告审核</text>
        <text class="fail">审核失败</text>
      </view>
      <view class="msg-content"> 内容内容内容内容内容内容内容内容 </view>
      <view class="msg-bt">
        <text>1小时前</text>
        <text>点击查看 ></text>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "msgList",
};
</script>

<style lang="scss" scoped></style>
