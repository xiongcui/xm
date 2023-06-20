(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/editlabel/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/editlabel/index.vue":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/editlabel/index.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_b8ca5e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b8ca5e42&scoped=true& */ "./src/packageAdd/pages/user/editlabel/index.vue?vue&type=template&id=b8ca5e42&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/editlabel/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_b8ca5e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_b8ca5e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "b8ca5e42",
  "eedb5b5e"
  
)

component.options.__file = "src/packageAdd/pages/user/editlabel/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/editlabel/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/editlabel/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/editlabel/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editlabel",
  data: function data() {
    return {
      isIphoneX: false,
      identity: [],
      identity_data: [],
      notice: [],
      notice_data: [],
      style: [],
      style_data: []
    };
  },
  methods: {
    sub: function sub() {
      var _this = this;

      if (!this.identity.length) {
        errortip("请选择身份标签!");
        return;
      }

      if (!this.notice.length) {
        errortip("请选择接单通告!");
        return;
      }

      if (!this.style.length) {
        errortip("请选择形象风格!");
        return;
      }

      var mode_sticker = [];
      var notice_sticker = [];
      var style_sticker = [];
      this.identity_data.map(function (item) {
        _this.identity.map(function (identityItem) {
          if (item.value == identityItem) {
            mode_sticker.push({
              key: item.key,
              value: item.value
            });
          }
        });
      });
      this.notice_data.map(function (item) {
        _this.notice.map(function (identityItem) {
          if (item.value == identityItem) {
            notice_sticker.push({
              key: item.key,
              value: item.value
            });
          }
        });
      });
      this.style_data.map(function (item) {
        _this.style.map(function (identityItem) {
          if (item.value == identityItem) {
            style_sticker.push({
              key: item.key,
              value: item.value
            });
          }
        });
      });
      var params = {
        mode_sticker: mode_sticker,
        notice_sticker: notice_sticker,
        style_sticker: style_sticker
      };
      this.subUserSticker(params);
    },
    select_tag: function select_tag(row) {
      var result = this.identity.find(function (ele) {
        return ele === row.value;
      });

      if (!result) {
        this.identity.push(row.value);
      } else {
        var index = this.identity.findIndex(function (ele) {
          return ele === row.value;
        });
        this.identity.splice(index, 1);
      }

      row.ispick = !row.ispick;
    },
    select_notice_tag: function select_notice_tag(row) {
      var result = this.notice.find(function (ele) {
        return ele === row.value;
      });

      if (!result) {
        this.notice.push(row.value);
      } else {
        var index = this.notice.findIndex(function (ele) {
          return ele === row.value;
        });
        this.notice.splice(index, 1);
      }

      row.ispick = !row.ispick;
    },
    select_style_tag: function select_style_tag(row) {
      var result = this.style.find(function (ele) {
        return ele === row.value;
      });

      if (!result) {
        this.style.push(row.value);
      } else {
        var index = this.style.findIndex(function (ele) {
          return ele === row.value;
        });
        this.style.splice(index, 1);
      }

      row.ispick = !row.ispick;
    },
    userSticker: function userSticker(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, arr, arr1, arr2;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userSticker */ "ac"])(params);

              case 3:
                res = _context.sent;
                arr = [];
                arr1 = [];
                arr2 = [];
                res.data.data.all_sticker_list.map(function (item) {
                  if (item.type == "mode_sticker") {
                    item.ispick = false;
                    arr.push(item);
                  }

                  if (item.type == "notice_sticker") {
                    item.ispick = false;
                    arr1.push(item);
                  }

                  if (item.type == "style_sticker") {
                    item.ispick = false;
                    arr2.push(item);
                  }
                });
                _this2.identity_data = arr;
                _this2.notice_data = arr1;
                _this2.style_data = arr2;
                _this2.identity = res.data.data.cur_sticker_list.mode_sticker;
                _this2.notice = res.data.data.cur_sticker_list.notice_sticker;
                _this2.style = res.data.data.cur_sticker_list.style_sticker;

                if (res.data.data.cur_sticker_list.mode_sticker.length) {
                  _this2.identity_data = _this2.identity_data.map(function (item) {
                    item.ispick = false;

                    _this2.identity.map(function (identityItem) {
                      if (item.value == identityItem) {
                        item.ispick = true;
                      }
                    });

                    return item;
                  });
                }

                if (res.data.data.cur_sticker_list.notice_sticker.length) {
                  _this2.notice_data = _this2.notice_data.map(function (item) {
                    item.ispick = false;

                    _this2.notice.map(function (identityItem) {
                      if (item.value == identityItem) {
                        item.ispick = true;
                      }
                    });

                    return item;
                  });
                }

                if (res.data.data.cur_sticker_list.style_sticker.length) {
                  _this2.style_data = _this2.style_data.map(function (item) {
                    item.ispick = false;

                    _this2.style.map(function (identityItem) {
                      if (item.value == identityItem) {
                        item.ispick = true;
                      }
                    });

                    return item;
                  });
                }

                _context.next = 21;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 19]]);
      }))();
    },
    subUserSticker: function subUserSticker(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* subUserSticker */ "Db"])(params);

              case 3:
                res = _context2.sent;
                wx.navigateBack({
                  delta: 1
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
    }
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.userSticker("");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/editlabel/index.vue?vue&type=template&id=b8ca5e42&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/editlabel/index.vue?vue&type=template&id=b8ca5e42&scoped=true& ***!
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
  return _c(
    "view",
    [
      _c("view", { staticClass: "editlabel" }, [
        _c("view", { staticClass: "editlabel-item" }, [
          _c("view", { staticClass: "editlabel-title" }, [
            _vm._v(" 身份标签 "),
            _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
          ]),
          _c(
            "view",
            { staticClass: "tags" },
            _vm._l(_vm.identity_data, function (item, index) {
              return _c(
                "text",
                {
                  key: index,
                  staticClass: "tag_item",
                  class: item.ispick ? "tag_itemed" : "",
                  on: {
                    tap: function ($event) {
                      return _vm.select_tag(item)
                    },
                  },
                },
                [_vm._v(" " + _vm._s(item.value) + " ")]
              )
            }),
            0
          ),
        ]),
        _c("view", { staticClass: "editlabel-item" }, [
          _c("view", { staticClass: "editlabel-title" }, [
            _vm._v(" 接单通告 "),
            _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
          ]),
          _c(
            "view",
            { staticClass: "tags" },
            _vm._l(_vm.notice_data, function (item, index) {
              return _c(
                "text",
                {
                  key: index,
                  staticClass: "tag_item",
                  class: item.ispick ? "tag_itemed" : "",
                  on: {
                    tap: function ($event) {
                      return _vm.select_notice_tag(item)
                    },
                  },
                },
                [_vm._v(" " + _vm._s(item.value) + " ")]
              )
            }),
            0
          ),
        ]),
        _c("view", { staticClass: "editlabel-item" }, [
          _c("view", { staticClass: "editlabel-title" }, [
            _vm._v(" 形象风格 "),
            _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
          ]),
          _c(
            "view",
            { staticClass: "tags" },
            _vm._l(_vm.style_data, function (item, index) {
              return _c(
                "text",
                {
                  key: index,
                  staticClass: "tag_item",
                  class: item.ispick ? "tag_itemed" : "",
                  on: {
                    tap: function ($event) {
                      return _vm.select_style_tag(item)
                    },
                  },
                },
                [_vm._v(" " + _vm._s(item.value) + " ")]
              )
            }),
            0
          ),
        ]),
      ]),
      _c(
        "cover-view",
        {
          staticClass: "subbtn_bottom_block",
          class: _vm.isIphoneX ? "fix-iphonex-button" : "",
        },
        [
          _c(
            "cover-view",
            { staticClass: "subbtn_bottom", on: { tap: _vm.sub } },
            [_c("button", { attrs: { formType: "submit" } }, [_vm._v("保存")])]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/editlabel/index.scss":
/*!********************************************************!*\
  !*** ./src/packageAdd/pages/user/editlabel/index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/editlabel/index.vue":
/*!*******************************************************!*\
  !*** ./src/packageAdd/pages/user/editlabel/index.vue ***!
  \*******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/editlabel/index.vue");


var config = {"usingComponents":{},"navigationBarTitleText":"标签信息"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/editlabel/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/editlabel/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/packageAdd/pages/user/editlabel/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/editlabel/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/editlabel/index.vue?vue&type=template&id=b8ca5e42&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/editlabel/index.vue?vue&type=template&id=b8ca5e42&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b8ca5e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b8ca5e42&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/editlabel/index.vue?vue&type=template&id=b8ca5e42&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b8ca5e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b8ca5e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/editlabel/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map