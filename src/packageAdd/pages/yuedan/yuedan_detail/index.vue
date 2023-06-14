<template>
  <view class="yuedan_detail">
    <view class="detail_top">
      <view class="detail_bg">
        <view class="detail_bg_mc"></view>
        <image mode="aspectFill" :src="backdrop"></image>
      </view>
      <view class="detail_info">
        <view class="detail_info_bg">
          <view
            v-for="(item, index) in yuepaiInfo.topic.payment.items"
            :key="index"
          >
            <view class="cost" v-if="item.is_show_value == 1">
              {{ item.value }}
            </view>
            <view class="cost" v-else>
              {{ item.method }}<text class="price">{{ item.value }}</text>
            </view>
          </view>

          <view class="detail_label">
            {{ yuepaiInfo.topic.target }}
          </view>
        </view>
        <view class="detail_info_title">
          <view
            class="recommend-label"
            v-for="(item, index) in yuepaiInfo.topic.headline.tag"
            :key="index"
            >{{ item }}</view
          >
          <view class="title_desc">{{ yuepaiInfo.topic.headline.title }}</view>
        </view>
        <view class="split_line"></view>
        <view class="list_top">
          <view class="list_top_left">
            <image
              :src="
                yuepaiInfo.author.avatar
                  ? yuepaiInfo.author.avatar
                  : 'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'
              "
              class="avatar"
              @tap="goZhuye()"
            ></image>
            <view class="list_info">
              <view class="list_name">
                {{ yuepaiInfo.author.nickname }}
                <block v-if="yuepaiInfo.author.sex !== null">
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                    class="list_sex"
                    v-if="yuepaiInfo.author.sex == 1"
                  ></image>
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                    class="list_sex"
                    v-if="yuepaiInfo.author.sex == 0"
                  ></image>
                </block>
              </view>
              <view class="list_p">
                <text>{{
                  yuepaiInfo.author.career_list &&
                  yuepaiInfo.author.career_list[0]
                }}</text>
                <view class="icon_real" v-if="yuepaiInfo.author.is_certify"
                  >已实名</view
                >
                <view class="icon_pledge" v-if="yuepaiInfo.author.is_security"
                  >已担保</view
                >
              </view>
            </view>
          </view>
          <view class="list_top_rt">
            <view @tap="follow" class="followed_btn_red" v-if="is_follow == 0"
              >关注</view
            >
            <view class="followed_btn" @tap="unfollow" v-if="is_follow == 1"
              >取消关注</view
            >
            <view class="list_date">{{
              yuepaiInfo.author.login_time_humanize
            }}</view>
          </view>
        </view>
        <view class="split_line"></view>
        <view class="list_bottom">
          <view class="list_time">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
            ></image>
            {{ yuepaiInfo.basic.date_humanize }}
          </view>
          <view class="list_read">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
            ></image>
            阅读 {{ yuepaiInfo.statistic.read_cnt }}
          </view>
        </view>
      </view>
      <view class="enroll_box" v-if="yuepaiInfo.signup.length">
        <view class="enroll_title_left">
          已报名：<text class="enroll_num"
            >({{ yuepaiInfo.signup.length }}人)</text
          ></view
        >
        <view class="yuepai_img">
          <image
            :src="item.avatar"
            v-for="(item, index) in yuepaiInfo.signup"
            :key="index"
          ></image>
        </view>
      </view>
      <view class="tonggao_box">
        <view class="tonggao_title_left"
          ><text class="border-left"></text> 约拍详情
        </view>
        <view class="tonggao_desc">
          <view class="dian"></view
          ><text>{{ yuepaiInfo.details.content }}</text>
        </view>
        <view class="tonggao_desc" v-if="yuepaiInfo.details.expect_time">
          <view class="dian"></view>时间：{{ yuepaiInfo.details.expect_time }}
        </view>
        <view class="tonggao_desc" v-if="yuepaiInfo.details.expect_locale">
          <view class="dian"></view>地点：{{ yuepaiInfo.details.expect_locale }}
        </view>
        <view class="yuepai_tag">
          <text
            class="tag"
            v-for="(item, index) in yuepaiInfo.details.style_label"
            >{{ item }}</text
          >
        </view>
        <view
          class="tonggao_imgbox"
          v-if="yuepaiInfo.details.media.file_type == 'picture'"
        >
          <image
            v-for="(item, index) in yuepaiInfo.details.media.cover"
            :key="index"
            mode="widthFix"
            :src="item"
            @tap="showbigPersonimg(item, yuepaiInfo.details.media.cover)"
          ></image>
        </view>
        <view
          class="tonggao_imgbox"
          v-if="yuepaiInfo.details.media.file_type == 'video'"
        >
          <video
            objectFit="cover"
            :poster="yuepaiInfo.details.media.cover[0]"
            :src="
              yuepaiInfo.details.media.video_cover &&
              yuepaiInfo.details.media.video_cover[0]
            "
            class="list_video"
            @tap.stop=""
          ></video>
        </view>
      </view>
    </view>
    <view class="recommend" v-if="photoAlbumList.length">
      <view class="recommend-title">
        <view class="recommend-name"
          ><text class="border-left"></text> 他的作品
        </view>
        <view class="recommend-rt" @tap="goZhuye">查看主页</view>
      </view>
      <view class="home_item_main">
        <view
          class="personimg_item"
          v-if="index <= 2"
          v-for="(imgitem, index) in photoAlbumList"
          :key="index"
        >
          <image
            @tap="showbigPersonimg(imgitem, photoAlbumList)"
            class="personimg"
            :data-index="index"
            mode="aspectFill"
            :src="imgitem"
          ></image>
          <view class="icon_imgnum" v-if="index == 2">
            <text>{{ photoAlbumList.length }}张</text>
          </view>
        </view>
      </view>
    </view>
    <view class="more_title" v-if="yuepaiList.length">
      <view class="more_dian">
        <text class="dian_item"></text>
        <text class="dian_item"></text>
        <text class="dian_item"></text>
      </view>
      看了又看
      <view class="more_dian">
        <text class="dian_item"></text>
        <text class="dian_item"></text>
        <text class="dian_item"></text>
      </view>
    </view>
    <YuepaiList :baseData="yuepaiList"></YuepaiList>
    <view
      class="yuepai_fixed_bottom"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <view class="yuepai_fixed_left">
        <view class="yuepai_fixed_item">
          <button open-type="share" class="share-btn">
            <view class="share">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/icon_share.png"
              ></image>
            </view>
          </button>
          分享
        </view>
        <view class="yuepai_fixed_item" @tap="subGiveUp">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_likeed.png"
            v-if="is_vote"
          ></image>
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_like.png"
            v-else
          ></image>
          {{
            yuepaiInfo.statistic.vote_cnt
              ? yuepaiInfo.statistic.vote_cnt
              : "点赞"
          }}
        </view>
        <view class="yuepai_fixed_item" @tap="subRecordCollect">
          <image
            v-if="is_collect"
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_favoriteed.png"
          ></image>
          <image
            v-else
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_favorite.png"
          ></image>
          {{
            yuepaiInfo.statistic.collect_cnt
              ? yuepaiInfo.statistic.collect_cnt
              : "收藏"
          }}
        </view>
      </view>
      <view class="yuepai_fixed_rt" @tap="launchYuepai"> 立即约拍 </view>
    </view>
  </view>
</template>

<script>
import {
  inviteInfo,
  giveUp,
  recordCollect,
  shareInvite,
  shareInviteInfo,
  userFollow,
  userUnfollow,
  inviteAdviseList,
  applyVerify,
} from "../../../../api/index";
import YuepaiList from "../../../../components/yuepaiList/index.vue";
import { errortip, isLogin, openPage } from "../../../../utils/util";
import clickThrottle from "../../../../utils/clickThrottle";
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
      backdrop: "",
      imgList: [],
      imgheights: [],
      //图片宽度
      imgwidth: 750,
      //默认  （必须）
      current: 0,
      oid: "",
      author_id: "",
      is_vote: 0,
      is_collect: 0,
      is_follow: 0,
      photoAlbumList: [],
      yuepaiInfo: {
        signup: [],
        basic: {},
        author: {
          sex: 0,
          is_certify: false,
        },
        statistic: {
          collect_cnt: 0,
        },
        topic: {
          payment: {},
          ticket: {},
          headline: {},
        },
        subtitle: {
          first_label: [],
        },
        details: {
          expect_time: "",
          expect_locale: "",
          media: {
            cover: [],
          },
        },
      },
      yuepaiList: [],
      pageNum: 1,
      pageSize: 10,
      shareTitle: "",
      shareImg: "",
      sharePath: "",
    };
  },
  components: {
    YuepaiList,
  },
  methods: {
    showbigPersonimg(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
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
      if (!clickThrottle()) return;
      if (isLogin()) {
        console.log(
          {
            source: "note",
            oid: this.oid,
          },
          "params------"
        );
        this.applyVerify({
          source: "note",
          oid: this.oid,
        });
      } else {
        wx.redirectTo({
          url: "/pages/login/index",
        });
      }
    },
    subGiveUp() {
      if (!clickThrottle()) return;
      let params = {
        oid: this.oid,
        visited_id: this.author_id,
        page_type: "invite_details",
        page_name: "约拍详情",
        event_type: this.is_vote == 1 ? 0 : 1, // 1：点赞；0：取
      };
      this.giveUp(params);
    },
    subRecordCollect() {
      if (!clickThrottle()) return;
      let params = {
        oid: this.oid,
        visited_id: this.author_id,
        page_type: "invite_details",
        page_name: "约拍详情",
        event_type: this.is_collect == 1 ? 0 : 1, // 1：收藏；0：取
      };
      this.recordCollect(params);
    },
    follow() {
      if (!clickThrottle()) return;
      this.userFollow({
        follow_uuid: this.author_id,
      });
    },
    unfollow() {
      if (!clickThrottle()) return;
      this.userUnfollow({
        unfollow_uuid: this.author_id,
      });
    },
    query(type) {
      if (type == "init") this.pageNum = 1;
      let params = {
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.inviteAdviseList(params, type);
    },
    // 加载更多
    onMore() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading();
      //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      wx.showLoading({
        title: "数据加载中...",
      });
      this.loading = false;
      this.query("more");
    },
    goZhuye() {
      if (!clickThrottle()) return;
      openPage("/packageMoka/pages/moka/editshow/index?uuid=" + this.author_id);
    },
    async inviteAdviseList(params, type) {
      try {
        let res = await inviteAdviseList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();

        this.noMore = false;

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();
        if (type == "init") {
          this.yuepaiList = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.yuepaiList = this.yuepaiList.concat(data);
          this.loading = true;
        }
      } catch (error) {
        this.showLoading = false;
        wx.hideNavigationBarLoading();
        if (error.data.error_code == 11020) {
          this.visible = true;
          this.isclick = false;
          console.log(error, "error");
        }
        if (error.data.error_code == 10100 && this.pageNum > 1) {
          this.noMore = true;
        }
      }
    },
    async inviteInfo(params) {
      try {
        let res = await inviteInfo(params);
        this.backdrop = res.data.data.basic.backdrop;
        this.yuepaiInfo = res.data.data;
        this.is_vote = res.data.data.action.is_vote;
        this.is_collect = res.data.data.action.is_collect;
        this.is_follow = res.data.data.action.is_follow;
        this.photoAlbumList = res.data.data.myself_list.photo_album;
        this.query("init");
      } catch (error) {}
    },
    async giveUp(params) {
      try {
        let res = await giveUp(params);
        this.is_vote = res.data.data.is_vote;
        this.yuepaiInfo.statistic.vote_cnt = res.data.data.vote_cnt;
      } catch (error) {}
    },
    async recordCollect(params) {
      try {
        let res = await recordCollect(params);
        this.is_collect = res.data.data.is_collect;
        this.yuepaiInfo.statistic.collect_cnt = res.data.data.collect_cnt;
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
    async applyVerify(params) {
      try {
        let res = await applyVerify(params);
        openPage(
          "/packageAdd/pages/user/launchyuepai/index?oid=" +
            this.oid +
            "&source=note"
        );
      } catch (error) {
        if (error.data.error_code == 21030 || error.data.error_code == 21040) {
          openPage(
            `/packageAdd/pages/guideTips/index?msg=${error.data.msg}&code=${error.data.error_code}`
          );
        } else {
          errortip(error.data.msg);
        }
      }
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
      this.oid = options.scene;
      this.author_id = options.author_id;
    }
    if (this.oid && this.author_id) {
      let params = {
        oid: this.oid,
        author_id: this.author_id,
      };
      this.inviteInfo(params);
      this.shareInviteInfo({
        source: "share_details",
        type: "wechat",
        oid: this.oid,
      });
    }
  },
  //触底加载
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading) {
      this.onMore();
    }
  },
};
</script>

<style lang="scss" scoped></style>
