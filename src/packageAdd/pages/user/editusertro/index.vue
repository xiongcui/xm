<template>
  <view class="main">
    <view class="content ub">
      <view class="side_gap"></view>
      <view class="ub-f1">
        <textarea
          autoHeight="true"
          class="intro_content"
          maxlength="800"
          name="intro"
          placeholder="请填写自我简介（请勿填写任何联系方式，否则审核不通过）"
          placeholderClass="intro_content_none"
          v-model="infor.intro"
        ></textarea>
      </view>
      <view class="side_gap"></view>
    </view>
    <view class="sub_btn" @tap="sub">
      <button type="primary">保存</button>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { userResume } from "../../../../api/index";
import { errortip } from "../../../../utils/util";
export default {
  name: "editusertro",
  data() {
    return {
      infor: {
        intro: "",
      },
    };
  },
  methods: {
    sub() {
      let params = {
        code: "resume",
        name: "自我简介",
        body: this.infor.intro,
      };
      this.userResume(params);
    },
    async userResume(params, type) {
      try {
        let res = await userResume(params);
        errortip("自我简介正在审核中");
        let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
        let prevPage = pages[pages.length - 2];
        //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
        prevPage.setData({
          // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
          resume: this.infor.intro,
        });
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    this.infor.intro = options.resume;
  },
};
</script>

<style lang="scss" scoped></style>
