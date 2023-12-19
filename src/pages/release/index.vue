<template>
  <view class="release-box">
    <view class="release-content">
      <view class="release-title"> 选择发布类型 </view>
      <view class="release-list">
        <view class="release-item bgcolor1" @tap="goRelease(1)">
          <view class="release-sub-title"> 产品评测 </view>
          <view class="release-img">
            <image src="../../assets/images/product-icon.png"></image>
          </view>
        </view>
        <view class="release-item bgcolor2" @tap="goRelease(2)">
          <view class="release-sub-title"> 探店体验 </view>
          <view class="release-img">
            <image src="../../assets/images/store-icon.png"></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { errortip, isLogin, openPage } from "../../utils/util";
import { publishVerify } from "../../api/index";
export default {
  name: "release",
  methods: {
    goRelease(type) {
      if (isLogin()) {
        this.publishVerify(
          {
            project_code: "NT",
          },
          "",
          type
        );
      } else {
        openPage("/pages/login/index");
      }
    },
    async publishVerify(params, row, type) {
      try {
        let res = await publishVerify(params);
        if (type) {
          if (type == 1) {
            openPage("/packageTonggao/pages/brand/index");
          }
          if (type == 2) {
            openPage("/packageTonggao/pages/shop/index");
          }
        } else {
          openPage(
            "/packageTonggao/pages/add/index?code=" +
              this.code +
              "&type=" +
              row.value +
              "&key=" +
              row.key
          );
        }
      } catch (error) {
        if (error.data.error_code == 21030 || error.data.error_code == 21040) {
          openPage(
            `/packageAdd/pages/guideTips/index?msg=${error.data.msg}&code=${error.data.error_code}`
          );
        } else if (error.data.error_code == 21060) {
          wx.showModal({
            title: "温馨提示",
            content: "还未完善个人资料，请前往完善个人资料",
            confirmText: "完善资料",
            success: function (res) {
              if (res.confirm) {
                console.log("用户点击确定");
                openPage("/packageAdd/pages/user/editinfor/index");
              } else if (res.cancel) {
                console.log("用户点击取消");
              }
            },
          });
        } else {
          errortip(error.data.msg);
        }
      }
    },
  },
};
</script>
