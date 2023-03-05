<template>
  <view>
    <view class="main">
      <view class="line_gap"></view>
      <view class="address_info item">
        <view class="info_contact item_child bb1 ub">
          <view class="contact info_title">收件人</view>
          <view class="contact_value info_value ub-f1">
            <input
              cursorSpacing="10"
              maxlength="15"
              name="name"
              placeholder="请填写收货人姓名"
              placeholderClass="value_placeholder"
              type="text"
              v-model="data.name"
            />
          </view>
        </view>
        <view class="info_contact item_child bb1 ub">
          <view class="contact info_title">手机号码</view>
          <view class="contact_value info_value ub-f1">
            <input
              cursorSpacing="10"
              maxlength="15"
              name="mobile"
              placeholder="收货人手机号"
              placeholderClass="value_placeholder"
              type="number"
              v-model="data.mobile"
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
            >
              <view class="info_value" v-if="data.addressName.length">{{
                data.addressName
              }}</view>
              <view class="value_placeholder" v-else>选择省市区县、乡镇等</view>
            </picker>
          </view>
          <view class="gap_line">
            <image
              src="https://yuepai-oss.qubeitech.com/static/user/index/right.png"
            ></image>
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
              v-model="data.detail"
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
              @change="switch_selct"
              :checked="data.is_default"
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
          <button @tap="submit">保存</button>
        </view>
      </view>
    </view>
    <view @tap="closeModel_del" class="modal-bg" v-if="showModel_del"></view>
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
import { submitAddress, addressInfo } from "../../../../api/index";
import { errortip } from "../../../../utils/util";
export default {
  name: "addressedit",
  data() {
    return {
      isIphoneX: false,
      oid: "",
      data: {
        name: "",
        mobile: "",
        addressName: "",
        address: "",
        detail: "",
        label: "",
        is_default: false,
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
      showModel_del: false,
      showDel: true,
    };
  },
  methods: {
    switch_selct(e) {
      this.data.is_default = e.detail.value;
    },
    bindRegionChange(e) {
      this.data.addressName = e.detail.value.join("-");
      this.data.address = e.detail.code;
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
      this.deleteAddress({
        oid: this.oid,
        is_delete: 1,
      });
    },
    submit() {
      if (!this.data.name) {
        errortip("请填写收件人");
        return false;
      }
      if (!this.data.mobile) {
        errortip("请填写手机号码");
        return false;
      }
      if (!this.data.addressName) {
        errortip("请选择所属地区");
        return false;
      }
      if (!this.data.detail) {
        errortip("请填写详细地址");
        return false;
      }
      let label = this.tags.find((item) => item.ispick);
      if (!label) {
        errortip("请选择地址标签");
        return false;
      }

      let params = {
        oid: this.oid,
        name: this.data.name,
        mobile: this.data.mobile,
        addressName: this.data.addressName,
        address: this.data.address,
        detail: this.data.detail,
        label: label.name,
        is_default: this.data.is_default ? 1 : 0,
      };
      this.submitAddress(params);
    },
    async submitAddress(params) {
      try {
        let res = await submitAddress(params);
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
    async addressInfo(params) {
      try {
        let res = await addressInfo(params);
        this.data.name = res.data.data.name;
        this.data.mobile = res.data.data.mobile;
        this.data.addressName =
          res.data.data.province_name +
          "-" +
          res.data.data.city_name +
          "-" +
          res.data.data.district_name;
        this.data.address = [
          res.data.data.province_id,
          res.data.data.city_id,
          res.data.data.district_id,
        ];
        this.data.detail = res.data.data.detail;
        this.data.label = res.data.data.label;
        this.tags.map((item) => {
          if (res.data.data.label == item.name) {
            item.ispick = true;
          }
        });
        this.data.is_default = res.data.data.is_default ? true : false;
      } catch (error) {}
    },
    async deleteAddress(params) {
      try {
        let res = await submitAddress(params);
        this.showModel_del = false;
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function (options) {
    this.oid = options.oid;
    this.addressInfo({
      oid: this.oid,
    });
  },
};
</script>

<style lang="scss" scoped></style>
