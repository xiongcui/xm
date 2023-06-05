(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/register/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/register/index.vue":
/*!************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/register/index.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1a38522c&scoped=true& */ "./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/register/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "1a38522c",
  "54b88990"
  
)

component.options.__file = "src/pages/register/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/register/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/pages/register/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _utils_clickThrottle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/clickThrottle */ "./src/utils/clickThrottle.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "register",
  data: function data() {
    return {
      avatar: "",
      nickname: "",
      invited_uuid: "",
      visible: false,
      sex: "",
      date: "",
      identity: "",
      select_city: "",
      region: [],
      regionList: [],
      multiArray: [],
      //地区
      type: 0,
      identityList: []
    };
  },
  methods: {
    chooesImage: function chooesImage() {
      this.visible = true;
    },
    sexChange: function sexChange(index) {
      this.sex = index;
    },
    dateChange: function dateChange(e) {
      this.date = e.detail.value;
    },
    bindRegionChange: function bindRegionChange(e) {
      this.select_city = e.detail.value.join("-");
      this.regionList = e.detail.code;
    },
    identityFocus: function identityFocus() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/user/identity/index");
    },
    goHome: function goHome() {
      // 跳转首页
      wx.switchTab({
        url: "/pages/home/index",
        success: function success(e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return; // page.onLoad();
        }
      });
    },
    submit: function submit() {
      if (!this.nickname) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请填写名称！");
        return false;
      }

      if (this.sex === "") {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择性别！");
        return false;
      }

      if (!this.date) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择生日！");
        return false;
      }

      if (!this.select_city) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择地区！");
        return false;
      }

      if (!this.identity) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择身份！");
        return false;
      }

      var params = {
        nickname: this.nickname,
        sex: this.sex,
        birthday: this.date,
        addressName: this.select_city,
        address: this.regionList,
        avatar: this.avatar,
        career_label: this.identityList
      };
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])()) return;
      this.userRegister(params);
    },
    userRegister: function userRegister(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userRegister */ "Pb"])(params);

              case 3:
                res = _context.sent;
                // 跳转首页
                wx.switchTab({
                  url: "/pages/home/index",
                  success: function success(e) {
                    var page = getCurrentPages().pop();
                    if (page == undefined || page == null) return;
                    page.onLoad();
                  }
                });
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
    },
    getCareer: function getCareer(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, data, arr;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* getCareer */ "y"])(params);

              case 3:
                res = _context2.sent;
                data = res.data.data;

                if (data.user_career.career_label) {
                  arr = data.user_career.career_label;
                  _this.identity = arr.join(".");
                  _this.identityList = data.user_career.career_label;
                }

                _context2.next = 10;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    }
  },
  created: function created() {
    var userInfo = wx.getStorageSync("userInfo");
    this.avatar = userInfo.avatar;
    this.nickname = userInfo.nickname;
  },
  onShow: function onShow() {
    this.getCareer("");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("view", [
    _c("form", { staticClass: "main", attrs: { bindreset: "reset" } }, [
      _c("view", { staticClass: "top" }, [
        _c("view", { staticClass: "skip-btn", on: { tap: _vm.goHome } }, [
          _vm._v("跳过"),
        ]),
        _c("view", { staticClass: "avatar", on: { tap: _vm.chooesImage } }, [
          _vm.avatar
            ? _c("image", { attrs: { mode: "aspectFit", src: _vm.avatar } })
            : _c("image", {
                staticClass: "no_avatar",
                attrs: { mode: "aspectFit" },
              }),
        ]),
      ]),
      _c("view", { staticClass: "infor" }, [
        _c("view", { staticClass: "item ub item-b" }, [
          _c("view", { staticClass: "item_label" }, [_vm._v("昵称")]),
          _c("view", { staticClass: "ub-f1 item_input" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.nickname,
                  expression: "nickname",
                },
              ],
              attrs: {
                maxlength: "60",
                name: "nickname",
                placeholder: "请输入你的昵称",
                placeholderClass: "nickname_tip",
                type: "text",
                disabled: "",
              },
              domProps: { value: _vm.nickname },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.nickname = $event.target.value
                },
              },
            }),
          ]),
        ]),
        _c("view", { staticClass: "item ub item-b" }, [
          _c("view", { staticClass: "item_label" }, [_vm._v("性别")]),
          _c("view", { staticClass: "ub-f1 item_input" }, [
            _vm.sex === 1
              ? _c("image", {
                  staticClass: "select_sex",
                  attrs: {
                    "data-sex": "1",
                    src: "https://yuepai-oss.qubeitech.com/static/images/six1ed.png",
                  },
                  on: {
                    tap: function ($event) {
                      return _vm.sexChange(1)
                    },
                  },
                })
              : _c("image", {
                  staticClass: "select_sex",
                  attrs: {
                    "data-sex": "1",
                    src: "https://yuepai-oss.qubeitech.com/static/images/six1.png",
                  },
                  on: {
                    tap: function ($event) {
                      return _vm.sexChange(1)
                    },
                  },
                }),
            _vm.sex === 0
              ? _c("image", {
                  staticClass: "select_sex",
                  attrs: {
                    "data-sex": "2",
                    src: "https://yuepai-oss.qubeitech.com/static/images/six2ed.png",
                  },
                  on: {
                    tap: function ($event) {
                      return _vm.sexChange(0)
                    },
                  },
                })
              : _c("image", {
                  staticClass: "select_sex",
                  attrs: {
                    "data-sex": "2",
                    src: "https://yuepai-oss.qubeitech.com/static/images/six2.png",
                  },
                  on: {
                    tap: function ($event) {
                      return _vm.sexChange(0)
                    },
                  },
                }),
          ]),
        ]),
        _c("view", { staticClass: "item ub item-b" }, [
          _c("view", { staticClass: "item_label" }, [_vm._v("生日")]),
          _c(
            "view",
            { staticClass: "ub-f1 item_input" },
            [
              _c(
                "picker",
                {
                  staticClass: "picker",
                  attrs: { mode: "date", value: "2005-01-01" },
                  on: { change: _vm.dateChange },
                },
                [
                  _vm.date
                    ? _c("view", { staticClass: "picker_children picked" }, [
                        _vm._v(_vm._s(_vm.date)),
                      ])
                    : _c("view", { staticClass: "picker_children" }, [
                        _vm._v("请选择生日"),
                      ]),
                ]
              ),
            ],
            1
          ),
        ]),
        _c("view", { staticClass: "item ub item-b" }, [
          _c("view", { staticClass: "item_label" }, [_vm._v("地区")]),
          _c(
            "view",
            { staticClass: "ub-f1 item_input" },
            [
              _c(
                "picker",
                {
                  staticClass: "picker",
                  attrs: { mode: "region", value: "region" },
                  on: { change: _vm.bindRegionChange },
                },
                [
                  _vm.select_city
                    ? _c(
                        "view",
                        { staticClass: "picker_children pick_city picked" },
                        [_vm._v(_vm._s(_vm.select_city))]
                      )
                    : _c("view", { staticClass: "picker_children" }, [
                        _vm._v("请选择地区"),
                      ]),
                ]
              ),
            ],
            1
          ),
        ]),
        _c("view", { staticClass: "item ub item-b" }, [
          _c("view", { staticClass: "item_label" }, [_vm._v("身份")]),
          _c("view", { staticClass: "ub-f1 item_input" }, [
            _c("view", [_vm._v(_vm._s(_vm.globalData.identity))]),
            _vm.identity
              ? _c(
                  "view",
                  {
                    staticClass: "picker_children pick_city picked",
                    on: { tap: _vm.identityFocus },
                  },
                  [_vm._v(" " + _vm._s(_vm.identity) + " ")]
                )
              : _c(
                  "view",
                  {
                    staticClass: "picker_children",
                    on: { tap: _vm.identityFocus },
                  },
                  [_vm._v("请选择身份" + _vm._s(_vm.globalData.identity))]
                ),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "savebox" }, [
        _c("button", { staticClass: "save-btn", on: { tap: _vm.submit } }, [
          _vm._v("完 成"),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/register/index.scss":
/*!***************************************!*\
  !*** ./src/pages/register/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/register/index.vue":
/*!**************************************!*\
  !*** ./src/pages/register/index.vue ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/register/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/register/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/register/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/pages/register/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1a38522c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/register/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map