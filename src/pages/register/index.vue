<template>
  <form bindreset="reset" class="main">
    <view class="top">
        <view bindtap="chooesImage" class="avatar">
            <image mode="aspectFit" :src="avatar" v-if="avatar"></image>
            <image class="no_avatar" mode="aspectFit" v-else></image>
        </view>
        <view class="avatar_select">
            <image bindtap="chooesImage" src="../../assets/images/avatar_select.png"></image>
        </view>
    </view>
    <view class="infor">
        <view class="item ub item-b">
            <view class="item_label">昵称</view>
            <view class="ub-f1 item_input">
                <input maxlength="60" name="nickname" placeholder="请输入你的昵称" placeholderClass="nickname_tip" type="text" v-model="nickname"></input>
            </view>
        </view>
        <view class="item ub item-b">
            <view class="item_label">性别</view>
            <view class="ub-f1 item_input">
                <image @tap="sexChange(1)" class="select_sex" data-sex="1" src="../../assets/images/six1ed.png" v-if="sex==1"></image>
                <image @tap="sexChange(1)" class="select_sex" data-sex="1" src="../../assets/images/six1.png" v-else></image>
                <image @tap="sexChange(2)" class="select_sex" data-sex="2" src="../../assets/images/six2ed.png" v-if="sex==2"></image>
                <image @tap="sexChange(2)" class="select_sex" data-sex="2" src="../../assets/images/six2.png" v-else></image>
            </view>
        </view>
        <view class="item ub item-b">
            <view class="item_label">生日</view>
            <view class="ub-f1 item_input">
                <picker @change="dateChange" end="2020-09-01" mode="date" start="1960-09-01" value="2000-01-01">
                    <view class="picker_children picked" v-if="date">{{date}}</view>
                    <view class="picker_children" v-else>请选择生日</view>
                </picker>
            </view>
        </view>
        <view class="item ub item-b">
            <view class="item_label">地区</view>
            <view class="ub-f1 item_input">
                <picker @change="bindRegionChange" mode="region" :range="regionList" rangeKey="name" :value="region">
                    <view class="picker_children pick_city picked" v-if="select_city">{{select_city}}</view>
                    <view class="picker_children" v-else>请选择地区</view>
                </picker>
            </view>
        </view>
        <view class="item ub item-b">
            <view class="item_label">身份</view>
            <view class="ub-f1 item_input">
                <picker @change="identityChange" :range="identityList">
                    <view class="picker_children picked" v-if="identity">{{identity}}</view>
                    <view class="picker_children" v-else>请选择身份</view>
                </picker>
            </view>
        </view>
    </view>
    <view class="savebox">
      <button class="save-btn" @tap="submit">完 成</button>
    </view>
</form>
  <!-- <weCropper></weCropper> -->
</template>

<script>
import "./index.scss";
import weCropper from "../we-cropper/index.vue";
export default {
  name: "register",
  data() {
    return {
      avatar: "",
      nickname: "",
      sex: "",
      date: "",
      identity: "",
      select_city: "",
      // region:["北京市", "北京市", "朝阳区"],
      region: [],
      regionList: [],
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
  components: {
    weCropper,
  },
  methods: {
    sexChange(index) {
      this.sex = index;
    },
    dateChange(e) {
      this.date = e.detail.value;
    },
    bindRegionChange(e) {
      console.log(e);
      this.select_city = e.detail.value.join("-");
    },
    identityChange(e) {
      this.identity = this.identityList[e.detail.value];
    },
    submit() {
      let params = {
        nickname: this.nickname,
        sex: this.sex,
        date: this.date,
        select_city: this.select_city,
        identity: this.identity,
      };
      console.log(params);
    },
  },
};
</script>

<style lang="scss" scoped></style>
