<template>
  <view>
    <view class="wx-content-info">
      <view class="cropper-content">
        <canvas
          class="cropper"
          :disable-scroll="true"
          @touchstart="touchStart"
          @touchmove="touchMove"
          @touchend="touchEnd"
          :style="[
            { width: cropperOpt.width + 'px' },
            { height: cropperOpt.height + 'px' },
          ]"
          canvas-id="cropper"
        >
        </canvas>
      </view>
      <view
        class="cropper-config"
        :class="isIphoneX ? 'fix-iphonex-button' : ''"
      >
        <text @tap="close" class="cropper-cancle">取消</text>
        <text @tap="uploadTap" class="cropper-cancle">重新选择</text>
        <text @tap="getImageInfo" class="cropper-save">{{
          nextImg ? "下一个" : "完成"
        }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import WeCropper from "we-cropper";
const device = wx.getSystemInfoSync(); // 获取设备信息
const width = device.windowWidth; // 示例为一个与屏幕等宽的正方形裁剪框
const height = width;
export default {
  name: "weCropper",
  data() {
    return {
      isIphoneX: false,
      nextImg: false,
      nextImgIndex: 0,
      imgSrc: "",
      imgType: "",
      imgList: [],
      cropperImglist: [],
      cropper: null,
      cropperOpt: {
        id: "cropper", // 用于手势操作的canvas组件标识符
        targetId: "targetCropper", // 用于用于生成截图的canvas组件标识符
        pixelRatio: device.pixelRatio, // 传入设备像素比
        width, // 画布宽度
        height, // 画布高度
        src: "",
        scale: 2.5, // 最大缩放倍数
        zoom: 8, // 缩放系数
        cut: {
          x: (width - 320) / 2, // 裁剪框x轴起点
          y: (width - 320) / 2, // 裁剪框y轴起点
          width: 320, // 裁剪框宽度
          height: 320, // 裁剪框高度
        },
      },
      imgListOpt: {
        x: (width - 217) / 2, // 裁剪框x轴起点
        y: (width - 310) / 2, // 裁剪框y轴起点
        width: 217, // 裁剪框宽度
        height: 310, // 裁剪框高度
      },
      imgId: "",
    };
  },
  methods: {
    close() {
      wx.navigateBack({
        delta: 1,
      });
    },
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
    getImageInfo() {
      if (this.imgType == "imgList") {
        this.nextImgIndex++;
        if (this.nextImgIndex == this.imgList.length - 1) {
          this.nextImg = false;
        }
        wx.showLoading({
          title: "图片加载中",
          mask: true,
        });
        this.cropper.getCropperImage().then((src) => {
          this.cropperImglist[this.nextImgIndex - 1] = src;
          this.cropper.pushOrign(this.imgList[this.nextImgIndex]);
          if (this.nextImgIndex == this.imgList.length) {
            this.globalData.imgList = this.cropperImglist;
            let pages = getCurrentPages();
            let prevPage = pages[pages.length - 2];
            prevPage.setData({
              updateimg: true,
            });

            wx.navigateBack({
              delta: 1,
            });
          }
        });
      } else {
        // wx.showLoading({
        //   title: "裁剪中",
        //   mask: true,
        // });
        let _this = this;
        this.cropper.getCropperImage().then((src) => {
          let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
          let prevPage = pages[pages.length - 2];
          //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
          let obj = {
            homeimg: src,
          };
          if (_this.imgType == "imgId") {
            obj.imgId = _this.imgId;
          }
          prevPage.setData(obj);

          wx.navigateBack({
            delta: 1,
          });
        });
      }
    },
    uploadTap() {
      const _this = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success(res) {
          const src = res.tempFilePaths[0];
          _this.cropper.pushOrign(src);
        },
      });
    },
  },
  mounted() {},
  onLoad: function (options) {
    if (options.type == "imgList") {
      let imgList = wx.getStorageSync("imgList");
      this.imgSrc = imgList[0];
      this.imgList = imgList;
      this.nextImg = this.imgList.length > 1 ? true : false;
      this.cropperOpt.cut = this.imgListOpt;
    } else {
      this.imgSrc = options.imgSrc;
      this.imgId = options.imgId;
    }
    this.imgType = options.type;
    this.cropperOpt.src = this.imgSrc;
    this.cropper = new WeCropper(this.cropperOpt)
      .on("ready", (ctx) => {
        console.log(`wecropper is ready for work!`);
      })
      .on("beforeImageLoad", (ctx) => {
        wx.showToast({
          title: "裁剪中",
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
