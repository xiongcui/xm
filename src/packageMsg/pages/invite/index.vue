<template>
  <view class="invite">
    <view class="tab">
      <!-- # 200:等待查看 210:未获取 230:已经获取 -->
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0, 0)"
        >全部</view
      >
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1, 200)"
        >待查看</view
      >
      <view
        class="tab-item"
        :class="currentTab == 2 ? 'on' : ''"
        @tap="changeItem(2, 210)"
        >未获取</view
      >
      <view
        class="tab-item"
        :class="currentTab == 3 ? 'on' : ''"
        @tap="changeItem(3, 230)"
        >已获取</view
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
                class="invite-box"
                v-for="(item, index) in list"
                :key="index"
                @tap="goDetail(item.oid)"
              >
                <view class="invite-top">
                  <view class="invite-img">
                    <image :src="item.visitor.avatar"></image>
                  </view>
                  <view class="invite-info">
                    <view class="invite-name">
                      {{ item.visitor.nickname }}
                      <image
                        src="../../../assets/images/nan.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 1"
                      ></image>
                      <image
                        src="../../../assets/images/nv.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visitor.career_list[0] }}｜
                      {{ item.visitor.province_name }}</view
                    >
                    <view class="dian">...</view>
                  </view>
                </view>
                <view class="invite-desc"
                  >邀约理由：
                  {{ item.content }}
                </view>
                <view class="invite-bt">
                  <text>{{ item.date_humanize }}</text>
                  <text class="success" v-if="item.visited_status == 230">{{
                    item.visited_status_name
                  }}</text>
                  <text class="fail" v-else-if="item.visited_status == 210">{{
                    item.visited_status_name
                  }}</text>
                  <text v-else>{{ item.visited_status_name }}</text>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="../../../assets/images/common/none.png"
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
              <view
                class="invite-box"
                v-for="(item, index) in list"
                :key="index"
                @tap="goDetail(item.oid)"
              >
                <view class="invite-top">
                  <view class="invite-img">
                    <image :src="item.visitor.avatar"></image>
                  </view>
                  <view class="invite-info">
                    <view class="invite-name">
                      {{ item.visitor.nickname }}
                      <image
                        src="../../../assets/images/nan.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 1"
                      ></image>
                      <image
                        src="../../../assets/images/nv.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visitor.career_list[0] }}｜
                      {{ item.visitor.province_name }}</view
                    >
                    <view class="dian">...</view>
                  </view>
                </view>
                <view class="invite-desc"
                  >邀约理由：
                  {{ item.content }}
                </view>
                <view class="invite-bt">
                  <text>{{ item.date_humanize }}</text>
                  <text class="success" v-if="item.visited_status == 230">{{
                    item.visited_status_name
                  }}</text>
                  <text class="fail" v-else-if="item.visited_status == 210">{{
                    item.visited_status_name
                  }}</text>
                  <text v-else>{{ item.visited_status_name }}</text>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="../../../assets/images/common/none.png"
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
              <view
                class="invite-box"
                v-for="(item, index) in list"
                :key="index"
                @tap="goDetail(item.oid)"
              >
                <view class="invite-top">
                  <view class="invite-img">
                    <image :src="item.visitor.avatar"></image>
                  </view>
                  <view class="invite-info">
                    <view class="invite-name">
                      {{ item.visitor.nickname }}
                      <image
                        src="../../../assets/images/nan.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 1"
                      ></image>
                      <image
                        src="../../../assets/images/nv.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visitor.career_list[0] }}｜
                      {{ item.visitor.province_name }}</view
                    >
                    <view class="dian">...</view>
                  </view>
                </view>
                <view class="invite-desc"
                  >邀约理由：
                  {{ item.content }}
                </view>
                <view class="invite-bt">
                  <text>{{ item.date_humanize }}</text>
                  <text class="success" v-if="item.visited_status == 230">{{
                    item.visited_status_name
                  }}</text>
                  <text class="fail" v-else-if="item.visited_status == 210">{{
                    item.visited_status_name
                  }}</text>
                  <text v-else>{{ item.visited_status_name }}</text>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="../../../assets/images/common/none.png"
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
              <view
                class="invite-box"
                v-for="(item, index) in list"
                :key="index"
                @tap="goDetail(item.oid)"
              >
                <view class="invite-top">
                  <view class="invite-img">
                    <image :src="item.visitor.avatar"></image>
                  </view>
                  <view class="invite-info">
                    <view class="invite-name">
                      {{ item.visitor.nickname }}
                      <image
                        src="../../../assets/images/nan.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 1"
                      ></image>
                      <image
                        src="../../../assets/images/nv.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visitor.career_list[0] }}｜
                      {{ item.visitor.province_name }}</view
                    >
                    <view class="dian">...</view>
                  </view>
                </view>
                <view class="invite-desc"
                  >邀约理由：
                  {{ item.content }}
                </view>
                <view class="invite-bt">
                  <text>{{ item.date_humanize }}</text>
                  <text class="success" v-if="item.visited_status == 230">{{
                    item.visited_status_name
                  }}</text>
                  <text class="fail" v-else-if="item.visited_status == 210">{{
                    item.visited_status_name
                  }}</text>
                  <text v-else>{{ item.visited_status_name }}</text>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="../../../assets/images/common/none.png"
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
import { applyList } from "../../../api/index";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "invite",
  data() {
    return {
      currentTab: 0,
      list: [],
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      status: 0,
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
        this.status = type;
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
    query() {
      let params = {
        visited_status: this.status,
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.applyList(params);
    },
    goDetail(oid) {
      openPage("/packageMsg/pages/inviteDetail/index?oid=" + oid);
    },
    async applyList(params) {
      try {
        let res = await applyList(params);
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
    this.query();
  },
  onShow() {
    this.pageNum = 1;
    this.list = [];
    this.query();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      },
    });
  },
};
</script>

<style lang="scss" scoped></style>
