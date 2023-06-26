<template>
  <view>
    <Pagenav
      :pageActive="componetActive"
      :active="navActive"
      :navList="navList"
      :chargeList="chargeData"
      :purposeList="purposeData"
      :appointmentList="appointmentData"
      :identityList="identityData"
      :noticeList="noticeData"
      :isMargin="false"
      :showComponet="false"
      @navClick="navClick"
      @submitQuery="submitQuery"
      ref="pageNavRef"
      class="pagenav"
    ></Pagenav>
    <view class="zuopin-list-ct">
      <ZuopinList :baseData="zuopinList" class="list-height"></ZuopinList>
    </view>
    <view class="nomore" v-if="noMore">没有更多了～</view>
    <loading :showLoading="showLoading"></loading>
  </view>
</template>

<script>
import "./index.scss";
import Pagenav from "../../components/pagenav/index.vue";
import ZuopinList from "../../components/zuopinList/index.vue";
import loading from "../../components/loading/index.vue";
import { errortip } from "../../utils/util";
import { photoList, photoFilter } from "../../api/index";
export default {
  name: "zuopin",
  data() {
    return {
      componetActive: 2,
      navActive: 0,
      navList: [],
      chargeData: [],
      purposeData: [],
      appointmentData: [],
      identityData: [],
      appointmentList: [],
      noticeData: [],
      pageNum: 1,
      pageSize: 10,
      isclick: false,
      showLoading: false,
      noMore: false,
      zuopinList: [],
      city_filter: {},
      select_filter: {},
    };
  },
  components: {
    Pagenav,
    ZuopinList,
    loading,
  },
  methods: {
    navClick(pageNavIndex, navIndex) {
      this.pageNum = 1;
      this.isclick = true;
      this.showLoading = true;
      this.zuopinQuery("init", navIndex, true);
    },
    zuopinQuery(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      let params = {
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navList.length ? this.navList[navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.queryPhotoList(params, type, scroll);
    },
    onMore() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading();
      //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      wx.showLoading({
        title: "数据加载中...",
      });
      this.loading = false;
      this.zuopinQuery("more", this.$refs["pageNavRef"].navActive);
    },
    submitQuery(pageNavIndex, navIndex, select_filter) {
      this.select_filter = select_filter;
      this.showLoading = true;
      this.zuopinQuery("init", navIndex, true);
    },
    async photoFilter(params, scroll) {
      try {
        let res = await photoFilter(params);
        let data = res.data.data;
        let arr2 = [];
        let arr3 = [];
        if (data.quick_filter) {
          this.navList = data.quick_filter;
        }
        if (data.payment_type) {
          arr2 = data.payment_type.map((item) => {
            item.ispick = false;
            return item;
          });
        }
        if (data.author_career) {
          arr3 = data.author_career.map((item) => {
            item.ispick = false;
            return item;
          });
        }
        arr2.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        arr3.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        this.identityData = arr3;
        this.select_filter = {
          author_career: 0,
          author_sex: 10,
        };
        this.zuopinQuery("init", this.$refs["pageNavRef"].navActive, scroll);
      } catch (error) {}
    },
    async queryPhotoList(params, type, scroll) {
      try {
        let res = await photoList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();

        this.noMore = false;

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();
        if (type == "init") {
          this.zuopinList = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.zuopinList = this.zuopinList.concat(data);
          this.loading = true;
        }

        if (scroll) {
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 0,
          });
        }
        this.isclick = false;
      } catch (error) {
        this.showLoading = false;
        wx.hideNavigationBarLoading();
        if (error.data.error_code == 11020) {
          this.visible = true;
          this.isclick = false;
          console.log(error, "error");
        }
        if (error.data.error_code == 10100 && this.pageNum > 1) {
          this.noMore = true;
        }
      }
    },
  },
  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
    this.showLoading = true;
    this.photoFilter({}, true);
  },
  //触底加载
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading && !this.isclick) {
      this.onMore();
    }
  },
  mounted() {
    this.photoFilter({}, true);
  },
};
</script>

<style lang="scss" scoped></style>
