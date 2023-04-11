<template>
  <view class="componets-list">
    <view v-for="(item, index) in list" v-if="list.length">
      <view
        class="componets-box"
        @tap="goYuepaiDetail(item.basic.oid, item.author.uuid)"
      >
        <view class="list_top">
          <view class="list_top_left">
            <image
              :src="
                item.author.avatar
                  ? item.author.avatar
                  : 'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'
              "
              class="avatar"
            ></image>
            <view class="list_info">
              <view class="list_name">
                {{ item.author.nickname }}
                <block v-if="item.author.sex !== null">
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                    class="list_sex"
                    v-if="item.author.sex == 1"
                  ></image>
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                    class="list_sex"
                    v-if="item.author.sex == 0"
                  ></image>
                </block>
              </view>
              <view class="list_p">
                <text>
                  {{
                    item.author.career_list && item.author.career_list.length
                      ? item.author.career_list[0]
                      : null
                  }}</text
                >
                <view class="icon_real" v-if="item.author.is_certify"
                  >已实名</view
                >
                <view class="icon_pledge" v-if="item.author.is_security"
                  >已担保</view
                >
              </view>
            </view>
          </view>
          <view class="list_top_rt">
            <view class="list_loction">
              {{ item.author.province_name }}
            </view>
            <view class="list_date">{{ item.basic.date_humanize }}</view>
          </view>
        </view>
        <view class="list_content">
          <view class="list_title">
            <view
              class="recommend-label"
              v-for="(tagitem, tagindex) in item.topic.headline.tag"
              :key="tagindex"
            >
              {{ tagitem }}
            </view>
            <view class="recommend-label2">
              {{ item.topic.payment.title }}
            </view>
          </view>
          <view class="list_title_desc">{{ item.topic.headline.title }}</view>
        </view>
        <view class="list_desc">
          {{ item.details.summary }}
        </view>
        <view class="list_img" v-if="item.details.media.file_type == 'picture'">
          <scroll-view :enhanced="true" :scrollX="true">
            <image
              :src="url"
              mode="aspectFill"
              class="list_img_item"
              v-for="(url, coverIndex) in item.details.media.cover"
              :key="coverIndex"
              @tap.stop="previewImage(url, item.details.media.cover)"
            ></image>
          </scroll-view>
        </view>
        <view class="list_video" v-if="item.details.media.file_type == 'video'">
          <video
            objectFit="cover"
            :poster="item.details.media.cover[0]"
            :src="
              item.details.media.video_cover &&
              item.details.media.video_cover[0]
            "
            class="list_video-width"
            @tap.stop=""
          ></video>
        </view>
        <view class="list_bottom">
          <view class="list_time">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
            ></image>
            {{ item.basic.date_humanize }}
          </view>
          <view class="list_yuepai">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
            ></image>
            收到约拍 {{ item.statistic.invite_cnt }}
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
  name: "yuepaiList",
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
    goYuepaiDetail(oid, author_id) {
      openPage(
        "/packageAdd/pages/yuedan/yuedan_detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
