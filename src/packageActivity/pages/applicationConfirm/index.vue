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
    <!-- <view class="application-fixed">
      <view class="application-fixed-left"> 稍后组队 </view>
      <view class="application-fixed-rt" @tap="gohome"> 完成组队 </view>
    </view> -->
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
  },
};
</script>

<style lang="scss" scoped></style>
