<template>
  <view class="msg-box">
    <view class="msg-tips" v-if="is_follow_gzh == 0">
      <view class="msg-tips-left"> 开启推送通知，及时接收约拍通知 </view>
      <view class="msg-tips-rt" @tap="toopen"> 去开启 > </view>
    </view>
    <view class="msg-icon">
      <view class="msg-icon-item" @tap="openUrl(1)">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/msg/fabulous.png"
        ></image>
        <text>赞与访客</text>
        <view class="msg-num" v-if="vote_visitor_cnt > 0">{{
          vote_visitor_cnt
        }}</view>
      </view>
      <view class="msg-icon-item" @tap="openUrl(2)">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/msg/yuepai.png"
        ></image>
        <text>收到约拍</text>
        <view class="msg-num" v-if="invite_cnt > 0">{{ invite_cnt }}</view>
      </view>
      <view class="msg-icon-item" @tap="openUrl(3)">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/msg/baoming.png"
        ></image>
        <text>收到报名</text>
        <view class="msg-num" v-if="notice_cnt > 0">{{ notice_cnt }}</view>
      </view>
      <view class="msg-icon-item">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/msg/contact.png"
        ></image>
        <text>收到联系</text>
        <!-- <view class="msg-num"></view> -->
      </view>
    </view>
    <view class="msg-notification" @tap="openUrl(5)">
      <view class="notification-left">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/msg/xiaoxi.png"
        ></image>
      </view>
      <view class="notification-rt">
        <view class="notification-title">
          <text>消息通知</text>
          <text class="notification-time">{{ mailbox.create_time }}</text>
        </view>
        <view class="notification-txt">{{ mailbox.tips }}</view>
      </view>
      <view class="dian" v-if="mailbox_cnt >= 1"></view>
    </view>

    <view
      class="msg-notification"
      v-for="(item, index) in list"
      :key="index"
      @tap="gochat(item)"
    >
      <view class="notification-left">
        <image :src="item.from_account_profile.face_url"></image>
      </view>
      <view class="notification-rt">
        <view class="notification-title">
          <text>{{ item.from_account_profile.nick_name }}</text>
          <text class="notification-time">{{ item.msg_time_humanize }}</text>
        </view>
        <view class="notification-txt">{{ item.msg_content }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { openPage, isLogin, platformMap } from "../../utils/util";
import { notifyNumber, msgList } from "../../api/index";
import "./index.scss";
export default {
  name: "msg",
  data() {
    return {
      invite_cnt: 0,
      notice_cnt: 0,
      vote_visitor_cnt: 0,
      vote_cnt: 0,
      visitor_cnt: 0,
      is_follow_gzh: 0,
      list: [],
      mailbox: {
        tips: "",
        create_time: "",
      },
      mailbox_cnt: 0,
      platformMap: {},
    };
  },
  methods: {
    openUrl(type) {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      switch (type) {
        case 1:
          openPage(
            "/packageMsg/pages/livevisitor/index?vote_cnt=" +
              this.vote_cnt +
              "&visitor_cnt=" +
              this.visitor_cnt
          );
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
    toopen() {
      let name = this.platformMap[this.globalData.NODE_ENV];
      wx.showModal({
        title: "温馨提示",
        content:
          "微信关注【" +
          name +
          "】公众号，即可开启消息通知。关注还可获得5个金豆奖励哦",
        success: function (res) {
          if (res.confirm) {
            openPage("/packageAdd/pages/user/follow/index");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    gochat(row) {
      openPage(
        "/packageMsg/pages/chat/index?uuid=" +
          row.from_account_profile.uuid +
          "&nickname=" +
          row.from_account_profile.nick_name +
          "&avatar=" +
          row.from_account_profile.face_url
      );
    },
    async notifyNumber(params) {
      try {
        let res = await notifyNumber(params);
        this.invite_cnt = res.data.data.invite_cnt;
        this.notice_cnt = res.data.data.notice_cnt;
        this.vote_visitor_cnt = res.data.data.vote_visitor_cnt;
        this.vote_cnt = res.data.data.vote_cnt;
        this.visitor_cnt = res.data.data.visitor_cnt;
        this.is_follow_gzh = res.data.data.is_follow_gzh;
        this.mailbox = res.data.data.mailbox;
        this.mailbox_cnt = res.data.data.mailbox_cnt;
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
    async msgList(params) {
      try {
        let res = await msgList(params);
        console.log(res);
        this.list = res.data.data.items;
      } catch (error) {}
    },
  },
  onShow() {
    this.notifyNumber("");
    this.msgList("");
  },
  created() {
    this.globalData = this.globalData;
    this.platformMap = platformMap;
  },
};
</script>

<style lang="scss" scoped></style>
