<template>
  <view class="set">
    <view class="set-top">
      <view class="set-item" @tap="personDetail">
        <text>编辑资料</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="set-item" @tap="goContact">
        <text>联系方式</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="set-item" @tap="goAddress">
        <text>收货地址</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="set-item" @tap="goSensationlist">
        <text>红人账号</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
    </view>
    <view class="set-content">
      <view class="set-item">
        <text>手机号</text>
        <view class="arrow">
          <text class="phone">13693628075</text>
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
    </view>
    <view class="set-bt">
      <view class="set-item">
        <text>关于虾米约拍</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
    </view>
    <view class="set-logout">
      <view class="set-item logout" @tap="logout">
        <text>退出登录</text>
      </view>
    </view>
  </view>
</template>

<script>
import { errortip, openPage } from "../../../utils/util.js";
import "./index.scss";
export default {
  name: "set",
  data() {
    return {};
  },
  methods: {
    logout() {
      wx.clearStorage();
      errortip("退出成功");
      wx.navigateBack({
        delta: 1,
      });
      var page = getCurrentPages().pop();
      if (page == undefined || page == null) return;
      page.onLoad();
    },
    personDetail() {
      openPage("/packageAdd/pages/user/editinfor/index");
    },
    goAddress() {
      openPage("/packageAdd/pages/user/addresslist/index");
    },
    goSensationlist() {
      openPage("/packageAdd/pages/user/sensationlist/index");
    },
    goContact() {
      openPage("/packageAdd/pages/user/contact/index");
    },
  },
};
</script>

<style lang="scss" scoped></style>
