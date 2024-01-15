(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageVip/pages/walletAccount/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/walletAccount/index.vue":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/walletAccount/index.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1e8fad26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1e8fad26&scoped=true& */ "./src/packageVip/pages/walletAccount/index.vue?vue&type=template&id=1e8fad26&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageVip/pages/walletAccount/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_1e8fad26_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_1e8fad26_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "1e8fad26",
  "52f1b1bb"
  
)

component.options.__file = "src/packageVip/pages/walletAccount/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/walletAccount/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/walletAccount/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/packageVip/pages/walletAccount/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/index.js */ "./src/api/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "walletAccount",
  data: function data() {
    return {
      commissionVisible: false,
      virtual: {
        amount: 0,
        next_take_amount: 0,
        take_amount: 0,
        take_amount_diff: 0,
        take_amount_prog: 0,
        take_amount_auth: 0
      },
      amount: 0,
      shareTitle: "",
      shareImg: "",
      sharePath: ""
    };
  },
  methods: {
    goDetail: function goDetail(type) {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "c"])("/packageVip/pages/accounDetails/index?type=" + type);
    },
    inviteFriends: function inviteFriends() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "c"])("/packageAdd/pages/user/inviteGift/index");
    },
    withdrawal: function withdrawal(type) {
      if (type == 0 && this.virtual.take_amount_auth == 0) {
        this.commissionVisible = true;
        return false;
      }

      Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "c"])("/packageVip/pages/withdrawal/index?type=" + type);
    },
    commissionClose: function commissionClose() {
      this.commissionVisible = false;
    },
    acctInfo: function acctInfo(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_4__[/* acctInfo */ "a"])(params);

              case 3:
                res = _context.sent;
                _this.virtual = res.data.data.wallet.virtual;
                _this.amount = res.data.data.wallet.money.amount;
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    shareInvite: function shareInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_4__[/* shareInvite */ "bc"])(params);

              case 3:
                res = _context2.sent;
                _context2.next = 8;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    shareInviteInfo: function shareInviteInfo(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_4__[/* shareInviteInfo */ "cc"])(params);

              case 3:
                res = _context3.sent;
                _this2.shareTitle = res.data.data.title;
                _this2.shareImg = res.data.data.imageUrl;
                _this2.sharePath = res.data.data.path;
                _context3.next = 11;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }))();
    }
  },
  onShareAppMessage: function onShareAppMessage() {
    this.shareInvite({
      source: "share_friend",
      type: "wechat"
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath // 路径，传递参数到指定页面。

    };
  },
  onShareTimeline: function onShareTimeline() {
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath // 路径，传递参数到指定页面。

    };
  },
  mounted: function mounted() {
    this.acctInfo("");
    this.shareInviteInfo({
      source: "share_friend",
      type: "wechat"
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/walletAccount/index.vue?vue&type=template&id=1e8fad26&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/walletAccount/index.vue?vue&type=template&id=1e8fad26&scoped=true& ***!
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
  return _c("view", { staticClass: "wallet-account" }, [
    _c("view", { staticClass: "commission" }, [
      _c("view", { staticClass: "commission-top" }, [
        _c("view", { staticClass: "commission-title" }, [_vm._v(" 佣金账户 ")]),
        _c(
          "view",
          {
            staticClass: "account-detail",
            on: {
              tap: function ($event) {
                return _vm.goDetail(0)
              },
            },
          },
          [_vm._v("查看明细 >")]
        ),
      ]),
      _c("view", { staticClass: "commission-ct" }, [
        _c("view", { staticClass: "commission-left" }, [
          _c("view", { staticClass: "commission-price" }, [
            _vm._v(" ¥" + _vm._s(_vm.virtual.amount) + " "),
          ]),
          _c("view", { staticClass: "progress" }, [
            _c(
              "view",
              {
                staticClass: "progress-box",
                style: {
                  left: _vm.virtual.take_amount_prog * 100 + "%",
                },
              },
              [
                _c("view", { staticClass: "progress-circle" }, [
                  _vm.virtual.take_amount_prog < 0.7
                    ? _c(
                        "view",
                        {
                          staticClass: "progress-tips",
                          style: {
                            left:
                              _vm.virtual.take_amount_prog <= 0.1
                                ? "30px"
                                : "0px",
                          },
                        },
                        [
                          _vm._v(
                            " 差" +
                              _vm._s(_vm.virtual.take_amount_diff) +
                              "元可提现 "
                          ),
                          _c("text", { staticClass: "triangle" }),
                        ]
                      )
                    : _vm._e(),
                  _vm.virtual.take_amount_prog >= 0.7 &&
                  _vm.virtual.take_amount_prog <= 0.9
                    ? _c(
                        "view",
                        {
                          staticClass: "progress-tips",
                          style: {
                            left: "-50px",
                          },
                        },
                        [
                          _vm._v(
                            " 差" +
                              _vm._s(_vm.virtual.take_amount_diff) +
                              "元可提现 "
                          ),
                          _c("text", { staticClass: "triangle" }),
                        ]
                      )
                    : _vm._e(),
                  _vm.virtual.take_amount_prog >= 0.9 &&
                  _vm.virtual.take_amount_prog <= 1
                    ? _c(
                        "view",
                        {
                          staticClass: "progress-tips",
                          style: {
                            left: "-80px",
                          },
                        },
                        [
                          _vm._v(
                            " 差" +
                              _vm._s(_vm.virtual.take_amount_diff) +
                              "元可提现 "
                          ),
                          _c("text", { staticClass: "triangle" }),
                        ]
                      )
                    : _vm._e(),
                ]),
              ]
            ),
          ]),
        ]),
        _c("view", { staticClass: "commission-right" }, [
          _c("view", { staticClass: "commission-price-box" }, [
            _c("text", { staticClass: "symbol" }, [_vm._v("¥")]),
            _c("text", { staticClass: "price" }, [
              _vm._v(_vm._s(_vm.virtual.next_take_amount)),
            ]),
            _c("text", { staticClass: "unit" }, [_vm._v("元")]),
          ]),
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/weChat-withdrawal.png",
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "commission-bt" }, [
        _c("view", { staticClass: "commission-bt-item" }, [
          _c("text", { staticClass: "commission-tips" }, [
            _vm._v(" 佣金收入达到100元及以上即可提现 "),
          ]),
          _c(
            "text",
            {
              staticClass: "commission-btn2",
              on: {
                tap: function ($event) {
                  return _vm.withdrawal(0)
                },
              },
            },
            [_vm._v("提现")]
          ),
        ]),
        _c("view", { staticClass: "commission-bt-item" }, [
          _c("text", { staticClass: "commission-tips" }, [
            _vm._v(" 佣金提现金额必须是100元的整数倍 "),
          ]),
          _c(
            "text",
            { staticClass: "commission-btn", on: { tap: _vm.inviteFriends } },
            [_vm._v("去赚佣金")]
          ),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "commission" }, [
      _c("view", { staticClass: "commission-top" }, [
        _c("view", { staticClass: "commission-title" }, [_vm._v(" 现金账户 ")]),
        _c(
          "view",
          {
            staticClass: "account-detail",
            on: {
              tap: function ($event) {
                return _vm.goDetail(1)
              },
            },
          },
          [_vm._v("查看明细 >")]
        ),
      ]),
      _c("view", { staticClass: "cash" }, [
        _c("view", { staticClass: "cash-price" }, [
          _vm._v(" ¥" + _vm._s(_vm.amount) + " "),
        ]),
        _c(
          "view",
          {
            staticClass: "cash-btn",
            on: {
              tap: function ($event) {
                return _vm.withdrawal(1)
              },
            },
          },
          [_vm._v(" 提现 ")]
        ),
      ]),
    ]),
    _vm.commissionVisible
      ? _c(
          "view",
          { staticClass: "commission-modal", on: { tap: _vm.commissionClose } },
          [
            _c("view", { staticClass: "commission-ct" }, [
              _c(
                "button",
                { staticClass: "share-btn", attrs: { "open-type": "share" } },
                [
                  _c("image", {
                    attrs: {
                      src: "https://yuepai-oss.qubeitech.com/static/images/withdrawal-tips.png",
                      mode: "widthFix",
                    },
                    on: {
                      tap: function ($event) {
                        $event.stopPropagation()
                        return _vm.inviteFriends.apply(null, arguments)
                      },
                    },
                  }),
                ]
              ),
            ]),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageVip/pages/walletAccount/index.scss":
/*!*******************************************************!*\
  !*** ./src/packageVip/pages/walletAccount/index.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageVip/pages/walletAccount/index.vue":
/*!******************************************************!*\
  !*** ./src/packageVip/pages/walletAccount/index.vue ***!
  \******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/walletAccount/index.vue");


var config = {"navigationBarTitleText":"钱包账户"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageVip/pages/walletAccount/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageVip/pages/walletAccount/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/packageVip/pages/walletAccount/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/walletAccount/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageVip/pages/walletAccount/index.vue?vue&type=template&id=1e8fad26&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/packageVip/pages/walletAccount/index.vue?vue&type=template&id=1e8fad26&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e8fad26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1e8fad26&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/walletAccount/index.vue?vue&type=template&id=1e8fad26&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e8fad26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e8fad26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageVip/pages/walletAccount/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map