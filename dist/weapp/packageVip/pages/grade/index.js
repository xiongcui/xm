(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageVip/pages/grade/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/grade/index.vue":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/grade/index.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=367a58e0&scoped=true& */ "./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "367a58e0",
  "8f8eec44"
  
)

component.options.__file = "src/packageVip/pages/grade/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageVip/pages/grade/index.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "grade",
  data: function data() {
    return {
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      duration: 500,
      interval: 5000,
      nickname: "",
      growth: "",
      level: "",
      //   list: ["LV1", "LV2", "LV3", "LV4", "LV5", "LV6", "LV7"],
      list: [],
      current: 0,
      commonList: [],
      dailyList: [],
      all_level_item: {},
      cur_level_item: {
        level: "",
        limit: 0,
        tips: ""
      },
      next_level: ""
    };
  },
  methods: {
    bindChange: function bindChange(e) {
      this.current = e.detail.current;
      this.cur_level_item = this.all_level_item[this.list[e.detail.current].level];
    },
    clickChange: function clickChange(index) {
      this.current = index;
      this.cur_level_item = this.all_level_item[this.list[index].level];
    },
    goGrowthGuide: function goGrowthGuide() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "d"])("/packageVip/pages/growthGuide/index");
    },
    queryRuleList: function queryRuleList() {
      this.ruleList({
        class_type: "growth"
      });
    },
    openUrl: function openUrl(url) {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "d"])(url);
    },
    goVip: function goVip() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "d"])("/packageVip/pages/vip/index");
    },
    ruleList: function ruleList(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* ruleList */ "Wb"])(params);

              case 3:
                res = _context.sent;

                if (res.data.data) {
                  //   this.taskList = res.data.data;
                  _this.commonList = res.data.data.common;
                  _this.dailyList = res.data.data.daily;
                } else {
                  _this.pageNum = 1;
                  _this.commonList = [];
                  _this.dailyList = []; //   this.taskList = [];
                }

                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    growthInfo: function growthInfo(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* growthInfo */ "N"])(params);

              case 3:
                res = _context2.sent;
                _this2.nickname = res.data.data.growth.nickname;
                _this2.growth = res.data.data.growth.growth;
                _this2.level = res.data.data.growth.level;
                _this2.next_level = res.data.data.growth.next_level;
                _this2.list = res.data.data.all_level_list;
                _this2.all_level_item = res.data.data.all_level_item;
                _this2.cur_level_item = res.data.data.cur_level_item;
                res.data.data.all_level_list.map(function (item, index) {
                  if (item.proc == "doing") {
                    _this2.current = index;
                  }
                });
                _context2.next = 16;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 14]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.growthInfo("");
    this.queryRuleList();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true& ***!
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
  return _c("view", { staticClass: "grade" }, [
    _c(
      "view",
      { staticClass: "grade-top" },
      [
        _c("view", { staticClass: "grade-info" }, [
          _c("view", { staticClass: "grade-info-left" }, [
            _c("view", { staticClass: "grade-info-box" }, [
              _c("view", { staticClass: "grade-name" }, [
                _vm._v(_vm._s(_vm.nickname)),
              ]),
              _c("view", { staticClass: "grade-leavel" }, [
                _vm._v(_vm._s(_vm.level)),
              ]),
            ]),
            _c("view", { staticClass: "growth" }, [
              _vm._v("成长值：" + _vm._s(_vm.growth)),
            ]),
          ]),
          _c(
            "view",
            { staticClass: "grade-info-rt", on: { tap: _vm.goGrowthGuide } },
            [_vm._v(" 成长指南 ")]
          ),
        ]),
        _c(
          "swiper",
          {
            staticClass: "swiper-container",
            attrs: { current: _vm.current },
            on: { change: _vm.bindChange },
          },
          _vm._l(_vm.list, function (item, index) {
            return _c(
              "swiper-item",
              {
                key: index,
                staticClass: "swiper-item",
                on: {
                  tap: function ($event) {
                    return _vm.clickChange(index)
                  },
                },
              },
              [
                item.proc == "done" || item.proc == "doing"
                  ? _c(
                      "text",
                      {
                        staticClass: "swiper-leavel",
                        class: item.proc == "doing" ? "active" : "scale",
                      },
                      [_vm._v(_vm._s(item.level))]
                    )
                  : _c(
                      "text",
                      {
                        staticClass: "swiper-leavel grey",
                        class: item.proc == "doing" ? "active" : "scale",
                      },
                      [_vm._v(" " + _vm._s(item.level) + " ")]
                    ),
              ]
            )
          }),
          1
        ),
      ],
      1
    ),
    _c("view", { staticClass: "grade-card" }, [
      _c("text", { staticClass: "triangle" }),
      _c("view", { staticClass: "schedule" }, [
        _c("view", {
          staticClass: "schedule-bg",
          style: {
            width: _vm.cur_level_item.pct_rate * 100 + "%",
          },
        }),
        _c("text", { staticClass: "schedule-num" }, [
          _vm._v(_vm._s(_vm.cur_level_item.pct)),
        ]),
      ]),
      _c("view", { staticClass: "grade-card-txt" }, [
        _vm._v(_vm._s(_vm.cur_level_item.tips)),
      ]),
      _c("view", { staticClass: "fast-grade" }, [
        _c("text", { staticClass: "fast-grade-txt" }, [
          _vm._v("如何才能快速成长呢？"),
        ]),
        _c("text", { staticClass: "fast-grade-btn", on: { tap: _vm.goVip } }, [
          _vm._v("成为VIP会员翻倍成长"),
        ]),
      ]),
    ]),
    _c(
      "view",
      { staticClass: "grade-ct" },
      [
        _c("view", { staticClass: "grade-ct-title" }, [
          _vm._v(" 升级到" + _vm._s(_vm.next_level) + "，只需再 "),
        ]),
        _vm.dailyList.length
          ? _c(
              "block",
              [
                _c("view", { staticClass: "task-split" }, [
                  _vm._v("/ 日常任务 /"),
                ]),
                _vm._l(_vm.dailyList, function (item, index) {
                  return _c("view", { key: index, staticClass: "task-list" }, [
                    _c("view", { staticClass: "task-box" }, [
                      _c("view", { staticClass: "task-left" }, [
                        _c("view", { staticClass: "task-title-box" }, [
                          _c("text", { staticClass: "task-tag" }, [
                            _vm._v(_vm._s(item.limit_tips)),
                          ]),
                          _c("text", { staticClass: "task-title" }, [
                            _vm._v(_vm._s(item.order_name)),
                          ]),
                        ]),
                        _c("view", { staticClass: "task-label" }, [
                          _c("view", { staticClass: "coin-box" }, [
                            _c("text", { staticClass: "coin-tag" }, [
                              _vm._v("金币"),
                            ]),
                            _c("text", { staticClass: "coin-num" }, [
                              _vm._v(_vm._s(item.common_coin)),
                            ]),
                          ]),
                          _c("view", { staticClass: "growup-box" }, [
                            _c("text", { staticClass: "growup-tag" }, [
                              _vm._v("成长值"),
                            ]),
                            _c("text", { staticClass: "growup-num" }, [
                              _vm._v("普通：" + _vm._s(item.common_growth)),
                            ]),
                            _c("text", { staticClass: "growup-num" }, [
                              _vm._v("会员：" + _vm._s(item.member_growth)),
                            ]),
                          ]),
                        ]),
                        item.is_schedule
                          ? _c("view", { staticClass: "task-schedule" }, [
                              _vm._v(" " + _vm._s(item.schedule_desc) + " "),
                            ])
                          : _vm._e(),
                      ]),
                      _c("view", { staticClass: "task-rt" }, [
                        item.finish_status
                          ? _c("text", { staticClass: "completed" }, [
                              _vm._v(_vm._s(item.finish_label)),
                            ])
                          : _c(
                              "text",
                              {
                                staticClass: "tocomplete",
                                on: {
                                  tap: function ($event) {
                                    return _vm.openUrl(item.redirect_url)
                                  },
                                },
                              },
                              [_vm._v(_vm._s(item.finish_label))]
                            ),
                      ]),
                    ]),
                  ])
                }),
              ],
              2
            )
          : _vm._e(),
        _vm.commonList.length
          ? _c(
              "block",
              [
                _c("view", { staticClass: "task-split" }, [
                  _vm._v("/ 新手任务 /"),
                ]),
                _vm._l(_vm.commonList, function (item, index) {
                  return _c("view", { key: index, staticClass: "task-list" }, [
                    _c("view", { staticClass: "task-box" }, [
                      _c("view", { staticClass: "task-left" }, [
                        _c("view", { staticClass: "task-title-box" }, [
                          _c("text", { staticClass: "task-tag" }, [
                            _vm._v(_vm._s(item.limit_tips)),
                          ]),
                          _c("text", { staticClass: "task-title" }, [
                            _vm._v(_vm._s(item.order_name)),
                          ]),
                        ]),
                        _c("view", { staticClass: "task-label" }, [
                          _c("view", { staticClass: "coin-box" }, [
                            _c("text", { staticClass: "coin-tag" }, [
                              _vm._v("金币"),
                            ]),
                            _c("text", { staticClass: "coin-num" }, [
                              _vm._v(_vm._s(item.common_coin)),
                            ]),
                          ]),
                          _c("view", { staticClass: "growup-box" }, [
                            _c("text", { staticClass: "growup-tag" }, [
                              _vm._v("成长值"),
                            ]),
                            _c("text", { staticClass: "growup-num" }, [
                              _vm._v("普通：" + _vm._s(item.common_growth)),
                            ]),
                            _c("text", { staticClass: "growup-num" }, [
                              _vm._v("会员：" + _vm._s(item.member_growth)),
                            ]),
                          ]),
                        ]),
                        item.is_schedule
                          ? _c("view", { staticClass: "task-schedule" }, [
                              _vm._v(" " + _vm._s(item.schedule_desc) + " "),
                            ])
                          : _vm._e(),
                      ]),
                      _c("view", { staticClass: "task-rt" }, [
                        item.finish_status
                          ? _c("text", { staticClass: "completed" }, [
                              _vm._v(_vm._s(item.finish_label)),
                            ])
                          : _c(
                              "text",
                              {
                                staticClass: "tocomplete",
                                on: {
                                  tap: function ($event) {
                                    return _vm.openUrl(item.redirect_url)
                                  },
                                },
                              },
                              [_vm._v(_vm._s(item.finish_label))]
                            ),
                      ]),
                    ]),
                  ])
                }),
              ],
              2
            )
          : _vm._e(),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageVip/pages/grade/index.scss":
/*!***********************************************!*\
  !*** ./src/packageVip/pages/grade/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageVip/pages/grade/index.vue":
/*!**********************************************!*\
  !*** ./src/packageVip/pages/grade/index.vue ***!
  \**********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/grade/index.vue");


var config = {"navigationBarTitleText":"我的等级"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageVip/pages/grade/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=367a58e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageVip/pages/grade/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map