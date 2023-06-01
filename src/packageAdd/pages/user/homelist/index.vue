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
      @pageNavClick="pageNavClick"
      @navClick="navClick"
      @submitQuery="submitQuery"
      ref="pageNavRef"
      class="pagenav"
    ></Pagenav>
    <view class="home-list-ct">
      <swiper
        :current="componetActive"
        class="swiper-box"
        duration="300"
        @change="bindChange"
        :style="{ height: swiperHeightCt ? swiperHeightCt : '100vh' }"
      >
        <swiper-item>
          <YuepaiList
            :baseData="yuepaiList"
            v-if="componetActive == 0"
            class="list-height"
          ></YuepaiList>
        </swiper-item>
        <swiper-item>
          <TonggaoList
            :baseData="noticeList"
            v-if="componetActive == 1"
            class="list-height"
          ></TonggaoList>
        </swiper-item>
        <swiper-item>
          <ZuopinList
            :baseData="zuopinList"
            v-if="componetActive == 2"
            class="list-height"
          ></ZuopinList>
        </swiper-item>
      </swiper>
    </view>

    <view class="nomore" v-if="noMore">没有更多了～</view>
    <loading :showLoading="showLoading"></loading>
  </view>
</template>

<script>
import "./index.scss";
import Pagenav from "../../../../components/pagenav/index.vue";
import loading from "../../../../components/loading/index.vue";
import TonggaoList from "../../../../components/tonggaoList/index.vue";
import YuepaiList from "../../../../components/yuepaiList/index.vue";
import ZuopinList from "../../../../components/zuopinList/index.vue";
import {
  inviteFilter,
  noticeFilter,
  photoFilter,
  inviteList,
  noticeList,
  photoList,
} from "../../../../api/index";
import { errortip } from "../../../../utils/util";
export default {
  name: "homelist",
  data() {
    return {
      componetActive: 0,
      navActive: 0,
      navList: [],
      chargeData: [],
      purposeData: [],
      appointmentData: [],
      identityData: [],
      noticeData: [],
      pageNum: 1,
      pageSize: 10,
      isclick: false,
      showLoading: false,
      noMore: false,
      yuepaiList: [],
      noticeList: [],
      zuopinList: [],
      city_filter: {},
      recommend_city_filter: {},
      componetName: {
        0: "约拍列表",
        1: "通告列表",
        2: "作品列表",
      },
      swiperHeightCt: 0,
    };
  },
  components: {
    Pagenav,
    loading,
    YuepaiList,
    TonggaoList,
    ZuopinList,
  },
  methods: {
    bindChange(e) {
      this.componetActive = e.detail.current;
      this.pageNavClick(e.detail.current);
    },
    setSwiperHeight() {
      let dom = ".list-height";
      wx.createSelectorQuery()
        .select(dom)
        .boundingClientRect((rect) => {
          this.swiperHeightCt = rect.height + "px";
        })
        .exec();
    },
    pageNavClick(index) {
      this.pageNum = 1;
      this.componetActive = index;
      this.navActive = 0;
      this.isclick = true;
      this.showLoading = true;
      this.switchQuery(index, true);
    },
    navClick(pageNavIndex, navIndex) {
      this.pageNum = 1;
      this.isclick = true;
      this.showLoading = true;
      if (pageNavIndex == 0) {
        this.query("init", navIndex, true);
      } else if (pageNavIndex == 1) {
        this.noticeQuery("init", navIndex, true);
      } else if (pageNavIndex == 2) {
        this.zuopinQuery("init", navIndex, true);
      }
    },
    switchQuery(index, scroll) {
      switch (index) {
        case 0:
          this.inviteFilter({}, scroll);
          break;
        case 1:
          this.noticeFilter({}, scroll);
          break;
        case 2:
          this.photoFilter({}, scroll);
          break;
      }
    },
    query(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      this.inviteList(
        {
          select_filter: this.select_filter,
          city_filter: this.city_filter,
          quick_filter: this.navList.length ? this.navList[navActive].key : "",
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type,
        scroll
      );
    },
    noticeQuery(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      let params = {
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navList.length ? this.navList[navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.queryNoticeList(params, type, scroll);
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
    submitQuery(pageNavIndex, navIndex, select_filter) {
      this.select_filter = select_filter;
      this.showLoading = true;
      switch (pageNavIndex) {
        case 0:
          this.query("init", navIndex, true);
          break;
        case 1:
          this.noticeQuery("init", navIndex, true);
          break;
        case 2:
          this.zuopinQuery("init", navIndex, true);
          break;
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
      if (this.componetActive == 0) {
        this.query("more", this.$refs["pageNavRef"].navActive);
      } else if (this.componetActive == 1) {
        this.noticeQuery("more", this.$refs["pageNavRef"].navActive);
      } else if (this.componetActive == 2) {
        this.zuopinQuery("more", this.$refs["pageNavRef"].navActive);
      }
    },
    async inviteList(params, type, scroll) {
      try {
        let res = await inviteList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();

        this.noMore = false;

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();

        if (type == "init") {
          this.yuepaiList = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;

            return false;
          }
          let data = res.data.data.items;
          this.yuepaiList = this.yuepaiList.concat(data);
          this.loading = true;
        }

        if (scroll) {
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 0,
          });
        }
        this.isclick = false;
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
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
    async queryNoticeList(params, type, scroll) {
      try {
        let res = await noticeList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();

        this.noMore = false;

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();
        if (type == "init") {
          this.noticeList = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.noticeList = this.noticeList.concat(data);
          this.loading = true;
        }

        if (scroll) {
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 0,
          });
        }
        this.isclick = false;
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
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
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
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
    async inviteFilter(params, scroll) {
      try {
        let res = await inviteFilter(params);
        let arr = [];
        let arr2 = [];
        let arr3 = [];
        if (res.data.data.quick_filter) {
          this.navList = res.data.data.quick_filter;
        }
        if (res.data.data.author_career) {
          res.data.data.author_career.map((item, index) => {
            arr.push(item);
          });
        }
        if (res.data.data.payment_type) {
          res.data.data.payment_type.map((item, index) => {
            item.ispick = false;
            arr2.push(item);
          });
        }
        if (res.data.data.face_career) {
          res.data.data.face_career.map((item, index) => {
            item.ispick = false;
            arr3.push(item);
          });
        }
        arr.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        arr2.unshift({
          key: "all",
          name: "全部",
          value: "全部",
          ispick: true,
        });
        arr3.unshift({
          key: "all",
          value: "全部",
          ispick: true,
        });
        this.appointmentData = arr;
        this.chargeData = arr2;
        this.purposeData = arr3;
        this.select_filter = {
          sex: 10,
          payment_type: 0,
        };
        this.query("init", this.$refs["pageNavRef"].navActive, scroll);
      } catch (error) {}
    },
    async noticeFilter(params, scroll) {
      try {
        let res = await noticeFilter(params);
        let data = res.data.data;
        if (data.quick_filter) {
          this.navList = data.quick_filter;
        }
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        if (data.face_career) {
          arr = data.face_career.map((item) => {
            item.ispick = false;
            return item;
          });
        }
        if (data.first_code) {
          arr1 = data.first_code.map((item) => {
            item.ispick = false;
            return item;
          });
        }
        if (data.payment_type) {
          arr2 = data.payment_type.map((item) => {
            item.ispick = false;
            return item;
          });
        }
        arr.unshift({
          cid: "all",
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
        this.identityData = arr;
        this.noticeData = arr1;
        this.chargeData = arr2;
        this.select_filter = {
          first_code: "",
          payment_type: 0,
          face_career: 0,
        };
        this.noticeQuery("init", this.$refs["pageNavRef"].navActive, scroll);
      } catch (error) {}
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
  },
  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
    this.showLoading = true;
    this.switchQuery(this.componetActive, true);
  },
  //触底加载
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading && !this.isclick) {
      this.onMore();
    }
  },
  onLoad: function (options) {
    let index = Number(options.componetActive);
    this.componetActive = index;
    this.showLoading = true;
    this.switchQuery(index, true);
    wx.setNavigationBarTitle({
      title: this.componetName[index],
    });
  },
};
</script>

<style lang="scss" scoped></style>
