<template>
  <view class="apply">
    <view class="tab">
      <!-- <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0, 'NE')"
        >约拍</view
      > -->
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1, 'NT')"
        >通告</view
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
              >
                <view class="invite-top">
                  <view
                    class="invite-img"
                    @tap.stop="goZhuye(item.visited.uuid)"
                  >
                    <image :src="item.visited.avatar"></image>
                  </view>
                  <view class="invite-info">
                    <view class="invite-name">
                      {{ item.visited.nickname }}
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                        class="list_sex"
                        v-if="item.visited.sex == 1"
                      ></image>
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                        class="list_sex"
                        v-if="item.visited.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visited.career_list[0] }}｜
                      {{ item.visited.province_name }}</view
                    >
                    <view class="dian" @tap.stop="moreClick(item.sid, item)">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/common/manager.png"
                      ></image
                    ></view>
                  </view>
                </view>
                <view class="invite-desc"
                  >约拍理由：
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
            @scrolltolower="scrollToLower"
            :lower-threshold="200"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="invite-box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="invite-top">
                  <view
                    class="invite-img"
                    @tap.stop="goZhuye(item.visited.uuid)"
                  >
                    <image :src="item.visited.avatar"></image>
                  </view>
                  <view class="invite-info">
                    <view class="invite-name">
                      {{ item.visited.nickname }}
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                        class="list_sex"
                        v-if="item.visited.sex == 1"
                      ></image>
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                        class="list_sex"
                        v-if="item.visited.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visited.career_list[0] }}｜
                      {{ item.visited.province_name }}</view
                    >
                    <view class="dian" @tap.stop="moreClick(item.sid, item)"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/common/manager.png"
                      ></image
                    ></view>
                  </view>
                </view>
                <view class="invite-desc"
                  >约拍理由：
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
import { manageApplyList, manageApplyEvent } from "../../../api/index";
import { errortip, openPage } from "../../../utils/util";
import clickThrottle from "../../../utils/clickThrottle";
import "./index.scss";
export default {
  name: "apply",
  data() {
    return {
      currentTab: 1,
      type: "NE",
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
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
    query() {
      let params = {
        type: this.type,
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.manageApplyList(params);
    },
    moreClick(sid, row) {
      let _this = this;
      wx.showActionSheet({
        itemList: ["删除", "投诉"],
        success(res) {
          switch (res.tapIndex) {
            case 0:
              _this.Delete(sid);
              break;
            case 1:
              console.log("投诉");
              openPage(
                "/packageMsg/pages/complaint/index?visited_id=" +
                  row.visited_id +
                  "&avatar=" +
                  row.visited.avatar +
                  "&nickname=" +
                  row.visited.nickname +
                  "&province_name=" +
                  row.visited.province_name +
                  "&career=" +
                  row.visited.career_list[0]
              );
              break;
          }
        },
        fail(res) {
          console.log(res.errMsg);
        },
      });
    },
    Delete(sid) {
      this.manageApplyEvent({
        visitor_status: -200,
        sid: sid,
      });
    },
    goZhuye(uuid) {
      if (!clickThrottle()) return;
      openPage("/packageMoka/pages/moka/editshow/index?uuid=" + uuid);
    },
    async manageApplyList(params) {
      try {
        let res = await manageApplyList(params);
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
        console.log(this.list);
      } catch (error) {}
    },
    async manageApplyEvent(params) {
      try {
        let res = await manageApplyEvent(params);
        this.pageNum = 1;
        this.list = [];
        this.query();
      } catch (error) {}
    },
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
