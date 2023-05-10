<template>
  <view class="componets-list">
    <view v-for="(item, index) in list" :key="index" v-if="list.length > 0">
      <view
        class="componets-box"
        @tap="godetail(item.basic.oid, item.author.uuid)"
      >
        <view class="tonggao-recommend">
          <view class="tonggao-recommend-top">
            <view class="tonggao-info-title">
              <block v-if="item.topic.headline.tag.length">
                <image
                  class="recommend-image"
                  v-for="(tagitem, tagindex) in item.topic.headline.tag"
                  :key="tagindex"
                  :src="tagitem"
                >
                </image>
              </block>
              <view class="tonggao-txt"> {{ item.topic.headline.title }}</view>
            </view>
          </view>
          <view class="tonggao-recommend-bt">
            <view class="tonggao-recommend-info">
              <view class="recommend-style">
                <text class="recommend-label">
                  {{ item.topic.target }}
                </text>
                <text class="recommend-label2">
                  {{ item.topic.payment.title }}
                </text>
              </view>
              <view class="tonggao-tags">
                <view
                  class="tag-item"
                  v-for="(tag, tagIndex) in item.subtitle.first_label"
                  :key="tagIndex"
                  >{{ tag.name }}</view
                >
              </view>
            </view>
            <view
              class="tonggao-recommend-img"
              v-if="item.details.media.file_type == 'picture'"
            >
              <image
                :src="item.details.media.cover[0]"
                mode="aspectFill"
              ></image>
            </view>
          </view>
        </view>
        <view class="tonggao-bottom">
          <view class="tonggao-head">
            <image
              :src="
                item.author.avatar
                  ? item.author.avatar
                  : 'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'
              "
            ></image>
            {{ item.author.nickname }}
          </view>
          <view class="tonggao-yuepai">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
            ></image>
            {{ item.statistic.invite_cnt }}
          </view>
          <view class="tonggao-read">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
            ></image>
            {{ item.statistic.read_cnt }}
          </view>
        </view>
      </view>
    </view>
    <view v-if="list.length == 0" class="none-data">
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
  name: "tonggaoList",
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
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    godetail(oid, author_id) {
      openPage(
        "/packageTonggao/pages/detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
