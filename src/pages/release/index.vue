<template>
  <view class="release-box">
    <view class="release-title"> 您可以发布 </view>
    <view class="release-list">
      <view class="release-item" @tap="releaseUrl(1)">
        <view class="release-left">
          <image
            src="../../assets/images/camera.png"
            mode="aspectFit"
            class="release-image"
          ></image>
        </view>
        <view class="release-right">
          <view>
            <text class="release-list-title"> 发布通告 </text>
          </view>
          <view>
            <text class="release-list-content">招模特/红人/主播/演员等</text>
          </view>
        </view>
      </view>
      <view class="release-item" @tap="releaseUrl(2)">
        <view class="release-left">
          <image
            src="../../assets/images/publishLocation.png"
            mode="aspectFit"
            class="release-image"
          ></image>
        </view>
        <view class="release-right">
          <view>
            <text class="release-list-title"> 发布约单 </text>
          </view>
          <view>
            <text class="release-list-content">艺人发布合作意向</text>
          </view>
        </view>
      </view>
      <view class="release-item" @tap="releaseUrl(3)">
        <view class="release-left">
          <image
            src="../../assets/images/works.png"
            mode="aspectFit"
            class="release-image"
          ></image>
        </view>
        <view class="release-right">
          <view>
            <text class="release-list-title"> 发布作品 </text>
          </view>
          <view>
            <text class="release-list-content">分享您的优秀作品</text>
          </view>
        </view>
      </view>

      <view class="release-item">
        <view class="release-left">
          <image
            src="../../assets/images/card.png"
            mode="aspectFit"
            class="release-image"
          ></image>
        </view>
        <view class="release-right">
          <view>
            <text class="release-list-title"> 制作模卡</text>
          </view>
          <view>
            <text class="release-list-content">免费制作专业高清模卡</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "release",
  methods: {
    releaseUrl(type) {
      let url = "";
      switch (type) {
        case 1:
          url = "appointment/index?id=1";
          break;
        case 2:
          // url = "/packageAdd/pages/yuedan/add_yuedan/index?id=1";
          url = "appointment/index";
          break;
        case 3:
          url = "field/index?id=1";
          break;
      }
      wx.navigateTo({
        url: url,
      });
    },
  },
};
</script>
