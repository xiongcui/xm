<template>
  <view class="photography-detail">
    <view class="photography-detail-top">
      <view class="view-num">{{ read_cnt }}</view>
      <view class="slide-num" v-if="picture.length"
        >{{ current }}/{{ picture.length }}</view
      >
      <swiper
        :indicator-dots="picture.length > 2 ? indicatorDots : false"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        class="swiper"
        @change="swiperChange"
      >
        <swiper-item v-for="(item, index) in picture" :key="index">
          <view class="swiper-item" @tap="previewImage(item, picture)">
            <image
              mode="aspectFill"
              :src="item"
              class="swiper-item-img"
              :lazy-load="true"
            ></image>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="user-info">
      <view class="user-info-left">
        <view class="user-info-img">
          <image :src="avatar"></image>
        </view>
        <view class="user-info-box">
          <view class="nickname">{{ nickname }}</view>
          <view class="date">{{ create_at }} 发布</view>
        </view>
      </view>
      <view class="user-info-rt">
        <view @tap="follow" class="followed_btn_red" v-if="is_follow == 0"
          >关注</view
        >
        <view class="followed_btn" @tap="unfollow" v-if="is_follow == 1"
          >取消关注</view
        >
      </view>
    </view>
    <view class="photography-detail-ct">
      <view class="photography-detail-title"> {{ title }} </view>
      <view class="photography-detail-desc"> {{ desc }}</view>
    </view>
    <view class="comment">
      <view class="comment-total">共{{ comment_cnt }}条评论</view>
      <view class="comment-info">
        <image :src="avatar"></image>
        <input
          placeholder="有话要说，快来评论"
          placeholderClass="placeholder_input"
          type="text"
          v-model="commentmsg"
          class="commentmsg"
          @blur="commentInput"
          @focus="commentFocus"
        />
      </view>
      <view class="comment-list">
        <view
          class="comment-item"
          v-for="(item, index) in commentList"
          :key="index"
        >
          <view class="comment-box">
            <view class="comment-box-left">
              <image :src="item.avatar"></image>
            </view>
            <view class="comment-box-rt">
              <view class="comment-name"> {{ item.nickname }} </view>
              <view class="comment-ct">
                <view class="comment-txt"> {{ item.content }} </view>
                <view class="comment-date">{{ item.create_at }} </view>
                <view
                  class="comment-reply"
                  @tap="reply(item.nickname, item.oid)"
                  >回复</view
                >
              </view>
            </view>
          </view>
          <view
            class="comment-box child-comment"
            v-for="(descendantsItem, descendantsIndex) in item.descendants"
            :key="descendantsIndex"
          >
            <view class="comment-box-left">
              <image :src="descendantsItem.body.avatar"></image>
            </view>
            <view class="comment-box-rt">
              <view class="comment-name">
                {{ descendantsItem.body.nickname }}
              </view>
              <view class="comment-ct">
                <block v-if="descendantsItem.parent.nickname">
                  <view class="comment-txt"> 回复 </view>
                  <view class="comment-reply-nickname">{{
                    descendantsItem.parent.nickname
                  }}</view>
                </block>
                <view class="comment-txt">
                  {{ descendantsItem.body.content }}
                </view>
                <view class="comment-date">
                  {{ descendantsItem.body.create_at }}</view
                >
                <view
                  class="comment-reply"
                  @tap="reply(item.nickname, descendantsItem.body.oid)"
                  >回复</view
                >
              </view>
            </view>
          </view>
        </view>
      </view>
      <view
        class="comment-fixed"
        :class="isIphoneX ? 'fix-iphonex-button' : ''"
        v-if="!show"
      >
        <input
          placeholder="说点什么..."
          placeholderClass="placeholder_input"
          type="text"
          v-model="leavemsg"
          class="leavemsg"
          @blur="leavemsgChange"
          @focus="commentFocus"
        />
        <view class="comment-fixed-rt">
          <view class="comment-btn" @tap="likeClick">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/icon_likeed.png"
              v-if="is_vote == 1"
            ></image>
            <image
              v-else
              src="https://yuepai-oss.qubeitech.com/static/images/common/icon_like.png"
            ></image>
            <text class="comment-btn-num">{{ vote_cnt }}</text>
          </view>
          <view class="comment-btn">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/comment.png"
            ></image>
            <text class="comment-btn-num">{{ comment_cnt }}</text>
          </view>
          <view class="comment-btn">
            <button open-type="share" class="share-btn">
              <view class="share">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/icon_share.png"
                ></image>
              </view>
            </button>
          </view>
        </view>
      </view>
      <view class="comment-input-fixed" v-if="show">
        <input
          :placeholder="commentPlaceholder"
          placeholderClass="placeholder_input"
          type="text"
          v-model="leavemsg2"
          class="leavemsg"
          :focus="isFocused"
          @blur="leavemsgInput"
          @focus="commentFocus"
        />
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import {
  worksInfo,
  userFollow,
  userUnfollow,
  commentInfo,
  commentCreate,
  shareInvite,
  shareInviteInfo,
  worksEvent,
} from "../../../api/index.js";
import clickThrottle from "../../../utils/clickThrottle";
import { errortip, isLogin, openPage } from "../../../utils/util";
export default {
  name: "photographyDetail",
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500,
      current: 1,
      is_follow: 0,
      is_vote: -1,
      commentmsg: "",
      leavemsg: "",
      leavemsg2: "",
      isIphoneX: false,
      works_oid: "",
      visited_id: "111111",
      uuid: "",
      read_cnt: 0,
      picture: [],
      avatar: "",
      nickname: "",
      title: "",
      desc: "",
      create_at: "",
      commentList: [],
      isFocused: false,
      commentPlaceholder: "",
      show: false,
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      shareFriendsTitle: "",
      shareFriendsImg: "",
      shareFriendsPath: "",
      comment_cnt: 0,
      vote_cnt: 0,
    };
  },
  methods: {
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    swiperChange(e) {
      this.current = e.detail.current + 1;
    },
    follow() {
      if (!clickThrottle()) return;
      if (isLogin()) {
        this.userFollow({
          follow_uuid: this.uuid,
        });
      } else {
        openPage("/pages/login/index");
      }
    },
    unfollow() {
      if (!clickThrottle()) return;
      if (isLogin()) {
        this.userUnfollow({
          unfollow_uuid: this.uuid,
        });
      } else {
        openPage("/pages/login/index");
      }
    },
    commentFocus() {
      if (!isLogin()) {
        openPage("/pages/login/index");
      }
    },
    commentInput() {
      if (this.commentmsg.length < 5) {
        errortip("留言不能少于5字！");
        return false;
      }
      if (this.commentmsg) {
        this.commentCreate({
          works_oid: this.works_oid,
          content: this.commentmsg,
        });
      }
    },
    leavemsgInput() {
      if (this.leavemsg2.length < 5) {
        errortip("留言不能少于5字！");
        this.show = false;
        return false;
      }
      if (this.leavemsg2) {
        this.commentCreate({
          works_oid: this.works_oid,
          parent_oid: this.parent_oid,
          content: this.leavemsg2,
        });
      }
    },
    leavemsgChange() {
      if (this.leavemsg.length < 5) {
        errortip("留言不能少于5字！");
        return false;
      }
      if (this.leavemsg) {
        this.commentCreate({
          works_oid: this.works_oid,
          content: this.leavemsg,
        });
      }
    },
    reply(nickname, oid) {
      if (isLogin()) {
        this.show = true;
        this.parent_oid = oid;
        this.commentPlaceholder = "回复 @" + nickname;
        this.isFocused = true;
      } else {
        openPage("/pages/login/index");
      }
    },
    likeClick() {
      if (isLogin()) {
        this.worksEvent({
          works_oid: this.works_oid,
          event_type: "vote",
          event_action: this.is_vote == 1 ? -1 : 1,
        });
      } else {
        openPage("/pages/login/index");
      }
    },
    async commentCreate(params) {
      try {
        let res = await commentCreate(params);
        this.parent_oid = "";
        this.leavemsg = "";
        this.leavemsg2 = "";
        this.commentmsg = "";
        this.show = false;
        this.commentInfo({
          works_oid: this.works_oid,
        });
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
    async worksInfo(params) {
      try {
        let res = await worksInfo(params);
        console.log(res.data);
        this.read_cnt = res.data.data.stats.read_cnt;
        this.comment_cnt = res.data.data.stats.comment_cnt;
        this.vote_cnt = res.data.data.stats.vote_cnt;
        this.picture = res.data.data.works.picture;
        this.title = res.data.data.works.headline;
        this.desc = res.data.data.works.describe;
        this.avatar = res.data.data.works.avatar;
        this.nickname = res.data.data.works.nickname;
        this.uuid = res.data.data.works.uuid;
        this.is_follow = res.data.data.works.is_follow;
        this.create_at = res.data.data.works.create_at;
        this.is_vote = res.data.data.works.is_vote;
      } catch (error) {}
    },
    async worksEvent(params) {
      try {
        let res = await worksEvent(params);
        this.is_vote = res.data.data.event_action;
        if (res.data.data.event_action == 1) {
          this.vote_cnt = this.vote_cnt + 1;
        } else {
          this.vote_cnt = this.vote_cnt - 1;
        }
      } catch (error) {}
    },
    async commentInfo(params) {
      try {
        let res = await commentInfo(params);
        this.commentList = res.data.data.items;
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
    async shareFriendsInvite(params) {
      try {
        let res = await shareInvite(params);
      } catch (error) {}
    },
    async shareFriendsInviteInfo(params) {
      try {
        let res = await shareInviteInfo(params);
        this.shareFriendsTitle = res.data.data.title;
        this.shareFriendsImg = res.data.data.imageUrl;
        this.shareFriendsPath = res.data.data.path;
      } catch (error) {}
    },
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      project: "works",
      oid: this.works_oid,
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onShareTimeline() {
    this.shareFriendsInvite({
      source: "friends_circle",
      project: "works",
      oid: this.works_oid,
    });
    return {
      title: this.shareFriendsTitle,
      imageUrl: this.shareFriendsImg,
      path: this.shareFriendsPath, // 路径，传递参数到指定页面。
    };
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function (options) {
    if (options.works_oid) {
      this.works_oid = options.works_oid;
    }
    if (options.visited_id) {
      this.visited_id = options.visited_id;
    }
    if (this.works_oid && this.visited_id) {
      this.worksInfo({
        works_oid: this.works_oid,
        visited_id: this.visited_id,
      });
      this.commentInfo({
        works_oid: this.works_oid,
      });
      this.shareInviteInfo({
        source: "share_details",
        project: "works",
        oid: this.works_oid,
      });
      this.shareFriendsInviteInfo({
        source: "friends_circle",
        project: "works",
        oid: this.works_oid,
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
