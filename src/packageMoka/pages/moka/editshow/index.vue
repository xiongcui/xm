<template>
  <view class="main">
    <view class="main_top">
      <view
        class="homeimg"
        :style="{
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
                  : 'https://yuepai-oss.qubeitech.com/static/images/head.png'
              "
              class="head-img"
              mode="aspectFit"
            ></image>
          </view>
          <view class="my-head-ct">
            <view>
              <text class="my-head-name">{{ infor.nickname }}</text>
            </view>
            <view class="my-account">账号：{{ infor.uuid }}</view>
            <view class="my-info">
              <text>IP归属：</text>
              <text>{{ infor.province_name }}</text>
              <view class="head-tag-box">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/icon_real.png"
                  class="head-tag-img"
                  v-if="infor.is_certify"
                ></image>
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/icon_real_none.png"
                  class="head-tag-img"
                  v-else
                ></image>
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/icon_pledge.png"
                  class="head-tag-img"
                  v-if="infor.is_security"
                ></image>
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/icon_pledge_none.png"
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
                src="https://yuepai-oss.qubeitech.com/static/images/user/show/sex1.png"
                class="sex"
                v-if="infor.sex == 1"
              ></image>
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/user/show/sex2.png"
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
                <text class="num">{{ infor.statistic.visitor_cnt }}</text>
                <text>访客</text>
              </view>
              <view class="my-count-box">
                <text class="num">{{ infor.statistic.track_cnt }}</text>
                <text>足迹</text>
              </view>
            </view>
            <view class="my-conunt-rt" @tap="personDetail" v-if="myself">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/user/show/btn_edit.png"
              ></image>
            </view>
            <view class="is_followed_box" v-if="!myself">
              <text class="followed_send_msg" @tap="sendMsg">发消息</text>
              <text
                class="followed_style"
                v-if="is_follower == 0 && is_followed == 0"
                @tap="follow"
                >关注</text
              >
              <text
                class="followed_style"
                v-if="is_followed == 0 && is_follower == 1"
                @tap="unfollow"
                >已关注</text
              >
              <text
                class="followed_style2"
                v-if="is_follower == 1 && is_followed == 1"
                @tap="unfollow"
              >
              </text>
              <text
                class="followed_style"
                v-if="is_follower == 0 && is_followed == 1"
                @tap="follow"
                >回粉</text
              >
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="main_list">
      <view class="line-bg"></view>
      <view class="swiper_tab">
        <view
          @tap="swichTab(index)"
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
              src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
            ></image>
          </view>
          <view class="none_tiptext">暂无信息哦～</view>
        </view>
        <block v-else>
          <view class="home_item">
            <view class="home_item_title">
              <view class="home_item_title_text">模卡信息</view>
              <view
                @tap="editpersondata"
                class="home_item_title_edit"
                v-if="myself"
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
              <view
                @tap="editpersonimg"
                class="home_item_title_edit"
                v-if="myself"
              >
                {{ homeInfor.personimg.length ? "编辑" : "添加" }}</view
              >
              <view @tap="editpersonimg" class="home_item_title_edit" v-else>
                更多</view
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
              <view @tap="editpersonimg" class="home_img_add">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
                ></image>
              </view>
              <view @tap="editpersonimg" class="home_img_add">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
                ></image>
              </view>
              <view @tap="editpersonimg" class="home_img_add">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
                ></image>
              </view>
            </view>
          </view>
          <view class="home_item">
            <view class="home_item_title ub">
              <view class="home_item_title_text ub-f1">视频相册</view>
              <view @tap="editvideo" class="home_item_title_edit" v-if="myself">
                {{ homeInfor.video.length ? "编辑" : "添加" }}</view
              >
              <view @tap="editvideo" class="home_item_title_edit" v-else>
                更多</view
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
              <view @tap="editvideo" class="home_video_add" v-if="myself">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
                ></image>
              </view>
            </view>
          </view>
          <view class="home_item">
            <view class="home_item_title ub">
              <view class="home_item_title_text ub-f1">标签信息</view>
              <view @tap="editzytag" class="home_item_title_edit" v-if="myself">
                {{ homeInfor.mode_sticker.length ? "编辑" : "添加" }}</view
              >
            </view>
            <view class="home_item_tag" v-if="homeInfor.mode_sticker.length">
              <text>身份标签：</text>
              <text
                class="tag_item"
                v-for="(item, index) in homeInfor.mode_sticker"
                :key="index"
                >{{ item }}</text
              >
            </view>
            <view class="home_item_tag" v-if="homeInfor.notice_sticker.length">
              <text>接单通告：</text>
              <text
                class="tag_item"
                v-for="(item, index) in homeInfor.notice_sticker"
                :key="index"
                >{{ item }}</text
              >
            </view>
            <view class="home_item_tag" v-if="homeInfor.style_sticker.length">
              <text>形象风格：</text>
              <text
                class="tag_item"
                v-for="(item, index) in homeInfor.style_sticker"
                :key="index"
                >{{ item }}</text
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
              src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/common/loading.gif"
            ></image>
          </view>
          <view class="bottom_gap"></view>
        </view>
      </block>
      <block v-if="select_tab == 'zuopin'">
        <myZuopinList :base_data="list"></myZuopinList>
      </block>
    </view>
  </view>
</template>

<script>
import {
  userInfo,
  userShapeDetail,
  userAlbumDetail,
  userSticker,
  photoListOwn,
  shareInvite,
  shareInviteInfo,
  userFollow,
  userUnfollow,
} from "../../../../api/index";
import { errortip, openPage } from "../../../../utils/util";
import myZuopinList from "../../../../components/myZuopinList/index.vue";
import "./index.scss";
export default {
  name: "editshow",
  data() {
    return {
      myself: true,
      uuid: "",
      winWidth: 0,
      winHeight: 0,
      is_follower: 0,
      is_followed: 0,
      globalData: {
        navHeight: 0,
        navTop: 0,
        navObj: 0,
        navObjWid: 0,
      },
      infor: {
        avatar: "",
        homeimg: "",
        statistic: {
          followed_cnt: 0,
          follower_cnt: 0,
          invite_cnt: 20,
          read_cnt: 20,
          track_cnt: 20,
        },
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
        video: [],
        personimg: [],
        mode_sticker: [],
        notice_sticker: [],
        style_sticker: [],
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
        // {
        //   tab_name: "模卡",
        //   tab_id: "moka",
        // },
      ],
      list: [],
      pageNum: 1,
      pageSize: 10,
      shareTitle: "",
      shareImg: "",
      sharePath: "",
    };
  },
  components: {
    myZuopinList,
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
      openPage(
        "/packageMoka/pages/moka/editpersonimg/index?myself=" + this.myself
      );
    },
    editvideo() {
      openPage("/packageMoka/pages/moka/editvideo/index?myself=" + this.myself);
    },
    editzytag() {
      openPage("/packageAdd/pages/user/editlabel/index");
    },
    swichTab(index) {
      this.select_tab = this.tabList[index].tab_id;
      this.currentTab = index;
      if (this.select_tab == "zuopin") {
        this.pageNum = 1;
        this.list = [];
        this.queryZuopinList();
      }
    },
    queryZuopinList() {
      this.photoListOwn({
        page: this.pageNum,
        per_page: this.pageSize,
      });
    },
    follow() {
      this.userFollow({
        follow_uuid: this.uuid,
      });
    },
    unfollow() {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定不再关注？",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
            _this.userUnfollow({
              unfollow_uuid: _this.uuid,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    sendMsg() {
      openPage(
        "/packageMsg/pages/chat/index?uuid=" +
          this.uuid +
          "&nickname=" +
          this.infor.nickname +
          "&avatar=" +
          this.infor.avatar
      );
    },
    async userInfo(params) {
      try {
        let res = await userInfo(params);
        this.infor = res.data.data;
        this.homeInfor.personimg = [];
        this.homeInfor.video = [];
        this.homeInfor.personimg = res.data.data.album.photo_album;
        this.homeInfor.video = res.data.data.album.video_album;
        this.homeInfor.mode_sticker = res.data.data.sticker.mode_sticker;
        this.homeInfor.notice_sticker = res.data.data.sticker.notice_sticker;
        this.homeInfor.style_sticker = res.data.data.sticker.style_sticker;
        this.homeInfor.height = res.data.data.shape.height;
        this.homeInfor.weight = res.data.data.shape.weight;
        this.homeInfor.bwh_b = res.data.data.shape.bust;
        this.homeInfor.bwh_w = res.data.data.shape.waist;
        this.homeInfor.bwh_h = res.data.data.shape.hip;
        this.homeInfor.shoe = res.data.data.shape.size;
        this.is_followed = res.data.data.follow_status.is_followed;
        this.is_follower = res.data.data.follow_status.is_follower;
      } catch (error) {}
    },
    async userShapeDetail(params) {
      try {
        let res = await userShapeDetail(params);
        this.homeInfor.height = res.data.data.shape_list.height;
        this.homeInfor.weight = res.data.data.shape_list.weight;
        this.homeInfor.bwh_b = res.data.data.shape_list.bust;
        this.homeInfor.bwh_w = res.data.data.shape_list.waist;
        this.homeInfor.bwh_h = res.data.data.shape_list.hip;
        this.homeInfor.shoe = res.data.data.shape_list.size;
      } catch (error) {}
    },
    async userAlbumDetail(params) {
      try {
        let res = await userAlbumDetail(params);
      } catch (error) {}
    },
    async userSticker(params) {
      try {
        let res = await userSticker(params);
        this.homeInfor.mode_sticker =
          res.data.data.cur_sticker_list.mode_sticker;
        this.homeInfor.notice_sticker =
          res.data.data.cur_sticker_list.notice_sticker;
        this.homeInfor.style_sticker =
          res.data.data.cur_sticker_list.style_sticker;
      } catch (error) {}
    },
    async photoListOwn(params) {
      try {
        let res = await photoListOwn(params);
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
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
        if (this.uuid) {
          let params = {
            uuid: this.uuid,
          };
          this.userInfo(params);
        } else {
          this.userInfo("");
        }
      } catch (error) {}
    },
    async userUnfollow(params) {
      try {
        let res = await userUnfollow(params);
        if (this.uuid) {
          let params = {
            uuid: this.uuid,
          };
          this.userInfo(params);
        } else {
          this.userInfo("");
        }
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
  },
  onShow() {
    if (this.uuid) {
      let params = {
        uuid: this.uuid,
      };
      this.userInfo(params);
    } else {
      this.userInfo("");
    }
    let userInfo = wx.getStorageSync("userInfo");
    let uuid = userInfo.uuid;
    this.shareInviteInfo({
      source: "share_homepage",
      type: "wechat",
      shared_uuid: this.uuid || uuid,
    });
  },
  onReachBottom() {
    if (this.select_tab == "zuopin") {
      this.pageNum++;
      this.queryZuopinList();
    }
  },
  onLoad: function (options) {
    this.uuid = options.uuid;
    if (this.uuid) {
      this.myself = false;
    }
    if (options.scene) {
      this.uuid = options.scene;
      this.myself = false;
    }
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      },
    });
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      type: "wechat",
      // oid: this.oid,
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
};
</script>

<style lang="scss" scoped></style>
