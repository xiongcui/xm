<template>
  <view class="choosephoto">
    <view class="photos-container ub">
      <view
        class="photo-container"
        v-for="(item, index) in photos"
        :key="index"
      >
        <image class="photo" mode="aspectFill" :src="item"></image>
        <image
          @tap="deletePhoto"
          class="delete-button"
          :id="index"
          src="../../../../assets/images/moka/makecard/delete.png"
        ></image>
      </view>
    </view>
    <view class="choose-number">{{ photos.length }}/{{ maxCount }}</view>
    <text class="choose-hint" v-if="maxCount - photos.length > 0"
      >模版为{{ maxCount }}张照片，还差{{
        maxCount - photos.length
      }}张，请继续添加</text
    >
    <view @tap="choosePhoto" class="choose-button">{{ buttonTitle }}</view>
  </view>
</template>

<script>
import { openPage } from "../../../../utils/util";
import "./index.scss";
const moka = require("../../../../assets/js/moka.js");
export default {
  name: "choosephoto",
  data() {
    return {
      photos: [],
      maxCount: 10,
      buttonTitle: "上传照片",
    };
  },
  methods: {
    setButtonTitle: function () {
      var t = this.photos.length,
        o = "";
      o = t >= this.maxCount ? "开始制作" : 0 == t ? "添加照片" : "继续添加";
      this.buttonTitle = o;
    },
    choosePhoto() {
      this.photos;
      var o = this.photos.length,
        e = this.maxCount;
      if (o >= e)
        return (
          wx.setStorageSync("selectedPhotos", this.photos),
          void openPage("/packageMoka/pages/moka/chooseisself/index")
        );
      var s = this;
      wx.chooseImage({
        count: e - o,
        sizeType: ["compressed"],
        sourceType: ["album"],
        success: function (o) {
          var e = o.tempFilePaths;
          (s.photos = [].concat(s.photos, e)),
            (s.photos = s.photos),
            s.setButtonTitle();
        },
      });
    },
    deletePhoto(t) {
      var o = parseInt(t.currentTarget.id);
      this.photos.splice(o, 1);
      this.setButtonTitle();
    },
  },
  onLoad: function (options) {
    let cardid = wx.getStorageSync("cardid");
    let mokaIndex = moka.getIndexByCardId(cardid);
    var layouts = moka.layouts[mokaIndex];
    console.log(layouts, "layouts");
    photos = wx.getStorageSync("selectedPhotos");
    this.maxCount = layouts.maxCount;
    this.photos = photos;
    this.setButtonTitle();
  },
};
</script>

<style lang="scss" scoped></style>
