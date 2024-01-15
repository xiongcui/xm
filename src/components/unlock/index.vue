<template>
  <view>
    <view class="unlock" v-if="unlockVisble" @tap="close">
      <view class="unlock-modal">
        <view class="unlock-box">
          <view class="close-img">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png"
              @tap.stop="close"
            ></image>
          </view>
          <view class="unlock-item" @tap.stop="unlockClick('wechat')">
            <view class="unlock-img-box">
              <image src="../../assets/images/wechat-white.png"></image>
            </view>
            <view class="unlock-info">
              <view class="unlock-title">解锁微信</view>
              <view class="unlock-txt">获取对方微信直接进行沟通</view>
            </view>
          </view>
          <view
            class="unlock-item unlock-item-phone"
            @tap.stop="unlockClick('mobile')"
          >
            <view class="unlock-img-box unlock-img-phone-box">
              <image src="../../assets/images/phone-white.png"></image>
            </view>
            <view class="unlock-info">
              <view class="unlock-title">解锁手机</view>
              <view class="unlock-txt">获取对方手机直接进行沟通</view>
            </view>
          </view>
          <view class="unlock-tips">
            提示：联系对方时，注明来自“{{
              platformMap[globalData.NODE_ENV]
            }}”，请勿骚扰对方
          </view>
        </view>
      </view>
    </view>
    <view class="unlock" v-if="unlockSuccessVisible" @tap="closeSuccess">
      <view class="unlock-modal">
        <view class="unlock-success-box">
          <view class="unlock-success-title">
            解锁成功
            <view class="close-img">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png"
                @tap.stop="closeSuccess"
              ></image> </view
          ></view>
          <view class="unlock-success-item" v-if="mobile">
            <view class="unlock-success-left">
              <text class="unlock-label">手机号：</text>
              <text class="unlock-txt">{{ mobile }}</text>
            </view>
            <view class="unlock-success-rt" @tap.stop="copy(mobile)">
              复制
            </view>
          </view>
          <view class="unlock-success-item" v-if="wechat">
            <view class="unlock-success-left">
              <text class="unlock-label">微信号：</text>
              <text class="unlock-txt">{{ wechat }}</text>
            </view>
            <view class="unlock-success-rt" @tap.stop="copy(wechat)">
              复制
            </view>
          </view>
          <view class="unlock-success-item" v-if="wechatCode">
            <view class="unlock-success-left">
              <text class="unlock-label">微信二维码：</text>
              <image :src="wechatCode"></image>
            </view>
            <view class="unlock-success-rt" @tap.stop="clickSaveImg">
              保存
            </view>
          </view>
          <view class="unlock-tips">
            提示：联系对方时，注明来自“虾米约拍”，请勿骚扰对方
          </view>
        </view>
      </view>
    </view>
    <view class="unlock" v-if="unlockFailVisible" @tap="closeFail">
      <view class="unlock-modal">
        <view class="unlock-fail-box">
          <view class="unlock-fail-title">
            解锁失败
            <view class="close-img">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png"
                @tap.stop="closeFail"
              ></image> </view
          ></view>
          <view class="unlock-fail-tips"> 解锁失败，重写解锁 </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { unlockCommit, unlockPayment } from "../../api/index";
import { openPage, platformMap } from "../../utils/util";
export default {
  name: "unlock",
  data() {
    return {
      unlockVisble: true,
      unlockSuccessVisible: false,
      unlockFailVisible: false,
      unlock_uuid: "",
      apply_oid: "",
      mobile: "",
      wechat: "",
      wechatCode: "",
      platformMap: {},
    };
  },
  props: {
    uuid: {
      type: String,
      default: "",
    },
  },
  watch: {
    uuid: {
      handler(newVal, oldVal) {
        this.unlock_uuid = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    close() {
      this.$emit("unlockClose");
    },
    closeSuccess() {
      this.unlockVisble = true;
      this.unlockSuccessVisible = false;
      this.unlockFailVisible = false;
    },
    closeFail() {
      this.unlockVisble = true;
      this.unlockSuccessVisible = false;
      this.unlockFailVisible = false;
    },
    copy(txt) {
      wx.setClipboardData({
        data: txt, //这个是要复制的数据
        success(res) {
          wx.getClipboardData({
            success(res) {
              console.log(res.data); // data
              if (res.data) {
                errortip("复制成功");
              }
            },
          });
        },
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
      let url = this.wechatCode;
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
    unlockClick(type) {
      this.unlockCommit({
        unlock_uuid: this.unlock_uuid,
        apply_type: type,
      });
    },
    unlockDiolog() {
      let _this = this;
      wx.showModal({
        title: "确认解锁",
        content:
          "为保护信息被滥用，解锁需支付金币，本次支付【" +
          this.coin +
          "】金币解锁",
        cancelText: "再考虑下",
        confirmText: "确认支付",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
            _this.unlockPayment({
              apply_oid: _this.apply_oid,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    async unlockCommit(params) {
      try {
        let res = await unlockCommit(params);
        if (res.data.data.status == "paid") {
          this.unlockVisble = false;
          this.unlockSuccessVisible = true;
          this.unlockFailVisible = false;
          this.mobile = res.data.data.body.content.mobile;
          this.wechat = res.data.data.body.content.wechat_act;
          this.wechatCode = res.data.data.body.content.wechat_qrc;
        } else {
          this.apply_oid = res.data.data.body.apply_oid;
          this.coin = res.data.data.body.coin;
          this.unlockDiolog();
        }
      } catch (error) {
        if (
          error.data.error_code == 21050 ||
          error.data.error_code == 21040 ||
          error.data.error_code == 21030
        ) {
          openPage(
            `/packageAdd/pages/guideTips/index?msg=${error.data.msg}&code=${error.data.error_code}`
          );
        }
      }
    },
    async unlockPayment(params) {
      try {
        let res = await unlockPayment(params);
        this.unlockVisble = false;
        this.unlockSuccessVisible = true;
        this.unlockFailVisible = false;
        this.mobile = res.data.data.content.mobile;
        this.wechat = res.data.data.content.wechat_act;
        this.wechatCode = res.data.data.content.wechat_qrc;
      } catch (error) {
        this.unlockVisble = false;
        this.unlockSuccessVisible = false;
        this.unlockFailVisible = true;
      }
    },
  },
  created() {
    this.globalData = this.globalData;
    this.platformMap = platformMap;
  },
};
</script>

<style lang="scss" scoped></style>
