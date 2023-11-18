(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/zuopin/zuopin_detail/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/zuopin/zuopin_detail/index.vue":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/zuopin/zuopin_detail/index.vue ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_0709f10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0709f10c&scoped=true& */ "./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=template&id=0709f10c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_0709f10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_0709f10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "0709f10c",
  "c2d7a928"
  
)

component.options.__file = "src/packageAdd/pages/zuopin/zuopin_detail/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/zuopin/zuopin_detail/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/clickThrottle */ "./src/utils/clickThrottle.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "zuopin_detail",
  data: function data() {
    return {
      author_id: "",
      oid: "",
      isIphoneX: false,
      is_vote: 0,
      is_collect: 0,
      is_follow: 0,
      zuopinInfo: {
        author: {
          career_list: []
        },
        statistic: {}
      },
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      shareFriendsTitle: "",
      shareFriendsImg: "",
      shareFriendsPath: ""
    };
  },
  methods: {
    goZhuye: function goZhuye(uuid) {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageMoka/pages/moka/editshow/index?uuid=" + uuid);
    },
    bindended: function bindended() {
      wx.createVideoContext("video").exitFullScreen();
    },
    launchYuepai: function launchYuepai() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;

      if (Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* isLogin */ "b"])()) {
        this.applyVerify({
          source: "note",
          oid: this.oid
        });
      } else {
        wx.redirectTo({
          url: "/pages/login/index"
        });
      }
    },
    subGiveUp: function subGiveUp() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;
      var params = {
        oid: this.oid,
        visited_id: this.author_id,
        page_type: "photo_details",
        page_name: "作品详情",
        event_type: this.is_vote == 1 ? 0 : 1 // 1：点赞；0：取

      };
      this.giveUp(params);
    },
    subRecordCollect: function subRecordCollect() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;
      var params = {
        oid: this.oid,
        visited_id: this.author_id,
        page_type: "photo_details",
        page_name: "作品详情",
        event_type: this.is_collect == 1 ? 0 : 1 // 1：收藏；0：取

      };
      this.recordCollect(params);
    },
    follow: function follow() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;
      this.userFollow({
        follow_uuid: this.zuopinInfo.author_id
      });
    },
    unfollow: function unfollow() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;
      this.userUnfollow({
        unfollow_uuid: this.zuopinInfo.author_id
      });
    },
    photoInfo: function photoInfo(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* photoInfo */ "xb"])(params);

              case 3:
                res = _context.sent;
                _this.zuopinInfo = res.data.data;
                _this.is_vote = res.data.data.statistic.vote_cnt;
                _this.is_collect = res.data.data.statistic.collect_cnt;
                _this.is_follow = res.data.data.action.is_follow;
                _context.next = 12;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    giveUp: function giveUp(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* giveUp */ "I"])(params);

              case 3:
                res = _context2.sent;
                _this2.is_vote = res.data.data.is_vote;
                _this2.zuopinInfo.statistic.vote_cnt = res.data.data.vote_cnt;
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
    },
    recordCollect: function recordCollect(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* recordCollect */ "Mb"])(params);

              case 3:
                res = _context3.sent;
                _this3.is_collect = res.data.data.is_collect;
                _this3.zuopinInfo.statistic.collect_cnt = res.data.data.collect_cnt;
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
    shareInvite: function shareInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* shareInvite */ "Rb"])(params);

              case 3:
                res = _context4.sent;
                _context4.next = 8;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }))();
    },
    shareInviteInfo: function shareInviteInfo(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee5() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* shareInviteInfo */ "Sb"])(params);

              case 3:
                res = _context5.sent;
                _this4.shareTitle = res.data.data.title;
                _this4.shareImg = res.data.data.imageUrl;
                _this4.sharePath = res.data.data.path;
                _context5.next = 11;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }))();
    },
    shareFriendsInvite: function shareFriendsInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee6() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* shareInvite */ "Rb"])(params);

              case 3:
                res = _context6.sent;
                _context6.next = 8;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }))();
    },
    shareFriendsInviteInfo: function shareFriendsInviteInfo(params) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee7() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* shareInviteInfo */ "Sb"])(params);

              case 3:
                res = _context7.sent;
                _this5.shareFriendsTitle = res.data.data.title;
                _this5.shareFriendsImg = res.data.data.imageUrl;
                _this5.shareFriendsPath = res.data.data.path;
                _context7.next = 11;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](0);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 9]]);
      }))();
    },
    userFollow: function userFollow(params) {
      var _this6 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee8() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userFollow */ "pc"])(params);

              case 3:
                res = _context8.sent;
                _this6.is_follow = 1;
                _context8.next = 9;
                break;

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 7]]);
      }))();
    },
    userUnfollow: function userUnfollow(params) {
      var _this7 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee9() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userUnfollow */ "Cc"])(params);

              case 3:
                res = _context9.sent;
                _this7.is_follow = 0;
                _context9.next = 9;
                break;

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);

              case 9:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 7]]);
      }))();
    },
    applyVerify: function applyVerify(params) {
      var _this8 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee10() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* applyVerify */ "l"])(params);

              case 3:
                res = _context10.sent;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageAdd/pages/user/launchyuepai/index?oid=" + _this8.oid + "&source=note");
                _context10.next = 10;
                break;

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](0);

                if (_context10.t0.data.error_code == 21030 || _context10.t0.data.error_code == 21040) {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageAdd/pages/guideTips/index?msg=".concat(_context10.t0.data.msg, "&code=").concat(_context10.t0.data.error_code));
                } else {
                  errortip(_context10.t0.data.msg);
                }

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 7]]);
      }))();
    }
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onShareAppMessage: function onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      type: "wechat",
      oid: this.oid
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
      type: "wechat",
      oid: this.oid
    });
    return {
      title: this.shareFriendsTitle,
      imageUrl: this.shareFriendsImg,
      path: this.shareFriendsPath // 路径，传递参数到指定页面。

    };
  },
  onLoad: function onLoad(options) {
    this.oid = options.oid;
    this.author_id = options.author_id;

    if (options.scene) {
      this.oid = options.scene;
      this.author_id = options.author_id;
    }

    if (this.oid && this.author_id) {
      var params = {
        oid: this.oid,
        author_id: this.author_id
      };
      this.photoInfo(params);
      this.shareInviteInfo({
        source: "share_details",
        type: "wechat",
        oid: this.oid
      });
      this.shareFriendsInviteInfo({
        source: "friends_circle",
        type: "wechat",
        oid: this.oid
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=template&id=0709f10c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=template&id=0709f10c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "zuopin_detail" }, [
    _c("view", { staticClass: "zuopin_top" }, [
      _c("view", { staticClass: "zuopin_top_left" }, [
        _c("image", {
          staticClass: "avatar",
          attrs: { src: _vm.zuopinInfo.author.avatar },
          on: {
            tap: function ($event) {
              return _vm.goZhuye(_vm.zuopinInfo.author.uuid)
            },
          },
        }),
        _c("view", { staticClass: "zuopin_author_info" }, [
          _c(
            "view",
            { staticClass: "zuopin_name" },
            [
              _vm._v(" " + _vm._s(_vm.zuopinInfo.author.nickname) + " "),
              _vm.zuopinInfo.author.sex !== null
                ? _c("block", [
                    _vm.zuopinInfo.author.sex == 1
                      ? _c("image", {
                          staticClass: "zuopin_sex",
                          attrs: {
                            src: "https://yuepai-oss.qubeitech.com/static/images/nan.png",
                          },
                        })
                      : _vm._e(),
                    _vm.zuopinInfo.author.sex == 0
                      ? _c("image", {
                          staticClass: "zuopin_sex",
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
          _c("view", { staticClass: "zuopin_p" }, [
            _c("text", [
              _vm._v(
                " " +
                  _vm._s(_vm.zuopinInfo.author.career_list[0]) +
                  " | " +
                  _vm._s(_vm.zuopinInfo.author.province_name) +
                  " "
              ),
            ]),
            _vm.zuopinInfo.author.is_certify
              ? _c("image", {
                  staticClass: "zuopin_p_img",
                  attrs: {
                    src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_real.png",
                  },
                })
              : _vm._e(),
            _vm.zuopinInfo.author.is_security
              ? _c("image", {
                  staticClass: "zuopin_p_img",
                  attrs: {
                    src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_pledge.png",
                  },
                })
              : _vm._e(),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "zuopin_right" }, [
        _vm.is_follow == 0
          ? _c("image", {
              staticClass: "follow",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/common/follow_red.png",
              },
              on: { tap: _vm.follow },
            })
          : _vm._e(),
        _vm.is_follow == 1
          ? _c("image", {
              staticClass: "follow",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/common/followed_gray.png",
              },
              on: { tap: _vm.unfollow },
            })
          : _vm._e(),
      ]),
    ]),
    _c("view", { staticClass: "zuopin_info" }, [
      _c("view", { staticClass: "zuopin_title" }, [
        _vm._v(" " + _vm._s(_vm.zuopinInfo.title) + " "),
      ]),
      _c("view", { staticClass: "zuopin_content" }, [
        _c("text", [_vm._v(" " + _vm._s(_vm.zuopinInfo.content))]),
      ]),
      _c("view", { staticClass: "zuopin_icon" }, [
        _c("view", { staticClass: "zuopin_icon_box" }, [
          _c("view", { staticClass: "zuopin_icon_title" }, [
            _c("view", { staticClass: "spot" }),
            _c("text", { staticClass: "zuopin_text" }, [
              _vm._v("地点：" + _vm._s(_vm.zuopinInfo.capture_locale)),
            ]),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "zuopin_icon" }, [
        _c("view", { staticClass: "zuopin_icon_box" }, [
          _c("view", { staticClass: "zuopin_icon_title" }, [
            _c("view", { staticClass: "spot" }),
            _c("text", { staticClass: "zuopin_text" }, [
              _vm._v(
                "返片：" + _vm._s(_vm.zuopinInfo.return_photo ? "是" : "否")
              ),
            ]),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "zuopin_icon" }, [
        _c("view", { staticClass: "zuopin_icon_box" }, [
          _c("view", { staticClass: "zuopin_icon_title" }, [
            _c("view", { staticClass: "spot" }),
            _c("text", { staticClass: "zuopin_text" }, [
              _vm._v("设备：" + _vm._s(_vm.zuopinInfo.capture_tools)),
            ]),
          ]),
        ]),
      ]),
      _vm.zuopinInfo.file_type == "picture"
        ? _c(
            "view",
            { staticClass: "zuopin_img" },
            _vm._l(_vm.zuopinInfo.cover, function (item, index) {
              return _c("image", {
                key: index,
                attrs: { mode: "widthFix", src: item },
              })
            }),
            0
          )
        : _vm._e(),
      _vm.zuopinInfo.file_type == "video"
        ? _c("view", [
            _c("video", {
              staticClass: "zuopin_video-width",
              attrs: {
                objectFit: "cover",
                poster: _vm.zuopinInfo.cover && _vm.zuopinInfo.cover[0],
                src:
                  _vm.zuopinInfo.video_cover && _vm.zuopinInfo.video_cover[0],
                id: "video",
              },
              on: { ended: _vm.bindended },
            }),
          ])
        : _vm._e(),
      _c(
        "view",
        { staticClass: "zuopin_tags" },
        _vm._l(_vm.zuopinInfo.style_label, function (styleItem, styleIndex) {
          return _c("view", { key: styleIndex, staticClass: "tag" }, [
            _vm._v(_vm._s(styleItem)),
          ])
        }),
        0
      ),
      _c("view", { staticClass: "zuopin_bottom" }, [
        _c("view", { staticClass: "zuopin_bottom_time" }, [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/common/time.png",
            },
          }),
          _vm._v(" " + _vm._s(_vm.zuopinInfo.date_humanize) + " "),
        ]),
        _c("view", { staticClass: "zuopin_bottom_read" }, [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/user/index/invoice.png",
            },
          }),
          _vm._v(" 阅读 " + _vm._s(_vm.zuopinInfo.statistic.read_cnt) + " "),
        ]),
        _c("view", { staticClass: "zuopin_bottom_dianzan" }, [
          _c("image", {
            attrs: {
              src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_like.png",
            },
          }),
          _vm._v(" 点赞 " + _vm._s(_vm.zuopinInfo.statistic.vote_cnt) + " "),
        ]),
      ]),
    ]),
    _c(
      "view",
      {
        staticClass: "zuopin_fixed_bottom",
        class: _vm.isIphoneX ? "fix-iphonex-button" : "",
      },
      [
        _c("view", { staticClass: "zuopin_fixed_left" }, [
          _c("view", { staticClass: "zuopin_fixed_item" }, [
            _c(
              "button",
              { staticClass: "share-btn", attrs: { "open-type": "share" } },
              [
                _c("image", {
                  staticClass: "share",
                  attrs: {
                    src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_share.png",
                  },
                }),
              ]
            ),
          ]),
          _c(
            "view",
            { staticClass: "zuopin_fixed_item", on: { tap: _vm.subGiveUp } },
            [
              _vm.is_vote
                ? _c("image", {
                    attrs: {
                      src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_likeed.png",
                    },
                  })
                : _c("image", {
                    attrs: {
                      src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_like.png",
                    },
                  }),
              _vm.zuopinInfo.statistic.vote_cnt
                ? _c("text", { staticClass: "vote_cnt" }, [
                    _vm._v(
                      " " + _vm._s(_vm.zuopinInfo.statistic.vote_cnt) + " "
                    ),
                  ])
                : _vm._e(),
            ]
          ),
          _c(
            "view",
            {
              staticClass: "zuopin_fixed_item",
              on: { tap: _vm.subRecordCollect },
            },
            [
              _vm.is_collect
                ? _c("image", {
                    attrs: {
                      src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_favoriteed.png",
                    },
                  })
                : _c("image", {
                    attrs: {
                      src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_favorite.png",
                    },
                  }),
              _vm.zuopinInfo.statistic.collect_cnt
                ? _c("text", { staticClass: "collect_cnt" }, [
                    _vm._v(
                      " " + _vm._s(_vm.zuopinInfo.statistic.collect_cnt) + " "
                    ),
                  ])
                : _vm._e(),
            ]
          ),
        ]),
        _c(
          "view",
          { staticClass: "zuopin_fixed_rt", on: { tap: _vm.launchYuepai } },
          [_vm._v(" 立即约拍 ")]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/zuopin/zuopin_detail/index.scss":
/*!**************************************************************!*\
  !*** ./src/packageAdd/pages/zuopin/zuopin_detail/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/zuopin/zuopin_detail/index.vue":
/*!*************************************************************!*\
  !*** ./src/packageAdd/pages/zuopin/zuopin_detail/index.vue ***!
  \*************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/zuopin/zuopin_detail/index.vue");


var config = {"navigationBarTitleText":"作品详情"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/zuopin/zuopin_detail/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=template&id=0709f10c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=template&id=0709f10c&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0709f10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0709f10c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/zuopin/zuopin_detail/index.vue?vue&type=template&id=0709f10c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0709f10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0709f10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/zuopin/zuopin_detail/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map