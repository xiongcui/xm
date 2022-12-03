(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/addressedit/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/addressedit/index.vue":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/addressedit/index.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_61802233_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=61802233&scoped=true& */ "./src/packageAdd/pages/user/addressedit/index.vue?vue&type=template&id=61802233&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/addressedit/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_61802233_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_61802233_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "61802233",
  "32c5e1b6"
  
)

component.options.__file = "src/packageAdd/pages/user/addressedit/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addressedit/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/addressedit/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/addressedit/index.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "addressedit",
  data: function data() {
    return {
      isIphoneX: false,
      data: {
        contact_name: "熊翠",
        phone: 13693628075
      },
      tags: [{
        ispick: false,
        name: "家"
      }, {
        ispick: false,
        name: "公司"
      }, {
        ispick: false,
        name: "学校"
      }],
      address: "惠新里223号楼",
      region_name: "",
      region: [],
      switch_selct: false,
      showModel_del: false,
      showDel: false
    };
  },
  methods: {
    bindRegionChange: function bindRegionChange(e) {
      this.region_name = e.detail.value.join("-");
      this.region = e.detail.code;
    },
    select_tag: function select_tag(row) {
      this.tags.map(function (item, idenx) {
        item.ispick = false;
      });
      row.ispick = true;
    },
    showModeldel: function showModeldel() {
      this.showModel_del = true;
    },
    closeModel_del: function closeModel_del() {
      this.showModel_del = false;
    },
    del_address: function del_address() {
      this.showModel_del = false;
    }
  },
  created: function created() {
    this.isIphoneX = this.globalData.isIphoneX;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addressedit/index.vue?vue&type=template&id=61802233&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/addressedit/index.vue?vue&type=template&id=61802233&scoped=true& ***!
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
  return _c("view", [
    _c(
      "form",
      {
        staticClass: "main",
        attrs: { bindreset: "reset", bindsubmit: "sub", reportSubmit: "true" },
      },
      [
        _c("view", { staticClass: "line_gap" }),
        _c("view", { staticClass: "address_info item" }, [
          _c("view", { staticClass: "info_contact item_child bb1 ub" }, [
            _c("view", { staticClass: "contact info_title" }, [
              _vm._v("收件人"),
            ]),
            _c("view", { staticClass: "contact_value info_value ub-f1" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data.contact_name,
                    expression: "data.contact_name",
                  },
                ],
                attrs: {
                  cursorSpacing: "10",
                  maxlength: "15",
                  name: "contact_name",
                  placeholder: "请填写收货人姓名",
                  placeholderClass: "value_placeholder",
                  type: "text",
                },
                domProps: { value: _vm.data.contact_name },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data, "contact_name", $event.target.value)
                  },
                },
              }),
            ]),
          ]),
          _c("view", { staticClass: "info_contact item_child bb1 ub" }, [
            _c("view", { staticClass: "contact info_title" }, [
              _vm._v("手机号码"),
            ]),
            _c("view", { staticClass: "contact_value info_value ub-f1" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data.phone,
                    expression: "data.phone",
                  },
                ],
                attrs: {
                  cursorSpacing: "10",
                  maxlength: "15",
                  name: "contact_phone",
                  placeholder: "收货人手机号",
                  placeholderClass: "value_placeholder",
                  type: "number",
                },
                domProps: { value: _vm.data.phone },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data, "phone", $event.target.value)
                  },
                },
              }),
            ]),
          ]),
          _c("view", { staticClass: "info_contact item_child bb1 ub" }, [
            _c("view", { staticClass: "contact info_title region_title" }, [
              _vm._v("所属地区"),
            ]),
            _c(
              "view",
              { staticClass: "region contact_value ub-f1 ub" },
              [
                _c(
                  "picker",
                  {
                    staticClass: "ub-f1 region-picker",
                    attrs: { mode: "region" },
                    on: { change: _vm.bindRegionChange },
                    model: {
                      value: _vm.region,
                      callback: function ($$v) {
                        _vm.region = $$v
                      },
                      expression: "region",
                    },
                  },
                  [
                    _vm.region.length
                      ? _c("view", { staticClass: "info_value" }, [
                          _vm._v(_vm._s(_vm.region_name)),
                        ])
                      : _c("view", { staticClass: "value_placeholder" }, [
                          _vm._v("选择省市区县、乡镇等"),
                        ]),
                  ]
                ),
              ],
              1
            ),
            _c("view", { staticClass: "gap_line" }, [
              _c("image", {
                attrs: {
                  src: __webpack_require__(/*! ../../../../assets/images/user/index/right.png */ "./src/assets/images/user/index/right.png"),
                },
              }),
            ]),
          ]),
          _c("view", { staticClass: "info_contact item_child ub" }, [
            _c("view", { staticClass: "contact info_title" }, [
              _vm._v("详细地址"),
            ]),
            _c("view", { staticClass: "contact_value" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data.address,
                    expression: "data.address",
                  },
                ],
                staticClass: "info_value",
                attrs: {
                  cols: "30",
                  disableDefaultPadding: "true",
                  name: "contact_address",
                  placeholder:
                    "详细地址：如道路、门牌号、小区、楼栋号、单元室等",
                  placeholderClass: "value_placeholder",
                  rows: "10",
                },
                domProps: { value: _vm.data.address },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data, "address", $event.target.value)
                  },
                },
              }),
            ]),
          ]),
        ]),
        _c("view", { staticClass: "line_gap" }),
        _c("view", { staticClass: "address_set item" }, [
          _c("view", { staticClass: "set_lable item_child bb1 ub" }, [
            _c("view", { staticClass: "set_title" }, [_vm._v("地址标签")]),
            _c("view", { staticClass: "ub-f1" }),
            _c(
              "view",
              { staticClass: "ub" },
              _vm._l(_vm.tags, function (item, index) {
                return _c(
                  "view",
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
                  [_vm._v(" " + _vm._s(item.name))]
                )
              }),
              0
            ),
          ]),
          _c("view", { staticClass: "set_default item_child ub" }, [
            _c("view", { staticClass: "set_title" }, [_vm._v("设为默认地址")]),
            _c("view", { staticClass: "ub-f1" }),
            _c("view", { staticClass: "check_btn" }, [
              _c("switch", {
                attrs: {
                  bindchange: "switch_selct",
                  checked: _vm.switch_selct,
                  color: "#fe5457",
                },
              }),
            ]),
          ]),
        ]),
        _vm.showDel
          ? _c(
              "view",
              { staticClass: "address_del", on: { tap: _vm.showModeldel } },
              [_vm._v("删除收货地址")]
            )
          : _vm._e(),
        _c(
          "view",
          {
            staticClass: "subbtn_bottom_block",
            class: _vm.isIphoneX ? "fix-iphonex-button" : "",
          },
          [
            _c("view", { staticClass: "subbtn_bottom" }, [
              _c("button", { attrs: { formType: "submit" } }, [_vm._v("保存")]),
            ]),
          ]
        ),
      ]
    ),
    _vm.showModel_del
      ? _c("view", {
          staticClass: "modal-bg",
          attrs: { catchtap: "closeModelPledge" },
        })
      : _vm._e(),
    _vm.showModel_del
      ? _c("view", { staticClass: "model_box ub" }, [
          _c("view", { staticClass: "ub-f1" }),
          _c("view", { staticClass: "model_main" }, [
            _c("view", { staticClass: "model_title" }, [
              _c("view", [_vm._v("确定要删除该地址吗？")]),
            ]),
            _c("view", { staticClass: "model_btn ub" }, [
              _c("view", { staticClass: "ub-f1" }),
              _c(
                "view",
                { staticClass: "btn_no", on: { tap: _vm.closeModel_del } },
                [_vm._v("取消")]
              ),
              _c("view", { staticClass: "ub-f1" }),
              _c(
                "view",
                { staticClass: "btn_yes", on: { tap: _vm.del_address } },
                [_vm._v("删除")]
              ),
              _c("view", { staticClass: "ub-f1" }),
            ]),
          ]),
          _c("view", { staticClass: "ub-f1" }),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/addressedit/index.scss":
/*!**********************************************************!*\
  !*** ./src/packageAdd/pages/user/addressedit/index.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/addressedit/index.vue":
/*!*********************************************************!*\
  !*** ./src/packageAdd/pages/user/addressedit/index.vue ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/addressedit/index.vue");


var config = {"navigationBarTitleText":"编辑收货地址"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/addressedit/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/addressedit/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/packageAdd/pages/user/addressedit/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addressedit/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/addressedit/index.vue?vue&type=template&id=61802233&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/addressedit/index.vue?vue&type=template&id=61802233&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_61802233_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=61802233&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/addressedit/index.vue?vue&type=template&id=61802233&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_61802233_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_61802233_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/addressedit/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map