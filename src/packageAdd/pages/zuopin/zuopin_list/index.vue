<template>
  <view class="my-zuopin">
    <myZuopinList :base_data="list"></myZuopinList>
  </view>
</template>

<script>
import "./index.scss";
import myZuopinList from "../../../../components/myZuopinList/index.vue";
import { photoListOwn } from "../../../../api/index";
import { errortip } from "../../../../utils/util";
export default {
  name: "zuopin_list",
  data() {
    return {
      list: [],
      pageNum: 1,
      pageSize: 10,
    };
  },
  components: {
    myZuopinList,
  },
  methods: {
    queryZuopinList() {
      this.photoListOwn({
        page: this.pageNum,
        per_page: this.pageSize,
      });
    },
    async photoListOwn(params) {
      try {
        let res = await photoListOwn(params);
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
  },
  created() {
    this.queryZuopinList();
  },
  onReachBottom() {
    this.pageNum++;
    this.queryZuopinList();
  },
};
</script>

<style lang="scss" scoped></style>
