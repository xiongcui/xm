<template>
  <view class="makesuccess">
    <view class="main">
      <view class="hint">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/success.png"
        ></image>
        <text class="hint-text">制作完成！</text>
      </view>
      <image
        @tap="previewImage"
        class="card"
        mode="widthFix"
        :src="imageSrc"
        :style="{ width: isVertical ? 380 + 'rpx' : 650 + 'rpx' }"
      ></image>
      <view @tap="save" class="save">保存手机相册</view>
      <view @tap="myMoka" class="mymoka">查看我的模卡</view>
    </view>
    <view class="modal_box_bg" v-if="openSet" @tap="close">
      <view class="tip_set">
        <view class="tip_set_tittle"> 温馨提示 </view>
        <view class="tip_set_content"> 保存到相册已关闭授权，请先授权 </view>
        <button
          @opensetting="handleSetting"
          class="openSetting"
          openType="openSetting"
          type="primary"
        >
          去授权
        </button>
      </view>
    </view>
  </view>
</template>

<script>
import { openPage } from "../../../../utils/util";
import "./index.scss";
export default {
  name: "makesuccess",
  data() {
    return {
      showloadingmore: false,
      pageloading: true,
      loadingmore: true,
      isloading: false,
      isposting: false,
      pageshow: "",
      imageSrc: "",
      openSet: false,
      isVertical: false,
      has_qrcode: 1,
      issave: false,
      goIndex: false,
      uploadData: {},
    };
  },
  methods: {
    previewImage() {},
    handleSetting(e) {
      if (e.detail.authSetting["scope.writePhotosAlbum"]) {
        this.openSet = false;
        this.savaImageToPhoto();
      } else {
        wx.showModal({
          title: "警告",
          content: "若不打开授权，则无法将图片保存在相册中！",
          showCancel: false,
        });
      }
    },
    myMoka() {
      openPage("/packageMoka/pages/moka/myModelCardlist/index");
    },
    save() {
      let _this = this;
      wx.getSetting({
        success: function (t) {
          t.authSetting["scope.writePhotosAlbum"]
            ? _this.savaImageToPhoto()
            : wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: function () {
                  _this.savaImageToPhoto();
                },
                fail: function () {
                  _this.openSet = true;
                },
              });
        },
      });
    },
    close() {
      this.openSet = false;
    },
    savaImageToPhoto() {
      wx.showLoading({
        title: "保存中...",
      });
      wx.downloadFile({
        url: this.imageSrc,
        success: function (res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: (res) => {
              wx.hideLoading();
              wx.showToast({
                title: "已保存至相册",
                icon: "success",
                duration: 3000,
              });
            },
            faile: (err) => {
              console.log("失败！");
            },
          });
        },
      });
    },
  },
  onLoad: function (options) {
    this.imageSrc = wx.getStorageSync("successImgSrc");
    this.isVertical = options.isVertical;
    this.has_qrcode = options.has_qrcode;
  },
};
</script>

<style lang="scss" scoped></style>
