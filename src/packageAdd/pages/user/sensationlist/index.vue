<template>
  <view class="main ub ub-ver none_main" v-if="noneData">
    <view catchtap="goChooseMedia" class="item_add" data-id="">
      <image src="../../../../assets/images/common/add_black.png"></image
      >添加账号
    </view>
  </view>
  <view class="main ub ub-ver" v-else>
    <block v-for="(items, listIndex) in listdata" :key="listIndex">
      <view
        catchtap="chooseFans"
        class="item ub"
        v-for="(item, itemIndex) in items.fans_data"
        :key="itemIndex"
      >
        <view class="item_main ub">
          <view class="item_logo">
            <image mode="aspectFit" :src="items.media_info.logo"></image>
          </view>
          <view class="ub-f1">
            <view class="item_name">{{ item.nickname }}</view>
            <view class="item_fanscount">粉丝：{{ item.follow_count }}</view>
          </view>
          <image
            src="../../../../assets/images/common/editbtn.png"
            class="editbtn"
          ></image>
        </view>
        <view class="item_tags ub">
          <view class="item_time">{{ item.timetext }}创建</view>
          <view class="ub-f1"></view>
          <view class="item_status">
            <view class="item_status_wait" v-if="item.status == 0">待审核</view>
            <view class="item_status_fail" v-if="item.status == -1"
              >审核未通过</view
            >
          </view>
        </view>
      </view>
    </block>
    <view catchtap="goChooseMedia" class="item_add" data-id="">
      <image src="../../../../assets/images/common/add_black.png"></image
      >添加账号
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "",
  data() {
    return {
      noneData: false,
      listdata: [
        {
          media_info: {
            logo: "https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg",
          },
          fans_data: [
            {
              nickname: "nickname",
              follow_count: 100,
              status: 0,
              timetext: "10分钟",
            },
            {
              nickname: "nickname",
              follow_count: 100,
              status: -1,
              timetext: "10分钟",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
