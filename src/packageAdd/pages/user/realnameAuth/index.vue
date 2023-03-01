<template>
  <view class="realname">
    <view class="realname_info">
      <view class="realname_title">
        <image src="../../../../assets/images/user/realname/sfz.jpg"></image>
        请上传身份证的正反面
      </view>
      <view class="realname_tips">
        <image src="../../../../assets/images/common/warn_icon.png"></image>
        请确保二代身份证有效、并且头像文字清晰，四角对齐，无反光、无遮挡。
      </view>
      <view class="card_identity">
        <image
          :src="realname_rx"
          v-if="realname_rx"
          @tap="chooseImage(0)"
        ></image>
        <image
          v-else
          @tap="chooseImage(0)"
          src="../../../../assets/images/user/realname/card_tx.jpg"
        ></image>
      </view>
      <view class="card_identity">
        <image
          :src="realname_gh"
          v-if="realname_gh"
          @tap="chooseImage(1)"
        ></image>
        <image
          v-else
          @tap="chooseImage(1)"
          src="../../../../assets/images/user/realname/card_gh.jpg"
        ></image>
      </view>
      <view class="realname_title">
        <image src="../../../../assets/images/user/realname/sfz.jpg"></image>
        请完善您的个人信息
      </view>
      <view class="realname_form">
        <view class="label"> 真实姓名 </view>
        <input
          class="realname-input"
          placeholder="请输入真实姓名"
          v-model="realname"
        />
      </view>
      <view class="realname_form">
        <view class="label"> 身份证号 </view>
        <input
          class="realname-input"
          placeholder="请输入身份证号"
          v-model="card"
        />
      </view>
      <view class="realname_txt">
        <image src="../../../../assets/images/user/realname/safety.png"></image>
        认证信息已加密 仅用于匹配认证信息
      </view>
      <view class="realname_btn">确认提交</view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { ocrCard } from "../../../../api/index";
import { Base64 } from "js-Base64";
export default {
  name: "realnameAuth",
  data() {
    return {
      realname: "",
      realname_rx: "",
      realname_gh: "",
      card: "",
      frontfileName: "",
      backfileName: "",
    };
  },
  methods: {
    chooseImage(type) {
      let _this = this;
      wx.chooseMedia({
        count: 1,
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
            if (type == 0) {
              _this.uprxImgs(imgInfo, type);
            } else {
              _this.upghImgs(imgInfo, type);
            }
          });
        },
      });
    },
    uprxImgs(dataInfo, type) {
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
          scr_type: "idcard",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.realname_rx = data.data.file1;
            this.frontfileName = data.data.file_name1;
            this.ocrCard(
              {
                id_card_filename: data.data.file_name1,
                id_card_side: "front",
              },
              type
            );
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    upghImgs(dataInfo, type) {
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
          scr_type: "photo",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.realname_gh = data.data.file1;
            this.backfileName = data.data.file_name1;
            this.ocrCard(
              {
                id_card_filename: data.data.file_name1,
                id_card_side: "back",
              },
              type
            );
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    async ocrCard(params, type) {
      try {
        let res = await ocrCard(params);
        if (res.data.data.id_card_front) {
          if (type == "front") {
            this.realname = res.data.data.id_name;
          } else {
            this.card = res.data.data.id_no;
          }
        }
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped></style>
