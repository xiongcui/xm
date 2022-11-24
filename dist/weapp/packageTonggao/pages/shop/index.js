(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageTonggao/pages/shop/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/shop/index.vue":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/shop/index.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5eb1b4af&scoped=true& */ "./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "5eb1b4af",
  "2dfbb3a1"
  
)

component.options.__file = "src/packageTonggao/pages/shop/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageTonggao/pages/shop/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "shop",
  data: function data() {
    return {
      platform: "",
      platformIndex: "",
      platformList: [],
      localtion: "",
      taskData: [{
        name: "支付稿费",
        value: 0
      }, {
        name: "赠送产品",
        value: 1
      }, {
        name: "稿费+赠送",
        value: 2
      }]
    };
  },
  methods: {
    platformChange: function platformChange() {},
    onChooseLocation: function onChooseLocation() {
      var _this = this;

      wx.chooseLocation({
        success: function success(res) {
          _this.localtion = res.address;
          _this.locale_address = res; //   console.log(res, "--------------", this.localtion);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "shop" }, [
    _c("view", { staticClass: "shop-box" }, [
      _c("view", { staticClass: "shop-item" }, [
        _c("view", { staticClass: "shop-left" }, [_vm._v(" 任务标题 ")]),
        _c("view", { staticClass: "shop-rt" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.date,
                expression: "date",
              },
            ],
            staticClass: "shop-input",
            attrs: { placeholder: "请输入标题(包含店铺名称)" },
            domProps: { value: _vm.date },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.date = $event.target.value
              },
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "shop-item" }, [
        _c("view", { staticClass: "shop-left" }, [_vm._v(" 推广平台")]),
        _c(
          "view",
          { staticClass: "shop-rt" },
          [
            _c(
              "picker",
              {
                staticClass: "shop-select",
                attrs: {
                  value: _vm.platformIndex,
                  range: _vm.platformList,
                  "range-key": "value",
                },
                on: { change: _vm.platformChange },
              },
              [
                _vm.platform
                  ? _c("view", { staticClass: "shop-select-item" }, [
                      _vm._v(_vm._s(_vm.platform)),
                    ])
                  : _c("view", { staticClass: "shop-select-item" }, [
                      _vm._v("请选择"),
                    ]),
              ]
            ),
          ],
          1
        ),
      ]),
    ]),
    _c("view", { staticClass: "shop-box" }, [
      _c("view", { staticClass: "shop-item" }, [
        _c("view", { staticClass: "shop-left" }, [_vm._v(" 店铺名称 ")]),
        _c("view", { staticClass: "shop-rt" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.date,
                expression: "date",
              },
            ],
            staticClass: "shop-input",
            attrs: { placeholder: "请输入店铺名称" },
            domProps: { value: _vm.date },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.date = $event.target.value
              },
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "shop-item" }, [
        _c("view", { staticClass: "shop-left" }, [_vm._v(" 店铺地址 ")]),
        _c(
          "view",
          { staticClass: "shop-rt", on: { tap: _vm.onChooseLocation } },
          [
            _c("image", {
              staticClass: "shop-icon",
              attrs: { src: __webpack_require__(/*! ../../../assets/images/position.png */ "./src/assets/images/position.png") },
            }),
            _vm.localtion
              ? _c("text", [_vm._v(" " + _vm._s(_vm.localtion))])
              : _c("text", [_vm._v(" 请选择店铺地址")]),
            _c("view", { staticClass: "shop-item-right" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../../assets/images/right.png */ "./src/assets/images/right.png"),
                },
              }),
            ]),
          ]
        ),
      ]),
      _c("view", { staticClass: "shop-item" }, [
        _c("view", { staticClass: "shop-left" }, [_vm._v(" 门牌号码 ")]),
        _c("view", { staticClass: "shop-rt" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.date,
                expression: "date",
              },
            ],
            staticClass: "shop-input",
            attrs: { placeholder: "请输入详细地址，如x单元x层x室" },
            domProps: { value: _vm.date },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.date = $event.target.value
              },
            },
          }),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "shop-box" }, [
      _c("view", { staticClass: "shop-item" }, [
        _c("view", { staticClass: "shop-left" }, [_vm._v(" 任务奖励 ")]),
      ]),
      _c("view", { staticClass: "shop-item" }, [
        _c(
          "view",
          { staticClass: "tags" },
          _vm._l(_vm.taskData, function (item, index) {
            return _c(
              "text",
              {
                key: index,
                staticClass: "tag_item",
                class: item.ispick ? "tag_itemed" : "",
                on: {
                  tap: function ($event) {
                    return _vm.select_tag(item)
                  },
                },
              },
              [_vm._v(_vm._s(item.name))]
            )
          }),
          0
        ),
      ]),
      _c("view", { staticClass: "shop-item" }, [
        _c("view", { staticClass: "shop-left" }, [_vm._v(" 招募人数 ")]),
        _c("view", { staticClass: "shop-rt" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.date,
                expression: "date",
              },
            ],
            staticClass: "shop-input",
            attrs: { placeholder: "请输入招募人数" },
            domProps: { value: _vm.date },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.date = $event.target.value
              },
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "shop-item" }, [
        _c("view", { staticClass: "shop-left" }, [
          _vm._v(" 需要红人自我报价 "),
        ]),
        _c("view", { staticClass: "shop-rt" }),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/right.png":
/*!*************************************!*\
  !*** ./src/assets/images/right.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAMAAADD5o0oAAAASFBMVEUAAAC1tbW3t7evr6+1tbWnp6e0tLS1tbW0tLS0tLS0tLS0tLS1tbW1tbW0tLS0tLS0tLS0tLS0tLSzs7O1tbWzs7Ozs7O1tbUNPAZqAAAAF3RSTlMAFxAL4Qa01c/EvCIdqN3ayK2iiolUUa/GGI4AAABRSURBVBjTdc9JDoBACETRtm1xbGet+99UV34NkRUvIUCFw2J4atWMYqMWFbdKVKv71SRDwyirUNKC+qT80fbG7sZYwGp3lHfoXQTCudhnpr8AZJQETibiUiUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/packageTonggao/pages/shop/index.scss":
/*!**************************************************!*\
  !*** ./src/packageTonggao/pages/shop/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageTonggao/pages/shop/index.vue":
/*!*************************************************!*\
  !*** ./src/packageTonggao/pages/shop/index.vue ***!
  \*************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/shop/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageTonggao/pages/shop/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5eb1b4af&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageTonggao/pages/shop/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map