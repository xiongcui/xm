<template>
  <view class="resource">
    <view class="resource-banner">
      <image mode="widthFix" :src="banner" @tap="goHome"></image>
    </view>
    <view class="resource-list">
      <view class="resource-box" v-for="(item, index) in list" :key="index">
        <image
          mode="scaleToFill"
          class="resource-hot"
          src="https://yuepai-oss.qubeitech.com/static/images/hot.png"
          v-if="item.is_hot"
        ></image>
        <view class="resource-left">
          <image mode="aspectFill" :src="item.cover"></image>
        </view>
        <view class="resource-right">
          <view class="resource-title">{{ item.title }}</view>
          <view class="resource-desc"> {{ item.subtitle }} </view>
          <view class="resource-get">
            <text class="resource-get-num"
              >已被领取：{{ item.click_cnt }}次</text
            >
            <text class="resource-btn" @tap="resourceGet(item.oid)"
              >我要领取</text
            >
          </view>
        </view>
      </view>
    </view>
    <view class="resource-modal" v-if="visible" @tap="close">
      <view class="resource-content">
        <view class="resource-content-title"> 获取资料 </view>
        <view class="resource-msg"> {{ hyper_tips }} </view>
        <view class="resource-operate" v-if="guide == 'admit'">
          <view class="resource-now-btn" @tap.stop="copy"> 立即领取 </view>
        </view>
        <view class="resource-operate2" v-if="guide == 'payment'">
          <view class="resource-cancle-btn" @tap.stop="close"> 暂时放弃 </view>
          <view class="resource-now-btn" @tap.stop="paymentConfirm">
            立即领取
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import {
  materialsList,
  materialsEvent,
  materialsPayment,
  shareInvite,
  shareInviteInfo,
} from "../../../api/index.js";
import { errortip, isLogin, openPage } from "../../../utils/util";
import "./index.scss";
export default {
  name: "resource",
  data() {
    return {
      visible: false,
      list: [],
      loading: false,
      pageNum: 1,
      pageSize: 10,
      banner: "",
      guide: "admit",
      hyper_tips: "",
      hyper_link: "",
      oid: "",
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      shareFriendsTitle: "",
      shareFriendsImg: "",
      shareFriendsPath: "",
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
    resourceGet(oid) {
      this.oid = oid;
      if (isLogin()) {
        this.materialsEvent({
          oid: oid,
        });
      } else {
        openPage("/pages/login/index?from=resource");
      }
    },
    copy() {
      let _this = this;
      wx.navigateToMiniProgram({
        appId: "wxdcd3d073e47d1742",
        path: this.hyper_link,
        extraData: {
          foo: "bar",
        },
        success(res) {
          // 打开成功
          _this.visible = false;
        },
      });
    },
    paymentConfirm() {
      let _this = this;
      wx.showModal({
        title: "支付确认",
        content: `领取资料需支付5金币`,
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
            _this.materialsPayment({
              oid: _this.oid,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    query(type) {
      if (type == "init") this.pageNum = 1;
      this.materialsList(
        {
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type
      );
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
      this.query("more");
    },
    goHome() {
      wx.switchTab({
        url: "/pages/home/index",
        success: function (e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          // page.onLoad();
        },
      });
    },
    async materialsList(params, type) {
      try {
        let res = await materialsList(params);
        //隐藏loading 提示框
        wx.hideLoading();

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();

        if (type == "init") {
          this.banner = res.data.data.items.banner;
          this.list = res.data.data.items.list;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.list) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items.list;
          this.list = this.list.concat(data);
          this.loading = true;
        }
      } catch (error) {}
    },
    async materialsEvent(params) {
      try {
        let res = await materialsEvent(params);
        this.guide = res.data.data.guide;
        this.hyper_tips = res.data.data.content.hyper_tips;
        this.hyper_link = res.data.data.content.hyper_link;
        this.visible = true;
      } catch (error) {}
    },
    async materialsPayment(params) {
      try {
        let res = await materialsPayment(params);
        this.hyper_link = res.data.data.content.hyper_link;
        this.copy();
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
    async shareFriendsInvite(params) {
      try {
        let res = await shareInvite(params);
      } catch (error) {}
    },
    async shareFriendsInviteInfo(params) {
      try {
        let res = await shareInviteInfo(params);
        this.shareFriendsTitle = res.data.data.title;
        this.shareFriendsImg = res.data.data.imageUrl;
        this.shareFriendsPath = res.data.data.path;
      } catch (error) {}
    },
  },
  mounted() {
    this.query("init");
    this.shareInviteInfo({
      source: "share_details",
      project: "materials",
    });
    this.shareFriendsInviteInfo({
      source: "friends_circle",
      project: "materials",
    });
  },
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading) {
      this.onMore();
    }
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      project: "materials",
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onShareTimeline() {
    this.shareFriendsInvite({
      source: "friends_circle",
      project: "materials",
    });
    return {
      title: this.shareFriendsTitle,
      imageUrl: this.shareFriendsImg,
      path: this.shareFriendsPath, // 路径，传递参数到指定页面。
    };
  },
};
</script>

<style lang="scss" scoped></style>
