(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/realnameAuth/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/realnameAuth/index.vue":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/realnameAuth/index.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_280e1af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=280e1af2&scoped=true& */ "./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=template&id=280e1af2&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_280e1af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_280e1af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "280e1af2",
  "468ecc40"
  
)

component.options.__file = "src/packageAdd/pages/user/realnameAuth/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/realnameAuth/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "realnameAuth",
  data: function data() {
    return {
      realname: "",
      realname_rx: "",
      realname_gh: "",
      card: ""
    };
  },
  methods: {
    chooseImage: function chooseImage(type) {
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

            if (type == 0) {
              _this.uprxImgs(imgInfo);
            } else {
              _this.upghImgs(imgInfo);
            }
          });
        }
      });
    },
    uprxImgs: function uprxImgs(dataInfo) {
      var _this2 = this;

      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_1__[/* Base64 */ "a"].encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "photo"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            _this2.realname_rx = data.data.file1;
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none"
            });
          }
        }
      });
    },
    upghImgs: function upghImgs(dataInfo) {
      var _this3 = this;

      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_1__[/* Base64 */ "a"].encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "photo"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            _this3.realname_gh = data.data.file1;
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none"
            });
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=template&id=280e1af2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=template&id=280e1af2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "realname" }, [
    _c("view", { staticClass: "realname_info" }, [
      _c("view", { staticClass: "realname_title" }, [
        _c("image", {
          attrs: {
            src: __webpack_require__(/*! ../../../../assets/images/user/realname/sfz.jpg */ "./src/assets/images/user/realname/sfz.jpg"),
          },
        }),
        _vm._v(" 请完善您的个人信息 "),
      ]),
      _c("view", { staticClass: "realname_form" }, [
        _c("view", { staticClass: "label" }, [_vm._v(" 真实姓名 ")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.realname,
              expression: "realname",
            },
          ],
          staticClass: "realname-input",
          attrs: { placeholder: "请输入真实姓名" },
          domProps: { value: _vm.realname },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.realname = $event.target.value
            },
          },
        }),
      ]),
      _c("view", { staticClass: "realname_form" }, [
        _c("view", { staticClass: "label" }, [_vm._v(" 身份证号 ")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.card,
              expression: "card",
            },
          ],
          staticClass: "realname-input",
          attrs: { placeholder: "请输入身份证号" },
          domProps: { value: _vm.card },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.card = $event.target.value
            },
          },
        }),
      ]),
      _c("view", { staticClass: "realname_title" }, [
        _c("image", {
          attrs: {
            src: __webpack_require__(/*! ../../../../assets/images/user/realname/sfz.jpg */ "./src/assets/images/user/realname/sfz.jpg"),
          },
        }),
        _vm._v(" 请上传身份证的正反面 "),
      ]),
      _c("view", { staticClass: "realname_tips" }, [
        _c("image", {
          attrs: {
            src: __webpack_require__(/*! ../../../../assets/images/common/warn_icon.png */ "./src/assets/images/common/warn_icon.png"),
          },
        }),
        _vm._v(
          " 请确保二代身份证有效、并且头像文字清晰，四角对齐，无反光、无遮挡。 "
        ),
      ]),
      _c("view", { staticClass: "card_identity" }, [
        _vm.realname_rx
          ? _c("image", {
              attrs: { src: _vm.realname_rx },
              on: {
                tap: function ($event) {
                  return _vm.chooseImage(0)
                },
              },
            })
          : _c("image", {
              attrs: {
                src: __webpack_require__(/*! ../../../../assets/images/user/realname/card_tx.jpg */ "./src/assets/images/user/realname/card_tx.jpg"),
              },
              on: {
                tap: function ($event) {
                  return _vm.chooseImage(0)
                },
              },
            }),
      ]),
      _c("view", { staticClass: "card_identity" }, [
        _vm.realname_gh
          ? _c("image", {
              attrs: { src: _vm.realname_gh },
              on: {
                tap: function ($event) {
                  return _vm.chooseImage(1)
                },
              },
            })
          : _c("image", {
              attrs: {
                src: __webpack_require__(/*! ../../../../assets/images/user/realname/card_gh.jpg */ "./src/assets/images/user/realname/card_gh.jpg"),
              },
              on: {
                tap: function ($event) {
                  return _vm.chooseImage(1)
                },
              },
            }),
      ]),
      _c("view", [_vm._v(" 认证信息已加密 仅用于匹配认证信息 ")]),
      _c("view", [_vm._v("确认提交")]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/user/realname/card_gh.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/user/realname/card_gh.jpg ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/realname/card_gh.jpg";

/***/ }),

/***/ "./src/assets/images/user/realname/card_tx.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/user/realname/card_tx.jpg ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/realname/card_tx.jpg";

/***/ }),

/***/ "./src/assets/images/user/realname/sfz.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/user/realname/sfz.jpg ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user/realname/sfz.jpg";

/***/ }),

/***/ "./src/packageAdd/pages/user/realnameAuth/index.scss":
/*!***********************************************************!*\
  !*** ./src/packageAdd/pages/user/realnameAuth/index.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/realnameAuth/index.vue":
/*!**********************************************************!*\
  !*** ./src/packageAdd/pages/user/realnameAuth/index.vue ***!
  \**********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/realnameAuth/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/realnameAuth/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=template&id=280e1af2&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=template&id=280e1af2&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_280e1af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=280e1af2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/realnameAuth/index.vue?vue&type=template&id=280e1af2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_280e1af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_280e1af2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/realnameAuth/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map