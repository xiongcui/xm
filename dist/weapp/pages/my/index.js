(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/my/index.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/my/index.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=698d409a& */ "./src/pages/my/index.vue?vue&type=template&id=698d409a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/my/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "23961681"
  
)

component.options.__file = "src/pages/my/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/my/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/pages/my/index.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "my",
  data: function data() {
    return {
      sex: 1
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/my/index.vue?vue&type=template&id=698d409a&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/my/index.vue?vue&type=template&id=698d409a& ***!
  \*********************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "my" }, [
    _c("view", { staticClass: "my-head" }, [
      _c("view", { staticClass: "my-head-left" }, [
        _c("image", {
          staticClass: "head-img",
          attrs: {
            src: __webpack_require__(/*! ../../assets/images/head.png */ "./src/assets/images/head.png"),
            mode: "aspectFit",
          },
        }),
      ]),
      _c("view", { staticClass: "my-head-ct" }, [
        _c("view", [
          _c("text", { staticClass: "my-head-name" }, [_vm._v("Bin.Won")]),
          _vm.sex == 1
            ? _c("image", {
                staticClass: "sex",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                  mode: "aspectFit",
                },
              })
            : _vm._e(),
          _vm.sex == 0
            ? _c("image", {
                staticClass: "sex",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/nv.png */ "./src/assets/images/nv.png"),
                  mode: "aspectFit",
                },
              })
            : _vm._e(),
        ]),
        _c("view", { staticClass: "my-info" }, [
          _c("text", [_vm._v("摄影师")]),
          _c("text", [_vm._v("｜")]),
          _c("text", [_vm._v("北京市")]),
          _c("text", { staticClass: "phone" }, [_vm._v("137****6230")]),
        ]),
        _c("view", { staticClass: "head-tag-box" }, [
          _c("view", { staticClass: "head-tag" }, [
            _c("image", {
              staticClass: "head-tag-img",
              attrs: {
                src: __webpack_require__(/*! ../../assets/images/real-name.png */ "./src/assets/images/real-name.png"),
                mode: "aspectFit",
              },
            }),
            _c("text", [_vm._v("未实名")]),
          ]),
          _c("view", { staticClass: "head-tag" }, [
            _c("image", {
              staticClass: "head-tag-img",
              attrs: {
                src: __webpack_require__(/*! ../../assets/images/guarantee.png */ "./src/assets/images/guarantee.png"),
                mode: "aspectFit",
              },
            }),
            _c("text", [_vm._v("未担保")]),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "my-head-rt" }, [
        _c("text", [_vm._v("个人主页 >")]),
      ]),
    ]),
    _c("view", { staticClass: "my-ct" }, [
      _c("view", { staticClass: "my-ct-infos" }, [
        _c("view", { staticClass: "my-ct-info-item" }, [
          _c("view", { staticClass: "nums" }, [_c("view", [_vm._v("17")])]),
          _c("view", { staticClass: "name" }, [_c("view", [_vm._v("麻豆")])]),
        ]),
        _c("view", { staticClass: "my-ct-info-item" }, [
          _c("view", { staticClass: "nums" }, [_c("view", [_vm._v("17")])]),
          _c("view", { staticClass: "name" }, [_c("view", [_vm._v("关注")])]),
        ]),
        _c("view", { staticClass: "my-ct-info-item" }, [
          _c("view", { staticClass: "nums" }, [_c("view", [_vm._v("0")])]),
          _c("view", { staticClass: "name" }, [_c("view", [_vm._v("粉丝")])]),
        ]),
      ]),
      _c("view", { staticClass: "my-vip" }, [
        _c("view", { staticClass: "my-vip-left" }, [
          _c("view", { staticClass: "my-vip-title" }, [
            _c("image", {
              staticClass: "my-vip-img",
              attrs: {
                src: __webpack_require__(/*! ../../assets/images/vip.png */ "./src/assets/images/vip.png"),
                mode: "aspectFit",
              },
            }),
            _c("text", [_vm._v("麻豆约拍 VIP")]),
          ]),
          _c("view", { staticClass: "my-vip-txt" }, [
            _c("text", [_vm._v("点亮会员标志 享受尊贵特权")]),
          ]),
        ]),
        _c("view", { staticClass: "my-vip-rt" }, [
          _c("text", [_vm._v("开通会员")]),
          _c("image", {
            staticClass: "my-vip-rt-img",
            attrs: { src: __webpack_require__(/*! ../../assets/images/arrow-right.png */ "./src/assets/images/arrow-right.png") },
          }),
        ]),
      ]),
      _c("view", { staticClass: "my-column" }, [
        _c("view", { staticClass: "my-column-item" }, [
          _c("image", {
            staticClass: "my-column-img",
            attrs: {
              src: __webpack_require__(/*! ../../assets/images/album.png */ "./src/assets/images/album.png"),
              mode: "aspectFit",
            },
          }),
          _c("text", [_vm._v("作品相册")]),
        ]),
        _c("view", { staticClass: "my-column-item" }, [
          _c("image", {
            staticClass: "my-column-img",
            attrs: {
              src: __webpack_require__(/*! ../../assets/images/collection.png */ "./src/assets/images/collection.png"),
              mode: "aspectFit",
            },
          }),
          _c("text", [_vm._v("作品相册")]),
        ]),
        _c("view", { staticClass: "my-column-item" }, [
          _c("image", {
            staticClass: "my-column-img",
            attrs: {
              src: __webpack_require__(/*! ../../assets/images/thumbs.png */ "./src/assets/images/thumbs.png"),
              mode: "aspectFit",
            },
          }),
          _c("text", [_vm._v("作品相册")]),
        ]),
        _c("view", { staticClass: "my-column-item" }, [
          _c("image", {
            staticClass: "my-column-img",
            attrs: {
              src: __webpack_require__(/*! ../../assets/images/history.png */ "./src/assets/images/history.png"),
              mode: "aspectFit",
            },
          }),
          _c("text", [_vm._v("作品相册")]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/album.png":
/*!*************************************!*\
  !*** ./src/assets/images/album.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/album.png";

/***/ }),

/***/ "./src/assets/images/arrow-right.png":
/*!*******************************************!*\
  !*** ./src/assets/images/arrow-right.png ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/arrow-right.png";

/***/ }),

/***/ "./src/assets/images/collection.png":
/*!******************************************!*\
  !*** ./src/assets/images/collection.png ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/collection.png";

/***/ }),

/***/ "./src/assets/images/guarantee.png":
/*!*****************************************!*\
  !*** ./src/assets/images/guarantee.png ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/guarantee.png";

/***/ }),

/***/ "./src/assets/images/head.png":
/*!************************************!*\
  !*** ./src/assets/images/head.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/head.png";

/***/ }),

/***/ "./src/assets/images/history.png":
/*!***************************************!*\
  !*** ./src/assets/images/history.png ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/history.png";

/***/ }),

/***/ "./src/assets/images/nan.png":
/*!***********************************!*\
  !*** ./src/assets/images/nan.png ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/nan.png";

/***/ }),

/***/ "./src/assets/images/nv.png":
/*!**********************************!*\
  !*** ./src/assets/images/nv.png ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/nv.png";

/***/ }),

/***/ "./src/assets/images/real-name.png":
/*!*****************************************!*\
  !*** ./src/assets/images/real-name.png ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/real-name.png";

/***/ }),

/***/ "./src/assets/images/thumbs.png":
/*!**************************************!*\
  !*** ./src/assets/images/thumbs.png ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/thumbs.png";

/***/ }),

/***/ "./src/assets/images/vip.png":
/*!***********************************!*\
  !*** ./src/assets/images/vip.png ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/vip.png";

/***/ }),

/***/ "./src/pages/my/index.scss":
/*!*********************************!*\
  !*** ./src/pages/my/index.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/my/index.vue":
/*!********************************!*\
  !*** ./src/pages/my/index.vue ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/my/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/my/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/my/index.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/pages/my/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/my/index.vue?vue&type=template&id=698d409a&":
/*!***************************************************************!*\
  !*** ./src/pages/my/index.vue?vue&type=template&id=698d409a& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=698d409a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/my/index.vue?vue&type=template&id=698d409a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/my/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map