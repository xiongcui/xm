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


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      zuopinInfo: {
        author: {
          career_list: []
        },
        statistic: {}
      }
    };
  },
  methods: {
    bindended: function bindended() {
      wx.createVideoContext("video").exitFullScreen();
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
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* photoInfo */ "k"])(params);

              case 3:
                res = _context.sent;
                _this.zuopinInfo = res.data.data;
                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function onLoad(options) {
    this.oid = options.oid;
    this.author_id = options.author_id;

    if (this.oid && this.author_id) {
      var params = {
        oid: this.oid,
        author_id: this.author_id
      };
      this.photoInfo(params);
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
                            src: __webpack_require__(/*! ../../../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                          },
                        })
                      : _vm._e(),
                    _vm.zuopinInfo.author.sex == 0
                      ? _c("image", {
                          staticClass: "zuopin_sex",
                          attrs: {
                            src: __webpack_require__(/*! ../../../../assets/images/nv.png */ "./src/assets/images/nv.png"),
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
                    src: __webpack_require__(/*! ../../../../assets/images/common/icon_real.png */ "./src/assets/images/common/icon_real.png"),
                  },
                })
              : _c("image", {
                  staticClass: "zuopin_p_img",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../assets/images/common/icon_pledge_none.png */ "./src/assets/images/common/icon_pledge_none.png"),
                  },
                }),
            _vm.zuopinInfo.author.is_security
              ? _c("image", {
                  staticClass: "zuopin_p_img",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../assets/images/common/icon_pledge.png */ "./src/assets/images/common/icon_pledge.png"),
                  },
                })
              : _c("image", {
                  staticClass: "zuopin_p_img",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../assets/images/common/icon_real_none.png */ "./src/assets/images/common/icon_real_none.png"),
                  },
                }),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "zuopin_right" }, [
        _c("image", {
          staticClass: "follow",
          attrs: {
            src: __webpack_require__(/*! ../../../../assets/images/common/follow_red.png */ "./src/assets/images/common/follow_red.png"),
          },
        }),
        _c("image", {
          staticClass: "share",
          attrs: {
            src: __webpack_require__(/*! ../../../../assets/images/common/icon_share.png */ "./src/assets/images/common/icon_share.png"),
          },
        }),
      ]),
    ]),
    _c("view", { staticClass: "zuopin_info" }, [
      _c("view", { staticClass: "zuopin_title" }, [
        _vm._v(" " + _vm._s(_vm.zuopinInfo.title) + " "),
      ]),
      _c("view", { staticClass: "zuopin_content" }, [
        _vm._v(" " + _vm._s(_vm.zuopinInfo.content) + " "),
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
              src: __webpack_require__(/*! ../../../../assets/images/common/time.png */ "./src/assets/images/common/time.png"),
            },
          }),
          _vm._v(" " + _vm._s(_vm.zuopinInfo.date_humanize) + " "),
        ]),
        _c("view", { staticClass: "zuopin_bottom_read" }, [
          _c("image", {
            attrs: {
              src: __webpack_require__(/*! ../../../../assets/images/user/index/invoice.png */ "./src/assets/images/user/index/invoice.png"),
            },
          }),
          _vm._v(" 阅读 " + _vm._s(_vm.zuopinInfo.statistic.read_cnt) + " "),
        ]),
        _c("view", { staticClass: "zuopin_bottom_dianzan" }, [
          _c("image", {
            attrs: {
              src: __webpack_require__(/*! ../../../../assets/images/common/icon_like.png */ "./src/assets/images/common/icon_like.png"),
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
            _c("image", {
              attrs: {
                src: __webpack_require__(/*! ../../../../assets/images/common/icon_like.png */ "./src/assets/images/common/icon_like.png"),
              },
            }),
            _vm._v(" " + _vm._s(_vm.zuopinInfo.statistic.vote_cnt) + " "),
          ]),
          _c("view", { staticClass: "zuopin_fixed_item" }, [
            _c("image", {
              attrs: {
                src: __webpack_require__(/*! ../../../../assets/images/common/icon_favorite.png */ "./src/assets/images/common/icon_favorite.png"),
              },
            }),
            _vm._v(" " + _vm._s(_vm.zuopinInfo.statistic.collect_cnt) + " "),
          ]),
        ]),
        _c("view", { staticClass: "zuopin_fixed_rt" }, [_vm._v(" 约拍 ")]),
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