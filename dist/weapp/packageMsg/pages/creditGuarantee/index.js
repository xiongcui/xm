(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMsg/pages/creditGuarantee/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/creditGuarantee/index.vue":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/creditGuarantee/index.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_181009a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=181009a8&scoped=true& */ "./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=template&id=181009a8&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_181009a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_181009a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "181009a8",
  "a41eb00c"
  
)

component.options.__file = "src/packageMsg/pages/creditGuarantee/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/packageMsg/pages/creditGuarantee/index.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "creditGuarantee",
  data: function data() {
    return {
      is_security: 0,
      is_member: 0
    };
  },
  methods: {
    goVip: function goVip() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "c"])("/packageVip/pages/vip/index");
    },
    submitSecurity: function submitSecurity() {
      this.securityOpen({
        amount: 300
      });
    },
    securityOpen: function securityOpen(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data, _this;

        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* securityOpen */ "ub"])(params);

              case 3:
                res = _context.sent;
                console.log(res, "");
                data = res.data.data;
                _this = _this2;
                wx.requestPayment({
                  timeStamp: data.result.timeStamp,
                  nonceStr: data.result.nonceStr,
                  package: data.result.package,
                  signType: data.result.signType,
                  paySign: data.result.paySign,
                  success: function success(res) {
                    console.log(res, "成功了");
                    Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* errortip */ "a"])("存入成功");

                    _this.securityInfo("");
                  },
                  fail: function fail(res) {},
                  complete: function complete(res) {}
                });
                _context.next = 12;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    securityInfo: function securityInfo(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* securityInfo */ "tb"])(params);

              case 3:
                res = _context2.sent;
                _this3.is_security = res.data.data.is_security;
                _this3.is_member = res.data.data.is_member;
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
    }
  },
  created: function created() {
    this.securityInfo("");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=template&id=181009a8&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=template&id=181009a8&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "credit-guarantee" }, [
    _c("view", { staticClass: "credit-top" }, [
      _c("view", [_vm._v("缴纳保证金")]),
      _c("image", {
        staticClass: "security",
        attrs: {
          src: "https://yuepai-oss.qubeitech.com/static/images/common/security.png",
        },
      }),
      _c("view", [_vm._v("享专属特权")]),
      _c("view", { staticClass: "credit-info" }, [
        _c("view", { staticClass: "credit-item" }, [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/securityRed.png",
            },
          }),
          _vm._v(" 信用标识提醒 "),
        ]),
        _c("view", { staticClass: "credit-item" }, [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/userRed.png",
            },
          }),
          _vm._v(" 约拍优质模特 "),
        ]),
        _c("view", { staticClass: "credit-item" }, [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/guaranteeRed.png",
            },
          }),
          _vm._v(" 约拍信用担保 "),
        ]),
        _c("view", { staticClass: "credit-item" }, [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/giftRed.png",
            },
          }),
          _vm._v(" 尊享福利特权 "),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "price" }, [_vm._v(" 300元 ")]),
    _vm.is_security === 0 && _vm.is_member == 0
      ? _c("view", [
          _c(
            "view",
            { staticClass: "submit-red", on: { tap: _vm.submitSecurity } },
            [_vm._v("立即存入")]
          ),
          _c("view", { staticClass: "or" }, [_vm._v("或")]),
          _c("view", { staticClass: "submit-yellow", on: { tap: _vm.goVip } }, [
            _vm._v("成为VIP"),
          ]),
          _c("view", { staticClass: "credit-tips" }, [
            _vm._v("VIP免担保金 自动享担保权益 >>"),
          ]),
        ])
      : _vm._e(),
    _vm.is_security === 1 && _vm.is_member == 1
      ? _c("view", [
          _c("view", { staticClass: "credit-tips" }, [
            _c("image", {
              staticClass: "credit-icon",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/guaranteed.png",
              },
            }),
            _vm._v(" 您已存入保障金，已享受担保权益 "),
          ]),
          _c("view", { staticClass: "submit-red" }, [_vm._v("申请提取保证金")]),
        ])
      : _vm._e(),
    _vm.is_security === 1 && _vm.is_member == 0
      ? _c("view", [
          _c("view", { staticClass: "credit-tips" }, [
            _c("image", {
              staticClass: "credit-icon",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/guaranteed.png",
              },
            }),
            _vm._v(" 您已存入保障金，已享受担保权益 "),
          ]),
          _c("view", { staticClass: "submit-red" }, [_vm._v("申请提取保证金")]),
          _c("view", { staticClass: "or" }, [_vm._v("或")]),
          _c("view", { staticClass: "submit-yellow", on: { tap: _vm.goVip } }, [
            _vm._v("成为VIP"),
          ]),
          _c("view", { staticClass: "credit-tips" }, [
            _vm._v("VIP免担保金 自动享担保权益 >>"),
          ]),
        ])
      : _vm._e(),
    _vm.is_security === 0 && _vm.is_member === 1
      ? _c("view", [
          _c(
            "view",
            { staticClass: "submit-red", on: { tap: _vm.submitSecurity } },
            [_vm._v("立即存入")]
          ),
        ])
      : _vm._e(),
    _c("view", { staticClass: "credit-content" }, [
      _c("view", [
        _vm._v(
          " 保证金3个月后可随时全额提现，3个月内退款扣15%服务费，3个月后0服务费。存入保证金后即同意以下内容： "
        ),
      ]),
      _c("view", [_vm._v(" 1.在交流以及拍摄过程中，不会有恶意欺骗行为； ")]),
      _c("view", [
        _vm._v(" 2.如果在联系确认已经达成拍摄约定后，不会随意毁约； "),
      ]),
      _c("view", [
        _vm._v(" 3.对于摄影师，拍摄完成后，会按照约定返片给对方； "),
      ]),
      _c("view", [
        _vm._v(
          " 4.在对方没有同意的情况下，不会公开对方隐私； 如果违反了其中一条，经客服同双方调查确认后，可以扣除保证金； "
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMsg/pages/creditGuarantee/index.scss":
/*!*********************************************************!*\
  !*** ./src/packageMsg/pages/creditGuarantee/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMsg/pages/creditGuarantee/index.vue":
/*!********************************************************!*\
  !*** ./src/packageMsg/pages/creditGuarantee/index.vue ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/creditGuarantee/index.vue");


var config = {"navigationBarTitleText":"信用担保"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMsg/pages/creditGuarantee/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=template&id=181009a8&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=template&id=181009a8&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_181009a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=181009a8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/creditGuarantee/index.vue?vue&type=template&id=181009a8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_181009a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_181009a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMsg/pages/creditGuarantee/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map