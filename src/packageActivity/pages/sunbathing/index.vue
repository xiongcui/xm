<template>
  <view class="sunbathing">
    <view class="sunbathing-item">
      <view class="sunbathing-label"> 综合评价 </view>
      <i-rate
        class="evaluate-rate"
        :size="26"
        :value="score"
        :key="0"
        @change="scoreChange"
      >
      </i-rate>
    </view>
    <view class="sunbathing-item">
      <view class="sunbathing-label"> 评价内容 </view>
      <textarea
        class="sunbathing-desc"
        auto-height
        placeholder="展开说说对活动的想法吧..."
        v-model="desc"
        maxlength="2000"
      />
    </view>
    <view class="sunbathing-item">
      <view class="sunbathing-label"> 作品分享 </view>
      <view class="works-upload">
        <view class="works-upload-list">
          <block v-if="imgList.length">
            <view
              class="works-upload-img"
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
          <view class="works-upload-img" @tap="chooseImage">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/upload-img.png"
              class="upload-img"
              mode="aspectFit"
            ></image>
            <view>
              <text class="upload-txt">分享活动作品</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="works-btn">
      <text class="release" @tap="submit">发布</text>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { errortip } from "../../../utils/util";
import { sunbathingCreate } from "../../../api/index.js";
import { Base64 } from "js-Base64";
export default {
  name: "sunbathing",
  data() {
    return {
      oid: "",
      score: 0,
      desc: "",
      imgList: [],
    };
  },
  methods: {
    scoreChange(e) {
      this.score = e.detail.index;
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
          scr_type: "sport_comment",
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
      if (this.score === "") {
        errortip("请选择评分！");
        return false;
      }
      if (!this.desc) {
        errortip("请填写评价内容！");
        return false;
      }
      this.sunbathingCreate({
        apply_oid: this.oid,
        score: this.score,
        content: this.desc,
        sharing: this.imgList,
      });
    },
    async sunbathingCreate(params) {
      try {
        let res = await sunbathingCreate(params);
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    if (options.oid) {
      this.oid = options.oid;
    }
  },
};
</script>

<style lang="scss" scoped></style>
