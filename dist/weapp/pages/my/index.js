(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/my/index.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/my/index.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=698d409a& */ "./src/pages/my/index.vue?vue&type=template&id=698d409a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/my/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "23961681"
  
)

component.options.__file = "src/pages/my/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/my/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/pages/my/index.scss");
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
//
//
//
//
//
//
//
//
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
  name: "my",
  data: function data() {
    return {
      s_id: "1",
      isSign: "",
      statusBarHeight: 100,
      sex: 1,
      show_my_ad: false,
      showModelSign: false,
      infor: {
        realname: "",
        ispledge: ""
      }
    };
  },
  methods: {
    close: function close() {
      this.showModelSign = false;
    }
  },
  created: function created() {
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
        _this.navHeight = navHeight; //导航栏总体高度

        _this.navTop = navTop; //胶囊距离顶部距离

        _this.navObj = menuButtonObject.height; //胶囊高度

        _this.navObjWid = navObjWid; //胶囊宽度(包括右边距离)

        console.log(navHeight, navTop, menuButtonObject.height, navObjWid);
      },
      fail: function fail(err) {
        console.log(err);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/my/index.vue?vue&type=template&id=698d409a&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/my/index.vue?vue&type=template&id=698d409a& ***!
  \*********************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "my" }, [
    _c(
      "view",
      { staticClass: "custom_head", style: { height: _vm.navHeight + "px" } },
      [
        _c(
          "view",
          {
            staticClass: "flex-row j_b",
            style: {
              height: _vm.navObj + "px",
              "padding-top": _vm.navTop + "px",
              "padding-right": _vm.navObjWid + 5 + "px",
            },
          },
          [
            _c(
              "view",
              { staticClass: "pagetop ub" },
              [
                _c(
                  "view",
                  {
                    staticClass: "page_settings",
                    attrs: { catchtap: "open_settings" },
                  },
                  [
                    _c("image", {
                      attrs: {
                        src: __webpack_require__(/*! ../../assets/images/user/index/icon_settings.png */ "./src/assets/images/user/index/icon_settings.png"),
                      },
                    }),
                  ]
                ),
                _vm.s_id
                  ? _c("block", [
                      _vm.isSign
                        ? _c(
                            "view",
                            {
                              staticClass: "sign_block fl",
                              attrs: { catchtap: "onIsSign" },
                            },
                            [
                              _c("image", {
                                staticClass: "icon_sign",
                                attrs: {
                                  src: __webpack_require__(/*! ../../assets/images/user/index/icon_signed.png */ "./src/assets/images/user/index/icon_signed.png"),
                                },
                              }),
                              _c("view", { staticClass: "is_sign" }, [
                                _vm._v("已签到"),
                              ]),
                            ]
                          )
                        : _c(
                            "view",
                            {
                              staticClass: "sign_block fl",
                              attrs: { catchtap: "onSign" },
                            },
                            [
                              _c("image", {
                                staticClass: "icon_sign",
                                attrs: {
                                  src: __webpack_require__(/*! ../../assets/images/user/index/icon_sign.png */ "./src/assets/images/user/index/icon_sign.png"),
                                },
                              }),
                              _c("view", [_vm._v("签到")]),
                            ]
                          ),
                    ])
                  : _vm._e(),
              ],
              1
            ),
          ]
        ),
      ]
    ),
    _c("view", {
      staticClass: "nav_bg",
      style: { height: _vm.navHeight + "px" },
    }),
    _c("view", { staticClass: "my-head" }, [
      _c("view", { staticClass: "my-head-left" }, [
        _c("image", {
          staticClass: "head-img",
          attrs: {
            src: __webpack_require__(/*! ../../assets/images/head.png */ "./src/assets/images/head.png"),
            mode: "aspectFit",
          },
        }),
      ]),
      _c("view", { staticClass: "my-head-ct" }, [
        _c("view", [
          _c("text", { staticClass: "my-head-name" }, [_vm._v("Bin.Won")]),
        ]),
        _c("view", { staticClass: "my-account" }, [_vm._v("账号：66666666")]),
        _c("view", { staticClass: "my-info" }, [
          _c("text", [_vm._v("IP归属：")]),
          _c("text", [_vm._v("北京市")]),
          _c("view", { staticClass: "head-tag-box" }, [
            _c("view", { staticClass: "head-tag" }, [
              _c("image", {
                staticClass: "head-tag-img",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/real-name.png */ "./src/assets/images/real-name.png"),
                  mode: "aspectFit",
                },
              }),
              _c("text", [_vm._v("未实名")]),
            ]),
            _c("view", { staticClass: "head-tag" }, [
              _c("image", {
                staticClass: "head-tag-img",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/guarantee.png */ "./src/assets/images/guarantee.png"),
                  mode: "aspectFit",
                },
              }),
              _c("text", [_vm._v("未担保")]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "my-head-ct" }, [
      _c("view", { staticClass: "my-desc" }, [
        _vm._v(
          " 摄影和模特的互勉约拍聚集地，摄影和模特的互勉约拍聚集地，摄影和模特的互勉约拍聚集地 "
        ),
      ]),
      _c("view", { staticClass: "my_tags" }, [
        _c("view", { staticClass: "tag" }, [
          _vm.sex == 1
            ? _c("image", {
                staticClass: "sex",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                  mode: "aspectFit",
                },
              })
            : _vm._e(),
          _vm.sex == 0
            ? _c("image", {
                staticClass: "sex",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/nv.png */ "./src/assets/images/nv.png"),
                  mode: "aspectFit",
                },
              })
            : _vm._e(),
          _vm._v(" 20岁 "),
        ]),
        _c("view", { staticClass: "tag" }, [_vm._v(" 北京·朝阳 ")]),
        _c("view", { staticClass: "tag" }, [_vm._v(" 摄影 ")]),
        _c("view", { staticClass: "tag" }, [_vm._v(" 模特 ")]),
      ]),
      _c("view", { staticClass: "my-count" }, [
        _c("view", { staticClass: "my-conunt-left" }, [
          _c("view", { staticClass: "my-count-box" }, [
            _c("text", { staticClass: "num" }, [_vm._v("100")]),
            _c("text", [_vm._v("粉丝")]),
          ]),
          _c("view", { staticClass: "my-count-box" }, [
            _c("text", { staticClass: "num" }, [_vm._v("100")]),
            _c("text", [_vm._v("关注")]),
          ]),
          _c("view", { staticClass: "my-count-box" }, [
            _c("text", { staticClass: "num" }, [_vm._v("100")]),
            _c("text", [_vm._v("约拍")]),
          ]),
          _c("view", { staticClass: "my-count-box" }, [
            _c("text", { staticClass: "num" }, [_vm._v("100")]),
            _c("text", [_vm._v("访客")]),
          ]),
          _c("view", { staticClass: "my-count-box" }, [
            _c("text", { staticClass: "num" }, [_vm._v("100")]),
            _c("text", [_vm._v("足迹")]),
          ]),
        ]),
        _c("view", { staticClass: "my-conunt-rt" }, [_vm._v(" 编辑资料 ")]),
      ]),
    ]),
    _c("view", { staticClass: "my-ct" }, [
      _c("view", { staticClass: "my-vip" }, [
        _c("view", { staticClass: "my-vip-left" }, [
          _c("image", {
            staticClass: "my-vip-img",
            attrs: {
              src: __webpack_require__(/*! ../../assets/images/money.png */ "./src/assets/images/money.png"),
              mode: "aspectFit",
            },
          }),
          _c("view", [
            _c("view", [_vm._v("我的金币")]),
            _c("view", [_vm._v("20币")]),
          ]),
        ]),
        _c("view", { staticClass: "my-vip-rt" }, [
          _c("image", {
            staticClass: "my-vip-img",
            attrs: {
              src: __webpack_require__(/*! ../../assets/images/vip.png */ "./src/assets/images/vip.png"),
              mode: "aspectFit",
            },
          }),
          _c("view", [
            _c("view", [_vm._v("会员中心")]),
            _c("view", { staticClass: "vip-text" }, [
              _vm._v("开通会员尊享特权"),
            ]),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "my-column" }, [
        _c("view", { staticClass: "my-column-item" }, [
          _c("image", {
            staticClass: "my-column-img",
            attrs: {
              src: __webpack_require__(/*! ../../assets/images/zhuye.png */ "./src/assets/images/zhuye.png"),
              mode: "aspectFill",
            },
          }),
          _c("text", [_vm._v("主页")]),
        ]),
        _c("view", { staticClass: "my-column-item" }, [
          _c("image", {
            staticClass: "my-column-img",
            attrs: {
              src: __webpack_require__(/*! ../../assets/images/album.png */ "./src/assets/images/album.png"),
              mode: "aspectFill",
            },
          }),
          _c("text", [_vm._v("作品")]),
        ]),
        _c("view", { staticClass: "my-column-item" }, [
          _c("image", {
            staticClass: "my-column-img",
            attrs: {
              src: __webpack_require__(/*! ../../assets/images/collection.png */ "./src/assets/images/collection.png"),
              mode: "aspectFill",
            },
          }),
          _c("text", [_vm._v("收藏")]),
        ]),
      ]),
      _c("view", { staticClass: "items" }, [
        _c(
          "view",
          { staticClass: "item ub line-t", attrs: { catchtap: "onMyAd" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/ad.png */ "./src/assets/images/user/index/ad.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("通告管理")]),
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
        _c(
          "view",
          { staticClass: "item ub", attrs: { catchtap: "myYuepai" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/yuepai.png */ "./src/assets/images/user/index/yuepai.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("约单管理")]),
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
        _c(
          "view",
          { staticClass: "item ub line-t", attrs: { catchtap: "coin" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/huodong.png */ "./src/assets/images/user/index/huodong.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("活动管理")]),
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
        _c(
          "view",
          { staticClass: "item ub line-t", attrs: { catchtap: "coin" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/zuopin1.png */ "./src/assets/images/user/index/zuopin1.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("作品管理")]),
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
        _c(
          "view",
          { staticClass: "item ub line-t", attrs: { catchtap: "coin" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/moka.png */ "./src/assets/images/user/index/moka.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("模卡管理")]),
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
      ]),
      _c("view", { staticClass: "items" }, [
        _c(
          "view",
          { staticClass: "item ub line-t", attrs: { catchtap: "coin" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/dengji.png */ "./src/assets/images/user/index/dengji.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("我的等级")]),
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
        !_vm.infor.realname
          ? _c(
              "view",
              { staticClass: "item ub", attrs: { catchtap: "realName" } },
              [
                _c("view", { staticClass: "item_icon" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: __webpack_require__(/*! ../../assets/images/user/index/realname.png */ "./src/assets/images/user/index/realname.png"),
                    },
                  }),
                ]),
                _c("view", { staticClass: "ub-f1" }, [
                  _c("view", { staticClass: "item_text" }, [
                    _vm._v("我的认证"),
                  ]),
                ]),
                _vm.infor.realname
                  ? _c("view", { staticClass: "item_tip" }, [_vm._v("已实名")])
                  : _vm._e(),
                _c("view", { staticClass: "arrow" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                    },
                  }),
                ]),
              ]
            )
          : _vm._e(),
        _vm.infor.ispledge != 1
          ? _c(
              "view",
              { staticClass: "item ub", attrs: { catchtap: "pledgecash" } },
              [
                _c("view", { staticClass: "item_icon" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: __webpack_require__(/*! ../../assets/images/user/index/pledgecash.png */ "./src/assets/images/user/index/pledgecash.png"),
                    },
                  }),
                ]),
                _c("view", { staticClass: "ub-f1" }, [
                  _c("view", { staticClass: "item_text" }, [
                    _vm._v("信用担保"),
                  ]),
                ]),
                _vm.infor.ispledge == 1
                  ? _c("view", { staticClass: "item_tip" }, [_vm._v("担保中")])
                  : _vm._e(),
                _vm.infor.ispledge == 2
                  ? _c("view", { staticClass: "item_tip" }, [_vm._v("退款中")])
                  : _vm._e(),
                _c("view", { staticClass: "arrow" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                    },
                  }),
                ]),
              ]
            )
          : _vm._e(),
        _c(
          "view",
          { staticClass: "item ub", attrs: { catchtap: "invitego" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/invite.png */ "./src/assets/images/user/index/invite.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("邀请好友")]),
            ]),
            _c("view", { staticClass: "item_tip" }, [_vm._v("赚麻豆")]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
        _c(
          "view",
          { staticClass: "item ub line-t", attrs: { catchtap: "coin" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/kefu1.png */ "./src/assets/images/user/index/kefu1.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("联系客服")]),
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
        _c(
          "view",
          { staticClass: "item ub line-t", attrs: { catchtap: "coin" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/gongzhonghao.png */ "./src/assets/images/user/index/gongzhonghao.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("关注公众号")]),
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
      ]),
      _c("view", { staticClass: "items" }, [
        _c("view", { staticClass: "item ub", attrs: { catchtap: "help" } }, [
          _c("view", { staticClass: "item_icon" }, [
            _c("image", {
              attrs: {
                mode: "aspectFit",
                src: __webpack_require__(/*! ../../assets/images/user/index/helpcenter.png */ "./src/assets/images/user/index/helpcenter.png"),
              },
            }),
          ]),
          _c("view", { staticClass: "ub-f1" }, [
            _c("view", { staticClass: "item_text" }, [_vm._v("帮助中心")]),
          ]),
          _c("view", { staticClass: "arrow" }, [
            _c("image", {
              attrs: {
                mode: "aspectFit",
                src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
              },
            }),
          ]),
        ]),
        _c(
          "view",
          { staticClass: "item ub line-t", attrs: { catchtap: "aboutUs" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/about.png */ "./src/assets/images/user/index/about.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("关于我们")]),
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
        _c(
          "view",
          { staticClass: "item ub line-t", attrs: { catchtap: "invoice" } },
          [
            _c("view", { staticClass: "item_icon" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/invoice.png */ "./src/assets/images/user/index/invoice.png"),
                },
              }),
            ]),
            _c("view", { staticClass: "ub-f1" }, [
              _c("view", { staticClass: "item_text" }, [_vm._v("开具发票")]),
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: __webpack_require__(/*! ../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]
        ),
      ]),
    ]),
    _vm.showModelSign
      ? _c("view", { staticClass: "modal-bg", on: { tap: _vm.close } })
      : _vm._e(),
    _vm.showModelSign
      ? _c("view", { staticClass: "modal_box sign_modal" }, [
          _c("view", { staticClass: "sign_md_close_btn" }, [
            _c("image", {
              attrs: {
                src: __webpack_require__(/*! ../../assets/images/common/tipclose.png */ "./src/assets/images/common/tipclose.png"),
              },
              on: { tap: _vm.close },
            }),
          ]),
          _c("view", { staticClass: "sign_modal_main" }, [
            _c("form", { staticClass: "main" }, [
              _c("view", { staticClass: "sign_md_top" }, [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/images/user/sign/addcoin.png */ "./src/assets/images/user/sign/addcoin.png"),
                  },
                }),
              ]),
              _c("view", { staticClass: "sign_md_title" }, [
                _c("view", [_vm._v("签到成功")]),
              ]),
              _c("view", { staticClass: "sign_md_content" }, [
                _c("view", [_vm._v("邀请好友，可获得更多麻豆")]),
              ]),
              _c("view", { staticClass: "sign_md_bottom" }, [
                _c(
                  "view",
                  {
                    staticClass: "sign_md_btn",
                    attrs: { catchtap: "invitego" },
                  },
                  [_vm._v("马上邀请")]
                ),
              ]),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/album.png":
/*!*************************************!*\
  !*** ./src/assets/images/album.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/album.png";

/***/ }),

/***/ "./src/assets/images/collection.png":
/*!******************************************!*\
  !*** ./src/assets/images/collection.png ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/collection.png";

/***/ }),

/***/ "./src/assets/images/common/tipclose.png":
/*!***********************************************!*\
  !*** ./src/assets/images/common/tipclose.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/tipclose.png";

/***/ }),

/***/ "./src/assets/images/guarantee.png":
/*!*****************************************!*\
  !*** ./src/assets/images/guarantee.png ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/guarantee.png";

/***/ }),

/***/ "./src/assets/images/head.png":
/*!************************************!*\
  !*** ./src/assets/images/head.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/head.png";

/***/ }),

/***/ "./src/assets/images/money.png":
/*!*************************************!*\
  !*** ./src/assets/images/money.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/money.png";

/***/ }),

/***/ "./src/assets/images/real-name.png":
/*!*****************************************!*\
  !*** ./src/assets/images/real-name.png ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/real-name.png";

/***/ }),

/***/ "./src/assets/images/user/index/about.png":
/*!************************************************!*\
  !*** ./src/assets/images/user/index/about.png ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAjVBMVEUAAAA0NDQ1NTUyMjI0NDQzMzM0NDQ0NDQxMTE0NDQrKys0NDQ0NDQzMzMzMzM0NDQ0NDQ0NDQ0NDQzMzM1NTU0NDQyMjI0NDQ0NDQ0NDQ0NDQ0NDQzMzMzMzM0NDQ0NDQ0NDQ0NDQzMzM0NDQzMzM0NDQ0NDQzMzMzMzM0NDQzMzMzMzMzMzMzMzM0NDTi1gCGAAAALnRSTlMA+kwVsvTwJQ/iB93FRS106721Uz0eC9jLbVnt0qmimpWKaF45KRnmrn97kGMyP7yaVgAAAZxJREFUSMftldt2ozAMRTHEBkNCgKS5kPuladJO9/9/3qyZ6TIyCaSP81A9YXv7WLIkE/znlkSz74HRcTNXgF7sJ+kT9jxQNGY+XnrYlysA6Gxu1b+vW6f+xAB6U/8VTPPlEGAdP4bHgDpEYuazAsz0EfwuheRx+nwP18AguZvOMyjuYo0NXN1oenIOXSwM23QF65mI4M3hnxqWPjwC3Zy3ACZu9AtWvosl3JrRHlQcyM1jz2swYvvsth2J1RDmrdvbBd1mIfcdGcnl0yGXw70f5wolS3QJJpI5gq2oUsik1hX/rFfvyuNWAgZAKJvDCzOHso9OwX5fO/K0E7B9dO6rFZD00LWfjgrCHnoHR79ttt10WkAs2xd01EnXsGiX96GLTtdw9OgpqKY0Nl+5bHrDvRMOyCJRF9nMNYqCU+DbpYDSKeR14jK3gsphUmLo1BsXC7DNtGw/bPulWSooXoMHdlLAVi6FC8B6sDj1DWA4Pid/AhkdMoDy0vnI7xUAaPP1sToGPRbvDI1l42e/iDT8KK1WJqvez8GPPbff2dg55Ty7zSAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/user/index/ad.png":
/*!*********************************************!*\
  !*** ./src/assets/images/user/index/ad.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAhFBMVEUAAAAzMzMzMzM2NjY1NTUzMzMzMzM2NjY0NDQ/Pz8zMzM0NDQ2NjY9PT0zMzMzMzM0NDQyMjIyMjIzMzM0NDQ0NDQ1NTU3NzdqamozMzMzMzMzMzM0NDQzMzMzMzM1NTU0NDQ1NTU+Pj4zMzMzMzMzMzM0NDQzMzM0NDQ4ODgzMzMzMzNU8Rh/AAAAK3RSTlMAs/pMTev8GoAM2EceEPG7eubgxnRrKhUCz6uNUvWUZDoyCKWgXEAFmCOK7847bgAAAjZJREFUWMPt18mOqzAQheGiEpwwT4GQkHnsdL3/+11shzu5pTZSedES/4oF+YTwkSJgampqalTBYZvH4KJziQL3O+BvhUh9e/bnXmekw5xZjnwkndiyws+OBA15nPJro0xBFTd936Mk0Y/mvHRwfb+MbA289LlUMOIK4E3zjlmUZzBojjELugZg0Bxjxv0dgJV+fr7Pb/OCEfQzPs2+aTeMuXuCNd3kG7JoGDOALX3OCMkuPWZbOrjZw3rMtnS8ETSiB1jTjV5Tzxcb74t86qvUpbpxYU0nJSo4rNVvzDzqm4HMH0W3mZRxf2wBmOk7SblsALjpSyGIRPoCfroW+tAd0BUR4RYc0Gv10A0TbR5iCC7oHImwc0If5KhrJ/RWvuudE/qGRHR0Qn/2NOZO6Fr0tOeEPlMfBuz0cLNYcdHm+tLEBR3L9WHWMtHm/MRH64Be+0LaWcJPQ0QyTFcBOw01qQR6+XE+M6uob6kuU3t6sIXCEckiG9r8SLOrikfQsL4JexzTnSWtizvf2hb0cbGldSfqQ08XIhGGnpFAhYfNKHpBfT7olpJegtGpUDZizU5DsiWdl3DSuqMeKRYPdhqaUKgXLpYtNw2XA2m8iplpyaX4njg7DYvq98S5aWiXw8RzLtqcOPHR5sT5aT1xFXbMtJ64KuKhzYmLK/DSul1KRd46oSFIQMZK25cYfwUr4Kqg/4rY6A7/lf2AjQ7Kv22kOfCVXMUfunwAa8FppotimJqa+tH9AtR9046SmCa7AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/user/index/dengji.png":
/*!*************************************************!*\
  !*** ./src/assets/images/user/index/dengji.png ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/index/dengji.png";

/***/ }),

/***/ "./src/assets/images/user/index/gongzhonghao.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/user/index/gongzhonghao.png ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/index/gongzhonghao.png";

/***/ }),

/***/ "./src/assets/images/user/index/helpcenter.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/user/index/helpcenter.png ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAMAAACLUGAGAAAAjVBMVEUAAAAyMjI0NDQzMzM0NDQzMzM1NTU0NDQ0NDQ0NDQzMzMxMTEwMDA0NDQ0NDQ0NDQ0NDQ0NDQxMTEzMzM0NDQ0NDQ0NDQ0NDQ0NDQzMzM0NDQzMzM0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQzMzM1NTU0NDQ0NDQzMzMzMzM1NTU0NDSFlWmcAAAALnRSTlMABft8cyoO8dKVjRUK9baIXFcfG+bKoE8+Muzg2rxsYUhD3s7Eq6d3JriwnTg1z/osOwAAAdVJREFUSMftk9m2ojAQRUMAGQRFRcV51la79/9/XocFwQSudj/fdfcLqXBSdYoK4vvgj9w4Gnrz/r+liyhHE976n7V3LNLovd6JJYr108tGO/eyRLEcvRFPpmW22G8O7x8oIucr8fgIzOzKf07A5Qt5fw1y1zE3K1N01QMIfjemFn5SL2/Ati3egtzXVeIcFW2KKozU+lfLRwBePZwVFbJK6WxgYKuHcK5WifK/Gm6H5ZnK2TitVxpnCXVhD9Y99eyFcGlSXU31HKb18gyZKBlBXvcsSXuG+vnqO4BJdQsgrffuMDfUyqtuO45joXOvROMuNmxLgs5cwtdYCuurjOHUFj9A+npYEBr3Hza2ONkoceO1p0x9UDvlPTgIQ320nISW2lXihf3e6jJtD8u8jgd4GGEIvrCcBY5damiEEXhGWLScnWFvhPvW6yRxhGU7SEyjuX26yPp25acwuUH4SudB/pL7Unel6eVmI1Ng1LhS0UXYZNQ3tfNzXSGY6MDYTOc6nTtrBhnrOraXsrzb2R1QWuzSPwF3+++eH4FIR9088npwdLwry0lXvMFLUQSD+Oa50VmiOB7EW8YzicnSTcQnJu6JmnSQdbVd/8XOc71s4Ygf/oO/YZw+4tXipE8AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/user/index/huodong.png":
/*!**************************************************!*\
  !*** ./src/assets/images/user/index/huodong.png ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/index/huodong.png";

/***/ }),

/***/ "./src/assets/images/user/index/icon_settings.png":
/*!********************************************************!*\
  !*** ./src/assets/images/user/index/icon_settings.png ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/index/icon_settings.png";

/***/ }),

/***/ "./src/assets/images/user/index/icon_sign.png":
/*!****************************************************!*\
  !*** ./src/assets/images/user/index/icon_sign.png ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAApCAMAAACBd8B3AAAAe1BMVEUAAAD/VVf/VVf/V1f/TE3/VFf/VFj/VVn/VVj/Ulb+VFf/VVf/VFf9U1f/U1b/UGD/Rk//VFf/VFj/U1f/VFf/VFf/VFj+U1f/VFf/U1b/VFf/U1f/U1j/VVj/VFb/U1b/UVj/Ulb/VVf/VFf/VFb/VVf/VVn/VVX/VFcV8O5qAAAAKHRSTlMAbKwsB3jqRZw7+rj5n18QA/MZ1NDAqNrYHPjchk0/ZiQWx498aTkSX9hYKQAAATlJREFUOMu9lNlugzAQRU2KbZZASCB70iRdz/9/Ye0SZVphLPrS84Bs6YxsRp6rfpBe6kYJ5+RTBdnAq+zeoQt7BlrZzYDbwFnYOjmASR60QGIXv6y8LAhTlLncPyNGlt61NWAqHTj3VBlg3YsZzLVfLmGrHpTASqV6Dtn33ZxmlefoSsVz5YWvtk7M+zp9b6w5foh37cxFeTSUriEFJlUxUkOxUBYqFacCq2p/bBwNtUrg9BTnBInzJvA3r5vF6XrPfeIk/+k12WEzwWs2wDXmibZLR7zVmxWN437s3Jf7upkBW6eNeDvcRrRR73npxV5bqbAnYud/wWlhT0TRIv3LvdiKNvREbG9q4A3f/f6cBt791DmaOpcy57FxKyU3wkhuSA4FkRySXBuiJdcm5uT03JUcH1I/cvwLSfZGI9VzynUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/user/index/icon_signed.png":
/*!******************************************************!*\
  !*** ./src/assets/images/user/index/icon_signed.png ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAApCAMAAACBd8B3AAAAb1BMVEUAAAC9vb27u7u/v7+5ubm7u7u8vLy7u7u8vLy7u7u+vr68vLy+vr67u7u8vLy1tbW7u7u8vLy7u7u8vLy8vLy8vLy8vLy7u7u7u7u8vLy7u7u8vLy8vLy9vb28vLy8vLy7u7u4uLi5ubm5ubm7u7uS3/8WAAAAJHRSTlMAbKwsBvqeeEXpOxoQuF8D88Dc1aZu2M4++NOGZ03usJMkFguOA501AAABMklEQVQ4y73U3W6CMBiA4eJKW0BQRGX+Tt17/9c46ozfTEvHTvYeGEke0kLop36kj81CSafNXEVbw0WujtDH3Rk6ufoAboGZuybbQZE92wMb97p0WefEy+tS9m9IZfSDtUBhbGTdgymA9hsayK3/u4Tt63NUStsczH1vA3PKt4JWnL/d3+0G6PdYg3282GJVirv256PyWaiHF5JTaJVKF+Rz5fzy6Qw41fhl01loVAaHt3QHyAb3e390/Sxdf3f+J132n25x2a0nuMUauKacsE6PuMo6YayqsXVb2NzZTFjMbRmgsFH3vvRQe7atVNwJ3AsLnUBfJyxwAoUFTiqXdDcVuPC7r06fke9+6jmaei7lnKeOWy1zI57MDZlD0WQOyVwLszLXJs7J6XNX5nhY85zjX2jwP9fMmkpWAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/user/index/invite.png":
/*!*************************************************!*\
  !*** ./src/assets/images/user/index/invite.png ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/index/invite.png";

/***/ }),

/***/ "./src/assets/images/user/index/kefu1.png":
/*!************************************************!*\
  !*** ./src/assets/images/user/index/kefu1.png ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/index/kefu1.png";

/***/ }),

/***/ "./src/assets/images/user/index/moka.png":
/*!***********************************************!*\
  !*** ./src/assets/images/user/index/moka.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/index/moka.png";

/***/ }),

/***/ "./src/assets/images/user/index/pledgecash.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/user/index/pledgecash.png ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/index/pledgecash.png";

/***/ }),

/***/ "./src/assets/images/user/index/realname.png":
/*!***************************************************!*\
  !*** ./src/assets/images/user/index/realname.png ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAABgFBMVEUAAAAAAAAAAAAAAAAzMzMkJCRAQEA5OTkzMzMuLi4rKysnJyc3Nzc5OTk2NjYzMzMxMTE1NTUxMTEwMDA1NTUzMzMwMDA3Nzc2NjY0NDQxMTEyMjI2NjYzMzM2NjY1NTUzMzM1NTU1NTU0NDQzMzMxMTEyMjI0NDQ0NDQzMzMyMjI0NDQyMjIzMzM1NTU1NTU0NDQzMzM0NDQzMzMzMzM0NDQ0NDQzMzM0NDQzMzMzMzM1NTU0NDQ0NDQzMzM1NTU0NDQ1NTU0NDQ0NDQ0NDQzMzM0NDQ0NDQzMzM1NTU0NDQ0NDQ1NTU1NTU0NDQ0NDQzMzM0NDQ0NDQ0NDQ0NDQ0NDQ1NTU0NDQ1NTU0NDQ1NTU0NDQzMzM0NDQ0NDQ0NDQ1NTUzMzM0NDQ0NDQzMzM0NDQ0NDQzMzMzMzM0NDQzMzM0NDQ0NDQzMzM0NDQ0NDQ0NDQ0NDQ0NDQ0NDQzMzM0NDQzMzM0NDQ0NDQ0NDQ0NDQzMzM0NDQzMzM0NDQ0NDQa3GCjAAAAf3RSTlMAAQIDBQcICQoLDA0OEhMUFRgaICIjJSUmJyouLzI0NTc6P0BBQ0dJSktRVFZaW1xeamxtc3V2d3p8fn6JiouMjZGSk5SVl5iampydn6ChqKmrsbe5u72+wMHBxcfIysvLzM7P0NHU1dri5efo6ers8fP09vj4+fn6+/z9/f7+5ufKqwAAAXRJREFUSMftlVdTAjEUhY9ib1gRxd57V+y994aKBXvvqEAW3fPXfWABZ1zDOvLo95a5Xya5yeQE+CcqWCrlWL645k2vShmq15ERsrcYGUdQtnp42tkh5YyeAs2uUNkVoa8uqpVBmwZs/tUunTl2TdqM2aYFQZJizJA976e4vVfoHzZgF/t5VwPUP/M1H0gdmdAYLdKzBynqAKBN4QAwGL6YUz17jT4TACQJzgLVbqHh69Gzl+lLB4AcL8cBJCRqxOnuu13lFACsUGmN3GXyA5XVxqadD17HGTjBqvdAV/4SAMi1aRTq2nn7SsBWdrOBFvGmIZZ0bPMV+TTXbV90kxdp6Au/j43vdsw2352ZAJDtUrkOU3+vhj3ru12jcC8+ME45p1Im73KavvJgrVZwSG5f8DFUi32hU27f8CBcvOKl3G4+rA0XG44aov7SDNm/Sgirh2fy8Ok8occanOkwkGxboXUyHBFTc9P8NZEr5Fj+P62f+ASRZfUG4jhUsgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/user/index/right.png":
/*!************************************************!*\
  !*** ./src/assets/images/user/index/right.png ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAMAAACOLiwjAAAAbFBMVEUAAAAAAACYmJibm5uampqampqZmZmbm5ubm5uampqampqYmJiZmZmZmZmampqZmZmampqbm5uampqampqZmZmYmJiampqZmZmYmJiampqZmZmampqZmZmYmJiZmZmZmZmZmZmZmZmampqZmZkIFUpDAAAAI3RSTlMAAVRUVlhaXF5gYmNpa21ub3BydHV3eXt8fpaY+vv7/P3+/qWMeqwAAABgSURBVBjTbc9HEoAwDANASui9d0LQ//9ImAFNDvHJe5Etx11zh7NBFUR2QZVUIqFqKpa4WyrS6qjwBAYqOICREloT5e/A8sMzIPQ+WwLM6Pdob3nnfbT59lRXqKzlzNoPlxQJBPBBNbYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/user/index/zuopin1.png":
/*!**************************************************!*\
  !*** ./src/assets/images/user/index/zuopin1.png ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/index/zuopin1.png";

/***/ }),

/***/ "./src/assets/images/user/sign/addcoin.png":
/*!*************************************************!*\
  !*** ./src/assets/images/user/sign/addcoin.png ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/sign/addcoin.png";

/***/ }),

/***/ "./src/assets/images/vip.png":
/*!***********************************!*\
  !*** ./src/assets/images/vip.png ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/vip.png";

/***/ }),

/***/ "./src/assets/images/zhuye.png":
/*!*************************************!*\
  !*** ./src/assets/images/zhuye.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/zhuye.png";

/***/ }),

/***/ "./src/pages/my/index.scss":
/*!*********************************!*\
  !*** ./src/pages/my/index.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/my/index.vue":
/*!********************************!*\
  !*** ./src/pages/my/index.vue ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/my/index.vue");


var config = {"usingComponents":{},"navigationBarTitleText":"导航栏自定义~","navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/my/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/my/index.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/pages/my/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/my/index.vue?vue&type=template&id=698d409a&":
/*!***************************************************************!*\
  !*** ./src/pages/my/index.vue?vue&type=template&id=698d409a& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=698d409a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/my/index.vue?vue&type=template&id=698d409a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_698d409a___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/my/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map