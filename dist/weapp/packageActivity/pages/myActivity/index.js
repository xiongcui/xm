(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageActivity/pages/myActivity/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/myActivity/index.vue":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/myActivity/index.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_6473fafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6473fafc&scoped=true& */ "./src/packageActivity/pages/myActivity/index.vue?vue&type=template&id=6473fafc&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageActivity/pages/myActivity/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_6473fafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_6473fafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "6473fafc",
  "1e6ca7ca"
  
)

component.options.__file = "src/packageActivity/pages/myActivity/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/myActivity/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/myActivity/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageActivity/pages/myActivity/index.scss");
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




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "myActivity",
  data: function data() {
    return {
      visible: false,
      weChatVisible: false,
      pageNum: 1,
      pageSize: 10,
      list: [],
      loading: true,
      sessionList: [],
      memberList: [],
      qrcode: ""
    };
  },
  methods: {
    goSunbathing: function goSunbathing(oid) {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageActivity/pages/sunbathing/index?oid=" + oid);
    },
    goZhuye: function goZhuye(uuid) {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageMoka/pages/moka/editshow/index?uuid=" + uuid);
    },
    goDetail: function goDetail(uuid) {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageActivity/pages/myActivityDetail/index?uuid=" + uuid);
    },
    weChatClose: function weChatClose() {
      this.weChatVisible = false;
    },
    close: function close() {
      this.visible = false;
    },
    more: function more(apply_oid) {
      var _this = this;

      wx.showActionSheet({
        itemList: ["取消报名", "删除订单"],
        success: function success(res) {
          switch (res.tapIndex) {
            case 0:
              console.log("取消报名");
              wx.showModal({
                title: "温馨提示",
                content: "取消后将无法参与活动【退款订单审核通过后将原路返回】",
                confirmColor: "#108EE9",
                confirmText: "再考虑下",
                cancelText: "坚决取消",
                success: function success(res) {
                  if (res.confirm) {} else if (res.cancel) {
                    console.log("用户点击取消");

                    _this.myActivityEvent({
                      event_type: -100,
                      apply_oid: apply_oid
                    });
                  }
                }
              });
              break;

            case 1:
              console.log("删除订单");
              wx.showModal({
                title: "温馨提示",
                content: "删除后将无法查看订单状态",
                confirmColor: "#108EE9",
                success: function success(res) {
                  if (res.confirm) {
                    _this.myActivityEvent({
                      event_type: -200,
                      apply_oid: apply_oid
                    });
                  } else if (res.cancel) {
                    console.log("用户点击取消");
                  }
                }
              });
              break;
          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    membersClick: function membersClick(oid) {
      if (!Object(_utils_clickThrottle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])()) return;
      this.applyMember({
        sport_oid: oid
      });
    },
    addOrganizer: function addOrganizer(src) {
      this.qrcode = src;
      this.weChatVisible = true;
    },
    // 加载更多
    onMore: function onMore() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading(); //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框

      wx.showLoading({
        title: "数据加载中..."
      });
      this.loading = false;
      this.query("more");
    },
    query: function query(type) {
      if (type == "init") this.pageNum = 1;
      this.myActivityList({
        page: this.pageNum,
        per_page: this.pageSize
      }, type);
    },
    applyMember: function applyMember(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* applyMember */ "j"])(params);

              case 3:
                res = _context.sent;
                _this2.visible = true;
                _this2.memberList = res.data.data;
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
    myActivityEvent: function myActivityEvent(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* myActivityEvent */ "qb"])(params);

              case 3:
                res = _context2.sent;

                if (params.event_type == -100) {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("取消报名成功");
                } else if (params.event_type == -200) {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("删除订单成功");
                }

                _this3.pageNum = 1;
                _this3.list = [];

                _this3.query("init");

                _context2.next = 12;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }))();
    },
    myActivityList: function myActivityList(params, type) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* myActivityList */ "rb"])(params);

              case 3:
                res = _context3.sent;
                //隐藏loading 提示框
                wx.hideLoading(); //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context3.next = 12;
                  break;
                }

                _this4.list = res.data.data.items;
                _this4.loading = true;
                _context3.next = 20;
                break;

              case 12:
                if (!(type == "more")) {
                  _context3.next = 20;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context3.next = 17;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("没有更多数据了～");
                _this4.loading = true;
                return _context3.abrupt("return", false);

              case 17:
                data = res.data.data.items;
                _this4.list = _this4.list.concat(data);
                _this4.loading = true;

              case 20:
                _context3.next = 24;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](0);

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 22]]);
      }))();
    }
  },
  created: function created() {
    this.query("init");
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.query("init");
  },
  onReachBottom: function onReachBottom() {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;

    if (this.loading) {
      this.onMore();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/myActivity/index.vue?vue&type=template&id=6473fafc&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/myActivity/index.vue?vue&type=template&id=6473fafc&scoped=true& ***!
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
  return _c(
    "view",
    { staticClass: "my-activity" },
    [
      _vm.list.length > 0
        ? _c(
            "block",
            _vm._l(_vm.list, function (item, index) {
              return _c(
                "view",
                {
                  key: index,
                  staticClass: "activity-box",
                  on: {
                    tap: function ($event) {
                      return _vm.goDetail(item.apply_oid)
                    },
                  },
                },
                [
                  _c("view", { staticClass: "activity-top" }, [
                    _c("view", { staticClass: "activity-name" }, [
                      _vm._v(" " + _vm._s(item.partner_name)),
                    ]),
                    item.attend_status == "待参与"
                      ? _c("view", { staticClass: "activity-status" }, [
                          _vm._v(_vm._s(item.attend_status)),
                        ])
                      : item.attend_status == "活动中"
                      ? _c("view", { staticClass: "activity-status2" }, [
                          _vm._v(_vm._s(item.attend_status)),
                        ])
                      : _c("view", { staticClass: "activity-status3" }, [
                          _vm._v(_vm._s(item.attend_status)),
                        ]),
                  ]),
                  _c("view", { staticClass: "activity-ct" }, [
                    _c("view", { staticClass: "activity-left" }, [
                      _c("image", {
                        attrs: { src: item.main_cover, mode: "aspectFill" },
                      }),
                    ]),
                    _c("view", { staticClass: "activity-right" }, [
                      _c("view", { staticClass: "activity-title" }, [
                        _vm._v(" " + _vm._s(item.title) + " "),
                      ]),
                      _c("view", { staticClass: "activity-location" }, [
                        _vm._v(" " + _vm._s(item.address)),
                      ]),
                      _c("view", { staticClass: "activity-time" }, [
                        _c("text", { staticClass: "activity-txt" }, [
                          _vm._v(_vm._s(item.begin_datetime)),
                        ]),
                      ]),
                      _c("view", { staticClass: "activity-session" }, [
                        _c("view", { staticClass: "activity-session-txt" }, [
                          _vm._v(_vm._s(item.enter_desc)),
                        ]),
                        _c("text", { staticClass: "activity-price" }, [
                          _c("text", { staticClass: "price-blod" }, [
                            _vm._v(_vm._s(item.original_amount_label)),
                          ]),
                          item.original_amount_label !== "免费"
                            ? _c("text", [_vm._v("元")])
                            : _vm._e(),
                        ]),
                      ]),
                    ]),
                  ]),
                  _c("view", { staticClass: "activity-bt" }, [
                    _c(
                      "view",
                      {
                        staticClass: "more",
                        on: {
                          tap: function ($event) {
                            $event.stopPropagation()
                            return _vm.more(item.apply_oid)
                          },
                        },
                      },
                      [_vm._v("更多")]
                    ),
                    _c("view", { staticClass: "activity-btns" }, [
                      item.attend_status == "已结束"
                        ? _c(
                            "text",
                            {
                              staticClass: "btn",
                              on: {
                                tap: function ($event) {
                                  $event.stopPropagation()
                                  return _vm.goSunbathing(item.apply_oid)
                                },
                              },
                            },
                            [_vm._v("评价晒单")]
                          )
                        : _vm._e(),
                      _c(
                        "text",
                        {
                          staticClass: "btn",
                          on: {
                            tap: function ($event) {
                              $event.stopPropagation()
                              return _vm.membersClick(item.sport_oid)
                            },
                          },
                        },
                        [_vm._v("组员")]
                      ),
                      _c(
                        "text",
                        {
                          staticClass: "btn",
                          on: {
                            tap: function ($event) {
                              $event.stopPropagation()
                              return _vm.addOrganizer(item.partner_wechat_qrc)
                            },
                          },
                        },
                        [_vm._v("添加组织者")]
                      ),
                    ]),
                  ]),
                ]
              )
            }),
            0
          )
        : _c("view", { staticClass: "none-data" }, [
            _c("image", {
              staticClass: "none-img",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/common/none.png",
                mode: "aspectFill",
              },
            }),
            _c("view", [_vm._v("当前暂无信息哦～")]),
          ]),
      _vm.visible
        ? _c("view", { staticClass: "bottom-modal", on: { tap: _vm.close } }, [
            _c("view", { staticClass: "bottom-content" }, [
              _c("view", { staticClass: "bottom-title" }, [
                _vm._v(" 组员信息 "),
              ]),
              _c(
                "view",
                { staticClass: "application-list" },
                _vm._l(_vm.memberList, function (item, index) {
                  return _c(
                    "view",
                    { key: index, staticClass: "application-list-item" },
                    [
                      _c("view", { staticClass: "application-title" }, [
                        _vm._v(" " + _vm._s(item.scene_name) + " "),
                      ]),
                      _vm._l(
                        item.scene_items,
                        function (sceneItem, sceneIndex) {
                          return _c(
                            "view",
                            { key: sceneIndex, staticClass: "application-box" },
                            [
                              sceneItem.is_show_roles_name
                                ? _c(
                                    "view",
                                    { staticClass: "application-role" },
                                    [
                                      _c("text", [
                                        _vm._v(_vm._s(sceneItem.roles_name)),
                                      ]),
                                    ]
                                  )
                                : _vm._e(),
                              _c("view", { staticClass: "application-tip" }, [
                                _vm._v(_vm._s(sceneItem.apply_desc)),
                              ]),
                              _vm._l(
                                sceneItem.apply_items.listed,
                                function (user, userIndex) {
                                  return _c(
                                    "view",
                                    {
                                      key: userIndex,
                                      staticClass: "application-user",
                                    },
                                    [
                                      _c(
                                        "view",
                                        { staticClass: "application-left" },
                                        [
                                          _c("image", {
                                            attrs: { src: user.apply_avatar },
                                          }),
                                          _c("text", [
                                            _vm._v(_vm._s(user.apply_nickname)),
                                          ]),
                                        ]
                                      ),
                                      _c(
                                        "view",
                                        { staticClass: "application-ct" },
                                        [
                                          user.sex !== null
                                            ? _c("block", [
                                                user.sex == 1
                                                  ? _c("image", {
                                                      attrs: {
                                                        src: "https://yuepai-oss.qubeitech.com/static/images/boy.png",
                                                      },
                                                    })
                                                  : _vm._e(),
                                                user.sex == 0
                                                  ? _c("image", {
                                                      attrs: {
                                                        src: "https://yuepai-oss.qubeitech.com/static/images/girl.png",
                                                      },
                                                    })
                                                  : _vm._e(),
                                              ])
                                            : _vm._e(),
                                          _c("text", [
                                            _vm._v(_vm._s(user.apply_career)),
                                          ]),
                                        ],
                                        1
                                      ),
                                      _c(
                                        "view",
                                        {
                                          staticClass: "application-rt",
                                          on: {
                                            tap: function ($event) {
                                              return _vm.goZhuye(
                                                user.apply_uuid
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("看主页")]
                                      ),
                                    ]
                                  )
                                }
                              ),
                              sceneItem.apply_items.waiting.length
                                ? _c("view", { staticClass: "gradeing" }, [
                                    _c("text", [_vm._v("等位中")]),
                                  ])
                                : _vm._e(),
                              _vm._l(
                                sceneItem.apply_items.waiting,
                                function (waituser, waituserIndex) {
                                  return _c(
                                    "view",
                                    {
                                      key: waituserIndex,
                                      staticClass: "application-user",
                                    },
                                    [
                                      _c(
                                        "view",
                                        { staticClass: "application-left" },
                                        [
                                          _c("image", {
                                            attrs: {
                                              src: waituser.apply_avatar,
                                            },
                                          }),
                                          _c("text", [
                                            _vm._v(
                                              _vm._s(waituser.apply_nickname)
                                            ),
                                          ]),
                                        ]
                                      ),
                                      _c(
                                        "view",
                                        { staticClass: "application-ct" },
                                        [
                                          waituser.sex !== null
                                            ? _c("block", [
                                                waituser.sex == 1
                                                  ? _c("image", {
                                                      attrs: {
                                                        src: "https://yuepai-oss.qubeitech.com/static/images/boy.png",
                                                      },
                                                    })
                                                  : _vm._e(),
                                                waituser.sex == 0
                                                  ? _c("image", {
                                                      attrs: {
                                                        src: "https://yuepai-oss.qubeitech.com/static/images/girl.png",
                                                      },
                                                    })
                                                  : _vm._e(),
                                              ])
                                            : _vm._e(),
                                          _c("text", [
                                            _vm._v(
                                              _vm._s(waituser.apply_career)
                                            ),
                                          ]),
                                        ],
                                        1
                                      ),
                                      _c(
                                        "view",
                                        {
                                          staticClass: "application-rt",
                                          on: {
                                            tap: function ($event) {
                                              return _vm.goZhuye(
                                                waituser.apply_uuid
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("看主页")]
                                      ),
                                    ]
                                  )
                                }
                              ),
                            ],
                            2
                          )
                        }
                      ),
                    ],
                    2
                  )
                }),
                0
              ),
            ]),
          ])
        : _vm._e(),
      _vm.weChatVisible
        ? _c(
            "view",
            { staticClass: "bottom-modal", on: { tap: _vm.weChatClose } },
            [
              _c("view", { staticClass: "weChat-content" }, [
                _c("view", { staticClass: "weChat-title" }, [
                  _vm._v(" 添加活动组织者微信 "),
                ]),
                _c("view", { staticClass: "weChat-box" }, [
                  _c("image", {
                    staticClass: "weChat-img",
                    attrs: {
                      "show-menu-by-longpress": true,
                      mode: "widthFix",
                      src: _vm.qrcode,
                    },
                  }),
                ]),
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

/***/ "./src/packageActivity/pages/myActivity/index.scss":
/*!*********************************************************!*\
  !*** ./src/packageActivity/pages/myActivity/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageActivity/pages/myActivity/index.vue":
/*!********************************************************!*\
  !*** ./src/packageActivity/pages/myActivity/index.vue ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/myActivity/index.vue");


var config = {"navigationBarTitleText":"我的活动","enablePullDownRefresh":true,"backgroundColor":"#eeeaea","backgroundColorTop":"#eeeaea"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageActivity/pages/myActivity/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageActivity/pages/myActivity/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/packageActivity/pages/myActivity/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/myActivity/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageActivity/pages/myActivity/index.vue?vue&type=template&id=6473fafc&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/packageActivity/pages/myActivity/index.vue?vue&type=template&id=6473fafc&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6473fafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6473fafc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/myActivity/index.vue?vue&type=template&id=6473fafc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6473fafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6473fafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageActivity/pages/myActivity/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map