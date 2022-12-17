<template>
  <view class="vip-center">
    <view class="vip-bg"> </view>
    <view class="vip-card">
      <view class="card-left">
        <view class="card-left-info">
          <image
            class="headimg"
            src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/photo/L3cNKAhF/89ca4714-67f4-11ed-ae45-473a871aac32.png"
          >
          </image>
          <view class="info-box">
            <view class="name">昵称</view>
            <view class="vip-tips">会员尚未开通</view>
          </view>
        </view>
        <view class="card-left-vipinfo">
          <view>¥49/月起</view>
          <view>开通会员，再得金豆</view>
        </view>
      </view>
      <view class="card-rt">
        <image src="../../../assets/images/user/vip/vip-card.png"></image>
        <text>会员权限设置</text>
      </view>
    </view>
    <view class="vip-icon-list">
      <view class="vip-icon">
        <image src="../../../assets/images/user/vip/user.png"></image>
        <text>查看访客</text>
      </view>
      <view class="vip-icon">
        <image src="../../../assets/images/user/vip/qiandao.png"></image>
        <text>无限签到</text>
      </view>
      <view class="vip-icon">
        <image src="../../../assets/images/user/vip/baojing.png"></image>
        <text>免担保金</text>
      </view>
      <view class="vip-icon">
        <image src="../../../assets/images/user/vip/tuijian.png"></image>
        <text>优先推荐</text>
      </view>
      <view class="vip-icon">
        <image src="../../../assets/images/user/vip/fuli.png"></image>
        <text>会员福利</text>
      </view>
    </view>
    <view class="vip-package">
      <view class="vip-title">/ 会员套餐推荐 /</view>
      <view class="package-list">
        <view class="package-box">
          <text class="month">1个月</text>
          <text class="amount"> <text class="company">¥</text>49</text>
          <text class="original-price">原价 ¥99</text>
          <text class="price-red">¥49/月</text>
          <text class="tag">限时</text>
        </view>
        <view class="package-box active">
          <text class="month">3个月</text>
          <text class="amount"> <text class="company">¥</text>119</text>
          <text class="original-price">原价 ¥299</text>
          <text class="price-red">¥39/月</text>
          <text class="tag">送30金币</text>
        </view>
        <view class="package-box">
          <text class="month">1年</text>
          <text class="amount"> <text class="company">¥</text>299</text>
          <text class="original-price">原价 ¥599</text>
          <text class="price-red">¥25/月</text>
          <text class="tag">送150金币</text>
        </view>
      </view>
    </view>
    <view class="vip-privilege">
      <view class="vip-title">/ 会员尊享特权 /</view>
      <view class="privilege-list">
        <view class="privilege-box">
          <view class="service blod">特权服务</view>
          <view class="vip blod">会员</view>
          <view class="novip blod">非会员</view>
        </view>
        <view class="privilege-box">
          <view class="service">查看访客记录</view>
          <view class="vip">
            <image src="../../../assets/images/common/sucess.png"></image>
          </view>
          <view class="novip"
            ><image src="../../../assets/images/common/tip_fail.png"></image
          ></view>
        </view>
        <view class="privilege-box">
          <view class="service">免信用担保金</view>
          <view class="vip">
            <image src="../../../assets/images/common/sucess.png"></image>
          </view>
          <view class="novip"
            ><image src="../../../assets/images/common/tip_fail.png"></image
          ></view>
        </view>
        <view class="privilege-box">
          <view class="service">发起沟通特权</view>
          <view class="vip">
            <image src="../../../assets/images/common/sucess.png"></image>
          </view>
          <view class="novip"
            ><image src="../../../assets/images/common/tip_fail.png"></image
          ></view>
        </view>
        <view class="privilege-box">
          <view class="service">优先推荐特权</view>
          <view class="vip">
            <image src="../../../assets/images/common/sucess.png"></image>
          </view>
          <view class="novip"
            ><image src="../../../assets/images/common/tip_fail.png"></image
          ></view>
        </view>
        <view class="privilege-box">
          <view class="service">签到次数上限</view>
          <view class="vip">无上限</view>
          <view class="novip">有上线</view>
        </view>
        <view class="privilege-box">
          <view class="service">约拍报名消耗</view>
          <view class="vip">3金币</view>
          <view class="novip">5金币</view>
        </view>
        <view class="privilege-box">
          <view class="service">通告报名消耗</view>
          <view class="vip">3金币</view>
          <view class="novip">5金币</view>
        </view>
      </view>
    </view>
    <cover-view
      class="subbtn_bottom_block"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <cover-view class="subbtn_bottom">
        <button @tap="submit">立即以119元开通</button>
      </cover-view>
    </cover-view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "vip",
  data() {
    return {
      isIphoneX: false,
    };
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
};
</script>

<style lang="scss" scoped></style>
