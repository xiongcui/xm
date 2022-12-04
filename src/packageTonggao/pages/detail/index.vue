<template>
  <view class="tonggao_detail">
    <view class="tonggao_top">
      <view class="tonggao_top_left">
        <image :src="tonggaoInfo.author.avatar" class="avatar"></image>
        <view class="tonggao_info">
          <view class="tonggao_name">
            {{ tonggaoInfo.author.nickname }}
            <block v-if="tonggaoInfo.author.sex !== null">
              <image
                src="../../../assets/images/nan.png"
                class="tonggao_sex"
                v-if="tonggaoInfo.author.sex == 1"
              ></image>
              <image
                src="../../../assets/images/nv.png"
                class="tonggao_sex"
                v-if="tonggaoInfo.author.sex == 0"
              ></image>
            </block>
          </view>
          <view class="tonggao_p">
            <text>
              {{
                tonggaoInfo.author.career_list &&
                tonggaoInfo.author.career_list[0]
              }}
              |
              {{ tonggaoInfo.author.province_name }}
            </text>
            <image
              src="../../../assets/images/common/icon_real.png"
              class="tonggao_p_img"
              v-if="tonggaoInfo.author.is_certify"
            ></image>
            <image
              src="../../../assets/images/common/icon_pledge_none.png"
              class="tonggao_p_img"
              v-else
            ></image>
            <image
              src="../../../assets/images/common/icon_pledge.png"
              class="tonggao_p_img"
              v-if="tonggaoInfo.author.is_security"
            ></image>
            <image
              src="../../../assets/images/common/icon_real_none.png"
              class="tonggao_p_img"
              v-else
            ></image>
          </view>
        </view>
      </view>
      <view class="tonggao_right">
        <image
          class="follow"
          src="../../../assets/images/common/follow_red.png"
        ></image>
        <image
          class="share"
          src="../../../assets/images/common/icon_share.png"
        ></image>
      </view>
    </view>
    <view class="tonggao_box">
      <view class="tonggao_box_title">
        {{ tonggaoInfo.major_subject }}
        <view class="tonggao_price"> {{ tonggaoInfo.payment_format }}</view>
      </view>
      <block v-if="tonggaoInfo.second_code == 'CS8001'">
        <view class="tonggao_p">
          <image src="../../../assets/images/position.png"></image>
          面向地区：{{ tonggaoInfo.face_province_name }}
        </view>
        <view
          class="tonggao_p"
          v-if="
            tonggaoInfo.task_reward_type == 100 ||
            tonggaoInfo.task_reward_type == 300
          "
        >
          <image src="../../../assets/images/tonggao/zhifu.png"></image>
          支付稿费：{{ tonggaoInfo.payment_format }}
        </view>
        <view
          class="tonggao_p"
          v-if="
            tonggaoInfo.task_reward_type == 200 ||
            tonggaoInfo.task_reward_type == 300
          "
        >
          <image src="../../../assets/images/tonggao/product.png"></image>
          赠送产品：{{ tonggaoInfo.reward_good }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/pinpai.png"></image>
          店铺名称：{{ tonggaoInfo.store_name }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/position.png"></image>
          店铺地址：{{ tonggaoInfo.store_address }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/renshu.png"></image>
          招募人数：{{ tonggaoInfo.recruit_number }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/fensi.png"></image>
          粉丝要求：{{ tonggaoInfo.fans_number }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/time.png"></image>
          报名截止：{{ tonggaoInfo.deadline_date }}
        </view>
        <view class="tonggao_p_bottom">
          <view class="list_time">
            <image src="../../../assets/images/common/time.png"></image>
            {{ tonggaoInfo.date_humanize }}
          </view>
          <view class="list_read">
            <image src="../../../assets/images/eyes.png"></image>
            阅读 {{ tonggaoInfo.statistic.read_cnt }}
          </view>
        </view>
      </block>
      <!--品牌种草-->
      <block v-if="tonggaoInfo.second_code == 'CS8002'">
        <view class="tonggao_p">
          <image src="../../../assets/images/position.png"></image>
          面向地区：{{ tonggaoInfo.face_province_name }}
        </view>
        <view
          class="tonggao_p"
          v-if="
            tonggaoInfo.task_reward_type == 100 ||
            tonggaoInfo.task_reward_type == 300
          "
        >
          <image src="../../../assets/images/tonggao/zhifu.png"></image>
          支付稿费：{{ tonggaoInfo.payment_format }}
        </view>
        <view
          class="tonggao_p"
          v-if="
            tonggaoInfo.task_reward_type == 200 ||
            tonggaoInfo.task_reward_type == 300
          "
        >
          <image src="../../../assets/images/tonggao/product.png"></image>
          赠送产品：{{ tonggaoInfo.reward_good }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/pinpai.png"></image>
          产品品牌：{{ tonggaoInfo.product_brand }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/renshu.png"></image>
          招募人数：{{ tonggaoInfo.recruit_number }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/fensi.png"></image>
          粉丝要求：{{ tonggaoInfo.fans_number }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/time.png"></image>
          报名截止：{{ tonggaoInfo.deadline_date }}
        </view>
      </block>
      <block
        v-if="
          tonggaoInfo.second_code != 'CS8001' &&
          tonggaoInfo.second_code != 'CS8002'
        "
      >
        <view class="tonggao_p">
          <image src="../../../assets/images/position.png"></image>
          面向地区：{{ tonggaoInfo.face_province_name }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/user.png"></image>
          性别要求：{{ formatSex(tonggaoInfo.face_sex) }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/time.png"></image>
          报名截止：{{ tonggaoInfo.deadline_date }}
        </view>
        <view class="tonggao_p">
          <image src="../../../assets/images/tonggao/renshu.png"></image>
          招募人数：{{ tonggaoInfo.recruit_number }}
        </view>
      </block>
    </view>
    <view class="tonggao_box">
      <view class="tonggao_title_left"> 通告详情 </view>
      <view class="tonggao_desc">
        {{ tonggaoInfo.content }}
      </view>
      <view class="tonggao_imgbox">
        <image
          v-for="(item, index) in tonggaoInfo.cover"
          :key="index"
          mode="widthFix"
          :src="item"
        ></image>
      </view>
    </view>
    <view class="tonggao_box">
      <view class="tonggao_title_left"> 联系方式 </view>
      <view class="tonggao_lianxi">报名后，等待对方联系方式</view>
    </view>
    <view class="tonggao_box">
      <view class="tonggao_title_left"> 已报名：33</view>
      <view class="yuepai_img">
        <image src="../../../assets/images/avatar_default.png"></image>
        <image src="../../../assets/images/avatar_default.png"></image>
        <image src="../../../assets/images/avatar_default.png"></image>
        <image src="../../../assets/images/avatar_default.png"></image>
        <image src="../../../assets/images/avatar_default.png"></image>
        <image src="../../../assets/images/avatar_default.png"></image>
        <image src="../../../assets/images/avatar_default.png"></image>
        <image src="../../../assets/images/avatar_default.png"></image>
        <image src="../../../assets/images/avatar_default.png"></image>
        <image src="../../../assets/images/avatar_default.png"></image>
      </view>
    </view>
    <view
      class="tonggao_fixed_bottom"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <view class="tonggao_fixed_left">
        <view class="tonggao_fixed_item">
          <image src="../../../assets/images/common/icon_favorite.png"></image>
          {{ tonggaoInfo.statistic.collect_cnt }}
        </view>
      </view>
      <view class="tonggao_fixed_rt" @tap="launchYuepai"> 我要报名 </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { noticeInfo } from "../../../api/index";
import { openPage } from "../../../utils/util";
export default {
  name: "tonggaoDetail",
  data() {
    return {
      isIphoneX: false,
      oid: "",
      author_id: "",
      tonggaoInfo: {
        author: {
          sex: 0,
          is_certify: false,
        },
        statistic: {
          collect_cnt: 0,
        },
      },
    };
  },
  methods: {
    formatSex(sex) {
      if (sex == 1) {
        return "男";
      } else if (sex == 0) {
        return "女";
      } else {
        return "不限";
      }
    },
    launchYuepai() {
      openPage("/packageAdd/pages/user/launchyuepai/index?oid=" + this.oid);
    },
    async noticeInfo(params) {
      try {
        let res = await noticeInfo(params);
        this.tonggaoInfo = res.data.data;
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function (options) {
    this.oid = options.oid;
    this.author_id = options.author_id;
    if (this.oid && this.author_id) {
      let params = {
        oid: this.oid,
        author_id: this.author_id,
      };
      this.noticeInfo(params);
    }
  },
};
</script>

<style lang="scss" scoped></style>
