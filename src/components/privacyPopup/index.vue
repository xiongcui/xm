<template>
  <view class="privacy-popup" v-if="innerShow">
    <view class="privacy-popup-content">
      <view class="privacy-popup-title"> 用户隐私保护指引 </view>
      <view class="privacy-popup-text">
        <view>尊敬的用户:</view>
        <view
          >感谢您信任并使用虾米约拍，为保障您的合法权益，我们高度重视个人隐私信息保护，为此我们依据相关法律制定了<text
            class="privacy-popup-color"
            @tap="openPrivacyContract"
            >《隐私保护指引》</text
          >，请您在点击同意之前仔细阅读并充分理解相关条款。</view
        >
      </view>
      <button
        class="privacy-popup-agree"
        openType="agreePrivacyAuthorization"
        @agreeprivacyauthorization="handleAgree"
        @tap="handleAgree"
      >
        同意并继续
      </button>
      <view class="privacy-popup-noagree" @tap="handleDisagree">不同意</view>
    </view>
  </view>
</template>

<script>
import { errortip } from "../../utils/util";
import "./index.scss";
export default {
  name: "privacyPopup",
  data() {
    return {
      innerShow: false,
    };
  },
  methods: {
    popUp() {
      this.innerShow = true;
    },
    disPopUp() {
      this.innerShow = false;
    },
    agree() {
      console.log("用户同意隐私授权, 接下来可以调用隐私协议中声明的隐私接口");
      //   wx.getClipboardData({
      //     success(res) {
      //       console.log("getClipboardData success", res);
      //     },
      //     fail(res) {
      //       console.log("getClipboardData fail", res);
      //     },
      //   });
    },
    handleDisagree() {
      this.disagree();
    },
    handleAgree() {
      this.agree();
      this.disPopUp();
    },
    disagree() {
      console.log("用户拒绝隐私授权, 未同意过的隐私协议中的接口将不能调用");
      errortip("如您不同意隐私保护指引将无法使用相关服务");
    },
    openPrivacyContract() {
      wx.openPrivacyContract({
        success: (res) => {
          console.log("openPrivacyContract success");
        },
        fail: (res) => {
          console.error("openPrivacyContract fail", res);
        },
      });
    },
  },
  mounted() {
    if (wx.getPrivacySetting) {
      //   errortip("有wx.getPrivacySetting接口");
      wx.getPrivacySetting({
        success: (res) => {
          console.log(
            "是否需要授权：",
            res.needAuthorization,
            "隐私协议的名称为：",
            res.privacyContractName
          );
          let str =
            "是否需要授权：" +
            res.needAuthorization +
            "隐私协议的名称为：" +
            res.privacyContractName;
          //   errortip(str);
          if (res.needAuthorization) {
            this.popUp();
          } else {
            this.agree();
          }
        },
        fail: () => {},
        complete: () => {},
      });
    } else {
      // 低版本基础库不支持 wx.getPrivacySetting 接口，隐私接口可以直接调用
      //   errortip("低版本基础库不支持 wx.getPrivacySetting 接口");
      this.agree();
    }
  },
};
</script>

<style lang="scss" scoped></style>
