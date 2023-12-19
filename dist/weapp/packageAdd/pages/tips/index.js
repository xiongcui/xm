(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/tips/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/tips/index.vue":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/tips/index.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_b915a59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b915a59e&scoped=true& */ "./src/packageAdd/pages/tips/index.vue?vue&type=template&id=b915a59e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/tips/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_b915a59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_b915a59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "b915a59e",
  "2e687523"
  
)

component.options.__file = "src/packageAdd/pages/tips/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/tips/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/tips/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/tips/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");




var _methods;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "tips",
  data: function data() {
    return {
      type: 1,
      msg: "",
      is_follow_gzh: 0,
      visible: true,
      template: [// "tEX27GKFotgdenR3XC5grlgpS79LudBKxvy7uBbsdcM",
        // "sQXqKGSEacobxAx8r7RJP5_y5mm7g53v6htcEPWfsPQ",
      ]
    };
  },
  methods: (_methods = {
    showSubscribe: function showSubscribe() {
      this.visible = true;
    },
    nowSubscribe: function nowSubscribe() {
      wx.requestSubscribeMessage({
        tmplIds: this.template,
        success: function success(res) {
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("订阅成功，继续订阅可获得多次提醒");
        }
      });
    },
    cancel: function cancel() {
      this.visible = false;
    },
    officialAccount: function officialAccount() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageAdd/pages/user/follow/index");
    },
    goback: function goback() {
      // 跳转首页
      wx.switchTab({
        url: "/pages/home/index",
        success: function success(e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.onLoad();
        }
      });
    },
    continuePublish: function continuePublish() {
      wx.switchTab({
        url: "/pages/release/index"
      });
    }
  }, Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_methods, "officialAccount", function officialAccount() {
    Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageAdd/pages/user/follow/index");
  }), Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_methods, "checkFollow", function checkFollow(params) {
    var _this = this;

    return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().mark(function _callee() {
      var res;
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* checkFollow */ "s"])(params);

            case 3:
              res = _context.sent;
              _this.is_follow_gzh = res.data.data.is_follow_gzh;
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
  }), Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_methods, "subscribeEvent", function subscribeEvent(params) {
    var _this2 = this;

    return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().mark(function _callee2() {
      var res;
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* subscribeEvent */ "qc"])(params);

            case 3:
              res = _context2.sent;
              _this2.template = res.data.data.map(function (item) {
                return item.code;
              });
              _context2.next = 9;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }))();
  }), _methods),
  created: function created() {
    this.checkFollow("");
    this.subscribeEvent({
      sub_type: "publish"
    });
  },
  onLoad: function onLoad(options) {
    if (options.type) {
      this.type = options.type;
    }

    if (options.msg) {
      this.msg = options.msg;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/tips/index.vue?vue&type=template&id=b915a59e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/tips/index.vue?vue&type=template&id=b915a59e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "tips" }, [
    !_vm.is_follow_gzh
      ? _c(
          "view",
          { staticClass: "toptip fl", on: { tap: _vm.officialAccount } },
          [
            _c("image", {
              staticClass: "toptip_icon",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/common/tongzhi3.png",
              },
            }),
            _c("view", { staticClass: "toptip_text fl-g1" }, [
              _vm._v("开启推送通知，及时接收约拍通知"),
            ]),
            _c("view", { staticClass: "toptip_btn" }, [_vm._v("去开启")]),
          ]
        )
      : _vm._e(),
    _vm.type == 1
      ? _c("view", { staticClass: "tips-sucess" }, [
          _c("image", {
            staticClass: "tips-img",
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/sucess.png",
            },
          }),
          _c("view", { staticClass: "tips-title" }, [_vm._v("发布成功")]),
          _c("view", [_vm._v(_vm._s(_vm.msg))]),
          _c(
            "view",
            { staticClass: "subscribe-btn", on: { tap: _vm.showSubscribe } },
            [_vm._v(" 订阅通知 ")]
          ),
          _c("view", { staticClass: "subscribe-box" }, [
            _c("view", { staticClass: "subscribe-left" }, [
              _c("image", {
                attrs: {
                  src: "https://yuepai-oss.qubeitech.com/static/images/wchat.jpg",
                },
              }),
            ]),
            _c("view", { staticClass: "subscribe-ct" }, [
              _c("view", { staticClass: "subscribe-title" }, [
                _vm._v("订阅微信通知"),
              ]),
              _c("view", { staticClass: "subscribe-p" }, [
                _vm._v("及时获取报名进度提醒"),
              ]),
            ]),
            _c(
              "view",
              { staticClass: "subscribe-rt", on: { tap: _vm.nowSubscribe } },
              [_c("text", [_vm._v("立即订阅")])]
            ),
          ]),
          _c("view", { staticClass: "tips-box-btns" }, [
            _c("view", { staticClass: "tips-btn", on: { tap: _vm.goback } }, [
              _vm._v("返回首页"),
            ]),
            _c(
              "view",
              { staticClass: "tips-btn", on: { tap: _vm.continuePublish } },
              [_vm._v("继续发布")]
            ),
          ]),
        ])
      : _vm.type == 0
      ? _c("view", { staticClass: "tips-fail" }, [
          _c("image", {
            staticClass: "tips-img",
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/fail.png",
            },
          }),
          _c("view", { staticClass: "tips-title" }, [_vm._v("发布失败")]),
          _c("view", [_vm._v(_vm._s(_vm.msg))]),
          _c("view", { staticClass: "tips-btn", on: { tap: _vm.goback } }, [
            _vm._v("返回"),
          ]),
        ])
      : _vm.type == 2
      ? _c("view", { staticClass: "tips-sucess" }, [
          _c("image", {
            staticClass: "tips-img",
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/sucess.png",
            },
          }),
          _c("view", { staticClass: "tips-title" }, [_vm._v("报名成功")]),
          _c("view", [_vm._v(_vm._s(_vm.msg))]),
          _c(
            "view",
            { staticClass: "subscribe-btn", on: { tap: _vm.showSubscribe } },
            [_vm._v(" 订阅通知 ")]
          ),
          _c("view", { staticClass: "subscribe-box" }, [
            _c("view", { staticClass: "subscribe-left" }, [
              _c("image", {
                attrs: {
                  src: "https://yuepai-oss.qubeitech.com/static/images/wchat.jpg",
                },
              }),
            ]),
            _c("view", { staticClass: "subscribe-ct" }, [
              _c("view", { staticClass: "subscribe-title" }, [
                _vm._v("订阅微信通知"),
              ]),
              _c("view", { staticClass: "subscribe-p" }, [
                _vm._v("及时获取报名进度提醒"),
              ]),
            ]),
            _c(
              "view",
              { staticClass: "subscribe-rt", on: { tap: _vm.nowSubscribe } },
              [_c("text", [_vm._v("立即订阅")])]
            ),
          ]),
          _c("view", { staticClass: "tips-box-btns" }, [
            _c("view", { staticClass: "tips-btn", on: { tap: _vm.goback } }, [
              _vm._v("返回首页"),
            ]),
            _c(
              "view",
              { staticClass: "tips-btn", on: { tap: _vm.continuePublish } },
              [_vm._v("继续发布")]
            ),
          ]),
        ])
      : _vm.type == 3
      ? _c("view", { staticClass: "tips-fail" }, [
          _c("image", {
            staticClass: "tips-img",
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/fail.png",
            },
          }),
          _c("view", { staticClass: "tips-title" }, [_vm._v("报名失败")]),
          _c("view", [_vm._v(_vm._s(_vm.msg))]),
          _c("view", { staticClass: "tips-btn", on: { tap: _vm.goback } }, [
            _vm._v("返回"),
          ]),
        ])
      : _vm._e(),
    _vm.visible
      ? _c("view", { staticClass: "modal-box", on: { tap: _vm.cancel } }, [
          _c("view", { staticClass: "modal-cotent" }, [
            _c("view", { staticClass: "modal-title" }, [_vm._v("订阅通知")]),
            _c("view", { staticClass: "subscribe-box" }, [
              _c("view", { staticClass: "subscribe-left" }, [
                _c("image", {
                  attrs: {
                    src: "https://yuepai-oss.qubeitech.com/static/images/wchat.jpg",
                  },
                }),
              ]),
              _c("view", { staticClass: "subscribe-ct" }, [
                _c("view", { staticClass: "subscribe-title" }, [
                  _vm._v("订阅微信通知"),
                ]),
                _c("view", { staticClass: "subscribe-p" }, [
                  _vm._v("及时获取报名进度提醒"),
                ]),
              ]),
              _c(
                "view",
                {
                  staticClass: "subscribe-rt",
                  on: {
                    tap: function ($event) {
                      $event.stopPropagation()
                      return _vm.nowSubscribe.apply(null, arguments)
                    },
                  },
                },
                [_c("text", [_vm._v("订阅通知")])]
              ),
            ]),
            _c("view", { staticClass: "official-account" }, [
              _c("view", { staticClass: "official-account-txt" }, [
                _vm._v("扫码关注公众号，开启消息提醒"),
              ]),
              _c("image", {
                staticClass: "official-account-qrcode",
                attrs: {
                  src: "https://yuepai-oss.qubeitech.com/static/images/official-account-qrcode.jpg",
                },
                on: {
                  tap: function ($event) {
                    $event.stopPropagation()
                    return _vm.officialAccount.apply(null, arguments)
                  },
                },
              }),
            ]),
            _c("view", { staticClass: "know", on: { tap: _vm.cancel } }, [
              _vm._v("我知道了"),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/tips/index.scss":
/*!**********************************************!*\
  !*** ./src/packageAdd/pages/tips/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/tips/index.vue":
/*!*********************************************!*\
  !*** ./src/packageAdd/pages/tips/index.vue ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/tips/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/tips/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/tips/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/packageAdd/pages/tips/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/tips/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/tips/index.vue?vue&type=template&id=b915a59e&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/packageAdd/pages/tips/index.vue?vue&type=template&id=b915a59e&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b915a59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b915a59e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/tips/index.vue?vue&type=template&id=b915a59e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b915a59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b915a59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/tips/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map