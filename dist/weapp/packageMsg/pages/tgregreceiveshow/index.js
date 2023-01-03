(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMsg/pages/tgregreceiveshow/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/tgregreceiveshow/index.vue":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/tgregreceiveshow/index.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_73536450_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=73536450&scoped=true& */ "./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=template&id=73536450&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_73536450_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_73536450_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "73536450",
  "4b733aca"
  
)

component.options.__file = "src/packageMsg/pages/tgregreceiveshow/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageMsg/pages/tgregreceiveshow/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "tgregreceiveshow",
  data: function data() {
    return {
      showModel: false,
      tgregreceiveInfo: {
        author: {}
      }
    };
  },
  methods: {
    closeQRcode: function closeQRcode() {
      this.showModel = false;
    },
    showQRcode: function showQRcode() {
      this.showModel = true;
    },
    clickSaveImg: function clickSaveImg() {
      var _this = this;

      //先授权相册
      wx.getSetting({
        success: function success(res) {
          if (!res.authSetting["scope.writePhotosAlbum"]) {
            //未授权的话发起授权
            wx.authorize({
              scope: "scope.writePhotosAlbum",
              success: function success() {
                //用户允许授权，保存到相册
                _this.saveImg();
              },
              fail: function fail() {
                //用户拒绝授权，然后就引导授权（这里的话如果用户拒绝，不会立马弹出引导授权界面，坑就是上边所说的官网原因）
                wx.openSetting({
                  success: function success() {
                    wx.authorize({
                      scope: "scope.writePhotosAlbum",
                      succes: function succes() {
                        //授权成功，保存图片
                        _this.saveImg();
                      }
                    });
                  }
                });
              }
            });
          } else {
            //已经授权
            _this.saveImg();
          }
        }
      });
    },
    saveImg: function saveImg() {
      //保存到相册
      var url = this.data.contact.wechat_links;
      wx.downloadFile({
        //这里如果有报错就按照上边的解决方案来处理
        url: url,
        success: function success(res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function success(res) {
              wx.showToast({
                title: "保存成功！"
              });
            },
            faile: function faile(err) {
              console.log("失败！");
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=template&id=73536450&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=template&id=73536450&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "tgregreceiveshow" }, [
    _c("view", { staticClass: "tgregreceive_top" }, [
      _c("view", { staticClass: "tgregreceive_top_left" }, [
        _c("image", {
          staticClass: "avatar",
          attrs: { src: _vm.tgregreceiveInfo.author.avatar },
        }),
        _c("view", { staticClass: "tgregreceive_info" }, [
          _c(
            "view",
            { staticClass: "tgregreceive_name" },
            [
              _vm._v(" nickname "),
              _vm.tgregreceiveInfo.author.sex !== null
                ? _c("block", [
                    _vm.tgregreceiveInfo.author.sex == 1
                      ? _c("image", {
                          staticClass: "tgregreceive_sex",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                          },
                        })
                      : _vm._e(),
                    _vm.tgregreceiveInfo.author.sex == 0
                      ? _c("image", {
                          staticClass: "tgregreceive_sex",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/nv.png */ "./src/assets/images/nv.png"),
                          },
                        })
                      : _vm._e(),
                  ])
                : _vm._e(),
            ],
            1
          ),
          _c("view", { staticClass: "tgregreceive_p" }, [
            _c("text", [_vm._v(" ewe | 北京 ")]),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "tgregreceive_right" }, [
        _c("view", { staticClass: "time" }, [_vm._v("6天前来过")]),
        _c("view", { staticClass: "complaint" }, [_vm._v("投诉")]),
      ]),
    ]),
    _c("view", { staticClass: "tgregreceive_info" }, [
      _c("view", { staticClass: "tgregreceive_title" }, [
        _vm._v(" 对方报名信息 "),
      ]),
      _c("view", { staticClass: "tgregreceive_remark" }, [
        _c("view", { staticClass: "tgregreceive_remark_label" }, [
          _vm._v("报名备注："),
        ]),
        _c("view", { staticClass: "tgregreceive_remark_ct" }, [
          _vm._v(
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
          ),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "tgregreceive_contact" }, [
      _c("view", { staticClass: "tgregreceive_title" }, [
        _vm._v(" 对方联系方式 "),
      ]),
      _c("view", { staticClass: "contact_info" }, [
        _c("view", { staticClass: "contact_info_left" }, [
          _c("view", [_vm._v("手机号：")]),
          _c("view", [_vm._v("13693628075")]),
        ]),
        _c("view", { staticClass: "copy" }, [_vm._v("复制")]),
      ]),
      _c("view", { staticClass: "contact_info" }, [
        _c("view", { staticClass: "contact_info_left" }, [
          _c("view", [_vm._v("微信号：")]),
          _c("view", [_vm._v("Anne")]),
        ]),
        _c("view", { staticClass: "copy", on: { tap: _vm.showQRcode } }, [
          _vm._v("点击查看微信二维码"),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "tgregreceive_bottom" }, [
      _c("view", { staticClass: "tgregreceive_bottom_left" }, [
        _c("view", { staticClass: "tgregreceive_bottom_nobg" }, [
          _vm._v("不合适"),
        ]),
        _c("view", { staticClass: "tgregreceive_bottom_bg" }, [_vm._v("合适")]),
      ]),
      _c("view", { staticClass: "tgregreceive_bottom_rt" }, [
        _c("view", { staticClass: "communicate" }, [_vm._v("发起沟通")]),
      ]),
    ]),
    _vm.showModel
      ? _c("view", { staticClass: "modal_box" }, [
          _c("view", { staticClass: "modal_content" }, [
            _c("view", [_vm._v(" 微信二维码 ")]),
            _c("image", { staticClass: "qrcode-img", attrs: { src: "" } }),
            _c("image", {
              staticClass: "close-img",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/common/x_icon.png */ "./src/assets/images/common/x_icon.png"),
              },
              on: { tap: _vm.closeQRcode },
            }),
            _c("view", { staticClass: "save", on: { tap: _vm.clickSaveImg } }, [
              _vm._v("保存到相册"),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMsg/pages/tgregreceiveshow/index.scss":
/*!**********************************************************!*\
  !*** ./src/packageMsg/pages/tgregreceiveshow/index.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMsg/pages/tgregreceiveshow/index.vue":
/*!*********************************************************!*\
  !*** ./src/packageMsg/pages/tgregreceiveshow/index.vue ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/tgregreceiveshow/index.vue");


var config = {"navigationBarTitleText":"报名详情"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMsg/pages/tgregreceiveshow/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=template&id=73536450&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=template&id=73536450&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73536450_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=73536450&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/tgregreceiveshow/index.vue?vue&type=template&id=73536450&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73536450_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73536450_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMsg/pages/tgregreceiveshow/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map