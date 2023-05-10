<template>
  <view class="main">
    <view>
      <view class="contact_info">
        <view class="item line-b ub" v-if="from_page == 'addtonggao'">
          <view class="contact_info_title">我的联系方式</view>
          <view class="contact_info_title_tip">（仅报名者可见）</view>
        </view>
        <view class="item line-b ub" v-if="from_page == 'tonggaoreg'">
          <view class="contact_info_title">我的联系方式</view>
        </view>
        <view class="item line-b ub">
          <view class="item_title">联系人</view>
          <view class="ub-f1 item_input">
            <input
              maxlength="60"
              name="person"
              placeholder="请输入联系人姓名"
              placeholderClass="input-placeholder"
              type="text"
              v-model="info.person"
            />
          </view>
        </view>
        <view class="item line-b ub">
          <view class="item_title">微信号</view>
          <view class="ub-f1"></view>
          <view class="item_switch">
            <switch
              @tap="switch_selct_wechat"
              :checked="info.is_wechat == 1 ? true : false"
              class="btn_switch"
              color="#fe5457"
            ></switch>
          </view>
        </view>
        <view class="item line-b" v-if="info.is_wechat == 1">
          <view class="item_input">
            <input
              name="wechat"
              placeholder="请输入微信号"
              placeholderClass="input-placeholder"
              type="text"
              v-model="info.wechat"
            />
          </view>
        </view>
        <view class="item line-b ub">
          <view class="item_title">手机号</view>
          <view class="ub-f1"></view>
          <view class="item_switch">
            <switch
              @tap="switch_selct_mobile"
              :checked="info.is_mobile == 1 ? true : false"
              class="btn_switch"
              color="#fe5457"
            ></switch>
          </view>
        </view>
        <view class="item line-b" v-if="info.is_mobile == 1">
          <view class="item_input">
            <input
              name="wechat"
              placeholder="请输入手机号"
              placeholderClass="input-placeholder"
              type="text"
              v-model="info.mobile"
            />
            <!-- <button
              @getmobilenumber="changemobile"
              class="change_mobile_btn"
              openType="getmobileNumber"
            >
              {{ info.mobile }}
            </button> -->
          </view>
        </view>
        <view class="item ub">
          <view class="item_title item_title_qrcode">微信名片二维码</view>
          <view class="ub-f1"></view>
          <view class="imgsblock">
            <view class="imgs">
              <view
                @tap="chooseImage"
                class="preview_img"
                v-if="info.wechat_links"
              >
                <image
                  catchtap="showbig"
                  mode="aspectFill"
                  :src="info.wechat_links"
                ></image>
                <view @tap.stop="delete_preview" class="preview_delet">
                  <image
                    mode="scaleToFill"
                    src="https://yuepai-oss.qubeitech.com/static/common/icon_sizer_close.png"
                  ></image>
                </view>
              </view>
              <view @tap="chooseImage" class="pick_img" v-else>
                <image
                  src="https://yuepai-oss.qubeitech.com/static/common/img_add.png"
                ></image>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="sub_btn">
        <button @tap="submit">保 存</button>
      </view>
    </view>
    <view @tap="closeModel" class="modal-bg" v-if="showModel"></view>
    <view class="model_box ub" v-if="showModel">
      <view class="ub-f1"></view>
      <view class="model_main">
        <view class="model_title">
          <view
            >手机作为联系方式，为保护您的隐私，建议提交微信，请确认是否开启手机号码</view
          >
        </view>
        <view class="model_btn ub">
          <view class="ub-f1"></view>
          <view @tap="cancleModel" class="btn_no">关闭</view>
          <view class="ub-f1"></view>
          <view @tap="subModel" class="btn_yes">开启</view>
          <view class="ub-f1"></view>
        </view>
      </view>
      <view class="ub-f1"></view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { userContact, subContact } from "../../../../api/index";
import { Base64 } from "js-Base64";
import { errortip } from "../../../../utils/util";
export default {
  name: "contact",
  data() {
    return {
      from_page: "",
      showModel: false,
      info: {
        person: "",
        is_wechat: 1,
        is_mobile: 1,
        mobile: "",
        wechat: "",
        wechat_links: "",
      },
    };
  },
  methods: {
    switch_selct_wechat() {
      this.info.is_wechat = this.info.is_wechat ? 0 : 1;
    },
    switch_selct_mobile() {
      console.log(11);
      this.info.is_mobile = this.info.is_mobile ? 0 : 1;
      if (this.info.is_mobile) this.showModel = true;
    },
    submit() {
      if (!this.info.person) {
        errortip("请填写联系人");
        return false;
      }
      if (!this.info.is_mobile && !this.info.is_wechat) {
        errortip("微信号和手机号不能同时关闭哦～");
        return false;
      }
      if (this.info.is_wechat && !this.info.wechat) {
        errortip("请填写微信号");
        return false;
      }
      if (this.info.is_mobile && !this.info.mobile) {
        errortip("请填写手机号");
        return false;
      }
      this.subContact({
        person: this.info.person,
        mobile: this.info.mobile,
        wechat: this.info.wechat,
        wechat_links: this.info.wechat_links,
      });
    },
    delete_preview() {
      this.info.wechat_links = "";
    },
    chooseImage() {
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
          scr_type: "wechat_qr_code",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.info.wechat_links = data.data.file1;
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    closeModel() {
      this.showModel = false;
      this.info.is_mobile = 0;
    },
    cancleModel() {
      this.showModel = false;
      this.info.is_mobile = 0;
    },
    subModel() {
      this.showModel = false;
      this.info.is_mobile = 1;
    },
    async userContact(params) {
      try {
        let res = await userContact(params);
        this.info = res.data.data;
      } catch (error) {}
    },
    async subContact(params) {
      try {
        let res = await subContact(params);
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({
          contact: this.info,
        });
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
  },
  created() {
    this.userContact("");
  },
};
</script>

<style lang="scss" scoped></style>
