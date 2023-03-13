(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/zuopin/add_zuopin/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/zuopin/add_zuopin/index.vue":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/zuopin/add_zuopin/index.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_163b122c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=163b122c& */ "./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_163b122c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_163b122c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
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
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/zuopin/add_zuopin/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isIphoneX: false,
      name: "",
      desc: "",
      localtion: "",
      imgList: [],
      // 图片集合
      videolist: [],
      videoCoverList: [],
      checked: true,
      place: "",
      styleTaglist: [],
      photoTaglist: [],
      locale_address: {}
    };
  },
  methods: {
    bindended: function bindended() {
      wx.createVideoContext("video").exitFullScreen();
    },
    chooseStyleTag: function chooseStyleTag(index) {
      this.styleTaglist[index].checked = !this.styleTaglist[index].checked;
    },
    choosePhotoTag: function choosePhotoTag(index) {
      this.photoTaglist[index].checked = !this.photoTaglist[index].checked;
    },
    switchChange: function switchChange(e) {
      this.checked = e.detail.value;
    },
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
    onChooseLocation: function onChooseLocation() {
      var _this2 = this;

      wx.chooseLocation({
        success: function success(res) {
          _this2.localtion = res.address;
          _this2.locale_address = res; //   console.log(res, "--------------", this.localtion);
        }
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
      var _this3 = this;

      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_6__[/* Base64 */ "a"].encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.thumbTempFilePath,
        formData: {
          scr_type: "photo"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            _this3.videoCoverList.push(data.data.file1);
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
      var _this4 = this;

      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_6__[/* Base64 */ "a"].encode(token + ":");
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
            _this4.imgList.push(data.data.file1);
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
      var _this5 = this;

      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_6__[/* Base64 */ "a"].encode(token + ":");
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
            _this5.upCover(dataInfo);

            _this5.videolist.push(data.data.file1);
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
      if (!this.imgList.length && !this.videolist.length) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请上传照片/视频！");
        return false;
      }

      if (!this.name) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请填写作品名称！");
        return false;
      }

      if (!this.desc) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请填写作品背后的故事！");
        return false;
      }

      var checkTag = this.styleTaglist.some(function (item) {
        return item.checked;
      });

      if (!checkTag) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择主题标签！");
        return false;
      }

      var checkTag2 = this.photoTaglist.some(function (item) {
        return item.checked;
      });

      if (!checkTag2) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择作品标签！");
        return false;
      }

      var params = {
        type: 30,
        title: this.name,
        content: this.desc,
        style_label: [],
        photo_label: [],
        capture_locale: this.localtion,
        return_photo: this.checked ? 1 : 0,
        capture_tools: this.place,
        scr_type: "photo",
        file_type: this.imgList.length ? "picture" : "video",
        cover: this.imgList.length ? this.imgList : this.videoCoverList,
        video_cover: this.videolist,
        locale_address: this.locale_address
      };
      var style_label = [];
      var photo_label = [];
      this.styleTaglist.map(function (item) {
        if (item.checked) {
          style_label.push(Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, item.key, item.value));
        }
      });
      this.photoTaglist.map(function (item) {
        if (item.checked) {
          photo_label.push(Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, item.key, item.value));
        }
      });
      params.style_label = style_label;
      params.photo_label = photo_label;
      this.subNotePhoto(params);
    },
    publicConfig: function publicConfig(params) {
      var _this6 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, arr, arr1;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_5__[/* publicConfig */ "V"])(params);

              case 3:
                res = _context.sent;
                arr = [];
                arr1 = [];
                res.data.data.map(function (item) {
                  if (item.type == "style_label") {
                    item.checked = false;
                    arr.push(item);
                  }

                  if (item.type == "photo_label") {
                    item.checked = false;
                    arr1.push(item);
                  }
                });
                _this6.styleTaglist = arr;
                _this6.photoTaglist = arr1;
                _context.next = 13;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    },
    subNotePhoto: function subNotePhoto(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_5__[/* subNotePhoto */ "gb"])(params);

              case 3:
                res = _context2.sent;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/tips/index?type=1");
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageAdd/pages/tips/index?type=0");

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    }
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.publicConfig({
      type: ["style_label", "photo_label"]
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "zuopin" },
    [
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
                          src: "https://yuepai-oss.qubeitech.com/static/images/upload-img.png",
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
                          src: "https://yuepai-oss.qubeitech.com/static/images/upload-video.png",
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
          staticClass: "zuopin-input",
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
      _c("view", { staticClass: "zuopin-item" }, [
        _c(
          "view",
          {
            staticClass: "zuopin-localtion",
            on: { tap: _vm.onChooseLocation },
          },
          [
            _c("view", { staticClass: "zuopin-item-left" }, [
              _c("image", {
                staticClass: "zuopin-icon",
                attrs: {
                  src: "https://yuepai-oss.qubeitech.com/static/images/position.png",
                },
              }),
              _vm.localtion
                ? _c("text", [_vm._v(" " + _vm._s(_vm.localtion))])
                : _c("text", [_vm._v(" 添加位置")]),
            ]),
            _c("view", { staticClass: "zuopin-item-right" }, [
              _c("image", {
                attrs: {
                  mode: "aspectFit",
                  src: "https://yuepai-oss.qubeitech.com/static/images/common/icon_right.png",
                },
              }),
            ]),
          ]
        ),
        _c("view", { staticClass: "zuopin-localtion" }, [
          _c("view", { staticClass: "zuopin-item-left" }, [
            _c("image", {
              staticClass: "zuopin-icon",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/time.png",
              },
            }),
            _c("text", [_vm._v("约拍返片")]),
          ]),
          _c("view", { staticClass: "zuopin-item-right" }, [
            _c("switch", {
              attrs: { checked: _vm.checked, color: "#fe5457" },
              on: { change: _vm.switchChange },
            }),
          ]),
        ]),
        _c("view", { staticClass: "zuopin-localtion" }, [
          _c("view", { staticClass: "zuopin-item-left" }, [
            _c("image", {
              staticClass: "zuopin-icon",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png",
              },
            }),
            _c("text", [_vm._v("拍摄设备")]),
          ]),
          _c("view", { staticClass: "zuopin-item-right" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.place,
                  expression: "place",
                },
              ],
              staticClass: "works-input",
              attrs: { placeholder: "请填写拍摄设备" },
              domProps: { value: _vm.place },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.place = $event.target.value
                },
              },
            }),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "zuopin-item" }, [
        _c("view", { staticClass: "zuopin-localtion" }, [
          _c("view", [_c("text", [_vm._v("主题标签")])]),
        ]),
        _c(
          "view",
          { staticClass: "tag-list" },
          _vm._l(_vm.styleTaglist, function (item, index) {
            return _c(
              "text",
              {
                key: index,
                staticClass: "tag-txt",
                class: item.checked ? "active" : "",
                on: {
                  tap: function ($event) {
                    return _vm.chooseStyleTag(index)
                  },
                },
              },
              [_vm._v(_vm._s(item.value))]
            )
          }),
          0
        ),
        _c("view", { staticClass: "zuopin-localtion" }, [
          _c("view", [_c("text", [_vm._v("作品标签")])]),
        ]),
        _c(
          "view",
          { staticClass: "tag-list" },
          _vm._l(_vm.photoTaglist, function (item, index) {
            return _c(
              "text",
              {
                key: index,
                staticClass: "tag-txt",
                class: item.checked ? "active" : "",
                on: {
                  tap: function ($event) {
                    return _vm.choosePhotoTag(index)
                  },
                },
              },
              [_vm._v(_vm._s(item.value))]
            )
          }),
          0
        ),
      ]),
      _c(
        "cover-view",
        {
          staticClass: "subbtn_bottom_block",
          class: _vm.isIphoneX ? "fix-iphonex-button" : "",
        },
        [
          _c("cover-view", { staticClass: "subbtn_bottom" }, [
            _c("button", { on: { tap: _vm.submit } }, [_vm._v("保存")]),
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


var config = {"navigationBarTitleText":"发布作品"};


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

/***/ "./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c&":
/*!*****************************************************************************************!*\
  !*** ./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_163b122c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=163b122c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/zuopin/add_zuopin/index.vue?vue&type=template&id=163b122c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_163b122c___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_163b122c___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/zuopin/add_zuopin/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map