<template>
  <view class="tonggao">
    <view class="hot-tg">
      <view class="tg-title">热门通告</view>
      <view class="hot-type">
        <view class="hot-item" @tap="goRelease(1)">品牌种草</view>
        <view class="hot-item" @tap="goRelease(2)">探店推广</view>
        <view class="hot-item">发型创作</view>
        <view class="hot-item">人像创作</view>
      </view>
    </view>
    <view class="select-type">
      <view class="tg-title">选择分类</view>
      <view class="select-list">
        <view
          class="select-item"
          v-for="(item, index) in classificationList"
          :key="index"
          @tap="classificationClick(item)"
        >
          <image :src="item.icon"></image>
          <text>{{ item.name }}</text>
        </view>
      </view>
    </view>
    <view class="tonggao-mask" v-if="visible">
      <view class="mask-box">
        <view class="mask-title">
          作品创作
          <view class="close" @tap="close"></view>
        </view>
        <view class="mask-ct">
          <view
            class="mask-item"
            v-for="(item, index) in maskData"
            :key="index"
            @tap="maskClick(item)"
            >{{ item.value }}</view
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { publicConfig } from "../../../api/index";
import { openPage } from "../../../utils/util";
export default {
  name: "tonggao",
  data() {
    return {
      visible: false,
      title: "",
      code: "",
      classificationList: [
        {
          name: "作品创作",
          value: "creation_content",
          icon: "../../../assets/images/tonggao/xiangce.png",
        },
        {
          name: "合作招募",
          value: "recruit_cooperate",
          icon: "../../../assets/images/tonggao/hezuo.png",
        },
        {
          name: "电商拍摄",
          value: "business_capture",
          icon: "../../../assets/images/tonggao/dianshang.png",
        },
        {
          name: "广告宣传",
          value: "advert_spread",
          icon: "../../../assets/images/tonggao/guanggao.png",
        },
        {
          name: "影视视频",
          value: "film_video",
          icon: "../../../assets/images/tonggao/yingshi.png",
        },
        {
          name: "商业活动",
          value: "business_activity",
          icon: "../../../assets/images/tonggao/shangye.png",
        },
      ],
      maskData: [],
    };
  },
  methods: {
    classificationClick(row) {
      this.title = row.name;
      this.code = row.value;
      this.publicConfig({
        type: [row.value],
      });
    },
    close() {
      this.visible = false;
    },
    goRelease(type) {
      if (type == 1) {
        openPage("/packageTonggao/pages/brand/index");
      }
      if (type == 2) {
        openPage("/packageTonggao/pages/shop/index");
      }
    },
    maskClick(row) {
      openPage(
        "/packageTonggao/pages/add/index?code=" +
          this.code +
          "&type=" +
          row.value +
          "&key=" +
          row.key
      );
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        this.maskData = res.data.data;
        this.visible = true;
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped></style>
