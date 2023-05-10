<template>
  <view class="guide-box">
    <image src="../../../assets/images/common/none.png"></image>
    <view class="guide-txt"> {{ msg }} </view>
    <view class="guide-btn" @tap="goRealnameAuth" v-if="code == 21040"
      >去实名</view
    >
    <view class="guide-btn" @tap="goPledgecash" v-if="code == 21030"
      >去担保</view
    >
  </view>
</template>

<script>
import { openPage } from "../../../utils/util";
import "./index.scss";
export default {
  name: "guideTips",
  data() {
    return {
      msg: "",
      code: "",
    };
  },
  methods: {
    goRealnameAuth() {
      openPage("/packageAdd/pages/user/realnameAuth/index");
    },
    goPledgecash() {
      openPage("/packageMsg/pages/creditGuarantee/index");
    },
  },
  onLoad: function (options) {
    if (options.msg) {
      this.msg = options.msg;
    }
    if (options.code) {
      this.code = options.code;
    }
  },
};
</script>

<style lang="scss" scoped></style>
