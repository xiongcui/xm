<template>
  <view class="coin">
    <view class="coin-bg">
      <view class="coin-bg-left">
        <view class="coin-total"
          >{{ coin }}<text class="company">金币</text></view
        >
        <view class="coin-tips">小金币大用途</view>
      </view>
      <view class="coin-bg-rt" @tap="goPay"> 充值金币 </view>
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
          >获取金币</view
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
            <block v-if="list.length">
              <view class="get-coin">
                <view class="coin-title">/ 日常奖励 /</view>
                <view
                  class="coin-task"
                  v-for="(item, index) in dailyList"
                  :key="item.code + index"
                >
                  <view class="task-info">
                    <view class="task-dian"></view>
                    <view>
                      <text class="task-title">{{ item.rule_name }}</text>
                      <text class="task-coin">+{{ item.common_coin }}金币</text>
                    </view>
                    <view class="task-tips">{{ item.rule_desc }}</view>
                  </view>
                  <view
                    class="task-btn"
                    @tap="taskClick(item.rule_code)"
                    v-if="item.rule_status != '已完成'"
                    >{{ item.rule_status }}</view
                  >
                  <view v-else class="task-sucess-btn">{{
                    item.rule_status
                  }}</view>
                </view>
                <view class="coin-title mt16">/ 任务奖励 /</view>
                <view
                  class="coin-task"
                  v-for="(item, index) in taskList"
                  :key="item.code + index"
                >
                  <view class="task-info">
                    <view class="task-dian"></view>
                    <view>
                      <text class="task-title">{{ item.rule_name }}</text>
                      <text class="task-coin">+{{ item.common_coin }}金币</text>
                    </view>
                    <view class="task-tips">{{ item.rule_desc }}</view>
                  </view>
                  <view
                    class="task-btn"
                    @tap="taskClick(item.rule_code)"
                    v-if="item.rule_status != '已完成'"
                    >{{ item.rule_status }}</view
                  >
                  <view v-else class="task-sucess-btn">{{
                    item.rule_status
                  }}</view>
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
          <swiper-item>
            <block v-if="coinDetails.length">
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
  </view>
</template>

<script>
import "./index.scss";
import { coinList, coinItemList, coinAcct } from "../../../../api/index";
import { errortip, openPage } from "../../../../utils/util";
export default {
  name: "coin",
  data() {
    return {
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      coinDetails: [],
      type: "cost",
      loading: true,
      coin: 0,
      pageNum: 1,
      pageSize: 10,
    };
  },
  computed: {
    dailyList() {
      let arr = [];
      this.list.map((item) => {
        if (item.class_code == "daily_rewards") {
          arr.push(item);
        }
      });
      return arr;
    },
    taskList() {
      let arr = [];
      this.list.map((item) => {
        if (item.class_code == "task_rewards") {
          arr.push(item);
        }
      });
      return arr;
    },
  },
  methods: {
    taskClick(code) {
      switch (code) {
        case "everyday_sign":
          wx.switchTab({
            url: "/pages/my/index",
            success: function (e) {},
          });
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
        if (index < 2) {
          this.queryCoinList();
        } else {
          this.query();
        }
      }
    },
    bindChange(e) {
      this.currentTab = e.detail.current;
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
    goPay() {
      openPage("/packageAdd/pages/user/rechargecoin/index");
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
        console.log(data, "data");
        if (data) {
          this.coinDetails = this.coinDetails.concat(data);
        } else {
          this.coinDetails = [];
        }
        this.loading = true;
      } catch (error) {}
    },
    async coinAcct(params) {
      try {
        let res = await coinAcct(params);
        this.coin = res.data.data.coin;
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
    this.currentTab = 0;
    this.type = "cost";
    this.queryCoinList();
    this.coinAcct("");
  },
  onReachBottom() {
    if (this.currentTab == 2) {
      if (this.loading) {
        this.pageNum++;
        this.query();
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
