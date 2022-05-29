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
            <text class="release-list-title"> 发布约拍 </text>
          </view>
          <view>
            <text class="release-list-content"
              >您可以发布约拍需求。约拍摄影师、模特、商家、化妆师、修图师</text
            >
          </view>
        </view>
      </view>
      <view class="release-item" @tap="releaseUrl(2)">
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
            <text class="release-list-content">您可以上传自己的作品或照片</text>
          </view>
          <view>
            <text class="release-list-content">来提高自己的约拍吸引力</text>
          </view>
        </view>
      </view>
      <view class="release-item">
        <view class="release-left">
          <image
            src="../../assets/images/publishLocation.png"
            mode="aspectFit"
            class="release-image"
          ></image>
        </view>
        <view class="release-right">
          <view>
            <text class="release-list-title"> 发布场地 </text>
          </view>
          <view>
            <text class="release-list-content"
              >您可以分享自己知道的比较适合的约拍场地，帮助他人创作，并获得奖励</text
            >
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
          <view>
            <text class="release-list-content"
              >模特卡、主播卡、演员卡数百种模版</text
            >
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
          url = "field/index?id=1";
          break;
      }
      wx.navigateTo({
        url: url,
        // events: {
        //   // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        //   acceptDataFromOpenedPage: function (data) {
        //     console.log(data);
        //   },
        //   someEvent: function (data) {
        //     console.log(data);
        //   },
        // },
        // success: function (res) {
        //   // 通过 eventChannel 向被打开页面传送数据
        //   res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
        // },
      });
    },
  },
};
</script>
