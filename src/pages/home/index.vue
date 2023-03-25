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
            <view class="select-city">
              {{ city }}
              <image
                src="../../assets/images/common/back.png"
                class="roll-down"
              ></image>
            </view>
            <view class="head_sign" @tap="showSign">
              <image
                src="../../assets/images/icon_signed.jpg"
                v-if="is_today_sign"
              ></image>
              <image src="../../assets/images/icon_sign.jpg" v-else></image>
            </view>
          </view>
          <view class="head_title"> 虾米约拍 </view>
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
            <block v-for="(item, index) in background" :key="index">
              <swiper-item>
                <view class="swiper-item">
                  <image
                    mode="aspectFill"
                    :src="'https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/9f7062c8-67b9-11ed-ae45-473a871aac32.jpg'"
                    class="swiper-item-img"
                  ></image>
                </view>
              </swiper-item>
            </block>
          </swiper>
        </view>
      </block>
      <view class="news">
        <view class="news-title">消息</view>
        <view class="news-line">|</view>
        <view class="news-txt">看大佬如何用手机拍出黑白大片</view>
        <view class="news-btn">去看看</view>
      </view>
      <view class="page-nav">
        <view class="page-nav-top">
          <view class="page-nav-item">
            <image
              src="../../assets/images/icon_model.png"
              class="page-nav-img"
            ></image>
            <text class="page-nav-text">模特</text>
          </view>
          <view class="page-nav-item">
            <image
              src="../../assets/images/take.png"
              class="page-nav-img"
            ></image>
            <text class="page-nav-text">摄影</text>
          </view>
          <view class="page-nav-item">
            <image
              src="../../assets/images/more1.png"
              class="page-nav-img"
            ></image>
            <text class="page-nav-text">作品</text>
          </view>
          <view class="page-nav-item">
            <image
              src="../../assets/images/moka.png"
              class="page-nav-img"
            ></image>
            <text class="page-nav-text">模卡</text>
          </view>
        </view>
        <view class="page-nav-bottom">
          <view class="page-nav-box nav_bg1">
            <view class="page-nav-left">
              <view class="page-nav-title">约拍</view>
              <view class="page-nav-desc">你约我拍</view>
            </view>
            <view class="page-nav-rt">
              <image src="../../assets/images/common/photo_white.png"></image>
            </view>
          </view>
          <view class="page-nav-box nav_bg2">
            <view class="page-nav-left">
              <view class="page-nav-title">通告</view>
              <view class="page-nav-desc">招募公告</view>
            </view>
            <view class="page-nav-rt">
              <image src="../../assets/images/common/tonggao_white.png"></image>
            </view>
          </view>
        </view>
      </view>
      <view class="recommend">
        <view class="recommend-title">
          <view class="recommend-name"> 约拍推荐 </view>
          <view class="recommend-tips"> 1分钟前***发布了人像创作</view>
          <view class="recommend-more">更多</view>
        </view>
        <view class="recommend-ct">
          <swiper
            :indicator-dots="indicatorDots2"
            :autoplay="autoplay"
            :interval="interval2"
            :duration="duration"
            class="yuepai-swiper"
            @change="swiperChange"
            :style="{
              height: swiperheight + 'px',
            }"
          >
            <block v-for="(item, index) in inviteRecommendList" :key="index">
              <swiper-item>
                <view class="recommend-box" :id="'recommend-box' + index">
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
                          <view class="list_loction">
                            {{ item.author.province_name }}
                          </view>
                          <view class="list_date">{{
                            item.basic.date_humanize
                          }}</view>
                        </view>
                      </view>
                      <view class="list_content">
                        <view class="list_title">
                          <view
                            class="recommend-label"
                            v-for="(tagitem, tagindex) in item.topic.headline
                              .tag"
                            :key="tagindex"
                          >
                            {{ tagitem }}
                          </view>
                          <view class="recommend-label2">
                            {{ item.topic.payment.title }}
                          </view>
                        </view>
                        <view class="list_title_desc">{{
                          item.topic.headline.title
                        }}</view>
                      </view>
                      <view class="list_desc">
                        {{ item.details.summary }}
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
                            @tap.stop="
                              previewImage(url, item.details.media.cover)
                            "
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
        </view>
      </view>
      <view class="recommend">
        <view class="recommend-title">
          <view class="recommend-name"> 通告推荐 </view>
          <view class="recommend-tips"> 1分钟前***发布了人像创作</view>
          <view class="recommend-more">更多</view>
        </view>
        <view class="recommend-ct">
          <swiper
            :indicator-dots="indicatorDots2"
            :autoplay="autoplay"
            :interval="interval2"
            :duration="duration"
            class="tonggao-swiper"
            @change="tonggaoSwiperChange"
            :style="{
              height: tonggaoSwiperHeight + 'px',
            }"
          >
            <block v-for="(item, index) in noticeRecommendList" :key="index">
              <swiper-item>
                <view
                  class="recommend-box"
                  :id="'tonggao-recommend-box' + index"
                >
                  <view class="tonggao-recommend">
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
                        <view class="tonggao-recommend-price">
                          <view class="pirce">
                            {{ item.topic.payment.title }}</view
                          >
                          <view class="recommend-btn">立即报名</view>
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
                        src="../../assets/images/user/index/yuepai.png"
                      ></image>
                      {{ item.statistic.invite_cnt }}
                    </view>
                    <view class="tonggao-read">
                      <image src="../../assets/images/eyes.png"></image>
                      {{ item.statistic.read_cnt }}
                    </view>
                  </view>
                </view>
              </swiper-item>
            </block>
          </swiper>
        </view>
      </view>
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
      :navList="navList"
      :chargeList="chargeData"
      :identityList="identityData"
      :noticeList="noticeData"
      :style="{ marginTop: globalData.navHeight + 'px' }"
      @pageNavClick="pageNavClick"
      v-show="navShow"
      ref="pageNavRef"
      class="pagenav"
    ></Pagenav>

    <view id="list">
      <YuepaiList
        :baseData="yuepaiList"
        v-if="componetActive == 0"
      ></YuepaiList>
      <TonggaoList
        :baseData="noticeList"
        v-if="componetActive == 1"
      ></TonggaoList>
      <ZuopinList
        :baseData="zuopinList"
        v-if="componetActive == 2"
      ></ZuopinList>
      <loading :showLoading="showLoading"></loading>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import TonggaoList from "../../components/tonggaoList/index.vue";
import YuepaiList from "../../components/yuepaiList/index.vue";
import ZuopinList from "../../components/zuopinList/index.vue";
import Pagenav from "../../components/pagenav/index.vue";
import loading from "../../components/loading/index.vue";
import {
  inviteAdviseList,
  noticeAdviseList,
  notifyNumber,
  isSign,
  publicConfig,
  noticeFilter,
  getCareer,
  inviteList,
  noticeList,
  photoList,
} from "../../api/index";
export default {
  name: "home",
  data() {
    return {
      showLoading: false,
      loading: false,
      topNum: 0,
      swiperheight: 0,
      tonggaoSwiperHeight: 0,
      city: "北京",
      is_today_sign: 0,
      background: ["demo-text-1", "demo-text-2", "demo-text-3"],
      indicatorDots: true,
      indicatorDots2: false,
      vertical: false,
      autoplay: true,
      interval: 3000,
      interval2: 10000,
      duration: 500,
      componetActive: 0,
      headCurrent: 0,
      pageNum: 1,
      pageSize: 10,
      showSign: false,
      navShow: false,
      inviteRecommendList: [],
      noticeRecommendList: [],
      navList: [],
      chargeData: [],
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
      isclick: false,
    };
  },
  components: {
    TonggaoList,
    YuepaiList,
    ZuopinList,
    Pagenav,
    loading,
  },
  methods: {
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    componetClick(index) {
      if (this.componetActive != index) {
        this.componetActive = index;
        this.pageNum = 1;
        this.switchQuery(index);
      }
    },
    pageNavClick(index) {
      this.pageNum = 1;
      this.componetActive = index;
      this.isclick = true;
      this.showLoading = true;
      this.switchQuery(index);
    },
    switchQuery(index) {
      switch (index) {
        case 0:
          this.publicConfig(
            {
              type: ["invite_filter", "payment_type"],
            },
            true
          );
          break;
        case 1:
          this.noticeFilter("");
          this.publicNoticeConfig(
            {
              type: ["notice_filter"],
            },
            true
          );
          break;
        case 2:
          this.getCareer("");
          this.publicPhotoConfig(
            {
              type: ["photo_filter"],
            },
            true
          );
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
        that.swiperheight = res[0].height;
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
        that.tonggaoSwiperHeight = res[0].height;
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
    async inviteList(params, type, scroll) {
      try {
        let res = await inviteList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();
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

        if (scroll) {
          let scrollTop = 0;
          let fixedHeight = 0;
          const query = wx.createSelectorQuery();
          query.selectViewport().scrollOffset();
          query.exec(function (res) {
            scrollTop = res[0].scrollTop; //res[0].scrollTop距顶部的距离
          });
          query.select(".nav_fixed").boundingClientRect((res) => {
            fixedHeight = res.height;
            console.log(fixedHeight, "fixedHeight=====");
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
          this.isclick = false;
        }
      } catch (error) {
        if (error.data.error_code == 11020) {
          this.visible = true;
          this.isclick = false;
          console.log(error, "error");
        }
      }
    },
    async inviteAdviseList(params) {
      try {
        let res = await inviteAdviseList(params);
        this.inviteRecommendList = res.data.data.items;

        setTimeout(() => {
          // 初始化高度
          var query = wx.createSelectorQuery();
          query.select("#recommend-box0").boundingClientRect();
          query.exec((res) => {
            this.swiperheight = res[0].height;
          });
        }, 100);
      } catch (error) {}
    },
    async noticeAdviseList(params) {
      try {
        let res = await noticeAdviseList(params);
        this.noticeRecommendList = res.data.data.items;

        setTimeout(() => {
          // 初始化高度
          var query = wx.createSelectorQuery();
          query.select("#tonggao-recommend-box0").boundingClientRect();
          query.exec((res) => {
            this.tonggaoSwiperHeight = res[0].height;
          });
        }, 100);
      } catch (error) {}
    },
    async notifyNumber(params) {
      try {
        let res = await notifyNumber(params);
        if (res.data.data.is_notify_warn) {
          wx.showTabBarRedDot({
            index: 2,
          });
        } else {
          wx.hideTabBarRedDot({
            index: 2,
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
    async publicConfig(params, scroll) {
      try {
        let res = await publicConfig(params);
        let arr = [];
        let arr2 = [];
        res.data.data.map((item, index) => {
          if (item.type == "invite_filter") {
            arr.push(item);
          } else if (item.type == "payment_type") {
            item.ispick = false;
            arr2.push(item);
          }
        });
        this.navList = arr;
        arr2.unshift({
          key: "all",
          name: "全部",
          value: "全部",
          ispick: true,
        });
        this.chargeData = arr2;
        this.select_filter = {
          face_province_id: 0,
          face_city_id: 0,
          face_cid: 0,
          sex: 10,
          payment_type: 0,
        };
        this.query("init", this.$refs["pageNavRef"].navActive, scroll);
      } catch (error) {}
    },
    async publicNoticeConfig(params, scroll) {
      try {
        let res = await publicConfig(params);
        this.navList = res.data.data;
        this.select_filter = {
          first_code: "",
          payment_type: 0,
          career_cid: 0,
          face_cid: 0,
          face_province_id: 0,
        };
        this.noticeQuery("init", this.$refs["pageNavRef"].navActive, scroll);
      } catch (error) {}
    },
    async noticeFilter(params) {
      try {
        let res = await noticeFilter(params);
        let data = res.data.data;
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        arr = data.career.map((item) => {
          item.ispick = false;
          return item;
        });
        arr1 = data.first_code.map((item) => {
          item.ispick = false;
          return item;
        });
        arr2 = data.payment_type.map((item) => {
          item.ispick = false;
          return item;
        });
        arr.unshift({
          cid: "all",
          name: "全部",
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
      } catch (error) {}
    },
    async publicPhotoConfig(params, scroll) {
      try {
        let res = await publicConfig(params);
        let arr = [];
        res.data.data.map((item, index) => {
          if (item.type == "photo_filter") {
            arr.push(item);
          } else if (item.type == "payment_type") {
            item.ispick = false;
            arr2.push(item);
          }
        });
        this.navList = arr;
        this.select_filter = {
          face_province_id: 0,
          face_cid: 0,
          career_cid: 0,
          sex: 10,
        };
        this.zuopinQuery("init", this.$refs["pageNavRef"].navActive, scroll);
      } catch (error) {}
    },
    async getCareer(params) {
      try {
        let res = await getCareer(params);
        let data = res.data.data;
        let arr = [];
        arr = data.career_list.map((item) => {
          item.ispick = false;
          return item;
        });
        arr.unshift({
          cid: "all",
          role: "全部",
          value: "全部",
          ispick: true,
        });
        this.identityData = arr;
      } catch (error) {}
    },
    async queryNoticeList(params, type, scroll) {
      try {
        let res = await noticeList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();
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

        if (scroll) {
          let scrollTop = 0;
          let fixedHeight = 0;
          const query = wx.createSelectorQuery();
          query.selectViewport().scrollOffset();
          query.exec(function (res) {
            scrollTop = res[0].scrollTop; //res[0].scrollTop距顶部的距离
          });
          query.select(".nav_fixed").boundingClientRect((res) => {
            fixedHeight = res.height;
            console.log(fixedHeight, "fixedHeight=======");
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
        this.isclick = false;
      } catch (error) {
        if (error.data.error_code == 11020) {
          this.visible = true;
          this.isclick = false;
          console.log(error, "error");
        }
      }
    },
    async queryPhotoList(params, type, scroll) {
      try {
        let res = await photoList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();
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

        if (scroll) {
          let scrollTop = 0;
          let fixedHeight = 0;
          const query = wx.createSelectorQuery();
          query.selectViewport().scrollOffset();
          query.exec(function (res) {
            scrollTop = res[0].scrollTop; //res[0].scrollTop距顶部的距离
          });
          query.select(".nav_fixed").boundingClientRect((res) => {
            fixedHeight = res.height;
            console.log(fixedHeight, "fixedHeight======");
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
          this.isclick = false;
        }
      } catch (error) {
        if (error.data.error_code == 11020) {
          this.visible = true;
          this.isclick = false;
          console.log(error, "error");
        }
      }
    },
  },
  onPageScroll: function (e) {
    this.scrollTop = e.scrollTop;
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
    // 约拍推荐
    this.inviteAdviseList({});
    // 通告推荐
    this.noticeAdviseList({});
    // 消息通知红点
    this.notifyNumber("");
    // 是否签到
    this.isSign("");

    this.publicConfig({
      type: ["invite_filter", "payment_type"],
    });

    // this.publicNoticeConfig({
    //   type: ["notice_filter"],
    // });
    // this.noticeFilter("");

    // this.publicPhotoConfig({
    //   type: ["photo_filter"],
    // });
    // this.getCareer("");
  },
  onLoad: function (options) {},
};
</script>

<style lang="scss" scoped></style>
