(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/release/appointment/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/appointment/index.vue":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/appointment/index.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_00a9b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=00a9b0f4&scoped=true& */ "./src/pages/release/appointment/index.vue?vue&type=template&id=00a9b0f4&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/release/appointment/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_00a9b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_00a9b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "00a9b0f4",
  "6215b310"
  
)

component.options.__file = "src/pages/release/appointment/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/release/appointment/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/release/appointment/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/pages/release/appointment/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "appointment",
  data: function data() {
    return {
      verifyP1: null
    };
  },
  methods: {
    goyuedan: function goyuedan(code, name) {
      this.publishVerify({
        project_code: "NE"
      }, code, name);
    },
    publishVerify: function publishVerify(params, code, name) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* publishVerify */ "ob"])(params);

              case 3:
                res = _context.sent;
                wx.navigateTo({
                  url: "/packageAdd/pages/yuedan/add_yuedan/index?id=" + code + "&name=" + name
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                if (_context.t0.data.error_code == 21030 || _context.t0.data.error_code == 21040) {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/guideTips/index?msg=".concat(_context.t0.data.msg, "&code=").concat(_context.t0.data.error_code));
                } else if (_context.t0.data.error_code == 22010) {
                  wx.showModal({
                    title: "温馨提示",
                    content: "你的主身份不符约拍发布，建议修改身份或发布通告",
                    cancelText: "修改身份",
                    confirmText: "发布通告",
                    success: function success(res) {
                      if (res.confirm) {
                        console.log("用户点击确定");
                        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageTonggao/pages/index/index");
                      } else if (res.cancel) {
                        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/user/identity/index");
                        console.log("用户点击取消");
                      }
                    }
                  });
                } else if (_context.t0.data.error_code == 21060) {
                  wx.showModal({
                    title: "温馨提示",
                    content: "还未完善个人资料，请前往完善个人资料",
                    confirmText: "完善资料",
                    success: function success(res) {
                      if (res.confirm) {
                        console.log("用户点击确定");
                        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/user/editinfor/index");
                      } else if (res.cancel) {
                        console.log("用户点击取消");
                      }
                    }
                  });
                } else {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])(_context.t0.data.msg);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/release/appointment/index.vue?vue&type=template&id=00a9b0f4&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/release/appointment/index.vue?vue&type=template&id=00a9b0f4&scoped=true& ***!
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
  return _c("view", { staticClass: "appointment" }, [
    _c("view", { staticClass: "select-list" }, [
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("20001", "摄影师")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/cameraman.png",
            },
          }),
          _c("text", [_vm._v("约摄影师")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("10001", "模特")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/icon_model.png",
            },
          }),
          _c("text", [_vm._v("约模特")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("20003", "化妆师")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/makeup.png",
            },
          }),
          _c("text", [_vm._v("约化妆师")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("20004", "造型师")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/makeup.png",
            },
          }),
          _c("text", [_vm._v("约造型师")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("20002", "摄像师")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/take.png",
            },
          }),
          _c("text", [_vm._v("约摄像师")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("20005", "修图师")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/ps.png",
            },
          }),
          _c("text", [_vm._v("约修图师")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("20008", "经纪人")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/economicman.png",
            },
          }),
          _c("text", [_vm._v("约经纪人")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("20013", "商家")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/business.png",
            },
          }),
          _c("text", [_vm._v("约商家")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("10002", "主播")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/zhubo.png",
            },
          }),
          _c("text", [_vm._v("约主播")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("10003", "演员")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/direct.png",
            },
          }),
          _c("text", [_vm._v("约演员")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("10004", "主持")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/economicman.png",
            },
          }),
          _c("text", [_vm._v("约主持")]),
        ]
      ),
      _c(
        "view",
        {
          staticClass: "select-item",
          on: {
            tap: function ($event) {
              return _vm.goyuedan("10007", "红人")
            },
          },
        },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/hongren.png",
            },
          }),
          _c("text", [_vm._v("约红人")]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/release/appointment/index.scss":
/*!**************************************************!*\
  !*** ./src/pages/release/appointment/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/release/appointment/index.vue":
/*!*************************************************!*\
  !*** ./src/pages/release/appointment/index.vue ***!
  \*************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/appointment/index.vue");


var config = {"navigationBarTitleText":"选择约拍对象"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/release/appointment/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/release/appointment/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/pages/release/appointment/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/release/appointment/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/release/appointment/index.vue?vue&type=template&id=00a9b0f4&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/pages/release/appointment/index.vue?vue&type=template&id=00a9b0f4&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_00a9b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=00a9b0f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/release/appointment/index.vue?vue&type=template&id=00a9b0f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_00a9b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_00a9b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/release/appointment/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map