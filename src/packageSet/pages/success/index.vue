<template>
  <view class="sucess">
    <image src="../../../assets/images/common/tip_success.png"></image>
    <view class="sucess-tips">{{ msg }}</view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "sucess",
  data() {
    return {
      msg: "通过",
    };
  },
  onLoad: function (options) {
    if (options.msg) {
      this.msg = options.msg;
    }
  },
};
</script>

<style lang="scss" scoped></style>
