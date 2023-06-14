(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/modelcard/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/modelcard/index.vue":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/modelcard/index.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_3771463a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3771463a&scoped=true& */ "./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=template&id=3771463a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_3771463a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_3771463a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "3771463a",
  "1d2c19f0"
  
)

component.options.__file = "src/packageMoka/pages/moka/modelcard/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/modelcard/index.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "modelcard",
  data: function data() {
    return {
      statusBarHeight: 60,
      showpage: 1,
      currentTab: 0,
      vercurrentTab: 0
    };
  },
  methods: {
    changePageTab: function changePageTab(page) {
      this.showpage = page;
    },
    backpage: function backpage() {
      wx.navigateBack();
    },
    bindChange: function bindChange(t) {
      this.currentTab = t.detail.current;
    },
    swichNav: function swichNav(t) {
      if (this.currentTab === t.currentTarget.dataset.current) return false;
      this.currentTab = t.currentTarget.dataset.current;
    },
    bindVerChange: function bindVerChange(t) {
      this.vercurrentTab = t.detail.current;
    },
    swichNavVer: function swichNavVer(t) {
      if (this.vercurrentTab === t.currentTarget.dataset.current) return false;
      this.vercurrentTab = t.currentTarget.dataset.current;
    },
    chooseMocard: function chooseMocard() {},
    chooseMocardV: function chooseMocardV() {}
  },
  created: function created() {
    this.globalData = this.globalData;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=template&id=3771463a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=template&id=3771463a&scoped=true& ***!
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
  return _c("view", { staticClass: "modelcard" }, [
    _c(
      "view",
      {
        staticClass: "statusbar",
        style: { height: _vm.globalData.navHeight + "px" },
      },
      [
        _c("view", { staticClass: "page_nav ub" }, [
          _c(
            "view",
            { staticClass: "page_nav_left", on: { tap: _vm.backpage } },
            [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../../../assets/images/common/icon_right.png */ "./src/assets/images/common/icon_right.png"),
                },
              }),
            ]
          ),
          _c("view", { staticClass: "page_nav_tab ub" }, [
            _c(
              "view",
              {
                class:
                  "page_nav_tab_left ub-f1 " +
                  (_vm.showpage == 1 ? "page_nav_tab_on" : ""),
                attrs: { "data-showpage": "1" },
                on: {
                  tap: function ($event) {
                    return _vm.changePageTab(1)
                  },
                },
              },
              [_vm._v("横版")]
            ),
            _c("view", { staticClass: "page_nav_tab_line" }),
            _c(
              "view",
              {
                class:
                  "page_nav_tab_right ub-f1 " +
                  (_vm.showpage == 2 ? "page_nav_tab_on" : ""),
                attrs: { "data-showpage": "2" },
                on: {
                  tap: function ($event) {
                    return _vm.changePageTab(2)
                  },
                },
              },
              [_vm._v("竖版")]
            ),
          ]),
          _c("view", { staticClass: "ub-f1" }),
        ]),
      ]
    ),
    _vm.showpage == 1
      ? _c(
          "view",
          {
            staticClass: "main",
            style: { marginTop: _vm.globalData.navHeight + "px" },
          },
          [
            _c("view", { staticClass: "swiper-tab" }, [
              _c(
                "view",
                {
                  staticClass: "swiper-tab-list",
                  attrs: { "data-current": "0" },
                  on: { tap: _vm.swichNav },
                },
                [
                  _c(
                    "view",
                    { class: "tab_item " + (_vm.currentTab == 0 ? "on" : "") },
                    [_vm._v("侧边式")]
                  ),
                  _c("view", {
                    class: "tab_line " + (_vm.currentTab == 0 ? "online" : ""),
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "swiper-tab-list",
                  attrs: { "data-current": "1" },
                  on: { tap: _vm.swichNav },
                },
                [
                  _c(
                    "view",
                    { class: "tab_item " + (_vm.currentTab == 1 ? "on" : "") },
                    [_vm._v("插入式")]
                  ),
                  _c("view", {
                    class: "tab_line " + (_vm.currentTab == 1 ? "online" : ""),
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "swiper-tab-list",
                  attrs: { "data-current": "2" },
                  on: { tap: _vm.swichNav },
                },
                [
                  _c(
                    "view",
                    { class: "tab_item " + (_vm.currentTab == 2 ? "on" : "") },
                    [_vm._v("底部式")]
                  ),
                  _c("view", {
                    class: "tab_line " + (_vm.currentTab == 2 ? "online" : ""),
                  }),
                ]
              ),
            ]),
            _c(
              "swiper",
              {
                staticClass: "swiper-box",
                attrs: { current: _vm.currentTab },
                on: { change: _vm.bindChange },
              },
              [
                _c(
                  "swiper-item",
                  { staticClass: "swiper_item" },
                  [
                    _c(
                      "scroll-view",
                      {
                        staticClass: "scroll_block",
                        attrs: { "scroll-y": "true" },
                      },
                      [
                        _c("view", { staticClass: "top_gap" }),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("1竖图4横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001010501" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dml59obb1o061t818c8h3d4u57.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("4竖图2横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001010601" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dml5a9r51jid1jgn9u81b4s1o2u7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("5竖图2横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001010701" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dml5aqhvnbq6jjkk519blj3a7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("7竖图3横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001011001" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dml5bukb6hh1h2k152e6kd9t27.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("7竖图3横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001011002" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dneosb7r1bjf11aq1ftkq4c129b7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("4竖图9横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001011301" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dml5d3nv127212m612gq1bm1opt7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "bottom_gap" }),
                      ]
                    ),
                  ],
                  1
                ),
                _c(
                  "swiper-item",
                  { staticClass: "swiper_item" },
                  [
                    _c(
                      "scroll-view",
                      {
                        staticClass: "scroll_block",
                        attrs: { "scroll-y": "true" },
                      },
                      [
                        _c("view", { staticClass: "top_gap" }),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("6竖图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001020601" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dml5dp5m1b0987vo35ngj2id7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("5竖图2横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001020701" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dnep4b951i62m21i2drrl1bbs7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("4竖图4横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001020801" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dnep4p4m1o9v10m716k514lvd4l7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("9竖图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001020901" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dml5fbsq19vf1knseak15251car7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("7竖图3横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001021001" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dnep5dd4h5lue1ddf26p1cj57.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("7竖图5横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001021201" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dnepg8hs1ti71dfc1dhr1mps1op87.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "bottom_gap" }),
                      ]
                    ),
                  ],
                  1
                ),
                _c(
                  "swiper-item",
                  { staticClass: "swiper_item" },
                  [
                    _c(
                      "scroll-view",
                      {
                        staticClass: "scroll_block",
                        attrs: { "scroll-y": "true" },
                      },
                      [
                        _c("view", { staticClass: "top_gap" }),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("1竖图4横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001030501" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dneoun6uevl1i625rj1q181a5o7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("6竖图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001030601" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dneov61u1ilg6r11qmdk07acc7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("8竖图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001030801" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dnep02uh13h11bb2oqq1lgts8e7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("3竖图4横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001030701" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dneovkengi2h2q171uvumbm77.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("7竖图2横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001030901" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dnep0nqsm9lvnq1v0m1h2j1i8d7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("9竖图2横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001031101" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dnep2h55112p91a1862f9a1jro7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("10竖图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001031001" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dnep25bk1j0r1linglodks9e97.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "item_block" }, [
                          _c("view", { staticClass: "title ub" }, [
                            _c("view", { staticClass: "side_gap2" }),
                            _c("view", { staticClass: "title_line" }),
                            _c("view", { staticClass: "title_name ub-f1" }, [
                              _vm._v("1竖图12横图"),
                            ]),
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: "item",
                              attrs: { "data-cardid": "1001031301" },
                              on: { tap: _vm.chooseMocard },
                            },
                            [
                              _c("image", {
                                attrs: {
                                  mode: "widthFix",
                                  src: "http://imgs.weimoka.com/o_1dnep2ueoncg1aa51p9mgl0blr7.png",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("view", { staticClass: "bottom_gap" }),
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
        )
      : _c(
          "view",
          {
            staticClass: "main",
            style: { marginTop: _vm.globalData.navHeight + "px" },
          },
          [
            _c("view", { staticClass: "swiper-tab ub" }, [
              _c("view", { staticClass: "list_shuban_gap_left" }),
              _c(
                "view",
                {
                  staticClass: "list_shuban",
                  attrs: { "data-current": "0" },
                  on: { tap: _vm.swichNavVer },
                },
                [
                  _c(
                    "view",
                    {
                      class: "tab_item " + (_vm.vercurrentTab == 0 ? "on" : ""),
                    },
                    [_vm._v("4图")]
                  ),
                  _c("view", {
                    class:
                      "tab_line " + (_vm.vercurrentTab == 0 ? "online" : ""),
                  }),
                ]
              ),
              _c("view", { staticClass: "list_shuban_gap" }),
              _c(
                "view",
                {
                  staticClass: "list_shuban",
                  attrs: { "data-current": "1" },
                  on: { tap: _vm.swichNavVer },
                },
                [
                  _c(
                    "view",
                    {
                      class: "tab_item " + (_vm.vercurrentTab == 1 ? "on" : ""),
                    },
                    [_vm._v("5图(1)")]
                  ),
                  _c("view", {
                    class:
                      "tab_line " + (_vm.vercurrentTab == 1 ? "online" : ""),
                  }),
                ]
              ),
              _c("view", { staticClass: "list_shuban_gap2" }),
              _c(
                "view",
                {
                  staticClass: "list_shuban",
                  attrs: { "data-current": "2" },
                  on: { tap: _vm.swichNavVer },
                },
                [
                  _c(
                    "view",
                    {
                      class: "tab_item " + (_vm.vercurrentTab == 2 ? "on" : ""),
                    },
                    [_vm._v("5图(2)")]
                  ),
                  _c("view", {
                    class:
                      "tab_line " + (_vm.vercurrentTab == 2 ? "online" : ""),
                  }),
                ]
              ),
              _c("view", { staticClass: "list_shuban_gap" }),
              _c(
                "view",
                {
                  staticClass: "list_shuban",
                  attrs: { "data-current": "3" },
                  on: { tap: _vm.swichNavVer },
                },
                [
                  _c(
                    "view",
                    {
                      class: "tab_item " + (_vm.vercurrentTab == 3 ? "on" : ""),
                    },
                    [_vm._v("6图")]
                  ),
                  _c("view", {
                    class:
                      "tab_line " + (_vm.vercurrentTab == 3 ? "online" : ""),
                  }),
                ]
              ),
              _c("view", { staticClass: "list_shuban_gap" }),
              _c(
                "view",
                {
                  staticClass: "list_shuban",
                  attrs: { "data-current": "4" },
                  on: { tap: _vm.swichNavVer },
                },
                [
                  _c(
                    "view",
                    {
                      class: "tab_item " + (_vm.vercurrentTab == 4 ? "on" : ""),
                    },
                    [_vm._v("7图")]
                  ),
                  _c("view", {
                    class:
                      "tab_line " + (_vm.vercurrentTab == 4 ? "online" : ""),
                  }),
                ]
              ),
            ]),
            _c(
              "swiper",
              {
                staticClass: "swiper-box",
                attrs: { current: _vm.vercurrentTab },
                on: { change: _vm.bindVerChange },
              },
              [
                _c("swiper-item", { staticClass: "swiper_item" }, [
                  _c(
                    "view",
                    {
                      staticClass: "vertical_item",
                      attrs: { "data-cardid": "1002030401" },
                      on: { tap: _vm.chooseMocardV },
                    },
                    [
                      _c("image", {
                        attrs: {
                          mode: "aspectFit",
                          src: "http://imgs.weimoka.com/o_1dml5lkrjljh1mq71geaj9811ha7.png",
                        },
                      }),
                    ]
                  ),
                ]),
                _c("swiper-item", { staticClass: "swiper_item" }, [
                  _c(
                    "view",
                    {
                      staticClass: "vertical_item",
                      attrs: { "data-cardid": "1002010501" },
                      on: { tap: _vm.chooseMocardV },
                    },
                    [
                      _c("image", {
                        attrs: {
                          mode: "aspectFit",
                          src: "http://imgs.weimoka.com/o_1dml5mk7nljdim81cd353g1vu07.png",
                        },
                      }),
                    ]
                  ),
                ]),
                _c("swiper-item", { staticClass: "swiper_item" }, [
                  _c(
                    "view",
                    {
                      staticClass: "vertical_item",
                      attrs: { "data-cardid": "1002020501" },
                      on: { tap: _vm.chooseMocardV },
                    },
                    [
                      _c("image", {
                        attrs: {
                          mode: "aspectFit",
                          src: "http://imgs.weimoka.com/o_1dml5rrl01mbv1voo1rsq1nno53i7.png",
                        },
                      }),
                    ]
                  ),
                ]),
                _c("swiper-item", { staticClass: "swiper_item" }, [
                  _c(
                    "view",
                    {
                      staticClass: "vertical_item",
                      attrs: { "data-cardid": "1002020601" },
                      on: { tap: _vm.chooseMocardV },
                    },
                    [
                      _c("image", {
                        attrs: {
                          mode: "aspectFit",
                          src: "http://imgs.weimoka.com/o_1dml5sbbm1e3f1oop17ilviuf6n7.png",
                        },
                      }),
                    ]
                  ),
                ]),
                _c("swiper-item", { staticClass: "swiper_item" }, [
                  _c(
                    "view",
                    {
                      staticClass: "vertical_item",
                      attrs: { "data-cardid": "1002010701" },
                      on: { tap: _vm.chooseMocardV },
                    },
                    [
                      _c("image", {
                        attrs: {
                          mode: "aspectFit",
                          src: "http://imgs.weimoka.com/o_1dmnrba2p3vs4n3f61kqfkcr7.png",
                        },
                      }),
                    ]
                  ),
                ]),
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

/***/ "./src/assets/images/common/icon_right.png":
/*!*************************************************!*\
  !*** ./src/assets/images/common/icon_right.png ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAMAAABfE/ZQAAAAz1BMVEUAAABVVVVjY2Nra2tmZmZhYWFoaGhkZGRgYGBqampmZmZiYmJoaGhkZGRqampmZmZoaGhkZGRpaWllZWVlZWVnZ2dnZ2dlZWVoaGhlZWVmZmZmZmZlZWVmZmZmZmZmZmZnZ2dmZmZnZ2dlZWVnZ2dmZmZnZ2dlZWVnZ2dnZ2dnZ2dlZWVnZ2dmZmZmZmZmZmZmZmZnZ2dmZmZmZmZmZmZmZmZmZmZlZWVmZmZmZmZmZmZmZmZlZWVmZmZmZmZmZmZmZmZmZmZlZWVmZmZmZmasldbwAAAARHRSTlMACRITFBUWFxgYGRobHB0eICEiMGBhY2Vnamxub3Fzdnd6fH6BhIaIiIuNoa620dLU1dbX2Nna29zd3t/g4eLr7P3+/gIezZcAAACYSURBVBjTTc/FAoIAEEVR7AK7xe4uVGyB+//f5G6Y2Z27emMsvrah7wcDbRsY6tALYKRDN4CxDp0AJjq0fZjq0PJhpkPTg7kODQ+WOtQ9WOlQ82CtQx+ohCzc4RkRWi4ck0LzBqeUMHcFJyPMOnDJCdNnuJnC5BFcS5g4wD0vjO/hURDGdvAqhrM28C6p1Vs+Zf1FtJrR/APIKBjhjJdrOgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/packageMoka/pages/moka/modelcard/index.scss":
/*!*********************************************************!*\
  !*** ./src/packageMoka/pages/moka/modelcard/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/modelcard/index.vue":
/*!********************************************************!*\
  !*** ./src/packageMoka/pages/moka/modelcard/index.vue ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/modelcard/index.vue");


var config = {"navigationStyle":"custom","navigationBarBackgroundColor":"#FE5457","navigationBarTextStyle":"white","backgroundColor":"#FE5457","backgroundColorTop":"#FE5457","backgroundColorBottom":"#f7f7f7","backgroundTextStyle":"dark"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/modelcard/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=template&id=3771463a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=template&id=3771463a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3771463a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3771463a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/modelcard/index.vue?vue&type=template&id=3771463a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3771463a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3771463a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/modelcard/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map