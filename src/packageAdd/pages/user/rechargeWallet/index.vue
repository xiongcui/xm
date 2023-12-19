<template>
  <view class="recharge-wallet">
    <view class="recharge-wallet-title">请选择充值金额</view>
    <view class="wallet-list">
      <view
        class="select-coin"
        :class="active === index ? 'active' : ''"
        @tap="selectTag(index)"
        v-for="(item, index) in list"
        :key="index"
      >
        <view v-if="item.input">
          <input
            placeholder="自定义"
            class="amount"
            v-model="item.value"
            type="number"
        /></view>
        <view v-else> {{ item.name }} </view>
      </view>
    </view>
    <view class="wallet-tips">
      <view class="wallet-p">*此金额将充值到您在本平台的【个人钱包】</view>
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
import { walletRecharge } from "../../../../api/index.js";
import { errortip } from "../../../../utils/util";
export default {
  name: "rechargeWallet",
  data() {
    return {
      active: "",
      isIphoneX: false,
      list: [
        {
          name: "100元",
          value: 100,
          active: false,
          input: false,
        },
        {
          name: "200元",
          value: 200,
          active: false,
          input: false,
        },
        {
          name: "500元",
          value: 500,
          active: false,
          input: false,
        },
        {
          name: "800元",
          value: 800,
          active: false,
          input: false,
        },
        {
          name: "1000元",
          value: 1000,
          active: false,
          input: false,
        },
        {
          active: false,
          input: true,
          value: "",
        },
      ],
    };
  },
  methods: {
    selectTag(index) {
      this.active = index;
    },
    submit() {
      let amount = this.list[this.active].value;
      let params = { amount: Number(amount) };
      this.walletRecharge(params);
    },
    async walletRecharge(params) {
      try {
        let res = await walletRecharge(params);
        let data = res.data.data;
        wx.requestPayment({
          timeStamp: data.result.timeStamp,
          nonceStr: data.result.nonceStr,
          package: data.result.package,
          signType: data.result.signType,
          paySign: data.result.paySign,
          success: function (res) {
            console.log(res, "成功了");
            errortip("充值成功");
          },
          fail: function (res) {},
          complete: function (res) {},
        });
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
};
</script>

<style lang="scss" scoped></style>
