(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageSet/pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/index/index.vue":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/index/index.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_c5347d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c5347d60&scoped=true& */ "./src/packageSet/pages/index/index.vue?vue&type=template&id=c5347d60&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageSet/pages/index/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_c5347d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_c5347d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "c5347d60",
  "70db779e"
  
)

component.options.__file = "src/packageSet/pages/index/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/index/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageSet/pages/index/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/util.js */ "./src/utils/util.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/packageSet/pages/index/index.scss");
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
//
//
//
//
//
//
//
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
  name: "set",
  data: function data() {
    return {};
  },
  methods: {
    logout: function logout() {
      wx.removeStorage({
        key: "userInfo"
      });
      wx.removeStorage({
        key: "token"
      });
      Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__[/* errortip */ "a"])("退出成功");
      var page = getCurrentPages().pop();
      console.log(page);
      if (page == undefined || page == null) return;
      page.onLoad();
      wx.navigateBack({
        delta: 1
      });
    },
    personDetail: function personDetail() {
      Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "d"])("/packageAdd/pages/user/editinfor/index");
    },
    goAddress: function goAddress() {
      Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "d"])("/packageAdd/pages/user/addresslist/index");
    },
    goSensationlist: function goSensationlist() {
      Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "d"])("/packageAdd/pages/user/sensationlist/index");
    },
    goContact: function goContact() {
      Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "d"])("/packageAdd/pages/user/contact/index");
    },
    goAbout: function goAbout() {
      Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "d"])("/packageSet/pages/about/index");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/index/index.vue?vue&type=template&id=c5347d60&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageSet/pages/index/index.vue?vue&type=template&id=c5347d60&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "set" }, [
    _c("view", { staticClass: "set-top" }, [
      _c("view", { staticClass: "set-item", on: { tap: _vm.personDetail } }, [
        _c("text", [_vm._v("编辑资料")]),
        _c("view", { staticClass: "arrow" }, [
          _c("image", {
            attrs: {
              mode: "aspectFit",
              src: "https://yuepai-oss.qubeitech.com/static/images/user/index/right.png",
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "set-item", on: { tap: _vm.goContact } }, [
        _c("text", [_vm._v("联系方式")]),
        _c("view", { staticClass: "arrow" }, [
          _c("image", {
            attrs: {
              mode: "aspectFit",
              src: "https://yuepai-oss.qubeitech.com/static/images/user/index/right.png",
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "set-item", on: { tap: _vm.goAddress } }, [
        _c("text", [_vm._v("收货地址")]),
        _c("view", { staticClass: "arrow" }, [
          _c("image", {
            attrs: {
              mode: "aspectFit",
              src: "https://yuepai-oss.qubeitech.com/static/images/user/index/right.png",
            },
          }),
        ]),
      ]),
      _c(
        "view",
        { staticClass: "set-item", on: { tap: _vm.goSensationlist } },
        [
          _c("text", [_vm._v("红人账号")]),
          _c("view", { staticClass: "arrow" }, [
            _c("image", {
              attrs: {
                mode: "aspectFit",
                src: "https://yuepai-oss.qubeitech.com/static/images/user/index/right.png",
              },
            }),
          ]),
        ]
      ),
    ]),
    _c("view", { staticClass: "set-content" }, [
      _c("view", { staticClass: "set-item" }, [
        _c("text", [_vm._v("手机号")]),
        _c("view", { staticClass: "arrow" }, [
          _c("text", { staticClass: "phone" }, [_vm._v("13693628075")]),
          _c("image", {
            attrs: {
              mode: "aspectFit",
              src: "https://yuepai-oss.qubeitech.com/static/images/user/index/right.png",
            },
          }),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "set-bt" }, [
      _c("view", { staticClass: "set-item", on: { tap: _vm.goAbout } }, [
        _c("text", [_vm._v("关于我们")]),
        _c("view", { staticClass: "arrow" }, [
          _c("image", {
            attrs: {
              mode: "aspectFit",
              src: "https://yuepai-oss.qubeitech.com/static/images/user/index/right.png",
            },
          }),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "set-logout" }, [
      _c("view", { staticClass: "set-item logout", on: { tap: _vm.logout } }, [
        _c("text", [_vm._v("退出登录")]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageSet/pages/index/index.scss":
/*!***********************************************!*\
  !*** ./src/packageSet/pages/index/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageSet/pages/index/index.vue":
/*!**********************************************!*\
  !*** ./src/packageSet/pages/index/index.vue ***!
  \**********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/index/index.vue");


var config = {"navigationBarTitleText":"设置"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageSet/pages/index/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageSet/pages/index/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/packageSet/pages/index/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/index/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageSet/pages/index/index.vue?vue&type=template&id=c5347d60&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/packageSet/pages/index/index.vue?vue&type=template&id=c5347d60&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c5347d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=c5347d60&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/index/index.vue?vue&type=template&id=c5347d60&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c5347d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c5347d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageSet/pages/index/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map