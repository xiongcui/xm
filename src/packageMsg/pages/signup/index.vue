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
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <view class="signup-box" v-for="(item, index) in list" :key="index">
              <view class="signup-top">
                <view class="signup-img">
                  <image :src="item.visitor.avatar"></image>
                </view>
                <view class="signup-info">
                  <view class="signup-name">
                    {{ item.visitor.nickname }}
                    <image
                      v-if="item.visitor.sex == 1"
                      src="../../../assets/images/nan.png"
                      class="list_sex"
                    ></image>
                    <image
                      src="../../../assets/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image>
                  </view>
                  <view class="identity"
                    >{{ item.visitor.career_list[0] }} ｜
                    {{ item.visitor.province_name }}</view
                  >
                </view>
                <view class="signup-rt">
                  <view class="contact">立即联系</view>
                  <view class="time">{{ item.date_humanize }}报名</view>
                </view>
              </view>
              <view class="notice">
                来自通告：{{ item.summary }}
                <text class="notice-btn" @tap="signupDetail(item.oid)"
                  >查看全部报名</text
                ></view
              >
              <view class="remark" v-if="item.remark">
                备注：{{ item.remark }}</view
              >
              <view class="signup-cotent">
                <text class="signup-desc">{{ item.content }}</text>
                <text class="signup-detail">查看详情</text>
              </view>
              <view class="signup-btns">
                <view class="signup-btn-left">
                  <text class="more" @tap="moreClick(item.sid)">更多</text>
                  <text class="remarks" @tap="saveRemarks(item)">备注</text>
                </view>
                <view class="signup-btn-rt">
                  <view
                    class="btn-yellow"
                    @tap="noConformance(item.sid)"
                    v-if="item.visited_status == 200"
                    ><icon type="cancel" size="12" color="#ffffff"></icon
                    >不符</view
                  >
                  <view
                    class="btn-red"
                    @tap="appropriate(item.sid)"
                    v-if="item.visited_status == 200"
                    ><icon
                      type="success_no_circle"
                      size="12"
                      color="#ffffff"
                    ></icon
                    >合适</view
                  >
                  <view
                    class="btn-yellow"
                    v-if="item.visited_status == 410"
                    @tap="abandonCooperation(item.sid)"
                    >放弃合作</view
                  >
                  <view
                    class="btn-red"
                    v-if="item.visited_status == 410"
                    @tap="completeCooperation(item.sid)"
                    >完成合作</view
                  >
                  <view
                    class="btn-blue"
                    v-if="item.visited_status == 420"
                    @tap="recoveryPending(item.sid)"
                    >恢复待定</view
                  >
                  <view
                    class="btn-yellow"
                    v-if="item.visited_status == 430"
                    @tap="restoreAppropriately(item.sid)"
                    >恢复合适</view
                  >
                  <view
                    class="btn-del"
                    v-if="item.visited_status == 440"
                    @tap="Delete(item.sid)"
                    >删除</view
                  >
                </view>
              </view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <view class="signup-box" v-for="(item, index) in list" :key="index">
              <view class="signup-top">
                <view class="signup-img">
                  <image :src="item.visitor.avatar"></image>
                </view>
                <view class="signup-info">
                  <view class="signup-name">
                    {{ item.visitor.nickname }}
                    <image
                      v-if="item.visitor.sex == 1"
                      src="../../../assets/images/nan.png"
                      class="list_sex"
                    ></image>
                    <image
                      src="../../../assets/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image>
                  </view>
                  <view class="identity"
                    >{{ item.visitor.career_list[0] }} ｜
                    {{ item.visitor.province_name }}</view
                  >
                </view>
                <view class="signup-rt">
                  <view class="contact">立即联系</view>
                  <view class="time">{{ item.date_humanize }}报名</view>
                </view>
              </view>
              <view class="notice">
                来自通告：{{ item.summary }}
                <text class="notice-btn" @tap="signupDetail(item.oid)"
                  >查看全部报名</text
                ></view
              >
              <view class="signup-cotent">
                <text class="signup-desc">{{ item.content }}</text>
                <text class="signup-detail">查看详情</text>
              </view>
              <view class="signup-btns">
                <view class="signup-btn-left">
                  <text class="more" @tap="moreClick(item.sid)">更多</text>
                  <text class="remarks" @tap="saveRemarks(item)">备注</text>
                </view>
                <view class="signup-btn-rt">
                  <view
                    class="btn-yellow"
                    @tap="noConformance(item.sid)"
                    v-if="item.visited_status == 200"
                    ><icon type="cancel" size="12" color="#ffffff"></icon
                    >不符</view
                  >
                  <view
                    class="btn-red"
                    @tap="appropriate(item.sid)"
                    v-if="item.visited_status == 200"
                    ><icon
                      type="success_no_circle"
                      size="12"
                      color="#ffffff"
                    ></icon
                    >合适</view
                  >
                  <view
                    class="btn-yellow"
                    v-if="item.visited_status == 410"
                    @tap="abandonCooperation(item.sid)"
                    >放弃合作</view
                  >
                  <view
                    class="btn-red"
                    v-if="item.visited_status == 410"
                    @tap="completeCooperation(item.sid)"
                    >完成合作</view
                  >
                  <view
                    class="btn-blue"
                    v-if="item.visited_status == 420"
                    @tap="recoveryPending(item.sid)"
                    >恢复待定</view
                  >
                  <view
                    class="btn-yellow"
                    v-if="item.visited_status == 430"
                    @tap="restoreAppropriately(item.sid)"
                    >恢复合适</view
                  >
                  <view
                    class="btn-del"
                    v-if="item.visited_status == 440"
                    @tap="Delete(item.sid)"
                    >删除</view
                  >
                </view>
              </view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <view class="signup-box" v-for="(item, index) in list" :key="index">
              <view class="signup-top">
                <view class="signup-img">
                  <image :src="item.visitor.avatar"></image>
                </view>
                <view class="signup-info">
                  <view class="signup-name">
                    {{ item.visitor.nickname }}
                    <image
                      v-if="item.visitor.sex == 1"
                      src="../../../assets/images/nan.png"
                      class="list_sex"
                    ></image>
                    <image
                      src="../../../assets/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image>
                  </view>
                  <view class="identity"
                    >{{ item.visitor.career_list[0] }} ｜
                    {{ item.visitor.province_name }}</view
                  >
                </view>
                <view class="signup-rt">
                  <view class="contact">立即联系</view>
                  <view class="time">{{ item.date_humanize }}报名</view>
                </view>
              </view>
              <view class="notice">
                来自通告：{{ item.summary }}
                <text class="notice-btn" @tap="signupDetail(item.oid)"
                  >查看全部报名</text
                ></view
              >
              <view class="signup-cotent">
                <text class="signup-desc">{{ item.content }}</text>
                <text class="signup-detail">查看详情</text>
              </view>
              <view class="signup-btns">
                <view class="signup-btn-left">
                  <text class="more" @tap="moreClick(item.sid)">更多</text>
                  <text class="remarks" @tap="saveRemarks(item)">备注</text>
                </view>
                <view class="signup-btn-rt">
                  <view
                    class="btn-yellow"
                    @tap="noConformance(item.sid)"
                    v-if="item.visited_status == 200"
                    ><icon type="cancel" size="12" color="#ffffff"></icon
                    >不符</view
                  >
                  <view
                    class="btn-red"
                    @tap="appropriate(item.sid)"
                    v-if="item.visited_status == 200"
                    ><icon
                      type="success_no_circle"
                      size="12"
                      color="#ffffff"
                    ></icon
                    >合适</view
                  >
                  <view
                    class="btn-yellow"
                    v-if="item.visited_status == 410"
                    @tap="abandonCooperation(item.sid)"
                    >放弃合作</view
                  >
                  <view
                    class="btn-red"
                    v-if="item.visited_status == 410"
                    @tap="completeCooperation(item.sid)"
                    >完成合作</view
                  >
                  <view
                    class="btn-blue"
                    v-if="item.visited_status == 420"
                    @tap="recoveryPending(item.sid)"
                    >恢复待定</view
                  >
                  <view
                    class="btn-yellow"
                    v-if="item.visited_status == 430"
                    @tap="restoreAppropriately(item.sid)"
                    >恢复合适</view
                  >
                  <view
                    class="btn-del"
                    v-if="item.visited_status == 440"
                    @tap="Delete(item.sid)"
                    >删除</view
                  >
                </view>
              </view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <view class="signup-box" v-for="(item, index) in list" :key="index">
              <view class="signup-top">
                <view class="signup-img">
                  <image :src="item.visitor.avatar"></image>
                </view>
                <view class="signup-info">
                  <view class="signup-name">
                    {{ item.visitor.nickname }}
                    <image
                      v-if="item.visitor.sex == 1"
                      src="../../../assets/images/nan.png"
                      class="list_sex"
                    ></image>
                    <image
                      src="../../../assets/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image>
                  </view>
                  <view class="identity"
                    >{{ item.visitor.career_list[0] }} ｜
                    {{ item.visitor.province_name }}</view
                  >
                </view>
                <view class="signup-rt">
                  <view class="contact">立即联系</view>
                  <view class="time">{{ item.date_humanize }}报名</view>
                </view>
              </view>
              <view class="notice">
                来自通告：{{ item.summary }}
                <text class="notice-btn" @tap="signupDetail(item.oid)"
                  >查看全部报名</text
                ></view
              >
              <view class="signup-cotent">
                <text class="signup-desc">{{ item.content }}</text>
                <text class="signup-detail">查看详情</text>
              </view>
              <view class="signup-btns">
                <view class="signup-btn-left">
                  <text class="more" @tap="moreClick(item.sid)">更多</text>
                  <text class="remarks" @tap="saveRemarks(item)">备注</text>
                </view>
                <view class="signup-btn-rt">
                  <view
                    class="btn-yellow"
                    @tap="noConformance(item.sid)"
                    v-if="item.visited_status == 200"
                    ><icon type="cancel" size="12" color="#ffffff"></icon
                    >不符</view
                  >
                  <view
                    class="btn-red"
                    @tap="appropriate(item.sid)"
                    v-if="item.visited_status == 200"
                    ><icon
                      type="success_no_circle"
                      size="12"
                      color="#ffffff"
                    ></icon
                    >合适</view
                  >
                  <view
                    class="btn-yellow"
                    v-if="item.visited_status == 410"
                    @tap="abandonCooperation(item.sid)"
                    >放弃合作</view
                  >
                  <view
                    class="btn-red"
                    v-if="item.visited_status == 410"
                    @tap="completeCooperation(item.sid)"
                    >完成合作</view
                  >
                  <view
                    class="btn-blue"
                    v-if="item.visited_status == 420"
                    @tap="recoveryPending(item.sid)"
                    >恢复待定</view
                  >
                  <view
                    class="btn-yellow"
                    v-if="item.visited_status == 430"
                    @tap="restoreAppropriately(item.sid)"
                    >恢复合适</view
                  >
                  <view
                    class="btn-del"
                    v-if="item.visited_status == 440"
                    @tap="Delete(item.sid)"
                    >删除</view
                  >
                </view>
              </view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <view class="signup-box" v-for="(item, index) in list" :key="index">
              <view class="signup-top">
                <view class="signup-img">
                  <image :src="item.visitor.avatar"></image>
                </view>
                <view class="signup-info">
                  <view class="signup-name">
                    {{ item.visitor.nickname }}
                    <image
                      v-if="item.visitor.sex == 1"
                      src="../../../assets/images/nan.png"
                      class="list_sex"
                    ></image>
                    <image
                      src="../../../assets/images/nv.png"
                      class="list_sex"
                      v-if="item.visitor.sex == 0"
                    ></image>
                  </view>
                  <view class="identity"
                    >{{ item.visitor.career_list[0] }} ｜
                    {{ item.visitor.province_name }}</view
                  >
                </view>
                <view class="signup-rt">
                  <view class="contact">立即联系</view>
                  <view class="time">{{ item.date_humanize }}报名</view>
                </view>
              </view>
              <view class="notice">
                来自通告：{{ item.summary }}
                <text class="notice-btn" @tap="signupDetail(item.oid)"
                  >查看全部报名</text
                ></view
              >
              <view class="signup-cotent">
                <text class="signup-desc">{{ item.content }}</text>
                <text class="signup-detail">查看详情</text>
              </view>
              <view class="signup-btns">
                <view class="signup-btn-left">
                  <text class="more" @tap="moreClick(item.sid)">更多</text>
                  <text class="remarks" @tap="saveRemarks(item)">备注</text>
                </view>
                <view class="signup-btn-rt">
                  <view
                    class="btn-yellow"
                    @tap="noConformance(item.sid)"
                    v-if="item.visited_status == 200"
                    ><icon type="cancel" size="12" color="#ffffff"></icon
                    >不符</view
                  >
                  <view
                    class="btn-red"
                    @tap="appropriate(item.sid)"
                    v-if="item.visited_status == 200"
                    ><icon
                      type="success_no_circle"
                      size="12"
                      color="#ffffff"
                    ></icon
                    >合适</view
                  >
                  <view
                    class="btn-yellow"
                    v-if="item.visited_status == 410"
                    @tap="abandonCooperation(item.sid)"
                    >放弃合作</view
                  >
                  <view
                    class="btn-red"
                    v-if="item.visited_status == 410"
                    @tap="completeCooperation(item.sid)"
                    >完成合作</view
                  >
                  <view
                    class="btn-blue"
                    v-if="item.visited_status == 420"
                    @tap="recoveryPending(item.sid)"
                    >恢复待定</view
                  >
                  <view
                    class="btn-yellow"
                    v-if="item.visited_status == 430"
                    @tap="restoreAppropriately(item.sid)"
                    >恢复合适</view
                  >
                  <view
                    class="btn-del"
                    v-if="item.visited_status == 440"
                    @tap="Delete(item.sid)"
                    >删除</view
                  >
                </view>
              </view>
            </view>
          </scroll-view>
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
import { applyList, applyManage } from "../../../api/index";
import { errortip, openPage } from "../../../utils/util";
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
      status: 200,
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
    saveRemarks(row) {
      this.visible = true;
      this.remarks = row.remark;
      this.currentdata = row;
    },
    close() {
      this.visible = false;
    },
    signupDetail(oid) {
      openPage(
        "/packageMsg/pages/manageSignup/index?oid=" +
          oid +
          "&type=" +
          this.status +
          "&currentTab=" +
          this.currentTab
      );
    },
    clickSave() {
      this.applyManage({
        even_type: 500,
        sid: this.currentdata.sid,
        remark: this.remarks,
      });
    },
    moreClick(sid) {
      wx.showActionSheet({
        itemList: ["删除", "投诉"],
        success(res) {
          switch (res.tapIndex) {
            case 0:
              console.log("删除");
              this.Delete({
                even_type: 111,
                sid: sid,
              });
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
    appropriate(sid) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定标记该报名为合适吗？",
        success: function (res) {
          if (res.confirm) {
            _this.applyManage({
              even_type: 410,
              sid: sid,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    noConformance(sid) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定标记该报名为不符吗？",
        success: function (res) {
          if (res.confirm) {
            _this.applyManage({
              even_type: 420,
              sid: sid,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    completeCooperation(sid) {
      this.applyManage({
        even_type: 440,
        sid: sid,
      });
    },
    abandonCooperation(sid) {
      this.applyManage({
        even_type: 430,
        sid: sid,
      });
    },
    Delete(sid) {
      this.applyManage({
        even_type: 111,
        sid: sid,
      });
    },
    recoveryPending(sid) {
      this.applyManage({
        even_type: 450,
        sid: sid,
      });
    },
    restoreAppropriately(sid) {
      this.applyManage({
        even_type: 460,
        sid: sid,
      });
    },
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
    scrollToLower() {
      this.pageNum++;
      this.query();
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
    async applyManage(params) {
      try {
        let res = await applyManage(params);
        this.visible = false;
        this.list = [];
        this.query();
      } catch (error) {}
    },
  },
  //   onShow() {
  //     this.pageNum = 1;
  //     this.list = [];
  //     this.query();
  //   },
  onLoad: function (options) {
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      },
    });
    this.pageNum = 1;
    this.list = [];
    this.query();
  },
};
</script>

<style lang="scss" scoped></style>
