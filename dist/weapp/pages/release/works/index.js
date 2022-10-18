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
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_5__[/* Base64 */ "a"].encode(token + ":");
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
    },
    test: function test() {
      wx.request({
        url: "https://tapi.cupz.cn/v1/user/image",
        //仅为示例，并非真实的接口地址
        method: "POST",
        data: {
          height: 176,
          weight: 56,
          bust: 82,
          waist: 67,
          hip: 90,
          size: 38
        },
        header: {
          "content-type": "application/json" // 默认值

        },
        success: function success(res) {
          console.log(res.data);
        }
      }); //
    }
  }
});

/***/ }),

/***/ "./node_modules/js-Base64/base64.mjs":
/*!*******************************************!*\
  !*** ./node_modules/js-Base64/base64.mjs ***!
  \*******************************************/
/*! exports provided: version, VERSION, atob, atobPolyfill, btoa, btoaPolyfill, fromBase64, toBase64, utob, encode, encodeURI, encodeURL, btou, decode, isValid, fromUint8Array, toUint8Array, extendString, extendUint8Array, extendBuiltins, Base64 */
/*! exports used: Base64 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export version */
/* unused harmony export VERSION */
/* unused harmony export atob */
/* unused harmony export atobPolyfill */
/* unused harmony export btoa */
/* unused harmony export btoaPolyfill */
/* unused harmony export fromBase64 */
/* unused harmony export toBase64 */
/* unused harmony export utob */
/* unused harmony export encode */
/* unused harmony export encodeURI */
/* unused harmony export encodeURL */
/* unused harmony export btou */
/* unused harmony export decode */
/* unused harmony export isValid */
/* unused harmony export fromUint8Array */
/* unused harmony export toUint8Array */
/* unused harmony export extendString */
/* unused harmony export extendUint8Array */
/* unused harmony export extendBuiltins */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gBase64; });
/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
const version = '3.7.2';
/**
 * @deprecated use lowercase `version`.
 */
const VERSION = version;
const _hasatob = typeof atob === 'function';
const _hasbtoa = typeof btoa === 'function';
const _hasBuffer = typeof Buffer === 'function';
const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = Array.prototype.slice.call(b64ch);
const b64tab = ((a) => {
    let tab = {};
    a.forEach((c, i) => tab[c] = i);
    return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === 'function'
    ? Uint8Array.from.bind(Uint8Array)
    : (it, fn = (x) => x) => new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
const _mkUriSafe = (src) => src
    .replace(/=/g, '').replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_');
const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = (bin) => {
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = '';
    const pad = bin.length % 3;
    for (let i = 0; i < bin.length;) {
        if ((c0 = bin.charCodeAt(i++)) > 255 ||
            (c1 = bin.charCodeAt(i++)) > 255 ||
            (c2 = bin.charCodeAt(i++)) > 255)
            throw new TypeError('invalid character found');
        u32 = (c0 << 16) | (c1 << 8) | c2;
        asc += b64chs[u32 >> 18 & 63]
            + b64chs[u32 >> 12 & 63]
            + b64chs[u32 >> 6 & 63]
            + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
const _btoa = _hasbtoa ? (bin) => btoa(bin)
    : _hasBuffer ? (bin) => Buffer.from(bin, 'binary').toString('base64')
        : btoaPolyfill;
const _fromUint8Array = _hasBuffer
    ? (u8a) => Buffer.from(u8a).toString('base64')
    : (u8a) => {
        // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
        const maxargs = 0x1000;
        let strs = [];
        for (let i = 0, l = u8a.length; i < l; i += maxargs) {
            strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
        }
        return _btoa(strs.join(''));
    };
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = (c) => {
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c
            : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                + _fromCC(0x80 | (cc & 0x3f)))
                : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                    + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                    + _fromCC(0x80 | (cc & 0x3f)));
    }
    else {
        var cc = 0x10000
            + (c.charCodeAt(0) - 0xD800) * 0x400
            + (c.charCodeAt(1) - 0xDC00);
        return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
            + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
            + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
            + _fromCC(0x80 | (cc & 0x3f)));
    }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
const utob = (u) => u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer
    ? (s) => Buffer.from(s, 'utf8').toString('base64')
    : _TE
        ? (s) => _fromUint8Array(_TE.encode(s))
        : (s) => _btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
const encode = (src, urlsafe = false) => urlsafe
    ? _mkUriSafe(_encode(src))
    : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
const encodeURI = (src) => encode(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = (cccc) => {
    switch (cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                | ((0x3f & cccc.charCodeAt(1)) << 12)
                | ((0x3f & cccc.charCodeAt(2)) << 6)
                | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
            return (_fromCC((offset >>> 10) + 0xD800)
                + _fromCC((offset & 0x3FF) + 0xDC00));
        case 3:
            return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
                | ((0x3f & cccc.charCodeAt(1)) << 6)
                | (0x3f & cccc.charCodeAt(2)));
        default:
            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
                | (0x3f & cccc.charCodeAt(1)));
    }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
const btou = (b) => b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */
const atobPolyfill = (asc) => {
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, '');
    if (!b64re.test(asc))
        throw new TypeError('malformed base64.');
    asc += '=='.slice(2 - (asc.length & 3));
    let u24, bin = '', r1, r2;
    for (let i = 0; i < asc.length;) {
        u24 = b64tab[asc.charAt(i++)] << 18
            | b64tab[asc.charAt(i++)] << 12
            | (r1 = b64tab[asc.charAt(i++)]) << 6
            | (r2 = b64tab[asc.charAt(i++)]);
        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
            : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
const _atob = _hasatob ? (asc) => atob(_tidyB64(asc))
    : _hasBuffer ? (asc) => Buffer.from(asc, 'base64').toString('binary')
        : atobPolyfill;
//
const _toUint8Array = _hasBuffer
    ? (a) => _U8Afrom(Buffer.from(a, 'base64'))
    : (a) => _U8Afrom(_atob(a), c => c.charCodeAt(0));
/**
 * converts a Base64 string to a Uint8Array.
 */
const toUint8Array = (a) => _toUint8Array(_unURI(a));
//
const _decode = _hasBuffer
    ? (a) => Buffer.from(a, 'base64').toString('utf8')
    : _TD
        ? (a) => _TD.decode(_toUint8Array(a))
        : (a) => btou(_atob(a));
const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == '-' ? '+' : '/'));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
const decode = (src) => _decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */
const isValid = (src) => {
    if (typeof src !== 'string')
        return false;
    const s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = (v) => {
    return {
        value: v, enumerable: false, writable: true, configurable: true
    };
};
/**
 * extend String.prototype with relevant methods
 */
const extendString = function () {
    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
    _add('fromBase64', function () { return decode(this); });
    _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
    _add('toBase64URI', function () { return encode(this, true); });
    _add('toBase64URL', function () { return encode(this, true); });
    _add('toUint8Array', function () { return toUint8Array(this); });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
const extendUint8Array = function () {
    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
    _add('toBase64URI', function () { return fromUint8Array(this, true); });
    _add('toBase64URL', function () { return fromUint8Array(this, true); });
};
/**
 * extend Builtin prototypes with relevant methods
 */
const extendBuiltins = () => {
    extendString();
    extendUint8Array();
};
const gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode: encode,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins,
};
// makecjs:CUT //




















// and finally,



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
    _c("view", { on: { tap: _vm.test } }, [_vm._v("测试")]),
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