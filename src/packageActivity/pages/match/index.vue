<template>
  <view class="match">
    <block v-if="list.length > 0">
      <view
        class="zuopin-recommend"
        v-for="(item, index) in list"
        :key="index"
        @tap="gameDetail(item.games.games_oid)"
      >
        <view class="zuopin-recommend-top">
          <view class="zuopin-recommend-mc"></view>
          <view class="zuopin-recommend-info">
            <view class="zuopin-recommend-info-left">
              {{ item.stats.visitor_cnt }}人正在参与
            </view>
            <view class="zuopin-recommend-info-rt">
              <view class="zuopin-recommend-info-item">{{
                item.stats.read_cnt
              }}</view>
              <view class="zuopin-recommend-info-item2">{{
                item.stats.works_cnt
              }}</view>
            </view>
          </view>
          <image
            mode="widthFix"
            :src="item.games.main_cover"
            :lazy-load="true"
          ></image>
          <view class="invite2">
            <text class="invite-btn2">立即参与</text>
          </view>
        </view>
        <view class="zuopin-recommend-bt">
          <view class="zuopin-recommend-title">{{ item.games.title }}</view>
          <view class="zuopin-recommend-desc">{{ item.games.subtitle }}</view>
        </view>
      </view>
    </block>
    <view v-else class="none-data">
      <image
        src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
        mode="aspectFill"
        class="none-img"
      ></image>
      <view>当前暂无信息哦～</view>
    </view>
  </view>
</template>

<script>
import { errortip, openPage } from "../../../utils/util";
import { guideList } from "../../../api/index.js";
import "./index.scss";
export default {
  name: "match",
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      loading: false,
      list: [],
    };
  },
  methods: {
    gameDetail(oid) {
      openPage("/packageActivity/pages/photography/index?game_oid=" + oid);
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
    query(type) {
      if (type == "init") this.pageNum = 1;
      this.guideList(
        {
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type
      );
    },
    async guideList(params, type) {
      try {
        let res = await guideList(params);
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
          this.list = this.list.concat(data);
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
