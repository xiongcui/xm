(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/contact/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/contact/index.vue":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/contact/index.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4b0a70d5&scoped=true& */ "./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "4b0a70d5",
  "5677a6c7"
  
)

component.options.__file = "src/packageAdd/pages/user/contact/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/contact/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "contact",
  data: function data() {
    return {
      from_page: "",
      showModel: false,
      info: {
        person: "",
        is_wechat: 1,
        is_mobile: 1,
        mobile: "",
        wechat: "",
        wechat_links: ""
      }
    };
  },
  methods: {
    switch_selct_wechat: function switch_selct_wechat() {
      this.info.is_wechat = this.info.is_wechat ? 0 : 1;
    },
    switch_selct_mobile: function switch_selct_mobile() {
      console.log(11);
      this.info.is_mobile = this.info.is_mobile ? 0 : 1;
      if (this.info.is_mobile) this.showModel = true;
    },
    submit: function submit() {
      if (!this.info.person) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("请填写联系人");
        return false;
      }

      if (!this.info.is_mobile && !this.info.is_wechat) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("微信号和手机号不能同时关闭哦～");
        return false;
      }

      if (this.info.is_wechat && !this.info.wechat) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("请填写微信号");
        return false;
      }

      if (this.info.is_mobile && !this.info.mobile) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("请填写手机号");
        return false;
      }

      this.subContact({
        person: this.info.person,
        mobile: this.info.mobile,
        wechat: this.info.wechat,
        wechat_links: this.info.wechat_links
      });
    },
    delete_preview: function delete_preview() {
      this.info.wechat_links = "";
    },
    chooseImage: function chooseImage() {
      var _this = this;

      wx.chooseMedia({
        count: 1,
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
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_4__[/* Base64 */ "a"].encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "wechat_qr_code"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            _this2.info.wechat_links = data.data.file1;
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none"
            });
          }
        }
      });
    },
    closeModel: function closeModel() {
      this.showModel = false;
      this.info.is_mobile = 0;
    },
    cancleModel: function cancleModel() {
      this.showModel = false;
      this.info.is_mobile = 0;
    },
    subModel: function subModel() {
      this.showModel = false;
      this.info.is_mobile = 1;
    },
    userContact: function userContact(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userContact */ "Fb"])(params);

              case 3:
                res = _context.sent;
                _this3.info = res.data.data;
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
    },
    subContact: function subContact(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, pages, prevPage;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* subContact */ "sb"])(params);

              case 3:
                res = _context2.sent;
                pages = getCurrentPages();
                prevPage = pages[pages.length - 2];
                prevPage.setData({
                  contact: _this4.info
                });
                wx.navigateBack({
                  delta: 1
                });
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
    this.userContact("");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true& ***!
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
    _c("view", [
      _c("view", { staticClass: "contact_info" }, [
        _vm.from_page == "addtonggao"
          ? _c("view", { staticClass: "item line-b ub" }, [
              _c("view", { staticClass: "contact_info_title" }, [
                _vm._v("我的联系方式"),
              ]),
              _c("view", { staticClass: "contact_info_title_tip" }, [
                _vm._v("（仅报名者可见）"),
              ]),
            ])
          : _vm._e(),
        _vm.from_page == "tonggaoreg"
          ? _c("view", { staticClass: "item line-b ub" }, [
              _c("view", { staticClass: "contact_info_title" }, [
                _vm._v("我的联系方式"),
              ]),
            ])
          : _vm._e(),
        _c("view", { staticClass: "item line-b ub" }, [
          _c("view", { staticClass: "item_title" }, [_vm._v("联系人")]),
          _c("view", { staticClass: "ub-f1 item_input" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.info.person,
                  expression: "info.person",
                },
              ],
              attrs: {
                maxlength: "60",
                name: "person",
                placeholder: "请输入联系人姓名",
                placeholderClass: "input-placeholder",
                type: "text",
              },
              domProps: { value: _vm.info.person },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.info, "person", $event.target.value)
                },
              },
            }),
          ]),
        ]),
        _c("view", { staticClass: "item line-b ub" }, [
          _c("view", { staticClass: "item_title" }, [_vm._v("微信号")]),
          _c("view", { staticClass: "ub-f1" }),
          _c("view", { staticClass: "item_switch" }, [
            _c("switch", {
              staticClass: "btn_switch",
              attrs: {
                checked: _vm.info.is_wechat == 1 ? true : false,
                color: "#fe5457",
              },
              on: { tap: _vm.switch_selct_wechat },
            }),
          ]),
        ]),
        _vm.info.is_wechat == 1
          ? _c("view", { staticClass: "item line-b" }, [
              _c("view", { staticClass: "item_input" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.info.wechat,
                      expression: "info.wechat",
                    },
                  ],
                  attrs: {
                    name: "wechat",
                    placeholder: "请输入微信号",
                    placeholderClass: "input-placeholder",
                    type: "text",
                  },
                  domProps: { value: _vm.info.wechat },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.info, "wechat", $event.target.value)
                    },
                  },
                }),
              ]),
            ])
          : _vm._e(),
        _c("view", { staticClass: "item line-b ub" }, [
          _c("view", { staticClass: "item_title" }, [_vm._v("手机号")]),
          _c("view", { staticClass: "ub-f1" }),
          _c("view", { staticClass: "item_switch" }, [
            _c("switch", {
              staticClass: "btn_switch",
              attrs: {
                checked: _vm.info.is_mobile == 1 ? true : false,
                color: "#fe5457",
              },
              on: { tap: _vm.switch_selct_mobile },
            }),
          ]),
        ]),
        _vm.info.is_mobile == 1
          ? _c("view", { staticClass: "item line-b" }, [
              _c("view", { staticClass: "item_input" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.info.mobile,
                      expression: "info.mobile",
                    },
                  ],
                  attrs: {
                    name: "wechat",
                    placeholder: "请输入手机号",
                    placeholderClass: "input-placeholder",
                    type: "text",
                  },
                  domProps: { value: _vm.info.mobile },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.info, "mobile", $event.target.value)
                    },
                  },
                }),
              ]),
            ])
          : _vm._e(),
        _c("view", { staticClass: "item ub" }, [
          _c("view", { staticClass: "item_title item_title_qrcode" }, [
            _vm._v("微信名片二维码"),
          ]),
          _c("view", { staticClass: "ub-f1" }),
          _c("view", { staticClass: "imgsblock" }, [
            _c("view", { staticClass: "imgs" }, [
              _vm.info.wechat_links
                ? _c(
                    "view",
                    {
                      staticClass: "preview_img",
                      on: { tap: _vm.chooseImage },
                    },
                    [
                      _c("image", {
                        attrs: {
                          catchtap: "showbig",
                          mode: "aspectFill",
                          src: _vm.info.wechat_links,
                        },
                      }),
                      _c(
                        "view",
                        {
                          staticClass: "preview_delet",
                          on: {
                            tap: function ($event) {
                              $event.stopPropagation()
                              return _vm.delete_preview.apply(null, arguments)
                            },
                          },
                        },
                        [
                          _c("image", {
                            attrs: {
                              mode: "scaleToFill",
                              src: "https://yuepai-oss.qubeitech.com/static/common/icon_sizer_close.png",
                            },
                          }),
                        ]
                      ),
                    ]
                  )
                : _c(
                    "view",
                    { staticClass: "pick_img", on: { tap: _vm.chooseImage } },
                    [
                      _c("image", {
                        attrs: {
                          src: "https://yuepai-oss.qubeitech.com/static/common/img_add.png",
                        },
                      }),
                    ]
                  ),
            ]),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "sub_btn" }, [
        _c("button", { on: { tap: _vm.submit } }, [_vm._v("保 存")]),
      ]),
    ]),
    _vm.showModel
      ? _c("view", { staticClass: "modal-bg", on: { tap: _vm.closeModel } })
      : _vm._e(),
    _vm.showModel
      ? _c("view", { staticClass: "model_box ub" }, [
          _c("view", { staticClass: "ub-f1" }),
          _c("view", { staticClass: "model_main" }, [
            _c("view", { staticClass: "model_title" }, [
              _c("view", [
                _vm._v(
                  "手机作为联系方式，为保护您的隐私，建议提交微信，请确认是否开启手机号码"
                ),
              ]),
            ]),
            _c("view", { staticClass: "model_btn ub" }, [
              _c("view", { staticClass: "ub-f1" }),
              _c(
                "view",
                { staticClass: "btn_no", on: { tap: _vm.cancleModel } },
                [_vm._v("关闭")]
              ),
              _c("view", { staticClass: "ub-f1" }),
              _c(
                "view",
                { staticClass: "btn_yes", on: { tap: _vm.subModel } },
                [_vm._v("开启")]
              ),
              _c("view", { staticClass: "ub-f1" }),
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

/***/ "./src/packageAdd/pages/user/contact/index.scss":
/*!******************************************************!*\
  !*** ./src/packageAdd/pages/user/contact/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/contact/index.vue":
/*!*****************************************************!*\
  !*** ./src/packageAdd/pages/user/contact/index.vue ***!
  \*****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/contact/index.vue");


var config = {"navigationBarTitleText":"我的联系方式"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/contact/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/contact/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4b0a70d5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/contact/index.vue?vue&type=template&id=4b0a70d5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b0a70d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/contact/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map