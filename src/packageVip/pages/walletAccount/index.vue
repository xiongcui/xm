<template>
  <view class="wallet-account">
    <view class="commission">
      <view class="commission-top">
        <view class="commission-title"> 佣金账户 </view>
        <view class="account-detail" @tap="goDetail(0)">查看明细 ></view>
      </view>
      <view class="commission-ct">
        <view class="commission-left">
          <view class="commission-price"> ¥{{ virtual.amount }} </view>
          <view class="progress">
            <view
              class="progress-box"
              :style="{
                left: virtual.take_amount_prog * 100 + '%',
              }"
            >
              <view class="progress-circle">
                <view
                  class="progress-tips"
                  :style="{
                    left: virtual.take_amount_prog <= 0.1 ? '30px' : '0px',
                  }"
                  v-if="virtual.take_amount_prog < 0.7"
                >
                  差{{ virtual.take_amount_diff }}元可提现
                  <text class="triangle"></text>
                </view>
                <view
                  class="progress-tips"
                  v-if="
                    virtual.take_amount_prog >= 0.7 &&
                    virtual.take_amount_prog <= 0.9
                  "
                  :style="{
                    left: '-50px',
                  }"
                >
                  差{{ virtual.take_amount_diff }}元可提现
                  <text class="triangle"></text>
                </view>
                <view
                  class="progress-tips"
                  v-if="
                    virtual.take_amount_prog >= 0.9 &&
                    virtual.take_amount_prog <= 1
                  "
                  :style="{
                    left: '-80px',
                  }"
                >
                  差{{ virtual.take_amount_diff }}元可提现
                  <text class="triangle"></text>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="commission-right">
          <view class="commission-price-box">
            <text class="symbol">¥</text>
            <text class="price">{{ virtual.next_take_amount }}</text>
            <text class="unit">元</text>
          </view>
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/weChat-withdrawal.png"
          ></image>
        </view>
      </view>
      <view class="commission-bt">
        <view class="commission-bt-item">
          <text class="commission-tips"> 佣金收入达到100元及以上即可提现 </text>
          <text class="commission-btn2" @tap="withdrawal(0)">提现</text>
        </view>
        <view class="commission-bt-item">
          <text class="commission-tips"> 佣金提现金额必须是100元的整数倍 </text>
          <text class="commission-btn" @tap="inviteFriends">去赚佣金</text>
        </view>
      </view>
    </view>
    <view class="commission">
      <view class="commission-top">
        <view class="commission-title"> 现金账户 </view>
        <view class="account-detail" @tap="goDetail(1)">查看明细 ></view>
      </view>
      <view class="cash">
        <view class="cash-price"> ¥{{ amount }} </view>
        <view class="cash-btn" @tap="withdrawal(1)"> 提现 </view>
      </view>
    </view>
    <!--弹出框-->
    <view
      class="commission-modal"
      v-if="commissionVisible"
      @tap="commissionClose"
    >
      <view class="commission-ct">
        <button open-type="share" class="share-btn">
          <image
            @tap.stop="inviteFriends"
            src="https://yuepai-oss.qubeitech.com/static/images/withdrawal-tips.png"
            mode="widthFix"
          ></image>
        </button>
      </view>
    </view>
    <!--弹出框-->
  </view>
</template>

<script>
import { openPage } from "../../../utils/util";
import "./index.scss";
import { acctInfo, shareInvite, shareInviteInfo } from "../../../api/index.js";
export default {
  name: "walletAccount",
  data() {
    return {
      commissionVisible: false,
      virtual: {
        amount: 0,
        next_take_amount: 0,
        take_amount: 0,
        take_amount_diff: 0,
        take_amount_prog: 0,
        take_amount_auth: 0,
      },
      amount: 0,
      shareTitle: "",
      shareImg: "",
      sharePath: "",
    };
  },
  methods: {
    goDetail(type) {
      openPage("/packageVip/pages/accounDetails/index?type=" + type);
    },
    inviteFriends() {
      openPage("/packageAdd/pages/user/inviteGift/index");
    },
    withdrawal(type) {
      if (type == 0 && this.virtual.take_amount_auth == 0) {
        this.commissionVisible = true;
        return false;
      }
      openPage("/packageVip/pages/withdrawal/index?type=" + type);
    },
    commissionClose() {
      this.commissionVisible = false;
    },
    async acctInfo(params) {
      try {
        let res = await acctInfo(params);
        this.virtual = res.data.data.wallet.virtual;
        this.amount = res.data.data.wallet.money.amount;
      } catch (error) {}
    },
    async shareInvite(params) {
      try {
        let res = await shareInvite(params);
      } catch (error) {}
    },
    async shareInviteInfo(params) {
      try {
        let res = await shareInviteInfo(params);
        this.shareTitle = res.data.data.title;
        this.shareImg = res.data.data.imageUrl;
        this.sharePath = res.data.data.path;
      } catch (error) {}
    },
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_friend",
      type: "wechat",
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onShareTimeline() {
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  mounted() {
    this.acctInfo("");
    this.shareInviteInfo({
      source: "share_friend",
      type: "wechat",
    });
  },
};
</script>

<style lang="scss" scoped></style>
