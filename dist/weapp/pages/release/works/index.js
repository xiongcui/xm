(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/release/works/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/works/index.vue":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/works/index.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2ebf7eae& */ "./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/release/works/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "7b48dd1b"
  
)

component.options.__file = "src/pages/release/works/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/release/works/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/release/works/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/pages/release/works/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "works",
  data: function data() {
    return {
      name: "",
      device: "",
      place: "",
      imgList: [],
      // 图片集合
      baseImg: [],
      // base64图片集合
      maxImg: 9,
      // 图片上传最高数量（根据需求设置）
      // imgList: [
      //   // {
      //   //   imgurl: "",
      //   // },
      // ],
      videolist: [],
      taglist: [{
        name: "情侣",
        checked: false
      }, {
        name: "商务",
        checked: false
      }, {
        name: "民国",
        checked: false
      }, {
        name: "汉服",
        checked: false
      }, {
        name: "孕照",
        checked: false
      }, {
        name: "儿童摄影",
        checked: false
      }, {
        name: "暗黑",
        checked: false
      }, {
        name: "情绪",
        checked: false
      }, {
        name: "夜景",
        checked: false
      }, {
        name: "校园",
        checked: false
      }, {
        name: "妆容",
        checked: false
      }, {
        name: "古风",
        checked: false
      }, {
        name: "淘宝",
        checked: false
      }, {
        name: "时尚",
        checked: false
      }, {
        name: "和服",
        checked: false
      }, {
        name: "旗袍",
        checked: false
      }, {
        name: "韩系",
        checked: false
      }, {
        name: "欧美",
        checked: false
      }, {
        name: "森系",
        checked: false
      }, {
        name: "少女",
        checked: false
      }, {
        name: "宝丽来",
        checked: false
      }, {
        name: "清新",
        checked: false
      }, {
        name: "婚礼",
        checked: false
      }, {
        name: "cosplay",
        checked: false
      }, {
        name: "胶片",
        checked: false
      }, {
        name: "黑白",
        checked: false
      }, {
        name: "纪实",
        checked: false
      }, {
        name: "日系",
        checked: false
      }, {
        name: "复古",
        checked: false
      }],
      switchChecked: false
    };
  },
  methods: {
    // 选择图片
    selectPictures: function selectPictures() {
      var that = this; // 最多上传图片数量

      if (that.imgList.length < that.maxImg) {
        wx.chooseImage({
          // 最多可以选择的图片张数（最大数量-当前已上传数量）
          count: that.maxImg - that.imgList.length,
          sizeType: "compressed",
          success: function success(res) {
            console.log(res, "res");

            for (var i = 0; i < res.tempFilePaths.length; i++) {
              that.imgList.push(res.tempFilePaths[i]);
            }
          }
        });
      } else {
        wx.showToast({
          title: "最多上传" + that.maxImg + "张照片！"
        });
      }
    },
    // 图片转base64
    conversionAddress: function conversionAddress() {
      var that = this; // 判断是否有图片

      if (that.imgList.length !== 0) {
        for (var i = 0; i < that.imgList.length; i++) {
          // 转base64
          wx.getFileSystemManager().readFile({
            filePath: that.imgList[i],
            encoding: "base64",
            success: function success(res) {
              console.log(res);
              that.baseImg.push(res.data); //转换完毕，执行上传

              if (that.imgList.length == that.baseImg.length) {
                that.upCont({
                  uuid: "123456",
                  type: "avatar",
                  file: that.baseImg
                });
              }
            }
          });
        }
      } else {
        wx.showToast({
          title: "请先选择图片！"
        });
      }
    },
    selectVideo: function selectVideo() {
      var _this2 = this;

      var _this = this;

      wx.chooseMedia({
        count: 1,
        mediaType: ["video"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success: function success(res) {
          console.log(res, "res");
          var arr = res.tempFiles;
          var videoInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            videoInfo = v;
          });

          _this2.videolist.push(videoInfo);

          console.log(videoInfo);

          for (var i = 0; i < _this2.videolist.length; i++) {
            // 转base64
            wx.getFileSystemManager().readFile({
              filePath: _this2.videolist[i],
              // encoding: "base64",
              success: function success(res) {
                console.log(res, "res"); // this.baseImg.push("data:image/png;base64," + res.data);
                //转换完毕，执行上传
              }
            });
          } // _this.upImgs(videoInfo, "video");

        }
      });
    },
    upCont: function upCont(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* uploadFile */ "b"])(params);

              case 3:
                res = _context.sent;
                console.log("成功！", res);
                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    chooseImage: function chooseImage() {
      var _this = this;

      wx.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success: function success(res) {
          var arr = res.tempFiles;
          var imgInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            imgInfo = v;
          });

          _this.imgList.push({
            imgurl: imgInfo.tempFilePath
          });

          console.log(2222);

          _this.upImgs(imgInfo, "image");
        }
      });
    },
    chooseVideo: function chooseVideo() {
      var _this3 = this;

      var _this = this;

      wx.chooseMedia({
        count: 1,
        mediaType: ["video"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success: function success(res) {
          console.log(res, "res");
          var arr = res.tempFiles;
          var videoInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            videoInfo = v;
          });

          _this3.videolist.push(videoInfo);

          console.log(videoInfo);

          _this.upImgs(videoInfo, "video");
        }
      });
    },
    upImgs: function upImgs(dataInfo, type) {
      console.log(dataInfo, "dataInfo");

      var _this = this;

      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://tapi.cupz.cn/v1/file/upload",
        filePath: type == "video" ? dataInfo.tempFilePath : dataInfo.tempFilePath,
        formData: {
          // method: "POST",
          uuid: "123456",
          type: "avatar"
        },
        name: "file",
        header: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + wx.getStorageSync("token")
        },
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          if (type == "video") {
            // _this.setData({
            console.log("视频地址：" + res);
            console.log("视频封面：" + res + "?spm=qipa250&x-oss-process=video/snapshot,t_1000,f_jpg,w_800,h_400,m_fast"); // ))
          } else {
            console.log("图片地址：" + res);
          }
        }
      });
    },
    switchChange: function switchChange(e) {
      this.switchChecked = e.detail.value;
    },
    chooseTag: function chooseTag(index) {
      this.taglist[index].checked = !this.taglist[index].checked;
    },
    nameBlur: function nameBlur(e) {
      this.name = e.detail.value;
    },
    submit: function submit() {
      // if (!this.name) {
      //   errortip("请输入作品名称/描述！");
      //   return false;
      // }
      // if (!this.imgList.length && !this.videolist.length) {
      //   errortip("请上传作品！");
      //   return false;
      // }
      // let checkTag = this.taglist.some((item) => item.checked);
      // if (!checkTag) {
      //   errortip("请选择主题标签！");
      //   return false;
      // }
      this.conversionAddress();
      var params = {
        name: this.name
      };
      console.log(params, "params");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "works" }, [
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" 作品名称/描述 "),
        _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
      ]),
      _c("textarea", {
        staticClass: "works-name",
        attrs: {
          "auto-height": "",
          placeholder:
            "请输入作品名称/描述…（不能包含任何联系方式，照片中不能有漏点图片，否则审核不通过，5个字以上）",
          value: _vm.name,
        },
        on: { blur: _vm.nameBlur },
      }),
    ]),
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" 上传作品 "),
        _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
        _c("text", { staticClass: "works-tips" }, [
          _vm._v("必须本人拍摄/本人照片"),
        ]),
      ]),
      _c("view", { staticClass: "works-upload" }, [
        _c(
          "view",
          { staticClass: "works-upload-list" },
          _vm._l(_vm.imgList, function (item, index) {
            return _c("view", { key: index, staticClass: "works-upload-img" }, [
              _c("image", {
                staticClass: "upload-width",
                attrs: { src: item, mode: "aspectFit" },
              }),
            ])
          }),
          0
        ),
        _c(
          "view",
          { staticClass: "works-upload-list" },
          _vm._l(_vm.videolist, function (item, index) {
            return _c(
              "view",
              { key: index, staticClass: "works-upload-video" },
              [
                _c("video", {
                  staticClass: "upload-width",
                  attrs: { src: item.thumbTempFilePath },
                }),
              ]
            )
          }),
          0
        ),
        _c(
          "view",
          { staticClass: "works-upload-img", on: { tap: _vm.chooseImage } },
          [
            _c("image", {
              staticClass: "upload-img",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/upload-img.png */ "./src/assets/images/upload-img.png"),
                mode: "aspectFit",
              },
            }),
            _c("view", [
              _c("text", { staticClass: "upload-txt" }, [_vm._v("上传照片")]),
            ]),
          ]
        ),
        _c(
          "view",
          { staticClass: "works-upload-video", on: { tap: _vm.chooseVideo } },
          [
            _c("image", {
              staticClass: "upload-video",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/upload-video.png */ "./src/assets/images/upload-video.png"),
                mode: "aspectFit",
              },
            }),
            _c("view", [
              _c("text", { staticClass: "upload-txt" }, [_vm._v("上传视频")]),
            ]),
          ]
        ),
      ]),
    ]),
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" 使用设备 "),
        _c("input", {
          staticClass: "works-input",
          attrs: { placeholder: "请输入使用设备（选填）", value: _vm.device },
        }),
      ]),
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" 拍摄地点 "),
        _c("input", {
          staticClass: "works-input",
          attrs: { placeholder: "请输入拍摄地点（选填）", value: _vm.place },
        }),
      ]),
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" 约拍返片 "),
        _c("view", { staticClass: "works-switch" }, [
          _c("text", [_vm._v("是否约拍返片")]),
          _c("switch", {
            staticClass: "switch-btn",
            attrs: {
              name: "switch",
              color: "#ff6467",
              checked: _vm.switchChecked,
            },
            on: { change: _vm.switchChange },
          }),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" 主题标签 "),
        _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
      ]),
      _c(
        "view",
        { staticClass: "tag-list" },
        _vm._l(_vm.taglist, function (item, index) {
          return _c(
            "text",
            {
              key: index,
              staticClass: "tag-txt",
              class: item.checked ? "active" : "",
              on: {
                tap: function ($event) {
                  return _vm.chooseTag(index)
                },
              },
            },
            [_vm._v(_vm._s(item.name))]
          )
        }),
        0
      ),
    ]),
    _c("view", { staticClass: "works-btn" }, [
      _c("text", { staticClass: "release", on: { tap: _vm.submit } }, [
        _vm._v("确认发布"),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/upload-img.png":
/*!******************************************!*\
  !*** ./src/assets/images/upload-img.png ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/upload-img.png";

/***/ }),

/***/ "./src/assets/images/upload-video.png":
/*!********************************************!*\
  !*** ./src/assets/images/upload-video.png ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/upload-video.png";

/***/ }),

/***/ "./src/pages/release/works/index.scss":
/*!********************************************!*\
  !*** ./src/pages/release/works/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/release/works/index.vue":
/*!*******************************************!*\
  !*** ./src/pages/release/works/index.vue ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/works/index.vue");


var config = {"navigationBarTitleText":"发布作品"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/release/works/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/release/works/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/pages/release/works/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/release/works/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae&":
/*!**************************************************************************!*\
  !*** ./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2ebf7eae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/release/works/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map