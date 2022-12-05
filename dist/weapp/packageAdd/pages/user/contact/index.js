(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/contact/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/contact/index.vue":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/contact/index.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4b0a70d5&scoped=true& */ "./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "4b0a70d5",
  "5677a6c7"
  
)

component.options.__file = "src/packageAdd/pages/user/contact/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/contact/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "contact"
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "main" }, [
    _c(
      "form",
      {
        attrs: { bindreset: "reset", bindsubmit: "sub", reportSubmit: "true" },
      },
      [
        _c("view", { staticClass: "contact_info" }, [
          _vm.from_page == "addtonggao"
            ? _c("view", { staticClass: "item line-b ub" }, [
                _c("view", { staticClass: "contact_info_title" }, [
                  _vm._v("我的联系方式"),
                ]),
                _c("view", { staticClass: "contact_info_title_tip" }, [
                  _vm._v("（仅报名者可见）"),
                ]),
              ])
            : _vm._e(),
          _vm.from_page == "tonggaoreg"
            ? _c("view", { staticClass: "item line-b ub" }, [
                _c("view", { staticClass: "contact_info_title" }, [
                  _vm._v("我的联系方式"),
                ]),
              ])
            : _vm._e(),
          _c("view", { staticClass: "item line-b ub" }, [
            _c("view", { staticClass: "item_title" }, [_vm._v("联系人")]),
            _c("view", { staticClass: "ub-f1 item_input" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.contact_name,
                    expression: "contact_name",
                  },
                ],
                attrs: {
                  maxlength: "60",
                  name: "contact_name",
                  placeholder: "请输入联系人姓名",
                  placeholderClass: "input-placeholder",
                  type: "text",
                },
                domProps: { value: _vm.contact_name },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.contact_name = $event.target.value
                  },
                },
              }),
            ]),
          ]),
          _c("view", { staticClass: "item line-b ub" }, [
            _c("view", { staticClass: "item_title" }, [_vm._v("微信号")]),
            _c("view", { staticClass: "ub-f1" }),
            _c("view", { staticClass: "item_switch" }, [
              _c("switch", {
                staticClass: "btn_switch",
                attrs: {
                  catchtap: "switch_selct",
                  checked: _vm.info.show_wxid == 1 ? true : false,
                  "data-type": "1",
                },
              }),
            ]),
          ]),
          _vm.info.show_wxid == 1
            ? _c("view", { staticClass: "item line-b" }, [
                _c("view", { staticClass: "item_input" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.wxid,
                        expression: "wxid",
                      },
                    ],
                    attrs: {
                      name: "wxid",
                      placeholder: "请输入微信号",
                      placeholderClass: "input-placeholder",
                      type: "text",
                    },
                    domProps: { value: _vm.wxid },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.wxid = $event.target.value
                      },
                    },
                  }),
                ]),
              ])
            : _vm._e(),
          _c("view", { staticClass: "item line-b ub" }, [
            _c("view", { staticClass: "item_title" }, [_vm._v("手机号")]),
            _c("view", { staticClass: "ub-f1" }),
            _c("view", { staticClass: "item_switch" }, [
              _c("switch", {
                staticClass: "btn_switch",
                attrs: {
                  catchtap: "switch_selct",
                  checked: _vm.info.show_phone == 1 ? true : false,
                  "data-type": "2",
                },
              }),
            ]),
          ]),
          _vm.info.show_phone == 1
            ? _c("view", { staticClass: "item line-b" }, [
                _c("view", { staticClass: "item_input" }, [
                  _c(
                    "button",
                    {
                      staticClass: "change_phone_btn",
                      attrs: {
                        bindgetphonenumber: "changePhone",
                        openType: "getPhoneNumber",
                      },
                    },
                    [_vm._v(" " + _vm._s(_vm.info.phone) + " ")]
                  ),
                ]),
              ])
            : _vm._e(),
          _c("view", { staticClass: "item ub" }, [
            _c("view", { staticClass: "item_title item_title_qrcode" }, [
              _vm._v("微信名片二维码"),
            ]),
            _c("view", { staticClass: "ub-f1" }),
            _c("view", { staticClass: "imgsblock" }, [
              _c("view", { staticClass: "imgs" }, [
                _vm.img_qrcode
                  ? _c(
                      "view",
                      {
                        staticClass: "preview_img",
                        attrs: { catchtap: "chooesImage" },
                      },
                      [
                        _c("image", {
                          attrs: {
                            catchtap: "showbig",
                            mode: "aspectFill",
                            src: _vm.img_qrcode,
                          },
                        }),
                        _c(
                          "view",
                          {
                            staticClass: "preview_delet",
                            attrs: { catchtap: "delete_preview" },
                          },
                          [
                            _c("image", {
                              attrs: {
                                mode: "scaleToFill",
                                src: __webpack_require__(/*! ../../../../assets/images/common/icon_sizer_close.png */ "./src/assets/images/common/icon_sizer_close.png"),
                              },
                            }),
                          ]
                        ),
                      ]
                    )
                  : _vm._e(),
                _c(
                  "view",
                  {
                    staticClass: "pick_img",
                    attrs: { bindtap: "chooesImage", "wx:else": "" },
                  },
                  [
                    _c("image", {
                      attrs: {
                        src: __webpack_require__(/*! ../../../../assets/images/common/img_add.png */ "./src/assets/images/common/img_add.png"),
                      },
                    }),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
        _c("view", { staticClass: "sub_btn" }, [
          _c("button", { attrs: { formType: "submit" } }, [_vm._v("保 存")]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/common/icon_sizer_close.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/common/icon_sizer_close.png ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAM1BMVEX///8yMjI4ODg5OTkzMzM4ODgzMzNMTEwzMzNCQkJCQkI0NDQzMzM1NTUzMzM5OTkzMzMGQPbIAAAAEHRSTlMD70E+7kP1EOAjIZ3imppHjVWRJAAAAKxJREFUOMvF1M0OAyEIBGAVRNvtD+//tE036c5hSrGn5WTwy1xEytl1HfHduOD8sNszcqK2HXnmrv27a9XdPpljOiQ7n+OIr2/ZAldxEUmBo9ZqM3VocyOR5AIpSo5k5iATBym7U3IkFS6RicPzwiWRq4GQiauK+fzltMnOSdJY4pA4jHbiEgnHkl2nj5U5luwglSQ7zmTHD1CWV8q/S6rcTaUE1adty4v05HoBRqEN0i7N8xwAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/common/img_add.png":
/*!**********************************************!*\
  !*** ./src/assets/images/common/img_add.png ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACmBAMAAACipulEAAAAKlBMVEUAAADV1dXz8/Pz8/Pz8/Pz8/Pz8/Py8vLy8vLY2NjZ2dnk5OTx8fHy8vKjpwXtAAAACXRSTlMABiuPk7zU8vxOVFVLAAAA40lEQVRo3u3bvQkCURBF4StYgIEdmBibL2ghxkamZpuYW8BoBSoWoGgFYrToivp6sQIXXGbwh3MK+GB5bDJwJXVGya9JT5Las+TZdSA1hsm3c0vN5F1fXXdzqszdLDR2Ny/K3c1SyT9MTExMTExMTExMTExMzI+ax9Xe3dzawt1c2tzdNDNMTExMTEzMnzcfO3vd+lTLvFtVh1rmrdLcfI0Z8e0Rb8R/hImJiYmJ+e9mxC0o4mYVcVt7I0xMTExMTExMTExMTEzMEDN3J8uQzUjmbhYhG5yIrVDEpiliexWwEXsCHiYBuXbKag4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/packageAdd/pages/user/contact/index.scss":
/*!******************************************************!*\
  !*** ./src/packageAdd/pages/user/contact/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/contact/index.vue":
/*!*****************************************************!*\
  !*** ./src/packageAdd/pages/user/contact/index.vue ***!
  \*****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/contact/index.vue");


var config = {"navigationBarTitleText":"我的联系方式"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/contact/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4b0a70d5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/contact/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map