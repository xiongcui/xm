(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageTonggao/pages/shop/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/shop/index.vue":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/shop/index.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5eb1b4af&scoped=true& */ "./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "5eb1b4af",
  "2dfbb3a1"
  
)

component.options.__file = "src/packageTonggao/pages/shop/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/index.js */ "./src/api/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/packageTonggao/pages/shop/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "shop",
  data: function data() {
    return {
      isIphoneX: false,
      name: "",
      title: "",
      doorplate: "",
      platform: "",
      platformIndex: "",
      platformList: [],
      localtion: "",
      recruitNum: "",
      product: "",
      giftsValue: "",
      desc: "",
      checked: false,
      checked1: false,
      checked2: true,
      amount: "",
      minAmount: "",
      maxAmount: "",
      payment_range: "",
      minFans: "",
      maxFans: "",
      taskIndex: "",
      date: "",
      imgList: [],
      taskData: [{
        name: "支付稿费",
        value: 1,
        ispick: false
      }, {
        name: "赠送产品",
        value: 2,
        ispick: false
      }, {
        name: "稿费+赠送",
        value: 3,
        ispick: false
      }],
      locale_address: {}
    };
  },
  methods: {
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
    platformChange: function platformChange(e) {
      this.platform = this.platformList[e.detail.value].value;
      this.platformIndex = e.detail.value;
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
    select_tag: function select_tag(row) {
      this.taskIndex = row.value;
      this.taskData.map(function (item) {
        item.ispick = false;
      });
      this.taskData[row.value - 1].ispick = true;
    },
    checkClick: function checkClick() {
      this.checked = !this.checked;
    },
    checkClick1: function checkClick1() {
      this.checked1 = !this.checked1;
    },
    checkClick2: function checkClick2() {
      this.checked2 = !this.checked2;

      if (this.checked2) {
        this.minFans = "";
        this.maxFans = "";
      }
    },
    fansChange: function fansChange(e) {
      if (this.minFans || this.maxFans) {
        this.checked2 = false;
      } else {
        this.checked2 = true;
      }
    },
    minFansInput: function minFansInput(e) {
      var exp = /^[+-]?\d*(\.\d*)?(e[+-]?\d+)?$/;

      if (!exp.test(e.detail.value)) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请输入纯数字！");
        this.minFans = "";
      }
    },
    maxFansInput: function maxFansInput(e) {
      var exp = /^[+-]?\d*(\.\d*)?(e[+-]?\d+)?$/;

      if (!exp.test(e.detail.value)) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请输入纯数字！");
        this.maxFans = "";
      }
    },
    minAmountInput: function minAmountInput(e) {
      var exp = /^[+-]?\d*(\.\d*)?(e[+-]?\d+)?$/;

      if (!exp.test(e.detail.value)) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请输入纯数字！");
        this.minAmount = "";
      }
    },
    maxAmountInput: function maxAmountInput(e) {
      var exp = /^[+-]?\d*(\.\d*)?(e[+-]?\d+)?$/;

      if (!exp.test(e.detail.value)) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请输入纯数字！");
        this.maxAmount = "";
      }
    },
    amountInput: function amountInput(e) {
      var exp = /^[+-]?\d*(\.\d*)?(e[+-]?\d+)?$/;

      if (!exp.test(e.detail.value)) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请输入纯数字！");
        this.amount = "";
      }
    },
    recruitNumInput: function recruitNumInput(e) {
      var exp = /^[+-]?\d*(\.\d*)?(e[+-]?\d+)?$/;

      if (!exp.test(e.detail.value)) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请输入纯数字！");
        this.recruitNum = "";
      }
    },
    dateChange: function dateChange(e) {
      this.date = e.detail.value;
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
      var _this3 = this;

      var header = {};
      var token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_2__[/* Base64 */ "a"].encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "notice"
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
    submit: function submit() {
      if (!this.title) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写任务标题！");
        return false;
      }

      if (!this.platform) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请选择推广平台！");
        return false;
      }

      if (!this.name) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写店铺名称！");
        return false;
      }

      if (!this.localtion) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写店铺地址！");
        return false;
      }

      if (!this.doorplate) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写门牌号码！");
        return false;
      }

      if (!this.taskIndex) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写任务奖励！");
        return false;
      }

      if (this.taskIndex == 1 || this.taskIndex == 3) {
        if (this.checked1 && !this.amount) {
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写人均稿费！");
          return false;
        }

        if (!this.checked1 && !this.minAmount || !this.checked1 && !this.maxAmount) {
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写人均稿费！");
          return false;
        }
      }

      if (this.taskIndex == 2 || this.taskIndex == 3) {
        if (!this.product) {
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写赠送产品！");
          return false;
        }

        if (!this.giftsValue) {
          Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写赠品价值！");
          return false;
        }
      }

      if (!this.recruitNum) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写招募人数！");
        return false;
      }

      if (!this.date) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写截止日期！");
        return false;
      }

      if (!this.desc) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请填写任务描述！");
        return false;
      }

      if (!this.imgList.length) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* errortip */ "a"])("请上传图片！");
        return false;
      }

      var params = {
        type: 20,
        first_code: "celebrity_spread",
        second_code: "CS8001",
        second_name: "探店推广",
        title: this.title,
        spread_platform_code: this.platformList[Number(this.platformIndex)].key,
        spread_platform_name: this.platformList[Number(this.platformIndex)].value,
        store_name: this.name,
        store_address: this.localtion,
        store_locale_address: this.locale_address,
        store_doorplate: this.doorplate,
        task_reward_type: Number(this.taskIndex + "00"),
        task_reward_name: this.taskData[Number(this.taskIndex - 1)].name,
        payment_range: this.checked1 || this.taskData[this.taskIndex - 1].ispick ? 0 : 1,
        // 费用区间(1:区间；0非区间)
        payment_amount: 0,
        // 付费金额(非金额区间),
        payment_min_amount: 0,
        payment_max_amount: 0,
        payment_unit: "元",
        reward_good_name: "",
        reward_good_price: 0,
        no_limit_number: 0,
        // 不限人数(不限制：1)
        recruit_number: Number(this.recruitNum),
        //招募人数
        is_quoted_price: this.checked ? 1 : 0,
        // 自报价格(1:是，0:否)
        no_limit_fans: this.checked2 ? 1 : 0,
        // 不限粉丝(1:不限；0:限制)
        fans_min_number: Number(this.minFans),
        fans_max_number: Number(this.maxFans),
        no_limit_deadline: 0,
        // 是否长期（长期:1，此时deadline_date为空，短期:0,此时deadline_date填日期）
        deadline_date: this.date,
        content: this.desc,
        scr_type: "notice",
        file_type: "picture",
        cover: this.imgList
      };

      if (this.taskIndex == 1 || this.taskIndex == 3) {
        params.payment_amount = this.checked1 ? Number(this.amount) : 0;
        params.payment_min_amount = Number(this.minAmount);
        params.payment_max_amount = Number(this.maxAmount);
      }

      if (this.taskIndex == 2 || this.taskIndex == 3) {
        params.reward_good_name = this.product;
        params.reward_good_price = Number(this.giftsValue);
      }

      this.submitNotice(params);
    },
    publicConfig: function publicConfig(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_4__[/* publicConfig */ "ub"])(params);

              case 3:
                res = _context.sent;
                _this4.platformList = res.data.data;
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
    submitNotice: function submitNotice(params) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, data, _this;

        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_4__[/* submitNotice */ "Qb"])(params);

              case 3:
                res = _context2.sent;
                data = res.data.data;
                _this = _this5;
                wx.showModal({
                  title: "温馨提示",
                  content: "\u53D1\u5E03\u901A\u544A\u4FE1\u606F\u6D88\u8017".concat(data.coin, "\u4E2A\u91D1\u8C46\uFF0C\u786E\u5B9A\u53D1\u5E03\u5417\uFF1F"),
                  success: function success(res) {
                    if (res.confirm) {
                      console.log("用户点击确定");

                      _this.noticePayment({
                        oid: data.oid
                      });
                    } else if (res.cancel) {
                      console.log("用户点击取消");
                    }
                  }
                });
                _context2.next = 11;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    noticePayment: function noticePayment(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_4__[/* noticePayment */ "ib"])(params);

              case 3:
                res = _context3.sent;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_3__[/* openPage */ "c"])("/packageAdd/pages/tips/index?type=1&msg=".concat(res.data.data));
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
    this.isIphoneX = this.globalData.isIphoneX;
    this.publicConfig({
      type: ["spread_platform"]
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true& ***!
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
    { staticClass: "shop" },
    [
      _c("view", { staticClass: "shop-box" }, [
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [_vm._v(" 任务标题 ")]),
          _c("view", { staticClass: "shop-rt" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.title,
                  expression: "title",
                },
              ],
              staticClass: "shop-input",
              attrs: { placeholder: "请输入标题(包含店铺名称)" },
              domProps: { value: _vm.title },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.title = $event.target.value
                },
              },
            }),
          ]),
        ]),
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [_vm._v(" 推广平台")]),
          _c(
            "view",
            { staticClass: "shop-rt" },
            [
              _c(
                "picker",
                {
                  staticClass: "shop-select",
                  attrs: {
                    value: _vm.platformIndex,
                    range: _vm.platformList,
                    "range-key": "value",
                  },
                  on: { change: _vm.platformChange },
                },
                [
                  _vm.platform
                    ? _c("view", { staticClass: "shop-select-item" }, [
                        _vm._v(_vm._s(_vm.platform)),
                      ])
                    : _c(
                        "view",
                        { staticClass: "shop-select-item input-placeholder" },
                        [_vm._v("请选择")]
                      ),
                ]
              ),
            ],
            1
          ),
        ]),
      ]),
      _c("view", { staticClass: "shop-box" }, [
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [_vm._v(" 店铺名称 ")]),
          _c("view", { staticClass: "shop-rt" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name",
                },
              ],
              staticClass: "shop-input",
              attrs: { placeholder: "请输入店铺名称" },
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
        ]),
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [_vm._v(" 店铺地址 ")]),
          _c(
            "view",
            { staticClass: "shop-rt", on: { tap: _vm.onChooseLocation } },
            [
              _c("image", {
                staticClass: "shop-icon",
                attrs: {
                  src: "https://yuepai-oss.qubeitech.com/static/images/position.png",
                },
              }),
              _vm.localtion
                ? _c("text", [_vm._v(" " + _vm._s(_vm.localtion))])
                : _c("text", { staticClass: "input-placeholder" }, [
                    _vm._v(" 请选择店铺地址"),
                  ]),
              _c("view", { staticClass: "shop-item-right" }, [
                _c("image", {
                  attrs: {
                    mode: "aspectFit",
                    src: "https://yuepai-oss.qubeitech.com/static/images/right.png",
                  },
                }),
              ]),
            ]
          ),
        ]),
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [_vm._v(" 门牌号码 ")]),
          _c("view", { staticClass: "shop-rt" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.doorplate,
                  expression: "doorplate",
                },
              ],
              staticClass: "shop-input",
              attrs: { placeholder: "请输入详细地址，如x单元x层x室" },
              domProps: { value: _vm.doorplate },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.doorplate = $event.target.value
                },
              },
            }),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "shop-box" }, [
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [_vm._v(" 任务奖励 ")]),
        ]),
        _c("view", { staticClass: "shop-item" }, [
          _c(
            "view",
            { staticClass: "tags" },
            _vm._l(_vm.taskData, function (item, index) {
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
                [_vm._v(_vm._s(item.name))]
              )
            }),
            0
          ),
        ]),
        _vm.taskIndex == 1 || _vm.taskIndex == 3
          ? _c("view", { staticClass: "shop-item" }, [
              _c("view", { staticClass: "shop-left" }, [_vm._v(" 人均稿费 ")]),
              _c(
                "view",
                { staticClass: "shop-rt" },
                [
                  _vm.checked1
                    ? _c(
                        "block",
                        { staticClass: "payment-amount" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.amount,
                                expression: "amount",
                              },
                            ],
                            staticClass: "amount1",
                            attrs: { placeholder: "请输入", type: "number" },
                            domProps: { value: _vm.amount },
                            on: {
                              input: [
                                function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.amount = $event.target.value
                                },
                                _vm.amountInput,
                              ],
                            },
                          }),
                          _c("text", { staticClass: "yuan" }, [_vm._v("元")]),
                          _c("text", { staticClass: "tonggao-split" }, [
                            _vm._v("|"),
                          ]),
                          _c(
                            "block",
                            [
                              _c(
                                "text",
                                { staticClass: "payment_range_text" },
                                [_vm._v("额定")]
                              ),
                              _c("checkbox", {
                                staticClass: "payment_range",
                                attrs: { checked: _vm.checked1 },
                                on: { tap: _vm.checkClick1 },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  !_vm.checked1
                    ? _c(
                        "block",
                        { staticClass: "payment-amount" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.minAmount,
                                expression: "minAmount",
                              },
                            ],
                            staticClass: "min-amount",
                            attrs: { placeholder: "最小金额", type: "number" },
                            domProps: { value: _vm.minAmount },
                            on: {
                              input: [
                                function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.minAmount = $event.target.value
                                },
                                _vm.minAmountInput,
                              ],
                            },
                          }),
                          _c("text", { staticClass: "split" }, [_vm._v("-")]),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.maxAmount,
                                expression: "maxAmount",
                              },
                            ],
                            staticClass: "max-amount",
                            attrs: { placeholder: "最大金额", type: "number" },
                            domProps: { value: _vm.maxAmount },
                            on: {
                              input: [
                                function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.maxAmount = $event.target.value
                                },
                                _vm.maxAmountInput,
                              ],
                            },
                          }),
                          _c("text", { staticClass: "yuan" }, [_vm._v("元")]),
                          _c("text", { staticClass: "tonggao-split" }, [
                            _vm._v("|"),
                          ]),
                          _c(
                            "block",
                            [
                              _c(
                                "text",
                                { staticClass: "payment_range_text" },
                                [_vm._v("额定")]
                              ),
                              _c("checkbox", {
                                staticClass: "payment_range",
                                attrs: { checked: _vm.checked1 },
                                on: { tap: _vm.checkClick1 },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
            ])
          : _vm._e(),
        _vm.taskIndex == 2 || _vm.taskIndex == 3
          ? _c("view", { staticClass: "shop-item" }, [
              _c("view", { staticClass: "shop-left" }, [_vm._v(" 赠送产品 ")]),
              _c("view", { staticClass: "shop-rt" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.product,
                      expression: "product",
                    },
                  ],
                  staticClass: "shop-input",
                  attrs: { placeholder: "请输入赠送产品" },
                  domProps: { value: _vm.product },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.product = $event.target.value
                    },
                  },
                }),
              ]),
            ])
          : _vm._e(),
        _vm.taskIndex == 2 || _vm.taskIndex == 3
          ? _c("view", { staticClass: "shop-item" }, [
              _c("view", { staticClass: "shop-left" }, [_vm._v(" 赠品价值 ")]),
              _c("view", { staticClass: "shop-rt" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.giftsValue,
                      expression: "giftsValue",
                    },
                  ],
                  staticClass: "shop-input",
                  attrs: { placeholder: "请输入赠送产品价值", type: "number" },
                  domProps: { value: _vm.giftsValue },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.giftsValue = $event.target.value
                    },
                  },
                }),
                _c(
                  "text",
                  { staticStyle: { color: "#333333", "margin-left": "6px" } },
                  [_vm._v("元")]
                ),
              ]),
            ])
          : _vm._e(),
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [_vm._v(" 招募人数 ")]),
          _c("view", { staticClass: "shop-rt" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.recruitNum,
                  expression: "recruitNum",
                },
              ],
              staticClass: "shop-input",
              attrs: { placeholder: "请输入招募人数", type: "number" },
              domProps: { value: _vm.recruitNum },
              on: {
                input: [
                  function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.recruitNum = $event.target.value
                  },
                  _vm.recruitNumInput,
                ],
              },
            }),
          ]),
        ]),
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [
            _vm._v(" 需要红人自我报价 "),
          ]),
          _c("view", { staticClass: "shop-rt" }, [
            _c(
              "view",
              { staticClass: "need" },
              [
                _c("text", { class: _vm.checked ? "active" : "" }, [
                  _vm._v("需要"),
                ]),
                _c("checkbox", {
                  staticClass: "checked",
                  attrs: { checked: _vm.checked },
                  on: { tap: _vm.checkClick },
                }),
              ],
              1
            ),
            _c(
              "view",
              { staticClass: "no-need" },
              [
                _c("text", { class: !_vm.checked ? "active" : "" }, [
                  _vm._v("不需要"),
                ]),
                _c("checkbox", {
                  staticClass: "checked",
                  attrs: { checked: !_vm.checked },
                  on: { tap: _vm.checkClick },
                }),
              ],
              1
            ),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "shop-box" }, [
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [_vm._v(" 粉丝要求 ")]),
          _c(
            "view",
            { staticClass: "shop-rt" },
            [
              _c(
                "block",
                { staticClass: "payment-amount" },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.minFans,
                        expression: "minFans",
                      },
                    ],
                    staticClass: "min-fans",
                    attrs: { placeholder: "最低粉丝数", type: "number" },
                    domProps: { value: _vm.minFans },
                    on: {
                      blur: _vm.fansChange,
                      input: [
                        function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.minFans = $event.target.value
                        },
                        _vm.minFansInput,
                      ],
                    },
                  }),
                  _c("text", { staticClass: "tonggao-split" }, [_vm._v("-")]),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.maxFans,
                        expression: "maxFans",
                      },
                    ],
                    staticClass: "max-fans",
                    attrs: { placeholder: "最高粉丝数", type: "number" },
                    domProps: { value: _vm.maxFans },
                    on: {
                      blur: _vm.fansChange,
                      input: [
                        function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.maxFans = $event.target.value
                        },
                        _vm.maxFansInput,
                      ],
                    },
                  }),
                  _c("text", { staticClass: "tonggao-split" }, [_vm._v("|")]),
                  _c(
                    "block",
                    [
                      _c("text", { staticClass: "payment_range_text" }, [
                        _vm._v("不限"),
                      ]),
                      _c("checkbox", {
                        staticClass: "payment_range",
                        attrs: { checked: _vm.checked2 },
                        on: { tap: _vm.checkClick2, blur: _vm.fansChange },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]),
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [_vm._v(" 截止日期 ")]),
          _c(
            "view",
            { staticClass: "shop-rt" },
            [
              _c(
                "picker",
                {
                  staticClass: "shop-select",
                  attrs: { mode: "date" },
                  on: { change: _vm.dateChange },
                },
                [
                  _vm.date
                    ? _c("view", { staticClass: "shop-select-item" }, [
                        _vm._v(_vm._s(_vm.date)),
                      ])
                    : _c(
                        "view",
                        { staticClass: "shop-select-item input-placeholder" },
                        [_vm._v("请选择")]
                      ),
                ]
              ),
            ],
            1
          ),
        ]),
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "shop-left" }, [_vm._v(" 任务描述 ")]),
        ]),
        _c("view", { staticClass: "shop-item" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.desc,
                expression: "desc",
              },
            ],
            staticClass: "tonggao-width",
            attrs: {
              "auto-height": "",
              placeholder:
                "您需要什么样的合作？请介绍您的店铺、产品、合作费用、合作要求等，但不得含有联系方式，否则不予通过。",
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
        _c("view", { staticClass: "shop-item" }, [
          _c("view", { staticClass: "tonggao-upload" }, [
            _c("view", { staticClass: "tonggao-upload-title" }, [
              _vm._v("上传照片"),
            ]),
            _c(
              "view",
              { staticClass: "tonggao-upload-list" },
              [
                _vm.imgList.length
                  ? _c(
                      "block",
                      _vm._l(_vm.imgList, function (item, index) {
                        return _c(
                          "view",
                          { key: index, staticClass: "tonggao-upload-img" },
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
                    staticClass: "tonggao-upload-img",
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
                        _vm._v("上传店铺照片"),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]),
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
            _c("button", { on: { tap: _vm.submit } }, [_vm._v("发布")]),
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

/***/ "./src/packageTonggao/pages/shop/index.scss":
/*!**************************************************!*\
  !*** ./src/packageTonggao/pages/shop/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageTonggao/pages/shop/index.vue":
/*!*************************************************!*\
  !*** ./src/packageTonggao/pages/shop/index.vue ***!
  \*************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/shop/index.vue");


var config = {"navigationBarTitleText":"发布探店任务通告"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageTonggao/pages/shop/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/shop/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5eb1b4af&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/shop/index.vue?vue&type=template&id=5eb1b4af&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5eb1b4af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageTonggao/pages/shop/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map