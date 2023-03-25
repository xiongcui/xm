<template>
  <view class="componets-list">
    <view v-for="(item, index) in list" :key="index" v-if="list.length">
      <view class="componets-box">
        <view class="tonggao-recommend">
          <view class="tonggao-recommend-top">
            <view class="tonggao-info-title">
              <view
                class="recommend-label"
                v-for="(tagitem, tagindex) in item.topic.headline.tag"
                :key="tagindex"
              >
                {{ tagitem }}
              </view>
              <view class="tonggao-txt"> {{ item.topic.headline.title }}</view>
            </view>
          </view>
          <view class="tonggao-recommend-bt">
            <view
              class="tonggao-recommend-img"
              v-if="item.details.media.file_type == 'picture'"
            >
              <image
                :src="item.details.media.cover[0]"
                mode="aspectFill"
              ></image>
            </view>
            <view class="tonggao-recommend-info">
              <view class="tonggao-info-desc"> {{ item.details.summary }}</view>
              <view class="tonggao-tags">
                <view
                  class="tag-item"
                  v-for="(tag, tagIndex) in item.subtitle.first_label"
                  :key="tagIndex"
                  >{{ tag.name }}</view
                >
              </view>
              <view class="tonggao-recommend-price">
                <view class="pirce"> {{ item.topic.payment.title }}</view>
                <view class="recommend-btn">立即报名</view>
              </view>
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
            <image src="../../assets/images/user/index/yuepai.png"></image>
            {{ item.statistic.invite_cnt }}
          </view>
          <view class="tonggao-read">
            <image src="../../assets/images/eyes.png"></image>
            {{ item.statistic.read_cnt }}
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
};
</script>

<style lang="scss" scoped></style>
