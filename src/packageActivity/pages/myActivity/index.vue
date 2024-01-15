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
            <text
              class="btn"
              @tap.stop="goSunbathing(item.apply_oid)"
              v-if="item.attend_status == '已结束'"
              >评价晒单</text
            >
            <text class="btn" @tap.stop="membersClick(item.sport_oid)"
              >组员</text
            >
            <text class="btn" @tap.stop="addOrganizer(item.partner_wechat_qrc)"
              >添加组织者</text
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
        <view class="application-list">
          <view
            class="application-list-item"
            v-for="(item, index) in memberList"
            :key="index"
          >
            <view class="application-title"> {{ item.scene_name }} </view>
            <view
              class="application-box"
              v-for="(sceneItem, sceneIndex) in item.scene_items"
              :key="sceneIndex"
            >
              <view class="application-role" v-if="sceneItem.is_show_roles_name"
                ><text>{{ sceneItem.roles_name }}</text></view
              >
              <view class="application-tip">{{ sceneItem.apply_desc }}</view>
              <view
                class="application-user"
                v-for="(user, userIndex) in sceneItem.apply_items.listed"
                :key="userIndex"
              >
                <view class="application-left">
                  <image :src="user.apply_avatar"></image>
                  <text>{{ user.apply_nickname }}</text>
                </view>
                <view class="application-ct">
                  <block v-if="user.sex !== null">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/boy.png"
                      v-if="user.sex == 1"
                    ></image>
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/girl.png"
                      v-if="user.sex == 0"
                    ></image>
                  </block>
                  <text>{{ user.apply_career }}</text>
                </view>
                <view class="application-rt" @tap="goZhuye(user.apply_uuid)"
                  >看主页</view
                >
              </view>
              <view
                class="gradeing"
                v-if="sceneItem.apply_items.waiting.length"
              >
                <text>等位中</text>
              </view>
              <view
                class="application-user"
                v-for="(waituser, waituserIndex) in sceneItem.apply_items
                  .waiting"
                :key="waituserIndex"
              >
                <view class="application-left">
                  <image :src="waituser.apply_avatar"></image>
                  <text>{{ waituser.apply_nickname }}</text>
                </view>
                <view class="application-ct">
                  <block v-if="waituser.sex !== null">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/boy.png"
                      v-if="waituser.sex == 1"
                    ></image>
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/girl.png"
                      v-if="waituser.sex == 0"
                    ></image>
                  </block>
                  <text>{{ waituser.apply_career }}</text>
                </view>
                <view class="application-rt" @tap="goZhuye(waituser.apply_uuid)"
                  >看主页</view
                >
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!--添加组织者-->
    <view class="bottom-modal" v-if="weChatVisible" @tap="weChatClose">
      <view class="weChat-content">
        <view class="weChat-title"> 添加活动组织者微信 </view>
        <view class="weChat-box">
          <image
            :show-menu-by-longpress="true"
            class="weChat-img"
            mode="widthFix"
            :src="qrcode"
          ></image>
        </view>
      </view>
    </view>
    <!--添加组织者-->
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
      weChatVisible: false,
      pageNum: 1,
      pageSize: 10,
      list: [],
      loading: true,
      sessionList: [],
      memberList: [],
      qrcode: "",
    };
  },
  methods: {
    goSunbathing(oid) {
      openPage("/packageActivity/pages/sunbathing/index?oid=" + oid);
    },
    goZhuye(uuid) {
      if (!clickThrottle()) return;
      openPage("/packageMoka/pages/moka/editshow/index?uuid=" + uuid);
    },
    goDetail(uuid) {
      if (!clickThrottle()) return;
      openPage("/packageActivity/pages/myActivityDetail/index?uuid=" + uuid);
    },
    weChatClose() {
      this.weChatVisible = false;
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
    addOrganizer(src) {
      this.qrcode = src;
      this.weChatVisible = true;
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
        this.memberList = res.data.data;
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
