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
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/icon_settings.png"
            ></image>
          </view>
          <block v-if="!showlogin">
            <view class="sign_block fl" v-if="is_today_sign">
              <image
                class="icon_sign"
                src="https://yuepai-oss.qubeitech.com/static/images/user/index/icon_signed.png"
              ></image>
              <view class="is_sign">已签到</view>
            </view>
            <view @tap="showSign" class="sign_block fl" v-else>
              <image
                class="icon_sign"
                src="https://yuepai-oss.qubeitech.com/static/images/user/index/icon_sign.png"
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
          :src="
            infor.avatar
              ? infor.avatar
              : 'https://yuepai-oss.qubeitech.com/static/images/head.png'
          "
          class="head-img"
          mode="aspectFit"
        ></image>
      </view>
      <view class="my-head-ct" v-if="!showlogin && infor.uuid">
        <view>
          <text class="my-head-name">{{ infor.nickname }}</text>
        </view>
        <view class="my-account">账号：{{ infor.uuid }}</view>
        <view class="my-info">
          <text>IP归属：</text>
          <text>{{ infor.login_ip_city }}</text>
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
            src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
            mode="aspectFit"
            class="sex"
            v-if="infor.sex == 1"
          ></image>
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
            mode="aspectFit"
            class="sex"
            v-if="infor.sex == 0"
          ></image>
          {{ infor.age }}岁
        </view>
        <view class="tag"> {{ infor.province_name }} </view>
        <view
          class="tag"
          v-for="(item, index) in infor.career_label"
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
        <view class="my-conunt-rt" @tap="personDetail" v-if="!showlogin">
          编辑资料
        </view>
      </view>
    </view>
    <view class="my-ct">
      <view class="my-vip">
        <view class="my-vip-left" @tap="goCoin">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/money.png"
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
            src="https://yuepai-oss.qubeitech.com/static/images/vip.png"
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
            src="https://yuepai-oss.qubeitech.com/static/images/zhuye.png"
            class="my-column-img"
            mode="aspectFill"
          ></image>
          <text>主页</text>
        </view>
        <view class="my-column-item" @tap="goZuopin">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/album.png"
            class="my-column-img"
            mode="aspectFill"
          ></image>
          <text>作品</text>
        </view>
        <view class="my-column-item" @tap="goCollection">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/collection.png"
            class="my-column-img"
            mode="aspectFill"
          ></image>
          <text>收藏</text>
        </view>
      </view>
      <view class="my-title"> 我的发布 </view>
      <view class="items myblock">
        <view @tap="onMyAd" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/ad.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">通告管理</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="myYuepai" class="item ub">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">约拍管理</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <!-- <view catchtap="coin" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/huodong.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">活动管理</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view> -->
        <view @tap="myZuopin" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/zuopin1.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">作品管理</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view class="item ub line-t" @tap="myApply">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/feed_back.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的申请</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view class="item ub line-t" @tap="myMoka">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/moka.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的模卡</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view class="item ub line-t" @tap="myHuodong">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/huodong.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的活动</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
      </view>
      <view class="my-title"> 我的服务 </view>
      <view class="items myblock">
        <!-- <view catchtap="coin" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/dengji.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的等级</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view> -->
        <view
          catchtap="realName"
          class="item ub"
          v-if="!infor.realname"
          @tap="myCertification"
        >
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/realname.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的认证</view>
          </view>
          <view class="item_tip" v-if="infor.realname">已实名</view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="pledgecash" class="item ub" v-if="infor.ispledge != 1">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/pledgecash.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="invitego" class="item ub">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/invite.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">邀请好友</view>
          </view>
          <view class="item_tip">赚金豆</view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="goEnterGroup" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/weChat.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">加入社群</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <!-- <view @tap="customerService" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/kefu1.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的客服</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view> -->
        <view @tap="customerCenter" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/helpcenter.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">客服中心</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="follow" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/gongzhonghao.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">关注公众号</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
      </view>
      <view class="my-title"> 其他服务 </view>
      <view class="items myblock">
        <view @tap="goResource" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/resource.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">领取资料</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>

        <view @tap="goAbout" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/about.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">关于我们</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view catchtap="invoice" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/invoice.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">开具发票</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view @tap="evaluation" class="item ub line-t">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/evaluation.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">体验评价</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
            ></image>
          </view>
        </view>
      </view>
    </view>
    <sign :visible="showModelSign" :msg="hyper_desc" @close="close"></sign>
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
  idcardInfo,
} from "../../api/index";
import { isLogin, openPage } from "../../utils/util";
import sign from "../../components/sign/index.vue";
export default {
  name: "my",
  data() {
    return {
      is_today_sign: 0,
      num: 0,
      sex: 1,
      show_my_ad: false,
      showModelSign: false,
      showlogin: false,
      infor: {
        age: 0,
        avatar: "",
        realname: "",
        ispledge: "",
        statistic: {
          followed_cnt: 0,
          follower_cnt: 0,
          invite_cnt: 0,
          vote_cnt: 0,
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
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageSet/pages/index/index");
    },
    close() {
      this.showModelSign = false;
    },
    evaluation() {
      var plugin = requirePlugin("wxacommentplugin");
      plugin.openComment({
        success: (res) => {
          console.log("plugin.openComment success", res);
        },
        fail: (res) => {
          console.log("plugin.openComment fail", res);
        },
      });
    },
    personDetail() {
      openPage("/packageAdd/pages/user/editinfor/index");
    },
    goZhuye() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageMoka/pages/moka/editshow/index");
    },
    goZuopin() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageAdd/pages/zuopin/zuopin_list/index");
    },
    goCollection() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageAdd/pages/user/collection/index");
    },
    pledgecash() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageMsg/pages/creditGuarantee/index");
    },
    myCertification() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      if (this.infor.is_certify) {
        openPage("/packageSet/pages/success/index?msg=实名认证审核通过！");
      } else {
        openPage("/packageAdd/pages/user/realnameAuth/index");
      }
    },
    myYuepai() {
      // 'type': 'NT', 约拍：NE； 通告：NT；照片：PH
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageAdd/pages/yuedan/yuedan_manage/index?type=NE");
    },
    myZuopin() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageAdd/pages/yuedan/yuedan_manage/index?type=PH");
    },
    goVip() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageVip/pages/vip/index");
    },
    goCoin() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageAdd/pages/user/coin/index");
    },
    onMyAd() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
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
    myApply() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageSet/pages/apply/index");
    },
    myMoka() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageMoka/pages/moka/myModelCardlist/index");
    },
    myHuodong() {
      if (!isLogin()) {
        openPage("/pages/login/index");
        return false;
      }
      openPage("/packageActivity/pages/myActivity/index");
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
    goResource() {
      openPage("/packageActivity/pages/resource/index");
    },
    goEnterGroup() {
      openPage("/packageActivity/pages/publicize/index");
    },
    goFollowAndfans(type) {
      openPage("/packageAdd/pages/user/followAndfans/index?type=" + type);
    },
    async userInfo(params) {
      try {
        let res = await userInfo(params);
        this.infor = res.data.data;
        this.coin = res.data.data.acct.coin;
      } catch (error) {
        this.infor = {
          age: 0,
          avatar: "",
          realname: "",
          ispledge: "",
          statistic: {
            followed_cnt: 0,
            follower_cnt: 0,
            invite_cnt: 0,
            vote_cnt: 0,
            visitor_cnt: 0,
          },
        };
        this.coin = 0;
      }
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
    async idcardInfo(params) {
      try {
        let res = await idcardInfo(params);
        openPage(
          "/packageAdd/pages/user/baiduRealnameAuth/index?verify_token=" +
            res.data.data.verify_token +
            "&uuid=" +
            this.infor.uuid
        );
      } catch (error) {
        if (error.data.error_code == 21002) {
          openPage("/packageAdd/pages/user/realnameAuth/index");
        }
      }
    },
  },
  components: {
    sign,
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
    // 是否登录
    if (isLogin()) {
      this.showlogin = false;
    } else {
      this.showlogin = true;
    }
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
  onShareTimeline() {
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
};
</script>
