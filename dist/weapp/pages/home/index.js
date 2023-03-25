(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/home/index.vue":
/*!********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/home/index.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5b685826&scoped=true& */ "./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/home/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "5b685826",
  "0f729374"
  
)

component.options.__file = "src/pages/home/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/loading/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/loading/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/components/loading/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "loading",
  props: {
    showLoading: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/pagenav/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pagenav/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/components/pagenav/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "pagenav",
  data: function data() {
    return {
      showModal: false,
      tonggaoShowModal: false,
      zuopinShowModal: false,
      navActive: 0,
      headCurrent: 0,
      headNavList: [{
        name: "约拍",
        value: 0
      }, {
        name: "通告",
        value: 1
      }, {
        name: "作品",
        value: 2
      }],
      navData: [// {
        //   value: "推荐",
        // },
        // {
        //   value: "最新",
        // },
      ],
      chargeData: [],
      sizer_num: [],
      appointmentData: [{
        cid: 0,
        name: "全部",
        ispick: true
      }, {
        cid: 20001,
        name: "摄影师",
        ispick: false
      }, {
        cid: 20002,
        name: "摄像师",
        ispick: false
      }, {
        cid: 20003,
        name: "造型师",
        ispick: false
      }, {
        cid: 20007,
        name: "经纪人",
        ispick: false
      }, {
        cid: 20011,
        name: "导演",
        ispick: false
      }, {
        cid: 20012,
        name: "商家",
        ispick: false
      }],
      sexData: [{
        name: "全部",
        value: 100,
        ispick: true
      }, {
        name: "男",
        value: 1,
        ispick: false
      }, {
        name: "女",
        value: 0,
        ispick: false
      }],
      identityData: [],
      noticeData: []
    };
  },
  props: {
    pageActive: {
      type: Number,
      default: 0
    },
    navList: {
      type: Array,
      default: []
    },
    chargeList: {
      type: Array,
      default: []
    },
    identityList: {
      type: Array,
      default: []
    },
    noticeList: {
      type: Array,
      default: []
    }
  },
  watch: {
    pageActive: {
      handler: function handler(newVal, oldVal) {
        this.active = newVal;
      },
      deep: true,
      immediate: true
    },
    navList: {
      handler: function handler(newVal, oldVal) {
        this.navData = newVal;
      },
      deep: true,
      immediate: true
    },
    chargeList: {
      handler: function handler(newVal, oldVal) {
        this.chargeData = newVal;
      },
      deep: true,
      immediate: true
    },
    identityList: {
      handler: function handler(newVal, oldVal) {
        this.identityData = newVal;
      },
      deep: true,
      immediate: true
    },
    noticeList: {
      handler: function handler(newVal, oldVal) {
        this.noticeData = newVal;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    close: function close() {
      this.showModal = false;
    },
    tonggaoClose: function tonggaoClose() {
      this.tonggaoShowModal = false;
    },
    zuopinClose: function zuopinClose() {
      this.zuopinShowModal = false;
    },
    screen: function screen() {
      if (this.headCurrent == 0) {
        this.showModal = true;
      } else if (this.headCurrent == 1) {
        this.tonggaoShowModal = true;
      } else if (this.headCurrent == 2) {
        this.zuopinShowModal = true;
      }
    },
    headNavClick: function headNavClick(index) {
      this.headCurrent = index;
      this.$emit("pageNavClick", index); //   this.$emit("query", "init", this.navActive);
      //   this.$emit("noticeQuery", "init", this.navActive);
      //   this.$emit("zuopinQuery", "init", this.navActive);
    },
    navClick: function navClick(index) {
      this.navActive = index;
      this.pageNum = 1;
      this.showLoading = true;
      this.query("init");
    },
    clear: function clear() {
      this.sizer_city = "";
      this.sizerSelect = [];
      this.appointmentData = this.appointmentData.map(function (item, index) {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.sexData = this.sexData.map(function (item, index) {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.chargeData = this.chargeData.map(function (item, index) {
        item.ispick = index != 0 ? false : true;
        return item;
      });
    },
    select_tag: function select_tag(row) {
      this.appointmentData.map(function (item) {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_sex_tag: function select_sex_tag(row) {
      this.sexData.map(function (item) {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_charge_tag: function select_charge_tag(row) {
      this.chargeData.map(function (item) {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_identity_tag: function select_identity_tag(row) {
      this.identityData.map(function (item) {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_notice_tag: function select_notice_tag(row) {
      this.noticeData.map(function (item) {
        item.ispick = false;
      });
      row.ispick = true;
    },
    submit: function submit() {
      var facedata = this.appointmentData.filter(function (item) {
        return item.ispick;
      });
      var sexdata = this.sexData.filter(function (item) {
        return item.ispick;
      });
      var paymentdata = this.chargeData.filter(function (item) {
        return item.ispick;
      });
      this.filter = {
        face_province_id: this.sizerSelect[0] ? Number(this.multiArray[0][this.sizerSelect[0]].code) : 0,
        face_city_id: this.sizerSelect[1] ? Number(this.multiArray[1][this.sizerSelect[1]].code) : 0,
        face_cid: facedata[0].cid,
        sex: sexdata[0].value == 100 ? 100 : sexdata[0].value,
        payment_type: paymentdata[0].key == "all" ? 0 : paymentdata[0].key
      };
      this.showModal = false;
      this.pageNum = 1;
      this.query("init");
    }
  },
  mounted: function mounted() {
    this.globalData = this.globalData;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/tonggaoList/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tonggaoList/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/components/tonggaoList/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "tonggaoList",
  props: {
    baseData: {
      type: Array,
      default: []
    }
  },
  watch: {
    baseData: {
      handler: function handler(newVal, oldVal) {
        this.list = newVal;
      },
      deep: true,
      immediate: true
    }
  },
  data: function data() {
    return {
      list: []
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/yuepaiList/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/yuepaiList/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/components/yuepaiList/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "yuepaiList",
  props: {
    baseData: {
      type: Array,
      default: []
    }
  },
  watch: {
    baseData: {
      handler: function handler(newVal, oldVal) {
        this.list = newVal;
      },
      deep: true,
      immediate: true
    }
  },
  data: function data() {
    return {
      list: []
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/zuopinList/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/zuopinList/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/components/zuopinList/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "zuopinList",
  props: {
    baseData: {
      type: Array,
      default: []
    }
  },
  watch: {
    baseData: {
      handler: function handler(newVal, oldVal) {
        this.list = newVal;
      },
      deep: true,
      immediate: true
    }
  },
  data: function data() {
    return {
      list: []
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/pages/home/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_tonggaoList_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tonggaoList/index.vue */ "./src/components/tonggaoList/index.vue");
/* harmony import */ var _components_yuepaiList_index_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/yuepaiList/index.vue */ "./src/components/yuepaiList/index.vue");
/* harmony import */ var _components_zuopinList_index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/zuopinList/index.vue */ "./src/components/zuopinList/index.vue");
/* harmony import */ var _components_pagenav_index_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/pagenav/index.vue */ "./src/components/pagenav/index.vue");
/* harmony import */ var _components_loading_index_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loading/index.vue */ "./src/components/loading/index.vue");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/index */ "./src/api/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  name: "home",
  data: function data() {
    return {
      showLoading: false,
      loading: false,
      topNum: 0,
      swiperheight: 0,
      tonggaoSwiperHeight: 0,
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
      navShow: false,
      inviteRecommendList: [],
      noticeRecommendList: [],
      navList: [],
      chargeData: [],
      identityData: [],
      noticeData: [],
      componetsNav: [{
        name: "约拍",
        desc: "你约我拍"
      }, {
        name: "通告",
        desc: "招募公告"
      }, {
        name: "作品",
        desc: "佳作赏欣"
      }],
      yuepaiList: [],
      noticeList: [],
      zuopinList: [],
      city_filter: {},
      isclick: false
    };
  },
  components: {
    TonggaoList: _components_tonggaoList_index_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    YuepaiList: _components_yuepaiList_index_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    ZuopinList: _components_zuopinList_index_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    Pagenav: _components_pagenav_index_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    loading: _components_loading_index_vue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]
  },
  methods: {
    previewImage: function previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src,
        // 图片的地址url
        urls: urls // 预览的地址url

      });
    },
    componetClick: function componetClick(index) {
      if (this.componetActive != index) {
        this.componetActive = index;
        this.pageNum = 1;
        this.switchQuery(index);
      }
    },
    pageNavClick: function pageNavClick(index) {
      this.pageNum = 1;
      this.componetActive = index;
      this.isclick = true;
      this.showLoading = true;
      this.switchQuery(index);
    },
    switchQuery: function switchQuery(index) {
      switch (index) {
        case 0:
          this.publicConfig({
            type: ["invite_filter", "payment_type"]
          }, true);
          break;

        case 1:
          this.noticeFilter("");
          this.publicNoticeConfig({
            type: ["notice_filter"]
          }, true);
          break;

        case 2:
          this.getCareer("");
          this.publicPhotoConfig({
            type: ["photo_filter"]
          }, true);
          break;
      }
    },
    query: function query(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      this.inviteList({
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navList.length ? this.navList[navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize
      }, type, scroll);
    },
    noticeQuery: function noticeQuery(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      var params = {
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navList.length ? this.navList[navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize
      };
      this.queryNoticeList(params, type, scroll);
    },
    zuopinQuery: function zuopinQuery(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      var params = {
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navList.length ? this.navList[navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize
      };
      this.queryPhotoList(params, type, scroll);
    },
    swiperChange: function swiperChange(e) {
      //创建节点选择器,动态获取面板高度设置动画高度
      var query = wx.createSelectorQuery();
      var id = "#recommend-box" + e.detail.current;
      var that = this;
      query.select(id).boundingClientRect();
      query.exec(function (res) {
        //res[0].height 为获取的收缩栏面板展开部分的高度
        that.swiperheight = res[0].height;
      });
    },
    tonggaoSwiperChange: function tonggaoSwiperChange(e) {
      //创建节点选择器,动态获取面板高度设置动画高度
      var query = wx.createSelectorQuery();
      var id = "#tonggao-recommend-box" + e.detail.current;
      var that = this;
      query.select(id).boundingClientRect();
      query.exec(function (res) {
        //res[0].height 为获取的收缩栏面板展开部分的高度
        that.tonggaoSwiperHeight = res[0].height;
      });
    },
    // 加载更多
    onMore: function onMore() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading(); //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框

      wx.showLoading({
        title: "数据加载中..."
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
    inviteList: function inviteList(params, type, scroll) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data, scrollTop, fixedHeight, query;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* inviteList */ "D"])(params);

              case 3:
                res = _context.sent;
                //隐藏loading 提示框
                _this.showLoading = false;
                wx.hideLoading(); //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context.next = 13;
                  break;
                }

                _this.yuepaiList = res.data.data.items;
                _this.loading = true;
                _context.next = 21;
                break;

              case 13:
                if (!(type == "more")) {
                  _context.next = 21;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context.next = 18;
                  break;
                }

                errortip("没有更多数据了～");
                _this.loading = true;
                return _context.abrupt("return", false);

              case 18:
                data = res.data.data.items;
                _this.yuepaiList = _this.yuepaiList.concat(data);
                _this.loading = true;

              case 21:
                if (scroll) {
                  scrollTop = 0;
                  fixedHeight = 0;
                  query = wx.createSelectorQuery();
                  query.selectViewport().scrollOffset();
                  query.exec(function (res) {
                    scrollTop = res[0].scrollTop; //res[0].scrollTop距顶部的距离
                  });
                  query.select(".nav_fixed").boundingClientRect(function (res) {
                    fixedHeight = res.height;
                    console.log(fixedHeight, "fixedHeight=====");
                  });
                  query.select("#list").boundingClientRect(function (res) {
                    console.log("距顶部的距离：", scrollTop, "  move1距当前页面的距离：", res.top);
                    wx.pageScrollTo({
                      scrollTop: scrollTop + res.top - fixedHeight - _this.globalData.navHeight,
                      duration: 0
                    });
                  }).exec();
                  _this.isclick = false;
                }

                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](0);

                if (_context.t0.data.error_code == 11020) {
                  _this.visible = true;
                  _this.isclick = false;
                  console.log(_context.t0, "error");
                }

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 24]]);
      }))();
    },
    inviteAdviseList: function inviteAdviseList(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* inviteAdviseList */ "A"])(params);

              case 3:
                res = _context2.sent;
                _this2.inviteRecommendList = res.data.data.items;
                setTimeout(function () {
                  // 初始化高度
                  var query = wx.createSelectorQuery();
                  query.select("#recommend-box0").boundingClientRect();
                  query.exec(function (res) {
                    _this2.swiperheight = res[0].height;
                  });
                }, 100);
                _context2.next = 10;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    noticeAdviseList: function noticeAdviseList(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* noticeAdviseList */ "O"])(params);

              case 3:
                res = _context3.sent;
                _this3.noticeRecommendList = res.data.data.items;
                setTimeout(function () {
                  // 初始化高度
                  var query = wx.createSelectorQuery();
                  query.select("#tonggao-recommend-box0").boundingClientRect();
                  query.exec(function (res) {
                    _this3.tonggaoSwiperHeight = res[0].height;
                  });
                }, 100);
                _context3.next = 10;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    notifyNumber: function notifyNumber(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* notifyNumber */ "T"])(params);

              case 3:
                res = _context4.sent;

                if (res.data.data.is_notify_warn) {
                  wx.showTabBarRedDot({
                    index: 2
                  });
                } else {
                  wx.hideTabBarRedDot({
                    index: 2
                  });
                }

                _context4.next = 9;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    isSign: function isSign(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee5() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* isSign */ "F"])(params);

              case 3:
                res = _context5.sent;
                _this4.is_today_sign = res.data.data.is_today_sign;
                _context5.next = 9;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }))();
    },
    publicConfig: function publicConfig(params, scroll) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee6() {
        var res, arr, _arr;

        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* publicConfig */ "bb"])(params);

              case 3:
                res = _context6.sent;
                arr = [];
                _arr = [];
                res.data.data.map(function (item, index) {
                  if (item.type == "invite_filter") {
                    arr.push(item);
                  } else if (item.type == "payment_type") {
                    item.ispick = false;

                    _arr.push(item);
                  }
                });
                _this5.navList = arr;

                _arr.unshift({
                  key: "all",
                  name: "全部",
                  value: "全部",
                  ispick: true
                });

                _this5.chargeData = _arr;
                _this5.select_filter = {
                  face_province_id: 0,
                  face_city_id: 0,
                  face_cid: 0,
                  sex: 10,
                  payment_type: 0
                };

                _this5.query("init", _this5.$refs["pageNavRef"].navActive, scroll);

                _context6.next = 16;
                break;

              case 14:
                _context6.prev = 14;
                _context6.t0 = _context6["catch"](0);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 14]]);
      }))();
    },
    publicNoticeConfig: function publicNoticeConfig(params, scroll) {
      var _this6 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee7() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* publicConfig */ "bb"])(params);

              case 3:
                res = _context7.sent;
                _this6.navList = res.data.data;
                _this6.select_filter = {
                  first_code: "",
                  payment_type: 0,
                  career_cid: 0,
                  face_cid: 0,
                  face_province_id: 0
                };

                _this6.noticeQuery("init", _this6.$refs["pageNavRef"].navActive, scroll);

                _context7.next = 11;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](0);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 9]]);
      }))();
    },
    noticeFilter: function noticeFilter(params) {
      var _this7 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee8() {
        var res, data, arr, arr1, _arr2;

        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* noticeFilter */ "P"])(params);

              case 3:
                res = _context8.sent;
                data = res.data.data;
                arr = [];
                arr1 = [];
                _arr2 = [];
                arr = data.career.map(function (item) {
                  item.ispick = false;
                  return item;
                });
                arr1 = data.first_code.map(function (item) {
                  item.ispick = false;
                  return item;
                });
                _arr2 = data.payment_type.map(function (item) {
                  item.ispick = false;
                  return item;
                });
                arr.unshift({
                  cid: "all",
                  name: "全部",
                  value: "全部",
                  ispick: true
                });
                arr1.unshift({
                  key: "all",
                  value: "全部",
                  ispick: true
                });

                _arr2.unshift({
                  key: "all",
                  value: "全部",
                  ispick: true
                });

                _this7.identityData = arr;
                _this7.noticeData = arr1;
                _this7.chargeData = _arr2;
                _context8.next = 21;
                break;

              case 19:
                _context8.prev = 19;
                _context8.t0 = _context8["catch"](0);

              case 21:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 19]]);
      }))();
    },
    publicPhotoConfig: function publicPhotoConfig(params, scroll) {
      var _this8 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee9() {
        var res, arr;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* publicConfig */ "bb"])(params);

              case 3:
                res = _context9.sent;
                arr = [];
                res.data.data.map(function (item, index) {
                  if (item.type == "photo_filter") {
                    arr.push(item);
                  } else if (item.type == "payment_type") {
                    item.ispick = false;
                    arr2.push(item);
                  }
                });
                _this8.navList = arr;
                _this8.select_filter = {
                  face_province_id: 0,
                  face_cid: 0,
                  career_cid: 0,
                  sex: 10
                };

                _this8.zuopinQuery("init", _this8.$refs["pageNavRef"].navActive, scroll);

                _context9.next = 13;
                break;

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](0);

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 11]]);
      }))();
    },
    getCareer: function getCareer(params) {
      var _this9 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee10() {
        var res, data, arr;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* getCareer */ "w"])(params);

              case 3:
                res = _context10.sent;
                data = res.data.data;
                arr = [];
                arr = data.career_list.map(function (item) {
                  item.ispick = false;
                  return item;
                });
                arr.unshift({
                  cid: "all",
                  role: "全部",
                  value: "全部",
                  ispick: true
                });
                _this9.identityData = arr;
                _context10.next = 13;
                break;

              case 11:
                _context10.prev = 11;
                _context10.t0 = _context10["catch"](0);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 11]]);
      }))();
    },
    queryNoticeList: function queryNoticeList(params, type, scroll) {
      var _this10 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee11() {
        var res, data, scrollTop, fixedHeight, query;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* noticeList */ "R"])(params);

              case 3:
                res = _context11.sent;
                //隐藏loading 提示框
                _this10.showLoading = false;
                wx.hideLoading(); //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context11.next = 13;
                  break;
                }

                _this10.noticeList = res.data.data.items;
                _this10.loading = true;
                _context11.next = 21;
                break;

              case 13:
                if (!(type == "more")) {
                  _context11.next = 21;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context11.next = 18;
                  break;
                }

                errortip("没有更多数据了～");
                _this10.loading = true;
                return _context11.abrupt("return", false);

              case 18:
                data = res.data.data.items;
                _this10.noticeList = _this10.noticeList.concat(data);
                _this10.loading = true;

              case 21:
                if (scroll) {
                  scrollTop = 0;
                  fixedHeight = 0;
                  query = wx.createSelectorQuery();
                  query.selectViewport().scrollOffset();
                  query.exec(function (res) {
                    scrollTop = res[0].scrollTop; //res[0].scrollTop距顶部的距离
                  });
                  query.select(".nav_fixed").boundingClientRect(function (res) {
                    fixedHeight = res.height;
                    console.log(fixedHeight, "fixedHeight=======");
                  });
                  query.select("#list").boundingClientRect(function (res) {
                    console.log("距顶部的距离：", scrollTop, "  move1距当前页面的距离：", res.top);
                    wx.pageScrollTo({
                      scrollTop: scrollTop + res.top - fixedHeight - _this10.globalData.navHeight,
                      duration: 0
                    });
                  }).exec();
                }

                _this10.isclick = false;
                _context11.next = 28;
                break;

              case 25:
                _context11.prev = 25;
                _context11.t0 = _context11["catch"](0);

                if (_context11.t0.data.error_code == 11020) {
                  _this10.visible = true;
                  _this10.isclick = false;
                  console.log(_context11.t0, "error");
                }

              case 28:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 25]]);
      }))();
    },
    queryPhotoList: function queryPhotoList(params, type, scroll) {
      var _this11 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee12() {
        var res, data, scrollTop, fixedHeight, query;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* photoList */ "X"])(params);

              case 3:
                res = _context12.sent;
                //隐藏loading 提示框
                _this11.showLoading = false;
                wx.hideLoading(); //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context12.next = 13;
                  break;
                }

                _this11.zuopinList = res.data.data.items;
                _this11.loading = true;
                _context12.next = 21;
                break;

              case 13:
                if (!(type == "more")) {
                  _context12.next = 21;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context12.next = 18;
                  break;
                }

                errortip("没有更多数据了～");
                _this11.loading = true;
                return _context12.abrupt("return", false);

              case 18:
                data = res.data.data.items;
                _this11.zuopinList = _this11.zuopinList.concat(data);
                _this11.loading = true;

              case 21:
                if (scroll) {
                  scrollTop = 0;
                  fixedHeight = 0;
                  query = wx.createSelectorQuery();
                  query.selectViewport().scrollOffset();
                  query.exec(function (res) {
                    scrollTop = res[0].scrollTop; //res[0].scrollTop距顶部的距离
                  });
                  query.select(".nav_fixed").boundingClientRect(function (res) {
                    fixedHeight = res.height;
                    console.log(fixedHeight, "fixedHeight======");
                  });
                  query.select("#list").boundingClientRect(function (res) {
                    console.log("距顶部的距离：", scrollTop, "  move1距当前页面的距离：", res.top);
                    wx.pageScrollTo({
                      scrollTop: scrollTop + res.top - fixedHeight - _this11.globalData.navHeight,
                      duration: 0
                    });
                  }).exec();
                  _this11.isclick = false;
                }

                _context12.next = 27;
                break;

              case 24:
                _context12.prev = 24;
                _context12.t0 = _context12["catch"](0);

                if (_context12.t0.data.error_code == 11020) {
                  _this11.visible = true;
                  _this11.isclick = false;
                  console.log(_context12.t0, "error");
                }

              case 27:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[0, 24]]);
      }))();
    }
  },
  onPageScroll: function onPageScroll(e) {
    var _this12 = this;

    this.scrollTop = e.scrollTop;

    if (!this.isclick) {
      var query = wx.createSelectorQuery();
      query.select(".componets").boundingClientRect(function (rect) {
        var top = rect.top;

        if (top <= 50) {
          _this12.navShow = true;
          _this12.autoplay = false;
        } else {
          _this12.navShow = false;
          _this12.autoplay = true;
        }
      }).exec();
    }
  },
  //触底加载
  onReachBottom: function onReachBottom() {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;

    if (this.loading && !this.isclick) {
      this.onMore();
    }
  },
  created: function created() {
    this.globalData = this.globalData; // 约拍推荐

    this.inviteAdviseList({}); // 通告推荐

    this.noticeAdviseList({}); // 消息通知红点

    this.notifyNumber(""); // 是否签到

    this.isSign("");
    this.publicConfig({
      type: ["invite_filter", "payment_type"]
    }); // this.publicNoticeConfig({
    //   type: ["notice_filter"],
    // });
    // this.noticeFilter("");
    // this.publicPhotoConfig({
    //   type: ["photo_filter"],
    // });
    // this.getCareer("");
  },
  onLoad: function onLoad(options) {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/loading/index.vue?vue&type=template&id=f4b50242&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/loading/index.vue?vue&type=template&id=f4b50242&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showLoading,
          expression: "showLoading",
        },
      ],
      staticClass: "layout-loading",
    },
    [
      _c("view", { staticClass: "layout-content" }, [
        _c("view", { staticClass: "loader-animation" }, [
          _c("view", { staticClass: "animation-box" }, [
            _c("text"),
            _c("text"),
            _c("text"),
            _c("text"),
            _c("text"),
          ]),
          _c("view", { staticClass: "loading-label" }, [_vm._v("加载中")]),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pagenav/index.vue?vue&type=template&id=6d454fd7&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pagenav/index.vue?vue&type=template&id=6d454fd7&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: "pagenav" }, [
    _c(
      "view",
      {
        staticClass: "nav_fixed",
        style: { marginTop: _vm.globalData.navHeight + "px" },
      },
      [
        _c(
          "view",
          { staticClass: "head_nav" },
          _vm._l(_vm.headNavList, function (item, index) {
            return _c(
              "text",
              {
                key: index,
                staticClass: "head_nav_item",
                class: index == _vm.headCurrent ? "acitve" : "",
                on: {
                  tap: function ($event) {
                    return _vm.headNavClick(index)
                  },
                },
              },
              [_vm._v(" " + _vm._s(item.name) + " ")]
            )
          }),
          0
        ),
        _c(
          "view",
          { staticClass: "nav_list" },
          [
            _c(
              "scroll-view",
              {
                staticClass: "swiper_tab",
                attrs: { enhanced: true, scrollX: true },
              },
              [
                _c(
                  "view",
                  { staticClass: "nav_list_ct" },
                  _vm._l(_vm.navData, function (item, index) {
                    return _c(
                      "text",
                      {
                        key: index,
                        staticClass: "nav_item",
                        class: _vm.navActive == index ? "nav_active" : "",
                        on: {
                          tap: function ($event) {
                            return _vm.navClick(index)
                          },
                        },
                      },
                      [_vm._v(_vm._s(item.value))]
                    )
                  }),
                  0
                ),
              ]
            ),
            _c(
              "view",
              { staticClass: "sizer_block ub", on: { tap: _vm.screen } },
              [
                _c("view", { staticClass: "gradient" }),
                _c(
                  "view",
                  {
                    staticClass: "sizer ub",
                    class: _vm.sizer_num.length ? "is_sizer" : "",
                  },
                  [
                    _c("view", { staticClass: "ub" }, [
                      _c("view", [_vm._v("筛选")]),
                    ]),
                    _c("view", { staticClass: "sizer_img" }, [
                      _vm.sizer_num.length
                        ? _c("image", {
                            attrs: {
                              src: "https://yuepai-oss.qubeitech.com/static/images/common/sizered.png",
                            },
                          })
                        : _c("image", {
                            attrs: {
                              src: "https://yuepai-oss.qubeitech.com/static/images/common/sizer.png",
                            },
                          }),
                    ]),
                  ]
                ),
              ]
            ),
          ],
          1
        ),
      ]
    ),
    _c(
      "view",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showModal,
            expression: "showModal",
          },
        ],
        staticClass: "select_block",
        on: { tap: _vm.close },
      },
      [
        _c(
          "view",
          {
            staticClass: "select_bg",
            on: {
              tap: function ($event) {
                $event.stopPropagation()
              },
            },
          },
          [
            _c("view", {
              staticClass: "statusbar",
              style: { height: _vm.globalData.navHeight + "px" },
            }),
            _c("view", { staticClass: "select_item" }, [
              _c("view", { staticClass: "select_item_title" }, [
                _vm._v("约拍对象"),
              ]),
              _c(
                "view",
                _vm._l(_vm.appointmentData, function (item, index) {
                  return _c(
                    "text",
                    {
                      key: index,
                      staticClass: "tag_item",
                      class: item.ispick ? "tag_itemed" : "",
                      on: {
                        tap: function ($event) {
                          return _vm.select_tag(item)
                        },
                      },
                    },
                    [_vm._v(" " + _vm._s(item.name) + " ")]
                  )
                }),
                0
              ),
            ]),
            _c("view", { staticClass: "select_item" }, [
              _c("view", { staticClass: "select_item_title" }, [
                _vm._v("发起人性别"),
              ]),
              _c(
                "view",
                _vm._l(_vm.sexData, function (item, index) {
                  return _c(
                    "text",
                    {
                      key: index,
                      staticClass: "tag_item",
                      class: item.ispick ? "tag_itemed" : "",
                      on: {
                        tap: function ($event) {
                          return _vm.select_sex_tag(item)
                        },
                      },
                    },
                    [_vm._v(" " + _vm._s(item.name) + " ")]
                  )
                }),
                0
              ),
            ]),
            _c("view", { staticClass: "select_item" }, [
              _c("view", { staticClass: "select_item_title" }, [
                _vm._v("收费模式"),
              ]),
              _c(
                "view",
                _vm._l(_vm.chargeData, function (item, index) {
                  return _c(
                    "text",
                    {
                      key: index,
                      staticClass: "tag_item",
                      class: item.ispick ? "tag_itemed" : "",
                      on: {
                        tap: function ($event) {
                          return _vm.select_charge_tag(item)
                        },
                      },
                    },
                    [_vm._v(" " + _vm._s(item.value) + " ")]
                  )
                }),
                0
              ),
            ]),
            _c("view", { staticClass: "select_button" }, [
              _c("text", { staticClass: "clear", on: { tap: _vm.clear } }, [
                _vm._v("清除"),
              ]),
              _c("text", { staticClass: "confirm", on: { tap: _vm.submit } }, [
                _vm._v("确认"),
              ]),
            ]),
          ]
        ),
      ]
    ),
    _c(
      "view",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.tonggaoShowModal,
            expression: "tonggaoShowModal",
          },
        ],
        staticClass: "select_block",
        on: { tap: _vm.tonggaoClose },
      },
      [
        _c(
          "view",
          {
            staticClass: "select_bg",
            on: {
              tap: function ($event) {
                $event.stopPropagation()
              },
            },
          },
          [
            _c("view", {
              staticClass: "statusbar",
              style: { height: _vm.globalData.navHeight + "px" },
            }),
            _c("view", { staticClass: "select_item" }, [
              _c("view", { staticClass: "select_item_title" }, [
                _vm._v("招募身份"),
              ]),
              _c(
                "view",
                _vm._l(_vm.identityData, function (item, index) {
                  return _c(
                    "text",
                    {
                      key: index,
                      staticClass: "tag_item",
                      class: item.ispick ? "tag_itemed" : "",
                      on: {
                        tap: function ($event) {
                          return _vm.select_identity_tag(item)
                        },
                      },
                    },
                    [_vm._v(" " + _vm._s(item.name) + " ")]
                  )
                }),
                0
              ),
            ]),
            _c("view", { staticClass: "select_item" }, [
              _c("view", { staticClass: "select_item_title" }, [
                _vm._v("通告类型"),
              ]),
              _c(
                "view",
                _vm._l(_vm.noticeData, function (item, index) {
                  return _c(
                    "text",
                    {
                      key: index,
                      staticClass: "tag_item",
                      class: item.ispick ? "tag_itemed" : "",
                      on: {
                        tap: function ($event) {
                          return _vm.select_notice_tag(item)
                        },
                      },
                    },
                    [_vm._v(" " + _vm._s(item.value) + " ")]
                  )
                }),
                0
              ),
            ]),
            _c("view", { staticClass: "select_item" }, [
              _c("view", { staticClass: "select_item_title" }, [
                _vm._v("收费模式"),
              ]),
              _c(
                "view",
                _vm._l(_vm.chargeData, function (item, index) {
                  return _c(
                    "text",
                    {
                      key: index,
                      staticClass: "tag_item",
                      class: item.ispick ? "tag_itemed" : "",
                      on: {
                        tap: function ($event) {
                          return _vm.select_charge_tag(item)
                        },
                      },
                    },
                    [_vm._v(" " + _vm._s(item.value) + " ")]
                  )
                }),
                0
              ),
            ]),
            _c("view", { staticClass: "select_button" }, [
              _c("text", { staticClass: "clear", on: { tap: _vm.clear } }, [
                _vm._v("清除"),
              ]),
              _c("text", { staticClass: "confirm", on: { tap: _vm.submit } }, [
                _vm._v("确认"),
              ]),
            ]),
          ]
        ),
      ]
    ),
    _c(
      "view",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.zuopinShowModal,
            expression: "zuopinShowModal",
          },
        ],
        staticClass: "select_block",
        on: { tap: _vm.zuopinClose },
      },
      [
        _c(
          "view",
          {
            staticClass: "select_bg",
            on: {
              tap: function ($event) {
                $event.stopPropagation()
              },
            },
          },
          [
            _c("view", {
              staticClass: "statusbar",
              style: { height: _vm.globalData.navHeight + "px" },
            }),
            _c("view", { staticClass: "select_item" }, [
              _c("view", { staticClass: "select_item_title" }, [
                _vm._v("发布人身份"),
              ]),
              _c(
                "view",
                _vm._l(_vm.identityData, function (item, index) {
                  return _c(
                    "text",
                    {
                      key: index,
                      staticClass: "tag_item",
                      class: item.ispick ? "tag_itemed" : "",
                      on: {
                        tap: function ($event) {
                          return _vm.select_identity_tag(item)
                        },
                      },
                    },
                    [_vm._v(" " + _vm._s(item.role) + " ")]
                  )
                }),
                0
              ),
            ]),
            _c("view", { staticClass: "select_item" }, [
              _c("view", { staticClass: "select_item_title" }, [
                _vm._v("发布人性别"),
              ]),
              _c(
                "view",
                _vm._l(_vm.sexData, function (item, index) {
                  return _c(
                    "text",
                    {
                      key: index,
                      staticClass: "tag_item",
                      class: item.ispick ? "tag_itemed" : "",
                      on: {
                        tap: function ($event) {
                          return _vm.select_sex_tag(item)
                        },
                      },
                    },
                    [_vm._v(" " + _vm._s(item.name) + " ")]
                  )
                }),
                0
              ),
            ]),
            _c("view", { staticClass: "select_button" }, [
              _c("text", { staticClass: "clear", on: { tap: _vm.clear } }, [
                _vm._v("清除"),
              ]),
              _c("text", { staticClass: "confirm", on: { tap: _vm.submit } }, [
                _vm._v("确认"),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/tonggaoList/index.vue?vue&type=template&id=04d931fc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tonggaoList/index.vue?vue&type=template&id=04d931fc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "componets-list" },
    _vm._l(_vm.list, function (item, index) {
      return _vm.list.length
        ? _c("view", { key: index }, [
            _c("view", { staticClass: "componets-box" }, [
              _c("view", { staticClass: "tonggao-recommend" }, [
                _c("view", { staticClass: "tonggao-recommend-top" }, [
                  _c(
                    "view",
                    { staticClass: "tonggao-info-title" },
                    [
                      _vm._l(
                        item.topic.headline.tag,
                        function (tagitem, tagindex) {
                          return _c(
                            "view",
                            { key: tagindex, staticClass: "recommend-label" },
                            [_vm._v(" " + _vm._s(tagitem) + " ")]
                          )
                        }
                      ),
                      _c("view", { staticClass: "tonggao-txt" }, [
                        _vm._v(" " + _vm._s(item.topic.headline.title)),
                      ]),
                    ],
                    2
                  ),
                ]),
                _c("view", { staticClass: "tonggao-recommend-bt" }, [
                  item.details.media.file_type == "picture"
                    ? _c("view", { staticClass: "tonggao-recommend-img" }, [
                        _c("image", {
                          attrs: {
                            src: item.details.media.cover[0],
                            mode: "aspectFill",
                          },
                        }),
                      ])
                    : _vm._e(),
                  _c("view", { staticClass: "tonggao-recommend-info" }, [
                    _c("view", { staticClass: "tonggao-info-desc" }, [
                      _vm._v(" " + _vm._s(item.details.summary)),
                    ]),
                    _c(
                      "view",
                      { staticClass: "tonggao-tags" },
                      _vm._l(
                        item.subtitle.first_label,
                        function (tag, tagIndex) {
                          return _c(
                            "view",
                            { key: tagIndex, staticClass: "tag-item" },
                            [_vm._v(_vm._s(tag.name))]
                          )
                        }
                      ),
                      0
                    ),
                    _c("view", { staticClass: "tonggao-recommend-price" }, [
                      _c("view", { staticClass: "pirce" }, [
                        _vm._v(" " + _vm._s(item.topic.payment.title)),
                      ]),
                      _c("view", { staticClass: "recommend-btn" }, [
                        _vm._v("立即报名"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _c("view", { staticClass: "tonggao-bottom" }, [
                _c("view", { staticClass: "tonggao-head" }, [
                  _c("image", {
                    attrs: {
                      src: item.author.avatar
                        ? item.author.avatar
                        : "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
                    },
                  }),
                  _vm._v(" " + _vm._s(item.author.nickname) + " "),
                ]),
                _c("view", { staticClass: "tonggao-yuepai" }, [
                  _c("image", {
                    attrs: {
                      src: __webpack_require__(/*! ../../assets/images/user/index/yuepai.png */ "./src/assets/images/user/index/yuepai.png"),
                    },
                  }),
                  _vm._v(" " + _vm._s(item.statistic.invite_cnt) + " "),
                ]),
                _c("view", { staticClass: "tonggao-read" }, [
                  _c("image", {
                    attrs: { src: __webpack_require__(/*! ../../assets/images/eyes.png */ "./src/assets/images/eyes.png") },
                  }),
                  _vm._v(" " + _vm._s(item.statistic.read_cnt) + " "),
                ]),
              ]),
            ]),
          ])
        : _c("view", { staticClass: "none-data" }, [
            _c("image", {
              staticClass: "none-img",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/common/none.png",
                mode: "aspectFill",
              },
            }),
            _c("view", [_vm._v("当前暂无数据哦～")]),
          ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/yuepaiList/index.vue?vue&type=template&id=18645680&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/yuepaiList/index.vue?vue&type=template&id=18645680&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "componets-list" },
    _vm._l(_vm.list, function (item, index) {
      return _vm.list.length
        ? _c("view", [
            _c("view", { staticClass: "componets-box" }, [
              _c("view", { staticClass: "list_top" }, [
                _c("view", { staticClass: "list_top_left" }, [
                  _c("image", {
                    staticClass: "avatar",
                    attrs: {
                      src: item.author.avatar
                        ? item.author.avatar
                        : "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
                    },
                  }),
                  _c("view", { staticClass: "list_info" }, [
                    _c(
                      "view",
                      { staticClass: "list_name" },
                      [
                        _vm._v(" " + _vm._s(item.author.nickname) + " "),
                        item.author.sex !== null
                          ? _c("block", [
                              item.author.sex == 1
                                ? _c("image", {
                                    staticClass: "list_sex",
                                    attrs: {
                                      src: "https://yuepai-oss.qubeitech.com/static/images/nan.png",
                                    },
                                  })
                                : _vm._e(),
                              item.author.sex == 0
                                ? _c("image", {
                                    staticClass: "list_sex",
                                    attrs: {
                                      src: "https://yuepai-oss.qubeitech.com/static/images/nv.png",
                                    },
                                  })
                                : _vm._e(),
                            ])
                          : _vm._e(),
                      ],
                      1
                    ),
                    _c("view", { staticClass: "list_p" }, [
                      _c("text", [
                        _vm._v(
                          " " +
                            _vm._s(
                              item.author.career_list &&
                                item.author.career_list.length
                                ? item.author.career_list[0]
                                : null
                            )
                        ),
                      ]),
                      item.author.is_certify
                        ? _c("view", { staticClass: "icon_real" }, [
                            _vm._v("已实名"),
                          ])
                        : _vm._e(),
                      item.author.is_security
                        ? _c("view", { staticClass: "icon_pledge" }, [
                            _vm._v("已担保"),
                          ])
                        : _vm._e(),
                    ]),
                  ]),
                ]),
                _c("view", { staticClass: "list_top_rt" }, [
                  _c("view", { staticClass: "list_loction" }, [
                    _vm._v(" " + _vm._s(item.author.province_name) + " "),
                  ]),
                  _c("view", { staticClass: "list_date" }, [
                    _vm._v(_vm._s(item.basic.date_humanize)),
                  ]),
                ]),
              ]),
              _c("view", { staticClass: "list_content" }, [
                _c(
                  "view",
                  { staticClass: "list_title" },
                  [
                    _vm._l(
                      item.topic.headline.tag,
                      function (tagitem, tagindex) {
                        return _c(
                          "view",
                          { key: tagindex, staticClass: "recommend-label" },
                          [_vm._v(" " + _vm._s(tagitem) + " ")]
                        )
                      }
                    ),
                    _c("view", { staticClass: "recommend-label2" }, [
                      _vm._v(" " + _vm._s(item.topic.payment.title) + " "),
                    ]),
                  ],
                  2
                ),
                _c("view", { staticClass: "list_title_desc" }, [
                  _vm._v(_vm._s(item.topic.headline.title)),
                ]),
              ]),
              _c("view", { staticClass: "list_desc" }, [
                _vm._v(" " + _vm._s(item.details.summary) + " "),
              ]),
              item.details.media.file_type == "picture"
                ? _c(
                    "view",
                    { staticClass: "list_img" },
                    [
                      _c(
                        "scroll-view",
                        { attrs: { enhanced: true, scrollX: true } },
                        _vm._l(
                          item.details.media.cover,
                          function (url, coverIndex) {
                            return _c("image", {
                              key: coverIndex,
                              staticClass: "list_img_item",
                              attrs: { src: url, mode: "aspectFill" },
                              on: {
                                tap: function ($event) {
                                  $event.stopPropagation()
                                  return _vm.previewImage(
                                    url,
                                    item.details.media.cover
                                  )
                                },
                              },
                            })
                          }
                        ),
                        0
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              item.details.media.file_type == "video"
                ? _c("view", { staticClass: "list_video" }, [
                    _c("video", {
                      staticClass: "list_video-width",
                      attrs: {
                        objectFit: "cover",
                        poster: item.details.media.cover[0],
                        src:
                          item.details.media.video_cover &&
                          item.details.media.video_cover[0],
                      },
                      on: {
                        tap: function ($event) {
                          $event.stopPropagation()
                        },
                      },
                    }),
                  ])
                : _vm._e(),
              _c("view", { staticClass: "list_bottom" }, [
                _c("view", { staticClass: "list_time" }, [
                  _c("image", {
                    attrs: {
                      src: "https://yuepai-oss.qubeitech.com/static/images/common/time.png",
                    },
                  }),
                  _vm._v(" " + _vm._s(item.basic.date_humanize) + " "),
                ]),
                _c("view", { staticClass: "list_yuepai" }, [
                  _c("image", {
                    attrs: {
                      src: "https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png",
                    },
                  }),
                  _vm._v(
                    " 收到约拍 " + _vm._s(item.statistic.invite_cnt) + " "
                  ),
                ]),
                _c("view", { staticClass: "list_read" }, [
                  _c("image", {
                    attrs: {
                      src: "https://yuepai-oss.qubeitech.com/static/images/eyes.png",
                    },
                  }),
                  _vm._v(" 阅读 " + _vm._s(item.statistic.read_cnt) + " "),
                ]),
              ]),
            ]),
          ])
        : _c("view", { staticClass: "none-data" }, [
            _c("image", {
              staticClass: "none-img",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/common/none.png",
                mode: "aspectFill",
              },
            }),
            _c("view", [_vm._v("当前暂无数据哦～")]),
          ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/zuopinList/index.vue?vue&type=template&id=56fa8292&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/zuopinList/index.vue?vue&type=template&id=56fa8292&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "zuopin_list" },
    _vm._l(_vm.list, function (item, index) {
      return _vm.list.length
        ? _c(
            "view",
            {
              key: index,
              staticClass: "zuopin_box",
              on: {
                tap: function ($event) {
                  return _vm.godetail(item.oid, item.author_id)
                },
              },
            },
            [
              item.file_type == "picture"
                ? _c("image", {
                    staticClass: "zuopin_img",
                    attrs: { src: item.cover[0], mode: "aspectFill" },
                  })
                : _vm._e(),
              item.file_type == "video"
                ? _c("video", {
                    staticClass: "list_video-width",
                    attrs: {
                      objectFit: "cover",
                      poster: item.cover[0],
                      src: item.video_cover && item.video_cover[0],
                    },
                  })
                : _vm._e(),
              _c("view", { staticClass: "zuopin_desc" }, [
                _vm._v(_vm._s(item.summary)),
              ]),
              _c("view", { staticClass: "zuopin_info" }, [
                _c("image", {
                  staticClass: "avatar",
                  attrs: {
                    src: item.author.avatar
                      ? item.author.avatar
                      : "https://yuepai-oss.qubeitech.com/static/avatar_default.png",
                    mode: "aspectFill",
                  },
                }),
                _c("view", [
                  _c(
                    "view",
                    { staticClass: "list_p_title" },
                    [
                      _c("text", { staticClass: "list_name" }, [
                        _vm._v(_vm._s(item.author.nickname)),
                      ]),
                      _c("block", [
                        item.author.sex == 1
                          ? _c("image", {
                              staticClass: "list_sex",
                              attrs: {
                                src: "https://yuepai-oss.qubeitech.com/static/nan.png",
                              },
                            })
                          : _vm._e(),
                        item.author.sex == 0
                          ? _c("image", {
                              staticClass: "list_sex",
                              attrs: {
                                src: "https://yuepai-oss.qubeitech.com/static/nv.png",
                              },
                            })
                          : _vm._e(),
                      ]),
                    ],
                    1
                  ),
                  _c("view", { staticClass: "list_p" }, [
                    _c("text", [
                      _vm._v(
                        " " +
                          _vm._s(
                            item.author.career_list &&
                              item.author.career_list[0]
                          ) +
                          " |" +
                          _vm._s(item.author.province_name)
                      ),
                    ]),
                    _c("text", { staticClass: "read" }, [
                      _vm._v(_vm._s(item.statistic.read_cnt)),
                    ]),
                  ]),
                ]),
              ]),
            ]
          )
        : _c("view", { staticClass: "none-data" }, [
            _c("image", {
              staticClass: "none-img",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/common/none.png",
                mode: "aspectFill",
              },
            }),
            _c("view", [_vm._v("当前暂无数据哦～")]),
          ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "home" },
    [
      _c(
        "view",
        { staticClass: "home-top" },
        [
          _c(
            "view",
            {
              staticClass: "custom_head",
              style: { height: _vm.globalData.navHeight + "px" },
            },
            [
              _c(
                "view",
                {
                  staticClass: "flex-row",
                  style: {
                    width: "100%",
                    height: _vm.globalData.navObj + "px",
                    "padding-top": _vm.globalData.navTop + "px",
                    "padding-right": _vm.globalData.navObjWid + 5 + "px",
                  },
                },
                [
                  _c("view", { staticClass: "head_left" }, [
                    _c("view", { staticClass: "select-city" }, [
                      _vm._v(" " + _vm._s(_vm.city) + " "),
                      _c("image", {
                        staticClass: "roll-down",
                        attrs: {
                          src: __webpack_require__(/*! ../../assets/images/common/back.png */ "./src/assets/images/common/back.png"),
                        },
                      }),
                    ]),
                    _c(
                      "view",
                      { staticClass: "head_sign", on: { tap: _vm.showSign } },
                      [
                        _vm.is_today_sign
                          ? _c("image", {
                              attrs: {
                                src: __webpack_require__(/*! ../../assets/images/icon_signed.jpg */ "./src/assets/images/icon_signed.jpg"),
                              },
                            })
                          : _c("image", {
                              attrs: {
                                src: __webpack_require__(/*! ../../assets/images/icon_sign.jpg */ "./src/assets/images/icon_sign.jpg"),
                              },
                            }),
                      ]
                    ),
                  ]),
                  _c("view", { staticClass: "head_title" }, [
                    _vm._v(" 虾米约拍 "),
                  ]),
                ]
              ),
            ]
          ),
          _c("view", { style: { height: _vm.globalData.navHeight + "px" } }),
          _c("block", [
            _c("view", { staticClass: "page-bg" }),
            _c(
              "view",
              { staticClass: "page-section page-section-spacing swiper" },
              [
                _c(
                  "swiper",
                  {
                    attrs: {
                      "indicator-dots": _vm.indicatorDots,
                      autoplay: _vm.autoplay,
                      interval: _vm.interval,
                      duration: _vm.duration,
                    },
                  },
                  _vm._l(_vm.background, function (item, index) {
                    return _c(
                      "block",
                      { key: index },
                      [
                        _c("swiper-item", [
                          _c("view", { staticClass: "swiper-item" }, [
                            _c("image", {
                              staticClass: "swiper-item-img",
                              attrs: {
                                mode: "aspectFill",
                                src: "https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/9f7062c8-67b9-11ed-ae45-473a871aac32.jpg",
                              },
                            }),
                          ]),
                        ]),
                      ],
                      1
                    )
                  }),
                  1
                ),
              ],
              1
            ),
          ]),
          _c("view", { staticClass: "news" }, [
            _c("view", { staticClass: "news-title" }, [_vm._v("消息")]),
            _c("view", { staticClass: "news-line" }, [_vm._v("|")]),
            _c("view", { staticClass: "news-txt" }, [
              _vm._v("看大佬如何用手机拍出黑白大片"),
            ]),
            _c("view", { staticClass: "news-btn" }, [_vm._v("去看看")]),
          ]),
          _c("view", { staticClass: "page-nav" }, [
            _c("view", { staticClass: "page-nav-top" }, [
              _c("view", { staticClass: "page-nav-item" }, [
                _c("image", {
                  staticClass: "page-nav-img",
                  attrs: { src: __webpack_require__(/*! ../../assets/images/icon_model.png */ "./src/assets/images/icon_model.png") },
                }),
                _c("text", { staticClass: "page-nav-text" }, [_vm._v("模特")]),
              ]),
              _c("view", { staticClass: "page-nav-item" }, [
                _c("image", {
                  staticClass: "page-nav-img",
                  attrs: { src: __webpack_require__(/*! ../../assets/images/take.png */ "./src/assets/images/take.png") },
                }),
                _c("text", { staticClass: "page-nav-text" }, [_vm._v("摄影")]),
              ]),
              _c("view", { staticClass: "page-nav-item" }, [
                _c("image", {
                  staticClass: "page-nav-img",
                  attrs: { src: __webpack_require__(/*! ../../assets/images/more1.png */ "./src/assets/images/more1.png") },
                }),
                _c("text", { staticClass: "page-nav-text" }, [_vm._v("作品")]),
              ]),
              _c("view", { staticClass: "page-nav-item" }, [
                _c("image", {
                  staticClass: "page-nav-img",
                  attrs: { src: __webpack_require__(/*! ../../assets/images/moka.png */ "./src/assets/images/moka.png") },
                }),
                _c("text", { staticClass: "page-nav-text" }, [_vm._v("模卡")]),
              ]),
            ]),
            _c("view", { staticClass: "page-nav-bottom" }, [
              _c("view", { staticClass: "page-nav-box nav_bg1" }, [
                _c("view", { staticClass: "page-nav-left" }, [
                  _c("view", { staticClass: "page-nav-title" }, [
                    _vm._v("约拍"),
                  ]),
                  _c("view", { staticClass: "page-nav-desc" }, [
                    _vm._v("你约我拍"),
                  ]),
                ]),
                _c("view", { staticClass: "page-nav-rt" }, [
                  _c("image", {
                    attrs: {
                      src: __webpack_require__(/*! ../../assets/images/common/photo_white.png */ "./src/assets/images/common/photo_white.png"),
                    },
                  }),
                ]),
              ]),
              _c("view", { staticClass: "page-nav-box nav_bg2" }, [
                _c("view", { staticClass: "page-nav-left" }, [
                  _c("view", { staticClass: "page-nav-title" }, [
                    _vm._v("通告"),
                  ]),
                  _c("view", { staticClass: "page-nav-desc" }, [
                    _vm._v("招募公告"),
                  ]),
                ]),
                _c("view", { staticClass: "page-nav-rt" }, [
                  _c("image", {
                    attrs: {
                      src: __webpack_require__(/*! ../../assets/images/common/tonggao_white.png */ "./src/assets/images/common/tonggao_white.png"),
                    },
                  }),
                ]),
              ]),
            ]),
          ]),
          _c("view", { staticClass: "recommend" }, [
            _c("view", { staticClass: "recommend-title" }, [
              _c("view", { staticClass: "recommend-name" }, [
                _vm._v(" 约拍推荐 "),
              ]),
              _c("view", { staticClass: "recommend-tips" }, [
                _vm._v(" 1分钟前***发布了人像创作"),
              ]),
              _c("view", { staticClass: "recommend-more" }, [_vm._v("更多")]),
            ]),
            _c(
              "view",
              { staticClass: "recommend-ct" },
              [
                _c(
                  "swiper",
                  {
                    staticClass: "yuepai-swiper",
                    style: {
                      height: _vm.swiperheight + "px",
                    },
                    attrs: {
                      "indicator-dots": _vm.indicatorDots2,
                      autoplay: _vm.autoplay,
                      interval: _vm.interval2,
                      duration: _vm.duration,
                    },
                    on: { change: _vm.swiperChange },
                  },
                  _vm._l(_vm.inviteRecommendList, function (item, index) {
                    return _c(
                      "block",
                      { key: index },
                      [
                        _c("swiper-item", [
                          _c(
                            "view",
                            {
                              staticClass: "recommend-box",
                              attrs: { id: "recommend-box" + index },
                            },
                            [
                              _c("view", { staticClass: "tonggao-recommend" }, [
                                _c("view", { staticClass: "list_box" }, [
                                  _c("view", { staticClass: "list_top" }, [
                                    _c(
                                      "view",
                                      { staticClass: "list_top_left" },
                                      [
                                        _c("image", {
                                          staticClass: "avatar",
                                          attrs: {
                                            src: item.author.avatar
                                              ? item.author.avatar
                                              : "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
                                          },
                                        }),
                                        _c(
                                          "view",
                                          { staticClass: "list_info" },
                                          [
                                            _c(
                                              "view",
                                              { staticClass: "list_name" },
                                              [
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      item.author.nickname
                                                    ) +
                                                    " "
                                                ),
                                                item.author.sex !== null
                                                  ? _c("block", [
                                                      item.author.sex == 1
                                                        ? _c("image", {
                                                            staticClass:
                                                              "list_sex",
                                                            attrs: {
                                                              src: "https://yuepai-oss.qubeitech.com/static/images/nan.png",
                                                            },
                                                          })
                                                        : _vm._e(),
                                                      item.author.sex == 0
                                                        ? _c("image", {
                                                            staticClass:
                                                              "list_sex",
                                                            attrs: {
                                                              src: "https://yuepai-oss.qubeitech.com/static/images/nv.png",
                                                            },
                                                          })
                                                        : _vm._e(),
                                                    ])
                                                  : _vm._e(),
                                              ],
                                              1
                                            ),
                                            _c(
                                              "view",
                                              { staticClass: "list_p" },
                                              [
                                                _c("text", [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        item.author.career_list
                                                          .length
                                                          ? item.author
                                                              .career_list[0]
                                                          : null
                                                      )
                                                  ),
                                                ]),
                                                item.author.is_certify
                                                  ? _c(
                                                      "view",
                                                      {
                                                        staticClass:
                                                          "icon_real",
                                                      },
                                                      [_vm._v("已实名")]
                                                    )
                                                  : _vm._e(),
                                                item.author.is_security
                                                  ? _c(
                                                      "view",
                                                      {
                                                        staticClass:
                                                          "icon_pledge",
                                                      },
                                                      [_vm._v("已担保")]
                                                    )
                                                  : _vm._e(),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _c("view", { staticClass: "list_top_rt" }, [
                                      _c(
                                        "view",
                                        { staticClass: "list_loction" },
                                        [
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                item.author.province_name
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      _c("view", { staticClass: "list_date" }, [
                                        _vm._v(
                                          _vm._s(item.basic.date_humanize)
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _c("view", { staticClass: "list_content" }, [
                                    _c(
                                      "view",
                                      { staticClass: "list_title" },
                                      [
                                        _vm._l(
                                          item.topic.headline.tag,
                                          function (tagitem, tagindex) {
                                            return _c(
                                              "view",
                                              {
                                                key: tagindex,
                                                staticClass: "recommend-label",
                                              },
                                              [
                                                _vm._v(
                                                  " " + _vm._s(tagitem) + " "
                                                ),
                                              ]
                                            )
                                          }
                                        ),
                                        _c(
                                          "view",
                                          { staticClass: "recommend-label2" },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  item.topic.payment.title
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                      ],
                                      2
                                    ),
                                    _c(
                                      "view",
                                      { staticClass: "list_title_desc" },
                                      [
                                        _vm._v(
                                          _vm._s(item.topic.headline.title)
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _c("view", { staticClass: "list_desc" }, [
                                    _vm._v(
                                      " " + _vm._s(item.details.summary) + " "
                                    ),
                                  ]),
                                  item.details.media.file_type == "picture"
                                    ? _c(
                                        "view",
                                        { staticClass: "list_img" },
                                        [
                                          _c(
                                            "scroll-view",
                                            {
                                              attrs: {
                                                enhanced: true,
                                                scrollX: true,
                                              },
                                            },
                                            _vm._l(
                                              item.details.media.cover,
                                              function (url, coverIndex) {
                                                return _c("image", {
                                                  key: coverIndex,
                                                  staticClass: "list_img_item",
                                                  attrs: {
                                                    src: url,
                                                    mode: "aspectFill",
                                                  },
                                                  on: {
                                                    tap: function ($event) {
                                                      $event.stopPropagation()
                                                      return _vm.previewImage(
                                                        url,
                                                        item.details.media.cover
                                                      )
                                                    },
                                                  },
                                                })
                                              }
                                            ),
                                            0
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  item.details.media.file_type == "video"
                                    ? _c(
                                        "view",
                                        { staticClass: "list_video" },
                                        [
                                          _c("video", {
                                            staticClass: "list_video-width",
                                            attrs: {
                                              objectFit: "cover",
                                              poster:
                                                item.details.media.cover[0],
                                              src:
                                                item.details.media
                                                  .video_cover &&
                                                item.details.media
                                                  .video_cover[0],
                                            },
                                            on: {
                                              tap: function ($event) {
                                                $event.stopPropagation()
                                              },
                                            },
                                          }),
                                        ]
                                      )
                                    : _vm._e(),
                                  _c("view", { staticClass: "list_bottom" }, [
                                    _c("view", { staticClass: "list_time" }, [
                                      _c("image", {
                                        attrs: {
                                          src: "https://yuepai-oss.qubeitech.com/static/images/common/time.png",
                                        },
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(item.basic.date_humanize) +
                                          " "
                                      ),
                                    ]),
                                    _c("view", { staticClass: "list_yuepai" }, [
                                      _c("image", {
                                        attrs: {
                                          src: "https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png",
                                        },
                                      }),
                                      _vm._v(
                                        " 收到约拍 " +
                                          _vm._s(item.statistic.invite_cnt) +
                                          " "
                                      ),
                                    ]),
                                    _c("view", { staticClass: "list_read" }, [
                                      _c("image", {
                                        attrs: {
                                          src: "https://yuepai-oss.qubeitech.com/static/images/eyes.png",
                                        },
                                      }),
                                      _vm._v(
                                        " 阅读 " +
                                          _vm._s(item.statistic.read_cnt) +
                                          " "
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]
                          ),
                        ]),
                      ],
                      1
                    )
                  }),
                  1
                ),
              ],
              1
            ),
          ]),
          _c("view", { staticClass: "recommend" }, [
            _c("view", { staticClass: "recommend-title" }, [
              _c("view", { staticClass: "recommend-name" }, [
                _vm._v(" 通告推荐 "),
              ]),
              _c("view", { staticClass: "recommend-tips" }, [
                _vm._v(" 1分钟前***发布了人像创作"),
              ]),
              _c("view", { staticClass: "recommend-more" }, [_vm._v("更多")]),
            ]),
            _c(
              "view",
              { staticClass: "recommend-ct" },
              [
                _c(
                  "swiper",
                  {
                    staticClass: "tonggao-swiper",
                    style: {
                      height: _vm.tonggaoSwiperHeight + "px",
                    },
                    attrs: {
                      "indicator-dots": _vm.indicatorDots2,
                      autoplay: _vm.autoplay,
                      interval: _vm.interval2,
                      duration: _vm.duration,
                    },
                    on: { change: _vm.tonggaoSwiperChange },
                  },
                  _vm._l(_vm.noticeRecommendList, function (item, index) {
                    return _c(
                      "block",
                      { key: index },
                      [
                        _c("swiper-item", [
                          _c(
                            "view",
                            {
                              staticClass: "recommend-box",
                              attrs: { id: "tonggao-recommend-box" + index },
                            },
                            [
                              _c("view", { staticClass: "tonggao-recommend" }, [
                                _c(
                                  "view",
                                  { staticClass: "tonggao-recommend-top" },
                                  [
                                    _c(
                                      "view",
                                      { staticClass: "tonggao-info-title" },
                                      [
                                        _vm._l(
                                          item.topic.headline.tag,
                                          function (tagitem, tagindex) {
                                            return _c(
                                              "view",
                                              {
                                                key: tagindex,
                                                staticClass: "recommend-label",
                                              },
                                              [
                                                _vm._v(
                                                  " " + _vm._s(tagitem) + " "
                                                ),
                                              ]
                                            )
                                          }
                                        ),
                                        _c(
                                          "view",
                                          { staticClass: "tonggao-txt" },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  item.topic.headline.title
                                                )
                                            ),
                                          ]
                                        ),
                                      ],
                                      2
                                    ),
                                  ]
                                ),
                                _c(
                                  "view",
                                  { staticClass: "tonggao-recommend-bt" },
                                  [
                                    item.details.media.file_type == "picture"
                                      ? _c(
                                          "view",
                                          {
                                            staticClass:
                                              "tonggao-recommend-img",
                                          },
                                          [
                                            _c("image", {
                                              attrs: {
                                                src: item.details.media
                                                  .cover[0],
                                                mode: "aspectFill",
                                              },
                                            }),
                                          ]
                                        )
                                      : _vm._e(),
                                    _c(
                                      "view",
                                      { staticClass: "tonggao-recommend-info" },
                                      [
                                        _c(
                                          "view",
                                          { staticClass: "tonggao-info-desc" },
                                          [
                                            _vm._v(
                                              " " + _vm._s(item.details.summary)
                                            ),
                                          ]
                                        ),
                                        _c(
                                          "view",
                                          { staticClass: "tonggao-tags" },
                                          _vm._l(
                                            item.subtitle.first_label,
                                            function (tag, tagIndex) {
                                              return _c(
                                                "view",
                                                {
                                                  key: tagIndex,
                                                  staticClass: "tag-item",
                                                },
                                                [_vm._v(_vm._s(tag.name))]
                                              )
                                            }
                                          ),
                                          0
                                        ),
                                        _c(
                                          "view",
                                          {
                                            staticClass:
                                              "tonggao-recommend-price",
                                          },
                                          [
                                            _c(
                                              "view",
                                              { staticClass: "pirce" },
                                              [
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      item.topic.payment.title
                                                    )
                                                ),
                                              ]
                                            ),
                                            _c(
                                              "view",
                                              { staticClass: "recommend-btn" },
                                              [_vm._v("立即报名")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                              _c("view", { staticClass: "tonggao-bottom" }, [
                                _c("view", { staticClass: "tonggao-head" }, [
                                  _c("image", {
                                    attrs: {
                                      src: item.author.avatar
                                        ? item.author.avatar
                                        : "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
                                    },
                                  }),
                                  _vm._v(
                                    " " + _vm._s(item.author.nickname) + " "
                                  ),
                                ]),
                                _c("view", { staticClass: "tonggao-yuepai" }, [
                                  _c("image", {
                                    attrs: {
                                      src: __webpack_require__(/*! ../../assets/images/user/index/yuepai.png */ "./src/assets/images/user/index/yuepai.png"),
                                    },
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(item.statistic.invite_cnt) +
                                      " "
                                  ),
                                ]),
                                _c("view", { staticClass: "tonggao-read" }, [
                                  _c("image", {
                                    attrs: {
                                      src: __webpack_require__(/*! ../../assets/images/eyes.png */ "./src/assets/images/eyes.png"),
                                    },
                                  }),
                                  _vm._v(
                                    " " + _vm._s(item.statistic.read_cnt) + " "
                                  ),
                                ]),
                              ]),
                            ]
                          ),
                        ]),
                      ],
                      1
                    )
                  }),
                  1
                ),
              ],
              1
            ),
          ]),
          _c(
            "view",
            { staticClass: "componets" },
            _vm._l(_vm.componetsNav, function (item, index) {
              return _c(
                "view",
                {
                  key: index,
                  class:
                    index == _vm.componetActive
                      ? "componets-nav-acitve"
                      : "componets-nav",
                  on: {
                    tap: function ($event) {
                      return _vm.componetClick(index)
                    },
                  },
                },
                [
                  _c("view", { staticClass: "componets-title" }, [
                    _vm._v(_vm._s(item.name)),
                  ]),
                  _c("view", { staticClass: "componets-btn" }, [
                    _vm._v(_vm._s(item.desc)),
                  ]),
                ]
              )
            }),
            0
          ),
        ],
        1
      ),
      _c("Pagenav", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.navShow,
            expression: "navShow",
          },
        ],
        ref: "pageNavRef",
        staticClass: "pagenav",
        style: { marginTop: _vm.globalData.navHeight + "px" },
        attrs: {
          pageActive: _vm.componetActive,
          navList: _vm.navList,
          chargeList: _vm.chargeData,
          identityList: _vm.identityData,
          noticeList: _vm.noticeData,
        },
        on: { pageNavClick: _vm.pageNavClick },
      }),
      _c(
        "view",
        { attrs: { id: "list" } },
        [
          _vm.componetActive == 0
            ? _c("YuepaiList", { attrs: { baseData: _vm.yuepaiList } })
            : _vm._e(),
          _vm.componetActive == 1
            ? _c("TonggaoList", { attrs: { baseData: _vm.noticeList } })
            : _vm._e(),
          _vm.componetActive == 2
            ? _c("ZuopinList", { attrs: { baseData: _vm.zuopinList } })
            : _vm._e(),
          _c("loading", { attrs: { showLoading: _vm.showLoading } }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/common/back.png":
/*!*******************************************!*\
  !*** ./src/assets/images/common/back.png ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAmCAMAAADtLHsqAAABaFBMVEUAAAD///+AgIBVVVVAQECAgIBmZmZVVVVJSUltbW2SkpJgYGBVVVWOjo5NTU1mZmZdXV1VVVVqampiYmJVVVVQUFBgYGBVVVVjY2NeXl5ZWVlzc3NdXV1ZWVlVVVVcXFxYWFhVVVVeXl5bW1ttbW1YWFhYWFhdXV1aWlpXV1dfX1/s7Ozp6ens7Ozs7Ozw8PDb29vt7e3w8PDx8fHx8fHNzc309PTLy8vMzMzS0tLs7Oz8/PzQ0NDT09PU1NTj4+P39/fS0tLV1dX19fXb29vW1tb19fX29vb29vb29vbg4OD29vb29vbf39/29vbg4OD39/fe3t739/fh4eHj4+P39/fj4+P39/f5+fni4uLk5OT19fXl5eXl5eXt7e3l5eXp6en9/f36+vr9/f36+vrz8/P29vb+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////////+/v7////////////End8tAAAAd3RSTlMAAQIDBAQFBgcHBwgJCQoKCwwMDQ8QEBISExQUFhcYGRobGxwcHSAhIiMjT1BQUlNVVldZW1xcXl9gYGBiY2VlZWdoaGlqa21vcnN0dnh4enp8fX5/f4GBg4SGhoiKioyMoaamp6ut9vb39/j4+fn6+vv7/P39/r6hmUUAAAFhSURBVDjLjdNnT8MwEAbgODYOoaGEUtqmrNDSwd5777333qusMvP38TkSNK6FOCmfHulytt9TlH8XYqWyTyaYDJ4XYTXPkIrp2LtzWUxEQyrRJz8dx7nQMMqTGZC3AYMgUWZBXkfDfooEmftikp2yvQQyD/IynawK+nL+BbII8jyRsiMm/Z0QZAnkaTxlW6WF+OfQICsgjyMgulfWQB6GJbLBwMkMSbptg9z3swlE2QW57RNEQVjb49KbrvV0Y0SMQ07diWhAzxUFUb91wq0tZBR4HgMocQZ21yQSMUI16VM+YqPQEGumFW84hiNnmr1jsOHLovH6I34dLVI74JfYKrV9/ijtUtvh1qHLbIsHoFNqmxCbbJekZyy9zsPWQ1UhNmCrYFc+LIYNbPnDuanw5tA1y04uXNcJEXUtEKmO2ZVBIdiumeXhcNAU18FdIp+/xNCIZMHY6lFKJKv318Lm1jeYfF17kRSejgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/common/photo_white.png":
/*!**************************************************!*\
  !*** ./src/assets/images/common/photo_white.png ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/photo_white.png";

/***/ }),

/***/ "./src/assets/images/common/tonggao_white.png":
/*!****************************************************!*\
  !*** ./src/assets/images/common/tonggao_white.png ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/tonggao_white.png";

/***/ }),

/***/ "./src/assets/images/eyes.png":
/*!************************************!*\
  !*** ./src/assets/images/eyes.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/eyes.png";

/***/ }),

/***/ "./src/assets/images/icon_model.png":
/*!******************************************!*\
  !*** ./src/assets/images/icon_model.png ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icon_model.png";

/***/ }),

/***/ "./src/assets/images/icon_sign.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon_sign.jpg ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icon_sign.jpg";

/***/ }),

/***/ "./src/assets/images/icon_signed.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon_signed.jpg ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icon_signed.jpg";

/***/ }),

/***/ "./src/assets/images/moka.png":
/*!************************************!*\
  !*** ./src/assets/images/moka.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/moka.png";

/***/ }),

/***/ "./src/assets/images/more1.png":
/*!*************************************!*\
  !*** ./src/assets/images/more1.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/more1.png";

/***/ }),

/***/ "./src/assets/images/take.png":
/*!************************************!*\
  !*** ./src/assets/images/take.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/take.png";

/***/ }),

/***/ "./src/assets/images/user/index/yuepai.png":
/*!*************************************************!*\
  !*** ./src/assets/images/user/index/yuepai.png ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAABelBMVEUAAAAAAAAAAAAAAABAQEAzMzMrKyskJCQuLi4nJyc3NzcwMDA2NjYzMzMuLi41NTUzMzM3Nzc1NTUzMzMwMDAzMzMyMjI0NDQ0NDQzMzMyMjIwMDA0NDQyMjIwMDAzMzMyMjI0NDQxMTEzMzMyMjIyMjIzMzM0NDQzMzMyMjIyMjIyMjIzMzMzMzM0NDQ0NDQzMzMzMzMzMzMzMzMyMjIzMzMzMzMyMjIyMjIyMjIzMzMzMzMzMzMyMjIyMjIzMzMzMzMzMzMyMjI0NDQzMzMyMjIyMjIzMzMzMzMyMjIzMzMzMzMyMjI0NDQzMzMzMzMyMjIzMzMyMjI0NDQzMzMzMzMyMjIyMjIzMzMzMzMyMjIzMzMyMjIzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzPqmi6JAAAAfXRSTlMAAQIDBAUGBwsNDhATFBYYGRwdHiAjJCcsMjM1Njg6PD1AREZHTVBUVVtcZmpucXZ3gYOIiYuMjpOUlZebnZ6goaWnqKusra6wsrO0tre4ubu/wMHCxMXGx8jKztDR0tPb3N3e39/h4uPk5ebo6err7O3v8vP09fb3+Pr8/hfJ7skAAAF7SURBVEjH7ZVXTwJBFEZHulhQECv2XsCKBbAXUFQUUVERGyB2FAVEvv8uG1h3je6MiTxynu79crIzNzOZJaRIgWncjiNPYreVIZuSEJHupNsnwKYjz3oGERVN7gZmhW4GGKTZx3g3CJ0uiSvFL1bVdPAiSxiwieMp4JrLg/ZqUWq45edKiWOiS/D5g1FIF4HABoer7/uavW4PxxngFMIYfNKzqGpJiRdvQpCGQ9r2YIjYAYWU3TaxumZt5zs/Rii20ZcbzF+X68s7ZNJ2fQzI3EQzwEvDVyhlq8+BhRpC9A4gomHZZmAyV40hu2GG7cedOlcpwwiw7CTm+NKGDzndVmZg5dNRQMv49jNcfLmEBGsnTqTyd1b3ii2W3ZU9ljKuKN0Delg2WcneaYupyRwC3MzTIZod/k57tWybyC33nPs0rCR/sAmRNfcPtMjFCc3+yT/sRxzJabLsAHGhmweu9ilcAsui5yQEBlG9aKmK8cNTCn5rZfHvUxA+AWWctuD+3T7EAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/components/loading/index.scss":
/*!*******************************************!*\
  !*** ./src/components/loading/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/loading/index.vue":
/*!******************************************!*\
  !*** ./src/components/loading/index.vue ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_f4b50242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f4b50242&scoped=true& */ "./src/components/loading/index.vue?vue&type=template&id=f4b50242&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/loading/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_f4b50242_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_f4b50242_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "f4b50242",
  "26b46de2"
  
)

component.options.__file = "src/components/loading/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/components/loading/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/loading/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/loading/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/loading/index.vue?vue&type=template&id=f4b50242&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/components/loading/index.vue?vue&type=template&id=f4b50242&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f4b50242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=f4b50242&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/loading/index.vue?vue&type=template&id=f4b50242&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f4b50242_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f4b50242_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/components/pagenav/index.scss":
/*!*******************************************!*\
  !*** ./src/components/pagenav/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pagenav/index.vue":
/*!******************************************!*\
  !*** ./src/components/pagenav/index.vue ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_6d454fd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6d454fd7&scoped=true& */ "./src/components/pagenav/index.vue?vue&type=template&id=6d454fd7&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/pagenav/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_6d454fd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_6d454fd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "6d454fd7",
  "0e543eda"
  
)

component.options.__file = "src/components/pagenav/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/components/pagenav/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/pagenav/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/pagenav/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/pagenav/index.vue?vue&type=template&id=6d454fd7&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/components/pagenav/index.vue?vue&type=template&id=6d454fd7&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d454fd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6d454fd7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pagenav/index.vue?vue&type=template&id=6d454fd7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d454fd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d454fd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/components/tonggaoList/index.scss":
/*!***********************************************!*\
  !*** ./src/components/tonggaoList/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/tonggaoList/index.vue":
/*!**********************************************!*\
  !*** ./src/components/tonggaoList/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_04d931fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=04d931fc&scoped=true& */ "./src/components/tonggaoList/index.vue?vue&type=template&id=04d931fc&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/tonggaoList/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_04d931fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_04d931fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "04d931fc",
  "e085c6f6"
  
)

component.options.__file = "src/components/tonggaoList/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/components/tonggaoList/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/tonggaoList/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/tonggaoList/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/tonggaoList/index.vue?vue&type=template&id=04d931fc&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/components/tonggaoList/index.vue?vue&type=template&id=04d931fc&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_04d931fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=04d931fc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/tonggaoList/index.vue?vue&type=template&id=04d931fc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_04d931fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_04d931fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/components/yuepaiList/index.scss":
/*!**********************************************!*\
  !*** ./src/components/yuepaiList/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/yuepaiList/index.vue":
/*!*********************************************!*\
  !*** ./src/components/yuepaiList/index.vue ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_18645680_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=18645680&scoped=true& */ "./src/components/yuepaiList/index.vue?vue&type=template&id=18645680&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/yuepaiList/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_18645680_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_18645680_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "18645680",
  "7ca5e2dd"
  
)

component.options.__file = "src/components/yuepaiList/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/components/yuepaiList/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/components/yuepaiList/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/yuepaiList/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/yuepaiList/index.vue?vue&type=template&id=18645680&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/components/yuepaiList/index.vue?vue&type=template&id=18645680&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_18645680_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=18645680&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/yuepaiList/index.vue?vue&type=template&id=18645680&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_18645680_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_18645680_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/components/zuopinList/index.scss":
/*!**********************************************!*\
  !*** ./src/components/zuopinList/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/zuopinList/index.vue":
/*!*********************************************!*\
  !*** ./src/components/zuopinList/index.vue ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_56fa8292_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=56fa8292&scoped=true& */ "./src/components/zuopinList/index.vue?vue&type=template&id=56fa8292&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/zuopinList/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_56fa8292_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_56fa8292_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "56fa8292",
  "405adea2"
  
)

component.options.__file = "src/components/zuopinList/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/components/zuopinList/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/components/zuopinList/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/zuopinList/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/zuopinList/index.vue?vue&type=template&id=56fa8292&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/components/zuopinList/index.vue?vue&type=template&id=56fa8292&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_56fa8292_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=56fa8292&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/zuopinList/index.vue?vue&type=template&id=56fa8292&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_56fa8292_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_56fa8292_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/index.vue":
/*!**********************************!*\
  !*** ./src/pages/home/index.vue ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/home/index.vue");


var config = {"navigationBarTitleText":"虾米约拍","enablePullDownRefresh":true,"navigationStyle":"custom","navigationBarBackgroundColor":"#FE5457","navigationBarTextStyle":"white","backgroundColor":"#FE5457","backgroundColorTop":"#FE5457","backgroundColorBottom":"#f7f7f7","backgroundTextStyle":"dark","usingComponents":{"selector-component":"plugin://citySelector/selector-component"}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/home/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/home/index.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/pages/home/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5b685826&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/home/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map