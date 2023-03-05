<template>
  <view class="customer">
    <view class="customer-top">
      <view class="customer-title">Hi～，有什么可以帮您！</view>
      <view>期待听到您的声音</view>
    </view>
    <view class="customer-btn">
      <view class="customer-btn-box" @tap="customerService">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/user/customer/kefu.png"
        ></image>
        <view>在线客服</view>
      </view>
      <view class="customer-btn-box" @tap="gofeedback">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/user/customer/yijian.png"
        ></image>
        <view>意见反馈</view>
      </view>
    </view>
    <view class="customer-question">
      <view class="customer-nav">
        <text
          :class="{ active: active == 'asked_question' }"
          @tap="navClick('asked_question')"
          >常见问题</text
        >
        <text
          :class="{ active: active == 'about_invite' }"
          @tap="navClick('about_invite')"
          >关于约拍</text
        >
        <text
          :class="{ active: active == 'about_notice' }"
          @tap="navClick('about_notice')"
          >关于通告</text
        >
      </view>
      <view class="customer-list">
        <view
          class="customer-item"
          @tap="customerClick(index)"
          v-for="(item, index) in list"
          :key="index"
        >
          {{ item.question }}
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/right.png"
            class="customer-img"
            :class="{ 'customer-rotate': item.show }"
          ></image>
          <view class="customer-content" v-show="item.show">{{
            item.answer
          }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { categoryList } from "../../../api/index";
import { openPage } from "../../../utils/util";
export default {
  name: "customerCenter",
  data() {
    return {
      active: "asked_question",
      list: [],
    };
  },
  methods: {
    gofeedback() {
      openPage("/packageSet/pages/feedback/index");
    },
    customerService() {
      wx.openCustomerServiceChat({
        extInfo: { url: "https://work.weixin.qq.com/kfid/kfc70400e4245eaa1b6" },
        corpId: "ww9ad8086390afbfaa",
        success(res) {},
      });
    },
    navClick(type) {
      this.active = type;
      this.categoryList({
        category: this.active,
      });
    },
    customerClick(index) {
      this.list.map((item) => {
        item.show = false;
      });
      this.list[index].show = !this.list[index].show;
    },
    async categoryList(params) {
      try {
        let res = await categoryList(params);
        this.list = res.data.data.map((item) => {
          item.show = false;
          return item;
        });
        console.log(res);
      } catch (error) {}
    },
  },
  created() {
    this.categoryList({
      category: this.active,
    });
  },
};
</script>

<style lang="scss" scoped></style>
