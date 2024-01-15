(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageActivity/pages/comment/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/comment/index.vue":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/comment/index.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_cb7ec098_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=cb7ec098&scoped=true& */ "./src/packageActivity/pages/comment/index.vue?vue&type=template&id=cb7ec098&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageActivity/pages/comment/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_cb7ec098_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_cb7ec098_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "cb7ec098",
  "b4a454b4"
  
)

component.options.__file = "src/packageActivity/pages/comment/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/comment/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/comment/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageActivity/pages/comment/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/index.js */ "./src/api/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "comment",
  data: function data() {
    return {
      pid: "",
      commentList: [],
      commentTotal: 0,
      pageNum: 1,
      pageSize: 10,
      loading: true
    };
  },
  methods: {
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
      this.comment({
        partner_pid: this.pid,
        page: this.pageNum,
        per_page: this.pageSize
      }, type);
    },
    comment: function comment(params, type) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_3__[/* comment */ "z"])(params);

              case 3:
                res = _context.sent;
                //隐藏loading 提示框
                wx.hideLoading(); //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context.next = 12;
                  break;
                }

                _this.commentList = res.data.data.items;
                _this.loading = true;
                _context.next = 20;
                break;

              case 12:
                if (!(type == "more")) {
                  _context.next = 20;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context.next = 17;
                  break;
                }

                errortip("没有更多数据了～");
                _this.loading = true;
                return _context.abrupt("return", false);

              case 17:
                data = res.data.data.items;
                _this.commentList = _this.commentList.concat(data);
                _this.loading = true;

              case 20:
                _context.next = 24;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](0);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 22]]);
      }))();
    }
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
  },
  onLoad: function onLoad(options) {
    if (options.pid) {
      this.pid = options.pid;
      this.query("init");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/comment/index.vue?vue&type=template&id=cb7ec098&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageActivity/pages/comment/index.vue?vue&type=template&id=cb7ec098&scoped=true& ***!
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
  return _c("view", { staticClass: "comment" }, [
    _c(
      "view",
      { staticClass: "comment-list" },
      _vm._l(_vm.commentList, function (item, index) {
        return _c(
          "view",
          { key: index, staticClass: "comment-item" },
          [
            _c("view", { staticClass: "comment-box" }, [
              _c("view", { staticClass: "comment-top" }, [
                _c("view", { staticClass: "comment-box-left" }, [
                  _c("image", { attrs: { src: item.comment_avatar } }),
                ]),
                _c("view", { staticClass: "comment-box-rt" }, [
                  _c("view", { staticClass: "comment-name" }, [
                    _vm._v(" " + _vm._s(item.comment_nickname) + " "),
                  ]),
                  _c(
                    "view",
                    { staticClass: "comment-ct" },
                    [
                      _c("i-rate", {
                        key: index,
                        staticClass: "evaluate-rate",
                        attrs: { size: 16, value: item.score },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
              _c("view", { staticClass: "comment-bt" }, [
                _c("view", { staticClass: "comment-txt" }, [
                  _vm._v(" " + _vm._s(item.content) + " "),
                ]),
                _c("view", { staticClass: "comment-date" }, [
                  _vm._v(_vm._s(item.create_at) + " "),
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
                    _c("view", { staticClass: "comment-top" }, [
                      _c("view", { staticClass: "comment-box-left" }, [
                        _c("image", {
                          attrs: { src: descendantsItem.body.comment_avatar },
                        }),
                      ]),
                      _c("view", { staticClass: "comment-box-rt" }, [
                        _c("view", { staticClass: "comment-name" }, [
                          _vm._v(
                            " " +
                              _vm._s(descendantsItem.body.comment_nickname) +
                              " "
                          ),
                        ]),
                        _c(
                          "view",
                          { staticClass: "comment-ct" },
                          [
                            descendantsItem.parent.comment_nickname
                              ? _c("block", [
                                  _c("view", { staticClass: "comment-txt" }, [
                                    _vm._v(" 回复 "),
                                  ]),
                                  _c(
                                    "view",
                                    { staticClass: "comment-reply-nickname" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          descendantsItem.parent
                                            .comment_nickname
                                        )
                                      ),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                            _c(
                              "view",
                              { staticClass: "comment-txt" },
                              [
                                _c("i-rate", {
                                  key: index,
                                  staticClass: "evaluate-rate",
                                  attrs: { size: 16, value: item.score },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _c("view", { staticClass: "comment-bt" }, [
                      _c("view", { staticClass: "comment-txt" }, [
                        _vm._v(
                          " " + _vm._s(descendantsItem.body.content) + " "
                        ),
                      ]),
                      _c("view", { staticClass: "comment-date" }, [
                        _vm._v(" " + _vm._s(descendantsItem.body.create_at)),
                      ]),
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageActivity/pages/comment/index.scss":
/*!******************************************************!*\
  !*** ./src/packageActivity/pages/comment/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageActivity/pages/comment/index.vue":
/*!*****************************************************!*\
  !*** ./src/packageActivity/pages/comment/index.vue ***!
  \*****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageActivity/pages/comment/index.vue");


var config = {"navigationBarTitleText":"评论列表","enablePullDownRefresh":true,"component":true,"usingComponents":{"i-rate":"../../../assets/iview-weapp/dist/rate/index"}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageActivity/pages/comment/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageActivity/pages/comment/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/packageActivity/pages/comment/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/comment/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageActivity/pages/comment/index.vue?vue&type=template&id=cb7ec098&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/packageActivity/pages/comment/index.vue?vue&type=template&id=cb7ec098&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cb7ec098_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=cb7ec098&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageActivity/pages/comment/index.vue?vue&type=template&id=cb7ec098&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cb7ec098_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cb7ec098_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageActivity/pages/comment/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map