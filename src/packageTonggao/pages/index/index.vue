<template>
  <view class="tonggao">
    <view class="hot-tg">
      <view class="tg-title">热门通告</view>
      <view class="hot-type">
        <view class="hot-item" @tap="goRelease(1)">品牌种草</view>
        <view class="hot-item" @tap="goRelease(2)">探店推广</view>
        <view class="hot-item" @tap="goRelease(3)">发型创作</view>
        <view class="hot-item" @tap="goRelease(4)">人像创作</view>
      </view>
    </view>
    <view class="select-type">
      <view class="tg-title">选择分类</view>
      <view class="select-list">
        <view
          class="select-item"
          v-for="(item, index) in classificationList"
          :key="index"
          @tap="classificationClick(item)"
        >
          <image :src="item.icon"></image>
          <text>{{ item.name }}</text>
        </view>
      </view>
    </view>
    <view class="tonggao-mask" v-if="visible">
      <view class="mask-box">
        <view class="mask-title">
          作品创作
          <view class="close" @tap="close"></view>
        </view>
        <view class="mask-ct">
          <view
            class="mask-item"
            v-for="(item, index) in maskData"
            :key="index"
            @tap="maskClick(item)"
            >{{ item.value }}</view
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { publicConfig, publishVerify } from "../../../api/index";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "tonggao",
  data() {
    return {
      visible: false,
      title: "",
      code: "",
      classificationList: [
        {
          name: "作品创作",
          value: "creation_content",
          icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/xiangce.png",
        },
        {
          name: "合作招募",
          value: "recruit_cooperate",
          icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/hezuo.png",
        },
        {
          name: "电商拍摄",
          value: "business_capture",
          icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/dianshang.png",
        },
        {
          name: "广告宣传",
          value: "advert_spread",
          icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/guanggao.png",
        },
        {
          name: "影视视频",
          value: "film_video",
          icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/yingshi.png",
        },
        {
          name: "商业活动",
          value: "business_activity",
          icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/shangye.png",
        },
      ],
      maskData: [],
      verifyP1: null,
    };
  },
  methods: {
    classificationClick(row) {
      this.title = row.name;
      this.code = row.value;
      this.publicConfig({
        type: [row.value],
      });
    },
    close() {
      this.visible = false;
    },
    goRelease(type) {
      this.publishVerify(
        {
          project_code: "NT",
        },
        "",
        type
      );
    },
    maskClick(row) {
      this.publishVerify(
        {
          project_code: "NT",
        },
        row,
        0
      );
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        this.maskData = res.data.data;
        this.visible = true;
      } catch (error) {}
    },
    async publishVerify(params, row, type) {
      try {
        let res = await publishVerify(params);
        if (type) {
          if (type == 1) {
            openPage("/packageTonggao/pages/brand/index");
          }
          if (type == 2) {
            openPage("/packageTonggao/pages/shop/index");
          }
          if (type == 3) {
            openPage(
              "/packageTonggao/pages/add/index?code=creation_content&type=发型创作&key=CC1002"
            );
          }
          if (type == 4) {
            openPage(
              "/packageTonggao/pages/add/index?code=creation_content&type=人像创作&key=CC1001"
            );
          }
        } else {
          openPage(
            "/packageTonggao/pages/add/index?code=" +
              this.code +
              "&type=" +
              row.value +
              "&key=" +
              row.key
          );
        }
      } catch (error) {
        if (error.data.error_code == 21030 || error.data.error_code == 21040) {
          openPage(
            `/packageAdd/pages/guideTips/index?msg=${error.data.msg}&code=${error.data.error_code}`
          );
        } else if (error.data.error_code == 21060) {
          wx.showModal({
            title: "温馨提示",
            content: "还未完善个人资料，请前往完善个人资料",
            confirmText: "完善资料",
            success: function (res) {
              if (res.confirm) {
                console.log("用户点击确定");
                openPage("/packageAdd/pages/user/editinfor/index");
              } else if (res.cancel) {
                console.log("用户点击取消");
              }
            },
          });
        } else {
          errortip(error.data.msg);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
