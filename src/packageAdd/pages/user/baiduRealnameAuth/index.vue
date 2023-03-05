<template>
  <web-view :src="url" class="webview"></web-view>
</template>

<script>
export default {
  name: "baiduRealnameAuth",
  data() {
    return {
      url: "",
    };
  },
  onLoad: function (options) {
    if (options.verify_token) {
      const uuid = options.uuid;
      const successUrl = encodeURIComponent(
        "https://pai.qubeitech.com/v1/h5/face/identify/success.html?uuid=" +
          uuid
      );
      const failedUrl = encodeURIComponent(
        "https://pai.qubeitech.com/v1/h5/face/identify/fail.html?uuid=" + uuid
      );
      const url =
        "https://h5-faceverify.baidu.com/face/print/statement/statement?token=" +
        options.verify_token +
        "&successUrl=" +
        successUrl +
        "&failedUrl=" +
        failedUrl;
      this.url = url;
    }
  },
};
</script>

<style lang="scss" scoped>
.webview {
  width: 100%;
}
</style>
