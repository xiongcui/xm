<template>
  <view class="chooseisself">
    <view class="main">
      <view class="title">这是给谁做模卡？</view>
      <block v-if="infor.isartist">
        <view class="item_block ub">
          <view class="side_gap"></view>
          <view @tap="goSelfMoka" class="item item_self ub-f1 ub">
            <view class="ub-f1 ub">
              <view class="item_name"
                >给<text class="item_name_self">自己</text>做模卡</view
              >
              <view class="item_arrow">
                <image
                  mode="widthFix"
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/index/arrow.png"
                ></image>
              </view>
            </view>
            <view class="item_icon">
              <image
                mode="widthFix"
                src="https://yuepai-oss.qubeitech.com/static/images/moka/index/moka_self.png"
              ></image>
            </view>
          </view>
          <view class="side_gap"></view>
        </view>
        <view class="item_block ub">
          <view class="side_gap"></view>
          <view @tap="goOtherMoka" class="item item_other ub">
            <view class="ub-f1 ub">
              <view class="item_name"
                >给<text class="item_name_other">别人</text>做模卡</view
              >
              <view class="item_arrow">
                <image
                  mode="widthFix"
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/index/arrow.png"
                ></image>
              </view>
            </view>
            <view class="item_icon">
              <image
                mode="widthFix"
                src="https://yuepai-oss.qubeitech.com/static/images/moka/index/moka_other.png"
              ></image>
            </view>
          </view>
          <view class="side_gap"></view>
        </view>
      </block>
      <block v-else>
        <view class="item_block ub">
          <view class="side_gap"></view>
          <view @tap="goOtherMoka" class="item item_other ub">
            <view class="ub-f1 ub">
              <view class="item_name"
                >给<text class="item_name_other">别人</text>做模卡</view
              >
              <view class="item_arrow">
                <image
                  mode="widthFix"
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/index/arrow.png"
                ></image>
              </view>
            </view>
            <view class="item_icon">
              <image
                mode="widthFix"
                src="https://yuepai-oss.qubeitech.com/static/images/moka/index/moka_other.png"
              ></image>
            </view>
          </view>
          <view class="side_gap"></view>
        </view>
        <view class="item_block ub">
          <view class="side_gap"></view>
          <view @tap="goSelfMoka" class="item item_self ub-f1 ub">
            <view class="ub-f1 ub">
              <view class="item_name"
                >给<text class="item_name_self">自己</text>做模卡</view
              >
              <view class="item_arrow">
                <image
                  mode="widthFix"
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/index/arrow.png"
                ></image>
              </view>
            </view>
            <view class="item_icon">
              <image
                mode="widthFix"
                src="https://yuepai-oss.qubeitech.com/static/images/moka/index/moka_self.png"
              ></image>
            </view>
          </view>
          <view class="side_gap"></view>
        </view>
      </block>
    </view>
    <view class="choose_imgs_block">
      <view class="choose_imgs_title ub">
        <view class="side_gap"></view>
        <view class="ub-f1">已选照片</view>
        <view class="side_gap"></view>
      </view>
      <view class="choose_imgs ub">
        <view class="side_gap"></view>
        <view class="ub-f1 ub">
          <block v-for="(item, index) in photos" :key="index">
            <view class="photo-container" v-if="index <= 3">
              <image class="photo" mode="aspectFill" :src="item"></image>
              <text class="tip_add_count" v-if="index == 3 && photos.length > 4"
                >+{{ photos.length - 4 }}</text
              >
            </view>
            <view class="side_gap_mid" v-if="index <= 2"></view>
          </block>
        </view>
        <view class="side_gap"></view>
      </view>
      <view class="bottom_gap"></view>
    </view>
  </view>
</template>

<script>
import { openPage } from "../../../../utils/util";
import { nonpersonalList } from "../../../../api/index";
import "./index.scss";
export default {
  name: "chooseisself",
  data() {
    return {
      infor: {
        isartist: 1,
      },
      photos: [],
    };
  },
  methods: {
    goSelfMoka() {
      openPage("/packageMoka/pages/moka/inforother/index?myself=1");
    },
    goOtherMoka() {
      if (this.infor.has_sub_user) {
        openPage("/packageMoka/pages/moka/otherlist/index");
      } else {
        openPage("/packageMoka/pages/moka/inforother/index?=0");
      }
    },
    async nonpersonalList(params) {
      try {
        let res = await nonpersonalList(params);
        this.infor.has_sub_user = res.data.data.length;
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    var selectedPhotos = wx.getStorageSync("selectedPhotos");
    this.photos = selectedPhotos;
    this.nonpersonalList("");
  },
};
</script>

<style lang="scss" scoped></style>
