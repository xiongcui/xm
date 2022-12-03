<template>
  <view>
    <form bindreset="reset" bindsubmit="sub" class="main" reportSubmit="true">
      <view class="line_gap"></view>
      <view class="address_info item">
        <view class="info_contact item_child bb1 ub">
          <view class="contact info_title">收件人</view>
          <view class="contact_value info_value ub-f1">
            <input
              cursorSpacing="10"
              maxlength="15"
              name="contact_name"
              placeholder="请填写收货人姓名"
              placeholderClass="value_placeholder"
              type="text"
              v-model="data.contact_name"
            />
          </view>
        </view>
        <view class="info_contact item_child bb1 ub">
          <view class="contact info_title">手机号码</view>
          <view class="contact_value info_value ub-f1">
            <input
              cursorSpacing="10"
              maxlength="15"
              name="contact_phone"
              placeholder="收货人手机号"
              placeholderClass="value_placeholder"
              type="number"
              v-model="data.phone"
            />
          </view>
        </view>
        <view class="info_contact item_child bb1 ub">
          <view class="contact info_title region_title">所属地区</view>
          <view class="region contact_value ub-f1 ub">
            <picker
              @change="bindRegionChange"
              class="ub-f1 region-picker"
              mode="region"
              v-model="region"
            >
              <view class="info_value" v-if="region.length">{{
                region_name
              }}</view>
              <view class="value_placeholder" v-else>选择省市区县、乡镇等</view>
            </picker>
          </view>
          <view class="gap_line">
            <image src="../../../../assets/images/user/index/right.png"></image>
          </view>
        </view>
        <view class="info_contact item_child ub">
          <view class="contact info_title">详细地址</view>
          <view class="contact_value">
            <textarea
              class="info_value"
              cols="30"
              disableDefaultPadding="true"
              name="contact_address"
              placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元室等"
              placeholderClass="value_placeholder"
              rows="10"
              v-model="data.address"
            ></textarea>
          </view>
        </view>
      </view>
      <view class="line_gap"></view>
      <view class="address_set item">
        <view class="set_lable item_child bb1 ub">
          <view class="set_title">地址标签</view>
          <view class="ub-f1"></view>
          <view class="ub">
            <view
              @tap="select_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in tags"
              :key="index"
            >
              {{ item.name }}</view
            >
          </view>
        </view>
        <view class="set_default item_child ub">
          <view class="set_title">设为默认地址</view>
          <view class="ub-f1"></view>
          <view class="check_btn">
            <switch
              bindchange="switch_selct"
              :checked="switch_selct"
              color="#fe5457"
            ></switch>
          </view>
        </view>
      </view>
      <view @tap="showModeldel" class="address_del" v-if="showDel"
        >删除收货地址</view
      >
      <view
        class="subbtn_bottom_block"
        :class="isIphoneX ? 'fix-iphonex-button' : ''"
      >
        <view class="subbtn_bottom">
          <button formType="submit">保存</button>
        </view>
      </view>
    </form>
    <view
      catchtap="closeModelPledge"
      class="modal-bg"
      v-if="showModel_del"
    ></view>
    <view class="model_box ub" v-if="showModel_del">
      <view class="ub-f1"></view>
      <view class="model_main">
        <view class="model_title">
          <view>确定要删除该地址吗？</view>
        </view>
        <view class="model_btn ub">
          <view class="ub-f1"></view>
          <view @tap="closeModel_del" class="btn_no">取消</view>
          <view class="ub-f1"></view>
          <view @tap="del_address" class="btn_yes">删除</view>
          <view class="ub-f1"></view>
        </view>
      </view>
      <view class="ub-f1"></view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "addressedit",
  data() {
    return {
      isIphoneX: false,
      data: {
        contact_name: "熊翠",
        phone: 13693628075,
      },
      tags: [
        {
          ispick: false,
          name: "家",
        },
        {
          ispick: false,
          name: "公司",
        },
        {
          ispick: false,
          name: "学校",
        },
      ],
      address: "惠新里223号楼",
      region_name: "",
      region: [],
      switch_selct: false,
      showModel_del: false,
      showDel: false,
    };
  },
  methods: {
    bindRegionChange(e) {
      this.region_name = e.detail.value.join("-");
      this.region = e.detail.code;
    },
    select_tag(row) {
      this.tags.map((item, idenx) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    showModeldel() {
      this.showModel_del = true;
    },
    closeModel_del() {
      this.showModel_del = false;
    },
    del_address() {
      this.showModel_del = false;
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
};
</script>

<style lang="scss" scoped></style>
