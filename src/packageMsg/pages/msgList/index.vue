<template>
  <view class="msg-list">
    <view class="msg-box" v-for="(item, index) in list" :key="index">
      <view class="msg-title">
        <text>{{ item.title }}</text>
        <text class="fail" v-if="item.result == '审核失败'">审核失败</text>
        <text class="success" v-else>{{ item.result }}</text>
      </view>
      <view class="msg-content">
        {{ item.content }}
      </view>
      <view class="msg-bt">
        <text>{{ item.date_humanize }}</text>
        <text @tap="hyper_link(item.hyper_link)">{{ item.hyper_tips }}</text>
      </view>
      <view class="notice_bg" v-if="item.is_read === 0"></view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { systemList } from "../../../api/index";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "msgList",
  data() {
    return {
      loading: true,
      pageNum: 1,
      pageSize: 10,
      list: [],
    };
  },
  methods: {
    hyper_link(url) {
      openPage(url);
    },
    query() {
      this.loading = false;
      this.systemList({
        page: this.pageNum,
        per_page: this.pageSize,
      });
    },
    async systemList(params) {
      try {
        let res = await systemList(params);
        if (!res.data.data.items || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
        this.loading = true;
      } catch (error) {}
    },
  },
  created() {
    this.systemList({
      page: this.pageNum,
      per_page: this.pageSize,
    });
  },
  onReachBottom() {
    if (this.loading) {
      this.pageNum++;
      this.query();
    }
  },
};
</script>

<style lang="scss" scoped></style>
