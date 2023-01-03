<template>
  <view class="complaint">
    <view class="complaint-title">投诉用户</view>
    <view class="complaint_top">
      <view class="complaint_top_left">
        <image :src="'a'" class="avatar"></image>
        <view class="complaint_info">
          <view class="complaint_name">
            nickname
            <block v-if="complaintInfo.author.sex !== null">
              <image
                src="../../../assets/images/nan.png"
                class="complaint_sex"
                v-if="complaintInfo.author.sex == 1"
              ></image>
              <image
                src="../../../assets/images/nv.png"
                class="complaint_sex"
                v-if="complaintInfo.author.sex == 0"
              ></image>
            </block>
          </view>
          <view class="complaint_p">
            <text> 模特 </text>
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
          {{ item.name }}
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
              src="../../../assets/images/upload-img.png"
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
export default {
  name: "complaint",
  data() {
    return {
      isIphoneX: false,
      complaintInfo: {
        author: {},
      },
      reason: "",
      imgList: [],
      reasonData: [
        {
          name: 11,
          ispick: false,
        },
        {
          name: 22,
          ispick: false,
        },
        {
          name: 44,
          ispick: false,
        },
      ],
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
        url: "https://tapi.cupz.cn/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "photo",
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
    submit() {},
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
};
</script>

<style lang="scss" scoped></style>
