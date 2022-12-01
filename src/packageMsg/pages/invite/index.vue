<template>
  <view class="invite">
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
        >待查看</view
      >
      <view
        class="tab-item"
        :class="currentTab == 2 ? 'on' : ''"
        @tap="changeItem(2)"
        >未获取</view
      >
      <view
        class="tab-item"
        :class="currentTab == 3 ? 'on' : ''"
        @tap="changeItem(3)"
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
          <scroll-view scroll-y="true" bindscrolltolower="lower">
            <view class="invite-box">
              <view class="invite-top">
                <view class="invite-img">
                  <image
                    src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                  ></image>
                </view>
                <view class="invite-info">
                  <view class="invite-name">
                    nemek
                    <image
                      src="../../../assets/images/nan.png"
                      class="list_sex"
                    ></image>
                    <!-- <image
                  src="../../../assets/images/nv.png"
                  class="list_sex"
                  v-if="author.sex == 0"
                ></image> -->
                  </view>
                  <view class="identity">摄影师｜ 北京市</view>
                  <view class="dian">...</view>
                </view>
              </view>
              <view class="invite-desc">
                约拍请求：
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
              </view>
              <view class="invite-bt">
                <text>2小时前</text>
                <text class="fail">待查看对方联系方式</text>
              </view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view scroll-y="true" bindscrolltolower="lower">
            <view class="invite-box">
              <view class="invite-top">
                <view class="invite-img">
                  <image
                    src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                  ></image>
                </view>
                <view class="invite-info">
                  <view class="invite-name">
                    nemek
                    <image
                      src="../../../assets/images/nan.png"
                      class="list_sex"
                    ></image>
                    <!-- <image
                  src="../../../assets/images/nv.png"
                  class="list_sex"
                  v-if="author.sex == 0"
                ></image> -->
                  </view>
                  <view class="identity">摄影师｜ 北京市</view>
                  <view class="dian">...</view>
                </view>
              </view>
              <view class="invite-desc">
                约拍请求：
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
              </view>
              <view class="invite-bt">
                <text>2小时前</text>
                <text class="fail">待查看对方联系方式</text>
              </view>
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
  name: "invite",
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
