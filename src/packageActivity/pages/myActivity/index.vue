<template>
  <view class="my-activity">
    <view class="activity-box">
      <view class="activity-top">
        <view class="activity-name"> 虾米摄影俱乐部</view>
        <view class="activity-status">待参与</view>
      </view>
      <view class="activity-ct">
        <view class="activity-left">
          <image
            src="https://yuepai-oss.qubeitech.com/notice/111111/34fb075d-02c0-11ee-8f34-812b5b24112e-qa60.png"
            mode="aspectFill"
          ></image>
        </view>
        <view class="activity-right">
          <view class="activity-title"> 标题标题标题标题标题标题标题 </view>
          <view class="activity-location"> 北京奥林匹克公园</view>
          <view class="activity-time">
            <text class="activity-txt">2023.07.02 周六 15:00</text>
          </view>
          <view class="activity-session">
            <view class="activity-session-txt"> 活动场次 ｜ 摄影师 </view>
            <text class="activity-price">
              <text class="price-blod">200</text>
              <text>元</text>
            </text>
          </view>
        </view>
      </view>
      <view class="activity-bt">
        <view class="more" @tap="more">更多</view>
        <view class="activity-btns">
          <text class="btn">组员</text>
        </view>
      </view>
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
export default {
  name: "myActivity",
  data() {
    return {
      visible: false,
      sessionList: [
        {
          enter_display: "direct",
          scene_data: [
            {
              group_oid: "GP230912151817241383550",
              teams_list: {
                listed: {
                  details: [
                    {
                      group_name: null,
                      member_list: [],
                      teams_oid: "ST230912151817241376905",
                    },
                  ],
                  info: {
                    curr_number: 0,
                    desc: "(0/2)",
                    enter_number: 2,
                    title: "已报名",
                  },
                  show: 0,
                },
              },
              teams_name: "分组候选区",
            },
          ],
          scene_name: "场次（常规）",
          scene_oid: "SS230912151817241348320",
          sport_oid: "SP230912151817170660915",
        },
        {
          enter_display: "direct",
          scene_data: [
            {
              group_oid: "GP230912151817241406158",
              teams_list: {
                listed: {
                  details: [
                    {
                      group_name: null,
                      member_list: [],
                      teams_oid: "ST230912151817241412867",
                    },
                  ],
                  info: {
                    curr_number: 0,
                    desc: "(0/2)",
                    enter_number: 2,
                    title: "已报名",
                  },
                  show: 0,
                },
              },
              teams_name: "分组候选区",
            },
          ],
          scene_name: "场次（随机）",
          scene_oid: "SS230912151817241397168",
          sport_oid: "SP230912151817170660915",
        },
        {
          enter_display: "folded",
          scene_data: [
            {
              group_oid: "GP230912151817241434142",
              teams_list: {
                listed: {
                  details: [
                    {
                      group_name: "摄影师",
                      member_list: [],
                      teams_oid: "ST230912151817241439716",
                    },
                    {
                      group_name: "模特",
                      member_list: [],
                      teams_oid: "ST230912151817241446692",
                    },
                  ],
                  info: {
                    curr_number: 0,
                    desc: "(0/2)",
                    enter_number: 2,
                    title: "已报名",
                  },
                  show: 0,
                },
              },
              teams_name: "分组候选区",
            },
          ],
          scene_name: "场次（随分）",
          scene_oid: "SS230912151817241426255",
          sport_oid: "SP230912151817170660915",
        },
        {
          enter_display: "folded",
          scene_data: [
            {
              group_oid: "GP230912151817241465953",
              teams_list: {
                listed: {
                  details: [
                    {
                      group_name: "摄影师",
                      member_list: [],
                      teams_oid: "ST230912151817241469652",
                    },
                    {
                      group_name: "模特",
                      member_list: [],
                      teams_oid: "ST230912151817241477786",
                    },
                  ],
                  info: {
                    curr_number: 0,
                    desc: "(0/2)",
                    enter_number: 2,
                    title: "已报名",
                  },
                  show: 0,
                },
              },
              teams_name: "汉服约拍",
            },
          ],
          scene_name: "场次（固定）",
          scene_oid: "SS230912151817241456925",
          sport_oid: "SP230912151817170660915",
        },
      ],
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
    more() {
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
  },
};
</script>

<style lang="scss" scoped></style>
