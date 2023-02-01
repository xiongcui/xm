<template>
  <view class="platform">
    <view class="platform-list">
      <view
        class="platform-box"
        v-for="(item, index) in list"
        :key="index"
        @tap="goChooseMedia(item)"
      >
        <image :src="item.icon" class="platform-img"></image>
        {{ item.platform_name }}
        <image
          src="../../../../assets/images/common/icon_right.png"
          class="platform-icon-right"
        ></image>
      </view>
    </view>
  </view>
</template>

<script>
import { openPage } from "../../../../utils/util";
import "./index.scss";
export default {
  name: "platform",
  data() {
    return {
      list: [
        {
          platform_code: 201,
          platform_name: "红薯",
          icon: "../../../../assets/images/common/redbook.png",
        },
        {
          platform_code: 202,
          platform_name: "抖音",
          icon: "../../../../assets/images/common/douyin.png",
        },
        {
          platform_code: 203,
          platform_name: "快手",
          icon: "../../../../assets/images/common/kuaishou.png",
        },
        {
          platform_code: 204,
          platform_name: "微博",
          icon: "../../../../assets/images/common/weibo.png",
        },
      ],
    };
  },
  methods: {
    goChooseMedia(row) {
      openPage(
        "/packageAdd/pages/user/addfans/index?platform_code=" +
          row.platform_code +
          "&platform_name=" +
          row.platform_name
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
