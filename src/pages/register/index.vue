<template>
  <view>
    <form bindreset="reset" class="main">
      <view class="top">
        <view class="skip-btn" @tap="goHome">跳过</view>
        <view @tap="chooesImage" class="avatar">
          <image mode="aspectFit" :src="avatar" v-if="avatar"></image>
          <image class="no_avatar" mode="aspectFit" v-else></image>
        </view>
        <!-- <view class="avatar_select">
              <image @tap="chooesImage" src="https://yuepai-oss.qubeitech.com/static/images/avatar_select.png"></image>
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
              disabled
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
              src="https://yuepai-oss.qubeitech.com/static/images/six1ed.png"
              v-if="sex === 1"
            ></image>
            <image
              @tap="sexChange(1)"
              class="select_sex"
              data-sex="1"
              src="https://yuepai-oss.qubeitech.com/static/images/six1.png"
              v-else
            ></image>
            <image
              @tap="sexChange(0)"
              class="select_sex"
              data-sex="2"
              src="https://yuepai-oss.qubeitech.com/static/images/six2ed.png"
              v-if="sex === 0"
            ></image>
            <image
              @tap="sexChange(0)"
              class="select_sex"
              data-sex="2"
              src="https://yuepai-oss.qubeitech.com/static/images/six2.png"
              v-else
            ></image>
          </view>
        </view>
        <view class="item ub item-b">
          <view class="item_label">生日</view>
          <view class="ub-f1 item_input">
            <picker
              @change="dateChange"
              mode="date"
              class="picker"
              value="2005-01-01"
            >
              <view class="picker_children picked" v-if="date">{{ date }}</view>
              <view class="picker_children" v-else>请选择生日</view>
            </picker>
          </view>
        </view>
        <view class="item ub item-b">
          <view class="item_label">地区</view>
          <view class="ub-f1 item_input">
            <picker
              mode="region"
              @change="bindRegionChange"
              value="region"
              class="picker"
            >
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
            <view>{{ globalData.identity }}</view>
            <view
              class="picker_children pick_city picked"
              v-if="identity"
              @tap="identityFocus"
            >
              {{ identity }}
            </view>
            <view class="picker_children" v-else @tap="identityFocus"
              >请选择身份{{ globalData.identity }}</view
            >
          </view>
        </view>
      </view>
      <view class="savebox">
        <button class="save-btn" @tap="submit">完 成</button>
      </view>
    </form>
  </view>
</template>

<script>
import "./index.scss";
import { getCareer, userRegister } from "../../api/index";
import { errortip, openPage } from "../../utils/util";
import clickThrottle from "../../utils/clickThrottle";
export default {
  name: "register",
  data() {
    return {
      avatar: "",
      nickname: "",
      invited_uuid: "",
      visible: false,
      sex: "",
      date: "",
      identity: "",
      select_city: "",
      region: [],
      regionList: [],
      multiArray: [], //地区
      type: 0,
      identityList: [],
      from: "",
    };
  },
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
    identityFocus() {
      openPage("/packageAdd/pages/user/identity/index");
    },
    goHome() {
      if (this.from == "resource") {
        openPage("/packageActivity/pages/resource/index");
      } else if (this.from == "publicize") {
        openPage("/packageActivity/pages/publicize/index");
      } else {
        // 跳转首页
        wx.switchTab({
          url: "/pages/home/index",
          success: function (e) {
            var page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
            // page.onLoad();
          },
        });
      }
    },
    submit() {
      if (!this.nickname) {
        errortip("请填写名称！");
        return false;
      }
      if (this.sex === "") {
        errortip("请选择性别！");
        return false;
      }
      if (!this.date) {
        errortip("请选择生日！");
        return false;
      }
      if (!this.select_city) {
        errortip("请选择地区！");
        return false;
      }
      if (!this.identity) {
        errortip("请选择身份！");
        return false;
      }
      let params = {
        nickname: this.nickname,
        sex: this.sex,
        birthday: this.date,
        addressName: this.select_city,
        address: this.regionList,
        avatar: this.avatar,
        career_label: this.identityList,
      };
      if (!clickThrottle()) return;
      this.userRegister(params);
    },
    async userRegister(params) {
      try {
        let res = await userRegister(params);
        if (this.from == "resource") {
          openPage("/packageActivity/pages/resource/index");
        } else if (this.from == "publicize") {
          openPage("/packageActivity/pages/publicize/index");
        } else {
          // 跳转首页
          wx.switchTab({
            url: "/pages/home/index",
            success: function (e) {
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onLoad();
            },
          });
        }
      } catch (error) {}
    },
    async getCareer(params) {
      try {
        let res = await getCareer(params);
        let data = res.data.data;
        if (data.user_career.career_label) {
          let arr = data.user_career.career_label;
          this.identity = arr.join(".");
          this.identityList = data.user_career.career_label;
        }
      } catch (error) {}
    },
  },
  created() {
    let userInfo = wx.getStorageSync("userInfo");
    this.avatar = userInfo.avatar;
    this.nickname = userInfo.nickname;
  },
  onShow() {
    this.getCareer("");
  },
  onLoad: function (options) {
    if (options.from) {
      this.from = options.from;
    }
  },
};
</script>

<style lang="scss" scoped></style>
