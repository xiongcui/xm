<template>
  <view class="collection">
    <view class="tab">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0, 'NT')"
        >通告</view
      >
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1, 'NE')"
        >约拍</view
      >
      <view
        class="tab-item"
        :class="currentTab == 2 ? 'on' : ''"
        @tap="changeItem(2, 'PH')"
        >作品</view
      >
    </view>
    <view class="content">
      <swiper
        :current="currentTab"
        class="swiper-box"
        duration="300"
        @change="bindChange"
      >
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :lower-threshold="200"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao_box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="tonggao_title">
                  <text class="list_title"
                    >{{ item.major_subject }}{{ item.payment_format }}</text
                  >
                  <view class="list_loction">
                    {{ item.author.province_name }}
                  </view>
                </view>
                <view class="tonggao_ct">
                  <view class="tonggao_left">
                    <view class="tonggao_desc">
                      {{ item.summary }}
                    </view>
                    <view class="tonggao_tags">
                      <view class="tag-item">{{ item.second_name }}</view>
                      <view
                        class="tag-item"
                        v-if="item.first_code == 'celebrity_spread'"
                        >粉丝要求：{{ item.fans_number }}</view
                      >
                      <view
                        class="tag-item"
                        v-if="
                          item.face_sex !== null &&
                          item.first_code != 'celebrity_spread'
                        "
                        >性别要求：{{ formatSex(item.face_sex) }}</view
                      >
                    </view>
                    <view class="tonggao_info">
                      <image
                        :src="
                          item.author.avatar
                            ? item.author.avatar
                            : 'https://yuepai-oss.qubeitech.com/static/avatar_default.png'
                        "
                        class="head-img"
                      ></image>
                      {{ item.author.nickname }}
                      <image
                        v-if="item.author.is_security"
                        src="https://yuepai-oss.qubeitech.com/static/common/icon_pledge.png"
                        class="pledge-img"
                      ></image>
                    </view>
                  </view>
                  <view class="tonggao-right">
                    <image mode="aspectFill" :src="item.cover[0]"></image>
                  </view>
                </view>
                <view class="tonggao_bottom">
                  <view class="tonggao_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="tonggao_bottom_rt">
                    <view class="tonggao_yuepai">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/user/index/yuepai.png"
                      ></image>
                      {{ item.statistic.invite_cnt }}
                    </view>
                    <view class="tonggao_read">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/eyes.png"
                      ></image>
                      {{ item.statistic.read_cnt }}
                    </view>
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :lower-threshold="200"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view class="list_box" v-for="(item, index) in list" :key="index">
                <view class="list_top">
                  <view class="list_top_left">
                    <image
                      :src="
                        item.author.avatar
                          ? item.author.avatar
                          : 'https://yuepai-oss.qubeitech.com/static/avatar_default.png'
                      "
                      class="avatar"
                    ></image>
                    <view class="list_info">
                      <view class="list_name">
                        {{ item.author.nickname }}
                        <block v-if="item.author.sex !== null">
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
                          {{ item.author.career_list[0] }} |
                          {{ item.author.province_name }}</text
                        >
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/common/icon_real.png"
                          class="list_p_img"
                          v-if="item.author.is_certify"
                        ></image>
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/common/icon_pledge_none.png"
                          class="list_p_img"
                          v-else
                        ></image>
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/common/icon_pledge.png"
                          class="list_p_img"
                          v-if="item.author.is_security"
                        ></image>
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/common/icon_real_none.png"
                          class="list_p_img"
                          v-else
                        ></image>
                      </view>
                    </view>
                  </view>
                  <!-- <view class="list_collection">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/common/icon_favorite.png"
                    ></image>
                  </view> -->
                </view>
                <view class="list_content">
                  <view class="list_title">
                    {{ item.major_subject }}
                    <text
                      v-if="
                        (item.payment_type == 300 && item.payment_range == 1) ||
                        (item.payment_type == 400 && item.payment_range == 1)
                      "
                      >{{ item.payment_name }}{{ item.payment_min_amount }}-{{
                        item.payment_max_amount
                      }}{{ item.payment_unit }}</text
                    >
                    <text
                      v-if="
                        (item.payment_type == 300 && item.payment_range == 0) ||
                        (item.payment_type == 400 && item.payment_range == 0)
                      "
                      >{{ item.payment_name }}{{ item.payment_amount
                      }}{{ item.payment_unit }}
                    </text>
                  </view>
                  <view class="list_loction">
                    {{ item.face_province_name }}
                  </view>
                </view>
                <view class="list_desc">
                  {{ item.summary }}
                </view>
                <view class="list_img" v-if="item.file_type == 'picture'">
                  <scroll-view :enhanced="true" :scrollX="true">
                    <image
                      :src="url"
                      mode="aspectFill"
                      class="list_img_item"
                      v-for="(url, coverIndex) in item.cover"
                      :key="coverIndex"
                      @tap.stop="previewImage(url, item.cover)"
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
                      src="https://yuepai-oss.qubeitech.com/static/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :lower-threshold="200"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view class="zuopin_box_list">
                <view
                  class="zuopin_box"
                  v-for="(item, index) in list"
                  :key="index"
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
                        <text class="list_name">{{
                          item.author.nickname
                        }}</text>
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
                          {{ item.author.career_list[0] }} |{{
                            item.author.province_name
                          }}</text
                        >
                        <text class="read">{{ item.statistic.read_cnt }}</text>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { collectList } from "../../../../api/index";
import { errortip } from "../../../../utils/util";
export default {
  name: "collection",
  data() {
    return {
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      type: "NT",
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
    // 点击tab切换
    changeItem(index, type) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
        this.type = type;
        this.pageNum = 1;
        this.list = [];
        this.query();
      }
    },
    bindChange(e) {
      this.currentTab = e.detail.current;
    },
    scrollToLower() {
      this.pageNum++;
      this.query();
    },
    formatSex(sex) {
      if (sex == 1) {
        return "男";
      }
      if (sex == 0) {
        return "女";
      }
      return "不限";
    },
    query() {
      let params = {
        type: this.type, // 约拍：NE； 通告：NT；照片：PH
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.collectList(params);
    },
    async collectList(params) {
      try {
        let res = await collectList(params);
        if (!res.data.data.items || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      },
    });
    this.query();
  },
};
</script>

<style lang="scss" scoped></style>
