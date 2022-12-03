(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/addfans/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/addfans/index.vue":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/addfans/index.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_49073154_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=49073154&scoped=true& */ "./src/packageAdd/pages/user/addfans/index.vue?vue&type=template&id=49073154&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/addfans/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_49073154_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_49073154_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "49073154",
  "322cc570"
  
)

component.options.__file = "src/packageAdd/pages/user/addfans/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addfans/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/addfans/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/addfans/index.scss");
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "addfans",
  data: function data() {
    return {
      showModel: false,
      isIphoneX: false,
      paste_url: "",
      nickname_dis: false,
      like_count_dis: false,
      follow_count_dis: false,
      nickname: "",
      follow_count: "",
      pla_value: "",
      item_id: "",
      media_item_id: "kuaishou",
      ad_price: "",
      bargin_ad_price: 0,
      is_brand_partner: 0,
      like_count: "",
      pub_price: "",
      bargin_pub_price: "",
      share_price: "",
      bargin_share_price: "",
      is_open_store: 0,
      video_price: "",
      bargin_video_price: "",
      live_price: "",
      bargin_live_price: "",
      const_media_item_ids: {
        douyin: "douyin",
        redbook: "redbook",
        weibo: "weibo",
        kuaishou: "kuaishou"
      },
      icon: {
        douyin: __webpack_require__(/*! ../../../../assets/images/common/douyin.png */ "./src/assets/images/common/douyin.png"),
        redbook: __webpack_require__(/*! ../../../../assets/images/common/redbook.png */ "./src/assets/images/common/redbook.png"),
        weibo: __webpack_require__(/*! ../../../../assets/images/common/weibo.png */ "./src/assets/images/common/weibo.png"),
        kuaishou: __webpack_require__(/*! ../../../../assets/images/common/kuaishou.png */ "./src/assets/images/common/kuaishou.png")
      },
      media: {
        logo_show: "",
        name: "红薯",
        howget_msg: "howget_msg",
        tag: [{
          taged: true,
          tag_name: "ds"
        }, {
          taged: false,
          tag_name: "ds332"
        }]
      }
    };
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addfans/index.vue?vue&type=template&id=49073154&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/addfans/index.vue?vue&type=template&id=49073154&scoped=true& ***!
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
  return _c("view", { staticClass: "main" }, [
    _c(
      "form",
      {
        attrs: { bindreset: "reset", bindsubmit: "sub", reportSubmit: "true" },
      },
      [
        _c("view", { staticClass: "item" }, [
          _c("view", { staticClass: "item_top ub" }, [
            _c(
              "view",
              { staticClass: "top_img", attrs: { catchtap: "openModel" } },
              [_c("image", { attrs: { src: _vm.icon.redbook } })]
            ),
            _c("view", { staticClass: "top_text ub-f1" }, [
              _vm._v(_vm._s(_vm.media.name) + "账号编辑"),
            ]),
            _vm.item_id != "" && _vm.auto_get_visible == 1
              ? _c(
                  "view",
                  { staticClass: "top_btn", attrs: { catchtap: "getNewFans" } },
                  [_vm._v("获取最新数据 ")]
                )
              : _vm._e(),
          ]),
          _c("view", { staticClass: "item_tip ub" }, [
            _c("view", { staticClass: "tip_text" }, [
              _vm._v(_vm._s(_vm.media.name) + "主页链接"),
            ]),
            _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
            _c(
              "view",
              { staticClass: "ub", attrs: { catchtap: "goAddfansHelp" } },
              [
                _c("view", { staticClass: "tip_hlep" }, [
                  _vm._v("如何获取链接"),
                ]),
                _c("view", { staticClass: "tip_help_icon" }, [
                  _c("image", {
                    attrs: {
                      src: "https://imgs.weimoka.com/o_1f9vfihul1a7n1gj7faonb6kc7.png",
                    },
                  }),
                ]),
              ]
            ),
            _c("view", { staticClass: "ub-f1" }),
            _c(
              "view",
              { staticClass: "tip_ctrlv", attrs: { catchtap: "paste" } },
              [_vm._v("点击粘贴")]
            ),
          ]),
          _c("view", { staticClass: "item_content" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.paste_url,
                  expression: "paste_url",
                },
              ],
              attrs: {
                cols: "30",
                disabled: "true",
                name: "url",
                placeholder: _vm.media.howget_msg,
                placeholderClass: "placeholder_text",
                rows: "10",
              },
              domProps: { value: _vm.paste_url },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.paste_url = $event.target.value
                },
              },
            }),
          ]),
          _c("view", { staticClass: "item_label ub" }, [
            _c("view", { staticClass: "label_title" }, [_vm._v("账号昵称")]),
            _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
            _c("view", { staticClass: "label_info ub-f1" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nickname,
                    expression: "nickname",
                  },
                ],
                attrs: {
                  disabled: _vm.nickname_dis,
                  maxlength: "15",
                  name: "nickname",
                  placeholder: _vm.pla_value
                    ? "粘贴主页后自动获取"
                    : "请输入昵称",
                  placeholderClass: "placeholder_input",
                  type: "text",
                },
                domProps: { value: _vm.nickname },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.nickname = $event.target.value
                  },
                },
              }),
            ]),
          ]),
          _c("view", { staticClass: "item_label ub" }, [
            _c("view", { staticClass: "label_title" }, [_vm._v("粉丝数量")]),
            _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
            _c("view", { staticClass: "label_info ub-f1" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.follow_count,
                    expression: "follow_count",
                  },
                ],
                attrs: {
                  disabled: _vm.follow_count_dis,
                  maxlength: "15",
                  name: "follow_count",
                  placeholder: _vm.pla_value
                    ? "粘贴主页后自动获取"
                    : "请输入粉丝数量",
                  placeholderClass: "placeholder_input",
                  type: "number",
                },
                domProps: { value: _vm.follow_count },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.follow_count = $event.target.value
                  },
                },
              }),
            ]),
          ]),
          _vm.media_item_id == _vm.const_media_item_ids.douyin
            ? _c("view", { staticClass: "item_label ub" }, [
                _c("view", { staticClass: "label_title" }, [_vm._v("点赞数")]),
                _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
                _c("view", { staticClass: "label_info ub-f1" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.like_count,
                        expression: "like_count",
                      },
                    ],
                    attrs: {
                      disabled: _vm.like_count_dis,
                      maxlength: "15",
                      name: "like_count",
                      placeholder: _vm.pla_value
                        ? "粘贴主页后自动获取"
                        : "请输入点赞数",
                      placeholderClass: "placeholder_input",
                      type: "number",
                    },
                    domProps: { value: _vm.like_count },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.like_count = $event.target.value
                      },
                    },
                  }),
                ]),
              ])
            : _vm._e(),
          _vm.media_item_id == _vm.const_media_item_ids.redbook
            ? _c("view", { staticClass: "item_label ub" }, [
                _c("view", { staticClass: "label_title" }, [_vm._v("赞藏数")]),
                _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
                _c("view", { staticClass: "label_info ub-f1" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.like_count,
                        expression: "like_count",
                      },
                    ],
                    attrs: {
                      disabled: _vm.like_count_dis,
                      maxlength: "15",
                      name: "like_count",
                      placeholder: _vm.pla_value
                        ? "粘贴主页后自动获取"
                        : "请输入赞藏数",
                      placeholderClass: "placeholder_input",
                      type: "number",
                    },
                    domProps: { value: _vm.like_count },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.like_count = $event.target.value
                      },
                    },
                  }),
                ]),
              ])
            : _vm._e(),
        ]),
        _c("view", { staticClass: "item" }, [
          _vm.media_item_id == _vm.const_media_item_ids.douyin ||
          _vm.media_item_id == _vm.const_media_item_ids.kuaishou ||
          _vm.media_item_id == _vm.const_media_item_ids.weibo
            ? _c("view", { staticClass: "item_label ub border_none" }, [
                _c("view", { staticClass: "label_title" }, [
                  _vm._v(
                    "开通" +
                      _vm._s(
                        _vm.media_item_id == _vm.const_media_item_ids.kuaishou
                          ? "小店"
                          : "橱窗"
                      )
                  ),
                ]),
                _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
                _c("view", { staticClass: "label_info ub-f1 ub" }, [
                  _c("view", { staticClass: "ub-f1" }),
                  _c(
                    "view",
                    {
                      staticClass: "check_box",
                      class: _vm.is_open_store == 1 ? "check_box_ed" : "",
                      attrs: {
                        catchtap: "chooseOpenStore",
                        "data-status": "1",
                      },
                    },
                    [
                      _vm._v(" 是"),
                      _c("image", {
                        attrs: {
                          src: __webpack_require__("./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$")("./select_" +
                            (_vm.is_open_store == 1 ? 1 : 0) +
                            ".png"),
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: "check_box",
                      class: _vm.is_open_store == 2 ? "check_box_ed" : "",
                      attrs: {
                        catchtap: "chooseOpenStore",
                        "data-status": "2",
                      },
                    },
                    [
                      _vm._v(" 否"),
                      _c("image", {
                        attrs: {
                          src: __webpack_require__("./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$")("./select_" +
                            (_vm.is_open_store == 0 ? 1 : 0) +
                            ".png"),
                        },
                      }),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.media_item_id == _vm.const_media_item_ids.redbook
            ? _c("view", { staticClass: "item_label ub border_none" }, [
                _c("view", { staticClass: "label_title" }, [
                  _vm._v("品牌合作"),
                ]),
                _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
                _c("view", { staticClass: "label_info ub-f1 ub" }, [
                  _c("view", { staticClass: "ub-f1" }),
                  _c(
                    "view",
                    {
                      staticClass: "check_box",
                      class: _vm.is_brand_partner == 1 ? "check_box_ed" : "",
                      attrs: {
                        catchtap: "chooseBrandPartner",
                        "data-status": "1",
                      },
                    },
                    [
                      _vm._v(" 是 "),
                      _c("image", {
                        attrs: {
                          src: __webpack_require__("./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$")("./select_" +
                            (_vm.is_brand_partner == 1 ? 1 : 0) +
                            ".png"),
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: "check_box",
                      class: _vm.is_brand_partner == 0 ? "check_box_ed" : "",
                      attrs: {
                        catchtap: "chooseBrandPartner",
                        "data-status": "2",
                      },
                    },
                    [
                      _vm._v(" 否 "),
                      _c("image", {
                        attrs: {
                          src: __webpack_require__("./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$")("./select_" +
                            (_vm.is_brand_partner == 0 ? 1 : 0) +
                            ".png"),
                        },
                      }),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.media_item_id == _vm.const_media_item_ids.weibo
            ? _c("view", { staticClass: "item_label ub" }, [
                _c("view", { staticClass: "label_title" }, [
                  _vm._v("直发报价"),
                ]),
                _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
                _c("view", { staticClass: "label_info ub-f1 ub" }, [
                  _c(
                    "view",
                    {
                      staticClass: "ub-f1 pr-20",
                      attrs: {
                        catchtap: "chooseBarginPubPrice",
                        "data-status": "0",
                      },
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pub_price,
                            expression: "pub_price",
                          },
                        ],
                        attrs: {
                          bindinput: "inputPubPrice",
                          cursorSpacing: "20",
                          maxlength: "5",
                          name: "pub_price",
                          placeholder: "直接输入或右方选择",
                          placeholderClass: "placeholder_input",
                          type: "number",
                        },
                        domProps: { value: _vm.pub_price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.pub_price = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _vm.pub_price
                    ? _c("view", { staticClass: "input-unit" }, [_vm._v("元")])
                    : _vm._e(),
                  _c("view", { staticClass: "gap_line" }),
                  _c(
                    "view",
                    {
                      staticClass: "check_box",
                      class: _vm.bargin_pub_price ? "check_box_ed" : "",
                      attrs: {
                        catchtap: "chooseBarginPubPrice",
                        "data-status": _vm.bargin_pub_price,
                      },
                    },
                    [
                      _vm._v(" 议价 "),
                      _c("image", {
                        attrs: {
                          src: __webpack_require__("./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$")("./select_" +
                            (_vm.bargin_pub_price == 1 ? 1 : 0) +
                            ".png"),
                        },
                      }),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.media_item_id == _vm.const_media_item_ids.weibo
            ? _c("view", { staticClass: "item_label ub" }, [
                _c("view", { staticClass: "label_title" }, [
                  _vm._v("转发报价"),
                ]),
                _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
                _c("view", { staticClass: "label_info ub-f1 ub" }, [
                  _c(
                    "view",
                    {
                      staticClass: "ub-f1 pr-20",
                      attrs: {
                        catchtap: "chooseBarginSharePrice",
                        "data-status": "0",
                      },
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.share_price,
                            expression: "share_price",
                          },
                        ],
                        attrs: {
                          bindinput: "inputSharePrice",
                          cursorSpacing: "20",
                          maxlength: "5",
                          name: "share_price",
                          placeholder: "直接输入或右方选择",
                          placeholderClass: "placeholder_input",
                          type: "number",
                        },
                        domProps: { value: _vm.share_price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.share_price = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _vm.share_price
                    ? _c("view", { staticClass: "input-unit" }, [_vm._v("元")])
                    : _vm._e(),
                  _c("view", { staticClass: "gap_line" }),
                  _c(
                    "view",
                    {
                      staticClass: "check_box",
                      class: _vm.bargin_share_price ? "check_box_ed" : "",
                      attrs: {
                        catchtap: "chooseBarginSharePrice",
                        "data-status": _vm.bargin_share_price,
                      },
                    },
                    [
                      _vm._v(" 议价 "),
                      _c("image", {
                        attrs: {
                          src: __webpack_require__("./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$")("./select_" +
                            (_vm.bargin_share_price == 1 ? 1 : 0) +
                            ".png"),
                        },
                      }),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.media_item_id == _vm.const_media_item_ids.douyin ||
          _vm.media_item_id == _vm.const_media_item_ids.kuaishou
            ? _c("view", { staticClass: "item_label ub" }, [
                _c("view", { staticClass: "label_title" }, [
                  _vm._v("短视频报价"),
                ]),
                _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
                _c("view", { staticClass: "label_info ub-f1 ub" }, [
                  _c(
                    "view",
                    {
                      staticClass: "ub-f1 pr-20",
                      attrs: {
                        catchtap: "chooseBarginVideoPrice",
                        "data-status": "0",
                      },
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.video_price,
                            expression: "video_price",
                          },
                        ],
                        attrs: {
                          bindinput: "inputVideoPrice",
                          cursorSpacing: "20",
                          maxlength: "5",
                          name: "video_price",
                          placeholder: "直接输入或右方选择",
                          placeholderClass: "placeholder_input",
                          type: "number",
                        },
                        domProps: { value: _vm.video_price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.video_price = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _vm.video_price
                    ? _c("view", { staticClass: "input-unit" }, [_vm._v("元")])
                    : _vm._e(),
                  _c("view", { staticClass: "gap_line" }),
                  _c(
                    "view",
                    {
                      staticClass: "check_box",
                      class: _vm.bargin_video_price ? "check_box_ed" : "",
                      attrs: {
                        catchtap: "chooseBarginVideoPrice",
                        "data-status": _vm.bargin_video_price,
                      },
                    },
                    [
                      _vm._v(" 议价 "),
                      _c("image", {
                        attrs: {
                          src: __webpack_require__("./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$")("./select_" +
                            (_vm.bargin_video_price == 1 ? 1 : 0) +
                            ".png"),
                        },
                      }),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.media_item_id == _vm.const_media_item_ids.douyin ||
          _vm.media_item_id == _vm.const_media_item_ids.kuaishou
            ? _c("view", { staticClass: "item_label ub" }, [
                _c("view", { staticClass: "label_title" }, [
                  _vm._v("直播报价"),
                ]),
                _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
                _c("view", { staticClass: "label_info ub-f1 ub" }, [
                  _c(
                    "view",
                    {
                      staticClass: "ub-f1 pr-20",
                      attrs: {
                        catchtap: "chooseBarginLivePrice",
                        "data-status": "0",
                      },
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.live_price,
                            expression: "live_price",
                          },
                        ],
                        attrs: {
                          bindinput: "inputLivePrice",
                          cursorSpacing: "20",
                          maxlength: "5",
                          name: "live_price",
                          placeholder: "直接输入或右方选择",
                          placeholderClass: "placeholder_input",
                          type: "number",
                        },
                        domProps: { value: _vm.live_price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.live_price = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _vm.live_price
                    ? _c("view", { staticClass: "input-unit" }, [_vm._v("元")])
                    : _vm._e(),
                  _c("view", { staticClass: "gap_line" }),
                  _c(
                    "view",
                    {
                      staticClass: "check_box",
                      class: _vm.bargin_live_price ? "check_box_ed" : "",
                      attrs: {
                        catchtap: "chooseBarginLivePrice",
                        "data-status": _vm.bargin_live_price,
                      },
                    },
                    [
                      _vm._v(" 议价 "),
                      _c("image", {
                        attrs: {
                          src: __webpack_require__("./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$")("./select_" +
                            (_vm.bargin_live_price == 1 ? 1 : 0) +
                            ".png"),
                        },
                      }),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.media_item_id != _vm.const_media_item_ids.douyin &&
          _vm.media_item_id != _vm.const_media_item_ids.kuaishou &&
          _vm.media_item_id != _vm.const_media_item_ids.weibo
            ? _c("view", { staticClass: "item_label ub" }, [
                _c("view", { staticClass: "label_title" }, [
                  _vm._v("广告报价"),
                ]),
                _c("view", { staticClass: "tip_red" }, [_vm._v("*")]),
                _c("view", { staticClass: "label_info ub-f1 ub" }, [
                  _c(
                    "view",
                    {
                      staticClass: "ub-f1 pr-20",
                      attrs: {
                        catchtap: "chooseBarginAdPrice",
                        "data-status": "0",
                      },
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ad_price,
                            expression: "ad_price",
                          },
                        ],
                        attrs: {
                          bindinput: "inputAdPrice",
                          cursorSpacing: "20",
                          maxlength: "5",
                          name: "ad_price",
                          placeholder: "直接输入或右方选择",
                          placeholderClass: "placeholder_input",
                          type: "number",
                        },
                        domProps: { value: _vm.ad_price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.ad_price = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _vm.ad_price
                    ? _c("view", { staticClass: "input-unit" }, [_vm._v("元")])
                    : _vm._e(),
                  _c("view", { staticClass: "gap_line" }),
                  _c(
                    "view",
                    {
                      staticClass: "check_box",
                      class: _vm.bargin_ad_price ? "check_box_ed" : "",
                      attrs: {
                        catchtap: "chooseBarginAdPrice",
                        "data-status": _vm.bargin_ad_price,
                      },
                    },
                    [
                      _vm._v(" 议价 "),
                      _c("image", {
                        attrs: {
                          src: __webpack_require__("./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$")("./select_" +
                            _vm.bargin_ad_price +
                            ".png"),
                        },
                      }),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.media.tag.length > 0
            ? _c("view", { staticClass: "item_label ub height_rewrite" }, [
                _c("view", { staticClass: "label_title" }, [
                  _vm._v("账号领域"),
                ]),
                _c(
                  "view",
                  { staticClass: "label_select ub-f1" },
                  _vm._l(_vm.media.tag, function (tagitem, index) {
                    return _c(
                      "view",
                      {
                        key: index,
                        staticClass: "tag_name",
                        class: tagitem.taged ? "taged" : "",
                        attrs: { catchtap: "select_tag" },
                      },
                      [_vm._v(_vm._s(tagitem.tag_name))]
                    )
                  }),
                  0
                ),
              ])
            : _vm._e(),
        ]),
        _c(
          "cover-view",
          {
            staticClass: "subbtn_bottom_block",
            class: _vm.isIphoneX ? "fix-iphonex-button" : "",
          },
          [
            _c("cover-view", { staticClass: "subbtn_bottom" }, [
              _c("button", { attrs: { formType: "submit" } }, [_vm._v("保存")]),
            ]),
          ],
          1
        ),
      ],
      1
    ),
    _vm.showModel
      ? _c("view", {
          staticClass: "modal-bg",
          attrs: { catchtap: "closeModel" },
        })
      : _vm._e(),
    _vm.showModel
      ? _c("view", { staticClass: "model_box ub" }, [
          _c("view", { staticClass: "ub-f1" }),
          _c("view", { staticClass: "model_main" }, [
            _c("view", { staticClass: "main_top" }, [
              _vm._v("获取" + _vm._s(_vm.media.name) + "账号数据失败"),
            ]),
            _c("view", { staticClass: "main_text margin_b" }, [
              _vm._v(
                "如果您确定复制了正确的" +
                  _vm._s(_vm.media.name) +
                  "主页链接（非视频或图文链接）你可："
              ),
            ]),
            _c("view", { staticClass: "main_text" }, [
              _vm._v(
                "1.切换网络环境后重试（如流量切换为WIFI、WIFI切换为流量或流量环境下开启飞行模再关闭）"
              ),
            ]),
            _c("view", { staticClass: "main_text" }, [
              _vm._v("2.等待一段时间后再次尝试获取"),
            ]),
            _c("view", { staticClass: "main_text" }, [
              _vm._v(" 3.联系客服，咨询客服协助解决当前问题 "),
              _c(
                "view",
                {
                  staticClass: "click_service color_blue",
                  attrs: { catchtap: "closeModel" },
                },
                [
                  _c("view", { attrs: { catchtap: "goKefu" } }, [
                    _vm._v("联系客服 >"),
                  ]),
                ]
              ),
            ]),
            _c("view", { staticClass: "main_text" }, [
              _vm._v("4.切换为手动输入模式"),
            ]),
            _c("view", { staticClass: "model_btn ub" }, [
              _c(
                "view",
                { staticClass: "btn_know", attrs: { catchtap: "closeModel" } },
                [_vm._v("我知道了")]
              ),
              _c(
                "view",
                {
                  staticClass: "btn_to color_blue",
                  attrs: { catchtap: "click_todo" },
                },
                [_vm._v("切换手动输入")]
              ),
            ]),
          ]),
          _c("view", { staticClass: "ub-f1" }),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$":
/*!************************************************************!*\
  !*** ./src/assets/images/common sync ^\.\/select_.*\.png$ ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./select_0.png": "./src/assets/images/common/select_0.png",
	"./select_1.png": "./src/assets/images/common/select_1.png"
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
webpackContext.id = "./src/assets/images/common sync recursive ^\\.\\/select_.*\\.png$";

/***/ }),

/***/ "./src/assets/images/common/douyin.png":
/*!*********************************************!*\
  !*** ./src/assets/images/common/douyin.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/douyin.png";

/***/ }),

/***/ "./src/assets/images/common/kuaishou.png":
/*!***********************************************!*\
  !*** ./src/assets/images/common/kuaishou.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/kuaishou.png";

/***/ }),

/***/ "./src/assets/images/common/redbook.png":
/*!**********************************************!*\
  !*** ./src/assets/images/common/redbook.png ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/redbook.png";

/***/ }),

/***/ "./src/assets/images/common/select_0.png":
/*!***********************************************!*\
  !*** ./src/assets/images/common/select_0.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAWABYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9V/2av2avhX+0d8KrT42fG7R7vXtd8QXl3NdzS6tcRImy4kiVI0ikUIgWMYXt24wB34/4J/fshjgfCM/+D3UP/j9M/YAdv+GTPCvP8d9/6cJ69poA+Mf2rdN039hnWfD+sfs3/atBj8SWt3Dqlj9umnhlaBoGSTEzvhv3pGfTpjJyVL/wVsK4+H4Y/wDQVx/5J0UAQaR+1Rr37ENm37N2r/Duz8RroN3ObPVbbW3tTLDLO8y70aB8OC5zg46DnGTZH/BWO7Zto+AEf/hWH/5EoooApnTNV/4Kea1bz6vZ23hTS/B1pKNkV491cXFxctF82RHGuzbA3HUHHXPBRRQB/9llZPp6AAAAAA=="

/***/ }),

/***/ "./src/assets/images/common/select_1.png":
/*!***********************************************!*\
  !*** ./src/assets/images/common/select_1.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/select_1.png";

/***/ }),

/***/ "./src/assets/images/common/weibo.png":
/*!********************************************!*\
  !*** ./src/assets/images/common/weibo.png ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/weibo.png";

/***/ }),

/***/ "./src/packageAdd/pages/user/addfans/index.scss":
/*!******************************************************!*\
  !*** ./src/packageAdd/pages/user/addfans/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/addfans/index.vue":
/*!*****************************************************!*\
  !*** ./src/packageAdd/pages/user/addfans/index.vue ***!
  \*****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/addfans/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/addfans/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/addfans/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/packageAdd/pages/user/addfans/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addfans/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/addfans/index.vue?vue&type=template&id=49073154&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/addfans/index.vue?vue&type=template&id=49073154&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_49073154_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=49073154&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addfans/index.vue?vue&type=template&id=49073154&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_49073154_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_49073154_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/addfans/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map