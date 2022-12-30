(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/coin/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/coin/index.vue":
/*!************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/coin/index.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4ae0bd12&scoped=true& */ "./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "4ae0bd12",
  "64d69c60"
  
)

component.options.__file = "src/packageAdd/pages/user/coin/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/coin/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "coin",
  data: function data() {
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
      pageSize: 10
    };
  },
  computed: {
    dailyList: function dailyList() {
      var arr = [];
      this.list.map(function (item) {
        if (item.code == "everyday_sign" || item.code == "invite_friends") {
          arr.push(item);
        }
      });
      return arr;
    },
    taskList: function taskList() {
      var arr = [];
      this.list.map(function (item) {
        if (item.code != "everyday_sign" && item.code != "invite_friends") {
          arr.push(item);
        }
      });
      return arr;
    }
  },
  methods: {
    // 点击tab切换
    changeItem: function changeItem(index, type) {
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
    bindChange: function bindChange(e) {
      this.currentTab = e.detail.current;
    },
    query: function query() {
      this.loading = false;
      this.coinItemList({
        page: this.pageNum,
        per_page: this.pageSize
      });
    },
    queryCoinList: function queryCoinList() {
      this.coinList({
        type: this.type
      });
    },
    goPay: function goPay() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "b"])("/packageAdd/pages/user/rechargecoin/index");
    },
    coinList: function coinList(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* coinList */ "j"])(params);

              case 3:
                res = _context.sent;

                if (res.data.data) {
                  _this.list = res.data.data;
                } else {
                  _this.list = [];
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
    coinItemList: function coinItemList(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* coinItemList */ "i"])(params);

              case 3:
                res = _context2.sent;

                if (!(!res.data.data && _this2.pageNum > 1 || !res.data.data.items.length && _this2.pageNum > 1)) {
                  _context2.next = 7;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("没有更多数据了～");
                return _context2.abrupt("return", false);

              case 7:
                data = res.data.data.items;
                console.log(data, "data");

                if (data) {
                  _this2.coinDetails = _this2.coinDetails.concat(data);
                } else {
                  _this2.coinDetails = [];
                }

                _this2.loading = true;
                _context2.next = 15;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }))();
    },
    coinAcct: function coinAcct(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* coinAcct */ "h"])(params);

              case 3:
                res = _context3.sent;
                _this3.coin = res.data.data.coin;
                _context3.next = 9;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    }
  },
  onLoad: function onLoad(options) {
    var that = this; // 获取系统信息

    wx.getSystemInfo({
      success: function success(res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      }
    });
  },
  onShow: function onShow() {
    this.currentTab = 0;
    this.type = "cost";
    this.queryCoinList();
    this.coinAcct("");
  },
  onReachBottom: function onReachBottom() {
    if (this.currentTab == 2) {
      console.log(111);

      if (this.loading) {
        this.pageNum++;
        this.query();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true& ***!
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
  return _c("view", { staticClass: "coin" }, [
    _c("view", { staticClass: "coin-bg" }, [
      _c("view", { staticClass: "coin-bg-left" }, [
        _c("view", { staticClass: "coin-total" }, [
          _vm._v(_vm._s(_vm.coin)),
          _c("text", { staticClass: "company" }, [_vm._v("金币")]),
        ]),
        _c("view", { staticClass: "coin-tips" }, [_vm._v("小金币大用途")]),
      ]),
      _c("view", { staticClass: "coin-bg-rt", on: { tap: _vm.goPay } }, [
        _vm._v(" 充值金币 "),
      ]),
    ]),
    _c("view", { staticClass: "coin-content" }, [
      _c("view", { staticClass: "tab" }, [
        _c(
          "view",
          {
            staticClass: "tab-item",
            class: _vm.currentTab == 0 ? "on" : "",
            on: {
              tap: function ($event) {
                return _vm.changeItem(0, "cost")
              },
            },
          },
          [_vm._v("金币用途")]
        ),
        _c(
          "view",
          {
            staticClass: "tab-item",
            class: _vm.currentTab == 1 ? "on" : "",
            on: {
              tap: function ($event) {
                return _vm.changeItem(1, "earn")
              },
            },
          },
          [_vm._v("获取金币")]
        ),
        _c(
          "view",
          {
            staticClass: "tab-item",
            class: _vm.currentTab == 2 ? "on" : "",
            on: {
              tap: function ($event) {
                return _vm.changeItem(2)
              },
            },
          },
          [_vm._v("金币明细")]
        ),
      ]),
      _c(
        "view",
        { staticClass: "content" },
        [
          _c(
            "swiper",
            {
              staticClass: "swiper-box",
              attrs: { current: _vm.currentTab, duration: "300" },
              on: { change: _vm.bindChange },
            },
            [
              _c("swiper-item", [
                _c(
                  "view",
                  { staticClass: "privilege-list" },
                  [
                    _c("view", { staticClass: "privilege-box" }, [
                      _c("view", { staticClass: "service blod" }, [
                        _vm._v("特权服务"),
                      ]),
                      _c("view", { staticClass: "vip blod" }, [_vm._v("会员")]),
                      _c("view", { staticClass: "novip blod" }, [
                        _vm._v("非会员"),
                      ]),
                    ]),
                    _vm._l(_vm.list, function (item, index) {
                      return _c(
                        "view",
                        { key: index, staticClass: "privilege-box" },
                        [
                          _c("view", { staticClass: "service" }, [
                            _vm._v(_vm._s(item.desc)),
                          ]),
                          _c("view", { staticClass: "vip red" }, [
                            _vm._v(_vm._s(item.member_coin)),
                          ]),
                          _c("view", { staticClass: "novip red" }, [
                            _vm._v(_vm._s(item.common_coin)),
                          ]),
                        ]
                      )
                    }),
                  ],
                  2
                ),
              ]),
              _c(
                "swiper-item",
                [
                  _vm.list.length
                    ? _c("block", [
                        _c(
                          "view",
                          { staticClass: "get-coin" },
                          [
                            _c("view", { staticClass: "coin-title" }, [
                              _vm._v("/ 日常奖励 /"),
                            ]),
                            _vm._l(_vm.dailyList, function (item, index) {
                              return _c(
                                "view",
                                {
                                  key: item.code + index,
                                  staticClass: "coin-task",
                                },
                                [
                                  _c("view", { staticClass: "task-info" }, [
                                    _c("view", { staticClass: "task-dian" }),
                                    _c("view", [
                                      _c(
                                        "text",
                                        { staticClass: "task-title" },
                                        [_vm._v(_vm._s(item.name))]
                                      ),
                                      _c("text", { staticClass: "task-coin" }, [
                                        _vm._v(
                                          "+" +
                                            _vm._s(item.common_coin) +
                                            "金币"
                                        ),
                                      ]),
                                    ]),
                                    _c("view", { staticClass: "task-tips" }, [
                                      _vm._v(_vm._s(item.desc)),
                                    ]),
                                  ]),
                                  _c("view", { staticClass: "task-btn" }, [
                                    _vm._v(_vm._s(item.event)),
                                  ]),
                                ]
                              )
                            }),
                            _c("view", { staticClass: "coin-title mt16" }, [
                              _vm._v("/ 任务奖励 /"),
                            ]),
                            _vm._l(_vm.taskList, function (item, index) {
                              return _c(
                                "view",
                                {
                                  key: item.code + index,
                                  staticClass: "coin-task",
                                },
                                [
                                  _c("view", { staticClass: "task-info" }, [
                                    _c("view", { staticClass: "task-dian" }),
                                    _c("view", [
                                      _c(
                                        "text",
                                        { staticClass: "task-title" },
                                        [_vm._v(_vm._s(item.name))]
                                      ),
                                      _c("text", { staticClass: "task-coin" }, [
                                        _vm._v(
                                          "+" +
                                            _vm._s(item.common_coin) +
                                            "金币"
                                        ),
                                      ]),
                                    ]),
                                    _c("view", { staticClass: "task-tips" }, [
                                      _vm._v(_vm._s(item.desc)),
                                    ]),
                                  ]),
                                  _c("view", { staticClass: "task-btn" }, [
                                    _vm._v(_vm._s(item.event)),
                                  ]),
                                ]
                              )
                            }),
                          ],
                          2
                        ),
                      ])
                    : _c("view", { staticClass: "none-data" }, [
                        _c("image", {
                          staticClass: "none-img",
                          attrs: {
                            src: __webpack_require__(/*! ../../../../assets/images/common/none.png */ "./src/assets/images/common/none.png"),
                            mode: "aspectFill",
                          },
                        }),
                        _c("view", [_vm._v("当前暂无信息哦～")]),
                      ]),
                ],
                1
              ),
              _c(
                "swiper-item",
                [
                  _vm.coinDetails.length
                    ? _c(
                        "block",
                        _vm._l(_vm.coinDetails, function (item, index) {
                          return _c(
                            "view",
                            { key: index, staticClass: "detailed-list" },
                            [
                              _c("view", { staticClass: "coin-task" }, [
                                _c("view", { staticClass: "task-info" }, [
                                  _c("view", [
                                    _c("text", { staticClass: "task-title" }, [
                                      _vm._v(_vm._s(item.rule_name)),
                                    ]),
                                  ]),
                                  _c("view", { staticClass: "task-tips" }, [
                                    _vm._v(_vm._s(item.create_at)),
                                  ]),
                                ]),
                                _c("view", { staticClass: "task-num" }, [
                                  _vm._v(_vm._s(item.coin)),
                                ]),
                              ]),
                            ]
                          )
                        }),
                        0
                      )
                    : _c("view", { staticClass: "none-data" }, [
                        _c("image", {
                          staticClass: "none-img",
                          attrs: {
                            src: __webpack_require__(/*! ../../../../assets/images/common/none.png */ "./src/assets/images/common/none.png"),
                            mode: "aspectFill",
                          },
                        }),
                        _c("view", [_vm._v("当前暂无信息哦～")]),
                      ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/coin/index.scss":
/*!***************************************************!*\
  !*** ./src/packageAdd/pages/user/coin/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/coin/index.vue":
/*!**************************************************!*\
  !*** ./src/packageAdd/pages/user/coin/index.vue ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/coin/index.vue");


var config = {"navigationBarTitleText":"金币中心"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/coin/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4ae0bd12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/coin/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map