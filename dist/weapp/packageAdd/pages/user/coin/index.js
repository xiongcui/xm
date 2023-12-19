(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/coin/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/coin/index.vue":
/*!************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/coin/index.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4ae0bd12&scoped=true& */ "./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "4ae0bd12",
  "64d69c60"
  
)

component.options.__file = "src/packageAdd/pages/user/coin/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/coin/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _components_sign_index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/sign/index.vue */ "./src/components/sign/index.vue");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "coin",
  data: function data() {
    return {
      visible: false,
      hyper_desc: "",
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      commonList: [],
      dailyList: [],
      coinDetails: [],
      type: "cost",
      loading: true,
      coin: 0,
      swiperHeightCt: 0,
      pageNum: 1,
      pageSize: 10,
      signList: [],
      signin_desc: "",
      is_today_signin: 0
    };
  },
  components: {
    sign: _components_sign_index_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
  },
  methods: {
    openUrl: function openUrl(url) {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])(url);
    },
    findDom: function findDom() {
      if (this.currentTab == 0) {
        return ".privilege-list";
      } else if (this.currentTab == 1) {
        return ".task-list-box";
      } else if (this.currentTab == 2) {
        return ".detailed";
      }
    },
    setSwiperHeight: function setSwiperHeight() {
      var _this = this;

      var dom = this.findDom();
      wx.createSelectorQuery().select(dom).boundingClientRect(function (rect) {
        _this.swiperHeightCt = rect.height + "px";
      }).exec();
    },
    close: function close() {
      this.visible = false;
    },
    taskClick: function taskClick(code) {
      switch (code) {
        case "everyday_sign":
          this.submitSign("");
          break;

        case "invite_friends":
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/user/invite/index");
          break;

        case "finish_profile":
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/user/editinfor/index");
          break;

        case "real_certify":
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/user/realnameAuth/index");
          break;

        case "follow_wechat":
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/user/follow/index");
          break;

        case "bind_phone":
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/user/contact/index");
          break;
      }
    },
    // 点击tab切换
    changeItem: function changeItem(index, type) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
        this.type = type;
        this.pageNum = 1;
        this.list = [];
        this.coinDetails = [];

        if (index == 0) {
          this.queryCoinList();
        } else if (index == 1) {
          this.queryRuleList();
        } else {
          this.query();
        }
      }
    },
    bindChange: function bindChange(e) {
      this.currentTab = e.detail.current;
      this.pageNum = 1;
      this.list = [];
      this.coinDetails = [];

      if (e.detail.current == 0) {
        this.type = "cost";
        this.queryCoinList();
      } else if (e.detail.current == 1) {
        this.type = "earn"; // this.queryCoinList();

        this.queryRuleList();
      } else if (e.detail.current == 2) {
        this.type = "";
        this.query();
      }
    },
    query: function query() {
      this.loading = false;
      this.coinItemList({
        page: this.pageNum,
        per_page: this.pageSize
      });
    },
    queryCoinList: function queryCoinList() {
      var params = {
        type: this.type
      };

      if (this.currentTab == 0) {
        params.class_code = "member_service";
      }

      this.coinList(params);
    },
    queryRuleList: function queryRuleList() {
      this.ruleList({
        class_type: "coin"
      });
    },
    goPay: function goPay() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/user/rechargecoin/index");
    },
    immediatelySignin: function immediatelySignin() {
      this.signinLogs("");
    },
    submitSign: function submitSign(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* submitSign */ "pc"])(params);

              case 3:
                res = _context.sent;
                _this2.visible = true;
                _this2.hyper_desc = res.data.data.hyper_desc; // this.queryCoinList();

                _this2.queryRuleList();

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
    signinList: function signinList(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* signinList */ "bc"])(params);

              case 3:
                res = _context2.sent;
                _this3.signin_desc = res.data.data.signin_desc;
                _this3.signList = res.data.data.signin_plan;
                _this3.is_today_signin = res.data.data.is_today_signin;
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
    signinLogs: function signinLogs(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* signinLogs */ "cc"])(params);

              case 3:
                res = _context3.sent;

                _this4.signinLogs("");

                _this4.signinList("");

                _context3.next = 10;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    coinList: function coinList(params) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* coinList */ "w"])(params);

              case 3:
                res = _context4.sent;

                if (res.data.data) {
                  _this5.list = res.data.data;
                } else {
                  _this5.pageNum = 1;
                  _this5.list = [];
                }

                setTimeout(function () {
                  _this5.setSwiperHeight();
                }, 200);
                _context4.next = 10;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    ruleList: function ruleList(params) {
      var _this6 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee5() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* ruleList */ "Ub"])(params);

              case 3:
                res = _context5.sent;

                if (res.data.data) {
                  _this6.commonList = res.data.data.common;
                  _this6.dailyList = res.data.data.daily;
                } else {
                  _this6.pageNum = 1;
                  _this6.commonList = [];
                  _this6.dailyList = [];
                }

                setTimeout(function () {
                  _this6.setSwiperHeight();
                }, 200);
                _context5.next = 10;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }))();
    },
    coinItemList: function coinItemList(params) {
      var _this7 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee6() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* coinItemList */ "v"])(params);

              case 3:
                res = _context6.sent;

                if (!(!res.data.data && _this7.pageNum > 1 || !res.data.data.items.length && _this7.pageNum > 1)) {
                  _context6.next = 7;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("没有更多数据了～");
                return _context6.abrupt("return", false);

              case 7:
                data = res.data.data.items;

                if (data) {
                  _this7.coinDetails = _this7.coinDetails.concat(data);
                } else {
                  _this7.coinDetails = [];
                }

                _this7.loading = true;
                setTimeout(function () {
                  _this7.setSwiperHeight();
                }, 200);
                _context6.next = 15;
                break;

              case 13:
                _context6.prev = 13;
                _context6.t0 = _context6["catch"](0);

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 13]]);
      }))();
    },
    coinAcct: function coinAcct(params) {
      var _this8 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee7() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* coinAcct */ "u"])(params);

              case 3:
                res = _context7.sent;
                _this8.coin = res.data.data.coin;
                _context7.next = 9;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }))();
    },
    shareInvite: function shareInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee8() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* shareInvite */ "Zb"])(params);

              case 3:
                res = _context8.sent;
                _context8.next = 8;
                break;

              case 6:
                _context8.prev = 6;
                _context8.t0 = _context8["catch"](0);

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 6]]);
      }))();
    },
    shareInviteInfo: function shareInviteInfo(params) {
      var _this9 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee9() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* shareInviteInfo */ "ac"])(params);

              case 3:
                res = _context9.sent;
                _this9.shareTitle = res.data.data.title;
                _this9.shareImg = res.data.data.imageUrl;
                _this9.sharePath = res.data.data.path;
                _context9.next = 11;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](0);

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 9]]);
      }))();
    }
  },
  onLoad: function onLoad(options) {
    var that = this; // 获取系统信息

    wx.getSystemInfo({
      success: function success(res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      }
    });
  },
  onShow: function onShow() {
    this.currentTab = 1;
    this.type = "earn";
    this.queryRuleList();
    this.coinAcct("");
    this.signinList("");
    this.shareInviteInfo({
      source: "share_friend",
      type: "wechat"
    });
  },
  onReachBottom: function onReachBottom() {
    if (this.currentTab == 2) {
      if (this.loading) {
        this.pageNum++;
        this.query();
      }
    }
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "coin" },
    [
      _c("view", { staticClass: "coin-bg" }, [
        _c("view", { staticClass: "coin-bg-left" }, [
          _c("view", { staticClass: "coin-tips" }, [_vm._v("当前金币")]),
          _c("view", { staticClass: "coin-total" }, [
            _vm._v(_vm._s(_vm.coin)),
            _c("text", { staticClass: "company" }, [_vm._v("金币")]),
          ]),
        ]),
        _c("view", { staticClass: "coin-bg-rt", on: { tap: _vm.goPay } }, [
          _vm._v(" 充值金币 "),
        ]),
      ]),
      _c("view", { staticClass: "signin" }, [
        _c("view", { staticClass: "signin-top" }, [
          _c("view", { staticClass: "signin-title" }, [
            _c("view", { staticClass: "signin-lable" }, [_vm._v("签到领币")]),
            _c("view", { staticClass: "signin-tips" }, [_vm._v("提醒我签到")]),
          ]),
          _c("view", { staticClass: "signin-p" }, [
            _vm._v(" " + _vm._s(_vm.signin_desc) + " "),
          ]),
        ]),
        _c(
          "view",
          { staticClass: "signin-list" },
          _vm._l(_vm.signList, function (item, index) {
            return _c("view", { key: index, staticClass: "signin-box" }, [
              _c("view", { staticClass: "signin-box-top" }, [
                _c("text", { staticClass: "signin-num" }, [
                  _vm._v(_vm._s(item.coin)),
                ]),
                item.is_signin == 1
                  ? _c("image", {
                      attrs: {
                        src: "https://yuepai-oss.qubeitech.com/static/images/sign.png",
                      },
                    })
                  : item.is_signin == 0 && index < _vm.signList.length - 1
                  ? _c("image", {
                      attrs: {
                        src: "https://yuepai-oss.qubeitech.com/static/images/signin.png",
                      },
                    })
                  : index == _vm.signList.length - 1
                  ? _c("image", {
                      attrs: {
                        src: "https://yuepai-oss.qubeitech.com/static/images/red-envelope.png",
                      },
                    })
                  : _vm._e(),
              ]),
              _c("view", { staticClass: "signin-box-bt" }, [
                _vm._v(" " + _vm._s(item.name) + " "),
              ]),
            ])
          }),
          0
        ),
        _vm.is_today_signin
          ? _c("view", { staticClass: "immediately-sign" }, [
              _vm._v(" 今日已签 "),
            ])
          : _c(
              "view",
              {
                staticClass: "immediately-signin",
                on: { tap: _vm.immediatelySignin },
              },
              [_vm._v(" 立即签到 ")]
            ),
      ]),
      _c("view", { staticClass: "coin-content" }, [
        _c("view", { staticClass: "tab" }, [
          _c(
            "view",
            {
              staticClass: "tab-item",
              class: _vm.currentTab == 0 ? "on" : "",
              on: {
                tap: function ($event) {
                  return _vm.changeItem(0, "cost")
                },
              },
            },
            [_vm._v("金币用途")]
          ),
          _c(
            "view",
            {
              staticClass: "tab-item",
              class: _vm.currentTab == 1 ? "on" : "",
              on: {
                tap: function ($event) {
                  return _vm.changeItem(1, "earn")
                },
              },
            },
            [_vm._v("领取金币")]
          ),
          _c(
            "view",
            {
              staticClass: "tab-item",
              class: _vm.currentTab == 2 ? "on" : "",
              on: {
                tap: function ($event) {
                  return _vm.changeItem(2)
                },
              },
            },
            [_vm._v("金币明细")]
          ),
        ]),
        _c(
          "view",
          { staticClass: "content" },
          [
            _c(
              "swiper",
              {
                staticClass: "swiper-box",
                style: {
                  height: _vm.swiperHeightCt ? _vm.swiperHeightCt : "100vh",
                },
                attrs: { current: _vm.currentTab, duration: "300" },
                on: { change: _vm.bindChange },
              },
              [
                _c("swiper-item", [
                  _c(
                    "view",
                    { staticClass: "privilege-list" },
                    [
                      _c("view", { staticClass: "privilege-box" }, [
                        _c("view", { staticClass: "service blod" }, [
                          _vm._v("特权服务"),
                        ]),
                        _c("view", { staticClass: "vip blod" }, [
                          _vm._v("会员"),
                        ]),
                        _c("view", { staticClass: "novip blod" }, [
                          _vm._v("非会员"),
                        ]),
                      ]),
                      _vm._l(_vm.list, function (item, index) {
                        return _c(
                          "view",
                          { key: index, staticClass: "privilege-box" },
                          [
                            _c("view", { staticClass: "service" }, [
                              _vm._v(_vm._s(item.rule_desc)),
                            ]),
                            _c("view", { staticClass: "vip red" }, [
                              _vm._v(_vm._s(item.member_coin)),
                            ]),
                            _c("view", { staticClass: "novip red" }, [
                              _vm._v(_vm._s(item.common_coin)),
                            ]),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
                _c("swiper-item", [
                  _c(
                    "view",
                    { staticClass: "task-list-box" },
                    [
                      _vm.dailyList.length
                        ? _c("block", [
                            _c("view", { staticClass: "task-split" }, [
                              _vm._v("/ 日常任务 /"),
                            ]),
                            _c(
                              "view",
                              { staticClass: "task-list" },
                              _vm._l(_vm.dailyList, function (item, index) {
                                return _c(
                                  "view",
                                  { key: index, staticClass: "task-box" },
                                  [
                                    _c("view", { staticClass: "task-left" }, [
                                      _c(
                                        "view",
                                        { staticClass: "task-title-box" },
                                        [
                                          _c(
                                            "text",
                                            { staticClass: "task-tag" },
                                            [_vm._v(_vm._s(item.limit_tips))]
                                          ),
                                          _c(
                                            "text",
                                            { staticClass: "task-title" },
                                            [_vm._v(_vm._s(item.order_name))]
                                          ),
                                        ]
                                      ),
                                      _c(
                                        "view",
                                        { staticClass: "task-label" },
                                        [
                                          _c(
                                            "view",
                                            { staticClass: "coin-box" },
                                            [
                                              _c(
                                                "text",
                                                { staticClass: "coin-tag" },
                                                [_vm._v("金币")]
                                              ),
                                              _c(
                                                "text",
                                                { staticClass: "coin-num" },
                                                [
                                                  _vm._v(
                                                    _vm._s(item.common_coin)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _c(
                                            "view",
                                            { staticClass: "growup-box" },
                                            [
                                              _c(
                                                "text",
                                                { staticClass: "growup-tag" },
                                                [_vm._v("成长值")]
                                              ),
                                              _c(
                                                "text",
                                                { staticClass: "growup-num" },
                                                [
                                                  _vm._v(
                                                    "普通：" +
                                                      _vm._s(item.common_growth)
                                                  ),
                                                ]
                                              ),
                                              _c(
                                                "text",
                                                { staticClass: "growup-num" },
                                                [
                                                  _vm._v(
                                                    "会员：" +
                                                      _vm._s(item.member_growth)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      item.is_schedule
                                        ? _c(
                                            "view",
                                            { staticClass: "task-schedule" },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(item.schedule_desc) +
                                                  " "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _c("view", { staticClass: "task-rt" }, [
                                      item.finish_status
                                        ? _c(
                                            "text",
                                            { staticClass: "completed" },
                                            [_vm._v(_vm._s(item.finish_label))]
                                          )
                                        : _c(
                                            "text",
                                            {
                                              staticClass: "tocomplete",
                                              on: {
                                                tap: function ($event) {
                                                  return _vm.openUrl(
                                                    item.redirect_url
                                                  )
                                                },
                                              },
                                            },
                                            [_vm._v(_vm._s(item.finish_label))]
                                          ),
                                    ]),
                                  ]
                                )
                              }),
                              0
                            ),
                          ])
                        : _vm._e(),
                      _vm.commonList.length
                        ? _c("block", [
                            _c("view", { staticClass: "task-split" }, [
                              _vm._v("/ 新手任务 /"),
                            ]),
                            _c(
                              "view",
                              { staticClass: "task-list" },
                              _vm._l(_vm.commonList, function (item, index) {
                                return _c(
                                  "view",
                                  { key: index, staticClass: "task-box" },
                                  [
                                    _c("view", { staticClass: "task-left" }, [
                                      _c(
                                        "view",
                                        { staticClass: "task-title-box" },
                                        [
                                          _c(
                                            "text",
                                            { staticClass: "task-tag" },
                                            [_vm._v(_vm._s(item.limit_tips))]
                                          ),
                                          _c(
                                            "text",
                                            { staticClass: "task-title" },
                                            [_vm._v(_vm._s(item.order_name))]
                                          ),
                                        ]
                                      ),
                                      _c(
                                        "view",
                                        { staticClass: "task-label" },
                                        [
                                          _c(
                                            "view",
                                            { staticClass: "coin-box" },
                                            [
                                              _c(
                                                "text",
                                                { staticClass: "coin-tag" },
                                                [_vm._v("金币")]
                                              ),
                                              _c(
                                                "text",
                                                { staticClass: "coin-num" },
                                                [
                                                  _vm._v(
                                                    _vm._s(item.common_coin)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _c(
                                            "view",
                                            { staticClass: "growup-box" },
                                            [
                                              _c(
                                                "text",
                                                { staticClass: "growup-tag" },
                                                [_vm._v("成长值")]
                                              ),
                                              _c(
                                                "text",
                                                { staticClass: "growup-num" },
                                                [
                                                  _vm._v(
                                                    "普通：" +
                                                      _vm._s(item.common_growth)
                                                  ),
                                                ]
                                              ),
                                              _c(
                                                "text",
                                                { staticClass: "growup-num" },
                                                [
                                                  _vm._v(
                                                    "会员：" +
                                                      _vm._s(item.member_growth)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      item.is_schedule
                                        ? _c(
                                            "view",
                                            { staticClass: "task-schedule" },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(item.schedule_desc) +
                                                  " "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _c("view", { staticClass: "task-rt" }, [
                                      item.finish_status
                                        ? _c(
                                            "text",
                                            { staticClass: "completed" },
                                            [_vm._v(_vm._s(item.finish_label))]
                                          )
                                        : _c(
                                            "text",
                                            {
                                              staticClass: "tocomplete",
                                              on: {
                                                tap: function ($event) {
                                                  return _vm.openUrl(
                                                    item.redirect_url
                                                  )
                                                },
                                              },
                                            },
                                            [_vm._v(_vm._s(item.finish_label))]
                                          ),
                                    ]),
                                  ]
                                )
                              }),
                              0
                            ),
                          ])
                        : _vm._e(),
                      !_vm.commonList.length && !_vm.dailyList.length
                        ? _c("view", { staticClass: "none-data" }, [
                            _c("image", {
                              staticClass: "none-img",
                              attrs: {
                                src: "https://yuepai-oss.qubeitech.com/static/images/common/none.png",
                                mode: "aspectFill",
                              },
                            }),
                            _c("view", [_vm._v("当前暂无信息哦～")]),
                          ])
                        : _vm._e(),
                    ],
                    1
                  ),
                ]),
                _c(
                  "swiper-item",
                  [
                    _vm.coinDetails.length
                      ? _c("block", [
                          _c(
                            "view",
                            { staticClass: "detailed" },
                            _vm._l(_vm.coinDetails, function (item, index) {
                              return _c(
                                "view",
                                { key: index, staticClass: "detailed-list" },
                                [
                                  _c("view", { staticClass: "coin-task" }, [
                                    _c("view", { staticClass: "task-info" }, [
                                      _c("view", [
                                        _c(
                                          "text",
                                          { staticClass: "task-title" },
                                          [_vm._v(_vm._s(item.order_name))]
                                        ),
                                      ]),
                                      _c("view", { staticClass: "task-tips" }, [
                                        _vm._v(_vm._s(item.success_time)),
                                      ]),
                                    ]),
                                    _c("view", { staticClass: "task-num" }, [
                                      _vm._v(_vm._s(item.curr_coin)),
                                    ]),
                                  ]),
                                ]
                              )
                            }),
                            0
                          ),
                        ])
                      : _c("view", { staticClass: "none-data" }, [
                          _c("image", {
                            staticClass: "none-img",
                            attrs: {
                              src: "https://yuepai-oss.qubeitech.com/static/common/none.png",
                              mode: "aspectFill",
                            },
                          }),
                          _c("view", [_vm._v("当前暂无信息哦～")]),
                        ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
      ]),
      _c("sign", {
        attrs: { visible: _vm.visible, msg: _vm.hyper_desc },
        on: { close: _vm.close },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/coin/index.scss":
/*!***************************************************!*\
  !*** ./src/packageAdd/pages/user/coin/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/coin/index.vue":
/*!**************************************************!*\
  !*** ./src/packageAdd/pages/user/coin/index.vue ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/coin/index.vue");


var config = {"navigationBarTitleText":"我的金币"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/coin/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/coin/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4ae0bd12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/coin/index.vue?vue&type=template&id=4ae0bd12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ae0bd12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/coin/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map