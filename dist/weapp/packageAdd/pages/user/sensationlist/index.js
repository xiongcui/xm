(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/sensationlist/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/sensationlist/index.vue":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/sensationlist/index.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=602c8991&scoped=true& */ "./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "602c8991",
  "11c20203"
  
)

component.options.__file = "src/packageAdd/pages/user/sensationlist/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/sensationlist/index.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "",
  data: function data() {
    return {
      noneData: false,
      showModel_del: false,
      oid: "",
      rowoid: "",
      platform_code: "",
      platform_name: "",
      fans_data: [],
      icon: {
        201: __webpack_require__(/*! ../../../../assets/images/common/redbook.png */ "./src/assets/images/common/redbook.png"),
        202: __webpack_require__(/*! ../../../../assets/images/common/douyin.png */ "./src/assets/images/common/douyin.png"),
        203: __webpack_require__(/*! ../../../../assets/images/common/kuaishou.png */ "./src/assets/images/common/kuaishou.png"),
        204: __webpack_require__(/*! ../../../../assets/images/common/weibo.png */ "./src/assets/images/common/weibo.png")
      }
    };
  },
  methods: {
    closeModel_del: function closeModel_del() {
      this.showModel_del = false;
    },
    del_hongren: function del_hongren() {
      this.userCelebrity({
        oid: this.rowoid,
        is_delete: 1
      });
    },
    goChooseMedia: function goChooseMedia() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "b"])("/packageAdd/pages/user/addfans/index?platform_code=" + this.platform_code + "&platform_name=" + this.platform_name);
    },
    editMedia: function editMedia(oid) {
      var _this = this;

      wx.showActionSheet({
        itemList: ["重新编辑", "删除"],
        success: function success(res) {
          switch (res.tapIndex) {
            case 0:
              Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "b"])("/packageAdd/pages/user/addfans/index?platform_code=" + _this.platform_code + "&platform_name=" + _this.platform_name + "&oid=" + oid);
              break;

            case 1:
              _this.rowoid = oid;
              _this.showModel_del = true;
              break;
          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    chooseFans: function chooseFans(row) {
      var pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。

      var prevPage = pages[pages.length - 2];
      prevPage.setData({
        celebrity: row
      });
      wx.navigateBack({
        delta: 1
      });
    },
    celebrityList: function celebrityList(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* celebrityList */ "f"])(params);

              case 3:
                res = _context.sent;

                if (!res.data.data) {
                  _this2.noneData = true;
                } else {
                  _this2.noneData = false;
                  _this2.fans_data = res.data.data;
                }

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
    },
    userCelebrity: function userCelebrity(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userCelebrity */ "L"])(params);

              case 3:
                res = _context2.sent;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("删除成功");
                _this3.showModel_del = false;

                _this3.celebrityList({
                  platform_code: _this3.platform_code
                });

                _context2.next = 11;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    }
  },
  onLoad: function onLoad(options) {
    this.platform_code = options.platform_code;
    this.platform_name = options.platform_name;
    this.oid = options.oid;
  },
  onShow: function onShow() {
    if (this.platform_code) {
      this.celebrityList({
        platform_code: this.platform_code
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _vm.noneData
    ? _c("view", { staticClass: "main ub ub-ver none_main" }, [
        _c(
          "view",
          {
            staticClass: "item_add",
            attrs: { "data-id": "" },
            on: { tap: _vm.goChooseMedia },
          },
          [
            _c("image", {
              attrs: {
                src: __webpack_require__(/*! ../../../../assets/images/common/add_black.png */ "./src/assets/images/common/add_black.png"),
              },
            }),
            _vm._v("添加账号 "),
          ]
        ),
      ])
    : _c(
        "view",
        { staticClass: "main ub ub-ver" },
        [
          _vm._l(_vm.fans_data, function (item, itemIndex) {
            return _c(
              "view",
              {
                key: itemIndex,
                staticClass: "item ub",
                class: _vm.oid == item.oid ? "item_active" : "",
                on: {
                  tap: function ($event) {
                    return _vm.chooseFans(item)
                  },
                },
              },
              [
                _c("view", { staticClass: "item_main ub" }, [
                  _c("view", { staticClass: "item_logo" }, [
                    _c("image", {
                      attrs: {
                        mode: "aspectFit",
                        src: _vm.icon[item.platform_code],
                      },
                    }),
                  ]),
                  _c("view", { staticClass: "ub-f1" }, [
                    _c("view", { staticClass: "item_name" }, [
                      _vm._v(_vm._s(item.nickname)),
                    ]),
                    _c("view", { staticClass: "item_fanscount" }, [
                      _vm._v("粉丝：" + _vm._s(item.fans_number)),
                    ]),
                  ]),
                  _c("image", {
                    staticClass: "editbtn",
                    attrs: {
                      src: __webpack_require__(/*! ../../../../assets/images/common/editbtn.png */ "./src/assets/images/common/editbtn.png"),
                    },
                    on: {
                      tap: function ($event) {
                        $event.stopPropagation()
                        return _vm.editMedia(item.oid)
                      },
                    },
                  }),
                ]),
                _c("view", { staticClass: "item_tags ub" }, [
                  _c("view", { staticClass: "item_time" }, [
                    _vm._v(_vm._s(item.date_humanize) + "创建"),
                  ]),
                  _c("view", { staticClass: "ub-f1" }),
                  _c("view", { staticClass: "item_status" }, [
                    item.status == "待审核中"
                      ? _c("view", { staticClass: "item_status_wait" }, [
                          _vm._v(_vm._s(item.status)),
                        ])
                      : _vm._e(),
                    item.status == "审核失败"
                      ? _c("view", { staticClass: "item_status_fail" }, [
                          _vm._v(_vm._s(item.status)),
                        ])
                      : _vm._e(),
                    item.status == "审核通过"
                      ? _c("view", { staticClass: "item_status_sucess" }, [
                          _vm._v(_vm._s(item.status)),
                        ])
                      : _vm._e(),
                  ]),
                ]),
              ]
            )
          }),
          _c(
            "view",
            {
              staticClass: "item_add",
              attrs: { "data-id": "" },
              on: { tap: _vm.goChooseMedia },
            },
            [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../../assets/images/common/add_black.png */ "./src/assets/images/common/add_black.png"),
                },
              }),
              _vm._v("添加账号 "),
            ]
          ),
          _vm.showModel_del
            ? _c("view", {
                staticClass: "modal-bg",
                on: { tap: _vm.closeModel_del },
              })
            : _vm._e(),
          _vm.showModel_del
            ? _c("view", { staticClass: "model_box ub" }, [
                _c("view", { staticClass: "ub-f1" }),
                _c("view", { staticClass: "model_main" }, [
                  _c("view", { staticClass: "model_title" }, [
                    _c("view", [_vm._v("确定要删除该红人账号吗？")]),
                  ]),
                  _c("view", { staticClass: "model_btn ub" }, [
                    _c("view", { staticClass: "ub-f1" }),
                    _c(
                      "view",
                      {
                        staticClass: "btn_no",
                        on: { tap: _vm.closeModel_del },
                      },
                      [_vm._v("取消")]
                    ),
                    _c("view", { staticClass: "ub-f1" }),
                    _c(
                      "view",
                      { staticClass: "btn_yes", on: { tap: _vm.del_hongren } },
                      [_vm._v("删除")]
                    ),
                    _c("view", { staticClass: "ub-f1" }),
                  ]),
                ]),
                _c("view", { staticClass: "ub-f1" }),
              ])
            : _vm._e(),
        ],
        2
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/sensationlist/index.scss":
/*!************************************************************!*\
  !*** ./src/packageAdd/pages/user/sensationlist/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/sensationlist/index.vue":
/*!***********************************************************!*\
  !*** ./src/packageAdd/pages/user/sensationlist/index.vue ***!
  \***********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/sensationlist/index.vue");


var config = {"navigationBarTitleText":"选择红人账号"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/sensationlist/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=602c8991&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/sensationlist/index.vue?vue&type=template&id=602c8991&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_602c8991_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/sensationlist/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map