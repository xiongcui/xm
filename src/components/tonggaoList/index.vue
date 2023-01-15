<template>
  <view class="tonggao_list">
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
    <view class="main_list" v-if="list.length">
      <view
        class="tonggao_box"
        v-for="(item, index) in list"
        :key="index"
        @tap="godetail(item.oid, item.author_id)"
      >
        <view class="tonggao_title">
          <text class="list_title"
            >{{ item.major_subject }}{{ item.payment_format }}</text
          >
          <view class="list_loction"> {{ item.author.province_name }} </view>
        </view>
        <view class="tonggao_ct">
          <view class="tonggao_left">
            <view class="tonggao_desc">
              {{ item.summary }}
            </view>
            <view class="tonggao_tags">
              <view class="tag-item">{{ item.second_name }}</view>
              <view
                class="tag-item"
                v-if="item.first_code == 'celebrity_spread'"
                >粉丝要求：{{ item.fans_number }}</view
              >
              <view
                class="tag-item"
                v-if="
                  item.face_sex !== null &&
                  item.first_code != 'celebrity_spread'
                "
                >性别要求：{{ formatSex(item.face_sex) }}</view
              >
            </view>
            <view class="tonggao_info">
              <image
                :src="
                  item.author.avatar
                    ? item.author.avatar
                    : '../../assets/images/avatar_default.png'
                "
                class="head-img"
              ></image>
              {{ item.author.nickname }}
              <image
                v-if="item.author.is_security"
                src="../../assets/images/common/icon_pledge.png"
                class="pledge-img"
              ></image>
            </view>
          </view>
          <view class="tonggao-right">
            <image mode="aspectFill" :src="item.cover[0]"></image>
          </view>
        </view>
        <view class="tonggao_bottom">
          <view class="tonggao_time">
            <image src="../../assets/images/common/time.png"></image>
            {{ item.date_humanize }}
          </view>
          <view class="tonggao_bottom_rt">
            <view class="tonggao_yuepai">
              <image src="../../assets/images/user/index/yuepai.png"></image>
              {{ item.statistic.invite_cnt }}
            </view>
            <view class="tonggao_read">
              <image src="../../assets/images/eyes.png"></image>
              {{ item.statistic.read_cnt }}
            </view>
          </view>
        </view>
      </view>
    </view>
    <view v-else class="none-data">
      <image
        src="../../assets/images/common/none.png"
        mode="aspectFill"
        class="none-img"
      ></image>
      <view>当前暂无信息哦～</view>
    </view>
    <view class="select_block" v-show="showModal" @tap="close">
      <view class="select_bg" @tap.stop="">
        <view class="statusbar" :style="{ height: height + 'px' }"></view>
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
          <view class="select_item_title">招募身份</view>
          <view>
            <text
              @tap="select_identity_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in identity_data"
              :key="index"
            >
              {{ item.name }}
            </text>
          </view>
        </view>
        <view class="select_item">
          <view class="select_item_title">通告类型</view>
          <view>
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
        <view class="select_item">
          <view class="select_item_title">收费模式</view>
          <view>
            <text
              @tap="select_charge_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in charge_data"
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
    <loading :showLoading="showLoading"></loading>
    <view class="login-mask" v-if="visible">
      <view class="mask-box">
        <view class="mask-title">
          授权登录
          <view class="close" @tap="modelClose"></view>
        </view>
        <view class="mask-ct">
          <view class="mask-login-tips">授权登录后查看更多优质模特图</view>
          <view class="mask-login-btn" @tap="getUserProfile">授权登录</view>
          <view class="mask-login-cancel" @tap="modelClose">再看看</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import {
  noticeFilter,
  publicConfig,
  noticeList,
  wxlogin,
} from "../../api/index";
import { errortip, openPage } from "../../utils/util";
import loading from "../../components/loading/index.vue";
export default {
  name: "tonggaoList",
  props: {
    base_data: {
      type: Array,
      default: [],
    },
    multi_array: {
      type: Array,
      default: [],
    },
    more: {
      type: Boolean,
      default: false,
    },
    refresh: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    base_data: {
      handler(newVal, oldVal) {
        this.allCity = newVal;
      },
      deep: true,
      immediate: true,
    },
    multi_array: {
      handler(newVal, oldVal) {
        this.multiArray = newVal;
      },
      deep: true,
      immediate: true,
    },
    // more: {
    //   handler(newVal, oldVal) {
    //     this.tonggaoMore = newVal;
    //     if (this.tonggaoMore) {
    //       this.pageNum++;
    //       this.onMore();
    //     }
    //   },
    //   deep: true,
    //   immediate: true,
    // },
    refresh: {
      handler(newVal, oldVal) {
        this.tonggaoRefresh = newVal;
        if (this.tonggaoRefresh) {
          this.onRefresh();
        }
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      visible: false,
      showLoading: true,
      height: 0,
      tonggaoMore: false,
      tonggaoRefresh: false,
      sizer_num: [],
      navActive: 0,
      showModal: false,
      navList: [],
      sizer_city: "",
      multiIndex: [0, 0],
      allCity: [],
      sizerSelect: [],
      identity_data: [],
      multiArray: [[], []],
      list: [],
      notice_data: [],
      charge_data: [],
      pageNum: 1,
      pageSize: 10,
      filter: {
        first_code: "",
        payment_type: 0,
        career_cid: 0,
        face_cid: 0,
        face_province_id: 0,
      },
    };
  },
  components: {
    loading,
  },
  methods: {
    formatSex(sex) {
      if (sex == 1) {
        return "男";
      }
      if (sex == 0) {
        return "女";
      }
      return "不限";
    },
    navClick(index) {
      this.navActive = index;
      this.pageNum = 1;
      this.showLoading = true;
      this.query("init");
    },
    godetail(oid, author_id) {
      openPage(
        "/packageTonggao/pages/detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
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
    screen() {
      this.showModal = true;
      this.sizer_num = [];
      this.getPermission();
    },
    close() {
      this.showModal = false;
    },
    select_identity_tag(row) {
      this.identity_data.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_notice_tag(row) {
      this.notice_data.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_charge_tag(row) {
      this.charge_data.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
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
    submit() {
      let identitydata = this.identity_data.filter((item) => {
        return item.ispick;
      });
      let noticedata = this.notice_data.filter((item) => {
        return item.ispick;
      });
      let chargedata = this.charge_data.filter((item) => {
        return item.ispick;
      });
      this.filter = {
        first_code: noticedata[0].key != "all" ? noticedata[0].key : 0,
        payment_type: chargedata[0].key != "all" ? chargedata[0].key : 0,
        face_province_id: this.sizerSelect[0]
          ? Number(this.multiArray[0][this.sizerSelect[0]].code)
          : 0,
        face_city_id: this.sizerSelect[1]
          ? Number(this.multiArray[1][this.sizerSelect[1]].code)
          : 0,
        face_cid: identitydata[0].cid == "all" ? 0 : identitydata[0].cid,
      };

      if (this.sizerSelect[0]) {
        this.sizer_num.push(1);
      }
      if (noticedata[0].key != "all") {
        this.sizer_num.push(2);
      }
      if (identitydata[0].cid != "all") {
        this.sizer_num.push(3);
      }
      if (chargedata[0].key != "all") {
        this.sizer_num.push(4);
      }
      this.showModal = false;
      this.pageNum = 1;
      this.query("init");
    },
    clear() {
      this.multiIndex = [0, 0];
      this.sizer_city = "";
      this.sizerSelect = [];
      this.identity_data = this.identity_data.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.notice_data = this.notice_data.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.charge_data = this.charge_data.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
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
      this.pageNum++;
      this.query("more");
    },
    query(type) {
      let params = {
        filter: this.filter,
        quick_filter: this.navList[this.navActive].key,
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.noticeList(params, type);
    },
    modelClose() {
      this.visible = false;
    },
    getUserProfile() {
      let _this = this;
      wx.getUserProfile({
        desc: "用于完善会员资料",
        success: (res) => {
          let avatar = res.userInfo.avatarUrl;
          let nickname = res.userInfo.nickName;
          wx.login({
            success(res) {
              _this.getWxLogin({
                avatar: avatar,
                nickname: nickname,
                account: res.code,
                secret: "",
                type: 200,
              });
            },
            fail(err) {
              console.log(err);
            },
          });
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
    async getWxLogin(params) {
      try {
        let res = await wxlogin(params);
        const token = res.data.data.token;
        wx.setStorageSync("token", token);
        wx.setStorageSync("userInfo", {
          avatar: params.avatar,
          nickname: params.nickname,
        });
        if (res.data.data.login_type == 1 && res.data.data.is_bind_phone == 0) {
          this.pageshow = "bindphone";
        } else if (
          res.data.data.login_type == 2 &&
          res.data.data.is_bind_phone == 1
        ) {
          this.visible = false;
          this.pageNum = 1;
          this.list = [];
          this.loading = true;
          this.showLoading = true;
          this.query("init");
        } else {
          // 未注册
          openPage("/pages/register/index");
        }
      } catch (error) {
        console.log("失败");
      }
    },
    async noticeFilter(params) {
      try {
        let res = await noticeFilter(params);
        let data = res.data.data;
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        arr = data.career.map((item) => {
          item.ispick = false;
          return item;
        });
        arr1 = data.first_code.map((item) => {
          item.ispick = false;
          return item;
        });
        arr2 = data.payment_type.map((item) => {
          item.ispick = false;
          return item;
        });
        arr.unshift({
          cid: "all",
          name: "全部",
          value: "全部",
          ispick: true,
        });
        arr1.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        arr2.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        this.identity_data = arr;
        this.notice_data = arr1;
        this.charge_data = arr2;
      } catch (error) {}
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        this.navList = res.data.data;
        this.filter = {
          first_code: "",
          payment_type: 0,
          career_cid: 0,
          face_cid: 0,
          face_province_id: 0,
        };
        this.query("init");
      } catch (error) {}
    },
    async noticeList(params, type) {
      try {
        let res = await noticeList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();
        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();
        if (type == "init") {
          this.list = res.data.data.items;
          this.$emit("closeRefresh");
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.$emit("closeMore");
            return false;
          }
          let data = res.data.data.items;
          this.list = this.list.concat(data);
          this.$emit("closeMore");
        }
      } catch (error) {
        if (error.data.error_code == 11020) {
          this.visible = true;
          console.log(error, "error");
        }
      }
    },
  },
  created() {
    this.height = this.globalData.navHeight;
    this.publicConfig({
      type: ["notice_filter"],
    });
    this.noticeFilter("");
  },
};
</script>

<style lang="scss" scoped></style>
