<template>
  <view class="unlock-list">
    <view class="unlock-item" v-for="(item, index) in list" :key="index">
      <view class="unlock-left">
        <image :src="item.unlock_avatar"></image>
        <view class="unlock-info">
          <view class="unlock-title">
            <text>{{ item.unlock_nickname }}</text>
            <block>
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/boy.png"
                class="sex"
                v-if="item.unlock_sex == 1"
              ></image>
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/girl.png"
                class="sex"
                v-if="item.unlock_sex == 0"
              ></image>
            </block>
          </view>
          <view class="unlock-p"> {{ item.unlock_career_label }} </view>
        </view>
      </view>
      <view class="unlock-rt">
        <view class="unlock-btn" @tap="viewDetails(item.content)">
          {{ item.details_button }}
        </view>
      </view>
    </view>
    <view class="unlock" v-if="unlockSuccessVisible" @tap="closeSuccess">
      <view class="unlock-modal">
        <view class="unlock-success-box">
          <view class="unlock-success-title">
            解锁信息
            <view class="close-img">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png"
                @tap.stop="closeSuccess"
              ></image> </view
          ></view>
          <view class="unlock-success-item" v-if="mobile">
            <view class="unlock-success-left">
              <text class="unlock-label">手机号：</text>
              <text class="unlock-txt">{{ mobile }}</text>
            </view>
            <view class="unlock-success-rt" @tap.stop="copy(mobile)">
              复制
            </view>
          </view>
          <view class="unlock-success-item" v-if="wechat">
            <view class="unlock-success-left">
              <text class="unlock-label">微信号：</text>
              <text class="unlock-txt">{{ wechat }}</text>
            </view>
            <view class="unlock-success-rt" @tap.stop="copy(wechat)">
              复制
            </view>
          </view>
          <view class="unlock-success-item" v-if="wechatCode">
            <view class="unlock-success-left">
              <text class="unlock-label">微信二维码：</text>
              <image :src="wechatCode"></image>
            </view>
            <view class="unlock-success-rt" @tap.stop="clickSaveImg">
              保存
            </view>
          </view>
          <view class="unlock-tips">
            提示：联系对方时，注明来自“虾米约拍”，请勿骚扰对方
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { unlockList } from "../../../../api/index.js";
import { errortip, platformMap } from "../../../../utils/util";
export default {
  name: "unlock",
  data() {
    return {
      list: [],
      pageNum: 1,
      pageSize: 10,
      unlockSuccessVisible: false,
      mobile: "",
      wechat: "",
      wechatCode: "",
      platformMap: {},
    };
  },
  methods: {
    closeSuccess() {
      this.unlockSuccessVisible = false;
    },
    viewDetails(data) {
      this.unlockSuccessVisible = true;
      this.mobile = data.mobile;
      this.wechat = data.wechat_act;
      this.wechatCode = data.wechat_qrc;
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
      let url = this.wechatCode;
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
    query() {
      this.unlockList({
        page: this.pageNum,
        per_page: this.pageSize,
      });
    },
    async unlockList(params) {
      try {
        let res = await unlockList(params);
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
  },
  created() {
    this.globalData = this.globalData;
    this.platformMap = platformMap;
    this.query();
  },
  onReachBottom() {
    this.pageNum++;
    this.query();
  },
};
</script>

<style lang="scss" scoped></style>
