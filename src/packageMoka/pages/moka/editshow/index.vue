<template>
  <view class="main">
    <view class="main_top">
      <view
        class="homeimg"
        :style="{
          background: infor.basic.homeimg
            ? 'rgba(0,0,0,0.5) url(' + infor.basic.homeimg + ') no-repeat'
            : '#ea6a6b',
          'background-size': infor.basic.homeimg ? 'cover' : 'inherit',
        }"
      >
        <view class="my-head">
          <view class="my-head-left">
            <image
              :src="
                infor.basic.avatar
                  ? infor.basic.avatar
                  : 'https://yuepai-oss.qubeitech.com/static/images/head.png'
              "
              class="head-img"
              mode="aspectFit"
            ></image>
            <image
              v-if="is_member"
              class="user-vip"
              src="https://yuepai-oss.qubeitech.com/static/images/user-vip.png"
            ></image>
          </view>
          <view class="my-head-ct">
            <view class="my-head-top">
              <text class="my-head-name">{{ infor.basic.nickname }}</text>
              <text class="my-head-vip">{{ level ? level : "Lv0" }}</text>
            </view>
            <view class="my-account">
              <view class="my-account-item"> 账号:{{ infor.basic.uuid }} </view>
              <view class="my-account-item"
                >IP归属:{{ infor.basic.login_ip_city }}</view
              >
            </view>
            <view class="my-info">
              <view class="head-tag-box">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/icon_real.png"
                  class="head-tag-img"
                  v-if="infor.basic.is_certify"
                ></image>
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/icon_pledge.png"
                  class="head-tag-img"
                  v-if="infor.basic.is_security"
                ></image>
              </view>
            </view>
          </view>
        </view>
        <view class="my-head-ct">
          <view class="my-desc">
            {{ infor.basic.resume }}
          </view>
          <view class="my_tags">
            <view class="tag" v-if="infor.basic.age">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/user/show/sex1.png"
                class="sex"
                v-if="infor.basic.sex == 1"
              ></image>
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/user/show/sex2.png"
                class="sex"
                v-if="infor.basic.sex == 0"
              ></image>
              {{ infor.basic.age }}岁
            </view>
            <view class="tag" v-if="infor.basic.province_name">
              {{ infor.basic.province_name }}
            </view>
            <view
              class="tag"
              v-for="(item, index) in infor.basic.career_label"
              :key="index"
            >
              {{ item }}
            </view>
          </view>
          <view class="my-count">
            <view class="my-conunt-left">
              <view class="my-count-box" @tap="goFollowAndfans('fans')">
                <text class="num">{{ infor.statistic.follower_cnt }}</text>
                <text>粉丝</text>
              </view>
              <view class="my-count-box" @tap="goFollowAndfans('follow')">
                <text class="num">{{ infor.statistic.followed_cnt }}</text>
                <text>关注</text>
              </view>
              <view class="my-count-box">
                <text class="num">{{ infor.statistic.invite_cnt }}</text>
                <text>收到</text>
              </view>
              <view class="my-count-box">
                <text class="num">{{ infor.statistic.vote_cnt }}</text>
                <text>点赞</text>
              </view>
              <view class="my-count-box">
                <text class="num">{{ infor.statistic.visitor_cnt }}</text>
                <text>人气</text>
              </view>
            </view>
            <view class="my-conunt-rt" @tap="personDetail" v-if="myself">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/user/show/btn_edit.png"
              ></image>
            </view>
            <view class="is_followed_box" v-if="!myself">
              <text class="followed_send_msg" @tap="communicate">发消息</text>
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
        <view
          class="main ub ub-ver none_main"
          v-if="homeInfo_none && !yuepaiList.length"
        >
          <view class="none_tipimg">
            <image
              mode="widthFix"
              src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
            ></image>
          </view>
          <view class="none_tiptext">Ta很懒，什么都没留下</view>
        </view>
        <block v-else>
          <view
            class="home_item"
            v-if="myself || (!myself && homeInfor.height)"
          >
            <view class="home_item_title">
              <view class="home_item_title_text">模卡信息</view>
              <view
                @tap="editpersondata"
                class="home_item_title_edit"
                v-if="myself"
                >编辑</view
              >
              <view
                @tap="gomoka"
                class="home_item_title_edit"
                v-if="!myself && infor.mocha"
                >更多</view
              >
            </view>
            <view class="home_item_main moka-info">
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
            <image
              class="mokaimg"
              mode="widthFix"
              :src="infor.mocha"
              v-if="infor.mocha"
              @tap="showbigPersonimg(infor.mocha, [infor.mocha])"
            ></image>
          </view>
          <view
            class="home_item"
            v-if="myself || (!myself && newZuopinList.length)"
          >
            <view class="home_item_title ub">
              <view class="home_item_title_text ub-f1">最新作品</view>
              <view
                class="home_item_title_edit"
                @tap="newZuopinMore"
                v-if="!myself"
              >
                更多</view
              >
            </view>
            <view class="home_item_main" v-if="newZuopinList.length">
              <view
                class="personimg_item"
                v-if="index <= 2"
                v-for="(imgitem, index) in newZuopinList"
                :key="index"
                @tap="goZuopinDetail(imgitem.oid)"
              >
                <image
                  class="personimg"
                  :data-index="index"
                  mode="aspectFill"
                  :src="imgitem.cover[0]"
                ></image>
                <view class="personimg-txt"> {{ imgitem.title }} </view>
                <view class="personimg-mc"> {{ imgitem.cover_num }}</view>
              </view>
            </view>
          </view>
          <view
            class="home_item"
            v-if="myself || (!myself && homeInfor.personimg.length)"
          >
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
                  @tap="showbigPersonimg(imgitem, homeInfor.personimg)"
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
          <view
            class="home_item"
            v-if="myself || (!myself && homeInfor.video.length)"
          >
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
                  :id="'user_video' + index"
                  objectFit="cover"
                  :poster="item.cover"
                  :src="item.file"
                  :title="homeInfor.nickname"
                  :vslideGestureInFullscreen="false"
                  @ended="bindended('user_video' + index)"
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
          <view
            class="home_item"
            v-if="
              myself ||
              (!myself &&
                (homeInfor.mode_sticker.length ||
                  homeInfor.notice_sticker.length ||
                  homeInfor.style_sticker.length))
            "
          >
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
        <view class="more_title" v-if="yuepaiList.length">
          <view class="more_dian">
            <text class="dian_item"></text>
            <text class="dian_item"></text>
            <text class="dian_item"></text>
          </view>
          约拍动态
          <view class="more_dian">
            <text class="dian_item"></text>
            <text class="dian_item"></text>
            <text class="dian_item"></text>
          </view>
        </view>
        <view class="publishing-works" v-if="myself && !yuepaiList.length">
          <text @tap="goZuopin">发布作品</text>
        </view>
        <view class="publishing-tips" v-if="myself && !yuepaiList.length">
          <text>还未发布任何动态哦！</text>
        </view>
        <view
          class="componets-box"
          v-for="(item, index) in yuepaiList"
          :key="index"
          @tap="goYuepaiDetail(item.basic.oid, item.basic.uuid)"
          v-else
        >
          <view class="list_content">
            <view class="list_title">
              <view class="recommend-style">
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
            <view class="list_title_desc">{{ item.topic.headline.title }}</view>
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
                v-for="(url, coverIndex) in item.details.media.cover"
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
        <view class="nomore" v-if="nomore && list.length"
          >没有更多数据了～</view
        >
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
        <myZuopinList :base_data="list" :myself="myself"></myZuopinList>
        <view class="nomore" v-if="nomore && list.length"
          >没有更多数据了～</view
        >
      </block>
    </view>
    <view
      class="zhuye_fixed_bottom"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
      v-if="!myself"
    >
      <view class="zhuye_fixed_left" @tap="communicate"> 私信沟通 </view>
      <view class="zhuye_fixed_ct" @tap="rapidConnection"> 急速快联 </view>
      <view class="zhuye_fixed_rt" @tap="launchYuepai"> 申请约拍 </view>
    </view>
    <view
      class="zhuye_fixed_bottom"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
      v-if="next"
    >
      <text class="next-btn" @tap="sub">下一步</text>
    </view>
    <unlock
      v-show="unlockVisible"
      @unlockClose="unlockClose"
      :uuid="infor.uuid || uuid"
    ></unlock>
  </view>
</template>

<script>
import {
  userInfo,
  userAlbumDetail,
  userSticker,
  photoListOwn,
  shareInvite,
  shareInviteInfo,
  userFollow,
  userUnfollow,
  applyVerify,
  imVerify,
  trendsList,
} from "../../../../api/index";
import { errortip, isLogin, openPage } from "../../../../utils/util";
import myZuopinList from "../../../../components/myZuopinList/index.vue";
import unlock from "../../../../components/unlock/index.vue";
import clickThrottle from "../../../../utils/clickThrottle";
import "./index.scss";
export default {
  name: "editshow",
  data() {
    return {
      myself: true,
      isIphoneX: false,
      unlockVisible: false,
      nomore: false,
      uuid: "",
      winWidth: 0,
      winHeight: 0,
      is_follower: 0,
      is_followed: 0,
      infor: {
        basic: {},
        avatar: "",
        homeimg: "",
        statistic: {
          followed_cnt: 0,
          follower_cnt: 0,
          invite_cnt: 0,
          vote_cnt: 0,
          visitor_cnt: 0,
        },
      },
      level: "",
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
      newZuopinList: [],
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
      next: false,
      is_member: 0,
      yuepaiList: [],
    };
  },
  components: {
    myZuopinList,
    unlock,
  },
  methods: {
    unlockClose() {
      this.unlockVisible = false;
    },
    goZuopin() {
      openPage("/packageAdd/pages/zuopin/add_zuopin/index");
    },
    goZuopinDetail(oid, author_id) {
      openPage(
        "/packageAdd/pages/zuopin/zuopin_detail/index?oid=" +
          oid +
          "&author_id=" +
          this.infor.basic.uuid || this.uuid
      );
    },
    personDetail() {
      openPage("/packageAdd/pages/user/editinfor/index");
    },
    goYuepaiDetail(oid, author_id) {
      openPage(
        "/packageAdd/pages/yuedan/yuedan_detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
    goback() {
      wx.navigateBack({
        delta: 1,
      });
    },
    showbigPersonimg(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    newZuopinMore() {
      this.currentTab = 1;
      this.select_tab = "zuopin";
      this.pageNum = 1;
      this.list = [];
      this.queryZuopinList();
    },
    gomoka() {
      openPage(
        "/packageMoka/pages/moka/editmoka/index?uuid=" +
          this.infor.basic.uuid || this.uuid
      );
    },
    editpersondata() {
      openPage("/packageMoka/pages/moka/editpersondata/index");
    },
    editpersonimg() {
      openPage(
        "/packageMoka/pages/moka/editpersonimg/index?myself=" +
          this.myself +
          "&uuid=" +
          this.infor.basic.uuid
      );
    },
    editvideo() {
      openPage(
        "/packageMoka/pages/moka/editvideo/index?myself=" +
          this.myself +
          "&uuid=" +
          this.infor.basic.uuid
      );
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
      if (this.select_tab == "home") {
        this.pageNum = 1;
        this.yuepaiList = [];
        this.queryYuepaiList();
      }
    },
    queryZuopinList() {
      this.photoListOwn({
        uuid: Number(this.infor.basic.uuid),
        page: this.pageNum,
        per_page: this.pageSize,
      });
    },
    queryYuepaiList() {
      this.trendsList({
        uuid: Number(this.infor.basic.uuid),
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
          this.infor.basic.nickname +
          "&avatar=" +
          this.infor.basic.avatar
      );
    },
    rapidConnection() {
      if (isLogin()) {
        this.unlockVisible = true;
      } else {
        wx.redirectTo({
          url: "/pages/login/index",
        });
      }
    },
    communicate() {
      this.imVerify({
        to_account: this.uuid,
      });
    },
    launchYuepai() {
      if (!clickThrottle()) return;
      if (isLogin()) {
        this.applyVerify({
          source: "home",
          oid: this.uuid,
        });
      } else {
        wx.redirectTo({
          url: "/pages/login/index",
        });
      }
    },
    sub() {
      // 请设置三围
      if (!this.homeInfor.height) {
        errortip("请设置三围");
        return false;
      }
      let data = this.infor;
      let carduserinfo = {
        avatar: data.avatar,
        nickname: data.nickname,
        sex: data.sex,
        birthday: data.age,
        height: data.shape.height,
        weight: data.shape.weight,
        bwh_b: data.shape.bust,
        bwh_w: data.shape.waist,
        bwh_h: data.shape.hip,
        shoe: data.shape.size,
        is_bwh: data.shape.bust ? true : false,
        is_birthday: data.age ? true : false,
      };
      wx.setStorageSync("carduserinfo", carduserinfo);
      if ("vertical" == wx.getStorageSync("card-type")) {
        openPage("/packageMoka/pages/moka/makecardv/index");
      } else {
        openPage("/packageMoka/pages/moka/makecard/index");
      }
    },
    bindended(id) {
      wx.createVideoContext(id).exitFullScreen();
    },
    async userInfo(params) {
      try {
        let res = await userInfo(params);
        this.infor = res.data.data;
        this.queryYuepaiList();
        this.level = res.data.data.basic.level;
        this.is_member = res.data.data.basic.is_member;
        this.homeInfor.personimg = [];
        this.homeInfor.video = [];
        this.newZuopinList = [];
        this.newZuopinList = res.data.data.photo.item
          ? res.data.data.photo.item
          : [];
        this.homeInfor.personimg = res.data.data.album.photo
          ? res.data.data.album.photo
          : [];
        this.homeInfor.video = res.data.data.album.video
          ? res.data.data.album.video
          : [];
        this.homeInfor.mode_sticker = res.data.data.sticker.mode_sticker
          ? res.data.data.sticker.mode_sticker
          : [];
        this.homeInfor.notice_sticker = res.data.data.sticker.notice_sticker
          ? res.data.data.sticker.notice_sticker
          : [];
        this.homeInfor.style_sticker = res.data.data.sticker.style_sticker
          ? res.data.data.sticker.style_sticker
          : [];
        this.homeInfor.height = res.data.data.shape.height;
        this.homeInfor.weight = res.data.data.shape.weight;
        this.homeInfor.bwh_b = res.data.data.shape.bust;
        this.homeInfor.bwh_w = res.data.data.shape.waist;
        this.homeInfor.bwh_h = res.data.data.shape.hip;
        this.homeInfor.shoe = res.data.data.shape.size;
        this.homeInfo_none = !res.data.data.finish_status;
        this.is_followed = res.data.data.follow_status.is_followed;
        this.is_follower = res.data.data.follow_status.is_follower;
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
          // errortip("没有更多数据了～");
          this.nomore = true;
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
        this.nomore = false;
      } catch (error) {
        this.nomore = false;
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
    async applyVerify(params) {
      try {
        let res = await applyVerify(params);
        openPage(
          "/packageAdd/pages/user/launchyuepai/index?oid=" +
            this.uuid +
            "&source=home"
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
    async imVerify(params) {
      try {
        let res = await imVerify(params);
        this.sendMsg();
      } catch (error) {
        errortip(error.data.msg);
        if (error.data.error_code == 21050 || error.data.error_code == 21040) {
          openPage(
            `/packageAdd/pages/guideTips/index?msg=${error.data.msg}&code=${error.data.error_code}`
          );
        }
      }
    },
    async trendsList(params) {
      try {
        let res = await trendsList(params);
        if (!res.data.data || !res.data.data.items.length) {
          // errortip("没有更多数据了～");
          this.nomore = true;
          return false;
        }
        let data = res.data.data.items;
        this.yuepaiList = this.yuepaiList.concat(data);
        this.nomore = false;
      } catch (error) {
        this.nomore = false;
      }
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onShow() {
    if (this.uuid) {
      let params = {
        uuid: this.uuid,
      };
      this.userInfo(params);
      // this.trendsList(params);
    } else {
      this.userInfo("");
      // this.trendsList("");
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
    if (this.select_tab == "home") {
      this.pageNum++;
      this.queryYuepaiList();
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
    if (options.next) {
      this.next = true;
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
      source: "friends_circle",
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
};
</script>

<style lang="scss" scoped></style>
