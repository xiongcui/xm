<template>
  <view class="publicize">
    <view class="publicize-top">
      <view class="publicize-bg">
        <view class="publicize-title">找约拍 找活动 约摄影 约模特</view>
        <view class="publicize-subtitle">让影像创作更有趣</view>
      </view>
      <view class="publicize-info">
        <view class="publicize-info-box">
          <view class="publicize-info-left">
            <view class="publicize-avatar">
              <image :src="avatar"></image>
              <view class="publicize-avatar-info">
                <view class="publicize-nickname"> {{ nickname }} </view>
                <view class="publicize-secure">{{ organ }}</view>
              </view>
            </view>
            <view class="publicize-tips">
              <view>添加右侧客服微信</view>
              <view>邀您加入约拍摄影社群</view>
            </view>
          </view>
          <view class="publicize-info-rt">
            <image :src="qrcode" :show-menu-by-longpress="true"></image>
          </view>
        </view>
        <view class="qrcode-tips">长按识别二维码，添加客服联系方式</view>
        <view class="group-num"
          >最近已有 <text class="red">{{ headcount }}</text> 人添加入社群</view
        >
        <view class="group-list">
          <view
            class="group-style"
            :class="index == 1 ? 'opcity1' : index != 0 ? 'opcity2' : ''"
            v-for="(item, index) in userList"
            :key="index"
            >{{ item }}</view
          >
        </view>
      </view>
    </view>
    <view class="publicize-ct">
      <view class="exchange-title">加入交流社群，遇见更多同伴</view>
      <view class="exchange-list">
        <view class="exchange-box" v-for="(item, index) in list" :key="index">
          <image :src="item.cover"></image>
          <view class="exchange-subtitle">{{ item.title }}</view>
          <view class="exchange-desc">{{ item.summary }}</view>
          <view class="addgroup" @tap="addGroup(item.oid, item.amount)"
            >加群</view
          >
        </view>
      </view>
    </view>
    <view class="publicize-fixed" @tap="goHome">
      <view
        class="publicize-fixed-btn"
        :class="isIphoneX ? 'fix-iphonex-button2' : ''"
        >解锁更多功能</view
      >
    </view>
    <view class="publicize-modal" v-if="visible" @tap="close">
      <view class="publicize-content">
        <view class="join-title"> 邀您入群 </view>
        <view class="join-tips">请添加客群微信邀您入群</view>
        <image
          class="join-img"
          :show-menu-by-longpress="true"
          :src="joinQrcode"
        ></image>
        <view class="join-tips2"
          >添加客服后回复<text class="red">{{ reply }}</text
          >即可邀您入群</view
        >
        <view class="join-name">{{ joinTitle }}</view>
        <view class="publicize-btns">
          <view class="publicize-close" @tap.stop="close">关闭</view>
          <view class="publicize-save" @tap.stop="saveImg">保存</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import {
  posterInfo,
  socialResult,
  socialCheck,
  socialPay,
  shareInvite,
  shareInviteInfo,
} from "../../../api/index.js";
import { isLogin, openPage } from "../../../utils/util";
import clickThrottle from "../../../utils/clickThrottle";
export default {
  name: "publicize",
  data() {
    return {
      isIphoneX: false,
      visible: false,
      avatar: "",
      guidance: "",
      nickname: "",
      organ: "",
      qrcode: "",
      list: [],
      reply: "",
      joinQrcode: "",
      joinTitle: "",
      headcount: "",
      userList: [],
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      shareFriendsTitle: "",
      shareFriendsImg: "",
      shareFriendsPath: "",
      amount: 0,
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
    goHome() {
      wx.switchTab({
        url: "/pages/home/index",
        success: function (e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          // page.onLoad();
        },
      });
    },
    addGroup(oid, amount) {
      if (!clickThrottle()) return;
      if (isLogin()) {
        this.socialCheck(
          {
            crowd_oid: oid,
          },
          amount
        );
      } else {
        openPage("/pages/login/index?from=publicize");
      }
    },
    saveImg() {
      //保存到相册
      let url = this.joinQrcode;
      wx.downloadFile({
        //这里如果有报错就按照上边的解决方案来处理
        url: url,
        success: (res) => {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: (res) => {
              wx.showToast({
                title: "保存成功！",
              });
            },
            faile: (err) => {
              console.log("失败！");
            },
          });
        },
      });
    },
    async posterInfo(params) {
      try {
        let res = await posterInfo(params);
        this.avatar = res.data.data.contact.avatar;
        this.guidance = res.data.data.contact.guidance;
        this.nickname = res.data.data.contact.nickname;
        this.organ = res.data.data.contact.organ;
        this.qrcode = res.data.data.contact.qrcode;
        this.list = res.data.data.crowd;
        this.userList = res.data.data.guidance.user_list;
        this.headcount = res.data.data.guidance.headcount;
      } catch (error) {}
    },
    async socialCheck(params, amount) {
      try {
        let res = await socialCheck(params);
        let data = res.data.data;
        let _this = this;
        if (!data) {
          wx.showModal({
            title: "温馨提示",
            content: `为防止频繁恶意加群，入群需支付${amount}元门槛费，还请你理解`,
            cancelText: "暂时放弃",
            confirmText: "我要加群",
            success: function (res) {
              if (res.confirm) {
                console.log("用户点击确定");
                _this.socialPay({
                  crowd_oid: params.crowd_oid,
                });
              } else if (res.cancel) {
                console.log("用户点击取消");
              }
            },
          });
        } else {
          this.visible = true;
          this.reply = res.data.data.reply;
          this.joinQrcode = res.data.data.qrcode;
          this.joinTitle = res.data.data.title;
        }
      } catch (error) {}
    },
    async socialResult(params) {
      try {
        let res = await socialResult(params);
        this.visible = true;
        this.reply = res.data.data.reply;
        this.joinQrcode = res.data.data.qrcode;
        this.joinTitle = res.data.data.title;
      } catch (error) {}
    },
    async socialPay(params) {
      try {
        let res = await socialPay(params);
        let data = res.data.data;
        let _this = this;
        wx.requestPayment({
          timeStamp: data.result.timeStamp,
          nonceStr: data.result.nonceStr,
          package: data.result.package,
          signType: data.result.signType,
          paySign: data.result.paySign,
          success: function (res) {
            console.log(res, "成功了");
            _this.socialResult({
              crowd_oid: params.crowd_oid,
            });
          },
          fail: function (res) {},
          complete: function (res) {},
        });
      } catch (error) {}
    },
    async shareInvite(params) {
      try {
        let res = await shareInvite(params);
      } catch (error) {}
    },
    async shareInviteInfo(params) {
      try {
        let res = await shareInviteInfo(params);
        this.shareTitle = res.data.data.title;
        this.shareImg = res.data.data.imageUrl;
        this.sharePath = res.data.data.path;
      } catch (error) {}
    },
    async shareFriendsInvite(params) {
      try {
        let res = await shareInvite(params);
      } catch (error) {}
    },
    async shareFriendsInviteInfo(params) {
      try {
        let res = await shareInviteInfo(params);
        this.shareFriendsTitle = res.data.data.title;
        this.shareFriendsImg = res.data.data.imageUrl;
        this.shareFriendsPath = res.data.data.path;
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  mounted() {
    this.posterInfo("");
    this.shareInviteInfo({
      source: "share_details",
      project: "social",
    });
    this.shareFriendsInviteInfo({
      source: "friends_circle",
      project: "social",
    });
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      project: "social",
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onShareTimeline() {
    this.shareFriendsInvite({
      source: "friends_circle",
      project: "social",
    });
    return {
      title: this.shareFriendsTitle,
      imageUrl: this.shareFriendsImg,
      path: this.shareFriendsPath, // 路径，传递参数到指定页面。
    };
  },
};
</script>

<style lang="scss" scoped></style>
