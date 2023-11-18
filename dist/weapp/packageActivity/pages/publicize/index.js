(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageActivity/pages/publicize/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/publicize/index.vue":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/publicize/index.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_68de73c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=68de73c0&scoped=true& */ "./src/packageActivity/pages/publicize/index.vue?vue&type=template&id=68de73c0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageActivity/pages/publicize/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_68de73c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_68de73c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "68de73c0",
  "9eef70dc"
  
)

component.options.__file = "src/packageActivity/pages/publicize/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/publicize/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/publicize/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageActivity/pages/publicize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/index.js */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _utils_clickThrottle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/clickThrottle */ "./src/utils/clickThrottle.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "publicize",
  data: function data() {
    return {
      isIphoneX: false,
      visible: false,
      avatar: "",
      guidance: "",
      nickname: "",
      organ: "",
      qrcode: "",
      list: [],
      reply: "",
      joinQrcode: "",
      joinTitle: "",
      headcount: "",
      userList: [],
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      shareFriendsTitle: "",
      shareFriendsImg: "",
      shareFriendsPath: "",
      amount: 0
    };
  },
  methods: {
    close: function close() {
      this.visible = false;
    },
    goHome: function goHome() {
      wx.switchTab({
        url: "/pages/home/index",
        success: function success(e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return; // page.onLoad();
        }
      });
    },
    addGroup: function addGroup(oid, amount) {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])()) return;

      if (Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* isLogin */ "b"])()) {
        this.socialCheck({
          crowd_oid: oid
        }, amount);
      } else {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/pages/login/index?from=publicize");
      }
    },
    saveImg: function saveImg() {
      //保存到相册
      var url = this.joinQrcode;
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
    posterInfo: function posterInfo(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* posterInfo */ "Bb"])(params);

              case 3:
                res = _context.sent;
                _this2.avatar = res.data.data.contact.avatar;
                _this2.guidance = res.data.data.contact.guidance;
                _this2.nickname = res.data.data.contact.nickname;
                _this2.organ = res.data.data.contact.organ;
                _this2.qrcode = res.data.data.contact.qrcode;
                _this2.list = res.data.data.crowd;
                _this2.userList = res.data.data.guidance.user_list;
                _this2.headcount = res.data.data.guidance.headcount;
                _context.next = 16;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }))();
    },
    socialCheck: function socialCheck(params, amount) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, data, _this;

        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* socialCheck */ "Ub"])(params);

              case 3:
                res = _context2.sent;
                data = res.data.data;
                _this = _this3;

                if (!data) {
                  wx.showModal({
                    title: "温馨提示",
                    content: "\u4E3A\u9632\u6B62\u9891\u7E41\u6076\u610F\u52A0\u7FA4\uFF0C\u5165\u7FA4\u9700\u652F\u4ED8".concat(amount, "\u5143\u95E8\u69DB\u8D39\uFF0C\u8FD8\u8BF7\u4F60\u7406\u89E3"),
                    cancelText: "暂时放弃",
                    confirmText: "我要加群",
                    success: function success(res) {
                      if (res.confirm) {
                        console.log("用户点击确定");

                        _this.socialPay({
                          crowd_oid: params.crowd_oid
                        });
                      } else if (res.cancel) {
                        console.log("用户点击取消");
                      }
                    }
                  });
                } else {
                  _this3.visible = true;
                  _this3.reply = res.data.data.reply;
                  _this3.joinQrcode = res.data.data.qrcode;
                  _this3.joinTitle = res.data.data.title;
                }

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
    },
    socialResult: function socialResult(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* socialResult */ "Wb"])(params);

              case 3:
                res = _context3.sent;
                _this4.visible = true;
                _this4.reply = res.data.data.reply;
                _this4.joinQrcode = res.data.data.qrcode;
                _this4.joinTitle = res.data.data.title;
                _context3.next = 12;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    },
    socialPay: function socialPay(params) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res, data, _this;

        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* socialPay */ "Vb"])(params);

              case 3:
                res = _context4.sent;
                data = res.data.data;
                _this = _this5;
                wx.requestPayment({
                  timeStamp: data.result.timeStamp,
                  nonceStr: data.result.nonceStr,
                  package: data.result.package,
                  signType: data.result.signType,
                  paySign: data.result.paySign,
                  success: function success(res) {
                    console.log(res, "成功了");

                    _this.socialResult({
                      crowd_oid: params.crowd_oid
                    });
                  },
                  fail: function fail(res) {},
                  complete: function complete(res) {}
                });
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
    },
    shareInvite: function shareInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee5() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* shareInvite */ "Rb"])(params);

              case 3:
                res = _context5.sent;
                _context5.next = 8;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }))();
    },
    shareInviteInfo: function shareInviteInfo(params) {
      var _this6 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee6() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* shareInviteInfo */ "Sb"])(params);

              case 3:
                res = _context6.sent;
                _this6.shareTitle = res.data.data.title;
                _this6.shareImg = res.data.data.imageUrl;
                _this6.sharePath = res.data.data.path;
                _context6.next = 11;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 9]]);
      }))();
    },
    shareFriendsInvite: function shareFriendsInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee7() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* shareInvite */ "Rb"])(params);

              case 3:
                res = _context7.sent;
                _context7.next = 8;
                break;

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](0);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 6]]);
      }))();
    },
    shareFriendsInviteInfo: function shareFriendsInviteInfo(params) {
      var _this7 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee8() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* shareInviteInfo */ "Sb"])(params);

              case 3:
                res = _context8.sent;
                _this7.shareFriendsTitle = res.data.data.title;
                _this7.shareFriendsImg = res.data.data.imageUrl;
                _this7.shareFriendsPath = res.data.data.path;
                _context8.next = 11;
                break;

              case 9:
                _context8.prev = 9;
                _context8.t0 = _context8["catch"](0);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 9]]);
      }))();
    }
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  mounted: function mounted() {
    this.posterInfo("");
    this.shareInviteInfo({
      source: "share_details",
      project: "social"
    });
    this.shareFriendsInviteInfo({
      source: "friends_circle",
      project: "social"
    });
  },
  onShareAppMessage: function onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      project: "social"
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath // 路径，传递参数到指定页面。

    };
  },
  onShareTimeline: function onShareTimeline() {
    this.shareFriendsInvite({
      source: "friends_circle",
      project: "social"
    });
    return {
      title: this.shareFriendsTitle,
      imageUrl: this.shareFriendsImg,
      path: this.shareFriendsPath // 路径，传递参数到指定页面。

    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/publicize/index.vue?vue&type=template&id=68de73c0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/publicize/index.vue?vue&type=template&id=68de73c0&scoped=true& ***!
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
  return _c("view", { staticClass: "publicize" }, [
    _c("view", { staticClass: "publicize-top" }, [
      _c("view", { staticClass: "publicize-bg" }, [
        _c("view", { staticClass: "publicize-title" }, [
          _vm._v("找约拍 找活动 约摄影 约模特"),
        ]),
        _c("view", { staticClass: "publicize-subtitle" }, [
          _vm._v("让影像创作更有趣"),
        ]),
      ]),
      _c("view", { staticClass: "publicize-info" }, [
        _c("view", { staticClass: "publicize-info-box" }, [
          _c("view", { staticClass: "publicize-info-left" }, [
            _c("view", { staticClass: "publicize-avatar" }, [
              _c("image", { attrs: { src: _vm.avatar } }),
              _c("view", { staticClass: "publicize-avatar-info" }, [
                _c("view", { staticClass: "publicize-nickname" }, [
                  _vm._v(" " + _vm._s(_vm.nickname) + " "),
                ]),
                _c("view", { staticClass: "publicize-secure" }, [
                  _vm._v(_vm._s(_vm.organ)),
                ]),
              ]),
            ]),
            _c("view", { staticClass: "publicize-tips" }, [
              _c("view", [_vm._v("添加右侧客服微信")]),
              _c("view", [_vm._v("邀您加入约拍摄影社群")]),
            ]),
          ]),
          _c("view", { staticClass: "publicize-info-rt" }, [
            _c("image", {
              attrs: { src: _vm.qrcode, "show-menu-by-longpress": true },
            }),
          ]),
        ]),
        _c("view", { staticClass: "qrcode-tips" }, [
          _vm._v("长按识别二维码，添加客服联系方式"),
        ]),
        _c("view", { staticClass: "group-num" }, [
          _vm._v("最近已有 "),
          _c("text", { staticClass: "red" }, [_vm._v(_vm._s(_vm.headcount))]),
          _vm._v(" 人添加入社群"),
        ]),
        _c(
          "view",
          { staticClass: "group-list" },
          _vm._l(_vm.userList, function (item, index) {
            return _c(
              "view",
              {
                key: index,
                staticClass: "group-style",
                class: index == 1 ? "opcity1" : index != 0 ? "opcity2" : "",
              },
              [_vm._v(_vm._s(item))]
            )
          }),
          0
        ),
      ]),
    ]),
    _c("view", { staticClass: "publicize-ct" }, [
      _c("view", { staticClass: "exchange-title" }, [
        _vm._v("加入交流社群，遇见更多同伴"),
      ]),
      _c(
        "view",
        { staticClass: "exchange-list" },
        _vm._l(_vm.list, function (item, index) {
          return _c("view", { key: index, staticClass: "exchange-box" }, [
            _c("image", { attrs: { src: item.cover } }),
            _c("view", { staticClass: "exchange-subtitle" }, [
              _vm._v(_vm._s(item.title)),
            ]),
            _c("view", { staticClass: "exchange-desc" }, [
              _vm._v(_vm._s(item.summary)),
            ]),
            _c(
              "view",
              {
                staticClass: "addgroup",
                on: {
                  tap: function ($event) {
                    return _vm.addGroup(item.oid, item.amount)
                  },
                },
              },
              [_vm._v("加群")]
            ),
          ])
        }),
        0
      ),
    ]),
    _c("view", { staticClass: "publicize-fixed", on: { tap: _vm.goHome } }, [
      _c(
        "view",
        {
          staticClass: "publicize-fixed-btn",
          class: _vm.isIphoneX ? "fix-iphonex-button2" : "",
        },
        [_vm._v("解锁更多功能")]
      ),
    ]),
    _vm.visible
      ? _c("view", { staticClass: "publicize-modal", on: { tap: _vm.close } }, [
          _c("view", { staticClass: "publicize-content" }, [
            _c("view", { staticClass: "join-title" }, [_vm._v(" 邀您入群 ")]),
            _c("view", { staticClass: "join-tips" }, [
              _vm._v("请添加客群微信邀您入群"),
            ]),
            _c("image", {
              staticClass: "join-img",
              attrs: { "show-menu-by-longpress": true, src: _vm.joinQrcode },
            }),
            _c("view", { staticClass: "join-tips2" }, [
              _vm._v("添加客服后回复"),
              _c("text", { staticClass: "red" }, [_vm._v(_vm._s(_vm.reply))]),
              _vm._v("即可邀您入群"),
            ]),
            _c("view", { staticClass: "join-name" }, [
              _vm._v(_vm._s(_vm.joinTitle)),
            ]),
            _c("view", { staticClass: "publicize-btns" }, [
              _c(
                "view",
                {
                  staticClass: "publicize-close",
                  on: {
                    tap: function ($event) {
                      $event.stopPropagation()
                      return _vm.close.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("关闭")]
              ),
              _c(
                "view",
                {
                  staticClass: "publicize-save",
                  on: {
                    tap: function ($event) {
                      $event.stopPropagation()
                      return _vm.saveImg.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("保存")]
              ),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageActivity/pages/publicize/index.scss":
/*!********************************************************!*\
  !*** ./src/packageActivity/pages/publicize/index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageActivity/pages/publicize/index.vue":
/*!*******************************************************!*\
  !*** ./src/packageActivity/pages/publicize/index.vue ***!
  \*******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/publicize/index.vue");


var config = {"navigationBarTitleText":"加入社群"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageActivity/pages/publicize/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageActivity/pages/publicize/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/packageActivity/pages/publicize/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/publicize/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageActivity/pages/publicize/index.vue?vue&type=template&id=68de73c0&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/packageActivity/pages/publicize/index.vue?vue&type=template&id=68de73c0&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_68de73c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=68de73c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/publicize/index.vue?vue&type=template&id=68de73c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_68de73c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_68de73c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageActivity/pages/publicize/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map