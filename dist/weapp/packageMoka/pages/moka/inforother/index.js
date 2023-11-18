(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/inforother/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/inforother/index.vue":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/inforother/index.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_6b564441_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6b564441&scoped=true& */ "./src/packageMoka/pages/moka/inforother/index.vue?vue&type=template&id=6b564441&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/inforother/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_6b564441_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_6b564441_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "6b564441",
  "1f199d9a"
  
)

component.options.__file = "src/packageMoka/pages/moka/inforother/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/inforother/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/inforother/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/inforother/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "inforother",
  data: function data() {
    return {
      myself: "",
      isIphoneX: false,
      birthday: "",
      avatar: "",
      nickname: "",
      sexs: ["女", "男"],
      sex: "",
      heights: [],
      heightIndex: "",
      weights: [],
      weightIndex: "",
      shoes: [],
      shoeIndex: "",
      BWHs: [[], [], []],
      BWHIndex: Array(),
      isshowBWH: true,
      isshowBirthday: true,
      region: [],
      sub_user_id: ""
    };
  },
  methods: {
    sexChange: function sexChange(e) {
      this.sex = e.detail.value;
    },
    birthdayChange: function birthdayChange(e) {
      this.birthday = String(e.detail.value);
    },
    heightChange: function heightChange(e) {
      this.heightIndex = String(e.detail.value);
    },
    weightChange: function weightChange(e) {
      this.weightIndex = String(e.detail.value);
    },
    BWHChange: function BWHChange(e) {
      this.BWHIndex = e.detail.value;
    },
    shoeChange: function shoeChange(e) {
      this.shoeIndex = String(e.detail.value);
    },
    sub: function sub() {
      if (!this.nickname) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请输入昵称");
        return false;
      }

      if (this.nickname.length > 4) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("昵称不能超过4个字");
        return false;
      }

      if (this.sex === "") {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择性别");
        return false;
      }

      if (!this.birthday) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择生日");
        return false;
      }

      if (!this.heightIndex) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择身高");
        return false;
      }

      if (!this.weightIndex) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择体重");
        return false;
      }

      if (!this.BWHIndex.length) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择三围");
        return false;
      }

      if (!this.shoeIndex) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* errortip */ "a"])("请选择鞋码");
        return false;
      }

      var height = this.heights[this.heightIndex];
      var weight = this.weights[this.weightIndex];
      var bust = this.BWHs[0][this.BWHIndex[0]];
      var waist = this.BWHs[1][this.BWHIndex[1]];
      var hip = this.BWHs[2][this.BWHIndex[2]];
      var size = this.shoes[this.shoeIndex];
      var params = {
        height: height,
        weight: weight,
        bust: bust,
        waist: waist,
        hip: hip,
        size: size,
        nickname: this.nickname,
        sex: Number(this.sex),
        birthday: this.birthday
      };

      if (!this.myself) {
        params.sub_uuid = "non_personal";
      }

      if (this.sub_user_id) {
        params.sub_uuid = this.sub_user_id;
      }

      this.userShape(params);
    },
    userShape: function userShape(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userShape */ "yc"])(params);

              case 3:
                res = _context.sent;

                _this.userinfoDetail({
                  sub_uuid: res.data.data.sub_uuid
                });

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
    userinfoDetail: function userinfoDetail(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, data, carduserinfo;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userShapeDetail */ "zc"])(params);

              case 3:
                res = _context2.sent;
                data = res.data.data.current_shape;
                _this2.sub_user_id = res.data.data.sub_uuid ? res.data.data.sub_uuid : _this2.sub_user_id;
                carduserinfo = {
                  avatar: data.avatar,
                  nickname: data.nickname,
                  sex: data.sex,
                  birthday: data.birthday,
                  height: data.height,
                  weight: data.weight,
                  bwh_b: data.bust,
                  bwh_w: data.waist,
                  bwh_h: data.hip,
                  shoe: data.size,
                  is_bwh: data.bust ? true : false,
                  is_birthday: data.birthday ? true : false
                };
                wx.setStorageSync("carduserinfo", carduserinfo);

                if ("vertical" == wx.getStorageSync("card-type")) {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageMoka/pages/moka/makecardv/index?sub_user_id=" + _this2.sub_user_id);
                } else {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "c"])("/packageMoka/pages/moka/makecard/index?sub_user_id=" + _this2.sub_user_id);
                }

                _context2.next = 13;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }))();
    },
    userShapeDetail: function userShapeDetail(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* userShapeDetail */ "zc"])(params);

              case 3:
                res = _context3.sent;

                //默认下拉数据
                if (res.data.data.shape_list.height) {
                  _this3.heights = res.data.data.shape_list.height;
                }

                if (res.data.data.shape_list.weight) {
                  _this3.weights = res.data.data.shape_list.weight;
                }

                if (res.data.data.shape_list.bwh) {
                  _this3.BWHs = [res.data.data.shape_list.bwh, res.data.data.shape_list.bwh, res.data.data.shape_list.bwh];
                }

                if (res.data.data.shape_list.size) {
                  _this3.shoes = res.data.data.shape_list.size;
                } // 数据回显


                if (_this3.myself || _this3.sub_user_id) {
                  _this3.nickname = res.data.data.current_shape.nickname;
                  _this3.birthday = res.data.data.current_shape.birthday;
                  _this3.sex = String(res.data.data.current_shape.sex);

                  if (res.data.data.current_shape.height) {
                    _this3.heightIndex = _this3.heights.findIndex(function (item) {
                      return item == res.data.data.current_shape.height;
                    });
                  }

                  if (res.data.data.current_shape.weight) {
                    _this3.weightIndex = _this3.weights.findIndex(function (item) {
                      return item == res.data.data.current_shape.weight;
                    });
                  }

                  if (res.data.data.current_shape.bust) {
                    _this3.BWHIndex[0] = _this3.BWHs[0].findIndex(function (item) {
                      return item == res.data.data.current_shape.bust;
                    });
                  }

                  if (res.data.data.current_shape.waist) {
                    _this3.BWHIndex[1] = _this3.BWHs[1].findIndex(function (item) {
                      return item == res.data.data.current_shape.waist;
                    });
                  }

                  if (res.data.data.current_shape.hip) {
                    _this3.BWHIndex[2] = _this3.BWHs[2].findIndex(function (item) {
                      return item == res.data.data.current_shape.hip;
                    });
                  }

                  if (res.data.data.current_shape.size) {
                    _this3.shoeIndex = _this3.shoes.findIndex(function (item) {
                      return item == res.data.data.current_shape.size;
                    });
                  }

                  _this3.BWHIndex = JSON.parse(JSON.stringify(_this3.BWHIndex));
                }

                _context3.next = 13;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }))();
    }
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onLoad: function onLoad(options) {
    this.myself = options.myself;

    if (options.sub_user_id) {
      this.sub_user_id = options.sub_user_id;
      this.userShapeDetail({
        sub_uuid: options.sub_user_id
      });
    } else {
      this.userShapeDetail("");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/inforother/index.vue?vue&type=template&id=6b564441&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/inforother/index.vue?vue&type=template&id=6b564441&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "inforother" },
    [
      _c("view", { staticClass: "title" }, [_vm._v("基本信息")]),
      _c(
        "view",
        { staticClass: "infor" },
        [
          _c("view", { staticClass: "item ub item-b" }, [
            _c("view", { staticClass: "ub-f1 ub item_mid" }, [
              _c("view", { staticClass: "item_label" }, [_vm._v("姓名/昵称")]),
              _c("view", { staticClass: "ub-f1 item_input" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.nickname,
                      expression: "nickname",
                    },
                  ],
                  attrs: {
                    maxlength: "60",
                    name: "nickname",
                    placeholder: "请输入姓名/昵称",
                    type: "text",
                  },
                  domProps: { value: _vm.nickname },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.nickname = $event.target.value
                    },
                  },
                }),
              ]),
            ]),
            _c("view", { staticClass: "item_right" }),
          ]),
          _c(
            "picker",
            {
              attrs: { range: _vm.sexs },
              on: { change: _vm.sexChange },
              model: {
                value: _vm.sex,
                callback: function ($$v) {
                  _vm.sex = $$v
                },
                expression: "sex",
              },
            },
            [
              _c("view", { staticClass: "item ub item-b" }, [
                _c("view", { staticClass: "ub-f1 ub item_mid" }, [
                  _c("view", { staticClass: "item_label" }, [_vm._v("性别")]),
                  _c("view", { staticClass: "ub-f1 item_input" }, [
                    _vm.sex
                      ? _c("view", { staticClass: "picker-value" }, [
                          _vm._v(_vm._s(_vm.sexs[_vm.sex])),
                        ])
                      : _c("view", { staticClass: "picker" }, [
                          _vm._v("请选择"),
                        ]),
                  ]),
                ]),
                _c("view", { staticClass: "item_right" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: "https://yuepai-oss.qubeitech.com/static/images/right.png",
                    },
                  }),
                ]),
              ]),
            ]
          ),
          _c(
            "picker",
            {
              attrs: {
                end: "2020-09-01",
                value: "2005-01-01",
                mode: "date",
                start: "1960-09-01",
              },
              on: { change: _vm.birthdayChange },
              model: {
                value: _vm.birthday,
                callback: function ($$v) {
                  _vm.birthday = $$v
                },
                expression: "birthday",
              },
            },
            [
              _c("view", { staticClass: "item ub" }, [
                _c("view", { staticClass: "ub-f1 ub item_mid" }, [
                  _c("view", { staticClass: "item_label" }, [_vm._v("生日")]),
                  _c("view", { staticClass: "ub-f1 item_input" }, [
                    _vm.birthday
                      ? _c("view", { staticClass: "picker-value" }, [
                          _vm._v(_vm._s(_vm.birthday)),
                        ])
                      : _c("view", { staticClass: "picker" }, [
                          _vm._v("请选择"),
                        ]),
                  ]),
                ]),
                _c("view", { staticClass: "item_right" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: "https://yuepai-oss.qubeitech.com/static/images/right.png",
                    },
                  }),
                ]),
              ]),
            ]
          ),
        ],
        1
      ),
      _c("view", { staticClass: "title" }, [_vm._v("形象信息")]),
      _c("view", { staticClass: "mid_gap" }),
      _c(
        "view",
        { staticClass: "infor" },
        [
          _c(
            "picker",
            {
              attrs: {
                range: _vm.heights,
                value: _vm.heightIndex ? _vm.heightIndex : 125,
              },
              on: { change: _vm.heightChange },
            },
            [
              _c("view", { staticClass: "item ub item-b" }, [
                _c("view", { staticClass: "ub-f1 ub item_mid" }, [
                  _c("view", { staticClass: "item_label" }, [
                    _vm._v("身高（cm）"),
                  ]),
                  _c("view", { staticClass: "ub-f1 item_input" }, [
                    _vm.heightIndex === ""
                      ? _c("view", { staticClass: "picker" }, [
                          _vm._v("请选择"),
                        ])
                      : _c("view", { staticClass: "picker-value" }, [
                          _vm._v(_vm._s(_vm.heights[_vm.heightIndex]) + "cm"),
                        ]),
                  ]),
                ]),
                _c("view", { staticClass: "item_right" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: "https://yuepai-oss.qubeitech.com/static/images/right.png",
                    },
                  }),
                ]),
              ]),
            ]
          ),
          _c(
            "picker",
            {
              attrs: {
                range: _vm.weights,
                value: _vm.weightIndex ? _vm.weightIndex : 35,
              },
              on: { change: _vm.weightChange },
            },
            [
              _c("view", { staticClass: "item ub item-b" }, [
                _c("view", { staticClass: "ub-f1 ub item_mid" }, [
                  _c("view", { staticClass: "item_label" }, [
                    _vm._v("体重（kg）"),
                  ]),
                  _c("view", { staticClass: "ub-f1 item_input" }, [
                    _vm.weightIndex === ""
                      ? _c("view", { staticClass: "picker" }, [
                          _vm._v("请选择"),
                        ])
                      : _c("view", { staticClass: "picker-value" }, [
                          _vm._v(_vm._s(_vm.weights[_vm.weightIndex]) + "kg"),
                        ]),
                  ]),
                ]),
                _c("view", { staticClass: "item_right" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: "https://yuepai-oss.qubeitech.com/static/images/right.png",
                    },
                  }),
                ]),
              ]),
            ]
          ),
          _c(
            "picker",
            {
              attrs: { mode: "multiSelector", range: _vm.BWHs },
              on: { change: _vm.BWHChange },
              model: {
                value: _vm.BWHIndex,
                callback: function ($$v) {
                  _vm.BWHIndex = $$v
                },
                expression: "BWHIndex",
              },
            },
            [
              _c("view", { staticClass: "item ub item-b" }, [
                _c("view", { staticClass: "ub-f1 ub item_mid" }, [
                  _c("view", { staticClass: "item_label" }, [_vm._v("三围")]),
                  _c("view", { staticClass: "ub-f1 item_input" }, [
                    _vm.BWHIndex.length
                      ? _c("view", { staticClass: "picker-value" }, [
                          _vm._v(
                            " 胸围" +
                              _vm._s(_vm.BWHs[0][_vm.BWHIndex[0]]) +
                              " 腰围" +
                              _vm._s(_vm.BWHs[1][_vm.BWHIndex[1]]) +
                              " 臀围" +
                              _vm._s(_vm.BWHs[2][_vm.BWHIndex[2]]) +
                              " "
                          ),
                        ])
                      : _c("view", { staticClass: "picker" }, [
                          _vm._v("请选择"),
                        ]),
                  ]),
                ]),
                _c("view", { staticClass: "item_right" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: "https://yuepai-oss.qubeitech.com/static/images/right.png",
                    },
                  }),
                ]),
              ]),
            ]
          ),
          _c(
            "picker",
            {
              attrs: {
                range: _vm.shoes,
                value: _vm.shoeIndex ? _vm.shoeIndex : 18,
              },
              on: { change: _vm.shoeChange },
            },
            [
              _c("view", { staticClass: "item ub" }, [
                _c("view", { staticClass: "ub-f1 ub item_mid" }, [
                  _c("view", { staticClass: "item_label" }, [_vm._v("鞋码")]),
                  _c("view", { staticClass: "ub-f1 item_input" }, [
                    _vm.shoeIndex === ""
                      ? _c("view", { staticClass: "picker" }, [
                          _vm._v("请选择"),
                        ])
                      : _c("view", { staticClass: "picker-value" }, [
                          _vm._v(_vm._s(_vm.shoes[_vm.shoeIndex])),
                        ]),
                  ]),
                ]),
                _c("view", { staticClass: "item_right" }, [
                  _c("image", {
                    attrs: {
                      mode: "aspectFit",
                      src: "https://yuepai-oss.qubeitech.com/static/images/right.png",
                    },
                  }),
                ]),
              ]),
            ]
          ),
        ],
        1
      ),
      _c("view", { staticClass: "bottom_gap" }),
      _c(
        "cover-view",
        {
          class:
            "subbtn_bottom_block " +
            (_vm.isIphoneX ? "fix-iphonex-button" : ""),
        },
        [
          _c("cover-view", { staticClass: "subbtn_bottom" }, [
            _c("button", { on: { tap: _vm.sub } }, [_vm._v("下一步")]),
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

/***/ "./src/packageMoka/pages/moka/inforother/index.scss":
/*!**********************************************************!*\
  !*** ./src/packageMoka/pages/moka/inforother/index.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/inforother/index.vue":
/*!*********************************************************!*\
  !*** ./src/packageMoka/pages/moka/inforother/index.vue ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/inforother/index.vue");


var config = {"navigationBarTitleText":"她/他的模卡资料"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/inforother/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/inforother/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/inforother/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/inforother/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/inforother/index.vue?vue&type=template&id=6b564441&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/inforother/index.vue?vue&type=template&id=6b564441&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6b564441_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6b564441&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/inforother/index.vue?vue&type=template&id=6b564441&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6b564441_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6b564441_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/inforother/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map