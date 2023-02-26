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
          @tap="follow"
          v-if="is_follow == 0"
        ></image>
        <image
          class="follow"
          src="../../../../assets/images/common/followed_gray.png"
          @tap="unfollow"
          v-if="is_follow == 1"
        ></image>
        <button open-type="share" class="share-btn">
          <image
            class="share"
            src="../../../../assets/images/common/icon_share.png"
          ></image>
        </button>
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
        <view class="zuopin_fixed_item" @tap="subGiveUp">
          <image
            src="../../../../assets/images/common/icon_likeed.png"
            v-if="is_vote"
          ></image>
          <image
            src="../../../../assets/images/common/icon_like.png"
            v-else
          ></image>
          {{ zuopinInfo.statistic.vote_cnt }}
        </view>
        <view class="zuopin_fixed_item" @tap="subRecordCollect">
          <image
            v-if="is_collect"
            src="../../../../assets/images/common/icon_favoriteed.png"
          ></image>
          <image
            v-else
            src="../../../../assets/images/common/icon_favorite.png"
          ></image>
          {{ zuopinInfo.statistic.collect_cnt }}
        </view>
      </view>
      <view class="zuopin_fixed_rt" @tap="launchYuepai"> 约拍 </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import {
  photoInfo,
  giveUp,
  recordCollect,
  shareInvite,
  shareInviteInfo,
  userFollow,
  userUnfollow,
} from "../../../../api/index";
import { openPage } from "../../../../utils/util";
export default {
  name: "zuopin_detail",
  data() {
    return {
      author_id: "",
      oid: "",
      isIphoneX: false,
      is_vote: 0,
      is_collect: 0,
      is_follow: 0,
      zuopinInfo: {
        author: {
          career_list: [],
        },
        statistic: {},
      },
      shareTitle: "",
      shareImg: "",
      sharePath: "",
    };
  },
  methods: {
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
        page_type: "photo_details",
        page_name: "作品详情",
        event_type: this.is_vote == 1 ? 0 : 1, // 1：点赞；0：取
      };
      this.giveUp(params);
    },
    subRecordCollect() {
      let params = {
        oid: this.oid,
        visited_id: this.author_id,
        page_type: "photo_details",
        page_name: "作品详情",
        event_type: this.is_collect == 1 ? 0 : 1, // 1：收藏；0：取
      };
      this.recordCollect(params);
    },
    follow() {
      this.userFollow({
        follow_uuid: this.zuopinInfo.author_id,
      });
    },
    unfollow() {
      this.userUnfollow({
        unfollow_uuid: this.zuopinInfo.author_id,
      });
    },
    async photoInfo(params) {
      try {
        let res = await photoInfo(params);
        this.zuopinInfo = res.data.data;
        this.is_vote = res.data.data.action.is_vote;
        this.is_collect = res.data.data.action.is_collect;
        this.is_follow = res.data.data.action.is_follow;
      } catch (error) {}
    },
    async giveUp(params) {
      try {
        let res = await giveUp(params);
        this.is_vote = res.data.data.is_vote;
        this.zuopinInfo.statistic.vote_cnt = res.data.data.vote_cnt;
      } catch (error) {}
    },
    async recordCollect(params) {
      try {
        let res = await recordCollect(params);
        this.is_collect = res.data.data.is_collect;
        this.zuopinInfo.statistic.collect_cnt = res.data.data.collect_cnt;
      } catch (error) {}
    },
    async shareInvite(params) {
      try {
        let res = await shareInvite(params);
      } catch (error) {}
    },
    async shareInviteInfo(params) {
      try {
        let res = await shareInviteInfo(params);
        this.shareTitle = res.data.data.title;
        this.shareImg = res.data.data.imageUrl;
        this.sharePath = res.data.data.path;
      } catch (error) {}
    },
    async userFollow(params) {
      try {
        let res = await userFollow(params);
        this.is_follow = 1;
      } catch (error) {}
    },
    async userUnfollow(params) {
      try {
        let res = await userUnfollow(params);
        this.is_follow = 0;
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      type: "wechat",
      oid: this.oid,
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onLoad: function (options) {
    this.oid = options.oid;
    this.author_id = options.author_id;
    if (options.scene) {
      // 分享出去-查看详情
      let params = {
        oid: options.scene,
        author_id: options.author_id,
      };
      this.photoInfo(params);
      this.shareInviteInfo({
        source: "share_details",
        type: "wechat",
        oid: options.scene,
      });
    }
    if (this.oid && this.author_id) {
      let params = {
        oid: this.oid,
        author_id: this.author_id,
      };
      this.photoInfo(params);
      this.shareInviteInfo({
        source: "share_details",
        type: "wechat",
        oid: this.oid,
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
