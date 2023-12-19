<template>
  <view class="withdrawal">
    <view class="withdrawal-box">
      <view class="withdrawal-title">
        <text class="withdrawal-lable-blod">提现至</text>
        <text class="withdrawal-tips">(请选择提现账户)</text>
      </view>
      <view class="withdrawal-select">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/select2_1.png"
        ></image>
        <text class="withdrawal-lable">微信钱包</text>
        <text class="withdrawal-tips">(立即到账)</text>
      </view>
    </view>
    <view class="withdrawal-box">
      <view class="withdrawal-title">
        <text class="withdrawal-lable-blod">提现金额</text>
      </view>
      <view class="withdrawal-input">
        <view class="unit">¥</view>
        <input
          placeholder="请输入提现金额"
          class="withdrawal-blance"
          v-model="blance"
        />
      </view>
      <view class="withdrawal-blance-tips">
        <text class="blance-tips">可提现余额¥{{ amount }}</text>
        <text class="full-withdrawal" @tap="fullWithdrawal">全部提现</text>
      </view>
    </view>
    <view class="immediate-withdrawal">
      <text class="submit" @tap="submit">立即提现</text>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { acctInfo, wxTransfer } from "../../../api/index.js";
import { errortip, openPage } from "../../../utils/util";
import clickThrottle from "../../../utils/clickThrottle";
export default {
  name: "withdrawal",
  data() {
    return {
      blance: "",
      amount: "",
      type: 0,
    };
  },
  methods: {
    fullWithdrawal() {
      this.blance = this.amount;
    },
    submit() {
      if (!clickThrottle()) return;
      this.wxTransfer({
        amount: Number(this.blance),
        acct_type: this.type ? "money" : "virtual",
      });
    },
    async acctInfo(params) {
      try {
        let res = await acctInfo(params);
        if (this.type == 1) {
          this.amount = res.data.data.wallet.money.amount;
        } else {
          this.amount = res.data.data.wallet.virtual.amount;
        }
      } catch (error) {}
    },
    async wxTransfer(params) {
      errortip("正在提现中，请耐心等待！");
      try {
        let res = await wxTransfer(params);
        openPage(
          "/packageVip/pages/withdrawalProgress/index?order_no=" +
            res.data.data.order_no
        );
      } catch (error) {}
    },
  },
  mounted() {
    this.acctInfo("");
  },
  onLoad: function (options) {
    if (options.type == 0) {
      this.type = options.type;
      wx.setNavigationBarTitle("佣金账户提现");
    }
    if (options.type == 1) {
      this.type = options.type;
      wx.setNavigationBarTitle("现金账户提现");
    }
  },
};
</script>

<style lang="scss" scoped></style>
