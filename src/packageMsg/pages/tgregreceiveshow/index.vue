<template>
  <view class="tgregreceiveshow">
    <view class="tgregreceive_top">
      <view class="tgregreceive_top_left">
        <image :src="tgregreceiveInfo.visitor.avatar" class="avatar"></image>
        <view class="tgregreceive_info">
          <view class="tgregreceive_name">
            nickname
            <block v-if="tgregreceiveInfo.visitor.sex !== null">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                class="tgregreceive_sex"
                v-if="tgregreceiveInfo.visitor.sex == 1"
              ></image>
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                class="tgregreceive_sex"
                v-if="tgregreceiveInfo.visitor.sex == 0"
              ></image>
            </block>
          </view>
          <view class="tgregreceive_p">
            <text>
              {{
                tgregreceiveInfo.visitor.career_list &&
                tgregreceiveInfo.visitor.career_list[0]
              }}
              |
              {{ tgregreceiveInfo.visitor.province_name }}
            </text>
          </view>
        </view>
      </view>
      <view class="tgregreceive_right">
        <view class="time">{{ tgregreceiveInfo.date_humanize }}</view>
        <view class="complaint" @tap="complaint">投诉</view>
      </view>
    </view>
    <view class="tgregreceive_infos">
      <view class="tgregreceive_title"> 对方报名信息 </view>
      <view class="tgregreceive_remark">
        <view class="tgregreceive_remark_label"
          >{{ tgregreceiveInfo.title }}：</view
        >
        <view class="tgregreceive_remark_ct">{{
          tgregreceiveInfo.content
        }}</view>
      </view>
    </view>
    <view class="tgregreceive_contact">
      <view class="tgregreceive_title"> 对方联系方式 </view>
      <view class="contact_info" v-if="showAddress">
        <view class="contact_info_left">
          <view>手机号：</view>
          <view>{{ data.address.mobile }}</view>
        </view>
        <view class="copy" @tap="copy(data.address.mobile)">复制</view>
      </view>
      <view class="contact_info" v-if="showAddress">
        <view class="contact_info_left">
          <view>地址：</view>
          <view>{{ data.address.detail_address }}</view>
        </view>
        <view class="copy" @tap="copy(data.address.detail_address)">复制</view>
      </view>
      <view class="contact_info" v-if="showCelebrity">
        <view class="contact_info_left">
          <view>红人账号：</view>
          <view>{{ data.celebrity.nickname }}</view>
        </view>
        <view class="copy" @tap="copy(data.celebrity.nickname)">复制</view>
      </view>
      <view class="contact_info" v-if="showContact">
        <view class="contact_info_left">
          <view>微信号：</view>
          <view>{{ data.contact.wechat }}</view>
        </view>
        <view class="copy" @tap="showQRcode">点击查看微信二维码</view>
      </view>
    </view>
    <view class="tgregreceive_bottom">
      <view class="tgregreceive_bottom_left">
        <view
          class="tgregreceive_bottom_nobg"
          @tap="noConformance"
          v-if="visited_status == 200"
          >不符</view
        >
        <view
          class="tgregreceive_bottom_bg"
          @tap="appropriate"
          v-if="visited_status == 200"
          >合适</view
        >
        <view
          class="tgregreceive_bottom_nobg"
          v-if="visited_status == 410"
          @tap="abandonCooperation"
          >放弃合作</view
        >
        <view
          class="tgregreceive_bottom_bg"
          v-if="visited_status == 410"
          @tap="completeCooperation"
          >完成合作</view
        >
        <view
          class="tgregreceive_bottom_nobg"
          v-if="visited_status == 420"
          @tap="recoveryPending"
          >恢复待定</view
        >
        <view
          class="tgregreceive_bottom_bg"
          v-if="visited_status == 430"
          @tap="restoreAppropriately"
          >恢复合适</view
        >
        <view
          class="tgregreceive_bottom_nobg"
          v-if="visited_status == 440"
          @tap="Delete"
          >删除</view
        >
      </view>
      <view class="tgregreceive_bottom_rt">
        <view class="communicate" @tap="communicate">发起沟通</view>
      </view>
    </view>
    <view class="modal_box" v-if="showModel">
      <view class="modal_content">
        <view> 微信二维码 </view>
        <image class="qrcode-img" :src="data.contact.wechat_links"></image>
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png"
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
import { applyInfo, applyManage } from "../../../api/index";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "tgregreceiveshow",
  data() {
    return {
      sid: "",
      visited_status: "",
      showModel: false,
      tgregreceiveInfo: {
        visitor: {},
      },
      showContact: false,
      showCelebrity: false,
      showAddress: false,
      data: {
        contact: {
          person: "",
          wechat: "",
          wechat_links: "",
          mobile: "",
          is_wechat: 1,
          is_mobile: 1,
        },
        celebrity: {
          nickname: "",
          fans_number: "",
        },
        address: {
          detail_address: "",
          mobile: "",
          name: "",
        },
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
    appropriate() {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定标记该报名为合适吗？",
        success: function (res) {
          if (res.confirm) {
            _this.applyManage({
              even_type: 410,
              sid: _this.sid,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    noConformance() {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定标记该报名为不符吗？",
        success: function (res) {
          if (res.confirm) {
            _this.applyManage({
              even_type: 420,
              sid: _this.sid,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    completeCooperation() {
      this.applyManage({
        even_type: 440,
        sid: this.sid,
      });
    },
    abandonCooperation() {
      this.applyManage({
        even_type: 430,
        sid: this.sid,
      });
    },
    Delete() {
      this.applyManage({
        even_type: 111,
        sid: this.sid,
      });
    },
    recoveryPending() {
      this.applyManage({
        even_type: 450,
        sid: this.sid,
      });
    },
    restoreAppropriately() {
      this.applyManage({
        even_type: 460,
        sid: this.sid,
      });
    },
    copy(txt) {
      wx.setClipboardData({
        data: txt, //这个是要复制的数据
        success(res) {
          wx.getClipboardData({
            success(res) {
              console.log(res.data); // data
              if (res.data) {
                errortip("复制成功");
              }
            },
          });
        },
      });
    },
    complaint() {
      openPage(
        "/packageMsg/pages/complaint/index?visitor_id=" +
          this.tgregreceiveInfo.visitor_id +
          "&avatar=" +
          this.tgregreceiveInfo.visitor.avatar +
          "&nickname=" +
          this.tgregreceiveInfo.visitor.nickname +
          "&province_name=" +
          this.tgregreceiveInfo.visitor.province_name +
          "&career=" +
          this.tgregreceiveInfo.visitor.career_list[0]
      );
    },
    communicate() {
      openPage("/packageMsg/pages/chat/index");
    },
    async applyInfo(params) {
      try {
        let res = await applyInfo(params);
        this.tgregreceiveInfo = res.data.data;
        this.showContact = res.data.data.contact.is_enable;
        this.showCelebrity = res.data.data.celebrity.is_enable;
        this.showAddress = res.data.data.address.is_enable;

        this.data.contact = res.data.data.contact.body;
        this.data.celebrity = res.data.data.celebrity.body;
        this.data.address = res.data.data.address.body;
      } catch (error) {}
    },
    async applyManage(params) {
      try {
        let res = await applyManage(params);
        errortip("更新成功");
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({
          refresh: true,
        });
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    this.sid = options.sid;
    this.visited_status = options.visited_status;
    if (this.sid) {
      this.applyInfo({
        sid: this.sid,
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
