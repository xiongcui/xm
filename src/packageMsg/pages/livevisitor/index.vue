<template>
  <view class="livevisitor">
    <view class="tab">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0)"
        >收到的赞</view
      >
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1)"
        >来访的客</view
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
            :style="{ height: winHeight + 'px' }"
            @scrolltolower="scrollToLower"
            :lower-threshold="200"
          >
            <block v-if="list.length">
              <view
                class="livevisitor-box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="livevisitor-img">
                  <image :src="item.visitor.avatar"></image>
                </view>
                <view class="livevisitor-info">
                  <view class="livevisitor-name">
                    {{ item.visitor.nickname }}
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 1"
                    ></image>
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image>
                  </view>
                  <view class="identity">
                    {{ item.notify_tips }}
                    <view class="time">{{
                      item.create_time_humanize
                    }}</view></view
                  >
                  <image
                    class="first-img"
                    :src="item.cover"
                    mode="aspectFill"
                  ></image>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
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
            :style="{ height: winHeight + 'px' }"
            @scrolltolower="scrollToLower"
            :lower-threshold="200"
          >
            <block v-if="list2.length">
              <view
                class="livevisitor-box"
                v-for="(item, index) in list2"
                :key="index"
              >
                <view class="livevisitor-img">
                  <image :src="item.visitor.avatar"></image>
                </view>
                <view class="livevisitor-info">
                  <view class="livevisitor-name">
                    {{ item.visitor.nickname }}
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 1"
                    ></image>
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image>
                  </view>
                  <view class="identity"
                    >{{ item.visitor.career_list.join(".") }} ｜
                    {{ item.visitor.province_name }}</view
                  >
                  <view class="date">{{ item.create_time_humanize }}</view>
                </view>
              </view>
            </block>

            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
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
import { visitorList, voteList } from "../../../api/index";
import { errortip } from "../../../utils/util";
export default {
  name: "livevisitor",
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      // tab切换
      currentTab: 0,
      list: [],
      list2: [],
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
    //swiper制作tab切换
    // 滑动切换tab
    bindChange(e) {
      this.currentTab = e.detail.current;
    },
    // 点击tab切换
    changeItem(index) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
        this.pageNum = 1;
        this.list = [];
        this.list2 = [];
        this.query();
      }
    },
    query() {
      let params = {
        page: this.pageNum,
        per_page: this.pageSize,
      };
      if (this.currentTab == 1) {
        this.visitorList(params);
      } else {
        this.voteList(params);
      }
    },
    scrollToLower() {
      this.pageNum++;
      this.query();
    },
    async visitorList(params) {
      try {
        let res = await visitorList(params);
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list2 = this.list2.concat(data);
      } catch (error) {}
    },
    async voteList(params) {
      try {
        let res = await voteList(params);
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
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
    this.query();
  },
};
</script>

<style lang="scss" scoped></style>
