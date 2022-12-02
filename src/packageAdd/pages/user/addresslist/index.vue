<template>
  <view class="main">
    <block v-for="(items, listIndex) in listdata" :key="listIndex">
      <view
        catchtap="chooseAddress"
        class="item ub"
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
      >
        <view class="address_info ub ub-ver">
          <view class="info_title ub">
            <view class="info_icon ub">
              <view class="icon_default icon_text" v-if="item.is_default == 1"
                >默认</view
              >
              <view class="icon_home icon_text" v-if="item.tag != ''">{{
                item.tag
              }}</view>
            </view>
            <view class="info_name">{{ item.contact_name }}</view>
            <view class="info_phone">{{ item.phone }}</view>
          </view>
          <view class="info_address"
            >{{ item.city_name }}{{ item.city_name }}{{ item.area_name
            }}{{ item.address }}</view
          >
        </view>
        <view catchtap="edit_address" class="edit_btn ub ub-ver">
          <view class="ub-f1"></view>
          <image src="../../../../assets/images/common/editbtn.png"></image>
          <view class="ub-f1"></view>
        </view>
      </view>
    </block>
    <view catchtap="add_address" class="add_address">
      <image src="../../../../assets/images/common/add_black.png"></image
      >添加新地址
    </view>
    <view class="loadingmore">
      <view v-if="showloadingmore">
        <!-- <image
          mode="widthFix"
          src="../../../../images/common/loading.gif"
        ></image> -->
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "addresslist",
  data() {
    return {
      listdata: [
        {
          items: {
            is_default: 1,
            tag: "家",
            contact_name: "熊翠",
            phone: 13693628075,
            city_name: "北京市",
            area_name: "朝阳区",
            address: "惠新里223号楼",
          },
        },
        {
          items: {
            is_default: 0,
            tag: "家",
            contact_name: "熊翠",
            phone: 13693628075,
            city_name: "北京市",
            area_name: "朝阳区",
            address: "惠新里223号楼",
          },
        },
      ],
      showloadingmore: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
