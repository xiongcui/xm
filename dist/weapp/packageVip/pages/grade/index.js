(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageVip/pages/grade/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/grade/index.vue":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/grade/index.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=367a58e0&scoped=true& */ "./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "367a58e0",
  "8f8eec44"
  
)

component.options.__file = "src/packageVip/pages/grade/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageVip/pages/grade/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "grade",
  data: function data() {
    return {
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      duration: 500,
      interval: 5000,
      list: ["LV1", "LV2", "LV3", "LV4", "LV5", "LV6", "LV7"],
      current: 2
    };
  },
  methods: {
    bindChange: function bindChange(e) {
      this.current = e.detail.current;
    },
    clickChange: function clickChange(index) {
      this.current = index;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true& ***!
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
  return _c("view", { staticClass: "grade" }, [
    _c(
      "view",
      { staticClass: "grade-top" },
      [
        _c("view", { staticClass: "grade-info" }, [
          _c("view", { staticClass: "grade-info-left" }, [
            _c("view", { staticClass: "grade-info-box" }, [
              _c("view", { staticClass: "grade-name" }, [_vm._v("Anne")]),
              _c("view", { staticClass: "grade-leavel" }, [_vm._v("LV.3")]),
            ]),
            _c("view", { staticClass: "growth" }, [_vm._v("成长值：200")]),
          ]),
          _c("view", { staticClass: "grade-info-rt" }, [_vm._v(" 成长指南 ")]),
        ]),
        _c(
          "swiper",
          {
            staticClass: "swiper-container",
            attrs: { current: _vm.current },
            on: { change: _vm.bindChange },
          },
          _vm._l(_vm.list, function (item, index) {
            return _c(
              "swiper-item",
              {
                key: index,
                staticClass: "swiper-item",
                on: {
                  tap: function ($event) {
                    return _vm.clickChange(index)
                  },
                },
              },
              [
                index < 3
                  ? _c(
                      "text",
                      {
                        staticClass: "swiper-leavel",
                        class: _vm.current == index ? "active" : "scale",
                      },
                      [_vm._v(_vm._s(item))]
                    )
                  : _c(
                      "text",
                      {
                        staticClass: "swiper-leavel grey",
                        class: _vm.current == index ? "active" : "scale",
                      },
                      [_vm._v(" " + _vm._s(item) + " ")]
                    ),
              ]
            )
          }),
          1
        ),
      ],
      1
    ),
    _c("view", { staticClass: "grade-card" }, [
      _c("text", { staticClass: "triangle" }),
      _c("view", { staticClass: "schedule" }, [
        _c("view", {
          staticClass: "schedule-bg",
          style: {
            width: "50%",
          },
        }),
        _c("text", { staticClass: "schedule-num" }, [_vm._v("10 / 20")]),
      ]),
      _c("view", { staticClass: "grade-card-txt" }, [
        _vm._v("下一等级可超越98%的用户"),
      ]),
      _c("view", { staticClass: "fast-grade" }, [
        _c("text", { staticClass: "fast-grade-txt" }, [
          _vm._v("如何才能快速成长呢？"),
        ]),
        _c("text", { staticClass: "fast-grade-btn" }, [
          _vm._v("成为VIP会员翻倍成长"),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageVip/pages/grade/index.scss":
/*!***********************************************!*\
  !*** ./src/packageVip/pages/grade/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageVip/pages/grade/index.vue":
/*!**********************************************!*\
  !*** ./src/packageVip/pages/grade/index.vue ***!
  \**********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/grade/index.vue");


var config = {"navigationBarTitleText":"我的等级"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageVip/pages/grade/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/grade/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=367a58e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/grade/index.vue?vue&type=template&id=367a58e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_367a58e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageVip/pages/grade/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map