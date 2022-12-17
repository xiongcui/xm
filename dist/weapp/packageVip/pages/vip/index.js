(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageVip/pages/vip/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/vip/index.vue":
/*!******************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/vip/index.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_141b0854_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=141b0854&scoped=true& */ "./src/packageVip/pages/vip/index.vue?vue&type=template&id=141b0854&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageVip/pages/vip/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_141b0854_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_141b0854_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "141b0854",
  "8f4524b8"
  
)

component.options.__file = "src/packageVip/pages/vip/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/vip/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/vip/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageVip/pages/vip/index.scss");
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
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "vip",
  data: function data() {
    return {
      isIphoneX: false
    };
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/vip/index.vue?vue&type=template&id=141b0854&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/vip/index.vue?vue&type=template&id=141b0854&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    { staticClass: "vip-center" },
    [
      _c("view", { staticClass: "vip-bg" }),
      _c("view", { staticClass: "vip-card" }, [
        _c("view", { staticClass: "card-left" }, [
          _c("view", { staticClass: "card-left-info" }, [
            _c("image", {
              staticClass: "headimg",
              attrs: {
                src: "https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/photo/L3cNKAhF/89ca4714-67f4-11ed-ae45-473a871aac32.png",
              },
            }),
            _c("view", { staticClass: "info-box" }, [
              _c("view", { staticClass: "name" }, [_vm._v("昵称")]),
              _c("view", { staticClass: "vip-tips" }, [_vm._v("会员尚未开通")]),
            ]),
          ]),
          _c("view", { staticClass: "card-left-vipinfo" }, [
            _c("view", [_vm._v("¥49/月起")]),
            _c("view", [_vm._v("开通会员，再得金豆")]),
          ]),
        ]),
        _c("view", { staticClass: "card-rt" }, [
          _c("image", {
            attrs: {
              src: __webpack_require__(/*! ../../../assets/images/user/vip/vip-card.png */ "./src/assets/images/user/vip/vip-card.png"),
            },
          }),
          _c("text", [_vm._v("会员权限设置")]),
        ]),
      ]),
      _c("view", { staticClass: "vip-icon-list" }, [
        _c("view", { staticClass: "vip-icon" }, [
          _c("image", {
            attrs: { src: __webpack_require__(/*! ../../../assets/images/user/vip/user.png */ "./src/assets/images/user/vip/user.png") },
          }),
          _c("text", [_vm._v("查看访客")]),
        ]),
        _c("view", { staticClass: "vip-icon" }, [
          _c("image", {
            attrs: {
              src: __webpack_require__(/*! ../../../assets/images/user/vip/qiandao.png */ "./src/assets/images/user/vip/qiandao.png"),
            },
          }),
          _c("text", [_vm._v("无限签到")]),
        ]),
        _c("view", { staticClass: "vip-icon" }, [
          _c("image", {
            attrs: {
              src: __webpack_require__(/*! ../../../assets/images/user/vip/baojing.png */ "./src/assets/images/user/vip/baojing.png"),
            },
          }),
          _c("text", [_vm._v("免担保金")]),
        ]),
        _c("view", { staticClass: "vip-icon" }, [
          _c("image", {
            attrs: {
              src: __webpack_require__(/*! ../../../assets/images/user/vip/tuijian.png */ "./src/assets/images/user/vip/tuijian.png"),
            },
          }),
          _c("text", [_vm._v("优先推荐")]),
        ]),
        _c("view", { staticClass: "vip-icon" }, [
          _c("image", {
            attrs: { src: __webpack_require__(/*! ../../../assets/images/user/vip/fuli.png */ "./src/assets/images/user/vip/fuli.png") },
          }),
          _c("text", [_vm._v("会员福利")]),
        ]),
      ]),
      _c("view", { staticClass: "vip-package" }, [
        _c("view", { staticClass: "vip-title" }, [_vm._v("/ 会员套餐推荐 /")]),
        _c("view", { staticClass: "package-list" }, [
          _c("view", { staticClass: "package-box" }, [
            _c("text", { staticClass: "month" }, [_vm._v("1个月")]),
            _c("text", { staticClass: "amount" }, [
              _c("text", { staticClass: "company" }, [_vm._v("¥")]),
              _vm._v("49"),
            ]),
            _c("text", { staticClass: "original-price" }, [_vm._v("原价 ¥99")]),
            _c("text", { staticClass: "price-red" }, [_vm._v("¥49/月")]),
            _c("text", { staticClass: "tag" }, [_vm._v("限时")]),
          ]),
          _c("view", { staticClass: "package-box active" }, [
            _c("text", { staticClass: "month" }, [_vm._v("3个月")]),
            _c("text", { staticClass: "amount" }, [
              _c("text", { staticClass: "company" }, [_vm._v("¥")]),
              _vm._v("119"),
            ]),
            _c("text", { staticClass: "original-price" }, [
              _vm._v("原价 ¥299"),
            ]),
            _c("text", { staticClass: "price-red" }, [_vm._v("¥39/月")]),
            _c("text", { staticClass: "tag" }, [_vm._v("送30金币")]),
          ]),
          _c("view", { staticClass: "package-box" }, [
            _c("text", { staticClass: "month" }, [_vm._v("1年")]),
            _c("text", { staticClass: "amount" }, [
              _c("text", { staticClass: "company" }, [_vm._v("¥")]),
              _vm._v("299"),
            ]),
            _c("text", { staticClass: "original-price" }, [
              _vm._v("原价 ¥599"),
            ]),
            _c("text", { staticClass: "price-red" }, [_vm._v("¥25/月")]),
            _c("text", { staticClass: "tag" }, [_vm._v("送150金币")]),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "vip-privilege" }, [
        _c("view", { staticClass: "vip-title" }, [_vm._v("/ 会员尊享特权 /")]),
        _c("view", { staticClass: "privilege-list" }, [
          _c("view", { staticClass: "privilege-box" }, [
            _c("view", { staticClass: "service blod" }, [_vm._v("特权服务")]),
            _c("view", { staticClass: "vip blod" }, [_vm._v("会员")]),
            _c("view", { staticClass: "novip blod" }, [_vm._v("非会员")]),
          ]),
          _c("view", { staticClass: "privilege-box" }, [
            _c("view", { staticClass: "service" }, [_vm._v("查看访客记录")]),
            _c("view", { staticClass: "vip" }, [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../assets/images/common/sucess.png */ "./src/assets/images/common/sucess.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "novip" }, [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../assets/images/common/tip_fail.png */ "./src/assets/images/common/tip_fail.png"),
                },
              }),
            ]),
          ]),
          _c("view", { staticClass: "privilege-box" }, [
            _c("view", { staticClass: "service" }, [_vm._v("免信用担保金")]),
            _c("view", { staticClass: "vip" }, [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../assets/images/common/sucess.png */ "./src/assets/images/common/sucess.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "novip" }, [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../assets/images/common/tip_fail.png */ "./src/assets/images/common/tip_fail.png"),
                },
              }),
            ]),
          ]),
          _c("view", { staticClass: "privilege-box" }, [
            _c("view", { staticClass: "service" }, [_vm._v("发起沟通特权")]),
            _c("view", { staticClass: "vip" }, [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../assets/images/common/sucess.png */ "./src/assets/images/common/sucess.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "novip" }, [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../assets/images/common/tip_fail.png */ "./src/assets/images/common/tip_fail.png"),
                },
              }),
            ]),
          ]),
          _c("view", { staticClass: "privilege-box" }, [
            _c("view", { staticClass: "service" }, [_vm._v("优先推荐特权")]),
            _c("view", { staticClass: "vip" }, [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../assets/images/common/sucess.png */ "./src/assets/images/common/sucess.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "novip" }, [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../assets/images/common/tip_fail.png */ "./src/assets/images/common/tip_fail.png"),
                },
              }),
            ]),
          ]),
          _c("view", { staticClass: "privilege-box" }, [
            _c("view", { staticClass: "service" }, [_vm._v("签到次数上限")]),
            _c("view", { staticClass: "vip" }, [_vm._v("无上限")]),
            _c("view", { staticClass: "novip" }, [_vm._v("有上线")]),
          ]),
          _c("view", { staticClass: "privilege-box" }, [
            _c("view", { staticClass: "service" }, [_vm._v("约拍报名消耗")]),
            _c("view", { staticClass: "vip" }, [_vm._v("3金币")]),
            _c("view", { staticClass: "novip" }, [_vm._v("5金币")]),
          ]),
          _c("view", { staticClass: "privilege-box" }, [
            _c("view", { staticClass: "service" }, [_vm._v("通告报名消耗")]),
            _c("view", { staticClass: "vip" }, [_vm._v("3金币")]),
            _c("view", { staticClass: "novip" }, [_vm._v("5金币")]),
          ]),
        ]),
      ]),
      _c(
        "cover-view",
        {
          staticClass: "subbtn_bottom_block",
          class: _vm.isIphoneX ? "fix-iphonex-button" : "",
        },
        [
          _c("cover-view", { staticClass: "subbtn_bottom" }, [
            _c("button", { on: { tap: _vm.submit } }, [
              _vm._v("立即以119元开通"),
            ]),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/common/sucess.png":
/*!*********************************************!*\
  !*** ./src/assets/images/common/sucess.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/sucess.png";

/***/ }),

/***/ "./src/assets/images/common/tip_fail.png":
/*!***********************************************!*\
  !*** ./src/assets/images/common/tip_fail.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/tip_fail.png";

/***/ }),

/***/ "./src/assets/images/user/vip/baojing.png":
/*!************************************************!*\
  !*** ./src/assets/images/user/vip/baojing.png ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/vip/baojing.png";

/***/ }),

/***/ "./src/assets/images/user/vip/fuli.png":
/*!*********************************************!*\
  !*** ./src/assets/images/user/vip/fuli.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/vip/fuli.png";

/***/ }),

/***/ "./src/assets/images/user/vip/qiandao.png":
/*!************************************************!*\
  !*** ./src/assets/images/user/vip/qiandao.png ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/vip/qiandao.png";

/***/ }),

/***/ "./src/assets/images/user/vip/tuijian.png":
/*!************************************************!*\
  !*** ./src/assets/images/user/vip/tuijian.png ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/vip/tuijian.png";

/***/ }),

/***/ "./src/assets/images/user/vip/user.png":
/*!*********************************************!*\
  !*** ./src/assets/images/user/vip/user.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/vip/user.png";

/***/ }),

/***/ "./src/assets/images/user/vip/vip-card.png":
/*!*************************************************!*\
  !*** ./src/assets/images/user/vip/vip-card.png ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/vip/vip-card.png";

/***/ }),

/***/ "./src/packageVip/pages/vip/index.scss":
/*!*********************************************!*\
  !*** ./src/packageVip/pages/vip/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageVip/pages/vip/index.vue":
/*!********************************************!*\
  !*** ./src/packageVip/pages/vip/index.vue ***!
  \********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/vip/index.vue");


var config = {"navigationBarTitleText":"会员中心"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageVip/pages/vip/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageVip/pages/vip/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/packageVip/pages/vip/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/vip/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageVip/pages/vip/index.vue?vue&type=template&id=141b0854&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/packageVip/pages/vip/index.vue?vue&type=template&id=141b0854&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_141b0854_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=141b0854&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/vip/index.vue?vue&type=template&id=141b0854&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_141b0854_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_141b0854_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageVip/pages/vip/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map