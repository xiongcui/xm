<template>
  <view class="invite">
    <view class="invite-top"
      >已累计邀请{{ user_cnt }}人，获得{{ reward_amount }}元现金，获得{{
        reward_coin
      }}个金币</view
    >
    <view class="invite-list" v-if="list.length">
      <view class="invite-p">
        <view class="invite-item blod"> 邀请用户 </view>
        <view class="invite-item blod"> 获得金币 </view>
        <view class="invite-item blod"> 获得现金 </view>
        <view class="invite-item blod"> 邀请时间 </view>
      </view>
      <view class="invite-p" v-for="(item, index) in list" :key="index">
        <view class="invite-item"> {{ item.invitor_uuid }} </view>
        <view class="invite-item"> {{ item.reward_coin }} </view>
        <view class="invite-item"> {{ item.reward_amount }} </view>
        <view class="invite-item"> {{ item.create_time }} </view>
      </view>
    </view>
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
import "./index.scss";
import { inviteFriendsList } from "../../../../api/index";
import { errortip } from "../../../../utils/util";
export default {
  name: "invite",
  data() {
    return {
      list: [],
      user_cnt: 0,
      reward_coin: 0,
      reward_amount: 0,
      pageNum: 1,
      pageSize: 20,
      loading: false,
    };
  },
  methods: {
    queryList(type) {
      if (type == "init") this.pageNum = 1;
      this.inviteFriendsList(
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
      this.queryList("more");
    },
    async inviteFriendsList(params, type) {
      try {
        let res = await inviteFriendsList(params);
        //隐藏loading 提示框
        wx.hideLoading();

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();
        this.reward_amount = res.data.data.stats.reward_amount;
        this.reward_coin = res.data.data.stats.reward_coin;
        this.user_cnt = res.data.data.stats.user_cnt;
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
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading) {
      this.onMore();
    }
  },
  mounted() {
    this.queryList("init");
  },
};
</script>

<style lang="scss" scoped></style>
