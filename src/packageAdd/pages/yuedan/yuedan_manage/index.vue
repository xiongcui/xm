<template>
  <view class="yuedan-manage">
    <view class="tab">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0, 0)"
        >全部</view
      >
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1, 200)"
        >展示中</view
      >
      <view
        class="tab-item"
        :class="currentTab == 2 ? 'on' : ''"
        @tap="changeItem(2, 300)"
        >已关闭</view
      >
      <view
        class="tab-item"
        :class="currentTab == 3 ? 'on' : ''"
        @tap="changeItem(3, 600)"
        >审核失败</view
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
            :lower-threshold="200"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="yuedan-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_title">
                    {{ item.type == "PH" ? item.title : item.major_subject }}
                  </view>
                  <view class="list_loction">
                    {{ item.face_province_name }}
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >展示中</view
                  >
                  <view
                    class="list_status_fail"
                    v-else-if="item.publish_status == 600"
                    >审核失败</view
                  >
                  <view
                    class="list_status"
                    v-else-if="item.publish_status == 300"
                    >已关闭</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                </view>
                <view class="list_desc">
                  {{ item.summary }}
                </view>
                <view class="list_img" v-if="item.file_type == 'picture'">
                  <scroll-view :enhanced="true" :scrollX="true">
                    <image
                      :src="url"
                      mode="aspectFill"
                      class="list_img_item"
                      v-for="(url, coverIndex) in item.cover"
                      :key="coverIndex"
                      @tap.stop="previewImage(url, item.cover)"
                    ></image>
                  </scroll-view>
                </view>
                <view class="list_video" v-if="item.file_type == 'video'">
                  <video
                    objectFit="cover"
                    :poster="item.cover[0]"
                    :src="item.video_cover && item.video_cover[0]"
                    class="list_video-width"
                  ></video>
                </view>
                <view class="list_bottom">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_operation" v-if="item.publish_status == 200">
                  <view class="icon_more" @tap="moreClick(item.oid)">
                    更多
                  </view>
                  <view
                    class="icon_refresh"
                    @tap="refreshClick(item.is_certify, item.oid)"
                    >刷新</view
                  >
                </view>
                <view
                  class="list_operation"
                  v-if="
                    item.publish_status == 100 || item.publish_status == 300
                  "
                >
                  <view class="icon_delete" @tap="deleteYuepai(item.oid)"
                    >删除</view
                  >
                  <view
                    class="icon_open"
                    v-if="item.publish_status == 300"
                    @tap="openClick(item.oid)"
                    >打开</view
                  >
                </view>
                <view class="list_operation" v-if="item.publish_status == 600">
                  <view class="list_tips">
                    <image
                      class="warn_icon"
                      src="https://yuepai-oss.qubeitech.com/static/images/common/warn_icon.png"
                    ></image>
                    {{ item.audit_reason }}
                  </view>
                  <view class="icon_delete" @tap="deleteYuepai(item.oid)"
                    >删除</view
                  >
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :lower-threshold="200"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="yuedan-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_title">
                    {{ item.type == "PH" ? item.title : item.major_subject }}
                  </view>
                  <view class="list_loction">
                    {{ item.face_province_name }}
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >展示中</view
                  >
                  <view
                    class="list_status_fail"
                    v-else-if="item.publish_status == 600"
                    >审核失败</view
                  >
                  <view
                    class="list_status"
                    v-else-if="item.publish_status == 300"
                    >已关闭</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                </view>
                <view class="list_desc">
                  {{ item.summary }}
                </view>
                <view class="list_img" v-if="item.file_type == 'picture'">
                  <scroll-view :enhanced="true" :scrollX="true">
                    <image
                      :src="url"
                      mode="aspectFill"
                      class="list_img_item"
                      v-for="(url, coverIndex) in item.cover"
                      :key="coverIndex"
                      @tap.stop="previewImage(url, item.cover)"
                    ></image>
                  </scroll-view>
                </view>
                <view class="list_video" v-if="item.file_type == 'video'">
                  <video
                    objectFit="cover"
                    :poster="item.cover[0]"
                    :src="item.video_cover && item.video_cover[0]"
                    class="list_video-width"
                  ></video>
                </view>
                <view class="list_bottom">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_operation" v-if="item.publish_status == 200">
                  <view class="icon_more" @tap="moreClick(item.oid)">
                    更多
                  </view>
                  <view
                    class="icon_refresh"
                    @tap="refreshClick(item.is_certify, item.oid)"
                    >刷新</view
                  >
                </view>
                <view
                  class="list_operation"
                  v-if="
                    item.publish_status == 100 || item.publish_status == 300
                  "
                >
                  <view class="icon_delete" @tap="deleteYuepai(item.oid)"
                    >删除</view
                  >
                  <view
                    class="icon_open"
                    v-if="item.publish_status == 300"
                    @tap="openClick(item.oid)"
                    >打开</view
                  >
                </view>
                <view class="list_operation" v-if="item.publish_status == 600">
                  <view class="list_tips">
                    <image
                      class="warn_icon"
                      src="https://yuepai-oss.qubeitech.com/static/images/common/warn_icon.png"
                    ></image>
                    {{ item.audit_reason }}
                  </view>
                  <view class="icon_delete" @tap="deleteYuepai(item.oid)"
                    >删除</view
                  >
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :lower-threshold="200"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="yuedan-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_title">
                    {{ item.type == "PH" ? item.title : item.major_subject }}
                  </view>
                  <view class="list_loction">
                    {{ item.face_province_name }}
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >展示中</view
                  >
                  <view
                    class="list_status_fail"
                    v-else-if="item.publish_status == 600"
                    >审核失败</view
                  >
                  <view
                    class="list_status"
                    v-else-if="item.publish_status == 300"
                    >已关闭</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                </view>
                <view class="list_desc">
                  {{ item.summary }}
                </view>
                <view class="list_img" v-if="item.file_type == 'picture'">
                  <scroll-view :enhanced="true" :scrollX="true">
                    <image
                      :src="url"
                      mode="aspectFill"
                      class="list_img_item"
                      v-for="(url, coverIndex) in item.cover"
                      :key="coverIndex"
                      @tap.stop="previewImage(url, item.cover)"
                    ></image>
                  </scroll-view>
                </view>
                <view class="list_video" v-if="item.file_type == 'video'">
                  <video
                    objectFit="cover"
                    :poster="item.cover[0]"
                    :src="item.video_cover && item.video_cover[0]"
                    class="list_video-width"
                  ></video>
                </view>
                <view class="list_bottom">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_operation" v-if="item.publish_status == 200">
                  <view class="icon_more" @tap="moreClick(item.oid)">
                    更多
                  </view>
                  <view
                    class="icon_refresh"
                    @tap="refreshClick(item.is_certify, item.oid)"
                    >刷新</view
                  >
                </view>
                <view
                  class="list_operation"
                  v-if="
                    item.publish_status == 100 || item.publish_status == 300
                  "
                >
                  <view class="icon_delete" @tap="deleteYuepai(item.oid)"
                    >删除</view
                  >
                  <view
                    class="icon_open"
                    v-if="item.publish_status == 300"
                    @tap="openClick(item.oid)"
                    >打开</view
                  >
                </view>
                <view class="list_operation" v-if="item.publish_status == 600">
                  <view class="list_tips">
                    <image
                      class="warn_icon"
                      src="https://yuepai-oss.qubeitech.com/static/images/common/warn_icon.png"
                    ></image>
                    {{ item.audit_reason }}
                  </view>
                  <view class="icon_delete" @tap="deleteYuepai(item.oid)"
                    >删除</view
                  >
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :lower-threshold="200"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="yuedan-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_title">
                    {{ item.type == "PH" ? item.title : item.major_subject }}
                  </view>
                  <view class="list_loction">
                    {{ item.face_province_name }}
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >展示中</view
                  >
                  <view
                    class="list_status_fail"
                    v-else-if="item.publish_status == 600"
                    >审核失败</view
                  >
                  <view
                    class="list_status"
                    v-else-if="item.publish_status == 300"
                    >已关闭</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                </view>
                <view class="list_desc">
                  {{ item.summary }}
                </view>
                <view class="list_img" v-if="item.file_type == 'picture'">
                  <scroll-view :enhanced="true" :scrollX="true">
                    <image
                      :src="url"
                      mode="aspectFill"
                      class="list_img_item"
                      v-for="(url, coverIndex) in item.cover"
                      :key="coverIndex"
                      @tap.stop="previewImage(url, item.cover)"
                    ></image>
                  </scroll-view>
                </view>
                <view class="list_video" v-if="item.file_type == 'video'">
                  <video
                    objectFit="cover"
                    :poster="item.cover[0]"
                    :src="item.video_cover && item.video_cover[0]"
                    class="list_video-width"
                  ></video>
                </view>
                <view class="list_bottom">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_operation" v-if="item.publish_status == 200">
                  <view class="icon_more" @tap="moreClick(item.oid)">
                    更多
                  </view>
                  <view
                    class="icon_refresh"
                    @tap="refreshClick(item.is_certify, item.oid)"
                    >刷新</view
                  >
                </view>
                <view
                  class="list_operation"
                  v-if="
                    item.publish_status == 100 || item.publish_status == 300
                  "
                >
                  <view class="icon_delete" @tap="deleteYuepai(item.oid)"
                    >删除</view
                  >
                  <view
                    class="icon_open"
                    v-if="item.publish_status == 300"
                    @tap="openClick(item.oid)"
                    >打开</view
                  >
                </view>
                <view class="list_operation" v-if="item.publish_status == 600">
                  <view class="list_tips">
                    <image
                      class="warn_icon"
                      src="https://yuepai-oss.qubeitech.com/static/images/common/warn_icon.png"
                    ></image>
                    {{ item.audit_reason }}
                  </view>
                  <view class="icon_delete" @tap="deleteYuepai(item.oid)"
                    >删除</view
                  >
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { noteManageList, manageEvent } from "../../../../api/index";
import { errortip, openPage } from "../../../../utils/util";
export default {
  name: "yuedan_manage",
  data() {
    return {
      optionMap: {
        NE: "约拍",
        NT: "通告",
        PH: "作品",
      },
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      status: 0,
      pageNum: 1,
      pageSize: 10,
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
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    moreClick(oid) {
      let _this = this;
      wx.showActionSheet({
        itemList: ["关闭", "删除"],
        success(res) {
          switch (res.tapIndex) {
            case 0:
              wx.showModal({
                title: "温馨提示",
                content: `关闭${_this.optionMap[_this.type]}，等同删除${
                  _this.optionMap[_this.type]
                }，不再接受${_this.optionMap[_this.type]}请求，确认关闭么？`,
                success: function (res) {
                  if (res.confirm) {
                    let params = { oid: oid, even_type: 300 };
                    _this.manageEvent(params);
                    console.log("用户点击确定");
                  } else if (res.cancel) {
                    console.log("用户点击取消");
                  }
                },
              });
              break;
            case 1:
              _this.deleteYuepai();
              break;
          }
        },
        fail(res) {
          console.log(res.errMsg);
        },
      });
    },
    deleteYuepai(oid) {
      // # 200:打开；300:关闭；400:删除
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: `删除${this.optionMap[this.type]}，将同时${
          this.optionMap[this.type]
        }收到的${this.optionMap[this.type]}请求，确认删除么？`,
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
            let params = { oid: oid, even_type: 400 };
            _this.manageEvent(params);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    openClick(oid) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: `打开${this.optionMap[this.type]}，将继续接受${
          this.optionMap[this.type]
        }请求，确认打开么？`,
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
            let params = { oid: oid, even_type: 200 };
            _this.manageEvent(params);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    refreshClick(is_certify, oid) {
      if (!is_certify) {
        let _this = this;
        wx.showModal({
          confirmText: "去实名",
          title: "温馨提示",
          content: `刷新${
            this.optionMap[this.type]
          }仅限实名认证用户可使用，去实名认证？`,
          success: function (res) {
            if (res.confirm) {
              console.log("用户点击确定");
              // let params = { oid: oid, even_type: 700 };
              // _this.manageEvent(params);
              openPage("/packageAdd/pages/user/realnameAuth/index");
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      } else {
        let params = { oid: oid, even_type: 700 };
        this.manageEvent(params);
      }
    },
    scrollToLower() {
      this.pageNum++;
      this.query();
    },
    query() {
      let params = {
        type: this.type, // 约拍：NE； 通告：NT；照片：PH
        publish_status: this.status, // 0:全部，100：审核中；200：展示中；300：已关闭；400：删除；500：修改；600：审核失败，
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.noteManageList(params);
    },
    async noteManageList(params) {
      try {
        let res = await noteManageList(params);
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
    async manageEvent(params) {
      try {
        let res = await manageEvent(params);
        if (params.even_type == 200) errortip("打开成功");
        if (params.even_type == 300) errortip("关闭成功");
        if (params.even_type == 400) errortip("删除成功");
        if (params.even_type == 700) errortip("刷新成功");
        this.pageNum = 1;
        this.list = [];
        this.query();
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    this.type = options.type;
    wx.setNavigationBarTitle({
      title: "我收到的" + this.optionMap[options.type],
    });
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      },
    });
    this.query();
  },
};
</script>

<style lang="scss" scoped></style>
