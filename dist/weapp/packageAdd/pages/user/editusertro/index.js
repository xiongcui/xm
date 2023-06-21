(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/editusertro/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/editusertro/index.vue":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/editusertro/index.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_0196a51e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0196a51e&scoped=true& */ "./src/packageAdd/pages/user/editusertro/index.vue?vue&type=template&id=0196a51e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/editusertro/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_0196a51e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_0196a51e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "0196a51e",
  "f75ccb3a"
  
)

component.options.__file = "src/packageAdd/pages/user/editusertro/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/editusertro/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/editusertro/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/editusertro/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editusertro",
  data: function data() {
    return {
      infor: {
        intro: ""
      }
    };
  },
  methods: {
    sub: function sub() {
      var params = {
        code: "resume",
        name: "自我简介",
        body: this.infor.intro
      };
      this.userResume(params);
    },
    userResume: function userResume(params, type) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, pages, prevPage;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userResume */ "Wb"])(params);

              case 3:
                res = _context.sent;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("自我简介正在审核中");
                pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。

                prevPage = pages[pages.length - 2]; //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。

                prevPage.setData({
                  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
                  resume: _this.infor.intro
                });
                wx.navigateBack({
                  delta: 1
                });
                _context.next = 13;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    }
  },
  onLoad: function onLoad(options) {
    this.infor.intro = options.resume;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/editusertro/index.vue?vue&type=template&id=0196a51e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/editusertro/index.vue?vue&type=template&id=0196a51e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c("view", { staticClass: "content ub" }, [
      _c("view", { staticClass: "side_gap" }),
      _c("view", { staticClass: "ub-f1" }, [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.infor.intro,
              expression: "infor.intro",
            },
          ],
          staticClass: "intro_content2",
          attrs: {
            autoHeight: true,
            maxlength: "800",
            name: "intro",
            placeholder:
              "请填写自我简介（请勿填写任何联系方式，否则审核不通过）",
            placeholderClass: "intro_content_none",
          },
          domProps: { value: _vm.infor.intro },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.infor, "intro", $event.target.value)
            },
          },
        }),
      ]),
      _c("view", { staticClass: "side_gap" }),
    ]),
    _c("view", { staticClass: "sub_btn", on: { tap: _vm.sub } }, [
      _c("button", { attrs: { type: "primary" } }, [_vm._v("保存")]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/editusertro/index.scss":
/*!**********************************************************!*\
  !*** ./src/packageAdd/pages/user/editusertro/index.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/editusertro/index.vue":
/*!*********************************************************!*\
  !*** ./src/packageAdd/pages/user/editusertro/index.vue ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/editusertro/index.vue");


var config = {"usingComponents":{},"navigationBarTitleText":"自我简介"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/editusertro/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/editusertro/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/packageAdd/pages/user/editusertro/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/editusertro/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/editusertro/index.vue?vue&type=template&id=0196a51e&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/editusertro/index.vue?vue&type=template&id=0196a51e&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0196a51e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0196a51e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/editusertro/index.vue?vue&type=template&id=0196a51e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0196a51e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0196a51e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/editusertro/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map