<template>
  <view class="my">
    <view class="custom_head" :style="{ height: navHeight + 'px' }">
      <view
        class="flex-row j_b"
        :style="{
          height: navObj + 'px',
          'padding-top': navTop + 'px',
          'padding-right': navObjWid + 5 + 'px',
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
    <view class="nav_bg" :style="{ height: navHeight + 'px' }"></view>
    <view class="my-head">
      <view class="my-head-left">
        <image
          src="../../assets/images/head.png"
          class="head-img"
          mode="aspectFit"
        ></image>
      </view>
      <view class="my-head-ct">
        <view>
          <text class="my-head-name">Bin.Won</text>
          <image
            src="../../assets/images/nan.png"
            mode="aspectFit"
            class="sex"
            v-if="sex == 1"
          ></image>
          <image
            src="../../assets/images/nv.png"
            mode="aspectFit"
            class="sex"
            v-if="sex == 0"
          ></image>
        </view>
        <view class="my-info">
          <text>摄影师</text>
          <text>｜</text>
          <text>北京市</text>
          <text class="phone">137****6230</text>
        </view>
        <view class="head-tag-box">
          <view class="head-tag">
            <image
              src="../../assets/images/real-name.png"
              class="head-tag-img"
              mode="aspectFit"
            ></image>
            <text>未实名</text>
          </view>
          <view class="head-tag">
            <image
              src="../../assets/images/guarantee.png"
              class="head-tag-img"
              mode="aspectFit"
            ></image>
            <text>未担保</text>
          </view>
        </view>
      </view>
      <view class="my-head-rt">
        <text>个人主页 </text>
        <view class="arrow">
          <image
            mode="aspectFit"
            src="../../assets/images/user/index/right.png"
          ></image>
        </view>
      </view>
    </view>
    <view class="my-ct">
      <view class="my-ct-infos">
        <view class="my-ct-info-item">
          <view class="nums">
            <view>17</view>
          </view>
          <view class="name">
            <view>麻豆</view>
          </view>
        </view>
        <view class="my-ct-info-item">
          <view class="nums">
            <view>17</view>
          </view>
          <view class="name">
            <view>关注</view>
          </view>
        </view>
        <view class="my-ct-info-item">
          <view class="nums">
            <view>0</view>
          </view>
          <view class="name">
            <view>粉丝</view>
          </view>
        </view>
      </view>
      <view class="my-vip">
        <view class="my-vip-left">
          <view class="my-vip-title">
            <image
              src="../../assets/images/vip.png"
              class="my-vip-img"
              mode="aspectFit"
            ></image>
            <text>麻豆约拍 VIP</text>
          </view>
          <view class="my-vip-txt">
            <text>点亮会员标志 享受尊贵特权</text>
          </view>
        </view>
        <view class="my-vip-rt">
          <text>开通会员</text>
          <image
            src="../../assets/images/arrow-right.png"
            class="my-vip-rt-img"
          ></image>
        </view>
      </view>
      <view class="my-column">
        <view class="my-column-item">
          <image
            src="../../assets/images/album.png"
            class="my-column-img"
            mode="aspectFit"
          ></image>
          <text>作品相册</text>
        </view>
        <view class="my-column-item">
          <image
            src="../../assets/images/collection.png"
            class="my-column-img"
            mode="aspectFit"
          ></image>
          <text>我的收藏</text>
        </view>
        <view class="my-column-item">
          <image
            src="../../assets/images/thumbs.png"
            class="my-column-img"
            mode="aspectFit"
          ></image>
          <text>我的点赞</text>
        </view>
        <view class="my-column-item">
          <image
            src="../../assets/images/history.png"
            class="my-column-img"
            mode="aspectFit"
          ></image>
          <text>浏览历史</text>
        </view>
      </view>
      <view class="items">
        <view catchtap="myYuepai" class="item ub">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/yuepai.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的约拍</view>
          </view>
          <view class="arrow">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/right.png"
            ></image>
          </view>
        </view>
        <view catchtap="onMyAd" class="item ub line-t" v-if="show_my_ad">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/ad.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的推广</view>
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
              src="../../assets/images/user/index/madou.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">我的麻豆</view>
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
        <view catchtap="realName" class="item ub" v-if="!infor.realname">
          <view class="item_icon">
            <image
              mode="aspectFit"
              src="../../assets/images/user/index/realname.png"
            ></image>
          </view>
          <view class="ub-f1">
            <view class="item_text">实名认证</view>
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
export default {
  name: "my",
  data() {
    return {
      s_id: "1",
      isSign: "",
      statusBarHeight: 100,
      sex: 1,
      show_my_ad: false,
      showModelSign: false,
      infor: {
        realname: "",
        ispledge: "",
      },
    };
  },
  methods: {
    close() {
      this.showModelSign = false;
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
        this.navHeight = navHeight; //导航栏总体高度
        this.navTop = navTop; //胶囊距离顶部距离
        this.navObj = menuButtonObject.height; //胶囊高度
        this.navObjWid = navObjWid; //胶囊宽度(包括右边距离)
        console.log(navHeight, navTop, menuButtonObject.height, navObjWid);
      },
      fail(err) {
        console.log(err);
      },
    });
  },
};
</script>
