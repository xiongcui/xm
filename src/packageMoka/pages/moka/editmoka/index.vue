<template>
  <view>
    <view class="card-box" v-for="(item, index) in list" :key="index">
      <image
        mode="widthFix"
        :src="item.mocha_url"
        @tap="showbigPersonimg(item.mocha_url, [item.mocha_url])"
      ></image>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { mochaList } from "../../../../api/index";
import { errortip } from "../../../../utils/util";
export default {
  name: "editmoka",
  data() {
    return {
      list: [],
      pageNum: 1,
      pageSize: 10,
      uuid: "",
    };
  },
  methods: {
    showbigPersonimg(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    query() {
      let params = {
        page: this.pageNum,
        per_page: this.pageSize,
        mocha_type: "oneself",
        uuid: this.uuid,
      };
      this.mochaList(params);
    },
    async mochaList(params) {
      try {
        let res = await mochaList(params);
        wx.hideLoading();
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
  },
  //触底加载
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    wx.showLoading({
      title: "数据加载中...",
    });
    this.query();
  },
  onLoad: function (options) {
    console.log(options.uuid);
    if (options.uuid) {
      this.uuid = options.uuid;
    }
    this.query();
  },
};
</script>

<style lang="scss" scoped></style>
