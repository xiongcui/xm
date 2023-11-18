<template>
  <view class="wallet">
    <view class="wallet-top">
      <view class="wallet-account">
        <view class="total-balance">
          <text class="total-label">总余额</text>
          <text class="total-num">¥200</text>
        </view>
        <view class="sub-account-box">
          <view class="sub-account">
            <view class="sub-account-label">现金账户</view>
            <view class="sub-account-num">150.00元</view>
          </view>
          <view class="sub-account">
            <view class="sub-account-label">佣金账户</view>
            <view class="sub-account-num">150.00元</view>
          </view>
        </view>
      </view>
      <view class="wallet-account-btns">
        <view class="recharge">充值</view>
        <view class="withdrawal">提现</view>
      </view>
    </view>
    <view class="wallet-ct">
      <view class="tab">
        <view class="tab-item" :class="currentTab == 0 ? 'on' : ''"
          >钱包明细</view
        >
      </view>
      <view class="wallet-list">
        <view class="detailed">
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
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "wallet",
  data() {
    return {
      currentTab: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
