<template>
  <view class="modelcard">
    <view class="statusbar" :style="{ height: globalData.navHeight + 'px' }">
      <view class="page_nav ub">
        <view @tap="backpage" class="page_nav_left">
          <image
            mode="aspectFit"
            src="../../../../assets/images/common/icon_right.png"
          ></image>
        </view>
        <view class="page_nav_tab ub">
          <view
            @tap="changePageTab(1)"
            :class="`page_nav_tab_left ub-f1 ${
              showpage == 1 ? 'page_nav_tab_on' : ''
            }`"
            data-showpage="1"
            >横版</view
          >
          <view class="page_nav_tab_line"></view>
          <view
            @tap="changePageTab(2)"
            :class="`page_nav_tab_right ub-f1 ${
              showpage == 2 ? 'page_nav_tab_on' : ''
            }`"
            data-showpage="2"
            >竖版</view
          >
        </view>
        <view class="ub-f1"></view>
      </view>
    </view>
    <view
      class="main"
      v-if="showpage == 1"
      :style="{ marginTop: globalData.navHeight + 'px' }"
    >
      <view class="swiper-tab">
        <view @tap="swichNav" class="swiper-tab-list" data-current="0">
          <view :class="`tab_item ${currentTab == 0 ? 'on' : ''}`">侧边式</view>
          <view :class="`tab_line ${currentTab == 0 ? 'online' : ''}`"></view>
        </view>
        <view @tap="swichNav" class="swiper-tab-list" data-current="1">
          <view :class="`tab_item ${currentTab == 1 ? 'on' : ''}`">插入式</view>
          <view :class="`tab_line ${currentTab == 1 ? 'online' : ''}`"></view>
        </view>
        <view @tap="swichNav" class="swiper-tab-list" data-current="2">
          <view :class="`tab_item ${currentTab == 2 ? 'on' : ''}`">底部式</view>
          <view :class="`tab_line ${currentTab == 2 ? 'online' : ''}`"></view>
        </view>
      </view>
      <swiper @change="bindChange" class="swiper-box" :current="currentTab">
        <swiper-item class="swiper_item">
          <scroll-view scroll-y="true" class="scroll_block">
            <view class="top_gap"></view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">1竖图4横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001010501">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dml59obb1o061t818c8h3d4u57.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">4竖图2横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001010601">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dml5a9r51jid1jgn9u81b4s1o2u7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">5竖图2横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001010701">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dml5aqhvnbq6jjkk519blj3a7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">7竖图3横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001011001">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dml5bukb6hh1h2k152e6kd9t27.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">7竖图3横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001011002">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dneosb7r1bjf11aq1ftkq4c129b7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">4竖图9横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001011301">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dml5d3nv127212m612gq1bm1opt7.png"
                ></image>
              </view>
            </view>
            <view class="bottom_gap"></view>
          </scroll-view>
        </swiper-item>
        <swiper-item class="swiper_item">
          <scroll-view scroll-y="true" class="scroll_block">
            <view class="top_gap"></view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">6竖图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001020601">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dml5dp5m1b0987vo35ngj2id7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">5竖图2横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001020701">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dnep4b951i62m21i2drrl1bbs7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">4竖图4横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001020801">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dnep4p4m1o9v10m716k514lvd4l7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">9竖图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001020901">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dml5fbsq19vf1knseak15251car7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">7竖图3横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001021001">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dnep5dd4h5lue1ddf26p1cj57.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">7竖图5横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001021201">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dnepg8hs1ti71dfc1dhr1mps1op87.png"
                ></image>
              </view>
            </view>
            <view class="bottom_gap"></view>
          </scroll-view>
        </swiper-item>
        <swiper-item class="swiper_item">
          <scroll-view scroll-y="true" class="scroll_block">
            <view class="top_gap"></view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">1竖图4横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001030501">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dneoun6uevl1i625rj1q181a5o7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">6竖图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001030601">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dneov61u1ilg6r11qmdk07acc7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">8竖图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001030801">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dnep02uh13h11bb2oqq1lgts8e7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">3竖图4横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001030701">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dneovkengi2h2q171uvumbm77.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">7竖图2横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001030901">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dnep0nqsm9lvnq1v0m1h2j1i8d7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">9竖图2横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001031101">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dnep2h55112p91a1862f9a1jro7.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">10竖图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001031001">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dnep25bk1j0r1linglodks9e97.png"
                ></image>
              </view>
            </view>
            <view class="item_block">
              <view class="title ub">
                <view class="side_gap2"></view>
                <view class="title_line"></view>
                <view class="title_name ub-f1">1竖图12横图</view>
              </view>
              <view @tap="chooseMocard" class="item" data-cardid="1001031301">
                <image
                  mode="widthFix"
                  src="http://imgs.weimoka.com/o_1dnep2ueoncg1aa51p9mgl0blr7.png"
                ></image>
              </view>
            </view>
            <view class="bottom_gap"></view>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
    <view
      class="main"
      :style="{ marginTop: globalData.navHeight + 'px' }"
      v-else
    >
      <view class="swiper-tab ub">
        <view class="list_shuban_gap_left"></view>
        <view @tap="swichNavVer" class="list_shuban" data-current="0">
          <view :class="`tab_item ${vercurrentTab == 0 ? 'on' : ''}`">4图</view>
          <view
            :class="`tab_line ${vercurrentTab == 0 ? 'online' : ''}`"
          ></view>
        </view>
        <view class="list_shuban_gap"></view>
        <view @tap="swichNavVer" class="list_shuban" data-current="1">
          <view :class="`tab_item ${vercurrentTab == 1 ? 'on' : ''}`"
            >5图(1)</view
          >
          <view
            :class="`tab_line ${vercurrentTab == 1 ? 'online' : ''}`"
          ></view>
        </view>
        <view class="list_shuban_gap2"></view>
        <view @tap="swichNavVer" class="list_shuban" data-current="2">
          <view :class="`tab_item ${vercurrentTab == 2 ? 'on' : ''}`"
            >5图(2)</view
          >
          <view
            :class="`tab_line ${vercurrentTab == 2 ? 'online' : ''}`"
          ></view>
        </view>
        <view class="list_shuban_gap"></view>
        <view @tap="swichNavVer" class="list_shuban" data-current="3">
          <view :class="`tab_item ${vercurrentTab == 3 ? 'on' : ''}`">6图</view>
          <view
            :class="`tab_line ${vercurrentTab == 3 ? 'online' : ''}`"
          ></view>
        </view>
        <view class="list_shuban_gap"></view>
        <view @tap="swichNavVer" class="list_shuban" data-current="4">
          <view :class="`tab_item ${vercurrentTab == 4 ? 'on' : ''}`">7图</view>
          <view
            :class="`tab_line ${vercurrentTab == 4 ? 'online' : ''}`"
          ></view>
        </view>
      </view>
      <swiper
        @change="bindVerChange"
        class="swiper-box"
        :current="vercurrentTab"
      >
        <swiper-item class="swiper_item">
          <view
            @tap="chooseMocardV"
            class="vertical_item"
            data-cardid="1002030401"
          >
            <image
              mode="aspectFit"
              src="http://imgs.weimoka.com/o_1dml5lkrjljh1mq71geaj9811ha7.png"
            ></image>
          </view>
        </swiper-item>
        <swiper-item class="swiper_item">
          <view
            @tap="chooseMocardV"
            class="vertical_item"
            data-cardid="1002010501"
          >
            <image
              mode="aspectFit"
              src="http://imgs.weimoka.com/o_1dml5mk7nljdim81cd353g1vu07.png"
            ></image>
          </view>
        </swiper-item>
        <swiper-item class="swiper_item">
          <view
            @tap="chooseMocardV"
            class="vertical_item"
            data-cardid="1002020501"
          >
            <image
              mode="aspectFit"
              src="http://imgs.weimoka.com/o_1dml5rrl01mbv1voo1rsq1nno53i7.png"
            ></image>
          </view>
        </swiper-item>
        <swiper-item class="swiper_item">
          <view
            @tap="chooseMocardV"
            class="vertical_item"
            data-cardid="1002020601"
          >
            <image
              mode="aspectFit"
              src="http://imgs.weimoka.com/o_1dml5sbbm1e3f1oop17ilviuf6n7.png"
            ></image>
          </view>
        </swiper-item>
        <swiper-item class="swiper_item">
          <view
            @tap="chooseMocardV"
            class="vertical_item"
            data-cardid="1002010701"
          >
            <image
              mode="aspectFit"
              src="http://imgs.weimoka.com/o_1dmnrba2p3vs4n3f61kqfkcr7.png"
            ></image>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "modelcard",
  data() {
    return {
      statusBarHeight: 60,
      showpage: 1,
      currentTab: 0,
      vercurrentTab: 0,
    };
  },
  methods: {
    changePageTab(page) {
      this.showpage = page;
    },
    backpage() {
      wx.navigateBack();
    },
    bindChange(t) {
      this.currentTab = t.detail.current;
    },
    swichNav(t) {
      if (this.currentTab === t.currentTarget.dataset.current) return false;
      this.currentTab = t.currentTarget.dataset.current;
    },
    bindVerChange(t) {
      this.vercurrentTab = t.detail.current;
    },
    swichNavVer(t) {
      if (this.vercurrentTab === t.currentTarget.dataset.current) return false;
      this.vercurrentTab = t.currentTarget.dataset.current;
    },
    chooseMocard() {},
    chooseMocardV() {},
  },
  created() {
    this.globalData = this.globalData;
  },
};
</script>

<style lang="scss" scoped></style>
