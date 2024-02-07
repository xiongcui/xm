(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/guideTips/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/guideTips/index.vue":
/*!************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/guideTips/index.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_7e2a175e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7e2a175e&scoped=true& */ "./src/packageAdd/pages/guideTips/index.vue?vue&type=template&id=7e2a175e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/guideTips/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_7e2a175e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_7e2a175e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "7e2a175e",
  "4a3e58c2"
  
)

component.options.__file = "src/packageAdd/pages/guideTips/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/guideTips/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/guideTips/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/guideTips/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
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
  name: "guideTips",
  data: function data() {
    return {
      msg: "",
      code: ""
    };
  },
  methods: {
    goRealnameAuth: function goRealnameAuth() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "d"])("/packageAdd/pages/user/realnameAuth/index");
    },
    goPledgecash: function goPledgecash() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "d"])("/packageMsg/pages/creditGuarantee/index");
    },
    goVip: function goVip() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "d"])("/packageVip/pages/vip/index");
    }
  },
  onLoad: function onLoad(options) {
    if (options.msg) {
      this.msg = options.msg;
    }

    if (options.code) {
      this.code = options.code;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/guideTips/index.vue?vue&type=template&id=7e2a175e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/guideTips/index.vue?vue&type=template&id=7e2a175e&scoped=true& ***!
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
  return _c("view", { staticClass: "guide-box" }, [
    _c("image", {
      attrs: {
        src: "https://yuepai-oss.qubeitech.com/static/images/common/none.png",
      },
    }),
    _c("view", { staticClass: "guide-txt" }, [
      _vm._v(" " + _vm._s(_vm.msg) + " "),
    ]),
    _vm.code == 21040
      ? _c(
          "view",
          { staticClass: "guide-btn", on: { tap: _vm.goRealnameAuth } },
          [_vm._v("去实名")]
        )
      : _vm._e(),
    _vm.code == 21030
      ? _c(
          "view",
          { staticClass: "guide-btn", on: { tap: _vm.goPledgecash } },
          [_vm._v("去担保")]
        )
      : _vm._e(),
    _vm.code == 21050
      ? _c("view", { staticClass: "guide-btn", on: { tap: _vm.goVip } }, [
          _vm._v("开通会员"),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/guideTips/index.scss":
/*!***************************************************!*\
  !*** ./src/packageAdd/pages/guideTips/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/guideTips/index.vue":
/*!**************************************************!*\
  !*** ./src/packageAdd/pages/guideTips/index.vue ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/guideTips/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/guideTips/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/guideTips/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/packageAdd/pages/guideTips/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/guideTips/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/guideTips/index.vue?vue&type=template&id=7e2a175e&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/packageAdd/pages/guideTips/index.vue?vue&type=template&id=7e2a175e&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e2a175e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7e2a175e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/guideTips/index.vue?vue&type=template&id=7e2a175e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e2a175e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e2a175e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/guideTips/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map