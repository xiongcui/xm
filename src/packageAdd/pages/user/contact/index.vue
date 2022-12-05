<template>
  <view class="main">
    <form bindreset="reset" bindsubmit="sub" reportSubmit="true">
      <view class="contact_info">
        <view class="item line-b ub" v-if="from_page == 'addtonggao'">
          <view class="contact_info_title">我的联系方式</view>
          <view class="contact_info_title_tip">（仅报名者可见）</view>
        </view>
        <view class="item line-b ub" v-if="from_page == 'tonggaoreg'">
          <view class="contact_info_title">我的联系方式</view>
        </view>
        <view class="item line-b ub">
          <view class="item_title">联系人</view>
          <view class="ub-f1 item_input">
            <input
              maxlength="60"
              name="contact_name"
              placeholder="请输入联系人姓名"
              placeholderClass="input-placeholder"
              type="text"
              v-model="contact_name"
            />
          </view>
        </view>
        <view class="item line-b ub">
          <view class="item_title">微信号</view>
          <view class="ub-f1"></view>
          <view class="item_switch">
            <switch
              catchtap="switch_selct"
              :checked="info.show_wxid == 1 ? true : false"
              class="btn_switch"
              data-type="1"
            ></switch>
          </view>
        </view>
        <view class="item line-b" v-if="info.show_wxid == 1">
          <view class="item_input">
            <input
              name="wxid"
              placeholder="请输入微信号"
              placeholderClass="input-placeholder"
              type="text"
              v-model="wxid"
            />
          </view>
        </view>
        <view class="item line-b ub">
          <view class="item_title">手机号</view>
          <view class="ub-f1"></view>
          <view class="item_switch">
            <switch
              catchtap="switch_selct"
              :checked="info.show_phone == 1 ? true : false"
              class="btn_switch"
              data-type="2"
            ></switch>
          </view>
        </view>
        <view class="item line-b" v-if="info.show_phone == 1">
          <view class="item_input">
            <button
              bindgetphonenumber="changePhone"
              class="change_phone_btn"
              openType="getPhoneNumber"
            >
              {{ info.phone }}
            </button>
          </view>
        </view>
        <view class="item ub">
          <view class="item_title item_title_qrcode">微信名片二维码</view>
          <view class="ub-f1"></view>
          <view class="imgsblock">
            <view class="imgs">
              <view
                catchtap="chooesImage"
                class="preview_img"
                v-if="img_qrcode"
              >
                <image
                  catchtap="showbig"
                  mode="aspectFill"
                  :src="img_qrcode"
                ></image>
                <view catchtap="delete_preview" class="preview_delet">
                  <image
                    mode="scaleToFill"
                    src="../../../../assets/images/common/icon_sizer_close.png"
                  ></image>
                </view>
              </view>
              <view bindtap="chooesImage" class="pick_img" wx:else>
                <image
                  src="../../../../assets/images/common/img_add.png"
                ></image>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="sub_btn">
        <button formType="submit">保 存</button>
      </view>
    </form>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "contact",
};
</script>

<style lang="scss" scoped></style>
