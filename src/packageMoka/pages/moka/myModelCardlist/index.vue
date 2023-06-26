<template>
  <view class="my-model-card">
    <view class="tab">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0)"
        >给自己做的
      </view>
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1)"
        >给别人做的
      </view>
    </view>
    <view class="content">
      <swiper
        :current="currentTab"
        class="swiper-box"
        duration="300"
        @change="bindChange"
        :style="{ paddingBottom: isIphoneX ? '180rpx' : '120rpx' }"
      >
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            :style="{ height: winHeight + 'px' }"
            @scrolltolower="scrollToLower"
            :lower-threshold="200"
          >
            <block v-if="list.length">
              <view class="card-box" v-for="(item, index) in list" :key="index">
                <image mode="widthFix" :src="item.mocha_url"></image>
                <view class="card-bottom">
                  <view class="card-delete" @tap="cardDelete(item.oid)"
                    >删除</view
                  >
                  <view class="card-img" @tap="downloadMoka(item.mocha_url)"
                    >下载原图</view
                  >
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
            <block v-if="list.length">
              <view class="card-box" v-for="(item, index) in list" :key="index">
                <image mode="widthFix" :src="item.mocha_url"></image>
                <view class="card-bottom">
                  <view class="card-delete" @tap="cardDelete(item.oid)"
                    >删除</view
                  >
                  <view class="card-img" @tap="downloadMoka(item.mocha_url)"
                    >下载原图</view
                  >
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
    <cover-view
      :class="`subbtn_bottom_block ${isIphoneX ? 'fix-iphonex-button' : ''}`"
    >
      <cover-view class="subbtn_bottom">
        <button @tap="makeMoka">制作模卡</button>
      </cover-view>
    </cover-view>
  </view>
</template>

<script>
import "./index.scss";
import { mochaList, mochaEvent } from "../../../../api/index";
import { errortip, openPage } from "../../../../utils/util";
export default {
  name: "myModelCardlist",
  data() {
    return {
      isIphoneX: false,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      // tab切换
      currentTab: 0,
      list: [],
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
    makeMoka() {
      openPage("/packageMoka/pages/moka/modelcard/index");
    },
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
        this.query();
      }
    },
    query() {
      let params = {
        page: this.pageNum,
        per_page: this.pageSize,
      };
      if (this.currentTab == 1) {
        params.mocha_type = "non_personal";
      } else {
        params.mocha_type = "oneself";
      }
      this.mochaList(params);
    },
    scrollToLower() {
      this.pageNum++;
      this.query();
    },
    cardDelete(oid) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: `确定要删除这张模卡吗？`,
        success: function (res) {
          if (res.confirm) {
            let params = { oid: oid, event_type: -200 };
            _this.mochaEvent(params);
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    downloadMoka(url) {
      wx.showModal({
        title: "温馨提示",
        content: "下载并保存到相册吗？",
        confirmColor: "#108EE9",
        success: function (res) {
          if (res.confirm) {
            wx.showLoading({
              title: "下载中...",
            });
            wx.downloadFile({
              url: url,
              success: function (res) {
                wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: (res) => {
                    wx.hideLoading();
                    wx.showToast({
                      title: "已保存至相册",
                      icon: "success",
                      duration: 3000,
                    });
                  },
                  faile: (err) => {
                    console.log("失败！");
                  },
                });
              },
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    async mochaList(params) {
      try {
        let res = await mochaList(params);
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
    async mochaEvent(params) {
      try {
        let res = await mochaEvent(params);
        errortip("删除成功");
        this.pageNum = 1;
        this.list = [];
        this.query();
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
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
