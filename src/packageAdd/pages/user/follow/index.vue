<template>
  <view>
    <web-view :src="url" class="webview"></web-view>
  </view>
</template>

<script>
import "./index.scss";
import { followRedirect } from "../../../../api/index";
export default {
  name: "follow",
  data() {
    return {
      url: "",
    };
  },
  created() {
    this.followRedirect("");
  },
  methods: {
    async followRedirect(params) {
      try {
        let res = await followRedirect(params);
        this.url = res.data.data;
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped></style>
