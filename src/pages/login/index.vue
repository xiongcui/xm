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

export default {
  name: "login",
  data() {
    return {
      userInfo: {
        avatar: require("../../assets/images/avatar_default.png"),
        nickname: "xc",
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
        desc: "登录",
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
      console.log(e, "eee");
      let _this = this;
      let token = wx.getStorageSync("token");
      if (token) {
        if ("getPhoneNumber:ok" == e.detail.errMsg) {
          wx.checkSession({
            success() {
              //session_key 未过期，并且在本生命周期一直有效
              //这里进行请求服务端解密手机号
              console.log(1111);
              _this.getPhone({});
            },
            fail() {
              // session_key 已经失效，需要重新执行登录流程
              console.log(222);
              wx.login({
                success(res) {
                  _this.getWxLogin({
                    account: res.code,
                    avatar: res.userInfo.avatarUrl,
                    nickname: res.userInfo.nickName,
                    secret: "",
                    type: 200,
                  });
                },
                fail(err) {
                  console.log(err);
                },
              });
            },
          });
        }
      } else {
        console.log(3333);
        this.pageshow = "login";
      }
    },
    async getWxLogin(params) {
      try {
        let res = await wxlogin(params);
        console.log("成功！", res);
        const token = res.data.data.token;
        wx.setStorageSync("token", token);
        this.pageshow = "bindphone";
      } catch (error) {
        console.log("失败");
        // this.pageshow = "bindphone";
      }
    },
    async getPhone(params) {
      try {
        let res = await getPhone(params);
        console.log("成功！", res);
      } catch (error) {}
    },
  },
  created() {
    console.log(1111);
    console.log(this.pageshow, "pageshow");
  },
};
</script>

<style lang="scss" scoped></style>
