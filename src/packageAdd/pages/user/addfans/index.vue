<template>
  <view class="main">
    <form bindreset="reset" bindsubmit="sub" reportSubmit="true">
      <view class="item">
        <view class="item_top ub">
          <view catchtap="openModel" class="top_img">
            <image :src="icon.redbook"></image>
          </view>
          <view class="top_text ub-f1">{{ media.name }}账号编辑</view>
          <view
            catchtap="getNewFans"
            class="top_btn"
            v-if="item_id != '' && auto_get_visible == 1"
            >获取最新数据
          </view>
        </view>
        <view class="item_tip ub">
          <view class="tip_text">{{ media.name }}主页链接</view>
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
          <view catchtap="paste" class="tip_ctrlv">点击粘贴</view>
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
          v-if="media_item_id == const_media_item_ids.redbook"
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
              catchtap="chooseOpenStore"
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
              catchtap="chooseOpenStore"
              class="check_box"
              :class="is_open_store == 2 ? 'check_box_ed' : ''"
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
              catchtap="chooseBrandPartner"
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
              catchtap="chooseBrandPartner"
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
            <view
              catchtap="chooseBarginPubPrice"
              class="ub-f1 pr-20"
              data-status="0"
            >
              <input
                bindinput="inputPubPrice"
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
              catchtap="chooseBarginPubPrice"
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
            <view
              catchtap="chooseBarginSharePrice"
              class="ub-f1 pr-20"
              data-status="0"
            >
              <input
                bindinput="inputSharePrice"
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
              catchtap="chooseBarginSharePrice"
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
          <view class="label_title">短视频报价</view>
          <view class="tip_red">*</view>
          <view class="label_info ub-f1 ub">
            <view
              catchtap="chooseBarginVideoPrice"
              class="ub-f1 pr-20"
              data-status="0"
            >
              <input
                bindinput="inputVideoPrice"
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
              catchtap="chooseBarginVideoPrice"
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
            <view
              catchtap="chooseBarginLivePrice"
              class="ub-f1 pr-20"
              data-status="0"
            >
              <input
                bindinput="inputLivePrice"
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
              catchtap="chooseBarginLivePrice"
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
            <view
              catchtap="chooseBarginAdPrice"
              class="ub-f1 pr-20"
              data-status="0"
            >
              <input
                bindinput="inputAdPrice"
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
              catchtap="chooseBarginAdPrice"
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
              catchtap="select_tag"
              class="tag_name"
              :class="tagitem.taged ? 'taged' : ''"
              v-for="(tagitem, index) in media.tag"
              :key="index"
              >{{ tagitem.tag_name }}</view
            >
          </view>
        </view>
      </view>
      <cover-view
        class="subbtn_bottom_block"
        :class="isIphoneX ? 'fix-iphonex-button' : ''"
      >
        <cover-view class="subbtn_bottom">
          <button formType="submit">保存</button>
        </cover-view>
      </cover-view>
    </form>
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
import "./index.scss";
export default {
  name: "addfans",
  data() {
    return {
      showModel: false,
      isIphoneX: false,
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
      icon: {
        douyin: require("../../../../assets/images/common/douyin.png"),
        redbook: require("../../../../assets/images/common/redbook.png"),
        weibo: require("../../../../assets/images/common/weibo.png"),
        kuaishou: require("../../../../assets/images/common/kuaishou.png"),
      },
      media: {
        logo_show: "",
        name: "红薯",
        howget_msg: "howget_msg",
        tag: [
          {
            taged: true,
            tag_name: "ds",
          },
          {
            taged: false,
            tag_name: "ds332",
          },
        ],
      },
    };
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
};
</script>

<style lang="scss" scoped></style>
