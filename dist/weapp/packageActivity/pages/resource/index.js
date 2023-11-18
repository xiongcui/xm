(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageActivity/pages/resource/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/resource/index.vue":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/resource/index.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_45ab1bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=45ab1bef&scoped=true& */ "./src/packageActivity/pages/resource/index.vue?vue&type=template&id=45ab1bef&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageActivity/pages/resource/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_45ab1bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_45ab1bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "45ab1bef",
  "b036b786"
  
)

component.options.__file = "src/packageActivity/pages/resource/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/resource/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/resource/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/index.js */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/packageActivity/pages/resource/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "resource",
  data: function data() {
    return {
      visible: false,
      list: [],
      loading: false,
      pageNum: 1,
      pageSize: 10,
      banner: "",
      guide: "admit",
      hyper_tips: "",
      hyper_link: "",
      oid: "",
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      shareFriendsTitle: "",
      shareFriendsImg: "",
      shareFriendsPath: ""
    };
  },
  methods: {
    close: function close() {
      this.visible = false;
    },
    resourceGet: function resourceGet(oid) {
      this.oid = oid;

      if (Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* isLogin */ "b"])()) {
        this.materialsEvent({
          oid: oid
        });
      } else {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/pages/login/index?from=resource");
      }
    },
    copy: function copy() {
      var _this = this;

      wx.navigateToMiniProgram({
        appId: "wxdcd3d073e47d1742",
        path: this.hyper_link,
        extraData: {
          foo: "bar"
        },
        success: function success(res) {
          // 打开成功
          _this.visible = false;
        }
      });
    },
    paymentConfirm: function paymentConfirm() {
      var _this = this;

      wx.showModal({
        title: "支付确认",
        content: "\u9886\u53D6\u8D44\u6599\u9700\u652F\u4ED85\u91D1\u5E01",
        success: function success(res) {
          if (res.confirm) {
            console.log("用户点击确定");

            _this.materialsPayment({
              oid: _this.oid
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    query: function query(type) {
      if (type == "init") this.pageNum = 1;
      this.materialsList({
        page: this.pageNum,
        per_page: this.pageSize
      }, type);
    },
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
    goHome: function goHome() {
      wx.switchTab({
        url: "/pages/home/index",
        success: function success(e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return; // page.onLoad();
        }
      });
    },
    materialsList: function materialsList(params, type) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_2__[/* materialsList */ "bb"])(params);

              case 3:
                res = _context.sent;
                //隐藏loading 提示框
                wx.hideLoading(); //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context.next = 13;
                  break;
                }

                _this2.banner = res.data.data.items.banner;
                _this2.list = res.data.data.items.list;
                _this2.loading = true;
                _context.next = 21;
                break;

              case 13:
                if (!(type == "more")) {
                  _context.next = 21;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.list)) {
                  _context.next = 18;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("没有更多数据了～");
                _this2.loading = true;
                return _context.abrupt("return", false);

              case 18:
                data = res.data.data.items.list;
                _this2.list = _this2.list.concat(data);
                _this2.loading = true;

              case 21:
                _context.next = 25;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](0);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 23]]);
      }))();
    },
    materialsEvent: function materialsEvent(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_2__[/* materialsEvent */ "ab"])(params);

              case 3:
                res = _context2.sent;
                _this3.guide = res.data.data.guide;
                _this3.hyper_tips = res.data.data.content.hyper_tips;
                _this3.hyper_link = res.data.data.content.hyper_link;
                _this3.visible = true;
                _context2.next = 12;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }))();
    },
    materialsPayment: function materialsPayment(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_2__[/* materialsPayment */ "cb"])(params);

              case 3:
                res = _context3.sent;
                _this4.hyper_link = res.data.data.content.hyper_link;

                _this4.copy();

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
    shareInvite: function shareInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_2__[/* shareInvite */ "Rb"])(params);

              case 3:
                res = _context4.sent;
                _context4.next = 8;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }))();
    },
    shareInviteInfo: function shareInviteInfo(params) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee5() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_2__[/* shareInviteInfo */ "Sb"])(params);

              case 3:
                res = _context5.sent;
                _this5.shareTitle = res.data.data.title;
                _this5.shareImg = res.data.data.imageUrl;
                _this5.sharePath = res.data.data.path;
                _context5.next = 11;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }))();
    },
    shareFriendsInvite: function shareFriendsInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee6() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_2__[/* shareInvite */ "Rb"])(params);

              case 3:
                res = _context6.sent;
                _context6.next = 8;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }))();
    },
    shareFriendsInviteInfo: function shareFriendsInviteInfo(params) {
      var _this6 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee7() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_2__[/* shareInviteInfo */ "Sb"])(params);

              case 3:
                res = _context7.sent;
                _this6.shareFriendsTitle = res.data.data.title;
                _this6.shareFriendsImg = res.data.data.imageUrl;
                _this6.shareFriendsPath = res.data.data.path;
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
    }
  },
  mounted: function mounted() {
    this.query("init");
    this.shareInviteInfo({
      source: "share_details",
      project: "materials"
    });
    this.shareFriendsInviteInfo({
      source: "friends_circle",
      project: "materials"
    });
  },
  onReachBottom: function onReachBottom() {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;

    if (this.loading) {
      this.onMore();
    }
  },
  onShareAppMessage: function onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      project: "materials"
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath // 路径，传递参数到指定页面。

    };
  },
  onShareTimeline: function onShareTimeline() {
    this.shareFriendsInvite({
      source: "friends_circle",
      project: "materials"
    });
    return {
      title: this.shareFriendsTitle,
      imageUrl: this.shareFriendsImg,
      path: this.shareFriendsPath // 路径，传递参数到指定页面。

    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/resource/index.vue?vue&type=template&id=45ab1bef&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/resource/index.vue?vue&type=template&id=45ab1bef&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "resource" }, [
    _c("view", { staticClass: "resource-banner" }, [
      _c("image", {
        attrs: { mode: "widthFix", src: _vm.banner },
        on: { tap: _vm.goHome },
      }),
    ]),
    _c(
      "view",
      { staticClass: "resource-list" },
      _vm._l(_vm.list, function (item, index) {
        return _c("view", { key: index, staticClass: "resource-box" }, [
          item.is_hot
            ? _c("image", {
                staticClass: "resource-hot",
                attrs: {
                  mode: "scaleToFill",
                  src: "https://yuepai-oss.qubeitech.com/static/images/hot.png",
                },
              })
            : _vm._e(),
          _c("view", { staticClass: "resource-left" }, [
            _c("image", { attrs: { mode: "aspectFill", src: item.cover } }),
          ]),
          _c("view", { staticClass: "resource-right" }, [
            _c("view", { staticClass: "resource-title" }, [
              _vm._v(_vm._s(item.title)),
            ]),
            _c("view", { staticClass: "resource-desc" }, [
              _vm._v(" " + _vm._s(item.subtitle) + " "),
            ]),
            _c("view", { staticClass: "resource-get" }, [
              _c("text", { staticClass: "resource-get-num" }, [
                _vm._v("已被领取：" + _vm._s(item.click_cnt) + "次"),
              ]),
              _c(
                "text",
                {
                  staticClass: "resource-btn",
                  on: {
                    tap: function ($event) {
                      return _vm.resourceGet(item.oid)
                    },
                  },
                },
                [_vm._v("我要领取")]
              ),
            ]),
          ]),
        ])
      }),
      0
    ),
    _vm.visible
      ? _c("view", { staticClass: "resource-modal", on: { tap: _vm.close } }, [
          _c("view", { staticClass: "resource-content" }, [
            _c("view", { staticClass: "resource-content-title" }, [
              _vm._v(" 获取资料 "),
            ]),
            _c("view", { staticClass: "resource-msg" }, [
              _vm._v(" " + _vm._s(_vm.hyper_tips) + " "),
            ]),
            _vm.guide == "admit"
              ? _c("view", { staticClass: "resource-operate" }, [
                  _c(
                    "view",
                    {
                      staticClass: "resource-now-btn",
                      on: {
                        tap: function ($event) {
                          $event.stopPropagation()
                          return _vm.copy.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v(" 立即领取 ")]
                  ),
                ])
              : _vm._e(),
            _vm.guide == "payment"
              ? _c("view", { staticClass: "resource-operate2" }, [
                  _c(
                    "view",
                    {
                      staticClass: "resource-cancle-btn",
                      on: {
                        tap: function ($event) {
                          $event.stopPropagation()
                          return _vm.close.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v(" 暂时放弃 ")]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: "resource-now-btn",
                      on: {
                        tap: function ($event) {
                          $event.stopPropagation()
                          return _vm.paymentConfirm.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v(" 立即领取 ")]
                  ),
                ])
              : _vm._e(),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageActivity/pages/resource/index.scss":
/*!*******************************************************!*\
  !*** ./src/packageActivity/pages/resource/index.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageActivity/pages/resource/index.vue":
/*!******************************************************!*\
  !*** ./src/packageActivity/pages/resource/index.vue ***!
  \******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/resource/index.vue");


var config = {"navigationBarTitleText":"领取资料","enablePullDownRefresh":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageActivity/pages/resource/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageActivity/pages/resource/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/packageActivity/pages/resource/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/resource/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageActivity/pages/resource/index.vue?vue&type=template&id=45ab1bef&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/packageActivity/pages/resource/index.vue?vue&type=template&id=45ab1bef&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45ab1bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=45ab1bef&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/resource/index.vue?vue&type=template&id=45ab1bef&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45ab1bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45ab1bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageActivity/pages/resource/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map