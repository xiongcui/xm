(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/index/index.vue":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/index/index.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1466ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1466ad13&scoped=true& */ "./src/packageMoka/pages/moka/index/index.vue?vue&type=template&id=1466ad13&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/index/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_1466ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_1466ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "1466ad13",
  "ef3c1e3e"
  
)

component.options.__file = "src/packageMoka/pages/moka/index/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/index/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/index/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/index/index.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "index",
  data: function data() {
    return {};
  },
  methods: {
    goModel: function goModel() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "d"])("/packageMoka/pages/moka/modelcard/index");
    } // goActor() {},
    // goAnchor() {},
    // goTheme() {},

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/index/index.vue?vue&type=template&id=1466ad13&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/index/index.vue?vue&type=template&id=1466ad13&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "mcard-index" }, [
    _c("view", { staticClass: "mcard-title" }, [_vm._v("图片模卡")]),
    _c("view", { staticClass: "ub item" }, [
      _c("view", { staticClass: "side_gap" }),
      _c("view", { staticClass: "ub-f1" }, [
        _c("view", { staticClass: "item_img", on: { tap: _vm.goModel } }, [
          _c("image", {
            attrs: {
              mode: "widthFix",
              src: "https://yuepai-oss.qubeitech.com/static/images/moka/index/model.png",
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "side_gap" }),
    ]),
    _c("view", { staticClass: "ub item" }, [
      _c("view", { staticClass: "side_gap" }),
      _c("view", { staticClass: "ub-f1" }, [
        _c("view", { staticClass: "item_img", on: { tap: _vm.goActor } }, [
          _c("image", {
            attrs: {
              mode: "widthFix",
              src: "https://yuepai-oss.qubeitech.com/static/images/moka/index/actor.png",
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "side_gap" }),
    ]),
    _c("view", { staticClass: "ub item" }, [
      _c("view", { staticClass: "side_gap" }),
      _c("view", { staticClass: "ub-f1" }, [
        _c("view", { staticClass: "item_img", on: { tap: _vm.goAnchor } }, [
          _c("image", {
            attrs: {
              mode: "widthFix",
              src: "https://yuepai-oss.qubeitech.com/static/images/moka/index/anchor.png",
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "side_gap" }),
    ]),
    _c("view", { staticClass: "ub item" }, [
      _c("view", { staticClass: "side_gap" }),
      _c("view", { staticClass: "ub-f1" }, [
        _c("view", { staticClass: "item_img", on: { tap: _vm.goTheme } }, [
          _c("image", {
            attrs: {
              mode: "widthFix",
              src: "https://yuepai-oss.qubeitech.com/static/images/moka/index/theme.png",
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "side_gap" }),
    ]),
    _c("view", { staticClass: "bottom_gap" }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMoka/pages/moka/index/index.scss":
/*!*****************************************************!*\
  !*** ./src/packageMoka/pages/moka/index/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/index/index.vue":
/*!****************************************************!*\
  !*** ./src/packageMoka/pages/moka/index/index.vue ***!
  \****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/index/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/index/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/index/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/index/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/index/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/index/index.vue?vue&type=template&id=1466ad13&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/index/index.vue?vue&type=template&id=1466ad13&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1466ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1466ad13&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/index/index.vue?vue&type=template&id=1466ad13&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1466ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1466ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/index/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map