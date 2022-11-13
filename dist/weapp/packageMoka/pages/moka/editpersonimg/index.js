(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/editpersonimg/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/editpersonimg/index.vue":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/editpersonimg/index.vue ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_7e5d7576_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7e5d7576&scoped=true& */ "./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=template&id=7e5d7576&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_7e5d7576_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_7e5d7576_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "7e5d7576",
  "41eadb13"
  
)

component.options.__file = "src/packageMoka/pages/moka/editpersonimg/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/editpersonimg/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editpersonimg",
  data: function data() {
    return {
      imgs: [],
      uploadImgList: []
    };
  },
  methods: {
    choosePersonImg: function choosePersonImg() {
      if (this.imgs.length >= 9) {
        wx.showToast({
          title: "最多上传9张图！",
          icon: "none"
        });
        return false;
      }

      wx.chooseMedia({
        count: 9 - this.imgs.length,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success: function success(res) {
          var arr = res.tempFiles.map(function (item) {
            return item.tempFilePath;
          });
          wx.setStorageSync("imgList", arr);
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "b"])("/pages/we-cropper/index?type=imgList");
        }
      });
    },
    delete_preview: function delete_preview(index) {
      var _this = this;

      wx.showActionSheet({
        itemList: ["设为封面", "替换", "删除"],
        success: function success(res) {
          switch (res.tapIndex) {
            case 0:
              var first = _this.imgs[index];

              _this.imgs.splice(index, 1);

              _this.imgs.unshift(first);

              break;

            case 1:
              wx.chooseMedia({
                count: 1,
                mediaType: ["image"],
                sourceType: ["album", "camera"],
                maxDuration: 30,
                camera: "back",
                success: function success(res) {
                  var arr = res.tempFiles.map(function (item) {
                    return item.tempFilePath;
                  });
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* openPage */ "b"])("/pages/we-cropper/index?type=imgId&imgId=" + index + "&imgSrc=" + arr[0]);
                }
              });
              break;

            case 2:
              _this.imgs.splice(index, 1);

              break;
          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    submit: function submit() {
      var _this2 = this;

      if (this.imgs.length < 3) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__[/* errortip */ "a"])("形象照不能少于3张哦");
        return;
      }

      var arr = [];
      this.imgs.map(function (item, index) {
        if (item.indexOf("http:") != -1) {
          arr[index] = _this2.uploadImagePhoto(item, {
            scr_type: "album"
          }, index);
        }
      });
      Promise.all(arr).then(function () {
        _this2.userAlbum({
          scr_type: "album",
          file_type: "photo",
          photo_album: _this2.imgs,
          video_album: []
        });
      }).catch(function () {
        wx.showToast({
          title: "有图片上传失败！",
          icon: "none"
        });
        _this2.imgs = _this2.uploadImgList;
      });
    },
    userAlbum: function userAlbum(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userAlbum */ "l"])(params);

              case 3:
                res = _context.sent;
                _this3.uploadImgList = [];
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
    },
    uploadImagePhoto: function uploadImagePhoto(path, params, index) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* uploadImagePhoto */ "k"])(path, params);

              case 3:
                res = _context2.sent;
                _this4.imgs[index] = res.data.file1;
                _context2.next = 9;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    userAlbumDetail: function userAlbumDetail(params) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userAlbumDetail */ "m"])(params);

              case 3:
                res = _context3.sent;
                _this5.imgs = res.data.data.photo_album;
                _context3.next = 9;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    }
  },
  created: function created() {
    this.userAlbumDetail();
  },
  onShow: function onShow() {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面

    if (currPage.data.updateimg) {
      this.imgs = this.imgs.concat(this.globalData.imgList);
      this.globalData.imgList = [];
    }

    if (currPage.data.imgId) {
      this.imgs[Number(currPage.data.imgId)] = currPage.data.homeimg;
      this.imgs = JSON.parse(JSON.stringify(this.imgs));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=template&id=7e5d7576&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=template&id=7e5d7576&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "editpersonimg" }, [
    _c("view", { staticClass: "personimgs ub" }, [
      _c("view", { staticClass: "side_gap" }),
      _c("view", { staticClass: "ub-f1" }, [
        _c("view", { staticClass: "imgsblock" }, [
          _c(
            "view",
            { staticClass: "imgs" },
            [
              _vm._l(_vm.imgs, function (item, index) {
                return _c("view", { key: item, staticClass: "preview_img" }, [
                  _c("image", {
                    attrs: {
                      id: index,
                      markImgindex: index,
                      mode: "widthFix",
                      src: item,
                    },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: "preview_delet",
                      attrs: { id: index },
                      on: {
                        tap: function ($event) {
                          return _vm.delete_preview(index)
                        },
                      },
                    },
                    [_vm._v("编辑")]
                  ),
                  index == 0
                    ? _c("view", { staticClass: "icon_coverimg" }, [
                        _vm._v(" 封面 "),
                      ])
                    : _vm._e(),
                ])
              }),
              _vm.imgs.length < 9
                ? _c(
                    "view",
                    {
                      staticClass: "pick_img",
                      on: { tap: _vm.choosePersonImg },
                    },
                    [
                      _c("view", { staticClass: "pick_img_btn" }, [
                        _c("image", {
                          attrs: {
                            src: __webpack_require__(/*! ../../../../assets/images/common/add_icon.png */ "./src/assets/images/common/add_icon.png"),
                          },
                        }),
                      ]),
                      _c("view", { staticClass: "upload-text" }, [
                        _c("view", [_vm._v("添加形象照")]),
                      ]),
                    ]
                  )
                : _vm._e(),
            ],
            2
          ),
        ]),
        _c("view", { staticStyle: { clear: "both" } }),
      ]),
      _c("view", { staticClass: "side_gap_right" }),
    ]),
    _c("view", { staticClass: "sub_btn" }, [
      _c("button", { attrs: { type: "primary" }, on: { tap: _vm.submit } }, [
        _vm._v("保存"),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMoka/pages/moka/editpersonimg/index.scss":
/*!*************************************************************!*\
  !*** ./src/packageMoka/pages/moka/editpersonimg/index.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/editpersonimg/index.vue":
/*!************************************************************!*\
  !*** ./src/packageMoka/pages/moka/editpersonimg/index.vue ***!
  \************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/editpersonimg/index.vue");


var config = {"navigationBarTitleText":"照片相册","usingComponents":{}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/editpersonimg/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=template&id=7e5d7576&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=template&id=7e5d7576&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e5d7576_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7e5d7576&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editpersonimg/index.vue?vue&type=template&id=7e5d7576&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e5d7576_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e5d7576_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/editpersonimg/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map