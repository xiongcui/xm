<template>
  <view class="my">
    <view class="custom_head" :style="{ height: globalData.navHeight + 'px' }">
      <view
        class="flex-row j_b"
        :style="{
          height: globalData.navObj + 'px',
          'padding-top': globalData.navTop + 'px',
          'padding-right': globalData.navObjWid + 5 + 'px',
        }"
      >
        <view class="pagetop ub">
          <view class="page_settings">
            <image
              @tap="open_settings"
              src="../../assets/images/user/index/icon_settings.png"
            ></image>
          </view>
          <block>
            <view class="sign_block fl" v-if="is_today_sign">
              <image
                class="icon_sign"
                src="../../assets/images/user/index/icon_signed.png"
              ></image>
              <view class="is_sign">已签到</view>
            </view>
            <view @tap="showSign" class="sign_block fl" v-else>
              <image
                class="icon_sign"
                src="../../assets/images/user/index/icon_sign.png"
              ></image>
              <view>签到</view>
            </view>
          </block>
        </view>
      </view>
    </view>
    <view
      class="nav_bg"
      :style="{ height: globalData.navHeight + 'px' }"
    ></view>
    <view class="my-head">
      <view class="my-head-left">
        <image
          :src="infor.avatar ? infor.avatar : '../../assets/images/head.png'"
          class="head-img"
          mode="aspectFit"
        ></image>
      </view>
      <view class="my-head-ct" v-if="infor.uuid">
        <view>
          <text class="my-head-name">{{ infor.nickname }}</text>
        </view>
        <view class="my-account">账号：{{ infor.uuid }}</view>
        <view class="my-info">
          <text>IP归属：</text>
          <text>{{ infor.province_name }}</text>
          <view class="head-tag-box">
            <image
              src="../../assets/images/common/icon_real.png"
              class="head-tag-img"
              v-if="infor.is_certify"
            ></image>
            <image
              src="../../assets/images/common/icon_pledge_none.png"
              class="head-tag-img"
              v-else
            ></image>
            <image
              src="../../assets/images/common/icon_pledge.png"
              class="head-tag-img"
              v-if="infor.is_security"
            ></image>
            <image
              src="../../assets/images/common/icon_real_none.png"
              class="head-tag-img"
              v-else
            ></image>
          </view>
        </view>
      </view>
      <view class="my-head-ct" v-else @tap="login">
        <view>
          <text class="my-head-name">立即登录</text>
        </view>
        <view class="my-account">点击登录</view>
      </view>
    </view>
    <view class="my-head-ct">
      <view class="my-desc" v-if="infor.resume">
        {{ infor.resume }}
      </view>
      <view class="my_tags" v-if="infor.age">
        <view class="tag">
          <image
            src="../../assets/images/nan.png"
            mode="aspectFit"
            class="sex"
            v-if="infor.sex == 1"
          ></image>
          <image
            src="../../assets/images/nv.png"
            mode="aspectFit"
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
        <view class="my-conunt-rt" @tap="personDetail"> 编辑资料 </view>
      </view>
    </view>
    <view class="my-ct">
      <view class="my-vip">
        <view class="my-vip-left" @tap="goCoin">
          <image
            src="../../assets/images/money.png"
            class="my-vip-img"
            mode="aspectFit"
          ></image>
          <view>
            <view>我的金币</view>
            <view>{{ coin }}币</view>
          </view>
        </view>
        <view class="my-vip-rt" @tap="goVip">
          <image
            src="../../assets/images/vip.png"
            class="my-vip-img"
            mode="aspectFit"
          ></image>
          <view>
            <view>会员中心</view>
            <view class="vip-text">开通会员尊享特权</view>
          </view>
        </view>
      </view>
      <view class="my-column">
        <view class="my-column-item" @tap="goZhuye">
          <image
            src="../../assets/images/zhuye.png"
            class="my-column-img"
            mode="aspectFill"
          ></image>
          <text>主页</text>
        </view>
        <view class="my-column-item" @tap="goZuopin">
          <image
            src="../../assets/images/album.png"
            class="my-column-img"
            mode="aspectFill"
          ></image>
          <text>作品</text>
        </view>
        <view class="my-column-item" @tap="goCollection">
          <image
            src="../../assets/images/collection.png"
            class="my-column-img"
            mode="aspectFill"
          ></image>
          <text>收藏</text>
        </view>
      </view>
      <view class="items">
        <view @tap="onMyAd" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/ad.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">通告管理</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="myYuepai" class="item ub">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/yuepai.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">约拍管理</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view catchtap="coin" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/huodong.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">活动管理</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="myZuopin" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/zuopin1.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">作品管理</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view catchtap="coin" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/moka.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">模卡管理</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
      </view>
      <view class="items">
        <view catchtap="coin" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/dengji.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的等级</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view catchtap="realName" class="item ub" v-if="!infor.realname">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/realname.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的认证</view>
          </view>
          <view class="item_tip" v-if="infor.realname">已实名</view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="pledgecash" class="item ub" v-if="infor.ispledge != 1">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/pledgecash.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">信用担保</view>
          </view>
          <view class="item_tip" v-if="infor.ispledge == 1">担保中</view>
          <view class="item_tip" v-if="infor.ispledge == 2">退款中</view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="invitego" class="item ub">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/invite.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">邀请好友</view>
          </view>
          <view class="item_tip">赚金豆</view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="customerService" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/kefu1.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的客服</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="customerCenter" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/helpcenter.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">客服中心</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="follow" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/gongzhonghao.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">关注公众号</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
      </view>
      <view class="items">
        <view @tap="goAbout" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/about.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">关于我们</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view catchtap="invoice" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/invoice.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">开具发票</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
      </view>
    </view>
    <view @tap="close" class="modal-bg" v-if="showModelSign"></view>
    <view class="modal_box sign_modal" v-if="showModelSign">
      <view class="sign_md_close_btn">
        <image
          @tap="close"
          src="../../assets/images/common/tipclose.png"
        ></image>
      </view>
      <view class="sign_modal_main">
        <form class="main">
          <view class="sign_md_top">
            <image src="../../assets/images/user/sign/addcoin.png"></image>
          </view>
          <view class="sign_md_title">
            <view>签到成功</view>
          </view>
          <view class="sign_md_content">
            <view>{{ hyper_desc }}</view>
          </view>
          <view class="sign_md_bottom">
            <view class="sign_md_bottom">
              <button open-type="share" class="share-btn">马上邀请</button>
            </view>
            <!-- <view catchtap="invitego" class="sign_md_btn">马上邀请</view> -->
          </view>
        </form>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import {
  userInfo,
  isSign,
  shareInvite,
  shareInviteInfo,
  submitSign,
} from "../../api/index";
import { openPage } from "../../utils/util";
export default {
  name: "my",
  data() {
    return {
      is_today_sign: 0,
      sex: 1,
      show_my_ad: false,
      showModelSign: false,
      infor: {
        age: 0,
        avatar: "",
        realname: "",
        ispledge: "",
        statistic: {
          followed_cnt: 0,
          follower_cnt: 0,
          invite_cnt: 0,
          read_cnt: 0,
          track_cnt: 0,
          visitor_cnt: 0,
        },
      },
      coin: 0,
      hyper_desc: "",
      shareTitle: "",
      sharePath: "",
      shareImg: "",
    };
  },
  methods: {
    showSign() {
      this.submitSign("");
    },
    open_settings() {
      openPage("/packageSet/pages/index/index");
    },
    close() {
      this.showModelSign = false;
    },
    personDetail() {
      openPage("/packageAdd/pages/user/editinfor/index");
    },
    goZhuye() {
      openPage("/packageMoka/pages/moka/editshow/index");
    },
    goZuopin() {
      openPage("/packageAdd/pages/zuopin/zuopin_list/index");
    },
    goCollection() {
      openPage("/packageAdd/pages/user/collection/index");
    },
    pledgecash() {
      openPage("/packageMsg/pages/creditGuarantee/index");
    },
    myYuepai() {
      // 'type': 'NT', 约拍：NE； 通告：NT；照片：PH
      openPage("/packageAdd/pages/yuedan/yuedan_manage/index?type=NE");
    },
    myZuopin() {
      openPage("/packageAdd/pages/yuedan/yuedan_manage/index?type=PH");
    },
    goVip() {
      openPage("/packageVip/pages/vip/index");
    },
    goCoin() {
      openPage("/packageAdd/pages/user/coin/index");
    },
    onMyAd() {
      openPage("/packageTonggao/pages/tonggao_manage/index");
    },
    invitego() {
      openPage("/packageAdd/pages/user/invite/index");
    },
    customerService() {
      wx.openCustomerServiceChat({
        extInfo: { url: "https://work.weixin.qq.com/kfid/kfc70400e4245eaa1b6" },
        corpId: "ww9ad8086390afbfaa",
        success(res) {},
      });
    },
    customerCenter() {
      openPage("/packageSet/pages/customerCenter/index");
    },
    follow() {
      openPage("/packageAdd/pages/user/follow/index");
    },
    login() {
      openPage("/pages/login/index");
    },
    goAbout() {
      openPage("/packageSet/pages/about/index");
    },
    goFollowAndfans(type) {
      openPage("/packageAdd/pages/user/followAndfans/index?type=" + type);
    },
    async userInfo(params) {
      try {
        let res = await userInfo(params);
        if (!res.data.data) {
          this.infor = {
            age: 0,
            avatar: "",
            realname: "",
            ispledge: "",
            statistic: {
              followed_cnt: 0,
              follower_cnt: 0,
              invite_cnt: 0,
              read_cnt: 0,
              track_cnt: 0,
              visitor_cnt: 0,
            },
          };
          this.coin = 0;
          return false;
        }

        this.infor = res.data.data;
        this.coin = res.data.data.acct.coin;
      } catch (error) {}
    },
    async isSign(params) {
      try {
        let res = await isSign(params);
        this.is_today_sign = res.data.data.is_today_sign;
      } catch (error) {}
    },
    async shareInvite(params) {
      try {
        let res = await shareInvite(params);
        // this.shareTitle = res.data.data.title;
        // this.shareImg = res.data.data.imageUrl;
        // this.sharePath = res.data.data.path;
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
    async submitSign(params) {
      try {
        let res = await submitSign(params);
        this.showModelSign = true;
        this.hyper_desc = res.data.data.hyper_desc;
        this.isSign("");
      } catch (error) {}
    },
  },
  created() {
    this.globalData = this.globalData;
    this.userInfo("");
    // 是否签到
    this.isSign("");
    this.shareInviteInfo({
      source: "share_friend",
      type: "wechat",
    });
  },
  onShow() {
    this.userInfo("");
  },
  onLoad: function (options) {
    console.log(options);
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
};
</script>
