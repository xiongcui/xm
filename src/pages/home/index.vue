<template>
  <view class="home">
    <view class="home-top">
      <view
        class="custom_head"
        :style="{ height: globalData.navHeight + 'px' }"
      >
        <view
          class="flex-row"
          :style="{
            width: '100%',
            height: globalData.navObj + 'px',
            'padding-top': globalData.navTop + 'px',
            'padding-right': globalData.navObjWid + 5 + 'px',
          }"
        >
          <view class="head_left">
            <view class="select-city" @tap="selectCity" v-if="city">
              {{ city }}
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/back.png"
                class="roll-down"
              ></image>
            </view>
            <view class="head_sign" @tap="showSign" v-if="!showlogin">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/icon_signed.jpg"
                v-if="is_today_sign"
              ></image>
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/icon_sign.jpg"
                v-else
              ></image>
            </view>
          </view>
          <view class="head_title"> 虾米约拍 </view>
        </view>
        <view
          class="custom_tips_box"
          :style="{
            height: globalData.navObj + 'px',
            right: globalData.navObjWid + 10 + 'px',
            top: globalData.navTop + 'px',
          }"
          @tap="changeTips"
          v-if="!added"
        >
          <text
            class="custom_tips"
            :style="{
              height: globalData.navObj - 6 + 'px',
            }"
          >
            点击“···”【添加到我的】
            <text class="triangle"></text>
          </text>
        </view>
      </view>
      <view :style="{ height: globalData.navHeight + 'px' }"></view>
      <block>
        <view class="page-bg"></view>
        <view class="page-section page-section-spacing swiper">
          <swiper
            :indicator-dots="indicatorDots"
            :autoplay="autoplay"
            :interval="interval"
            :duration="duration"
          >
            <block v-for="(item, index) in banner" :key="index">
              <swiper-item @tap="bannerClick(item.event, item.redirect_url)">
                <view class="swiper-item">
                  <image
                    mode="aspectFill"
                    :src="item.image_url"
                    class="swiper-item-img"
                  ></image>
                </view>
              </swiper-item>
            </block>
          </swiper>
        </view>
      </block>
      <!-- <view class="news">
        <view class="news-title">消息</view>
        <view class="news-line">|</view>
        <view class="news-txt">看大佬如何用手机拍出黑白大片</view>
        <view class="news-btn">去看看</view>
      </view> -->
      <view class="news">
        <view class="news-title">消息</view>
        <view class="news-line">|</view>
        <swiper
          :indicator-dots="false"
          :autoplay="true"
          :interval="interval"
          :duration="duration"
          :vertical="true"
          class="home_notify"
        >
          <swiper-item
            class="home_notify_item"
            v-for="(item, index) in notify"
            :key="index"
          >
            <view class="news-txt">{{ item.name }}</view>
            <view
              class="news-btn"
              @tap="bannerClick(item.event, item.redirect_url)"
              >去看看</view
            >
          </swiper-item>
        </swiper>
      </view>
      <view class="page-nav">
        <view class="page-nav-top">
          <view class="page-nav-item" @tap="goTakelist">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/icon_model.png"
              class="page-nav-img"
            ></image>
            <text class="page-nav-text">模特</text>
          </view>
          <view class="page-nav-item" @tap="goTakelist">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/take.png"
              class="page-nav-img"
            ></image>
            <text class="page-nav-text">摄影</text>
          </view>
          <view class="page-nav-item" @tap="goMore(2)">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/more1.png"
              class="page-nav-img"
            ></image>
            <text class="page-nav-text">作品</text>
          </view>
          <view class="page-nav-item" @tap="gomoka">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/moka.png"
              class="page-nav-img"
            ></image>
            <text class="page-nav-text">模卡</text>
          </view>
        </view>
        <view class="page-nav-bottom">
          <view class="page-nav-box nav_bg1" @tap="goMore(0)">
            <view class="page-nav-left">
              <view class="page-nav-title">约拍</view>
              <view class="page-nav-desc">你约我拍</view>
            </view>
            <view class="page-nav-rt">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/photo_white.png"
              ></image>
            </view>
          </view>
          <view class="page-nav-box nav_bg2" @tap="goMore(1)">
            <view class="page-nav-left">
              <view class="page-nav-title">通告</view>
              <view class="page-nav-desc">招募公告</view>
            </view>
            <view class="page-nav-rt">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/tonggao_white.png"
              ></image>
            </view>
          </view>
        </view>
      </view>
      <!-- <view class="recommend">
        <view class="recommend-title">
          <view class="recommend-name"> 约拍推荐 </view>
          <view
            class="recommend-more"
            @tap="goMore(0)"
            v-if="inviteRecommendList.length"
            >更多</view
          >
        </view>
        <view class="recommend-ct">
          <swiper
            :indicator-dots="indicatorDots2"
            :autoplay="false"
            :interval="interval2"
            :duration="duration"
            class="yuepai-swiper"
            @change="swiperChange"
            :style="{
              height: swiperheight + 'px',
            }"
            :key="1"
            v-if="inviteRecommendList.length"
          >
            <block v-for="(item, index) in inviteRecommendList" :key="index">
              <swiper-item>
                <view
                  class="recommend-box"
                  :id="'recommend-box' + index"
                  @tap="goYuepaiDetail(item.basic.oid, item.author.uuid)"
                >
                  <view class="tonggao-recommend">
                    <view class="list_box">
                      <view class="list_top">
                        <view class="list_top_left">
                          <image
                            :src="
                              item.author.avatar
                                ? item.author.avatar
                                : 'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'
                            "
                            class="avatar"
                            @tap.stop="goZhuye(item.author.uuid)"
                          ></image>
                          <view class="list_info">
                            <view class="list_name">
                              {{ item.author.nickname }}
                              <block v-if="item.author.sex !== null">
                                <image
                                  src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                                  class="list_sex"
                                  v-if="item.author.sex == 1"
                                ></image>
                                <image
                                  src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                                  class="list_sex"
                                  v-if="item.author.sex == 0"
                                ></image>
                              </block>
                            </view>
                            <view class="list_p">
                              <text>
                                {{
                                  item.author.career_list &&
                                  item.author.career_list.length
                                    ? item.author.career_list[0]
                                    : null
                                }}</text
                              >
                              <view
                                class="icon_real"
                                v-if="item.author.is_certify"
                                >已实名</view
                              >
                              <view
                                class="icon_pledge"
                                v-if="item.author.is_security"
                                >已担保</view
                              >
                            </view>
                          </view>
                        </view>
                        <view class="list_top_rt">
                          <view class="list_date">{{
                            item.author.login_time_humanize
                          }}</view>
                        </view>
                      </view>
                      <view class="list_content">
                        <view class="list_title">
                          <view class="recommend-style" :key="index">
                            <view class="recommend-label">
                              {{ item.topic.target }}
                            </view>

                            <view class="recommend-label2">
                              {{ item.topic.payment.title }}
                            </view>
                          </view>
                          <view class="list_loction">
                            {{ item.topic.face_city.name }}
                          </view>
                        </view>
                        <view class="list_title_desc">{{
                          item.topic.headline.title
                        }}</view>
                      </view>
                      <view
                        class="list_img"
                        v-if="item.details.media.file_type == 'picture'"
                      >
                        <scroll-view :enhanced="true" :scrollX="true">
                          <image
                            :src="url"
                            mode="aspectFill"
                            class="list_img_item"
                            v-for="(url, coverIndex) in item.details.media
                              .cover"
                            :key="coverIndex"
                          ></image>
                        </scroll-view>
                      </view>
                      <view
                        class="list_video"
                        v-if="item.details.media.file_type == 'video'"
                      >
                        <video
                          objectFit="cover"
                          :poster="item.details.media.cover[0]"
                          :src="
                            item.details.media.video_cover &&
                            item.details.media.video_cover[0]
                          "
                          class="list_video-width"
                          @tap.stop=""
                        ></video>
                      </view>
                      <view class="list_bottom">
                        <view class="list_time">
                          <image
                            src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                          ></image>
                          {{ item.basic.date_humanize }}
                        </view>
                        <view class="list_yuepai">
                          <image
                            src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                          ></image>
                          收到约拍 {{ item.statistic.invite_cnt }}
                        </view>
                        <view class="list_read">
                          <image
                            src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                          ></image>
                          阅读 {{ item.statistic.read_cnt }}
                        </view>
                      </view>
                    </view>
                  </view>
                </view>
              </swiper-item>
            </block>
          </swiper>
          <view v-if="!inviteRecommendList.length" class="none-data">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
              mode="aspectFill"
              class="none-img"
            ></image>
            <view>当前暂无信息哦～</view>
          </view>
        </view>
      </view>
      <view class="recommend">
        <view class="recommend-title">
          <view class="recommend-name"> 通告推荐 </view>
          <view
            class="recommend-more"
            @tap="goMore(1)"
            v-if="noticeRecommendList.length"
            >更多</view
          >
        </view>
        <view class="recommend-ct">
          <swiper
            :indicator-dots="indicatorDots2"
            :autoplay="false"
            :interval="interval2"
            :duration="duration"
            class="tonggao-swiper"
            @change="tonggaoSwiperChange"
            :style="{
              height: tonggaoSwiperHeight + 'px',
            }"
            :key="2"
            v-if="noticeRecommendList.length"
          >
            <block v-for="(item, index) in noticeRecommendList" :key="index">
              <swiper-item>
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
                            v-for="(tagitem, tagindex) in item.topic.headline
                              .tag"
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
                        <view class="recommend-style">
                          <text class="recommend-label">
                            {{ item.topic.target }}
                          </text>
                          <text class="recommend-label2">
                            {{ item.topic.payment.title }}
                          </text>
                        </view>
                        <view class="tonggao-tags">
                          <view
                            class="tag-item"
                            v-for="(tag, tagIndex) in item.subtitle.first_label"
                            :key="tagIndex"
                            >{{ tag.name }}</view
                          >
                        </view>
                      </view>
                      <view
                        class="tonggao-recommend-img"
                        v-if="item.details.media.file_type == 'picture'"
                      >
                        <image
                          :src="item.details.media.cover[0]"
                          mode="aspectFill"
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
                </view>
              </swiper-item>
            </block>
          </swiper>
          <view v-if="!noticeRecommendList.length" class="none-data">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
              mode="aspectFill"
              class="none-img"
            ></image>
            <view>当前暂无信息哦～</view>
          </view>
        </view>
      </view> -->
      <view class="componets">
        <view
          :class="
            index == componetActive ? 'componets-nav-acitve' : 'componets-nav'
          "
          v-for="(item, index) in componetsNav"
          :key="index"
          @tap="componetClick(index)"
        >
          <view class="componets-title">{{ item.name }}</view>
          <view class="componets-btn">{{ item.desc }}</view>
        </view>
      </view>
    </view>

    <Pagenav
      :pageActive="componetActive"
      :active="navActive"
      :navList="navList"
      :chargeList="chargeData"
      :purposeList="purposeData"
      :appointmentList="appointmentData"
      :identityList="identityData"
      :noticeList="noticeData"
      :isMargin="true"
      @pageNavClick="pageNavClick"
      @navClick="navClick"
      @submitQuery="submitQuery"
      v-show="navShow"
      ref="pageNavRef"
    ></Pagenav>

    <view id="list">
      <swiper
        :current="componetActive"
        class="swiper-box"
        duration="300"
        @change="bindChange"
        :style="{ height: swiperHeightCt ? swiperHeightCt : '100vh' }"
      >
        <swiper-item>
          <YuepaiList
            class="list-height"
            :baseData="yuepaiList"
            v-if="componetActive == 0"
          ></YuepaiList>
        </swiper-item>
        <swiper-item>
          <TonggaoList
            class="list-height"
            :baseData="noticeList"
            v-if="componetActive == 1"
          ></TonggaoList>
        </swiper-item>
        <swiper-item>
          <ZuopinList
            class="list-height"
            :baseData="zuopinList"
            v-if="componetActive == 2"
          ></ZuopinList>
        </swiper-item>
      </swiper>
      <view class="nomore" v-if="noMore">没有更多了～</view>
      <loading :showLoading="showLoading"></loading>
      <view class="login-mask" v-if="visible">
        <view class="mask-box">
          <view class="mask-title">
            授权登录
            <view class="close" @tap="modelClose"></view>
          </view>
          <view class="mask-ct">
            <view class="mask-login-tips">授权登录后查看更多优质模特图</view>
            <view class="mask-login-btn" @tap="goLogin">授权登录</view>
            <view class="mask-login-cancel" @tap="modelClose">再看看</view>
          </view>
        </view>
      </view>
    </view>
    <!--签到-->
    <sign :visible="showModelSign" :msg="hyper_desc" @close="signClose"></sign>
    <!--签到-->
    <!--未登录提示-->
    <ShowLogin v-if="showlogin" @getUserProfile="goLogin"></ShowLogin>
    <!--未登录提示-->
    <!--特邀用户-->
    <view class="invited-users" v-if="invitedVisible" @tap.stop="invitedClose">
      <view class="invited-users-box">
        <view class="invited-users-close" @tap.stop="invitedClose"></view>
        <view class="invited-users-title">{{ invitedTitle }}</view>
        <view class="invited-users-txt">
          <text>{{ invitedText }}</text>
        </view>
        <view class="invited-users-btn" @tap.stop="invited">
          {{ invitedBtn }}
        </view>
      </view>
    </view>
    <!--特邀用户-->
  </view>
</template>

<script>
import "./index.scss";
const citySelector = requirePlugin("citySelector");
import TonggaoList from "../../components/tonggaoList/index.vue";
import YuepaiList from "../../components/yuepaiList/index.vue";
import ZuopinList from "../../components/zuopinList/index.vue";
import Pagenav from "../../components/pagenav/index.vue";
import loading from "../../components/loading/index.vue";
import ShowLogin from "../../components/showLogin/index.vue";
import sign from "../../components/sign/index.vue";
import {
  inviteAdviseList,
  noticeAdviseList,
  notifyNumber,
  isSign,
  inviteList,
  noticeList,
  photoList,
  userStatus,
  userSelectCity,
  inviteFilter,
  noticeFilter,
  photoFilter,
  shareInvite,
  submitSign,
  bannerList,
  shareInviteInfo,
  sourceItems,
  popupLogs,
} from "../../api/index";
import { openPage, isLogin, errortip } from "../../utils/util";
import clickThrottle from "../../utils/clickThrottle";
export default {
  name: "home",
  data() {
    return {
      showlogin: false,
      visible: false,
      noMore: false,
      showLoading: true,
      loading: false,
      invitedVisible: false,
      topNum: 0,
      swiperheight: 144,
      tonggaoSwiperHeight: 240,
      city: "",
      is_today_sign: 0,
      showModelSign: false,
      hyper_desc: "",
      background: ["1", "2", "3"],
      banner: [],
      notify: [],
      indicatorDots: true,
      indicatorDots2: false,
      vertical: false,
      autoplay: true,
      interval: 5000,
      interval2: 10000,
      duration: 500,
      componetActive: 0,
      navActive: 0,
      headCurrent: 0,
      pageNum: 1,
      pageSize: 10,
      navShow: false,
      inviteRecommendList: [],
      noticeRecommendList: [],
      navList: [],
      chargeData: [],
      purposeData: [],
      appointmentData: [],
      identityData: [],
      noticeData: [],
      componetsNav: [
        {
          name: "约拍",
          desc: "你约我拍",
        },
        {
          name: "通告",
          desc: "招募公告",
        },
        {
          name: "作品",
          desc: "佳作赏欣",
        },
      ],
      yuepaiList: [],
      noticeList: [],
      zuopinList: [],
      city_filter: {},
      recommend_city_filter: {},
      isclick: false,
      key: "XJCBZ-ZUJNV-VRLP7-UCFUN-LNGNT-FVFZ2", // 使用在腾讯位置服务申请的key
      referer: "虾米约拍", // 调用插件的app的名称
      hotCitys: "",
      shareTitle: "",
      sharePath: "",
      shareImg: "",
      token: "",
      userinfor: {},
      winWidth: 0,
      winHeight: 0,
      swiperHeightCt: 0,
      added: false,
      invitedTitle: "恭喜成为特邀用户",
      invitedText: "现邀你参加快捷约拍活动↵发布约拍后将获得更多曝光机会",
      invitedBtn: "立即参加",
      invitedRedirectUrl: "",
    };
  },
  components: {
    TonggaoList,
    YuepaiList,
    ZuopinList,
    Pagenav,
    loading,
    ShowLogin,
    sign,
  },
  methods: {
    invitedClose() {
      this.invitedVisible = false;
      this.popupLogs({
        click_event: 0,
      });
    },
    invited() {
      this.popupLogs({
        click_event: 1,
      });
      this.invitedVisible = false;
      openPage(this.invitedRedirectUrl);
    },
    changeTips() {
      this.added = !this.added;
    },
    bindChange(e) {
      this.componetActive = e.detail.current;
      this.pageNavClick(e.detail.current);
    },
    setSwiperHeight() {
      let dom = ".list-height";
      wx.createSelectorQuery()
        .select(dom)
        .boundingClientRect((rect) => {
          this.swiperHeightCt = rect.height + "px";
        })
        .exec();
    },
    modelClose() {
      this.visible = false;
    },
    goZhuye(uuid) {
      if (!clickThrottle()) return;
      openPage("/packageMoka/pages/moka/editshow/index?uuid=" + uuid);
    },
    gomoka() {
      if (isLogin()) {
        openPage("/packageMoka/pages/moka/modelcard/index");
      } else {
        openPage("/pages/login/index");
      }
    },
    signClose() {
      this.showModelSign = false;
    },
    showSign() {
      this.submitSign("");
    },
    goYuepaiDetail(oid, author_id) {
      openPage(
        "/packageAdd/pages/yuedan/yuedan_detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
    godetail(oid, author_id) {
      openPage(
        "/packageTonggao/pages/detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    selectCity() {
      wx.navigateTo({
        url: `plugin://citySelector/index?key=${this.key}&referer=${this.referer}&hotCitys=${this.hotCitys}`,
      });
    },
    goMore(index) {
      if (isLogin()) {
        openPage(
          "/packageAdd/pages/user/homelist/index?componetActive=" +
            index +
            "&city_filter=" +
            this.city_filter
        );
      } else {
        openPage("/pages/login/index");
      }
    },
    goTakelist() {
      if (isLogin()) {
        openPage(
          "/packageAdd/pages/user/takelist/index?city_filter=" +
            this.city_filter
        );
      } else {
        openPage("/pages/login/index");
      }
    },
    componetClick(index) {
      if (this.componetActive != index) {
        this.componetActive = index;
        this.pageNum = 1;
        this.isclick = true;
        this.showLoading = true;
        this.switchQuery(index, false);
      }
    },
    pageNavClick(index) {
      this.pageNum = 1;
      this.componetActive = index;
      this.navActive = 0;
      this.isclick = true;
      this.showLoading = true;
      this.switchQuery(index, true);
    },
    navClick(pageNavIndex, navIndex) {
      this.pageNum = 1;
      this.isclick = true;
      this.showLoading = true;
      if (pageNavIndex == 0) {
        this.query("init", navIndex, true);
      } else if (pageNavIndex == 1) {
        this.noticeQuery("init", navIndex, true);
      } else if (pageNavIndex == 2) {
        this.zuopinQuery("init", navIndex, true);
      }
    },
    submitQuery(pageNavIndex, navIndex, select_filter) {
      this.select_filter = select_filter;
      this.showLoading = true;
      switch (pageNavIndex) {
        case 0:
          this.query("init", navIndex, true);
          break;
        case 1:
          this.noticeQuery("init", navIndex, true);
          break;
        case 2:
          this.zuopinQuery("init", navIndex, true);
          break;
      }
    },
    switchQuery(index, scroll) {
      switch (index) {
        case 0:
          this.inviteFilter({}, scroll);
          break;
        case 1:
          this.noticeFilter({}, scroll);
          break;
        case 2:
          this.photoFilter({}, scroll);
          break;
      }
    },
    query(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      this.inviteList(
        {
          select_filter: this.select_filter,
          city_filter: this.city_filter,
          quick_filter: this.navList.length ? this.navList[navActive].key : "",
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type,
        scroll
      );
    },
    noticeQuery(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      let params = {
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navList.length ? this.navList[navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.queryNoticeList(params, type, scroll);
    },
    zuopinQuery(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      let params = {
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navList.length ? this.navList[navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.queryPhotoList(params, type, scroll);
    },
    swiperChange(e) {
      //创建节点选择器,动态获取面板高度设置动画高度
      var query = wx.createSelectorQuery();
      var id = "#recommend-box" + e.detail.current;
      var that = this;
      query.select(id).boundingClientRect();
      query.exec(function (res) {
        //res[0].height 为获取的收缩栏面板展开部分的高度
        that.swiperheight = res[0] ? res[0].height : 0;
      });
    },
    tonggaoSwiperChange(e) {
      //创建节点选择器,动态获取面板高度设置动画高度
      var query = wx.createSelectorQuery();
      var id = "#tonggao-recommend-box" + e.detail.current;
      var that = this;
      query.select(id).boundingClientRect();
      query.exec(function (res) {
        //res[0].height 为获取的收缩栏面板展开部分的高度
        that.tonggaoSwiperHeight = res[0] ? res[0].height : 0;
      });
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
      if (this.componetActive == 0) {
        this.query("more", this.$refs["pageNavRef"].navActive);
      } else if (this.componetActive == 1) {
        this.noticeQuery("more", this.$refs["pageNavRef"].navActive);
      } else if (this.componetActive == 2) {
        this.zuopinQuery("more", this.$refs["pageNavRef"].navActive);
      }
    },
    scrollToLower() {
      this.pageNum++;
      if (this.loading && !this.isclick) {
        this.onMore();
      }
    },
    goLogin() {
      openPage("/pages/login/index");
    },
    bannerClick(event, url) {
      // static:无导向，静态的，不进行跳转
      // mina:小程序,跳转至小程序内的页面
      // gzh:公众号, 跳转至公众号
      // h5:H5页面，跳转至H5
      if (event == "mina") {
        openPage(url);
      } else if (event == "gzh" || event == "h5") {
        openPage("/packageSet/pages/webview/index?url=" + url);
      }
    },
    async inviteList(params, type, scroll) {
      try {
        let res = await inviteList(params);
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

        if (scroll && this.navShow) {
          let scrollTop = 0;
          let fixedHeight = 0;
          const query = wx.createSelectorQuery();
          query.selectViewport().scrollOffset();
          query.exec(function (res) {
            scrollTop = res[0].scrollTop; //res[0].scrollTop距顶部的距离
          });
          query.select(".nav_fixed").boundingClientRect((res) => {
            fixedHeight = res.height;
          });
          query
            .select("#list")
            .boundingClientRect((res) => {
              console.log(
                "距顶部的距离：",
                scrollTop,
                "  move1距当前页面的距离：",
                res.top
              );
              wx.pageScrollTo({
                scrollTop:
                  scrollTop + res.top - fixedHeight - this.globalData.navHeight,
                duration: 0,
              });
            })
            .exec();
        }
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
        this.isclick = false;
      } catch (error) {
        this.showLoading = false;
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
    async inviteAdviseList(params) {
      try {
        let res = await inviteAdviseList(params);
        this.inviteRecommendList = res.data.data.items;
        this.$nextTick(() => {
          setTimeout(() => {
            // 初始化高度
            var query = wx.createSelectorQuery();
            query.select("#recommend-box0").boundingClientRect();
            query.exec((res) => {
              this.swiperheight = res[0] ? res[0].height : this.swiperheight;
            });
          }, 100);
        });
      } catch (error) {}
    },
    async noticeAdviseList(params) {
      try {
        let res = await noticeAdviseList(params);
        this.noticeRecommendList = res.data.data.items;
        this.$nextTick(() => {
          setTimeout(() => {
            // 初始化高度
            var query = wx.createSelectorQuery();
            query.select("#tonggao-recommend-box0").boundingClientRect();
            query.exec((res) => {
              this.tonggaoSwiperHeight = res[0]
                ? res[0].height
                : this.tonggaoSwiperHeight;
            });
          }, 100);
        });
      } catch (error) {}
    },
    async notifyNumber(params) {
      try {
        let res = await notifyNumber(params);
        if (res.data.data.is_notify_warn) {
          wx.showTabBarRedDot({
            index: 3,
          });
        } else {
          wx.hideTabBarRedDot({
            index: 3,
          });
        }
      } catch (error) {}
    },
    async isSign(params) {
      try {
        let res = await isSign(params);
        this.is_today_sign = res.data.data.is_today_sign;
      } catch (error) {}
    },
    async userStatus(params, queryList) {
      try {
        let res = await userStatus(params);
        if (res.data.data) {
          this.is_today_sign = res.data.data.is_today_sign;
          this.city = res.data.data.current_city.city_name;
          this.city_filter = res.data.data.current_city.city_id;
          this.recommend_city_filter = res.data.data.current_city.city_id;
          if (res.data.data.login_status.bind_type == 0) {
            wx.removeStorage({
              key: "userInfo",
            });
            wx.removeStorage({
              key: "token",
            });
          }
          setTimeout(() => {
            this.invitedVisible = res.data.data.advice.popup.is_homepage_popup;
            this.invitedTitle = res.data.data.advice.popup.title;
            this.invitedText = res.data.data.advice.popup.body;
            this.invitedBtn = res.data.data.advice.popup.redirect_tip;
            this.invitedRedirectUrl = res.data.data.advice.popup.redirect_url;
          }, 3000);
        }
        this.yuepaiList = [];
        this.inviteRecommendList = [];
        this.noticeRecommendList = [];
        // 约拍推荐
        // this.inviteAdviseList({
        //   city_filter: this.recommend_city_filter,
        // });
        // 通告推荐
        // this.noticeAdviseList({
        //   city_filter: this.recommend_city_filter,
        // });
        if (queryList) {
          // 列表查询
          this.pageNum = 1;
          this.isclick = true;
          this.showLoading = true;
          this.switchQuery(this.componetActive);
        }
      } catch (error) {}
    },
    async userSelectCity(params) {
      try {
        let res = await userSelectCity(params);
        this.userStatus("", true);
      } catch (error) {}
    },
    async inviteFilter(params, scroll) {
      try {
        let res = await inviteFilter(params);
        let arr = [];
        let arr2 = [];
        let arr3 = [];
        if (res.data.data.quick_filter) {
          this.navList = res.data.data.quick_filter;
        }
        if (res.data.data.author_career) {
          res.data.data.author_career.map((item, index) => {
            arr.push(item);
          });
        }
        if (res.data.data.payment_type) {
          res.data.data.payment_type.map((item, index) => {
            item.ispick = false;
            arr2.push(item);
          });
        }
        if (res.data.data.face_career) {
          res.data.data.face_career.map((item, index) => {
            item.ispick = false;
            arr3.push(item);
          });
        }
        arr.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        arr2.unshift({
          key: "all",
          name: "全部",
          value: "全部",
          ispick: true,
        });
        arr3.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        this.appointmentData = arr;
        this.chargeData = arr2;
        this.purposeData = arr3;
        this.select_filter = {
          sex: 10,
          payment_type: 0,
        };
        this.query("init", this.$refs["pageNavRef"].navActive, scroll);
      } catch (error) {}
    },
    async noticeFilter(params, scroll) {
      try {
        let res = await noticeFilter(params);
        let data = res.data.data;
        if (data.quick_filter) {
          this.navList = data.quick_filter;
        }
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        if (data.face_career) {
          arr = data.face_career.map((item) => {
            item.ispick = false;
            return item;
          });
        }
        if (data.first_code) {
          arr1 = data.first_code.map((item) => {
            item.ispick = false;
            return item;
          });
        }
        if (data.payment_type) {
          arr2 = data.payment_type.map((item) => {
            item.ispick = false;
            return item;
          });
        }
        arr.unshift({
          cid: "all",
          value: "全部",
          ispick: true,
        });
        arr1.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        arr2.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        this.identityData = arr;
        this.noticeData = arr1;
        this.chargeData = arr2;
        this.select_filter = {
          first_code: "",
          payment_type: 0,
          face_career: 0,
        };
        this.noticeQuery("init", this.$refs["pageNavRef"].navActive, scroll);
      } catch (error) {}
    },
    async photoFilter(params, scroll) {
      try {
        let res = await photoFilter(params);
        let data = res.data.data;
        let arr2 = [];
        let arr3 = [];
        if (data.quick_filter) {
          this.navList = data.quick_filter;
        }
        if (data.payment_type) {
          arr2 = data.payment_type.map((item) => {
            item.ispick = false;
            return item;
          });
        }
        if (data.author_career) {
          arr3 = data.author_career.map((item) => {
            item.ispick = false;
            return item;
          });
        }
        arr2.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        arr3.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        this.identityData = arr3;
        this.select_filter = {
          author_career: 0,
          author_sex: 10,
        };
        this.zuopinQuery("init", this.$refs["pageNavRef"].navActive, scroll);
      } catch (error) {}
    },
    async queryNoticeList(params, type, scroll) {
      try {
        let res = await noticeList(params);
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

        if (scroll && this.navShow) {
          let scrollTop = 0;
          let fixedHeight = 0;
          const query = wx.createSelectorQuery();
          query.selectViewport().scrollOffset();
          query.exec(function (res) {
            scrollTop = res[0].scrollTop; //res[0].scrollTop距顶部的距离
          });
          query.select(".nav_fixed").boundingClientRect((res) => {
            fixedHeight = res.height;
          });
          query
            .select("#list")
            .boundingClientRect((res) => {
              console.log(
                "距顶部的距离：",
                scrollTop,
                "  move1距当前页面的距离：",
                res.top
              );
              wx.pageScrollTo({
                scrollTop:
                  scrollTop + res.top - fixedHeight - this.globalData.navHeight,
                duration: 0,
              });
            })
            .exec();
        }
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
        this.isclick = false;
      } catch (error) {
        this.showLoading = false;
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
    async queryPhotoList(params, type, scroll) {
      try {
        let res = await photoList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();

        this.noMore = false;

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();
        if (type == "init") {
          this.zuopinList = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.zuopinList = this.zuopinList.concat(data);
          this.loading = true;
        }

        if (scroll && this.navShow) {
          let scrollTop = 0;
          let fixedHeight = 0;
          const query = wx.createSelectorQuery();
          query.selectViewport().scrollOffset();
          query.exec(function (res) {
            scrollTop = res[0].scrollTop; //res[0].scrollTop距顶部的距离
          });
          query.select(".nav_fixed").boundingClientRect((res) => {
            fixedHeight = res.height;
          });
          query
            .select("#list")
            .boundingClientRect((res) => {
              console.log(
                "距顶部的距离：",
                scrollTop,
                "  move1距当前页面的距离：",
                res.top
              );
              wx.pageScrollTo({
                scrollTop:
                  scrollTop + res.top - fixedHeight - this.globalData.navHeight,
                duration: 0,
              });
            })
            .exec();
        }
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
        this.isclick = false;
      } catch (error) {
        this.showLoading = false;
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
    async sourceItems(params) {
      try {
        let res = await sourceItems(params);
      } catch (error) {}
    },
    async popupLogs(params) {
      try {
        let res = await popupLogs(params);
      } catch (error) {}
    },
    async submitSign(params) {
      try {
        let res = await submitSign(params);
        this.showModelSign = true;
        this.hyper_desc = res.data.data.hyper_desc;
        this.isSign("");
      } catch (error) {}
    },
    async bannerList(params) {
      try {
        let res = await bannerList(params);
        this.banner = [];
        this.notify = [];
        res.data.data.map((item) => {
          if (item.item == "home_banner") {
            this.banner.push(item);
          }
          if (item.item == "home_notify") {
            this.notify.push(item);
          }
        });
      } catch (error) {}
    },
  },
  onPageScroll: function (e) {
    this.scrollTop = e.scrollTop;
    this.setSwiperHeight();
    if (!this.isclick) {
      let query = wx.createSelectorQuery();
      query
        .select(".componets")
        .boundingClientRect((rect) => {
          let top = rect.top;
          if (top <= 50) {
            this.navShow = true;
            this.autoplay = false;
          } else {
            this.navShow = false;
            this.autoplay = true;
          }
        })
        .exec();
    }
  },
  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
    this.bannerList({
      item: ["home_banner", "home_notify"],
    });
    // 分享
    this.shareInviteInfo({
      source: "share_friend",
      type: "wechat",
    });
    this.userStatus("", true);
  },
  //触底加载
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading && !this.isclick) {
      this.onMore();
    }
  },
  created() {
    this.globalData = this.globalData;
  },
  onLoad: function (options) {
    if (options.scene) {
      wx.setStorageSync("invited_uuid", options.scene);
    }
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      },
    });

    this.bannerList({
      item: ["home_banner", "home_notify"],
    });
    // 分享
    this.shareInviteInfo({
      source: "share_friend",
      type: "wechat",
    });
    // 当前城市&是否签到
    if (!citySelector.getCity()) {
      this.userStatus("", true);
    }
    // 来源
    if (options.channel) {
      let params = {
        channel: options.channel,
      };
      this.sourceItems({
        args: params,
      });
    }
    // 检查微信小程序是否添加到我的
    // wx.checkIsAddedToMyMiniProgram({
    //   success: (res) => {
    //     that.added = res.added;
    //   },
    // });
    setTimeout(() => {
      this.added = true;
    }, 10000);
  },
  // 从城市选择器插件返回后，在页面的onShow生命周期函数中能够调用插件接口，获取cityInfo结果对象
  onShow() {
    // 消息通知红点
    this.notifyNumber("");
    this.autoplay = true;
    if (citySelector.getCity()) {
      const selectedCity = citySelector.getCity(); // 选择城市后返回城市信息对象，若未选择返回null
      this.city_filter = selectedCity ? Number(selectedCity.id) : "";
      this.city = selectedCity ? selectedCity.name : "";
      this.userSelectCity({ city_info: selectedCity });
    }
    // 是否登录
    if (isLogin()) {
      this.showlogin = false;
      this.visible = false;
    } else {
      this.showlogin = true;
    }
  },
  onHide() {
    this.autoplay = false;
    this.showLoading = false;
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_friend",
      type: "wechat",
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onShareTimeline() {
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onUnload() {
    // 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果
    citySelector.clearCity();
  },
};
</script>

<style lang="scss" scoped></style>
