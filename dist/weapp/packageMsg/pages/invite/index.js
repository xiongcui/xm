(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMsg/pages/invite/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/invite/index.vue":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/invite/index.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_5150e53c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5150e53c&scoped=true& */ "./src/packageMsg/pages/invite/index.vue?vue&type=template&id=5150e53c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMsg/pages/invite/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_5150e53c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_5150e53c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "5150e53c",
  "7298a0d4"
  
)

component.options.__file = "src/packageMsg/pages/invite/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/invite/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/invite/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageMsg/pages/invite/index.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "invite",
  data: function data() {
    return {
      currentTab: 0,
      list: [],
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      status: 0,
      pageNum: 1,
      pageSize: 10
    };
  },
  methods: {
    gozhuye: function gozhuye(uuid) {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "d"])("/packageMoka/pages/moka/editshow/index?uuid=" + uuid);
    },
    // 点击tab切换
    changeItem: function changeItem(index, type) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
        this.status = type;
        this.pageNum = 1;
        this.list = [];
        this.query();
      }
    },
    bindChange: function bindChange(e) {
      this.currentTab = e.detail.current;
    },
    scrollToLower: function scrollToLower() {
      this.pageNum++;
      this.query();
    },
    query: function query() {
      var params = {
        type: "NE",
        // visited_status: this.status,
        page: this.pageNum,
        per_page: this.pageSize
      };

      if (this.status) {
        params.visited_status = this.status;
      }

      this.applyList(params);
    },
    goDetail: function goDetail(sid) {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "d"])("/packageMsg/pages/inviteDetail/index?sid=" + sid);
    },
    moreClick: function moreClick(sid, row) {
      var _this = this;

      wx.showActionSheet({
        itemList: ["删除", "投诉"],
        success: function success(res) {
          switch (res.tapIndex) {
            case 0:
              _this.Delete(sid);

              break;

            case 1:
              console.log("投诉");
              Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "d"])("/packageMsg/pages/complaint/index?visitor_id=" + row.visitor_id + "&avatar=" + row.visitor.avatar + "&nickname=" + row.visitor.nickname + "&province_name=" + row.visitor.province_name + "&career=" + row.visitor.career_list[0]);
              break;
          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    Delete: function Delete(sid) {
      this.applyManage({
        visited_status: -200,
        sid: sid
      });
    },
    applyList: function applyList(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* applyList */ "h"])(params);

              case 3:
                res = _context.sent;

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context.next = 7;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("没有更多数据了～");
                return _context.abrupt("return", false);

              case 7:
                data = res.data.data.items;
                _this2.list = _this2.list.concat(data);
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
    applyManage: function applyManage(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* applyManage */ "i"])(params);

              case 3:
                res = _context2.sent;
                _this3.pageNum = 1;
                _this3.list = [];

                _this3.query();

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
    }
  },
  onShow: function onShow() {
    this.pageNum = 1;
    this.list = [];
    this.query();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var that = this; // 获取系统信息

    wx.getSystemInfo({
      success: function success(res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/invite/index.vue?vue&type=template&id=5150e53c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/invite/index.vue?vue&type=template&id=5150e53c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "invite" }, [
    _c("view", { staticClass: "tab" }, [
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 0 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(0, 0)
            },
          },
        },
        [_vm._v("全部")]
      ),
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 1 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(1, 200)
            },
          },
        },
        [_vm._v("待查看")]
      ),
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 2 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(2, 210)
            },
          },
        },
        [_vm._v("未获取")]
      ),
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 3 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(3, 230)
            },
          },
        },
        [_vm._v("已获取")]
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
            attrs: { current: _vm.currentTab, duration: "300" },
            on: { change: _vm.bindChange },
          },
          [
            _c(
              "swiper-item",
              [
                _c(
                  "scroll-view",
                  {
                    style: { height: _vm.winHeight + "px" },
                    attrs: { "scroll-y": true, "lower-threshold": 200 },
                    on: { scrolltolower: _vm.scrollToLower },
                  },
                  [
                    _vm.list.length
                      ? _c(
                          "block",
                          _vm._l(_vm.list, function (item, index) {
                            return _c(
                              "view",
                              {
                                key: index,
                                staticClass: "invite-box",
                                on: {
                                  tap: function ($event) {
                                    return _vm.goDetail(item.sid)
                                  },
                                },
                              },
                              [
                                _c("view", { staticClass: "invite-top" }, [
                                  _c("view", { staticClass: "invite-img" }, [
                                    _c("image", {
                                      attrs: { src: item.visitor.avatar },
                                      on: {
                                        tap: function ($event) {
                                          return _vm.gozhuye(item.visitor.uuid)
                                        },
                                      },
                                    }),
                                  ]),
                                  _c("view", { staticClass: "invite-info" }, [
                                    _c("view", { staticClass: "invite-name" }, [
                                      _vm._v(
                                        " " +
                                          _vm._s(item.visitor.nickname) +
                                          " "
                                      ),
                                      item.visitor.sex == 1
                                        ? _c("image", {
                                            staticClass: "list_sex",
                                            attrs: {
                                              src: "https://yuepai-oss.qubeitech.com/static/images/nan.png",
                                            },
                                          })
                                        : _vm._e(),
                                      item.visitor.sex == 0
                                        ? _c("image", {
                                            staticClass: "list_sex",
                                            attrs: {
                                              src: "https://yuepai-oss.qubeitech.com/static/images/nv.png",
                                            },
                                          })
                                        : _vm._e(),
                                    ]),
                                    _c("view", { staticClass: "identity" }, [
                                      _vm._v(
                                        _vm._s(item.visitor.career_list[0]) +
                                          "｜ " +
                                          _vm._s(item.visitor.province_name)
                                      ),
                                    ]),
                                    _c(
                                      "view",
                                      {
                                        staticClass: "dian",
                                        on: {
                                          tap: function ($event) {
                                            $event.stopPropagation()
                                            return _vm.moreClick(item.sid, item)
                                          },
                                        },
                                      },
                                      [_vm._v("...")]
                                    ),
                                  ]),
                                ]),
                                _c("view", { staticClass: "invite-desc" }, [
                                  _vm._v(
                                    "约拍理由： " + _vm._s(item.content) + " "
                                  ),
                                ]),
                                _c("view", { staticClass: "invite-bt" }, [
                                  _c("text", [
                                    _vm._v(_vm._s(item.date_humanize)),
                                  ]),
                                  item.visited_status == 230
                                    ? _c("text", { staticClass: "success" }, [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ])
                                    : item.visited_status == 210
                                    ? _c("text", { staticClass: "fail" }, [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ])
                                    : _c("text", [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ]),
                                ]),
                                item.is_visited_read === 0
                                  ? _c("view", { staticClass: "notice_bg" })
                                  : _vm._e(),
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
                  ],
                  1
                ),
              ],
              1
            ),
            _c(
              "swiper-item",
              [
                _c(
                  "scroll-view",
                  {
                    style: { height: _vm.winHeight + "px" },
                    attrs: { "scroll-y": true, "lower-threshold": 200 },
                    on: { scrolltolower: _vm.scrollToLower },
                  },
                  [
                    _vm.list.length
                      ? _c(
                          "block",
                          _vm._l(_vm.list, function (item, index) {
                            return _c(
                              "view",
                              {
                                key: index,
                                staticClass: "invite-box",
                                on: {
                                  tap: function ($event) {
                                    return _vm.goDetail(item.sid)
                                  },
                                },
                              },
                              [
                                _c("view", { staticClass: "invite-top" }, [
                                  _c("view", { staticClass: "invite-img" }, [
                                    _c("image", {
                                      attrs: { src: item.visitor.avatar },
                                      on: {
                                        tap: function ($event) {
                                          return _vm.gozhuye(item.visitor.uuid)
                                        },
                                      },
                                    }),
                                  ]),
                                  _c("view", { staticClass: "invite-info" }, [
                                    _c("view", { staticClass: "invite-name" }, [
                                      _vm._v(
                                        " " +
                                          _vm._s(item.visitor.nickname) +
                                          " "
                                      ),
                                      item.visitor.sex == 1
                                        ? _c("image", {
                                            staticClass: "list_sex",
                                            attrs: {
                                              src: "https://yuepai-oss.qubeitech.com/static/images/nan.png",
                                            },
                                          })
                                        : _vm._e(),
                                      item.visitor.sex == 0
                                        ? _c("image", {
                                            staticClass: "list_sex",
                                            attrs: {
                                              src: "https://yuepai-oss.qubeitech.com/static/images/nv.png",
                                            },
                                          })
                                        : _vm._e(),
                                    ]),
                                    _c("view", { staticClass: "identity" }, [
                                      _vm._v(
                                        _vm._s(item.visitor.career_list[0]) +
                                          "｜ " +
                                          _vm._s(item.visitor.province_name)
                                      ),
                                    ]),
                                    _c(
                                      "view",
                                      {
                                        staticClass: "dian",
                                        on: {
                                          tap: function ($event) {
                                            $event.stopPropagation()
                                            return _vm.moreClick(item.sid, item)
                                          },
                                        },
                                      },
                                      [_vm._v("...")]
                                    ),
                                  ]),
                                ]),
                                _c("view", { staticClass: "invite-desc" }, [
                                  _vm._v(
                                    "约拍理由： " + _vm._s(item.content) + " "
                                  ),
                                ]),
                                _c("view", { staticClass: "invite-bt" }, [
                                  _c("text", [
                                    _vm._v(_vm._s(item.date_humanize)),
                                  ]),
                                  item.visited_status == 230
                                    ? _c("text", { staticClass: "success" }, [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ])
                                    : item.visited_status == 210
                                    ? _c("text", { staticClass: "fail" }, [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ])
                                    : _c("text", [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ]),
                                ]),
                                item.is_visited_read === 0
                                  ? _c("view", { staticClass: "notice_bg" })
                                  : _vm._e(),
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
                  ],
                  1
                ),
              ],
              1
            ),
            _c(
              "swiper-item",
              [
                _c(
                  "scroll-view",
                  {
                    style: { height: _vm.winHeight + "px" },
                    attrs: { "scroll-y": true, "lower-threshold": 200 },
                    on: { scrolltolower: _vm.scrollToLower },
                  },
                  [
                    _vm.list.length
                      ? _c(
                          "block",
                          _vm._l(_vm.list, function (item, index) {
                            return _c(
                              "view",
                              {
                                key: index,
                                staticClass: "invite-box",
                                on: {
                                  tap: function ($event) {
                                    return _vm.goDetail(item.sid)
                                  },
                                },
                              },
                              [
                                _c("view", { staticClass: "invite-top" }, [
                                  _c("view", { staticClass: "invite-img" }, [
                                    _c("image", {
                                      attrs: { src: item.visitor.avatar },
                                      on: {
                                        tap: function ($event) {
                                          return _vm.gozhuye(item.visitor.uuid)
                                        },
                                      },
                                    }),
                                  ]),
                                  _c("view", { staticClass: "invite-info" }, [
                                    _c("view", { staticClass: "invite-name" }, [
                                      _vm._v(
                                        " " +
                                          _vm._s(item.visitor.nickname) +
                                          " "
                                      ),
                                      item.visitor.sex == 1
                                        ? _c("image", {
                                            staticClass: "list_sex",
                                            attrs: {
                                              src: "https://yuepai-oss.qubeitech.com/static/images/nan.png",
                                            },
                                          })
                                        : _vm._e(),
                                      item.visitor.sex == 0
                                        ? _c("image", {
                                            staticClass: "list_sex",
                                            attrs: {
                                              src: "https://yuepai-oss.qubeitech.com/static/images/nv.png",
                                            },
                                          })
                                        : _vm._e(),
                                    ]),
                                    _c("view", { staticClass: "identity" }, [
                                      _vm._v(
                                        _vm._s(item.visitor.career_list[0]) +
                                          "｜ " +
                                          _vm._s(item.visitor.province_name)
                                      ),
                                    ]),
                                    _c(
                                      "view",
                                      {
                                        staticClass: "dian",
                                        on: {
                                          tap: function ($event) {
                                            $event.stopPropagation()
                                            return _vm.moreClick(item.sid, item)
                                          },
                                        },
                                      },
                                      [_vm._v("...")]
                                    ),
                                  ]),
                                ]),
                                _c("view", { staticClass: "invite-desc" }, [
                                  _vm._v(
                                    "约拍理由： " + _vm._s(item.content) + " "
                                  ),
                                ]),
                                _c("view", { staticClass: "invite-bt" }, [
                                  _c("text", [
                                    _vm._v(_vm._s(item.date_humanize)),
                                  ]),
                                  item.visited_status == 230
                                    ? _c("text", { staticClass: "success" }, [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ])
                                    : item.visited_status == 210
                                    ? _c("text", { staticClass: "fail" }, [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ])
                                    : _c("text", [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ]),
                                ]),
                                item.is_visited_read === 0
                                  ? _c("view", { staticClass: "notice_bg" })
                                  : _vm._e(),
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
                  ],
                  1
                ),
              ],
              1
            ),
            _c(
              "swiper-item",
              [
                _c(
                  "scroll-view",
                  {
                    style: { height: _vm.winHeight + "px" },
                    attrs: { "scroll-y": true, "lower-threshold": 200 },
                    on: { scrolltolower: _vm.scrollToLower },
                  },
                  [
                    _vm.list.length
                      ? _c(
                          "block",
                          _vm._l(_vm.list, function (item, index) {
                            return _c(
                              "view",
                              {
                                key: index,
                                staticClass: "invite-box",
                                on: {
                                  tap: function ($event) {
                                    return _vm.goDetail(item.sid)
                                  },
                                },
                              },
                              [
                                _c("view", { staticClass: "invite-top" }, [
                                  _c("view", { staticClass: "invite-img" }, [
                                    _c("image", {
                                      attrs: { src: item.visitor.avatar },
                                      on: {
                                        tap: function ($event) {
                                          return _vm.gozhuye(item.visitor.uuid)
                                        },
                                      },
                                    }),
                                  ]),
                                  _c("view", { staticClass: "invite-info" }, [
                                    _c("view", { staticClass: "invite-name" }, [
                                      _vm._v(
                                        " " +
                                          _vm._s(item.visitor.nickname) +
                                          " "
                                      ),
                                      item.visitor.sex == 1
                                        ? _c("image", {
                                            staticClass: "list_sex",
                                            attrs: {
                                              src: "https://yuepai-oss.qubeitech.com/static/images/nan.png",
                                            },
                                          })
                                        : _vm._e(),
                                      item.visitor.sex == 0
                                        ? _c("image", {
                                            staticClass: "list_sex",
                                            attrs: {
                                              src: "https://yuepai-oss.qubeitech.com/static/images/nv.png",
                                            },
                                          })
                                        : _vm._e(),
                                    ]),
                                    _c("view", { staticClass: "identity" }, [
                                      _vm._v(
                                        _vm._s(item.visitor.career_list[0]) +
                                          "｜ " +
                                          _vm._s(item.visitor.province_name)
                                      ),
                                    ]),
                                    _c(
                                      "view",
                                      {
                                        staticClass: "dian",
                                        on: {
                                          tap: function ($event) {
                                            $event.stopPropagation()
                                            return _vm.moreClick(item.sid, item)
                                          },
                                        },
                                      },
                                      [_vm._v("...")]
                                    ),
                                  ]),
                                ]),
                                _c("view", { staticClass: "invite-desc" }, [
                                  _vm._v(
                                    "约拍理由： " + _vm._s(item.content) + " "
                                  ),
                                ]),
                                _c("view", { staticClass: "invite-bt" }, [
                                  _c("text", [
                                    _vm._v(_vm._s(item.date_humanize)),
                                  ]),
                                  item.visited_status == 230
                                    ? _c("text", { staticClass: "success" }, [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ])
                                    : item.visited_status == 210
                                    ? _c("text", { staticClass: "fail" }, [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ])
                                    : _c("text", [
                                        _vm._v(
                                          _vm._s(item.visited_status_name)
                                        ),
                                      ]),
                                ]),
                                item.is_visited_read === 0
                                  ? _c("view", { staticClass: "notice_bg" })
                                  : _vm._e(),
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
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMsg/pages/invite/index.scss":
/*!************************************************!*\
  !*** ./src/packageMsg/pages/invite/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMsg/pages/invite/index.vue":
/*!***********************************************!*\
  !*** ./src/packageMsg/pages/invite/index.vue ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/invite/index.vue");


var config = {"navigationBarTitleText":"收到约拍"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMsg/pages/invite/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMsg/pages/invite/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/packageMsg/pages/invite/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/invite/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMsg/pages/invite/index.vue?vue&type=template&id=5150e53c&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/packageMsg/pages/invite/index.vue?vue&type=template&id=5150e53c&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5150e53c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5150e53c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/invite/index.vue?vue&type=template&id=5150e53c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5150e53c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5150e53c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMsg/pages/invite/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map