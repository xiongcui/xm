(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/sensationlist/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/sensationlist/index.vue":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/sensationlist/index.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=602c8991&scoped=true& */ "./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "602c8991",
  "11c20203"
  
)

component.options.__file = "src/packageAdd/pages/user/sensationlist/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/sensationlist/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "",
  data: function data() {
    return {
      noneData: false,
      listdata: [{
        media_info: {
          logo: "https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/93f5be46-67bb-11ed-ae45-473a871aac32.jpg"
        },
        fans_data: [{
          nickname: "nickname",
          follow_count: 100,
          status: 0,
          timetext: "10分钟"
        }, {
          nickname: "nickname",
          follow_count: 100,
          status: -1,
          timetext: "10分钟"
        }]
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _vm.noneData
    ? _c("view", { staticClass: "main ub ub-ver none_main" }, [
        _c(
          "view",
          {
            staticClass: "item_add",
            attrs: { catchtap: "goChooseMedia", "data-id": "" },
          },
          [
            _c("image", {
              attrs: {
                src: __webpack_require__(/*! ../../../../assets/images/common/add_black.png */ "./src/assets/images/common/add_black.png"),
              },
            }),
            _vm._v("添加账号 "),
          ]
        ),
      ])
    : _c(
        "view",
        { staticClass: "main ub ub-ver" },
        [
          _vm._l(_vm.listdata, function (items, listIndex) {
            return _c(
              "block",
              { key: listIndex },
              _vm._l(items.fans_data, function (item, itemIndex) {
                return _c(
                  "view",
                  {
                    key: itemIndex,
                    staticClass: "item ub",
                    attrs: { catchtap: "chooseFans" },
                  },
                  [
                    _c("view", { staticClass: "item_main ub" }, [
                      _c("view", { staticClass: "item_logo" }, [
                        _c("image", {
                          attrs: {
                            mode: "aspectFit",
                            src: items.media_info.logo,
                          },
                        }),
                      ]),
                      _c("view", { staticClass: "ub-f1" }, [
                        _c("view", { staticClass: "item_name" }, [
                          _vm._v(_vm._s(item.nickname)),
                        ]),
                        _c("view", { staticClass: "item_fanscount" }, [
                          _vm._v("粉丝：" + _vm._s(item.follow_count)),
                        ]),
                      ]),
                      _c("image", {
                        staticClass: "editbtn",
                        attrs: {
                          src: __webpack_require__(/*! ../../../../assets/images/common/editbtn.png */ "./src/assets/images/common/editbtn.png"),
                        },
                      }),
                    ]),
                    _c("view", { staticClass: "item_tags ub" }, [
                      _c("view", { staticClass: "item_time" }, [
                        _vm._v(_vm._s(item.timetext) + "创建"),
                      ]),
                      _c("view", { staticClass: "ub-f1" }),
                      _c("view", { staticClass: "item_status" }, [
                        item.status == 0
                          ? _c("view", { staticClass: "item_status_wait" }, [
                              _vm._v("待审核"),
                            ])
                          : _vm._e(),
                        item.status == -1
                          ? _c("view", { staticClass: "item_status_fail" }, [
                              _vm._v("审核未通过"),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                  ]
                )
              }),
              0
            )
          }),
          _c(
            "view",
            {
              staticClass: "item_add",
              attrs: { catchtap: "goChooseMedia", "data-id": "" },
            },
            [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../../assets/images/common/add_black.png */ "./src/assets/images/common/add_black.png"),
                },
              }),
              _vm._v("添加账号 "),
            ]
          ),
        ],
        2
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/sensationlist/index.scss":
/*!************************************************************!*\
  !*** ./src/packageAdd/pages/user/sensationlist/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/sensationlist/index.vue":
/*!***********************************************************!*\
  !*** ./src/packageAdd/pages/user/sensationlist/index.vue ***!
  \***********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/sensationlist/index.vue");


var config = {"navigationBarTitleText":"选择红人账号"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/sensationlist/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=602c8991&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/sensationlist/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map