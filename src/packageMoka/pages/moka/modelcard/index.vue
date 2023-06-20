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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-cebian-1.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-cebian-2.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-cebian-3.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-cebian-4.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-cebian-5.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-cebian-6.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-charu-1.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-charu-2.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-charu-3.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-charu-4.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-charu-5.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-charu-6.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-didu-1.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-didu-2.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-didu-3.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-didu-4.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-didu-5.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-didu-6.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-didu-7.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-didu-8.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-shuban-1.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-shuban-2.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-shuban-3.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-shuban-4.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/moka/card/model-shuban-5.png"
            ></image>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import { openPage } from "../../../../utils/util";
import "./index.scss";
const moka = require("../../../../assets/js/moka.js");
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
    chooseMocard(t) {
      wx.setStorageSync("card-type", "");
      var cardid = parseInt(t.currentTarget.dataset.cardid);
      var mokaIndex = moka.getIndexByCardId(cardid);
      var o = moka.layouts[mokaIndex];
      wx.setStorageSync("cardid", cardid);
      wx.chooseImage({
        count: o.maxCount,
        sizeType: ["compressed"],
        sourceType: ["album"],
        success: function (e) {
          var t = e.tempFilePaths;
          wx.setStorageSync("selectedPhotos", t),
            t.length >= o.maxCount
              ? openPage("/packageMoka/pages/moka/chooseisself/index")
              : openPage("/packageMoka/pages/moka/choosephoto/index");
        },
      });
    },
    chooseMocardV(t) {
      wx.setStorageSync("card-type", "vertical");
      var a = parseInt(t.currentTarget.dataset.cardid),
        n = moka.getIndexByCardId(a),
        o = moka.layouts[n];
      wx.setStorageSync("cardid", a),
        wx.chooseImage({
          count: o.maxCount,
          sizeType: ["compressed"],
          sourceType: ["album"],
          success: function (e) {
            var t = e.tempFilePaths;
            wx.setStorageSync("selectedPhotos", t),
              t.length >= o.maxCount
                ? openPage("/packageMoka/pages/moka/chooseisself/index")
                : openPage("/packageMoka/pages/moka/choosephoto/index");
          },
        });
    },
  },
  created() {
    this.globalData = this.globalData;
  },
};
</script>

<style lang="scss" scoped></style>
