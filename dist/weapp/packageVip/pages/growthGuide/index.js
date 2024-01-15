(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageVip/pages/growthGuide/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/growthGuide/index.vue":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/growthGuide/index.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_026ad5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=026ad5a4&scoped=true& */ "./src/packageVip/pages/growthGuide/index.vue?vue&type=template&id=026ad5a4&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageVip/pages/growthGuide/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_026ad5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_026ad5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "026ad5a4",
  "72c5d8fc"
  
)

component.options.__file = "src/packageVip/pages/growthGuide/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/growthGuide/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/growthGuide/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageVip/pages/growthGuide/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "growthGuide",
  data: function data() {
    return {
      list: []
    };
  },
  methods: {
    goback: function goback() {
      wx.navigateBack({
        delta: 1
      });
    },
    growthRuleList: function growthRuleList(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* growthRuleList */ "O"])(params);

              case 3:
                res = _context.sent;
                _this.list = res.data.data;
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
  mounted: function mounted() {
    this.growthRuleList("");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/growthGuide/index.vue?vue&type=template&id=026ad5a4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageVip/pages/growthGuide/index.vue?vue&type=template&id=026ad5a4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "growth-guide" }, [
    _c("view", { staticClass: "growth-guide-box" }, [
      _c("view", { staticClass: "growth-guide-title" }, [
        _vm._v("什么是Lv等级？"),
      ]),
      _c("view", { staticClass: "growth-guide-txt" }, [
        _vm._v(
          "Lv等级是在平台内的成长记录，它也代表着每个人在这里投入的时长。 "
        ),
      ]),
      _c("view", { staticClass: "growth-guide-txt" }, [
        _vm._v("同时，Lv等级也是在这里的社交背书，是一种“江湖资历”的展示。"),
      ]),
      _c("view", { staticClass: "growth-guide-txt" }, [
        _vm._v(
          "假如你在一个地方住了十年对于新搬来的邻居，你是不是更值得被信任?"
        ),
      ]),
      _c("view", { staticClass: "growth-guide-txt" }, [
        _vm._v(
          "同理，一个高等级用户，一定是更了解这里、对这里更有感情和认同感的人。"
        ),
      ]),
      _c("view", { staticClass: "growth-guide-txt" }, [
        _vm._v(
          "TA会更加关心和爱护这里的一草一木； TA会自觉去维护这里的规则和秩序:"
        ),
      ]),
      _c("view", { staticClass: "growth-guide-txt" }, [
        _vm._v(" TA会愿意以一位在这里”住了”多年的居民身份迎接新入住的朋友；"),
      ]),
      _c("view", { staticClass: "growth-guide-txt" }, [_vm._v(" ……")]),
      _c("view", { staticClass: "growth-guide-txt" }, [
        _vm._v(
          " 而一个新注册的用户，是不是也更愿意去结交或相信一个等级较高的人呢?~"
        ),
      ]),
    ]),
    _c("view", { staticClass: "growth-guide-box" }, [
      _c("view", { staticClass: "growth-guide-title" }, [
        _vm._v("如何快速升级？"),
      ]),
      _c("view", { staticClass: "growth-guide-txt" }, [
        _vm._v(
          "Lv等级的升高是积累成长值的过程和结果，你获得的每一个成长，都是你在这里各种行为的记录。"
        ),
      ]),
      _c("view", { staticClass: "growth-guide-txt" }, [
        _vm._v("成长值，可以通过做每日任务来获得，也可以通过日常行为来获得。"),
      ]),
      _c("view", { staticClass: "table-box" }, [
        _c(
          "view",
          { staticClass: "table" },
          [
            _c("view", { staticClass: "tr" }, [
              _c("view", { staticClass: "th" }, [_vm._v("任务分类")]),
              _c("view", { staticClass: "th" }, [_vm._v("任务名称")]),
              _c("view", { staticClass: "th" }, [_vm._v("普通成长")]),
              _c("view", { staticClass: "th" }, [_vm._v("会员成长")]),
              _c("view", { staticClass: "th" }, [_vm._v("任务限定")]),
              _c("view", { staticClass: "th" }, [_vm._v("特殊规则")]),
            ]),
            _vm._l(_vm.list, function (item, index) {
              return _c("view", { key: index, staticClass: "tr" }, [
                _c("view", { staticClass: "td" }, [
                  _vm._v(_vm._s(item.class_name)),
                ]),
                _c("view", { staticClass: "td" }, [
                  _vm._v(_vm._s(item.order_name)),
                ]),
                _c("view", { staticClass: "td" }, [
                  _vm._v(_vm._s(item.common_growth)),
                ]),
                _c("view", { staticClass: "td" }, [
                  _vm._v(_vm._s(item.member_growth)),
                ]),
                _c("view", { staticClass: "td" }, [
                  _vm._v(_vm._s(item.limit_title)),
                ]),
                _c("view", { staticClass: "td" }, [
                  _vm._v(_vm._s(item.special_desc)),
                ]),
              ])
            }),
          ],
          2
        ),
      ]),
    ]),
    _c("view", { staticClass: "growth-fixed" }, [
      _c("view", { staticClass: "growth-btn", on: { tap: _vm.goback } }, [
        _vm._v(" 查看我的等级 "),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageVip/pages/growthGuide/index.scss":
/*!*****************************************************!*\
  !*** ./src/packageVip/pages/growthGuide/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageVip/pages/growthGuide/index.vue":
/*!****************************************************!*\
  !*** ./src/packageVip/pages/growthGuide/index.vue ***!
  \****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageVip/pages/growthGuide/index.vue");


var config = {"navigationBarTitleText":"成长指南"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageVip/pages/growthGuide/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageVip/pages/growthGuide/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/packageVip/pages/growthGuide/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/growthGuide/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageVip/pages/growthGuide/index.vue?vue&type=template&id=026ad5a4&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/packageVip/pages/growthGuide/index.vue?vue&type=template&id=026ad5a4&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_026ad5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=026ad5a4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageVip/pages/growthGuide/index.vue?vue&type=template&id=026ad5a4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_026ad5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_026ad5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageVip/pages/growthGuide/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map