(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageTonggao/pages/open_recruitment/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/open_recruitment/index.vue":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/open_recruitment/index.vue ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_21bb06a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=21bb06a0&scoped=true& */ "./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=template&id=21bb06a0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_21bb06a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_21bb06a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "21bb06a0",
  "7857aadc"
  
)

component.options.__file = "src/packageTonggao/pages/open_recruitment/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageTonggao/pages/open_recruitment/index.scss");
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "open_recruitment",
  data: function data() {
    return {
      active: 0,
      coin: 70,
      balanceCoin: 0,
      oid: "",
      list: []
    };
  },
  methods: {
    select: function select(row, index) {
      this.coin = row.coin;
      this.active = index;
    },
    submit: function submit() {
      if (this.balanceCoin < this.coin) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("余额不足");
        return false;
      }

      var params = {
        coin: this.coin,
        oid: this.oid,
        rule_code: this.list[this.active].code,
        valid_time: this.list[this.active].valid_time
      };
      this.subOpenRecruitment(params);
      console.log(params);
    },
    pushInit: function pushInit(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* pushInit */ "T"])(params);

              case 3:
                res = _context.sent;
                _this.balanceCoin = res.data.data.balance_coin;
                _this.list = res.data.data.rules;
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
    },
    subOpenRecruitment: function subOpenRecruitment(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, pages, prevPage;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* subOpenRecruitment */ "db"])(params);

              case 3:
                res = _context2.sent;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("开放招募成功");
                pages = getCurrentPages();
                prevPage = pages[pages.length - 2];
                prevPage.setData({
                  refresh: true
                });
                wx.navigateBack({
                  delta: 1
                });
                _context2.next = 13;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }))();
    }
  },
  created: function created() {
    this.pushInit({});
  },
  onLoad: function onLoad(options) {
    this.oid = options.oid;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=template&id=21bb06a0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=template&id=21bb06a0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "open-box" }, [
    _c("view", { staticClass: "open-title" }, [_vm._v(" 您将展示火爆通告 ")]),
    _c("view", { staticClass: "open-desc" }, [
      _vm._v("该通告竞争激烈，需要支付费用才可展示"),
    ]),
    _c(
      "view",
      { staticClass: "open-list" },
      _vm._l(_vm.list, function (item, index) {
        return _c(
          "view",
          {
            key: index,
            staticClass: "open-item",
            class: _vm.active == index ? "active" : "",
            on: {
              tap: function ($event) {
                return _vm.select(item, index)
              },
            },
          },
          [
            _c("view", { staticClass: "day" }, [
              _vm._v(_vm._s(item.valid_time) + "天"),
            ]),
            _c("view", [_vm._v(_vm._s(item.coin) + "金币/通告")]),
          ]
        )
      }),
      0
    ),
    _c("view", { staticClass: "open-tips" }, [
      _vm._v(" 温馨提示：通告发布价格根据地区、职类、平台差异有所不同 "),
    ]),
    _c("view", { staticClass: "open-bottom" }, [
      _c("view", { staticClass: "open-bottom-left" }, [
        _c("view", { staticClass: "coin" }, [
          _vm._v(" " + _vm._s(_vm.coin) + "金币"),
        ]),
        _c("view", [_vm._v("剩余：" + _vm._s(_vm.balanceCoin) + "金币")]),
      ]),
      _c("view", { staticClass: "open-bottom-rt" }, [
        _c("view", { staticClass: "open-btn", on: { tap: _vm.submit } }, [
          _vm._v("立即开放"),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageTonggao/pages/open_recruitment/index.scss":
/*!**************************************************************!*\
  !*** ./src/packageTonggao/pages/open_recruitment/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageTonggao/pages/open_recruitment/index.vue":
/*!*************************************************************!*\
  !*** ./src/packageTonggao/pages/open_recruitment/index.vue ***!
  \*************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/open_recruitment/index.vue");


var config = {"navigationBarTitleText":"开放招募"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageTonggao/pages/open_recruitment/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=template&id=21bb06a0&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=template&id=21bb06a0&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21bb06a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=21bb06a0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/open_recruitment/index.vue?vue&type=template&id=21bb06a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21bb06a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21bb06a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageTonggao/pages/open_recruitment/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map