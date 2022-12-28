<template>
  <view class="signup">
    <!-- 200:待定 410:合适 420:不符 430:放弃合作 440:完成合作 -->
    <view class="tab">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0, 200)"
        >待定</view
      >
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1, 410)"
        >合适</view
      >
      <view
        class="tab-item"
        :class="currentTab == 2 ? 'on' : ''"
        @tap="changeItem(2, 420)"
        >不符</view
      >
      <view
        class="tab-item"
        :class="currentTab == 3 ? 'on' : ''"
        @tap="changeItem(3, 430)"
        >放弃合作</view
      >
      <view
        class="tab-item"
        :class="currentTab == 4 ? 'on' : ''"
        @tap="changeItem(4, 440)"
        >完成合作</view
      >
    </view>
    <view class="content">
      <swiper
        :current="currentTab"
        class="swiper-box"
        duration="300"
        @change="bindChange"
      >
        <swiper-item>
          <view class="signup-box">
            <view class="signup-top">
              <view class="signup-img">
                <image
                  src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIX4GibOqaLwcYuaOdFrEPSEGLoYlibQNkwZ5jOj8En8xicWdg0Mb5ebgLETD5icysAYJo7cr05U8bV0A/132"
                ></image>
              </view>
              <view class="signup-info">
                <view class="signup-name">
                  nickname
                  <image
                    src="../../../assets/images/nan.png"
                    class="list_sex"
                  ></image>
                  <!-- <image
                      src="../../../assets/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image> -->
                </view>
                <view class="identity">摄影师 ｜ 北京市</view>
              </view>
              <view class="signup-rt">
                <view class="contact">立即联系</view>
                <view class="time">1小时前报名</view>
              </view>
            </view>
            <view class="signup-cotent">
              <text class="signup-desc"
                >内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text
              >
              <text class="signup-detail">查看详情</text>
            </view>
            <view class="signup-btns">
              <view class="signup-btn-left">
                <text class="more" @tap="moreClick">更多</text>
                <text class="remarks" @tap="saveRemarks">备注</text>
              </view>
              <view class="signup-btn-rt">
                <view class="btn-yellow" @tap="noConformance"
                  ><icon type="cancel" size="12" color="#ffffff"></icon
                  >不符</view
                >
                <view class="btn-red" @tap="appropriate"
                  ><icon
                    type="success_no_circle"
                    size="12"
                    color="#ffffff"
                  ></icon
                  >合适</view
                >
              </view>
            </view>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="signup-box">
            <view class="signup-top">
              <view class="signup-img">
                <image
                  src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIX4GibOqaLwcYuaOdFrEPSEGLoYlibQNkwZ5jOj8En8xicWdg0Mb5ebgLETD5icysAYJo7cr05U8bV0A/132"
                ></image>
              </view>
              <view class="signup-info">
                <view class="signup-name">
                  nickname
                  <image
                    src="../../../assets/images/nan.png"
                    class="list_sex"
                  ></image>
                  <!-- <image
                      src="../../../assets/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image> -->
                </view>
                <view class="identity">摄影师 ｜ 北京市</view>
              </view>
              <view class="signup-rt">
                <view class="contact">立即联系</view>
                <view class="time">1小时前报名</view>
              </view>
            </view>
            <view class="notice">
              来自通告：朝阳区周六日汉服约拍
              <text class="notice-btn">查看全部报名</text></view
            >
            <view class="signup-cotent">
              <text class="signup-desc"
                >内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text
              >
              <text class="signup-detail">查看详情</text>
            </view>
            <view class="signup-btns">
              <view class="signup-btn-left">
                <text class="more">更多</text>
                <text class="remarks">备注</text>
              </view>
              <view class="signup-btn-rt">
                <view class="btn-yellow">放弃合作</view>
                <view class="btn-red">完成合作</view>
              </view>
            </view>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="signup-box">
            <view class="signup-top">
              <view class="signup-img">
                <image
                  src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIX4GibOqaLwcYuaOdFrEPSEGLoYlibQNkwZ5jOj8En8xicWdg0Mb5ebgLETD5icysAYJo7cr05U8bV0A/132"
                ></image>
              </view>
              <view class="signup-info">
                <view class="signup-name">
                  nickname
                  <image
                    src="../../../assets/images/nan.png"
                    class="list_sex"
                  ></image>
                  <!-- <image
                      src="../../../assets/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image> -->
                </view>
                <view class="identity">摄影师 ｜ 北京市</view>
              </view>
              <view class="signup-rt">
                <view class="contact">立即联系</view>
                <view class="time">1小时前报名</view>
              </view>
            </view>
            <view class="notice">
              来自通告：朝阳区周六日汉服约拍
              <text class="notice-btn">查看全部报名</text></view
            >
            <view class="signup-cotent">
              <text class="signup-desc"
                >内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text
              >
              <text class="signup-detail">查看详情</text>
            </view>
            <view class="signup-btns">
              <view class="signup-btn-left">
                <text class="more">更多</text>
                <text class="remarks">备注</text>
              </view>
              <view class="signup-btn-rt">
                <view class="btn-blue">恢复待定</view>
              </view>
            </view>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="signup-box">
            <view class="signup-top">
              <view class="signup-img">
                <image
                  src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIX4GibOqaLwcYuaOdFrEPSEGLoYlibQNkwZ5jOj8En8xicWdg0Mb5ebgLETD5icysAYJo7cr05U8bV0A/132"
                ></image>
              </view>
              <view class="signup-info">
                <view class="signup-name">
                  nickname
                  <image
                    src="../../../assets/images/nan.png"
                    class="list_sex"
                  ></image>
                  <!-- <image
                      src="../../../assets/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image> -->
                </view>
                <view class="identity">摄影师 ｜ 北京市</view>
              </view>
              <view class="signup-rt">
                <view class="contact">立即联系</view>
                <view class="time">1小时前报名</view>
              </view>
            </view>
            <view class="notice">
              来自通告：朝阳区周六日汉服约拍
              <text class="notice-btn">查看全部报名</text></view
            >
            <view class="signup-cotent">
              <text class="signup-desc"
                >内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text
              >
              <text class="signup-detail">查看详情</text>
            </view>
            <view class="signup-btns">
              <view class="signup-btn-left">
                <text class="more">更多</text>
                <text class="remarks">备注</text>
              </view>
              <view class="signup-btn-rt">
                <view class="btn-yellow">恢复合适</view>
              </view>
            </view>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="signup-box">
            <view class="signup-top">
              <view class="signup-img">
                <image
                  src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIX4GibOqaLwcYuaOdFrEPSEGLoYlibQNkwZ5jOj8En8xicWdg0Mb5ebgLETD5icysAYJo7cr05U8bV0A/132"
                ></image>
              </view>
              <view class="signup-info">
                <view class="signup-name">
                  nickname
                  <image
                    src="../../../assets/images/nan.png"
                    class="list_sex"
                  ></image>
                  <!-- <image
                      src="../../../assets/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image> -->
                </view>
                <view class="identity">摄影师 ｜ 北京市</view>
              </view>
              <view class="signup-rt">
                <view class="contact">立即联系</view>
                <view class="time">1小时前报名</view>
              </view>
            </view>
            <view class="notice">
              来自通告：朝阳区周六日汉服约拍
              <text class="notice-btn">查看全部报名</text></view
            >
            <view class="signup-cotent">
              <text class="signup-desc"
                >内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text
              >
              <text class="signup-detail">查看详情</text>
            </view>
            <view class="signup-btns">
              <view class="signup-btn-left">
                <text class="more">更多</text>
                <text class="remarks">备注</text>
              </view>
              <view class="signup-btn-rt">
                <view class="btn-del">删除</view>
              </view>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="modal_box" v-if="visible">
      <view class="modal_content">
        <view> 添加备注信息 </view>
        <textarea
          :autoHeight="true"
          class="intro_content"
          maxlength="500"
          name="intro"
          placeholder="请输入您的备注信息"
          placeholderClass="intro_content_none"
          v-model="remarks"
        ></textarea>
        <image
          src="../../../assets/images/common/x_icon.png"
          class="close-img"
          @tap="close"
        ></image>
        <view class="save" @tap="clickSave">保存</view>
      </view>
    </view>
  </view>
</template>

<script>
import { applyList } from "../../../api/index";
import { errortip } from "../../../utils/util";
import "./index.scss";
export default {
  name: "sigup",
  data() {
    return {
      currentTab: 0,
      list: [],
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      status: 0,
      pageNum: 1,
      pageSize: 10,
      remarks: "",
      visible: false,
      loading: true,
    };
  },
  methods: {
    // 点击tab切换
    changeItem(index, type) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
        this.status = type;
        this.pageNum = 1;
        this.list = [];
        this.query();
      }
    },
    bindChange(e) {
      this.currentTab = e.detail.current;
    },
    saveRemarks() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    clickSave() {},
    moreClick() {
      wx.showActionSheet({
        itemList: ["删除", "投诉"],
        success(res) {
          switch (res.tapIndex) {
            case 0:
              console.log("删除");
              break;
            case 1:
              console.log("投诉");
              break;
          }
        },
        fail(res) {
          console.log(res.errMsg);
        },
      });
    },
    appropriate() {
      wx.showModal({
        title: "温馨提示",
        content: "确定标记该报名为合适吗？",
        success: function (res) {
          if (res.confirm) {
            // _this.creatCareer(arr);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    noConformance() {
      wx.showModal({
        title: "温馨提示",
        content: "确定标记该报名为不符吗？",
        success: function (res) {
          if (res.confirm) {
            // _this.creatCareer(arr);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    recoveryPending() {},
    restoreAppropriately() {},
    delete() {},
    query() {
      let params = {
        type: "NT",
        visited_status: this.status,
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.loading = false;
      this.applyList(params);
    },
    async applyList(params) {
      try {
        let res = await applyList(params);
        this.loading = true;
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
  },
  onShow() {
    this.pageNum = 1;
    this.list = [];
    this.query();
  },
  onReachBottom() {
    if (this.loading) {
      this.pageNum++;
      this.query();
    }
  },
};
</script>

<style lang="scss" scoped></style>
