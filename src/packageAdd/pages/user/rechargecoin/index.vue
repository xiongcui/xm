<template>
  <view>
    <view class="card">
      <view class="card-left">
        <view class="balance-title">金币余额</view>
        <view>
          <text class="balance">{{ coin }}</text>
          <text class="company">金币</text>
        </view>
      </view>
      <view class="card-rt">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/user/coin/coin-1.png"
        ></image>
      </view>
    </view>
    <view class="coin-list">
      <view
        class="select-coin"
        :class="active == index ? 'active' : ''"
        @tap="selectCoin(index)"
        v-for="(item, index) in list"
        :key="index"
      >
        <view> {{ item.coin }}金币 </view>
        <view> ¥{{ item.amount }}.00 </view>
        <text class="tag" v-if="item.discount">{{ item.discount }}折</text>
      </view>
    </view>
    <cover-view
      class="subbtn_bottom_block"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <cover-view class="subbtn_bottom">
        <button @tap="submit">立即充值</button>
      </cover-view>
    </cover-view>
  </view>
</template>

<script>
import "./index.scss";
import { coinStore, coinAcct } from "../../../../api/index";
import { errortip } from "../../../../utils/util";
export default {
  name: "rechargecoin",
  data() {
    return {
      active: 0,
      isIphoneX: false,
      coin: 0,
      list: [
        {
          amount: 98,
          coin: 100,
          discount: 0,
        },
        {
          amount: 198,
          coin: 240,
          discount: 8.5,
        },
        {
          amount: 298,
          coin: 400,
          discount: 7.5,
        },
        {
          amount: 398,
          coin: 600,
          discount: 6.5,
        },
      ],
    };
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.coinAcct("");
  },
  methods: {
    selectCoin(index) {
      this.active = index;
    },
    submit() {
      let amount = this.list[this.active].amount;
      let coin = this.list[this.active].coin;
      let params = { amount: amount, coin: coin };
      this.coinStore(params);
    },
    async coinAcct(params) {
      try {
        let res = await coinAcct(params);
        this.coin = res.data.data.wallet.info.wallet_money;
      } catch (error) {}
    },
    async coinStore(params) {
      try {
        let res = await coinStore(params);
        let data = res.data.data;
        let _this = this;
        wx.requestPayment({
          timeStamp: data.result.timeStamp,
          nonceStr: data.result.nonceStr,
          package: data.result.package,
          signType: data.result.signType,
          paySign: data.result.paySign,
          success: function (res) {
            console.log(res, "成功了");
            errortip("充值成功");
            _this.coinAcct("");
          },
          fail: function (res) {},
          complete: function (res) {},
        });
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped></style>
