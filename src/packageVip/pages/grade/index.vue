<template>
  <view class="grade">
    <view class="grade-top">
      <view class="grade-info">
        <view class="grade-info-left">
          <view class="grade-info-box">
            <view class="grade-name">{{ nickname }}</view>
            <view class="grade-leavel">{{ level }}</view>
          </view>
          <view class="growth">成长值：{{ growth }}</view>
        </view>
        <view class="grade-info-rt" @tap="goGrowthGuide"> 成长指南 </view>
      </view>
      <swiper class="swiper-container" @change="bindChange" :current="current">
        <swiper-item
          class="swiper-item"
          v-for="(item, index) in list"
          :key="index"
          @tap="clickChange(index)"
        >
          <text
            class="swiper-leavel"
            :class="item.proc == 'doing' ? 'active' : 'scale'"
            v-if="item.proc == 'done' || item.proc == 'doing'"
            >{{ item.level }}</text
          >
          <text
            v-else
            class="swiper-leavel grey"
            :class="item.proc == 'doing' ? 'active' : 'scale'"
          >
            {{ item.level }}
          </text>
        </swiper-item>
      </swiper>
    </view>
    <view class="grade-card">
      <text class="triangle"></text>
      <view class="schedule">
        <view
          class="schedule-bg"
          :style="{
            width: cur_level_item.pct_rate * 100 + '%',
          }"
        ></view>
        <text class="schedule-num">{{ cur_level_item.pct }}</text>
      </view>
      <view class="grade-card-txt">{{ cur_level_item.tips }}</view>
      <view class="fast-grade">
        <text class="fast-grade-txt">如何才能快速成长呢？</text>
        <text class="fast-grade-btn" @tap="goVip">成为VIP会员翻倍成长</text>
      </view>
    </view>
    <view class="grade-ct">
      <view class="grade-ct-title"> 升级到{{ next_level }}，只需再 </view>
      <block v-if="dailyList.length">
        <view class="task-split">/ 日常任务 /</view>
        <view class="task-list" v-for="(item, index) in dailyList" :key="index">
          <view class="task-box">
            <view class="task-left">
              <view class="task-title-box">
                <text class="task-tag">{{ item.limit_tips }}</text>
                <text class="task-title">{{ item.order_name }}</text>
              </view>
              <view class="task-label">
                <view class="coin-box">
                  <text class="coin-tag">金币</text>
                  <text class="coin-num">{{ item.common_coin }}</text>
                </view>
                <view class="growup-box">
                  <text class="growup-tag">成长值</text>
                  <text class="growup-num">普通：{{ item.common_growth }}</text>
                  <text class="growup-num">会员：{{ item.member_growth }}</text>
                </view>
              </view>
              <view class="task-schedule" v-if="item.is_schedule">
                {{ item.schedule_desc }}
              </view>
            </view>
            <view class="task-rt">
              <text class="completed" v-if="item.finish_status">{{
                item.finish_label
              }}</text>
              <text
                class="tocomplete"
                v-else
                @tap="openUrl(item.redirect_url)"
                >{{ item.finish_label }}</text
              >
            </view>
          </view>
        </view>
      </block>
      <block v-if="commonList.length">
        <view class="task-split">/ 新手任务 /</view>
        <view
          class="task-list"
          v-for="(item, index) in commonList"
          :key="index"
        >
          <view class="task-box">
            <view class="task-left">
              <view class="task-title-box">
                <text class="task-tag">{{ item.limit_tips }}</text>
                <text class="task-title">{{ item.order_name }}</text>
              </view>
              <view class="task-label">
                <view class="coin-box">
                  <text class="coin-tag">金币</text>
                  <text class="coin-num">{{ item.common_coin }}</text>
                </view>
                <view class="growup-box">
                  <text class="growup-tag">成长值</text>
                  <text class="growup-num">普通：{{ item.common_growth }}</text>
                  <text class="growup-num">会员：{{ item.member_growth }}</text>
                </view>
              </view>
              <view class="task-schedule" v-if="item.is_schedule">
                {{ item.schedule_desc }}
              </view>
            </view>
            <view class="task-rt">
              <text class="completed" v-if="item.finish_status">{{
                item.finish_label
              }}</text>
              <text
                class="tocomplete"
                v-else
                @tap="openUrl(item.redirect_url)"
                >{{ item.finish_label }}</text
              >
            </view>
          </view>
        </view>
      </block>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { ruleList, growthInfo } from "../../../api/index.js";
import { openPage } from "../../../utils/util";
export default {
  name: "grade",
  data() {
    return {
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      duration: 500,
      interval: 5000,
      nickname: "",
      growth: "",
      level: "",
      //   list: ["LV1", "LV2", "LV3", "LV4", "LV5", "LV6", "LV7"],
      list: [],
      current: 0,
      commonList: [],
      dailyList: [],
      all_level_item: {},
      cur_level_item: {
        level: "",
        limit: 0,
        tips: "",
      },
      next_level: "",
    };
  },
  methods: {
    bindChange(e) {
      this.current = e.detail.current;
      this.cur_level_item =
        this.all_level_item[this.list[e.detail.current].level];
    },
    clickChange(index) {
      this.current = index;
      this.cur_level_item = this.all_level_item[this.list[index].level];
    },
    goGrowthGuide() {
      openPage("/packageVip/pages/growthGuide/index");
    },
    queryRuleList() {
      this.ruleList({
        class_type: "growth",
      });
    },
    openUrl(url) {
      openPage(url);
    },
    goVip() {
      openPage("/packageVip/pages/vip/index");
    },
    async ruleList(params) {
      try {
        let res = await ruleList(params);
        if (res.data.data) {
          //   this.taskList = res.data.data;
          this.commonList = res.data.data.common;
          this.dailyList = res.data.data.daily;
        } else {
          this.pageNum = 1;
          this.commonList = [];
          this.dailyList = [];
          //   this.taskList = [];
        }
      } catch (error) {}
    },
    async growthInfo(params) {
      try {
        let res = await growthInfo(params);
        this.nickname = res.data.data.growth.nickname;
        this.growth = res.data.data.growth.growth;
        this.level = res.data.data.growth.level;
        this.next_level = res.data.data.growth.next_level;
        this.list = res.data.data.all_level_list;
        this.all_level_item = res.data.data.all_level_item;
        this.cur_level_item = res.data.data.cur_level_item;
        res.data.data.all_level_list.map((item, index) => {
          if (item.proc == "doing") {
            this.current = index;
          }
        });
      } catch (error) {}
    },
  },
  mounted() {
    this.growthInfo("");
    this.queryRuleList();
  },
};
</script>

<style lang="scss" scoped></style>
