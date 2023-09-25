(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/zuopin/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/zuopin/index.vue":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/zuopin/index.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_6e34d648_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6e34d648&scoped=true& */ "./src/pages/zuopin/index.vue?vue&type=template&id=6e34d648&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/zuopin/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_6e34d648_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_6e34d648_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "6e34d648",
  "489d7616"
  
)

component.options.__file = "src/pages/zuopin/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/zuopin/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/zuopin/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/pages/zuopin/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_pagenav_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pagenav/index.vue */ "./src/components/pagenav/index.vue");
/* harmony import */ var _components_zuopinList_index_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/zuopinList/index.vue */ "./src/components/zuopinList/index.vue");
/* harmony import */ var _components_loading_index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/loading/index.vue */ "./src/components/loading/index.vue");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/index */ "./src/api/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "zuopin",
  data: function data() {
    return {
      componetActive: 2,
      navActive: 0,
      navList: [],
      chargeData: [],
      purposeData: [],
      appointmentData: [],
      identityData: [],
      appointmentList: [],
      noticeData: [],
      pageNum: 1,
      pageSize: 10,
      isclick: false,
      showLoading: false,
      noMore: false,
      zuopinList: [],
      city_filter: {},
      select_filter: {}
    };
  },
  components: {
    Pagenav: _components_pagenav_index_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    ZuopinList: _components_zuopinList_index_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    loading: _components_loading_index_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
  },
  methods: {
    navClick: function navClick(pageNavIndex, navIndex) {
      this.pageNum = 1;
      this.isclick = true;
      this.showLoading = true;
      this.zuopinQuery("init", navIndex, true);
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
    onMore: function onMore() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading(); //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框

      wx.showLoading({
        title: "数据加载中..."
      });
      this.loading = false;
      this.zuopinQuery("more", this.$refs["pageNavRef"].navActive);
    },
    submitQuery: function submitQuery(pageNavIndex, navIndex, select_filter) {
      this.select_filter = select_filter;
      this.showLoading = true;
      this.zuopinQuery("init", navIndex, true);
    },
    photoFilter: function photoFilter(params, scroll) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data, arr2, arr3;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_7__[/* photoFilter */ "tb"])(params);

              case 3:
                res = _context.sent;
                data = res.data.data;
                arr2 = [];
                arr3 = [];

                if (data.quick_filter) {
                  _this.navList = data.quick_filter;
                }

                if (data.payment_type) {
                  arr2 = data.payment_type.map(function (item) {
                    item.ispick = false;
                    return item;
                  });
                }

                if (data.author_career) {
                  arr3 = data.author_career.map(function (item) {
                    item.ispick = false;
                    return item;
                  });
                }

                arr2.unshift({
                  key: "all",
                  value: "全部",
                  ispick: true
                });
                arr3.unshift({
                  key: "all",
                  value: "全部",
                  ispick: true
                });
                _this.identityData = arr3;
                _this.select_filter = {
                  author_career: 0,
                  author_sex: 10
                };

                _this.zuopinQuery("init", _this.$refs["pageNavRef"].navActive, scroll);

                _context.next = 19;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](0);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 17]]);
      }))();
    },
    queryPhotoList: function queryPhotoList(params, type, scroll) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_7__[/* photoList */ "vb"])(params);

              case 3:
                res = _context2.sent;
                //隐藏loading 提示框
                _this2.showLoading = false;
                wx.hideLoading();
                _this2.noMore = false; //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context2.next = 14;
                  break;
                }

                _this2.zuopinList = res.data.data.items;
                _this2.loading = true;
                _context2.next = 22;
                break;

              case 14:
                if (!(type == "more")) {
                  _context2.next = 22;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context2.next = 19;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_6__[/* errortip */ "a"])("没有更多数据了～");
                _this2.loading = true;
                return _context2.abrupt("return", false);

              case 19:
                data = res.data.data.items;
                _this2.zuopinList = _this2.zuopinList.concat(data);
                _this2.loading = true;

              case 22:
                if (scroll) {
                  wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                  });
                }

                _this2.isclick = false;
                _context2.next = 32;
                break;

              case 26:
                _context2.prev = 26;
                _context2.t0 = _context2["catch"](0);
                _this2.showLoading = false;
                wx.hideNavigationBarLoading();

                if (_context2.t0.data.error_code == 11020) {
                  _this2.visible = true;
                  _this2.isclick = false;
                  console.log(_context2.t0, "error");
                }

                if (_context2.t0.data.error_code == 10100 && _this2.pageNum > 1) {
                  _this2.noMore = true;
                }

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 26]]);
      }))();
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    //调用刷新时将执行的方法
    this.showLoading = true;
    this.photoFilter({}, true);
  },
  //触底加载
  onReachBottom: function onReachBottom() {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;

    if (this.loading && !this.isclick) {
      this.onMore();
    }
  },
  mounted: function mounted() {
    this.photoFilter({}, true);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/zuopin/index.vue?vue&type=template&id=6e34d648&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/zuopin/index.vue?vue&type=template&id=6e34d648&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    [
      _c("Pagenav", {
        ref: "pageNavRef",
        staticClass: "pagenav",
        attrs: {
          pageActive: _vm.componetActive,
          active: _vm.navActive,
          navList: _vm.navList,
          chargeList: _vm.chargeData,
          purposeList: _vm.purposeData,
          appointmentList: _vm.appointmentData,
          identityList: _vm.identityData,
          noticeList: _vm.noticeData,
          isMargin: false,
          showComponet: false,
        },
        on: { navClick: _vm.navClick, submitQuery: _vm.submitQuery },
      }),
      _c(
        "view",
        { staticClass: "zuopin-list-ct" },
        [
          _c("ZuopinList", {
            staticClass: "list-height",
            attrs: { baseData: _vm.zuopinList },
          }),
        ],
        1
      ),
      _vm.noMore
        ? _c("view", { staticClass: "nomore" }, [_vm._v("没有更多了～")])
        : _vm._e(),
      _c("loading", { attrs: { showLoading: _vm.showLoading } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/zuopin/index.scss":
/*!*************************************!*\
  !*** ./src/pages/zuopin/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/zuopin/index.vue":
/*!************************************!*\
  !*** ./src/pages/zuopin/index.vue ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/zuopin/index.vue");


var config = {"navigationBarTitleText":"作品列表","enablePullDownRefresh":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/zuopin/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/zuopin/index.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/pages/zuopin/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/zuopin/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/zuopin/index.vue?vue&type=template&id=6e34d648&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/pages/zuopin/index.vue?vue&type=template&id=6e34d648&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e34d648_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6e34d648&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/zuopin/index.vue?vue&type=template&id=6e34d648&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e34d648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e34d648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/zuopin/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map