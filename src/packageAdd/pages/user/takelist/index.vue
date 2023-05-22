<template>
  <view class="takelist">
    <view class="nav_list">
      <scroll-view class="swiper_tab" :enhanced="true" :scrollX="true">
        <view class="nav_list_ct">
          <text
            class="nav_item"
            v-for="(item, index) in navData"
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
          </view>
          <view class="sizer_img">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/sizered.png"
              v-if="sizer_num.length"
            ></image>
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/sizer.png"
              v-else
            ></image>
          </view>
        </view>
      </view>
    </view>
    <view v-if="list.length" class="takect">
      <view class="componets-box" v-for="(item, index) in list" :key="index">
        <view class="list_top">
          <view class="list_top_left">
            <view class="avatar-box">
              <image
                :src="
                  item.basic.avatar
                    ? item.basic.avatar
                    : 'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'
                "
                class="avatar"
              ></image>
              <block v-if="item.basic.sex !== null">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                  class="list_sex"
                  v-if="item.basic.sex == 1"
                ></image>
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                  class="list_sex"
                  v-if="item.basic.sex == 0"
                ></image>
              </block>
            </view>

            <view class="list_info">
              <view class="list_name"> {{ item.basic.nickname }} </view>
              <view class="list_p">
                <text v-if="item.basic.career_label.length">
                  {{ item.basic.career_label[0] }}｜{{
                    item.basic.province_name
                  }}</text
                >
                <view class="icon_real" v-if="item.basic.is_certify"
                  >已实名</view
                >
                <view class="icon_pledge" v-if="item.basic.is_security"
                  >已担保</view
                >
              </view>
            </view>
          </view>
          <view class="list_top_rt">
            <view
              @tap="follow(item)"
              class="followed_btn_red"
              v-if="!item.follow.is_follower"
              >关注</view
            >
            <view class="followed_btn" @tap="unfollow(item)" v-else
              >取消关注</view
            >
          </view>
        </view>
        <view class="list_desc">
          {{ item.basic.resume }}
        </view>
        <view class="list_img" v-if="item.album.photo_album.length">
          <scroll-view :enhanced="true" :scrollX="true">
            <image
              :src="url"
              mode="aspectFill"
              class="list_img_item"
              v-for="(url, coverIndex) in item.album.photo_album"
              :key="coverIndex"
              @tap.stop="previewImage(url, item.album.photo_album)"
            ></image>
          </scroll-view>
        </view>
        <view
          class="list_video"
          v-if="!item.album.photo_album.length && item.album.video_album.length"
        >
          <scroll-view :enhanced="true" :scrollX="true">
            <video
              v-for="(videoItem, videoIndex) in item.album.video_album"
              objectFit="cover"
              :key="videoIndex"
              :poster="videoItem.cover"
              :src="videoItem.file"
              class="list_video-width"
              @tap.stop=""
            ></video>
          </scroll-view>
        </view>
        <view class="list_bottom">
          <view class="list_time"> 1分钟前来过 </view>
          <view class="contact" @tap="communicate(item)">立即沟通</view>
        </view>
      </view>
    </view>
    <view v-else class="none-data">
      <image
        src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
        mode="aspectFill"
        class="none-img"
      ></image>
      <view>当前暂无信息哦～</view>
    </view>
    <view class="nomore" v-if="noMore">没有更多了～</view>
    <loading :showLoading="showLoading"></loading>
    <!--推荐筛选框-->
    <view class="select_block" v-show="showModal" @tap="close">
      <view class="select_bg" @tap.stop="">
        <view class="statusbar"></view>
        <view class="select_item">
          <view class="select_item_title">用户身份</view>
          <view>
            <text
              @tap="select_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in appointmentData"
              :key="index"
            >
              {{ item.value }}
            </text>
          </view>
        </view>
        <view class="select_item">
          <view class="select_item_title">性别</view>
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
          <view class="select_item_title">是否实名</view>
          <view>
            <text
              @tap="select_certify_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in certifyData"
              :key="index"
            >
              {{ item.value }}
            </text>
          </view>
        </view>
        <view class="select_item">
          <view class="select_item_title">是否担保</view>
          <view>
            <text
              @tap="select_security_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in securityData"
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
    <!--推荐筛选框-->
  </view>
</template>

<script>
import "./index.scss";
import loading from "../../../../components/loading/index.vue";
import {
  userFollow,
  userUnfollow,
  userFilter,
  userList,
  imVerify,
} from "../../../../api/index";
import { errortip, openPage } from "../../../../utils/util";
export default {
  name: "takelist",
  data() {
    return {
      showLoading: false,
      noMore: false,
      showModal: false,
      navActive: 0,
      sizer_num: [],
      city_filter: "",
      select_filter: {},
      navData: [],
      appointmentData: [],
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
      certifyData: [],
      securityData: [],
      list: [],
    };
  },
  components: {
    loading,
  },
  methods: {
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    clear() {
      this.appointmentData = this.appointmentData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.sexData = this.sexData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.certifyData = this.certifyData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.securityData = this.securityData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
    },
    close() {
      this.showModal = false;
    },
    screen() {
      this.showModal = true;
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
    select_certify_tag(row) {
      this.certifyData.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_security_tag(row) {
      this.securityData.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    navClick(index) {
      this.navActive = index;
      this.pageNum = 1;
      this.showLoading = true;
      this.query("init", true);
    },
    follow(row) {
      this.userFollow(
        {
          follow_uuid: row.basic.uuid,
        },
        row
      );
    },
    unfollow(row) {
      this.userUnfollow(
        {
          unfollow_uuid: row.basic.uuid,
        },
        row
      );
    },
    query(type, scroll) {
      if (type == "init") this.pageNum = 1;

      this.userList(
        {
          select_filter: this.select_filter,
          city_filter: this.city_filter,
          quick_filter: this.navData.length
            ? this.navData[this.navActive].key
            : "",
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type,
        scroll
      );
    },
    communicate(row) {
      this.imVerify(
        {
          to_account: row.basic.uuid,
        },
        row
      );
    },
    submit() {
      let facedata = this.appointmentData.filter((item) => {
        return item.ispick;
      });
      let sexdata = this.sexData.filter((item) => {
        return item.ispick;
      });
      let certifydata = this.certifyData.filter((item) => {
        return item.ispick;
      });
      let securitydata = this.securityData.filter((item) => {
        return item.ispick;
      });
      this.select_filter = {
        career: facedata[0].key == "all" ? 0 : facedata[0].key,
        sex: sexdata[0].value == 100 ? 100 : sexdata[0].value,
        is_certify: certifydata[0].key == "all" ? "" : certifydata[0].key,
        is_security: securitydata[0].key == "all" ? "" : securitydata[0].key,
      };
      this.showModal = false;
      this.query("init", true);
    },
    connect(row) {
      openPage(
        "/packageMsg/pages/chat/index?uuid=" +
          row.basic.uuid +
          "&nickname=" +
          row.basic.nickname +
          "&avatar=" +
          row.basic.avatar
      );
    },
    onRefresh() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading();
      //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      wx.showLoading({
        title: "刷新中...",
      });
      this.query("init", true);
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
      this.query("more", false);
    },
    async userFilter(params, scroll) {
      try {
        let res = await userFilter(params);
        let arr = [];
        let arr2 = [];
        let arr3 = [];
        if (res.data.data.quick_filter) {
          this.navData = res.data.data.quick_filter;
        }
        if (res.data.data.select_filter.career) {
          res.data.data.select_filter.career.map((item, index) => {
            arr.push(item);
          });
        }
        if (res.data.data.select_filter.is_certify) {
          res.data.data.select_filter.is_certify.map((item, index) => {
            item.ispick = false;
            arr2.push(item);
          });
        }
        if (res.data.data.select_filter.is_security) {
          res.data.data.select_filter.is_security.map((item, index) => {
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
        this.certifyData = arr2;
        this.securityData = arr3;
        this.select_filter = {
          sex: 10,
          career: 0,
        };
        this.query("init", scroll);
      } catch (error) {}
    },
    async userList(params, type, scroll) {
      try {
        let res = await userList(params);
        //隐藏loading 提示框
        this.showLoading = false;
        wx.hideLoading();

        this.noMore = false;

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();

        if (type == "init") {
          this.list = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.list = this.list.concat(data);
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
    async userFollow(params, row) {
      try {
        let res = await userFollow(params);
        row.follow.is_follower = true;
      } catch (error) {}
    },
    async userUnfollow(params, row) {
      try {
        let res = await userUnfollow(params);
        row.follow.is_follower = false;
      } catch (error) {}
    },
    async imVerify(params, row) {
      try {
        let res = await imVerify(params);
        this.connect(row);
      } catch (error) {
        errortip(error.data.msg);
        if (error.data.error_code == 21050 || error.data.error_code == 21040) {
          openPage(
            `/packageAdd/pages/guideTips/index?msg=${error.data.msg}&code=${error.data.error_code}`
          );
        }
      }
    },
  },
  onLoad: function (options) {
    if (options.city_filter) {
      this.city_filter = Number(options.city_filter);
      this.showLoading = true;
      this.userFilter({}, false);
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
    this.onRefresh();
  },
  //触底加载
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading) {
      this.onMore();
    }
  },
};
</script>

<style lang="scss" scoped></style>
