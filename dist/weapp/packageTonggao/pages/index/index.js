(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageTonggao/pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/index/index.vue":
/*!************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/index/index.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_beea71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=beea71e2&scoped=true& */ "./src/packageTonggao/pages/index/index.vue?vue&type=template&id=beea71e2&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageTonggao/pages/index/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_beea71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_beea71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "beea71e2",
  "8afeb346"
  
)

component.options.__file = "src/packageTonggao/pages/index/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/index/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/index/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageTonggao/pages/index/index.scss");
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "tonggao",
  data: function data() {
    return {
      visible: false,
      title: "",
      code: "",
      classificationList: [{
        name: "作品创作",
        value: "creation_content",
        icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/xiangce.png"
      }, {
        name: "合作招募",
        value: "recruit_cooperate",
        icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/hezuo.png"
      }, {
        name: "电商拍摄",
        value: "business_capture",
        icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/dianshang.png"
      }, {
        name: "广告宣传",
        value: "advert_spread",
        icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/guanggao.png"
      }, {
        name: "影视视频",
        value: "film_video",
        icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/yingshi.png"
      }, {
        name: "商业活动",
        value: "business_activity",
        icon: "https://yuepai-oss.qubeitech.com/static/images/tonggao/shangye.png"
      }],
      maskData: [],
      verifyP1: null
    };
  },
  methods: {
    classificationClick: function classificationClick(row) {
      this.title = row.name;
      this.code = row.value;
      this.publicConfig({
        type: [row.value]
      });
    },
    close: function close() {
      this.visible = false;
    },
    goRelease: function goRelease(type) {
      this.publishVerify({
        project_code: "NT"
      }, "", type);
    },
    maskClick: function maskClick(row) {
      this.publishVerify({
        project_code: "NT"
      }, row, 0);
    },
    publicConfig: function publicConfig(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* publicConfig */ "Eb"])(params);

              case 3:
                res = _context.sent;
                _this.maskData = res.data.data;
                _this.visible = true;
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
    publishVerify: function publishVerify(params, row, type) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* publishVerify */ "Hb"])(params);

              case 3:
                res = _context2.sent;

                if (type) {
                  if (type == 1) {
                    Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageTonggao/pages/brand/index");
                  }

                  if (type == 2) {
                    Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageTonggao/pages/shop/index");
                  }

                  if (type == 3) {
                    Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageTonggao/pages/add/index?code=creation_content&type=发型创作&key=CC1002");
                  }

                  if (type == 4) {
                    Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageTonggao/pages/add/index?code=creation_content&type=人像创作&key=CC1001");
                  }
                } else {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageTonggao/pages/add/index?code=" + _this2.code + "&type=" + row.value + "&key=" + row.key);
                }

                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                if (_context2.t0.data.error_code == 21030 || _context2.t0.data.error_code == 21040) {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/guideTips/index?msg=".concat(_context2.t0.data.msg, "&code=").concat(_context2.t0.data.error_code));
                } else if (_context2.t0.data.error_code == 21060) {
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
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])(_context2.t0.data.msg);
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/index/index.vue?vue&type=template&id=beea71e2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/index/index.vue?vue&type=template&id=beea71e2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "tonggao" }, [
    _c("view", { staticClass: "hot-tg" }, [
      _c("view", { staticClass: "tg-title" }, [_vm._v("热门通告")]),
      _c("view", { staticClass: "hot-type" }, [
        _c(
          "view",
          {
            staticClass: "hot-item",
            on: {
              tap: function ($event) {
                return _vm.goRelease(1)
              },
            },
          },
          [_vm._v("品牌种草")]
        ),
        _c(
          "view",
          {
            staticClass: "hot-item",
            on: {
              tap: function ($event) {
                return _vm.goRelease(2)
              },
            },
          },
          [_vm._v("探店推广")]
        ),
        _c(
          "view",
          {
            staticClass: "hot-item",
            on: {
              tap: function ($event) {
                return _vm.goRelease(3)
              },
            },
          },
          [_vm._v("发型创作")]
        ),
        _c(
          "view",
          {
            staticClass: "hot-item",
            on: {
              tap: function ($event) {
                return _vm.goRelease(4)
              },
            },
          },
          [_vm._v("人像创作")]
        ),
      ]),
    ]),
    _c("view", { staticClass: "select-type" }, [
      _c("view", { staticClass: "tg-title" }, [_vm._v("选择分类")]),
      _c(
        "view",
        { staticClass: "select-list" },
        _vm._l(_vm.classificationList, function (item, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "select-item",
              on: {
                tap: function ($event) {
                  return _vm.classificationClick(item)
                },
              },
            },
            [
              _c("image", { attrs: { src: item.icon } }),
              _c("text", [_vm._v(_vm._s(item.name))]),
            ]
          )
        }),
        0
      ),
    ]),
    _vm.visible
      ? _c("view", { staticClass: "tonggao-mask" }, [
          _c("view", { staticClass: "mask-box" }, [
            _c("view", { staticClass: "mask-title" }, [
              _vm._v(" 作品创作 "),
              _c("view", { staticClass: "close", on: { tap: _vm.close } }),
            ]),
            _c(
              "view",
              { staticClass: "mask-ct" },
              _vm._l(_vm.maskData, function (item, index) {
                return _c(
                  "view",
                  {
                    key: index,
                    staticClass: "mask-item",
                    on: {
                      tap: function ($event) {
                        return _vm.maskClick(item)
                      },
                    },
                  },
                  [_vm._v(_vm._s(item.value))]
                )
              }),
              0
            ),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageTonggao/pages/index/index.scss":
/*!***************************************************!*\
  !*** ./src/packageTonggao/pages/index/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageTonggao/pages/index/index.vue":
/*!**************************************************!*\
  !*** ./src/packageTonggao/pages/index/index.vue ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/index/index.vue");


var config = {"navigationBarTitleText":"选择通告类型"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageTonggao/pages/index/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageTonggao/pages/index/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/packageTonggao/pages/index/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/index/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageTonggao/pages/index/index.vue?vue&type=template&id=beea71e2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/packageTonggao/pages/index/index.vue?vue&type=template&id=beea71e2&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_beea71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=beea71e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/index/index.vue?vue&type=template&id=beea71e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_beea71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_beea71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageTonggao/pages/index/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map