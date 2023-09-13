<template>
  <view class="my-activity-detail">
    <view class="activity-detail-top">
      <view class="activity-status">
        <view class="circle-red"></view>
        <text class="activity-txt-red">活动中</text>
        <text class="activity-time-red">09-11 22:42</text>
      </view>
      <view class="activity-right">
        <image
          mode="aspectFit"
          src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
        ></image>
      </view>
    </view>
    <view class="activity-box">
      <view class="activity-top">
        <view class="activity-name"> 虾米摄影俱乐部</view>
      </view>
      <view class="activity-ct">
        <view class="activity-left">
          <image
            src="https://yuepai-oss.qubeitech.com/notice/111111/34fb075d-02c0-11ee-8f34-812b5b24112e-qa60.png"
            mode="aspectFill"
          ></image>
        </view>
        <view class="activity-right">
          <view class="activity-title"> 标题标题标题标题标题标题标题 </view>
          <view class="activity-location"> 北京奥林匹克公园</view>
          <view class="activity-time">
            <text class="activity-txt">2023.07.02 周六 15:00</text>
          </view>
        </view>
      </view>
      <view class="activity-bt">
        <view class="group-top">
          <view class="group-label">固定分组</view>
          <view class="group-identity">竹林汉服｜摄影师</view>
        </view>
        <view class="group-info">
          <view class="group-item">
            <text>订单编号</text>
            <text>IEuuuu从男男女女</text>
          </view>
          <view class="group-item">
            <text>实付金额</text>
            <text>200</text>
          </view>
          <view class="group-item">
            <text>创建时间</text>
            <text>2023-09-11 19:46:00</text>
          </view>
          <view class="group-item">
            <text>支付时间</text>
            <text>2023-09-11 19:46:00</text>
          </view>
        </view>
      </view>
    </view>
    <view class="bottom-modal" v-if="visible" @tap="close">
      <view class="bottom-content">
        <view class="bottom-title"> 详细信息 </view>
        <view class="activity-status-box">
          <view class="activity-status">
            <view class="circle-in-progress"></view>
            <text class="activity-txt-in-progress">活动中</text>
            <text class="activity-time-in-progress">09-11 22:42</text>
          </view>
        </view>
        <view class="activity-status-box">
          <view class="activity-status">
            <view class="circle-not-started"></view>
            <text class="activity-txt-not-started">活动中</text>
            <text class="activity-time-not-started">09-11 22:42</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "myActivityDetail",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
