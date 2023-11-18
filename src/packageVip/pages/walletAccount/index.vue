<template>
  <view class="wallet-account">
    <view class="commission">
      <view class="commission-top">
        <view class="commission-title"> 佣金账户 </view>
        <view class="account-detail">查看明细 ></view>
      </view>
      <view class="commission-ct">
        <view class="commission-left">
          <view class="commission-price"> ¥89.00 </view>
          <view class="progress">
            <view class="progress-box">
              <view class="progress-circle"> </view>
              <text class="triangle"></text>
              <view class="progress-tips"> 差11元可提现 </view>
            </view>
          </view>
        </view>
        <view class="commission-right">
          <image
            src="https://yuepai-oss.qubeitech.com/invite/229919/c2e826f7-838c-11ee-8f5a-812b5b24112e-qa60.jpg!invite_list_square"
          ></image>
        </view>
      </view>
      <view class="commission-bt">
        <text class="commission-tips"> 佣金账户每满100元才能提现 </text>
        <text class="commission-btn">去赚佣金</text>
      </view>
    </view>
    <view class="commission">
      <view class="commission-top">
        <view class="commission-title"> 现金账户 </view>
        <view class="account-detail">查看明细 ></view>
      </view>
      <view class="cash">
        <view class="cash-price"> ¥150.00 </view>
        <view class="cash-btn"> 提现 </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "walletAccount",
};
</script>

<style lang="scss" scoped></style>
