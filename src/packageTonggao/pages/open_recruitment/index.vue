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
        <view class="day">{{ item.valid_days }}天</view>
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
        <view class="open-btn" @tap="submit">立即开放</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { pushInit, subOpenRecruitment } from "../../../api/index";
import { errortip } from "../../../utils/util";
export default {
  name: "open_recruitment",
  data() {
    return {
      active: 0,
      coin: 50,
      balanceCoin: 0,
      oid: "",
      list: [],
    };
  },
  methods: {
    select(row, index) {
      this.coin = row.coin;
      this.active = index;
    },
    submit() {
      if (this.balanceCoin < this.coin) {
        errortip("余额不足");
        return false;
      }
      let params = {
        coin: this.coin,
        oid: this.oid,
        rule_code: this.list[this.active].rule_code,
        valid_days: this.list[this.active].valid_days,
      };
      this.subOpenRecruitment(params);
    },
    async pushInit(params) {
      try {
        let res = await pushInit(params);
        this.balanceCoin = res.data.data.acct_coin;
        this.list = res.data.data.rules_list;
        this.coin = res.data.data.rules_list[0].coin;
      } catch (error) {}
    },
    async subOpenRecruitment(params) {
      try {
        let res = await subOpenRecruitment(params);
        errortip("开放招募成功");
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({
          refresh: true,
        });
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    this.oid = options.oid;
    this.pushInit({
      oid: this.oid,
    });
  },
};
</script>

<style lang="scss" scoped></style>
