<template>
  <view class="wallet">
    <view class="wallet-top">
      <view class="wallet-account">
        <view class="total-balance">
          <text class="total-label">总余额</text>
          <text class="total-num">¥{{ wallet }}</text>
        </view>
        <view class="sub-account-box">
          <view class="sub-account">
            <view class="sub-account-label">现金账户</view>
            <view class="sub-account-num">{{ wallet_money }}元</view>
          </view>
          <view class="sub-account">
            <view class="sub-account-label">佣金账户</view>
            <view class="sub-account-num">{{ wallet_virtual }}元</view>
          </view>
        </view>
      </view>
      <view class="wallet-account-btns">
        <view class="recharge" @tap="goRechargeWallet">充值</view>
        <view class="withdrawal" @tap="goWithdrawal">提现</view>
      </view>
    </view>
    <view class="wallet-ct">
      <view class="tab">
        <view class="tab-item" :class="currentTab == 0 ? 'on' : ''"
          >钱包明细</view
        >
      </view>
      <view class="wallet-list">
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
                  <text class="task-title">{{ item.order_name }}</text>
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
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { acctInfo, walletOrder } from "../../../api/index.js";
import { openPage } from "../../../utils/util";
export default {
  name: "wallet",
  data() {
    return {
      currentTab: 0,
      wallet: 0,
      wallet_money: 0,
      wallet_virtual: 0,
      list: [],
    };
  },
  methods: {
    goWithdrawal() {
      openPage("/packageVip/pages/walletAccount/index");
    },
    goRechargeWallet() {
      openPage("/packageAdd/pages/user/rechargeWallet/index");
    },
    goWithdrawalProgress(order_no) {
      openPage(
        "/packageVip/pages/withdrawalProgress/index?order_no=" + order_no
      );
    },
    async acctInfo(params) {
      try {
        let res = await acctInfo(params);
        this.wallet = res.data.data.wallet.info.wallet;
        this.wallet_money = res.data.data.wallet.info.wallet_money;
        this.wallet_virtual = res.data.data.wallet.info.wallet_virtual;
      } catch (error) {}
    },
    async walletOrder(params) {
      try {
        let res = await walletOrder(params);
        this.list = res.data.data.items;
      } catch (error) {}
    },
  },
  mounted() {
    this.acctInfo("");
    this.walletOrder("");
  },
};
</script>

<style lang="scss" scoped></style>
