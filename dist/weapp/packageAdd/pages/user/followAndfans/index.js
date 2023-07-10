(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/followAndfans/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/followAndfans/index.vue":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/followAndfans/index.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_fc1a9a4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=fc1a9a4a&scoped=true& */ "./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=template&id=fc1a9a4a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_fc1a9a4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_fc1a9a4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "fc1a9a4a",
  "33882b4d"
  
)

component.options.__file = "src/packageAdd/pages/user/followAndfans/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/followAndfans/index.scss");
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
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "followAndfans",
  data: function data() {
    return {
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      type: "follow",
      pageNum: 1,
      pageSize: 10
    };
  },
  methods: {
    gozhuye: function gozhuye(uuid) {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageMoka/pages/moka/editshow/index?uuid=" + uuid);
    },
    // 点击tab切换
    changeItem: function changeItem(index, type) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
        this.type = type;
        this.pageNum = 1;
        this.list = [];
        this.query();
      }
    },
    bindChange: function bindChange(e) {
      this.currentTab = e.detail.current;
    },
    scrollToLower: function scrollToLower() {
      this.pageNum++;
      this.query();
    },
    follow: function follow(row) {
      this.userFollow({
        follow_uuid: row.followed_id || row.follower_id
      });
    },
    unfollow: function unfollow(row) {
      var _this = this;

      wx.showModal({
        title: "温馨提示",
        content: "确定不再关注？",
        success: function success(res) {
          if (res.confirm) {
            console.log("用户点击确定");

            _this.userUnfollow({
              unfollow_uuid: row.followed_id || row.follower_id
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    query: function query() {
      var params = {
        page: this.pageNum,
        per_page: this.pageSize
      };

      if (this.type == "follow") {
        this.followerList(params);
      } else {
        this.followedList(params);
      }
    },
    followerList: function followerList(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* followerList */ "x"])(params);

              case 3:
                res = _context.sent;

                if (!(!res.data.data.items || !res.data.data.items.length)) {
                  _context.next = 7;
                  break;
                }

                errortip("没有更多数据了～");
                return _context.abrupt("return", false);

              case 7:
                data = res.data.data.items;
                _this2.list = _this2.list.concat(data);
                _context.next = 13;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    },
    followedList: function followedList(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* followedList */ "w"])(params);

              case 3:
                res = _context2.sent;

                if (!(!res.data.data.items || !res.data.data.items.length)) {
                  _context2.next = 7;
                  break;
                }

                errortip("没有更多数据了～");
                return _context2.abrupt("return", false);

              case 7:
                data = res.data.data.items;
                _this3.list = _this3.list.concat(data);
                _context2.next = 13;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }))();
    },
    userFollow: function userFollow(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userFollow */ "Rb"])(params);

              case 3:
                res = _context3.sent;
                _this4.list = [];

                _this4.query();

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
    userUnfollow: function userUnfollow(params) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userUnfollow */ "dc"])(params);

              case 3:
                res = _context4.sent;
                _this5.list = [];

                _this5.query();

                _context4.next = 10;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    }
  },
  onLoad: function onLoad(options) {
    if (options.type) {
      this.type = options.type;

      if (this.type == "follow") {
        this.currentTab = 0;
      } else {
        this.currentTab = 1;
      }
    }

    var that = this; // 获取系统信息

    wx.getSystemInfo({
      success: function success(res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      }
    });
    this.query();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=template&id=fc1a9a4a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=template&id=fc1a9a4a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "followAndfans" }, [
    _c("view", { staticClass: "tab" }, [
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 0 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(0, "follow")
            },
          },
        },
        [_vm._v("关注")]
      ),
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 1 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(1, "fans")
            },
          },
        },
        [_vm._v("粉丝")]
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
            _c(
              "swiper-item",
              [
                _c(
                  "scroll-view",
                  {
                    style: { height: _vm.winHeight + "px" },
                    attrs: { "scroll-y": true, "lower-threshold": 200 },
                    on: { scrolltolower: _vm.scrollToLower },
                  },
                  [
                    _vm.list.length
                      ? _c(
                          "block",
                          _vm._l(_vm.list, function (item, index) {
                            return _c(
                              "view",
                              {
                                key: index,
                                staticClass: "follow_and_fans_box",
                              },
                              [
                                _c(
                                  "view",
                                  { staticClass: "follow_and_fans_left" },
                                  [
                                    _c("image", {
                                      staticClass: "avatar",
                                      attrs: {
                                        src: item.avatar
                                          ? item.avatar
                                          : "https://yuepai-oss.qubeitech.com/static/avatar_default.png",
                                      },
                                      on: {
                                        tap: function ($event) {
                                          return _vm.gozhuye(item.followed_id)
                                        },
                                      },
                                    }),
                                    _c(
                                      "view",
                                      { staticClass: "follow_and_fans_info" },
                                      [
                                        _c(
                                          "text",
                                          {
                                            staticClass:
                                              "follow_and_fans_nickname",
                                          },
                                          [_vm._v(_vm._s(item.nickname))]
                                        ),
                                        _c(
                                          "text",
                                          {
                                            staticClass:
                                              "follow_and_fans_identity",
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(item.career_list.join("|"))
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                _c(
                                  "view",
                                  { staticClass: "follow_and_fans_rt" },
                                  [
                                    item.is_followed == 0
                                      ? _c(
                                          "view",
                                          {
                                            staticClass: "followed_btn",
                                            on: {
                                              tap: function ($event) {
                                                return _vm.unfollow(item)
                                              },
                                            },
                                          },
                                          [_vm._v("已关注")]
                                        )
                                      : _vm._e(),
                                    item.is_followed == 1
                                      ? _c(
                                          "view",
                                          {
                                            staticClass: "followed_btn",
                                            on: {
                                              tap: function ($event) {
                                                return _vm.unfollow(item)
                                              },
                                            },
                                          },
                                          [_vm._v("互相关注")]
                                        )
                                      : _vm._e(),
                                  ]
                                ),
                              ]
                            )
                          }),
                          0
                        )
                      : _c("view", { staticClass: "none-data" }, [
                          _c("image", {
                            staticClass: "none-img",
                            attrs: {
                              src: "https://yuepai-oss.qubeitech.com/static/common/none.png",
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
            _c(
              "swiper-item",
              [
                _c(
                  "scroll-view",
                  {
                    style: { height: _vm.winHeight + "px" },
                    attrs: { "scroll-y": true, "lower-threshold": 200 },
                    on: { scrolltolower: _vm.scrollToLower },
                  },
                  [
                    _vm.list.length
                      ? _c(
                          "block",
                          _vm._l(_vm.list, function (item, index) {
                            return _c(
                              "view",
                              {
                                key: index,
                                staticClass: "follow_and_fans_box",
                              },
                              [
                                _c(
                                  "view",
                                  { staticClass: "follow_and_fans_left" },
                                  [
                                    _c("image", {
                                      staticClass: "avatar",
                                      attrs: {
                                        src: item.avatar
                                          ? item.avatar
                                          : "https://yuepai-oss.qubeitech.com/static/avatar_default.png",
                                      },
                                      on: {
                                        tap: function ($event) {
                                          return _vm.gozhuye(item.follower_id)
                                        },
                                      },
                                    }),
                                    _c(
                                      "view",
                                      { staticClass: "follow_and_fans_info" },
                                      [
                                        _c(
                                          "text",
                                          {
                                            staticClass:
                                              "follow_and_fans_nickname",
                                          },
                                          [_vm._v(_vm._s(item.nickname))]
                                        ),
                                        _c(
                                          "text",
                                          {
                                            staticClass:
                                              "follow_and_fans_identity",
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(item.career_list.join("|"))
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                _c(
                                  "view",
                                  { staticClass: "follow_and_fans_rt" },
                                  [
                                    item.is_follower == 0
                                      ? _c(
                                          "view",
                                          {
                                            staticClass: "followed_btn_red",
                                            on: {
                                              tap: function ($event) {
                                                return _vm.follow(item)
                                              },
                                            },
                                          },
                                          [_vm._v("回粉")]
                                        )
                                      : _vm._e(),
                                    item.is_follower == 1
                                      ? _c(
                                          "view",
                                          {
                                            staticClass: "followed_btn",
                                            on: {
                                              tap: function ($event) {
                                                return _vm.unfollow(item)
                                              },
                                            },
                                          },
                                          [_vm._v("互相关注")]
                                        )
                                      : _vm._e(),
                                  ]
                                ),
                              ]
                            )
                          }),
                          0
                        )
                      : _c("view", { staticClass: "none-data" }, [
                          _c("image", {
                            staticClass: "none-img",
                            attrs: {
                              src: "https://yuepai-oss.qubeitech.com/static/common/none.png",
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
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/followAndfans/index.scss":
/*!************************************************************!*\
  !*** ./src/packageAdd/pages/user/followAndfans/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/followAndfans/index.vue":
/*!***********************************************************!*\
  !*** ./src/packageAdd/pages/user/followAndfans/index.vue ***!
  \***********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/followAndfans/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/followAndfans/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=template&id=fc1a9a4a&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=template&id=fc1a9a4a&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fc1a9a4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=fc1a9a4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/followAndfans/index.vue?vue&type=template&id=fc1a9a4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fc1a9a4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fc1a9a4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/followAndfans/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map