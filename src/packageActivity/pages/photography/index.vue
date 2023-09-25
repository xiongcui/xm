<template>
  <view class="photography">
    <view class="photography-top">
      <view class="photography-mc"></view>
      <view class="photography-info">
        <view class="photography-info-left"> {{ visitor_cnt }}人正在参与 </view>
        <view class="photography-info-rt">
          <view class="photography-info-item">{{ read_cnt }}</view>
          <view class="photography-info-item2">{{ works_cnt }}</view>
        </view>
      </view>
      <image mode="widthFix" :src="main_cover" :lazy-load="true"></image>
      <view class="invite">
        <button open-type="share" class="share-btn">
          <text class="invite-btn">邀请参与</text>
        </button>
      </view>
    </view>
    <view class="components"></view>
    <view class="tab" :class="isfixed ? 'tab-fixed' : ''">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0)"
        >参赛奖品</view
      >
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1)"
        >参赛指南</view
      >
      <view
        class="tab-item"
        :class="currentTab == 2 ? 'on' : ''"
        @tap="changeItem(2)"
        >佳作赏欣</view
      >
      <view
        class="tab-item"
        :class="currentTab == 3 ? 'on' : ''"
        @tap="changeItem(3)"
        >我的作品</view
      >
      <view
        class="tab-item"
        :class="currentTab == 4 ? 'on' : ''"
        @tap="changeItem(4)"
        >赛事推荐</view
      >
    </view>
    <view
      class="zuopin_tab"
      :class="isfixed && currentTab == 2 ? 'zuopin-tab-fixed' : ''"
      v-if="currentTab == 2"
    >
      <text
        class="zuopin_tab_item"
        :class="zuopinTab == 0 ? 'on' : ''"
        @tap="zuopinClick(0)"
        >最新发布</text
      >
      <text
        class="zuopin_tab_item"
        :class="zuopinTab == 1 ? 'on' : ''"
        @tap="zuopinClick(1)"
        >推荐作品</text
      >
      <text
        class="zuopin_tab_item"
        :class="zuopinTab == 2 ? 'on' : ''"
        @tap="zuopinClick(2)"
        >获奖作品</text
      >
    </view>
    <view class="content">
      <swiper
        :current="currentTab"
        class="swiper-box"
        duration="300"
        @change="bindChange"
        :style="{ height: swiperHeightCt ? swiperHeightCt : '100vh' }"
      >
        <swiper-item>
          <view class="awards-text">
            <rich-text :nodes="awardsTextContent"></rich-text>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="guidance-text">
            <rich-text :nodes="guidanceTextContent"></rich-text>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="zuopin_list" v-if="zuopinTab == 0 || zuopinTab == 1">
            <block v-if="zuopinList.length > 0">
              <view
                class="zuopin-box"
                v-for="(item, index) in zuopinList"
                :key="index"
                @tap="zuopinDetail(item.works.works_oid, item.works.uuid)"
              >
                <view class="zuopin_mc"></view>
                <image
                  mode="aspectFill"
                  :src="item.works.picture[0]"
                  :lazy-load="true"
                ></image>
                <view class="zuopin_bt">
                  <text class="nickname">{{ item.works.nickname }}</text>
                  <text
                    class="like"
                    :class="item.works.is_vote == 1 ? 'like-active' : ''"
                    @tap.stop="likeClick(item)"
                    >{{ item.stats.vote_cnt }}</text
                  >
                </view>
              </view>
            </block>
            <view class="none-data" v-else>
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </view>
          <view class="zuopin_list" v-if="zuopinTab == 2">
            <block v-if="zuopinList.length">
              <view
                class="awards-box"
                v-for="(item, index) in zuopinList"
                :key="index"
                @tap="zuopinDetail(item.works.works_oid, item.works.uuid)"
              >
                <view class="awards-mc"></view>
                <image
                  class="cover"
                  mode="aspectFill"
                  :src="item.works.picture[0]"
                  :lazy-load="true"
                ></image>
                <view class="awards-info">
                  <image
                    class="headimg"
                    :src="item.works.avatar"
                    :lazy-load="true"
                  ></image>
                  <text>{{ item.works.nickname }}</text>
                </view>
                <view class="awards-bt">
                  <text
                    class="like"
                    :class="item.works.is_vote == 1 ? 'like-active' : ''"
                    @tap.stop="likeClick(item)"
                    >{{ item.stats.vote_cnt }}</text
                  >
                  <text class="awards-num">NO.{{ item.works.order }}</text>
                </view>
              </view>
            </block>
            <view class="none-data" v-else>
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </view>
          <!-- </scroll-view> -->
        </swiper-item>
        <swiper-item>
          <view class="my-zuopin-ct">
            <block v-if="zuopinType == 0">
              <view class="my-zuopin-num">我的作品（0）</view>
              <view class="no-zuopin-data">
                <view class="no-zuopin-box">
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/upload-img.png"
                  ></image>
                  <view class="no-zuopin-txt">您还未上传任何作品</view>
                  <view class="no-zuopin-txt">赶快参与活动吧</view>
                  <view class="now-btn" @tap="uploadZuopin">即刻上传</view>
                </view>
              </view>
            </block>
            <view class="zuopin_list" v-else-if="zuopinType == 1">
              <view
                class="zuopin-box"
                v-for="(item, index) in myZuopinList"
                :key="index"
                @tap="zuopinDetail(item.works.works_oid, item.works.uuid)"
              >
                <view class="zuopin_mc"></view>
                <image
                  mode="aspectFill"
                  :src="item.works.picture[0]"
                  :lazy-load="true"
                ></image>
                <view class="zuopin_bt">
                  <text class="nickname">{{ item.works.nickname }}</text>
                  <text class="like">{{ item.stats.vote_cnt }}</text>
                </view>
              </view>
            </view>
            <block v-else-if="zuopinType == 2">
              <view class="my-zuopin">
                <view class="my-zuopin-tips">
                  作品须在近期拍摄，包含完整的EXIF信息，建议格式为JPG/JPEG/HEIF，大小<=30M，短边>=1000px
                </view>
                <view class="zuopin-upload">
                  <view class="zuopin-item">
                    <text class="check">*</text>
                    <text class="zuopin-label">上传作品</text>
                    <text class="zuopin-img-tip" v-if="select == 0"
                      ><text class="blod">单图上传</text
                      >（单次只容许上传1张）</text
                    >
                    <text class="zuopin-img-tip" v-else
                      ><text class="blod">组图上传</text
                      >（单次只容许上传5张）</text
                    >
                  </view>
                  <view class="zuopin-upload-list">
                    <block v-if="imgList.length">
                      <view
                        class="zuopin-upload-img"
                        v-for="(item, index) in imgList"
                        :key="index"
                      >
                        <image
                          :src="item"
                          class="upload-width"
                          mode="aspectFill"
                          @tap="previewImage(item, imgList)"
                        ></image>
                        <text
                          class="upload-close"
                          @tap="uploadImgClose(index)"
                        ></text>
                      </view>
                    </block>
                    <view
                      class="zuopin-upload-img"
                      @tap="chooseImage"
                      v-if="(select == 0 && !imgList.length) || select == 1"
                    >
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/upload-img.png"
                        class="upload-img"
                        mode="aspectFit"
                      ></image>
                      <view>
                        <text class="upload-txt">立即上传</text>
                      </view>
                    </view>
                  </view>
                </view>
                <view class="zuopin-info">
                  <view class="zuopin-item">
                    <text class="check">*</text>
                    <text class="zuopin-label">作品名称</text>
                    <text class="zuopin-text">20字以内</text>
                  </view>
                  <input
                    maxlength="20"
                    placeholder="请输入作品名称"
                    placeholderClass="placeholder_input"
                    type="text"
                    v-model="productname"
                    class="productname"
                  />
                  <view class="zuopin-item">
                    <text class="zuopin-label">作品描述</text>
                    <text class="zuopin-text">140字以内</text>
                  </view>
                  <textarea
                    placeholder="请输入作品创作灵感，或作品简介。"
                    placeholderClass="placeholder_text"
                    v-model="desc"
                    class="desc"
                    maxlength="140"
                  ></textarea>
                </view>
                <view class="release-box">
                  <text class="release-btn" @tap="submit">发布作品</text>
                </view>
              </view>
            </block>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="zuopin-recommend-box">
            <view
              class="zuopin-recommend"
              v-for="(item, index) in gameList"
              :key="index"
              @tap="changeQuery(item.games.games_oid)"
            >
              <view class="zuopin-recommend-top">
                <view class="zuopin-recommend-mc"></view>
                <view class="zuopin-recommend-info">
                  <view class="zuopin-recommend-info-left">
                    {{ item.stats.visitor_cnt }}人正在参与
                  </view>
                  <view class="zuopin-recommend-info-rt">
                    <view class="zuopin-recommend-info-item">{{
                      item.stats.read_cnt
                    }}</view>
                    <view class="zuopin-recommend-info-item2">{{
                      item.stats.works_cnt
                    }}</view>
                  </view>
                </view>
                <image
                  mode="aspectFill"
                  :src="item.games.main_cover"
                  :lazy-load="true"
                ></image>
                <view class="invite2">
                  <text class="invite-btn2">立即参与</text>
                </view>
              </view>
              <view class="zuopin-recommend-bt">
                <view class="zuopin-recommend-title">{{
                  item.games.title
                }}</view>
                <view class="zuopin-recommend-desc">{{
                  item.games.subtitle
                }}</view>
              </view>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="upload-zuopin" @tap="uploadZuopin">上传作品</view>
    <view class="zuopin-type" v-if="visible">
      <view class="zuopin-type-box">
        <view class="zuopin-type-title">作品组别</view>
        <view class="zuopin-type-select">
          <view class="select-box" @tap.stop="selectChange">
            <image
              class="select"
              src="https://yuepai-oss.qubeitech.com/static/images/common/select_1.png"
              v-if="!select"
              :lazy-load="true"
            ></image>
            <image
              v-else
              class="select"
              src="https://yuepai-oss.qubeitech.com/static/images/common/select_0.png"
              :lazy-load="true"
            ></image>
            <text>单图</text>
          </view>
          <view class="select-box" @tap.stop="selectChange">
            <image
              class="select"
              src="https://yuepai-oss.qubeitech.com/static/images/common/select_1.png"
              v-if="select"
              :lazy-load="true"
            ></image>
            <image
              v-else
              class="select"
              src="https://yuepai-oss.qubeitech.com/static/images/common/select_0.png"
              :lazy-load="true"
            ></image>
            <text>组图</text>
          </view>
        </view>
        <view class="zuopin-tips">
          <view class="zuopin-tips-title">温馨提示</view>
          <view class="zuopin-tips-txt">发布作品前先阅读以下协议</view>
          <view class="zuopin-tips-agree">
            <image
              class="select"
              src="https://yuepai-oss.qubeitech.com/static/images/common/select2_1.png"
              v-if="radio"
              @tap.stop="radioChange"
              :lazy-load="true"
            ></image>
            <image
              v-else
              class="select"
              src="https://yuepai-oss.qubeitech.com/static/images/common/select2_0.png"
              @tap.stop="radioChange"
              :lazy-load="true"
            ></image>
            <text>我同意<text class="link">《参赛作品授权协议》</text></text>
          </view>
        </view>
        <view class="zuopin-btns">
          <view class="zuopin-cancle" @tap.stop="close">取消</view>
          <view class="zuopin-confirm" @tap.stop="confirm">确认</view>
        </view>
      </view>
    </view>
    <view class="totop" @tap="goTop">
      <image
        src="https://yuepai-oss.qubeitech.com/static/images/common/totop.png"
      ></image>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { Base64 } from "js-Base64";
import {
  publishWorks,
  worksList,
  guideList,
  guideInfo,
  worksListOwn,
  shareInvite,
  shareInviteInfo,
  worksEvent,
} from "../../../api/index.js";
import { errortip, openPage, isLogin } from "../../../utils/util";
export default {
  name: "photography",
  data() {
    return {
      currentTab: 2,
      zuopinTab: 1,
      winHeight: 0,
      select: 0,
      radio: false,
      visible: false,
      imgList: [],
      productname: "",
      desc: "",
      loading: false,
      isfixed: false,
      zuopinList: [],
      myZuopinList: [],
      gameList: [],
      zuopinMap: {
        0: "newly",
        1: "recommend",
        2: "award",
      },
      game_oid: "",
      pageNum: 1,
      pageSize: 10,
      read_cnt: 0,
      visitor_cnt: 0,
      works_cnt: 0,
      main_cover: "",
      zuopinType: 0,
      awardsTextContent: "",
      guidanceTextContent: "",
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      shareFriendsTitle: "",
      shareFriendsImg: "",
      shareFriendsPath: "",
      swiperHeightCt: 0,
    };
  },
  methods: {
    setSwiperHeight() {
      let dom = "";
      if (this.currentTab == 0) {
        dom = ".awards-text";
      } else if (this.currentTab == 1) {
        dom = ".guidance-text";
      } else if (this.currentTab == 2) {
        dom = ".zuopin_list";
      } else if (this.currentTab == 3) {
        dom = ".my-zuopin-ct";
      } else if (this.currentTab == 4) {
        dom = ".zuopin-recommend-box";
      }
      wx.createSelectorQuery()
        .select(dom)
        .boundingClientRect((rect) => {
          this.swiperHeightCt = rect.height + "px";
        })
        .exec();
    },
    goTop() {
      wx.pageScrollTo({
        scrollTop: 0,
      });
    },
    switchQuery(type) {
      switch (this.currentTab) {
        case 0:
          this.setSwiperHeight();
          break;
        case 1:
          this.setSwiperHeight();
          break;
        case 2:
          this.queryZuopinList(type);
          break;
        case 3:
          this.queryMyZuopinList(type);
          break;
        case 4:
          this.queryGameList(type);
          break;
      }
    },
    changeQuery(game_oid) {
      this.currentTab = 2;
      this.zuopinTab = 1;
      this.pageNum = 1;
      this.zuopinList = [];
      this.myZuopinList = [];
      this.gameList = [];
      this.game_oid = game_oid;
      this.guideInfo({
        games_oid: game_oid,
      });
      this.switchQuery("init");
      this.shareInviteInfo({
        source: "share_details",
        project: "games",
        oid: game_oid,
      });
      this.shareFriendsInviteInfo({
        source: "friends_circle",
        project: "games",
        oid: game_oid,
      });
    },
    selectChange() {
      this.select = this.select == 0 ? 1 : 0;
    },
    radioChange() {
      this.radio = !this.radio;
    },
    zuopinClick(index) {
      if (this.zuopinTab === index) {
        return false;
      } else {
        this.zuopinTab = index;
        this.pageNum = 1;
        this.zuopinList = [];
        wx.showLoading({
          title: "数据加载中...",
        });
        this.switchQuery("init");
      }
    },
    zuopinDetail(works_oid, visited_id) {
      openPage(
        "/packageActivity/pages/photographyDetail/index?works_oid=" +
          works_oid +
          "&visited_id=" +
          visited_id
      );
    },
    changeItem(index) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
        this.pageNum = 1;
        this.list = [];
        this.switchQuery("init");
      }
    },
    bindChange(e) {
      this.currentTab = e.detail.current;
      this.pageNum = 1;
      this.list = [];
      this.switchQuery("init");
    },
    scrollToLower() {
      this.pageNum++;
      if (this.loading) {
        this.switchQuery("more");
      }
    },
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    uploadImgClose(index) {
      this.imgList.splice(index, 1);
    },
    chooseImage() {
      if (this.imgList.length >= 9) {
        wx.showToast({
          title: "最多上传9张图！",
          icon: "none",
        });
        return false;
      }
      let _this = this;
      wx.chooseMedia({
        count: 9 - this.imgList.length,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success(res) {
          wx.showLoading({
            title: "正在上传中",
          });
          let arr = res.tempFiles;
          var imgInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            imgInfo = v;
            _this.upImgs(imgInfo);
          });
        },
      });
    },
    upImgs(dataInfo) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "works",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.imgList.push(data.data.file1);
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    uploadZuopin() {
      if (isLogin()) {
        this.select = 0;
        this.radio = false;
        this.visible = true;
      } else {
        openPage("/pages/login/index");
      }
    },
    close() {
      this.visible = false;
    },
    confirm() {
      if (!this.radio) {
        errortip("请勾选《参赛作品授权协议》");
        return false;
      }
      this.visible = false;
      this.currentTab = 3;
      this.zuopinType = 2;
    },
    submit() {
      if (!this.imgList.length) {
        errortip("请上传作品！");
        return false;
      }
      if (!this.productname) {
        errortip("请输入作品名称！");
        return false;
      }
      let params = {
        games_oid: this.game_oid,
        group_type: this.select ? "more" : "one",
        headline: this.productname,
        describe: this.desc,
        picture: this.imgList,
      };
      console.log(params);
      this.publishWorks(params);
    },
    queryZuopinList(type) {
      this.loading = false;
      this.worksList(
        {
          page: this.pageNum,
          per_page: this.pageSize,
          games_oid: this.game_oid,
          quick_filter: this.zuopinMap[this.zuopinTab],
        },
        type
      );
    },
    queryMyZuopinList(type) {
      this.loading = false;
      this.worksListOwn(
        {
          page: this.pageNum,
          per_page: this.pageSize,
          games_oid: this.game_oid,
        },
        type
      );
    },
    queryGameList(type) {
      this.loading = false;
      this.guideList(
        {
          page: this.pageNum,
          per_page: this.pageSize,
        },
        type
      );
    },
    likeClick(data) {
      if (isLogin()) {
        this.worksEvent(
          {
            works_oid: data.works.works_oid,
            event_type: "vote",
            event_action: data.works.is_vote == 1 ? -1 : 1,
          },
          data
        );
      } else {
        openPage("/pages/login/index");
      }
    },
    async publishWorks(params) {
      try {
        let res = await publishWorks(params);
        errortip("发布成功");
        this.zuopinType = 1;
        this.queryMyZuopinList("init");
      } catch (error) {}
    },
    async worksList(params, type) {
      try {
        let res = await worksList(params);
        //隐藏loading 提示框
        wx.hideLoading();

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
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
      } catch (error) {}
    },
    async guideList(params, type) {
      try {
        let res = await guideList(params);
        //隐藏loading 提示框
        wx.hideLoading();

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();

        if (type == "init") {
          this.gameList = res.data.data.items;
          this.loading = true;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            return false;
          }
          let data = res.data.data.items;
          this.gameList = this.gameList.concat(data);
          this.loading = true;
        }
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
      } catch (error) {}
    },
    async worksListOwn(params, type) {
      try {
        let res = await worksListOwn(params);
        //隐藏loading 提示框
        wx.hideLoading();

        //隐藏导航条加载动画
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();
        if (!res.data.data.items.length) {
          this.zuopinType = 0;
          return false;
        }
        if (type == "init") {
          this.myZuopinList = res.data.data.items;
          this.loading = true;
          this.zuopinType = 1;
        } else if (type == "more") {
          if (!res.data.data || !res.data.data.items.length) {
            errortip("没有更多数据了～");
            this.loading = true;
            this.zuopinType = 1;
            return false;
          }
          let data = res.data.data.items;
          this.myZuopinList = this.myZuopinList.concat(data);
          this.zuopinType = 1;
          this.loading = true;
        }
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
      } catch (error) {}
    },
    async guideInfo(params) {
      try {
        let res = await guideInfo(params);
        this.read_cnt = res.data.data.stats.read_cnt;
        this.visitor_cnt = res.data.data.stats.visitor_cnt;
        this.works_cnt = res.data.data.stats.works_cnt;
        this.main_cover = res.data.data.games.main_cover;
        this.awardsTextContent = res.data.data.games.awards;
        this.guidanceTextContent = res.data.data.games.guidance;
      } catch (error) {}
    },
    async worksEvent(params, data) {
      try {
        let res = await worksEvent(params);
        data.works.is_vote = res.data.data.event_action;
        if (res.data.data.event_action == 1) {
          data.stats.vote_cnt = data.stats.vote_cnt + 1;
        } else {
          data.stats.vote_cnt = data.stats.vote_cnt - 1;
        }
      } catch (error) {}
    },
    async shareInvite(params) {
      try {
        let res = await shareInvite(params);
      } catch (error) {}
    },
    async shareInviteInfo(params) {
      try {
        let res = await shareInviteInfo(params);
        this.shareTitle = res.data.data.title;
        this.shareImg = res.data.data.imageUrl;
        this.sharePath = res.data.data.path;
      } catch (error) {}
    },
    async shareFriendsInvite(params) {
      try {
        let res = await shareInvite(params);
      } catch (error) {}
    },
    async shareFriendsInviteInfo(params) {
      try {
        let res = await shareInviteInfo(params);
        this.shareFriendsTitle = res.data.data.title;
        this.shareFriendsImg = res.data.data.imageUrl;
        this.shareFriendsPath = res.data.data.path;
      } catch (error) {}
    },
  },
  onReachBottom: function () {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;
    if (this.loading) {
      this.switchQuery("more");
    }
  },
  onPageScroll: function (e) {
    this.scrollTop = e.scrollTop;
    let query = wx.createSelectorQuery();
    query
      .select(".components")
      .boundingClientRect((rect) => {
        let top = rect.top;
        if (top <= 50) {
          this.isfixed = true;
        } else {
          this.isfixed = false;
        }
      })
      .exec();
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      project: "games",
      oid: this.game_oid,
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onShareTimeline() {
    this.shareFriendsInvite({
      source: "friends_circle",
      project: "games",
      oid: this.game_oid,
    });
    return {
      title: this.shareFriendsTitle,
      imageUrl: this.shareFriendsImg,
      path: this.shareFriendsPath, // 路径，传递参数到指定页面。
    };
  },
  onLoad: function (options) {
    if (options.game_oid) {
      this.game_oid = options.game_oid;
    }
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      },
    });
    if (this.game_oid) {
      this.guideInfo({
        games_oid: this.game_oid,
      });
      this.switchQuery("init");
      this.shareInviteInfo({
        source: "share_details",
        project: "games",
        oid: this.game_oid,
      });
      this.shareFriendsInviteInfo({
        source: "friends_circle",
        project: "games",
        oid: this.game_oid,
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
