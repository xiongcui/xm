(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/register/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/register/index.vue":
/*!************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/register/index.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1a38522c&scoped=true& */ "./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/register/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "1a38522c",
  "54b88990"
  
)

component.options.__file = "src/pages/register/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/register/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/pages/register/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import weCropper from "../we-cropper/index.vue";



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "register",
  data: function data() {
    return {
      avatar: "",
      nickname: "",
      visible: false,
      sex: "",
      date: "",
      identity: "",
      select_city: "",
      // region:["北京市", "北京市", "朝阳区"],
      region: [],
      regionList: [],
      multiArray: [],
      //地区
      type: 0,
      multiIndex: [0, 0, 0],
      identityList: ["摄影师", "模特", "化妆师", "修图师", "商家", "经纪人", "造型师", "素人模特"]
    };
  },
  // components: {
  //   weCropper,
  // },
  methods: {
    chooesImage: function chooesImage() {
      this.visible = true;
    },
    sexChange: function sexChange(index) {
      this.sex = index;
    },
    dateChange: function dateChange(e) {
      this.date = e.detail.value;
    },
    bindRegionChange: function bindRegionChange(e) {
      console.log(e);
      this.select_city = e.detail.value.join("-");
    },
    // identityChange(e) {
    //   this.identity = this.identityList[e.detail.value];
    // },
    identityFocus: function identityFocus() {// openPage()
    },
    submit: function submit() {
      var params = {
        nickname: this.nickname,
        sex: this.sex,
        birthday: this.date,
        select_city: this.select_city,
        career_label: this.identity,
        avatar: this.avatar
      }; // career_label: [
      //   {
      //     career_id: "",
      //     role: "摄影师",
      //   },
      // ];

      this.updateUser({});
      console.log(params);
    },
    // async getArea(params) {
    //   try {
    //     let res = await getArea(params);
    //     console.log(res, "=========");
    //     this.multiArray = res.data.data.map((item, index) => {
    //       return {
    //         id: item.code,
    //         name: item.name,
    //       };
    //     });
    //     console.log(this.multiArray);
    //   } catch (error) {}
    // },
    getArea: function getArea(type, arr, params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* getArea */ "a"])(params);

              case 3:
                res = _context.sent;
                console.log(res, "========="); // let arr = [];

                if (type == 0) {
                  arr[type] = res.data.data.map(function (item, index) {
                    return {
                      id: item.code,
                      name: item.name
                    };
                  });
                }

                if (type == 1) {
                  console.log("ekwekek");
                  arr[type] = res.data.data.city.map(function (item, index) {
                    return {
                      id: item.code,
                      name: item.name
                    };
                  });
                }

                if (type < 1) {
                  _this.getcitycode(type + 1, arr, {
                    province_code: res.data.data[0].code
                  });
                } // if (type < 2) {
                //   this.getcitycode(type + 1, {
                //     province_code: res.data.data[0].code,
                //   });
                // }


                _this.multiArray = arr;
                console.log(arr, type, "---multiArray");
                _context.next = 14;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }))();
    },
    getcitycode: function getcitycode(type, arr, params) {
      // var self = this;
      // var { multiArray, multiIndex, params, street } = this.data;
      this.getArea(type, arr, params); // app.ajax(
      //   {
      //     code,
      //     url: "/shenshiqu",
      //   },
      //   function (result) {
      //     multiArray[type] = result.data.data;
      //     if (type < 2)
      //       self.getcitycode(type + 1, result.data.data[index].taobaoid);
      //   }
      // );
    },
    // 获取省市区
    updateUser: function updateUser(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* updateUser */ "c"])(params);

              case 3:
                res = _context2.sent;
                console.log("成功！", res);
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
    var userInfo = wx.getStorageSync("userInfo");
    this.avatar = userInfo.avatar;
    this.nickname = userInfo.nickname; // this.getArea("");
    // this.getcitycode(this.type, [], "");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("view", [
    _c("form", { staticClass: "main", attrs: { bindreset: "reset" } }, [
      _c("view", { staticClass: "top" }, [
        _c("view", { staticClass: "avatar", on: { tap: _vm.chooesImage } }, [
          _vm.avatar
            ? _c("image", { attrs: { mode: "aspectFit", src: _vm.avatar } })
            : _c("image", {
                staticClass: "no_avatar",
                attrs: { mode: "aspectFit" },
              }),
        ]),
      ]),
      _c("view", { staticClass: "infor" }, [
        _c("view", { staticClass: "item ub item-b" }, [
          _c("view", { staticClass: "item_label" }, [_vm._v("昵称")]),
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
                placeholder: "请输入你的昵称",
                placeholderClass: "nickname_tip",
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
        _c("view", { staticClass: "item ub item-b" }, [
          _c("view", { staticClass: "item_label" }, [_vm._v("性别")]),
          _c("view", { staticClass: "ub-f1 item_input" }, [
            _vm.sex === 1
              ? _c("image", {
                  staticClass: "select_sex",
                  attrs: {
                    "data-sex": "1",
                    src: __webpack_require__(/*! ../../assets/images/six1ed.png */ "./src/assets/images/six1ed.png"),
                  },
                  on: {
                    tap: function ($event) {
                      return _vm.sexChange(1)
                    },
                  },
                })
              : _c("image", {
                  staticClass: "select_sex",
                  attrs: {
                    "data-sex": "1",
                    src: __webpack_require__(/*! ../../assets/images/six1.png */ "./src/assets/images/six1.png"),
                  },
                  on: {
                    tap: function ($event) {
                      return _vm.sexChange(1)
                    },
                  },
                }),
            _vm.sex === 0
              ? _c("image", {
                  staticClass: "select_sex",
                  attrs: {
                    "data-sex": "2",
                    src: __webpack_require__(/*! ../../assets/images/six2ed.png */ "./src/assets/images/six2ed.png"),
                  },
                  on: {
                    tap: function ($event) {
                      return _vm.sexChange(0)
                    },
                  },
                })
              : _c("image", {
                  staticClass: "select_sex",
                  attrs: {
                    "data-sex": "2",
                    src: __webpack_require__(/*! ../../assets/images/six2.png */ "./src/assets/images/six2.png"),
                  },
                  on: {
                    tap: function ($event) {
                      return _vm.sexChange(0)
                    },
                  },
                }),
          ]),
        ]),
        _c("view", { staticClass: "item ub item-b" }, [
          _c("view", { staticClass: "item_label" }, [_vm._v("生日")]),
          _c(
            "view",
            { staticClass: "ub-f1 item_input" },
            [
              _c(
                "picker",
                {
                  attrs: {
                    end: "2020-09-01",
                    mode: "date",
                    start: "1960-09-01",
                    value: "2000-01-01",
                  },
                  on: { change: _vm.dateChange },
                },
                [
                  _vm.date
                    ? _c("view", { staticClass: "picker_children picked" }, [
                        _vm._v(_vm._s(_vm.date)),
                      ])
                    : _c("view", { staticClass: "picker_children" }, [
                        _vm._v("请选择生日"),
                      ]),
                ]
              ),
            ],
            1
          ),
        ]),
        _c("view", { staticClass: "item ub item-b" }, [
          _c("view", { staticClass: "item_label" }, [_vm._v("地区")]),
          _c(
            "view",
            { staticClass: "ub-f1 item_input" },
            [
              _c(
                "picker",
                {
                  attrs: {
                    mode: "multiSelector",
                    bindchange: "bindMultiPickerChange",
                    bindcolumnchange: "bindMultiPickerColumnChange",
                    "range-key": "name",
                    value: _vm.multiIndex,
                    range: _vm.multiArray,
                  },
                },
                [
                  _c("view", { staticClass: "picker flex-r" }, [
                    _c("view", { staticClass: "bold" }, [
                      _c("text", { staticClass: "c-f00" }, [_vm._v("*")]),
                      _vm._v("地区"),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          ),
        ]),
        _c("view", { staticClass: "item ub item-b" }, [
          _c("view", { staticClass: "item_label" }, [_vm._v("身份")]),
          _c("view", { staticClass: "ub-f1 item_input" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.identity,
                  expression: "identity",
                },
              ],
              attrs: {
                maxlength: "60",
                name: "identity",
                placeholder: "请选择身份",
                placeholderClass: "nickname_tip",
                type: "text",
              },
              domProps: { value: _vm.identity },
              on: {
                blur: _vm.identityFocus,
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.identity = $event.target.value
                },
              },
            }),
          ]),
        ]),
      ]),
      _c("view", { staticClass: "savebox" }, [
        _c("button", { staticClass: "save-btn", on: { tap: _vm.submit } }, [
          _vm._v("完 成"),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/six1.png":
/*!************************************!*\
  !*** ./src/assets/images/six1.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAyCAMAAACKyR5FAAAAk1BMVEUAAADx8fH39/fy8vLx8fHy8vLx8fHy8vLx8fHy8vLx8fHz8/Py8vLw8PD09PTz8/Pq6ur////x8fHx8fHz8/Px8fGZmZmioqLg4ODPz8/q6uqmpqbk5OSxsbHGxsbv7++7u7ucnJzLy8vd3d3n5+efn5++vr7Y2Ni4uLi1tbWqqqrV1dXs7OzBwcGurq65ubnu7u66OOa6AAAAFXRSTlMAuR747uvc1qmgkntfVy8WDAWWx5ZoQ91NAAACtElEQVRYw82Y63aiMBSFofXSemmr7dmBIGAQEEHpvP/TzdBUxEiio8XV79dZYS02OZxbYp3yMBnZg/4j3cBjf2CPJg/WWR7GQ/oxhmOz4ssT/TBPL1qx12fqgOfXdrVpjzqhN20Rm82pM+YzVe3Npg6x3xS1d+qU9yO9mU0dYzf9+UGdM2/EJN2BaZ1vPboDvX3+XZbdYYkvvLhe4m4LjjbfvysXXUSMb9x6yUELAemQ9ezSOumm6UaVE0uJgC8NzyD39NUDzjkx5iFJuKfKJSRhWEnj0yBHVX8Yk4FVygCIMuLfavktcuN/cob+tvCxJ4nCSm3jKM50JAyuNHyT3NDoy7UAUO6i4DMB4FdqoXN1qEhvTvRqALKF/H8uAyo1ioGiKedLBHJpMKPcxBppAz9pboSXgFeFTBGFV/87Glna4pxVage2HuBI83o52xrowgTwlXdjcyrHJQxraWRGuYHVp3aCk81sILbSujpU+pZunizB1KoCrBU5r4XINH9q5ViL66B71ZYr+9bJaZ0pkCorXO+oDDu6hL42VBgyNXj0u/Pg0iUMtImQI1dWCpnhNTGrARJWkxoSQZvmOyCmI5YAP5JDO5+mNJ/oegGUnxcLlNQkXOxh2NV2hqWhiOlLdAmsmi/36zxQcSF4I2pSY8Mb6reXOAe1FPCpFUc049LUgYam9hoBYl+PHR9gvP2zGPI/zRBzDe3V1PACAGxXrNaRD8BbtCZ4IMCaTxhWel+aR6OCoWbTtjceMSCPj5qk2BpGI/Pgtw1yVCRZyyfH7kYAyd7fiyCIolQgMwx+58faeFWsnZBOCRkAFvBDjfsi59qx9rahPWDpOmyGVrpc7oqQtEP7bUeSkP6LqVUzp86Z3/04ef/D8v2vAiSzDg/MH7O7XuP8hkuqjq7gfs8FY+fXp38Btx6noejIUSwAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/six1ed.png":
/*!**************************************!*\
  !*** ./src/assets/images/six1ed.png ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAyCAMAAACKyR5FAAAAqFBMVEUAAABUj/9Uj/9Vkf9Uj/9UkP9Vj/9Uj/9Uj/9UkP9Uj/1Uj/9Tjv9VkP9Xjf9Ri/9VgP9VkP9Uj/7////r8v7j7f5tn/5hl/7T4v6Yu/52pf78/f680/5yo/7z9/7B1v75+/6px/57qP630P6TuP7o8P7M3v7G2v6cvv6Drv5kmf7t8/6hwf5clP5Xkf6wy/6nxf5pnP5WkP7b6P6Jsf7e6f6Xu/6NtP6UlpMaAAAAEnRSTlMA7bke+NzWqaCWkntfVy8WDMdqPAmBAAACuklEQVRYw82Y2XqiQBCFlURNXLLUQSGiQEAWBQXXvP+bzZg2RLC7w8TA5L/qjwsO1dSpqu7GJTf9rtJq3tIV3DZbSrd/0/iSm16bfox2T6740KEfpvMgFHu8owq4e+SrDZpUCc0BT+2eKuP+QuxJoQpRngpqz1Qpz3k9hSpGqfK/yf/fgGpgkPmtSTXQ/PBfOXevdOMdb5090l44jIV+P1UuKsUCJ2bZozE4vJIIVs/K1sk31w2KcvaEYcJnC08i13nvAV9t4kLLAhwW5UxieHDYwpLI0bE/9EiC46oAbD1entT218j1/spJ+tvIxwdm/K4WjAtyU0aEGVv4Mrm2dC/nJmDoSZxaEQD/qLaafjtV2G72xWoGYLGs38xU4KhGa2B3JmfoDBtbtoikcv1GlwSsTRifgWg6MFwd8zOkb/876oqLswUc6JPlEAZz8BVySqMlShPAL7wbwaWcxlAxZ4tAKtdqiOplChSC8WEv2erbqdJsiOZJHR7lmQFzyjEdcghl86dQTkVwub2iVy21JZXhVriZNlzKowGpMK2Sck1ImCoRrPLRDTGjMrSERthiT3l2zOEZCzXDgKlmuBIjCG2eAGvKMYGh5eoA+FgSmwuLmIPCz1vb0HMPNqMPVCTZ2sJEUsTEJVqH4eRthzlxOcDWzrLGlTa8tig8A+b4MxQX8InL1EZy/pWpuAHJ2msI2OHqlJU64Gn8z4qwXZ2n2EHSXmUNLwWgJm/OPPQNYDjiGjy1EY1yBnLEeykfjXYRMgJebFqsAtvFeZNkhZVL56vBbxnv2ehgjTmT4CGwATPcnPb7NQ5fXFvig4cSY+3CeZtPV/yqCnixlkVq4MheE4611w3tqefmnBG7k0my24iH9uuOJBv6Jwb1HrjqPU7WfFiu9yqg1ouO/3+NU90l1e+4gqvhgrHm69M/HYN03ME0BNgAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/six2.png":
/*!************************************!*\
  !*** ./src/assets/images/six2.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAyCAMAAACKyR5FAAAAkFBMVEUAAADx8fH39/fy8vLx8fHy8vLx8fHy8vLx8fHy8vLx8fHz8/Py8vLw8PD09PTz8/Pq6ur////x8fHx8fHz8/Px8fGZmZnT09OxsbHu7u65ubmioqLq6uqcnJzBwcHm5ubf39/FxcW+vr6rq6uenp7Y2Njb29vJycmurq6mpqbMzMy0tLTj4+PPz8/Q0NCwsLBk3zxkAAAAFXRSTlMAuR747uvc1qmgkntfVy8WDAWWx5ZoQ91NAAACs0lEQVRYw82Y2XLqMBBEbQg7WSCZNrLxvoNN/v/vrsNysRCSlUpM5bziomuk6R5JhshgOTfHoyH9gOFobM6XA6OTwWJCv8ZkoVZ8mdIvM32Rir3OqAdmr/fVnp+oF56eDZHVmnpjvbpVezOpR8y3G7V36pV3Tm9lUs+Y7fX8oN5Zt3qSHsDzf791OGBbZRUjGVa91fPDxX8zpVYYA3BR7CSKDiJNv5+TixTsElxwLLpDClSkxynPVDm5/5LxdlYefcmGd78otPPzOANIjg04BzrCchfIhS984EC6fM2HhWIlgdKnC1kCpHRDiISRLotGbiLvkgSOT1cyFyXxMAceaTNRrmUI1NTGA87tEmxOxEC84QmUq7kkKTGSm3IB+1wopGQkZ2nMSQaD4KgCzlnYOuIBuXVmBxysBpXp54Y8nH2xEz2A2mwQX9MFZXdQG2OSEQC1uJtb/gurZZrudBkbo+9UFwGcxVsFsQQpdTEyhqq9s4XmcbjiWhY/ND91MlTI0SdcdltvxBd3/T1GqCM3UoYKv5o21+YVUFoXvRquxhwaca0iRobbNq0FLo6ryAWSKDgHUEjdjEUj8P+Pq14KTr2B1QWAz5RYAYdRN+aNzUWfuR47GTsCIE68ygZQ7oGANJgLISYYDe7eC70CkIwa33PB9bAyxAakJC1xIZYUsN2jYePrDbwJKWHWPgHg2DITBw7g2YCb6wwgY0GdfMrXyreBJCVKHaCoNMbrgNSwMC8R5zvpvhX+pZXcumstG6akxMYJT9izuuDOZ5kDRCo7TMWDn4jl3hubqRejodyxlv4GiP2ug58x09o7sebEzgTfKBwx0zy0UyQmVBCHGSOB1Gadh/buK4lPP6d1ZV5T76wffJ187GX50U8BPKseL8wfq4c+4/yFR6qenuD+zgNj78+n/wCji6RvCgEo6wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/six2ed.png":
/*!**************************************!*\
  !*** ./src/assets/images/six2ed.png ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAyCAMAAACKyR5FAAAAtFBMVEUAAAD/VFf/VVn/VFf/VFf+VFf/VVf/VFf/VVf/VFj/VFj/VFf9VFf/VFb/U1b/VVj/V1f/UVH/VVX/Zmb/VVf+VFf////+/Pz+0NH+jpD++fr+V1r+ZWf+goT+6ur+tLX+qqv+lJX+oKH+cnT+Wl3+8vL+19j+mpz+iYv+a23+5eX+v8D+ubv+r7H+en3+dnn+XmH+9vb+7u/+09T+pab+3+D+zM3+29z+x8j+wsP+vL3+4uJ0s6oJAAAAFXRSTlMAuR78+O7r3NapoJaSe19XLxYMBceApbSNAAAC40lEQVRYw83Y13biMBAGYMEm9JI2/+CCC2DTSWih5P3fa1kIaxsjW7uJOfm4gYMPQuOZkSwRl2/UcsXCHX3BXaGYqzXyIlW+XqJvU6onj/hQ/kXf6lf5Qcg8VigDlUdxVfOeMnHfFHHPVcpM9VlceMpRhnJPF6O9UKZeIuM95yhjuXA8q5S5aign6Qaaf+stpQLeurNhj2Q011Srh3P9VRLHWm1YP7yWfYOusmAr1vtn56IEfQ9n1oCuGABdUnPqZ2WS2zLYmva1zsQ7vHMo7h0+KSof14CErjwGLJeOjM4c6NAlk+Eq9+s/60M9IZKMjyAPZgtwmy448Hqkqn4YriTPkgVGQwq86lhTlLGATcpKh1iS1AocDdQU/Jku3daJD6xbUUmJkxcNkvKxuJiujgkdtSHVJrmGqJFMj2OBap3/gKkdTYGO9qkPuNpBUtHXhLw5D/VYJk7BF1WwCboLPtIbtSiSzGs8xx1wL3wFEJT+XiFpiqLwL7OzwdHJjYLQe2hTmoKQ7ycNHZNY8owo0EVo+i4shf1nwnDUgmdQmBlNni1GwfdrOCrDFRKbSjSa+0hb6TI+NON8LeYmKQSzSFKGhXm4aAeMJQWGkzng2ccrTA8OpSvGCyH6+/wafNKhd6OV6foAWm0ylrBUWmfuUOYJHIbunH7HnDCg0aXumIH1Nvy3Esu8QUlWDOjb6Wq6ZIA1usK05wDGpKIh8pSoPWKcsC+ZwNs7DlpDSpcPFiAJY7BbAGztZUU8s8DODph3VBYgUadULXmszD3DaxO1LcBPm2A92DxI9VadETad/tU+Z+vAcni8zGbobvrmQZQp0QQnTuyeuUsAo0EoqpgYaVsj8UCJNJ0BZsyiKTTdMIB134jmjG+mbfxE5T/u3Q6AN57F6jShIiqKm3ayeRVbDH1nZlypm50h37QrP5KY9HXN2z5w3fhx8rYPy7c9CrjtQcdNj3F+wiFVRkdwP+eAMfPj0999LqqpV/qFpwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/pages/register/index.scss":
/*!***************************************!*\
  !*** ./src/pages/register/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/register/index.vue":
/*!**************************************!*\
  !*** ./src/pages/register/index.vue ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/register/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/register/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/register/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/pages/register/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1a38522c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/register/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map