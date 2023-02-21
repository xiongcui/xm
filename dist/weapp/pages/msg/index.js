(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/msg/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/msg/index.vue":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/msg/index.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_7f418cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7f418cf0&scoped=true& */ "./src/pages/msg/index.vue?vue&type=template&id=7f418cf0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/msg/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_7f418cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_7f418cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "7f418cf0",
  "327bafe2"
  
)

component.options.__file = "src/pages/msg/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/msg/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/msg/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/index */ "./src/api/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/pages/msg/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "msg",
  data: function data() {
    return {
      invite_cnt: 0,
      notice_cnt: 0,
      vote_visitor_cnt: 0,
      is_follow_gzh: 0,
      list: []
    };
  },
  methods: {
    openUrl: function openUrl(type) {
      switch (type) {
        case 1:
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "b"])("/packageMsg/pages/livevisitor/index");
          break;

        case 2:
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "b"])("/packageMsg/pages/invite/index");
          break;

        case 3:
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "b"])("/packageMsg/pages/signup/index");
          break;

        case 5:
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "b"])("/packageMsg/pages/msgList/index");
          break;
      }
    },
    toopen: function toopen() {
      wx.showModal({
        title: "温馨提示",
        content: "微信关注【虾米约拍】公众号，即可开启消息通知。关注还可获得5个金豆奖励哦",
        success: function success(res) {
          if (res.confirm) {
            Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "b"])("/packageAdd/pages/user/follow/index");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    gochat: function gochat(row) {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "b"])("/packageMsg/pages/chat/index?uuid=" + row.from_account_profile.uuid + "&nickname=" + row.from_account_profile.nick_name + "&avatar=" + row.from_account_profile.face_url);
    },
    notifyNumber: function notifyNumber(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* notifyNumber */ "Q"])(params);

              case 3:
                res = _context.sent;
                _this.invite_cnt = res.data.data.invite_cnt;
                _this.notice_cnt = res.data.data.notice_cnt;
                _this.vote_visitor_cnt = res.data.data.vote_visitor_cnt;
                _this.is_follow_gzh = res.data.data.is_follow_gzh;

                if (res.data.data.is_notify_warn) {
                  wx.showTabBarRedDot({
                    index: 3
                  });
                } else {
                  wx.hideTabBarRedDot({
                    index: 3
                  });
                }

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
    msgList: function msgList(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* msgList */ "K"])(params);

              case 3:
                res = _context2.sent;
                console.log(res);
                _this2.list = res.data.data.items;
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
  onShow: function onShow() {
    this.notifyNumber("");
    this.msgList("");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/msg/index.vue?vue&type=template&id=7f418cf0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/msg/index.vue?vue&type=template&id=7f418cf0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    { staticClass: "msg-box" },
    [
      _vm.is_follow_gzh == 0
        ? _c("view", { staticClass: "msg-tips" }, [
            _c("view", { staticClass: "msg-tips-left" }, [
              _vm._v(" 开启推送通知，及时接收约拍通知 "),
            ]),
            _c(
              "view",
              { staticClass: "msg-tips-rt", on: { tap: _vm.toopen } },
              [_vm._v(" 去开启 > ")]
            ),
          ])
        : _vm._e(),
      _c("view", { staticClass: "msg-icon" }, [
        _c(
          "view",
          {
            staticClass: "msg-icon-item",
            on: {
              tap: function ($event) {
                return _vm.openUrl(1)
              },
            },
          },
          [
            _c("image", {
              attrs: { src: __webpack_require__(/*! ../../assets/images/msg/fabulous.png */ "./src/assets/images/msg/fabulous.png") },
            }),
            _c("text", [_vm._v("赞与访客")]),
            _vm.vote_visitor_cnt > 0
              ? _c("view", { staticClass: "msg-num" }, [
                  _vm._v(_vm._s(_vm.vote_visitor_cnt)),
                ])
              : _vm._e(),
          ]
        ),
        _c(
          "view",
          {
            staticClass: "msg-icon-item",
            on: {
              tap: function ($event) {
                return _vm.openUrl(2)
              },
            },
          },
          [
            _c("image", {
              attrs: { src: __webpack_require__(/*! ../../assets/images/msg/yuepai.png */ "./src/assets/images/msg/yuepai.png") },
            }),
            _c("text", [_vm._v("收到约拍")]),
            _vm.invite_cnt > 0
              ? _c("view", { staticClass: "msg-num" }, [
                  _vm._v(_vm._s(_vm.invite_cnt)),
                ])
              : _vm._e(),
          ]
        ),
        _c(
          "view",
          {
            staticClass: "msg-icon-item",
            on: {
              tap: function ($event) {
                return _vm.openUrl(3)
              },
            },
          },
          [
            _c("image", {
              attrs: { src: __webpack_require__(/*! ../../assets/images/msg/baoming.png */ "./src/assets/images/msg/baoming.png") },
            }),
            _c("text", [_vm._v("收到报名")]),
            _vm.notice_cnt > 0
              ? _c("view", { staticClass: "msg-num" }, [
                  _vm._v(_vm._s(_vm.notice_cnt)),
                ])
              : _vm._e(),
          ]
        ),
        _c("view", { staticClass: "msg-icon-item" }, [
          _c("image", {
            attrs: { src: __webpack_require__(/*! ../../assets/images/msg/contact.png */ "./src/assets/images/msg/contact.png") },
          }),
          _c("text", [_vm._v("收到联系")]),
        ]),
      ]),
      _c(
        "view",
        {
          staticClass: "msg-notification",
          on: {
            tap: function ($event) {
              return _vm.openUrl(5)
            },
          },
        },
        [
          _c("view", { staticClass: "notification-left" }, [
            _c("image", {
              attrs: { src: __webpack_require__(/*! ../../assets/images/msg/xiaoxi.png */ "./src/assets/images/msg/xiaoxi.png") },
            }),
          ]),
          _c("view", { staticClass: "notification-rt" }, [
            _c("view", { staticClass: "notification-title" }, [
              _c("text", [_vm._v("消息通知")]),
              _c("text", { staticClass: "notification-time" }, [
                _vm._v("昨天"),
              ]),
            ]),
            _c("view", { staticClass: "notification-txt" }, [
              _vm._v("您有一条审核通知"),
            ]),
          ]),
        ]
      ),
      _vm._l(_vm.list, function (item, index) {
        return _c(
          "view",
          {
            key: index,
            staticClass: "msg-notification",
            on: {
              tap: function ($event) {
                return _vm.gochat(item)
              },
            },
          },
          [
            _c("view", { staticClass: "notification-left" }, [
              _c("image", {
                attrs: { src: item.from_account_profile.face_url },
              }),
            ]),
            _c("view", { staticClass: "notification-rt" }, [
              _c("view", { staticClass: "notification-title" }, [
                _c("text", [
                  _vm._v(_vm._s(item.from_account_profile.nick_name)),
                ]),
                _c("text", { staticClass: "notification-time" }, [
                  _vm._v(_vm._s(item.msg_time_humanize)),
                ]),
              ]),
              _c("view", { staticClass: "notification-txt" }, [
                _vm._v(_vm._s(item.msg_content)),
              ]),
            ]),
          ]
        )
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/msg/baoming.png":
/*!*******************************************!*\
  !*** ./src/assets/images/msg/baoming.png ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/msg/baoming.png";

/***/ }),

/***/ "./src/assets/images/msg/contact.png":
/*!*******************************************!*\
  !*** ./src/assets/images/msg/contact.png ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/msg/contact.png";

/***/ }),

/***/ "./src/assets/images/msg/fabulous.png":
/*!********************************************!*\
  !*** ./src/assets/images/msg/fabulous.png ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/msg/fabulous.png";

/***/ }),

/***/ "./src/assets/images/msg/xiaoxi.png":
/*!******************************************!*\
  !*** ./src/assets/images/msg/xiaoxi.png ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/msg/xiaoxi.png";

/***/ }),

/***/ "./src/assets/images/msg/yuepai.png":
/*!******************************************!*\
  !*** ./src/assets/images/msg/yuepai.png ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/msg/yuepai.png";

/***/ }),

/***/ "./src/pages/msg/index.scss":
/*!**********************************!*\
  !*** ./src/pages/msg/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/msg/index.vue":
/*!*********************************!*\
  !*** ./src/pages/msg/index.vue ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/msg/index.vue");


var config = {"navigationBarTitleText":"消息中心"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/msg/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/msg/index.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/pages/msg/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/msg/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/msg/index.vue?vue&type=template&id=7f418cf0&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/pages/msg/index.vue?vue&type=template&id=7f418cf0&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7f418cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7f418cf0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/msg/index.vue?vue&type=template&id=7f418cf0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7f418cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7f418cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/msg/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map