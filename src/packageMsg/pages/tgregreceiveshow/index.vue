<template>
  <view class="tgregreceiveshow">
    <view class="tgregreceive_top">
      <view class="tgregreceive_top_left">
        <image :src="tgregreceiveInfo.author.avatar" class="avatar"></image>
        <view class="tgregreceive_info">
          <view class="tgregreceive_name">
            nickname
            <block v-if="tgregreceiveInfo.author.sex !== null">
              <image
                src="../../../assets/images/nan.png"
                class="tgregreceive_sex"
                v-if="tgregreceiveInfo.author.sex == 1"
              ></image>
              <image
                src="../../../assets/images/nv.png"
                class="tgregreceive_sex"
                v-if="tgregreceiveInfo.author.sex == 0"
              ></image>
            </block>
          </view>
          <view class="tgregreceive_p">
            <text> ewe | 北京 </text>
          </view>
        </view>
      </view>
      <view class="tgregreceive_right">
        <view class="time">6天前来过</view>
        <view class="complaint">投诉</view>
      </view>
    </view>
    <view class="tgregreceive_info">
      <view class="tgregreceive_title"> 对方报名信息 </view>
      <view class="tgregreceive_remark">
        <view class="tgregreceive_remark_label">报名备注：</view>
        <view class="tgregreceive_remark_ct"
          >内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</view
        >
      </view>
    </view>
    <view class="tgregreceive_contact">
      <view class="tgregreceive_title"> 对方联系方式 </view>
      <view class="contact_info">
        <view class="contact_info_left">
          <view>手机号：</view>
          <view>13693628075</view>
        </view>
        <view class="copy">复制</view>
      </view>
      <view class="contact_info">
        <view class="contact_info_left">
          <view>微信号：</view>
          <view>Anne</view>
        </view>
        <view class="copy" @tap="showQRcode">点击查看微信二维码</view>
      </view>
    </view>
    <view class="tgregreceive_bottom">
      <view class="tgregreceive_bottom_left">
        <view class="tgregreceive_bottom_nobg">不合适</view>
        <view class="tgregreceive_bottom_bg">合适</view>
      </view>
      <view class="tgregreceive_bottom_rt">
        <view class="communicate">发起沟通</view>
      </view>
    </view>
    <view class="modal_box" v-if="showModel">
      <view class="modal_content">
        <view> 微信二维码 </view>
        <image class="qrcode-img" src=""></image>
        <image
          src="../../../assets/images/common/x_icon.png"
          class="close-img"
          @tap="closeQRcode"
        ></image>
        <view class="save" @tap="clickSaveImg">保存到相册</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "tgregreceiveshow",
  data() {
    return {
      showModel: false,
      tgregreceiveInfo: {
        author: {},
      },
    };
  },
  methods: {
    closeQRcode() {
      this.showModel = false;
    },
    showQRcode() {
      this.showModel = true;
    },
    clickSaveImg() {
      //先授权相册
      wx.getSetting({
        success: (res) => {
          if (!res.authSetting["scope.writePhotosAlbum"]) {
            //未授权的话发起授权
            wx.authorize({
              scope: "scope.writePhotosAlbum",
              success: () => {
                //用户允许授权，保存到相册
                this.saveImg();
              },
              fail: () => {
                //用户拒绝授权，然后就引导授权（这里的话如果用户拒绝，不会立马弹出引导授权界面，坑就是上边所说的官网原因）
                wx.openSetting({
                  success: () => {
                    wx.authorize({
                      scope: "scope.writePhotosAlbum",
                      succes: () => {
                        //授权成功，保存图片
                        this.saveImg();
                      },
                    });
                  },
                });
              },
            });
          } else {
            //已经授权
            this.saveImg();
          }
        },
      });
    },
    saveImg() {
      //保存到相册
      let url = this.data.contact.wechat_links;
      wx.downloadFile({
        //这里如果有报错就按照上边的解决方案来处理
        url: url,
        success: (res) => {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: (res) => {
              wx.showToast({
                title: "保存成功！",
              });
            },
            faile: (err) => {
              console.log("失败！");
            },
          });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
