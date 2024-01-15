(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/myModelCardlist/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/myModelCardlist/index.vue":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/myModelCardlist/index.vue ***!
  \************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_0e92b52c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0e92b52c&scoped=true& */ "./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=template&id=0e92b52c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_0e92b52c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_0e92b52c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "0e92b52c",
  "a0c3e10c"
  
)

component.options.__file = "src/packageMoka/pages/moka/myModelCardlist/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/myModelCardlist/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "myModelCardlist",
  data: function data() {
    return {
      isIphoneX: false,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      // tab切换
      currentTab: 0,
      list: [],
      pageNum: 1,
      pageSize: 10
    };
  },
  methods: {
    makeMoka: function makeMoka() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageMoka/pages/moka/modelcard/index");
    },
    // 滑动切换tab
    bindChange: function bindChange(e) {
      this.currentTab = e.detail.current;
    },
    // 点击tab切换
    changeItem: function changeItem(index) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
        this.pageNum = 1;
        this.list = [];
        this.query();
      }
    },
    query: function query() {
      var params = {
        page: this.pageNum,
        per_page: this.pageSize
      };

      if (this.currentTab == 1) {
        params.mocha_type = "non_personal";
      } else {
        params.mocha_type = "oneself";
      }

      this.mochaList(params);
    },
    scrollToLower: function scrollToLower() {
      this.pageNum++;
      this.query();
    },
    cardDelete: function cardDelete(oid) {
      var _this = this;

      wx.showModal({
        title: "温馨提示",
        content: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u5F20\u6A21\u5361\u5417\uFF1F",
        success: function success(res) {
          if (res.confirm) {
            var params = {
              oid: oid,
              event_type: -200
            };

            _this.mochaEvent(params);

            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    downloadMoka: function downloadMoka(url) {
      wx.showModal({
        title: "温馨提示",
        content: "下载并保存到相册吗？",
        confirmColor: "#108EE9",
        success: function success(res) {
          if (res.confirm) {
            wx.showLoading({
              title: "下载中..."
            });
            wx.downloadFile({
              url: url,
              success: function success(res) {
                wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: function success(res) {
                    wx.hideLoading();
                    wx.showToast({
                      title: "已保存至相册",
                      icon: "success",
                      duration: 3000
                    });
                  },
                  faile: function faile(err) {
                    console.log("失败！");
                  }
                });
              }
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    mochaList: function mochaList(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* mochaList */ "nb"])(params);

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
    mochaEvent: function mochaEvent(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* mochaEvent */ "mb"])(params);

              case 3:
                res = _context2.sent;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("删除成功");
                _this3.pageNum = 1;
                _this3.list = [];

                _this3.query();

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
    }
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function onLoad(options) {
    var that = this; // 获取系统信息

    wx.getSystemInfo({
      success: function success(res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      }
    });
    this.query();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=template&id=0e92b52c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=template&id=0e92b52c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "my-model-card" },
    [
      _c("view", { staticClass: "tab" }, [
        _c(
          "view",
          {
            staticClass: "tab-item",
            class: _vm.currentTab == 0 ? "on" : "",
            on: {
              tap: function ($event) {
                return _vm.changeItem(0)
              },
            },
          },
          [_vm._v("给自己做的 ")]
        ),
        _c(
          "view",
          {
            staticClass: "tab-item",
            class: _vm.currentTab == 1 ? "on" : "",
            on: {
              tap: function ($event) {
                return _vm.changeItem(1)
              },
            },
          },
          [_vm._v("给别人做的 ")]
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
              style: { paddingBottom: _vm.isIphoneX ? "180rpx" : "120rpx" },
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
                                { key: index, staticClass: "card-box" },
                                [
                                  _c("image", {
                                    attrs: {
                                      mode: "widthFix",
                                      src: item.mocha_url,
                                    },
                                  }),
                                  _c("view", { staticClass: "card-bottom" }, [
                                    _c(
                                      "view",
                                      {
                                        staticClass: "card-delete",
                                        on: {
                                          tap: function ($event) {
                                            return _vm.cardDelete(item.oid)
                                          },
                                        },
                                      },
                                      [_vm._v("删除")]
                                    ),
                                    _c(
                                      "view",
                                      {
                                        staticClass: "card-img",
                                        on: {
                                          tap: function ($event) {
                                            return _vm.downloadMoka(
                                              item.mocha_url
                                            )
                                          },
                                        },
                                      },
                                      [_vm._v("下载原图")]
                                    ),
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
                                { key: index, staticClass: "card-box" },
                                [
                                  _c("image", {
                                    attrs: {
                                      mode: "widthFix",
                                      src: item.mocha_url,
                                    },
                                  }),
                                  _c("view", { staticClass: "card-bottom" }, [
                                    _c(
                                      "view",
                                      {
                                        staticClass: "card-delete",
                                        on: {
                                          tap: function ($event) {
                                            return _vm.cardDelete(item.oid)
                                          },
                                        },
                                      },
                                      [_vm._v("删除")]
                                    ),
                                    _c(
                                      "view",
                                      {
                                        staticClass: "card-img",
                                        on: {
                                          tap: function ($event) {
                                            return _vm.downloadMoka(
                                              item.mocha_url
                                            )
                                          },
                                        },
                                      },
                                      [_vm._v("下载原图")]
                                    ),
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
      _c(
        "cover-view",
        {
          class:
            "subbtn_bottom_block " +
            (_vm.isIphoneX ? "fix-iphonex-button" : ""),
        },
        [
          _c("cover-view", { staticClass: "subbtn_bottom" }, [
            _c("button", { on: { tap: _vm.makeMoka } }, [_vm._v("制作模卡")]),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMoka/pages/moka/myModelCardlist/index.scss":
/*!***************************************************************!*\
  !*** ./src/packageMoka/pages/moka/myModelCardlist/index.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/myModelCardlist/index.vue":
/*!**************************************************************!*\
  !*** ./src/packageMoka/pages/moka/myModelCardlist/index.vue ***!
  \**************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/myModelCardlist/index.vue");


var config = {"navigationBarTitleText":"我的模卡"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/myModelCardlist/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=template&id=0e92b52c&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=template&id=0e92b52c&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0e92b52c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0e92b52c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/myModelCardlist/index.vue?vue&type=template&id=0e92b52c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0e92b52c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0e92b52c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/myModelCardlist/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map