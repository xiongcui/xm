(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/inviteGift/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/inviteGift/index.vue":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/inviteGift/index.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_6cca404c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6cca404c&scoped=true& */ "./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=template&id=6cca404c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_6cca404c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_6cca404c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "6cca404c",
  "f8d8e6b0"
  
)

component.options.__file = "src/packageAdd/pages/user/inviteGift/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/inviteGift/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "inviteGift",
  data: function data() {
    var _ref;

    return _ref = {
      visible: false,
      imgVisible: false,
      imageUrl: "",
      isIphoneX: false
    }, Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, "imageUrl", ""), Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, "shareTitle", ""), Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, "shareImg", ""), Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, "sharePath", ""), Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, "list", []), Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, "user_cnt", 0), Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, "coin_sum", 0), _ref;
  },
  methods: {
    invite: function invite() {
      this.visible = true;
    },
    close: function close() {
      this.visible = false;
    },
    imgClose: function imgClose() {
      this.imgVisible = false;
    },
    generatePoster: function generatePoster() {
      this.inviteImage({
        source: "share_friend",
        type: "poster"
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
      var url = this.imageUrl;
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
    inviteImage: function inviteImage(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* inviteImage */ "P"])(params);

              case 3:
                res = _context.sent;
                _this2.visible = false;
                _this2.imgVisible = true;
                _this2.imageUrl = res.data.data;
                _context.next = 11;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    shareInvite: function shareInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* shareInvite */ "Rb"])(params);

              case 3:
                res = _context2.sent;
                _context2.next = 8;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    shareInviteInfo: function shareInviteInfo(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* shareInviteInfo */ "Sb"])(params);

              case 3:
                res = _context3.sent;
                _this3.shareTitle = res.data.data.title;
                _this3.shareImg = res.data.data.imageUrl;
                _this3.sharePath = res.data.data.path;
                _context3.next = 11;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }))();
    },
    shareInviteList: function (_shareInviteList) {
      function shareInviteList(_x) {
        return _shareInviteList.apply(this, arguments);
      }

      shareInviteList.toString = function () {
        return _shareInviteList.toString();
      };

      return shareInviteList;
    }(function (params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return shareInviteList(params);

              case 3:
                res = _context4.sent;
                _this4.list = res.data.data.items;
                _this4.user_cnt = res.data.data.total.user_cnt;
                _this4.coin_sum = res.data.data.total.coin_sum;
                _context4.next = 11;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }))();
    })
  },
  onShareAppMessage: function onShareAppMessage() {
    this.shareInvite({
      source: "share_friend",
      type: "wechat"
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath // 路径，传递参数到指定页面。

    };
  },
  onShareTimeline: function onShareTimeline() {
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath // 路径，传递参数到指定页面。

    };
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  mounted: function mounted() {
    this.shareInviteInfo({
      source: "share_friend",
      type: "wechat"
    });
    this.shareInviteList("");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=template&id=6cca404c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=template&id=6cca404c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "invite-gift" }, [
    _c("image", {
      staticClass: "invite-img",
      attrs: {
        src: __webpack_require__(/*! ../../../../assets/images/invite-gift.jpg */ "./src/assets/images/invite-gift.jpg"),
        mode: "widthFix",
      },
    }),
    _c(
      "view",
      {
        staticClass: "invite-gift-fixed",
        class: _vm.isIphoneX ? "fix-iphonex-button" : "",
      },
      [
        _c("view", { staticClass: "invite-gift-txt" }, [
          _vm._v(
            "已累计邀请" +
              _vm._s(_vm.user_cnt) +
              "人，获得100元现金，获得" +
              _vm._s(_vm.coin_sum) +
              "个金币"
          ),
        ]),
        _c("view", { staticClass: "detail-btn" }, [_vm._v("查看邀请明细")]),
        _c("view", { staticClass: "invite-friends", on: { tap: _vm.invite } }, [
          _vm._v("立即邀请好友"),
        ]),
      ]
    ),
    _vm.visible
      ? _c("view", { staticClass: "invite-mask" }, [
          _c("view", { staticClass: "mask-box" }, [
            _c("view", { staticClass: "mask-title" }, [
              _c("view", { staticClass: "close", on: { tap: _vm.close } }),
            ]),
            _c("view", { staticClass: "mask-ct" }, [
              _c("view", { staticClass: "mask-item" }, [
                _c("image", {
                  attrs: {
                    src: "https://yuepai-oss.qubeitech.com/static/images/wchat.png",
                    mode: "aspectFill",
                  },
                }),
                _c(
                  "button",
                  { staticClass: "share-btn", attrs: { "open-type": "share" } },
                  [
                    _c("view", { staticClass: "mask-rt" }, [
                      _c("view", { staticClass: "mask-share" }, [
                        _vm._v("分享微信"),
                      ]),
                      _c("view", { staticClass: "mask-share-p" }, [
                        _vm._v("分享到群聊或微信好友"),
                      ]),
                    ]),
                  ]
                ),
              ]),
              _c(
                "view",
                { staticClass: "mask-item", on: { tap: _vm.generatePoster } },
                [
                  _c("image", {
                    attrs: {
                      src: "https://yuepai-oss.qubeitech.com/static/images/tupian.png",
                      mode: "aspectFill",
                    },
                  }),
                  _c("view", { staticClass: "mask-rt" }, [
                    _c("view", { staticClass: "mask-share" }, [
                      _vm._v("生成海报"),
                    ]),
                    _c("view", { staticClass: "mask-share-p" }, [
                      _vm._v("生成含有推广码的宣传海报"),
                    ]),
                  ]),
                ]
              ),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm.imgVisible
      ? _c("view", { staticClass: "invite-mask", on: { tap: _vm.imgClose } }, [
          _c("view", { staticClass: "mask-img-box" }, [
            _c("image", {
              staticClass: "mask-img",
              attrs: { src: _vm.imageUrl, mode: "heightFix" },
            }),
            _c(
              "view",
              { staticClass: "mask-save", on: { tap: _vm.clickSaveImg } },
              [_vm._v("保存到相册")]
            ),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/invite-gift.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/invite-gift.jpg ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/invite-gift.jpg";

/***/ }),

/***/ "./src/packageAdd/pages/user/inviteGift/index.scss":
/*!*********************************************************!*\
  !*** ./src/packageAdd/pages/user/inviteGift/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/inviteGift/index.vue":
/*!********************************************************!*\
  !*** ./src/packageAdd/pages/user/inviteGift/index.vue ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/inviteGift/index.vue");


var config = {"navigationBarTitleText":"邀请有礼"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/inviteGift/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=template&id=6cca404c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=template&id=6cca404c&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6cca404c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6cca404c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/inviteGift/index.vue?vue&type=template&id=6cca404c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6cca404c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6cca404c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/inviteGift/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map