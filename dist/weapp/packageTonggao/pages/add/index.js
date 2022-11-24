(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageTonggao/pages/add/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/add/index.vue":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/add/index.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1193e09e&scoped=true& */ "./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "1193e09e",
  "43158928"
  
)

component.options.__file = "src/packageTonggao/pages/add/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/packageTonggao/pages/add/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "addtonggao",
  data: function data() {
    return {
      isIphoneX: false,
      identity: "",
      identityIndex: "",
      identityList: [],
      select_city: "",
      regionList: [],
      date: "",
      checked: false,
      sexData: [{
        name: "男",
        value: 1,
        ispick: true
      }, {
        name: "女",
        value: 0,
        ispick: false
      }, {
        name: "不限",
        value: 100,
        ispick: false
      }],
      cost: "",
      costIndex: "",
      costList: [],
      company: "",
      companyList: [],
      companyIndex: 0,
      checked1: false,
      payment_range: 0,
      amount: "",
      minAmount: "",
      maxAmount: "",
      checked2: false,
      name: "",
      time: "",
      place: "",
      imgList: []
    };
  },
  methods: {
    uploadImgClose: function uploadImgClose(index) {
      this.imgList.splice(index, 1);
    },
    previewImage: function previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src,
        // 图片的地址url
        urls: urls // 预览的地址url

      });
    },
    identityChange: function identityChange() {},
    bindRegionChange: function bindRegionChange(e) {
      this.select_city = e.detail.value.join("-");
      this.regionList = e.detail.code;
    },
    checkClick: function checkClick() {
      this.checked1 = !this.checked1;
    },
    select_tag: function select_tag(row) {
      //   let result = this.identity.find((ele) => ele === row.role);
      //   if (!result) {
      //     if (this.identity.length > 2) {
      //       errortip("最多选择3个身份！");
      //       return false;
      //     }
      //     this.identity.push(row.role);
      //   } else {
      //     const index = this.identity.findIndex((ele) => ele === row.role);
      //     this.identity.splice(index, 1);
      //   }
      row.ispick = !row.ispick;
    },
    costChange: function costChange() {},
    companyChange: function companyChange(e) {
      this.company = this.companyList[e.detail.value].value;
      this.companyIndex = e.detail.value;
    },
    checkClick2: function checkClick2() {
      this.checked2 = !this.checked2;
    },
    chooseImage: function chooseImage() {
      if (this.imgList.length >= 9) {
        wx.showToast({
          title: "最多上传9张图！",
          icon: "none"
        });
        return false;
      }

      var _this = this;

      wx.chooseMedia({
        count: 9 - this.imgList.length,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success: function success(res) {
          wx.showLoading({
            title: "正在上传中"
          });
          var arr = res.tempFiles;
          var imgInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            imgInfo = v;

            _this.upImgs(imgInfo);
          });
        }
      });
    },
    upImgs: function upImgs(dataInfo) {
      var _this2 = this;

      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_0__[/* Base64 */ "a"].encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://tapi.cupz.cn/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "invite"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            _this2.imgList.push(data.data.file1);
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none"
            });
          }
        }
      });
    },
    submit: function submit() {}
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "add-tonggao" },
    [
      _c("view", { staticClass: "tonggao-box" }, [
        _c("view", { staticClass: "tonggao-item" }, [
          _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 通告类型 ")]),
          _c("view", { staticClass: "tonggao-rt" }, [_vm._v(" 发型创作 ")]),
        ]),
        _c("view", { staticClass: "tonggao-item" }, [
          _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 面向身份 ")]),
          _c(
            "view",
            { staticClass: "tonggao-rt" },
            [
              _c(
                "picker",
                {
                  staticClass: "tonggao-select",
                  attrs: {
                    value: _vm.identityIndex,
                    range: _vm.identityList,
                    "range-key": "value",
                  },
                  on: { change: _vm.identityChange },
                },
                [
                  _vm.identity
                    ? _c("view", { staticClass: "tonggao-select-item" }, [
                        _vm._v(_vm._s(_vm.identity)),
                      ])
                    : _c("view", { staticClass: "tonggao-select-item" }, [
                        _vm._v("请选择"),
                      ]),
                ]
              ),
            ],
            1
          ),
        ]),
        _c("view", { staticClass: "tonggao-item" }, [
          _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 面向地区 ")]),
          _c(
            "view",
            { staticClass: "tonggao-rt" },
            [
              _c(
                "picker",
                {
                  staticClass: "tonggao-select",
                  attrs: { mode: "region", value: "region" },
                  on: { change: _vm.bindRegionChange },
                },
                [
                  _vm.select_city
                    ? _c("view", { staticClass: "tonggao-select-item" }, [
                        _vm._v(_vm._s(_vm.select_city)),
                      ])
                    : _c("view", { staticClass: "tonggao-select-item" }, [
                        _vm._v("请选择公告面向地区"),
                      ]),
                ]
              ),
            ],
            1
          ),
        ]),
        _c("view", { staticClass: "tonggao-item" }, [
          _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 截止日期 ")]),
          _c("view", { staticClass: "tonggao-rt" }, [
            _c(
              "view",
              { staticClass: "tonggao-dete" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.date,
                      expression: "date",
                    },
                  ],
                  staticClass: "tonggao-name",
                  attrs: { placeholder: "请选择报名截止日期" },
                  domProps: { value: _vm.date },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.date = $event.target.value
                    },
                  },
                }),
                _c("text", { staticClass: "tonggao-split" }, [_vm._v("|")]),
                _c("text", { staticClass: "long-term" }, [_vm._v("长期")]),
                _c("checkbox", {
                  attrs: { checked: _vm.checked },
                  on: { tap: _vm.checkClick },
                }),
              ],
              1
            ),
          ]),
        ]),
        _c("view", { staticClass: "tonggao-item" }, [
          _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 性别要求 ")]),
          _c("view", { staticClass: "tonggao-rt" }, [
            _c(
              "view",
              { staticClass: "tags" },
              _vm._l(_vm.sexData, function (item, index) {
                return _c(
                  "text",
                  {
                    key: index,
                    staticClass: "tag_item",
                    class: item.ispick ? "tag_itemed" : "",
                    on: {
                      tap: function ($event) {
                        return _vm.select_tag(item)
                      },
                    },
                  },
                  [_vm._v(_vm._s(item.name))]
                )
              }),
              0
            ),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "tonggao-box" }, [
        _c("view", { staticClass: "tonggao-item" }, [
          _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 通告费用 ")]),
          _c(
            "view",
            { staticClass: "tonggao-rt" },
            [
              _c(
                "picker",
                {
                  staticClass: "tonggao-select",
                  attrs: {
                    value: _vm.costIndex,
                    range: _vm.costList,
                    "range-key": "value",
                  },
                  on: { change: _vm.costChange },
                },
                [
                  _vm.cost
                    ? _c("view", { staticClass: "tonggao-select-item" }, [
                        _vm._v(_vm._s(_vm.cost)),
                      ])
                    : _c("view", { staticClass: "tonggao-select-item" }, [
                        _vm._v("请选择"),
                      ]),
                ]
              ),
            ],
            1
          ),
        ]),
        _c("view", { staticClass: "tonggao-item" }, [
          _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 收费金额 ")]),
          _c(
            "view",
            { staticClass: "tonggao-rt" },
            [
              !_vm.checked1
                ? _c(
                    "block",
                    { staticClass: "payment-amount" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.amount,
                            expression: "amount",
                          },
                        ],
                        staticClass: "amount1",
                        attrs: { placeholder: "请输入" },
                        domProps: { value: _vm.amount },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.amount = $event.target.value
                          },
                        },
                      }),
                      _c(
                        "picker",
                        {
                          attrs: {
                            value: _vm.companyIndex,
                            range: _vm.companyList,
                            "range-key": "value",
                          },
                          on: { change: _vm.companyChange },
                        },
                        [
                          _vm.company
                            ? _c(
                                "view",
                                { staticClass: "tonggao-select-item company" },
                                [_vm._v("元" + _vm._s(_vm.company))]
                              )
                            : _c(
                                "view",
                                { staticClass: "tonggao-select-item company" },
                                [_vm._v("元/单位")]
                              ),
                        ]
                      ),
                      _c("text", { staticClass: "tonggao-split" }, [
                        _vm._v("|"),
                      ]),
                      _c(
                        "block",
                        [
                          _c("checkbox", {
                            staticClass: "payment_range",
                            attrs: {
                              value: _vm.payment_range,
                              checked: _vm.checked1,
                            },
                            on: { tap: _vm.checkClick },
                          }),
                          _c("text", { staticClass: "payment_range_text" }, [
                            _vm._v("区间"),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm.checked1
                ? _c(
                    "block",
                    { staticClass: "payment-amount" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.minAmount,
                            expression: "minAmount",
                          },
                        ],
                        staticClass: "min-amount",
                        attrs: { placeholder: "最小金额" },
                        domProps: { value: _vm.minAmount },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.minAmount = $event.target.value
                          },
                        },
                      }),
                      _c("text", { staticClass: "split" }, [_vm._v("-")]),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.maxAmount,
                            expression: "maxAmount",
                          },
                        ],
                        staticClass: "max-amount",
                        attrs: { placeholder: "最大金额" },
                        domProps: { value: _vm.maxAmount },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.maxAmount = $event.target.value
                          },
                        },
                      }),
                      _c(
                        "picker",
                        {
                          attrs: {
                            value: _vm.companyIndex,
                            range: _vm.companyList,
                            "range-key": "value",
                          },
                          on: { change: _vm.companyChange },
                        },
                        [
                          _vm.company
                            ? _c(
                                "view",
                                { staticClass: "tonggao-select-item company" },
                                [_vm._v("元" + _vm._s(_vm.company))]
                              )
                            : _c(
                                "view",
                                { staticClass: "tonggao-select-item company" },
                                [_vm._v("元/单位")]
                              ),
                        ]
                      ),
                      _c("text", { staticClass: "tonggao-split" }, [
                        _vm._v("|"),
                      ]),
                      _c(
                        "block",
                        [
                          _c("checkbox", {
                            staticClass: "payment_range",
                            attrs: {
                              value: _vm.payment_range,
                              checked: _vm.checked1,
                            },
                            on: { tap: _vm.checkClick },
                          }),
                          _c("text", { staticClass: "payment_range_text" }, [
                            _vm._v("区间"),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ]),
        _c("view", { staticClass: "tonggao-item" }, [
          _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 招募人数 ")]),
          _c(
            "view",
            { staticClass: "tonggao-rt" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.date,
                    expression: "date",
                  },
                ],
                staticClass: "tonggao-name",
                attrs: { placeholder: "请输入招募人数" },
                domProps: { value: _vm.date },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.date = $event.target.value
                  },
                },
              }),
              _c("text", { staticClass: "tonggao-split" }, [_vm._v("|")]),
              _c("text", { staticClass: "long-term" }, [_vm._v("不限")]),
              _c("checkbox", {
                staticClass: "checked2",
                attrs: { checked: _vm.checked2 },
                on: { tap: _vm.checkClick2 },
              }),
            ],
            1
          ),
        ]),
      ]),
      _c("view", { staticClass: "tonggao-box" }, [
        _c("view", { staticClass: "tonggao-item" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name",
              },
            ],
            staticClass: "tonggao-width",
            attrs: { placeholder: "给通告取个名字会有更多报名哦～" },
            domProps: { value: _vm.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              },
            },
          }),
        ]),
        _c("view", { staticClass: "tonggao-item" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.desc,
                expression: "desc",
              },
            ],
            staticClass: "tonggao-width",
            attrs: {
              "auto-height": "",
              placeholder:
                "您需要什么样的合作？比如：模特形象、模特风格、模特经验、合作费用等。配图更佳，但不得含有联系方式，否则不予通过。",
            },
            domProps: { value: _vm.desc },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.desc = $event.target.value
              },
            },
          }),
        ]),
        _c("view", { staticClass: "tonggao-item" }, [
          _c("text", [_vm._v("时间")]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.time,
                expression: "time",
              },
            ],
            staticClass: "tonggao-input",
            attrs: { placeholder: "您期望的合作时间（选填）" },
            domProps: { value: _vm.time },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.time = $event.target.value
              },
            },
          }),
        ]),
        _c("view", { staticClass: "tonggao-item" }, [
          _c("text", [_vm._v("地点")]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.place,
                expression: "place",
              },
            ],
            staticClass: "tonggao-input",
            attrs: { placeholder: "您期望的合作地点（选填）" },
            domProps: { value: _vm.place },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.place = $event.target.value
              },
            },
          }),
        ]),
        _c("view", { staticClass: "tonggao-item" }, [
          _c("view", { staticClass: "tonggao-upload" }, [
            _c("view", { staticClass: "tonggao-upload-title" }, [
              _vm._v("上传照片"),
            ]),
            _c(
              "view",
              { staticClass: "tonggao-upload-list" },
              [
                _vm.imgList.length
                  ? _c(
                      "block",
                      _vm._l(_vm.imgList, function (item, index) {
                        return _c(
                          "view",
                          { key: index, staticClass: "tonggao-upload-img" },
                          [
                            _c("image", {
                              staticClass: "upload-width",
                              attrs: { src: item, mode: "aspectFill" },
                              on: {
                                tap: function ($event) {
                                  return _vm.previewImage(item, _vm.imgList)
                                },
                              },
                            }),
                            _c("text", {
                              staticClass: "upload-close",
                              on: {
                                tap: function ($event) {
                                  return _vm.uploadImgClose(index)
                                },
                              },
                            }),
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e(),
                _c(
                  "view",
                  {
                    staticClass: "tonggao-upload-img",
                    on: { tap: _vm.chooseImage },
                  },
                  [
                    _c("image", {
                      staticClass: "upload-img",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/upload-img.png */ "./src/assets/images/upload-img.png"),
                        mode: "aspectFit",
                      },
                    }),
                    _c("view", [
                      _c("text", { staticClass: "upload-txt" }, [
                        _vm._v("上传照片"),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]),
        ]),
      ]),
      _c(
        "cover-view",
        {
          staticClass: "subbtn_bottom_block",
          class: _vm.isIphoneX ? "fix-iphonex-button" : "",
        },
        [
          _c("cover-view", { staticClass: "subbtn_bottom" }, [
            _c("button", { on: { tap: _vm.submit } }, [_vm._v("发布")]),
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

/***/ "./src/packageTonggao/pages/add/index.scss":
/*!*************************************************!*\
  !*** ./src/packageTonggao/pages/add/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageTonggao/pages/add/index.vue":
/*!************************************************!*\
  !*** ./src/packageTonggao/pages/add/index.vue ***!
  \************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/add/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageTonggao/pages/add/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1193e09e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageTonggao/pages/add/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map