<template>
  <view>
    <view class="toptip ub">
      <image
        src="../../../assets/images/common/icon_tongzhi.png"
        class="warning"
      ></image>
      <view class="toptip_text ub-f1"
        >安全提示：①切勿独自与陌生人在室内约拍；②请勿相信未见面先收费的合作；③切勿轻信兼职刷单、虚拟网购等骗局。</view
      >
    </view>
    <view class="yuepai_top">
      <view class="yuepai_top_left">
        <image :src="yuepaiInfo.author.avatar" class="avatar"></image>
        <view class="yuepai_info">
          <view class="yuepai_name">
            {{ yuepaiInfo.author.nickname }}
            <block v-if="yuepaiInfo.author.sex !== null">
              <image
                src="../../../assets/images/nan.png"
                class="yuepai_sex"
                v-if="yuepaiInfo.author.sex == 1"
              ></image>
              <image
                src="../../../assets/images/nv.png"
                class="yuepai_sex"
                v-if="yuepaiInfo.author.sex == 0"
              ></image>
            </block>
          </view>
          <view class="yuepai_p">
            <text>
              {{ yuepaiInfo.author.career_list[0] }} |
              {{ yuepaiInfo.author.province_name }}
            </text>
          </view>
        </view>
      </view>
    </view>
    <view class="yuepai_from">
      <view class="yuepai_from_txt"> {{ yuepaiInfo.abstract }}</view>
    </view>
    <view class="reg_remark">
      <view class="reg_title ub">
        <view class="title_icon"></view>
        <view class="title_text">{{ yuepaiInfo.title }}</view>
      </view>
      <textarea
        id=""
        name="content"
        :placeholder="yuepaiInfo.tips"
        placeholderClass="placeholder_style"
        v-model="yuepaiInfo.content"
        disabled
      ></textarea>
    </view>
    <view class="reg_info">
      <view class="info_item ub" v-if="showContact">
        <view class="info_type">
          <view class="type_icon">
            <image
              mode="widthFix"
              src="../../../assets/images/tonggao/user.png"
            ></image>
          </view>
          <view class="type_text">我的联系信息</view>
        </view>
        <view class="info_content ub ub-ver ub-f1">
          <view class="ub-f1"></view>
          <view class="content_text"
            >联系人：{{ data.contact.person ? data.contact.person : "未设置" }}
            <text
              class="copy"
              v-if="yuepaiInfo.visited_status == 230"
              @tap="copy(data.contact.person)"
              >复制</text
            >
          </view>
          <view class="content_text" v-if="data.contact.is_mobile"
            >手机号：{{ data.contact.mobile ? data.contact.mobile : "未设置" }}
            <text
              class="copy"
              v-if="yuepaiInfo.visited_status == 230"
              @tap="copy(data.contact.mobile)"
              >复制</text
            >
          </view>
          <view class="content_text" v-if="data.contact.is_wechat"
            >微信号：{{ data.contact.wechat ? data.contact.wechat : "未设置" }}
            <text
              class="copy"
              v-if="yuepaiInfo.visited_status == 230"
              @tap="copy(data.contact.wechat)"
              >复制</text
            >
          </view>
          <view
            class="content_text"
            v-if="data.contact.is_wechat && yuepaiInfo.visited_status == 230"
            >微信二维码：<text
              class="qrcode"
              v-if="data.contact.wechat_links"
              @tap.stop="showQRcode"
              >点击查看二维码</text
            ></view
          >
          <view class="ub-f1"></view>
        </view>
      </view>
      <view class="info_item ub" v-if="showCelebrity">
        <text class="hr_icon">{{ media_info.platform_name }}</text>
        <view class="info_type">
          <view class="type_icon">
            <image
              mode="widthFix"
              src="../../../assets/images/tonggao/reg_hongren.png"
            ></image>
          </view>
          <view class="type_text">红人账号</view>
        </view>
        <view
          class="info_content ub ub-ver ub-f1"
          v-if="data.celebrity.nickname"
        >
          <view class="ub-f1"></view>
          <view class="content_text"
            >昵称：{{ data.celebrity.nickname }}
            <text
              class="copy"
              v-if="yuepaiInfo.visited_status == 230"
              @tap="copy(data.celebrity.nickname)"
              >复制</text
            ></view
          >
          <view class="content_text"
            >粉丝：{{ data.celebrity.fans_number }}
            <text
              class="copy"
              v-if="yuepaiInfo.visited_status == 230"
              @tap="copy(data.celebrity.fans_number)"
              >复制</text
            ></view
          >
          <view class="ub-f1"></view>
        </view>
      </view>
      <view class="info_item ub" v-if="showAddress">
        <view class="info_type">
          <view class="type_icon">
            <image
              mode="widthFix"
              src="../../../assets/images/tonggao/reg_address.png"
            ></image>
          </view>
          <view class="type_text">收货地址</view>
        </view>
        <view class="info_content ub ub-ver ub-f1" v-if="data.address.name">
          <view class="ub-f1"></view>
          <view class="content_text"
            >收件人：{{ data.address.name }}
            <text
              class="copy"
              v-if="yuepaiInfo.visited_status == 230"
              @tap="copy(data.address.name)"
              >复制</text
            ></view
          >
          <view class="content_text"
            >手机号：{{ data.address.mobile }}
            <text
              class="copy"
              v-if="yuepaiInfo.visited_status == 230"
              @tap="copy(data.address.mobile)"
              >复制</text
            ></view
          >
          <view class="content_address"
            >地址：{{ data.address.detail_address }}
            <text
              class="copy"
              v-if="yuepaiInfo.visited_status == 230"
              @tap="copy(data.address.detail_address)"
              >复制</text
            ></view
          >
          <view class="ub-f1"></view>
        </view>
      </view>
    </view>
    <view class="prompt">
      <view
        >{{ yuepaiInfo.warning
        }}<text catchtap="jubao" class="complain">「投诉」</text>
      </view>
    </view>
    <view class="bottom ub" :class="isIphoneX ? 'fix-iphonex-button' : ''">
      <view class="subbtn_bottom">
        <button
          @tap="submit"
          type="primary"
          v-if="yuepaiInfo.visited_status != 230"
        >
          查看联系方式
        </button>
        <button type="primary" v-else>已查看</button>
      </view>
    </view>
    <view class="modal_box" v-if="showModel">
      <view class="modal_content">
        <view> 微信二维码 </view>
        <image class="qrcode-img" :src="data.contact.wechat_links"></image>
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
import { applyInfo } from "../../../api/index";
import { errortip } from "../../../utils/util";
export default {
  name: "invite-detail",
  data() {
    return {
      sid: "",
      showModel: false,
      isIphoneX: false,
      yuepaiInfo: {
        visited_status: "",
        abstract: "",
        title: "",
        content: "",
        warning: "",
        author: {
          avatar: "",
          nickname: "",
          sex: 0,
          career_list: [],
          province_name: "",
        },
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
          oid: "",
          nickname: "",
          fans_number: "",
        },
        address: {
          oid: "",
          detail_address: "",
          mobile: "",
          name: "",
        },
      },
      media_info: {
        platform_name: "",
        platform_code: "",
      },
    };
  },
  methods: {
    showQRcode() {
      this.showModel = true;
    },
    closeQRcode() {
      this.showModel = false;
    },
    submit() {},
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
    async applyInfo(params) {
      try {
        let res = await applyInfo(params);
        this.yuepaiInfo.author = res.data.data.visitor;
        this.yuepaiInfo.tips = res.data.data.tips;
        this.yuepaiInfo.title = res.data.data.title;
        this.yuepaiInfo.abstract = res.data.data.abstract;
        this.yuepaiInfo.content = res.data.data.content;
        this.yuepaiInfo.warning = res.data.data.warning;

        this.showContact = res.data.data.contact.is_enable;
        this.showCelebrity = res.data.data.celebrity.is_enable;
        this.showAddress = res.data.data.address.is_enable;

        this.data.contact = res.data.data.contact.body;
        this.data.celebrity = res.data.data.celebrity.body;
        this.data.address = res.data.data.address.body;
        this.media_info.platform_name =
          res.data.data.celebrity.body.platform_name;
        this.media_info.platform_code =
          res.data.data.celebrity.body.platform_type;
        this.yuepaiInfo.visited_status = res.data.data.visited_status;
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function (options) {
    this.sid = options.sid;
    if (this.sid) {
      this.applyInfo({
        sid: this.sid,
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
