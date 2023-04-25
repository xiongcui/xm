<template>
  <view class="main">
    <view
      @tap="chooseAddress(item)"
      class="item ub"
      :class="oid == item.oid ? 'address_active' : ''"
      v-for="(item, itemIndex) in listdata"
      :key="itemIndex"
    >
      <view class="address_info ub ub-ver">
        <view class="info_title ub">
          <view class="info_icon ub">
            <view class="icon_default icon_text" v-if="item.is_default == 1"
              >默认</view
            >
            <view class="icon_home icon_text" v-if="item.label != ''">{{
              item.label
            }}</view>
          </view>
          <view class="info_name">{{ item.name }}</view>
          <view class="info_phone">{{ item.mobile }}</view>
        </view>
        <view class="info_address">{{ item.detail_address }}</view>
      </view>
      <view @tap.stop="edit_address(item.oid)" class="edit_btn ub ub-ver">
        <view class="ub-f1"></view>
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/editbtn.png"
        ></image>
        <view class="ub-f1"></view>
      </view>
    </view>
    <view @tap="add_address" class="add_address">
      <image
        src="https://yuepai-oss.qubeitech.com/static/images/common/add_black.png"
      ></image
      >添加新地址
    </view>
    <!-- <view class="loadingmore">
      <view v-if="showloadingmore">
        <image
          mode="widthFix"
          src="../../../../images/common/loading.gif"
        ></image> 
      </view>
    </view> -->
  </view>
</template>

<script>
import "./index.scss";
import { addressList } from "../../../../api/index";
import { openPage } from "../../../../utils/util";
export default {
  name: "addresslist",
  data() {
    return {
      oid: "",
      listdata: [],
      showloadingmore: false,
    };
  },
  methods: {
    edit_address(oid) {
      openPage("/packageAdd/pages/user/addressedit/index?oid=" + oid);
    },
    add_address() {
      openPage("/packageAdd/pages/user/addressedit/index");
    },
    chooseAddress(row) {
      let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
      let prevPage = pages[pages.length - 2];
      prevPage.setData({
        address: row,
      });
      wx.navigateBack({
        delta: 1,
      });
    },
    async addressList(params) {
      try {
        let res = await addressList(params);
        if (res.data.data) {
          this.listdata = res.data.data;
        } else {
          this.listdata = [];
        }
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    this.oid = options.oid;
  },
  onShow() {
    this.addressList("");
  },
};
</script>

<style lang="scss" scoped></style>
