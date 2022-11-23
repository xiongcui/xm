<template>
  <view class="add-tonggao">
    <view class="tonggao-box">
      <view class="tonggao-item">
        <view class="tonggao-left"> 通告类型 </view>
        <view class="tonggao-rt"> 发型创作 </view>
      </view>
      <view class="tonggao-item">
        <view class="tonggao-left"> 面向身份 </view>
        <view class="tonggao-rt">
          <picker
            @change="identityChange"
            :value="identityIndex"
            :range="identityList"
            :range-key="'value'"
            class="tonggao-select"
          >
            <view class="tonggao-select-item" v-if="identity">{{
              identity
            }}</view>
            <view class="tonggao-select-item" v-else>请选择</view>
          </picker>
        </view>
      </view>
      <view class="tonggao-item">
        <view class="tonggao-left"> 面向地区 </view>
        <view class="tonggao-rt">
          <picker
            mode="region"
            value="region"
            class="tonggao-select"
            @change="bindRegionChange"
          >
            <view class="tonggao-select-item" v-if="select_city">{{
              select_city
            }}</view>
            <view class="tonggao-select-item" v-else>请选择公告面向地区</view>
          </picker>
        </view>
      </view>
      <view class="tonggao-item">
        <view class="tonggao-left"> 截止日期 </view>
        <view class="tonggao-rt">
          <view class="tonggao-dete">
            <input
              class="tonggao-name"
              placeholder="清选择报名截止日期"
              v-model="date"
            />
            <text class="tonggao-split">|</text>
            <text class="long-term">长期</text>
            <checkbox :checked="checked" @tap="checkClick" />
          </view>
        </view>
      </view>
      <view class="tonggao-item">
        <view class="tonggao-left"> 性别要求 </view>
        <view class="tonggao-rt">
          <view class="tags">
            <text
              @tap="select_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in sexData"
              :key="index"
              >{{ item.name }}</text
            >
          </view>
        </view>
      </view>
    </view>
    <view class="tonggao-box">
      <view class="tonggao-item">
        <view class="tonggao-left"> 通告费用 </view>
        <view class="tonggao-rt"> 发型创作 </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "addtonggao",
  data() {
    return {
      identity: "",
      identityIndex: "",
      identityList: [],
      select_city: "",
      regionList: [],
      date: "",
      checked: false,
      sexData: [
        {
          name: "男",
          value: 1,
          ispick: true,
        },
        {
          name: "女",
          value: 0,
          ispick: false,
        },
        {
          name: "不限",
          value: 100,
          ispick: false,
        },
      ],
    };
  },
  methods: {
    identityChange() {},
    bindRegionChange(e) {
      this.select_city = e.detail.value.join("-");
      this.regionList = e.detail.code;
    },
    checkClick() {
      this.checked = !this.checked;
    },
    select_tag(row) {
      //   let result = this.identity.find((ele) => ele === row.role);
      //   if (!result) {
      //     if (this.identity.length > 2) {
      //       errortip("最多选择3个身份！");
      //       return false;
      //     }
      //     this.identity.push(row.role);
      //   } else {
      //     const index = this.identity.findIndex((ele) => ele === row.role);
      //     this.identity.splice(index, 1);
      //   }
      row.ispick = !row.ispick;
    },
  },
};
</script>

<style lang="scss" scoped></style>
