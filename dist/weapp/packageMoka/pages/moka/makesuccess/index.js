(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/makesuccess/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/makesuccess/index.vue":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/makesuccess/index.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_12503a56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=12503a56&scoped=true& */ "./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=template&id=12503a56&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_12503a56_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_12503a56_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "12503a56",
  "30d0eba4"
  
)

component.options.__file = "src/packageMoka/pages/moka/makesuccess/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/makesuccess/index.scss");
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


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "makesuccess",
  data: function data() {
    return {
      showloadingmore: false,
      pageloading: true,
      loadingmore: true,
      isloading: false,
      isposting: false,
      pageshow: "",
      imageSrc: "",
      openSet: false,
      isVertical: false,
      has_qrcode: 1,
      issave: false,
      goIndex: false,
      uploadData: {}
    };
  },
  methods: {
    previewImage: function previewImage() {},
    handleSetting: function handleSetting(e) {
      if (e.detail.authSetting["scope.writePhotosAlbum"]) {
        this.openSet = false;
        this.savaImageToPhoto();
      } else {
        wx.showModal({
          title: "警告",
          content: "若不打开授权，则无法将图片保存在相册中！",
          showCancel: false
        });
      }
    },
    myMoka: function myMoka() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "d"])("/packageMoka/pages/moka/myModelCardlist/index");
    },
    save: function save() {
      var _this = this;

      wx.getSetting({
        success: function success(t) {
          t.authSetting["scope.writePhotosAlbum"] ? _this.savaImageToPhoto() : wx.authorize({
            scope: "scope.writePhotosAlbum",
            success: function success() {
              _this.savaImageToPhoto();
            },
            fail: function fail() {
              _this.openSet = true;
            }
          });
        }
      });
    },
    close: function close() {
      this.openSet = false;
    },
    savaImageToPhoto: function savaImageToPhoto() {
      wx.showLoading({
        title: "保存中..."
      });
      wx.downloadFile({
        url: this.imageSrc,
        success: function success(res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function success(res) {
              wx.hideLoading();
              wx.showToast({
                title: "已保存至相册",
                icon: "success",
                duration: 3000
              });
            },
            faile: function faile(err) {
              console.log("失败！");
            }
          });
        }
      });
    }
  },
  onLoad: function onLoad(options) {
    this.imageSrc = wx.getStorageSync("successImgSrc");
    this.isVertical = options.isVertical;
    this.has_qrcode = options.has_qrcode;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=template&id=12503a56&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=template&id=12503a56&scoped=true& ***!
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
  return _c("view", { staticClass: "makesuccess" }, [
    _c("view", { staticClass: "main" }, [
      _c("view", { staticClass: "hint" }, [
        _c("image", {
          attrs: {
            src: "https://yuepai-oss.qubeitech.com/static/images/moka/makecard/success.png",
          },
        }),
        _c("text", { staticClass: "hint-text" }, [_vm._v("制作完成！")]),
      ]),
      _c("image", {
        staticClass: "card",
        style: { width: _vm.isVertical ? 380 + "rpx" : 650 + "rpx" },
        attrs: { mode: "widthFix", src: _vm.imageSrc },
        on: { tap: _vm.previewImage },
      }),
      _c("view", { staticClass: "save", on: { tap: _vm.save } }, [
        _vm._v("保存手机相册"),
      ]),
      _c("view", { staticClass: "mymoka", on: { tap: _vm.myMoka } }, [
        _vm._v("查看我的模卡"),
      ]),
    ]),
    _vm.openSet
      ? _c("view", { staticClass: "modal_box_bg", on: { tap: _vm.close } }, [
          _c("view", { staticClass: "tip_set" }, [
            _c("view", { staticClass: "tip_set_tittle" }, [
              _vm._v(" 温馨提示 "),
            ]),
            _c("view", { staticClass: "tip_set_content" }, [
              _vm._v(" 保存到相册已关闭授权，请先授权 "),
            ]),
            _c(
              "button",
              {
                staticClass: "openSetting",
                attrs: { openType: "openSetting", type: "primary" },
                on: { opensetting: _vm.handleSetting },
              },
              [_vm._v(" 去授权 ")]
            ),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMoka/pages/moka/makesuccess/index.scss":
/*!***********************************************************!*\
  !*** ./src/packageMoka/pages/moka/makesuccess/index.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/makesuccess/index.vue":
/*!**********************************************************!*\
  !*** ./src/packageMoka/pages/moka/makesuccess/index.vue ***!
  \**********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/makesuccess/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/makesuccess/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=template&id=12503a56&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=template&id=12503a56&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_12503a56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=12503a56&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/makesuccess/index.vue?vue&type=template&id=12503a56&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_12503a56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_12503a56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/makesuccess/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map