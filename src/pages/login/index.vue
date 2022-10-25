<template>
  <view>
    <block class="login" v-if="pageshow == 'login'">
      <view class="login-top">
        <image
          src="../../assets/images/logo.png"
          mode="aspectFit"
          class="logo-img"
        ></image>
        <view class="desc">
          <text>虾米约拍 - 严肃靠谱模特约拍平台</text>
        </view>
        <view class="small-desc">
          <text>MODEL PHOTOGRAPH</text>
        </view>
      </view>
      <view class="login-bottom">
        <view class="login-btn" @tap="getUserProfile">
          <text>微信登录</text>
        </view>
        <view class="cancel-btn">
          <text>取消登录</text>
        </view>
        <view class="login-tips">
          <text>登录即代表同意虾米约拍</text>
          <text class="user-xy">《用户协议》</text>
        </view>
      </view>
    </block>
    <block v-if="pageshow == 'bindphone'" class="user_phone">
      <view class="user_infor">
        <view class="user_avatar">
          <image mode="widthFix" :src="userInfo.avatar"></image>
        </view>
        <view class="user_name">{{ userInfo.nickname }}</view>
      </view>
      <view class="get_phone">
        <button
          @getphonenumber="onGetPhoneNumber"
          openType="getPhoneNumber"
          class="phone-btn"
        >
          授权绑定手机号
        </button>
      </view>
    </block>
  </view>
</template>

<script>
import "./index.scss";
import { wxlogin, getPhone } from "../../api/index";
import { openPage } from "../../utils/util";

export default {
  name: "login",
  data() {
    return {
      userInfo: {
        avatar: require("../../assets/images/avatar_default.png"),
        nickname: "",
        phone: "",
      },
      pageshow: "login",
    };
  },
  methods: {
    // 可以在模拟器唤起授权 获得用户信息
    getUserProfile() {
      let _this = this;
      wx.getUserProfile({
        desc: "用于完善个人资料",
        success: (res) => {
          this.userInfo.avatar = res.userInfo.avatarUrl;
          this.userInfo.nickname = res.userInfo.nickName;
          wx.login({
            success(res) {
              _this.getWxLogin({
                avatar: _this.userInfo.avatar,
                nickname: _this.userInfo.nickname,
                account: res.code,
                secret: "",
                type: 200,
              });
            },
            fail(err) {
              console.log(err);
            },
          });
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
    onGetPhoneNumber(e) {
      let _this = this;
      let token = wx.getStorageSync("token");
      if (token) {
        if ("getPhoneNumber:ok" == e.detail.errMsg) {
          wx.login({
            success(res) {
              _this.getPhone({
                code: res.code,
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv,
              });
            },
            fail(err) {
              console.log(err);
            },
          });
        }
      } else {
        this.pageshow = "login";
      }
    },
    async getWxLogin(params) {
      try {
        let res = await wxlogin(params);
        const token = res.data.data.token;
        wx.setStorageSync("token", token);
        wx.setStorageSync("userInfo", {
          avatar: params.avatar,
          nickname: params.nickname,
        });
        if (res.data.data.login_type == 1 && res.data.data.is_bind_phone == 0) {
          this.pageshow = "bindphone";
        } else if (
          res.data.data.login_type == 2 &&
          res.data.data.is_bind_phone == 1
        ) {
          // 跳转首页
          wx.switchTab({
            url: "/pages/home/index",
          });
        } else {
          // 未注册
          openPage("/pages/register/index");
        }
      } catch (error) {
        console.log("失败");
      }
    },
    async getPhone(params) {
      try {
        let res = await getPhone(params);
        openPage("/pages/register/index");
      } catch (error) {}
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
