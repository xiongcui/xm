<template>
  <view class="release-management">
    <view class="my-title"> 我的发布 </view>
    <view class="items myblock">
      <view @tap="onMyAd" class="item ub line-t">
        <view class="item_icon">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/ad.png"
          ></image>
        </view>
        <view class="ub-f1">
          <view class="item_text">通告管理</view>
        </view>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
          ></image>
        </view>
      </view>
      <view @tap="myYuepai" class="item ub">
        <view class="item_icon">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
          ></image>
        </view>
        <view class="ub-f1">
          <view class="item_text">约拍管理</view>
        </view>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
          ></image>
        </view>
      </view>

      <view @tap="myZuopin" class="item ub line-t">
        <view class="item_icon">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/zuopin1.png"
          ></image>
        </view>
        <view class="ub-f1">
          <view class="item_text">作品管理</view>
        </view>
        <view class="arrow">
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
import { isLogin, openPage } from "../../../../utils/util";
import "./index.scss";
export default {
  name: "releaseManagement",
  methods: {
    onMyAd() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageTonggao/pages/tonggao_manage/index");
    },
    myYuepai() {
      // 'type': 'NT', 约拍：NE； 通告：NT；照片：PH
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageAdd/pages/yuedan/yuedan_manage/index?type=NE");
    },
    myZuopin() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageAdd/pages/yuedan/yuedan_manage/index?type=PH");
    },
  },
};
</script>

<style lang="scss" scoped></style>
