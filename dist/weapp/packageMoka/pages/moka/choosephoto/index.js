(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/choosephoto/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/choosephoto/index.vue":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/choosephoto/index.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_988f2208_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=988f2208&scoped=true& */ "./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=template&id=988f2208&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_988f2208_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_988f2208_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "988f2208",
  "5b8dbf6c"
  
)

component.options.__file = "src/packageMoka/pages/moka/choosephoto/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/choosephoto/index.scss");
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



var moka = __webpack_require__(/*! ../../../../assets/js/moka.js */ "./src/assets/js/moka.js");

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "choosephoto",
  data: function data() {
    return {
      photos: [],
      maxCount: 10,
      buttonTitle: "上传照片"
    };
  },
  methods: {
    setButtonTitle: function setButtonTitle() {
      var t = this.photos.length,
          o = "";
      o = t >= this.maxCount ? "开始制作" : 0 == t ? "添加照片" : "继续添加";
      this.buttonTitle = o;
    },
    choosePhoto: function choosePhoto() {
      this.photos;
      var o = this.photos.length,
          e = this.maxCount;
      if (o >= e) return wx.setStorageSync("selectedPhotos", this.photos), void Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "c"])("/packageMoka/pages/moka/chooseisself/index");
      var s = this;
      wx.chooseImage({
        count: e - o,
        sizeType: ["compressed"],
        sourceType: ["album"],
        success: function success(o) {
          var e = o.tempFilePaths;
          s.photos = [].concat(s.photos, e), s.photos = s.photos, s.setButtonTitle();
        }
      });
    },
    deletePhoto: function deletePhoto(t) {
      var o = parseInt(t.currentTarget.id);
      this.photos.splice(o, 1);
      this.setButtonTitle();
    }
  },
  onLoad: function onLoad(options) {
    var cardid = wx.getStorageSync("cardid");
    var mokaIndex = moka.getIndexByCardId(cardid);
    var layouts = moka.layouts[mokaIndex];
    console.log(layouts, "layouts");
    photos = wx.getStorageSync("selectedPhotos");
    this.maxCount = layouts.maxCount;
    this.photos = photos;
    this.setButtonTitle();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=template&id=988f2208&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=template&id=988f2208&scoped=true& ***!
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
  return _c("view", { staticClass: "choosephoto" }, [
    _c(
      "view",
      { staticClass: "photos-container ub" },
      _vm._l(_vm.photos, function (item, index) {
        return _c("view", { key: index, staticClass: "photo-container" }, [
          _c("image", {
            staticClass: "photo",
            attrs: { mode: "aspectFill", src: item },
          }),
          _c("image", {
            staticClass: "delete-button",
            attrs: {
              id: index,
              src: "https://yuepai-oss.qubeitech.com/static/images/moka/makecard/delete.png",
            },
            on: { tap: _vm.deletePhoto },
          }),
        ])
      }),
      0
    ),
    _c("view", { staticClass: "choose-number" }, [
      _vm._v(_vm._s(_vm.photos.length) + "/" + _vm._s(_vm.maxCount)),
    ]),
    _vm.maxCount - _vm.photos.length > 0
      ? _c("text", { staticClass: "choose-hint" }, [
          _vm._v(
            "模版为" +
              _vm._s(_vm.maxCount) +
              "张照片，还差" +
              _vm._s(_vm.maxCount - _vm.photos.length) +
              "张，请继续添加"
          ),
        ])
      : _vm._e(),
    _c("view", { staticClass: "choose-button", on: { tap: _vm.choosePhoto } }, [
      _vm._v(_vm._s(_vm.buttonTitle)),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMoka/pages/moka/choosephoto/index.scss":
/*!***********************************************************!*\
  !*** ./src/packageMoka/pages/moka/choosephoto/index.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/choosephoto/index.vue":
/*!**********************************************************!*\
  !*** ./src/packageMoka/pages/moka/choosephoto/index.vue ***!
  \**********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/choosephoto/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/choosephoto/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=template&id=988f2208&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=template&id=988f2208&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_988f2208_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=988f2208&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/choosephoto/index.vue?vue&type=template&id=988f2208&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_988f2208_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_988f2208_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/choosephoto/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map