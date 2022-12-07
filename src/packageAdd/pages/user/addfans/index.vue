<template>
  <view class="main">
    <view bindreset="reset">
      <view class="item">
        <view class="item_top ub">
          <view catchtap="openModel" class="top_img">
            <image :src="media.logo_show"></image>
          </view>
          <view class="top_text ub-f1">{{ platform_name }}账号编辑</view>
          <view
            catchtap="getNewFans"
            class="top_btn"
            v-if="item_id != '' && auto_get_visible == 1"
            >获取最新数据
          </view>
        </view>
        <view class="item_tip ub">
          <view class="tip_text">{{ platform_name }}主页链接</view>
          <view class="tip_red">*</view>
          <view catchtap="goAddfansHelp" class="ub">
            <view class="tip_hlep">如何获取链接</view>
            <view class="tip_help_icon">
              <image
                src="https://imgs.weimoka.com/o_1f9vfihul1a7n1gj7faonb6kc7.png"
              ></image>
            </view>
          </view>
          <view class="ub-f1"></view>
          <view @tap="paste" class="tip_ctrlv">点击粘贴</view>
        </view>
        <view class="item_content">
          <textarea
            cols="30"
            disabled="true"
            name="url"
            :placeholder="media.howget_msg"
            placeholderClass="placeholder_text"
            rows="10"
            v-model="paste_url"
          ></textarea>
        </view>
        <view class="item_label ub">
          <view class="label_title">账号昵称</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1">
            <input
              :disabled="nickname_dis"
              maxlength="15"
              name="nickname"
              :placeholder="pla_value ? '粘贴主页后自动获取' : '请输入昵称'"
              placeholderClass="placeholder_input"
              type="text"
              v-model="nickname"
            />
          </view>
        </view>
        <view class="item_label ub">
          <view class="label_title">粉丝数量</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1">
            <input
              :disabled="follow_count_dis"
              maxlength="15"
              name="follow_count"
              :placeholder="pla_value ? '粘贴主页后自动获取' : '请输入粉丝数量'"
              placeholderClass="placeholder_input"
              type="number"
              v-model="follow_count"
            />
          </view>
        </view>
        <view
          class="item_label ub"
          v-if="media_item_id == const_media_item_ids.douyin"
        >
          <view class="label_title">点赞数</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1">
            <input
              :disabled="like_count_dis"
              maxlength="15"
              name="like_count"
              :placeholder="pla_value ? '粘贴主页后自动获取' : '请输入点赞数'"
              placeholderClass="placeholder_input"
              type="number"
              v-model="like_count"
            />
          </view>
        </view>
        <view
          class="item_label ub"
          v-if="
            media_item_id == const_media_item_ids.redbook ||
            media_item_id == const_media_item_ids.douyin
          "
        >
          <view class="label_title">赞藏数</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1">
            <input
              :disabled="like_count_dis"
              maxlength="15"
              name="like_count"
              :placeholder="pla_value ? '粘贴主页后自动获取' : '请输入赞藏数'"
              placeholderClass="placeholder_input"
              type="number"
              v-model="like_count"
            />
          </view>
        </view>
      </view>
      <view class="item">
        <view
          class="item_label ub border_none"
          v-if="
            media_item_id == const_media_item_ids.douyin ||
            media_item_id == const_media_item_ids.kuaishou ||
            media_item_id == const_media_item_ids.weibo
          "
        >
          <view class="label_title"
            >开通{{
              media_item_id == const_media_item_ids.kuaishou ? "小店" : "橱窗"
            }}</view
          >
          <view class="tip_red">*</view>
          <view class="label_info ub-f1 ub">
            <view class="ub-f1"></view>
            <view
              @tap="chooseOpenStore"
              class="check_box"
              :class="is_open_store == 1 ? 'check_box_ed' : ''"
              data-status="1"
            >
              是<image
                :src="
                  require(`../../../../assets/images/common/select_${
                    is_open_store == 1 ? 1 : 0
                  }.png`)
                "
              ></image>
            </view>
            <view
              @tap="chooseOpenStore"
              class="check_box"
              :class="is_open_store == 0 ? 'check_box_ed' : ''"
              data-status="2"
            >
              否<image
                :src="
                  require(`../../../../assets/images/common/select_${
                    is_open_store == 0 ? 1 : 0
                  }.png`)
                "
              ></image>
            </view>
          </view>
        </view>
        <view
          class="item_label ub border_none"
          v-if="media_item_id == const_media_item_ids.redbook"
        >
          <view class="label_title">品牌合作</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1 ub">
            <view class="ub-f1"></view>
            <view
              @tap="chooseBrandPartner"
              class="check_box"
              :class="is_brand_partner == 1 ? 'check_box_ed' : ''"
              data-status="1"
            >
              是
              <image
                :src="
                  require(`../../../../assets/images/common/select_${
                    is_brand_partner == 1 ? 1 : 0
                  }.png`)
                "
              ></image>
            </view>
            <view
              @tap="chooseBrandPartner"
              class="check_box"
              :class="is_brand_partner == 0 ? 'check_box_ed' : ''"
              data-status="2"
            >
              否
              <image
                :src="
                  require(`../../../../assets/images/common/select_${
                    is_brand_partner == 0 ? 1 : 0
                  }.png`)
                "
              ></image>
            </view>
          </view>
        </view>
        <view
          class="item_label ub"
          v-if="media_item_id == const_media_item_ids.weibo"
        >
          <view class="label_title">直发报价</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1 ub">
            <view class="ub-f1 pr-20" data-status="0">
              <input
                @input="inputPubPrice"
                cursorSpacing="20"
                maxlength="5"
                name="pub_price"
                placeholder="直接输入或右方选择"
                placeholderClass="placeholder_input"
                type="number"
                v-model="pub_price"
              />
            </view>
            <view class="input-unit" v-if="pub_price">元</view>
            <view class="gap_line"></view>
            <view
              @tap="chooseBarginPubPrice"
              class="check_box"
              :class="bargin_pub_price ? 'check_box_ed' : ''"
              :data-status="bargin_pub_price"
            >
              议价
              <image
                :src="
                  require(`../../../../assets/images/common/select_${
                    bargin_pub_price == 1 ? 1 : 0
                  }.png`)
                "
              ></image>
            </view>
          </view>
        </view>
        <view
          class="item_label ub"
          v-if="media_item_id == const_media_item_ids.weibo"
        >
          <view class="label_title">转发报价</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1 ub">
            <view class="ub-f1 pr-20" data-status="0">
              <input
                @input="inputSharePrice"
                cursorSpacing="20"
                maxlength="5"
                name="share_price"
                placeholder="直接输入或右方选择"
                placeholderClass="placeholder_input"
                type="number"
                v-model="share_price"
              />
            </view>
            <view class="input-unit" v-if="share_price">元</view>
            <view class="gap_line"></view>
            <view
              @tap="chooseBarginSharePrice"
              class="check_box"
              :class="bargin_share_price ? 'check_box_ed' : ''"
              :data-status="bargin_share_price"
            >
              议价
              <image
                :src="
                  require(`../../../../assets/images/common/select_${
                    bargin_share_price == 1 ? 1 : 0
                  }.png`)
                "
              ></image>
            </view>
          </view>
        </view>
        <view
          class="item_label ub"
          v-if="
            media_item_id == const_media_item_ids.douyin ||
            media_item_id == const_media_item_ids.kuaishou
          "
        >
          <view class="label_title">视频报价</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1 ub">
            <view class="ub-f1 pr-20" data-status="0">
              <input
                @input="inputVideoPrice"
                cursorSpacing="20"
                maxlength="5"
                name="video_price"
                placeholder="直接输入或右方选择"
                placeholderClass="placeholder_input"
                type="number"
                v-model="video_price"
              />
            </view>
            <view class="input-unit" v-if="video_price">元</view>
            <view class="gap_line"></view>
            <view
              @tap="chooseBarginVideoPrice"
              class="check_box"
              :class="bargin_video_price ? 'check_box_ed' : ''"
              :data-status="bargin_video_price"
            >
              议价
              <image
                :src="
                  require(`../../../../assets/images/common/select_${
                    bargin_video_price == 1 ? 1 : 0
                  }.png`)
                "
              ></image>
            </view>
          </view>
        </view>
        <view
          class="item_label ub"
          v-if="
            media_item_id == const_media_item_ids.douyin ||
            media_item_id == const_media_item_ids.kuaishou
          "
        >
          <view class="label_title">直播报价</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1 ub">
            <view class="ub-f1 pr-20" data-status="0">
              <input
                @input="inputLivePrice"
                cursorSpacing="20"
                maxlength="5"
                name="live_price"
                placeholder="直接输入或右方选择"
                placeholderClass="placeholder_input"
                type="number"
                v-model="live_price"
              />
            </view>
            <view class="input-unit" v-if="live_price">元</view>
            <view class="gap_line"></view>
            <view
              @tap="chooseBarginLivePrice"
              class="check_box"
              :class="bargin_live_price ? 'check_box_ed' : ''"
              :data-status="bargin_live_price"
            >
              议价
              <image
                :src="
                  require(`../../../../assets/images/common/select_${
                    bargin_live_price == 1 ? 1 : 0
                  }.png`)
                "
              ></image>
            </view>
          </view>
        </view>
        <view
          class="item_label ub"
          v-if="
            media_item_id != const_media_item_ids.douyin &&
            media_item_id != const_media_item_ids.kuaishou &&
            media_item_id != const_media_item_ids.weibo
          "
        >
          <view class="label_title">广告报价</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1 ub">
            <view class="ub-f1 pr-20" data-status="0">
              <input
                @input="inputAdPrice"
                cursorSpacing="20"
                maxlength="5"
                name="ad_price"
                placeholder="直接输入或右方选择"
                placeholderClass="placeholder_input"
                type="number"
                v-model="ad_price"
              />
            </view>
            <view class="input-unit" v-if="ad_price">元</view>
            <view class="gap_line"></view>
            <view
              @tap="chooseBarginAdPrice"
              class="check_box"
              :class="bargin_ad_price ? 'check_box_ed' : ''"
              :data-status="bargin_ad_price"
            >
              议价
              <image
                :src="
                  require('../../../../assets/images/common/select_' +
                    bargin_ad_price +
                    '.png')
                "
              ></image>
            </view>
          </view>
        </view>
        <view class="item_label ub height_rewrite" v-if="media.tag.length > 0">
          <view class="label_title">账号领域</view>
          <view class="label_select ub-f1">
            <view
              @tap="select_tag(tagitem)"
              class="tag_name"
              :class="tagitem.taged ? 'taged' : ''"
              v-for="(tagitem, index) in media.tag"
              :key="index"
              >{{ tagitem.value }}</view
            >
          </view>
        </view>
      </view>
      <cover-view
        class="subbtn_bottom_block"
        :class="isIphoneX ? 'fix-iphonex-button' : ''"
      >
        <cover-view class="subbtn_bottom">
          <button @tap="submit">保存</button>
        </cover-view>
      </cover-view>
    </view>
    <view catchtap="closeModel" class="modal-bg" v-if="showModel"></view>
    <view class="model_box ub" v-if="showModel">
      <view class="ub-f1"></view>
      <view class="model_main">
        <view class="main_top">获取{{ media.name }}账号数据失败</view>
        <view class="main_text margin_b"
          >如果您确定复制了正确的{{
            media.name
          }}主页链接（非视频或图文链接）你可：</view
        >
        <view class="main_text"
          >1.切换网络环境后重试（如流量切换为WIFI、WIFI切换为流量或流量环境下开启飞行模再关闭）</view
        >
        <view class="main_text">2.等待一段时间后再次尝试获取</view>
        <view class="main_text">
          3.联系客服，咨询客服协助解决当前问题
          <view catchtap="closeModel" class="click_service color_blue">
            <view catchtap="goKefu">联系客服 ></view>
          </view>
        </view>
        <view class="main_text">4.切换为手动输入模式</view>
        <view class="model_btn ub">
          <view catchtap="closeModel" class="btn_know">我知道了</view>
          <view catchtap="click_todo" class="btn_to color_blue"
            >切换手动输入</view
          >
        </view>
      </view>
      <view class="ub-f1"></view>
    </view>
  </view>
</template>

<script>
import { errortip } from "../../../../utils/util";
import {
  userCelebrity,
  publicConfig,
  celebrityInfo,
} from "../../../../api/index";
import "./index.scss";
export default {
  name: "addfans",
  data() {
    return {
      oid: "",
      showModel: false,
      isIphoneX: false,
      platform_name: "",
      paste_url: "",
      nickname_dis: false,
      like_count_dis: false,
      follow_count_dis: false,
      nickname: "",
      follow_count: "",
      pla_value: "",
      item_id: "",
      media_item_id: "kuaishou",
      ad_price: "",
      bargin_ad_price: 0,
      is_brand_partner: 0,
      like_count: "",
      pub_price: "",
      bargin_pub_price: "",
      share_price: "",
      bargin_share_price: "",
      is_open_store: 0,
      video_price: "",
      bargin_video_price: "",
      live_price: "",
      bargin_live_price: "",
      const_media_item_ids: {
        douyin: "douyin",
        redbook: "redbook",
        weibo: "weibo",
        kuaishou: "kuaishou",
      },
      //   (201: 红薯， 202：抖音， 203：快手， 204：微博)
      platform: {
        201: "redbook",
        202: "douyin",
        203: "kuaishou",
        204: "weibo",
      },
      title: {
        201: "打开小红书APP个人主页，点击「分享」后「复制链接」后粘贴",
        202: "打开抖音APP，我的二维码里点击「分享」后「复制链接」后粘贴",
        203: "打开快手APP，我的二维码里点击「分享」后「复制链接」后粘贴",
        204: "打开微博APP个人主页，点击「分享」后「复制链接」后粘贴",
      },
      icon: {
        douyin: require("../../../../assets/images/common/douyin.png"),
        redbook: require("../../../../assets/images/common/redbook.png"),
        weibo: require("../../../../assets/images/common/weibo.png"),
        kuaishou: require("../../../../assets/images/common/kuaishou.png"),
      },
      media: {
        logo_show: "",
        howget_msg: "",
        tag: [],
      },
    };
  },
  methods: {
    select_tag(row) {
      row.taged = !row.taged;
    },
    inputAdPrice(e) {
      if (e.detail.value) {
        this.bargin_ad_price = 0;
      } else {
        this.bargin_ad_price = 1;
      }
    },
    inputPubPrice(e) {
      if (e.detail.value) {
        this.bargin_pub_price = 0;
      } else {
        this.bargin_pub_price = 1;
      }
    },
    inputSharePrice(e) {
      if (e.detail.value) {
        this.bargin_share_price = 0;
      } else {
        this.bargin_share_price = 1;
      }
    },
    inputVideoPrice() {
      if (e.detail.value) {
        this.bargin_video_price = 0;
      } else {
        this.bargin_video_price = 1;
      }
    },
    inputLivePrice() {
      if (e.detail.value) {
        this.bargin_live_price = 0;
      } else {
        this.bargin_live_price = 1;
      }
    },
    chooseBarginAdPrice() {
      this.bargin_ad_price = !this.bargin_ad_price ? 1 : 0;
      if (this.bargin_ad_price) {
        this.ad_price = "";
      }
    },
    chooseBarginPubPrice() {
      this.bargin_pub_price = !this.bargin_pub_price ? 1 : 0;
      if (this.bargin_pub_price) {
        this.pub_price = "";
      }
    },
    chooseBarginSharePrice() {
      this.bargin_share_price = !this.bargin_share_price ? 1 : 0;
      if (this.bargin_share_price) {
        this.share_price = "";
      }
    },
    chooseBarginVideoPrice() {
      this.bargin_video_price = !this.bargin_video_price ? 1 : 0;
      if (this.bargin_video_price) {
        this.video_price = "";
      }
    },
    chooseBarginLivePrice() {
      this.bargin_live_price = !this.bargin_live_price ? 1 : 0;
      if (this.bargin_live_price) {
        this.live_price = "";
      }
    },
    chooseBrandPartner() {
      this.is_brand_partner = !this.is_brand_partner ? 1 : 0;
    },
    chooseOpenStore() {
      this.is_open_store = !this.is_open_store ? 1 : 0;
    },
    paste() {
      let _this = this;
      wx.getClipboardData({
        success(res) {
          if (res.data.indexOf("http") == -1) {
            errortip("未检测到链接");
          } else {
            _this.paste_url = res.data;
          }
        },
      });
    },
    submit() {
      if (!this.paste_url) {
        errortip("请复制" + this.platform_name + "主页链接");
        return false;
      }
      if (!this.nickname) {
        errortip("请填写账号昵称");
        return false;
      }
      if (!this.follow_count) {
        errortip("请填写粉丝数量");
        return false;
      }
      if (
        (this.media_item_id == this.const_media_item_ids.redbook &&
          !this.like_count) ||
        (this.media_item_id == this.const_media_item_ids.douyin &&
          !this.like_count)
      ) {
        errortip("请填写赞藏数量");
        return false;
      }
      if (
        this.media_item_id == this.const_media_item_ids.redbook &&
        !this.bargin_ad_price &&
        !this.ad_price
      ) {
        errortip("请选择广告报价");
        return false;
      }
      if (
        this.media_item_id == this.const_media_item_ids.weibo &&
        !this.bargin_pub_price &&
        !this.pub_price
      ) {
        errortip("请选择直发报价");
        return false;
      }
      if (
        this.media_item_id == this.const_media_item_ids.weibo &&
        !this.bargin_share_price &&
        !this.share_price
      ) {
        errortip("请选择转发报价");
        return false;
      }
      if (
        (this.media_item_id == this.const_media_item_ids.douyin &&
          !this.bargin_video_price &&
          !this.video_price) ||
        (this.media_item_id == this.const_media_item_ids.kuaishou &&
          !this.bargin_video_price &&
          !this.video_price)
      ) {
        errortip("请选择视频报价");
        return false;
      }
      if (
        (this.media_item_id == this.const_media_item_ids.douyin &&
          !this.bargin_live_price &&
          !this.live_price) ||
        (this.media_item_id == this.const_media_item_ids.kuaishou &&
          !this.bargin_live_price &&
          !this.live_price)
      ) {
        errortip("请选择直播报价");
        return false;
      }
      let tag = [];
      this.media.tag.map((item) => {
        if (item.taged) {
          tag.push(item.value);
        }
      });
      if (!tag.length) {
        errortip("请选择账号领域");
        return false;
      }
      let params = {
        oid: this.oid,
        platform_code: this.platform_code,
        platform_name: this.platform_name,
        nickname: this.nickname,
        fans_number: Number(this.follow_count),
        enjoy_number: 0,
        brand_cooperator: 0,
        shop_window: 0, // 开通橱窗
        little_shop: 0, // 开通小店
        advert_price: 0, // 广告报价
        direct_price: 0, // 直发报价
        forward_price: 0, // 转发报价
        video_price: 0, // 视频报价
        live_price: 0, // 直播报价
        links: this.paste_url, // 主页链接
        is_delete: 0,
        acct_field: tag.join(","),
      };
      if (this.media_item_id == this.const_media_item_ids.redbook) {
        params.enjoy_number = Number(this.like_count);
        params.brand_cooperator = this.is_brand_partner;
        params.advert_price = Number(this.ad_price ? this.ad_price : 0);
      }
      if (this.media_item_id == this.const_media_item_ids.weibo) {
        params.shop_window = this.is_open_store;
        params.direct_price = Number(this.pub_price ? this.pub_pric : 0);
        params.forward_price = Number(this.share_price ? this.share_price : 0);
      }
      if (this.media_item_id == this.const_media_item_ids.douyin) {
        params.enjoy_number = Number(this.like_count);
        params.shop_window = this.is_open_store;
        params.video_price = Number(this.video_price ? this.video_price : 0);
        params.live_price = Number(this.live_price ? this.live_price : 0);
      }
      if (this.media_item_id == this.const_media_item_ids.kuaishou) {
        params.little_shop = this.is_open_store;
      }
      console.log(params);
      this.userCelebrity(params);
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        this.media.tag = res.data.data.map((item, index) => {
          item.taged = false;
          return item;
        });
        // 红人详情
        if (this.oid) {
          this.celebrityInfo({
            oid: this.oid,
          });
        }
      } catch (error) {}
    },
    async userCelebrity(params) {
      try {
        let res = await userCelebrity(params);
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
    async celebrityInfo(params) {
      try {
        let res = await celebrityInfo(params);
        let data = res.data.data;
        this.paste_url = data.links;
        this.nickname = data.nickname;
        this.follow_count = data.fans_number;
        this.like_count = data.enjoy_number;
        this.is_brand_partner = data.brand_cooperator;
        if (!data.advert_price) {
          this.bargin_ad_price = 1;
          this.ad_price = "";
        } else {
          this.ad_price = data.advert_price;
        }
        this.is_open_store = data.shop_window;
        if (!data.direct_price) {
          this.bargin_pub_price = 1;
          this.pub_price = "";
        } else {
          this.pub_price = data.direct_price;
        }
        if (!data.forward_price) {
          this.bargin_share_price = 1;
          this.share_price = "";
        } else {
          this.share_price = data.forward_price;
        }
        if (!data.video_price) {
          this.bargin_video_price = 1;
          this.video_price = "";
        } else {
          this.video_price = data.video_price;
        }
        if (!data.live_price) {
          this.bargin_live_price = 1;
          this.live_price = "";
        } else {
          this.live_price = data.live_price;
        }
        data.acct_field.map((name) => {
          this.media.tag.map((item) => {
            if (name == item.value) {
              item.taged = true;
            }
          });
        });
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function (options) {
    this.platform_code = Number(options.platform_code);
    this.platform_name = options.platform_name;
    this.media_item_id = this.platform[this.platform_code];
    this.media.logo_show = this.icon[this.media_item_id];
    this.media.howget_msg = this.title[this.platform_code];
    this.oid = options.oid;

    wx.setNavigationBarTitle({
      title: this.platform_name,
    });
    // 查询账号领域
    console.log(this.platform_code, "this.platform_code");
    let type = "acct_field_" + this.platform_code;
    this.publicConfig({
      type: [type],
    });
  },
};
</script>

<style lang="scss" scoped></style>
