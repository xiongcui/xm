<template>
  <view class="main ub ub-ver" v-if="noneData">
    <view @tap="goChooseMedia" class="item_add" data-id="">
      <image
        src="https://yuepai-oss.qubeitech.com/static/images/common/add_black.png"
      ></image
      >添加账号
    </view>
  </view>
  <view class="main ub ub-ver" v-else>
    <view
      @tap="chooseFans(item)"
      class="item ub"
      :class="oid == item.oid ? 'item_active' : ''"
      v-for="(item, itemIndex) in fans_data"
      :key="itemIndex"
    >
      <view class="item_main ub">
        <view class="item_logo">
          <image mode="aspectFit" :src="icon[item.platform_code]"></image>
        </view>
        <view class="ub-f1">
          <view class="item_name">{{ item.nickname }}</view>
          <view class="item_fanscount">粉丝：{{ item.fans_number }}</view>
        </view>
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/editbtn.png"
          class="editbtn"
          @tap.stop="
            editMedia(item.oid, item.platform_code, item.platform_name)
          "
        ></image>
      </view>
      <view class="item_tags ub">
        <view class="item_time">{{ item.date_humanize }}创建</view>
        <view class="ub-f1"></view>
        <view class="item_status">
          <view class="item_status_wait" v-if="item.status == '待审核中'">{{
            item.status
          }}</view>
          <view class="item_status_fail" v-if="item.status == '审核失败'">{{
            item.status
          }}</view>
          <view class="item_status_sucess" v-if="item.status == '审核通过'">{{
            item.status
          }}</view>
        </view>
      </view>
    </view>
    <view @tap="goChooseMedia" class="item_add" data-id="">
      <image
        src="https://yuepai-oss.qubeitech.com/static/images/common/add_black.png"
      ></image
      >添加账号
    </view>
    <view @tap="closeModel_del" class="modal-bg" v-if="showModel_del"></view>
    <view class="model_box ub" v-if="showModel_del">
      <view class="ub-f1"></view>
      <view class="model_main">
        <view class="model_title">
          <view>确定要删除该红人账号吗？</view>
        </view>
        <view class="model_btn ub">
          <view class="ub-f1"></view>
          <view @tap="closeModel_del" class="btn_no">取消</view>
          <view class="ub-f1"></view>
          <view @tap="del_hongren" class="btn_yes">删除</view>
          <view class="ub-f1"></view>
        </view>
      </view>
      <view class="ub-f1"></view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { celebrityList, userCelebrity } from "../../../../api/index";
import { errortip, openPage } from "../../../../utils/util";
export default {
  name: "",
  data() {
    return {
      noneData: false,
      showModel_del: false,
      oid: "",
      rowoid: "",
      platform_code: "",
      platform_name: "",
      fans_data: [],
      icon: {
        201: "https://yuepai-oss.qubeitech.com/static/images/common/redbook.png",
        202: "https://yuepai-oss.qubeitech.com/static/images/common/douyin.png",
        203: "https://yuepai-oss.qubeitech.com/static/images/common/kuaishou.png",
        204: "https://yuepai-oss.qubeitech.com/static/images/common/weibo.png",
      },
    };
  },
  methods: {
    closeModel_del() {
      this.showModel_del = false;
    },
    del_hongren() {
      this.userCelebrity({
        oid: this.rowoid,
        is_delete: 1,
      });
    },
    goChooseMedia() {
      if (this.platform_code) {
        openPage(
          "/packageAdd/pages/user/addfans/index?platform_code=" +
            this.platform_code +
            "&platform_name=" +
            this.platform_name
        );
      } else {
        openPage("/packageAdd/pages/user/platform/index");
      }
    },
    editMedia(oid, platform_code, platform_name) {
      let _this = this;
      wx.showActionSheet({
        itemList: ["重新编辑", "删除"],
        success(res) {
          switch (res.tapIndex) {
            case 0:
              if (_this.platform_code) {
                openPage(
                  "/packageAdd/pages/user/addfans/index?platform_code=" +
                    _this.platform_code +
                    "&platform_name=" +
                    _this.platform_name +
                    "&oid=" +
                    oid
                );
              } else {
                openPage(
                  "/packageAdd/pages/user/addfans/index?platform_code=" +
                    platform_code +
                    "&platform_name=" +
                    platform_name +
                    "&oid=" +
                    oid
                );
              }
              break;
            case 1:
              _this.rowoid = oid;
              _this.showModel_del = true;
              break;
          }
        },
        fail(res) {
          console.log(res.errMsg);
        },
      });
    },
    chooseFans(row) {
      let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
      let prevPage = pages[pages.length - 2];
      prevPage.setData({
        celebrity: row,
      });
      wx.navigateBack({
        delta: 1,
      });
    },
    async celebrityList(params) {
      try {
        let res = await celebrityList(params);
        if (!res.data.data) {
          this.noneData = true;
        } else {
          this.noneData = false;
          this.fans_data = res.data.data;
        }
        console.log(res);
      } catch (error) {}
    },
    async userCelebrity(params) {
      try {
        let res = await userCelebrity(params);
        errortip("删除成功");
        this.showModel_del = false;
        this.celebrityList({
          platform_code: this.platform_code,
        });
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    console.log(options);
    this.platform_code = options.platform_code;
    this.platform_name = options.platform_name;
    this.oid = options.oid;
  },
  onShow() {
    if (this.platform_code) {
      wx.setNavigationBarTitle({
        title: "选择红人账号",
      });
      this.celebrityList({
        platform_code: this.platform_code,
      });
    } else {
      wx.setNavigationBarTitle({
        title: "红人账号",
      });
      this.celebrityList({
        platform_code: null,
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
