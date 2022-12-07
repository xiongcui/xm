(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/editvideo/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/editvideo/index.vue":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/editvideo/index.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_8459d99c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8459d99c&scoped=true& */ "./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=template&id=8459d99c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_8459d99c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_8459d99c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "8459d99c",
  "77cbc000"
  
)

component.options.__file = "src/packageMoka/pages/moka/editvideo/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/editvideo/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editvideo",
  data: function data() {
    return {
      videoData: [// {
        //   cover: "",
        //   file: "",
        // },
      ]
    };
  },
  methods: {
    deleteVideo: function deleteVideo(index) {
      this.videoData.splice(index, 1);
    },
    setVideoCover: function setVideoCover(index) {
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
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "b"])("/pages/we-cropper/index?type=videoId&videoId=" + index + "&imgSrc=" + arr[0]);
        }
      });
    },
    changeVideo: function changeVideo(index) {
      var _this = this;

      wx.chooseMedia({
        count: 1,
        mediaType: ["video"],
        sourceType: ["album", "camera"],
        maxDuration: 58,
        camera: "back",
        success: function success(res) {
          var arr = res.tempFiles;
          var videoInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            videoInfo = v;
          });
          console.log(videoInfo, "videoInfo"); //获取临时存放的视频资源
          // let tempFilePath = res.tempFiles[0].tempFilePath;
          //获取该视频的播放时间

          var duration = res.tempFiles[0].duration;
          console.log("视频播放时间为" + duration); //获取视频的大小(MB单位)

          var size = parseFloat(res.tempFiles[0].size / 1024 / 1024).toFixed(1);
          console.log("视频大小为" + size); //获取视频的高度

          var height = res.tempFiles[0].height;
          console.log("视频高度为" + height); //获取视频的宽度

          var width = res.tempFiles[0].width;
          console.log("视频宽度为" + width); //校验大小后，符合进行上传

          if (size > 20) {
            var beyongSize = size - 20; //获取视频超出限制大小的数量

            wx.showToast({
              title: "上传的视频大小超限,超出" + beyongSize + "MB,请重新上传！",
              icon: "none"
            });
            return;
          } else {
            //符合大小限制，进行上传
            _this.uploadVideo(videoInfo, index);
          }
        }
      });
    },
    chooesVideo: function chooesVideo() {
      var _this = this;

      wx.chooseMedia({
        count: 1,
        mediaType: ["video"],
        sourceType: ["album", "camera"],
        maxDuration: 58,
        camera: "back",
        success: function success(res) {
          var arr = res.tempFiles;
          var videoInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            videoInfo = v;
          });
          console.log(videoInfo, "videoInfo"); //获取临时存放的视频资源
          // let tempFilePath = res.tempFiles[0].tempFilePath;
          //获取该视频的播放时间

          var duration = res.tempFiles[0].duration;
          console.log("视频播放时间为" + duration); //获取视频的大小(MB单位)

          var size = parseFloat(res.tempFiles[0].size / 1024 / 1024).toFixed(1);
          console.log("视频大小为" + size); //获取视频的高度

          var height = res.tempFiles[0].height;
          console.log("视频高度为" + height); //获取视频的宽度

          var width = res.tempFiles[0].width;
          console.log("视频宽度为" + width); //校验大小后，符合进行上传

          if (size > 20) {
            var beyongSize = size - 20; //获取视频超出限制大小的数量

            wx.showToast({
              title: "上传的视频大小超限,超出" + beyongSize + "MB,请重新上传！",
              icon: "none"
            });
            return;
          } else {
            //符合大小限制，进行上传
            _this.uploadVideo(videoInfo);
          }
        }
      });
    },
    uploadVideo: function uploadVideo(dataInfo, index) {
      var _this2 = this;

      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_3__[/* Base64 */ "a"].encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://tapi.cupz.cn/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "album"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            if (index != undefined) {
              console.log("更换");
              var oldVideoData = [];
              _this2.videoData[index] = {
                cover: "",
                file: data.data.file1
              };
              oldVideoData = _this2.videoData;
              _this2.videoData = [];
              _this2.videoData = JSON.parse(JSON.stringify(oldVideoData));
            } else {
              _this2.videoData.push({
                cover: "",
                file: data.data.file1
              });
            }
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none"
            });
          }
        }
      });
    },
    upCover: function upCover(path, index) {
      var _this3 = this;

      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_3__[/* Base64 */ "a"].encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://tapi.cupz.cn/v1/file/upload",
        filePath: path,
        formData: {
          scr_type: "album"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            _this3.videoData[index].cover = data.data.file1;
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
      this.userAlbum({
        scr_type: "album",
        file_type: "video",
        photo_album: [],
        video_album: this.videoData
      });
    },
    userAlbum: function userAlbum(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_5__[/* userAlbum */ "C"])(params);

              case 3:
                res = _context.sent;
                _this4.videoData = [];
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
    userAlbumDetail: function userAlbumDetail(params) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_5__[/* userAlbumDetail */ "D"])(params);

              case 3:
                res = _context2.sent;
                _this5.videoData = res.data.data.video_album;
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
    }
  },
  created: function created() {
    this.userAlbumDetail("");
  },
  onShow: function onShow() {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面

    if (currPage.data.videoId) {
      this.upCover(currPage.data.homeimg, Number(currPage.data.videoId));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=template&id=8459d99c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=template&id=8459d99c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "editvideomain" }, [
    _c(
      "view",
      { staticClass: "editvideo" },
      [
        _vm.videoData.length
          ? _c(
              "block",
              _vm._l(_vm.videoData, function (item, index) {
                return _c("view", { key: index }, [
                  _c("video", {
                    key: item.file,
                    staticClass: "video_item",
                    attrs: {
                      objectFit: "cover",
                      poster: item.cover,
                      src: item.file,
                    },
                  }),
                  _c("view", { staticClass: "item_bottom ub" }, [
                    _c("view", { staticClass: "setVideoLeft" }, [
                      _c(
                        "view",
                        {
                          staticClass: "btn_set btn_delete",
                          on: {
                            tap: function ($event) {
                              return _vm.deleteVideo(index)
                            },
                          },
                        },
                        [_vm._v("删除")]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: "btn_set",
                          on: {
                            tap: function ($event) {
                              return _vm.changeVideo(index)
                            },
                          },
                        },
                        [_vm._v("更换")]
                      ),
                    ]),
                    _c(
                      "view",
                      {
                        staticClass: "btn_set",
                        on: {
                          tap: function ($event) {
                            return _vm.setVideoCover(index)
                          },
                        },
                      },
                      [_vm._v("设置视频封面")]
                    ),
                  ]),
                ])
              }),
              0
            )
          : _vm._e(),
        _vm.videoData.length < 6
          ? _c(
              "view",
              { staticClass: "video_none", on: { tap: _vm.chooesVideo } },
              [
                _c("image", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../../assets/images/common/add_icon.png */ "./src/assets/images/common/add_icon.png"),
                  },
                }),
                _c("view", [_vm._v("添加形象视频")]),
              ]
            )
          : _vm._e(),
      ],
      1
    ),
    _vm.videoData.length
      ? _c("view", { staticClass: "sub_btn", attrs: { catchtap: "sub" } }, [
          _c(
            "button",
            { attrs: { type: "primary" }, on: { tap: _vm.submit } },
            [_vm._v("保存")]
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageMoka/pages/moka/editvideo/index.scss":
/*!*********************************************************!*\
  !*** ./src/packageMoka/pages/moka/editvideo/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/editvideo/index.vue":
/*!********************************************************!*\
  !*** ./src/packageMoka/pages/moka/editvideo/index.vue ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/editvideo/index.vue");


var config = {"navigationBarTitleText":"视频相册","usingComponents":{}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/editvideo/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=template&id=8459d99c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=template&id=8459d99c&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8459d99c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=8459d99c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/editvideo/index.vue?vue&type=template&id=8459d99c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8459d99c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8459d99c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/editvideo/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map