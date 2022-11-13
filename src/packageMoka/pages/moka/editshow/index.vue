<template>
  <view class="main">
    <view class="main_top">
      <view
        :style="{
          height: globalData.navHeight + 'px',
        }"
        class="back"
      >
        <image
          src="../../../../assets/images/common/goback.png"
          :style="{
            top: globalData.navTop + 'px',
          }"
          @tap="goback"
        ></image>
      </view>
      <view
        catchtap="goEditHomeimg"
        class="homeimg"
        :style="{
          'padding-top': globalData.navHeight + 'px',
          background: infor.homeimg
            ? 'rgba(0,0,0,0.5) url(' + infor.homeimg + ') no-repeat'
            : '#ea6a6b',
          'background-size': infor.homeimg ? 'cover' : 'inherit',
        }"
      >
        <view class="my-head">
          <view class="my-head-left">
            <image
              :src="
                infor.avatar
                  ? infor.avatar
                  : require('../../../../assets/images/head.png')
              "
              class="head-img"
              mode="aspectFit"
            ></image>
          </view>
          <view class="my-head-ct">
            <view>
              <text class="my-head-name">{{ infor.nickname }}</text>
            </view>
            <view class="my-account">账号：</view>
            <view class="my-info">
              <text>IP归属：</text>
              <text>{{ infor.province_name }}</text>
              <view class="head-tag-box">
                <image
                  src="../../../../assets/images/common/icon_real.png"
                  class="head-tag-img"
                  v-if="infor.is_certify"
                ></image>
                <image
                  src="../../../../assets/images/common/icon_pledge_none.png"
                  class="head-tag-img"
                  v-else
                ></image>
                <image
                  src="../../../../assets/images/common/icon_pledge.png"
                  class="head-tag-img"
                  v-if="infor.is_security"
                ></image>
                <image
                  src="../../../../assets/images/common/icon_real_none.png"
                  class="head-tag-img"
                  v-else
                ></image>
              </view>
            </view>
          </view>
        </view>
        <view class="my-head-ct">
          <view class="my-desc">
            {{ infor.resume }}
          </view>
          <view class="my_tags">
            <view class="tag">
              <image
                src="../../../../assets/images/user/show/sex1.png"
                class="sex"
                v-if="infor.sex == 1"
              ></image>
              <image
                src="../../../../assets/images/user/show/sex2.png"
                class="sex"
                v-if="infor.sex == 0"
              ></image>
              {{ infor.age }}岁
            </view>
            <view class="tag"> {{ infor.province_name }} </view>
            <view
              class="tag"
              v-for="(item, index) in infor.career_list"
              :key="index"
            >
              {{ item }}
            </view>
          </view>
          <view class="my-count">
            <view class="my-conunt-left">
              <view class="my-count-box">
                <text class="num">{{ infor.statistic.followed_cnt }}</text>
                <text>粉丝</text>
              </view>
              <view class="my-count-box">
                <text class="num">{{ infor.statistic.follower_cnt }}</text>
                <text>关注</text>
              </view>
              <view class="my-count-box">
                <text class="num">{{ infor.statistic.invite_cnt }}</text>
                <text>约拍</text>
              </view>
              <view class="my-count-box">
                <text class="num">{{ infor.statistic.read_cnt }}</text>
                <text>访客</text>
              </view>
              <view class="my-count-box">
                <text class="num">{{ infor.statistic.track_cnt }}</text>
                <text>足迹</text>
              </view>
            </view>
            <view class="my-conunt-rt" @tap="personDetail">
              <image
                src="../../../../assets/images/user/show/btn_edit.png"
              ></image>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="main_list">
      <view class="line-bg"></view>
      <view class="swiper_tab">
        <view
          bindtap="swichTab"
          class="swiper_tab_item"
          v-for="(item, index) in tabList"
          :key="index"
        >
          <view class="tab_item" :class="currentTab == index ? 'on' : ''">{{
            item.tab_name
          }}</view>
        </view>
      </view>
      <block v-if="select_tab == 'home' && isartist">
        <view class="main ub ub-ver none_main" v-if="homeInfo_none">
          <view class="none_tipimg">
            <image
              mode="widthFix"
              src="../../../../assets/images/common/none.png"
            ></image>
          </view>
          <view class="none_tiptext">暂无信息哦～</view>
        </view>
        <block v-else>
          <view class="home_item">
            <view class="home_item_title">
              <view class="home_item_title_text">模卡信息</view>
              <view @tap="editpersondata" class="home_item_title_edit"
                >编辑</view
              >
            </view>
            <view class="home_item_main">
              <view catchtap="myMoka">
                <view class="user_infor_value" v-if="homeInfor.height">
                  {{ homeInfor.height }}cm</view
                >
                <view class="user_infor_value" v-else>--</view>
                <view class="user_infor_text">身高</view>
              </view>
              <view catchtap="myFollowed">
                <view class="user_infor_value" v-if="homeInfor.weight">
                  {{ homeInfor.weight }}kg</view
                >
                <view class="user_infor_value" v-else>--</view>
                <view class="user_infor_text">体重</view>
              </view>
              <view catchtap="myFollow">
                <view class="user_infor_value">
                  {{ homeInfor.bwh_b ? homeInfor.bwh_b : "" }}-{{
                    homeInfor.bwh_w ? homeInfor.bwh_w : ""
                  }}-{{ homeInfor.bwh_h ? homeInfor.bwh_h : "" }}
                </view>
                <view class="user_infor_text">三围</view>
              </view>
              <view catchtap="myFollowed">
                <view class="user_infor_value" v-if="homeInfor.height"
                  >{{ homeInfor.shoe }}
                </view>
                <view class="user_infor_value" v-else>--</view>
                <view class="user_infor_text">鞋码</view>
              </view>
            </view>
          </view>
          <view class="home_item">
            <view class="home_item_title ub">
              <view class="home_item_title_text ub-f1">照片相册</view>
              <view @tap="editpersonimg" class="home_item_title_edit">
                {{ homeInfor.personimg.length ? "编辑" : "添加" }}</view
              >
            </view>
            <view class="home_item_main" v-if="homeInfor.personimg.length">
              <view
                class="personimg_item"
                v-if="index <= 2"
                v-for="(imgitem, index) in homeInfor.personimg"
                :key="index"
              >
                <image
                  catchtap="showbigPersonimg"
                  class="personimg"
                  :data-index="index"
                  mode="aspectFill"
                  :src="imgitem"
                ></image>
                <view class="icon_imgnum" v-if="index == 2">
                  <text>{{ homeInfor.personimg.length }}张</text>
                </view>
              </view>
            </view>
            <view class="home_item_main ub" v-else>
              <view catchtap="editpersonimg" class="home_img_add">
                <image
                  src="../../../../assets/images/common/add_icon.png"
                ></image>
              </view>
              <view catchtap="editpersonimg" class="home_img_add">
                <image
                  src="../../../../assets/images/common/add_icon.png"
                ></image>
              </view>
              <view catchtap="editpersonimg" class="home_img_add">
                <image
                  src="../../../../assets/images/common/add_icon.png"
                ></image>
              </view>
            </view>
          </view>
          <view class="home_item">
            <view class="home_item_title ub">
              <view class="home_item_title_text ub-f1">视频相册</view>
              <view @tap="editvideo" class="home_item_title_edit">
                {{ homeInfor.video.length ? "编辑" : "添加" }}</view
              >
            </view>
            <view class="home_item_main" v-if="homeInfor.video.length">
              <block v-for="(item, index) in homeInfor.video" :key="index">
                <video
                  class="video_item"
                  id="user_video"
                  objectFit="cover"
                  :poster="item.cover"
                  :src="item.file"
                  :title="homeInfor.nickname"
                  :vslideGestureInFullscreen="false"
                  v-if="index < 2"
                ></video>
                <view class="icon_imgnum" v-if="index == 2">
                  <text>{{ homeInfor.video.length }}个</text>
                </view>
              </block>
            </view>
            <view class="home_item_main" v-else>
              <view @tap="editvideo" class="home_video_add">
                <image
                  src="../../../../assets/images/common/add_icon.png"
                ></image>
              </view>
            </view>
          </view>
          <view class="home_item">
            <view class="home_item_title ub">
              <view class="home_item_title_text ub-f1">标签信息</view>
              <view catchtap="editzytag" class="home_item_title_edit">
                {{ homeInfor.zytag_name.length ? "编辑" : "添加" }}</view
              >
            </view>
            <view class="home_item_tag" v-if="homeInfor.zytag_name.length">
              <text>身份标签：</text>
              <text
                class="tag_item"
                v-for="(item, index) in homeInfor.zytag_name"
                :key="index"
                >{{ item.name }}</text
              >
            </view>
            <view class="home_item_tag" v-if="homeInfor.tgtag_name.length">
              <text>接单通告：</text>
              <text
                class="tag_item"
                v-for="(item, index) in homeInfor.tgtag_name"
                :key="index"
                >{{ item.name }}</text
              >
            </view>
            <view class="home_item_tag" v-if="homeInfor.xxtag_name.length">
              <text>形象风格：</text>
              <text
                class="tag_item"
                v-for="(item, index) in homeInfor.xxtag_name"
                :key="index"
                >{{ item.name }}</text
              >
            </view>
          </view>
        </block>
      </block>
      <block v-if="select_tab == 'moka' && isartist">
        <view class="main ub ub-ver none_main" v-if="noneData_moka">
          <view class="none_tipimg">
            <image
              mode="widthFix"
              src="../../../../assets/images/common/none.png"
            ></image>
          </view>
          <view class="none_tiptext">还没有制作过模卡哦～</view>
          <view catchtap="goMakeMoka" class="none_now_make">马上制作</view>
        </view>
        <view class="main ub ub-ver" v-else>
          <block v-for="(items, listIndex) in listdata_moka" :key="listIndex">
            <view
              catchtap="showbigMoka"
              class="moka_item"
              v-for="(item, item_id) in items"
              :key="item_id"
            >
              <image
                class="moka_img_w"
                mode="widthFix"
                :src="item.moka.smallimg"
                v-if="item.width > item.height"
              ></image>
              <image
                class="moka_img_h"
                mode="heightFix"
                :src="item.moka.smallimg"
                v-else
              ></image>
            </view>
          </block>
          <view class="loadingmore" v-if="datamore_moka">
            <image
              mode="widthFix"
              src="../../../../assets/images/common/loading.gif"
            ></image>
          </view>
          <view class="bottom_gap"></view>
        </view>
      </block>
      <block v-if="select_tab == 'zuopin'">
        <view class="main ub ub-ver none_main" v-if="noneData_zuopin">
          <view class="none_tipimg">
            <image
              mode="widthFix"
              src="../../../../assets/images/common/none.png"
            ></image>
          </view>
          <view class="none_tiptext">还没有发布过作品动态哦～</view>
          <view catchtap="goAddZuopin" class="none_now_make">马上发布</view>
        </view>
        <view class="main ub ub-ver" v-else>
          <block v-for="(items, listIndex) in listdata_zuopin" :key="listIndex">
            <view
              catchtap="showZuopin"
              class="item"
              :id="item.item_id"
              v-for="(item, itemIndex) in items"
              :key="itemIndex"
            >
              <view class="item_main">
                <block v-if="item.type == 2">
                  <block v-if="item.imgurl.length == 1">
                    <image
                      catchtap="showzuoinbig"
                      class="zuopinitem_img zuopin_img1"
                      :data-imgindex="imgIndex"
                      :data-index="itemIndex"
                      :data-listindex="listIndex"
                      mode="aspectFill"
                      :src="imgitem.url"
                      v-for="(imgitem, imgIndex) in item.imgurl"
                      :key="imgIndex"
                    ></image>
                  </block>
                  <block v-if="item.imgurl.length == 2">
                    <image
                      catchtap="showzuoinbig"
                      class="zuopinitem_img zuopin_img2"
                      :class="'zuopin_img2-' + imgIndex"
                      :data-imgindex="imgIndex"
                      :data-index="itemIndex"
                      :data-listindex="listIndex"
                      mode="aspectFill"
                      :src="imgitem.url"
                      v-for="(imgitem, imgIndex) in item.imgurl"
                      :key="imgIndex"
                    ></image>
                  </block>
                  <block v-if="item.imgurl.length == 3">
                    <image
                      catchtap="showzuoinbig"
                      class="zuopinitem_img zuopin_img3"
                      :class="'zuopin_img3-' + imgIndex"
                      :data-imgindex="imgIndex"
                      :data-index="itemIndex"
                      :data-listindex="listIndex"
                      mode="aspectFill"
                      :src="imgitem.url"
                      v-for="(imgitem, imgIndex) in item.imgurl"
                      :key="imgIndex"
                    ></image>
                    <view class="img3class">
                      <image
                        catchtap="showzuoinbig"
                        class="zuopinitem_img zuopin_img3}"
                        :class="'zuopin_img3-' + imgIndex"
                        :data-imgindex="imgIndex"
                        :data-index="itemIndex"
                        :data-listindex="listIndex"
                        mode="aspectFill"
                        :src="imgitem.url"
                        v-for="(imgitem, imgIndex) in item.imgurl"
                        :key="imgIndex"
                      ></image>
                    </view>
                  </block>
                  <block v-if="item.imgurl.length == 4">
                    <image
                      catchtap="showzuoinbig"
                      class="zuopinitem_img zuopin_img4"
                      :class="'zuopin_img4-' + imgIndex"
                      :data-imgindex="imgIndex"
                      :data-index="itemIndex"
                      :data-listindex="listIndex"
                      mode="aspectFill"
                      :src="imgitem.url"
                      v-for="(imgitem, imgIndex) in item.imgurl"
                      :key="imgIndex"
                    ></image>
                  </block>
                  <block v-if="item.imgurl.length == 5">
                    <image
                      catchtap="showzuoinbig"
                      class="zuopinitem_img zuopin_img5"
                      :class="'zuopin_img5-' + imgIndex"
                      :data-imgindex="imgIndex"
                      :data-index="itemIndex"
                      :data-listindex="listIndex"
                      mode="aspectFill"
                      :src="imgitem.url"
                      v-for="(imgitem, imgIndex) in item.imgurl"
                      :key="imgIndex"
                    ></image>
                  </block>
                  <block v-if="item.imgurl.length == 6">
                    <image
                      catchtap="showzuoinbig"
                      class="zuopinitem_img zuopin_img6"
                      :class="'zuopin_img6-' + imgIndex"
                      :data-imgindex="imgIndex"
                      :data-index="itemIndex"
                      :data-listindex="listIndex"
                      mode="aspectFill"
                      :src="imgitem.url"
                      v-for="(imgitem, imgIndex) in item.imgurl"
                      :key="imgIndex"
                    ></image>
                    <view class="img3class">
                      <image
                        catchtap="showzuoinbig"
                        class="zuopinitem_img zuopin_img6"
                        :class="'zuopin_img6-' + imgIndex"
                        :data-imgindex="imgIndex"
                        :data-index="itemIndex"
                        :data-listindex="listIndex"
                        mode="aspectFill"
                        :src="imgitem.url"
                        v-for="(imgitem, imgIndex) in item.imgurl"
                        :key="imgIndex"
                        v-if="imgIndex == 1 || imgIndex == 2"
                      ></image>
                    </view>
                    <image
                      catchtap="showzuoinbig"
                      class="zuopinitem_img zuopin_img6"
                      :class="'zuopin_img6-' + imgIndex"
                      :data-imgindex="imgIndex"
                      :data-index="itemIndex"
                      :data-listindex="listIndex"
                      mode="aspectFill"
                      :src="imgitem.url"
                      v-for="(imgitem, imgIndex) in item.imgurl"
                      :key="imgIndex"
                      v-if="imgIndex > 2"
                    ></image>
                  </block>
                  <block v-if="item.imgurl.length >= 7">
                    <image
                      catchtap="showzuoinbig"
                      class="zuopinitem_img zuopin_img7"
                      :class="'zuopin_img7-' + imgIndex"
                      :data-imgindex="imgIndex"
                      :data-index="itemIndex"
                      :data-listindex="listIndex"
                      mode="aspectFill"
                      :src="imgitem.url"
                      v-for="(imgitem, imgIndex) in item.imgurl"
                      :key="imgIndex"
                    ></image>
                  </block>
                </block>
                <view
                  class="video_box"
                  :class="
                    'yuedan_video' + item.video_width >= item.video_height
                      ? '_width'
                      : ''
                  "
                  v-if="item.type == 1"
                >
                  <image
                    :class="
                      'yuedan_video' + item.video_width >= item.video_height
                        ? '_width'
                        : ''
                    "
                    mode="aspectFill"
                    :src="item.cover"
                  ></image>
                  <image
                    class="icon_video_play"
                    :class="
                      item.video_width >= item.video_height ? 'width_play' : ''
                    "
                    src="/images/common/icon_video_play.png"
                  ></image>
                </view>
                <view class="zuopin_item_title" v-if="item.title"
                  >{{ item.title }}
                </view>
                <view class="zuopin_item_content" v-if="item.content">
                  {{ item.content }}</view
                >
                <view class="zuopin_item_tags ub" v-if="item.tag">
                  <view
                    class="zuopin_tag"
                    v-for="(tagitem, id) in item.tag"
                    :key="id"
                  >
                    {{ tagitem.name }}</view
                  >
                </view>
              </view>
              <view class="item_bottom ub">
                <view class="time_text">{{ item.timetext }}</view>
                <view class="ub-f1"></view>
                <view class="view_count">阅读 {{ item.view_count_text }}</view>
              </view>
            </view>
          </block>
          <view class="loadingmore" v-if="datamore_zuopin">
            <image
              mode="widthFix"
              src="../../../../assets/images/common/loading.gif"
            ></image>
          </view>
          <view class="bottom_gap"></view>
        </view>
      </block>
    </view>
  </view>
</template>

<script>
import {
  userInfo,
  userShapeDetail,
  userAlbumDetail,
} from "../../../../api/index";
import { openPage } from "../../../../utils/util";
import "./index.scss";
export default {
  name: "editshow",
  data() {
    return {
      globalData: {
        navHeight: 0,
        navTop: 0,
        navObj: 0,
        navObjWid: 0,
      },
      infor: {
        avatar: "",
        homeimg: "",
        statistic: {},
      },
      currentTab: 0,
      select_tab: "home",
      isartist: [],
      homeInfor: {
        height: "",
        weight: "",
        bwh_b: "",
        bwh_w: "",
        bwh_h: "",
        shoe: "",
        // video: {
        //   video_url: "",
        // },
        video: [],
        personimg: [],
        zytag_name: [
          {
            name: "平面模特",
          },
          {
            name: "平面模特1",
          },
          {
            name: "平面模特1",
          },
        ],
        tgtag_name: [
          {
            name: "人像创造",
          },
          {
            name: "人像创造",
          },
        ],
        xxtag_name: [
          {
            name: "人像创造",
          },
        ],
      },
      homeInfo_none: false,
      swiper_tab_fixed: false,
      tabList: [
        {
          tab_name: "主页",
          tab_id: "home",
        },
        {
          tab_name: "作品",
          tab_id: "zuopin",
        },
        {
          tab_name: "模卡",
          tab_id: "moka",
        },
      ],
    };
  },
  methods: {
    personDetail() {
      openPage("/packageAdd/pages/user/editinfor/index");
    },
    goback() {
      wx.navigateBack({
        delta: 1,
      });
    },
    editpersondata() {
      openPage("/packageMoka/pages/moka/editpersondata/index");
    },
    editpersonimg() {
      openPage("/packageMoka/pages/moka/editpersonimg/index");
    },
    editvideo() {
      openPage("/packageMoka/pages/moka/editvideo/index");
    },
    async userInfo(params) {
      try {
        let res = await userInfo(params);
        this.infor = res.data.data;
      } catch (error) {}
    },
    async userShapeDetail(params) {
      try {
        let res = await userShapeDetail(params);
        this.homeInfor.height = res.data.data.height;
        this.homeInfor.weight = res.data.data.weight;
        this.homeInfor.bwh_b = res.data.data.bust;
        this.homeInfor.bwh_w = res.data.data.waist;
        this.homeInfor.bwh_h = res.data.data.hip;
        this.homeInfor.shoe = res.data.data.size;
      } catch (error) {}
    },
    async userAlbumDetail(params) {
      try {
        let res = await userAlbumDetail(params);
        this.homeInfor.personimg = [];
        this.homeInfor.video = [];
        this.homeInfor.personimg = res.data.data.photo_album;
        this.homeInfor.video = res.data.data.video_album;
      } catch (error) {}
    },
  },
  created() {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: (res) => {
        //导航高度
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          navObjWid =
            res.windowWidth - menuButtonObject.right + menuButtonObject.width, // 胶囊按钮与右侧的距离 = windowWidth - right+胶囊宽度
          navHeight =
            statusBarHeight +
            menuButtonObject.height +
            (menuButtonObject.top - statusBarHeight) * 2;
        this.globalData.navHeight = navHeight; //导航栏总体高度
        this.globalData.navTop = navTop; //胶囊距离顶部距离
        this.globalData.navObj = menuButtonObject.height; //胶囊高度
        this.globalData.navObjWid = navObjWid; //胶囊宽度(包括右边距离)
        // console.log(navHeight,navTop,menuButtonObject.height,navObjWid)
      },
      fail(err) {
        console.log(err);
      },
    });
    this.userInfo("");
    this.userShapeDetail("");
  },
  onShow() {
    setTimeout(() => {
      this.userInfo("");
      this.userAlbumDetail("");
    });
  },
};
</script>

<style lang="scss" scoped></style>
