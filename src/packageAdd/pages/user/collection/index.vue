<template>
  <view class="collection">
    <view class="tab">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0, 'NT')"
        >通告</view
      >
      <!-- <view
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
      > -->
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
            <block v-if="tonggaoList.length">
              <view
                v-for="(item, index) in tonggaoList"
                :key="index"
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
                      <view class="tonggao-txt">
                        {{ item.topic.headline.title }}</view
                      >
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
            <block v-if="yuepaiList.length">
              <view
                v-for="(item, index) in yuepaiList"
                v-if="yuepaiList.length > 0"
                :key="index"
                class="componets-zuopin-box"
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
                      @tap="goZhuye(item.author.uuid)"
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
                            item.author.career_list.length
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
                    <view class="list_date">{{
                      item.basic.date_humanize
                    }}</view>
                  </view>
                </view>
                <view class="list_content">
                  <view class="list_title">
                    <view class="recommend-style">
                      <view class="recommend-label">
                        {{ item.topic.target }}
                      </view>

                      <view class="recommend-label2">
                        {{ item.topic.payment.title }}
                      </view>
                    </view>
                    <view class="list_loction">
                      {{ item.topic.face_city.name }}
                    </view>
                  </view>
                  <view class="list_title_desc">{{
                    item.topic.headline.title
                  }}</view>
                </view>
                <view
                  class="list_img"
                  v-if="item.details.media.file_type == 'picture'"
                >
                  <scroll-view :enhanced="true" :scrollX="true">
                    <image
                      :src="url"
                      mode="aspectFill"
                      class="list_img_item"
                      v-for="(url, coverIndex) in item.details.media.cover"
                      :key="coverIndex"
                    ></image>
                  </scroll-view>
                </view>
                <view
                  class="list_video"
                  v-if="item.details.media.file_type == 'video'"
                >
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
                  @tap="gozuopinDetail(item.oid, item.author_id)"
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
import { errortip, openPage } from "../../../../utils/util";
export default {
  name: "collection",
  data() {
    return {
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      tonggaoList: [],
      yuepaiList: [],
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
        this.tonggaoList = [];
        this.yuepaiList = [];
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
    godetail(oid, author_id) {
      openPage(
        "/packageTonggao/pages/detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
    goYuepaiDetail(oid, author_id) {
      openPage(
        "/packageAdd/pages/yuedan/yuedan_detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
    gozuopinDetail(oid, author_id) {
      openPage(
        "/packageAdd/pages/zuopin/zuopin_detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
    async collectList(params) {
      try {
        let res = await collectList(params);
        if (!res.data.data.items || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        if (params.type == "NT") {
          this.tonggaoList = this.tonggaoList.concat(data);
        } else if (params.type == "NE") {
          this.yuepaiList = this.yuepaiList.concat(data);
        } else {
          this.list = this.list.concat(data);
        }
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
