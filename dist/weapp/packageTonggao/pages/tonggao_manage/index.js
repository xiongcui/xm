(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageTonggao/pages/tonggao_manage/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/tonggao_manage/index.vue":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/tonggao_manage/index.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_b7426b08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b7426b08&scoped=true& */ "./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=template&id=b7426b08&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_b7426b08_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_b7426b08_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "b7426b08",
  "55f442ee"
  
)

component.options.__file = "src/packageTonggao/pages/tonggao_manage/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageTonggao/pages/tonggao_manage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "tonggao_manage",
  data: function data() {
    return {
      optionMap: {
        NE: "约拍",
        NT: "通告",
        PH: "作品"
      },
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      status: 0,
      pageNum: 1,
      pageSize: 10
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
    scrollToLower: function scrollToLower() {
      this.pageNum++;
      this.query();
    },
    deleteTonggao: function deleteTonggao() {
      wx.showModal({
        title: "温馨提示",
        content: "确定删除该通告吗？",
        success: function success(res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    openTonggao: function openTonggao() {},
    overTonggao: function overTonggao() {},
    refreshTonggao: function refreshTonggao() {},
    manageTonggao: function manageTonggao() {},
    reopenTonggao: function reopenTonggao() {}
  },
  onLoad: function onLoad(options) {
    var that = this; // 获取系统信息

    wx.getSystemInfo({
      success: function success(res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      }
    }); // this.query();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=template&id=b7426b08&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=template&id=b7426b08&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "tonggao-manage" }, [
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
        [_vm._v("展示中")]
      ),
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 2 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(2, 300)
            },
          },
        },
        [_vm._v("已关闭")]
      ),
      _c(
        "view",
        {
          staticClass: "tab-item",
          class: _vm.currentTab == 3 ? "on" : "",
          on: {
            tap: function ($event) {
              return _vm.changeItem(3, 600)
            },
          },
        },
        [_vm._v("审核失败")]
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
                    attrs: { "scroll-y": true },
                    on: { scrolltolower: _vm.scrollToLower },
                  },
                  [
                    _c("view", { staticClass: "tonggao-manage-list" }, [
                      _c("view", { staticClass: "list-content" }, [
                        _c("view", { staticClass: "list_left" }, [
                          _c("view", { staticClass: "list_title" }, [
                            _vm._v(" 标题标题 "),
                          ]),
                          _c("view", { staticClass: "list_desc" }, [
                            _vm._v(
                              " 内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容 "
                            ),
                          ]),
                          _c("view", { staticClass: "list_info" }, [
                            _c("image", {
                              attrs: {
                                src: __webpack_require__(/*! ../../../assets/images/position.png */ "./src/assets/images/position.png"),
                              },
                            }),
                            _vm._v(" 面向地区：北京市 "),
                          ]),
                          _c("view", { staticClass: "list_info" }, [
                            _c("image", {
                              attrs: {
                                src: __webpack_require__(/*! ../../../assets/images/sex1.png */ "./src/assets/images/sex1.png"),
                              },
                            }),
                            _vm._v("性别要求：女"),
                          ]),
                        ]),
                        _c("view", { staticClass: "list_rt" }, [
                          _c("image", {
                            attrs: {
                              src: "https://yuepai-oss.qubeitech.com/invite/upVg5cIs/2c12e84c-8e8c-11ed-ae45-473a871aac32.jpg",
                            },
                          }),
                        ]),
                        _c("view", { staticClass: "list_status" }, [
                          _vm._v("已结束"),
                        ]),
                        _c("view", { staticClass: "list_tag" }, [
                          _vm._v("人像创作"),
                        ]),
                      ]),
                      _c("view", { staticClass: "list_num" }, [
                        _c("view", { staticClass: "list_time" }, [
                          _c("image", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../assets/images/common/time.png */ "./src/assets/images/common/time.png"),
                            },
                          }),
                          _vm._v(" 222 "),
                        ]),
                        _c("view", { staticClass: "list_yuepai" }, [
                          _c("image", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../assets/images/user/index/yuepai.png */ "./src/assets/images/user/index/yuepai.png"),
                            },
                          }),
                          _vm._v(" 收到约拍 34 "),
                        ]),
                        _c("view", { staticClass: "list_read" }, [
                          _c("image", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../assets/images/eyes.png */ "./src/assets/images/eyes.png"),
                            },
                          }),
                          _vm._v(" 阅读 32 "),
                        ]),
                      ]),
                      _c("view", { staticClass: "list_bottom" }, [
                        _c("view", { staticClass: "list_bt_left" }, [
                          _c(
                            "view",
                            {
                              staticClass: "btn-grey",
                              on: { tap: _vm.overTonggao },
                            },
                            [_vm._v("结束通告")]
                          ),
                        ]),
                        _c("view", { staticClass: "list_bt_rt" }, [
                          _c(
                            "view",
                            {
                              staticClass: "btn-red",
                              on: { tap: _vm.refreshTonggao },
                            },
                            [_vm._v("刷新排名")]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: "btn-red",
                              on: { tap: _vm.reopenTonggao },
                            },
                            [_vm._v("重新打开")]
                          ),
                        ]),
                      ]),
                    ]),
                  ]
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

/***/ "./src/assets/images/sex1.png":
/*!************************************!*\
  !*** ./src/assets/images/sex1.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sex1.png";

/***/ }),

/***/ "./src/packageTonggao/pages/tonggao_manage/index.scss":
/*!************************************************************!*\
  !*** ./src/packageTonggao/pages/tonggao_manage/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageTonggao/pages/tonggao_manage/index.vue":
/*!***********************************************************!*\
  !*** ./src/packageTonggao/pages/tonggao_manage/index.vue ***!
  \***********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/tonggao_manage/index.vue");


var config = {"navigationBarTitleText":"我收到的通告"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageTonggao/pages/tonggao_manage/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=template&id=b7426b08&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=template&id=b7426b08&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b7426b08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b7426b08&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/tonggao_manage/index.vue?vue&type=template&id=b7426b08&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b7426b08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b7426b08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageTonggao/pages/tonggao_manage/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map