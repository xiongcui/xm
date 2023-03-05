<template>
  <view class="identity">
    <view class="identity-tips">
      <image
        src="https://yuepai-oss.qubeitech.com/static/images/common/warning2.png"
      ></image>
      身份一年只能修改{{ total_modify_career_cnt }}次，当前剩余{{
        cur_modify_career_cnt
      }}次，请谨慎选择
    </view>
    <view class="real_identity" v-if="data.realidentity">
      <image
        class="icon_real_identity"
        src="https://imgs.weimoka.com/o_1f9ve372c1u1r1co4h241vqkqfc7.png"
      ></image>
      <view>您已认证身份：</view>
      <view>{{ data.realidentity }}</view>
    </view>
    <view class="identity-choice">
      <view class="identity-choice-title"
        >已选择（最多选择3个身份，第1个为主身份）</view
      >
      <view class="identity-choice-box">
        <block v-for="(item, index) in identity" :key="index">
          <block v-if="index == 0">
            <text class="identity-choice-main">主</text>
            <text class="identity-choice-item identity-choice-active">{{
              item.role
            }}</text>
          </block>
          <text v-else class="identity-choice-item"> {{ item.role }} </text>
        </block>
      </view>
    </view>
    <view class="tags_title">艺人</view>
    <view class="tags">
      <text
        @tap="select_tag(item)"
        class="tag_item"
        :class="item.ispick ? 'tag_itemed' : ''"
        v-for="(item, index) in identity_data"
        :key="index"
        v-show="item.code == 'ACTOR'"
      >
        {{ item.role }}
      </text>
    </view>
    <view class="tags_title">非艺人</view>
    <view class="tags">
      <text
        @tap="select_tag(item)"
        class="tag_item"
        :class="item.ispick ? 'tag_itemed' : ''"
        v-for="(item, index) in identity_data"
        :key="index"
        v-show="item.code == 'SKILL'"
        >{{ item.role }}</text
      >
    </view>
    <cover-view
      class="subbtn_bottom_block"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <cover-view class="subbtn_bottom">
        <button @tap="submit">保存</button>
      </cover-view>
    </cover-view>
  </view>
</template>

<script>
import "./index.scss";
import { getCareer, creatCareer } from "../../../api/index.js";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "identity",
  data() {
    return {
      isIphoneX: false,
      hidden: true,
      nocancel: false,
      cur_modify_career_cnt: 0,
      total_modify_career_cnt: 0,
      data: {
        msg: "",
        realidentity: "",
      },
      identity: [],
      identity_data: [],
    };
  },
  methods: {
    select_tag(row) {
      let result = this.identity.find((ele) => ele.cid === row.cid);
      if (!result) {
        if (this.identity.length > 2) {
          errortip("最多选择3个身份！");
          return false;
        }
        this.identity.push(row);
      } else {
        const index = this.identity.findIndex((ele) => ele.cid === row.cid);
        this.identity.splice(index, 1);
      }
      row.ispick = !row.ispick;
    },
    submit() {
      let _this = this;
      if (!this.identity.length) {
        errortip("请选择身份！");
        return false;
      }
      let arr = this.identity.map((item) => {
        return {
          cid: item.cid,
          role: item.role,
        };
      });
      let params = {
        json: arr,
      };
      const index = this.identity.findIndex((ele) => ele.code == "ACTOR");
      if (index != -1) {
        wx.showModal({
          title: "温馨提示",
          content:
            "当前选择包含【艺人身份】，您的主页将会以【艺人主页】形式展示",
          success: function (res) {
            if (res.confirm) {
              _this.creatCareer(arr);
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      } else {
        wx.showModal({
          title: "温馨提示",
          content:
            "当前选择不包含【艺人身份】，您的主页将会以【非艺人主页】形式展示",
          success: function (res) {
            if (res.confirm) {
              _this.creatCareer(arr);
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      }
    },
    async getCareer(params) {
      try {
        let res = await getCareer(params);
        let data = res.data.data;
        this.cur_modify_career_cnt = data.user_career.cur_modify_career_cnt;
        this.total_modify_career_cnt = data.user_career.total_modify_career_cnt;
        if (data.user_career.career_label)
          this.identity = data.user_career.career_label;
        this.identity_data = data.career_list.map((item) => {
          item.ispick = false;
          this.identity.map((identityItem) => {
            if (item.cid == identityItem.cid) {
              item.ispick = true;
            }
          });
          return item;
        });
      } catch (error) {}
    },
    async creatCareer(params) {
      try {
        let res = await creatCareer(params);
        let identity = params.map((item) => {
          return item.role;
        });
        // let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
        // let prevPage = pages[pages.length - 2];
        // //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。

        // prevPage.setData({
        //   // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
        //   identity: identity.join(","),
        //   identity_arr: params,
        // });
        // console.log(prevPage, "prev");
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.getCareer("");
  },
};
</script>

<style lang="scss" scoped></style>
