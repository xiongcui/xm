<template>
  <view class="about">
    <view class="about-top">
      <image src="../../../assets/images/logo.png" class="about-img"></image>
    </view>
    <view class="about-service">
      <view class="about-item" @tap="customerService">
        <text>联系客服</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="about-item" @tap="officialAccount">
        <text>关注公众号</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
    </view>
    <view class="about-service">
      <view class="about-item">
        <text>用户协议</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="about-item">
        <text>隐私政策</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="about-item">
        <text>防骗指南</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="about-item">
        <text>营业执照</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="about-item">
        <text>当前版本</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "about",
  methods: {
    customerService() {
      wx.openCustomerServiceChat({
        extInfo: { url: "https://work.weixin.qq.com/kfid/kfc70400e4245eaa1b6" },
        corpId: "ww9ad8086390afbfaa",
        success(res) {},
      });
    },
    officialAccount() {
      wx.showModal({
        title: "温馨提示",
        content: "微信搜索公众号 虾米约拍 点击关注即可！",
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
