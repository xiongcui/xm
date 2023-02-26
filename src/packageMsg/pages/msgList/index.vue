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
        <text>{{ item.hyper_tips }}</text>
      </view>
    </view>
    <!-- <view class="msg-box">
      <view class="msg-title">
        <text>通告审核</text>
        <text class="fail">审核失败</text>
      </view>
      <view class="msg-content"> 内容内容内容内容内容内容内容内容 </view>
      <view class="msg-bt">
        <text>1小时前</text>
        <text>点击查看 ></text>
      </view>
    </view> -->
  </view>
</template>

<script>
import "./index.scss";
import { systemList } from "../../../api/index";
import { errortip } from "../../../utils/util";
export default {
  name: "msgList",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async systemList(params) {
      try {
        let res = await systemList(params);
        if (!res.data.data.items || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
  },
  created() {
    this.systemList("");
  },
};
</script>

<style lang="scss" scoped></style>
