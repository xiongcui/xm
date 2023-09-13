<template>
  <view class="activity">
    <view
      class="activity-box"
      v-for="(item, index) in list"
      :key="index"
      @tap="godetail(item.oid)"
    >
      <view class="activity-top">
        <view class="activity-left">
          <image :src="item.main_cover" mode="aspectFill"></image>
          <text class="activity-label">{{ item.name }}</text>
        </view>
        <view class="activity-right">
          <view class="activity-title">
            {{ item.title }}
          </view>
          <view class="activity-tags" v-if="item.label">
            <view
              class="tag"
              v-for="(labelItem, labelIndex) in item.label"
              :key="labelIndex"
            >
              {{ labelItem }}
            </view>
          </view>
          <view class="activity-location"> {{ item.address }} </view>
          <view class="activity-time">
            <text class="activity-txt">{{ item.begin_datetime }}</text>
            <text class="activity-price">
              <text class="price-blod">{{ item.payment }}</text>
              <text v-if="item.payment !== '免费' && item.payment !== '置换'"
                >元</text
              >
            </text>
          </view>
        </view>
      </view>
      <view class="activity-bottom">
        <view class="activity-info">
          <image :src="item.publisher.avatar"></image>
          <text class="activity-name">{{ item.publisher.nickname }}</text>
        </view>
        <view class="schedule">
          <view
            class="schedule-bg"
            :style="{
              width:
                (item.enter_current_number / item.enter_total_number) * 100 +
                '%',
            }"
          ></view>
          <text class="schedule-txt">{{ item.enter_status }}</text>
          <text class="schedule-num"
            >{{ item.enter_current_number }} /
            {{ item.enter_total_number }}</text
          >
        </view>
        <view class="application-time"> {{ item.enter_deadline_time }} </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { exploreList } from "../../../api/index.js";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "activityList",
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      list: [],
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
      this.exploreList(
        {
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type
      );
    },
    godetail(oid) {
      openPage("/packageActivity/pages/detail/index?oid=" + oid);
    },
    async exploreList(params, type) {
      try {
        let res = await exploreList(params);
        //隐藏loading 提示框
        wx.hideLoading();

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();

        if (type == "init") {
          this.list = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.list = this.yuepaiList.concat(data);
          this.loading = true;
        }
      } catch (error) {}
    },
  },
  created() {
    this.query("init");
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
};
</script>

<style lang="scss" scoped></style>
