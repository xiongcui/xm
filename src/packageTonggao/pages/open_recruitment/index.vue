<template>
  <view class="open-box">
    <view class="open-title"> 您将展示火爆通告 </view>
    <view class="open-desc">该通告竞争激烈，需要支付费用才可展示</view>
    <view class="open-list">
      <view
        class="open-item"
        :class="active == index ? 'active' : ''"
        v-for="(item, index) in list"
        :key="index"
        @tap="select(item, index)"
      >
        <view class="day">{{ item.day }}天</view>
        <view>{{ item.coin }}金币/通告</view>
      </view>
    </view>
    <view class="open-tips">
      温馨提示：通告发布价格根据地区、职类、平台差异有所不同
    </view>
    <view class="open-bottom">
      <view class="open-bottom-left">
        <view class="coin"> {{ coin }}金币</view>
        <view>剩余：{{ balanceCoin }}金币</view>
      </view>
      <view class="open-bottom-rt">
        <view class="open-btn">立即开放</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "open_recruitment",
  data() {
    return {
      active: 0,
      coin: 70,
      balanceCoin: 0,
      list: [
        {
          day: 7,
          coin: 70,
        },
        {
          day: 15,
          coin: 130,
        },
        {
          day: 30,
          coin: 250,
        },
        {
          day: 60,
          coin: 450,
        },
      ],
    };
  },
  methods: {
    select(row, index) {
      this.coin = row.coin;
      this.active = index;
    },
  },
};
</script>

<style lang="scss" scoped></style>
