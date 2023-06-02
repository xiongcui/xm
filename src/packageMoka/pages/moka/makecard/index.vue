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
        @touch-start="touchStart"
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
                  transform:
                    //     'rotate(90deg)' +
                    //    ' translate('+
                    //       -card.userInfo.offset + 'rpx',
                    //       -card.userInfo.offset + 'rpx',+
                    //     ')',
                    `rotate(90deg) translate(${
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
                :hidden="!(showChangeButton && index == changeIndex)"
                :id="item.id"
                style="top:(item.height-100)*0.5 +'rpx',right:(item.width-100)*0.5+'rpx'"
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
    <canvas
      canvasId="cutCanvas"
      :hidden="canvasHidden"
      :style="{ width: cutCanvasWH + 'px', height: cutCanvasWH + 'px' }"
    ></canvas>
    <canvas
      canvasId="firstCanvas"
      :hidden="canvasHidden"
      style="width: 200px; height: 200px"
    ></canvas>
  </view>
</template>

<script>
import "./index.scss";
const device = wx.getSystemInfoSync(); // 获取设备信息
const width = device.screenWidth; // 示例为一个与屏幕等宽的正方形裁剪框
const height = device.screenHeight;
const statusBarHeight = device.statusBarHeight;
const moka = require("../../../../assets/js/moka.js");
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
    };
  },
  methods: {
    touchStart() {},
    sliderChange() {},
    switchBirthday() {},
    switchBWH() {},
    switchQrcode() {},
    switchBg() {},
    make() {},
    changePhoto() {},
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
  },
};
</script>

<style lang="scss" scoped></style>
