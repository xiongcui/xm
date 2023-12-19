<template>
  <view class="account-details">
    <view class="account-box">
      <view class="detailed" v-if="list.length">
        <view class="detailed-list">
          <view
            class="coin-task"
            v-for="(item, index) in list"
            :key="index"
            @tap="goWithdrawalProgress(item.order_no)"
          >
            <view class="task-info">
              <view class="task-info-box">
                <text class="task-title">
                  <text>{{ item.order_name }}</text>
                  <text
                    class="task-status"
                    v-if="item.order_status_desc == 'transfer'"
                    >等待审核></text
                  >
                </text>
                <view class="task-num">{{ item.curr_amount }}</view>
              </view>
              <view class="task-tips"
                ><text>{{ item.create_time }}</text>
                <text>余额：{{ item.bala_amount }}</text></view
              >
            </view>
          </view>
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
      <!-- <view class="detailed">
        <view class="detailed-list">
          <view class="coin-task">
            <view class="task-info">
              <view class="task-info-box">
                <text class="task-title">标题标题标题</text>
                <view class="task-num">+10.00</view>
              </view>
              <view class="task-tips"
                ><text>2023-2-3 17:30:00</text> <text>余额：10.00</text></view
              >
            </view>
          </view>
        </view>
      </view> -->
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { walletOrder } from "../../../api/index.js";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "accountDetails",
  data() {
    return {
      type: "virtual",
      list: [],
      pageNum: 1,
      pageSize: 20,
      loading: false,
    };
  },
  methods: {
    goWithdrawalProgress(order_no) {
      openPage(
        "/packageVip/pages/withdrawalProgress/index?order_no=" + order_no
      );
    },
    queryList(type) {
      if (type == "init") this.pageNum = 1;
      this.walletOrder(
        {
          acct_type: this.type,
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
    async walletOrder(params, type) {
      try {
        let res = await walletOrder(params);
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
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading) {
      this.onMore();
    }
  },
  onLoad: function (options) {
    // 参数：acct_type（现金账户：money， virtual：虚拟钱包，不传值的时候返回全部）
    if (options.type == 1) {
      this.type = "money";
      wx.setNavigationBarTitle("现金账户明细");
    }
    if (options.type == 0) {
      this.type = "virtual";
      wx.setNavigationBarTitle("佣金账户明细");
    }
    this.queryList("init");
  },
};
</script>

<style lang="scss" scoped></style>
