<template>
  <view>
    <view class="editlabel">
      <view class="editlabel-item">
        <view class="editlabel-title">
          身份标签
          <text class="check-tips">*</text>
        </view>
        <view class="tags">
          <text
            @tap="select_tag(item)"
            class="tag_item"
            :class="item.ispick ? 'tag_itemed' : ''"
            v-for="(item, index) in identity_data"
            :key="index"
          >
            {{ item.value }}
          </text>
        </view>
      </view>
      <view class="editlabel-item">
        <view class="editlabel-title">
          接单通告
          <text class="check-tips">*</text>
        </view>
        <view class="tags">
          <text
            @tap="select_notice_tag(item)"
            class="tag_item"
            :class="item.ispick ? 'tag_itemed' : ''"
            v-for="(item, index) in notice_data"
            :key="index"
          >
            {{ item.value }}
          </text>
        </view>
      </view>
      <view class="editlabel-item">
        <view class="editlabel-title">
          形象风格
          <text class="check-tips">*</text>
        </view>
        <view class="tags">
          <text
            @tap="select_style_tag(item)"
            class="tag_item"
            :class="item.ispick ? 'tag_itemed' : ''"
            v-for="(item, index) in style_data"
            :key="index"
          >
            {{ item.value }}
          </text>
        </view>
      </view>
    </view>
    <cover-view
      class="subbtn_bottom_block"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <cover-view class="subbtn_bottom" @tap="sub">
        <button formType="submit">保存</button>
      </cover-view>
    </cover-view>
  </view>
</template>

<script>
import "./index.scss";
import { userSticker, subUserSticker } from "../../../../api/index";
export default {
  name: "editlabel",
  data() {
    return {
      isIphoneX: false,
      identity: [],
      identity_data: [],
      notice: [],
      notice_data: [],
      style: [],
      style_data: [],
    };
  },
  methods: {
    sub() {
      //         {
      //     'notice_sticker': [{'key': 14, 'value': '人像创作'}, {'key': 20, 'value': '网拍寄拍'}, {'key': 19, 'value': '社交活动'}],
      //     'style_sticker': [{'key': 20, 'value': '呆萌'}, {'key': 26, 'value': '运动'}],
      //     'mode_sticker': [{'key': 12, 'value': '兼职模特'}, {'key': 23, 'value': '淘宝模特'}]
      // }
    },
    select_tag(row) {
      let result = this.identity.find((ele) => ele === row.role);
      if (!result) {
        this.identity.push(row.role);
      } else {
        const index = this.identity.findIndex((ele) => ele === row.role);
        this.identity.splice(index, 1);
      }
      row.ispick = !row.ispick;
    },
    select_notice_tag() {},
    select_style_tag() {},
    async userSticker(params) {
      try {
        let res = await userSticker(params);
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        res.data.data.all_sticker_list.map((item) => {
          if (item.type == "mode_sticker") {
            item.checked = false;
            arr.push(item);
          }
          if (item.type == "notice_sticker") {
            item.checked = false;
            arr1.push(item);
          }
          if (item.type == "style_sticker") {
            item.checked = false;
            arr2.push(item);
          }
        });
        this.identity_data = arr;
        this.notice_data = arr1;
        this.style_data = arr2;
        this.identity = res.data.data.cur_sticker_list.mode_sticker;
        this.notice = res.data.data.cur_sticker_list.notice_sticker;
        this.style = res.data.data.cur_sticker_list.style_sticker;
        console.log(
          res.data.data.cur_sticker_list.mode_sticker,
          "res.data.data.cur_sticker_list"
        );
        if (res.data.data.cur_sticker_list.mode_sticker.length) {
          this.identity_data = res.data.data.cur_sticker_list.mode_sticker.map(
            (item) => {
              item.ispick = false;
              this.identity.map((identityItem) => {
                if (item.value == identityItem) {
                  item.ispick = true;
                }
              });
              return item;
            }
          );
        }
        if (res.data.data.cur_sticker_list.notice_sticker.length) {
          this.notice_data = res.data.data.cur_sticker_list.notice_sticker.map(
            (item) => {
              item.ispick = false;
              this.notice.map((identityItem) => {
                if (item.value == identityItem) {
                  item.ispick = true;
                }
              });
              return item;
            }
          );
        }
        if (res.data.data.cur_sticker_list.style_sticker.length) {
          this.style_data = res.data.data.cur_sticker_list.style_sticker.map(
            (item) => {
              item.ispick = false;
              this.style.map((identityItem) => {
                if (item.value == identityItem) {
                  item.ispick = true;
                }
              });
              return item;
            }
          );
        }
      } catch (error) {}
    },
    async subUserSticker(params) {
      try {
        let res = await subUserSticker(params);
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.userSticker("");
  },
};
</script>

<style lang="scss" scoped></style>
