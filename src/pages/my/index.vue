<template>
  <view class="my">
    <view class="my-head">
      <view class="my-head-left">
        <image
          src="../../assets/images/head.png"
          class="head-img"
          mode="aspectFit"
        ></image>
      </view>
      <view class="my-head-ct">
        <view>
          <text class="my-head-name">Bin.Won</text>
          <image
            src="../../assets/images/nan.png"
            mode="aspectFit"
            class="sex"
            v-if="sex == 1"
          ></image>
          <image
            src="../../assets/images/nv.png"
            mode="aspectFit"
            class="sex"
            v-if="sex == 0"
          ></image>
        </view>
        <view class="my-info">
          <text>摄影师</text>
          <text>｜</text>
          <text>北京市</text>
          <text class="phone">137****6230</text>
        </view>
        <view class="head-tag-box">
          <view class="head-tag">
            <image
              src="../../assets/images/real-name.png"
              class="head-tag-img"
              mode="aspectFit"
            ></image>
            <text>未实名</text>
          </view>
          <view class="head-tag">
            <image
              src="../../assets/images/guarantee.png"
              class="head-tag-img"
              mode="aspectFit"
            ></image>
            <text>未担保</text>
          </view>
        </view>
      </view>
      <view class="my-head-rt">
        <text>个人主页 ></text>
      </view>
    </view>
    <view class="my-ct">
      <view class="my-ct-infos">
        <view class="my-ct-info-item">
          <view class="nums">
            <view>17</view>
          </view>
          <view class="name">
            <view>麻豆</view>
          </view>
        </view>
        <view class="my-ct-info-item">
          <view class="nums">
            <view>17</view>
          </view>
          <view class="name">
            <view>关注</view>
          </view>
        </view>
        <view class="my-ct-info-item">
          <view class="nums">
            <view>0</view>
          </view>
          <view class="name">
            <view>粉丝</view>
          </view>
        </view>
      </view>
      <view class="my-vip">
        <view class="my-vip-left">
          <view class="my-vip-title">
            <image
              src="../../assets/images/vip.png"
              class="my-vip-img"
              mode="aspectFit"
            ></image>
            <text>麻豆约拍 VIP</text>
          </view>
          <view class="my-vip-txt">
            <text>点亮会员标志 享受尊贵特权</text>
          </view>
        </view>
        <view class="my-vip-rt">
          <text>开通会员</text>
          <image
            src="../../assets/images/arrow-right.png"
            class="my-vip-rt-img"
          ></image>
        </view>
      </view>
      <view class="my-column">
        <view class="my-column-item">
          <image
            src="../../assets/images/album.png"
            class="my-column-img"
            mode="aspectFit"
          ></image>
          <text>作品相册</text>
        </view>
        <view class="my-column-item">
          <image
            src="../../assets/images/collection.png"
            class="my-column-img"
            mode="aspectFit"
          ></image>
          <text>作品相册</text>
        </view>
        <view class="my-column-item">
          <image
            src="../../assets/images/thumbs.png"
            class="my-column-img"
            mode="aspectFit"
          ></image>
          <text>作品相册</text>
        </view>
        <view class="my-column-item">
          <image
            src="../../assets/images/history.png"
            class="my-column-img"
            mode="aspectFit"
          ></image>
          <text>作品相册</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "my",
  data() {
    return {
      sex: 1,
    };
  },
};
</script>
