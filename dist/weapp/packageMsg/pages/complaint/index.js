(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMsg/pages/complaint/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/complaint/index.vue":
/*!************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/complaint/index.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_21ec3a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=21ec3a70&scoped=true& */ "./src/packageMsg/pages/complaint/index.vue?vue&type=template&id=21ec3a70&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMsg/pages/complaint/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_21ec3a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_21ec3a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "21ec3a70",
  "08ffc216"
  
)

component.options.__file = "src/packageMsg/pages/complaint/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/complaint/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/complaint/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageMsg/pages/complaint/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "complaint",
  data: function data() {
    return {
      isIphoneX: false,
      complaintInfo: {
        author: {}
      },
      reason: "",
      imgList: [],
      reasonData: [{
        name: 11,
        ispick: false
      }, {
        name: 22,
        ispick: false
      }, {
        name: 44,
        ispick: false
      }]
    };
  },
  methods: {
    select_tag: function select_tag(row) {
      this.reasonData.map(function (item) {
        item.ispick = false;
      });
      row.ispick = true;
    },
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
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://tapi.cupz.cn/v1/file/upload",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/complaint/index.vue?vue&type=template&id=21ec3a70&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/complaint/index.vue?vue&type=template&id=21ec3a70&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "complaint" },
    [
      _c("view", { staticClass: "complaint-title" }, [_vm._v("投诉用户")]),
      _c("view", { staticClass: "complaint_top" }, [
        _c("view", { staticClass: "complaint_top_left" }, [
          _c("image", { staticClass: "avatar", attrs: { src: "a" } }),
          _c("view", { staticClass: "complaint_info" }, [
            _c(
              "view",
              { staticClass: "complaint_name" },
              [
                _vm._v(" nickname "),
                _vm.complaintInfo.author.sex !== null
                  ? _c("block", [
                      _vm.complaintInfo.author.sex == 1
                        ? _c("image", {
                            staticClass: "complaint_sex",
                            attrs: {
                              src: __webpack_require__(/*! ../../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                            },
                          })
                        : _vm._e(),
                      _vm.complaintInfo.author.sex == 0
                        ? _c("image", {
                            staticClass: "complaint_sex",
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
            _c("view", { staticClass: "complaint_p" }, [
              _c("text", [_vm._v(" 模特 ")]),
            ]),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "complaint_reason" }, [
        _c("view", { staticClass: "complaint-title" }, [
          _vm._v("请选择投诉原因"),
        ]),
        _c(
          "view",
          { staticClass: "complaint-tag-box" },
          _vm._l(_vm.reasonData, function (item, index) {
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
              [_vm._v(" " + _vm._s(item.name) + " ")]
            )
          }),
          0
        ),
        _c("view", { staticClass: "complaint_input" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.reason,
                expression: "reason",
              },
            ],
            staticClass: "intro_content",
            attrs: {
              autoHeight: true,
              maxlength: "500",
              name: "intro",
              placeholder: "请输入您的投诉内容",
              placeholderClass: "intro_content_none",
            },
            domProps: { value: _vm.reason },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.reason = $event.target.value
              },
            },
          }),
        ]),
        _c("view", { staticClass: "complaint_evidence" }, [
          _c("view", { staticClass: "complaint-title" }, [_vm._v("证据截图")]),
          _c(
            "view",
            { staticClass: "complaint-upload-list" },
            [
              _vm._l(_vm.imgList, function (item, index) {
                return _c(
                  "view",
                  { key: index, staticClass: "complaint-upload-img" },
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
              _c(
                "view",
                {
                  staticClass: "complaint-upload-img",
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
            2
          ),
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
            _c("button", { on: { tap: _vm.submit } }, [_vm._v("提交")]),
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

/***/ "./src/packageMsg/pages/complaint/index.scss":
/*!***************************************************!*\
  !*** ./src/packageMsg/pages/complaint/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMsg/pages/complaint/index.vue":
/*!**************************************************!*\
  !*** ./src/packageMsg/pages/complaint/index.vue ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/complaint/index.vue");


var config = {"navigationBarTitleText":"我要投诉"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMsg/pages/complaint/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMsg/pages/complaint/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/packageMsg/pages/complaint/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/complaint/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMsg/pages/complaint/index.vue?vue&type=template&id=21ec3a70&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/packageMsg/pages/complaint/index.vue?vue&type=template&id=21ec3a70&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21ec3a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=21ec3a70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/complaint/index.vue?vue&type=template&id=21ec3a70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21ec3a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21ec3a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMsg/pages/complaint/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map