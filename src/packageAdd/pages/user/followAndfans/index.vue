<template>
  <view class="followAndfans">
    <view class="tab">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0, 'follow')"
        >关注</view
      >
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1, 'fans')"
        >粉丝</view
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
                class="follow_and_fans_box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="follow_and_fans_left">
                  <image
                    :src="
                      item.avatar
                        ? item.avatar
                        : 'https://yuepai-oss.qubeitech.com/static/avatar_default.png'
                    "
                    class="avatar"
                    @tap="gozhuye(item.followed_id)"
                  ></image>
                  <view class="follow_and_fans_info">
                    <text class="follow_and_fans_nickname">{{
                      item.nickname
                    }}</text>
                    <text class="follow_and_fans_identity">{{
                      item.career_list.join("|")
                    }}</text>
                  </view>
                </view>
                <view class="follow_and_fans_rt">
                  <view
                    v-if="item.is_followed == 0"
                    class="followed_btn"
                    @tap="unfollow(item)"
                    >已关注</view
                  >
                  <view
                    v-if="item.is_followed == 1"
                    @tap="unfollow(item)"
                    class="followed_btn"
                    >互相关注</view
                  >
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
              <view
                class="follow_and_fans_box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="follow_and_fans_left">
                  <image
                    :src="
                      item.avatar
                        ? item.avatar
                        : 'https://yuepai-oss.qubeitech.com/static/avatar_default.png'
                    "
                    class="avatar"
                    @tap="gozhuye(item.follower_id)"
                  ></image>
                  <view class="follow_and_fans_info">
                    <text class="follow_and_fans_nickname">{{
                      item.nickname
                    }}</text>
                    <text class="follow_and_fans_identity">{{
                      item.career_list.join("|")
                    }}</text>
                  </view>
                </view>
                <view class="follow_and_fans_rt">
                  <view
                    v-if="item.is_follower == 0"
                    class="followed_btn_red"
                    @tap="follow(item)"
                    >回粉</view
                  >
                  <view
                    v-if="item.is_follower == 1"
                    class="followed_btn"
                    @tap="unfollow(item)"
                    >互相关注</view
                  >
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
import {
  followerList,
  followedList,
  userFollow,
  userUnfollow,
} from "../../../../api/index";
import { openPage } from "../../../../utils/util";
export default {
  name: "followAndfans",
  data() {
    return {
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      type: "follow",
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
    gozhuye(uuid) {
      openPage("/packageMoka/pages/moka/editshow/index?uuid=" + uuid);
    },
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
    follow(row) {
      this.userFollow({
        follow_uuid: row.followed_id || row.follower_id,
      });
    },
    unfollow(row) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定不再关注？",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
            _this.userUnfollow({
              unfollow_uuid: row.followed_id || row.follower_id,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    query() {
      let params = {
        page: this.pageNum,
        per_page: this.pageSize,
      };
      if (this.type == "follow") {
        this.followerList(params);
      } else {
        this.followedList(params);
      }
    },
    async followerList(params) {
      try {
        let res = await followerList(params);
        if (!res.data.data.items || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
    async followedList(params) {
      try {
        let res = await followedList(params);
        if (!res.data.data.items || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
    async userFollow(params) {
      try {
        let res = await userFollow(params);
        this.list = [];
        this.query();
      } catch (error) {}
    },
    async userUnfollow(params) {
      try {
        let res = await userUnfollow(params);
        this.list = [];
        this.query();
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    if (options.type) {
      this.type = options.type;
      if (this.type == "follow") {
        this.currentTab = 0;
      } else {
        this.currentTab = 1;
      }
    }
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
