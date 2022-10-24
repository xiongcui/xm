<template>
  <view>
    <form bindreset="reset" class="main">
      <view class="top">
        <view @tap="chooesImage" class="avatar">
          <image mode="aspectFit" :src="avatar" v-if="avatar"></image>
          <image class="no_avatar" mode="aspectFit" v-else></image>
        </view>
        <!-- <view class="avatar_select">
              <image @tap="chooesImage" src="../../assets/images/avatar_select.png"></image>
          </view> -->
      </view>
      <view class="infor">
        <view class="item ub item-b">
          <view class="item_label">昵称</view>
          <view class="ub-f1 item_input">
            <input
              maxlength="60"
              name="nickname"
              placeholder="请输入你的昵称"
              placeholderClass="nickname_tip"
              type="text"
              v-model="nickname"
            />
          </view>
        </view>
        <view class="item ub item-b">
          <view class="item_label">性别</view>
          <view class="ub-f1 item_input">
            <image
              @tap="sexChange(1)"
              class="select_sex"
              data-sex="1"
              src="../../assets/images/six1ed.png"
              v-if="sex === 1"
            ></image>
            <image
              @tap="sexChange(1)"
              class="select_sex"
              data-sex="1"
              src="../../assets/images/six1.png"
              v-else
            ></image>
            <image
              @tap="sexChange(0)"
              class="select_sex"
              data-sex="2"
              src="../../assets/images/six2ed.png"
              v-if="sex === 0"
            ></image>
            <image
              @tap="sexChange(0)"
              class="select_sex"
              data-sex="2"
              src="../../assets/images/six2.png"
              v-else
            ></image>
          </view>
        </view>
        <view class="item ub item-b">
          <view class="item_label">生日</view>
          <view class="ub-f1 item_input">
            <picker
              @change="dateChange"
              end="2020-09-01"
              mode="date"
              start="1960-09-01"
              value="2000-01-01"
            >
              <view class="picker_children picked" v-if="date">{{ date }}</view>
              <view class="picker_children" v-else>请选择生日</view>
            </picker>
          </view>
        </view>
        <view class="item ub item-b">
          <view class="item_label">地区</view>
          <view class="ub-f1 item_input">
            <picker mode="region" @change="bindRegionChange" value="region">
              <view
                class="picker_children pick_city picked"
                v-if="select_city"
                >{{ select_city }}</view
              >
              <view class="picker_children" v-else>请选择地区</view>
            </picker>
          </view>
        </view>
        <view class="item ub item-b">
          <view class="item_label">身份</view>
          <view class="ub-f1 item_input">
            <!-- <picker @change="identityChange" :range="identityList">
                      <view class="picker_children picked" v-if="identity">{{identity}}</view>
                      <view class="picker_children" v-else>请选择身份</view>
                  </picker> -->
            <input
              maxlength="60"
              name="identity"
              placeholder="请选择身份"
              placeholderClass="nickname_tip"
              type="text"
              v-model="identity"
              @blur="identityFocus"
            />
          </view>
        </view>
      </view>
      <view class="savebox">
        <button class="save-btn" @tap="submit">完 成</button>
      </view>
    </form>
    <!-- <weCropper :visible="visible" :src="avatar"></weCropper> -->
  </view>
</template>

<script>
import "./index.scss";
// import weCropper from "../we-cropper/index.vue";
import { getArea, updateUser } from "../../api/index";
import { openPage } from "../../utils/util";
export default {
  name: "register",
  data() {
    return {
      avatar: "",
      nickname: "",
      visible: false,
      sex: "",
      date: "",
      identity: "",
      select_city: "",
      region: [],
      regionList: [],
      multiArray: [], //地区
      type: 0,
      identityList: [
        "摄影师",
        "模特",
        "化妆师",
        "修图师",
        "商家",
        "经纪人",
        "造型师",
        "素人模特",
      ],
    };
  },
  // components: {
  //   weCropper,
  // },
  methods: {
    chooesImage() {
      this.visible = true;
    },
    sexChange(index) {
      this.sex = index;
    },
    dateChange(e) {
      this.date = e.detail.value;
    },
    bindRegionChange(e) {
      this.select_city = e.detail.value.join("-");
      this.regionList = e.detail.code;
    },
    // identityChange(e) {
    //   this.identity = this.identityList[e.detail.value];
    // },
    identityFocus() {
      // openPage()
    },
    submit() {
      let params = {
        nickname: this.nickname,
        sex: this.sex,
        birthday: this.date,
        select_city: this.select_city,
        career_label: this.identity,
        avatar: this.avatar,
      };
      // career_label: [
      //   {
      //     career_id: "",
      //     role: "摄影师",
      //   },
      // ];
      this.updateUser({});
      console.log(params);
    },

    async updateUser(params) {
      try {
        let res = await updateUser(params);
        console.log("成功！", res);
      } catch (error) {}
    },
  },
  created() {
    let userInfo = wx.getStorageSync("userInfo");
    this.avatar = userInfo.avatar;
    this.nickname = userInfo.nickname;
  },
};
</script>

<style lang="scss" scoped></style>
