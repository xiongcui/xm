(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/release/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/index.vue":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/index.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_dc229814___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=dc229814& */ "./src/pages/release/index.vue?vue&type=template&id=dc229814&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/release/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_dc229814___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_dc229814___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "049a0de8"
  
)

component.options.__file = "src/pages/release/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/release/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/release/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/pages/release/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "release",
  methods: {
    releaseUrl: function releaseUrl(type) {
      var url = "";

      switch (type) {
        case 1:
          url = "/packageTonggao/pages/index/index";
          break;

        case 2:
          url = "appointment/index";
          break;

        case 3:
          url = "/packageAdd/pages/zuopin/add_zuopin/index";
          break;
      }

      wx.navigateTo({
        url: url
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/release/index.vue?vue&type=template&id=dc229814&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/release/index.vue?vue&type=template&id=dc229814& ***!
  \**************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "release-box" }, [
    _c("view", { staticClass: "release-title" }, [_vm._v(" 您可以发布 ")]),
    _c("view", { staticClass: "release-list" }, [
      _c(
        "view",
        {
          staticClass: "release-item",
          on: {
            tap: function ($event) {
              return _vm.releaseUrl(1)
            },
          },
        },
        [
          _c("view", { staticClass: "release-left" }, [
            _c("image", {
              staticClass: "release-image",
              attrs: {
                src: __webpack_require__(/*! ../../assets/images/camera.png */ "./src/assets/images/camera.png"),
                mode: "aspectFit",
              },
            }),
          ]),
          _c("view", { staticClass: "release-right" }, [
            _c("view", [
              _c("text", { staticClass: "release-list-title" }, [
                _vm._v(" 发布通告 "),
              ]),
            ]),
            _c("view", [
              _c("text", { staticClass: "release-list-content" }, [
                _vm._v("招模特/红人/主播/演员等"),
              ]),
            ]),
          ]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "release-item",
          on: {
            tap: function ($event) {
              return _vm.releaseUrl(2)
            },
          },
        },
        [
          _c("view", { staticClass: "release-left" }, [
            _c("image", {
              staticClass: "release-image",
              attrs: {
                src: __webpack_require__(/*! ../../assets/images/publishLocation.png */ "./src/assets/images/publishLocation.png"),
                mode: "aspectFit",
              },
            }),
          ]),
          _c("view", { staticClass: "release-right" }, [
            _c("view", [
              _c("text", { staticClass: "release-list-title" }, [
                _vm._v(" 发布约拍 "),
              ]),
            ]),
            _c("view", [
              _c("text", { staticClass: "release-list-content" }, [
                _vm._v("艺人发布合作意向"),
              ]),
            ]),
          ]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "release-item",
          on: {
            tap: function ($event) {
              return _vm.releaseUrl(3)
            },
          },
        },
        [
          _c("view", { staticClass: "release-left" }, [
            _c("image", {
              staticClass: "release-image",
              attrs: {
                src: __webpack_require__(/*! ../../assets/images/works.png */ "./src/assets/images/works.png"),
                mode: "aspectFit",
              },
            }),
          ]),
          _c("view", { staticClass: "release-right" }, [
            _c("view", [
              _c("text", { staticClass: "release-list-title" }, [
                _vm._v(" 发布作品 "),
              ]),
            ]),
            _c("view", [
              _c("text", { staticClass: "release-list-content" }, [
                _vm._v("分享您的优秀作品"),
              ]),
            ]),
          ]),
        ]
      ),
      _c("view", { staticClass: "release-item" }, [
        _c("view", { staticClass: "release-left" }, [
          _c("image", {
            staticClass: "release-image",
            attrs: {
              src: __webpack_require__(/*! ../../assets/images/card.png */ "./src/assets/images/card.png"),
              mode: "aspectFit",
            },
          }),
        ]),
        _c("view", { staticClass: "release-right" }, [
          _c("view", [
            _c("text", { staticClass: "release-list-title" }, [
              _vm._v(" 制作模卡"),
            ]),
          ]),
          _c("view", [
            _c("text", { staticClass: "release-list-content" }, [
              _vm._v("免费制作专业高清模卡"),
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

/***/ "./src/assets/images/camera.png":
/*!**************************************!*\
  !*** ./src/assets/images/camera.png ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/camera.png";

/***/ }),

/***/ "./src/assets/images/card.png":
/*!************************************!*\
  !*** ./src/assets/images/card.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/card.png";

/***/ }),

/***/ "./src/assets/images/publishLocation.png":
/*!***********************************************!*\
  !*** ./src/assets/images/publishLocation.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/publishLocation.png";

/***/ }),

/***/ "./src/assets/images/works.png":
/*!*************************************!*\
  !*** ./src/assets/images/works.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/works.png";

/***/ }),

/***/ "./src/pages/release/index.scss":
/*!**************************************!*\
  !*** ./src/pages/release/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/release/index.vue":
/*!*************************************!*\
  !*** ./src/pages/release/index.vue ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/release/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/release/index.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/pages/release/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/release/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/release/index.vue?vue&type=template&id=dc229814&":
/*!********************************************************************!*\
  !*** ./src/pages/release/index.vue?vue&type=template&id=dc229814& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dc229814___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=dc229814& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/release/index.vue?vue&type=template&id=dc229814&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dc229814___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dc229814___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/release/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map