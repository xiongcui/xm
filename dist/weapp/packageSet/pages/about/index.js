(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageSet/pages/about/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/about/index.vue":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/about/index.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_c164636a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c164636a&scoped=true& */ "./src/packageSet/pages/about/index.vue?vue&type=template&id=c164636a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageSet/pages/about/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_c164636a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_c164636a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "c164636a",
  "72c38499"
  
)

component.options.__file = "src/packageSet/pages/about/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/about/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageSet/pages/about/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/packageSet/pages/about/index.scss");
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
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "about",
  methods: {
    customerService: function customerService() {
      wx.openCustomerServiceChat({
        extInfo: {
          url: "https://work.weixin.qq.com/kfid/kfc70400e4245eaa1b6"
        },
        corpId: "ww9ad8086390afbfaa",
        success: function success(res) {}
      });
    },
    officialAccount: function officialAccount() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "b"])("/packageAdd/pages/user/follow/index");
    },
    userAgreement: function userAgreement() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "b"])("/packageSet/pages/serviceAgreement/index");
    },
    cheatPrevention: function cheatPrevention() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "b"])("/packageSet/pages/cheatPrevention/index");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/about/index.vue?vue&type=template&id=c164636a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageSet/pages/about/index.vue?vue&type=template&id=c164636a&scoped=true& ***!
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
  return _c("view", { staticClass: "about" }, [
    _c("view", { staticClass: "about-top" }, [
      _c("image", {
        staticClass: "about-img",
        attrs: { src: __webpack_require__(/*! ../../../assets/images/logo.png */ "./src/assets/images/logo.png") },
      }),
    ]),
    _c("view", { staticClass: "about-service" }, [
      _c(
        "view",
        { staticClass: "about-item", on: { tap: _vm.customerService } },
        [
          _c("text", [_vm._v("联系客服")]),
          _c("view", { staticClass: "arrow" }, [
            _c("image", {
              attrs: {
                mode: "aspectFit",
                src: __webpack_require__(/*! ../../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
              },
            }),
          ]),
        ]
      ),
      _c(
        "view",
        { staticClass: "about-item", on: { tap: _vm.officialAccount } },
        [
          _c("text", [_vm._v("关注公众号")]),
          _c("view", { staticClass: "arrow" }, [
            _c("image", {
              attrs: {
                mode: "aspectFit",
                src: __webpack_require__(/*! ../../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
              },
            }),
          ]),
        ]
      ),
    ]),
    _c("view", { staticClass: "about-service" }, [
      _c(
        "view",
        { staticClass: "about-item", on: { tap: _vm.userAgreement } },
        [
          _c("text", [_vm._v("用户协议")]),
          _c("view", { staticClass: "arrow" }, [
            _c("image", {
              attrs: {
                mode: "aspectFit",
                src: __webpack_require__(/*! ../../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
              },
            }),
          ]),
        ]
      ),
      _c("view", { staticClass: "about-item" }, [
        _c("text", [_vm._v("隐私政策")]),
        _c("view", { staticClass: "arrow" }, [
          _c("image", {
            attrs: {
              mode: "aspectFit",
              src: __webpack_require__(/*! ../../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
            },
          }),
        ]),
      ]),
      _c(
        "view",
        { staticClass: "about-item", on: { tap: _vm.cheatPrevention } },
        [
          _c("text", [_vm._v("防骗指南")]),
          _c("view", { staticClass: "arrow" }, [
            _c("image", {
              attrs: {
                mode: "aspectFit",
                src: __webpack_require__(/*! ../../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
              },
            }),
          ]),
        ]
      ),
      _c("view", { staticClass: "about-item" }, [
        _c("text", [_vm._v("营业执照")]),
        _c("view", { staticClass: "arrow" }, [
          _c("image", {
            attrs: {
              mode: "aspectFit",
              src: __webpack_require__(/*! ../../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "about-item" }, [
        _c("text", [_vm._v("当前版本")]),
        _c("view", { staticClass: "arrow" }, [
          _c("image", {
            attrs: {
              mode: "aspectFit",
              src: __webpack_require__(/*! ../../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
            },
          }),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageSet/pages/about/index.scss":
/*!***********************************************!*\
  !*** ./src/packageSet/pages/about/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageSet/pages/about/index.vue":
/*!**********************************************!*\
  !*** ./src/packageSet/pages/about/index.vue ***!
  \**********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/about/index.vue");


var config = {"navigationBarTitleText":"关于虾米约拍"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageSet/pages/about/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageSet/pages/about/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/packageSet/pages/about/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/about/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageSet/pages/about/index.vue?vue&type=template&id=c164636a&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/packageSet/pages/about/index.vue?vue&type=template&id=c164636a&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c164636a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=c164636a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/about/index.vue?vue&type=template&id=c164636a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c164636a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c164636a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageSet/pages/about/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map