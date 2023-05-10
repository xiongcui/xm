<template>
  <view>
    <block class="login" v-if="pageshow == 'login'">
      <view class="login-top">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/logo.png"
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
        <view class="cancel-btn" @tap="cancelLogin">
          <text>取消登录</text>
        </view>
        <view class="login-tips">
          <text>登录即代表同意虾米约拍</text>
          <text class="user-xy">《用户协议》</text>
        </view>
      </view>
    </block>
    <block v-if="pageshow == 'bindphone'" class="user_phone">
      <!-- <view class="user_infor">
        <view class="user_avatar">
          <image mode="widthFix" :src="userInfo.avatar"></image>
        </view>
        <view class="user_name">{{ userInfo.nickname }}</view>
      </view> -->
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
    <view class="login-modal" v-if="visible">
      <view class="login-box">
        <view class="login-title"> 请先登录 </view>
        <view class="login-txt">完善以下信息以继续</view>
        <view class="login-info">
          <view class="phone" v-if="userInfo.phone"
            >手机号：{{ userInfo.phone }}</view
          >
          <view class="login-head">
            <button
              class="avatar-wrapper"
              open-type="chooseAvatar"
              @chooseavatar="onChooseAvatar"
            >
              <image class="avatar" :src="userInfo.avatar"></image>
            </button>
            <input
              type="nickname"
              class="weui-input"
              placeholder="请输入昵称"
              v-model="userInfo.nickname"
              @input="nicknameChange"
            />
          </view>
          <view class="get_phone" v-if="is_bind_phone == 0">
            <button
              @getphonenumber="onGetPhoneNumber"
              openType="getPhoneNumber"
              class="phone-btn"
            >
              授权绑定手机号
            </button>
          </view>
          <view class="get_avatar" v-else-if="is_bind_avatar == 0">
            <button
              class="avatar-btn"
              open-type="chooseAvatar"
              @chooseavatar="onChooseAvatar"
            >
              授权头像
            </button>
          </view>
          <view class="get_nickname" v-else-if="is_bind_nickname == 0">
            <view class="nickname-btn">授权昵称</view>
            <input
              type="nickname"
              class="nickname-input"
              v-model="userInfo.nickname"
              @input="nicknameChange"
            />
          </view>
          <view
            class="get_finish"
            v-if="
              is_bind_phone == 1 && is_bind_nickname == 1 && is_bind_avatar == 1
            "
            @tap="finishClick"
          >
            <view class="finish-btn">完成</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { wxlogin, getPhone, userRegister } from "../../api/index";
import { Base64 } from "js-Base64";
import { openPage } from "../../utils/util";

export default {
  name: "login",
  data() {
    return {
      invited_uuid: "",
      bind_type: 0,
      visible: false,
      is_bind_phone: 0,
      is_bind_nickname: 0,
      is_bind_avatar: 0,
      userInfo: {
        avatar:
          "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
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
        desc: "用于完善会员资料",
        success: (res) => {
          // this.userInfo.avatar = res.userInfo.avatarUrl;
          // this.userInfo.nickname = res.userInfo.nickName;
          wx.login({
            success(res) {
              _this.getWxLogin({
                // avatar: _this.userInfo.avatar,
                // nickname: _this.userInfo.nickname,
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
    cancelLogin() {
      wx.navigateBack({
        delta: 1,
      });
    },
    onChooseAvatar(e) {
      this.userInfo.avatar = e.detail.avatarUrl;
      this.is_bind_avatar = 1;
    },
    nicknameChange(e) {
      console.log(e);
      if (e.detail.value) {
        this.is_bind_nickname = 1;
      }
    },
    finishClick() {
      this.upImgs(this.userInfo.avatar);
    },
    upImgs(filePath) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: filePath,
        formData: {
          scr_type: "avatar",
        },
        name: "file",
        header,
        success: (res) => {
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.userRegister({
              invited_uuid: this.invited_uuid ? this.invited_uuid : "",
              avatar: data.data.file1,
              nickname: this.userInfo.nickname,
            });
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    async getWxLogin(params) {
      try {
        let res = await wxlogin(params);
        const token = res.data.data.token;
        wx.setStorageSync("token", token);
        wx.setStorageSync("userInfo", {
          avatar: res.data.data.login_status.avatar,
          nickname: res.data.data.login_status.nickname,
          uuid: res.data.data.uuid,
        });
        this.userInfo.avatar = res.data.data.login_status.avatar
          ? res.data.data.login_status.avatar
          : "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png";
        this.userInfo.nickname = res.data.data.login_status.nickname;
        this.bind_type = res.data.data.login_status.bind_type;
        this.is_bind_phone = res.data.data.login_status.is_bind_phone;
        this.is_bind_nickname = res.data.data.login_status.is_bind_nickname;
        this.is_bind_avatar = res.data.data.login_status.is_bind_avatar;
        if (res.data.data.login_status.login_type == 1) {
          // 绑定手机号
          this.visible = true;
        } else if (res.data.data.login_status.login_type == 2) {
          // 跳转首页
          wx.switchTab({
            url: "/pages/home/index",
            success: function (e) {
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onLoad();
            },
          });
        }
        // if (res.data.data.is_bind_phone == 0) {
        //   // 绑定手机号
        //   this.pageshow = "bindphone";
        // } else if (res.data.data.login_type == 2) {
        //   // 跳转首页
        //   wx.switchTab({
        //     url: "/pages/home/index",
        //     success: function (e) {
        //       var page = getCurrentPages().pop();
        //       if (page == undefined || page == null) return;
        //       page.onLoad();
        //     },
        //   });
        // } else {
        //   // 未注册
        //   openPage("/pages/register/index");
        // }
      } catch (error) {
        console.log("失败");
      }
    },
    async getPhone(params) {
      try {
        let res = await getPhone(params);
        this.userInfo.phone = res.data.data.mobile;
        this.is_bind_phone = 1;
        // openPage("/pages/register/index");
      } catch (error) {}
    },
    async userRegister(params) {
      try {
        let res = await userRegister(params);
        openPage("/pages/register/index");
      } catch (error) {}
    },
  },
  created() {
    this.invited_uuid = wx.getStorageSync("invited_uuid");
  },
};
</script>

<style lang="scss" scoped></style>
