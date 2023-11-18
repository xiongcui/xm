(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageVip/pages/wallet/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/wallet/index.vue":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/wallet/index.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_c24d9394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c24d9394&scoped=true& */ "./src/packageVip/pages/wallet/index.vue?vue&type=template&id=c24d9394&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageVip/pages/wallet/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_c24d9394_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_c24d9394_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "c24d9394",
  "3a1a49a8"
  
)

component.options.__file = "src/packageVip/pages/wallet/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/wallet/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/wallet/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageVip/pages/wallet/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "wallet",
  data: function data() {
    return {
      currentTab: 0
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/wallet/index.vue?vue&type=template&id=c24d9394&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/wallet/index.vue?vue&type=template&id=c24d9394&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "wallet" }, [
    _c("view", { staticClass: "wallet-top" }, [
      _c("view", { staticClass: "wallet-account" }, [
        _c("view", { staticClass: "total-balance" }, [
          _c("text", { staticClass: "total-label" }, [_vm._v("总余额")]),
          _c("text", { staticClass: "total-num" }, [_vm._v("¥200")]),
        ]),
        _c("view", { staticClass: "sub-account-box" }, [
          _c("view", { staticClass: "sub-account" }, [
            _c("view", { staticClass: "sub-account-label" }, [
              _vm._v("现金账户"),
            ]),
            _c("view", { staticClass: "sub-account-num" }, [
              _vm._v("150.00元"),
            ]),
          ]),
          _c("view", { staticClass: "sub-account" }, [
            _c("view", { staticClass: "sub-account-label" }, [
              _vm._v("佣金账户"),
            ]),
            _c("view", { staticClass: "sub-account-num" }, [
              _vm._v("150.00元"),
            ]),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "wallet-account-btns" }, [
        _c("view", { staticClass: "recharge" }, [_vm._v("充值")]),
        _c("view", { staticClass: "withdrawal" }, [_vm._v("提现")]),
      ]),
    ]),
    _c("view", { staticClass: "wallet-ct" }, [
      _c("view", { staticClass: "tab" }, [
        _c(
          "view",
          { staticClass: "tab-item", class: _vm.currentTab == 0 ? "on" : "" },
          [_vm._v("钱包明细")]
        ),
      ]),
      _c("view", { staticClass: "wallet-list" }, [
        _c("view", { staticClass: "detailed" }, [
          _c("view", { staticClass: "detailed-list" }, [
            _c("view", { staticClass: "coin-task" }, [
              _c("view", { staticClass: "task-info" }, [
                _c("view", { staticClass: "task-info-box" }, [
                  _c("text", { staticClass: "task-title" }, [
                    _vm._v("标题标题标题"),
                  ]),
                  _c("view", { staticClass: "task-num" }, [_vm._v("+10.00")]),
                ]),
                _c("view", { staticClass: "task-tips" }, [
                  _c("text", [_vm._v("2023-2-3 17:30:00")]),
                  _vm._v(" "),
                  _c("text", [_vm._v("余额：10.00")]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageVip/pages/wallet/index.scss":
/*!************************************************!*\
  !*** ./src/packageVip/pages/wallet/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageVip/pages/wallet/index.vue":
/*!***********************************************!*\
  !*** ./src/packageVip/pages/wallet/index.vue ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/wallet/index.vue");


var config = {"navigationBarTitleText":"我的钱包"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageVip/pages/wallet/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageVip/pages/wallet/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/packageVip/pages/wallet/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/wallet/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageVip/pages/wallet/index.vue?vue&type=template&id=c24d9394&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/packageVip/pages/wallet/index.vue?vue&type=template&id=c24d9394&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c24d9394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=c24d9394&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/wallet/index.vue?vue&type=template&id=c24d9394&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c24d9394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c24d9394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageVip/pages/wallet/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map