<template>
  <view class="tips">
    <view @tap="officialAccount" class="toptip fl" v-if="!is_follow_gzh">
      <image
        class="toptip_icon"
        src="../../../assets/images/common/tongzhi3.png"
      ></image>
      <view class="toptip_text fl-g1">开启推送通知，及时接收约拍通知</view>
      <view class="toptip_btn">去开启</view>
    </view>
    <view class="tips-sucess" v-if="type == 1">
      <image class="tips-img" src="../../../assets/images/sucess.png"></image>
      <view class="tips-title">发布成功</view>
      <view>正在审核，请耐心等等...</view>
      <view class="tips-btn" @tap="goback">返回</view>
    </view>
    <view class="tips-fail" v-else-if="type == 0">
      <image class="tips-img" src="../../../assets/images/fail.png"></image>
      <view class="tips-title">发布失败</view>
      <view>请稍后重新发布！</view>
      <view class="tips-btn" @tap="goback">返回</view>
    </view>
    <view class="tips-sucess" v-else-if="type == 2">
      <image class="tips-img" src="../../../assets/images/sucess.png"></image>
      <view class="tips-title">报名成功</view>
      <view>您的报名请求发送成功，等待对方联系您！</view>
      <view class="tips-btn" @tap="goback">返回</view>
    </view>
    <view class="tips-fail" v-else-if="type == 3">
      <image class="tips-img" src="../../../assets/images/fail.png"></image>
      <view class="tips-title">报名失败</view>
      <view>请稍后重新报名！</view>
      <view class="tips-btn" @tap="goback">返回</view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { checkFollow } from "../../../api/index";
import { openPage } from "../../../utils/util";
export default {
  name: "tips",
  data() {
    return {
      type: 1,
      is_follow_gzh: 0,
    };
  },
  methods: {
    goback() {
      //   wx.navigateBack({
      //     delta: 1,
      //   });
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
    officialAccount() {
      openPage("/packageAdd/pages/user/follow/index");
    },
    async checkFollow(params) {
      try {
        let res = await checkFollow(params);
        this.is_follow_gzh = res.data.data.is_follow_gzh;
      } catch (error) {}
    },
  },
  created() {
    this.checkFollow("");
  },
  onLoad: function (options) {
    this.type = options.type;
  },
};
</script>

<style lang="scss" scoped></style>
