<template>
  <view class="application-confirm">
    <view class="confirm-success">
      <view class="confirm-title">
        <image
          v-if="result !== '报名失败'"
          src="https://yuepai-oss.qubeitech.com/static/images/common/sucess.png"
        ></image>
        <image
          v-else
          src="https://yuepai-oss.qubeitech.com/static/images/common/tip_fail.png"
        ></image>
        {{ result }}
      </view>
      <view class="confirm-txt">{{ desc }}</view>
      <view class="tips-box-btns">
        <view class="tips-btn" @tap="gohome">返回首页</view>
        <view class="tips-btn" @tap="goactivity">返回活动列表</view>
      </view>
    </view>
    <view class="add-weChat" v-if="wechat_qrc">
      <view class="add-weChat-left">
        <view class="add-weChat-title">长按识别二维码参加活动</view>
        <view class="add-weChat-btn">报名成功后记得添加微信哦</view>
      </view>
      <view class="add-weChat-rt">
        <image :src="wechat_qrc" :show-menu-by-longpress="true"></image>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { openPage } from "../../../utils/util";
export default {
  name: "applicationConfirm",
  data() {
    return {
      result: "报名成功",
      desc: "你已经进入候选区，还未完成组队，开始组队区吧",
      wechat_qrc: "",
    };
  },
  methods: {
    gohome() {
      wx.switchTab({
        url: "/pages/home/index",
        success: function (e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          // page.onLoad();
        },
      });
    },
    goactivity() {
      openPage("/packageActivity/pages/list/index");
    },
  },
  onLoad: function (options) {
    if (options.result) {
      this.result = options.result;
    }
    if (options.desc) {
      this.desc = options.desc;
    }
    if (options.wechat_qrc) {
      this.wechat_qrc = options.wechat_qrc;
    }
  },
};
</script>

<style lang="scss" scoped></style>
