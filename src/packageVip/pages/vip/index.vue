<template>
  <view class="vip-center">
    <view class="vip-bg">
      <view class="vip-card">
        <view class="card-left">
          <view class="card-left-info">
            <image class="headimg" :src="avatar"> </image>
            <view class="info-box">
              <view class="name">{{ nickname }}</view>
              <view class="vip-tips" v-if="!ismember"
                >暂未开通·会员尊享特权服务</view
              >
              <view class="vip-tips" v-else>{{ endtime }}到期</view>
            </view>
          </view>
          <view class="card-left-vipinfo">
            <view>尊享特权，每月25元</view>
            <!-- <view v-if="!ismember">开通会员，再得金豆</view> -->
          </view>
        </view>
        <view class="card-rt">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/user/vip/vip-card.png"
          ></image>
        </view>
      </view>
    </view>
    <view class="vip-package">
      <view class="package-list">
        <view
          class="package-box"
          :class="active == 0 ? 'active' : ''"
          @tap="packageClick(0, 49)"
        >
          <text class="month">1个月</text>
          <text class="amount"> <text class="company">¥</text>49</text>
          <text class="original-price">原价 ¥99</text>
          <text class="price-red">¥49/月</text>
          <text class="tag">限时</text>
        </view>
        <view
          class="package-box"
          :class="active == 1 ? 'active' : ''"
          @tap="packageClick(1, 119)"
        >
          <text class="month">3个月</text>
          <text class="amount"> <text class="company">¥</text>119</text>
          <text class="original-price">原价 ¥299</text>
          <text class="price-red">¥39/月</text>
          <text class="tag">送30金币</text>
        </view>
        <view
          class="package-box"
          :class="active == 2 ? 'active' : ''"
          @tap="packageClick(2, 299)"
        >
          <text class="month">1年</text>
          <text class="amount"> <text class="company">¥</text>299</text>
          <text class="original-price">原价 ¥599</text>
          <text class="price-red">¥25/月</text>
          <text class="tag">送100金币</text>
        </view>
      </view>
    </view>
    <view class="vip-privilege">
      <view class="privilege-list">
        <view class="privilege-box">
          <view class="service blod">专属特权</view>
          <view class="novip blod">普通用户</view>
          <view class="vip blod">会员用户</view>
        </view>
        <view class="privilege-box">
          <view class="service">专享在线私信</view>
          <view class="novip"
            ><image src="../../../assets/images/novip-icon.png"></image
          ></view>
          <view class="vip">
            <image src="../../../assets/images/vip-icon.png"></image>
          </view>
        </view>
        <view class="privilege-box">
          <view class="service">专享急速快联</view>
          <view class="novip"
            ><image src="../../../assets/images/novip-icon.png"></image
          ></view>
          <view class="vip">
            <image src="../../../assets/images/vip-icon.png"></image>
          </view>
        </view>
        <view class="privilege-box">
          <view class="service">尊享身份标识</view>
          <view class="novip"
            ><image src="../../../assets/images/novip-icon.png"></image
          ></view>
          <view class="vip">
            <image src="../../../assets/images/vip-icon.png"></image>
          </view>
        </view>
        <view class="privilege-box">
          <view class="service">等级加速成长</view>
          <view class="novip"
            ><image src="../../../assets/images/novip-icon.png"></image
          ></view>
          <view class="vip">
            <image src="../../../assets/images/vip-icon.png"></image>
          </view>
        </view>
        <view class="privilege-box">
          <view class="service">签到次数限制</view>
          <view class="novip">有上线</view>
          <view class="vip">无上限</view>
        </view>
        <view class="privilege-box">
          <view class="service">约拍自动刷新</view>
          <view class="novip">5金币/次</view>
          <view class="vip">自动刷新/天</view>
        </view>
        <view class="privilege-box">
          <view class="service">申请约拍报名</view>
          <view class="novip">5金币</view>
          <view class="vip">3金币</view>
        </view>
      </view>
    </view>
    <view
      class="subbtn_bottom_block"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <view class="subbtn_bottom">
        <button @tap="submit" v-if="active == 0" :key="0">
          {{ `立即以${price}元${ismember ? "续费" : "开通"}` }}
        </button>
        <button @tap="submit" v-if="active == 1" :key="1">
          {{ `立即以${price}元${ismember ? "续费" : "开通"}` }}
        </button>
        <button @tap="submit" v-if="active == 2" :key="2">
          {{ `立即以${price}元${ismember ? "续费" : "开通"}` }}
        </button>
        <text class="tagcoin" v-if="coin > 0"
          >{{ ismember ? "续费" : "开通" }}可得{{ coin }}金币</text
        >
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { memberOpen, memberInfo } from "../../../api/index";
import { errortip } from "../../../utils/util";
export default {
  name: "vip",
  data() {
    return {
      isIphoneX: false,
      active: 1,
      coin: 30,
      price: 119,
      time: {
        0: 1,
        1: 3,
        2: 12,
      },
      nickname: "",
      avatar: "",
      ismember: 0,
      endtime: "",
    };
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.memberInfo("");
  },
  methods: {
    packageClick(active, price) {
      this.active = active;
      this.price = price;
      if (active == 0) {
        this.coin = 0;
      }
      if (active == 1) {
        this.coin = 30;
      }
      if (active == 2) {
        this.coin = 100;
      }
    },
    async memberOpen(params) {
      try {
        let res = await memberOpen(params);
        let data = res.data.data;
        wx.requestPayment({
          timeStamp: data.result.timeStamp,
          nonceStr: data.result.nonceStr,
          package: data.result.package,
          signType: data.result.signType,
          paySign: data.result.paySign,
          success: function (res) {
            console.log(res, "成功了");
            errortip(!this.ismember ? "开通成功" : "续费成功");
            wx.navigateBack({
              delta: 1,
            });
          },
          fail: function (res) {},
          complete: function (res) {},
        });
      } catch (error) {}
    },
    async memberInfo(params) {
      try {
        let res = await memberInfo(params);
        this.avatar = res.data.data.member.avatar
          ? res.data.data.member.avatar
          : "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png";
        this.nickname = res.data.data.member.nickname;
        this.ismember = res.data.data.member.is_member;
        this.endtime = res.data.data.member.end_time;
      } catch (error) {}
    },
    submit() {
      let params = {
        amount: Number(this.price),
        valid_time: this.time[this.active],
        valid_time_unit: "M",
        coin: this.coin,
      };
      console.log(params);
      this.memberOpen(params);
    },
  },
};
</script>

<style lang="scss" scoped></style>
