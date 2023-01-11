<template>
  <view class="tonggao-manage">
    <view class="tab">
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
        >展示中</view
      >
      <view
        class="tab-item"
        :class="currentTab == 2 ? 'on' : ''"
        @tap="changeItem(2, 300)"
        >已关闭</view
      >
      <view
        class="tab-item"
        :class="currentTab == 3 ? 'on' : ''"
        @tap="changeItem(3, 600)"
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
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <view class="tonggao-manage-list">
              <view class="list-content">
                <view class="list_left">
                  <view class="list_title"> 标题标题 </view>
                  <view class="list_desc">
                    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                  </view>
                  <view class="list_info">
                    <image src="../../../assets/images/position.png"></image>
                    面向地区：北京市
                  </view>
                  <view class="list_info"
                    ><image src="../../../assets/images/sex1.png"></image
                    >性别要求：女</view
                  >
                </view>
                <view class="list_rt">
                  <image
                    src="https://yuepai-oss.qubeitech.com/invite/upVg5cIs/2c12e84c-8e8c-11ed-ae45-473a871aac32.jpg"
                  ></image>
                </view>
                <!-- <view class="list_status_sucess">招募中</view> -->
                <!-- <view class="list_status">待开放</view> -->
                <view class="list_status">已结束</view>
                <view class="list_tag">人像创作</view>
              </view>
              <view class="list_num">
                <view class="list_time">
                  <image src="../../../assets/images/common/time.png"></image>
                  222
                </view>
                <view class="list_yuepai">
                  <image
                    src="../../../assets/images/user/index/yuepai.png"
                  ></image>
                  收到约拍 34
                </view>
                <view class="list_read">
                  <image src="../../../assets/images/eyes.png"></image>
                  阅读 32
                </view>
              </view>
              <view class="list_bottom">
                <view class="list_bt_left">
                  <!-- <view class="btn-grey" @tap="deleteTonggao">删除通告</view> -->
                  <view class="btn-grey" @tap="overTonggao">结束报名</view>
                </view>
                <view class="list_bt_rt">
                  <!-- <view class="btn-red" @tap="openTonggao">开放招募</view> -->
                  <view class="btn-red" @tap="refreshTonggao">刷新排名</view>
                  <view class="btn-red" @tap="reopenTonggao">重新打开</view>
                  <!-- <view class="btn-red" @tap="manageTonggao">管理报名</view> -->
                </view>
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
  name: "tonggao_manage",
  data() {
    return {
      optionMap: {
        NE: "约拍",
        NT: "通告",
        PH: "作品",
      },
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
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
    deleteTonggao() {
      wx.showModal({
        title: "温馨提示",
        content: "确定删除该通告吗？",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    openTonggao() {},
    overTonggao() {
      wx.showModal({
        title: "温馨提示",
        content: "确定结束该通告，不再接收报名么？",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    refreshTonggao() {
      wx.showModal({
        title: "温馨提示",
        content: "刷新当前通告需消耗5金币，确定刷新吗？",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    manageTonggao() {},
    reopenTonggao() {
      wx.showModal({
        title: "温馨提示",
        content: "确定重新打开该通告吗？",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
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
    // this.query();
  },
};
</script>

<style lang="scss" scoped></style>
