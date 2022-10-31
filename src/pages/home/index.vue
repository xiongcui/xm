<template>
  <view class="home">
    <view class="custom_head" :style="{ height: globalData.navHeight + 'px' }">
      <view
        class="flex-row"
        :style="{
          height: globalData.navObj + 'px',
          'padding-top': globalData.navTop + 'px',
          'padding-right': globalData.navObjWid + 5 + 'px',
        }"
      >
        <view class="head_sign">
          <image src="../../assets/images/common/icon_sign.png"></image>
          <text>签到</text>
        </view>
        <view class="search">
          <input
            :value="search"
            class="search-input"
            placeholder="搜索约拍"
            placeholder-class="placeholder-style"
          />
        </view>
      </view>
    </view>
    <view :style="{ height: globalData.navHeight + 'px' }"></view>
    <view class="page-bg"></view>
    <view class="page-section page-section-spacing swiper">
      <swiper
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <block v-for="(item, index) in background" :key="index">
          <swiper-item>
            <view class="swiper-item">
              <image
                mode="center"
                :src="
                  require('../../assets/images/lanmao' + (index + 1) + '.jpg')
                "
                class="swiper-item-img"
              ></image>
            </view>
          </swiper-item>
        </block>
      </swiper>
    </view>
    <view class="page_nav">
      <view class="page_nav_item">
        <view class="page_nav_icon">
          <image
            src="../../assets/images/user/index/like.png"
            class="page_nav_img"
          ></image>
        </view>
        <text class="page_nav_text">通告</text>
      </view>
      <view class="page_nav_item">
        <view class="page_nav_icon">
          <image
            src="../../assets/images/user/index/like.png"
            class="page_nav_img"
          ></image>
        </view>
        <text class="page_nav_text">约单</text>
      </view>
      <view class="page_nav_item">
        <view class="page_nav_icon">
          <image
            src="../../assets/images/user/index/like.png"
            class="page_nav_img"
          ></image>
        </view>
        <text class="page_nav_text">活动</text>
      </view>
      <view class="page_nav_item">
        <view class="page_nav_icon">
          <image
            src="../../assets/images/user/index/like.png"
            class="page_nav_img"
          ></image>
        </view>
        <text class="page_nav_text">待定</text>
      </view>
    </view>
    <view class="nav_list">
      <scroll-view class="swiper_tab" :enhanced="true" :scrollX="true">
        <view class="nav_list_ct">
          <text
            class="nav_item"
            v-for="(item, index) in navList"
            :key="index"
            :class="navActive == index ? 'nav_active' : ''"
            @tap="navClick(index)"
            >{{ item.value }}</text
          >
        </view>
      </scroll-view>
      <view class="sizer_block ub">
        <view class="gradient"></view>
        <view class="sizer ub" :class="sizer_num.length ? 'is_sizer' : ''">
          <view class="ub">
            <view>筛选</view>
            <block v-if="sizer_num.length">
              <view class="sizer_dian">·</view>
              <view>{{ sizer_num.length }}</view>
            </block>
          </view>
          <view class="sizer_img">
            <image
              src="../../assets/images/common/sizered.png"
              v-if="sizer_num.length"
            ></image>
            <image src="../../assets/images/common/sizer.png" v-else></image>
          </view>
        </view>
      </view>
    </view>
    <view class="list_main">
      <view class="list_box" v-for="(item, index) in list" :key="index">
        <view class="list_top">
          <view class="list_top_left">
            <image
              :src="
                item.author.avatar
                  ? item.author.avatar
                  : '../../assets/images/avatar_default.png'
              "
              class="avatar"
            ></image>
            <view class="list_info">
              <view class="list_name">
                {{ item.author.nickname }}
                <block v-if="item.author.sex !== null">
                  <image
                    src="../../assets/images/nan.png"
                    class="list_sex"
                    v-if="item.author.sex == 1"
                  ></image>
                  <image
                    src="../../assets/images/nv.png"
                    class="list_sex"
                    v-if="item.author.sex == 0"
                  ></image>
                </block>
              </view>
              <view class="list_p">
                <text>
                  {{ item.author.career_list[0] }} |
                  {{ item.ip_location }}</text
                >
                <image
                  src="../../assets/images/common/icon_real.png"
                  class="list_p_img"
                  v-if="item.author.is_certify"
                ></image>
                <image
                  src="../../assets/images/common/icon_pledge_none.png"
                  class="list_p_img"
                  v-else
                ></image>
                <image
                  src="../../assets/images/common/icon_pledge.png"
                  class="list_p_img"
                  v-if="item.author.is_security"
                ></image>
                <image
                  src="../../assets/images/common/icon_real_none.png"
                  class="list_p_img"
                  v-else
                ></image>
              </view>
            </view>
          </view>
          <view class="list_collection">
            <image src="../../assets/images/common/icon_favorite.png"></image>
          </view>
        </view>
        <view class="list_content">
          <view class="list_title">
            约{{ item.face_career }}
            <text v-if="item.payment_type == 300 || item.payment_type == 400"
              >·</text
            >
            <text
              v-if="
                (item.payment_type == 300 && item.payment_range == 1) ||
                (item.payment_type == 400 && item.payment_range == 1)
              "
              >{{ item.payment_name }}{{ item.payment_min_amount }}-{{
                item.payment_max_amount
              }}{{ item.payment_unit }}</text
            >
            <text
              v-if="
                (item.payment_type == 300 && item.payment_range == 0) ||
                (item.payment_type == 400 && item.payment_range == 0)
              "
              >{{ item.payment_name }}{{ item.payment_amount
              }}{{ item.payment_unit }}
            </text>
          </view>
          <view class="list_loction"> {{ item.face_province_name }} </view>
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
              @tap="previewImage(url, item.cover)"
            ></image>
          </scroll-view>
        </view>
        <view class="list_video" v-if="item.file_type == 'video'">
          <video
            :src="item.video_cover && item.video_cover[0]"
            class="list_video-width"
          ></video>
        </view>
        <view class="list_tags">
          <view
            class="tag"
            v-for="(styleItem, styleIndex) in item.style_label"
            :key="styleIndex"
            >{{ styleItem }}</view
          >
        </view>
        <view class="list_bottom">
          <view class="list_time">
            <image src="../../assets/images/common/time.png"></image>
            1小时前
          </view>
          <view class="list_yuepai">
            <image src="../../assets/images/user/index/invoice.png"></image>
            收到约拍 20
          </view>
          <view class="list_read">
            <image src="../../assets/images/user/index/invoice.png"></image>
            阅读 20
          </view>
        </view>
      </view>
    </view>
    <view class="select_block">
      <view class="select_bg">
        <view
          class="statusbar"
          :style="{ height: globalData.navHeight + 'px' }"
        ></view>
        <view class="location">
          <view class="location_address">当前定位：北京</view>
          <text class="reposition">重新定位</text>
        </view>
        <view class="address_box">
          <view class="address_label">选择地区</view>
          <view class="address_input">
            <view class="pickers">
              <view class="ub-f1">
                <picker
                  :mode="'multiSelector'"
                  :value="regionListIndex"
                  :range="sizer_region"
                  :range-key="'name'"
                  @change="sizerBindRegionChange"
                  @columnchange="onBindcolumnchange"
                >
                  <view class="sizer_select_local bd_b fl">
                    <view class="pickers pick-city picked" v-if="sizer_city">{{
                      sizer_city
                    }}</view>
                    <view class="pickers pick-city" v-else>全部</view>
                  </view>
                </picker>
              </view>
            </view>
          </view>
        </view>
        <view class="select_item">
          <view class="select_item_title">约单对象</view>
          <view>
            <text
              @tap="select_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in appointmentData"
              :key="index"
            >
              {{ item.name }}
            </text>
          </view>
        </view>
        <view class="select_item">
          <view class="select_item_title">发起人性别</view>
          <view>
            <text
              @tap="select_sex_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in sexData"
              :key="index"
            >
              {{ item.name }}
            </text>
          </view>
        </view>
        <view class="select_item">
          <view class="select_item_title">收费模式</view>
          <view>
            <text
              @tap="select_charge_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in chargeData"
              :key="index"
            >
              {{ item.name }}
            </text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { inviteList, publicConfig } from "../../api/index";
import { errortip } from "../../utils/util";
import { city } from "../../utils/city";
export default {
  name: "home",
  data() {
    return {
      globalData: {
        navHeight: 0,
        navTop: 0,
        navObj: 0,
        navObjWid: 0,
      },
      statusBarHeight: 20,
      search: "",
      background: ["demo-text-1", "demo-text-2", "demo-text-3"],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500,
      sizer_num: [],
      navActive: 0,
      navList: [],
      filter: [
        {
          quick_filter: 0,
        },
        { face_province_id: 0 },
        { face_cid: 0 },
        { sex: 100 },
        { payment_type: 0 },
      ],
      pageNum: 1,
      pageSize: 10,
      list: [],
      loading: true,
      show_sizer_modal: true,
      sizer_region: [],
      regionListIndex: [0, 0],
      sizer_city: "",
      appointmentData: [
        {
          name: "11",
          ispick: true,
        },
        {
          name: "22",
          ispick: false,
        },
      ],
      sexData: [
        {
          name: "全部",
          ispick: false,
        },
        {
          name: "男",
          ispick: false,
        },
        {
          name: "女",
          ispick: false,
        },
      ],
      chargeData: [
        {
          name: "全部",
          ispick: false,
        },
      ],
    };
  },
  methods: {
    map() {
      wx.getLocation({
        type: "gcj02", //返回可以用于 wx.openLocation 的经纬度
        success(res) {
          const latitude = res.latitude;
          const longitude = res.longitude;
          wx.openLocation({
            latitude,
            longitude,
            scale: 18,
          });
        },
      });
    },
    sizerBindRegionChange(e) {
      console.log(e, "11");
    },
    onBindcolumnchange(e) {
      console.log(e, "222");
    },
    navClick(index) {
      this.navActive = index;
    },
    bindRegionChange(e) {
      console.log(e);
      this.sizer_city = e.detail.value;
    },
    query(type) {
      this.inviteList(
        {
          filter: this.filter,
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type
      );
    },
    //刷新
    onRefresh() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading();
      //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      wx.showLoading({
        title: "刷新中...",
      });
      this.pageNum = 1;
      this.query("init");
    },
    // 加载更多
    onMore() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading();
      //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      wx.showLoading({
        title: "数据加载中...",
      });
      this.loading = false;
      this.query("more");
    },
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        let arr = [];
        res.data.data.map((item) => {
          if (item.type == "invite_filter") {
            arr.push(item);
          }
        });
        this.navList = arr;
        this.filter = [
          {
            ["quick_filter"]: this.navList[0].key,
          },
          { face_province_id: 0 },
          { face_cid: 0 },
          { sex: 100 },
          { payment_type: 0 },
        ];
        this.query("init");
      } catch (error) {}
    },
    async inviteList(params, type) {
      try {
        let res = await inviteList(params);
        //隐藏loading 提示框
        wx.hideLoading();
        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();
        if (type == "init") {
          this.list = res.data.data.items;
        } else if (type == "more") {
          if (!res.data.data.items.length) {
            errortip("没有更多数据了～");
            return false;
          }
          let data = res.data.data.items;
          this.list = this.list.concat(data);
          this.loading = true;
        }
      } catch (error) {}
    },
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
    this.onRefresh();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("下拉加载更多");
    this.pageNum++;
    if (this.loading) {
      this.onMore();
    }
  },
  // created() {
  //   this.publicConfig({
  //     type: ["invite_filter"],
  //   });
  // },
  mounted() {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: (res) => {
        //导航高度
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          navObjWid =
            res.windowWidth - menuButtonObject.right + menuButtonObject.width, // 胶囊按钮与右侧的距离 = windowWidth - right+胶囊宽度
          navHeight =
            statusBarHeight +
            menuButtonObject.height +
            (menuButtonObject.top - statusBarHeight) * 2;
        this.globalData.navHeight = navHeight; //导航栏总体高度
        this.globalData.navTop = navTop; //胶囊距离顶部距离
        this.globalData.navObj = menuButtonObject.height; //胶囊高度
        this.globalData.navObjWid = navObjWid; //胶囊宽度(包括右边距离)
        // console.log(navHeight,navTop,menuButtonObject.height,navObjWid)
      },
      fail(err) {
        console.log(err);
      },
    });
    let arr = [[], []];
    city.map((item) => {
      arr[0].push(item);
    });
    arr[1].push(arr[0][0].citylist[0]);
    arr[0].unshift({ name: "全部", code: "all" });
    arr[1].unshift({ name: "全部", code: "all" });
    this.sizer_region = arr;
    // console.log(arr[0][0].citylist[0]);
  },
  onShow: function onShow() {
    this.publicConfig({
      type: ["invite_filter"],
    });
  },
};
</script>
