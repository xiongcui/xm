<template>
  <view class="yuedan_detail">
    <view class="yuedan_top">
      <view class="yuedan_top_left">
        <image
          src="../../../../assets/images/avatar_default.png"
          class="avatar"
        ></image>
        <view class="yuedan_info">
          <view class="yuedan_name">
            nickname
            <block v-if="author.sex !== null">
              <image
                src="../../../../assets/images/nan.png"
                class="yuedan_sex"
                v-if="author.sex == 1"
              ></image>
              <image
                src="../../../../assets/images/nv.png"
                class="yuedan_sex"
                v-if="author.sex == 0"
              ></image>
            </block>
          </view>
          <view class="yuedan_p">
            <text> 造型师 | 北京 </text>
            <image
              src="../../../../assets/images/common/icon_real.png"
              class="yuedan_p_img"
              v-if="author.is_certify"
            ></image>
            <image
              src="../../../../assets/images/common/icon_pledge_none.png"
              class="yuedan_p_img"
              v-else
            ></image>
            <image
              src="../../../../assets/images/common/icon_pledge.png"
              class="yuedan_p_img"
              v-if="author.is_security"
            ></image>
            <image
              src="../../../../assets/images/common/icon_real_none.png"
              class="yuedan_p_img"
              v-else
            ></image>
          </view>
        </view>
      </view>
      <view class="yuedan_right">
        <image
          class="follow"
          src="../../../../assets/images/common/follow_red.png"
        ></image>
        <image
          class="share"
          src="../../../../assets/images/common/icon_share.png"
        ></image>
      </view>
    </view>
    <view class="yuedan_icon">
      <view class="yuedan_icon_box">
        <image src="../../../../assets/images/yuedan/show_type.png"></image>
        <text>约模特</text>
      </view>
      <view class="yuedan_icon_box">
        <image src="../../../../assets/images/yuedan/show_city.png"></image>
        <text>面向北京</text>
      </view>
      <view class="yuedan_icon_box">
        <image src="../../../../assets/images/yuedan/show_money.png"></image>
        <text>希望互免</text>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "yuedanDetail",
  data() {
    return {
      author: {},
    };
  },
};
</script>

<style lang="scss" scoped></style>
