(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageTonggao/pages/detail/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/detail/index.vue":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/detail/index.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_6ad3a66c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6ad3a66c&scoped=true& */ "./src/packageTonggao/pages/detail/index.vue?vue&type=template&id=6ad3a66c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageTonggao/pages/detail/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_6ad3a66c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_6ad3a66c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "6ad3a66c",
  "21479188"
  
)

component.options.__file = "src/packageTonggao/pages/detail/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/detail/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/detail/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageTonggao/pages/detail/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "tonggaoDetail",
  data: function data() {
    return {
      isIphoneX: false,
      oid: "",
      author_id: "",
      is_collect: 0,
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      tonggaoInfo: {
        author: {
          sex: 0,
          is_certify: false
        },
        statistic: {
          collect_cnt: 0
        }
      }
    };
  },
  methods: {
    formatSex: function formatSex(sex) {
      if (sex == 1) {
        return "男";
      } else if (sex == 0) {
        return "女";
      } else {
        return "不限";
      }
    },
    launchYuepai: function launchYuepai() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "b"])("/packageAdd/pages/user/launchyuepai/index?oid=" + this.oid);
    },
    subRecordCollect: function subRecordCollect() {
      var params = {
        oid: this.oid,
        visited_id: this.author_id,
        page_type: "invite_details",
        page_name: "约拍详情",
        event_type: this.is_collect == 1 ? 0 : 1 // 1：收藏；0：取

      };
      this.recordCollect(params);
    },
    noticeInfo: function noticeInfo(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* noticeInfo */ "N"])(params);

              case 3:
                res = _context.sent;
                _this.tonggaoInfo = res.data.data;
                _this.is_collect = res.data.data.action.is_collect;
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    recordCollect: function recordCollect(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* recordCollect */ "Z"])(params);

              case 3:
                res = _context2.sent;
                _this2.is_collect = res.data.data.is_collect;
                _this2.tonggaoInfo.statistic.collect_cnt = res.data.data.collect_cnt;
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
    shareInvite: function shareInvite(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* shareInvite */ "db"])(params);

              case 3:
                res = _context3.sent;
                _context3.next = 8;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }))();
    },
    shareInviteInfo: function shareInviteInfo(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* shareInviteInfo */ "eb"])(params);

              case 3:
                res = _context4.sent;
                _this3.shareTitle = res.data.data.title;
                _this3.shareImg = res.data.data.imageUrl;
                _this3.sharePath = res.data.data.path;
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
    }
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
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
  onLoad: function onLoad(options) {
    this.oid = options.oid;
    this.author_id = options.author_id;
    console.log(options.scene);
    console.log("scene========");

    if (options.scene) {
      // 分享出去-查看详情
      var params = {
        oid: options.scene,
        author_id: options.author_id
      };
      this.noticeInfo(params);
      this.shareInviteInfo({
        source: "share_details",
        type: "wechat",
        oid: options.scene
      });
    }

    if (this.oid && this.author_id) {
      var _params = {
        oid: this.oid,
        author_id: this.author_id
      };
      this.noticeInfo(_params);
      this.shareInviteInfo({
        source: "share_details",
        type: "wechat",
        oid: this.oid
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/detail/index.vue?vue&type=template&id=6ad3a66c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/detail/index.vue?vue&type=template&id=6ad3a66c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "tonggao_detail" }, [
    _c("view", { staticClass: "tonggao_top" }, [
      _c("view", { staticClass: "tonggao_top_left" }, [
        _c("image", {
          staticClass: "avatar",
          attrs: { src: _vm.tonggaoInfo.author.avatar },
        }),
        _c("view", { staticClass: "tonggao_info" }, [
          _c(
            "view",
            { staticClass: "tonggao_name" },
            [
              _vm._v(" " + _vm._s(_vm.tonggaoInfo.author.nickname) + " "),
              _vm.tonggaoInfo.author.sex !== null
                ? _c("block", [
                    _vm.tonggaoInfo.author.sex == 1
                      ? _c("image", {
                          staticClass: "tonggao_sex",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                          },
                        })
                      : _vm._e(),
                    _vm.tonggaoInfo.author.sex == 0
                      ? _c("image", {
                          staticClass: "tonggao_sex",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/nv.png */ "./src/assets/images/nv.png"),
                          },
                        })
                      : _vm._e(),
                  ])
                : _vm._e(),
            ],
            1
          ),
          _c("view", { staticClass: "tonggao_p" }, [
            _c("text", [
              _vm._v(
                " " +
                  _vm._s(
                    _vm.tonggaoInfo.author.career_list &&
                      _vm.tonggaoInfo.author.career_list[0]
                  ) +
                  " | " +
                  _vm._s(_vm.tonggaoInfo.author.province_name) +
                  " "
              ),
            ]),
            _vm.tonggaoInfo.author.is_certify
              ? _c("image", {
                  staticClass: "tonggao_p_img",
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/common/icon_real.png */ "./src/assets/images/common/icon_real.png"),
                  },
                })
              : _c("image", {
                  staticClass: "tonggao_p_img",
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/common/icon_pledge_none.png */ "./src/assets/images/common/icon_pledge_none.png"),
                  },
                }),
            _vm.tonggaoInfo.author.is_security
              ? _c("image", {
                  staticClass: "tonggao_p_img",
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/common/icon_pledge.png */ "./src/assets/images/common/icon_pledge.png"),
                  },
                })
              : _c("image", {
                  staticClass: "tonggao_p_img",
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/common/icon_real_none.png */ "./src/assets/images/common/icon_real_none.png"),
                  },
                }),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "tonggao_right" }, [
        _c("image", {
          staticClass: "follow",
          attrs: {
            src: __webpack_require__(/*! ../../../assets/images/common/follow_red.png */ "./src/assets/images/common/follow_red.png"),
          },
        }),
        _c(
          "button",
          { staticClass: "share-btn", attrs: { "open-type": "share" } },
          [
            _c("image", {
              staticClass: "share",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/common/icon_share.png */ "./src/assets/images/common/icon_share.png"),
              },
            }),
          ]
        ),
      ]),
    ]),
    _c(
      "view",
      { staticClass: "tonggao_box" },
      [
        _c("view", { staticClass: "tonggao_box_title" }, [
          _vm._v(" " + _vm._s(_vm.tonggaoInfo.major_subject) + " "),
          _c("view", { staticClass: "tonggao_price" }, [
            _vm._v(" " + _vm._s(_vm.tonggaoInfo.payment_format)),
          ]),
        ]),
        _vm.tonggaoInfo.second_code == "CS8001"
          ? _c("block", [
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/position.png */ "./src/assets/images/position.png"),
                  },
                }),
                _vm._v(
                  " 面向地区：" +
                    _vm._s(_vm.tonggaoInfo.face_province_name) +
                    " "
                ),
              ]),
              _vm.tonggaoInfo.task_reward_type == 100 ||
              _vm.tonggaoInfo.task_reward_type == 300
                ? _c("view", { staticClass: "tonggao_p" }, [
                    _c("image", {
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/tonggao/zhifu.png */ "./src/assets/images/tonggao/zhifu.png"),
                      },
                    }),
                    _vm._v(
                      " 支付稿费：" +
                        _vm._s(_vm.tonggaoInfo.payment_format) +
                        " "
                    ),
                  ])
                : _vm._e(),
              _vm.tonggaoInfo.task_reward_type == 200 ||
              _vm.tonggaoInfo.task_reward_type == 300
                ? _c("view", { staticClass: "tonggao_p" }, [
                    _c("image", {
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/tonggao/product.png */ "./src/assets/images/tonggao/product.png"),
                      },
                    }),
                    _vm._v(
                      " 赠送产品：" + _vm._s(_vm.tonggaoInfo.reward_good) + " "
                    ),
                  ])
                : _vm._e(),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/pinpai.png */ "./src/assets/images/tonggao/pinpai.png"),
                  },
                }),
                _vm._v(
                  " 店铺名称：" + _vm._s(_vm.tonggaoInfo.store_name) + " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/position.png */ "./src/assets/images/position.png"),
                  },
                }),
                _vm._v(
                  " 店铺地址：" + _vm._s(_vm.tonggaoInfo.store_address) + " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/renshu.png */ "./src/assets/images/tonggao/renshu.png"),
                  },
                }),
                _vm._v(
                  " 招募人数：" + _vm._s(_vm.tonggaoInfo.recruit_number) + " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/fensi.png */ "./src/assets/images/tonggao/fensi.png"),
                  },
                }),
                _vm._v(
                  " 粉丝要求：" + _vm._s(_vm.tonggaoInfo.fans_number) + " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/time.png */ "./src/assets/images/tonggao/time.png"),
                  },
                }),
                _vm._v(
                  " 报名截止：" + _vm._s(_vm.tonggaoInfo.deadline_date) + " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p_bottom" }, [
                _c("view", { staticClass: "list_time" }, [
                  _c("image", {
                    attrs: {
                      src: __webpack_require__(/*! ../../../assets/images/common/time.png */ "./src/assets/images/common/time.png"),
                    },
                  }),
                  _vm._v(" " + _vm._s(_vm.tonggaoInfo.date_humanize) + " "),
                ]),
                _c("view", { staticClass: "list_read" }, [
                  _c("image", {
                    attrs: { src: __webpack_require__(/*! ../../../assets/images/eyes.png */ "./src/assets/images/eyes.png") },
                  }),
                  _vm._v(
                    " 阅读 " + _vm._s(_vm.tonggaoInfo.statistic.read_cnt) + " "
                  ),
                ]),
              ]),
            ])
          : _vm._e(),
        _vm.tonggaoInfo.second_code == "CS8002"
          ? _c("block", [
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/position.png */ "./src/assets/images/position.png"),
                  },
                }),
                _vm._v(
                  " 面向地区：" +
                    _vm._s(_vm.tonggaoInfo.face_province_name) +
                    " "
                ),
              ]),
              _vm.tonggaoInfo.task_reward_type == 100 ||
              _vm.tonggaoInfo.task_reward_type == 300
                ? _c("view", { staticClass: "tonggao_p" }, [
                    _c("image", {
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/tonggao/zhifu.png */ "./src/assets/images/tonggao/zhifu.png"),
                      },
                    }),
                    _vm._v(
                      " 支付稿费：" +
                        _vm._s(_vm.tonggaoInfo.payment_format) +
                        " "
                    ),
                  ])
                : _vm._e(),
              _vm.tonggaoInfo.task_reward_type == 200 ||
              _vm.tonggaoInfo.task_reward_type == 300
                ? _c("view", { staticClass: "tonggao_p" }, [
                    _c("image", {
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/tonggao/product.png */ "./src/assets/images/tonggao/product.png"),
                      },
                    }),
                    _vm._v(
                      " 赠送产品：" + _vm._s(_vm.tonggaoInfo.reward_good) + " "
                    ),
                  ])
                : _vm._e(),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/pinpai.png */ "./src/assets/images/tonggao/pinpai.png"),
                  },
                }),
                _vm._v(
                  " 产品品牌：" + _vm._s(_vm.tonggaoInfo.product_brand) + " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/renshu.png */ "./src/assets/images/tonggao/renshu.png"),
                  },
                }),
                _vm._v(
                  " 招募人数：" + _vm._s(_vm.tonggaoInfo.recruit_number) + " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/fensi.png */ "./src/assets/images/tonggao/fensi.png"),
                  },
                }),
                _vm._v(
                  " 粉丝要求：" + _vm._s(_vm.tonggaoInfo.fans_number) + " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/time.png */ "./src/assets/images/tonggao/time.png"),
                  },
                }),
                _vm._v(
                  " 报名截止：" + _vm._s(_vm.tonggaoInfo.deadline_date) + " "
                ),
              ]),
            ])
          : _vm._e(),
        _vm.tonggaoInfo.second_code != "CS8001" &&
        _vm.tonggaoInfo.second_code != "CS8002"
          ? _c("block", [
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/position.png */ "./src/assets/images/position.png"),
                  },
                }),
                _vm._v(
                  " 面向地区：" +
                    _vm._s(_vm.tonggaoInfo.face_province_name) +
                    " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/user.png */ "./src/assets/images/tonggao/user.png"),
                  },
                }),
                _vm._v(
                  " 性别要求：" +
                    _vm._s(_vm.formatSex(_vm.tonggaoInfo.face_sex)) +
                    " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/time.png */ "./src/assets/images/tonggao/time.png"),
                  },
                }),
                _vm._v(
                  " 报名截止：" + _vm._s(_vm.tonggaoInfo.deadline_date) + " "
                ),
              ]),
              _c("view", { staticClass: "tonggao_p" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../assets/images/tonggao/renshu.png */ "./src/assets/images/tonggao/renshu.png"),
                  },
                }),
                _vm._v(
                  " 招募人数：" + _vm._s(_vm.tonggaoInfo.recruit_number) + " "
                ),
              ]),
            ])
          : _vm._e(),
      ],
      1
    ),
    _c("view", { staticClass: "tonggao_box" }, [
      _c("view", { staticClass: "tonggao_title_left" }, [_vm._v(" 通告详情 ")]),
      _c("view", { staticClass: "tonggao_desc" }, [
        _vm._v(" " + _vm._s(_vm.tonggaoInfo.content) + " "),
      ]),
      _c(
        "view",
        { staticClass: "tonggao_imgbox" },
        _vm._l(_vm.tonggaoInfo.cover, function (item, index) {
          return _c("image", {
            key: index,
            attrs: { mode: "widthFix", src: item },
          })
        }),
        0
      ),
    ]),
    _c("view", { staticClass: "tonggao_box" }, [
      _c("view", { staticClass: "tonggao_title_left" }, [_vm._v(" 联系方式 ")]),
      _c("view", { staticClass: "tonggao_lianxi" }, [
        _vm._v("报名后，等待对方联系方式"),
      ]),
    ]),
    _c("view", { staticClass: "tonggao_box" }, [
      _c("view", { staticClass: "tonggao_title_left" }, [
        _vm._v(" 已报名：" + _vm._s(_vm.tonggaoInfo.statistic.invite_cnt)),
      ]),
      _c(
        "view",
        { staticClass: "yuepai_img" },
        _vm._l(_vm.tonggaoInfo.avatar, function (item, index) {
          return _c("image", { key: index, attrs: { src: item } })
        }),
        0
      ),
    ]),
    _c(
      "view",
      {
        staticClass: "tonggao_fixed_bottom",
        class: _vm.isIphoneX ? "fix-iphonex-button" : "",
      },
      [
        _c("view", { staticClass: "tonggao_fixed_left" }, [
          _c(
            "view",
            {
              staticClass: "tonggao_fixed_item",
              on: { tap: _vm.subRecordCollect },
            },
            [
              _vm.is_collect
                ? _c("image", {
                    attrs: {
                      src: __webpack_require__(/*! ../../../assets/images/common/icon_favoriteed.png */ "./src/assets/images/common/icon_favoriteed.png"),
                    },
                  })
                : _c("image", {
                    attrs: {
                      src: __webpack_require__(/*! ../../../assets/images/common/icon_favorite.png */ "./src/assets/images/common/icon_favorite.png"),
                    },
                  }),
              _vm._v(" " + _vm._s(_vm.tonggaoInfo.statistic.collect_cnt) + " "),
            ]
          ),
        ]),
        _c(
          "view",
          { staticClass: "tonggao_fixed_rt", on: { tap: _vm.launchYuepai } },
          [_vm._v(" 我要报名 ")]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/tonggao/fensi.png":
/*!*********************************************!*\
  !*** ./src/assets/images/tonggao/fensi.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/tonggao/fensi.png";

/***/ }),

/***/ "./src/assets/images/tonggao/pinpai.png":
/*!**********************************************!*\
  !*** ./src/assets/images/tonggao/pinpai.png ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/tonggao/pinpai.png";

/***/ }),

/***/ "./src/assets/images/tonggao/product.png":
/*!***********************************************!*\
  !*** ./src/assets/images/tonggao/product.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/tonggao/product.png";

/***/ }),

/***/ "./src/assets/images/tonggao/renshu.png":
/*!**********************************************!*\
  !*** ./src/assets/images/tonggao/renshu.png ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/tonggao/renshu.png";

/***/ }),

/***/ "./src/assets/images/tonggao/time.png":
/*!********************************************!*\
  !*** ./src/assets/images/tonggao/time.png ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/tonggao/time.png";

/***/ }),

/***/ "./src/assets/images/tonggao/zhifu.png":
/*!*********************************************!*\
  !*** ./src/assets/images/tonggao/zhifu.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/tonggao/zhifu.png";

/***/ }),

/***/ "./src/packageTonggao/pages/detail/index.scss":
/*!****************************************************!*\
  !*** ./src/packageTonggao/pages/detail/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageTonggao/pages/detail/index.vue":
/*!***************************************************!*\
  !*** ./src/packageTonggao/pages/detail/index.vue ***!
  \***************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/detail/index.vue");


var config = {"navigationBarTitleText":"通告详情"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageTonggao/pages/detail/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageTonggao/pages/detail/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/packageTonggao/pages/detail/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/detail/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageTonggao/pages/detail/index.vue?vue&type=template&id=6ad3a66c&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/packageTonggao/pages/detail/index.vue?vue&type=template&id=6ad3a66c&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ad3a66c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6ad3a66c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/detail/index.vue?vue&type=template&id=6ad3a66c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ad3a66c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ad3a66c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageTonggao/pages/detail/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map