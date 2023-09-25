<template>
  <view class="my-activity-detail">
    <view class="activity-detail-top" @tap="showOrderInfo">
      <view class="activity-status">
        <view class="circle-red"></view>
        <text class="activity-txt-red">{{ status }}</text>
      </view>
      <view class="activity-right">
        <image
          mode="aspectFit"
          src="https://yuepai-oss.qubeitech.com/static/images/user/index/right.png"
        ></image>
      </view>
    </view>
    <view class="activity-box">
      <view class="activity-top">
        <view class="activity-name"> {{ partner_name }}</view>
      </view>
      <view class="activity-ct">
        <view class="activity-left">
          <image :src="main_cover" mode="aspectFill"></image>
        </view>
        <view class="activity-right">
          <view class="activity-title"> {{ title }} </view>
          <view class="activity-location"> {{ address }}</view>
          <view class="activity-time">
            <text class="activity-txt">{{ begin_datetime }}</text>
          </view>
        </view>
      </view>
      <view class="activity-bt">
        <view class="group-top">
          <view class="group-label">{{ divide_teams_name }}</view>
          <view class="group-identity">{{ enter_desc }}</view>
        </view>
        <view class="group-info">
          <view class="group-item" v-for="(item, index) in list" :key="index">
            <text>{{ item.name }}</text>
            <text>{{ item.value }}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="bottom-modal" v-if="visible" @tap="close">
      <view class="bottom-content">
        <view class="bottom-title"> 详细信息 </view>
        <!-- <view
          class="activity-status-box"
          v-for="(item, index) in flowing"
          :key="index"
        >
          <view class="activity-status">
            <view class="circle-in-progress"></view>
            <text class="activity-txt-in-progress">{{ item.status }}</text>
            <text class="activity-time-in-progress">{{ item.time }}</text>
          </view>
        </view> -->
        <view
          class="activity-status-box"
          v-for="(item, index) in flowing"
          :key="index"
        >
          <view class="activity-status">
            <view class="circle-not-started"></view>
            <text class="activity-txt-not-started">{{ item.status }}</text>
            <text class="activity-time-not-started">{{ item.time }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { sportInfo } from "../../../api/index.js";
export default {
  name: "myActivityDetail",
  data() {
    return {
      visible: false,
      apply_oid: "",
      status: "",
      title: "",
      address: "",
      begin_datetime: "",
      divide_teams_name: "",
      enter_desc: "",
      list: [],
      flowing: [],
      partner_name: "",
      main_cover: "",
    };
  },
  methods: {
    showOrderInfo() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    async sportInfo(params) {
      try {
        let res = await sportInfo(params);
        this.status = res.data.data.status.label;
        this.title = res.data.data.source.title;
        this.address = res.data.data.source.address;
        this.begin_datetime = res.data.data.source.begin_datetime;
        this.divide_teams_name = res.data.data.source.divide_teams_name;
        this.enter_desc = res.data.data.source.enter_desc;
        this.main_cover = res.data.data.source.main_cover;
        this.list = res.data.data.expense.concat(res.data.data.payment);
        this.flowing = res.data.data.flowing;
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    if (options.uuid) {
      this.apply_oid = options.uuid;
    }
    this.sportInfo({
      apply_oid: this.apply_oid,
    });
  },
};
</script>

<style lang="scss" scoped></style>
