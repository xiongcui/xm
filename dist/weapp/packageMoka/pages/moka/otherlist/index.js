(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/otherlist/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/otherlist/index.vue":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/otherlist/index.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7b66f422&scoped=true& */ "./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "7b66f422",
  "7c4532bd"
  
)

component.options.__file = "src/packageMoka/pages/moka/otherlist/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/otherlist/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "otherlist",
  data: function data() {
    return {
      noneData: false,
      listdata: [],
      itemIndex: 0
    };
  },
  methods: {
    goInforother: function goInforother(e) {
      var id = e.currentTarget.dataset.id;
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "c"])("/packageMoka/pages/moka/inforother/index?sub_user_id=" + id);
    },
    nonpersonalList: function nonpersonalList(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* nonpersonalList */ "ib"])(params);

              case 3:
                res = _context.sent;
                _this.listdata = res.data.data;
                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }
  },
  created: function created() {
    this.nonpersonalList("");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "otherlist" }, [
    _vm.noneData
      ? _c("view", { staticClass: "main ub ub-ver none_main" }, [
          _c(
            "view",
            {
              staticClass: "item_add ub",
              attrs: { "data-id": "" },
              on: { tap: _vm.goInforother },
            },
            [
              _c("view", { staticClass: "side_gap" }),
              _c("view", { staticClass: "ub-f1" }, [
                _c("view", { staticClass: "item_add_btn ub" }, [
                  _c("view", { staticClass: "ub-f1" }),
                  _c("view", { staticClass: "item_add_btn_img" }, [
                    _c("image", {
                      attrs: {
                        mode: "widthFix",
                        src: "https://yuepai-oss.qubeitech.com/static/images/moka/makecard/addbtn.png",
                      },
                    }),
                  ]),
                  _c("view", { staticClass: "item_add_btn_text" }, [
                    _vm._v("新增模卡资料"),
                  ]),
                  _c("view", { staticClass: "ub-f1" }),
                ]),
              ]),
              _c("view", { staticClass: "side_gap" }),
            ]
          ),
        ])
      : _c(
          "view",
          { staticClass: "main ub ub-ver" },
          [
            _c(
              "view",
              {
                staticClass: "item_add ub",
                attrs: { "data-id": "" },
                on: { tap: _vm.goInforother },
              },
              [
                _c("view", { staticClass: "side_gap" }),
                _c("view", { staticClass: "ub-f1" }, [
                  _c("view", { staticClass: "item_add_btn ub" }, [
                    _c("view", { staticClass: "ub-f1" }),
                    _c("view", { staticClass: "item_add_btn_img" }, [
                      _c("image", {
                        attrs: {
                          mode: "widthFix",
                          src: "https://yuepai-oss.qubeitech.com/static/images/moka/makecard/addbtn.png",
                        },
                      }),
                    ]),
                    _c("view", { staticClass: "item_add_btn_text" }, [
                      _vm._v("新增模卡资料"),
                    ]),
                    _c("view", { staticClass: "ub-f1" }),
                  ]),
                ]),
                _c("view", { staticClass: "side_gap" }),
              ]
            ),
            _vm._l(_vm.listdata, function (item, itemIndex) {
              return _c("view", { key: itemIndex, staticClass: "item ub" }, [
                _c("view", { staticClass: "side_gap" }),
                _c(
                  "view",
                  {
                    staticClass: "ub-f1 item_content ub",
                    attrs: { "data-id": item.sub_uuid },
                    on: { tap: _vm.goInforother },
                  },
                  [
                    _c("view", { staticClass: "item_content_gap" }),
                    _c("view", { staticClass: "ub-f1" }, [
                      _c("view", { staticClass: "ub item_content_top" }, [
                        _c("view", { staticClass: "user_info" }, [
                          _c("view", { staticClass: "user_name" }, [
                            _vm._v(_vm._s(item.nickname)),
                          ]),
                          item.sex !== null
                            ? _c("view", { staticClass: "user_sex" }, [
                                _c("image", {
                                  attrs: {
                                    mode: "widthFix",
                                    src:
                                      "https://yuepai-oss.qubeitech.com/static/images/common/sex" +
                                      (item.sex ? 1 : 0) +
                                      ".png",
                                  },
                                }),
                              ])
                            : _vm._e(),
                        ]),
                        _c("view", [
                          _vm._v("做过 " + _vm._s(item.mocha_cnt) + " 张模卡"),
                        ]),
                      ]),
                      _c("view", { staticClass: "ub item_content_bottom" }, [
                        _c("view", { staticClass: "user_tag" }, [
                          _c("text", [_vm._v(_vm._s(item.height) + "cm")]),
                          _c("text", [_vm._v(_vm._s(item.weight) + "kg")]),
                        ]),
                        _c("view", { staticClass: "ub-f1" }),
                        _c("view", { staticClass: "user_time" }, [
                          _vm._v(_vm._s(item.date_humanize) + "更新"),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _c("view", { staticClass: "side_gap" }),
              ])
            }),
          ],
          2
        ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMoka/pages/moka/otherlist/index.scss":
/*!*********************************************************!*\
  !*** ./src/packageMoka/pages/moka/otherlist/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/otherlist/index.vue":
/*!********************************************************!*\
  !*** ./src/packageMoka/pages/moka/otherlist/index.vue ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/otherlist/index.vue");


var config = {"navigationBarTitleText":"选择模卡资料"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/otherlist/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7b66f422&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/otherlist/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map