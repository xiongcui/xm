<template>
  <view class="zuopin_list">
    <view
      class="zuopin_box"
      v-for="(item, index) in list"
      :key="index"
      @tap="godetail(item.oid, item.author_id)"
      v-if="list.length"
    >
      <image
        v-if="item.file_type == 'picture'"
        class="zuopin_img"
        :src="item.cover[0]"
        mode="aspectFill"
      ></image>
      <video
        v-if="item.file_type == 'video'"
        objectFit="cover"
        :poster="item.cover[0]"
        :src="item.video_cover && item.video_cover[0]"
        class="list_video-width"
      ></video>
      <view class="zuopin_desc">{{ item.summary }}</view>
      <view class="zuopin_info">
        <image
          class="avatar"
          :src="
            item.author.avatar
              ? item.author.avatar
              : 'https://yuepai-oss.qubeitech.com/static/avatar_default.png'
          "
          mode="aspectFill"
        ></image>

        <view>
          <view class="list_p_title">
            <text class="list_name">{{ item.author.nickname }}</text>
            <block>
              <image
                src="https://yuepai-oss.qubeitech.com/static/nan.png"
                class="list_sex"
                v-if="item.author.sex == 1"
              ></image>
              <image
                src="https://yuepai-oss.qubeitech.com/static/nv.png"
                class="list_sex"
                v-if="item.author.sex == 0"
              ></image>
            </block>
          </view>
          <view class="list_p">
            <text>
              {{ item.author.career_list && item.author.career_list[0] }} |{{
                item.author.province_name
              }}</text
            >
            <text class="read">{{ item.statistic.read_cnt }}</text>
          </view>
        </view>
      </view>
    </view>
    <view v-else class="none-data">
      <image
        src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
        mode="aspectFill"
        class="none-img"
      ></image>
      <view>当前暂无数据哦～</view>
    </view>
  </view>
</template>

<script>
import { openPage } from "../../utils/util";
import "./index.scss";
export default {
  name: "zuopinList",
  props: {
    baseData: {
      type: Array,
      default: [],
    },
  },
  watch: {
    baseData: {
      handler(newVal, oldVal) {
        this.list = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    godetail(oid, author_id) {
      openPage(
        "/packageAdd/pages/zuopin/zuopin_detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
