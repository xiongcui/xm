<template>
  <view class="about">
    <view class="about-top">
      <image
        src="https://yuepai-oss.qubeitech.com/static/images/logo.png"
        class="about-img"
      ></image>
    </view>
    <view class="about-service">
      <view class="about-item" @tap="customerService">
        <text>联系客服</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="about-item" @tap="officialAccount">
        <text>关注公众号</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
          ></image>
        </view>
      </view>
    </view>
    <view class="about-service">
      <view class="about-item" @tap="userAgreement">
        <text>用户协议</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="about-item">
        <text>隐私政策</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="about-item" @tap="cheatPrevention">
        <text>防骗指南</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="about-item" @tap="businessLicense">
        <text>营业执照</text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view class="about-item">
        <text>当前版本</text>
        <view class="arrow">
          <text>V1.0.0</text>
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
          ></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { openPage } from "../../../utils/util";
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
      openPage("/packageAdd/pages/user/follow/index");
    },
    userAgreement() {
      openPage("/packageSet/pages/serviceAgreement/index");
    },
    cheatPrevention() {
      openPage("/packageSet/pages/cheatPrevention/index");
    },
    businessLicense() {
      openPage("/packageSet/pages/businessLicense/index");
    },
  },
};
</script>

<style lang="scss" scoped></style>
