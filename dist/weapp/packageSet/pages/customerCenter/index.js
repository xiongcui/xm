(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageSet/pages/customerCenter/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/customerCenter/index.vue":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/customerCenter/index.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_4ab974ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4ab974ab&scoped=true& */ "./src/packageSet/pages/customerCenter/index.vue?vue&type=template&id=4ab974ab&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageSet/pages/customerCenter/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_4ab974ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_4ab974ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "4ab974ab",
  "2fb0f61d"
  
)

component.options.__file = "src/packageSet/pages/customerCenter/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/customerCenter/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageSet/pages/customerCenter/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageSet/pages/customerCenter/index.scss");
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "customerCenter",
  data: function data() {
    return {
      active: "asked_question",
      list: []
    };
  },
  methods: {
    gofeedback: function gofeedback() {
      if (!Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* isLogin */ "b"])()) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/pages/login/index");
        return false;
      }

      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageSet/pages/feedback/index");
    },
    customerService: function customerService() {
      wx.openCustomerServiceChat({
        extInfo: {
          url: "https://work.weixin.qq.com/kfid/kfc70400e4245eaa1b6"
        },
        corpId: "ww9ad8086390afbfaa",
        success: function success(res) {}
      });
    },
    navClick: function navClick(type) {
      this.active = type;
      this.categoryList({
        category: this.active
      });
    },
    customerClick: function customerClick(index) {
      this.list.map(function (item) {
        item.show = false;
      });
      this.list[index].show = !this.list[index].show;
    },
    categoryList: function categoryList(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* categoryList */ "o"])(params);

              case 3:
                res = _context.sent;
                _this.list = res.data.data.map(function (item) {
                  item.show = false;
                  return item;
                });
                console.log(res);
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    }
  },
  created: function created() {
    this.categoryList({
      category: this.active
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/customerCenter/index.vue?vue&type=template&id=4ab974ab&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageSet/pages/customerCenter/index.vue?vue&type=template&id=4ab974ab&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "customer" }, [
    _c("view", { staticClass: "customer-top" }, [
      _c("view", { staticClass: "customer-title" }, [
        _vm._v("Hi～，有什么可以帮您！"),
      ]),
      _c("view", [_vm._v("期待听到您的声音")]),
    ]),
    _c("view", { staticClass: "customer-btn" }, [
      _c(
        "view",
        { staticClass: "customer-btn-box", on: { tap: _vm.customerService } },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/user/customer/kefu.png",
            },
          }),
          _c("view", [_vm._v("在线客服")]),
        ]
      ),
      _c(
        "view",
        { staticClass: "customer-btn-box", on: { tap: _vm.gofeedback } },
        [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/user/customer/yijian.png",
            },
          }),
          _c("view", [_vm._v("意见反馈")]),
        ]
      ),
    ]),
    _c("view", { staticClass: "customer-question" }, [
      _c("view", { staticClass: "customer-nav" }, [
        _c(
          "text",
          {
            class: { active: _vm.active == "asked_question" },
            on: {
              tap: function ($event) {
                return _vm.navClick("asked_question")
              },
            },
          },
          [_vm._v("常见问题")]
        ),
        _c(
          "text",
          {
            class: { active: _vm.active == "about_invite" },
            on: {
              tap: function ($event) {
                return _vm.navClick("about_invite")
              },
            },
          },
          [_vm._v("关于约拍")]
        ),
        _c(
          "text",
          {
            class: { active: _vm.active == "about_notice" },
            on: {
              tap: function ($event) {
                return _vm.navClick("about_notice")
              },
            },
          },
          [_vm._v("关于通告")]
        ),
      ]),
      _c(
        "view",
        { staticClass: "customer-list" },
        _vm._l(_vm.list, function (item, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "customer-item",
              on: {
                tap: function ($event) {
                  return _vm.customerClick(index)
                },
              },
            },
            [
              _vm._v(" " + _vm._s(item.question) + " "),
              _c("image", {
                staticClass: "customer-img",
                class: { "customer-rotate": item.show },
                attrs: {
                  src: "https://yuepai-oss.qubeitech.com/static/images/right.png",
                },
              }),
              _c(
                "view",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: item.show,
                      expression: "item.show",
                    },
                  ],
                  staticClass: "customer-content",
                },
                [_vm._v(_vm._s(item.answer))]
              ),
            ]
          )
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageSet/pages/customerCenter/index.scss":
/*!********************************************************!*\
  !*** ./src/packageSet/pages/customerCenter/index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageSet/pages/customerCenter/index.vue":
/*!*******************************************************!*\
  !*** ./src/packageSet/pages/customerCenter/index.vue ***!
  \*******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/customerCenter/index.vue");


var config = {"navigationBarTitleText":"客服中心"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageSet/pages/customerCenter/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageSet/pages/customerCenter/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/packageSet/pages/customerCenter/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/customerCenter/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageSet/pages/customerCenter/index.vue?vue&type=template&id=4ab974ab&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/packageSet/pages/customerCenter/index.vue?vue&type=template&id=4ab974ab&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ab974ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4ab974ab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/customerCenter/index.vue?vue&type=template&id=4ab974ab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ab974ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ab974ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageSet/pages/customerCenter/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map