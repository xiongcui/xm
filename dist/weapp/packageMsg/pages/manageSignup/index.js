(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMsg/pages/manageSignup/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/manageSignup/index.vue":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/manageSignup/index.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_5db6e9b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5db6e9b6&scoped=true& */ "./src/packageMsg/pages/manageSignup/index.vue?vue&type=template&id=5db6e9b6&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMsg/pages/manageSignup/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_5db6e9b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_5db6e9b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "5db6e9b6",
  "69241fa8"
  
)

component.options.__file = "src/packageMsg/pages/manageSignup/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/manageSignup/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/manageSignup/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/packageMsg/pages/manageSignup/index.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "sigup",
  data: function data() {
    return {
      currentTab: 0,
      list: [],
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      status: 0,
      pageNum: 1,
      pageSize: 10,
      remarks: "",
      visible: false,
      loading: true
    };
  },
  methods: {
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
    saveRemarks: function saveRemarks() {
      this.visible = true;
    },
    close: function close() {
      this.visible = false;
    },
    clickSave: function clickSave() {},
    moreClick: function moreClick() {
      wx.showActionSheet({
        itemList: ["删除", "投诉"],
        success: function success(res) {
          switch (res.tapIndex) {
            case 0:
              console.log("删除");
              break;

            case 1:
              console.log("投诉");
              break;
          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    appropriate: function appropriate() {
      wx.showModal({
        title: "温馨提示",
        content: "确定标记该报名为合适吗？",
        success: function success(res) {
          if (res.confirm) {// _this.creatCareer(arr);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    noConformance: function noConformance() {
      wx.showModal({
        title: "温馨提示",
        content: "确定标记该报名为不符吗？",
        success: function success(res) {
          if (res.confirm) {// _this.creatCareer(arr);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    recoveryPending: function recoveryPending() {},
    restoreAppropriately: function restoreAppropriately() {},
    delete: function _delete() {},
    query: function query() {
      var params = {
        type: "NT",
        visited_status: this.status,
        page: this.pageNum,
        per_page: this.pageSize
      };
      this.loading = false;
      this.applyList(params);
    },
    applyList: function applyList(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_2__[/* applyList */ "d"])(params);

              case 3:
                res = _context.sent;
                _this.loading = true;

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context.next = 8;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("没有更多数据了～");
                return _context.abrupt("return", false);

              case 8:
                data = res.data.data.items;
                _this.list = _this.list.concat(data);
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
    }
  },
  onShow: function onShow() {
    this.pageNum = 1;
    this.list = [];
    this.query();
  },
  onReachBottom: function onReachBottom() {
    if (this.loading) {
      this.pageNum++;
      this.query();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/manageSignup/index.vue?vue&type=template&id=5db6e9b6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/manageSignup/index.vue?vue&type=template&id=5db6e9b6&scoped=true& ***!
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
  return _c("view", { staticClass: "signup" }, [
    _c("view", { staticClass: "tab" }, [
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 0 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(0, 200)
            },
          },
        },
        [_vm._v("待定")]
      ),
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 1 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(1, 410)
            },
          },
        },
        [_vm._v("合适")]
      ),
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 2 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(2, 420)
            },
          },
        },
        [_vm._v("不符")]
      ),
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 3 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(3, 430)
            },
          },
        },
        [_vm._v("放弃合作")]
      ),
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 4 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(4, 440)
            },
          },
        },
        [_vm._v("完成合作")]
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
            _c("swiper-item", [
              _c("view", { staticClass: "signup-box" }, [
                _c("view", { staticClass: "signup-top" }, [
                  _c("view", { staticClass: "signup-img" }, [
                    _c("image", {
                      attrs: {
                        src: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIX4GibOqaLwcYuaOdFrEPSEGLoYlibQNkwZ5jOj8En8xicWdg0Mb5ebgLETD5icysAYJo7cr05U8bV0A/132",
                      },
                    }),
                  ]),
                  _c("view", { staticClass: "signup-info" }, [
                    _c("view", { staticClass: "signup-name" }, [
                      _vm._v(" nickname "),
                      _c("image", {
                        staticClass: "list_sex",
                        attrs: {
                          src: __webpack_require__(/*! ../../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                        },
                      }),
                    ]),
                    _c("view", { staticClass: "identity" }, [
                      _vm._v("摄影师 ｜ 北京市"),
                    ]),
                  ]),
                  _c("view", { staticClass: "signup-rt" }, [
                    _c("view", { staticClass: "contact" }, [
                      _vm._v("立即联系"),
                    ]),
                    _c("view", { staticClass: "time" }, [
                      _vm._v("1小时前报名"),
                    ]),
                  ]),
                ]),
                _c("view", { staticClass: "signup-cotent" }, [
                  _c("text", { staticClass: "signup-desc" }, [
                    _vm._v(
                      "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                    ),
                  ]),
                  _c("text", { staticClass: "signup-detail" }, [
                    _vm._v("查看详情"),
                  ]),
                ]),
                _c("view", { staticClass: "signup-btns" }, [
                  _c("view", { staticClass: "signup-btn-left" }, [
                    _c(
                      "text",
                      { staticClass: "more", on: { tap: _vm.moreClick } },
                      [_vm._v("更多")]
                    ),
                    _c(
                      "text",
                      { staticClass: "remarks", on: { tap: _vm.saveRemarks } },
                      [_vm._v("备注")]
                    ),
                  ]),
                  _c("view", { staticClass: "signup-btn-rt" }, [
                    _c(
                      "view",
                      {
                        staticClass: "btn-yellow",
                        on: { tap: _vm.noConformance },
                      },
                      [
                        _c("icon", {
                          attrs: {
                            type: "cancel",
                            size: "12",
                            color: "#ffffff",
                          },
                        }),
                        _vm._v("不符"),
                      ],
                      1
                    ),
                    _c(
                      "view",
                      { staticClass: "btn-red", on: { tap: _vm.appropriate } },
                      [
                        _c("icon", {
                          attrs: {
                            type: "success_no_circle",
                            size: "12",
                            color: "#ffffff",
                          },
                        }),
                        _vm._v("合适"),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
            _c("swiper-item", [
              _c("view", { staticClass: "signup-box" }, [
                _c("view", { staticClass: "signup-top" }, [
                  _c("view", { staticClass: "signup-img" }, [
                    _c("image", {
                      attrs: {
                        src: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIX4GibOqaLwcYuaOdFrEPSEGLoYlibQNkwZ5jOj8En8xicWdg0Mb5ebgLETD5icysAYJo7cr05U8bV0A/132",
                      },
                    }),
                  ]),
                  _c("view", { staticClass: "signup-info" }, [
                    _c("view", { staticClass: "signup-name" }, [
                      _vm._v(" nickname "),
                      _c("image", {
                        staticClass: "list_sex",
                        attrs: {
                          src: __webpack_require__(/*! ../../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                        },
                      }),
                    ]),
                    _c("view", { staticClass: "identity" }, [
                      _vm._v("摄影师 ｜ 北京市"),
                    ]),
                  ]),
                  _c("view", { staticClass: "signup-rt" }, [
                    _c("view", { staticClass: "contact" }, [
                      _vm._v("立即联系"),
                    ]),
                    _c("view", { staticClass: "time" }, [
                      _vm._v("1小时前报名"),
                    ]),
                  ]),
                ]),
                _c("view", { staticClass: "notice" }, [
                  _vm._v(" 来自通告：朝阳区周六日汉服约拍 "),
                  _c("text", { staticClass: "notice-btn" }, [
                    _vm._v("查看全部报名"),
                  ]),
                ]),
                _c("view", { staticClass: "signup-cotent" }, [
                  _c("text", { staticClass: "signup-desc" }, [
                    _vm._v(
                      "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                    ),
                  ]),
                  _c("text", { staticClass: "signup-detail" }, [
                    _vm._v("查看详情"),
                  ]),
                ]),
                _c("view", { staticClass: "signup-btns" }, [
                  _c("view", { staticClass: "signup-btn-left" }, [
                    _c("text", { staticClass: "more" }, [_vm._v("更多")]),
                    _c("text", { staticClass: "remarks" }, [_vm._v("备注")]),
                  ]),
                  _c("view", { staticClass: "signup-btn-rt" }, [
                    _c("view", { staticClass: "btn-yellow" }, [
                      _vm._v("放弃合作"),
                    ]),
                    _c("view", { staticClass: "btn-red" }, [
                      _vm._v("完成合作"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _c("swiper-item", [
              _c("view", { staticClass: "signup-box" }, [
                _c("view", { staticClass: "signup-top" }, [
                  _c("view", { staticClass: "signup-img" }, [
                    _c("image", {
                      attrs: {
                        src: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIX4GibOqaLwcYuaOdFrEPSEGLoYlibQNkwZ5jOj8En8xicWdg0Mb5ebgLETD5icysAYJo7cr05U8bV0A/132",
                      },
                    }),
                  ]),
                  _c("view", { staticClass: "signup-info" }, [
                    _c("view", { staticClass: "signup-name" }, [
                      _vm._v(" nickname "),
                      _c("image", {
                        staticClass: "list_sex",
                        attrs: {
                          src: __webpack_require__(/*! ../../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                        },
                      }),
                    ]),
                    _c("view", { staticClass: "identity" }, [
                      _vm._v("摄影师 ｜ 北京市"),
                    ]),
                  ]),
                  _c("view", { staticClass: "signup-rt" }, [
                    _c("view", { staticClass: "contact" }, [
                      _vm._v("立即联系"),
                    ]),
                    _c("view", { staticClass: "time" }, [
                      _vm._v("1小时前报名"),
                    ]),
                  ]),
                ]),
                _c("view", { staticClass: "notice" }, [
                  _vm._v(" 来自通告：朝阳区周六日汉服约拍 "),
                  _c("text", { staticClass: "notice-btn" }, [
                    _vm._v("查看全部报名"),
                  ]),
                ]),
                _c("view", { staticClass: "signup-cotent" }, [
                  _c("text", { staticClass: "signup-desc" }, [
                    _vm._v(
                      "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                    ),
                  ]),
                  _c("text", { staticClass: "signup-detail" }, [
                    _vm._v("查看详情"),
                  ]),
                ]),
                _c("view", { staticClass: "signup-btns" }, [
                  _c("view", { staticClass: "signup-btn-left" }, [
                    _c("text", { staticClass: "more" }, [_vm._v("更多")]),
                    _c("text", { staticClass: "remarks" }, [_vm._v("备注")]),
                  ]),
                  _c("view", { staticClass: "signup-btn-rt" }, [
                    _c("view", { staticClass: "btn-blue" }, [
                      _vm._v("恢复待定"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _c("swiper-item", [
              _c("view", { staticClass: "signup-box" }, [
                _c("view", { staticClass: "signup-top" }, [
                  _c("view", { staticClass: "signup-img" }, [
                    _c("image", {
                      attrs: {
                        src: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIX4GibOqaLwcYuaOdFrEPSEGLoYlibQNkwZ5jOj8En8xicWdg0Mb5ebgLETD5icysAYJo7cr05U8bV0A/132",
                      },
                    }),
                  ]),
                  _c("view", { staticClass: "signup-info" }, [
                    _c("view", { staticClass: "signup-name" }, [
                      _vm._v(" nickname "),
                      _c("image", {
                        staticClass: "list_sex",
                        attrs: {
                          src: __webpack_require__(/*! ../../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                        },
                      }),
                    ]),
                    _c("view", { staticClass: "identity" }, [
                      _vm._v("摄影师 ｜ 北京市"),
                    ]),
                  ]),
                  _c("view", { staticClass: "signup-rt" }, [
                    _c("view", { staticClass: "contact" }, [
                      _vm._v("立即联系"),
                    ]),
                    _c("view", { staticClass: "time" }, [
                      _vm._v("1小时前报名"),
                    ]),
                  ]),
                ]),
                _c("view", { staticClass: "notice" }, [
                  _vm._v(" 来自通告：朝阳区周六日汉服约拍 "),
                  _c("text", { staticClass: "notice-btn" }, [
                    _vm._v("查看全部报名"),
                  ]),
                ]),
                _c("view", { staticClass: "signup-cotent" }, [
                  _c("text", { staticClass: "signup-desc" }, [
                    _vm._v(
                      "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                    ),
                  ]),
                  _c("text", { staticClass: "signup-detail" }, [
                    _vm._v("查看详情"),
                  ]),
                ]),
                _c("view", { staticClass: "signup-btns" }, [
                  _c("view", { staticClass: "signup-btn-left" }, [
                    _c("text", { staticClass: "more" }, [_vm._v("更多")]),
                    _c("text", { staticClass: "remarks" }, [_vm._v("备注")]),
                  ]),
                  _c("view", { staticClass: "signup-btn-rt" }, [
                    _c("view", { staticClass: "btn-yellow" }, [
                      _vm._v("恢复合适"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _c("swiper-item", [
              _c("view", { staticClass: "signup-box" }, [
                _c("view", { staticClass: "signup-top" }, [
                  _c("view", { staticClass: "signup-img" }, [
                    _c("image", {
                      attrs: {
                        src: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIX4GibOqaLwcYuaOdFrEPSEGLoYlibQNkwZ5jOj8En8xicWdg0Mb5ebgLETD5icysAYJo7cr05U8bV0A/132",
                      },
                    }),
                  ]),
                  _c("view", { staticClass: "signup-info" }, [
                    _c("view", { staticClass: "signup-name" }, [
                      _vm._v(" nickname "),
                      _c("image", {
                        staticClass: "list_sex",
                        attrs: {
                          src: __webpack_require__(/*! ../../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                        },
                      }),
                    ]),
                    _c("view", { staticClass: "identity" }, [
                      _vm._v("摄影师 ｜ 北京市"),
                    ]),
                  ]),
                  _c("view", { staticClass: "signup-rt" }, [
                    _c("view", { staticClass: "contact" }, [
                      _vm._v("立即联系"),
                    ]),
                    _c("view", { staticClass: "time" }, [
                      _vm._v("1小时前报名"),
                    ]),
                  ]),
                ]),
                _c("view", { staticClass: "notice" }, [
                  _vm._v(" 来自通告：朝阳区周六日汉服约拍 "),
                  _c("text", { staticClass: "notice-btn" }, [
                    _vm._v("查看全部报名"),
                  ]),
                ]),
                _c("view", { staticClass: "signup-cotent" }, [
                  _c("text", { staticClass: "signup-desc" }, [
                    _vm._v(
                      "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                    ),
                  ]),
                  _c("text", { staticClass: "signup-detail" }, [
                    _vm._v("查看详情"),
                  ]),
                ]),
                _c("view", { staticClass: "signup-btns" }, [
                  _c("view", { staticClass: "signup-btn-left" }, [
                    _c("text", { staticClass: "more" }, [_vm._v("更多")]),
                    _c("text", { staticClass: "remarks" }, [_vm._v("备注")]),
                  ]),
                  _c("view", { staticClass: "signup-btn-rt" }, [
                    _c("view", { staticClass: "btn-del" }, [_vm._v("删除")]),
                  ]),
                ]),
              ]),
            ]),
          ],
          1
        ),
      ],
      1
    ),
    _vm.visible
      ? _c("view", { staticClass: "modal_box" }, [
          _c("view", { staticClass: "modal_content" }, [
            _c("view", [_vm._v(" 添加备注信息 ")]),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.remarks,
                  expression: "remarks",
                },
              ],
              staticClass: "intro_content",
              attrs: {
                autoHeight: true,
                maxlength: "500",
                name: "intro",
                placeholder: "请输入您的备注信息",
                placeholderClass: "intro_content_none",
              },
              domProps: { value: _vm.remarks },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.remarks = $event.target.value
                },
              },
            }),
            _c("image", {
              staticClass: "close-img",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/common/x_icon.png */ "./src/assets/images/common/x_icon.png"),
              },
              on: { tap: _vm.close },
            }),
            _c("view", { staticClass: "save", on: { tap: _vm.clickSave } }, [
              _vm._v("保存"),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMsg/pages/manageSignup/index.scss":
/*!******************************************************!*\
  !*** ./src/packageMsg/pages/manageSignup/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMsg/pages/manageSignup/index.vue":
/*!*****************************************************!*\
  !*** ./src/packageMsg/pages/manageSignup/index.vue ***!
  \*****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/manageSignup/index.vue");


var config = {"navigationBarTitleText":"管理报名"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMsg/pages/manageSignup/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMsg/pages/manageSignup/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/packageMsg/pages/manageSignup/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/manageSignup/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMsg/pages/manageSignup/index.vue?vue&type=template&id=5db6e9b6&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/packageMsg/pages/manageSignup/index.vue?vue&type=template&id=5db6e9b6&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5db6e9b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5db6e9b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/manageSignup/index.vue?vue&type=template&id=5db6e9b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5db6e9b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5db6e9b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMsg/pages/manageSignup/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map