<template>
  <view class="tonggao_detail">
    <view class="detail_top">
      <view class="detail_bg">
        <view class="detail_bg_mc"></view>
        <image mode="aspectFill" :src="backdrop"></image>
      </view>
      <view class="detail_info">
        <view class="detail_info_bg">
          <view
            v-for="(item, index) in tonggaoInfo.topic.payment.items"
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
            {{ tonggaoInfo.topic.target }}
          </view>
        </view>
        <view class="detail_info_title">
          <!-- <view
            class="recommend-label"
            v-for="(item, index) in tonggaoInfo.topic.headline.tag"
            :key="index"
            >{{ item }}</view
          > -->
          <block v-if="tonggaoInfo.topic.headline.tag.length">
            <image
              class="recommend-image"
              v-for="(tagitem, tagindex) in tonggaoInfo.topic.headline.tag"
              :key="tagindex"
              :src="tagitem"
            >
            </image>
          </block>
          <view class="title_desc">{{ tonggaoInfo.topic.headline.title }}</view>
          <button open-type="share" class="share-btn">
            <view class="share">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/share.png"
              ></image>
            </view>
          </button>
        </view>
        <view class="split_line"></view>
        <view class="detail_tag">
          <view
            class="detail_tag_item"
            v-for="(item, index) in tonggaoInfo.subtitle.first_label"
            :key="index"
          >
            <view class="detail_tag_box">
              <image class="detail_tag_icon" :src="item.icon"></image>
              <view>{{ item.name }}</view>
            </view>
          </view>
        </view>
        <view
          class="split_line"
          v-if="tonggaoInfo.subtitle.second_label.length"
        ></view>
        <view
          class="detail_tag"
          v-if="tonggaoInfo.subtitle.second_label.length"
        >
          <view
            class="detail_tag_item"
            v-for="(item, index) in tonggaoInfo.subtitle.second_label"
            :key="index"
          >
            <view class="detail_tag_box">
              <image class="detail_tag_icon" :src="item.icon"></image>
              <view>{{ item.name }}</view>
            </view>
          </view>
        </view>
        <view class="split_line"></view>
        <view class="list_top">
          <view class="list_top_left">
            <image
              :src="
                tonggaoInfo.author.avatar
                  ? tonggaoInfo.author.avatar
                  : 'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'
              "
              class="avatar"
              @tap="goZhuye"
            ></image>
            <view class="list_info">
              <view class="list_name">
                {{ tonggaoInfo.author.nickname }}
                <block v-if="tonggaoInfo.author.sex !== null">
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                    class="list_sex"
                    v-if="tonggaoInfo.author.sex == 1"
                  ></image>
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                    class="list_sex"
                    v-if="tonggaoInfo.author.sex == 0"
                  ></image>
                </block>
              </view>
              <view class="list_p">
                <text>{{
                  tonggaoInfo.author.career_list &&
                  tonggaoInfo.author.career_list[0]
                }}</text>
                <view class="icon_real" v-if="tonggaoInfo.author.is_certify"
                  >已实名</view
                >
                <view class="icon_pledge" v-if="tonggaoInfo.author.is_security"
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
            <view class="list_date">1小时前来过</view>
          </view>
        </view>
        <view class="split_line"></view>
        <view class="list_bottom">
          <view class="list_time">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
            ></image>
            {{ tonggaoInfo.basic.date_humanize }}
          </view>
          <view class="list_read">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
            ></image>
            阅读 {{ tonggaoInfo.statistic.read_cnt }}
          </view>
        </view>
      </view>
      <view class="enroll_box" v-if="tonggaoInfo.signup.length">
        <view class="enroll_title_left">
          已报名：<text class="enroll_num"
            >({{ tonggaoInfo.signup.length }}人)</text
          ></view
        >
        <view class="yuepai_img">
          <image
            :src="item.avatar"
            v-for="(item, index) in tonggaoInfo.signup"
            :key="index"
          ></image>
        </view>
      </view>
      <view class="tonggao_box">
        <view class="tonggao_title_left"> 通告详情 </view>
        <view class="tonggao_desc">
          <view class="dian"></view>{{ tonggaoInfo.details.content }}
        </view>
        <view class="tonggao_desc" v-if="tonggaoInfo.details.expect_time">
          <view class="dian"></view>时间：{{ tonggaoInfo.details.expect_time }}
        </view>
        <view class="tonggao_desc" v-if="tonggaoInfo.details.expect_locale">
          <view class="dian"></view>地点：{{
            tonggaoInfo.details.expect_locale
          }}
        </view>
        <view
          class="tonggao_imgbox"
          v-if="tonggaoInfo.details.media.file_type == 'picture'"
        >
          <image
            v-for="(item, index) in tonggaoInfo.details.media.cover"
            :key="index"
            mode="widthFix"
            :src="item"
            @tap.stop="previewImage(item, tonggaoInfo.details.media.cover)"
          ></image>
        </view>
        <view
          class="tonggao_imgbox"
          v-if="tonggaoInfo.details.media.file_type == 'video'"
        >
          <video
            objectFit="cover"
            :poster="tonggaoInfo.details.media.cover[0]"
            :src="
              tonggaoInfo.details.media.video_cover &&
              tonggaoInfo.details.media.video_cover[0]
            "
            class="list_video-width"
            @tap.stop=""
          ></video>
        </view>
      </view>
    </view>
    <view class="recommend" v-if="noticeRecommendList.length">
      <view class="recommend-title">
        <view class="recommend-name"> 他的通告 </view>
      </view>
      <view
        class="recommend-ct"
        v-for="(item, index) in noticeRecommendList"
        :key="index"
        v-if="noticeRecommendList.length"
      >
        <view
          class="recommend-box"
          :id="'tonggao-recommend-box' + index"
          @tap="godetail(item.basic.oid, item.author.uuid)"
        >
          <view class="tonggao-recommend">
            <view class="tonggao-recommend-top">
              <view class="tonggao-info-title">
                <block v-if="item.topic.headline.tag.length">
                  <image
                    class="recommend-image"
                    v-for="(tagitem, tagindex) in item.topic.headline.tag"
                    :key="tagindex"
                    :src="tagitem"
                  >
                  </image>
                </block>
                <view class="tonggao-txt">
                  {{ item.topic.headline.title }}</view
                >
              </view>
            </view>
            <view class="tonggao-recommend-bt">
              <view class="tonggao-recommend-info">
                <view class="list_title">
                  <view class="recommend-style">
                    <view class="recommend-label">
                      {{ item.topic.target }}
                    </view>
                    <view class="recommend-label2">
                      {{ item.topic.payment.title }}
                    </view>
                  </view>
                </view>
                <view class="tonggao-tags">
                  <view
                    class="tag-item"
                    v-for="(tag, tagIndex) in item.subtitle.first_label"
                    :key="tagIndex"
                    >{{ tag.name }}</view
                  >
                </view>
                <!-- <view class="tonggao-recommend-price">
                          <view class="pirce">
                            {{ item.topic.payment.title }}</view
                          >
                          <view class="recommend-btn">立即报名</view>
                        </view> -->
              </view>
              <view
                class="tonggao-recommend-img"
                v-if="item.details.media.file_type == 'picture'"
              >
                <image
                  :src="item.details.media.cover[0]"
                  mode="aspectFill"
                  @tap.stop="
                    previewImage(
                      item.details.media.cover[0],
                      item.details.media.cover
                    )
                  "
                ></image>
              </view>
            </view>
          </view>
          <view class="tonggao-bottom">
            <view class="tonggao-head">
              <image
                :src="
                  item.author.avatar
                    ? item.author.avatar
                    : 'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'
                "
              ></image>
              {{ item.author.nickname }}
            </view>
            <view class="tonggao-yuepai">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
              ></image>
              {{ item.statistic.invite_cnt }}
            </view>
            <view class="tonggao-read">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
              ></image>
              {{ item.statistic.read_cnt }}
            </view>
          </view>
          <!-- <view class="tonggao-recommend">
            <view class="tonggao-recommend-top">
              <view class="tonggao-info-title">
                <view
                  class="recommend-label"
                  v-for="(tagitem, tagindex) in item.topic.headline.tag"
                  :key="tagindex"
                >
                  {{ tagitem }}
                </view>
                <view class="tonggao-txt">
                  {{ item.topic.headline.title }}</view
                >
              </view>
            </view>
            <view class="tonggao-recommend-bt">
              <view
                class="tonggao-recommend-img"
                v-if="item.details.media.file_type == 'picture'"
              >
                <image
                  :src="item.details.media.cover[0]"
                  mode="aspectFill"
                  @tap.stop="
                    previewImage(
                      item.details.media.cover[0],
                      item.details.media.cover
                    )
                  "
                ></image>
              </view>
              <view class="tonggao-recommend-info">
                <view class="tonggao-info-desc">
                  {{ item.details.summary }}</view
                >
                <view class="tonggao-tags">
                  <view
                    class="tag-item"
                    v-for="(tag, tagIndex) in item.subtitle.first_label"
                    :key="tagIndex"
                    >{{ tag.name }}</view
                  >
                </view>
                <view class="tonggao-tags">
                  <view
                    class="tag-item"
                    v-for="(tag, tagIndex) in item.subtitle.second_label"
                    :key="tagIndex"
                    >{{ tag.name }}</view
                  >
                </view>
                <view class="tonggao-recommend-price">
                  <view class="pirce"> {{ item.topic.payment.title }}</view>
                  <view class="recommend-btn" @tap="nowYuepai(item.basic.oid)"
                    >立即报名</view
                  >
                </view>
              </view>
            </view>
          </view>
          <view class="tonggao-bottom">
            <view class="tonggao-head">
              <image
                :src="
                  item.author.avatar
                    ? item.author.avatar
                    : 'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'
                "
              ></image>
              {{ item.author.nickname }}
            </view>
            <view class="tonggao-yuepai">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
              ></image>
              {{ item.statistic.invite_cnt }}
            </view>
            <view class="tonggao-read">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
              ></image>
              {{ item.statistic.read_cnt }}
            </view>
          </view> -->
        </view>
      </view>
      <view v-else class="none-data">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
          mode="aspectFill"
          class="none-img"
        ></image>
        <view>当前暂无信息哦～</view>
      </view>
    </view>
    <view class="more_title" v-if="noticeList.length">
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
    <TonggaoList :baseData="noticeList"></TonggaoList>
    <view class="nomore" v-if="noMore">没有更多了～</view>
    <view
      class="tonggao_fixed_bottom"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <view class="tonggao_fixed_left">
        <view class="tonggao_fixed_item" @tap="subRecordCollect">
          <image
            v-if="is_collect"
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_favoriteed.png"
          ></image>
          <image
            v-else
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_favorite.png"
          ></image>
          {{ tonggaoInfo.statistic.collect_cnt }}
        </view>
      </view>
      <view class="tonggao_fixed_rt" @tap="launchYuepai"> 我要报名 </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import TonggaoList from "../../../components/tonggaoList/index.vue";
import {
  noticeInfo,
  recordCollect,
  shareInvite,
  shareInviteInfo,
  userFollow,
  userUnfollow,
  noticeAdviseList,
} from "../../../api/index";
import { errortip, isLogin, openPage } from "../../../utils/util";
export default {
  name: "tonggaoDetail",
  data() {
    return {
      isIphoneX: false,
      loading: false,
      noMore: false,
      oid: "",
      author_id: "",
      is_collect: 0,
      is_follow: 0,
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      backdrop: "",
      tonggaoInfo: {
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
          headline: {
            tag: [],
          },
        },
        subtitle: {
          first_label: [],
          second_label: [],
        },
        details: {
          expect_time: "",
          expect_locale: "",
          media: {
            cover: [],
          },
        },
      },
      noticeRecommendList: [],
      noticeList: [],
      pageNum: 1,
      pageSize: 10,
    };
  },
  components: {
    TonggaoList,
  },
  methods: {
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    godetail(oid, author_id) {
      openPage(
        "/packageTonggao/pages/detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
    formatSex(sex) {
      if (sex == 1) {
        return "男";
      } else if (sex == 0) {
        return "女";
      } else {
        return "不限";
      }
    },
    nowYuepai(oid) {
      if (isLogin()) {
        openPage("/packageAdd/pages/user/launchyuepai/index?oid=" + oid);
      } else {
        wx.redirectTo({
          url: "/pages/login/index",
        });
      }
    },
    launchYuepai() {
      if (isLogin()) {
        let userInfo = wx.getStorageSync("userInfo");
        let uuid = userInfo.uuid;
        if (uuid != this.author_id) {
          openPage("/packageAdd/pages/user/launchyuepai/index?oid=" + this.oid);
        } else {
          errortip("自己不可报名自己哦，看看别的吧");
        }
      } else {
        wx.redirectTo({
          url: "/pages/login/index",
        });
      }
    },
    goZhuye() {
      openPage("/packageMoka/pages/moka/editshow/index?uuid=" + this.author_id);
    },
    subRecordCollect() {
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
      this.userFollow({
        follow_uuid: this.tonggaoInfo.author.uuid,
      });
    },
    unfollow() {
      this.userUnfollow({
        unfollow_uuid: this.tonggaoInfo.author.uuid,
      });
    },
    noticeQuery(type) {
      if (type == "init") this.pageNum = 1;
      let params = {
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.noticeAdviseList(params, type);
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
      this.noticeQuery("more");
    },
    async noticeInfo(params) {
      try {
        let res = await noticeInfo(params);
        this.backdrop = res.data.data.basic.backdrop;
        this.tonggaoInfo = res.data.data;
        this.is_collect = res.data.data.action.is_collect;
        this.is_follow = res.data.data.action.is_follow;
        this.noticeRecommendList = res.data.data.myself_list.items;
        this.noticeQuery("init");
      } catch (error) {}
    },
    async recordCollect(params) {
      try {
        let res = await recordCollect(params);
        this.is_collect = res.data.data.is_collect;
        this.tonggaoInfo.statistic.collect_cnt = res.data.data.collect_cnt;
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
    async noticeAdviseList(params, type) {
      try {
        let res = await noticeAdviseList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();

        this.noMore = false;

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();
        if (type == "init") {
          this.noticeList = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.noticeList = this.noticeList.concat(data);
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
      this.noticeInfo(params);
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
      this.noticeInfo(params);
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
