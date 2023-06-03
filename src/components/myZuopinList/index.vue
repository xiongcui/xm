<template>
  <view class="main ub ub-ver none_main" v-if="!list.length">
    <view class="none_tipimg">
      <image
        mode="widthFix"
        src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
      ></image>
    </view>
    <view class="none_tiptext" v-if="ismyself">还没有发布过作品动态哦～</view>
    <view class="none_tiptext" v-if="!ismyself">暂无数据</view>
    <view @tap="goAddZuopin" v-if="ismyself" class="none_now_make"
      >马上发布</view
    >
  </view>
  <view class="main ub ub-ver" v-else>
    <view
      class="zuopin-list"
      v-for="(item, index) in list"
      :key="index"
      @tap="godetail(item.oid, item.author_id)"
    >
      <view class="list_img" v-if="item.file_type == 'picture'">
        <scroll-view :enhanced="true" :scrollX="true">
          <image
            :src="url"
            mode="aspectFill"
            class="list_img_item"
            v-for="(url, coverIndex) in item.cover"
            :key="coverIndex"
          ></image>
        </scroll-view>
      </view>
      <view class="list_video" v-if="item.file_type == 'video'">
        <video
          objectFit="cover"
          :poster="item.cover[0]"
          :src="item.video_cover && item.video_cover[0]"
          class="list_video-width"
          @tap.stop=""
        ></video>
      </view>
      <view class="list_title"> {{ item.title }} </view>
      <view class="list_desc"> {{ item.summary }} </view>
      <view class="list_tags">
        <view
          class="tag"
          v-for="(styleItem, styleIndex) in item.style_label"
          :key="styleIndex"
          >{{ styleItem }}</view
        >
      </view>
      <view class="list_bottom">
        <view class="list_time">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
          ></image>
          {{ item.date_humanize }}
        </view>

        <view class="list_read">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
          ></image>
          阅读 {{ item.statistic.read_cnt }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { openPage } from "../../utils/util";
import "./index.scss";
export default {
  name: "myZuopinList",
  props: {
    base_data: {
      type: Array,
      default: [],
    },
    myself: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    base_data: {
      handler(newVal, oldVal) {
        this.list = newVal;
      },
      deep: true,
      immediate: true,
    },
    myself: {
      handler(newVal, oldVal) {
        this.ismyself = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      list: [],
      ismyself: true,
    };
  },
  methods: {
    goAddZuopin() {
      openPage("/packageAdd/pages/zuopin/add_zuopin/index");
    },
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
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
