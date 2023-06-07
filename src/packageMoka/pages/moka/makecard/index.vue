<template>
  <view>
    <view class="container" :style="{ backgroundColor: darkStyle.pageBgColor }">
      <view
        class="making"
        :style="{ top: (screenH - 200) * 0.5 + 'rpx' }"
        v-if="showMaking"
      >
        <view class="making-icon">
          <image
            src="../../../../assets/images/moka/makecard/loading.gif"
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
              src="../../../../assets/images/moka/makecard/slider_v.png"
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
              style="{height:card.userInfo.height+'rpx', width: card.userInfo.width +'rpx'}"
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
                  transform:
                    // 'rotate(90deg)' +
                    // translate(
                    //   -card.userInfo.offset + 'rpx',
                    //   -card.userInfo.offset + 'rpx'
                    // ),
                    `rotate(90deg) translate(${
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
                  transform:
                    // 'rotate(90deg)' +
                    // translate(-item.offset + 'rpx', -item.offset + 'rpx'),
                    `rotate(90deg) translate(${-item.offset + 'rpx'}, ${
                      -item.offset + 'rpx'
                    })`,
                  border:
                    '1rpx solid' + isDark
                      ? darkStyle.bgColor
                      : lightStyle.bgColor,
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
                v-if="showChangeButton && index == changeIndex"
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
                src="../../../../assets/images/moka/makecard/birthday1.png"
                v-if="userInfo.is_birthday"
              ></image>
              <image
                class="icon_check"
                src="../../../../assets/images/moka/makecard/birthday0.png"
                v-else
              ></image>
            </view>
            <view @tap="switchBWH" class="switch switch_bwh">
              <image
                class="icon_check"
                src="../../../../assets/images/moka/makecard/bwh1.png"
                v-if="userInfo.is_bwh"
              ></image>
              <image
                class="icon_check"
                src="../../../../assets/images/moka/makecard/bwh0.png"
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
                src="../../../../assets/images/moka/makecard/qrcode0.png"
                v-if="isMoveQrcode"
              ></image>
              <image
                class="icon_check_qrcode"
                src="../../../../assets/images/moka/makecard/qrcode1.png"
                v-else
              ></image>
            </view>
            <view @tap="switchBg" class="switch switch_bg">
              <image
                class="icon_switchbg"
                src="../../../../assets/images/moka/makecard/switchbg.png"
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
        :hidden="canvasHidden"
        :style="{ width: cutCanvasWH + 'px', height: cutCanvasWH + 'px' }"
      ></canvas>
    </view>
    <view style="width: 0px; height: 0px; overflow: hidden">
      <canvas
        canvasId="firstCanvas"
        :hidden="canvasHidden"
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
import { qrcode } from "../../../../api/index";
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
      //   screenH: (l - 44 - s.statusBarHeight) * r,
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
    };
  },
  methods: {
    touchStart(a) {
      this.allowScroll = false;
      var e = parseInt(a.currentTarget.id);
      var t = "";
      var n = false;
      if (
        ((t = e >= 0 && e < this.photos.length ? e : -1),
        (n = true),
        a.touches.length >= 2)
      ) {
        var h = true;
        var o = a.touches[1].pageX - a.touches[0].pageX,
          s = a.touches[1].pageY - a.touches[0].pageY;
        d = Math.sqrt(o * o + s * s);
      }
    },
    touchMove() {},
    touchEnd() {},
    isTouchInLayout() {},
    sliderChange(t) {
      this.allowScroll = true;
      var r = 750 / width;
      var a = t.detail.y,
        e = 274 / r,
        o = (((this.card.height - this.screenH + 40) / r) * a) / e;
      this.scrollTop = o;
      console.log(this.scrollTop, "this.scrollTop");
    },
    switchBirthday() {},
    switchBWH() {},
    switchQrcode() {},
    switchBg() {},
    make() {
      this.showMaking = true;
    },
    changePhoto(t) {
      console.log(t, "t----");
      var a = parseInt(t.currentTarget.id),
        _this = this;
      wx.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album"],
        success: function (t) {
          var o = t.tempFilePaths[0];
          _this.photos[a] = o;
          _this.getPhotoInfos([], 0);
          _this.changeIndex = -1;
          _this.showChangeButton = false;
        },
      });
    },
    getPhotoInfos(e, o) {
      let s = this.photos;
      let i = this.card.layouts;
      let l = s[o];
      let r = i[o];
      let _this = this;
      wx.getImageInfo({
        src: l,
        success: function (i) {
          var l, n, h, d;
          i.width / i.height > r.height / r.width
            ? ((n = r.width),
              (l = (i.width / i.height) * n),
              (h = true),
              (d = false))
            : ((l = r.height),
              (n = (i.height / i.width) * l),
              (h = false),
              (d = true));
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
            _this.photos = s;
            _this.photoInfos = e;
          } else {
            _this.getPhotoInfos(e, o);
          }
        },
      });
    },
    scroll(t) {
      console.log(this.scrollInfo, "this.scrollInfo");
      // this.scrollInfo[t.currentTarget.id].x = t.detail.scrollLeft, this.data.scrollInfo[t.currentTarget.id].y = t.detail.scrollTop;
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
      console.log(111, this.moka_code);
      wx.downloadFile({
        url: this.moka_code,
        // url: "https://yuepai-oss.qubeitech.com/invite/111661/5bed3f4d-ffb9-11ed-a646-f7624355584a-qa60.jpeg",
        success: function (e) {
          console.log(e, "e");
          if (200 === e.statusCode && t) {
            if (t) {
              _this.blackCode = e.tempFilePath;
            } else {
              _this.whiteCode = e.tempFilePath;
            }
            console.log(_this.blackCode, _this.whiteCode);
            _this.drawCode(t);
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
    async qrcode(params) {
      try {
        let res = await qrcode(params);
        this.moka_code = res.data.data;
        this.cutAvartar();
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    let mokaIndex = moka.getIndexByCardId("1001010501");
    this.card = moka.layouts[mokaIndex];
    this.photos = [
      "https://yuepai-oss.qubeitech.com/invite/111661/5bed3f4d-ffb9-11ed-a646-f7624355584a-qa60.jpeg",
      "https://yuepai-oss.qubeitech.com/notice/111452/fe4576f1-ff51-11ed-a646-f7624355584a-qa60.jpg",
      "https://yuepai-oss.qubeitech.com/invite/111514/b6417311-ff7c-11ed-a646-f7624355584a-qa60.jpg",
      "https://yuepai-oss.qubeitech.com/invite/111166/fbe29799-f48f-11ed-a646-f7624355584a.jpg",
      "https://yuepai-oss.qubeitech.com/invite/111166/fbe2979a-f48f-11ed-a646-f7624355584a.jpg",
    ];
    this.userInfo = {
      avatar:
        "https://yuepai-oss.qubeitech.com/avatar/111111/2f6e9fa5-0353-11ee-8f34-812b5b24112e-qa60.jpg",
      nickname: "nickname",
      province: "province",
      city: "city",
      area: "area",
      province_name: "province_name",
      city_name: "city_name",
      area_name: "area_name",
      sex: 0,
      birthday: "1994-08-29",
      height: 100,
      weight: 200,
      is_bwh: true,
      bwh_b: 38,
      bwh_w: 39,
      bwh_h: 40,
      shoe: 41,
    };
    var arr = [];
    for (var i = 0; i < this.photos.length; i++) {
      arr.push({
        x: 0,
        y: 0,
        scale: 1,
      });
    }
    this.scrollInfo = arr;
    this.qrcode({
      source: "homepage",
    });
    this.getPhotoInfos([], 0);
  },
};
</script>

<style lang="scss" scoped></style>
