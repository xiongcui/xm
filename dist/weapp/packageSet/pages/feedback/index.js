(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageSet/pages/feedback/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/feedback/index.vue":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/feedback/index.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_3a749cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3a749cc6&scoped=true& */ "./src/packageSet/pages/feedback/index.vue?vue&type=template&id=3a749cc6&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageSet/pages/feedback/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_3a749cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_3a749cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "3a749cc6",
  "9be09ee2"
  
)

component.options.__file = "src/packageSet/pages/feedback/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/feedback/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageSet/pages/feedback/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageSet/pages/feedback/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "feedback",
  data: function data() {
    return {
      checked: true,
      desc: "",
      imgList: [],
      advise: "功能建议",
      items: [{
        value: "问题反馈",
        name: "问题反馈"
      }, {
        value: "功能建议",
        name: "功能建议",
        checked: true
      }]
    };
  },
  methods: {
    radioChange: function radioChange(e) {
      this.advise = e.detail.value;
      var items = this.items;

      for (var i = 0, len = items.length; i < len; ++i) {
        items[i].checked = items[i].value === e.detail.value;
      }

      this.items = items;
    },
    previewImage: function previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src,
        // 图片的地址url
        urls: urls // 预览的地址url

      });
    },
    uploadImgClose: function uploadImgClose(index) {
      this.imgList.splice(index, 1);
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
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_3__[/* Base64 */ "a"].encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "feedback"
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
    submit: function submit() {
      var params = {
        advise: this.advise,
        // '问题反馈' 或  '功能建议'
        content: this.desc,
        evidence: this.imgList
      };
      this.feedback(params);
      console.log(params);
    },
    feedback: function feedback(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* feedback */ "t"])(params);

              case 3:
                res = _context.sent;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("反馈成功");
                wx.navigateBack({
                  delta: 1
                });
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/feedback/index.vue?vue&type=template&id=3a749cc6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageSet/pages/feedback/index.vue?vue&type=template&id=3a749cc6&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "feedback" },
    [
      _c("view", { staticClass: "feedback-type" }, [
        _c("text", { staticClass: "type" }, [_vm._v("反馈类型")]),
        _c(
          "view",
          { staticClass: "feedback-radio" },
          [
            _c(
              "radio-group",
              { on: { change: _vm.radioChange } },
              _vm._l(_vm.items, function (item) {
                return _c(
                  "label",
                  {
                    key: item.value,
                    staticClass: "weui-cell weui-check__label",
                  },
                  [
                    _c(
                      "label",
                      { staticClass: "radio" },
                      [
                        _c("radio", {
                          attrs: {
                            value: item.value,
                            checked: true,
                            color: "#ff1e3e",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" " + _vm._s(item.name) + " "),
                  ]
                )
              }),
              0
            ),
          ],
          1
        ),
      ]),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.desc,
            expression: "desc",
          },
        ],
        staticClass: "feedback-desc",
        attrs: {
          "auto-height": "",
          placeholder:
            "请描述您遇到的相关问题或功能建议，也可上传手机截图。不错的反馈将收到精美礼品，同时帮助页面中也会记下您的贡献",
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
      _vm._v(" "),
      _c(
        "view",
        { staticClass: "feedback-upload-list" },
        [
          _vm.imgList.length
            ? _c(
                "block",
                _vm._l(_vm.imgList, function (item, index) {
                  return _c(
                    "view",
                    { key: index, staticClass: "feedback-upload-img" },
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
              staticClass: "feedback-upload-img",
              on: { tap: _vm.chooseImage },
            },
            [
              _c("image", {
                staticClass: "upload-img",
                attrs: {
                  src: "https://yuepai-oss.qubeitech.com/static/images/upload-img.png",
                  mode: "aspectFit",
                },
              }),
              _c("view", [
                _c("text", { staticClass: "upload-txt" }, [_vm._v("上传图片")]),
              ]),
            ]
          ),
        ],
        1
      ),
      _c("cover-view", { staticClass: "subbtn_bottom" }, [
        _c("button", { on: { tap: _vm.submit } }, [_vm._v("提交")]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageSet/pages/feedback/index.scss":
/*!**************************************************!*\
  !*** ./src/packageSet/pages/feedback/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageSet/pages/feedback/index.vue":
/*!*************************************************!*\
  !*** ./src/packageSet/pages/feedback/index.vue ***!
  \*************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageSet/pages/feedback/index.vue");


var config = {"navigationBarTitleText":"意见反馈"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageSet/pages/feedback/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageSet/pages/feedback/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/packageSet/pages/feedback/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/feedback/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageSet/pages/feedback/index.vue?vue&type=template&id=3a749cc6&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/packageSet/pages/feedback/index.vue?vue&type=template&id=3a749cc6&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3a749cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3a749cc6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageSet/pages/feedback/index.vue?vue&type=template&id=3a749cc6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3a749cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3a749cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageSet/pages/feedback/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map