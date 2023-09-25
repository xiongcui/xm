<template>
  <view class="my-activity">
    <block v-if="list.length > 0">
      <view
        class="activity-box"
        v-for="(item, index) in list"
        :key="index"
        @tap="goDetail(item.apply_oid)"
      >
        <view class="activity-top">
          <view class="activity-name"> {{ item.partner_name }}</view>
          <view class="activity-status" v-if="item.attend_status == '待参与'">{{
            item.attend_status
          }}</view>
          <view
            class="activity-status2"
            v-else-if="item.attend_status == '活动中'"
            >{{ item.attend_status }}</view
          >
          <view class="activity-status3" v-else>{{ item.attend_status }}</view>
        </view>
        <view class="activity-ct">
          <view class="activity-left">
            <image :src="item.main_cover" mode="aspectFill"></image>
          </view>
          <view class="activity-right">
            <view class="activity-title"> {{ item.title }} </view>
            <view class="activity-location"> {{ item.address }}</view>
            <view class="activity-time">
              <text class="activity-txt">{{ item.begin_datetime }}</text>
            </view>
            <view class="activity-session">
              <view class="activity-session-txt">{{ item.enter_desc }}</view>
              <text class="activity-price">
                <text class="price-blod">{{ item.original_amount_label }}</text>
                <text v-if="item.original_amount_label !== '免费'">元</text>
              </text>
            </view>
          </view>
        </view>
        <view class="activity-bt">
          <view class="more" @tap.stop="more(item.apply_oid)">更多</view>
          <view class="activity-btns">
            <text class="btn" @tap.stop="membersClick(item.sport_oid)"
              >组员</text
            >
          </view>
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
    <!--组员信息-->
    <view class="bottom-modal" v-if="visible" @tap="close">
      <view class="bottom-content">
        <view class="bottom-title"> 组员信息 </view>
        <view class="session">
          <block v-for="(item, index) in sessionList" :key="index">
            <view class="session-title" v-if="item.enter_display == 'folded'">
              <view class="session-lable">
                <text class="session-txt"> {{ item.scene_name }}</text>
                <view class="session-line"></view>
              </view>
            </view>
            <view
              class="distinguish"
              v-for="(sceneItem, sceneIndex) in item.scene_data"
              :key="sceneIndex"
            >
              <view class="candidate-name" v-if="sceneItem.teams_name">{{
                sceneItem.teams_name
              }}</view>
              <view class="group-box" v-if="sceneItem.teams_list.listed">
                <view class="group-title">
                  <text class="group-blod">{{
                    sceneItem.teams_list.listed.info.title
                  }}</text>
                  <text class="group-num">{{
                    sceneItem.teams_list.listed.info.desc
                  }}</text>
                </view>
                <block v-if="sceneItem.teams_list.listed.show">
                  <block
                    v-for="(sceneDetailItem, sceneDetailIndex) in sceneItem
                      .teams_list.listed.details"
                    :key="sceneDetailIndex"
                  >
                    <view
                      class="group"
                      v-if="sceneDetailItem.member_list.length"
                    >
                      <view
                        class="group-top"
                        v-if="
                          item.enter_display == 'folded' &&
                          sceneDetailItem.group_name
                        "
                      >
                        <view class="group-left">
                          <image
                            src="https://yuepai-oss.qubeitech.com/static/images/group.png"
                          ></image>
                          {{ sceneDetailItem.group_name }}
                        </view>
                      </view>
                      <view
                        class="group-list"
                        v-for="(
                          memberItem, memberIndex
                        ) in sceneDetailItem.member_list"
                        :key="memberIndex"
                      >
                        <image :src="memberItem.apply_avatar"></image>
                        <view class="group-identity-list">{{
                          memberItem.apply_career
                        }}</view>
                        <view
                          class="group-home"
                          @tap="goZhuye(memberItem.apply_uuid)"
                          >看主页</view
                        >
                      </view>
                    </view>
                  </block>
                </block>
                <view class="none-data" v-else> 暂无报名信息 </view>
              </view>
              <view class="group-box" v-if="sceneItem.teams_list.waiting">
                <view class="group-title">
                  <text class="group-blod">{{
                    sceneItem.teams_list.waiting.info.title
                  }}</text>
                  <text class="group-num">{{
                    sceneItem.teams_list.waiting.info.desc
                  }}</text>
                </view>
                <block v-if="sceneItem.teams_list.waiting.show">
                  <block
                    v-for="(sceneDetailItem, sceneDetailIndex) in sceneItem
                      .teams_list.waiting.details"
                    :key="sceneDetailIndex"
                  >
                    <view
                      class="group"
                      v-if="sceneDetailItem.member_list.length"
                    >
                      <view
                        class="group-top"
                        v-if="
                          item.enter_display == 'folded' &&
                          sceneDetailItem.group_name
                        "
                      >
                        <view class="group-left">
                          <image
                            src="https://yuepai-oss.qubeitech.com/static/images/group.png"
                          ></image>
                          {{ sceneDetailItem.group_name }}
                        </view>
                      </view>
                      <view
                        class="group-list"
                        v-for="(
                          memberItem, memberIndex
                        ) in sceneDetailItem.member_list"
                        :key="memberIndex"
                      >
                        <image :src="memberItem.apply_avatar"></image>
                        <view class="group-identity-list">{{
                          memberItem.apply_career
                        }}</view>
                        <view
                          class="group-home"
                          @tap="goZhuye(memberItem.apply_uuid)"
                          >看主页</view
                        >
                      </view>
                    </view>
                  </block>
                </block>
                <view class="none-data" v-else> 暂无报名信息 </view>
              </view>
            </view>
          </block>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import {
  myActivityList,
  applyMember,
  myActivityEvent,
} from "../../../api/index.js";
import clickThrottle from "../../../utils/clickThrottle";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "myActivity",
  data() {
    return {
      visible: false,
      pageNum: 1,
      pageSize: 10,
      list: [],
      loading: true,
      sessionList: [],
    };
  },
  methods: {
    goZhuye(uuid) {
      if (!clickThrottle()) return;
      openPage("/packageMoka/pages/moka/editshow/index?uuid=" + uuid);
    },
    goDetail(uuid) {
      if (!clickThrottle()) return;
      openPage("/packageActivity/pages/myActivityDetail/index?uuid=" + uuid);
    },
    close() {
      this.visible = false;
    },
    more(apply_oid) {
      let _this = this;
      wx.showActionSheet({
        itemList: ["取消报名", "删除订单"],
        success(res) {
          switch (res.tapIndex) {
            case 0:
              console.log("取消报名");
              wx.showModal({
                title: "温馨提示",
                content: "取消后将无法参与活动【退款订单审核通过后将原路返回】",
                confirmColor: "#108EE9",
                confirmText: "再考虑下",
                cancelText: "坚决取消",
                success: function (res) {
                  if (res.confirm) {
                  } else if (res.cancel) {
                    console.log("用户点击取消");
                    _this.myActivityEvent({
                      event_type: -100,
                      apply_oid: apply_oid,
                    });
                  }
                },
              });
              break;
            case 1:
              console.log("删除订单");
              wx.showModal({
                title: "温馨提示",
                content: "删除后将无法查看订单状态",
                confirmColor: "#108EE9",
                success: function (res) {
                  if (res.confirm) {
                    _this.myActivityEvent({
                      event_type: -200,
                      apply_oid: apply_oid,
                    });
                  } else if (res.cancel) {
                    console.log("用户点击取消");
                  }
                },
              });
              break;
          }
        },
        fail(res) {
          console.log(res.errMsg);
        },
      });
    },
    membersClick(oid) {
      if (!clickThrottle()) return;
      this.applyMember({
        sport_oid: oid,
      });
    },
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
      this.myActivityList(
        {
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type
      );
    },
    async applyMember(params) {
      try {
        let res = await applyMember(params);
        this.visible = true;
        this.sessionList = res.data.data;
      } catch (error) {}
    },
    async myActivityEvent(params) {
      try {
        let res = await myActivityEvent(params);
        if (params.event_type == -100) {
          errortip("取消报名成功");
        } else if (params.event_type == -200) {
          errortip("删除订单成功");
        }
        this.pageNum = 1;
        this.list = [];
        this.query("init");
      } catch (error) {}
    },
    async myActivityList(params, type) {
      try {
        let res = await myActivityList(params);
        //隐藏loading 提示框
        wx.hideLoading();

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();

        if (type == "init") {
          this.list = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.list = this.list.concat(data);
          this.loading = true;
        }
      } catch (error) {}
    },
  },
  created() {
    this.query("init");
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
};
</script>

<style lang="scss" scoped></style>
