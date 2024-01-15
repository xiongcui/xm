(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageActivity/pages/application/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/application/index.vue":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/application/index.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_45907065_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=45907065&scoped=true& */ "./src/packageActivity/pages/application/index.vue?vue&type=template&id=45907065&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageActivity/pages/application/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_45907065_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_45907065_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "45907065",
  "6aa54552"
  
)

component.options.__file = "src/packageActivity/pages/application/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/application/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/application/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageActivity/pages/application/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/index.js */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _utils_clickThrottle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/clickThrottle */ "./src/utils/clickThrottle.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "application",
  data: function data() {
    return {
      isIphoneX: false,
      message: "",
      payment: 1,
      scene_oid: "",
      teams_oid: "",
      title: "",
      address: "",
      begin_datetime: "",
      actual_payment: "",
      expense_details: [],
      payment_method: [],
      original_amount: "",
      reduce_payment: "",
      scene: "",
      role: "",
      service: "",
      apply_wait: "",
      roles_oid: ""
    };
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  methods: {
    choosePayment: function choosePayment(index) {
      this.payment_method.map(function (item) {
        item.is_select = 0;
      });
      this.payment_method[index].is_select = !this.payment_method[index].is_select ? 1 : 0;
    },
    confirmPayment: function confirmPayment() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])()) return;
      var params = {
        roles_oid: this.roles_oid
      };

      if (this.apply_wait) {
        params.apply_wait = this.apply_wait;
      }

      this.applicationPay(params);
    },
    sceneInfo: function sceneInfo(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* sceneInfo */ "Xb"])(params);

              case 3:
                res = _context.sent;
                _this2.title = res.data.data.topic.title;
                _this2.scene = res.data.data.selected.scene_name;
                _this2.role = res.data.data.selected.roles_name ? res.data.data.selected.roles_name : "";
                _this2.original_amount = res.data.data.topic.original_amount.amount;
                _this2.address = res.data.data.topic.address;
                _this2.begin_datetime = res.data.data.topic.begin_datetime;
                _this2.actual_payment = res.data.data.expense.details.actual_amount;
                _this2.reduce_payment = res.data.data.expense.details.reduce_amount;
                _this2.expense_details = res.data.data.expense.details.details;
                _this2.payment_method = res.data.data.payment_method;
                _context.next = 18;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 16]]);
      }))();
    },
    applicationPay: function applicationPay(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, data, _this;

        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* applicationPay */ "f"])(params);

              case 3:
                res = _context2.sent;
                data = res.data.data;

                if (data.pay_type == "wx_pay") {
                  _this = _this3;
                  wx.requestPayment({
                    timeStamp: data.req_data.result.timeStamp,
                    nonceStr: data.req_data.result.nonceStr,
                    package: data.req_data.result.package,
                    signType: data.req_data.result.signType,
                    paySign: data.req_data.result.paySign,
                    success: function success(res) {
                      console.log(res, "成功了");

                      _this.applyResult({
                        roles_oid: _this.roles_oid
                      });
                    },
                    fail: function fail(res) {},
                    complete: function complete(res) {}
                  });
                } else if (data.pay_type == "no_pay") {
                  _this3.applyResult({
                    roles_oid: _this3.roles_oid
                  });
                }

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
    applyResult: function applyResult(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wx.showLoading({
                  title: "正在提交中..."
                });
                _context3.prev = 1;
                _context3.next = 4;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* applyResult */ "l"])(params);

              case 4:
                res = _context3.sent;
                wx.hideLoading();
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageActivity/pages/applicationConfirm/index?result=" + res.data.data.result + "&desc=" + res.data.data.desc + "&wechat_qrc=" + res.data.data.wechat_qrc);
                _context3.next = 11;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 9]]);
      }))();
    }
  },
  onLoad: function onLoad(options) {
    if (options.roles_oid) {
      this.roles_oid = options.roles_oid;
      this.sceneInfo({
        roles_oid: this.roles_oid
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/application/index.vue?vue&type=template&id=45907065&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/application/index.vue?vue&type=template&id=45907065&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "application" }, [
    _c("view", { staticClass: "application-info" }, [
      _c("view", { staticClass: "application-info-top" }, [
        _c("view", { staticClass: "application-title" }, [
          _vm._v(" " + _vm._s(_vm.title) + " "),
        ]),
        _c("view", { staticClass: "application-bt" }, [
          _c("view", { staticClass: "application-loction" }, [
            _c("image", {
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/common/local.png",
              },
            }),
            _vm._v(" " + _vm._s(_vm.address) + " "),
          ]),
          _c("view", { staticClass: "application-time" }, [
            _c("image", {
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/time.png",
              },
            }),
            _vm._v(" " + _vm._s(_vm.begin_datetime) + " "),
          ]),
          _c("view", { staticClass: "application-price" }, [
            _vm._v(" ¥"),
            _c("text", { staticClass: "price" }, [
              _vm._v(_vm._s(_vm.original_amount)),
            ]),
            _vm._v("元 "),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "application-info-bt" }, [
        _c("view", { staticClass: "application-item" }, [
          _c("view", { staticClass: "application-label" }, [_vm._v(" 场景 ")]),
          _c("view", { staticClass: "application-content-none" }, [
            _vm._v(" " + _vm._s(_vm.scene)),
          ]),
        ]),
        _vm.role
          ? _c("view", { staticClass: "application-item" }, [
              _c("view", { staticClass: "application-label" }, [
                _vm._v(" 角色 "),
              ]),
              _c("view", { staticClass: "application-content-none" }, [
                _vm._v(" " + _vm._s(_vm.role)),
              ]),
            ])
          : _vm._e(),
      ]),
    ]),
    _c(
      "view",
      { staticClass: "application-cost" },
      [
        _vm._l(_vm.expense_details, function (item, index) {
          return _c("view", { key: index, staticClass: "application-item" }, [
            _c("view", { staticClass: "application-label" }, [
              _vm._v(" " + _vm._s(item.name) + " "),
              item.tips
                ? _c("view", { staticClass: "application-tag" }, [
                    _vm._v(" " + _vm._s(item.tips) + " "),
                  ])
                : _vm._e(),
            ]),
            _c("view", { staticClass: "application-content" }, [
              _vm._v(" ¥ " + _vm._s(item.amount)),
            ]),
          ])
        }),
        _c("view", { staticClass: "application-split" }),
        _c("view", { staticClass: "application-item" }, [
          _c("view", { staticClass: "application-label blod" }, [
            _vm._v(" 实际支付 "),
          ]),
          _c("view", { staticClass: "application-content price-style" }, [
            _vm._v(" ¥" + _vm._s(_vm.actual_payment)),
          ]),
        ]),
      ],
      2
    ),
    _c(
      "view",
      { staticClass: "payment" },
      _vm._l(_vm.payment_method, function (item, index) {
        return _c("view", { key: index, staticClass: "application-item" }, [
          _c("view", { staticClass: "application-label" }, [
            _vm._v(" " + _vm._s(item.method) + " "),
          ]),
          _c("view", { staticClass: "application-content" }, [
            _c(
              "view",
              {
                staticClass: "check_box",
                class: item.is_select === 1 ? "check_box_ed" : "",
                on: {
                  tap: function ($event) {
                    return _vm.choosePayment(index)
                  },
                },
              },
              [
                _c("image", {
                  attrs: {
                    src:
                      "https://yuepai-oss.qubeitech.com/static/images/common/select2_" +
                      (item.is_select === 1 ? 1 : 0) +
                      ".png",
                  },
                }),
              ]
            ),
          ]),
        ])
      }),
      0
    ),
    _c(
      "view",
      {
        staticClass: "application-fixed",
        class: _vm.isIphoneX ? "fix-iphonex-button" : "",
      },
      [
        _c("view", { staticClass: "application-fixed-left" }, [
          _c("view", { staticClass: "application-fixed-price" }, [
            _vm._v(" ¥" + _vm._s(_vm.actual_payment) + " "),
          ]),
          _c("view", { staticClass: "reduction" }, [
            _vm._v("共减免¥" + _vm._s(_vm.reduce_payment)),
          ]),
        ]),
        _c(
          "view",
          {
            staticClass: "application-fixed-rt",
            on: { tap: _vm.confirmPayment },
          },
          [_vm._v(" 确认支付 ")]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageActivity/pages/application/index.scss":
/*!**********************************************************!*\
  !*** ./src/packageActivity/pages/application/index.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageActivity/pages/application/index.vue":
/*!*********************************************************!*\
  !*** ./src/packageActivity/pages/application/index.vue ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/application/index.vue");


var config = {"navigationBarTitleText":"报名支付","enablePullDownRefresh":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageActivity/pages/application/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageActivity/pages/application/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/packageActivity/pages/application/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/application/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageActivity/pages/application/index.vue?vue&type=template&id=45907065&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/packageActivity/pages/application/index.vue?vue&type=template&id=45907065&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45907065_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=45907065&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/application/index.vue?vue&type=template&id=45907065&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45907065_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45907065_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageActivity/pages/application/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map