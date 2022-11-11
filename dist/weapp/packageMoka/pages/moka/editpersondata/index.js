(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/editpersondata/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/editpersondata/index.vue":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/editpersondata/index.vue ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_8bff9e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8bff9e04&scoped=true& */ "./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=template&id=8bff9e04&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_8bff9e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_8bff9e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "8bff9e04",
  "5c1954f0"
  
)

component.options.__file = "src/packageMoka/pages/moka/editpersondata/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/editpersondata/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "editpersondata",
  data: function data() {
    return {
      heights: [],
      heightIndex: "",
      weights: [],
      weightIndex: "",
      shoes: [],
      shoeIndex: "",
      BWHs: [],
      BWHIndex: Array(),
      isshowBWH: true
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=template&id=8bff9e04&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=template&id=8bff9e04&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      staticClass: "editpersondata",
      attrs: { bindreset: "reset", bindsubmit: "sub", reportSubmit: "true" },
    },
    [
      _c(
        "view",
        { staticClass: "infor" },
        [
          _c(
            "picker",
            {
              attrs: {
                bindchange: "heightChange",
                range: "heights",
                value: _vm.heightIndex ? _vm.heightIndex : 125,
              },
            },
            [
              _c("view", { staticClass: "item ub item-b" }, [
                _c("view", { staticClass: "ub-f1 ub item_mid" }, [
                  _c("view", { staticClass: "item_label" }, [
                    _vm._v("身高（cm）"),
                  ]),
                  _c("view", { staticClass: "ub-f1 item_input" }, [
                    _vm.heightIndex === ""
                      ? _c("view", { staticClass: "picker" }, [
                          _vm._v("请选择"),
                        ])
                      : _c("view", { staticClass: "picker" }, [
                          _vm._v(_vm._s(_vm.heights[_vm.heightIndex]) + "cm"),
                        ]),
                  ]),
                ]),
                _c("view", { staticClass: "item_right" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: __webpack_require__(/*! ../../../../assets/images/common/icon_right.png */ "./src/assets/images/common/icon_right.png"),
                    },
                  }),
                ]),
              ]),
            ]
          ),
          _c(
            "picker",
            {
              attrs: {
                bindchange: "weightChange",
                range: "weights",
                value: _vm.weightIndex ? _vm.weightIndex : 35,
              },
            },
            [
              _c("view", { staticClass: "item ub item-b" }, [
                _c("view", { staticClass: "ub-f1 ub item_mid" }, [
                  _c("view", { staticClass: "item_label" }, [
                    _vm._v("体重（kg）"),
                  ]),
                  _c("view", { staticClass: "ub-f1 item_input" }, [
                    _vm.weightIndex === ""
                      ? _c("view", { staticClass: "picker" }, [
                          _vm._v("请选择"),
                        ])
                      : _c("view", { staticClass: "picker" }, [
                          _vm._v(_vm._s(_vm.weights[_vm.weightIndex]) + "kg"),
                        ]),
                  ]),
                ]),
                _c("view", { staticClass: "item_right" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: __webpack_require__(/*! ../../../../assets/images/common/icon_right.png */ "./src/assets/images/common/icon_right.png"),
                    },
                  }),
                ]),
              ]),
            ]
          ),
          _c(
            "picker",
            {
              attrs: {
                bindchange: "BWHChange",
                mode: "multiSelector",
                range: "BWHs",
                value: "BWHIndex",
              },
            },
            [
              _c("view", { staticClass: "item ub item-b" }, [
                _c("view", { staticClass: "ub-f1 ub item_mid" }, [
                  _c("view", { staticClass: "item_label" }, [_vm._v("三围")]),
                  _c("view", { staticClass: "ub-f1 item_input" }, [
                    _vm.BWHIndex.length
                      ? _c("view", { staticClass: "picker" }, [
                          _vm._v(
                            " 胸围" +
                              _vm._s(_vm.BWHs[0][_vm.BWHIndex[0]]) +
                              " 腰围" +
                              _vm._s(_vm.BWHs[1][_vm.BWHIndex[1]]) +
                              " 臀围" +
                              _vm._s(_vm.BWHs[2][_vm.BWHIndex[2]]) +
                              " "
                          ),
                        ])
                      : _c("view", { staticClass: "picker" }, [
                          _vm._v("请选择"),
                        ]),
                  ]),
                ]),
                _c("view", { staticClass: "item_right" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: __webpack_require__(/*! ../../../../assets/images/common/icon_right.png */ "./src/assets/images/common/icon_right.png"),
                    },
                  }),
                ]),
              ]),
            ]
          ),
          _c(
            "picker",
            {
              attrs: {
                bindchange: "shoeChange",
                range: "shoes",
                value: _vm.shoeIndex ? _vm.shoeIndex : 18,
              },
            },
            [
              _c("view", { staticClass: "item ub" }, [
                _c("view", { staticClass: "ub-f1 ub item_mid" }, [
                  _c("view", { staticClass: "item_label" }, [_vm._v("鞋码")]),
                  _c("view", { staticClass: "ub-f1 item_input" }, [
                    _vm.shoeIndex === ""
                      ? _c("view", { staticClass: "picker" }, [
                          _vm._v("请选择"),
                        ])
                      : _c("view", { staticClass: "picker" }, [
                          _vm._v(_vm._s(_vm.shoes[_vm.shoeIndex])),
                        ]),
                  ]),
                ]),
                _c("view", { staticClass: "item_right" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: __webpack_require__(/*! ../../../../assets/images/common/icon_right.png */ "./src/assets/images/common/icon_right.png"),
                    },
                  }),
                ]),
              ]),
            ]
          ),
        ],
        1
      ),
      _c("view", { staticClass: "sub_btn" }, [
        _c("button", { attrs: { formType: "submit", type: "primary" } }, [
          _vm._v("保存"),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMoka/pages/moka/editpersondata/index.scss":
/*!**************************************************************!*\
  !*** ./src/packageMoka/pages/moka/editpersondata/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/editpersondata/index.vue":
/*!*************************************************************!*\
  !*** ./src/packageMoka/pages/moka/editpersondata/index.vue ***!
  \*************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/editpersondata/index.vue");


var config = {"navigationBarTitleText":"形象信息","backgroundColor":"#FE5457","backgroundColorTop":"#FE5457","backgroundColorBottom":"#f7f7f7","usingComponents":{}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/editpersondata/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=template&id=8bff9e04&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=template&id=8bff9e04&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8bff9e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=8bff9e04&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editpersondata/index.vue?vue&type=template&id=8bff9e04&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8bff9e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8bff9e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/editpersondata/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map