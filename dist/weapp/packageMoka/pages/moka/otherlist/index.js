(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMoka/pages/moka/otherlist/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/otherlist/index.vue":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/otherlist/index.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7b66f422&scoped=true& */ "./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "7b66f422",
  "7c4532bd"
  
)

component.options.__file = "src/packageMoka/pages/moka/otherlist/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/packageMoka/pages/moka/otherlist/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "otherlist",
  data: function data() {
    return {
      noneData: false,
      listdata: [{
        nickname: "nickname",
        sex: 1,
        height: 29,
        weight: 99,
        timetext: "1小时前",
        moka_num: 1
      }, {
        nickname: "nickname",
        sex: 1,
        height: 29,
        weight: 99,
        timetext: "1小时前",
        moka_num: 1
      }],
      itemIndex: 0
    };
  },
  methods: {
    goInforother: function goInforother(e) {
      var id = e.currentTarget.dataset.id;
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* openPage */ "c"])("/packageMoka/pages/moka/inforother/index?sub_user_id=" + id);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "otherlist" }, [
    _vm.noneData
      ? _c("view", { staticClass: "main ub ub-ver none_main" }, [
          _c(
            "view",
            {
              staticClass: "item_add ub",
              attrs: { "data-id": "" },
              on: { tap: _vm.goInforother },
            },
            [
              _c("view", { staticClass: "side_gap" }),
              _c("view", { staticClass: "ub-f1" }, [
                _c("view", { staticClass: "item_add_btn ub" }, [
                  _c("view", { staticClass: "ub-f1" }),
                  _c("view", { staticClass: "item_add_btn_img" }, [
                    _c("image", {
                      attrs: {
                        mode: "widthFix",
                        src: __webpack_require__(/*! ../../../../assets/images/moka/makecard/addbtn.png */ "./src/assets/images/moka/makecard/addbtn.png"),
                      },
                    }),
                  ]),
                  _c("view", { staticClass: "item_add_btn_text" }, [
                    _vm._v("新增模卡资料"),
                  ]),
                  _c("view", { staticClass: "ub-f1" }),
                ]),
              ]),
              _c("view", { staticClass: "side_gap" }),
            ]
          ),
        ])
      : _c(
          "view",
          { staticClass: "main ub ub-ver" },
          [
            _c(
              "view",
              {
                staticClass: "item_add ub",
                attrs: { "data-id": "" },
                on: { tap: _vm.goInforother },
              },
              [
                _c("view", { staticClass: "side_gap" }),
                _c("view", { staticClass: "ub-f1" }, [
                  _c("view", { staticClass: "item_add_btn ub" }, [
                    _c("view", { staticClass: "ub-f1" }),
                    _c("view", { staticClass: "item_add_btn_img" }, [
                      _c("image", {
                        attrs: {
                          mode: "widthFix",
                          src: __webpack_require__(/*! ../../../../assets/images/moka/makecard/addbtn.png */ "./src/assets/images/moka/makecard/addbtn.png"),
                        },
                      }),
                    ]),
                    _c("view", { staticClass: "item_add_btn_text" }, [
                      _vm._v("新增模卡资料"),
                    ]),
                    _c("view", { staticClass: "ub-f1" }),
                  ]),
                ]),
                _c("view", { staticClass: "side_gap" }),
              ]
            ),
            _vm._l(_vm.listdata, function (item, itemIndex) {
              return _c("view", { key: itemIndex, staticClass: "item ub" }, [
                _c("view", { staticClass: "side_gap" }),
                _c(
                  "view",
                  {
                    staticClass: "ub-f1 item_content ub",
                    attrs: { "data-id": item.sub_user_id },
                    on: { tap: _vm.goInforother },
                  },
                  [
                    _c("view", { staticClass: "item_content_gap" }),
                    _c("view", { staticClass: "ub-f1" }, [
                      _c("view", { staticClass: "ub item_content_top" }, [
                        _c("view", { staticClass: "user_info" }, [
                          _c("view", { staticClass: "user_name" }, [
                            _vm._v(_vm._s(item.nickname)),
                          ]),
                          _c("view", { staticClass: "user_sex" }, [
                            _c("image", {
                              attrs: {
                                mode: "widthFix",
                                src: __webpack_require__("./src/assets/images/common sync recursive ^\\.\\/sex.*\\.png$")("./sex" +
                                  item.sex +
                                  ".png"),
                              },
                            }),
                          ]),
                        ]),
                        _c("view", [
                          _vm._v("做过 " + _vm._s(item.moka_num) + " 张模卡"),
                        ]),
                      ]),
                      _c("view", { staticClass: "ub item_content_bottom" }, [
                        _c("view", { staticClass: "user_tag" }, [
                          _c("text", [_vm._v(_vm._s(item.height) + "cm")]),
                          _c("text", [_vm._v(_vm._s(item.weight) + "kg")]),
                        ]),
                        _c("view", { staticClass: "ub-f1" }),
                        _c("view", { staticClass: "user_time" }, [
                          _vm._v(_vm._s(item.timetext) + "更新"),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _c("view", { staticClass: "side_gap" }),
              ])
            }),
          ],
          2
        ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/common sync recursive ^\\.\\/sex.*\\.png$":
/*!********************************************************!*\
  !*** ./src/assets/images/common sync ^\.\/sex.*\.png$ ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sex1.png": "./src/assets/images/common/sex1.png",
	"./sex2.png": "./src/assets/images/common/sex2.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/common sync recursive ^\\.\\/sex.*\\.png$";

/***/ }),

/***/ "./src/assets/images/common/sex1.png":
/*!*******************************************!*\
  !*** ./src/assets/images/common/sex1.png ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAANlBMVEX///8xl/s1mPxOqP8xl/ozl/s8nv8xl/sxl/szmPsxl/s2mvwyl/s0mPtjtf85m/tDof8xlvtjsYgqAAAAEXRSTlMDu2ES25ot6veFzFGodAo/HH7I8KMAAAFkSURBVDjLvZVbloQgDEQNb5WH7H+zE0RbgoSZ+en8dZ8rSSoVWJavR3CZhFsnsMpduAkslH3ipP9Y0voPuLJDWBpzxJ7V9g2ndasiKL3Hll1esCAK2CAftofTVhVSAFtt34oP28HhzL6a+suE81N/sxTW10lP7DVTZQlcWB9HklW2hQX+O5j9jtL4HjZuyCKNh+wdDDkDOzwrCZxQsIMZNXYZCAxMEVchNp6OrRaVeHBkXbTVqoUKtxR+sjEf9c7wOQseNjhXmshM3OyIK9Brcb6Msv10totFqyaxncO0SppnVEbk8gwabBPra6LjQC9sdKIwvQdaL0TH+2iJqivS04n201b9RLkWpb3d37aoxup52l6JwzI9YncuvfRBt8Dr7FjWe2DIst6qq/uAzHQuyoWoGwXl6jK7bqncbw6CkeXWFb6gjl2KQ9+Px/30wMwyxrcvFKRfHoS4a1DOqc0L+dWH9AflMBj+mOmDHAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/common/sex2.png":
/*!*******************************************!*\
  !*** ./src/assets/images/common/sex2.png ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAALVBMVEX//v7/e43/hpj/g5P/e43/fI7/e43/kaD/fo//e43/fI//e47/gJH/e43/eoz5vbVRAAAADnRSTlMD8B8w3Ye8EViXa6lH02tNK7gAAAF7SURBVCjPnZKxS8NAFMZjNMYWFIsIdjmiBHUqGUTEIYugWxBxLg7iIBg6qKO4Kx1chSDiatFBcCoOLi4iiJsIp22stH5/g9fkLrmL4tAHubz78e7ed3efpvUW5sNmYfm2kqH6NboROmptwFiBfW2FzwHbM5p+RDAh0SGCkyjZI1hNcRXPPNtHM6H9JEwkBDgU6S42kpIcxkRabkh6/bZQRzpS+0lwjQauJGyIHQcgn8Ekn3HiNpQT11vxv9ZUcJX3DFoKLoV81YeCR/ie/ruC++i/uN5R8MH3ny1d3rL2pWAxLVEF+3zPYdzJj43ROMnjScI5cXEmkXu6sNi4yIYaTa/Q9KKOb+yNBrGSYJ77rFInDVFu+vFKmz2pgcQ194j76B51yiB4jWbzoFysjSKa00DxeGphHVgS8j0wg10gjvFK6gAmybyM6EtqmDKi5rOnWzfnsi9o6i9NKl7zqJOlBnOu/bv8kclg2q0Mjrxj4yyD891T6TuW1nv8AIcomdWd91CqAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/moka/makecard/addbtn.png":
/*!****************************************************!*\
  !*** ./src/assets/images/moka/makecard/addbtn.png ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADN0lEQVRYR82XXUgUURSAz7njuv1J+WAQSYTRg0O1oTODIJUPxdpLZMVKJRokaw8RPixGBWVBf7IPEj3ksgu5WODSz6NGBVYIMjNEVuhDlBESlA8WprSuc09c2ZVtdXXYium+DMy955zv3vNzz0UiksDmqK6uXjs+Pl5FRB7OeQkArE6KfmeMfUDEwcLCwr7e3t6vNlUCLgUQCoVYOByu4ZyfIKJdiMiIKI6IwuA3YYiI1hBRCSK6iYgj4jPG2K3GxsaHfr+fLwazKEBFRcXOmZmZGwCwBQDeMca6XC5XT0NDw6tMxQK0s7NzeyKR2Ms5rwOAzQDwNi8v79TAwMDzbBBZATRNO2tZVisifmSMnWlra3tQVVVFdo62r68PW1paDnDOrxLRRkmSWnVdv7KQ7DyA+vr6ZcPDwxEiqgWA27Isn4xGoz/tGM5cI3QNDQ3dBIBjiNhdWlp6PFPXPABVVe8Q0SHG2Gld19tzMZwpo2laM+f8OiLeMwzjaPr8bwDi2Dnnlxhjgb9lPGUsCRFkjJ1Pd8ccgAi4RCLxBBGjpmk22tl5XV3dyunpaYzFYj/srFcUJUxE9S6Xa3cqMGcBRASHQqGXALBCluVtdn2uqupTIpo0TXOfHYBkTLwGgCm/318mMmkWQNO0g5zzbsZYra7r9+0oE2tUVR0UX8MwPHZlMm3NAiiK8hgAioPBoGw31XIFECkaCASGAGDUNM096PV6142NjY1KknRR1/XLdneSK4CQ0zTtnGVZF4qKiopR07TDlmXddbvdWn9/v4gD2yMXFwjllZWVZfF4XJck6QiqqnrNsqzmpqamgqXqdiZZrgAi6Ds6OiYkSWrH8vLymKj1pmlutb315MJcAYS4oihvxF0hAB4hYoFhGDsyAXw+3/KRkZEYEa3PArcp+f99lvkvsizXLJTWqqq+IKKJRQGSedsDAEVZDGxI/v+UZf6zx+PZH4lEphZw3xyAsy5wPAgdT0PHC5Hjpfi/uIz+4DruBQA0DMNrp4hlvY6FcC4Nic/nW5Wfn09dXV2TdgCyNiRpbZNzLVkKwtGmVEA43panu8ORh0l6MDn6NEuBOPo4zUytf/E8/wVcV7qJIGgoiwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/packageMoka/pages/moka/otherlist/index.scss":
/*!*********************************************************!*\
  !*** ./src/packageMoka/pages/moka/otherlist/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMoka/pages/moka/otherlist/index.vue":
/*!********************************************************!*\
  !*** ./src/packageMoka/pages/moka/otherlist/index.vue ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMoka/pages/moka/otherlist/index.vue");


var config = {"navigationBarTitleText":"选择模卡资料"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMoka/pages/moka/otherlist/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7b66f422&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMoka/pages/moka/otherlist/index.vue?vue&type=template&id=7b66f422&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7b66f422_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMoka/pages/moka/otherlist/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map