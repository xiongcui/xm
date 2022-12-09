<template>
  <view class="yuedan-manage">
    <view class="tab">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0)"
        >全部</view
      >
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1)"
        >展示中</view
      >
      <view
        class="tab-item"
        :class="currentTab == 2 ? 'on' : ''"
        @tap="changeItem(2)"
        >已关闭</view
      >
      <view
        class="tab-item"
        :class="currentTab == 3 ? 'on' : ''"
        @tap="changeItem(3)"
        >审核失败</view
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
          <scroll-view scroll-y="true" bindscrolltolower="lower">
            <view class="yuedan-manage-list">
              <view class="list_title"> 惹惹人 </view>
              <view class="list_loction"> rerr </view>
            </view>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "yuedan_manage",
  data() {
    return {
      currentTab: 0,
    };
  },
  methods: {
    // 点击tab切换
    changeItem(index) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
      }
    },
    bindChange(e) {
      this.currentTab = e.detail.current;
    },
  },
};
</script>

<style lang="scss" scoped></style>
