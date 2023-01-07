<template>
  <view class="zuppin_list">
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
        class="zuopin_box"
        v-for="(item, index) in list"
        :key="index"
        @tap="godetail(item.oid, item.author_id)"
      >
        <image
          v-if="item.file_type == 'picture'"
          class="zuopin_img"
          :src="item.cover[0]"
          mode="aspectFill"
        ></image>
        <video
          v-if="item.file_type == 'video'"
          objectFit="cover"
          :poster="item.cover[0]"
          :src="item.video_cover && item.video_cover[0]"
          class="list_video-width"
        ></video>
        <view class="zuopin_desc">{{ item.summary }}</view>
        <view class="zuopin_info">
          <image
            class="avatar"
            :src="
              item.author.avatar
                ? item.author.avatar
                : '../../assets/images/avatar_default.png'
            "
            mode="aspectFill"
          ></image>

          <view>
            <view class="list_p_title">
              <text class="list_name">{{ item.author.nickname }}</text>
              <block>
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
                {{ item.author.career_list[0] }} |{{
                  item.author.province_name
                }}</text
              >
              <text class="read">{{ item.statistic.read_cnt }}</text>
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
          <view class="select_item_title">发布人身份</view>
          <view>
            <text
              @tap="select_identity_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in identity_data"
              :key="index"
            >
              {{ item.role }}
            </text>
          </view>
        </view>
        <view class="select_item">
          <view class="select_item_title">发布人性别</view>
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
        <view class="select_button">
          <text class="clear" @tap="clear">清除</text>
          <text class="confirm" @tap="submit">确认</text>
        </view>
      </view>
    </view>
    <loading :showLoading="showLoading"></loading>
  </view>
</template>

<script>
import "./index.scss";
import { publicConfig, photoList, getCareer } from "../../api/index";
import { errortip, openPage } from "../../utils/util";
import loading from "../../components/loading/index.vue";
export default {
  name: "zuopinList",
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
    more: {
      handler(newVal, oldVal) {
        this.zuopinMore = newVal;
        if (this.zuopinMore) {
          this.pageNum++;
          this.onMore();
        }
      },
      deep: true,
      immediate: true,
    },
    refresh: {
      handler(newVal, oldVal) {
        this.zuopinRefresh = newVal;
        if (this.zuopinRefresh) {
          this.onRefresh();
        }
      },
      deep: true,
      immediate: true,
    },
  },
  components: {
    loading,
  },
  data() {
    return {
      showLoading: true,
      showModal: false,
      zuopinMore: false,
      zuopinRefresh: false,
      sizer_num: [],
      navActive: 0,
      sex: 0,
      height: 0,
      navList: [
        // {
        //   name: "11",
        //   value: "11",
        // },
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
      sizer_city: "",
      multiIndex: [0, 0],
      allCity: [],
      sizerSelect: [],
      identity_data: [],
      multiArray: [[], []],
      list: [],
      pageNum: 1,
      pageSize: 10,
      filter: {
        face_province_id: 0,
        face_cid: 0,
        career_cid: 0,
        sex: 10,
      },
    };
  },
  methods: {
    godetail(oid, author_id) {
      openPage(
        "/packageAdd/pages/zuopin/zuopin_detail/index?oid=" +
          oid +
          "&author_id=" +
          author_id
      );
    },
    navClick(index) {
      this.navActive = index;
      this.pageNum = 1;
      this.showLoading = true;
      this.query("init");
    },
    select_identity_tag(row) {
      this.identity_data.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
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
    submit() {
      let sexdata = this.sexData.filter((item) => {
        return item.ispick;
      });
      let identitydata = this.identity_data.filter((item) => {
        return item.ispick;
      });
      this.filter = {
        face_province_id: this.sizerSelect[0]
          ? Number(this.multiArray[0][this.sizerSelect[0]].code)
          : 0,
        face_city_id: this.sizerSelect[1]
          ? Number(this.multiArray[1][this.sizerSelect[1]].code)
          : 0,
        sex: sexdata[0].value == 100 ? 100 : sexdata[0].value,
        career_cid: identitydata[0].cid == "all" ? 0 : identitydata[0].cid,
      };
      if (this.sizerSelect[0]) {
        this.sizer_num.push(1);
      }
      if (sexdata[0].value != 100) {
        this.sizer_num.push(2);
      }
      if (identitydata[0].cid != "all") {
        this.sizer_num.push(3);
      }
      this.showModal = false;
      this.pageNum = 1;
      this.query("init");
    },
    clear() {
      this.multiIndex = [0, 0];
      this.sizer_city = "";
      this.sizerSelect = [];
      this.sexData = this.sexData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.identity_data = this.identity_data.map((item, index) => {
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
      this.query("more");
    },
    query(type) {
      //   wx.showLoading({
      //     title: "加载中...",
      //   });
      let params = {
        filter: this.filter,
        quick_filter: this.navList[this.navActive].key,
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.photoList(params, type);
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        let arr = [];
        res.data.data.map((item, index) => {
          if (item.type == "photo_filter") {
            arr.push(item);
          } else if (item.type == "payment_type") {
            item.ispick = false;
            arr2.push(item);
          }
        });
        this.navList = arr;
        this.filter = {
          face_province_id: 0,
          face_cid: 0,
          career_cid: 0,
          sex: 10,
        };
        this.query("init");
      } catch (error) {}
    },
    async photoList(params, type) {
      try {
        let res = await photoList(params);
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
      } catch (error) {}
    },
    async getCareer(params) {
      try {
        let res = await getCareer(params);
        let data = res.data.data;
        let arr = [];
        arr = data.career_list.map((item) => {
          item.ispick = false;
          return item;
        });
        arr.unshift({
          cid: "all",
          role: "全部",
          value: "全部",
          ispick: true,
        });
        this.identity_data = arr;
      } catch (error) {}
    },
  },
  created() {
    this.publicConfig({
      type: ["photo_filter"],
    });
    this.getCareer("");
    this.height = this.globalData.navHeight;
  },
};
</script>

<style lang="scss" scoped></style>
