(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageActivity/pages/list/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/list/index.vue":
/*!************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/list/index.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_6128b102_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6128b102&scoped=true& */ "./src/packageActivity/pages/list/index.vue?vue&type=template&id=6128b102&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageActivity/pages/list/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_6128b102_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_6128b102_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "6128b102",
  "2d3cf266"
  
)

component.options.__file = "src/packageActivity/pages/list/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/list/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/list/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageActivity/pages/list/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/index.js */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "activityList",
  data: function data() {
    return {
      pageNum: 1,
      pageSize: 10,
      list: [],
      loading: true
    };
  },
  methods: {
    // 加载更多
    onMore: function onMore() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading(); //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框

      wx.showLoading({
        title: "数据加载中..."
      });
      this.loading = false;
      this.query("more");
    },
    query: function query(type) {
      if (type == "init") this.pageNum = 1;
      this.exploreList({
        page: this.pageNum,
        per_page: this.pageSize
      }, type);
    },
    godetail: function godetail(oid) {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageActivity/pages/detail/index?oid=" + oid);
    },
    exploreList: function exploreList(params, type) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* exploreList */ "E"])(params);

              case 3:
                res = _context.sent;
                //隐藏loading 提示框
                wx.hideLoading(); //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context.next = 12;
                  break;
                }

                _this.list = res.data.data.items;
                _this.loading = true;
                _context.next = 20;
                break;

              case 12:
                if (!(type == "more")) {
                  _context.next = 20;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context.next = 17;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("没有更多数据了～");
                _this.loading = true;
                return _context.abrupt("return", false);

              case 17:
                data = res.data.data.items;
                _this.list = _this.yuepaiList.concat(data);
                _this.loading = true;

              case 20:
                _context.next = 24;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](0);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 22]]);
      }))();
    }
  },
  created: function created() {
    this.query("init");
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.query("init");
  },
  onReachBottom: function onReachBottom() {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;

    if (this.loading) {
      this.onMore();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/list/index.vue?vue&type=template&id=6128b102&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/list/index.vue?vue&type=template&id=6128b102&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "activity" },
    _vm._l(_vm.list, function (item, index) {
      return _c(
        "view",
        {
          key: index,
          staticClass: "activity-box",
          on: {
            tap: function ($event) {
              return _vm.godetail(item.oid)
            },
          },
        },
        [
          _c("view", { staticClass: "activity-top" }, [
            _c("view", { staticClass: "activity-left" }, [
              _c("image", {
                attrs: { src: item.main_cover, mode: "aspectFill" },
              }),
              _c("text", { staticClass: "activity-label" }, [
                _vm._v(_vm._s(item.name)),
              ]),
            ]),
            _c("view", { staticClass: "activity-right" }, [
              _c("view", { staticClass: "activity-title" }, [
                _vm._v(" " + _vm._s(item.title) + " "),
              ]),
              item.label
                ? _c(
                    "view",
                    { staticClass: "activity-tags" },
                    _vm._l(item.label, function (labelItem, labelIndex) {
                      return _c(
                        "view",
                        { key: labelIndex, staticClass: "tag" },
                        [_vm._v(" " + _vm._s(labelItem) + " ")]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _c("view", { staticClass: "activity-location" }, [
                _vm._v(" " + _vm._s(item.address) + " "),
              ]),
              _c("view", { staticClass: "activity-time" }, [
                _c("text", { staticClass: "activity-txt" }, [
                  _vm._v(_vm._s(item.begin_datetime)),
                ]),
                _c("text", { staticClass: "activity-price" }, [
                  _c("text", { staticClass: "price-blod" }, [
                    _vm._v(_vm._s(item.payment)),
                  ]),
                  item.payment !== "免费" && item.payment !== "置换"
                    ? _c("text", [_vm._v("元")])
                    : _vm._e(),
                ]),
              ]),
            ]),
          ]),
          _c("view", { staticClass: "activity-bottom" }, [
            _c("view", { staticClass: "activity-info" }, [
              _c("image", { attrs: { src: item.publisher.avatar } }),
              _c("text", { staticClass: "activity-name" }, [
                _vm._v(_vm._s(item.publisher.nickname)),
              ]),
            ]),
            _c("view", { staticClass: "schedule" }, [
              _c("view", {
                staticClass: "schedule-bg",
                style: {
                  width:
                    (item.enter_current_number / item.enter_total_number) *
                      100 +
                    "%",
                },
              }),
              _c("text", { staticClass: "schedule-txt" }, [
                _vm._v(_vm._s(item.enter_status)),
              ]),
              _c("text", { staticClass: "schedule-num" }, [
                _vm._v(
                  _vm._s(item.enter_current_number) +
                    " / " +
                    _vm._s(item.enter_total_number)
                ),
              ]),
            ]),
            _c("view", { staticClass: "application-time" }, [
              _vm._v(" " + _vm._s(item.enter_deadline_time) + " "),
            ]),
          ]),
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageActivity/pages/list/index.scss":
/*!***************************************************!*\
  !*** ./src/packageActivity/pages/list/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageActivity/pages/list/index.vue":
/*!**************************************************!*\
  !*** ./src/packageActivity/pages/list/index.vue ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/list/index.vue");


var config = {"navigationBarTitleText":"活动列表","enablePullDownRefresh":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageActivity/pages/list/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageActivity/pages/list/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/packageActivity/pages/list/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/list/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageActivity/pages/list/index.vue?vue&type=template&id=6128b102&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/packageActivity/pages/list/index.vue?vue&type=template&id=6128b102&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6128b102_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6128b102&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/list/index.vue?vue&type=template&id=6128b102&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6128b102_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6128b102_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageActivity/pages/list/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map