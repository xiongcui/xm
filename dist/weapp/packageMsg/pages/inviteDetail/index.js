(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMsg/pages/inviteDetail/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/inviteDetail/index.vue":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/inviteDetail/index.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_cc2b315a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=cc2b315a&scoped=true& */ "./src/packageMsg/pages/inviteDetail/index.vue?vue&type=template&id=cc2b315a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMsg/pages/inviteDetail/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_cc2b315a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_cc2b315a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "cc2b315a",
  "b550c576"
  
)

component.options.__file = "src/packageMsg/pages/inviteDetail/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/inviteDetail/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/inviteDetail/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageMsg/pages/inviteDetail/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "invite-detail",
  data: function data() {
    return {
      sid: "",
      showModel: false,
      isIphoneX: false,
      contactVisible: false,
      yuepaiInfo: {
        visited_coin: 0,
        visited_status: "",
        abstract: "",
        title: "",
        content: "",
        warning: "",
        author: {
          avatar: "",
          nickname: "",
          sex: 0,
          career_list: [],
          province_name: ""
        }
      },
      showContact: false,
      showCelebrity: false,
      showAddress: false,
      data: {
        contact: {
          person: "",
          wechat: "",
          wechat_links: "",
          mobile: "",
          is_wechat: 1,
          is_mobile: 1
        },
        celebrity: {
          oid: "",
          nickname: "",
          fans_number: ""
        },
        address: {
          oid: "",
          detail_address: "",
          mobile: "",
          name: ""
        }
      },
      media_info: {
        platform_name: "",
        platform_code: ""
      }
    };
  },
  methods: {
    contactClose: function contactClose() {
      this.contactVisible = false;
    },
    showQRcode: function showQRcode() {
      this.showModel = true;
    },
    closeQRcode: function closeQRcode() {
      this.showModel = false;
    },
    goYuepaiDetail: function goYuepaiDetail() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/yuedan/yuedan_detail/index?oid=" + this.yuepaiInfo.oid + "&author_id=" + this.yuepaiInfo.author);
    },
    submit: function submit() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(5000)) return;

      var _this = this;

      wx.showModal({
        title: "温馨提示",
        content: "\u67E5\u770B\u8054\u7CFB\u65B9\u5F0F\u6D88\u8017".concat(_this.yuepaiInfo.visited_coin, "\u4E2A\u91D1\u8C46\uFF0C\u786E\u5B9A\u67E5\u770B\u5417\uFF1F"),
        success: function success(res) {
          if (res.confirm) {
            console.log("用户点击确定");

            _this.receivePayment({
              sid: _this.sid
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
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
      var _this2 = this;

      //先授权相册
      wx.getSetting({
        success: function success(res) {
          if (!res.authSetting["scope.writePhotosAlbum"]) {
            //未授权的话发起授权
            wx.authorize({
              scope: "scope.writePhotosAlbum",
              success: function success() {
                //用户允许授权，保存到相册
                _this2.saveImg();
              },
              fail: function fail() {
                //用户拒绝授权，然后就引导授权（这里的话如果用户拒绝，不会立马弹出引导授权界面，坑就是上边所说的官网原因）
                wx.openSetting({
                  success: function success() {
                    wx.authorize({
                      scope: "scope.writePhotosAlbum",
                      succes: function succes() {
                        //授权成功，保存图片
                        _this2.saveImg();
                      }
                    });
                  }
                });
              }
            });
          } else {
            //已经授权
            _this2.saveImg();
          }
        }
      });
    },
    saveImg: function saveImg() {
      //保存到相册
      var url = this.data.contact.wechat_links;
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
    applyInfo: function applyInfo(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* applyInfo */ "d"])(params);

              case 3:
                res = _context.sent;
                _this3.yuepaiInfo.oid = res.data.data.oid;
                _this3.yuepaiInfo.author = res.data.data.visitor;
                _this3.yuepaiInfo.tips = res.data.data.content.tips;
                _this3.yuepaiInfo.title = res.data.data.content.title;
                _this3.yuepaiInfo.abstract = res.data.data.origin.title;
                _this3.yuepaiInfo.content = res.data.data.content.body;
                _this3.yuepaiInfo.warning = res.data.data.warning;
                _this3.showContact = res.data.data.contact.is_enable;
                _this3.showCelebrity = res.data.data.celebrity.is_enable;
                _this3.showAddress = res.data.data.address.is_enable;
                _this3.data.contact = res.data.data.contact.body;
                _this3.data.celebrity = res.data.data.celebrity.body;
                _this3.data.address = res.data.data.address.body;
                _this3.media_info.platform_name = res.data.data.celebrity.body.platform_name;
                _this3.media_info.platform_code = res.data.data.celebrity.body.platform_type;
                _this3.yuepaiInfo.visited_status = res.data.data.status.visited_status;
                _this3.yuepaiInfo.visited_coin = res.data.data.visited_coin;
                _context.next = 25;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](0);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 23]]);
      }))();
    },
    receivePayment: function receivePayment(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* receivePayment */ "sb"])(params);

              case 3:
                res = _context2.sent;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("支付成功");
                setTimeout(function () {
                  _this4.applyInfo({
                    sid: _this4.sid
                  });
                }, 3000);
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
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function onLoad(options) {
    this.sid = options.sid;

    if (this.sid) {
      this.applyInfo({
        sid: this.sid
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/inviteDetail/index.vue?vue&type=template&id=cc2b315a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/inviteDetail/index.vue?vue&type=template&id=cc2b315a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _c("view", { staticClass: "toptip ub" }, [
      _c("image", {
        staticClass: "warning",
        attrs: {
          src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_tongzhi.png",
        },
      }),
      _c("view", { staticClass: "toptip_text ub-f1" }, [
        _vm._v(
          "安全提示：①切勿独自与陌生人在室内约拍；②请勿相信未见面先收费的合作；③切勿轻信兼职刷单、虚拟网购等骗局。"
        ),
      ]),
    ]),
    _c("view", { staticClass: "yuepai_top" }, [
      _c("view", { staticClass: "yuepai_top_left" }, [
        _c("image", {
          staticClass: "avatar",
          attrs: { src: _vm.yuepaiInfo.author.avatar },
        }),
        _c("view", { staticClass: "yuepai_info" }, [
          _c(
            "view",
            { staticClass: "yuepai_name" },
            [
              _vm._v(" " + _vm._s(_vm.yuepaiInfo.author.nickname) + " "),
              _vm.yuepaiInfo.author.sex !== null
                ? _c("block", [
                    _vm.yuepaiInfo.author.sex == 1
                      ? _c("image", {
                          staticClass: "yuepai_sex",
                          attrs: {
                            src: "https://yuepai-oss.qubeitech.com/static/images/nan.png",
                          },
                        })
                      : _vm._e(),
                    _vm.yuepaiInfo.author.sex == 0
                      ? _c("image", {
                          staticClass: "yuepai_sex",
                          attrs: {
                            src: "https://yuepai-oss.qubeitech.com/static/images/nv.png",
                          },
                        })
                      : _vm._e(),
                  ])
                : _vm._e(),
            ],
            1
          ),
          _c("view", { staticClass: "yuepai_p" }, [
            _c("text", [
              _vm._v(
                " " +
                  _vm._s(_vm.yuepaiInfo.author.career_list[0]) +
                  " | " +
                  _vm._s(_vm.yuepaiInfo.author.province_name) +
                  " "
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "yuepai_from" }, [
      _c(
        "view",
        { staticClass: "yuepai_from_txt", on: { tap: _vm.goYuepaiDetail } },
        [
          _c("text", { staticClass: "yuepai_from_title" }, [_vm._v("来自")]),
          _vm._v(" " + _vm._s(_vm.yuepaiInfo.abstract)),
        ]
      ),
    ]),
    _c("view", { staticClass: "reg_remark" }, [
      _c("view", { staticClass: "reg_title ub" }, [
        _c("view", { staticClass: "title_icon" }),
        _c("view", { staticClass: "title_text" }, [
          _vm._v(_vm._s(_vm.yuepaiInfo.title)),
        ]),
      ]),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.yuepaiInfo.content,
            expression: "yuepaiInfo.content",
          },
        ],
        attrs: {
          id: "",
          name: "content",
          placeholder: _vm.yuepaiInfo.tips,
          placeholderClass: "placeholder_style",
          disabled: "",
        },
        domProps: { value: _vm.yuepaiInfo.content },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.yuepaiInfo, "content", $event.target.value)
          },
        },
      }),
    ]),
    _c("view", { staticClass: "reg_info" }, [
      _vm.showContact
        ? _c("view", { staticClass: "info_item ub" }, [
            _c("view", { staticClass: "info_type" }, [
              _c("view", { staticClass: "type_icon" }, [
                _c("image", {
                  attrs: {
                    mode: "widthFix",
                    src: "https://yuepai-oss.qubeitech.com/static/images/tonggao/user.png",
                  },
                }),
              ]),
              _c("view", { staticClass: "type_text" }, [_vm._v("联系信息")]),
            ]),
            _c("view", { staticClass: "info_content ub ub-ver ub-f1" }, [
              _c("view", { staticClass: "ub-f1" }),
              _c("view", { staticClass: "content_text" }, [
                _vm._v(
                  "联系人：" +
                    _vm._s(
                      _vm.data.contact.person
                        ? _vm.data.contact.person
                        : "未设置"
                    ) +
                    " "
                ),
                _vm.yuepaiInfo.visited_status == 230
                  ? _c(
                      "text",
                      {
                        staticClass: "copy",
                        on: {
                          tap: function ($event) {
                            return _vm.copy(_vm.data.contact.person)
                          },
                        },
                      },
                      [_vm._v("复制")]
                    )
                  : _vm._e(),
              ]),
              _vm.data.contact.is_mobile
                ? _c("view", { staticClass: "content_text" }, [
                    _vm._v(
                      "手机号：" +
                        _vm._s(
                          _vm.data.contact.mobile
                            ? _vm.data.contact.mobile
                            : "未设置"
                        ) +
                        " "
                    ),
                    _vm.yuepaiInfo.visited_status == 230
                      ? _c(
                          "text",
                          {
                            staticClass: "copy",
                            on: {
                              tap: function ($event) {
                                return _vm.copy(_vm.data.contact.mobile)
                              },
                            },
                          },
                          [_vm._v("复制")]
                        )
                      : _vm._e(),
                  ])
                : _vm._e(),
              _vm.data.contact.is_wechat
                ? _c("view", { staticClass: "content_text" }, [
                    _vm._v(
                      "微信号：" +
                        _vm._s(
                          _vm.data.contact.wechat
                            ? _vm.data.contact.wechat
                            : "未设置"
                        ) +
                        " "
                    ),
                    _vm.yuepaiInfo.visited_status == 230
                      ? _c(
                          "text",
                          {
                            staticClass: "copy",
                            on: {
                              tap: function ($event) {
                                return _vm.copy(_vm.data.contact.wechat)
                              },
                            },
                          },
                          [_vm._v("复制")]
                        )
                      : _vm._e(),
                  ])
                : _vm._e(),
              _vm.data.contact.is_wechat && _vm.yuepaiInfo.visited_status == 230
                ? _c("view", { staticClass: "content_text" }, [
                    _vm._v("微信二维码："),
                    _vm.data.contact.wechat_links
                      ? _c(
                          "text",
                          {
                            staticClass: "qrcode",
                            on: {
                              tap: function ($event) {
                                $event.stopPropagation()
                                return _vm.showQRcode.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("点击查看二维码")]
                        )
                      : _vm._e(),
                  ])
                : _vm._e(),
              _c("view", { staticClass: "ub-f1" }),
            ]),
          ])
        : _vm._e(),
      _vm.showCelebrity
        ? _c("view", { staticClass: "info_item ub" }, [
            _c("text", { staticClass: "hr_icon" }, [
              _vm._v(_vm._s(_vm.media_info.platform_name)),
            ]),
            _c("view", { staticClass: "info_type" }, [
              _c("view", { staticClass: "type_icon" }, [
                _c("image", {
                  attrs: {
                    mode: "widthFix",
                    src: "https://yuepai-oss.qubeitech.com/static/images/tonggao/reg_hongren.png",
                  },
                }),
              ]),
              _c("view", { staticClass: "type_text" }, [_vm._v("红人账号")]),
            ]),
            _vm.data.celebrity.nickname
              ? _c("view", { staticClass: "info_content ub ub-ver ub-f1" }, [
                  _c("view", { staticClass: "ub-f1" }),
                  _c("view", { staticClass: "content_text" }, [
                    _vm._v(
                      "昵称：" + _vm._s(_vm.data.celebrity.nickname) + " "
                    ),
                    _vm.yuepaiInfo.visited_status == 230
                      ? _c(
                          "text",
                          {
                            staticClass: "copy",
                            on: {
                              tap: function ($event) {
                                return _vm.copy(_vm.data.celebrity.nickname)
                              },
                            },
                          },
                          [_vm._v("复制")]
                        )
                      : _vm._e(),
                  ]),
                  _c("view", { staticClass: "content_text" }, [
                    _vm._v(
                      "粉丝：" + _vm._s(_vm.data.celebrity.fans_number) + " "
                    ),
                    _vm.yuepaiInfo.visited_status == 230
                      ? _c(
                          "text",
                          {
                            staticClass: "copy",
                            on: {
                              tap: function ($event) {
                                return _vm.copy(_vm.data.celebrity.fans_number)
                              },
                            },
                          },
                          [_vm._v("复制")]
                        )
                      : _vm._e(),
                  ]),
                  _c("view", { staticClass: "ub-f1" }),
                ])
              : _vm._e(),
          ])
        : _vm._e(),
      _vm.showAddress
        ? _c("view", { staticClass: "info_item ub" }, [
            _c("view", { staticClass: "info_type" }, [
              _c("view", { staticClass: "type_icon" }, [
                _c("image", {
                  attrs: {
                    mode: "widthFix",
                    src: "https://yuepai-oss.qubeitech.com/static/images/tonggao/reg_address.png",
                  },
                }),
              ]),
              _c("view", { staticClass: "type_text" }, [_vm._v("收货地址")]),
            ]),
            _vm.data.address.name
              ? _c("view", { staticClass: "info_content ub ub-ver ub-f1" }, [
                  _c("view", { staticClass: "ub-f1" }),
                  _c("view", { staticClass: "content_address" }, [
                    _vm._v("收件人：" + _vm._s(_vm.data.address.name) + " "),
                    _vm.yuepaiInfo.visited_status == 230
                      ? _c(
                          "text",
                          {
                            staticClass: "copy",
                            on: {
                              tap: function ($event) {
                                return _vm.copy(_vm.data.address.name)
                              },
                            },
                          },
                          [_vm._v("复制")]
                        )
                      : _vm._e(),
                  ]),
                  _c("view", { staticClass: "content_address" }, [
                    _vm._v("手机号：" + _vm._s(_vm.data.address.mobile) + " "),
                    _vm.yuepaiInfo.visited_status == 230
                      ? _c(
                          "text",
                          {
                            staticClass: "copy",
                            on: {
                              tap: function ($event) {
                                return _vm.copy(_vm.data.address.mobile)
                              },
                            },
                          },
                          [_vm._v("复制")]
                        )
                      : _vm._e(),
                  ]),
                  _c("view", { staticClass: "content_address" }, [
                    _vm._v(
                      "地址：" + _vm._s(_vm.data.address.detail_address) + " "
                    ),
                    _vm.yuepaiInfo.visited_status == 230
                      ? _c(
                          "text",
                          {
                            staticClass: "copy",
                            on: {
                              tap: function ($event) {
                                return _vm.copy(_vm.data.address.detail_address)
                              },
                            },
                          },
                          [_vm._v("复制")]
                        )
                      : _vm._e(),
                  ]),
                  _c("view", { staticClass: "ub-f1" }),
                ])
              : _vm._e(),
          ])
        : _vm._e(),
    ]),
    _c("view", { staticClass: "prompt" }, [
      _c("view", [
        _vm._v(_vm._s(_vm.yuepaiInfo.warning)),
        _c("text", { staticClass: "complain", attrs: { catchtap: "jubao" } }, [
          _vm._v("「投诉」"),
        ]),
      ]),
    ]),
    _c(
      "view",
      {
        staticClass: "bottom ub",
        class: _vm.isIphoneX ? "fix-iphonex-button" : "",
      },
      [
        _c("view", { staticClass: "subbtn_bottom" }, [
          _vm.yuepaiInfo.visited_status != 230 &&
          _vm.yuepaiInfo.visited_status != 220
            ? _c(
                "button",
                { attrs: { type: "primary" }, on: { tap: _vm.submit } },
                [_vm._v(" 查看联系方式 ")]
              )
            : _vm.yuepaiInfo.visited_status == 230
            ? _c("button", { attrs: { type: "primary" } }, [
                _vm._v(" 已查看联系方式 "),
              ])
            : _c("button", { attrs: { type: "primary" } }, [_vm._v("已查看")]),
        ]),
      ]
    ),
    _vm.showModel
      ? _c("view", { staticClass: "modal_box_bg" }, [
          _c("view", { staticClass: "modal_content" }, [
            _c("view", [_vm._v(" 微信二维码 ")]),
            _c("image", {
              staticClass: "qrcode-img",
              attrs: { src: _vm.data.contact.wechat_links },
            }),
            _c("image", {
              staticClass: "close-img",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png",
              },
              on: { tap: _vm.closeQRcode },
            }),
            _c("view", { staticClass: "save", on: { tap: _vm.clickSaveImg } }, [
              _vm._v("保存到相册"),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm.contactVisible
      ? _c("view", { staticClass: "modal_box_bg" }, [
          _c("view", { staticClass: "modal_content" }, [
            _c("view", { staticClass: "modal_title" }, [
              _c("view", [_vm._v(" 联系方式 ")]),
              _c("image", {
                staticClass: "close-img",
                attrs: {
                  src: "https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png",
                },
                on: { tap: _vm.contactClose },
              }),
            ]),
            _c("view", { staticClass: "modal_wechat" }, [
              _c("view", [
                _vm._v(" 微信号：" + _vm._s(_vm.data.contact.wechat) + " "),
              ]),
              _c(
                "view",
                {
                  staticClass: "copy",
                  on: {
                    tap: function ($event) {
                      return _vm.copy(_vm.data.contact.wechat)
                    },
                  },
                },
                [_vm._v("复制")]
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

/***/ "./src/packageMsg/pages/inviteDetail/index.scss":
/*!******************************************************!*\
  !*** ./src/packageMsg/pages/inviteDetail/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMsg/pages/inviteDetail/index.vue":
/*!*****************************************************!*\
  !*** ./src/packageMsg/pages/inviteDetail/index.vue ***!
  \*****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/inviteDetail/index.vue");


var config = {"navigationBarTitleText":"报名详情"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMsg/pages/inviteDetail/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMsg/pages/inviteDetail/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/packageMsg/pages/inviteDetail/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/inviteDetail/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMsg/pages/inviteDetail/index.vue?vue&type=template&id=cc2b315a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/packageMsg/pages/inviteDetail/index.vue?vue&type=template&id=cc2b315a&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cc2b315a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=cc2b315a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/inviteDetail/index.vue?vue&type=template&id=cc2b315a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cc2b315a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cc2b315a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMsg/pages/inviteDetail/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map