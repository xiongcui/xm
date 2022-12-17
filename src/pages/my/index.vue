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
          <view catchtap="open_settings" class="page_settings">
            <image
              src="../../assets/images/user/index/icon_settings.png"
            ></image>
          </view>
          <block v-if="s_id">
            <view catchtap="onIsSign" class="sign_block fl" v-if="isSign">
              <image
                class="icon_sign"
                src="../../assets/images/user/index/icon_signed.png"
              ></image>
              <view class="is_sign">已签到</view>
            </view>
            <view catchtap="onSign" class="sign_block fl" v-else>
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
    </view>
    <view class="my-head-ct">
      <view class="my-desc">
        {{ infor.resume }}
      </view>
      <view class="my_tags">
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
        <view class="my-conunt-rt" @tap="personDetail"> 编辑资料 </view>
      </view>
    </view>
    <view class="my-ct">
      <view class="my-vip">
        <view class="my-vip-left">
          <image
            src="../../assets/images/money.png"
            class="my-vip-img"
            mode="aspectFit"
          ></image>
          <view>
            <view>我的金币</view>
            <view>20币</view>
          </view>
        </view>
        <view class="my-vip-rt">
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
        <view catchtap="onMyAd" class="item ub line-t">
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
        <view catchtap="pledgecash" class="item ub" v-if="infor.ispledge != 1">
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
        <view catchtap="invitego" class="item ub">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/invite.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">邀请好友</view>
          </view>
          <view class="item_tip">赚麻豆</view>
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
              src="../../assets/images/user/index/kefu1.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">联系客服</view>
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
        <view catchtap="help" class="item ub">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/helpcenter.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">帮助中心</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view catchtap="aboutUs" class="item ub line-t">
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
            <view>邀请好友，可获得更多麻豆</view>
          </view>
          <view class="sign_md_bottom">
            <view catchtap="invitego" class="sign_md_btn">马上邀请</view>
          </view>
        </form>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { userInfo } from "../../api/index";
import { openPage } from "../../utils/util";
export default {
  name: "my",
  data() {
    return {
      s_id: "1",
      isSign: "",
      sex: 1,
      show_my_ad: false,
      showModelSign: false,
      infor: {
        avatar: "",
        realname: "",
        ispledge: "",
        statistic: {
          followed_cnt: 0,
          follower_cnt: 0,
          invite_cnt: 0,
          read_cnt: 0,
          track_cnt: 0,
        },
      },
    };
  },
  methods: {
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
    myYuepai() {
      // 'type': 'NT', 约拍：NE； 通告：NT；照片：PH
      openPage("/packageAdd/pages/yuedan/yuedan_manage/index?type=NE");
    },
    myZuopin() {
      openPage("/packageAdd/pages/yuedan/yuedan_manage/index?type=PH");
    },
    async userInfo(params) {
      try {
        let res = await userInfo(params);
        this.infor = res.data.data;
      } catch (error) {}
    },
  },
  created() {
    this.globalData = this.globalData;
    this.userInfo("");
  },
  onShow() {
    this.userInfo("");
  },
};
</script>
