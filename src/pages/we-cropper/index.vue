<template>
  <view class="cropper-wrapper">
    <canvas
      class="cropper"
      :disable-scroll="true"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      :style="[
        { width: cropperOpt.width + 'px' },
        { height: cropperOpt.height + 'px' },
        { 'background-color': 'rgba(0, 0, 0, 0.8)' },
      ]"
      canvas-id="cropper"
    >
    </canvas>
    <canvas
      class="cropper"
      :disable-scroll="true"
      :style="[
        { position: 'fixed' },
        { top: -cropperOpt.width * cropperOpt.pixelRatio + 'px' },
        { left: -cropperOpt.height * cropperOpt.pixelRatio + 'px' },
        { width: cropperOpt.width * cropperOpt.pixelRatio + 'px' },
        { height: cropperOpt.height * cropperOpt.pixelRatio + 'px' },
      ]"
      canvas-id="targetCropper"
    >
    </canvas>
    <view class="cropper-buttons">
      <view class="upload" @tap="uploadTap"> 上传图片 </view>
      <view class="getCropperImage" @tap="getCropperImage"> 生成图片 </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import WeCropper from "we-cropper";
const device = wx.getSystemInfoSync(); // 获取设备信息
console.log(device);
const width = device.windowWidth; // 示例为一个与屏幕等宽的正方形裁剪框
const height = device.windowHeight;
export default {
  name: "weCropper",
  data() {
    return {
      cropper: null,
      cropperOpt: {
        id: "cropper", // 用于手势操作的canvas组件标识符
        targetId: "targetCropper", // 用于用于生成截图的canvas组件标识符
        pixelRatio: device.pixelRatio, // 传入设备像素比
        width, // 画布宽度
        height, // 画布高度
        scale: 2.5, // 最大缩放倍数
        zoom: 8, // 缩放系数
        cut: {
          x: (width - 200) / 2, // 裁剪框x轴起点
          y: (height - 200) / 2, // 裁剪框y轴期起点
          width: 200, // 裁剪框宽度
          height: 200, // 裁剪框高度
        },
      },
    };
  },
  methods: {
    touchStart(e) {
      this.cropper.touchStart(e);
    },
    touchMove(e) {
      this.cropper.touchMove(e);
    },
    touchEnd(e) {
      this.cropper.touchEnd(e);
    },
    //当点击生成图片按钮的时候，得到图片的src后，调用wx.uploadFile()上传图片，成功后可以再跳转到想要去的页面
    getCropperImage() {
      this.cropper
        .getCropperImage()
        .then((src) => {
          console.log(src);
          wx.uploadFile({
            url: "http://t.kan.cn/roune/auth_api/uploadimage?uid=198", //这里是上传的服务器地址
            filePath: src,
            name: "avatar",
            success: function (res) {
              console.log(res);
              console.log("uploadOK");
              // wx.redirectTo({
              //     ...........
              // })
            },
          });
        })
        .catch((err) => {
          wx.showModal({
            title: "温馨提示",
            content: err.message,
          });
        });
    },
    uploadTap() {
      const self = this;

      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success(res) {
          const src = res.tempFilePaths[0];

          self.cropper.pushOrign(src);
        },
      });
    },
  },
  mounted() {
    this.cropper = new WeCropper(this.cropperOpt)
      .on("ready", (ctx) => {
        console.log(`wecropper is ready for work!`);
      })
      .on("beforeImageLoad", (ctx) => {
        wx.showToast({
          title: "上传中",
          icon: "loading",
          duration: 20000,
        });
      })
      .on("imageLoad", (ctx) => {
        wx.hideToast();
      });
  },
};
</script>

<style lang="scss" scoped></style>
