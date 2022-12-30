<template>
  <view class="msg-box">
    <view class="msg-icon">
      <view class="msg-icon-item" @tap="openUrl(1)">
        <image src="../../assets/images/msg/fabulous.png"></image>
        <text>赞与访客</text>
        <view class="msg-num" v-if="vote_visitor_cnt > 0">{{
          vote_visitor_cnt
        }}</view>
      </view>
      <view class="msg-icon-item" @tap="openUrl(2)">
        <image src="../../assets/images/msg/yuepai.png"></image>
        <text>收到约拍</text>
        <view class="msg-num" v-if="invite_cnt > 0">{{ invite_cnt }}</view>
      </view>
      <view class="msg-icon-item" @tap="openUrl(3)">
        <image src="../../assets/images/msg/baoming.png"></image>
        <text>收到报名</text>
        <view class="msg-num" v-if="notice_cnt > 0">{{ notice_cnt }}</view>
      </view>
      <view class="msg-icon-item">
        <image src="../../assets/images/msg/contact.png"></image>
        <text>收到联系</text>
        <!-- <view class="msg-num"></view> -->
      </view>
    </view>
    <view class="msg-notification" @tap="openUrl(5)">
      <view class="notification-left">
        <image src="../../assets/images/msg/xiaoxi.png"></image>
      </view>
      <view class="notification-rt">
        <view class="notification-title">
          <text>消息通知</text>
          <text class="notification-time">昨天</text>
        </view>
        <view class="notification-txt">您有一条审核通知</view>
      </view>
    </view>
  </view>
</template>

<script>
import { openPage } from "../../utils/util";
import { notifyNumber } from "../../api/index";
import "./index.scss";
export default {
  name: "msg",
  data() {
    return {
      invite_cnt: 0,
      notice_cnt: 0,
      vote_visitor_cnt: 0,
    };
  },
  methods: {
    openUrl(type) {
      switch (type) {
        case 1:
          openPage("/packageMsg/pages/livevisitor/index");
          break;
        case 2:
          openPage("/packageMsg/pages/invite/index");
          break;
        case 3:
          openPage("/packageMsg/pages/signup/index");
          break;
        case 5:
          openPage("/packageMsg/pages/msgList/index");
          break;
      }
    },
    async notifyNumber(params) {
      try {
        let res = await notifyNumber(params);
        this.invite_cnt = res.data.data.invite_cnt;
        this.notice_cnt = res.data.data.notice_cnt;
        this.vote_visitor_cnt = res.data.data.vote_visitor_cnt;
        console.log(this.invite_cnt, "11");
        if (res.data.data.is_notify_warn) {
          wx.showTabBarRedDot({
            index: 3,
          });
        } else {
          wx.hideTabBarRedDot({
            index: 3,
          });
        }
      } catch (error) {}
    },
  },
  onShow() {
    this.notifyNumber("");
  },
};
</script>

<style lang="scss" scoped></style>
