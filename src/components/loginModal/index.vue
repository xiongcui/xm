<template>
  <view class="login-modal" v-if="visible">
    <view class="login-box">
      <view class="login-title"> 请先登录 </view>
      <view class="login-txt">完善以下信息以继续</view>
      <view class="login-info">
        <view class="phone" v-if="userInfo.phone"
          >手机号：{{ userInfo.phone }}</view
        >
        <view class="login-head">
          <button
            class="avatar-wrapper"
            open-type="chooseAvatar"
            @chooseavatar="onChooseAvatar"
          >
            <image class="avatar" :src="userInfo.avatar"></image>
          </button>
          <input
            type="nickname"
            class="weui-input"
            placeholder="请输入昵称"
            v-model="userInfo.nickname"
            @input="nicknameChange"
          />
        </view>
        <view class="get_phone" v-if="is_bind_phone == 0">
          <button
            @getphonenumber="onGetPhoneNumber"
            openType="getPhoneNumber"
            class="phone-btn"
          >
            授权绑定手机号
          </button>
        </view>
        <view class="get_avatar" v-else-if="is_bind_avatar == 0">
          <button
            class="avatar-btn"
            open-type="chooseAvatar"
            @chooseavatar="onChooseAvatar"
          >
            授权头像
          </button>
        </view>
        <view class="get_nickname" v-else-if="is_bind_nickname == 0">
          <view class="nickname-btn">授权昵称</view>
          <input
            type="nickname"
            class="nickname-input"
            v-model="userInfo.nickname"
            @input="nicknameChange"
          />
        </view>
        <view
          class="get_finish"
          v-if="
            is_bind_phone == 1 && is_bind_nickname == 1 && is_bind_avatar == 1
          "
          @tap="finishClick"
        >
          <view class="finish-btn">完成</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "loginModal",
};
</script>

<style lang="scss" scoped></style>
