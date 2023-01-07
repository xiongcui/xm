<template>
  <view class="ub ub-ver main">
    vip
    <!-- <view class="block_user" v-if="!infor.isvip">
      <view class="user_infor ub">
        <view class="avatar">
          <image mode="aspectFit" :src="infor.user.avatar"></image>
        </view>
        <view class="ub-f1">
          <view class="user_name"> {{ infor.user.nickname }} </view>
          <view class="user_tip">开通会员享更多权益</view>
        </view>
      </view>
    </view>
    <view class="block_vipcard" v-else>
      <view class="vipcard">
        <view class="vipcard_icon_vipbg">
          <image
            mode="widthFix"
            src="../../assets/images/user/vip/vip_bg.png"
          ></image>
        </view>
        <view class="vipcard_user ub">
          <view class="vipcard_avatar">
            <image mode="aspectFit" :src="infor.user.avatar"></image>
          </view>
          <view class="vipcard_infor ub-f1">
            <view class="vipcard_user_name"> {{ infor.user.nickname }}</view>
            <view class="vipcard_endtime"> {{ infor.vip.endtime }} 到期</view>
          </view>
          <view class="vipcardpay">
            <view catchtap="onPay" class="vipcardpaybtn">立即续费</view>
          </view>
        </view>
      </view>
    </view>
    <view class="block_items">
      <view class="items_title">麻豆约拍会员</view>
      <view class="ub">
        <view class="side_gap"></view>
        <view
          catchtap="selectItem"
          class="item payitem==payitems['0'].item_id?'item_selected':''"
          data-index="0"
        >
          <view class="item_free_coin" v-if="payitems['0'].free_coin"
            >送 payitems["0"].free_coin 麻豆</view
          >
          <view class="item_coin"> payitems["0"].title </view>
          <view class="item_price">¥ payitems["0"].price </view>
          <view class="item_price_original"
            >原价¥ payitems["0"].price_original
          </view>
        </view>
        <view class="ub-f1"></view>
        <view
          catchtap="selectItem"
          class="item payitem==payitems['1'].item_id?'item_selected':''"
          data-index="1"
        >
          <view class="item_free_coin" v-if="payitems['1'].free_coin"
            >送 payitems["1"].free_coin 麻豆</view
          >
          <view class="item_coin"> payitems["1"].title </view>
          <view class="item_price">¥ payitems["1"].price </view>
          <view class="item_price_original"
            >原价¥ payitems["1"].price_original
          </view>
        </view>
        <view class="ub-f1"></view>
        <view
          catchtap="selectItem"
          class="item payitem==payitems['2'].item_id?'item_selected':''"
          data-index="2"
        >
          <view class="item_free_coin" v-if="payitems['2'].free_coin"
            >送 payitems["2"].free_coin 麻豆</view
          >
          <view class="item_coin"> payitems["2"].title </view>
          <view class="item_price">¥ payitems["2"].price </view>
          <view class="item_price_original"
            >原价¥ payitems["2"].price_original
          </view>
        </view>
        <view class="side_gap"></view>
      </view>
    </view>
    <view class="block_rights">
      <view class="items_title">会员权益</view>
      <view class="ub">
        <view class="side_gap"></view>
        <view class="ub-f1 ub">
          <view class="right_tag">
            <view class="right_tag_icon">
              <image
                mode="widthFix"
                src="../../assets/images/user/vip/right_tag1.png"
              ></image>
            </view>
            <view class="right_tag_text">会员福利</view>
          </view>
          <view class="ub-f1"></view>
          <view class="right_tag">
            <view class="right_tag_icon">
              <image
                mode="widthFix"
                src="../../assets/images/user/vip/right_tag2.png"
              ></image>
            </view>
            <view class="right_tag_text">免担保金</view>
          </view>
          <view class="ub-f1"></view>
          <view class="right_tag">
            <view class="right_tag_icon">
              <image
                mode="widthFix"
                src="../../assets/images/user/vip/right_tag3.png"
              ></image>
            </view>
            <view class="right_tag_text">每日可签到</view>
          </view>
          <view class="ub-f1"></view>
          <view class="right_tag">
            <view class="right_tag_icon">
              <image
                mode="widthFix"
                src="../../assets/images/user/vip/right_tag4.png"
              ></image>
            </view>
            <view class="right_tag_text">会员标识</view>
          </view>
        </view>
        <view class="side_gap"></view>
      </view>
      <view style="clear: both"></view>
      <view class="right_list right_list1 ub">
        <view class="right_list_gap"></view>
        <view class="right_list_main">
          <view class="ub">
            <view class="right_item right_item1 right_item_title"
              >服务权益</view
            >
            <view class="right_item right_item_title">非会员</view>
            <view class="right_item right_item3 right_item_title">会员</view>
          </view>
          <view class="ub" v-for="infor.vip_intro" v-key="id">
            <block v-if="item.type == 1">
              <view class="right_item right_item1"> item.name </view>
              <view class="right_item"> item.vip_not </view>
              <view class="right_item right_item3"> item.vip </view>
            </block>
          </view>
        </view>
        <view class="right_list_gap"></view>
      </view>
      <view style="clear: both"></view>
      <view class="right_list ub">
        <view class="right_list_gap"></view>
        <view class="right_list_main ub-f1">
          <view class="ub">
            <view class="right_item right_item1 right_item_title"
              >麻豆权益</view
            >
            <view class="right_item right_item_title">非会员</view>
            <view class="right_item right_item3 right_item_title">会员</view>
          </view>
          <view class="ub" v-for="infor.vip_intro" v-key="id">
            <block v-if="item.type == 2">
              <view class="right_item right_item1"> item.name </view>
              <view class="right_item"> item.vip_not </view>
              <view class="right_item right_item3"> item.vip </view>
            </block>
          </view>
        </view>
        <view class="right_list_gap"></view>
      </view>
    </view>
    <view class="bottom_ads">
      <image mode="widthFix" src="/images/common/mdyp_ad.png"></image>
    </view>
    <view class="addbtn isIphoneX?'fix-iphonex-button':''" v-if="!infor.isvip">
      <button catchtap="onPay">立即开通 payitem_title 会员</button>
    </view>
    <view class="addbtn isIphoneX?'fix-iphonex-button':''" v-else>
      <button catchtap="onPay">立即续费 payitem_title 会员</button>
    </view> -->
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "vip",
  data() {
    return {
      infor: {
        isvip: false,
        user: {
          avatar: "",
          nickname: "",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
