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
      if (!this.identity.length) {
        errortip("请选择身份标签!");
        return;
      }
      if (!this.notice.length) {
        errortip("请选择接单通告!");
        return;
      }
      if (!this.style.length) {
        errortip("请选择形象风格!");
        return;
      }
      let mode_sticker = [];
      let notice_sticker = [];
      let style_sticker = [];
      this.identity_data.map((item) => {
        this.identity.map((identityItem) => {
          if (item.value == identityItem) {
            mode_sticker.push({
              key: item.key,
              value: item.value,
            });
          }
        });
      });
      this.notice_data.map((item) => {
        this.notice.map((identityItem) => {
          if (item.value == identityItem) {
            notice_sticker.push({
              key: item.key,
              value: item.value,
            });
          }
        });
      });
      this.style_data.map((item) => {
        this.style.map((identityItem) => {
          if (item.value == identityItem) {
            style_sticker.push({
              key: item.key,
              value: item.value,
            });
          }
        });
      });
      let params = {
        mode_sticker: mode_sticker,
        notice_sticker: notice_sticker,
        style_sticker: style_sticker,
      };
      this.subUserSticker(params);
    },
    select_tag(row) {
      let result = this.identity.find((ele) => ele === row.value);
      if (!result) {
        this.identity.push(row.value);
      } else {
        const index = this.identity.findIndex((ele) => ele === row.value);
        this.identity.splice(index, 1);
      }
      row.ispick = !row.ispick;
    },
    select_notice_tag(row) {
      let result = this.notice.find((ele) => ele === row.value);
      if (!result) {
        this.notice.push(row.value);
      } else {
        const index = this.notice.findIndex((ele) => ele === row.value);
        this.notice.splice(index, 1);
      }
      row.ispick = !row.ispick;
    },
    select_style_tag(row) {
      let result = this.style.find((ele) => ele === row.value);
      if (!result) {
        this.style.push(row.value);
      } else {
        const index = this.style.findIndex((ele) => ele === row.value);
        this.style.splice(index, 1);
      }
      row.ispick = !row.ispick;
    },
    async userSticker(params) {
      try {
        let res = await userSticker(params);
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        res.data.data.all_sticker_list.map((item) => {
          if (item.type == "mode_sticker") {
            item.ispick = false;
            arr.push(item);
          }
          if (item.type == "notice_sticker") {
            item.ispick = false;
            arr1.push(item);
          }
          if (item.type == "style_sticker") {
            item.ispick = false;
            arr2.push(item);
          }
        });
        this.identity_data = arr;
        this.notice_data = arr1;
        this.style_data = arr2;
        this.identity = res.data.data.cur_sticker_list.mode_sticker;
        this.notice = res.data.data.cur_sticker_list.notice_sticker;
        this.style = res.data.data.cur_sticker_list.style_sticker;
        if (res.data.data.cur_sticker_list.mode_sticker.length) {
          this.identity_data = this.identity_data.map((item) => {
            item.ispick = false;
            this.identity.map((identityItem) => {
              if (item.value == identityItem) {
                item.ispick = true;
              }
            });
            return item;
          });
        }
        if (res.data.data.cur_sticker_list.notice_sticker.length) {
          this.notice_data = this.notice_data.map((item) => {
            item.ispick = false;
            this.notice.map((identityItem) => {
              if (item.value == identityItem) {
                item.ispick = true;
              }
            });
            return item;
          });
        }
        if (res.data.data.cur_sticker_list.style_sticker.length) {
          this.style_data = this.style_data.map((item) => {
            item.ispick = false;
            this.style.map((identityItem) => {
              if (item.value == identityItem) {
                item.ispick = true;
              }
            });
            return item;
          });
        }
      } catch (error) {}
    },
    async subUserSticker(params) {
      try {
        let res = await subUserSticker(params);
        wx.navigateBack({
          delta: 1,
        });
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
