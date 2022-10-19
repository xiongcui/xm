(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/home/index.vue":
/*!********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/home/index.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_5b685826___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5b685826& */ "./src/pages/home/index.vue?vue&type=template&id=5b685826&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/home/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_5b685826___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_5b685826___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "0f729374"
  
)

component.options.__file = "src/pages/home/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/pages/home/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "home",
  data: function data() {
    return {
      globalData: {
        navHeight: 0,
        navTop: 0,
        navObj: 0,
        navObjWid: 0
      },
      statusBarHeight: 20,
      search: "",
      background: ["demo-text-1", "demo-text-2", "demo-text-3"],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500,
      sizer_num: [],
      navActive: 0,
      navList: [{
        name: "约拍",
        value: 0
      }, {
        name: "约拍2",
        value: 1
      }, {
        name: "约拍3",
        value: 2
      }, {
        name: "约拍4",
        value: 3
      }, {
        name: "约拍5",
        value: 4
      }, {
        name: "约拍6",
        value: 5
      }, {
        name: "约拍7",
        value: 6
      }, {
        name: "约拍8",
        value: 7
      }]
    };
  },
  methods: {
    map: function map() {
      wx.getLocation({
        type: "gcj02",
        //返回可以用于 wx.openLocation 的经纬度
        success: function success(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 18
          });
        }
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    var menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: function success(res) {
        //导航高度
        var statusBarHeight = res.statusBarHeight,
            navTop = menuButtonObject.top,
            navObjWid = res.windowWidth - menuButtonObject.right + menuButtonObject.width,
            // 胶囊按钮与右侧的距离 = windowWidth - right+胶囊宽度
        navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;
        _this.globalData.navHeight = navHeight; //导航栏总体高度

        _this.globalData.navTop = navTop; //胶囊距离顶部距离

        _this.globalData.navObj = menuButtonObject.height; //胶囊高度

        _this.globalData.navObjWid = navObjWid; //胶囊宽度(包括右边距离)
        // console.log(navHeight,navTop,menuButtonObject.height,navObjWid)
      },
      fail: function fail(err) {
        console.log(err);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=template&id=5b685826&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/index.vue?vue&type=template&id=5b685826& ***!
  \***********************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "home" }, [
    _c(
      "view",
      {
        staticClass: "custom_head",
        style: { height: _vm.globalData.navHeight + "px" },
      },
      [
        _c(
          "view",
          {
            staticClass: "flex-row",
            style: {
              height: _vm.globalData.navObj + "px",
              "padding-top": _vm.globalData.navTop + "px",
              "padding-right": _vm.globalData.navObjWid + 5 + "px",
            },
          },
          [
            _c("view", { staticClass: "head_sign" }, [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/common/icon_sign.png */ "./src/assets/images/common/icon_sign.png"),
                },
              }),
              _c("text", [_vm._v("签到")]),
            ]),
            _c("view", { staticClass: "search" }, [
              _c("input", {
                staticClass: "search-input",
                attrs: {
                  value: _vm.search,
                  placeholder: "搜索约拍",
                  "placeholder-class": "placeholder-style",
                },
              }),
            ]),
          ]
        ),
      ]
    ),
    _c("view", { style: { height: _vm.globalData.navHeight + "px" } }),
    _c("view", { staticClass: "page-bg" }),
    _c(
      "view",
      { staticClass: "page-section page-section-spacing swiper" },
      [
        _c(
          "swiper",
          {
            attrs: {
              "indicator-dots": _vm.indicatorDots,
              autoplay: _vm.autoplay,
              interval: _vm.interval,
              duration: _vm.duration,
            },
          },
          _vm._l(_vm.background, function (item, index) {
            return _c(
              "block",
              { key: index },
              [
                _c("swiper-item", [
                  _c("view", { staticClass: "swiper-item" }, [
                    _c("image", {
                      staticClass: "swiper-item-img",
                      attrs: {
                        mode: "center",
                        src: __webpack_require__("./src/assets/images sync recursive ^\\.\\/lanmao.*\\.jpg$")("./lanmao" +
                          (index + 1) +
                          ".jpg"),
                      },
                    }),
                  ]),
                ]),
              ],
              1
            )
          }),
          1
        ),
      ],
      1
    ),
    _c("view", { staticClass: "page_nav" }, [
      _c("view", { staticClass: "page_nav_item" }, [
        _c("view", { staticClass: "page_nav_icon" }, [
          _c("image", {
            staticClass: "page_nav_img",
            attrs: { src: __webpack_require__(/*! ../../assets/images/user/index/like.png */ "./src/assets/images/user/index/like.png") },
          }),
        ]),
        _c("text", { staticClass: "page_nav_text" }, [_vm._v("通告")]),
      ]),
      _c("view", { staticClass: "page_nav_item" }, [
        _c("view", { staticClass: "page_nav_icon" }, [
          _c("image", {
            staticClass: "page_nav_img",
            attrs: { src: __webpack_require__(/*! ../../assets/images/user/index/like.png */ "./src/assets/images/user/index/like.png") },
          }),
        ]),
        _c("text", { staticClass: "page_nav_text" }, [_vm._v("约单")]),
      ]),
      _c("view", { staticClass: "page_nav_item" }, [
        _c("view", { staticClass: "page_nav_icon" }, [
          _c("image", {
            staticClass: "page_nav_img",
            attrs: { src: __webpack_require__(/*! ../../assets/images/user/index/like.png */ "./src/assets/images/user/index/like.png") },
          }),
        ]),
        _c("text", { staticClass: "page_nav_text" }, [_vm._v("活动")]),
      ]),
      _c("view", { staticClass: "page_nav_item" }, [
        _c("view", { staticClass: "page_nav_icon" }, [
          _c("image", {
            staticClass: "page_nav_img",
            attrs: { src: __webpack_require__(/*! ../../assets/images/user/index/like.png */ "./src/assets/images/user/index/like.png") },
          }),
        ]),
        _c("text", { staticClass: "page_nav_text" }, [_vm._v("待定")]),
      ]),
    ]),
    _c(
      "view",
      { staticClass: "nav_list" },
      [
        _c(
          "scroll-view",
          {
            staticClass: "swiper_tab",
            attrs: { enhanced: true, scrollX: true },
          },
          [
            _c(
              "view",
              { staticClass: "nav_list_ct" },
              _vm._l(_vm.navList, function (item, index) {
                return _c(
                  "text",
                  {
                    key: index,
                    staticClass: "nav_item",
                    class: _vm.navActive == index ? "nav_active" : "",
                  },
                  [_vm._v(_vm._s(item.name))]
                )
              }),
              0
            ),
          ]
        ),
        _c("view", { staticClass: "sizer_block ub" }, [
          _c("view", { staticClass: "gradient" }),
          _c(
            "view",
            {
              staticClass: "sizer ub",
              class: _vm.sizer_num.length ? "is_sizer" : "",
            },
            [
              _c(
                "view",
                { staticClass: "ub" },
                [
                  _c("view", [_vm._v("筛选")]),
                  _vm.sizer_num.length
                    ? _c("block", [
                        _c("view", { staticClass: "sizer_dian" }, [
                          _vm._v("·"),
                        ]),
                        _c("view", [_vm._v(_vm._s(_vm.sizer_num.length))]),
                      ])
                    : _vm._e(),
                ],
                1
              ),
              _c("view", { staticClass: "sizer_img" }, [
                _vm.sizer_num.length
                  ? _c("image", {
                      attrs: {
                        src: __webpack_require__(/*! ../../assets/images/common/sizered.png */ "./src/assets/images/common/sizered.png"),
                      },
                    })
                  : _c("image", {
                      attrs: {
                        src: __webpack_require__(/*! ../../assets/images/common/sizer.png */ "./src/assets/images/common/sizer.png"),
                      },
                    }),
              ]),
            ]
          ),
        ]),
      ],
      1
    ),
    _c("view", { staticClass: "list_main" }, [
      _c("view", { staticClass: "list_box" }, [
        _c("view", { staticClass: "list_top" }, [
          _c("view", { staticClass: "list_top_left" }, [
            _c("image", {
              staticClass: "avatar",
              attrs: { src: __webpack_require__(/*! ../../assets/images/avatar_default.png */ "./src/assets/images/avatar_default.png") },
            }),
            _c("view", { staticClass: "list_info" }, [
              _c("view", { staticClass: "list_name" }, [_vm._v(" BinWon ")]),
              _c("view", { staticClass: "list_p" }, [
                _c("text", [_vm._v(" 摄影 | 北京")]),
                _c("image", {
                  staticClass: "list_p_img",
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/images/common/icon_real.png */ "./src/assets/images/common/icon_real.png"),
                  },
                }),
                _c("image", {
                  staticClass: "list_p_img",
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/images/common/icon_pledge.png */ "./src/assets/images/common/icon_pledge.png"),
                  },
                }),
              ]),
            ]),
          ]),
          _c("view", { staticClass: "list_collection" }, [
            _c("image", {
              attrs: {
                src: __webpack_require__(/*! ../../assets/images/common/icon_favorite.png */ "./src/assets/images/common/icon_favorite.png"),
              },
            }),
          ]),
        ]),
        _c("view", { staticClass: "list_content" }, [
          _c("view", { staticClass: "list_title" }, [
            _vm._v("约模特·希望互勉"),
          ]),
          _c("view", { staticClass: "list_loction" }, [_vm._v(" 北京 ")]),
        ]),
        _c("view", { staticClass: "list_desc" }, [
          _vm._v(
            " 内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容 "
          ),
        ]),
        _c(
          "view",
          { staticClass: "list_img" },
          [
            _c("scroll-view", { attrs: { enhanced: true, scrollX: true } }, [
              _c("image", {
                staticClass: "list_img_item",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/lanmao1.jpg */ "./src/assets/images/lanmao1.jpg"),
                  mode: "center",
                },
              }),
              _c("image", {
                staticClass: "list_img_item",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/lanmao1.jpg */ "./src/assets/images/lanmao1.jpg"),
                  mode: "center",
                },
              }),
              _c("image", {
                staticClass: "list_img_item",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/lanmao1.jpg */ "./src/assets/images/lanmao1.jpg"),
                  mode: "center",
                },
              }),
              _c("image", {
                staticClass: "list_img_item",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/lanmao1.jpg */ "./src/assets/images/lanmao1.jpg"),
                  mode: "center",
                },
              }),
            ]),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/lanmao.*\\.jpg$":
/*!****************************************************!*\
  !*** ./src/assets/images sync ^\.\/lanmao.*\.jpg$ ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./lanmao1.jpg": "./src/assets/images/lanmao1.jpg",
	"./lanmao2.jpg": "./src/assets/images/lanmao2.jpg",
	"./lanmao3.jpg": "./src/assets/images/lanmao3.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/lanmao.*\\.jpg$";

/***/ }),

/***/ "./src/assets/images/common/icon_favorite.png":
/*!****************************************************!*\
  !*** ./src/assets/images/common/icon_favorite.png ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/icon_favorite.png";

/***/ }),

/***/ "./src/assets/images/common/icon_pledge.png":
/*!**************************************************!*\
  !*** ./src/assets/images/common/icon_pledge.png ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAMAAADthUvBAAAAmVBMVEUTspoTspsUtZoAAAATspr////2/PswvKfU8e0btZ3e9PB81MeN2s5QxrRGwrA3vqq56OFVx7b8/v6q49rP7+qE1spozr4quqSl4djy+/pLxLLo9/W86eLL7uiv5d2b3tS05t9Cwq47v6shtqD5/fyJ2MwmuKLD6+Xu+fiU3NFw0MJkzL2h4NcVs5tgy7tbybni9fNTx7W/6uSsCw4ZAAAABHRSTlPwrSYAJ4s9KgAAAl1JREFUSMe91utyojAYgGFsvw8Ih3I+iYoCglCPvf+LW5OwELfp1u2svj+QkWGeQMhMlNeXmQIPTJm9vCovCjy4KzGDhzdTFHh4n4zKXPUH+M9NCGm0eR9kiGhYJydpCPwlx4bPlcl3SFwjyzeQp3r8Tu+mCliWAZ9b6/BuDnlSZMkEvXPgtMqYsgbaHm/aCIipDvE/q9qEsM5YfiBFdHQvJQFeYntLdPmtmtD7DRLt3mkmvgEtUisI02HIXyEFiK05cpvNkI3rGqrr2lHO54cjZLeHHyPb/j7EQvufkG0nIGEgIuLrukGcGucAoW6x8m+R1K83dyHZllZQhIQqRdaGYdTZ9dB9iWh5WwEUPrYHATmvxloBOSRRvaTpFNlnPUVoego8OXLxsSUdPYCA5AshbUDOvbEVX9fq+HYfwh7i7OOyAsmcCJFLi1mXiEgDVyRWab7PfmLpYgzYdCCG1IAW118hZoZZXv0x8RQpTdNcn/NQLa4npQQJ0GArSt8zg2RoSZEG4BRpw9el0S4jQi/nsZ5Gy4P8dXmIMUxFiKUMIf5x+rqQJyLuEvT0oFtyBHTMpie0a1yADNHQG5HGGSIjslWdKwJzP5YjpYo7G3jH63nyG1mB0Am1ERHiyGGPMf+6TN+UIuCp6BcNHW2AuHuDocVuQ8bKDz7ZhQGJPVVyJMAIOAIWmlIE5jlivShaH9Eop7H7KERHSIJ09wE9TgUciftpnXSOHIFmXyNN7Yg4Dcd47MhuTd3UAZJMVQz5fjHytOhDd80GfhIBWRx5Qk/ZEj1lc/eUbepTNty/AL2BXKma9nd2AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/common/icon_real.png":
/*!************************************************!*\
  !*** ./src/assets/images/common/icon_real.png ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAMAAADthUvBAAAAhFBMVEVXgf9Xgv9XgP8AAABXgf////9dhf/B0f+rwP+Hpf/k6v/F1P9rkP/4+v/W4P+Nqv/6/P/P2/+WsP+Trv9+nv9zlv9ukv9hiP/d5f+ctf94mv/t8v/2+P/m7P+xxP+Kp/+ku//y9f/v8/9ljP/a4/+Cof/o7v+7zP+1yP+guP/K1/+Zsv+5oLSFAAAABHRSTlPwrSYAJ4s9KgAAAh5JREFUSMfNlouOqjAQhtGdHyp3FYoIglxE3X3/9zuVdrmsEN2caPZLwMnE5Gs7TDPax3Kh0QvRFssPbanRixGKBb2chabRyxGON/BDEjHT900W0TMEq/ucFz6UBCVayqBLhasRQ/2l0OkHDKtHkjAFEsNIgLRb0Bkj9iQ4bVoYMhl0S9r6CZMEsxIXyEiQAW53gPaArZRYcIbAIMkRyaElQTwnCQFLRhYQ0gQnJXFH2VpKuItMZawkmpPEQKBqg34p7GtKotcXm8guTt8SbvhlvpdFuiKfrQkDbBnZACPFzriT5B7R5uAwsts6b2+vL4dFYWEGrUOt8PFO5iUC/VYBJ+Y49V+/eCoDrLL83vFsTXaN1eF+S9a7nIhTcFe6DfxG/ufJr0tJkvUALjKyArdwi3HbVsckZdHv+qQ/rnv2ZkxkmNTDYxdwzkwyK7FrDDp+XpJ7itJtf3LhNBrAL0xFiTlJUEAg765ZSSWeFGMckT4YXmSeSXG8l/SHlTJ5TrMSHZ54SXhhqYgkjyV6A5htn6x8CPzVlIT3N6BtIr1wGT8ryYCyogmJNSoHuIriotnHB3wGv5BUDpDTBOtir3eEbik7LzZhVDdpDcvuJAdDsZuWHIGa+o30W8l9DLneOu7T6XewTZxMV5LEVTTTkgzwJiXEvW2Hx+UFebSpI7rsVFRfSHFNJyVRdqVX8T+DxJ8aV7S3DHdvGVPfMnD/A66nTeBnc/ZPAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/common/icon_sign.png":
/*!************************************************!*\
  !*** ./src/assets/images/common/icon_sign.png ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAApCAMAAACBd8B3AAAAe1BMVEUAAAD/VVf/VVf/V1f/TE3/VFf/VFj/VVn/VVj/Ulb+VFf/VVf/VFf9U1f/U1b/UGD/Rk//VFf/VFj/U1f/VFf/VFf/VFj+U1f/VFf/U1b/VFf/U1f/U1j/VVj/VFb/U1b/UVj/Ulb/VVf/VFf/VFb/VVf/VVn/VVX/VFcV8O5qAAAAKHRSTlMAbKwsB3jqRZw7+rj5n18QA/MZ1NDAqNrYHPjchk0/ZiQWx498aTkSX9hYKQAAATlJREFUOMu9lNlugzAQRU2KbZZASCB70iRdz/9/Ye0SZVphLPrS84Bs6YxsRp6rfpBe6kYJ5+RTBdnAq+zeoQt7BlrZzYDbwFnYOjmASR60QGIXv6y8LAhTlLncPyNGlt61NWAqHTj3VBlg3YsZzLVfLmGrHpTASqV6Dtn33ZxmlefoSsVz5YWvtk7M+zp9b6w5foh37cxFeTSUriEFJlUxUkOxUBYqFacCq2p/bBwNtUrg9BTnBInzJvA3r5vF6XrPfeIk/+k12WEzwWs2wDXmibZLR7zVmxWN437s3Jf7upkBW6eNeDvcRrRR73npxV5bqbAnYud/wWlhT0TRIv3LvdiKNvREbG9q4A3f/f6cBt791DmaOpcy57FxKyU3wkhuSA4FkRySXBuiJdcm5uT03JUcH1I/cvwLSfZGI9VzynUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/common/sizer.png":
/*!********************************************!*\
  !*** ./src/assets/images/common/sizer.png ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAUUlEQVQoU2NkIALMmjVLm5GQupkzZ9YzMDDU4lUIVdQAMgynQmRFOBWiK8KqEJsiDIW4FKEoxKcIrpCQIrBCUGD+////IgMDAzOuMP3///9bAIjrIgU5KCwUAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/common/sizered.png":
/*!**********************************************!*\
  !*** ./src/assets/images/common/sizered.png ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAATElEQVQoU43QwQ2AIBBE0U8ohxqJtGgh1jAEYwwouzDnlzn8wMYkpbBykg4gu/BBpZ2ZsEcm/KIpnKEftNAAPfTCFbphiwmcQHSaXhWrcSf59InUrwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/lanmao1.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/lanmao1.jpg ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/lanmao1.jpg";

/***/ }),

/***/ "./src/assets/images/lanmao2.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/lanmao2.jpg ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/lanmao2.jpg";

/***/ }),

/***/ "./src/assets/images/lanmao3.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/lanmao3.jpg ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/lanmao3.jpg";

/***/ }),

/***/ "./src/assets/images/user/index/like.png":
/*!***********************************************!*\
  !*** ./src/assets/images/user/index/like.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/index/like.png";

/***/ }),

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/index.vue":
/*!**********************************!*\
  !*** ./src/pages/home/index.vue ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/home/index.vue");


var config = {"navigationBarTitleText":"虾米约拍","enablePullDownRefresh":true,"navigationStyle":"custom","navigationBarBackgroundColor":"#FE5457","navigationBarTextStyle":"white","backgroundColor":"#FE5457","backgroundColorTop":"#FE5457","backgroundColorBottom":"#f7f7f7","backgroundTextStyle":"dark","usingComponents":{}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/home/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/home/index.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/pages/home/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/home/index.vue?vue&type=template&id=5b685826&":
/*!*****************************************************************!*\
  !*** ./src/pages/home/index.vue?vue&type=template&id=5b685826& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b685826___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5b685826& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/home/index.vue?vue&type=template&id=5b685826&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b685826___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b685826___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/home/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map