<template>
  <view class="otherlist">
    <view class="main ub ub-ver none_main" v-if="noneData">
      <view @tap="goInforother" class="item_add ub" data-id="">
        <view class="side_gap"></view>
        <view class="ub-f1">
          <view class="item_add_btn ub">
            <view class="ub-f1"></view>
            <view class="item_add_btn_img">
              <image
                mode="widthFix"
                src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/addbtn.png"
              ></image>
            </view>
            <view class="item_add_btn_text">新增模卡资料</view>
            <view class="ub-f1"></view>
          </view>
        </view>
        <view class="side_gap"></view>
      </view>
    </view>
    <view class="main ub ub-ver" v-else>
      <view @tap="goInforother" class="item_add ub" data-id="">
        <view class="side_gap"></view>
        <view class="ub-f1">
          <view class="item_add_btn ub">
            <view class="ub-f1"></view>
            <view class="item_add_btn_img">
              <image
                mode="widthFix"
                src="https://yuepai-oss.qubeitech.com/static/images/moka/makecard/addbtn.png"
              ></image>
            </view>
            <view class="item_add_btn_text">新增模卡资料</view>
            <view class="ub-f1"></view>
          </view>
        </view>
        <view class="side_gap"></view>
      </view>
      <view
        class="item ub"
        v-for="(item, itemIndex) in listdata"
        :key="itemIndex"
      >
        <view class="side_gap"></view>
        <view
          @tap="goInforother"
          class="ub-f1 item_content ub"
          :data-id="item.sub_uuid"
        >
          <view class="item_content_gap"></view>
          <view class="ub-f1">
            <view class="ub item_content_top">
              <view class="user_info">
                <view class="user_name">{{ item.nickname }}</view>
                <view class="user_sex" v-if="item.sex !== null">
                  <image
                    mode="widthFix"
                    :src="`https://yuepai-oss.qubeitech.com/static/images/common/sex${
                      item.sex ? 1 : 0
                    }.png`"
                  ></image>
                </view>
              </view>
              <view>做过 {{ item.mocha_cnt }} 张模卡</view>
            </view>
            <view class="ub item_content_bottom">
              <view class="user_tag">
                <text>{{ item.height }}cm</text>
                <text>{{ item.weight }}kg</text>
              </view>
              <view class="ub-f1"></view>
              <view class="user_time">{{ item.date_humanize }}更新</view>
            </view>
          </view>
        </view>
        <view class="side_gap"></view>
      </view>
    </view>
  </view>
</template>

<script>
import { openPage } from "../../../../utils/util";
import { nonpersonalList } from "../../../../api/index";
import "./index.scss";
export default {
  name: "otherlist",
  data() {
    return {
      noneData: false,
      listdata: [],
      itemIndex: 0,
    };
  },
  methods: {
    goInforother(e) {
      var id = e.currentTarget.dataset.id;
      openPage("/packageMoka/pages/moka/inforother/index?sub_user_id=" + id);
    },
    async nonpersonalList(params) {
      try {
        let res = await nonpersonalList(params);
        this.listdata = res.data.data;
      } catch (error) {}
    },
  },
  created() {
    this.nonpersonalList("");
  },
};
</script>

<style lang="scss" scoped></style>
