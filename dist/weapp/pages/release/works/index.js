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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/pages/release/works/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      switchChecked: false,
      charge: "",
      select_city: ""
    };
  },
  methods: {
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
        count: 9,
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

            _this.upImgs(imgInfo, "image");
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
          console.log(res, "res");
          var arr = res.tempFiles;
          var videoInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            videoInfo = v;
          }); // this.videolist.push(videoInfo);

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
            console.log("开始上传！！！");

            _this.upImgs(videoInfo, "video");
          } // _this.upImgs(videoInfo, "video");

        }
      });
    },
    upImgs: function upImgs(dataInfo, type) {
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
        filePath: type == "video" ? dataInfo.tempFilePath : dataInfo.tempFilePath,
        formData: {
          type: "avatar"
        },
        name: "file",
        header: header,
        success: function success(res) {
          wx.hideLoading(); //判断上传的是图片还是视频

          var data = JSON.parse(res.data);

          if (data.code == 200) {
            if (type == "video") {
              // _this.setData({
              console.log("视频地址：" + res);
              console.log("视频封面：" + res + "?spm=qipa250&x-oss-process=video/snapshot,t_1000,f_jpg,w_800,h_400,m_fast"); // ))
            } else {
              _this2.imgList.push(data.data.file1);
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
        _vm._v(" 标题 "),
        _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
      ]),
      _c("input", {
        staticClass: "works-name",
        attrs: { placeholder: "填写标题会有更多邀约哦～", value: _vm.name },
        on: { blur: _vm.nameBlur },
      }),
    ]),
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" 描述 "),
        _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
      ]),
      _c("textarea", {
        staticClass: "works-name",
        attrs: {
          "auto-height": "",
          placeholder:
            "请描述您的约单内容，如您的特长、才艺、需求、地点、时间等（内容中不得含有任何联系方式，敏感语句、私房话题等，否则审核不予通过，至少7字以上）",
          value: _vm.name,
        },
        on: { blur: _vm.nameBlur },
      }),
    ]),
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" 上传照片/视频 "),
        _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
      ]),
      _c("view", { staticClass: "works-upload" }, [
        _c(
          "view",
          { staticClass: "works-upload-list" },
          [
            _vm._l(_vm.imgList, function (item, index) {
              return _c(
                "view",
                { key: index, staticClass: "works-upload-img" },
                [
                  _c("image", {
                    staticClass: "upload-width",
                    attrs: { src: item, mode: "aspectFit" },
                  }),
                ]
              )
            }),
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
                  _c("text", { staticClass: "upload-txt" }, [
                    _vm._v("上传照片"),
                  ]),
                ]),
              ]
            ),
            !_vm.imgList.length
              ? _c(
                  "view",
                  {
                    staticClass: "works-upload-video",
                    on: { tap: _vm.chooseVideo },
                  },
                  [
                    _c("image", {
                      staticClass: "upload-video",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/upload-video.png */ "./src/assets/images/upload-video.png"),
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
          2
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
      ]),
    ]),
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-info" }, [
        _c("text", [_vm._v("时间")]),
        _c("input", {
          staticClass: "works-input",
          attrs: { placeholder: "您期望的合作时间（选填）", value: _vm.device },
        }),
      ]),
      _c("view", { staticClass: "works-info" }, [
        _c("text", [_vm._v("地点")]),
        _c("input", {
          staticClass: "works-input",
          attrs: { placeholder: "您期望的合作地点（选填）", value: _vm.place },
        }),
      ]),
      _c(
        "view",
        { staticClass: "works-info" },
        [
          _c("text", [_vm._v("收费模式")]),
          _c(
            "picker",
            {
              staticClass: "works-select",
              attrs: { mode: "region", value: "region" },
            },
            [
              _vm.charge
                ? _c("view", { staticClass: "works-select-item" }, [
                    _vm._v(_vm._s(_vm.charge)),
                  ])
                : _c("view", { staticClass: "works-select-item" }, [
                    _vm._v("请选择"),
                  ]),
            ]
          ),
        ],
        1
      ),
      _c(
        "view",
        { staticClass: "works-info" },
        [
          _c("text", [_vm._v("面向地区")]),
          _c(
            "picker",
            {
              staticClass: "works-select",
              attrs: { mode: "region", value: "region" },
            },
            [
              _vm.select_city
                ? _c("view", { staticClass: "works-select-item" }, [
                    _vm._v(_vm._s(_vm.select_city)),
                  ])
                : _c("view", { staticClass: "works-select-item" }, [
                    _vm._v("请选择"),
                  ]),
            ]
          ),
        ],
        1
      ),
    ]),
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" 风格标签 "),
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
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" 约拍通告 "),
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