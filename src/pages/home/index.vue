<template>
  <view class="home">
    <view class="custom_head" :style="{ height: globalData.navHeight + 'px' }">
      <view
        class="flex-row"
        :style="{
          width: '100%',
          height: globalData.navObj + 'px',
          'padding-top': globalData.navTop + 'px',
          'padding-right': globalData.navObjWid + 5 + 'px',
        }"
      >
        <view class="head_sign">
          <image src="../../assets/images/common/icon_sign.png"></image>
          <text>签到</text>
        </view>
        <view class="head_nav">
          <text
            class="head_nav_item"
            v-for="(item, index) in headNavList"
            :key="index"
            :class="index == headCurrent ? 'acitve' : ''"
            @tap="headNavClick(index)"
          >
            {{ item.name }}
          </text>
        </view>
      </view>
    </view>
    <view :style="{ height: globalData.navHeight + 'px' }"></view>
    <block v-if="headCurrent == 0">
      <TonggaoList
        :base_data="allCity"
        :multi_array="multiArray"
        :more="tonggaoMore"
        :refresh="tonggaoRefresh"
        @closeMore="closeMore"
        @closeRefresh="closeRefresh"
      ></TonggaoList>
    </block>
    <block v-if="headCurrent == 1">
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
                  mode="aspectFill"
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
              src="../../assets/images/tonggao1.png"
              class="page_nav_img"
            ></image>
          </view>
          <text class="page_nav_text">通告</text>
        </view>
        <view class="page_nav_item">
          <view class="page_nav_icon">
            <image
              src="../../assets/images/yuepai.png"
              class="page_nav_img"
            ></image>
          </view>
          <text class="page_nav_text">约单</text>
        </view>
        <view class="page_nav_item">
          <view class="page_nav_icon">
            <image
              src="../../assets/images/huodong.png"
              class="page_nav_img"
            ></image>
          </view>
          <text class="page_nav_text">活动</text>
        </view>
        <view class="page_nav_item">
          <view class="page_nav_icon">
            <image
              src="../../assets/images/more1.png"
              class="page_nav_img"
            ></image>
          </view>
          <text class="page_nav_text">更多</text>
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
        <view class="sizer_block ub" @tap="screen">
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
        <block v-if="list.length">
          <view
            class="list_box"
            v-for="(item, index) in list"
            :key="index"
            @tap="godetail(item.oid, item.author_id)"
          >
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
                      {{ item.author.province_name }}</text
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
                <image
                  src="../../assets/images/common/icon_favorite.png"
                ></image>
              </view>
            </view>
            <view class="list_content">
              <view class="list_title">
                {{ item.major_subject }}
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
                {{ item.date_humanize }}
              </view>
              <view class="list_yuepai">
                <image src="../../assets/images/user/index/yuepai.png"></image>
                收到约拍 {{ item.statistic.invite_cnt }}
              </view>
              <view class="list_read">
                <image src="../../assets/images/eyes.png"></image>
                阅读 {{ item.statistic.read_cnt }}
              </view>
            </view>
          </view>
        </block>
        <view v-else class="none-data">
          <image
            src="../../assets/images/common/none.png"
            mode="aspectFill"
            class="none-img"
          ></image>
          <view>当前暂无信息哦～</view>
        </view>
      </view>
      <view class="select_block" v-show="showModal" @tap="close">
        <view class="select_bg" @tap.stop="">
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
                    :value="multiIndex"
                    :range="multiArray"
                    :range-key="'name'"
                    @change="sizerBindRegionChange"
                    @columnchange="onBindcolumnchange"
                  >
                    <view class="sizer_select_local bd_b fl">
                      <view
                        class="pickers pick-city picked"
                        v-if="sizer_city"
                        >{{ sizer_city }}</view
                      >
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
                {{ item.value }}
              </text>
            </view>
          </view>
          <view class="select_button">
            <text class="clear" @tap="clear">清除</text>
            <text class="confirm" @tap="submit">确认</text>
          </view>
        </view>
      </view>
    </block>
    <block v-if="headCurrent == 2">
      <ZuopinList
        :base_data="allCity"
        :multi_array="multiArray"
        :more="zuopinMore"
        :refresh="zuopinRefresh"
        @closeMore="closeMore"
        @closeRefresh="closeRefresh"
      ></ZuopinList>
    </block>
    <image
      src="../../assets/images/common/totop.png"
      class="totop"
      @tap="totop"
      v-show="showtoTop"
    ></image>
    <loading :showLoading="showLoading"></loading>
  </view>
</template>

<script>
import "./index.scss";
import { inviteList, publicConfig } from "../../api/index";
import { errortip, openPage } from "../../utils/util";
import { city } from "../../utils/city";
import ZuopinList from "../../components/zuopinList/index.vue";
import TonggaoList from "../../components/tonggaoList/index.vue";
import loading from "../../components/loading/index.vue";
export default {
  name: "home",
  data() {
    return {
      showLoading: true,
      showtoTop: false,
      headCurrent: 1,
      tonggaoMore: false,
      tonggaoRefresh: false,
      zuopinMore: false,
      zuopinRefresh: false,
      background: ["demo-text-1", "demo-text-2", "demo-text-3"],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      showModal: false,
      interval: 2000,
      duration: 500,
      sizer_num: [],
      navActive: 0,
      navList: [],
      filter: {
        face_province_id: 0,
        face_city_id: 0,
        face_cid: 0,
        sex: 10,
        payment_type: 0,
      },
      pageNum: 1,
      pageSize: 10,
      list: [],
      loading: true,
      show_sizer_modal: true,
      sizer_region: [],
      regionListIndex: [0, 0],
      sizer_city: "",
      appointmentData: [
        { cid: 0, name: "全部", ispick: true },
        { cid: 20001, name: "摄影师", ispick: false },
        { cid: 20002, name: "摄像师", ispick: false },
        { cid: 20003, name: "造型师", ispick: false },
        { cid: 20007, name: "经纪人", ispick: false },
        { cid: 20011, name: "导演", ispick: false },
        { cid: 20012, name: "商家", ispick: false },
      ],
      headNavList: [
        {
          name: "通告",
          value: -1,
        },
        {
          name: "约单",
          value: 0,
        },
        {
          name: "作品",
          value: 1,
        },
      ],
      sexData: [
        {
          name: "全部",
          value: 100,
          ispick: true,
        },
        {
          name: "男",
          value: 1,
          ispick: false,
        },
        {
          name: "女",
          value: 0,
          ispick: false,
        },
      ],
      chargeData: [],
      multiArray: [[], []],
      multiIndex: [0, 0],
      allCity: [],
      sizerSelect: [],
    };
  },
  components: {
    ZuopinList,
    TonggaoList,
    loading,
  },
  methods: {
    totop() {
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0,
        });
      } else {
        wx.showModal({
          title: "提示",
          content:
            "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。",
        });
      }
    },
    closeRefresh() {
      console.log("刷新了--------");
      this.zuopinRefresh = false;
      this.tonggaoRefresh = false;
      this.loading = true;
    },
    closeMore() {
      console.log("关闭了--------");
      this.zuopinMore = false;
      this.tonggaoMore = false;
      this.loading = true;
    },
    headNavClick(index) {
      this.pageNum = 1;
      this.headCurrent = index;
      if (index == 1) {
        this.query("init");
      }
    },
    //获取用户地理位置权限
    getPermission() {
      //获取用户地理位置
      //先判断用户是否授权获取地理位置
      let that = this;
      wx.getSetting({
        success(res) {
          if (res.authSetting["scope.userLocation"] == false) {
            //如果没有授权地理位置
            wx.openSetting({
              success(res) {
                res.authSetting = {
                  //打开授权位置页面，让用户自己开启
                  "scope.userLocation": true,
                };
              },
            });
          } else {
            //用户开启授权后可直接获取地理位置
            wx.authorize({
              scope: "scope.userLocation",
              success() {
                //获取位置后相关操作
                that.getLocation();
              },
            });
          }
        },
      });
    },
    // 新增下面这部分代码
    getLocation() {
      var that = this;
      wx.getLocation({
        type: "wgs84",
        success(res) {
          const latitude = res.latitude;
          const longitude = res.longitude;
          const speed = res.speed;
          const accuracy = res.accuracy;
          console.log(res); //将获取到的经纬度信息输出到控制台以便检查
          // that.setData({
          //   //将获取到的经度、纬度数值分别赋值给本地变量
          //   latitude: res.latitude,
          //   longitude: res.longitude,
          // });
        },
        fail(error) {
          console.log(error);
        },
      });
    },
    godetail(oid, author_id) {
      openPage(
        "/packageAdd/pages/yuedan/yuedan_detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
    screen() {
      this.showModal = true;
      this.sizer_num = [];
      this.getPermission();
    },
    close() {
      this.showModal = false;
    },
    sizerBindRegionChange(e) {
      let province = this.multiArray[0][e.detail.value[0]].name;
      let city = this.multiArray[1][e.detail.value[1]].name;
      this.sizer_city = city == "全部" ? province : city;
      this.sizerSelect = e.detail.value;
    },
    onBindcolumnchange(e) {
      if (e.detail.column == 0) {
        var select = this.multiArray[0][e.detail.value];
        var city = this.allCity;
        for (var i = 0; i < city.length; i++) {
          if (city[i].code == select.code) {
            var multiArray = this.multiArray;
            var all = [{ name: "全部", code: "all" }];
            multiArray[1] = all.concat(city[i].citylist);
            var multiIndex = this.multiIndex;
            multiIndex[0] = e.detail.value;
            multiIndex[1] = 0;
            this.multiArray = JSON.parse(JSON.stringify(multiArray));
            this.multiIndex = multiIndex;
            break;
          }
        }
      }
    },
    select_tag(row) {
      this.appointmentData.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_sex_tag(row) {
      this.sexData.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_charge_tag(row) {
      this.chargeData.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    navClick(index) {
      this.navActive = index;
      this.pageNum = 1;
      this.showLoading = true;
      this.query("init");
    },
    bindRegionChange(e) {
      this.sizer_city = e.detail.value;
    },
    query(type) {
      // wx.showLoading({
      //   title: "加载中...",
      // });
      this.inviteList(
        {
          filter: this.filter,
          quick_filter: this.navList.length
            ? this.navList[this.navActive].key
            : "",
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
      if (this.headCurrent == 0) {
        this.tonggaoRefresh = true;
      } else if (this.headCurrent == 1) {
        this.pageNum = 1;
        this.query("init");
      } else if (this.headCurrent == 2) {
        this.zuopinRefresh = true;
      }
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
      if (this.headCurrent == 0) {
        this.tonggaoMore = true;
      } else if (this.headCurrent == 1) {
        this.query("more");
      } else if (this.headCurrent == 2) {
        this.zuopinMore = true;
      }
    },
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    clear() {
      this.multiIndex = [0, 0];
      this.sizer_city = "";
      this.sizerSelect = [];
      this.appointmentData = this.appointmentData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.sexData = this.sexData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.chargeData = this.chargeData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
    },
    submit() {
      let facedata = this.appointmentData.filter((item) => {
        return item.ispick;
      });
      let sexdata = this.sexData.filter((item) => {
        return item.ispick;
      });
      let paymentdata = this.chargeData.filter((item) => {
        return item.ispick;
      });
      this.filter = {
        face_province_id: this.sizerSelect[0]
          ? Number(this.multiArray[0][this.sizerSelect[0]].code)
          : 0,
        face_city_id: this.sizerSelect[1]
          ? Number(this.multiArray[1][this.sizerSelect[1]].code)
          : 0,
        face_cid: facedata[0].cid,
        sex: sexdata[0].value == 100 ? 100 : sexdata[0].value,
        payment_type: paymentdata[0].key == "all" ? 0 : paymentdata[0].key,
      };
      if (this.sizerSelect[0]) {
        this.sizer_num.push(1);
      }
      if (facedata[0].cid) {
        this.sizer_num.push(2);
      }
      if (sexdata[0].value != 100) {
        this.sizer_num.push(3);
      }
      if (paymentdata[0].key != "all") {
        this.sizer_num.push(4);
      }
      if (facedata[0].key) {
        this.sizer_num.push(5);
      }
      this.showModal = false;
      this.pageNum = 1;
      this.query("init");
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        let arr = [];
        let arr2 = [];
        res.data.data.map((item, index) => {
          if (item.type == "invite_filter") {
            arr.push(item);
          } else if (item.type == "payment_type") {
            item.ispick = false;
            arr2.push(item);
          }
        });
        this.navList = arr;
        arr2.unshift({
          key: "all",
          name: "全部",
          value: "全部",
          ispick: true,
        });
        this.chargeData = arr2;
        this.filter = {
          face_province_id: 0,
          face_city_id: 0,
          face_cid: 0,
          sex: 10,
          payment_type: 0,
        };
        this.query("init");
      } catch (error) {}
    },
    async inviteList(params, type) {
      try {
        let res = await inviteList(params);
        //隐藏loading 提示框
        this.showLoading = false;
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
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.list = this.list.concat(data);
          this.loading = true;
        }
      } catch (error) {}
    },
  },
  // 获取滚动条当前位置
  onPageScroll: function (e) {
    if (e.scrollTop > 100) {
      this.showtoTop = true;
    } else {
      this.showtoTop = false;
    }
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
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading) {
      this.onMore();
    }
  },
  created() {
    this.globalData = this.globalData;
    let arr = [[], []];
    city.map((item) => {
      arr[0].push(item);
    });
    arr[1].push(arr[0][0].citylist[0]);
    arr[0].unshift({ name: "全部", code: "all" });
    arr[1].unshift({ name: "全部", code: "all" });
    this.multiArray = arr;
    this.allCity = city;
    this.publicConfig({
      type: ["invite_filter", "payment_type"],
    });
  },
  // onShow: function onShow() {
  //   this.publicConfig({
  //     type: ["invite_filter", "payment_type"],
  //   });
  // },
};
</script>
