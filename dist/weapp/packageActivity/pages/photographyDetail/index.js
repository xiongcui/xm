(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageActivity/pages/photographyDetail/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/photographyDetail/index.vue":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/photographyDetail/index.vue ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1f8f3663_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1f8f3663&scoped=true& */ "./src/packageActivity/pages/photographyDetail/index.vue?vue&type=template&id=1f8f3663&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageActivity/pages/photographyDetail/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_1f8f3663_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_1f8f3663_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "1f8f3663",
  "c021b456"
  
)

component.options.__file = "src/packageActivity/pages/photographyDetail/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/photographyDetail/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/photographyDetail/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageActivity/pages/photographyDetail/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/index.js */ "./src/api/index.js");
/* harmony import */ var _utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/clickThrottle */ "./src/utils/clickThrottle.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "photographyDetail",
  data: function data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500,
      current: 1,
      is_follow: 0,
      is_vote: -1,
      commentmsg: "",
      leavemsg: "",
      leavemsg2: "",
      isIphoneX: false,
      works_oid: "",
      visited_id: "111111",
      uuid: "",
      read_cnt: 0,
      picture: [],
      avatar: "",
      nickname: "",
      title: "",
      desc: "",
      create_at: "",
      commentList: [],
      isFocused: false,
      commentPlaceholder: "",
      show: false,
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      shareFriendsTitle: "",
      shareFriendsImg: "",
      shareFriendsPath: "",
      comment_cnt: 0,
      vote_cnt: 0
    };
  },
  methods: {
    previewImage: function previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src,
        // 图片的地址url
        urls: urls // 预览的地址url

      });
    },
    swiperChange: function swiperChange(e) {
      this.current = e.detail.current + 1;
    },
    follow: function follow() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;

      if (Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* isLogin */ "b"])()) {
        this.userFollow({
          follow_uuid: this.uuid
        });
      } else {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/pages/login/index");
      }
    },
    unfollow: function unfollow() {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;

      if (Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* isLogin */ "b"])()) {
        this.userUnfollow({
          unfollow_uuid: this.uuid
        });
      } else {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/pages/login/index");
      }
    },
    commentFocus: function commentFocus() {
      if (!Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* isLogin */ "b"])()) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/pages/login/index");
      }
    },
    commentInput: function commentInput() {
      if (this.commentmsg.length < 5) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("留言不能少于5字！");
        return false;
      }

      if (this.commentmsg) {
        this.commentCreate({
          works_oid: this.works_oid,
          content: this.commentmsg
        });
      }
    },
    leavemsgInput: function leavemsgInput() {
      if (this.leavemsg2.length < 5) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("留言不能少于5字！");
        this.show = false;
        return false;
      }

      if (this.leavemsg2) {
        this.commentCreate({
          works_oid: this.works_oid,
          parent_oid: this.parent_oid,
          content: this.leavemsg2
        });
      }
    },
    leavemsgChange: function leavemsgChange() {
      if (this.leavemsg.length < 5) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("留言不能少于5字！");
        return false;
      }

      if (this.leavemsg) {
        this.commentCreate({
          works_oid: this.works_oid,
          content: this.leavemsg
        });
      }
    },
    reply: function reply(nickname, oid) {
      if (Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* isLogin */ "b"])()) {
        this.show = true;
        this.parent_oid = oid;
        this.commentPlaceholder = "回复 @" + nickname;
        this.isFocused = true;
      } else {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/pages/login/index");
      }
    },
    likeClick: function likeClick() {
      if (Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* isLogin */ "b"])()) {
        this.worksEvent({
          works_oid: this.works_oid,
          event_type: "vote",
          event_action: this.is_vote == 1 ? -1 : 1
        });
      } else {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/pages/login/index");
      }
    },
    commentCreate: function commentCreate(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* commentCreate */ "w"])(params);

              case 3:
                res = _context.sent;
                _this.parent_oid = "";
                _this.leavemsg = "";
                _this.leavemsg2 = "";
                _this.commentmsg = "";
                _this.show = false;

                _this.commentInfo({
                  works_oid: _this.works_oid
                });

                _context.next = 14;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }))();
    },
    userFollow: function userFollow(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* userFollow */ "pc"])(params);

              case 3:
                res = _context2.sent;
                _this2.is_follow = 1;
                _context2.next = 9;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    userUnfollow: function userUnfollow(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* userUnfollow */ "Cc"])(params);

              case 3:
                res = _context3.sent;
                _this3.is_follow = 0;
                _context3.next = 9;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    worksInfo: function worksInfo(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* worksInfo */ "Gc"])(params);

              case 3:
                res = _context4.sent;
                console.log(res.data);
                _this4.read_cnt = res.data.data.stats.read_cnt;
                _this4.comment_cnt = res.data.data.stats.comment_cnt;
                _this4.vote_cnt = res.data.data.stats.vote_cnt;
                _this4.picture = res.data.data.works.picture;
                _this4.title = res.data.data.works.headline;
                _this4.desc = res.data.data.works.describe;
                _this4.avatar = res.data.data.works.avatar;
                _this4.nickname = res.data.data.works.nickname;
                _this4.uuid = res.data.data.works.uuid;
                _this4.is_follow = res.data.data.works.is_follow;
                _this4.create_at = res.data.data.works.create_at;
                _this4.is_vote = res.data.data.works.is_vote;
                _context4.next = 21;
                break;

              case 19:
                _context4.prev = 19;
                _context4.t0 = _context4["catch"](0);

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 19]]);
      }))();
    },
    worksEvent: function worksEvent(params) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee5() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* worksEvent */ "Fc"])(params);

              case 3:
                res = _context5.sent;
                _this5.is_vote = res.data.data.event_action;

                if (res.data.data.event_action == 1) {
                  _this5.vote_cnt = _this5.vote_cnt + 1;
                } else {
                  _this5.vote_cnt = _this5.vote_cnt - 1;
                }

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
    commentInfo: function commentInfo(params) {
      var _this6 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee6() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* commentInfo */ "x"])(params);

              case 3:
                res = _context6.sent;
                _this6.commentList = res.data.data.items;
                _context6.next = 9;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }))();
    },
    shareInvite: function shareInvite(params) {
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
    shareInviteInfo: function shareInviteInfo(params) {
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
                _this7.shareTitle = res.data.data.title;
                _this7.shareImg = res.data.data.imageUrl;
                _this7.sharePath = res.data.data.path;
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
    },
    shareFriendsInvite: function shareFriendsInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee9() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* shareInvite */ "Rb"])(params);

              case 3:
                res = _context9.sent;
                _context9.next = 8;
                break;

              case 6:
                _context9.prev = 6;
                _context9.t0 = _context9["catch"](0);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 6]]);
      }))();
    },
    shareFriendsInviteInfo: function shareFriendsInviteInfo(params) {
      var _this8 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee10() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* shareInviteInfo */ "Sb"])(params);

              case 3:
                res = _context10.sent;
                _this8.shareFriendsTitle = res.data.data.title;
                _this8.shareFriendsImg = res.data.data.imageUrl;
                _this8.shareFriendsPath = res.data.data.path;
                _context10.next = 11;
                break;

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10["catch"](0);

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 9]]);
      }))();
    }
  },
  onShareAppMessage: function onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      project: "works",
      oid: this.works_oid
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
      project: "works",
      oid: this.works_oid
    });
    return {
      title: this.shareFriendsTitle,
      imageUrl: this.shareFriendsImg,
      path: this.shareFriendsPath // 路径，传递参数到指定页面。

    };
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function onLoad(options) {
    if (options.works_oid) {
      this.works_oid = options.works_oid;
    }

    if (options.visited_id) {
      this.visited_id = options.visited_id;
    }

    if (this.works_oid && this.visited_id) {
      this.worksInfo({
        works_oid: this.works_oid,
        visited_id: this.visited_id
      });
      this.commentInfo({
        works_oid: this.works_oid
      });
      this.shareInviteInfo({
        source: "share_details",
        project: "works",
        oid: this.works_oid
      });
      this.shareFriendsInviteInfo({
        source: "friends_circle",
        project: "works",
        oid: this.works_oid
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/photographyDetail/index.vue?vue&type=template&id=1f8f3663&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/photographyDetail/index.vue?vue&type=template&id=1f8f3663&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "photography-detail" }, [
    _c(
      "view",
      { staticClass: "photography-detail-top" },
      [
        _c("view", { staticClass: "view-num" }, [_vm._v(_vm._s(_vm.read_cnt))]),
        _vm.picture.length
          ? _c("view", { staticClass: "slide-num" }, [
              _vm._v(_vm._s(_vm.current) + "/" + _vm._s(_vm.picture.length)),
            ])
          : _vm._e(),
        _c(
          "swiper",
          {
            staticClass: "swiper",
            attrs: {
              "indicator-dots":
                _vm.picture.length > 2 ? _vm.indicatorDots : false,
              autoplay: _vm.autoplay,
              interval: _vm.interval,
              duration: _vm.duration,
            },
            on: { change: _vm.swiperChange },
          },
          _vm._l(_vm.picture, function (item, index) {
            return _c("swiper-item", { key: index }, [
              _c(
                "view",
                {
                  staticClass: "swiper-item",
                  on: {
                    tap: function ($event) {
                      return _vm.previewImage(item, _vm.picture)
                    },
                  },
                },
                [
                  _c("image", {
                    staticClass: "swiper-item-img",
                    attrs: { mode: "aspectFill", src: item, "lazy-load": true },
                  }),
                ]
              ),
            ])
          }),
          1
        ),
      ],
      1
    ),
    _c("view", { staticClass: "user-info" }, [
      _c("view", { staticClass: "user-info-left" }, [
        _c("view", { staticClass: "user-info-img" }, [
          _c("image", { attrs: { src: _vm.avatar } }),
        ]),
        _c("view", { staticClass: "user-info-box" }, [
          _c("view", { staticClass: "nickname" }, [
            _vm._v(_vm._s(_vm.nickname)),
          ]),
          _c("view", { staticClass: "date" }, [
            _vm._v(_vm._s(_vm.create_at) + " 发布"),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "user-info-rt" }, [
        _vm.is_follow == 0
          ? _c(
              "view",
              { staticClass: "followed_btn_red", on: { tap: _vm.follow } },
              [_vm._v("关注")]
            )
          : _vm._e(),
        _vm.is_follow == 1
          ? _c(
              "view",
              { staticClass: "followed_btn", on: { tap: _vm.unfollow } },
              [_vm._v("取消关注")]
            )
          : _vm._e(),
      ]),
    ]),
    _c("view", { staticClass: "photography-detail-ct" }, [
      _c("view", { staticClass: "photography-detail-title" }, [
        _vm._v(" " + _vm._s(_vm.title) + " "),
      ]),
      _c("view", { staticClass: "photography-detail-desc" }, [
        _vm._v(" " + _vm._s(_vm.desc)),
      ]),
    ]),
    _c("view", { staticClass: "comment" }, [
      _c("view", { staticClass: "comment-total" }, [
        _vm._v("共" + _vm._s(_vm.comment_cnt) + "条评论"),
      ]),
      _c("view", { staticClass: "comment-info" }, [
        _c("image", { attrs: { src: _vm.avatar } }),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.commentmsg,
              expression: "commentmsg",
            },
          ],
          staticClass: "commentmsg",
          attrs: {
            placeholder: "有话要说，快来评论",
            placeholderClass: "placeholder_input",
            type: "text",
          },
          domProps: { value: _vm.commentmsg },
          on: {
            blur: _vm.commentInput,
            focus: _vm.commentFocus,
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.commentmsg = $event.target.value
            },
          },
        }),
      ]),
      _c(
        "view",
        { staticClass: "comment-list" },
        _vm._l(_vm.commentList, function (item, index) {
          return _c(
            "view",
            { key: index, staticClass: "comment-item" },
            [
              _c("view", { staticClass: "comment-box" }, [
                _c("view", { staticClass: "comment-box-left" }, [
                  _c("image", { attrs: { src: item.avatar } }),
                ]),
                _c("view", { staticClass: "comment-box-rt" }, [
                  _c("view", { staticClass: "comment-name" }, [
                    _vm._v(" " + _vm._s(item.nickname) + " "),
                  ]),
                  _c("view", { staticClass: "comment-ct" }, [
                    _c("view", { staticClass: "comment-txt" }, [
                      _vm._v(" " + _vm._s(item.content) + " "),
                    ]),
                    _c("view", { staticClass: "comment-date" }, [
                      _vm._v(_vm._s(item.create_at) + " "),
                    ]),
                    _c(
                      "view",
                      {
                        staticClass: "comment-reply",
                        on: {
                          tap: function ($event) {
                            return _vm.reply(item.nickname, item.oid)
                          },
                        },
                      },
                      [_vm._v("回复")]
                    ),
                  ]),
                ]),
              ]),
              _vm._l(
                item.descendants,
                function (descendantsItem, descendantsIndex) {
                  return _c(
                    "view",
                    {
                      key: descendantsIndex,
                      staticClass: "comment-box child-comment",
                    },
                    [
                      _c("view", { staticClass: "comment-box-left" }, [
                        _c("image", {
                          attrs: { src: descendantsItem.body.avatar },
                        }),
                      ]),
                      _c("view", { staticClass: "comment-box-rt" }, [
                        _c("view", { staticClass: "comment-name" }, [
                          _vm._v(
                            " " + _vm._s(descendantsItem.body.nickname) + " "
                          ),
                        ]),
                        _c(
                          "view",
                          { staticClass: "comment-ct" },
                          [
                            descendantsItem.parent.nickname
                              ? _c("block", [
                                  _c("view", { staticClass: "comment-txt" }, [
                                    _vm._v(" 回复 "),
                                  ]),
                                  _c(
                                    "view",
                                    { staticClass: "comment-reply-nickname" },
                                    [
                                      _vm._v(
                                        _vm._s(descendantsItem.parent.nickname)
                                      ),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                            _c("view", { staticClass: "comment-txt" }, [
                              _vm._v(
                                " " + _vm._s(descendantsItem.body.content) + " "
                              ),
                            ]),
                            _c("view", { staticClass: "comment-date" }, [
                              _vm._v(
                                " " + _vm._s(descendantsItem.body.create_at)
                              ),
                            ]),
                            _c(
                              "view",
                              {
                                staticClass: "comment-reply",
                                on: {
                                  tap: function ($event) {
                                    return _vm.reply(
                                      item.nickname,
                                      descendantsItem.body.oid
                                    )
                                  },
                                },
                              },
                              [_vm._v("回复")]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]
                  )
                }
              ),
            ],
            2
          )
        }),
        0
      ),
      !_vm.show
        ? _c(
            "view",
            {
              staticClass: "comment-fixed",
              class: _vm.isIphoneX ? "fix-iphonex-button" : "",
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.leavemsg,
                    expression: "leavemsg",
                  },
                ],
                staticClass: "leavemsg",
                attrs: {
                  placeholder: "说点什么...",
                  placeholderClass: "placeholder_input",
                  type: "text",
                },
                domProps: { value: _vm.leavemsg },
                on: {
                  blur: _vm.leavemsgChange,
                  focus: _vm.commentFocus,
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.leavemsg = $event.target.value
                  },
                },
              }),
              _c("view", { staticClass: "comment-fixed-rt" }, [
                _c(
                  "view",
                  { staticClass: "comment-btn", on: { tap: _vm.likeClick } },
                  [
                    _vm.is_vote == 1
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
                    _c("text", { staticClass: "comment-btn-num" }, [
                      _vm._v(_vm._s(_vm.vote_cnt)),
                    ]),
                  ]
                ),
                _c("view", { staticClass: "comment-btn" }, [
                  _c("image", {
                    attrs: {
                      src: "https://yuepai-oss.qubeitech.com/static/images/comment.png",
                    },
                  }),
                  _c("text", { staticClass: "comment-btn-num" }, [
                    _vm._v(_vm._s(_vm.comment_cnt)),
                  ]),
                ]),
                _c("view", { staticClass: "comment-btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "share-btn",
                      attrs: { "open-type": "share" },
                    },
                    [
                      _c("view", { staticClass: "share" }, [
                        _c("image", {
                          attrs: {
                            src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_share.png",
                          },
                        }),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]
          )
        : _vm._e(),
      _vm.show
        ? _c("view", { staticClass: "comment-input-fixed" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.leavemsg2,
                  expression: "leavemsg2",
                },
              ],
              staticClass: "leavemsg",
              attrs: {
                placeholder: _vm.commentPlaceholder,
                placeholderClass: "placeholder_input",
                type: "text",
                focus: _vm.isFocused,
              },
              domProps: { value: _vm.leavemsg2 },
              on: {
                blur: _vm.leavemsgInput,
                focus: _vm.commentFocus,
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.leavemsg2 = $event.target.value
                },
              },
            }),
          ])
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageActivity/pages/photographyDetail/index.scss":
/*!****************************************************************!*\
  !*** ./src/packageActivity/pages/photographyDetail/index.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageActivity/pages/photographyDetail/index.vue":
/*!***************************************************************!*\
  !*** ./src/packageActivity/pages/photographyDetail/index.vue ***!
  \***************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/photographyDetail/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageActivity/pages/photographyDetail/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageActivity/pages/photographyDetail/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/packageActivity/pages/photographyDetail/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/photographyDetail/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageActivity/pages/photographyDetail/index.vue?vue&type=template&id=1f8f3663&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./src/packageActivity/pages/photographyDetail/index.vue?vue&type=template&id=1f8f3663&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f8f3663_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1f8f3663&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/photographyDetail/index.vue?vue&type=template&id=1f8f3663&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f8f3663_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f8f3663_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageActivity/pages/photographyDetail/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map