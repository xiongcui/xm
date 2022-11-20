<template>
  <view class="zuopin_detail">
    <view class="zuopin_top">
      <view class="zuopin_top_left">
        <image :src="zuopinInfo.author.avatar" class="avatar"></image>
        <view class="zuopin_author_info">
          <view class="zuopin_name">
            {{ zuopinInfo.author.nickname }}
            <block v-if="zuopinInfo.author.sex !== null">
              <image
                src="../../../../assets/images/nan.png"
                class="zuopin_sex"
                v-if="zuopinInfo.author.sex == 1"
              ></image>
              <image
                src="../../../../assets/images/nv.png"
                class="zuopin_sex"
                v-if="zuopinInfo.author.sex == 0"
              ></image>
            </block>
          </view>
          <view class="zuopin_p">
            <text>
              {{ zuopinInfo.author.career_list[0] }} |
              {{ zuopinInfo.author.province_name }}
            </text>
            <image
              src="../../../../assets/images/common/icon_real.png"
              class="zuopin_p_img"
              v-if="zuopinInfo.author.is_certify"
            ></image>
            <image
              src="../../../../assets/images/common/icon_pledge_none.png"
              class="zuopin_p_img"
              v-else
            ></image>
            <image
              src="../../../../assets/images/common/icon_pledge.png"
              class="zuopin_p_img"
              v-if="zuopinInfo.author.is_security"
            ></image>
            <image
              src="../../../../assets/images/common/icon_real_none.png"
              class="zuopin_p_img"
              v-else
            ></image>
          </view>
        </view>
      </view>
      <view class="zuopin_right">
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
    <view class="zuopin_info">
      <view class="zuopin_title"> {{ zuopinInfo.title }} </view>
      <view class="zuopin_content">
        {{ zuopinInfo.content }}
      </view>
      <view class="zuopin_icon">
        <view class="zuopin_icon_box">
          <view class="zuopin_icon_title">
            <view class="spot"></view>
            <text class="zuopin_text"
              >地点：{{ zuopinInfo.capture_locale }}</text
            >
          </view>
        </view>
      </view>
      <view class="zuopin_icon">
        <view class="zuopin_icon_box">
          <view class="zuopin_icon_title">
            <view class="spot"></view>
            <text class="zuopin_text"
              >返片：{{ zuopinInfo.return_photo ? "是" : "否" }}</text
            >
          </view>
        </view>
      </view>
      <view class="zuopin_icon">
        <view class="zuopin_icon_box">
          <view class="zuopin_icon_title">
            <view class="spot"></view>
            <text class="zuopin_text"
              >设备：{{ zuopinInfo.capture_tools }}</text
            >
          </view>
        </view>
      </view>
      <view class="zuopin_img" v-if="zuopinInfo.file_type == 'picture'">
        <image
          v-for="(item, index) in zuopinInfo.cover"
          :key="index"
          mode="widthFix"
          :src="item"
        ></image>
      </view>
      <view v-if="zuopinInfo.file_type == 'video'">
        <video
          objectFit="cover"
          :poster="zuopinInfo.cover && zuopinInfo.cover[0]"
          :src="zuopinInfo.video_cover && zuopinInfo.video_cover[0]"
          class="zuopin_video-width"
          @ended="bindended"
          id="video"
        ></video>
      </view>
      <view class="zuopin_tags">
        <view
          class="tag"
          v-for="(styleItem, styleIndex) in zuopinInfo.style_label"
          :key="styleIndex"
          >{{ styleItem }}</view
        >
      </view>
      <view class="zuopin_bottom">
        <view class="zuopin_bottom_time">
          <image src="../../../../assets/images/common/time.png"></image>
          {{ zuopinInfo.date_humanize }}
        </view>
        <view class="zuopin_bottom_read">
          <image src="../../../../assets/images/user/index/invoice.png"></image>
          阅读 {{ zuopinInfo.statistic.read_cnt }}
        </view>
        <view class="zuopin_bottom_dianzan">
          <image src="../../../../assets/images/common/icon_like.png"></image>
          点赞 {{ zuopinInfo.statistic.vote_cnt }}
        </view>
      </view>
    </view>
    <view
      class="zuopin_fixed_bottom"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <view class="zuopin_fixed_left">
        <view class="zuopin_fixed_item">
          <image src="../../../../assets/images/common/icon_like.png"></image>
          {{ zuopinInfo.statistic.vote_cnt }}
        </view>
        <view class="zuopin_fixed_item">
          <image
            src="../../../../assets/images/common/icon_favorite.png"
          ></image>
          {{ zuopinInfo.statistic.collect_cnt }}
        </view>
      </view>
      <view class="zuopin_fixed_rt"> 约拍 </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { photoInfo } from "../../../../api/index";
export default {
  name: "zuopin_detail",
  data() {
    return {
      author_id: "",
      oid: "",
      isIphoneX: false,
      zuopinInfo: {
        author: {
          career_list: [],
        },
        statistic: {},
      },
    };
  },
  methods: {
    bindended() {
      wx.createVideoContext("video").exitFullScreen();
    },
    async photoInfo(params) {
      try {
        let res = await photoInfo(params);
        this.zuopinInfo = res.data.data;
        console.log(this.zuopinInfo);
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function (options) {
    this.oid = options.oid;
    this.author_id = options.author_id;
    if (this.oid && this.author_id) {
      let params = {
        oid: this.oid,
        author_id: this.author_id,
      };
      this.photoInfo(params);
    }
  },
};
</script>

<style lang="scss" scoped></style>
