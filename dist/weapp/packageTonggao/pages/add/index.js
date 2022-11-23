(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageTonggao/pages/add/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/add/index.vue":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/add/index.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1193e09e&scoped=true& */ "./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "1193e09e",
  "43158928"
  
)

component.options.__file = "src/packageTonggao/pages/add/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/packageTonggao/pages/add/index.scss");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "addtonggao",
  data: function data() {
    return {
      identity: "",
      identityIndex: "",
      identityList: [],
      select_city: "",
      regionList: [],
      date: "",
      checked: false,
      sexData: [{
        name: "男",
        value: 1,
        ispick: true
      }, {
        name: "女",
        value: 0,
        ispick: false
      }, {
        name: "不限",
        value: 100,
        ispick: false
      }]
    };
  },
  methods: {
    identityChange: function identityChange() {},
    bindRegionChange: function bindRegionChange(e) {
      this.select_city = e.detail.value.join("-");
      this.regionList = e.detail.code;
    },
    checkClick: function checkClick() {
      this.checked = !this.checked;
    },
    select_tag: function select_tag(row) {
      //   let result = this.identity.find((ele) => ele === row.role);
      //   if (!result) {
      //     if (this.identity.length > 2) {
      //       errortip("最多选择3个身份！");
      //       return false;
      //     }
      //     this.identity.push(row.role);
      //   } else {
      //     const index = this.identity.findIndex((ele) => ele === row.role);
      //     this.identity.splice(index, 1);
      //   }
      row.ispick = !row.ispick;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "add-tonggao" }, [
    _c("view", { staticClass: "tonggao-box" }, [
      _c("view", { staticClass: "tonggao-item" }, [
        _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 通告类型 ")]),
        _c("view", { staticClass: "tonggao-rt" }, [_vm._v(" 发型创作 ")]),
      ]),
      _c("view", { staticClass: "tonggao-item" }, [
        _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 面向身份 ")]),
        _c(
          "view",
          { staticClass: "tonggao-rt" },
          [
            _c(
              "picker",
              {
                staticClass: "tonggao-select",
                attrs: {
                  value: _vm.identityIndex,
                  range: _vm.identityList,
                  "range-key": "value",
                },
                on: { change: _vm.identityChange },
              },
              [
                _vm.identity
                  ? _c("view", { staticClass: "tonggao-select-item" }, [
                      _vm._v(_vm._s(_vm.identity)),
                    ])
                  : _c("view", { staticClass: "tonggao-select-item" }, [
                      _vm._v("请选择"),
                    ]),
              ]
            ),
          ],
          1
        ),
      ]),
      _c("view", { staticClass: "tonggao-item" }, [
        _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 面向地区 ")]),
        _c(
          "view",
          { staticClass: "tonggao-rt" },
          [
            _c(
              "picker",
              {
                staticClass: "tonggao-select",
                attrs: { mode: "region", value: "region" },
                on: { change: _vm.bindRegionChange },
              },
              [
                _vm.select_city
                  ? _c("view", { staticClass: "tonggao-select-item" }, [
                      _vm._v(_vm._s(_vm.select_city)),
                    ])
                  : _c("view", { staticClass: "tonggao-select-item" }, [
                      _vm._v("请选择公告面向地区"),
                    ]),
              ]
            ),
          ],
          1
        ),
      ]),
      _c("view", { staticClass: "tonggao-item" }, [
        _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 截止日期 ")]),
        _c("view", { staticClass: "tonggao-rt" }, [
          _c(
            "view",
            { staticClass: "tonggao-dete" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.date,
                    expression: "date",
                  },
                ],
                staticClass: "tonggao-name",
                attrs: { placeholder: "清选择报名截止日期" },
                domProps: { value: _vm.date },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.date = $event.target.value
                  },
                },
              }),
              _c("text", { staticClass: "tonggao-split" }, [_vm._v("|")]),
              _c("text", { staticClass: "long-term" }, [_vm._v("长期")]),
              _c("checkbox", {
                attrs: { checked: _vm.checked },
                on: { tap: _vm.checkClick },
              }),
            ],
            1
          ),
        ]),
      ]),
      _c("view", { staticClass: "tonggao-item" }, [
        _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 性别要求 ")]),
        _c("view", { staticClass: "tonggao-rt" }, [
          _c(
            "view",
            { staticClass: "tags" },
            _vm._l(_vm.sexData, function (item, index) {
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
      ]),
    ]),
    _c("view", { staticClass: "tonggao-box" }, [
      _c("view", { staticClass: "tonggao-item" }, [
        _c("view", { staticClass: "tonggao-left" }, [_vm._v(" 通告费用 ")]),
        _c("view", { staticClass: "tonggao-rt" }, [_vm._v(" 发型创作 ")]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageTonggao/pages/add/index.scss":
/*!*************************************************!*\
  !*** ./src/packageTonggao/pages/add/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageTonggao/pages/add/index.vue":
/*!************************************************!*\
  !*** ./src/packageTonggao/pages/add/index.vue ***!
  \************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageTonggao/pages/add/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageTonggao/pages/add/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/add/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1193e09e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageTonggao/pages/add/index.vue?vue&type=template&id=1193e09e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1193e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageTonggao/pages/add/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map