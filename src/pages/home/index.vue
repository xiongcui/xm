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
        <view class="head_left">
          <view class="select-city">
            {{ city }}
            <image
              src="../../assets/images/common/back.png"
              class="roll-down"
            ></image>
          </view>
          <view class="head_sign" @tap="showSign">
            <image
              src="../../assets/images/icon_signed.jpg"
              v-if="is_today_sign"
            ></image>
            <image src="../../assets/images/icon_sign.jpg" v-else></image>
          </view>
        </view>
        <view class="head_title"> 虾米约拍 </view>
      </view>
    </view>
    <view :style="{ height: globalData.navHeight + 'px' }"></view>
    <block>
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
                  :src="'https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/9f7062c8-67b9-11ed-ae45-473a871aac32.jpg'"
                  class="swiper-item-img"
                ></image>
              </view>
            </swiper-item>
          </block>
        </swiper>
      </view>
    </block>
    <view class="news">
      <view class="news-title">消息</view>
      <view class="news-line">|</view>
      <view class="news-txt">看大佬如何用手机拍出黑白大片</view>
      <view class="news-btn">去看看</view>
    </view>
    <view class="page-nav">
      <view class="page-nav-top">
        <view class="page-nav-item">
          <image
            src="../../assets/images/icon_model.png"
            class="page-nav-img"
          ></image>
          <text class="page-nav-text">模特</text>
        </view>
        <view class="page-nav-item">
          <image
            src="../../assets/images/take.png"
            class="page-nav-img"
          ></image>
          <text class="page-nav-text">摄影</text>
        </view>
        <view class="page-nav-item">
          <image
            src="../../assets/images/more1.png"
            class="page-nav-img"
          ></image>
          <text class="page-nav-text">作品</text>
        </view>
        <view class="page-nav-item">
          <image
            src="../../assets/images/moka.png"
            class="page-nav-img"
          ></image>
          <text class="page-nav-text">模卡</text>
        </view>
      </view>
      <view class="page-nav-bottom">
        <view class="page-nav-box nav_bg1">
          <view class="page-nav-left">
            <view class="page-nav-title">约拍</view>
            <view class="page-nav-desc">你约我拍</view>
          </view>
          <view class="page-nav-rt">
            <image src="../../assets/images/common/photo_white.png"></image>
          </view>
        </view>
        <view class="page-nav-box nav_bg2">
          <view class="page-nav-left">
            <view class="page-nav-title">通告</view>
            <view class="page-nav-desc">招募公告</view>
          </view>
          <view class="page-nav-rt">
            <image src="../../assets/images/common/tonggao_white.png"></image>
          </view>
        </view>
      </view>
    </view>
    <view class="recommend">
      <view class="recommend-title">
        <view class="recommend-name"> 约拍推荐 </view>
        <view class="recommend-tips"> 1分钟前***发布了人像创作</view>
        <view class="recommend-more">更多</view>
      </view>
      <view class="recommend-ct">
        <swiper
          :indicator-dots="indicatorDots2"
          :autoplay="autoplay"
          :interval="interval2"
          :duration="duration"
          class="yuepai-swiper"
        >
          <block v-for="(item, index) in background" :key="index">
            <swiper-item>
              <view class="recommend-box">
                <view class="tonggao-recommend">
                  <view class="list_box">
                    <view class="list_top">
                      <view class="list_top_left">
                        <image
                          :src="'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'"
                          class="avatar"
                        ></image>
                        <view class="list_info">
                          <view class="list_name">
                            Anne
                            <image
                              src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                              class="list_sex"
                            ></image>
                            <!-- <block v-if="item.author.sex !== null">
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                          class="list_sex"
                          v-if="item.author.sex == 1"
                        ></image>
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                          class="list_sex"
                          v-if="item.author.sex == 0"
                        ></image>
                      </block> -->
                          </view>
                          <view class="list_p">
                            <text> 摄影</text>
                            <view class="icon_real">已实名</view>
                            <view class="icon_pledge">已担保</view>
                          </view>
                        </view>
                      </view>
                      <view class="list_top_rt">
                        <view class="list_loction"> 北京 </view>
                        <view class="list_date">1小时前来过</view>
                      </view>
                    </view>
                    <view class="list_content">
                      <view class="list_title">
                        <view class="recommend-label"> 约摄影师 </view>
                        <view class="recommend-label2"> 愿意付费：200 </view>
                      </view>
                      <view class="list_title_desc"
                        >故宫汉服需要模特故宫汉服需要模特</view
                      >
                    </view>
                    <view class="list_desc">
                      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                    </view>
                    <view class="list_img">
                      <scroll-view :enhanced="true" :scrollX="true">
                        <image
                          :src="url"
                          mode="aspectFill"
                          class="list_img_item"
                          v-for="(url, coverIndex) in cover"
                          :key="coverIndex"
                          @tap.stop="previewImage(url, cover)"
                        ></image>
                      </scroll-view>
                    </view>
                    <!-- <view class="list_video" v-if="item.file_type == 'video'">
                <video
                  objectFit="cover"
                  :poster="item.cover[0]"
                  :src="item.video_cover && item.video_cover[0]"
                  class="list_video-width"
                  @tap.stop=""
                ></video>
              </view> -->
                    <view class="list_bottom">
                      <view class="list_time">
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                        ></image>
                        1
                      </view>
                      <view class="list_yuepai">
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                        ></image>
                        收到约拍 3
                      </view>
                      <view class="list_read">
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                        ></image>
                        阅读 2
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </swiper-item>
          </block>
        </swiper>
      </view>
    </view>
    <view class="recommend">
      <view class="recommend-title">
        <view class="recommend-name"> 通告推荐 </view>
        <view class="recommend-tips"> 1分钟前***发布了人像创作</view>
        <view class="recommend-more">更多</view>
      </view>
      <view class="recommend-ct">
        <swiper
          :indicator-dots="indicatorDots2"
          :autoplay="autoplay"
          :interval="interval2"
          :duration="duration"
          class="tonggao-swiper"
        >
          <block v-for="(item, index) in background" :key="index">
            <swiper-item>
              <view class="recommend-box">
                <view class="tonggao-recommend">
                  <view class="tonggao-recommend-top">
                    <view class="tonggao-recommend-img">
                      <image
                        src="../../assets/images/activity.png"
                        mode="aspectFill"
                      ></image>
                    </view>
                    <view class="tonggao-recommend-info">
                      <view class="tonggao-info-title">
                        <view class="recommend-label"> 人像创作 </view>
                        <view class="tonggao-txt">面向全国招聘优质模特</view>
                      </view>
                      <view class="tonggao-info-desc">
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</view
                      >
                      <view class="tonggao-tags">
                        <view class="tag-item">面向地区：北京市</view>
                        <view class="tag-item">性别要求：不限</view>
                      </view>
                      <view class="tonggao-recommend-price">
                        <view class="pirce"> ¥200/时 </view>
                        <view class="recommend-btn">立即报名</view>
                      </view>
                    </view>
                  </view>
                </view>
                <view class="tonggao-bottom">
                  <view class="tonggao-head">
                    <image src="../../assets/images/arrow-right.png"></image>
                    Anne
                  </view>
                  <view class="tonggao-yuepai">
                    <image
                      src="../../assets/images/user/index/yuepai.png"
                    ></image>
                    {{ 2 }}
                  </view>
                  <view class="tonggao-read">
                    <image src="../../assets/images/eyes.png"></image>
                    {{ 3 }}
                  </view>
                </view>
              </view>
            </swiper-item>
          </block>
        </swiper>
      </view>
    </view>
    <view class="componets">
      <view
        :class="
          index == componetActive ? 'componets-nav-acitve' : 'componets-nav'
        "
        v-for="(item, index) in componetsNav"
        :key="index"
        @tap="componetClick(index)"
      >
        <view class="componets-title">{{ item.name }}</view>
        <view class="componets-btn">{{ item.desc }}</view>
      </view>
    </view>
    <!-- <view
      class="nav_fixed"
      :style="{ marginTop: globalData.navHeight + 'px' }"
      v-show="navShow"
    >
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
    </view> -->
    <Pagenav
      :pageActive="componetActive"
      :style="{ marginTop: globalData.navHeight + 'px' }"
      v-show="navShow"
    ></Pagenav>
    <YuepaiList v-if="componetActive == 0"></YuepaiList>
    <TonggaoList v-if="componetActive == 1"></TonggaoList>
    <ZuopinList v-if="componetActive == 2"></ZuopinList>
  </view>
</template>

<script>
import "./index.scss";
import TonggaoList from "../../components/tonggaoList/index.vue";
import YuepaiList from "../../components/yuepaiList/index.vue";
import ZuopinList from "../../components/zuopinList/index.vue";
import Pagenav from "../../components/pagenav/index.vue";
export default {
  name: "home",
  data() {
    return {
      city: "北京",
      is_today_sign: 0,
      background: ["demo-text-1", "demo-text-2", "demo-text-3"],
      indicatorDots: true,
      indicatorDots2: false,
      vertical: false,
      autoplay: true,
      interval: 3000,
      interval2: 10000,
      duration: 500,
      componetActive: 0,
      headCurrent: 0,
      pageNum: 1,
      pageSize: 10,
      showSign: false,
      navShow: true,
      cover: [
        "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
        "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
        "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
      ],
      componetsNav: [
        {
          name: "约拍",
          desc: "你约我拍",
        },
        {
          name: "通告",
          desc: "招募公告",
        },
        {
          name: "作品",
          desc: "佳作赏欣",
        },
      ],
    };
  },
  components: {
    TonggaoList,
    YuepaiList,
    ZuopinList,
    Pagenav,
  },
  methods: {
    componetClick(index) {
      if (this.componetActive != index) {
        this.componetActive = index;
      }
    },
  },
  onPageScroll: function (e) {
    this.scrollTop = e.scrollTop;
    let query = wx.createSelectorQuery();
    query
      .select(".componets")
      .boundingClientRect((rect) => {
        let top = rect.top;
        if (top <= 50) {
          this.navShow = true;
        } else {
          this.navShow = false;
        }
      })
      .exec();
  },
  //触底加载
  onReachBottom() {
    // if (this.data.AJAXLock && this.data.page < this.data.totalPage) {
    //   this.getLock();
    //   this.getHomieData();
    // }
  },
  created() {
    this.globalData = this.globalData;
  },
};
</script>

<style lang="scss" scoped></style>
