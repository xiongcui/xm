<template>
  <!-- <import src="/common/templates/user_info_icon.wxml"></import> -->
  <!-- <view class="main_title ub">
    <view class="title_label">报名通告：</view>
    <view class="title_info ub-f1">{{ infor.tonggao_info.title }}</view>
  </view>
  <view class="item ub">
    <view
      catchtap="userShow"
      class="title_head_portrait"
      data-id="{{infor.user_info.user_id}}"
    >
      <image
        class="avatar {{infor.user_info.isvip?'avatar_vip':''}}"
        src="{{infor.user_info.avatar}}"
      ></image>
      <image
        class="icon_vips"
        src="/images/user/vip/icon_vips.png"
        wx:if="{{infor.user_info.isvip}}"
      ></image>
    </view>
    <view class="title_info ub-f1">
      <view class="info_content fl">
        <view class="info_name">{{ infor.user_info.nickname }}</view>
        <template
          is="ku_user_info_icon"
          data="{{item:infor.user_info}}"
        ></template>
      </view>
      <view class="title_info_lable fl">
        <view class="lable_identity fl-s0">{{ infor.user_info.identity }}</view>
        <view class="lable_vertical fl-s0"></view>
        <view class="lable_city fl-g1">{{ infor.user_info.city_name }}</view>
      </view>
    </view>
    <view class="title_other">
      <view
        catchtap="jubao"
        class="other_complain"
        data-id="{{infor.user_info.user_id}}"
        >投诉</view
      >
      <view class="other_time">{{ infor.reg_info.time_text }}</view>
    </view>
  </view>
  <view class="item">
    <view class="reg_title fl">
      <view class="title_icon"></view>
      <view class="title_text">对方报名信息</view>
    </view>
    <view class="item_content">
      <view class="content_item ub">
        <view class="content_title">报名备注：</view>
        <text class="content_text ub-f1">{{ infor.reg_info.content }}</text>
      </view>
      <view class="content_item ub" wx:if="{{infor.reg_info.price}}">
        <view class="content_title">本次报价：</view>
        <view class="content_text ub-f1">{{ infor.reg_info.price }}</view>
      </view>
      <view class="content_item ub" wx:if="{{infor.reg_info.show_hongren}}">
        <view class="content_title">红人账号：</view>
        <view class="content_info ub-f1">
          <view class="info_item ub">
            <view class="info_img">
              <image src="{{infor.reg_info.media_info.media_icon}}"></image>
            </view>
            <view class="info_text">{{
              infor.reg_info.media_info.nickname
            }}</view>
          </view>
          <view class="info_item">
            <view class="info_text"
              >粉丝数：{{ infor.reg_info.media_info.follow_count }}</view
            >
          </view>
          <view
            class="info_item"
            wx:for="{{infor.reg_info.media_info.extra}}"
            wx:key="index"
          >
            <view class="info_text">{{ item.key }}：{{ item.value }}</view>
          </view>
          <view class="info_item ub">
            <view class="info_text lh45">账号领域：</view>
            <view
              class="info_label mr8"
              wx:for="{{infor.reg_info.media_info.tags}}"
              wx:key="index"
              >{{ item.tag_name }}</view
            >
          </view>
        </view>
      </view>
      <view class="content_item ub" wx:if="{{infor.reg_info.show_address}}">
        <view class="content_title">收货地址：</view>
        <view class="content_info ub-f1">
          <view class="info_item ub">
            <view class="info_text"
              >收货人：{{ infor.reg_info.address.contact_name }}
            </view>
            <view class="ub-f1"></view>
            <view
              catchtap="copy"
              class="info_btn"
              data-value="{{infor.reg_info.address.full_address}}"
              >复制地址
            </view>
          </view>
          <view class="info_item">
            <view class="info_text"
              >手机号：{{ infor.reg_info.address.phone }}</view
            >
          </view>
          <view class="info_item ub">
            <view class="info_text w98">地址：</view>
            <view class="info_address ub-f1">{{
              infor.reg_info.address.full_address
            }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
  <view class="item">
    <view class="reg_title fl">
      <view class="title_icon"></view>
      <view class="title_text">对方联系方式</view>
    </view>
    <view class="item_content">
      <view class="content_item ub">
        <view class="content_title w156">联系人：</view>
        <view class="content_text ub-f1">{{
          infor.contact_info.contact_name
        }}</view>
      </view>
      <view class="content_item ub" wx:if="{{infor.contact_info.wxid}}">
        <view class="content_title w156">微信号：</view>
        <view class="content_text">{{ infor.contact_info.wxid }}</view>
        <view class="ub-f1"></view>
        <view
          catchtap="copy"
          class="content_text colorb"
          data-value="{{infor.contact_info.wxid}}"
          >复制</view
        >
      </view>
      <view class="content_item ub" wx:if="{{infor.contact_info.phone}}">
        <view class="content_title w156">手机号：</view>
        <view class="content_text">{{ infor.contact_info.phone }}</view>
        <view class="ub-f1"></view>
        <view
          catchtap="copy"
          class="content_text colorb"
          data-value="{{infor.contact_info.phone}}"
          >复制</view
        >
      </view>
      <view
        class="content_item ub"
        wx:if="{{infor.contact_info.wxid_qrcode_url}}"
      >
        <view class="content_title w156">微信二维码：</view>
        <view catchtap="showModel" class="content_text colorb"
          >点击查看二维码</view
        >
      </view>
    </view>
  </view>
  <view style="height: 240rpx"></view>
  <view class="bottom ub {{isIphoneX?'fix-iphonex-button':''}}">
    <block wx:if="{{infor.reg_info.progress_status==1}}">
      <view catchtap="setProgressNoFit" class="btn_item btn_unbefitting"
        >不合适</view
      >
      <view catchtap="setProgressFit" class="btn_item btn_have">合适</view>
    </block>
    <block wx:if="{{infor.reg_info.progress_status==2}}">
      <view catchtap="setProgressFail" class="btn_item btn_unbefitting"
        >未合作</view
      >
      <view catchtap="setProgresszSuccess" class="btn_item btn_have"
        >合作完成</view
      >
    </block>
    <view
      catchtap="setProgressResetFit"
      class="btn_big"
      wx:if="{{infor.reg_info.progress_status==3}}"
      >恢复待定</view
    >
    <view
      catchtap="setProgressRecover"
      class="btn_big"
      wx:if="{{infor.reg_info.progress_status==5}}"
      >恢复合适</view
    >
    <view
      catchtap="chat"
      class="btn_nowcontact {{infor.reg_info.progress_status==4?'lang_btn':''}}"
      data-userid="{{infor.user_info.user_id}}"
      >发起沟通</view
    >
  </view>
  <view catchtap="closeModel" class="modal-bg" wx:if="{{showModel}}"></view>
  <view class="model_box ub" wx:if="{{showModel}}">
    <view class="ub-f1"></view>
    <view class="model_main">
      <view class="model_title">
        <image
          catchtap="showWxQrcode"
          data-url="{{infor.contact_info.wxid_qrcode_url}}"
          mode="widthFix"
          src="{{infor.contact_info.wxid_qrcode_url}}"
        ></image>
      </view>
      <view catchtap="closeModel" class="model_close">关闭</view>
    </view>
    <view class="ub-f1"></view>
  </view> -->
</template>

<script>
import "./index.scss";
export default {
  name: "tgregreceiveshow",
  data() {
    return {
      infor: {},
    };
  },
};
</script>

<style lang="scss" scoped></style>
