(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/identity/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/identity/index.vue":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/identity/index.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1532a7ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1532a7ff&scoped=true& */ "./src/packageAdd/pages/user/identity/index.vue?vue&type=template&id=1532a7ff&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/identity/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_1532a7ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_1532a7ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "1532a7ff",
  "776c304d"
  
)

component.options.__file = "src/packageAdd/pages/user/identity/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/identity/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/identity/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/identity/index.scss");
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "identity",
  data: function data() {
    return {
      isIphoneX: false,
      hidden: true,
      nocancel: false,
      cur_modify_career_cnt: 0,
      total_modify_career_cnt: 0,
      data: {
        msg: "",
        realidentity: ""
      },
      identity: [],
      identity_data: []
    };
  },
  methods: {
    select_tag: function select_tag(row) {
      var result = this.identity.find(function (ele) {
        return ele === row.role;
      });

      if (!result) {
        if (this.identity.length > 2) {
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("最多选择3个身份！");
          return false;
        }

        this.identity.push(row.role);
      } else {
        var index = this.identity.findIndex(function (ele) {
          return ele === row.role;
        });
        this.identity.splice(index, 1);
      }

      row.ispick = !row.ispick;
    },
    submit: function submit() {
      var _this2 = this;

      var _this = this;

      if (!this.identity.length) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择身份！");
        return false;
      }

      var arr = [];
      this.identity.map(function (item) {
        _this2.identity_data.map(function (items) {
          if (item == items.role) {
            arr.push({
              cid: items.cid,
              role: items.role
            });
          }
        });
      });
      var index = this.identity.findIndex(function (ele) {
        return ele.code == "ACTOR";
      });

      if (index != -1) {
        wx.showModal({
          title: "温馨提示",
          content: "当前选择包含【艺人身份】，您的主页将会以【艺人主页】形式展示",
          success: function success(res) {
            if (res.confirm) {
              _this.creatCareer(arr);
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          }
        });
      } else {
        wx.showModal({
          title: "温馨提示",
          content: "当前选择不包含【艺人身份】，您的主页将会以【非艺人主页】形式展示",
          success: function success(res) {
            if (res.confirm) {
              _this.creatCareer(arr);
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          }
        });
      }
    },
    getCareer: function getCareer(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* getCareer */ "e"])(params);

              case 3:
                res = _context.sent;
                data = res.data.data;
                _this3.cur_modify_career_cnt = data.user_career.cur_modify_career_cnt;
                _this3.total_modify_career_cnt = data.user_career.total_modify_career_cnt;
                if (data.user_career.career_label) _this3.identity = data.user_career.career_label;
                _this3.identity_data = data.career_list.map(function (item) {
                  item.ispick = false;

                  _this3.identity.map(function (identityItem) {
                    if (item.role == identityItem) {
                      item.ispick = true;
                    }
                  });

                  return item;
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
    },
    creatCareer: function creatCareer(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, identity, pages, prevPage;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* creatCareer */ "c"])(params);

              case 3:
                res = _context2.sent;
                identity = params.map(function (item) {
                  return item.role;
                });
                pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。

                prevPage = pages[pages.length - 2]; //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。

                prevPage.setData({
                  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
                  identity: identity.join(".")
                }); // console.log(prevPage, "prev");

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
    this.isIphoneX = this.globalData.isIphoneX;
    this.getCareer("");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/identity/index.vue?vue&type=template&id=1532a7ff&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/identity/index.vue?vue&type=template&id=1532a7ff&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "identity" },
    [
      _c("view", { staticClass: "identity-tips" }, [
        _c("image", {
          attrs: {
            src: __webpack_require__(/*! ../../../../assets/images/common/warning2.png */ "./src/assets/images/common/warning2.png"),
          },
        }),
        _vm._v(
          " 身份一年只能修改" +
            _vm._s(_vm.total_modify_career_cnt) +
            "次，当前剩余" +
            _vm._s(_vm.cur_modify_career_cnt) +
            "次，请谨慎选择 "
        ),
      ]),
      _vm.data.realidentity
        ? _c("view", { staticClass: "real_identity" }, [
            _c("image", {
              staticClass: "icon_real_identity",
              attrs: {
                src: "https://imgs.weimoka.com/o_1f9ve372c1u1r1co4h241vqkqfc7.png",
              },
            }),
            _c("view", [_vm._v("您已认证身份：")]),
            _c("view", [_vm._v(_vm._s(_vm.data.realidentity))]),
          ])
        : _vm._e(),
      _c("view", { staticClass: "identity-choice" }, [
        _c("view", { staticClass: "identity-choice-title" }, [
          _vm._v("已选择（最多选择3个身份，第1个为主身份）"),
        ]),
        _c(
          "view",
          { staticClass: "identity-choice-box" },
          _vm._l(_vm.identity, function (item, index) {
            return _c(
              "block",
              { key: index },
              [
                index == 0
                  ? _c("block", [
                      _c("text", { staticClass: "identity-choice-main" }, [
                        _vm._v("主"),
                      ]),
                      _c(
                        "text",
                        {
                          staticClass:
                            "identity-choice-item identity-choice-active",
                        },
                        [_vm._v(_vm._s(item))]
                      ),
                    ])
                  : _c("text", { staticClass: "identity-choice-item" }, [
                      _vm._v(" " + _vm._s(item) + " "),
                    ]),
              ],
              1
            )
          }),
          1
        ),
      ]),
      _c("view", { staticClass: "tags_title" }, [_vm._v("艺人")]),
      _c(
        "view",
        { staticClass: "tags" },
        _vm._l(_vm.identity_data, function (item, index) {
          return _c(
            "text",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: item.code == "ACTOR",
                  expression: "item.code == 'ACTOR'",
                },
              ],
              key: index,
              staticClass: "tag_item",
              class: item.ispick ? "tag_itemed" : "",
              on: {
                tap: function ($event) {
                  return _vm.select_tag(item)
                },
              },
            },
            [_vm._v(" " + _vm._s(item.role) + " ")]
          )
        }),
        0
      ),
      _c("view", { staticClass: "tags_title" }, [_vm._v("非艺人")]),
      _c(
        "view",
        { staticClass: "tags" },
        _vm._l(_vm.identity_data, function (item, index) {
          return _c(
            "text",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: item.code == "SKILL",
                  expression: "item.code == 'SKILL'",
                },
              ],
              key: index,
              staticClass: "tag_item",
              class: item.ispick ? "tag_itemed" : "",
              on: {
                tap: function ($event) {
                  return _vm.select_tag(item)
                },
              },
            },
            [_vm._v(_vm._s(item.role))]
          )
        }),
        0
      ),
      _c(
        "cover-view",
        {
          staticClass: "subbtn_bottom_block",
          class: _vm.isIphoneX ? "fix-iphonex-button" : "",
        },
        [
          _c("cover-view", { staticClass: "subbtn_bottom" }, [
            _c("button", { on: { tap: _vm.submit } }, [_vm._v("保存")]),
          ]),
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

/***/ "./src/assets/images/common/warning2.png":
/*!***********************************************!*\
  !*** ./src/assets/images/common/warning2.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAAllBMVEUAAAD/YRD/YA//YA//YBD/YA//Xw3/YA//YA//YBD/YBD/YA//YA//YBD/YBH/SwD/MwD/YA//YBD/YBD/YA//Xw7/YQ//YQ7/Xw//VQD/YBD/YA//YA//YA//YBD/YBD/YBD/YBH/Xw//YRD/WxD/YBD/YBD/YA//YBD/YBD/YA//VQD/YBD/YBD/YRH/YhD/XAv/YBBlM2nlAAAAMXRSTlMAkcf78uoSqmRd0rV5cRoDAffAmUI5NiggBvTn2LqxnItKMi4P7t7NxaKFCeGfbFEMzEqK1gAAASxJREFUOMt9ktmygkAMRCMDguwouyAi7t6t///nLiNSziDQLwlVh6mkOzSQYQamQbOywbWfQxqG4lsFwmnEv+LkUg0U2SRjAD9t0QF7CllquHhtdVXk6QRTgUXPxgF240jEUHWddwHqMcQzcVq++pjh/BhhHOBt3ga4k6xuUMVva6iH3fhB8sHoYDGva6x5WQHlEAmBzbNRoFDHYiUjWQFtKTEJw/Y4zNIgiaE7sBCRNOADy8zjDHYQGIt/DhiqwX/s9ds/KzGkC479fUE7CoxgmdY7vxfXvOEmWl9Rv+XVf7sQZ2KEiF5usUZY0UmlUzC9zvWFtKJFJGbr8PRkP+3clk9TdbuBp7XiOW6h0JwUaJRDn2V2UKkE0xfTsvj5xwHmpSZEh1KdI6yG/gGX7inEAUWONQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/packageAdd/pages/user/identity/index.scss":
/*!*******************************************************!*\
  !*** ./src/packageAdd/pages/user/identity/index.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/identity/index.vue":
/*!******************************************************!*\
  !*** ./src/packageAdd/pages/user/identity/index.vue ***!
  \******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/identity/index.vue");


var config = {"usingComponents":{},"navigationBarTitleText":"修改身份"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/identity/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/identity/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/packageAdd/pages/user/identity/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/identity/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/identity/index.vue?vue&type=template&id=1532a7ff&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/identity/index.vue?vue&type=template&id=1532a7ff&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1532a7ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1532a7ff&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/identity/index.vue?vue&type=template&id=1532a7ff&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1532a7ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1532a7ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/identity/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map