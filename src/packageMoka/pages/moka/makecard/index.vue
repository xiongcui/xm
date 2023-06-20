<template>
  <view>
    <view class="container" :style="{ backgroundColor: darkStyle.pageBgColor }">
      <view
        class="making"
        :style="{ top: (screenH - 200) * 0.5 + 'rpx' }"
        v-show="showMaking"
      >
        <view class="making-icon">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/loading.gif"
          ></image>
        </view>
        <text class="making-text">制作中，请稍候</text>
      </view>
      <view
        @touchStart="touchStart"
        class="slider"
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
      <view
        class="moka-container"
        :style="{ height: screenH + 'rpx', width: card.width + 'rpx' }"
      >
        <scroll-view
          :class="isDark ? 'main-scrollview-black' : 'main-scrollview-white'"
          :scrollTop="scrollTop"
          :scrollY="allowScroll"
          style="height: 100%; width: 100%"
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
                  height: card.userInfo.width + 'rpx',
                  width: card.userInfo.height + 'rpx',
                  transform: `rotate(90deg) translate(${
                    -card.userInfo.offset + 'rpx'
                  }, ${-card.userInfo.offset + 'rpx'})`,
                }"
                v-if="card.type == 'charu' || card.type == 'cebian'"
              >
                <view class="userinfo-info">
                  <view class="cebian_move_qrcode" v-if="isMoveQrcode"></view>
                  <view class="cebian_move_bwh" v-if="!userInfo.is_bwh"></view>
                  <view
                    class="cebian_move_birthday"
                    v-if="!userInfo.is_birthday"
                  ></view>
                  <text
                    class="name"
                    :style="{
                      color: isDark
                        ? darkStyle.nameColor
                        : lightStyle.nameColor,
                    }"
                    >{{ userInfo.nickname }}</text
                  >
                  <view class="item-cebian">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >身高 HEIGHT</text
                    >
                    <text
                      class="value"
                      :style="{
                        color: isDark
                          ? darkStyle.valueColor
                          : lightStyle.valueColor,
                      }"
                      >{{ userInfo.height }}cm</text
                    >
                  </view>
                  <view class="item-cebian">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >体重 HEIGHT</text
                    >
                    <text
                      class="value"
                      :style="{
                        color: isDark
                          ? darkStyle.valueColor
                          : lightStyle.valueColor,
                      }"
                      >{{ userInfo.weight }}kg</text
                    >
                  </view>
                  <view class="item-cebian" v-if="userInfo.is_bwh">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >胸围 BUST</text
                    >
                    <text
                      class="value"
                      :style="{
                        color: isDark
                          ? darkStyle.valueColor
                          : lightStyle.valueColor,
                      }"
                      >{{ userInfo.bwh_b }}</text
                    >
                  </view>
                  <view class="item-cebian" v-if="userInfo.is_bwh">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >腰围 WAIST</text
                    >
                    <text
                      class="value"
                      :style="{
                        color: isDark
                          ? darkStyle.valueColor
                          : lightStyle.valueColor,
                      }"
                      >{{ userInfo.bwh_w }}</text
                    >
                  </view>
                  <view class="item-cebian" v-if="userInfo.is_bwh">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >臀围 HIPS</text
                    >
                    <text
                      class="value"
                      :style="{
                        color: isDark
                          ? darkStyle.valueColor
                          : lightStyle.valueColor,
                      }"
                      >{{ userInfo.bwh_h }}</text
                    >
                  </view>
                  <view class="item-cebian">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >鞋码 SHOES</text
                    >
                    <text
                      class="value"
                      :style="{
                        color: isDark
                          ? darkStyle.valueColor
                          : lightStyle.valueColor,
                      }"
                      >{{ userInfo.shoe }}</text
                    >
                  </view>
                  <view class="item-cebian" v-if="userInfo.is_birthday">
                    <text
                      class="property"
                      :style="{
                        color: isDark
                          ? darkStyle.propertyColor
                          : lightStyle.propertyColor,
                      }"
                      >生日 BIRTH</text
                    >
                    <text
                      class="value"
                      :style="{
                        color: isDark
                          ? darkStyle.valueColor
                          : lightStyle.valueColor,
                      }"
                      >{{ userInfo.birthday }}</text
                    >
                  </view>
                  <image
                    mode="aspectFit"
                    :src="isDark ? logoAvartar : blackLogoAvartar"
                    v-if="!isMoveQrcode"
                  ></image>
                </view>
              </view>
              <view
                class="userinfo-container"
                :style="{
                  height: card.userInfo.width + 'rpx',
                  width: card.userInfo.height + 'rpx',
                  transform: `rotate(90deg) translate(${
                    -card.userInfo.offset + 'rpx'
                  }, ${-card.userInfo.offset + 'rpx'})`,
                }"
                v-if="card.type == 'dibu'"
              >
                <view class="userinfo-info-dibu">
                  <view class="userinfo-info-dibu-left">
                    <text
                      class="name-dibu"
                      :style="{
                        color: isDark
                          ? darkStyle.nameColor
                          : lightStyle.nameColor,
                      }"
                      >{{ userInfo.nickname }}</text
                    >
                    <view class="item-dibu">
                      <text
                        class="property-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.propertyColor
                            : lightStyle.propertyColor,
                        }"
                        >身高 HEIGHT</text
                      >
                      <text
                        class="value-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.valueColor
                            : lightStyle.valueColor,
                        }"
                        >{{ userInfo.height }}cm</text
                      >
                    </view>
                    <view class="item-dibu">
                      <text
                        class="property-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.propertyColor
                            : lightStyle.propertyColor,
                        }"
                        >体重 HEIGHT</text
                      >
                      <text
                        class="value-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.valueColor
                            : lightStyle.valueColor,
                        }"
                        >{{ userInfo.weight }}kg</text
                      >
                    </view>
                    <view class="item-dibu" v-if="userInfo.is_bwh">
                      <text
                        class="property-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.propertyColor
                            : lightStyle.propertyColor,
                        }"
                        >胸围 BUST</text
                      >
                      <text
                        class="value-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.valueColor
                            : lightStyle.valueColor,
                        }"
                        >{{ userInfo.bwh_b }}</text
                      >
                    </view>
                    <view class="item-dibu" v-if="userInfo.is_bwh">
                      <text
                        class="property-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.propertyColor
                            : lightStyle.propertyColor,
                        }"
                        >腰围 WAIST</text
                      >
                      <text
                        class="value-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.valueColor
                            : lightStyle.valueColor,
                        }"
                        >{{ userInfo.bwh_w }}</text
                      >
                    </view>
                    <view class="item-dibu" v-if="userInfo.is_bwh">
                      <text
                        class="property-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.propertyColor
                            : lightStyle.propertyColor,
                        }"
                        >臀围 HIPS</text
                      >
                      <text
                        class="value-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.valueColor
                            : lightStyle.valueColor,
                        }"
                        >{{ userInfo.bwh_h }}</text
                      >
                    </view>
                    <view class="item-dibu">
                      <text
                        class="property-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.propertyColor
                            : lightStyle.propertyColor,
                        }"
                        >鞋码 SHOES</text
                      >
                      <text
                        class="value-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.valueColor
                            : lightStyle.valueColor,
                        }"
                        >{{ userInfo.shoe }}</text
                      >
                    </view>
                    <view class="item-dibu" v-if="userInfo.is_birthday">
                      <text
                        class="property-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.propertyColor
                            : lightStyle.propertyColor,
                        }"
                        >生日 BIRTH</text
                      >
                      <text
                        class="value-dibu"
                        :style="{
                          color: isDark
                            ? darkStyle.valueColor
                            : lightStyle.valueColor,
                        }"
                        >{{ userInfo.birthday }}</text
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
              :style="{
                height: item.height + 'rpx',
                width: item.width + 'rpx',
              }"
              :x="item.x + 'rpx'"
              :y="item.y + 'rpx'"
              v-for="(item, index) in card.layouts"
              :key="index"
            >
              <scroll-view
                @scroll="scroll"
                @tap="tapPhoto"
                @touchEnd="touchEnd"
                @touchMove="touchMove"
                @touchStart="touchStart"
                class="photo-container"
                :id="item.id"
                :scrollX="
                  photoInfos[index].scrollX || scrollInfo[index].scale != 1
                "
                :scrollY="
                  photoInfos[index].scrollY || scrollInfo[index].scale != 1
                "
                :style="{
                  height: item.width + 'rpx',
                  width: item.height + 'rpx',
                  transform: `rotate(90deg) translate(${
                    -item.offset + 'rpx'
                  }, ${-item.offset + 'rpx'})`,
                  border: `1px solid ${
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
                      photoInfos[index].rotateH *
                        (scrollInfo[index].scale || 1) +
                      'rpx',
                    width:
                      photoInfos[index].rotateW *
                        (scrollInfo[index].scale || 1) +
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
      </view>
      <scroll-view
        :style="{ height: screenH + 'rpx', width: 750 - card.width + 'rpx' }"
      >
        <view
          class="header"
          :style="{
            height: 750 - card.width + 'rpx',
            width: screenH + 'rpx',
            transform: `rotate(90deg) translate(${
              (screenH - 750 + card.width) / 2 + 'rpx'
            }, ${(screenH - 750 + card.width) / 2 + 'rpx'})`,
          }"
        >
          <view class="title">
            <view class="move">拖拽挪动</view>
          </view>
          <view class="operation">
            <view @tap="switchBirthday" class="switch switch_birth">
              <image
                class="icon_check"
                src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/birthday1.png"
                v-if="userInfo.is_birthday"
              ></image>
              <image
                class="icon_check"
                src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/birthday0.png"
                v-else
              ></image>
            </view>
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
              class="switch switch_bwh"
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
            <view @tap="make" class="make">制作</view>
          </view>
        </view>
      </scroll-view>
    </view>
    <view style="width: 0px; height: 0px; overflow: hidden">
      <canvas
        canvasId="cutCanvas"
        :style="{ width: cutCanvasWH + 'px', height: cutCanvasWH + 'px' }"
      ></canvas>
    </view>
    <view style="width: 0px; height: 0px; overflow: hidden">
      <canvas
        canvasId="firstCanvas"
        style="width: 200px; height: 200px"
      ></canvas>
    </view>
  </view>
</template>

<script>
import "./index.scss";
const device = wx.getSystemInfoSync(); // 获取设备信息
const width = device.screenWidth; // 示例为一个与屏幕等宽的正方形裁剪框
const height = device.screenHeight;
const statusBarHeight = device.statusBarHeight;
const moka = require("../../../../assets/js/moka.js");
import { qrcode, userMocha } from "../../../../api/index";
import { openPage } from "../../../../utils/util";
import { Base64 } from "js-Base64";
import clickThrottle from "../../../../utils/clickThrottle";

export default {
  name: "makecard",
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
      screenH: (height - 44 - statusBarHeight) * (750 / width),
      showChangeButton: false,
      changeIndex: -1,
      scrollTop: 0,
      allowScroll: false,
      cutCanvasWH: 1800,
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
        propertyColor: "#9B9B9B",
        valueColor: "#D5D5D5",
      },
      lightStyle: {
        bgColor: "white",
        pageBgColor: "#F4F6F7",
        nameColor: "#15161D",
        propertyColor: "#9B9B9B",
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
      moka_code: "",
      n: false,
      h: false,
      t: "",
      sub_user_id: "",
    };
  },
  methods: {
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
        if (((this.n = false), !this.h)) {
          for (
            var e = a.changedTouches[0], o = -1, s = this.card.layouts, i = 0;
            i < s.length;
            i++
          ) {
            var l = s[i];
            if (this.isTouchInLayout(e, l)) {
              o = l.id;
              break;
            }
          }
          var r = this.photos;
          if (-1 != this.t && -1 != o) {
            var d = r[this.t];
            (r[this.t] = r[o]),
              (r[o] = d),
              (this.photos = r),
              this.getPhotoInfos();
          }
        }
        this.h = false;
      }
    },
    isTouchInLayout(t, a) {
      var r = 750 / width;
      var e = this.scrollTop,
        o = r * t.pageX,
        s = r * (t.pageY + e);
      return o > a.x && o < a.x + a.width && s > a.y && s < a.y + a.height;
    },
    sliderChange(t) {
      this.allowScroll = true;
      var r = 750 / width;
      var a = t.detail.y,
        e = 274 / r,
        o = (((this.card.height - this.screenH + 40) / r) * a) / e;
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
    },
    make() {
      if (!clickThrottle(5000)) return;
      this.showMaking = true;
      this.makes([], 0);
    },
    makes(e, o) {
      let _this = this;
      var s,
        i,
        l = this.scrollInfo,
        n = this.photoInfos,
        h = this.photos,
        d = this.card.layouts,
        c = h[o],
        u = d[o],
        f = n[o],
        g = l[o],
        w = this.cutCanvasWH;
      f.width >= f.height
        ? (i = ((s = w) / f.width) * f.height)
        : (s = ((i = w) / f.height) * f.width);
      var v = s / (f.rotateW * g.scale),
        S = u.height * v,
        p = u.width * v,
        y = wx.createCanvasContext("cutCanvas");
      var r = 750 / width;

      y.clearRect(0, 0, s, i),
        y.drawImage(c, 0, 0, s, i),
        y.draw(false, function (s) {
          wx.canvasToTempFilePath({
            x: g.x * v * r,
            y: g.y * v * r,
            width: S,
            height: p,
            destWidth: 2 * S,
            destHeight: 2 * p,
            canvasId: "cutCanvas",
            fileType: "png",
            quality: 1,
            success: function (s) {
              e[o] = s.tempFilePath;
              if ((o += 1) >= h.length) {
                _this.cutPhotos = e;
                _this.drawMocard();
              } else {
                _this.makes(e, o);
              }
            },
          });
        });
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
    getPhotoInfos() {
      !(function t(a, e, o) {
        var s = a.photos,
          i = a.card.layouts,
          l = s[o],
          r = i[o];
        wx.getImageInfo({
          src: l,
          success: function (i) {
            var l, n, h, d;
            i.width / i.height > r.height / r.width
              ? ((n = r.width),
                (l = (i.width / i.height) * n),
                (h = !0),
                (d = !1))
              : ((l = r.height),
                (n = (i.height / i.width) * l),
                (h = !1),
                (d = !0));
            var c = {
              width: i.width,
              height: i.height,
              rotateW: l,
              rotateH: n,
              scrollX: h,
              scrollY: d,
            };
            e[o] = c;
            if ((o += 1) >= s.length) {
              a.photos = s;
              a.photoInfos = e;
            } else {
              t(a, e, o);
            }
          },
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
      if ((this.showChangeButton = !this.showChangeButton)) {
        this.changeIndex = this.changeIndex;
        this.showChangeButton = this.showChangeButton;
      }
    },
    cutAvartar() {
      let _this = this;
      wx.downloadFile({
        url: this.userInfo.avatar,
        success: function (res) {
          if (200 === res.statusCode) {
            var e = wx.createCanvasContext("firstCanvas");
            e.save(),
              e.beginPath(),
              e.arc(100, 100, 100, 0, 2 * Math.PI, !1),
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
                      showCancel: !1,
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
              t
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
    drawMocard() {
      var t = this,
        a = t.card.height,
        o = t.card.width,
        s = wx.createCanvasContext("cutCanvas"),
        i = {};
      (i = t.isDark ? t.darkStyle : t.lightStyle),
        s.setFillStyle(i.bgColor),
        s.fillRect(0, 0, a, o),
        "cebian" == t.card.type || "charu" == t.card.type
          ? t.drawUserInfoWithCebian(s)
          : "dibu" == t.card.type && t.drawUserInfoWithDibu(s),
        t.drawPhotos(s);
      var l = "android" == device.platform,
        r = l ? 2 : 1.8;
      s.draw(false, function (s) {
        "drawCanvas:ok" == s.errMsg &&
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: a,
            height: o,
            destWidth: a * r,
            destHeight: o * r,
            canvasId: "cutCanvas",
            fileType: "png",
            quality: 1,
            success: function (a) {
              var o = t.card.cardId,
                s = t.card.name;
              t.uploadFilePath(a.tempFilePath, t, o, s);
            },
            fail: function (a) {
              wx.hideToast(),
                (t.showMaking = false),
                wx.showModal({
                  title: "模卡保存失败",
                  showCancel: false,
                });
            },
          });
      });
    },
    uploadFilePath(t, a, o, s) {
      if (a.isposting) return;
      a.isposting = !0;
      var i = 1;
      a.isMoveQrcode && (i = 0);
      var l = {
        sub_user_id: a.userInfo.sub_user_id,
        has_qrcode: i,
        template_id: o,
        template_name: s,
      };
      this.upImgs(t, i);
    },
    drawUserInfoWithCebian(a) {
      var e = this.userInfo,
        o =
          (this.card.userInfo.x,
          this.card.userInfo.Y,
          this.card.userInfo.height,
          this.card.userInfo.width,
          55);
      this.isMoveQrcode && (o += 65),
        e.is_bwh || (o += 80),
        e.is_birthday || (o += 25);
      var s = 40 + this.card.userInfo.y,
        i = o,
        l = {},
        r = (l = this.isDark ? this.darkStyle : this.lightStyle).propertyColor,
        n = l.valueColor;
      a.setFontSize(32), a.setFillStyle(n), a.fillText(e.nickname, s, i);
      var h = 8;
      if (
        (this.isMoveQrcode && (h = 10),
        (i += 40),
        a.setFontSize(18),
        a.setFillStyle(r),
        a.fillText("身高 HEIGHT", s, i),
        (i += 25),
        a.setFontSize(18),
        a.setFillStyle(n),
        a.fillText(e.height + "cm", s, i),
        (i += 22 + h),
        a.setFontSize(18),
        a.setFillStyle(r),
        a.fillText("体重 WEIGHT", s, i),
        (i += 25),
        a.setFontSize(18),
        a.setFillStyle(n),
        a.fillText(e.weight + "kg", s, i),
        e.is_bwh &&
          ((i += 22 + h),
          a.setFontSize(18),
          a.setFillStyle(r),
          a.fillText("胸围 BUST", s, i),
          (i += 25),
          a.setFontSize(18),
          a.setFillStyle(n),
          a.fillText(e.bwh_b, s, i),
          (i += 22 + h),
          a.setFontSize(18),
          a.setFillStyle(r),
          a.fillText("腰围 WAIST", s, i),
          (i += 25),
          a.setFontSize(18),
          a.setFillStyle(n),
          a.fillText(e.bwh_w, s, i),
          (i += 22 + h),
          a.setFontSize(18),
          a.setFillStyle(r),
          a.fillText("臀围 HIPS", s, i),
          (i += 25),
          a.setFontSize(18),
          a.setFillStyle(n),
          a.fillText(e.bwh_h, s, i)),
        (i += 22 + h),
        a.setFontSize(18),
        a.setFillStyle(r),
        a.fillText("鞋码 SHOES", s, i),
        (i += 25),
        a.setFontSize(18),
        a.setFillStyle(n),
        a.fillText(e.shoe, s, i),
        e.is_birthday &&
          ((i += 22 + h),
          a.setFontSize(18),
          a.setFillStyle(r),
          a.fillText("生日 BIRTH", s, i),
          (i += 25),
          a.setFontSize(18),
          a.setFillStyle(n),
          a.fillText(e.birthday, s, i)),
        !this.isMoveQrcode)
      ) {
        i += 30;
        a.drawImage(
          this.isDark ? this.logoAvartar : this.blackLogoAvartar,
          s,
          i,
          120,
          120
        );
      }
    },
    drawUserInfoWithDibu(a) {
      var e = this.userInfo,
        o =
          (this.card.userInfo.x,
          this.card.userInfo.Y,
          this.card.userInfo.height,
          this.card.userInfo.width,
          67),
        s = 580,
        i = {},
        l = (i = this.isDark ? this.darkStyle : this.lightStyle).propertyColor,
        r = i.valueColor;
      a.setFontSize(32), a.setFillStyle(r), a.fillText(e.nickname, o, s);
      (s = 560),
        (o += 160),
        a.setFontSize(18),
        a.setFillStyle(l),
        a.fillText("身高HEIGHT", o, s),
        (s += 31),
        a.setFontSize(18),
        a.setFillStyle(r),
        a.fillText(e.height + "cm", o, s),
        (s = 560),
        (o += 140),
        a.setFontSize(18),
        a.setFillStyle(l),
        a.fillText("体重WEIGHT", o, s),
        (s += 31),
        a.setFontSize(18),
        a.setFillStyle(r),
        a.fillText(e.weight + "kg", o, s),
        e.is_bwh &&
          ((s = 560),
          (o += 140),
          a.setFontSize(18),
          a.setFillStyle(l),
          a.fillText("胸围BUST", o, s),
          (s += 31),
          a.setFontSize(18),
          a.setFillStyle(r),
          a.fillText(e.bwh_b, o, s),
          (s = 560),
          (o += 140),
          a.setFontSize(18),
          a.setFillStyle(l),
          a.fillText("腰围WAIST", o, s),
          (s += 31),
          a.setFontSize(18),
          a.setFillStyle(r),
          a.fillText(e.bwh_w, o, s),
          (s = 560),
          (o += 140),
          a.setFontSize(18),
          a.setFillStyle(l),
          a.fillText("臀围HIPS", o, s),
          (s += 31),
          a.setFontSize(18),
          a.setFillStyle(r),
          a.fillText(e.bwh_h, o, s)),
        (s = 560),
        (o += 140),
        a.setFontSize(18),
        a.setFillStyle(l),
        a.fillText("鞋码SHOES", o, s),
        (s += 31),
        a.setFontSize(18),
        a.setFillStyle(r),
        a.fillText(e.shoe, o, s),
        e.is_birthday &&
          ((s = 560),
          (o += 140),
          a.setFontSize(18),
          a.setFillStyle(l),
          a.fillText("生日BIRTH", o, s),
          (s += 31),
          a.setFontSize(18),
          a.setFillStyle(r),
          a.fillText(e.birthday, o, s));
      (o = this.card.userInfo.height - 80 - 30), (s = 530);
      this.isMoveQrcode ||
        a.drawImage(
          this.isDark ? this.logoAvartar : this.blackLogoAvartar,
          o,
          s,
          80,
          80
        );
    },
    drawPhotos(a) {
      for (
        var e = this.cutPhotos,
          o = this.card.layouts,
          s = this.card.width,
          i = 0;
        i < e.length;
        i++
      ) {
        var l = e[i],
          r = o[i],
          n = r.y + 2,
          h = s - r.x - r.width + 2,
          d = r.height - 4,
          c = r.width - 4;
        a.drawImage(l, n, h, d, c);
      }
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
        this.showMaking = false;
        wx.setStorageSync("successImgSrc", file);
        openPage(
          "/packageMoka/pages/moka/makesuccess/index?vertical=0&has_qrcode=" + i
        );
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    let cardid = wx.getStorageSync("cardid");
    let mokaIndex = moka.getIndexByCardId(cardid);
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
