<template>
  <view class="editinfor">
    <view class="gap_top"></view>
    <view class="infor">
      <view @tap="chooseImage" class="item ub item-b">
        <view class="ub-f1 ub item_mid">
          <view class="item_label">头像</view>
          <view class="ub-f1 item_input avatar">
            <image mode="aspectFill" :src="infor.avatar"></image>
          </view>
        </view>
        <view class="item_right">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_right.png"
          ></image>
        </view>
      </view>
      <view class="item ub item-b">
        <view class="ub-f1 ub item_mid">
          <view class="item_label">昵称</view>
          <view class="ub-f1 item_input">
            <input
              maxlength="60"
              name="nickname"
              placeholder="请输入昵称"
              type="text"
              v-model="nickname"
            />
          </view>
        </view>
        <view class="item_right"></view>
      </view>
      <picker :range="sexs" :value="sex" @change="sexChange">
        <view class="item ub item-b">
          <view class="ub-f1 ub item_mid">
            <view class="item_label">性别</view>
            <view class="ub-f1 item_input">
              <view class="picker" v-if="sex !== null">{{ sexs[sex] }}</view>
              <view class="picker-none" v-else>请选择</view>
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/common/icon_right.png"
            ></image>
          </view>
        </view>
      </picker>
      <picker
        @change="birthdayChange"
        mode="date"
        :value="birthday ? birthday : '2005-01-01'"
      >
        <view class="item ub item-b">
          <view class="ub-f1 ub item_mid">
            <view class="item_label">生日</view>
            <view class="ub-f1 item_input">
              <view class="picker" v-if="birthday">{{ birthday }}</view>
              <view class="picker-none" v-else>请选择</view>
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="https://yuepai-oss.qubeitech.com/static/common/icon_right.png"
            ></image>
          </view>
        </view>
      </picker>
      <view catchtap="goEditIdentity" class="item ub item-b">
        <view class="ub-f1 ub item_mid">
          <view class="item_label">身份</view>
          <view class="ub-f1 item_input" @tap="goIdentity">
            <view class="picker" v-if="identity">{{ identity }}</view>
            <view class="picker-none" v-else>请选择身份</view>
          </view>
        </view>
        <view class="item_right">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/common/icon_right.png"
          ></image>
        </view>
      </view>
      <view class="item ub">
        <view class="ub-f1 ub item_mid">
          <view class="item_label">地区</view>
          <view class="ub-f1 item_input pickers">
            <picker @change="bindRegionChange" mode="region" :value="region">
              <view class="pickers pick-city picked" v-if="region.length"
                >{{ region[1] }}-{{ region[2] }}</view
              >
              <view class="pickers pick-city picker-none" v-else
                >请选择地区</view
              >
            </picker>
          </view>
        </view>
        <view class="item_right">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/common/icon_right.png"
          ></image>
        </view>
      </view>
    </view>
    <view class="title">自我简介</view>
    <view class="infor intro_info ub" @tap="goEditUserIntro">
      <view class="ub-f1">
        <view class="intro_content" v-if="infor.intro">
          <text>{{ infor.intro }}</text>
        </view>
        <view class="intro_content_none" v-else
          >请填写自我简介（请勿填写任何联系方式，否则审核不通过）</view
        >
      </view>
      <view class="item_right"></view>
    </view>
    <cover-view
      class="subbtn_bottom_block"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <cover-view class="subbtn_bottom" @tap="sub">
        <button formType="submit">保存</button>
      </cover-view>
    </cover-view>
    <view class="bottom_gap"></view>
  </view>
</template>

<script>
import { openPage, errortip } from "../../../../utils/util";
import {
  userProfile,
  profileUpdate,
  userRegister,
} from "../../../../api/index";
import { Base64 } from "js-Base64";
import "./index.scss";
import clickThrottle from "../../../../utils/clickThrottle";
export default {
  name: "editinfor",
  data() {
    return {
      isIphoneX: false,
      infor: {
        intro: "",
        avatar: "",
      },
      birthday: "",
      avatar: "",
      nickname: "",
      sexs: ["女", "男"],
      sex: "",
      identity: "",
      identity_arr: [],
      region: [],
      regionList: [],
    };
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.userProfile("");
  },
  methods: {
    sexChange(e) {
      this.sex = e.target.value;
    },
    birthdayChange(e) {
      this.birthday = e.detail.value;
    },
    bindRegionChange(e) {
      this.region = e.detail.value;
      this.regionList = e.detail.code;
    },
    goEditUserIntro() {
      openPage(
        "/packageAdd/pages/user/editusertro/index?resume=" + this.infor.intro
      );
    },
    goIdentity() {
      openPage("/packageAdd/pages/user/identity/index");
    },
    chooseImage() {
      wx.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success(res) {
          let path = res.tempFiles[0].tempFilePath;
          openPage(
            "/packageAdd/pages/user/we-cropper/index?imgSrc=" +
              path +
              "&type=avatar"
          );
        },
      });
    },
    sub() {
      if (!this.nickname) {
        errortip("请填写名称！");
        return false;
      }
      if (this.sex === null) {
        errortip("请选择性别！");
        return false;
      }
      if (!this.birthday) {
        errortip("请选择生日！");
        return false;
      }
      if (!this.identity) {
        errortip("请选择身份！");
        return false;
      }
      if (!this.region.length) {
        errortip("请选择地区！");
        return false;
      }
      if (!clickThrottle()) return;
      let params = {
        nickname: this.nickname,
        birthday: this.birthday,
        addressName: this.region.length ? this.region.join("-") : null,
        address: this.regionList.length ? this.regionList.join("-") : null,
        avatar: this.infor.avatar,
      };
      if (this.sex !== null) {
        params.sex = Number(this.sex);
      }
      this.profileUpdate(params);
    },
    async profileUpdate(params, type) {
      try {
        let res = await profileUpdate(params);
        wx.navigateBack({
          delta: 1,
        });
        // wx.navigateTo({
        //   url: "/packageMoka/pages/moka/editshow/index",
        //   success: function (e) {
        //     var page = getCurrentPages().pop();
        //     if (page == undefined || page == null) return;
        //     page.onLoad();
        //   },
        // });
      } catch (error) {}
    },
    async userRegister(params) {
      try {
        let res = await userRegister(params);
        this.infor.avatar = params.avatar;
        let userInfo = wx.getStorageSync("userInfo");
        userInfo.avatar = this.infor.avatar;
        wx.setStorageSync("userInfo", userInfo);
      } catch (error) {}
    },
    async userProfile(params) {
      try {
        let res = await userProfile(params);
        this.infor.avatar = res.data.data.avatar;
        this.nickname = res.data.data.nickname;
        this.sex = res.data.data.sex;
        this.birthday = res.data.data.birthday;
        this.region = res.data.data.address_name
          ? res.data.data.address_name.split("-")
          : "";
        this.regionList = res.data.data.address.split("-");
        this.infor.intro = res.data.data.resume ? res.data.data.resume : "";
        this.identity = res.data.data.career_label.join(".");
      } catch (error) {}
    },
    upImgs(path) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: path,
        formData: {
          scr_type: "avatar",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.userRegister({
              avatar: data.data.file1,
            });
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
  },
  onShow() {
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1]; //当前页面
    if (currPage.data.resume) this.infor.intro = currPage.data.resume;
    if (currPage.data.homeimg) {
      this.upImgs(currPage.data.homeimg);
    }
    if (currPage.data.identity) {
      this.identity = currPage.data.identity;
    }
  },
};
</script>

<style lang="scss" scoped></style>
