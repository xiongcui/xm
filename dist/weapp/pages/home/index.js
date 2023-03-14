(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/home/index.vue":
/*!********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/home/index.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5b685826&scoped=true& */ "./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/home/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "5b685826",
  "0f729374"
  
)

component.options.__file = "src/pages/home/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/pages/home/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "home",
  data: function data() {
    return {
      city: "北京",
      is_today_sign: 0,
      background: ["demo-text-1", "demo-text-2", "demo-text-3"],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      showModal: false,
      interval: 2000,
      duration: 500
    };
  },
  created: function created() {
    this.globalData = this.globalData;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    { staticClass: "home" },
    [
      _c(
        "view",
        {
          staticClass: "custom_head",
          style: { height: _vm.globalData.navHeight + "px" },
        },
        [
          _c(
            "view",
            {
              staticClass: "flex-row",
              style: {
                width: "100%",
                height: _vm.globalData.navObj + "px",
                "padding-top": _vm.globalData.navTop + "px",
                "padding-right": _vm.globalData.navObjWid + 5 + "px",
              },
            },
            [
              _c("view", { staticClass: "head_left" }, [
                _c("view", { staticClass: "select-city" }, [
                  _vm._v(" " + _vm._s(_vm.city) + " "),
                  _c("image", {
                    staticClass: "roll-down",
                    attrs: {
                      src: __webpack_require__(/*! ../../assets/images/common/back.png */ "./src/assets/images/common/back.png"),
                    },
                  }),
                ]),
                _c(
                  "view",
                  { staticClass: "head_sign", on: { tap: _vm.showSign } },
                  [
                    _vm.is_today_sign
                      ? _c("image", {
                          attrs: {
                            src: __webpack_require__(/*! ../../assets/images/icon_signed.jpg */ "./src/assets/images/icon_signed.jpg"),
                          },
                        })
                      : _c("image", {
                          attrs: {
                            src: __webpack_require__(/*! ../../assets/images/icon_sign.jpg */ "./src/assets/images/icon_sign.jpg"),
                          },
                        }),
                  ]
                ),
              ]),
              _c("view", { staticClass: "head_nav" }, [_vm._v(" 虾米约拍 ")]),
            ]
          ),
        ]
      ),
      _c("view", { style: { height: _vm.globalData.navHeight + "px" } }),
      _c("block", [
        _c("view", { staticClass: "page-bg" }),
        _c(
          "view",
          { staticClass: "page-section page-section-spacing swiper" },
          [
            _c(
              "swiper",
              {
                attrs: {
                  "indicator-dots": _vm.indicatorDots,
                  autoplay: _vm.autoplay,
                  interval: _vm.interval,
                  duration: _vm.duration,
                },
              },
              _vm._l(_vm.background, function (item, index) {
                return _c(
                  "block",
                  { key: index },
                  [
                    _c("swiper-item", [
                      _c("view", { staticClass: "swiper-item" }, [
                        _c("image", {
                          staticClass: "swiper-item-img",
                          attrs: {
                            mode: "aspectFill",
                            src: "https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/9f7062c8-67b9-11ed-ae45-473a871aac32.jpg",
                          },
                        }),
                      ]),
                    ]),
                  ],
                  1
                )
              }),
              1
            ),
          ],
          1
        ),
      ]),
      _c("view", { staticClass: "news" }, [
        _c("view", { staticClass: "news-title" }, [_vm._v("消息")]),
        _c("view", { staticClass: "news-line" }, [_vm._v("|")]),
        _c("view", { staticClass: "news-txt" }, [
          _vm._v("看大佬如何用手机拍出黑白大片"),
        ]),
        _c("view", { staticClass: "news-btn" }, [_vm._v("去看看")]),
      ]),
      _c("view", { staticClass: "page-nav" }, [
        _c("view", { staticClass: "page-nav-top" }, [
          _c("view", { staticClass: "page-nav-item" }, [
            _c("image", {
              staticClass: "page-nav-img",
              attrs: { src: __webpack_require__(/*! ../../assets/images/icon_model.png */ "./src/assets/images/icon_model.png") },
            }),
            _c("text", { staticClass: "page-nav-text" }, [_vm._v("模特")]),
          ]),
          _c("view", { staticClass: "page-nav-item" }, [
            _c("image", {
              staticClass: "page-nav-img",
              attrs: { src: __webpack_require__(/*! ../../assets/images/take.png */ "./src/assets/images/take.png") },
            }),
            _c("text", { staticClass: "page-nav-text" }, [_vm._v("摄影")]),
          ]),
          _c("view", { staticClass: "page-nav-item" }, [
            _c("image", {
              staticClass: "page-nav-img",
              attrs: { src: __webpack_require__(/*! ../../assets/images/more1.png */ "./src/assets/images/more1.png") },
            }),
            _c("text", { staticClass: "page-nav-text" }, [_vm._v("作品")]),
          ]),
          _c("view", { staticClass: "page-nav-item" }, [
            _c("image", {
              staticClass: "page-nav-img",
              attrs: { src: __webpack_require__(/*! ../../assets/images/moka.png */ "./src/assets/images/moka.png") },
            }),
            _c("text", { staticClass: "page-nav-text" }, [_vm._v("模卡")]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/common/back.png":
/*!*******************************************!*\
  !*** ./src/assets/images/common/back.png ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAmCAMAAADtLHsqAAABaFBMVEUAAAD///+AgIBVVVVAQECAgIBmZmZVVVVJSUltbW2SkpJgYGBVVVWOjo5NTU1mZmZdXV1VVVVqampiYmJVVVVQUFBgYGBVVVVjY2NeXl5ZWVlzc3NdXV1ZWVlVVVVcXFxYWFhVVVVeXl5bW1ttbW1YWFhYWFhdXV1aWlpXV1dfX1/s7Ozp6ens7Ozs7Ozw8PDb29vt7e3w8PDx8fHx8fHNzc309PTLy8vMzMzS0tLs7Oz8/PzQ0NDT09PU1NTj4+P39/fS0tLV1dX19fXb29vW1tb19fX29vb29vb29vbg4OD29vb29vbf39/29vbg4OD39/fe3t739/fh4eHj4+P39/fj4+P39/f5+fni4uLk5OT19fXl5eXl5eXt7e3l5eXp6en9/f36+vr9/f36+vrz8/P29vb+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////////+/v7////////////End8tAAAAd3RSTlMAAQIDBAQFBgcHBwgJCQoKCwwMDQ8QEBISExQUFhcYGRobGxwcHSAhIiMjT1BQUlNVVldZW1xcXl9gYGBiY2VlZWdoaGlqa21vcnN0dnh4enp8fX5/f4GBg4SGhoiKioyMoaamp6ut9vb39/j4+fn6+vv7/P39/r6hmUUAAAFhSURBVDjLjdNnT8MwEAbgODYOoaGEUtqmrNDSwd5777333qusMvP38TkSNK6FOCmfHulytt9TlH8XYqWyTyaYDJ4XYTXPkIrp2LtzWUxEQyrRJz8dx7nQMMqTGZC3AYMgUWZBXkfDfooEmftikp2yvQQyD/IynawK+nL+BbII8jyRsiMm/Z0QZAnkaTxlW6WF+OfQICsgjyMgulfWQB6GJbLBwMkMSbptg9z3swlE2QW57RNEQVjb49KbrvV0Y0SMQ07diWhAzxUFUb91wq0tZBR4HgMocQZ21yQSMUI16VM+YqPQEGumFW84hiNnmr1jsOHLovH6I34dLVI74JfYKrV9/ijtUtvh1qHLbIsHoFNqmxCbbJekZyy9zsPWQ1UhNmCrYFc+LIYNbPnDuanw5tA1y04uXNcJEXUtEKmO2ZVBIdiumeXhcNAU18FdIp+/xNCIZMHY6lFKJKv318Lm1jeYfF17kRSejgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/icon_model.png":
/*!******************************************!*\
  !*** ./src/assets/images/icon_model.png ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icon_model.png";

/***/ }),

/***/ "./src/assets/images/icon_sign.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon_sign.jpg ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icon_sign.jpg";

/***/ }),

/***/ "./src/assets/images/icon_signed.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon_signed.jpg ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icon_signed.jpg";

/***/ }),

/***/ "./src/assets/images/moka.png":
/*!************************************!*\
  !*** ./src/assets/images/moka.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/moka.png";

/***/ }),

/***/ "./src/assets/images/more1.png":
/*!*************************************!*\
  !*** ./src/assets/images/more1.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/more1.png";

/***/ }),

/***/ "./src/assets/images/take.png":
/*!************************************!*\
  !*** ./src/assets/images/take.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/take.png";

/***/ }),

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/index.vue":
/*!**********************************!*\
  !*** ./src/pages/home/index.vue ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/home/index.vue");


var config = {"navigationBarTitleText":"虾米约拍","enablePullDownRefresh":true,"navigationStyle":"custom","navigationBarBackgroundColor":"#FE5457","navigationBarTextStyle":"white","backgroundColor":"#FE5457","backgroundColorTop":"#FE5457","backgroundColorBottom":"#f7f7f7","backgroundTextStyle":"dark","usingComponents":{"selector-component":"plugin://citySelector/selector-component"}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/home/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/home/index.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/pages/home/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5b685826&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=template&id=5b685826&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b685826_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/home/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map