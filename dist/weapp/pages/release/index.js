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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      if (!Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* isLogin */ "b"])()) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/pages/login/index");
        return false;
      }

      var url = "";

      switch (type) {
        case 1:
          url = "/packageTonggao/pages/index/index";
          break;

        case 2:
          url = "appointment/index";
          break;

        case 3:
          this.publishVerify({
            project_code: "PH"
          });
          break;

        case 4:
          url = "/packageMoka/pages/moka/modelcard/index";
          break;

        case 5:
          url = "/packageActivity/pages/add/index";
          break;
      }

      Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])(url);
    },
    publishVerify: function publishVerify(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* publishVerify */ "xb"])(params);

              case 3:
                res = _context.sent;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/packageAdd/pages/zuopin/add_zuopin/index");
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                if (_context.t0.data.error_code == 21030 || _context.t0.data.error_code == 21040) {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/packageAdd/pages/guideTips/index?msg=".concat(_context.t0.data.msg, "&code=").concat(_context.t0.data.error_code));
                } else {
                  errortip(_context.t0.data.msg);
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
    _c("view", { staticClass: "release-title" }, [
      _vm._v(" 你可以在这里发布 "),
    ]),
    _c("view", { staticClass: "release-list" }, [
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
          _c("view", { staticClass: "release-left color2" }, [
            _c("image", {
              staticClass: "release-image",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/publish2.png",
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
                _vm._v(
                  "发布互免、收费、付费、置换等约拍，邀约模特、摄影、妆造、修图等 "
                ),
              ]),
            ]),
          ]),
          _c("image", {
            staticClass: "hot",
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/hot.png",
            },
          }),
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
          _c("view", { staticClass: "release-left color3" }, [
            _c("image", {
              staticClass: "release-image",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/publish3.png",
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
                _vm._v(
                  "分享自己的作品或照片，提升自己的约拍专业影响力，获得更多曝光"
                ),
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
              return _vm.releaseUrl(1)
            },
          },
        },
        [
          _c("view", { staticClass: "release-left color1" }, [
            _c("image", {
              staticClass: "release-image",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/publish1.png",
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
                _vm._v(
                  "发布创作、影视、造型、种草、探店等通告，招募模特、演员、红人、主播等 "
                ),
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
              return _vm.releaseUrl(4)
            },
          },
        },
        [
          _c("view", { staticClass: "release-left color4" }, [
            _c("image", {
              staticClass: "release-image",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/moka_icon.png",
                mode: "aspectFit",
              },
            }),
          ]),
          _c("view", { staticClass: "release-right" }, [
            _c("view", [
              _c("text", { staticClass: "release-list-title" }, [
                _vm._v(" 制作模卡 "),
              ]),
            ]),
            _c("view", [
              _c("text", { staticClass: "release-list-content" }, [
                _vm._v(
                  "免费制作专业高清模卡，数百个模板可供选择，制作专业模卡的神器"
                ),
              ]),
            ]),
          ]),
        ]
      ),
      false
        ? undefined
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



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