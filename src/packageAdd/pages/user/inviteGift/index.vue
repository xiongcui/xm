<template>
  <view class="invite-gift">
    <image
      class="invite-img"
      src="https://yuepai-oss.qubeitech.com/static/banner/invite_friends_poster.png"
      mode="widthFix"
    ></image>
    <view
      class="invite-gift-fixed"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <view class="invite-gift-txt"
        >已累计邀请{{ user_cnt }}人，获得{{ reward_amount }}元现金，获得{{
          reward_coin
        }}个金币</view
      >
      <view class="detail-btn" @tap="goInviteDetail">查看邀请明细</view>
      <view class="invite-friends" @tap="invite">立即邀请好友</view>
    </view>
    <view class="invite-mask" v-if="visible">
      <view class="mask-box">
        <view class="mask-title">
          <view class="close" @tap="close"></view>
        </view>
        <view class="mask-ct">
          <view class="mask-item">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/wchat.png"
              mode="aspectFill"
            ></image>
            <button open-type="share" class="share-btn">
              <view class="mask-rt">
                <view class="mask-share">分享微信</view>
                <view class="mask-share-p">分享到群聊或微信好友</view>
              </view>
            </button>
          </view>
          <view class="mask-item" @tap="generatePoster">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/tupian.png"
              mode="aspectFill"
            ></image>
            <view class="mask-rt">
              <view class="mask-share">生成海报</view>
              <view class="mask-share-p">生成含有推广码的宣传海报</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="invite-mask" v-if="imgVisible" @tap="imgClose">
      <view class="mask-img-box">
        <image :src="imageUrl" mode="heightFix" class="mask-img"></image>
        <view class="mask-save" @tap="clickSaveImg">保存到相册</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import {
  inviteImage,
  shareInvite,
  shareInviteInfo,
  inviteFriendsList,
} from "../../../../api/index";
import { openPage } from "../../../../utils/util";
export default {
  name: "inviteGift",
  data() {
    return {
      visible: false,
      imgVisible: false,
      imageUrl: "",
      isIphoneX: false,
      imageUrl: "",
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      list: [],
      user_cnt: 0,
      reward_coin: 0,
      reward_amount: 0,
    };
  },
  methods: {
    invite() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    imgClose() {
      this.imgVisible = false;
    },
    generatePoster() {
      this.inviteImage({
        source: "share_friend",
        type: "poster",
      });
    },
    clickSaveImg() {
      //先授权相册
      wx.getSetting({
        success: (res) => {
          if (!res.authSetting["scope.writePhotosAlbum"]) {
            //未授权的话发起授权
            wx.authorize({
              scope: "scope.writePhotosAlbum",
              success: () => {
                //用户允许授权，保存到相册
                this.saveImg();
              },
              fail: () => {
                //用户拒绝授权，然后就引导授权（这里的话如果用户拒绝，不会立马弹出引导授权界面，坑就是上边所说的官网原因）
                wx.openSetting({
                  success: () => {
                    wx.authorize({
                      scope: "scope.writePhotosAlbum",
                      succes: () => {
                        //授权成功，保存图片
                        this.saveImg();
                      },
                    });
                  },
                });
              },
            });
          } else {
            //已经授权
            this.saveImg();
          }
        },
      });
    },
    saveImg() {
      //保存到相册
      let url = this.imageUrl;
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
    goInviteDetail() {
      openPage("/packageAdd/pages/user/invite/index");
    },
    async inviteImage(params) {
      try {
        let res = await inviteImage(params);
        this.visible = false;
        this.imgVisible = true;
        this.imageUrl = res.data.data;
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
    async inviteFriendsList(params) {
      try {
        let res = await inviteFriendsList(params);
        this.reward_amount = res.data.data.stats.reward_amount;
        this.reward_coin = res.data.data.stats.reward_coin;
        this.user_cnt = res.data.data.stats.user_cnt;
      } catch (error) {}
    },
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_friend",
      type: "wechat",
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onShareTimeline() {
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  mounted() {
    this.inviteFriendsList("");
    this.shareInviteInfo({
      source: "share_friend",
      type: "wechat",
    });
  },
};
</script>

<style lang="scss" scoped></style>
