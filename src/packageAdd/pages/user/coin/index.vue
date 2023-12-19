<template>
  <view class="coin">
    <view class="coin-bg">
      <view class="coin-bg-left">
        <view class="coin-tips">当前金币</view>
        <view class="coin-total"
          >{{ coin }}<text class="company">金币</text></view
        >
      </view>
      <view class="coin-bg-rt" @tap="goPay"> 充值金币 </view>
    </view>
    <view class="signin">
      <view class="signin-top">
        <view class="signin-title">
          <view class="signin-lable">签到领币</view>
          <view class="signin-tips">提醒我签到</view>
        </view>
        <view class="signin-p"> {{ signin_desc }} </view>
      </view>
      <view class="signin-list">
        <view class="signin-box" v-for="(item, index) in signList" :key="index">
          <view class="signin-box-top">
            <text class="signin-num">{{ item.coin }}</text>
            <image
              v-if="item.is_signin == 1"
              src="https://yuepai-oss.qubeitech.com/static/images/sign.png"
            ></image>
            <image
              v-else-if="item.is_signin == 0 && index < signList.length - 1"
              src="https://yuepai-oss.qubeitech.com/static/images/signin.png"
            ></image>
            <image
              v-else-if="index == signList.length - 1"
              src="https://yuepai-oss.qubeitech.com/static/images/red-envelope.png"
            ></image>
          </view>
          <view class="signin-box-bt"> {{ item.name }} </view>
        </view>
      </view>
      <view class="immediately-sign" v-if="is_today_signin"> 今日已签 </view>
      <view class="immediately-signin" @tap="immediatelySignin" v-else>
        立即签到
      </view>
    </view>
    <view class="coin-content">
      <view class="tab">
        <view
          class="tab-item"
          :class="currentTab == 0 ? 'on' : ''"
          @tap="changeItem(0, 'cost')"
          >金币用途</view
        >
        <view
          class="tab-item"
          :class="currentTab == 1 ? 'on' : ''"
          @tap="changeItem(1, 'earn')"
          >领取金币</view
        >
        <view
          class="tab-item"
          :class="currentTab == 2 ? 'on' : ''"
          @tap="changeItem(2)"
          >金币明细</view
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
            <view class="privilege-list">
              <view class="privilege-box">
                <view class="service blod">特权服务</view>
                <view class="vip blod">会员</view>
                <view class="novip blod">非会员</view>
              </view>
              <view
                class="privilege-box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="service">{{ item.rule_desc }}</view>
                <view class="vip red">{{ item.member_coin }}</view>
                <view class="novip red">{{ item.common_coin }}</view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="task-list-box">
              <block v-if="dailyList.length">
                <view class="task-split">/ 日常任务 /</view>
                <view class="task-list">
                  <view
                    class="task-box"
                    v-for="(item, index) in dailyList"
                    :key="index"
                  >
                    <view class="task-left">
                      <view class="task-title-box">
                        <text class="task-tag">{{ item.limit_tips }}</text>
                        <text class="task-title">{{ item.order_name }}</text>
                      </view>
                      <view class="task-label">
                        <view class="coin-box">
                          <text class="coin-tag">金币</text>
                          <text class="coin-num">{{ item.common_coin }}</text>
                        </view>
                        <view class="growup-box">
                          <text class="growup-tag">成长值</text>
                          <text class="growup-num"
                            >普通：{{ item.common_growth }}</text
                          >
                          <text class="growup-num"
                            >会员：{{ item.member_growth }}</text
                          >
                        </view>
                      </view>
                      <view class="task-schedule" v-if="item.is_schedule">
                        {{ item.schedule_desc }}
                      </view>
                    </view>
                    <view class="task-rt">
                      <text class="completed" v-if="item.finish_status">{{
                        item.finish_label
                      }}</text>
                      <text
                        class="tocomplete"
                        v-else
                        @tap="openUrl(item.redirect_url)"
                        >{{ item.finish_label }}</text
                      >
                    </view>
                  </view>
                  <!-- <view class="task-box">
                  <view class="task-left">
                    <view class="task-title-box">
                      <text class="task-tag">每日</text>
                      <text class="task-title">发布约拍笔记</text>
                    </view>
                    <view class="task-label">
                      <view class="coin-box">
                        <text class="coin-tag">金币</text>
                        <text class="coin-num">5</text>
                      </view>
                      <view class="growup-box">
                        <text class="growup-tag">成长值</text>
                        <text class="growup-num">普通：5</text>
                        <text class="growup-num">会员：10</text>
                      </view>
                    </view>
                    <view class="task-schedule"> 完成进度 1/5 </view>
                  </view>
                  <view class="task-rt">
                    <text class="tocomplete" v-if="false">去完成</text>
                    <text class="completed">已完成</text>
                  </view>
                </view> -->
                </view>
              </block>
              <block v-if="commonList.length">
                <view class="task-split">/ 新手任务 /</view>
                <view class="task-list">
                  <view
                    class="task-box"
                    v-for="(item, index) in commonList"
                    :key="index"
                  >
                    <view class="task-left">
                      <view class="task-title-box">
                        <text class="task-tag">{{ item.limit_tips }}</text>
                        <text class="task-title">{{ item.order_name }}</text>
                      </view>
                      <view class="task-label">
                        <view class="coin-box">
                          <text class="coin-tag">金币</text>
                          <text class="coin-num">{{ item.common_coin }}</text>
                        </view>
                        <view class="growup-box">
                          <text class="growup-tag">成长值</text>
                          <text class="growup-num"
                            >普通：{{ item.common_growth }}</text
                          >
                          <text class="growup-num"
                            >会员：{{ item.member_growth }}</text
                          >
                        </view>
                      </view>
                      <view class="task-schedule" v-if="item.is_schedule">
                        {{ item.schedule_desc }}
                      </view>
                    </view>
                    <view class="task-rt">
                      <text class="completed" v-if="item.finish_status">{{
                        item.finish_label
                      }}</text>
                      <text
                        class="tocomplete"
                        v-else
                        @tap="openUrl(item.redirect_url)"
                        >{{ item.finish_label }}</text
                      >
                    </view>
                  </view>
                </view>
              </block>
              <view
                v-if="!commonList.length && !dailyList.length"
                class="none-data"
              >
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                  mode="aspectFill"
                  class="none-img"
                ></image>
                <view>当前暂无信息哦～</view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <block v-if="coinDetails.length">
              <view class="detailed">
                <view
                  class="detailed-list"
                  v-for="(item, index) in coinDetails"
                  :key="index"
                >
                  <view class="coin-task">
                    <view class="task-info">
                      <view>
                        <text class="task-title">{{ item.order_name }}</text>
                      </view>
                      <view class="task-tips">{{ item.success_time }}</view>
                    </view>
                    <view class="task-num">{{ item.curr_coin }}</view>
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <!--签到-->
    <sign :visible="visible" :msg="hyper_desc" @close="close"></sign>
  </view>
</template>

<script>
import "./index.scss";
import {
  coinList,
  coinItemList,
  coinAcct,
  submitSign,
  shareInvite,
  shareInviteInfo,
  ruleList,
  signinList,
  signinLogs,
} from "../../../../api/index";
import { errortip, openPage } from "../../../../utils/util";
import sign from "../../../../components/sign/index.vue";
export default {
  name: "coin",
  data() {
    return {
      visible: false,
      hyper_desc: "",
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      commonList: [],
      dailyList: [],
      coinDetails: [],
      type: "cost",
      loading: true,
      coin: 0,
      swiperHeightCt: 0,
      pageNum: 1,
      pageSize: 10,
      signList: [],
      signin_desc: "",
      is_today_signin: 0,
    };
  },
  components: {
    sign,
  },
  methods: {
    openUrl(url) {
      openPage(url);
    },
    findDom() {
      if (this.currentTab == 0) {
        return ".privilege-list";
      } else if (this.currentTab == 1) {
        return ".task-list-box";
      } else if (this.currentTab == 2) {
        return ".detailed";
      }
    },
    setSwiperHeight() {
      let dom = this.findDom();
      wx.createSelectorQuery()
        .select(dom)
        .boundingClientRect((rect) => {
          this.swiperHeightCt = rect.height + "px";
        })
        .exec();
    },
    close() {
      this.visible = false;
    },
    taskClick(code) {
      switch (code) {
        case "everyday_sign":
          this.submitSign("");
          break;
        case "invite_friends":
          openPage("/packageAdd/pages/user/invite/index");
          break;
        case "finish_profile":
          openPage("/packageAdd/pages/user/editinfor/index");
          break;
        case "real_certify":
          openPage("/packageAdd/pages/user/realnameAuth/index");
          break;
        case "follow_wechat":
          openPage("/packageAdd/pages/user/follow/index");
          break;
        case "bind_phone":
          openPage("/packageAdd/pages/user/contact/index");
          break;
      }
    },
    // 点击tab切换
    changeItem(index, type) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
        this.type = type;
        this.pageNum = 1;
        this.list = [];
        this.coinDetails = [];
        if (index == 0) {
          this.queryCoinList();
        } else if (index == 1) {
          this.queryRuleList();
        } else {
          this.query();
        }
      }
    },
    bindChange(e) {
      this.currentTab = e.detail.current;
      this.pageNum = 1;
      this.list = [];
      this.coinDetails = [];
      if (e.detail.current == 0) {
        this.type = "cost";
        this.queryCoinList();
      } else if (e.detail.current == 1) {
        this.type = "earn";
        // this.queryCoinList();
        this.queryRuleList();
      } else if (e.detail.current == 2) {
        this.type = "";
        this.query();
      }
    },
    query() {
      this.loading = false;
      this.coinItemList({
        page: this.pageNum,
        per_page: this.pageSize,
      });
    },
    queryCoinList() {
      let params = {
        type: this.type,
      };
      if (this.currentTab == 0) {
        params.class_code = "member_service";
      }
      this.coinList(params);
    },
    queryRuleList() {
      this.ruleList({
        class_type: "coin",
      });
    },
    goPay() {
      openPage("/packageAdd/pages/user/rechargecoin/index");
    },
    immediatelySignin() {
      this.signinLogs("");
    },
    async submitSign(params) {
      try {
        let res = await submitSign(params);
        this.visible = true;
        this.hyper_desc = res.data.data.hyper_desc;
        // this.queryCoinList();
        this.queryRuleList();
      } catch (error) {}
    },
    async signinList(params) {
      try {
        let res = await signinList(params);
        this.signin_desc = res.data.data.signin_desc;
        this.signList = res.data.data.signin_plan;
        this.is_today_signin = res.data.data.is_today_signin;
      } catch (error) {}
    },
    async signinLogs(params) {
      try {
        let res = await signinLogs(params);
        this.signinLogs("");
        this.signinList("");
      } catch (error) {}
    },
    async coinList(params) {
      try {
        let res = await coinList(params);
        if (res.data.data) {
          this.list = res.data.data;
        } else {
          this.pageNum = 1;
          this.list = [];
        }
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
      } catch (error) {}
    },
    async ruleList(params) {
      try {
        let res = await ruleList(params);
        if (res.data.data) {
          this.commonList = res.data.data.common;
          this.dailyList = res.data.data.daily;
        } else {
          this.pageNum = 1;
          this.commonList = [];
          this.dailyList = [];
        }
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
      } catch (error) {}
    },
    async coinItemList(params) {
      try {
        let res = await coinItemList(params);
        if (
          (!res.data.data && this.pageNum > 1) ||
          (!res.data.data.items.length && this.pageNum > 1)
        ) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        if (data) {
          this.coinDetails = this.coinDetails.concat(data);
        } else {
          this.coinDetails = [];
        }
        this.loading = true;
        setTimeout(() => {
          this.setSwiperHeight();
        }, 200);
      } catch (error) {}
    },
    async coinAcct(params) {
      try {
        let res = await coinAcct(params);
        this.coin = res.data.data.coin;
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
  },
  onLoad: function (options) {
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      },
    });
  },
  onShow() {
    this.currentTab = 1;
    this.type = "earn";
    this.queryRuleList();
    this.coinAcct("");
    this.signinList("");
    this.shareInviteInfo({
      source: "share_friend",
      type: "wechat",
    });
  },
  onReachBottom() {
    if (this.currentTab == 2) {
      if (this.loading) {
        this.pageNum++;
        this.query();
      }
    }
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_friend",
      type: "wechat",
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onShareTimeline() {
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
};
</script>

<style lang="scss" scoped></style>
