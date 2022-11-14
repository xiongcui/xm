(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/zuopin/add_zuopin/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/zuopin/add_zuopin/index.vue":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/zuopin/add_zuopin/index.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_163b122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=163b122c&scoped=true& */ "./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_163b122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_163b122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "163b122c",
  "13632838"
  
)

component.options.__file = "src/packageAdd/pages/zuopin/add_zuopin/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/zuopin/add_zuopin/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "addZuopin",
  data: function data() {
    return {
      name: "",
      desc: "",
      imgList: [],
      // 图片集合
      videolist: [],
      videoCoverList: []
    };
  },
  methods: {
    uploadImgClose: function uploadImgClose(index) {
      this.imgList.splice(index, 1);
    },
    uploadVideoClose: function uploadVideoClose(index) {
      this.videolist.splice(index, 1);
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
    chooseVideo: function chooseVideo() {
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
    upCover: function upCover(dataInfo) {
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
        filePath: dataInfo.thumbTempFilePath,
        formData: {
          scr_type: "invite"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            _this2.videoCoverList.push(data.data.file1);
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none"
            });
          }
        }
      });
    },
    upImgs: function upImgs(dataInfo) {
      var _this3 = this;

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
          scr_type: "invite"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            _this3.imgList.push(data.data.file1);
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none"
            });
          }
        }
      });
    },
    uploadVideo: function uploadVideo(dataInfo) {
      var _this4 = this;

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
          scr_type: "invite"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            // let videoData = res;
            // console.log("视频地址：", videoData);
            // console.log(
            //   "视频封面：",
            //   res,
            //   "?spm=qipa250&x-oss-process=video/snapshot,t_1000,f_jpg,w_800,h_400,m_fast"
            // );
            _this4.upCover(dataInfo);

            _this4.videolist.push(data.data.file1);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c&scoped=true& ***!
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
  return _c("view", { staticClass: "zuopin" }, [
    _c("view", { staticClass: "zuopin-item" }, [
      _c("view", { staticClass: "zuopin-upload" }, [
        _c(
          "view",
          { staticClass: "zuopin-upload-list" },
          [
            _vm.imgList.length
              ? _c(
                  "block",
                  _vm._l(_vm.imgList, function (item, index) {
                    return _c(
                      "view",
                      { key: index, staticClass: "zuopin-upload-img" },
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
              : _c(
                  "block",
                  _vm._l(_vm.videolist, function (item, index) {
                    return _c(
                      "view",
                      { key: index, staticClass: "upload-video-item" },
                      [
                        _c("video", {
                          staticClass: "upload-video-width",
                          attrs: {
                            src: item,
                            objectFit: "cover",
                            poster: _vm.videoCoverList[0],
                            id: "video",
                          },
                          on: { ended: _vm.bindended },
                        }),
                        _c("text", {
                          staticClass: "upload-close",
                          on: {
                            tap: function ($event) {
                              return _vm.uploadVideoClose(index)
                            },
                          },
                        }),
                      ]
                    )
                  }),
                  0
                ),
            !_vm.videolist.length
              ? _c(
                  "view",
                  {
                    staticClass: "zuopin-upload-img",
                    on: { tap: _vm.chooseImage },
                  },
                  [
                    _c("image", {
                      staticClass: "upload-img",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../assets/images/upload-img.png */ "./src/assets/images/upload-img.png"),
                        mode: "aspectFit",
                      },
                    }),
                    _c("view", [
                      _c("text", { staticClass: "upload-txt" }, [
                        _vm._v("上传照片"),
                      ]),
                    ]),
                  ]
                )
              : _vm._e(),
            !_vm.imgList.length && !_vm.videolist.length
              ? _c(
                  "view",
                  {
                    staticClass: "zuopin-upload-video",
                    on: { tap: _vm.chooseVideo },
                  },
                  [
                    _c("image", {
                      staticClass: "upload-video",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../assets/images/upload-video.png */ "./src/assets/images/upload-video.png"),
                        mode: "aspectFit",
                      },
                    }),
                    _c("view", [
                      _c("text", { staticClass: "upload-txt" }, [
                        _vm._v("上传视频"),
                      ]),
                    ]),
                  ]
                )
              : _vm._e(),
          ],
          1
        ),
      ]),
    ]),
    _c("view", { staticClass: "zuopin-item" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.name,
            expression: "name",
          },
        ],
        staticClass: "zuopin-name",
        attrs: { placeholder: "给作品起个名字有更多邀约哦～" },
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
    _c("view", { staticClass: "zuopin-item" }, [
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.desc,
            expression: "desc",
          },
        ],
        staticClass: "zuopin-name",
        attrs: {
          "auto-height": "",
          placeholder:
            "请分享作品背后的故事吧（内容中不得含有任何联系方式，敏感语句、私房话题等，否则审核不予通过，选填）",
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/zuopin/add_zuopin/index.scss":
/*!***********************************************************!*\
  !*** ./src/packageAdd/pages/zuopin/add_zuopin/index.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/zuopin/add_zuopin/index.vue":
/*!**********************************************************!*\
  !*** ./src/packageAdd/pages/zuopin/add_zuopin/index.vue ***!
  \**********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/zuopin/add_zuopin/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/zuopin/add_zuopin/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_163b122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=163b122c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_163b122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_163b122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/zuopin/add_zuopin/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map