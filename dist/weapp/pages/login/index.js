(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/index.vue":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/index.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=247e7dd8&scoped=true& */ "./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/login/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "247e7dd8",
  "1c88a76c"
  
)

component.options.__file = "src/pages/login/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/login/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/pages/login/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/index */ "./src/api/index.js");
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _utils_clickThrottle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/clickThrottle */ "./src/utils/clickThrottle.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "login",
  data: function data() {
    return {
      invited_uuid: "",
      bind_type: 0,
      login_type: 0,
      select: false,
      agreementVisible: false,
      visible: false,
      is_bind_phone: 0,
      is_bind_nickname: 0,
      is_bind_avatar: 0,
      token: "",
      userinfor: {},
      userInfo: {
        avatar: "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
        nickname: "",
        phone: ""
      },
      pageshow: "login",
      scene: ""
    };
  },
  methods: {
    selectChange: function selectChange() {
      this.select = !this.select;
    },
    agreementClose: function agreementClose() {
      this.agreementVisible = false;
    },
    agreementAgree: function agreementAgree() {
      this.agreementVisible = false;
      this.select = true;
      this.getUserProfile();
    },
    close: function close() {
      this.visible = false;
    },
    // 可以在模拟器唤起授权 获得用户信息
    getUserProfile: function getUserProfile() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])()) return;

      if (!this.select) {
        this.agreementVisible = true;
        return false;
      }

      var _this = this;

      wx.getUserProfile({
        desc: "用于完善会员资料",
        success: function success(res) {
          wx.login({
            success: function success(res) {
              _this.getWxLogin({
                account: res.code,
                secret: "",
                type: 200
              });
            },
            fail: function fail(err) {
              console.log(err);
            }
          });
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    },
    onGetPhoneNumber: function onGetPhoneNumber(e) {
      var _this = this;

      if ("getPhoneNumber:ok" == e.detail.errMsg) {
        wx.login({
          success: function success(res) {
            _this.getPhone({
              code: res.code,
              encryptedData: e.detail.encryptedData,
              iv: e.detail.iv
            });
          },
          fail: function fail(err) {
            console.log(err);
          }
        });
      }
    },
    cancelLogin: function cancelLogin() {
      wx.navigateBack({
        delta: 1
      });
    },
    onChooseAvatar: function onChooseAvatar(e) {
      console.log(e);
      this.userInfo.avatar = e.detail.avatarUrl;
      this.is_bind_avatar = 1;
    },
    nicknameChange: function nicknameChange(e) {
      console.log(e);

      if (e.detail.value) {
        this.is_bind_nickname = 1;
      }
    },
    finishClick: function finishClick() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])()) return;
      wx.showLoading({
        title: "保存中",
        mask: true
      });
      this.upImgs(this.userInfo.avatar);
    },
    userAgreement: function userAgreement() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageSet/pages/serviceAgreement/index");
    },
    privacy: function privacy() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageSet/pages/privacy/index");
    },
    upImgs: function upImgs(filePath) {
      var _this2 = this;

      if (filePath.indexOf("yuepai-oss") != -1) {
        var params = {
          avatar: filePath,
          nickname: this.userInfo.nickname,
          scene: this.scene
        };

        if (this.invited_uuid) {
          params.invited_uuid = this.invited_uuid;
        }

        this.userRegister(params);
        return false;
      }

      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_4__[/* Base64 */ "a"].encode(token + ":");
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: filePath,
        formData: {
          scr_type: "avatar"
        },
        name: "file",
        header: header,
        success: function success(res) {
          //判断上传的是图片还是视频
          var data = JSON.parse(res.data);

          if (data.code == 200) {
            var _params = {
              avatar: data.data.file1,
              nickname: _this2.userInfo.nickname,
              scene: _this2.scene
            };

            if (_this2.invited_uuid) {
              _params.invited_uuid = _this2.invited_uuid;
            }

            _this2.userRegister(_params);
          } else {
            if (data.error_code == 1004) {
              _this2.getUserProfile();
            }

            wx.showToast({
              title: "上传失败！",
              icon: "none"
            });
          }
        }
      });
    },
    getWxLogin: function getWxLogin(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, token;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* wxlogin */ "gc"])(params);

              case 3:
                res = _context.sent;
                token = res.data.data.token;
                _this3.token = token;
                _this3.userinfor = {
                  avatar: res.data.data.login_status.avatar,
                  nickname: res.data.data.login_status.nickname,
                  uuid: res.data.data.uuid
                };

                if (res.data.data.login_status.is_bind_phone == 1) {
                  wx.setStorageSync("token", _this3.token);
                  wx.setStorageSync("userInfo", _this3.userinfor);
                }

                _this3.userInfo.avatar = res.data.data.login_status.avatar ? res.data.data.login_status.avatar : "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png";
                _this3.userInfo.nickname = res.data.data.login_status.nickname;
                _this3.bind_type = res.data.data.login_status.bind_type;
                _this3.login_type = res.data.data.login_status.login_type;
                _this3.is_bind_phone = res.data.data.login_status.is_bind_phone;
                _this3.is_bind_nickname = res.data.data.login_status.is_bind_nickname;
                _this3.is_bind_avatar = res.data.data.login_status.is_bind_avatar;

                if (_this3.bind_type == 0 && _this3.is_bind_phone == 0 || _this3.bind_type == 0 && _this3.is_bind_phone == 1) {
                  // 绑定手机号
                  _this3.visible = true;
                } else if (_this3.bind_type == 1 && _this3.login_type == 1) {
                  // 注册
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/pages/register/index");
                } else if (_this3.bind_type == 1 && _this3.login_type == 2) {
                  // 跳转首页
                  wx.switchTab({
                    url: "/pages/home/index",
                    success: function success(e) {
                      var page = getCurrentPages().pop();
                      if (page == undefined || page == null) return; // page.onLoad();
                    }
                  });
                }

                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                console.log("失败");

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
      }))();
    },
    getPhone: function getPhone(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* getPhone */ "z"])(params);

              case 3:
                res = _context2.sent;
                _this4.userInfo.phone = res.data.data.mobile;
                _this4.is_bind_phone = 1;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])(res.data.msg);
                wx.setStorageSync("token", _this4.token);
                wx.setStorageSync("userInfo", _this4.userinfor);
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
    },
    userRegister: function userRegister(params) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res, userInfo;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userRegister */ "Wb"])(params);

              case 3:
                res = _context3.sent;
                wx.hideLoading();
                userInfo = wx.getStorageSync("userInfo");
                userInfo.avatar = params.avatar;
                userInfo.nickname = params.nickname;
                wx.setStorageSync("userInfo", userInfo);
                console.log(_this5.bind_type, _this5.login_type);

                if (_this5.login_type == 1) {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/pages/register/index");
                } else {
                  // 跳转首页
                  wx.switchTab({
                    url: "/pages/home/index",
                    success: function success(e) {
                      var page = getCurrentPages().pop();
                      if (page == undefined || page == null) return; // page.onLoad();
                    }
                  });
                }

                _context3.next = 15;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 13]]);
      }))();
    }
  },
  created: function created() {
    this.invited_uuid = wx.getStorageSync("invited_uuid");
    this.scene = wx.getLaunchOptionsSync().scene;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _vm.pageshow == "login"
        ? _c("block", { staticClass: "login" }, [
            _c("view", { staticClass: "login-top" }, [
              _c("image", {
                staticClass: "logo-img",
                attrs: {
                  src: "https://yuepai-oss.qubeitech.com/static/images/logo.png",
                  mode: "aspectFit",
                },
              }),
              _c("view", { staticClass: "desc" }, [
                _c("text", [_vm._v("虾米约拍 - 严肃靠谱模特约拍平台")]),
              ]),
              _c("view", { staticClass: "small-desc" }, [
                _c("text", [_vm._v("MODEL PHOTOGRAPH")]),
              ]),
            ]),
            _c("view", { staticClass: "login-bottom" }, [
              _c(
                "view",
                { staticClass: "login-btn", on: { tap: _vm.getUserProfile } },
                [_c("text", [_vm._v("授权登录")])]
              ),
              _c(
                "view",
                { staticClass: "cancel-btn", on: { tap: _vm.cancelLogin } },
                [_c("text", [_vm._v("取消登录")])]
              ),
              _c("view", { staticClass: "login-tips" }, [
                _vm.select
                  ? _c("image", {
                      staticClass: "select",
                      attrs: {
                        src: "https://yuepai-oss.qubeitech.com/static/images/common/select2_1.png",
                      },
                      on: { tap: _vm.selectChange },
                    })
                  : _c("image", {
                      staticClass: "select",
                      attrs: {
                        src: "https://yuepai-oss.qubeitech.com/static/images/common/select2_0.png",
                      },
                      on: { tap: _vm.selectChange },
                    }),
                _c("text", [_vm._v("我已阅读并同意")]),
                _c(
                  "text",
                  { staticClass: "user-xy", on: { tap: _vm.userAgreement } },
                  [_vm._v("《用户协议》")]
                ),
                _vm._v(" 和 "),
                _c(
                  "text",
                  { staticClass: "user-xy", on: { tap: _vm.privacy } },
                  [_vm._v("《隐私权政策》")]
                ),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm.pageshow == "bindphone"
        ? _c("block", { staticClass: "user_phone" }, [
            _c("view", { staticClass: "get_phone" }, [
              _c(
                "button",
                {
                  staticClass: "phone-btn",
                  attrs: { openType: "getPhoneNumber" },
                  on: { getphonenumber: _vm.onGetPhoneNumber },
                },
                [_vm._v(" 授权绑定手机号 ")]
              ),
            ]),
          ])
        : _vm._e(),
      _vm.visible
        ? _c("view", { staticClass: "login-modal" }, [
            _c("view", { staticClass: "login-box" }, [
              _c("view", { staticClass: "login-title" }, [
                _vm._v(" 请先登录 "),
              ]),
              _c("image", {
                staticClass: "icon_close",
                attrs: {
                  src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_sizer_close.png",
                },
                on: { tap: _vm.close },
              }),
              _c("view", { staticClass: "login-txt" }, [
                _vm._v("完善以下信息以继续"),
              ]),
              _c("view", { staticClass: "login-info" }, [
                _c("view", { staticClass: "login-head" }, [
                  _c(
                    "button",
                    {
                      staticClass: "avatar-wrapper",
                      attrs: { "open-type": "chooseAvatar" },
                      on: { chooseavatar: _vm.onChooseAvatar },
                    },
                    [
                      _c("image", {
                        staticClass: "avatar",
                        attrs: { src: _vm.userInfo.avatar },
                      }),
                    ]
                  ),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.userInfo.nickname,
                        expression: "userInfo.nickname",
                      },
                    ],
                    staticClass: "weui-input",
                    attrs: { type: "nickname", placeholder: "请输入昵称" },
                    domProps: { value: _vm.userInfo.nickname },
                    on: {
                      input: [
                        function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.userInfo,
                            "nickname",
                            $event.target.value
                          )
                        },
                        _vm.nicknameChange,
                      ],
                    },
                  }),
                ]),
                _vm.is_bind_phone == 0
                  ? _c("view", { key: 1, staticClass: "get_phone" }, [
                      _c(
                        "button",
                        {
                          staticClass: "phone-btn",
                          attrs: { openType: "getPhoneNumber" },
                          on: { getphonenumber: _vm.onGetPhoneNumber },
                        },
                        [_vm._v(" 授权绑定手机号 ")]
                      ),
                    ])
                  : _vm.is_bind_avatar == 0
                  ? _c("view", { key: 2, staticClass: "get_avatar" }, [
                      _c(
                        "button",
                        {
                          staticClass: "avatar-btn",
                          attrs: { "open-type": "chooseAvatar" },
                          on: { chooseavatar: _vm.onChooseAvatar },
                        },
                        [_vm._v(" 授权头像 ")]
                      ),
                    ])
                  : _vm.is_bind_nickname == 0
                  ? _c("view", { key: 3, staticClass: "get_nickname" }, [
                      _c("view", { staticClass: "nickname-btn" }, [
                        _vm._v("授权昵称"),
                      ]),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.userInfo.nickname,
                            expression: "userInfo.nickname",
                          },
                        ],
                        staticClass: "nickname-input",
                        attrs: { type: "nickname" },
                        domProps: { value: _vm.userInfo.nickname },
                        on: {
                          input: [
                            function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.userInfo,
                                "nickname",
                                $event.target.value
                              )
                            },
                            _vm.nicknameChange,
                          ],
                        },
                      }),
                    ])
                  : _vm._e(),
                _vm.is_bind_phone == 1 &&
                _vm.is_bind_nickname == 1 &&
                _vm.is_bind_avatar == 1
                  ? _c(
                      "view",
                      {
                        staticClass: "get_finish",
                        on: { tap: _vm.finishClick },
                      },
                      [
                        _c("view", { staticClass: "finish-btn" }, [
                          _vm._v("完成"),
                        ]),
                      ]
                    )
                  : _vm._e(),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm.agreementVisible
        ? _c(
            "view",
            { staticClass: "agreement-model", on: { tap: _vm.agreementClose } },
            [
              _c("view", { staticClass: "agreement-box" }, [
                _c("view", { staticClass: "agreement-title" }, [
                  _vm._v("请阅读并同意以下条款"),
                ]),
                _c("view", { staticClass: "agreement-ct" }, [
                  _c(
                    "text",
                    {
                      staticClass: "user-xy",
                      on: {
                        tap: function ($event) {
                          $event.stopPropagation()
                          return _vm.userAgreement.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("《用户协议》")]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: "user-xy",
                      on: {
                        tap: function ($event) {
                          $event.stopPropagation()
                          return _vm.privacy.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("《隐私权政策》")]
                  ),
                ]),
                _c(
                  "view",
                  {
                    staticClass: "agreement-btn",
                    on: { tap: _vm.agreementAgree },
                  },
                  [_vm._v("同意并继续")]
                ),
              ]),
            ]
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/login/index.scss":
/*!************************************!*\
  !*** ./src/pages/login/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/index.vue":
/*!***********************************!*\
  !*** ./src/pages/login/index.vue ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/index.vue");


var config = {"navigationBarTitleText":"登录"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/login/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/login/index.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/pages/login/index.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/login/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=247e7dd8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/login/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map