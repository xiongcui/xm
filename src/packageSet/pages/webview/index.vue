<template>
  <view>
    <web-view :src="url" class="webview"></web-view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "webview",
  data() {
    return {
      url: "",
    };
  },
  onLoad: function (options) {
    if (options.url) {
      this.url = options.url;
    }
  },
};
</script>

<style lang="scss" scoped></style>
