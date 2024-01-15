<template>
  <view class="share-show">
    <view class="share-show-list">
      <view
        class="share-show-item"
        v-for="(item, index) in sharingList"
        :key="index"
      >
        <image mode="aspectFill" :src="item.share_cover[0]"></image>
        <view class="share-show-txt">
          {{ item.share_content }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { sharingInfo } from "../../../api/index.js";
export default {
  name: "shareShow",
  data() {
    return {
      pid: "",
      sharingList: [],
      pageNum: 1,
      pageSize: 10,
      loading: true,
    };
  },
  methods: {
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
    query(type) {
      if (type == "init") this.pageNum = 1;
      this.sharingInfo(
        {
          partner_pid: this.pid,
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type
      );
    },
    async sharingInfo(params, type) {
      try {
        let res = await sharingInfo(params);
        //隐藏loading 提示框
        wx.hideLoading();

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();

        if (type == "init") {
          this.sharingList = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.sharingList = this.sharingList.concat(data);
          this.loading = true;
        }
      } catch (error) {}
    },
  },
  onPullDownRefresh: function () {
    this.query("init");
  },
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading) {
      this.onMore();
    }
  },
  onLoad: function (options) {
    if (options.pid) {
      this.pid = options.pid;
      this.query("init");
    }
  },
};
</script>

<style lang="scss" scoped></style>
