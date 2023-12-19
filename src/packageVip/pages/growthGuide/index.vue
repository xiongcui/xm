<template>
  <view class="growth-guide">
    <view class="growth-guide-box">
      <view class="growth-guide-title">什么是Lv等级？</view>
      <view class="growth-guide-txt"
        >Lv等级是在平台内的成长记录，它也代表着每个人在这里投入的时长。
      </view>
      <view class="growth-guide-txt"
        >同时，Lv等级也是在这里的社交背书，是一种“江湖资历”的展示。</view
      >
      <view class="growth-guide-txt"
        >假如你在一个地方住了十年对于新搬来的邻居，你是不是更值得被信任?</view
      >
      <view class="growth-guide-txt"
        >同理，一个高等级用户，一定是更了解这里、对这里更有感情和认同感的人。</view
      >
      <view class="growth-guide-txt"
        >TA会更加关心和爱护这里的一草一木；
        TA会自觉去维护这里的规则和秩序:</view
      >
      <view class="growth-guide-txt">
        TA会愿意以一位在这里”住了”多年的居民身份迎接新入住的朋友；</view
      >
      <view class="growth-guide-txt"> ……</view>
      <view class="growth-guide-txt">
        而一个新注册的用户，是不是也更愿意去结交或相信一个等级较高的人呢?~</view
      >
    </view>
    <view class="growth-guide-box">
      <view class="growth-guide-title">如何快速升级？</view>
      <view class="growth-guide-txt"
        >Lv等级的升高是积累成长值的过程和结果，你获得的每一个成长，都是你在这里各种行为的记录。</view
      >
      <view class="growth-guide-txt"
        >成长值，可以通过做每日任务来获得，也可以通过日常行为来获得。</view
      >
      <view class="table-box">
        <view class="table">
          <!-- 表格标题 -->
          <view class="tr">
            <view class="th">任务分类</view>
            <view class="th">任务名称</view>
            <view class="th">普通成长</view>
            <view class="th">会员成长</view>
            <view class="th">任务限定</view>
            <view class="th">特殊规则</view>
          </view>
          <!-- 表格内容 -->
          <view class="tr" v-for="(item, index) in list" :key="index">
            <view class="td">{{ item.class_name }}</view>
            <view class="td">{{ item.order_name }}</view>
            <view class="td">{{ item.common_growth }}</view>
            <view class="td">{{ item.member_growth }}</view>
            <view class="td">{{ item.limit_title }}</view>
            <view class="td">{{ item.special_desc }}</view>
          </view>
        </view>
      </view>
    </view>
    <view class="growth-fixed">
      <view class="growth-btn" @tap="goback"> 查看我的等级 </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { growthRuleList } from "../../../api/index";
export default {
  name: "growthGuide",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    goback() {
      wx.navigateBack({
        delta: 1,
      });
    },
    async growthRuleList(params) {
      try {
        let res = await growthRuleList(params);
        this.list = res.data.data;
      } catch (error) {}
    },
  },
  mounted() {
    this.growthRuleList("");
  },
};
</script>

<style lang="scss" scoped></style>
