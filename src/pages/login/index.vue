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
          <image
            class="select"
            src="https://yuepai-oss.qubeitech.com/static/images/common/select2_1.png"
            v-if="select"
            @tap="selectChange"
          ></image>
          <image
            v-else
            class="select"
            src="https://yuepai-oss.qubeitech.com/static/images/common/select2_0.png"
            @tap="selectChange"
          ></image>
          <text>我已阅读并同意</text>
          <text class="user-xy" @tap="userAgreement">《用户协议》</text>
          和
          <text class="user-xy" @tap="privacy">《隐私权政策》</text>
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
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/icon_sizer_close.png"
          class="icon_close"
          @tap="close"
        ></image>
        <view class="login-txt">完善以下信息以继续</view>
        <view class="login-info">
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
          <view class="get_phone" v-if="is_bind_phone == 0" :key="1">
            <button
              @getphonenumber="onGetPhoneNumber"
              openType="getPhoneNumber"
              class="phone-btn"
            >
              授权绑定手机号
            </button>
          </view>
          <view class="get_avatar" v-else-if="is_bind_avatar == 0" :key="2">
            <button
              class="avatar-btn"
              open-type="chooseAvatar"
              @chooseavatar="onChooseAvatar"
            >
              授权头像
            </button>
          </view>
          <view class="get_nickname" v-else-if="is_bind_nickname == 0" :key="3">
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
    <view class="agreement-model" @tap="agreementClose" v-if="agreementVisible">
      <view class="agreement-box">
        <view class="agreement-title">请阅读并同意以下条款</view>
        <view class="agreement-ct">
          <text class="user-xy" @tap.stop="userAgreement">《用户协议》</text>
          <text class="user-xy" @tap.stop="privacy">《隐私权政策》</text>
        </view>
        <view class="agreement-btn" @tap="agreementAgree">同意并继续</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { wxlogin, getPhone, userRegister } from "../../api/index";
import { Base64 } from "js-Base64";
import { errortip, openPage } from "../../utils/util";
import clickThrottle from "../../utils/clickThrottle";

export default {
  name: "login",
  data() {
    return {
      invited_uuid: "",
      bind_type: 0,
      login_type: 0,
      select: false,
      agreementVisible: false,
      visible: false,
      is_bind_phone: 0,
      is_bind_nickname: 0,
      is_bind_avatar: 0,
      token: "",
      userinfor: {},
      userInfo: {
        avatar:
          "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
        nickname: "",
        phone: "",
      },
      pageshow: "login",
      scene: "",
    };
  },
  methods: {
    selectChange() {
      this.select = !this.select;
    },
    agreementClose() {
      this.agreementVisible = false;
    },
    agreementAgree() {
      this.agreementVisible = false;
      this.select = true;
      this.getUserProfile();
    },
    close() {
      this.visible = false;
    },
    // 可以在模拟器唤起授权 获得用户信息
    getUserProfile() {
      if (!this.select) {
        this.agreementVisible = true;
        return false;
      }
      let _this = this;
      wx.getUserProfile({
        desc: "用于完善会员资料",
        success: (res) => {
          wx.login({
            success(res) {
              _this.getWxLogin({
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
    },
    cancelLogin() {
      wx.navigateBack({
        delta: 1,
      });
    },
    onChooseAvatar(e) {
      console.log(e);
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
      if (!clickThrottle()) return;
      wx.showLoading({
        title: "保存中",
        mask: true,
      });
      this.upImgs(this.userInfo.avatar);
    },
    userAgreement() {
      openPage("/packageSet/pages/serviceAgreement/index");
    },
    privacy() {
      openPage("/packageSet/pages/privacy/index");
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
            let params = {
              avatar: data.data.file1,
              nickname: this.userInfo.nickname,
              scene: this.scene,
            };
            if (this.invited_uuid) {
              params.invited_uuid = this.invited_uuid;
            }
            this.userRegister(params);
          } else {
            if (data.error_code == 1004) {
              this.getUserProfile();
            }
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
        this.token = token;
        this.userinfor = {
          avatar: res.data.data.login_status.avatar,
          nickname: res.data.data.login_status.nickname,
          uuid: res.data.data.uuid,
        };
        if (res.data.data.login_status.is_bind_phone == 1) {
          wx.setStorageSync("token", this.token);
          wx.setStorageSync("userInfo", this.userinfor);
        }
        this.userInfo.avatar = res.data.data.login_status.avatar
          ? res.data.data.login_status.avatar
          : "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png";
        this.userInfo.nickname = res.data.data.login_status.nickname;
        this.bind_type = res.data.data.login_status.bind_type;
        this.login_type = res.data.data.login_status.login_type;
        this.is_bind_phone = res.data.data.login_status.is_bind_phone;
        this.is_bind_nickname = res.data.data.login_status.is_bind_nickname;
        this.is_bind_avatar = res.data.data.login_status.is_bind_avatar;
        if (
          (this.bind_type == 0 && this.is_bind_phone == 0) ||
          (this.bind_type == 0 && this.is_bind_phone == 1)
        ) {
          // 绑定手机号
          this.visible = true;
        } else if (this.bind_type == 1 && this.login_type == 1) {
          // 注册
          openPage("/pages/register/index");
        } else if (this.bind_type == 1 && this.login_type == 2) {
          // 跳转首页
          wx.switchTab({
            url: "/pages/home/index",
            success: function (e) {
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              // page.onLoad();
            },
          });
        }
      } catch (error) {
        console.log("失败");
      }
    },
    async getPhone(params) {
      try {
        let res = await getPhone(params);
        this.userInfo.phone = res.data.data.mobile;
        this.is_bind_phone = 1;
        errortip(res.data.msg);
        wx.setStorageSync("token", this.token);
        wx.setStorageSync("userInfo", this.userinfor);
      } catch (error) {}
    },
    async userRegister(params) {
      try {
        let res = await userRegister(params);
        wx.hideLoading();
        let userInfo = wx.getStorageSync("userInfo");
        userInfo.avatar = params.avatar;
        userInfo.nickname = params.nickname;
        wx.setStorageSync("userInfo", userInfo);
        console.log(this.bind_type, this.login_type);
        if (this.login_type == 1) {
          openPage("/pages/register/index");
        } else {
          // 跳转首页
          wx.switchTab({
            url: "/pages/home/index",
            success: function (e) {
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              // page.onLoad();
            },
          });
        }
      } catch (error) {}
    },
  },
  created() {
    this.invited_uuid = wx.getStorageSync("invited_uuid");
    this.scene = wx.getLaunchOptionsSync().scene;
  },
};
</script>

<style lang="scss" scoped></style>
