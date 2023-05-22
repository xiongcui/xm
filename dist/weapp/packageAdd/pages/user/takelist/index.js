(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/takelist/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/takelist/index.vue":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/takelist/index.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_91d267b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=91d267b4&scoped=true& */ "./src/packageAdd/pages/user/takelist/index.vue?vue&type=template&id=91d267b4&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/takelist/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_91d267b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_91d267b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "91d267b4",
  "19505474"
  
)

component.options.__file = "src/packageAdd/pages/user/takelist/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/takelist/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/takelist/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/takelist/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_loading_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/loading/index.vue */ "./src/components/loading/index.vue");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "takelist",
  data: function data() {
    return {
      showLoading: false,
      noMore: false,
      showModal: false,
      navActive: 0,
      sizer_num: [],
      city_filter: "",
      select_filter: {},
      navData: [],
      appointmentData: [],
      sexData: [{
        name: "全部",
        value: 100,
        ispick: true
      }, {
        name: "男",
        value: 1,
        ispick: false
      }, {
        name: "女",
        value: 0,
        ispick: false
      }],
      certifyData: [],
      securityData: [],
      list: []
    };
  },
  components: {
    loading: _components_loading_index_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
  },
  methods: {
    previewImage: function previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src,
        // 图片的地址url
        urls: urls // 预览的地址url

      });
    },
    clear: function clear() {
      this.appointmentData = this.appointmentData.map(function (item, index) {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.sexData = this.sexData.map(function (item, index) {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.certifyData = this.certifyData.map(function (item, index) {
        item.ispick = index != 0 ? false : true;
        return item;
      });
      this.securityData = this.securityData.map(function (item, index) {
        item.ispick = index != 0 ? false : true;
        return item;
      });
    },
    close: function close() {
      this.showModal = false;
    },
    screen: function screen() {
      this.showModal = true;
    },
    select_tag: function select_tag(row) {
      this.appointmentData.map(function (item) {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_sex_tag: function select_sex_tag(row) {
      this.sexData.map(function (item) {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_certify_tag: function select_certify_tag(row) {
      this.certifyData.map(function (item) {
        item.ispick = false;
      });
      row.ispick = true;
    },
    select_security_tag: function select_security_tag(row) {
      this.securityData.map(function (item) {
        item.ispick = false;
      });
      row.ispick = true;
    },
    navClick: function navClick(index) {
      this.navActive = index;
      this.pageNum = 1;
      this.showLoading = true;
      this.query("init", true);
    },
    follow: function follow(row) {
      this.userFollow({
        follow_uuid: row.basic.uuid
      }, row);
    },
    unfollow: function unfollow(row) {
      this.userUnfollow({
        unfollow_uuid: row.basic.uuid
      }, row);
    },
    query: function query(type, scroll) {
      if (type == "init") this.pageNum = 1;
      this.userList({
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navData.length ? this.navData[this.navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize
      }, type, scroll);
    },
    communicate: function communicate(row) {
      this.imVerify({
        to_account: row.basic.uuid
      }, row);
    },
    submit: function submit() {
      var facedata = this.appointmentData.filter(function (item) {
        return item.ispick;
      });
      var sexdata = this.sexData.filter(function (item) {
        return item.ispick;
      });
      var certifydata = this.certifyData.filter(function (item) {
        return item.ispick;
      });
      var securitydata = this.securityData.filter(function (item) {
        return item.ispick;
      });
      this.select_filter = {
        career: facedata[0].key == "all" ? 0 : facedata[0].key,
        sex: sexdata[0].value == 100 ? 100 : sexdata[0].value,
        is_certify: certifydata[0].key == "all" ? "" : certifydata[0].key,
        is_security: securitydata[0].key == "all" ? "" : securitydata[0].key
      };
      this.showModal = false;
      this.query("init", true);
    },
    connect: function connect(row) {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageMsg/pages/chat/index?uuid=" + row.basic.uuid + "&nickname=" + row.basic.nickname + "&avatar=" + row.basic.avatar);
    },
    onRefresh: function onRefresh() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading(); //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框

      wx.showLoading({
        title: "刷新中..."
      });
      this.query("init", true);
    },
    // 加载更多
    onMore: function onMore() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading(); //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框

      wx.showLoading({
        title: "数据加载中..."
      });
      this.loading = false;
      this.query("more", false);
    },
    userFilter: function userFilter(params, scroll) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, arr, arr2, arr3;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* userFilter */ "Kb"])(params);

              case 3:
                res = _context.sent;
                arr = [];
                arr2 = [];
                arr3 = [];

                if (res.data.data.quick_filter) {
                  _this.navData = res.data.data.quick_filter;
                }

                if (res.data.data.select_filter.career) {
                  res.data.data.select_filter.career.map(function (item, index) {
                    arr.push(item);
                  });
                }

                if (res.data.data.select_filter.is_certify) {
                  res.data.data.select_filter.is_certify.map(function (item, index) {
                    item.ispick = false;
                    arr2.push(item);
                  });
                }

                if (res.data.data.select_filter.is_security) {
                  res.data.data.select_filter.is_security.map(function (item, index) {
                    item.ispick = false;
                    arr3.push(item);
                  });
                }

                arr.unshift({
                  key: "all",
                  value: "全部",
                  ispick: true
                });
                arr2.unshift({
                  key: "all",
                  name: "全部",
                  value: "全部",
                  ispick: true
                });
                arr3.unshift({
                  key: "all",
                  value: "全部",
                  ispick: true
                });
                _this.appointmentData = arr;
                _this.certifyData = arr2;
                _this.securityData = arr3;
                _this.select_filter = {
                  sex: 10,
                  career: 0
                };

                _this.query("init", scroll);

                _context.next = 23;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](0);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 21]]);
      }))();
    },
    userList: function userList(params, type, scroll) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* userList */ "Nb"])(params);

              case 3:
                res = _context2.sent;
                //隐藏loading 提示框
                _this2.showLoading = false;
                wx.hideLoading();
                _this2.noMore = false; //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context2.next = 14;
                  break;
                }

                _this2.list = res.data.data.items;
                _this2.loading = true;
                _context2.next = 22;
                break;

              case 14:
                if (!(type == "more")) {
                  _context2.next = 22;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context2.next = 19;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])("没有更多数据了～");
                _this2.loading = true;
                return _context2.abrupt("return", false);

              case 19:
                data = res.data.data.items;
                _this2.list = _this2.list.concat(data);
                _this2.loading = true;

              case 22:
                if (scroll) {
                  wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                  });
                }

                _this2.isclick = false;
                _context2.next = 32;
                break;

              case 26:
                _context2.prev = 26;
                _context2.t0 = _context2["catch"](0);
                _this2.showLoading = false;
                wx.hideNavigationBarLoading();

                if (_context2.t0.data.error_code == 11020) {
                  _this2.visible = true;
                  _this2.isclick = false;
                  console.log(_context2.t0, "error");
                }

                if (_context2.t0.data.error_code == 10100 && _this2.pageNum > 1) {
                  _this2.noMore = true;
                }

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 26]]);
      }))();
    },
    userFollow: function userFollow(params, row) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* userFollow */ "Lb"])(params);

              case 3:
                res = _context3.sent;
                row.follow.is_follower = true;
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
    },
    userUnfollow: function userUnfollow(params, row) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* userUnfollow */ "Wb"])(params);

              case 3:
                res = _context4.sent;
                row.follow.is_follower = false;
                _context4.next = 9;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    imVerify: function imVerify(params, row) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee5() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* imVerify */ "C"])(params);

              case 3:
                res = _context5.sent;

                _this3.connect(row);

                _context5.next = 11;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* errortip */ "a"])(_context5.t0.data.msg);

                if (_context5.t0.data.error_code == 21050 || _context5.t0.data.error_code == 21040) {
                  Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__[/* openPage */ "c"])("/packageAdd/pages/guideTips/index?msg=".concat(_context5.t0.data.msg, "&code=").concat(_context5.t0.data.error_code));
                }

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }))();
    }
  },
  onLoad: function onLoad(options) {
    if (options.city_filter) {
      this.city_filter = Number(options.city_filter);
      this.showLoading = true;
      this.userFilter({}, false);
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {
    //调用刷新时将执行的方法
    this.onRefresh();
  },
  //触底加载
  onReachBottom: function onReachBottom() {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;

    if (this.loading) {
      this.onMore();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/takelist/index.vue?vue&type=template&id=91d267b4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/takelist/index.vue?vue&type=template&id=91d267b4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "takelist" },
    [
      _c(
        "view",
        { staticClass: "nav_list" },
        [
          _c(
            "scroll-view",
            {
              staticClass: "swiper_tab",
              attrs: { enhanced: true, scrollX: true },
            },
            [
              _c(
                "view",
                { staticClass: "nav_list_ct" },
                _vm._l(_vm.navData, function (item, index) {
                  return _c(
                    "text",
                    {
                      key: index,
                      staticClass: "nav_item",
                      class: _vm.navActive == index ? "nav_active" : "",
                      on: {
                        tap: function ($event) {
                          return _vm.navClick(index)
                        },
                      },
                    },
                    [_vm._v(_vm._s(item.value))]
                  )
                }),
                0
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: "sizer_block ub", on: { tap: _vm.screen } },
            [
              _c("view", { staticClass: "gradient" }),
              _c(
                "view",
                {
                  staticClass: "sizer ub",
                  class: _vm.sizer_num.length ? "is_sizer" : "",
                },
                [
                  _c("view", { staticClass: "ub" }, [
                    _c("view", [_vm._v("筛选")]),
                  ]),
                  _c("view", { staticClass: "sizer_img" }, [
                    _vm.sizer_num.length
                      ? _c("image", {
                          attrs: {
                            src: "https://yuepai-oss.qubeitech.com/static/images/common/sizered.png",
                          },
                        })
                      : _c("image", {
                          attrs: {
                            src: "https://yuepai-oss.qubeitech.com/static/images/common/sizer.png",
                          },
                        }),
                  ]),
                ]
              ),
            ]
          ),
        ],
        1
      ),
      _vm.list.length
        ? _c(
            "view",
            { staticClass: "takect" },
            _vm._l(_vm.list, function (item, index) {
              return _c("view", { key: index, staticClass: "componets-box" }, [
                _c("view", { staticClass: "list_top" }, [
                  _c("view", { staticClass: "list_top_left" }, [
                    _c(
                      "view",
                      { staticClass: "avatar-box" },
                      [
                        _c("image", {
                          staticClass: "avatar",
                          attrs: {
                            src: item.basic.avatar
                              ? item.basic.avatar
                              : "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
                          },
                        }),
                        item.basic.sex !== null
                          ? _c("block", [
                              item.basic.sex == 1
                                ? _c("image", {
                                    staticClass: "list_sex",
                                    attrs: {
                                      src: "https://yuepai-oss.qubeitech.com/static/images/nan.png",
                                    },
                                  })
                                : _vm._e(),
                              item.basic.sex == 0
                                ? _c("image", {
                                    staticClass: "list_sex",
                                    attrs: {
                                      src: "https://yuepai-oss.qubeitech.com/static/images/nv.png",
                                    },
                                  })
                                : _vm._e(),
                            ])
                          : _vm._e(),
                      ],
                      1
                    ),
                    _c("view", { staticClass: "list_info" }, [
                      _c("view", { staticClass: "list_name" }, [
                        _vm._v(" " + _vm._s(item.basic.nickname) + " "),
                      ]),
                      _c("view", { staticClass: "list_p" }, [
                        item.basic.career_label.length
                          ? _c("text", [
                              _vm._v(
                                " " +
                                  _vm._s(item.basic.career_label[0]) +
                                  "｜" +
                                  _vm._s(item.basic.province_name)
                              ),
                            ])
                          : _vm._e(),
                        item.basic.is_certify
                          ? _c("view", { staticClass: "icon_real" }, [
                              _vm._v("已实名"),
                            ])
                          : _vm._e(),
                        item.basic.is_security
                          ? _c("view", { staticClass: "icon_pledge" }, [
                              _vm._v("已担保"),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                  ]),
                  _c("view", { staticClass: "list_top_rt" }, [
                    !item.follow.is_follower
                      ? _c(
                          "view",
                          {
                            staticClass: "followed_btn_red",
                            on: {
                              tap: function ($event) {
                                return _vm.follow(item)
                              },
                            },
                          },
                          [_vm._v("关注")]
                        )
                      : _c(
                          "view",
                          {
                            staticClass: "followed_btn",
                            on: {
                              tap: function ($event) {
                                return _vm.unfollow(item)
                              },
                            },
                          },
                          [_vm._v("取消关注")]
                        ),
                  ]),
                ]),
                _c("view", { staticClass: "list_desc" }, [
                  _vm._v(" " + _vm._s(item.basic.resume) + " "),
                ]),
                item.album.photo_album.length
                  ? _c(
                      "view",
                      { staticClass: "list_img" },
                      [
                        _c(
                          "scroll-view",
                          { attrs: { enhanced: true, scrollX: true } },
                          _vm._l(
                            item.album.photo_album,
                            function (url, coverIndex) {
                              return _c("image", {
                                key: coverIndex,
                                staticClass: "list_img_item",
                                attrs: { src: url, mode: "aspectFill" },
                                on: {
                                  tap: function ($event) {
                                    $event.stopPropagation()
                                    return _vm.previewImage(
                                      url,
                                      item.album.photo_album
                                    )
                                  },
                                },
                              })
                            }
                          ),
                          0
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                !item.album.photo_album.length && item.album.video_album.length
                  ? _c(
                      "view",
                      { staticClass: "list_video" },
                      [
                        _c(
                          "scroll-view",
                          { attrs: { enhanced: true, scrollX: true } },
                          _vm._l(
                            item.album.video_album,
                            function (videoItem, videoIndex) {
                              return _c("video", {
                                key: videoIndex,
                                staticClass: "list_video-width",
                                attrs: {
                                  objectFit: "cover",
                                  poster: videoItem.cover,
                                  src: videoItem.file,
                                },
                                on: {
                                  tap: function ($event) {
                                    $event.stopPropagation()
                                  },
                                },
                              })
                            }
                          ),
                          0
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _c("view", { staticClass: "list_bottom" }, [
                  _c("view", { staticClass: "list_time" }, [
                    _vm._v(" 1分钟前来过 "),
                  ]),
                  _c(
                    "view",
                    {
                      staticClass: "contact",
                      on: {
                        tap: function ($event) {
                          return _vm.communicate(item)
                        },
                      },
                    },
                    [_vm._v("立即沟通")]
                  ),
                ]),
              ])
            }),
            0
          )
        : _c("view", { staticClass: "none-data" }, [
            _c("image", {
              staticClass: "none-img",
              attrs: {
                src: "https://yuepai-oss.qubeitech.com/static/images/common/none.png",
                mode: "aspectFill",
              },
            }),
            _c("view", [_vm._v("当前暂无信息哦～")]),
          ]),
      _vm.noMore
        ? _c("view", { staticClass: "nomore" }, [_vm._v("没有更多了～")])
        : _vm._e(),
      _c("loading", { attrs: { showLoading: _vm.showLoading } }),
      _c(
        "view",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showModal,
              expression: "showModal",
            },
          ],
          staticClass: "select_block",
          on: { tap: _vm.close },
        },
        [
          _c(
            "view",
            {
              staticClass: "select_bg",
              on: {
                tap: function ($event) {
                  $event.stopPropagation()
                },
              },
            },
            [
              _c("view", { staticClass: "statusbar" }),
              _c("view", { staticClass: "select_item" }, [
                _c("view", { staticClass: "select_item_title" }, [
                  _vm._v("用户身份"),
                ]),
                _c(
                  "view",
                  _vm._l(_vm.appointmentData, function (item, index) {
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
                      [_vm._v(" " + _vm._s(item.value) + " ")]
                    )
                  }),
                  0
                ),
              ]),
              _c("view", { staticClass: "select_item" }, [
                _c("view", { staticClass: "select_item_title" }, [
                  _vm._v("性别"),
                ]),
                _c(
                  "view",
                  _vm._l(_vm.sexData, function (item, index) {
                    return _c(
                      "text",
                      {
                        key: index,
                        staticClass: "tag_item",
                        class: item.ispick ? "tag_itemed" : "",
                        on: {
                          tap: function ($event) {
                            return _vm.select_sex_tag(item)
                          },
                        },
                      },
                      [_vm._v(" " + _vm._s(item.name) + " ")]
                    )
                  }),
                  0
                ),
              ]),
              _c("view", { staticClass: "select_item" }, [
                _c("view", { staticClass: "select_item_title" }, [
                  _vm._v("是否实名"),
                ]),
                _c(
                  "view",
                  _vm._l(_vm.certifyData, function (item, index) {
                    return _c(
                      "text",
                      {
                        key: index,
                        staticClass: "tag_item",
                        class: item.ispick ? "tag_itemed" : "",
                        on: {
                          tap: function ($event) {
                            return _vm.select_certify_tag(item)
                          },
                        },
                      },
                      [_vm._v(" " + _vm._s(item.value) + " ")]
                    )
                  }),
                  0
                ),
              ]),
              _c("view", { staticClass: "select_item" }, [
                _c("view", { staticClass: "select_item_title" }, [
                  _vm._v("是否担保"),
                ]),
                _c(
                  "view",
                  _vm._l(_vm.securityData, function (item, index) {
                    return _c(
                      "text",
                      {
                        key: index,
                        staticClass: "tag_item",
                        class: item.ispick ? "tag_itemed" : "",
                        on: {
                          tap: function ($event) {
                            return _vm.select_security_tag(item)
                          },
                        },
                      },
                      [_vm._v(" " + _vm._s(item.value) + " ")]
                    )
                  }),
                  0
                ),
              ]),
              _c("view", { staticClass: "select_button" }, [
                _c("text", { staticClass: "clear", on: { tap: _vm.clear } }, [
                  _vm._v("清除"),
                ]),
                _c(
                  "text",
                  { staticClass: "confirm", on: { tap: _vm.submit } },
                  [_vm._v("确认")]
                ),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/takelist/index.scss":
/*!*******************************************************!*\
  !*** ./src/packageAdd/pages/user/takelist/index.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/takelist/index.vue":
/*!******************************************************!*\
  !*** ./src/packageAdd/pages/user/takelist/index.vue ***!
  \******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/takelist/index.vue");


var config = {"enablePullDownRefresh":true,"navigationBarTitleText":"用户推荐"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/takelist/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/takelist/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/packageAdd/pages/user/takelist/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/takelist/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/takelist/index.vue?vue&type=template&id=91d267b4&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/takelist/index.vue?vue&type=template&id=91d267b4&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_91d267b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=91d267b4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/takelist/index.vue?vue&type=template&id=91d267b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_91d267b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_91d267b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/takelist/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map