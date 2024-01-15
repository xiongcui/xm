<template>
  <view class="comment">
    <view class="comment-list">
      <view
        class="comment-item"
        v-for="(item, index) in commentList"
        :key="index"
      >
        <view class="comment-box">
          <view class="comment-top">
            <view class="comment-box-left">
              <image :src="item.comment_avatar"></image>
            </view>
            <view class="comment-box-rt">
              <view class="comment-name"> {{ item.comment_nickname }} </view>
              <view class="comment-ct">
                <i-rate
                  class="evaluate-rate"
                  :size="16"
                  :value="item.score"
                  :key="index"
                >
                </i-rate>
              </view>
            </view>
          </view>
          <view class="comment-bt">
            <view class="comment-txt"> {{ item.content }} </view>
            <view class="comment-date">{{ item.create_at }} </view>
          </view>
        </view>
        <view
          class="comment-box child-comment"
          v-for="(descendantsItem, descendantsIndex) in item.descendants"
          :key="descendantsIndex"
        >
          <view class="comment-top">
            <view class="comment-box-left">
              <image :src="descendantsItem.body.comment_avatar"></image>
            </view>
            <view class="comment-box-rt">
              <view class="comment-name">
                {{ descendantsItem.body.comment_nickname }}
              </view>
              <view class="comment-ct">
                <block v-if="descendantsItem.parent.comment_nickname">
                  <view class="comment-txt"> 回复 </view>
                  <view class="comment-reply-nickname">{{
                    descendantsItem.parent.comment_nickname
                  }}</view>
                </block>
                <view class="comment-txt"
                  ><i-rate
                    class="evaluate-rate"
                    :size="16"
                    :value="item.score"
                    :key="index"
                  >
                  </i-rate
                ></view>
              </view>
            </view>
          </view>
          <view class="comment-bt">
            <view class="comment-txt">
              {{ descendantsItem.body.content }}
            </view>
            <view class="comment-date">
              {{ descendantsItem.body.create_at }}</view
            >
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { comment } from "../../../api/index.js";
export default {
  name: "comment",
  data() {
    return {
      pid: "",
      commentList: [],
      commentTotal: 0,
      pageNum: 1,
      pageSize: 10,
      loading: true,
    };
  },
  methods: {
    // 加载更多
    onMore() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading();
      //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      wx.showLoading({
        title: "数据加载中...",
      });
      this.loading = false;
      this.query("more");
    },
    query(type) {
      if (type == "init") this.pageNum = 1;
      this.comment(
        {
          partner_pid: this.pid,
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type
      );
    },
    async comment(params, type) {
      try {
        let res = await comment(params);
        //隐藏loading 提示框
        wx.hideLoading();

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();

        if (type == "init") {
          this.commentList = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.commentList = this.commentList.concat(data);
          this.loading = true;
        }
      } catch (error) {}
    },
  },
  onPullDownRefresh: function () {
    this.query("init");
  },
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading) {
      this.onMore();
    }
  },
  onLoad: function (options) {
    if (options.pid) {
      this.pid = options.pid;
      this.query("init");
    }
  },
};
</script>

<style lang="scss" scoped></style>
