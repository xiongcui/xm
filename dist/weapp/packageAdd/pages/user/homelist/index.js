(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/homelist/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/homelist/index.vue":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/homelist/index.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_a6a3db04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a6a3db04&scoped=true& */ "./src/packageAdd/pages/user/homelist/index.vue?vue&type=template&id=a6a3db04&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/homelist/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_a6a3db04_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_a6a3db04_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "a6a3db04",
  "0ee79acc"
  
)

component.options.__file = "src/packageAdd/pages/user/homelist/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/homelist/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/homelist/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/homelist/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_pagenav_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/pagenav/index.vue */ "./src/components/pagenav/index.vue");
/* harmony import */ var _components_loading_index_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/loading/index.vue */ "./src/components/loading/index.vue");
/* harmony import */ var _components_tonggaoList_index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tonggaoList/index.vue */ "./src/components/tonggaoList/index.vue");
/* harmony import */ var _components_yuepaiList_index_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/yuepaiList/index.vue */ "./src/components/yuepaiList/index.vue");
/* harmony import */ var _components_zuopinList_index_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/zuopinList/index.vue */ "./src/components/zuopinList/index.vue");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "homelist",
  data: function data() {
    return {
      componetActive: 0,
      navActive: 0,
      navList: [],
      chargeData: [],
      purposeData: [],
      appointmentData: [],
      identityData: [],
      noticeData: [],
      pageNum: 1,
      pageSize: 10,
      isclick: false,
      showLoading: false,
      noMore: false,
      yuepaiList: [],
      noticeList: [],
      zuopinList: [],
      city_filter: {},
      recommend_city_filter: {},
      componetName: {
        0: "约拍列表",
        1: "通告列表",
        2: "作品列表"
      },
      swiperHeightCt: 0
    };
  },
  components: {
    Pagenav: _components_pagenav_index_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    loading: _components_loading_index_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    YuepaiList: _components_yuepaiList_index_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    TonggaoList: _components_tonggaoList_index_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    ZuopinList: _components_zuopinList_index_vue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]
  },
  methods: {
    bindChange: function bindChange(e) {
      this.componetActive = e.detail.current;
      this.pageNavClick(e.detail.current);
    },
    setSwiperHeight: function setSwiperHeight() {
      var _this = this;

      var dom = ".list-height";
      wx.createSelectorQuery().select(dom).boundingClientRect(function (rect) {
        _this.swiperHeightCt = rect.height + "px";
      }).exec();
    },
    pageNavClick: function pageNavClick(index) {
      this.pageNum = 1;
      this.componetActive = index;
      this.navActive = 0;
      this.isclick = true;
      this.showLoading = true;
      this.switchQuery(index, true);
    },
    navClick: function navClick(pageNavIndex, navIndex) {
      this.pageNum = 1;
      this.isclick = true;
      this.showLoading = true;

      if (pageNavIndex == 0) {
        this.query("init", navIndex, true);
      } else if (pageNavIndex == 1) {
        this.noticeQuery("init", navIndex, true);
      } else if (pageNavIndex == 2) {
        this.zuopinQuery("init", navIndex, true);
      }
    },
    switchQuery: function switchQuery(index, scroll) {
      switch (index) {
        case 0:
          this.inviteFilter({}, scroll);
          break;

        case 1:
          this.noticeFilter({}, scroll);
          break;

        case 2:
          this.photoFilter({}, scroll);
          break;
      }
    },
    query: function query(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      this.inviteList({
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navList.length ? this.navList[navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize
      }, type, scroll);
    },
    noticeQuery: function noticeQuery(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      var params = {
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navList.length ? this.navList[navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize
      };
      this.queryNoticeList(params, type, scroll);
    },
    zuopinQuery: function zuopinQuery(type, navActive, scroll) {
      if (type == "init") this.pageNum = 1;
      var params = {
        select_filter: this.select_filter,
        city_filter: this.city_filter,
        quick_filter: this.navList.length ? this.navList[navActive].key : "",
        page: this.pageNum,
        per_page: this.pageSize
      };
      this.queryPhotoList(params, type, scroll);
    },
    submitQuery: function submitQuery(pageNavIndex, navIndex, select_filter) {
      this.select_filter = select_filter;
      this.showLoading = true;

      switch (pageNavIndex) {
        case 0:
          this.query("init", navIndex, true);
          break;

        case 1:
          this.noticeQuery("init", navIndex, true);
          break;

        case 2:
          this.zuopinQuery("init", navIndex, true);
          break;
      }
    },
    // 加载更多
    onMore: function onMore() {
      //在当前页面显示导航条加载动画
      wx.showNavigationBarLoading(); //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框

      wx.showLoading({
        title: "数据加载中..."
      });
      this.loading = false;

      if (this.componetActive == 0) {
        this.query("more", this.$refs["pageNavRef"].navActive);
      } else if (this.componetActive == 1) {
        this.noticeQuery("more", this.$refs["pageNavRef"].navActive);
      } else if (this.componetActive == 2) {
        this.zuopinQuery("more", this.$refs["pageNavRef"].navActive);
      }
    },
    inviteList: function inviteList(params, type, scroll) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* inviteList */ "R"])(params);

              case 3:
                res = _context.sent;
                //隐藏loading 提示框
                _this2.showLoading = false;
                wx.hideLoading();
                _this2.noMore = false; //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context.next = 14;
                  break;
                }

                _this2.yuepaiList = res.data.data.items;
                _this2.loading = true;
                _context.next = 22;
                break;

              case 14:
                if (!(type == "more")) {
                  _context.next = 22;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context.next = 19;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_9__[/* errortip */ "a"])("没有更多数据了～");
                _this2.loading = true;
                return _context.abrupt("return", false);

              case 19:
                data = res.data.data.items;
                _this2.yuepaiList = _this2.yuepaiList.concat(data);
                _this2.loading = true;

              case 22:
                if (scroll) {
                  wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                  });
                }

                _this2.isclick = false;
                setTimeout(function () {
                  _this2.setSwiperHeight();
                }, 200);
                _context.next = 33;
                break;

              case 27:
                _context.prev = 27;
                _context.t0 = _context["catch"](0);
                _this2.showLoading = false;
                wx.hideNavigationBarLoading();

                if (_context.t0.data.error_code == 11020) {
                  _this2.visible = true;
                  _this2.isclick = false;
                  console.log(_context.t0, "error");
                }

                if (_context.t0.data.error_code == 10100 && _this2.pageNum > 1) {
                  _this2.noMore = true;
                }

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 27]]);
      }))();
    },
    queryNoticeList: function queryNoticeList(params, type, scroll) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* noticeList */ "qb"])(params);

              case 3:
                res = _context2.sent;
                //隐藏loading 提示框
                _this3.showLoading = false;
                wx.hideLoading();
                _this3.noMore = false; //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context2.next = 14;
                  break;
                }

                _this3.noticeList = res.data.data.items;
                _this3.loading = true;
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

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_9__[/* errortip */ "a"])("没有更多数据了～");
                _this3.loading = true;
                return _context2.abrupt("return", false);

              case 19:
                data = res.data.data.items;
                _this3.noticeList = _this3.noticeList.concat(data);
                _this3.loading = true;

              case 22:
                if (scroll) {
                  wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                  });
                }

                _this3.isclick = false;
                setTimeout(function () {
                  _this3.setSwiperHeight();
                }, 200);
                _context2.next = 33;
                break;

              case 27:
                _context2.prev = 27;
                _context2.t0 = _context2["catch"](0);
                _this3.showLoading = false;
                wx.hideNavigationBarLoading();

                if (_context2.t0.data.error_code == 11020) {
                  _this3.visible = true;
                  _this3.isclick = false;
                  console.log(_context2.t0, "error");
                }

                if (_context2.t0.data.error_code == 10100 && _this3.pageNum > 1) {
                  _this3.noMore = true;
                }

              case 33:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 27]]);
      }))();
    },
    queryPhotoList: function queryPhotoList(params, type, scroll) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res, data;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* photoList */ "yb"])(params);

              case 3:
                res = _context3.sent;
                //隐藏loading 提示框
                _this4.showLoading = false;
                wx.hideLoading();
                _this4.noMore = false; //隐藏导航条加载动画

                wx.hideNavigationBarLoading(); //停止下拉刷新

                wx.stopPullDownRefresh();

                if (!(type == "init")) {
                  _context3.next = 14;
                  break;
                }

                _this4.zuopinList = res.data.data.items;
                _this4.loading = true;
                _context3.next = 22;
                break;

              case 14:
                if (!(type == "more")) {
                  _context3.next = 22;
                  break;
                }

                if (!(!res.data.data || !res.data.data.items.length)) {
                  _context3.next = 19;
                  break;
                }

                Object(_utils_util__WEBPACK_IMPORTED_MODULE_9__[/* errortip */ "a"])("没有更多数据了～");
                _this4.loading = true;
                return _context3.abrupt("return", false);

              case 19:
                data = res.data.data.items;
                _this4.zuopinList = _this4.zuopinList.concat(data);
                _this4.loading = true;

              case 22:
                if (scroll) {
                  wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                  });
                }

                _this4.isclick = false;
                setTimeout(function () {
                  _this4.setSwiperHeight();
                }, 200);
                _context3.next = 33;
                break;

              case 27:
                _context3.prev = 27;
                _context3.t0 = _context3["catch"](0);
                _this4.showLoading = false;
                wx.hideNavigationBarLoading();

                if (_context3.t0.data.error_code == 11020) {
                  _this4.visible = true;
                  _this4.isclick = false;
                  console.log(_context3.t0, "error");
                }

                if (_context3.t0.data.error_code == 10100 && _this4.pageNum > 1) {
                  _this4.noMore = true;
                }

              case 33:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 27]]);
      }))();
    },
    inviteFilter: function inviteFilter(params, scroll) {
      var _this5 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res, arr, arr2, arr3;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* inviteFilter */ "O"])(params);

              case 3:
                res = _context4.sent;
                arr = [];
                arr2 = [];
                arr3 = [];

                if (res.data.data.quick_filter) {
                  _this5.navList = res.data.data.quick_filter;
                }

                if (res.data.data.author_career) {
                  res.data.data.author_career.map(function (item, index) {
                    arr.push(item);
                  });
                }

                if (res.data.data.payment_type) {
                  res.data.data.payment_type.map(function (item, index) {
                    item.ispick = false;
                    arr2.push(item);
                  });
                }

                if (res.data.data.face_career) {
                  res.data.data.face_career.map(function (item, index) {
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
                _this5.appointmentData = arr;
                _this5.chargeData = arr2;
                _this5.purposeData = arr3;
                _this5.select_filter = {
                  sex: 10,
                  payment_type: 0
                };

                _this5.query("init", _this5.$refs["pageNavRef"].navActive, scroll);

                _context4.next = 23;
                break;

              case 21:
                _context4.prev = 21;
                _context4.t0 = _context4["catch"](0);

              case 23:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 21]]);
      }))();
    },
    noticeFilter: function noticeFilter(params, scroll) {
      var _this6 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee5() {
        var res, data, arr, arr1, arr2;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* noticeFilter */ "ob"])(params);

              case 3:
                res = _context5.sent;
                data = res.data.data;

                if (data.quick_filter) {
                  _this6.navList = data.quick_filter;
                }

                arr = [];
                arr1 = [];
                arr2 = [];

                if (data.face_career) {
                  arr = data.face_career.map(function (item) {
                    item.ispick = false;
                    return item;
                  });
                }

                if (data.first_code) {
                  arr1 = data.first_code.map(function (item) {
                    item.ispick = false;
                    return item;
                  });
                }

                if (data.payment_type) {
                  arr2 = data.payment_type.map(function (item) {
                    item.ispick = false;
                    return item;
                  });
                }

                arr.unshift({
                  cid: "all",
                  value: "全部",
                  ispick: true
                });
                arr1.unshift({
                  key: "all",
                  value: "全部",
                  ispick: true
                });
                arr2.unshift({
                  key: "all",
                  value: "全部",
                  ispick: true
                });
                _this6.identityData = arr;
                _this6.noticeData = arr1;
                _this6.chargeData = arr2;
                _this6.select_filter = {
                  first_code: "",
                  payment_type: 0,
                  face_career: 0
                };

                _this6.noticeQuery("init", _this6.$refs["pageNavRef"].navActive, scroll);

                _context5.next = 24;
                break;

              case 22:
                _context5.prev = 22;
                _context5.t0 = _context5["catch"](0);

              case 24:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 22]]);
      }))();
    },
    photoFilter: function photoFilter(params, scroll) {
      var _this7 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee6() {
        var res, data, arr2, arr3;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[/* photoFilter */ "wb"])(params);

              case 3:
                res = _context6.sent;
                data = res.data.data;
                arr2 = [];
                arr3 = [];

                if (data.quick_filter) {
                  _this7.navList = data.quick_filter;
                }

                if (data.payment_type) {
                  arr2 = data.payment_type.map(function (item) {
                    item.ispick = false;
                    return item;
                  });
                }

                if (data.author_career) {
                  arr3 = data.author_career.map(function (item) {
                    item.ispick = false;
                    return item;
                  });
                }

                arr2.unshift({
                  key: "all",
                  value: "全部",
                  ispick: true
                });
                arr3.unshift({
                  key: "all",
                  value: "全部",
                  ispick: true
                });
                _this7.identityData = arr3;
                _this7.select_filter = {
                  author_career: 0,
                  author_sex: 10
                };

                _this7.zuopinQuery("init", _this7.$refs["pageNavRef"].navActive, scroll);

                _context6.next = 19;
                break;

              case 17:
                _context6.prev = 17;
                _context6.t0 = _context6["catch"](0);

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 17]]);
      }))();
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    //调用刷新时将执行的方法
    this.showLoading = true;
    this.switchQuery(this.componetActive, true);
  },
  //触底加载
  onReachBottom: function onReachBottom() {
    console.log("下拉加载更多", this.loading);
    this.pageNum++;

    if (this.loading && !this.isclick) {
      this.onMore();
    }
  },
  onLoad: function onLoad(options) {
    var index = Number(options.componetActive);
    this.componetActive = index;
    this.showLoading = true;
    this.switchQuery(index, true);
    wx.setNavigationBarTitle({
      title: this.componetName[index]
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/homelist/index.vue?vue&type=template&id=a6a3db04&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/homelist/index.vue?vue&type=template&id=a6a3db04&scoped=true& ***!
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
    [
      _c("Pagenav", {
        ref: "pageNavRef",
        staticClass: "pagenav",
        attrs: {
          pageActive: _vm.componetActive,
          active: _vm.navActive,
          navList: _vm.navList,
          chargeList: _vm.chargeData,
          purposeList: _vm.purposeData,
          appointmentList: _vm.appointmentData,
          identityList: _vm.identityData,
          noticeList: _vm.noticeData,
          isMargin: false,
        },
        on: {
          pageNavClick: _vm.pageNavClick,
          navClick: _vm.navClick,
          submitQuery: _vm.submitQuery,
        },
      }),
      _c(
        "view",
        { staticClass: "home-list-ct" },
        [
          _c(
            "swiper",
            {
              staticClass: "swiper-box",
              style: {
                height: _vm.swiperHeightCt ? _vm.swiperHeightCt : "100vh",
              },
              attrs: { current: _vm.componetActive, duration: "300" },
              on: { change: _vm.bindChange },
            },
            [
              _c(
                "swiper-item",
                [
                  _vm.componetActive == 0
                    ? _c("YuepaiList", {
                        staticClass: "list-height",
                        attrs: { baseData: _vm.yuepaiList },
                      })
                    : _vm._e(),
                ],
                1
              ),
              _c(
                "swiper-item",
                [
                  _vm.componetActive == 1
                    ? _c("TonggaoList", {
                        staticClass: "list-height",
                        attrs: { baseData: _vm.noticeList },
                      })
                    : _vm._e(),
                ],
                1
              ),
              _c(
                "swiper-item",
                [
                  _vm.componetActive == 2
                    ? _c("ZuopinList", {
                        staticClass: "list-height",
                        attrs: { baseData: _vm.zuopinList },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm.noMore
        ? _c("view", { staticClass: "nomore" }, [_vm._v("没有更多了～")])
        : _vm._e(),
      _c("loading", { attrs: { showLoading: _vm.showLoading } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/packageAdd/pages/user/homelist/index.scss":
/*!*******************************************************!*\
  !*** ./src/packageAdd/pages/user/homelist/index.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/homelist/index.vue":
/*!******************************************************!*\
  !*** ./src/packageAdd/pages/user/homelist/index.vue ***!
  \******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/homelist/index.vue");


var config = {"navigationBarTitleText":"虾米约拍","enablePullDownRefresh":true,"backgroundColor":"#f4f4f4","backgroundColorTop":"#f4f4f4","backgroundColorBottom":"#f4f4f4","backgroundTextStyle":"dark"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/homelist/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/homelist/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/packageAdd/pages/user/homelist/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/homelist/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/homelist/index.vue?vue&type=template&id=a6a3db04&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/homelist/index.vue?vue&type=template&id=a6a3db04&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a6a3db04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a6a3db04&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/homelist/index.vue?vue&type=template&id=a6a3db04&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a6a3db04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a6a3db04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/homelist/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map