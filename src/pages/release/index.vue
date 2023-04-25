<template>
  <view class="release-box">
    <view class="release-title"> 你可以在这里发布 </view>
    <view class="release-list">
      <view class="release-item" @tap="releaseUrl(1)">
        <view class="release-left color1">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/publish1.png"
            mode="aspectFit"
            class="release-image"
          ></image>
        </view>
        <view class="release-right">
          <view>
            <text class="release-list-title"> 发布通告 </text>
          </view>
          <view>
            <text class="release-list-content"
              >发布创作、影视、造型、种草、探店等通告，招募模特、演员、红人、主播等
            </text>
          </view>
        </view>
      </view>
      <view class="release-item" @tap="releaseUrl(2)">
        <view class="release-left color2">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/publish2.png"
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
              >发布互免、收费、付费、置换等约拍，邀约模特、摄影、妆造、修图等
            </text>
          </view>
        </view>
      </view>
      <view class="release-item" @tap="releaseUrl(3)">
        <view class="release-left color3">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/publish3.png"
            mode="aspectFit"
            class="release-image"
          ></image>
        </view>
        <view class="release-right">
          <view>
            <text class="release-list-title"> 发布作品 </text>
          </view>
          <view>
            <text class="release-list-content"
              >分享自己的作品或照片，提升自己的约拍专业影响力，获得更多曝光</text
            >
          </view>
        </view>
      </view>

      <!-- <view class="release-item">
        <view class="release-left">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/card.png"
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
      </view> -->
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { isLogin } from "../../utils/util";
export default {
  name: "release",
  methods: {
    releaseUrl(type) {
      if (!isLogin()) {
        wx.redirectTo({
          url: "/pages/login/index",
        });
        return false;
      }
      let url = "";
      switch (type) {
        case 1:
          url = "/packageTonggao/pages/index/index";
          break;
        case 2:
          url = "appointment/index";
          break;
        case 3:
          url = "/packageAdd/pages/zuopin/add_zuopin/index";
          break;
      }
      wx.navigateTo({
        url: url,
      });
    },
  },
};
</script>
