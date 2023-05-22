<template>
  <view class="tips">
    <view @tap="officialAccount" class="toptip fl" v-if="!is_follow_gzh">
      <image
        class="toptip_icon"
        src="https://yuepai-oss.qubeitech.com/static/images/common/tongzhi3.png"
      ></image>
      <view class="toptip_text fl-g1">开启推送通知，及时接收约拍通知</view>
      <view class="toptip_btn">去开启</view>
    </view>
    <view class="tips-sucess" v-if="type == 1">
      <image
        class="tips-img"
        src="https://yuepai-oss.qubeitech.com/static/images/sucess.png"
      ></image>
      <view class="tips-title">发布成功</view>
      <view>{{ msg }}</view>
      <view class="subscribe-btn" @tap="showSubscribe"> 订阅通知 </view>
      <view class="subscribe-box">
        <view class="subscribe-left">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/wchat.jpg"
          ></image>
        </view>
        <view class="subscribe-ct">
          <view class="subscribe-title">订阅微信通知</view>
          <view class="subscribe-p">及时获取报名进度提醒</view>
        </view>
        <view class="subscribe-rt" @tap="nowSubscribe">
          <text>立即订阅</text>
        </view>
      </view>
      <view class="tips-box-btns">
        <view class="tips-btn" @tap="goback">返回首页</view>
        <view class="tips-btn" @tap="continuePublish">继续发布</view>
      </view>
    </view>
    <view class="tips-fail" v-else-if="type == 0">
      <image
        class="tips-img"
        src="https://yuepai-oss.qubeitech.com/static/images/fail.png"
      ></image>
      <view class="tips-title">发布失败</view>
      <view>{{ msg }}</view>
      <view class="tips-btn" @tap="goback">返回</view>
    </view>
    <view class="tips-sucess" v-else-if="type == 2">
      <image
        class="tips-img"
        src="https://yuepai-oss.qubeitech.com/static/images/sucess.png"
      ></image>
      <view class="tips-title">报名成功</view>
      <view>{{ msg }}</view>
      <view class="subscribe-btn" @tap="showSubscribe"> 订阅通知 </view>
      <view class="subscribe-box">
        <view class="subscribe-left">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/wchat.jpg"
          ></image>
        </view>
        <view class="subscribe-ct">
          <view class="subscribe-title">订阅微信通知</view>
          <view class="subscribe-p">及时获取报名进度提醒</view>
        </view>
        <view class="subscribe-rt" @tap="nowSubscribe">
          <text>立即订阅</text>
        </view>
      </view>
      <view class="tips-box-btns">
        <view class="tips-btn" @tap="goback">返回首页</view>
        <view class="tips-btn" @tap="continuePublish">继续发布</view>
      </view>
    </view>
    <view class="tips-fail" v-else-if="type == 3">
      <image
        class="tips-img"
        src="https://yuepai-oss.qubeitech.com/static/images/fail.png"
      ></image>
      <view class="tips-title">报名失败</view>
      <view>{{ msg }}</view>
      <view class="tips-btn" @tap="goback">返回</view>
    </view>
    <view class="modal-box" v-if="visible" @tap="cancel">
      <view class="modal-cotent">
        <view class="modal-title">订阅通知</view>
        <view class="subscribe-box">
          <view class="subscribe-left">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/wchat.jpg"
            ></image>
          </view>
          <view class="subscribe-ct">
            <view class="subscribe-title">订阅微信通知</view>
            <view class="subscribe-p">及时获取报名进度提醒</view>
          </view>
          <view class="subscribe-rt" @tap.stop="nowSubscribe">
            <text>订阅通知</text>
          </view>
        </view>
        <view class="official-account">
          <view class="official-account-txt">扫码关注公众号，开启消息提醒</view>
          <image
            @tap.stop="officialAccount"
            class="official-account-qrcode"
            src="https://yuepai-oss.qubeitech.com/static/images/official-account-qrcode.jpg"
          ></image>
        </view>
        <view class="know" @tap="cancel">我知道了</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { checkFollow, subscribeEvent } from "../../../api/index";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "tips",
  data() {
    return {
      type: 1,
      msg: "",
      is_follow_gzh: 0,
      visible: true,
      template: [
        // "tEX27GKFotgdenR3XC5grlgpS79LudBKxvy7uBbsdcM",
        // "sQXqKGSEacobxAx8r7RJP5_y5mm7g53v6htcEPWfsPQ",
      ],
    };
  },
  methods: {
    showSubscribe() {
      this.visible = true;
    },
    nowSubscribe() {
      wx.requestSubscribeMessage({
        tmplIds: this.template,
        success(res) {
          errortip("订阅成功，继续订阅可获得多次提醒");
        },
      });
    },
    cancel() {
      this.visible = false;
    },
    officialAccount() {
      openPage("/packageAdd/pages/user/follow/index");
    },
    goback() {
      // 跳转首页
      wx.switchTab({
        url: "/pages/home/index",
        success: function (e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.onLoad();
        },
      });
    },
    continuePublish() {
      wx.navigateBack({
        delta: 1,
      });
    },
    officialAccount() {
      openPage("/packageAdd/pages/user/follow/index");
    },
    async checkFollow(params) {
      try {
        let res = await checkFollow(params);
        this.is_follow_gzh = res.data.data.is_follow_gzh;
      } catch (error) {}
    },
    async subscribeEvent(params) {
      try {
        let res = await subscribeEvent(params);
        this.template = res.data.data.map((item) => {
          return item.code;
        });
      } catch (error) {}
    },
  },
  created() {
    this.checkFollow("");
    this.subscribeEvent({
      sub_type: "publish",
    });
  },
  onLoad: function (options) {
    if (options.type) {
      this.type = options.type;
    }
    if (options.msg) {
      this.msg = options.msg;
    }
  },
};
</script>

<style lang="scss" scoped></style>
