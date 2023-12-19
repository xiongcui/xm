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
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/pages/release/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/index */ "./src/api/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
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
    goRelease: function goRelease(type) {
      if (Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* isLogin */ "b"])()) {
        this.publishVerify({
          project_code: "NT"
        }, "", type);
      } else {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/pages/login/index");
      }
    },
    publishVerify: function publishVerify(params, row, type) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* publishVerify */ "Ob"])(params);

              case 3:
                res = _context.sent;

                if (type) {
                  if (type == 1) {
                    Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/packageTonggao/pages/brand/index");
                  }

                  if (type == 2) {
                    Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/packageTonggao/pages/shop/index");
                  }
                } else {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/packageTonggao/pages/add/index?code=" + _this.code + "&type=" + row.value + "&key=" + row.key);
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                if (_context.t0.data.error_code == 21030 || _context.t0.data.error_code == 21040) {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/packageAdd/pages/guideTips/index?msg=".concat(_context.t0.data.msg, "&code=").concat(_context.t0.data.error_code));
                } else if (_context.t0.data.error_code == 21060) {
                  wx.showModal({
                    title: "温馨提示",
                    content: "还未完善个人资料，请前往完善个人资料",
                    confirmText: "完善资料",
                    success: function success(res) {
                      if (res.confirm) {
                        console.log("用户点击确定");
                        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/packageAdd/pages/user/editinfor/index");
                      } else if (res.cancel) {
                        console.log("用户点击取消");
                      }
                    }
                  });
                } else {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])(_context.t0.data.msg);
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
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
    _c("view", { staticClass: "release-content" }, [
      _c("view", { staticClass: "release-title" }, [_vm._v(" 选择发布类型 ")]),
      _c("view", { staticClass: "release-list" }, [
        _c(
          "view",
          {
            staticClass: "release-item bgcolor1",
            on: {
              tap: function ($event) {
                return _vm.goRelease(1)
              },
            },
          },
          [
            _c("view", { staticClass: "release-sub-title" }, [
              _vm._v(" 产品评测 "),
            ]),
            _c("view", { staticClass: "release-img" }, [
              _c("image", {
                attrs: { src: __webpack_require__(/*! ../../assets/images/product-icon.png */ "./src/assets/images/product-icon.png") },
              }),
            ]),
          ]
        ),
        _c(
          "view",
          {
            staticClass: "release-item bgcolor2",
            on: {
              tap: function ($event) {
                return _vm.goRelease(2)
              },
            },
          },
          [
            _c("view", { staticClass: "release-sub-title" }, [
              _vm._v(" 探店体验 "),
            ]),
            _c("view", { staticClass: "release-img" }, [
              _c("image", {
                attrs: { src: __webpack_require__(/*! ../../assets/images/store-icon.png */ "./src/assets/images/store-icon.png") },
              }),
            ]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/product-icon.png":
/*!********************************************!*\
  !*** ./src/assets/images/product-icon.png ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/product-icon.png";

/***/ }),

/***/ "./src/assets/images/store-icon.png":
/*!******************************************!*\
  !*** ./src/assets/images/store-icon.png ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/store-icon.png";

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

},[["./src/pages/release/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map