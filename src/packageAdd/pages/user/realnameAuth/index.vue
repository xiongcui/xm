<template>
  <view class="realname">
    <view class="realname_info" v-show="pageShow == 'uploadimg'">
      <view class="realname_title">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/user/realname/sfz.jpg"
        ></image>
        请上传身份证的正反面
      </view>
      <view class="realname_tips">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/warn_icon.png"
        ></image>
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
          src="https://yuepai-oss.qubeitech.com/static/images/user/realname/card_tx.jpg"
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
          src="https://yuepai-oss.qubeitech.com/static/images/user/realname/card_gh.jpg"
        ></image>
      </view>
      <view class="realname_btn" @tap="next">下一步</view>
    </view>
    <view class="realname_info" v-show="pageShow == 'info'">
      <view class="realname_title realname_info">
        识别到以下信息，点击可进行修改
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
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/user/realname/safety.png"
        ></image>
        认证信息已加密 仅用于匹配认证信息
      </view>
      <view class="realname_box_btn">
        <view class="re_upload" @tap="reupload">重新上传</view>
        <view class="realname_btn" @tap="submit">确认提交</view>
      </view>
      <!-- <view class="realname_btn">确认提交</view> -->
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { ocrCard, idcardInfo, ocrIdcard } from "../../../../api/index";
import { Base64 } from "js-Base64";
import { errortip, openPage } from "../../../../utils/util";
export default {
  name: "realnameAuth",
  data() {
    return {
      realname: "",
      realname_rx: "",
      realname_gh: "",
      realname_rx_off: false,
      realname_gh_off: false,
      card: "",
      frontfileName: "",
      backfileName: "",
      pageShow: "uploadimg",
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
    next() {
      if (this.realname_rx_off && this.realname_gh_off) {
        if (this.realname_rx && this.realname_gh) {
          this.pageShow = "info";
          this.idcardInfo("");
        } else {
          errortip("请先上传身份证");
        }
      } else {
        errortip("请检查身份证上传是否正确！");
        return false;
      }
    },
    reupload() {
      this.pageShow = "uploadimg";
    },
    submit() {
      this.ocrIdcard({
        id_name: this.realname,
        id_no: this.card,
      });
    },
    async ocrCard(params) {
      try {
        let res = await ocrCard(params);
        this.realname = res.data.data.id_name;
        this.card = res.data.data.id_no;
        if (params.id_card_side == "front") {
          this.realname_rx_off = true;
        }
        if (params.id_card_side == "back") {
          this.realname_gh_off = true;
        }
      } catch (error) {
        errortip(error.data.msg);
        if (params.id_card_side == "front") {
          this.realname_rx_off = false;
        }
        if (params.id_card_side == "back") {
          this.realname_gh_off = false;
        }
      }
    },
    async idcardInfo(params) {
      try {
        let res = await idcardInfo(params);
        if (res.data.data.id_card_front) {
          this.realname = res.data.data.id_name;
          this.card = res.data.data.id_no;
        }
      } catch (error) {}
    },
    async ocrIdcard(params) {
      try {
        let res = await ocrIdcard(params);
        let userInfo = wx.getStorageSync("userInfo");
        openPage(
          "/packageAdd/pages/user/baiduRealnameAuth/index?verify_token=" +
            res.data.data.verify_token +
            "&uuid=" +
            userInfo.uuid
        );
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped></style>
