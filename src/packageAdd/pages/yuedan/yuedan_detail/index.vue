<template>
  <view class="yuedan_detail">
    <view class="yuedan_top">
      <view class="yuedan_top_left">
        <image :src="yuepaiInfo.author.avatar" class="avatar"></image>
        <view class="yuedan_info">
          <view class="yuedan_name">
            {{ yuepaiInfo.author.nickname }}
            <block v-if="yuepaiInfo.author.sex !== null">
              <image
                src="../../../../assets/images/nan.png"
                class="yuedan_sex"
                v-if="yuepaiInfo.author.sex == 1"
              ></image>
              <image
                src="../../../../assets/images/nv.png"
                class="yuedan_sex"
                v-if="yuepaiInfo.author.sex == 0"
              ></image>
            </block>
          </view>
          <view class="yuedan_p">
            <text>
              {{ yuepaiInfo.author.career_list[0] }} |
              {{ yuepaiInfo.author.province_name }}
            </text>
            <image
              src="../../../../assets/images/common/icon_real.png"
              class="yuedan_p_img"
              v-if="yuepaiInfo.author.is_certify"
            ></image>
            <image
              src="../../../../assets/images/common/icon_pledge_none.png"
              class="yuedan_p_img"
              v-else
            ></image>
            <image
              src="../../../../assets/images/common/icon_pledge.png"
              class="yuedan_p_img"
              v-if="yuepaiInfo.author.is_security"
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
        <text>约{{ yuepaiInfo.face_career }}</text>
      </view>
      <view class="yuedan_icon_box">
        <image src="../../../../assets/images/yuedan/show_city.png"></image>
        <text>面向{{ yuepaiInfo.face_province_name }}</text>
      </view>
      <view class="yuedan_icon_box">
        <image src="../../../../assets/images/yuedan/show_money.png"></image>
        <text>{{ yuepaiInfo.payment_format }}</text>
      </view>
    </view>
    <view v-if="yuepaiInfo.file_type == 'picture'">
      <swiper
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        class="yuepai_swiper"
        @change="bindchange"
        :style="{
          height: imgheights[current] + 'rpx',
        }"
      >
        <block v-for="(item, index) in yuepaiInfo.cover" :key="index">
          <swiper-item>
            <image
              :src="item"
              @load="
                (e) => {
                  imageLoad(e, index);
                }
              "
            ></image>
          </swiper-item>
        </block>
      </swiper>
    </view>
    <view v-if="yuepaiInfo.file_type == 'video'">
      <video
        objectFit="cover"
        :poster="yuepaiInfo.cover && yuepaiInfo.cover[0]"
        :src="yuepaiInfo.video_cover && yuepaiInfo.video_cover[0]"
        class="yuepai_video-width"
        @ended="bindended"
        id="video"
      ></video>
    </view>
    <view class="yuepai_info">
      <view class="yuepai_title"> {{ yuepaiInfo.title }} </view>
      <view class="yuepai_content">
        {{ yuepaiInfo.content }}
      </view>
      <view class="yuepai_time">
        <view class="spot"></view>
        <text class="yuepai_label"> 时间：</text>
        <text>{{ yuepaiInfo.expect_time }} </text>
      </view>
      <view class="yuepai_address">
        <view class="spot"></view>
        <text class="yuepai_label"> 地点：</text>
        <text>{{ yuepaiInfo.expect_locale }} </text>
      </view>
      <view class="yuepai_tags">
        <view
          class="tag"
          v-for="(styleItem, styleIndex) in yuepaiInfo.style_label"
          :key="styleIndex"
          >{{ styleItem }}</view
        >
      </view>
      <view class="yuepai_bottom">
        <view class="yuepai_bottom_time">
          <image src="../../../../assets/images/common/time.png"></image>
          {{ yuepaiInfo.date_humanize }}
        </view>
        <view class="yuepai_bottom_read">
          <image src="../../../../assets/images/user/index/invoice.png"></image>
          阅读 {{ yuepaiInfo.statistic.read_cnt }}
        </view>
      </view>
    </view>
    <view class="yuepai_num">
      <view class="yuepai_num_label">
        收到约拍：{{ yuepaiInfo.statistic.invite_cnt }}</view
      >
      <view class="yuepai_img">
        <image src="../../../../assets/images/avatar_default.png"></image>
        <image src="../../../../assets/images/avatar_default.png"></image>
        <image src="../../../../assets/images/avatar_default.png"></image>
        <image src="../../../../assets/images/avatar_default.png"></image>
        <image src="../../../../assets/images/avatar_default.png"></image>
        <image src="../../../../assets/images/avatar_default.png"></image>
        <image src="../../../../assets/images/avatar_default.png"></image>
        <image src="../../../../assets/images/avatar_default.png"></image>
        <image src="../../../../assets/images/avatar_default.png"></image>
        <image src="../../../../assets/images/avatar_default.png"></image>
      </view>
    </view>
    <view
      class="yuepai_fixed_bottom"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <view class="yuepai_fixed_left">
        <view class="yuepai_fixed_item">
          <image src="../../../../assets/images/user/index/yuepai.png"></image>
          {{ yuepaiInfo.statistic.invite_cnt }}
        </view>
        <view class="yuepai_fixed_item" @tap="subGiveUp">
          <image
            src="../../../../assets/images/common/icon_likeed.png"
            v-if="is_vote"
          ></image>
          <image
            src="../../../../assets/images/common/icon_like.png"
            v-else
          ></image>
          {{ yuepaiInfo.statistic.vote_cnt }}
        </view>
        <view class="yuepai_fixed_item">
          <image
            src="../../../../assets/images/common/icon_favorite.png"
          ></image>
          {{ yuepaiInfo.statistic.collect_cnt }}
        </view>
      </view>
      <view class="yuepai_fixed_rt" @tap="launchYuepai"> 约拍 </view>
    </view>
  </view>
</template>

<script>
import { inviteInfo, giveUp } from "../../../../api/index";
import { openPage } from "../../../../utils/util";
import "./index.scss";
export default {
  name: "yuedanDetail",
  data() {
    return {
      author: {},
      isIphoneX: false,
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500,
      imgList: ["11", "22", "33"],
      imgheights: [],
      //图片宽度
      imgwidth: 750,
      //默认  （必须）
      current: 0,
      oid: "",
      author_id: "",
      is_vote: 0,
      yuepaiInfo: {
        author: {
          career_list: [],
        },
        statistic: {},
      },
    };
  },
  methods: {
    imageLoad(e) {
      //获取图片真实宽度
      var imgwidth = e.detail.width,
        imgheight = e.detail.height,
        //宽高比
        ratio = imgwidth / imgheight;
      //计算的高度值
      var viewHeight = 750 / ratio;
      var imgheight = viewHeight;
      this.imgheights.push(imgheight);
    },
    bindchange(e) {
      this.current = e.detail.current;
    },
    bindended() {
      wx.createVideoContext("video").exitFullScreen();
    },
    launchYuepai() {
      openPage("/packageAdd/pages/user/launchyuepai/index?oid=" + this.oid);
    },
    subGiveUp() {
      let params = {
        oid: this.oid,
        visited_id: this.author_id,
        page_type: "invite_details",
        page_name: "约拍详情",
        event_type: this.is_vote == 1 ? 0 : 1, // 1：点赞；0：取
      };
      this.giveUp(params);
    },
    async inviteInfo(params) {
      try {
        let res = await inviteInfo(params);
        this.yuepaiInfo = res.data.data;
        this.is_vote = res.data.data.action.is_vote;
      } catch (error) {}
    },
    async giveUp(params) {
      try {
        let res = await giveUp(params);
        this.is_vote = res.data.data.is_vote;
        this.yuepaiInfo.statistic.vote_cnt = res.data.data.vote_cnt;
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
      this.inviteInfo(params);
    }
  },
};
</script>

<style lang="scss" scoped></style>
