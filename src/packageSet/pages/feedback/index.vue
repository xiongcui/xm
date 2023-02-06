<template>
  <view class="feedback">
    <view class="feedback-type">
      <text class="type">反馈类型</text>
      <view class="feedback-radio">
        <radio-group @change="radioChange">
          <!-- <label class="radio">
            <radio
              value="问题反馈"
              :checked="!checked"
              color="#ff1e3e"
            />问题反馈
          </label>
          <label class="radio">
            <radio
              value="功能建议"
              :checked="checked"
              color="#ff1e3e"
            />功能建议
          </label> -->
          <label
            class="weui-cell weui-check__label"
            v-for="item in items"
            :key="item.value"
          >
            <label class="radio">
              <radio :value="item.value" :checked="true" color="#ff1e3e" />
            </label>
            {{ item.name }}
          </label>
        </radio-group>
      </view>
    </view>
    <textarea
      class="feedback-desc"
      auto-height
      placeholder="请描述您遇到的相关问题或功能建议，也可上传手机截图。不错的反馈将收到精美礼品，同时帮助页面中也会记下您的贡献"
      v-model="desc"
    />
    <view class="feedback-upload-list">
      <block v-if="imgList.length">
        <view
          class="feedback-upload-img"
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
      </block>
      <view class="feedback-upload-img" @tap="chooseImage">
        <image
          src="../../../assets/images/upload-img.png"
          class="upload-img"
          mode="aspectFit"
        ></image>
        <view>
          <text class="upload-txt">上传图片</text>
        </view>
      </view>
    </view>
    <cover-view class="subbtn_bottom">
      <button @tap="submit">提交</button>
    </cover-view>
  </view>
</template>

<script>
import "./index.scss";
import { Base64 } from "js-Base64";
import { feedback } from "../../../api/index";
import { errortip } from "../../../utils/util";
export default {
  name: "feedback",
  data() {
    return {
      checked: true,
      desc: "",
      imgList: [],
      advise: "功能建议",
      items: [
        { value: "问题反馈", name: "问题反馈" },
        { value: "功能建议", name: "功能建议", checked: true },
      ],
    };
  },
  methods: {
    radioChange(e) {
      this.advise = e.detail.value;
      const items = this.items;
      for (let i = 0, len = items.length; i < len; ++i) {
        items[i].checked = items[i].value === e.detail.value;
      }
      this.items = items;
    },
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    uploadImgClose(index) {
      this.imgList.splice(index, 1);
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
          scr_type: "feedback",
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
      let params = {
        advise: this.advise, // '问题反馈' 或  '功能建议'
        content: this.desc,
        evidence: this.imgList,
      };
      this.feedback(params);
      console.log(params);
    },
    async feedback(params) {
      try {
        let res = await feedback(params);
        errortip("反馈成功");
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped></style>
