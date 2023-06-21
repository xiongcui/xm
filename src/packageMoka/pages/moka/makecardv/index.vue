<template>
  <view class="makecardv">
    <view class="container">
      <scroll-view
        :class="`main-scrollview ${
          isDark ? 'main-scrollview-black' : 'main-scrollview-white'
        }`"
        :scrollTop="scrollTop"
        :scrollY="allowScroll"
        :style="{
          height:
            screenH - 160 > card.height
              ? card.height + 12
              : screenH - 160 + 'rpx',
          width: card.width + 12 + 'rpx',
        }"
      >
        <movable-area
          class="photos-container"
          :style="{
            height: card.height + 'rpx',
            width: card.width + 'rpx',
            backgroundColor: isDark ? darkStyle.bgColor : lightStyle.bgColor,
          }"
        >
          <movable-view
            class="userinfo"
            :disabled="true"
            :outOfBounds="true"
            :scale="false"
            :style="{
              height: card.userInfo.height + 'rpx',
              width: card.userInfo.width + 'rpx',
            }"
            :x="card.userInfo.x + 'rpx'"
            :y="card.userInfo.y + 'rpx'"
          >
            <view
              class="userinfo-container"
              :style="{
                height: card.userInfo.height + 'rpx',
                width: card.userInfo.width + 'rpx',
              }"
              v-if="card.type == 'charu' || card.type == 'dibu'"
            >
              <view class="ub userinfo-info" v-if="!isMoveQrcode">
                <view
                  class="name"
                  :style="{
                    color: isDark ? darkStyle.nameColor : lightStyle.nameColor,
                  }"
                  >{{ userInfo.nickname }}</view
                >
                <view class="text-info ub-f1">
                  <view class="charu_move_bwh" v-if="!userInfo.is_bwh"></view>
                  <view class="text-line">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >身高 {{ userInfo.height }}cm</text
                    >
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >体重 {{ userInfo.weight }}kg</text
                    >
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >鞋码 {{ userInfo.shoe }}</text
                    >
                  </view>
                  <view class="text-line" v-if="userInfo.is_bwh">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >胸围 {{ userInfo.bwh_b }}</text
                    >
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >腰围 {{ userInfo.bwh_w }}</text
                    >
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >臀围 {{ userInfo.bwh_h }}</text
                    >
                  </view>
                </view>
                <view class="logoavatar">
                  <image
                    mode="aspectFit"
                    :src="isDark ? logoAvartar : blackLogoAvartar"
                  ></image>
                </view>
              </view>
              <view class="userinfo-info-moveqr" v-else>
                <view
                  class="name-moveqr"
                  :style="{
                    color: isDark ? darkStyle.nameColor : lightStyle.nameColor,
                  }"
                  >{{ userInfo.nickname }}</view
                >
                <view class="text-info-moveqr">
                  <view class="text-line">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >身高 {{ userInfo.height }}cm</text
                    >
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >体重 {{ userInfo.weight }}kg</text
                    >
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >鞋码 {{ userInfo.shoe }}</text
                    >
                    <block v-if="userInfo.is_bwh">
                      <text
                        class="property"
                        :style="{
                          color: isDark
                            ? darkStyle.propertyColor
                            : lightStyle.propertyColor,
                        }"
                        >胸围 {{ userInfo.bwh_b }}</text
                      >
                      <text
                        class="property"
                        :style="{
                          color: isDark
                            ? darkStyle.propertyColor
                            : lightStyle.propertyColor,
                        }"
                        >腰围 {{ userInfo.bwh_w }}</text
                      >
                      <text
                        class="property"
                        :style="{
                          color: isDark
                            ? darkStyle.propertyColor
                            : lightStyle.propertyColor,
                        }"
                        >臀围 {{ userInfo.bwh_h }}</text
                      >
                    </block>
                  </view>
                </view>
              </view>
            </view>
            <view
              class="userinfo-container"
              :style="{
                height: card.userInfo.height + 'rpx',
                width: card.userInfo.width + 'rpx',
              }"
              v-if="card.type == 'cebian'"
            >
              <view class="userinfo-info-neiqian">
                <view class="neiqian_move_qrcode" v-if="isMoveQrcode"></view>
                <view class="neiqian_move_bwh" v-if="!userInfo.is_bwh"></view>
                <text
                  class="name-neiqian"
                  :style="{
                    color: isDark ? darkStyle.nameColor : lightStyle.nameColor,
                  }"
                  >{{ userInfo.nickname }}</text
                >
                <view class="text-info-neiqian">
                  <view class="text-line">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >身高 {{ userInfo.height }}cm</text
                    >
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >体重 {{ userInfo.weight }}kg</text
                    >
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >鞋码 {{ userInfo.shoe }}</text
                    >
                  </view>
                  <view class="text-line" v-if="userInfo.is_bwh">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >胸围 {{ userInfo.bwh_b }}</text
                    >
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >腰围 {{ userInfo.bwh_w }}</text
                    >
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >臀围 {{ userInfo.bwh_h }}</text
                    >
                  </view>
                </view>
                <image
                  mode="aspectFit"
                  :src="isDark ? logoAvartar : blackLogoAvartar"
                  v-if="!isMoveQrcode"
                ></image>
              </view>
            </view>
          </movable-view>
          <movable-view
            class="layout"
            :disabled="true"
            :id="item.id"
            :outOfBounds="true"
            :scale="false"
            :style="{ height: item.height + 'rpx', width: item.width + 'rpx' }"
            :x="item.x + 'rpx'"
            :y="item.y + 'rpx'"
            v-for="(item, index) in card.layouts"
            :key="index"
          >
            <scroll-view
              @scroll="scroll"
              @tap="tapPhoto"
              @touchend="touchEnd"
              @touchmove="touchMove"
              @touchstart="touchStart"
              class="photo-container"
              :id="item.id"
              :scrollX="
                photoInfos[index].scrollX || scrollInfo[index].scale != 1
              "
              :scrollY="
                photoInfos[index].scrollY || scrollInfo[index].scale != 1
              "
              :style="{
                height: item.height + 'rpx',
                width: item.width + 'rpx',
                border: `1rpx solid ${
                  isDark ? darkStyle.bgColor : lightStyle.bgColor
                }`,
              }"
              v-if="index < photoInfos.length"
            >
              <image
                class="rotate"
                :src="photos[index]"
                :style="{
                  height:
                    photoInfos[index].rotateH * (scrollInfo[index].scale || 1) +
                    'rpx',
                  width:
                    photoInfos[index].rotateW * (scrollInfo[index].scale || 1) +
                    'rpx',
                  verticalAlign: 'middle',
                }"
              ></image>
            </scroll-view>
            <view
              @tap="changePhoto"
              class="change"
              v-show="showChangeButton && index == changeIndex"
              :id="item.id"
              :style="{
                top: (item.height - 100) * 0.5 + 'rpx',
                right: (item.width - 100) * 0.5 + 'rpx',
              }"
              >替换</view
            >
          </movable-view>
        </movable-area>
      </scroll-view>
      <view
        @touchstart="touchStart"
        class="slider"
        v-show="card.height >= 1040"
        :style="{ top: (screenH - 458) * 0.5 + 'rpx' }"
      >
        <movable-area class="slider-bg">
          <movable-view
            @change="sliderChange"
            class="slider-btn"
            direction="all"
            :scale="false"
            :x="0"
            :y="0"
          >
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/slider_v.png"
            ></image>
          </movable-view>
        </movable-area>
      </view>
      <view :class="`finish ub ${isIphoneX ? 'fix-iphonex-button' : ''}`">
        <view @tap="switchBWH" class="switch switch_bwh">
          <image
            class="icon_check"
            src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/bwh1.png"
            v-if="userInfo.is_bwh"
          ></image>
          <image
            class="icon_check"
            src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/bwh0.png"
            v-else
          ></image>
        </view>
        <view
          @tap="switchQrcode"
          class="switch switch_qrcode"
          v-if="!userInfo.sub_user_id"
        >
          <image
            class="icon_check_qrcode"
            src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/qrcode0.png"
            v-if="isMoveQrcode"
          ></image>
          <image
            class="icon_check_qrcode"
            src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/qrcode1.png"
            v-else
          ></image>
        </view>
        <view @tap="switchBg" class="switch switch_bg">
          <image
            class="icon_switchbg"
            src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/switchbg.png"
          ></image>
        </view>
        <view class="ub-f1"></view>
        <view class="switch">
          <view @tap="make" class="make">制作</view>
        </view>
      </view>
    </view>
    <view style="width: 0px; height: 0px; overflow: hidden" class="canvas-box">
      <canvas
        canvasId="cutCanvas"
        :style="{
          width: cutCanvasWH + 'rpx',
          height: cutCanvasWH + 'rpx',
        }"
      ></canvas>
    </view>
    <view style="width: 0px; height: 0px; overflow: hidden" class="canvas-box">
      <canvas
        canvasId="firstCanvas"
        style="width: 800px; height: 800px"
      ></canvas>
    </view>
  </view>
</template>

<script>
import "./index.scss";
const device = wx.getSystemInfoSync(); // 获取设备信息
const width = device.screenWidth; // 示例为一个与屏幕等宽的正方形裁剪框
const height = device.screenHeight;
const moka = require("../../../../assets/js/moka.js");
import { qrcode, userMocha } from "../../../../api/index";
import { openPage } from "../../../../utils/util";
import { Base64 } from "js-Base64";
import clickThrottle from "../../../../utils/clickThrottle";
export default {
  name: "makecardv",
  data() {
    return {
      isIphoneX: false,
      showloadingmore: false,
      pageloading: true,
      loadingmore: true,
      isloading: false,
      isposting: false,
      pageshow: "",
      screenW: width * (750 / width),
      screenH: (height - 64) * (750 / width),
      showChangeButton: false,
      changeIndex: -1,
      scrollTop: 0,
      allowScroll: false,
      cutCanvasWH: 3200,
      photos: [],
      cutPhotos: [],
      photoInfos: [],
      scrollInfo: [],
      card: {
        userInfo: {
          x: 0,
          y: 0,
        },
      },
      canvasHidden: false,
      userInfo: {},
      isMoveQrcode: 0,
      isDark: true,
      darkStyle: {
        bgColor: "black",
        pageBgColor: "#292b32",
        nameColor: "white",
        propertyColor: "white",
        valueColor: "#D5D5D5",
      },
      lightStyle: {
        bgColor: "white",
        pageBgColor: "#F4F6F7",
        nameColor: "#15161D",
        propertyColor: "#15161D",
        valueColor: "#15161D",
      },
      avartar: "",
      logoAvartar: "",
      blackLogoAvartar: "",
      showMaking: false,
      invite_count: 1,
      tipmoveqrcode_task1: false,
      tipmoveqrcode_task2: false,
      blackCode: "",
      whiteCode: "",
      uploadData: {},
      n: false,
      h: false,
      t: "",
      sub_user_id: "",
    };
  },
  methods: {
    cutAvartar() {
      let _this = this;
      wx.downloadFile({
        url: this.userInfo.avatar,
        success: function (res) {
          if (200 === res.statusCode) {
            var e = wx.createCanvasContext("firstCanvas");
            e.save(),
              e.beginPath(),
              e.arc(100, 100, 100, 0, 2 * Math.PI, false),
              e.clip(),
              e.drawImage(res.tempFilePath, 0, 0, 200, 200),
              e.restore(),
              e.draw(false, function (a) {
                wx.canvasToTempFilePath({
                  x: 0,
                  y: 0,
                  width: 200,
                  height: 200,
                  destWidth: 200,
                  destHeight: 200,
                  canvasId: "firstCanvas",
                  fileType: "png",
                  quality: 1,
                  success: function (a) {
                    _this.avartar = a.tempFilePath;
                    _this.drawAvartar(true);
                    _this.drawAvartar(false);
                  },
                  fail: function (t) {
                    wx.showModal({
                      title: "头像裁剪失败",
                      showCancel: false,
                    });
                  },
                });
              });
          }
        },
      });
    },
    drawAvartar(t) {
      var _this = this;
      wx.downloadFile({
        url: this.moka_code,
        success: function (e) {
          if (200 === e.statusCode && t) {
            if (t) {
              _this.blackCode = e.tempFilePath;
            } else {
              _this.whiteCode = e.tempFilePath;
            }
            _this.drawCode(_this);
          }
        },
      });
    },
    drawCode(t) {
      var a = this,
        e = wx.createCanvasContext("firstCanvas");
      e.setFillStyle("white"),
        e.fillRect(0, 0, 200, 200),
        e.drawImage(t ? a.blackCode : a.whiteCode, 0, 0, 200, 200),
        e.drawImage(a.avartar, 55, 55, 90, 90),
        e.draw(false, function (e) {
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 200,
            height: 200,
            destWidth: 200,
            destHeight: 200,
            canvasId: "firstCanvas",
            fileType: "png",
            quality: 1,
            success: function (e) {
              t.isDark
                ? (a.logoAvartar = e.tempFilePath)
                : (a.blackLogoAvartar = e.tempFilePath),
                (a.canvasHidden = true);
            },
            fail: function (t) {
              wx.showModal({
                title: "头像绘制失败",
                showCancel: false,
              });
            },
          });
        });
    },
    getPhotoInfos() {
      !(function t(a, e, o) {
        var s = a.photos,
          i = a.card.layouts,
          r = s[o],
          h = i[o];
        wx.getImageInfo({
          src: r,
          success: function (i) {
            var r, d, n, c;
            i.width / i.height > h.width / h.height
              ? ((d = h.height),
                (r = (i.width / i.height) * d),
                (n = !0),
                (c = !1))
              : ((r = h.width),
                (d = (i.height / i.width) * r),
                (n = !1),
                (c = !0));
            var l = {
              width: i.width,
              height: i.height,
              rotateW: r,
              rotateH: d,
              scrollX: n,
              scrollY: c,
            };
            e[o] = l;
            if ((o += 1) >= s.length) {
              a.photos = s;
              a.photoInfos = e;
              console.log(a.photoInfos, "photoInfos======");
            } else {
              t(a, e, o);
            }
          },
        });
      })(this, [], 0);
    },
    changePhoto(t) {
      var a = parseInt(t.currentTarget.id),
        _this = this;
      wx.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album"],
        success: function (t) {
          var o = t.tempFilePaths[0];
          _this.photos[a] = o;
          _this.getPhotoInfos();
          _this.changeIndex = -1;
          _this.showChangeButton = false;
        },
      });
    },
    touchStart(a) {
      this.allowScroll = false;
      var e = parseInt(a.currentTarget.id);
      this.t = e >= 0 && e < this.photos.length ? e : -1;
      this.n = true;
      if (a.touches.length >= 2) {
        this.h = true;
        var o = a.touches[1].pageX - a.touches[0].pageX,
          s = a.touches[1].pageY - a.touches[0].pageY;
        d = Math.sqrt(o * o + s * s);
      }
    },
    touchMove(a) {
      if (
        !(this.t < 0 || this.t >= this.scrollInfo.length) &&
        this.n &&
        a.touches.length >= 2
      ) {
        var e = a.touches[1].pageX - a.touches[0].pageX,
          o = a.touches[1].pageY - a.touches[0].pageY,
          s = Math.sqrt(e * e + o * o) - d;
        if (Math.abs(s) >= 0) {
          var i = this.scrollInfo[this.t].scale || 1;
          (i += 4e-4 * s) > 2 && (i = 2),
            i < 1 && (i = 1),
            (this.scrollInfo[this.t].scale = i),
            (this.scrollInfo = this.scrollInfo);
        }
      }
    },
    touchEnd(a) {
      if (0 == a.touches.length) {
        if (((this.d = false), !this.n)) {
          for (
            var e = a.changedTouches[0], o = -1, s = this.card.layouts, i = 0;
            i < s.length;
            i++
          ) {
            var r = s[i];
            if (this.isTouchInLayout(e, r)) {
              o = r.id;
              break;
            }
          }
          var h = this.photos;
          if (-1 != this.t && -1 != o) {
            var c = h[this.t];
            (h[this.t] = h[o]),
              (h[o] = c),
              (this.photos = h),
              this.getPhotoInfos();
          }
        }
        this.n = false;
      }
    },
    sliderChange(t) {
      this.allowScroll = true;
      var h = 750 / width;
      var a = t.detail.y,
        e = 274 / h,
        o = (((this.card.height - (this.screenH - 150) + 40) / h) * a) / e;
      this.scrollTop = o;
    },
    switchBirthday() {
      this.userInfo.is_birthday = !this.userInfo.is_birthday;
    },
    switchBWH() {
      this.userInfo.is_bwh = !this.userInfo.is_bwh;
    },
    switchQrcode() {
      this.isMoveQrcode ? (this.isMoveQrcode = 0) : (this.isMoveQrcode = 1);
    },
    switchBg() {
      this.isDark = !this.isDark;
      this.cutAvartar();
    },
    make() {
      if (!clickThrottle(5000)) return;
      wx.showLoading({
        title: "制作中，请稍候...",
      });
      !(function t(a, e, o) {
        var h = 750 / width;
        var s,
          i,
          r = a.scrollInfo,
          d = a.photoInfos,
          n = a.photos,
          c = a.card.layouts,
          l = n[o],
          u = c[o],
          g = d[o],
          f = r[o],
          w = a.cutCanvasWH / h;
        g.width >= g.height && g.width > w
          ? (i = ((s = w) / g.width) * g.height)
          : g.width < g.height && g.height > w
          ? (s = ((i = w) / g.height) * g.width)
          : ((s = g.width), (i = g.height));
        var v = (s * h) / g.rotateW,
          p = f.scale,
          I = (u.width * v) / (h * p),
          y = (u.height * v) / (h * p),
          x = wx.createCanvasContext("cutCanvas");
        x.clearRect(0, 0, s, i),
          x.drawImage(l, 0, 0, s, i),
          x.draw(false, function (s) {
            wx.canvasToTempFilePath({
              x: (f.x * v) / p,
              y: (f.y * v) / p,
              width: I,
              height: y,
              destWidth: I,
              destHeight: y,
              canvasId: "cutCanvas",
              fileType: "png",
              quality: 1,
              success: function (s) {
                (e[o] = s.tempFilePath),
                  (o += 1) >= n.length
                    ? ((a.cutPhotos = e), a.drawMocard())
                    : t(a, e, o);
              },
            });
          });
      })(this, [], 0);
    },
    scroll(t) {
      this.scrollInfo[t.currentTarget.id].x = t.detail.scrollLeft;
      this.scrollInfo[t.currentTarget.id].y = t.detail.scrollTop;
    },
    tapPhoto(t) {
      var a = parseInt(t.currentTarget.id);
      this.changeIndex = a;
      this.showChangeButton = !this.showChangeButton;
    },
    isTouchInLayout(t, a) {
      var e = this.scrollTop,
        o = h * t.pageX,
        s = h * (t.pageY + e);
      return (
        o > a.x + 65 &&
        o < a.x + a.width + 65 &&
        s > a.y + 65 &&
        s < a.y + a.height + 65
      );
    },
    drawMocard() {
      this.cutPhotos, this.card.layouts;
      var t = this.card.width,
        a = this.card.height,
        e = wx.createCanvasContext("cutCanvas"),
        o = {};
      (o = this.isDark ? this.darkStyle : this.lightStyle),
        e.setFillStyle(o.bgColor),
        e.fillRect(0, 0, t, a),
        "charu" == this.card.type || "dibu" == this.card.type
          ? this.drawUserInfoWithCharu(this, e)
          : this.drawUserInfoWithNeiqian(this, e),
        this.drawPhotos(this, e);
    },
    drawUserInfoWithCharu(t, a) {
      var e = t.userInfo;
      if (!t.isMoveQrcode)
        var o = 30,
          s = t.card.userInfo.height / 2 + t.card.userInfo.y + 10;
      if (t.isMoveQrcode)
        (o = t.card.userInfo.width / 2),
          (s = t.card.userInfo.height / 2 + t.card.userInfo.y - 10);
      var i = (t.isDark ? t.darkStyle : t.lightStyle).propertyColor;
      a.setFontSize(32),
        a.setFillStyle(i),
        t.isMoveQrcode && (a.textAlign = "center"),
        a.fillText(e.nickname, o, s);
      if (
        (t.isMoveQrcode ||
          ((s = s - 22 + 2),
          e.is_bwh || (s += 15),
          (o += 140),
          a.setFontSize(18),
          a.setFillStyle(i),
          a.fillText(
            "身高 " +
              e.height +
              "cm   体重 " +
              e.weight +
              "kg   鞋码 " +
              e.shoe,
            o,
            s
          ),
          e.is_bwh &&
            ((s += 28),
            a.setFontSize(18),
            a.setFillStyle(i),
            a.fillText(
              "胸围 " + e.bwh_b + "   腰围 " + e.bwh_w + "   臀围 " + e.bwh_h,
              o,
              s
            ))),
        t.isMoveQrcode)
      ) {
        (s = s + 22 + 16),
          (o = t.card.userInfo.width / 2),
          a.setFontSize(18),
          a.setFillStyle(i);
        var r =
            "身高 " +
            e.height +
            "cm   体重 " +
            e.weight +
            "kg   鞋码 " +
            e.shoe,
          h = "";
        e.is_bwh &&
          (h =
            "   胸围 " + e.bwh_b + "   腰围 " + e.bwh_w + "   臀围 " + e.bwh_h),
          (a.textAlign = "center"),
          a.fillText(r + h, o, s);
      }
      if (!t.isMoveQrcode) {
        (o = t.card.userInfo.width - 100 - 30),
          (s = t.card.userInfo.height / 2 + t.card.userInfo.y - 50);
        a.drawImage(
          t.isDark ? t.logoAvartar : t.blackLogoAvartar,
          o,
          s,
          100,
          100
        );
      }
    },
    drawUserInfoWithNeiqian(t, a) {
      var e = t.userInfo,
        o =
          (t.card.userInfo.x,
          t.card.userInfo.Y,
          t.card.userInfo.width,
          t.card.userInfo.height,
          70 + t.card.userInfo.y),
        s = 0.5 * t.card.userInfo.width;
      t.isMoveQrcode && (o += 65), e.is_bwh || (o += 15);
      var i = (t.isDark ? t.darkStyle : t.lightStyle).propertyColor;
      a.setFontSize(32),
        a.setFillStyle(i),
        a.setTextAlign("center"),
        a.fillText(e.nickname, s, o);
      if (
        ((o += 52),
        a.setFontSize(18),
        a.setFillStyle(i),
        a.fillText(
          "身高 " + e.height + "cm   体重 " + e.weight + "kg   鞋码 " + e.shoe,
          s,
          o
        ),
        e.is_bwh &&
          ((o += 28),
          a.setFontSize(18),
          a.setFillStyle(i),
          a.fillText(
            "胸围 " + e.bwh_b + "   腰围 " + e.bwh_w + "   臀围 " + e.bwh_h,
            s,
            o
          )),
        !t.isMoveQrcode)
      ) {
        (s = 0.5 * (t.card.userInfo.width - 100)), (o += 47);
        a.drawImage(
          t.isDark ? t.logoAvartar : t.blackLogoAvartar,
          s,
          o,
          100,
          100
        );
      }
    },
    drawPhotos(t, a) {
      this.drawPhotosContent(this, 0, a);
    },
    drawPhotosContent(t, a, o) {
      var s = t.cutPhotos,
        i = t.card.layouts,
        r = s[a],
        h = i[a],
        d = h.x + 2,
        n = h.y + 2,
        c = h.width - 4,
        g = h.height - 4;
      if ((o.drawImage(r, d, n, c, g), (a += 1) == s.length)) {
        var f = t.card.width,
          w = t.card.height,
          v = "android" == device.platform,
          p = 2;
        v && t.photos.length > 10 && (p = 2.5),
          o.draw(false, function (a) {
            "drawCanvas:ok" == a.errMsg &&
              wx.canvasToTempFilePath({
                x: 0,
                y: 0,
                width: f,
                height: w,
                destWidth: f * p,
                destHeight: w * p,
                canvasId: "cutCanvas",
                fileType: "png",
                quality: 1,
                success: function (a) {
                  var o = t.card.cardId,
                    s = t.card.name;
                  !(function (t, a, o, s) {
                    if (a.isposting) return;
                    a.isposting = true;
                    var i = 1;
                    a.isMoveQrcode && (i = 0);
                    var r = {
                      sub_user_id: a.userInfo.sub_user_id,
                      has_qrcode: i,
                      template_id: o,
                      template_name: s,
                    };
                    a.upImgs(t, i);
                  })(a.tempFilePath, t, o, s);
                },
                fail: function (t) {
                  wx.hideToast(),
                    wx.showModal({
                      title: "模卡保存失败",
                      showCancel: false,
                    });
                },
              });
          });
      } else this.drawPhotosContent(t, a, o);
    },
    upImgs(tempFilePath, i) {
      let header = {};
      let _this = this;
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: tempFilePath,
        formData: {
          scr_type: "mocha",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            let params = {
              mocha_url: data.data.file1,
            };
            if (_this.sub_user_id) {
              params.sub_uuid = _this.sub_user_id;
            }
            _this.userMocha(data.data.file1, i, params);
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
        fail: (error) => {
          wx.hideLoading();
          this.showMaking = false;
          wx.showToast({
            title: "上传失败！",
            icon: "none",
          });
        },
      });
    },
    async qrcode(params) {
      try {
        let res = await qrcode(params);
        this.moka_code = res.data.data;
        this.cutAvartar();
      } catch (error) {}
    },
    async userMocha(file, i, params) {
      try {
        let res = await userMocha(params);
        wx.setStorageSync("successImgSrc", file);
        openPage(
          "/packageMoka/pages/moka/makesuccess/index?isVertical=1&has_qrcode=" +
            i
        );
        wx.hideLoading();
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    let cardid = wx.getStorageSync("cardid");
    let mokaIndex = moka.getIndexByCardId(cardid);
    console.log(moka.layouts[mokaIndex], "moka.layouts[mokaIndex]");
    this.card = moka.layouts[mokaIndex];
    this.photos = wx.getStorageSync("selectedPhotos");
    this.userInfo = wx.getStorageSync("carduserinfo");
    if (options.sub_user_id) {
      this.sub_user_id = options.sub_user_id;
    }
    var l = [];
    for (var r = 0; r < this.photos.length; r++) {
      l.push({
        x: 0,
        y: 0,
        scale: 1,
      });
    }
    this.scrollInfo = l;
    this.qrcode({
      source: "homepage",
    });
    this.getPhotoInfos();
  },
};
</script>

<style lang="scss" scoped></style>
