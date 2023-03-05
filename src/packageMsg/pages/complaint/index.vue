<template>
  <view class="complaint">
    <view class="complaint-title">投诉用户</view>
    <view class="complaint_top">
      <view class="complaint_top_left">
        <image :src="avatar" class="avatar"></image>
        <view class="complaint_info">
          <view class="complaint_name">
            {{ nickname }}
          </view>
          <view class="complaint_p">
            <text> {{ career }} </text>
          </view>
        </view>
      </view>
    </view>
    <view class="complaint_reason">
      <view class="complaint-title">请选择投诉原因</view>
      <view class="complaint-tag-box">
        <text
          @tap="select_tag(item)"
          class="tag_item"
          :class="item.ispick ? 'tag_itemed' : ''"
          v-for="(item, index) in reasonData"
          :key="index"
        >
          {{ item.value }}
        </text>
      </view>
      <view class="complaint_input">
        <textarea
          :autoHeight="true"
          class="intro_content"
          maxlength="500"
          name="intro"
          placeholder="请输入您的投诉内容"
          placeholderClass="intro_content_none"
          v-model="reason"
        ></textarea>
      </view>
      <view class="complaint_evidence">
        <view class="complaint-title">证据截图</view>
        <view class="complaint-upload-list">
          <view
            class="complaint-upload-img"
            v-for="(item, index) in imgList"
            :key="index"
          >
            <image
              :src="item"
              class="upload-width"
              mode="aspectFill"
              @tap="previewImage(item, imgList)"
            ></image>
            <text class="upload-close" @tap="uploadImgClose(index)"></text>
          </view>
          <view class="complaint-upload-img" @tap="chooseImage">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/upload-img.png"
              class="upload-img"
              mode="aspectFit"
            ></image>
            <view>
              <text class="upload-txt">上传照片</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <cover-view
      class="subbtn_bottom_block"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <cover-view class="subbtn_bottom">
        <button @tap="submit">提交</button>
      </cover-view>
    </cover-view>
  </view>
</template>

<script>
import "./index.scss";
import { publicConfig, publicComplain } from "../../../api/index.js";
import { errortip } from "../../../utils/util";
import { Base64 } from "js-Base64";
export default {
  name: "complaint",
  data() {
    return {
      isIphoneX: false,
      visitor_id: "",
      avatar: "",
      nickname: "",
      province_name: "",
      career: "",
      reason: "",
      imgList: [],
      reasonData: [],
      uuid: "",
    };
  },
  methods: {
    select_tag(row) {
      this.reasonData.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    uploadImgClose(index) {
      this.imgList.splice(index, 1);
    },
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    chooseImage() {
      if (this.imgList.length >= 9) {
        wx.showToast({
          title: "最多上传9张图！",
          icon: "none",
        });
        return false;
      }
      let _this = this;
      wx.chooseMedia({
        count: 9 - this.imgList.length,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success(res) {
          wx.showLoading({
            title: "正在上传中",
          });
          let arr = res.tempFiles;
          var imgInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            imgInfo = v;
            _this.upImgs(imgInfo);
          });
        },
      });
    },
    upImgs(dataInfo) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "complain",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.imgList.push(data.data.file1);
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    submit() {
      let reason = this.reasonData.find((item) => {
        return item.ispick;
      });
      if (!reason) {
        errortip("请选择投诉原因");
        return false;
      }
      if (!this.reason) {
        errortip("请输入您投诉的内容");
        return false;
      }
      let params = {
        content: this.reason,
        evidence: this.imgList,
        reason: reason.value,
        source: "收到报名",
        sued_uuid: this.visitor_id,
      };
      this.publicComplain(params);
      console.log(params);
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        let arr = [];
        arr = res.data.data.map((item, index) => {
          item.ispick = false;
          return item;
        });
        this.reasonData = arr;
      } catch (error) {}
    },
    async publicComplain(params) {
      try {
        let res = await publicComplain(params);
        errortip("投诉成功");
        setTimeout(() => {
          wx.navigateBack({
            delta: 1,
          });
        }, 3000);
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    this.visitor_id = options.visitor_id;
    this.avatar = options.avatar;
    this.nickname = options.nickname;
    this.province_name = options.province_name;
    this.career = options.career;
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.publicConfig({
      type: ["complain_reason"],
    });
  },
};
</script>

<style lang="scss" scoped></style>
