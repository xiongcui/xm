(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/addresslist/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/addresslist/index.vue":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/addresslist/index.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_f7df8872_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f7df8872&scoped=true& */ "./src/packageAdd/pages/user/addresslist/index.vue?vue&type=template&id=f7df8872&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/addresslist/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_f7df8872_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_f7df8872_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "f7df8872",
  "092d28b9"
  
)

component.options.__file = "src/packageAdd/pages/user/addresslist/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addresslist/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/addresslist/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/addresslist/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "addresslist",
  data: function data() {
    return {
      listdata: [{
        items: {
          is_default: 1,
          tag: "家",
          contact_name: "熊翠",
          phone: 13693628075,
          city_name: "北京市",
          area_name: "朝阳区",
          address: "惠新里223号楼"
        }
      }, {
        items: {
          is_default: 0,
          tag: "家",
          contact_name: "熊翠",
          phone: 13693628075,
          city_name: "北京市",
          area_name: "朝阳区",
          address: "惠新里223号楼"
        }
      }],
      showloadingmore: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addresslist/index.vue?vue&type=template&id=f7df8872&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/addresslist/index.vue?vue&type=template&id=f7df8872&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "main" },
    [
      _vm._l(_vm.listdata, function (items, listIndex) {
        return _c(
          "block",
          { key: listIndex },
          _vm._l(items, function (item, itemIndex) {
            return _c(
              "view",
              {
                key: itemIndex,
                staticClass: "item ub",
                attrs: { catchtap: "chooseAddress" },
              },
              [
                _c("view", { staticClass: "address_info ub ub-ver" }, [
                  _c("view", { staticClass: "info_title ub" }, [
                    _c("view", { staticClass: "info_icon ub" }, [
                      item.is_default == 1
                        ? _c(
                            "view",
                            { staticClass: "icon_default icon_text" },
                            [_vm._v("默认")]
                          )
                        : _vm._e(),
                      item.tag != ""
                        ? _c("view", { staticClass: "icon_home icon_text" }, [
                            _vm._v(_vm._s(item.tag)),
                          ])
                        : _vm._e(),
                    ]),
                    _c("view", { staticClass: "info_name" }, [
                      _vm._v(_vm._s(item.contact_name)),
                    ]),
                    _c("view", { staticClass: "info_phone" }, [
                      _vm._v(_vm._s(item.phone)),
                    ]),
                  ]),
                  _c("view", { staticClass: "info_address" }, [
                    _vm._v(
                      _vm._s(item.city_name) +
                        _vm._s(item.city_name) +
                        _vm._s(item.area_name) +
                        _vm._s(item.address)
                    ),
                  ]),
                ]),
                _c(
                  "view",
                  {
                    staticClass: "edit_btn ub ub-ver",
                    attrs: { catchtap: "edit_address" },
                  },
                  [
                    _c("view", { staticClass: "ub-f1" }),
                    _c("image", {
                      attrs: {
                        src: __webpack_require__(/*! ../../../../assets/images/common/editbtn.png */ "./src/assets/images/common/editbtn.png"),
                      },
                    }),
                    _c("view", { staticClass: "ub-f1" }),
                  ]
                ),
              ]
            )
          }),
          0
        )
      }),
      _c(
        "view",
        { staticClass: "add_address", attrs: { catchtap: "add_address" } },
        [
          _c("image", {
            attrs: {
              src: __webpack_require__(/*! ../../../../assets/images/common/add_black.png */ "./src/assets/images/common/add_black.png"),
            },
          }),
          _vm._v("添加新地址 "),
        ]
      ),
      _c("view", { staticClass: "loadingmore" }, [
        _vm.showloadingmore ? _c("view") : _vm._e(),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/addresslist/index.scss":
/*!**********************************************************!*\
  !*** ./src/packageAdd/pages/user/addresslist/index.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/addresslist/index.vue":
/*!*********************************************************!*\
  !*** ./src/packageAdd/pages/user/addresslist/index.vue ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/addresslist/index.vue");


var config = {"usingComponents":{},"navigationBarTitleText":"收货地址"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/addresslist/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/addresslist/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/packageAdd/pages/user/addresslist/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addresslist/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/addresslist/index.vue?vue&type=template&id=f7df8872&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/addresslist/index.vue?vue&type=template&id=f7df8872&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f7df8872_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=f7df8872&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addresslist/index.vue?vue&type=template&id=f7df8872&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f7df8872_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f7df8872_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/addresslist/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map