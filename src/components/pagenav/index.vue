<template>
  <view class="pagenav">
    <view class="nav_fixed" :style="{ marginTop: globalData.navHeight + 'px' }">
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
    </view>
    <!--约拍筛选框-->
    <view class="select_block" v-show="showModal" @tap="close">
      <view class="select_bg" @tap.stop="">
        <view
          class="statusbar"
          :style="{ height: globalData.navHeight + 'px' }"
        ></view>
        <view class="select_item">
          <view class="select_item_title">约拍对象</view>
          <view>
            <text
              @tap="select_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in appointmentData"
              :key="index"
            >
              {{ item.name }}
            </text>
          </view>
        </view>
        <view class="select_item">
          <view class="select_item_title">发起人性别</view>
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
          <view class="select_item_title">收费模式</view>
          <view>
            <text
              @tap="select_charge_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in chargeData"
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
    <!--约拍筛选框-->
    <!--通告筛选框-->
    <view class="select_block" v-show="tonggaoShowModal" @tap="tonggaoClose">
      <view class="select_bg" @tap.stop="">
        <view
          class="statusbar"
          :style="{ height: globalData.navHeight + 'px' }"
        ></view>
        <view class="select_item">
          <view class="select_item_title">招募身份</view>
          <view>
            <text
              @tap="select_identity_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in identityData"
              :key="index"
            >
              {{ item.name }}
            </text>
          </view>
        </view>
        <view class="select_item">
          <view class="select_item_title">通告类型</view>
          <view>
            <text
              @tap="select_notice_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in noticeData"
              :key="index"
            >
              {{ item.value }}
            </text>
          </view>
        </view>
        <view class="select_item">
          <view class="select_item_title">收费模式</view>
          <view>
            <text
              @tap="select_charge_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in chargeData"
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
    <!--通告筛选框-->
    <!--作品筛选框-->
    <view class="select_block" v-show="zuopinShowModal" @tap="zuopinClose">
      <view class="select_bg" @tap.stop="">
        <view
          class="statusbar"
          :style="{ height: globalData.navHeight + 'px' }"
        ></view>
        <view class="select_item">
          <view class="select_item_title">发布人身份</view>
          <view>
            <text
              @tap="select_identity_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in identityData"
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
    <!--作品筛选框-->
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "pagenav",
  data() {
    return {
      showModal: false,
      tonggaoShowModal: false,
      zuopinShowModal: false,
      navActive: 0,
      headCurrent: 0,
      headNavList: [
        {
          name: "约拍",
          value: 0,
        },
        {
          name: "通告",
          value: 1,
        },
        {
          name: "作品",
          value: 2,
        },
      ],
      navData: [
        // {
        //   value: "推荐",
        // },
        // {
        //   value: "最新",
        // },
      ],
      chargeData: [],
      sizer_num: [],
      appointmentData: [
        { cid: 0, name: "全部", ispick: true },
        { cid: 20001, name: "摄影师", ispick: false },
        { cid: 20002, name: "摄像师", ispick: false },
        { cid: 20003, name: "造型师", ispick: false },
        { cid: 20007, name: "经纪人", ispick: false },
        { cid: 20011, name: "导演", ispick: false },
        { cid: 20012, name: "商家", ispick: false },
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
      identityData: [],
      noticeData: [],
    };
  },
  props: {
    pageActive: {
      type: Number,
      default: 0,
    },
    navList: {
      type: Array,
      default: [],
    },
    chargeList: {
      type: Array,
      default: [],
    },
    identityList: {
      type: Array,
      default: [],
    },
    noticeList: {
      type: Array,
      default: [],
    },
  },
  watch: {
    pageActive: {
      handler(newVal, oldVal) {
        this.active = newVal;
      },
      deep: true,
      immediate: true,
    },
    navList: {
      handler(newVal, oldVal) {
        this.navData = newVal;
      },
      deep: true,
      immediate: true,
    },
    chargeList: {
      handler(newVal, oldVal) {
        this.chargeData = newVal;
      },
      deep: true,
      immediate: true,
    },
    identityList: {
      handler(newVal, oldVal) {
        this.identityData = newVal;
      },
      deep: true,
      immediate: true,
    },
    noticeList: {
      handler(newVal, oldVal) {
        this.noticeData = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    close() {
      this.showModal = false;
    },
    tonggaoClose() {
      this.tonggaoShowModal = false;
    },
    zuopinClose() {
      this.zuopinShowModal = false;
    },
    screen() {
      if (this.headCurrent == 0) {
        this.showModal = true;
      } else if (this.headCurrent == 1) {
        this.tonggaoShowModal = true;
      } else if (this.headCurrent == 2) {
        this.zuopinShowModal = true;
      }
    },
    headNavClick(index) {
      this.headCurrent = index;
      this.$emit("pageNavClick", index);
      this.$emit("query", "init", this.navActive);
    },
    navClick(index) {
      this.navActive = index;
      this.pageNum = 1;
      this.showLoading = true;
      this.query("init");
    },
    clear() {
      this.sizer_city = "";
      this.sizerSelect = [];
      this.appointmentData = this.appointmentData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.sexData = this.sexData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.chargeData = this.chargeData.map((item, index) => {
        item.ispick = index != 0 ? false : true;
        return item;
      });
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
    select_charge_tag(row) {
      this.chargeData.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_identity_tag(row) {
      this.identityData.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_notice_tag(row) {
      this.noticeData.map((item) => {
        item.ispick = false;
      });
      row.ispick = true;
    },
    submit() {
      let facedata = this.appointmentData.filter((item) => {
        return item.ispick;
      });
      let sexdata = this.sexData.filter((item) => {
        return item.ispick;
      });
      let paymentdata = this.chargeData.filter((item) => {
        return item.ispick;
      });
      this.filter = {
        face_province_id: this.sizerSelect[0]
          ? Number(this.multiArray[0][this.sizerSelect[0]].code)
          : 0,
        face_city_id: this.sizerSelect[1]
          ? Number(this.multiArray[1][this.sizerSelect[1]].code)
          : 0,
        face_cid: facedata[0].cid,
        sex: sexdata[0].value == 100 ? 100 : sexdata[0].value,
        payment_type: paymentdata[0].key == "all" ? 0 : paymentdata[0].key,
      };
      this.showModal = false;
      this.pageNum = 1;
      this.query("init");
    },
  },
  mounted() {
    this.globalData = this.globalData;
  },
};
</script>

<style lang="scss" scoped></style>
