<template>
  <view class="mcard-index">
    <view class="mcard-title">图片模卡</view>
    <view class="ub item">
      <view class="side_gap"></view>
      <view class="ub-f1">
        <view @tap="goModel" class="item_img">
          <image
            mode="widthFix"
            src="../../../../assets/images/moka/index/model.png"
          ></image>
        </view>
      </view>
      <view class="side_gap"></view>
    </view>
    <view class="ub item">
      <view class="side_gap"></view>
      <view class="ub-f1">
        <view @tap="goActor" class="item_img">
          <image
            mode="widthFix"
            src="../../../../assets/images/moka/index/actor.png"
          ></image>
        </view>
      </view>
      <view class="side_gap"></view>
    </view>
    <view class="ub item">
      <view class="side_gap"></view>
      <view class="ub-f1">
        <view @tap="goAnchor" class="item_img">
          <image
            mode="widthFix"
            src="../../../../assets/images/moka/index/anchor.png"
          ></image>
        </view>
      </view>
      <view class="side_gap"></view>
    </view>
    <view class="ub item">
      <view class="side_gap"></view>
      <view class="ub-f1">
        <view @tap="goTheme" class="item_img">
          <image
            mode="widthFix"
            src="../../../../assets/images/moka/index/theme.png"
          ></image>
        </view>
      </view>
      <view class="side_gap"></view>
    </view>
    <view class="bottom_gap"></view>
  </view>
</template>

<script>
import { openPage } from "../../../../utils/util";
import "./index.scss";
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    goModel() {
      openPage("/packageMoka/pages/moka/modelcard/index");
    },
    // goActor() {},
    // goAnchor() {},
    // goTheme() {},
  },
};
</script>

<style lang="scss" scoped></style>
