(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/unlock/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/unlock/index.vue":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/unlock/index.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_dfe14ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=dfe14ef6&scoped=true& */ "./src/packageAdd/pages/user/unlock/index.vue?vue&type=template&id=dfe14ef6&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/unlock/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_dfe14ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_dfe14ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "dfe14ef6",
  "040a9c53"
  
)

component.options.__file = "src/packageAdd/pages/user/unlock/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/unlock/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/unlock/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/unlock/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index.js */ "./src/api/index.js");
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
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "unlock",
  data: function data() {
    return {
      list: [],
      pageNum: 1,
      pageSize: 10,
      unlockSuccessVisible: false,
      mobile: "",
      wechat: "",
      wechatCode: "",
      platformMap: {}
    };
  },
  methods: {
    closeSuccess: function closeSuccess() {
      this.unlockSuccessVisible = false;
    },
    viewDetails: function viewDetails(data) {
      this.unlockSuccessVisible = true;
      this.mobile = data.mobile;
      this.wechat = data.wechat_act;
      this.wechatCode = data.wechat_qrc;
    },
    copy: function copy(txt) {
      wx.setClipboardData({
        data: txt,
        //这个是要复制的数据
        success: function success(res) {
          wx.getClipboardData({
            success: function success(res) {
              console.log(res.data); // data

              if (res.data) {
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("复制成功");
              }
            }
          });
        }
      });
    },
    clickSaveImg: function clickSaveImg() {
      var _this = this;

      //先授权相册
      wx.getSetting({
        success: function success(res) {
          if (!res.authSetting["scope.writePhotosAlbum"]) {
            //未授权的话发起授权
            wx.authorize({
              scope: "scope.writePhotosAlbum",
              success: function success() {
                //用户允许授权，保存到相册
                _this.saveImg();
              },
              fail: function fail() {
                //用户拒绝授权，然后就引导授权（这里的话如果用户拒绝，不会立马弹出引导授权界面，坑就是上边所说的官网原因）
                wx.openSetting({
                  success: function success() {
                    wx.authorize({
                      scope: "scope.writePhotosAlbum",
                      succes: function succes() {
                        //授权成功，保存图片
                        _this.saveImg();
                      }
                    });
                  }
                });
              }
            });
          } else {
            //已经授权
            _this.saveImg();
          }
        }
      });
    },
    saveImg: function saveImg() {
      //保存到相册
      var url = this.wechatCode;
      wx.downloadFile({
        //这里如果有报错就按照上边的解决方案来处理
        url: url,
        success: function success(res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function success(res) {
              wx.showToast({
                title: "保存成功！"
              });
            },
            faile: function faile(err) {
              console.log("失败！");
            }
          });
        }
      });
    },
    query: function query() {
      this.unlockList({
        page: this.pageNum,
        per_page: this.pageSize
      });
    },
    unlockList: function unlockList(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* unlockList */ "yc"])(params);

              case 3:
                res = _context.sent;

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context.next = 7;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("没有更多数据了～");
                return _context.abrupt("return", false);

              case 7:
                data = res.data.data.items;
                _this2.list = _this2.list.concat(data);
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
  created: function created() {
    this.globalData = this.globalData;
    this.platformMap = _utils_util__WEBPACK_IMPORTED_MODULE_4__[/* platformMap */ "e"];
    this.query();
  },
  onReachBottom: function onReachBottom() {
    this.pageNum++;
    this.query();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/unlock/index.vue?vue&type=template&id=dfe14ef6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/unlock/index.vue?vue&type=template&id=dfe14ef6&scoped=true& ***!
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
  return _c(
    "view",
    { staticClass: "unlock-list" },
    [
      _vm._l(_vm.list, function (item, index) {
        return _c("view", { key: index, staticClass: "unlock-item" }, [
          _c("view", { staticClass: "unlock-left" }, [
            _c("image", { attrs: { src: item.unlock_avatar } }),
            _c("view", { staticClass: "unlock-info" }, [
              _c(
                "view",
                { staticClass: "unlock-title" },
                [
                  _c("text", [_vm._v(_vm._s(item.unlock_nickname))]),
                  _c("block", [
                    item.unlock_sex == 1
                      ? _c("image", {
                          staticClass: "sex",
                          attrs: {
                            src: "https://yuepai-oss.qubeitech.com/static/images/boy.png",
                          },
                        })
                      : _vm._e(),
                    item.unlock_sex == 0
                      ? _c("image", {
                          staticClass: "sex",
                          attrs: {
                            src: "https://yuepai-oss.qubeitech.com/static/images/girl.png",
                          },
                        })
                      : _vm._e(),
                  ]),
                ],
                1
              ),
              _c("view", { staticClass: "unlock-p" }, [
                _vm._v(" " + _vm._s(item.unlock_career_label) + " "),
              ]),
            ]),
          ]),
          _c("view", { staticClass: "unlock-rt" }, [
            _c(
              "view",
              {
                staticClass: "unlock-btn",
                on: {
                  tap: function ($event) {
                    return _vm.viewDetails(item.content)
                  },
                },
              },
              [_vm._v(" " + _vm._s(item.details_button) + " ")]
            ),
          ]),
        ])
      }),
      _vm.unlockSuccessVisible
        ? _c("view", { staticClass: "unlock", on: { tap: _vm.closeSuccess } }, [
            _c("view", { staticClass: "unlock-modal" }, [
              _c("view", { staticClass: "unlock-success-box" }, [
                _c("view", { staticClass: "unlock-success-title" }, [
                  _vm._v(" 解锁信息 "),
                  _c("view", { staticClass: "close-img" }, [
                    _c("image", {
                      attrs: {
                        src: "https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png",
                      },
                      on: {
                        tap: function ($event) {
                          $event.stopPropagation()
                          return _vm.closeSuccess.apply(null, arguments)
                        },
                      },
                    }),
                  ]),
                ]),
                _vm.mobile
                  ? _c("view", { staticClass: "unlock-success-item" }, [
                      _c("view", { staticClass: "unlock-success-left" }, [
                        _c("text", { staticClass: "unlock-label" }, [
                          _vm._v("手机号："),
                        ]),
                        _c("text", { staticClass: "unlock-txt" }, [
                          _vm._v(_vm._s(_vm.mobile)),
                        ]),
                      ]),
                      _c(
                        "view",
                        {
                          staticClass: "unlock-success-rt",
                          on: {
                            tap: function ($event) {
                              $event.stopPropagation()
                              return _vm.copy(_vm.mobile)
                            },
                          },
                        },
                        [_vm._v(" 复制 ")]
                      ),
                    ])
                  : _vm._e(),
                _vm.wechat
                  ? _c("view", { staticClass: "unlock-success-item" }, [
                      _c("view", { staticClass: "unlock-success-left" }, [
                        _c("text", { staticClass: "unlock-label" }, [
                          _vm._v("微信号："),
                        ]),
                        _c("text", { staticClass: "unlock-txt" }, [
                          _vm._v(_vm._s(_vm.wechat)),
                        ]),
                      ]),
                      _c(
                        "view",
                        {
                          staticClass: "unlock-success-rt",
                          on: {
                            tap: function ($event) {
                              $event.stopPropagation()
                              return _vm.copy(_vm.wechat)
                            },
                          },
                        },
                        [_vm._v(" 复制 ")]
                      ),
                    ])
                  : _vm._e(),
                _vm.wechatCode
                  ? _c("view", { staticClass: "unlock-success-item" }, [
                      _c("view", { staticClass: "unlock-success-left" }, [
                        _c("text", { staticClass: "unlock-label" }, [
                          _vm._v("微信二维码："),
                        ]),
                        _c("image", { attrs: { src: _vm.wechatCode } }),
                      ]),
                      _c(
                        "view",
                        {
                          staticClass: "unlock-success-rt",
                          on: {
                            tap: function ($event) {
                              $event.stopPropagation()
                              return _vm.clickSaveImg.apply(null, arguments)
                            },
                          },
                        },
                        [_vm._v(" 保存 ")]
                      ),
                    ])
                  : _vm._e(),
                _c("view", { staticClass: "unlock-tips" }, [
                  _vm._v(
                    " 提示：联系对方时，注明来自“虾米约拍”，请勿骚扰对方 "
                  ),
                ]),
              ]),
            ]),
          ])
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/unlock/index.scss":
/*!*****************************************************!*\
  !*** ./src/packageAdd/pages/user/unlock/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/unlock/index.vue":
/*!****************************************************!*\
  !*** ./src/packageAdd/pages/user/unlock/index.vue ***!
  \****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/unlock/index.vue");


var config = {"enablePullDownRefresh":true,"navigationBarTitleText":"我的解锁"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/unlock/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/unlock/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/packageAdd/pages/user/unlock/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/unlock/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/unlock/index.vue?vue&type=template&id=dfe14ef6&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/unlock/index.vue?vue&type=template&id=dfe14ef6&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfe14ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=dfe14ef6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/unlock/index.vue?vue&type=template&id=dfe14ef6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfe14ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfe14ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/unlock/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map