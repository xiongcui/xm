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
          <scroll-view scroll-y="true" bindscrolltolower="lower">
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">
                  赞了你的约拍
                  <view class="time">4天前</view></view
                >
                <image
                  class="first-img"
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            scroll-y="true"
            :style="{ height: winHeight + 'px' }"
            bindscrolltolower="lower"
          >
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
              </view>
            </view>
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
              </view>
            </view>
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
              </view>
            </view>
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
              </view>
            </view>
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
              </view>
            </view>
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
              </view>
            </view>
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
              </view>
            </view>
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
              </view>
            </view>
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
              </view>
            </view>
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
              </view>
            </view>
            <view class="livevisitor-box">
              <view class="livevisitor-img">
                <image
                  src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
                ></image>
              </view>
              <view class="livevisitor-info">
                <view class="livevisitor-name">
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
                <view class="identity">摄影师·主持人·其他 ｜ 北京市</view>
                <view class="date">4天前</view>
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
      }
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
  },
};
</script>

<style lang="scss" scoped></style>
