(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageAdd/pages/user/launchyuepai/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/launchyuepai/index.vue":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/launchyuepai/index.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_da75183a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=da75183a&scoped=true& */ "./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=template&id=da75183a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_da75183a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_da75183a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "da75183a",
  "9d73b59e"
  
)

component.options.__file = "src/packageAdd/pages/user/launchyuepai/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageAdd/pages/user/launchyuepai/index.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "launchyuepai",
  data: function data() {
    return {
      oid: "",
      isIphoneX: false,
      pageshow: "normal",
      showModel: false,
      showTipModel: false,
      pay_coin: 0,
      balance_coin: 0,
      yuepaiInfo: {
        title: "",
        warning: "",
        author: {
          avatar: "",
          nickname: "",
          sex: 0,
          career_list: [],
          province_name: ""
        }
      },
      showContact: false,
      showCelebrity: false,
      showAddress: false,
      data: {
        contact: {
          person: "",
          wechat: "",
          wechat_links: "",
          mobile: ""
        },
        celebrity: {
          oid: "",
          nickname: "",
          fans_number: ""
        },
        address: {
          oid: "",
          detail_address: "",
          mobile: "",
          name: ""
        }
      },
      media_info: {
        platform_name: "",
        platform_code: ""
      }
    };
  },
  methods: {
    showQRcode: function showQRcode() {
      this.showModel = true;
    },
    closeQRcode: function closeQRcode() {
      this.showModel = false;
    },
    goSensationlist: function goSensationlist() {
      Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__[/* openPage */ "b"])("/packageAdd/pages/user/sensationlist/index?platform_code=" + this.media_info.platform_code + "&platform_name=" + this.media_info.platform_name + "&oid=" + this.data.celebrity.oid);
    },
    inviteTemplate: function inviteTemplate(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* inviteTemplate */ "i"])(params);

              case 3:
                res = _context.sent;
                console.log(res);
                _this.yuepaiInfo.author = res.data.data.visited;
                _this.yuepaiInfo.tips = res.data.data.tips;
                _this.yuepaiInfo.title = res.data.data.title;
                _this.yuepaiInfo.warning = res.data.data.warning;
                _this.showContact = res.data.data.contact.is_enable;
                _this.showCelebrity = res.data.data.celebrity.is_enable;
                _this.showAddress = res.data.data.address.is_enable;
                _this.data.contact = res.data.data.contact.body; // res.data.data.celebrity = {
                //   body: {
                //     date_humanize: "1天前",
                //     fans_number: 600,
                //     nickname: "小摄影红书",
                //     platform_code: 201,
                //     platform_name: "红薯",
                //   },
                //   is_enable: 1,
                //   platform_name: "红薯",
                //   platform_type: "201",
                // };
                // res.data.data.address = {
                //   body: {
                //     detail_address: "北京市石景山区惠新西街5号院",
                //     mobile: 13716186230,
                //     name: "王先生",
                //   },
                //   is_enable: 1,
                // };

                _this.data.celebrity = res.data.data.celebrity.body;
                _this.data.address = res.data.data.address.body;
                _this.media_info.platform_name = res.data.data.celebrity.platform_name;
                _this.media_info.platform_code = res.data.data.celebrity.platform_type;
                _this.pay_coin = res.data.data.visitor.pay_coin;
                _this.balance_coin = res.data.data.visitor.balance_coin;
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
    }
  },
  onLoad: function onLoad(options) {
    this.oid = options.oid;
    this.inviteTemplate({
      oid: this.oid
    });
  },
  onShow: function onShow() {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面

    if (currPage.data.celebrity) {
      this.data.celebrity = currPage.data.celebrity;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=template&id=da75183a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=template&id=da75183a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _vm.pageshow == "tipnone"
      ? _c("view", { staticClass: "main ub ub-ver none_main" }, [
          _c("view", { staticClass: "none_tipimg" }, [
            _c("image", {
              attrs: {
                mode: "widthFix",
                src: __webpack_require__(/*! ../../../../assets/images/common/none.png */ "./src/assets/images/common/none.png"),
              },
            }),
          ]),
          _c("view", { staticClass: "none_tiptext" }, [
            _vm._v(_vm._s(_vm.result.message)),
          ]),
          _c(
            "view",
            { staticClass: "none_btn", attrs: { catchtap: "backpage" } },
            [_vm._v("返回首页")]
          ),
        ])
      : _vm._e(),
    _vm.pageshow == "tiprealname"
      ? _c("view", { staticClass: "main ub ub-ver none_main" }, [
          _c("view", { staticClass: "none_tipimg" }, [
            _c("image", {
              attrs: {
                mode: "widthFix",
                src: __webpack_require__(/*! ../../../../assets/images/common/none.png */ "./src/assets/images/common/none.png"),
              },
            }),
          ]),
          _c("view", { staticClass: "none_tiptext" }, [
            _vm._v("对方需要你实名才能报名～"),
          ]),
          _c(
            "view",
            { staticClass: "none_btn", attrs: { catchtap: "goRealname" } },
            [_vm._v("去实名")]
          ),
        ])
      : _vm._e(),
    _vm.pageshow == "tippledge"
      ? _c("view", { staticClass: "main ub ub-ver none_main" }, [
          _c("view", { staticClass: "none_tipimg" }, [
            _c("image", {
              attrs: {
                mode: "widthFix",
                src: __webpack_require__(/*! ../../../../assets/images/common/none.png */ "./src/assets/images/common/none.png"),
              },
            }),
          ]),
          _c("view", { staticClass: "none_tiptext" }, [
            _vm._v("对方需要你交纳保证金才能报名～"),
          ]),
          _c(
            "view",
            { staticClass: "none_btn", attrs: { catchtap: "pledgeCash" } },
            [_vm._v("交纳保证金")]
          ),
        ])
      : _vm._e(),
    _vm.pageshow == "tipvip"
      ? _c("view", { staticClass: "main ub ub-ver none_main" }, [
          _c("view", { staticClass: "none_tipimg" }, [
            _c("image", {
              attrs: {
                mode: "widthFix",
                src: __webpack_require__(/*! ../../../../assets/images/common/none.png */ "./src/assets/images/common/none.png"),
              },
            }),
          ]),
          _c("view", { staticClass: "none_tiptext" }, [
            _vm._v("对方需要会员才能报名"),
          ]),
          _c(
            "view",
            { staticClass: "none_btn", attrs: { catchtap: "goVip" } },
            [_vm._v("去充值会员")]
          ),
        ])
      : _vm._e(),
    _vm.pageshow == "tipmadou"
      ? _c("view", { staticClass: "main ub ub-ver none_main" }, [
          _c("view", { staticClass: "none_tipimg" }, [
            _c("image", {
              attrs: {
                mode: "widthFix",
                src: __webpack_require__(/*! ../../../../assets/images/common/none.png */ "./src/assets/images/common/none.png"),
              },
            }),
          ]),
          _c("view", { staticClass: "none_tiptext" }, [_vm._v("金豆不足！")]),
          _c(
            "view",
            { staticClass: "none_btn", attrs: { catchtap: "goCoin" } },
            [_vm._v("去获取金豆")]
          ),
        ])
      : _vm._e(),
    _vm.pageshow == "tiphasmeet"
      ? _c("view", { staticClass: "main ub ub-ver none_main" }, [
          _c("view", { staticClass: "none_tipimg" }, [
            _c("image", {
              attrs: {
                mode: "widthFix",
                src: __webpack_require__(/*! ../../../../assets/images/common/tip_success.png */ "./src/assets/images/common/tip_success.png"),
              },
            }),
          ]),
          _c("view", { staticClass: "none_tiptext" }, [
            _vm._v("您已经报过名了"),
          ]),
        ])
      : _vm._e(),
    _vm.pageshow == "sub_success"
      ? _c("view", { staticClass: "main none_main" }, [
          _c(
            "view",
            { staticClass: "toptip fl", attrs: { catchtap: "tipSub" } },
            [
              _c("image", {
                staticClass: "toptip_icon",
                attrs: {
                  src: __webpack_require__(/*! ../../../../assets/images/common/tongzhi3.png */ "./src/assets/images/common/tongzhi3.png"),
                },
              }),
              _c("view", { staticClass: "toptip_text fl-g1" }, [
                _vm._v("关注公众号及时接收消息通知"),
              ]),
              _c("view", { staticClass: "toptip_btn" }, [_vm._v("关注")]),
            ]
          ),
          _c("view", { staticClass: "subtip_img" }, [
            _c("image", {
              attrs: {
                mode: "widthFix",
                src: __webpack_require__(/*! ../../../../assets/images/common/tip_success.png */ "./src/assets/images/common/tip_success.png"),
              },
            }),
          ]),
          _c("view", { staticClass: "subtip_title" }, [_vm._v("报名成功")]),
          _c("view", { staticClass: "subtip_tiptext" }, [
            _vm._v("您的报名请求发送成功，等待对方联系您~"),
          ]),
          _c(
            "view",
            { staticClass: "subtip_btn", attrs: { catchtap: "backpage" } },
            [_vm._v("返回")]
          ),
        ])
      : _vm._e(),
    _vm.pageshow == "normal"
      ? _c(
          "form",
          {
            attrs: {
              bindreset: "reset",
              bindsubmit: "sub",
              reportSubmit: "true",
            },
          },
          [
            _c("view", { staticClass: "toptip ub", attrs: { catchtap: "" } }, [
              _c("image", {
                staticClass: "warning",
                attrs: {
                  src: __webpack_require__(/*! ../../../../assets/images/common/icon_tongzhi.png */ "./src/assets/images/common/icon_tongzhi.png"),
                },
              }),
              _c("view", { staticClass: "toptip_text ub-f1" }, [
                _vm._v(
                  "安全提示：①切勿独自与陌生人在室内约拍；②请勿相信未见面先收费的合作；③切勿轻信兼职刷单、虚拟网购等骗局。"
                ),
              ]),
            ]),
            _c("view", { staticClass: "yuepai_top" }, [
              _c("view", { staticClass: "yuepai_top_left" }, [
                _c("image", {
                  staticClass: "avatar",
                  attrs: { src: _vm.yuepaiInfo.author.avatar },
                }),
                _c("view", { staticClass: "yuepai_info" }, [
                  _c(
                    "view",
                    { staticClass: "yuepai_name" },
                    [
                      _vm._v(
                        " " + _vm._s(_vm.yuepaiInfo.author.nickname) + " "
                      ),
                      _vm.yuepaiInfo.author.sex !== null
                        ? _c("block", [
                            _vm.yuepaiInfo.author.sex == 1
                              ? _c("image", {
                                  staticClass: "yuepai_sex",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../assets/images/nan.png */ "./src/assets/images/nan.png"),
                                  },
                                })
                              : _vm._e(),
                            _vm.yuepaiInfo.author.sex == 0
                              ? _c("image", {
                                  staticClass: "yuepai_sex",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../assets/images/nv.png */ "./src/assets/images/nv.png"),
                                  },
                                })
                              : _vm._e(),
                          ])
                        : _vm._e(),
                    ],
                    1
                  ),
                  _c("view", { staticClass: "yuepai_p" }, [
                    _c("text", [
                      _vm._v(
                        " " +
                          _vm._s(_vm.yuepaiInfo.author.career_list[0]) +
                          " | " +
                          _vm._s(_vm.yuepaiInfo.author.province_name) +
                          " "
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _c("view", { staticClass: "reg_remark" }, [
              _c("view", { staticClass: "reg_title ub" }, [
                _c("view", { staticClass: "title_icon" }),
                _c("view", { staticClass: "title_text" }, [
                  _vm._v(_vm._s(_vm.yuepaiInfo.title)),
                ]),
              ]),
              _c("textarea", {
                attrs: {
                  id: "",
                  name: "content",
                  placeholder: _vm.yuepaiInfo.tips,
                  placeholderClass: "placeholder_style",
                },
              }),
            ]),
            _c("view", { staticClass: "reg_info" }, [
              _c("view", { staticClass: "reg_title ub" }, [
                _c("view", { staticClass: "title_icon" }),
                _c("view", { staticClass: "title_text" }, [
                  _vm._v("申请信息"),
                  _c("text", { staticStyle: { color: "rgba(0, 0, 0, 0.3)" } }, [
                    _vm._v("（确保准确）"),
                  ]),
                ]),
              ]),
              _vm.showContact
                ? _c(
                    "view",
                    {
                      staticClass: "info_item ub",
                      attrs: { catchtap: "editContact" },
                    },
                    [
                      _c("view", { staticClass: "info_type" }, [
                        _c("view", { staticClass: "type_icon" }, [
                          _c("image", {
                            attrs: {
                              mode: "widthFix",
                              src: __webpack_require__(/*! ../../../../assets/images/tonggao/user.png */ "./src/assets/images/tonggao/user.png"),
                            },
                          }),
                        ]),
                        _c("view", { staticClass: "type_text" }, [
                          _vm._v("我的联系信息"),
                        ]),
                      ]),
                      _c(
                        "view",
                        {
                          staticClass: "info_content ub ub-ver ub-f1",
                          on: { tap: _vm.showQRcode },
                        },
                        [
                          _c("view", { staticClass: "ub-f1" }),
                          _c("view", { staticClass: "content_text" }, [
                            _vm._v(
                              "联系人：" +
                                _vm._s(
                                  _vm.data.contact.person
                                    ? _vm.data.contact.person
                                    : "未设置"
                                )
                            ),
                          ]),
                          _c("view", [
                            _vm._v(
                              "手机号：" +
                                _vm._s(
                                  _vm.data.contact.mobile
                                    ? _vm.data.contact.mobile
                                    : "未设置"
                                )
                            ),
                          ]),
                          _c("view", { staticClass: "content_text" }, [
                            _vm._v(
                              "微信号：" +
                                _vm._s(
                                  _vm.data.contact.wechat
                                    ? _vm.data.contact.wechat
                                    : "未设置"
                                )
                            ),
                            _vm.data.contact.wechat_links
                              ? _c("text", { staticClass: "qrcode" }, [
                                  _vm._v("查看二维码"),
                                ])
                              : _vm._e(),
                          ]),
                          _c("view", { staticClass: "ub-f1" }),
                        ]
                      ),
                      _c("view", { staticClass: "info_btn" }, [
                        _c("image", {
                          attrs: {
                            src: __webpack_require__(/*! ../../../../assets/images/right.png */ "./src/assets/images/right.png"),
                          },
                        }),
                      ]),
                    ]
                  )
                : _vm._e(),
              _vm.showCelebrity
                ? _c(
                    "view",
                    {
                      staticClass: "info_item ub",
                      attrs: { catchtap: "chooseFans" },
                      on: { tap: _vm.goSensationlist },
                    },
                    [
                      _c("text", { staticClass: "hr_icon" }, [
                        _vm._v(_vm._s(_vm.media_info.platform_name)),
                      ]),
                      _c("view", { staticClass: "info_type" }, [
                        _c("view", { staticClass: "type_icon" }, [
                          _c("image", {
                            attrs: {
                              mode: "widthFix",
                              src: __webpack_require__(/*! ../../../../assets/images/tonggao/reg_hongren.png */ "./src/assets/images/tonggao/reg_hongren.png"),
                            },
                          }),
                        ]),
                        _c("view", { staticClass: "type_text" }, [
                          _vm._v("红人账号"),
                        ]),
                      ]),
                      _vm.data.celebrity.nickname
                        ? _c(
                            "view",
                            { staticClass: "info_content ub ub-ver ub-f1" },
                            [
                              _c("view", { staticClass: "ub-f1" }),
                              _c("view", { staticClass: "content_text" }, [
                                _vm._v(_vm._s(_vm.data.celebrity.nickname)),
                              ]),
                              _c("view", { staticClass: "content_text" }, [
                                _vm._v(
                                  "粉丝：" +
                                    _vm._s(_vm.data.celebrity.fans_number)
                                ),
                              ]),
                              _c("view", { staticClass: "ub-f1" }),
                            ]
                          )
                        : _c(
                            "view",
                            { staticClass: "info_content_none ub ub-f1" },
                            [
                              _c("view", { staticClass: "add_icon" }, [
                                _c("image", {
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../assets/images/common/add_icon.png */ "./src/assets/images/common/add_icon.png"),
                                  },
                                }),
                              ]),
                              _c("view", { staticClass: "add_text" }, [
                                _vm._v("选择账号"),
                              ]),
                            ]
                          ),
                      _c("view", { staticClass: "info_btn" }, [
                        _c("image", {
                          attrs: {
                            src: __webpack_require__(/*! ../../../../assets/images/right.png */ "./src/assets/images/right.png"),
                          },
                        }),
                      ]),
                    ]
                  )
                : _vm._e(),
              _vm.showAddress
                ? _c(
                    "view",
                    {
                      staticClass: "info_item ub",
                      attrs: { catchtap: "chooseAddress" },
                    },
                    [
                      _c("view", { staticClass: "info_type" }, [
                        _c("view", { staticClass: "type_icon" }, [
                          _c("image", {
                            attrs: {
                              mode: "widthFix",
                              src: __webpack_require__(/*! ../../../../assets/images/tonggao/reg_address.png */ "./src/assets/images/tonggao/reg_address.png"),
                            },
                          }),
                        ]),
                        _c("view", { staticClass: "type_text" }, [
                          _vm._v("收货地址"),
                        ]),
                      ]),
                      _vm.data.address.name
                        ? _c(
                            "view",
                            { staticClass: "info_content ub ub-ver ub-f1" },
                            [
                              _c("view", { staticClass: "ub-f1" }),
                              _c("view", { staticClass: "content_text" }, [
                                _vm._v(_vm._s(_vm.data.address.name)),
                              ]),
                              _c("view", { staticClass: "content_text" }, [
                                _vm._v(
                                  "手机号：" + _vm._s(_vm.data.address.mobile)
                                ),
                              ]),
                              _c("view", { staticClass: "content_address" }, [
                                _vm._v(
                                  "地址：" +
                                    _vm._s(_vm.data.address.detail_address)
                                ),
                              ]),
                              _c("view", { staticClass: "ub-f1" }),
                            ]
                          )
                        : _c(
                            "view",
                            { staticClass: "info_content_none ub ub-f1" },
                            [
                              _c("view", { staticClass: "add_icon" }, [
                                _c("image", {
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../assets/images/common/add_icon.png */ "./src/assets/images/common/add_icon.png"),
                                  },
                                }),
                              ]),
                              _c("view", { staticClass: "add_text" }, [
                                _vm._v("选择地址"),
                              ]),
                            ]
                          ),
                      _c("view", { staticClass: "info_btn" }, [
                        _c("image", {
                          attrs: {
                            src: __webpack_require__(/*! ../../../../assets/images/right.png */ "./src/assets/images/right.png"),
                          },
                        }),
                      ]),
                    ]
                  )
                : _vm._e(),
            ]),
            _c("view", { staticClass: "prompt" }, [
              _c("view", [
                _vm._v(_vm._s(_vm.yuepaiInfo.warning)),
                _c(
                  "text",
                  { staticClass: "complain", attrs: { catchtap: "jubao" } },
                  [_vm._v("「投诉」")]
                ),
              ]),
            ]),
            _c(
              "view",
              {
                staticClass: "bottom ub",
                class: _vm.isIphoneX ? "fix-iphonex-button" : "",
              },
              [
                _vm.pay_coin > 0
                  ? _c("block", [
                      _c("view", { staticClass: "bottom_coin" }, [
                        _c("view", { staticClass: "needcoin" }, [
                          _c("text", [
                            _vm._v(" " + _vm._s(_vm.pay_coin) + " 金豆 "),
                          ]),
                          _c("text", { staticClass: "vip-tips" }, [
                            _vm._v(" 开通会员仅需2金豆 >> "),
                          ]),
                        ]),
                        _c("view", { staticClass: "surplus_coin" }, [
                          _vm._v("剩余：" + _vm._s(_vm.balance_coin) + " 金豆"),
                        ]),
                      ]),
                      _c("view", { staticClass: "ub-f1" }),
                      _c("view", { staticClass: "sub_btn" }, [
                        _c(
                          "button",
                          { attrs: { formType: "submit", type: "primary" } },
                          [_vm._v("确认提交")]
                        ),
                      ]),
                    ])
                  : _c("view", { staticClass: "subbtn_bottom" }, [
                      _c(
                        "button",
                        { attrs: { formType: "submit", type: "primary" } },
                        [_vm._v("确认提交")]
                      ),
                    ]),
              ],
              1
            ),
          ]
        )
      : _vm._e(),
    false
      ? undefined
      : _vm._e(),
    _vm.showModel
      ? _c("view", { staticClass: "modal_box" }, [
          _c("view", { staticClass: "modal_content" }, [
            _c("view", [_vm._v(" 微信二维码 ")]),
            _c("image", {
              staticClass: "qrcode-img",
              attrs: {
                src: "https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/41625d80-73b2-11ed-ae45-473a871aac32.jpg",
              },
            }),
            _c("image", {
              staticClass: "close-img",
              attrs: {
                src: __webpack_require__(/*! ../../../../assets/images/common/x_icon.png */ "./src/assets/images/common/x_icon.png"),
              },
              on: { tap: _vm.closeQRcode },
            }),
            _c("view", { staticClass: "save" }, [_vm._v("保存到相册")]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/common/icon_tongzhi.png":
/*!***************************************************!*\
  !*** ./src/assets/images/common/icon_tongzhi.png ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAMAAAAdgrsPAAAAjVBMVEUAAAD/VFf9VFb/VFj/W27/VFf/VFf/U1b/VFf/VFf/VFf+VFf/U1j/U1f/VVz/VFf/VFf/U1f/VFf/VFf/VFT/U1r/UlX/S0v/VFf/VVf9U1f/VFf/VFb/VFf/VFf/VFf/VVf/VFj/U1f/U1f/VFf+VFf/VVj/VFf/VVb+VFf+U1f9VFf/VFj/VFf/VFe/81y+AAAALnRSTlMAwpXsAvs9C+a+t3prYwb13V1aMhsWEQPJraJKItO0gm9mLcaNc1RRQ9fTpKOe6FXvjwAAATBJREFUOMvd09luglAURuGfeVIEHNA6a612Wu//eFX0SFOQ3rtuyEm+wE7ORs/TJB//R9KDw0xV7jBtJW6RAZaqDkRtyp8CjkF9mLl/yW4F7H3bIL1ConunzziOIw+yN6lG7gpvZ0zCNWeT6obceDqSJiHRzSw8li/nkkAyKPB4H0s5+GbAQSCT+VzhEUtlxreqejhqIG3gPOCasAu508s8Piw6kHK8sSYw70KjaugBeRdK4Sg59KpTQdb1pn51KrfDNlSAmcnURNbleYJFB9pCcbnjUI/R0SOSyhC7XrbEtu3N77sbkI2qlarn9bkU9l2DSutjUW1BrHvBl2VNgeX8im7NzD7VDSMgGtZoDWs1mi/BcwzKYeWqWdkPwaCEfaDWgmRw/+/8VI8ab0d6ln4AEfgiOvfOfDUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/common/tip_success.png":
/*!**************************************************!*\
  !*** ./src/assets/images/common/tip_success.png ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/tip_success.png";

/***/ }),

/***/ "./src/assets/images/common/tongzhi3.png":
/*!***********************************************!*\
  !*** ./src/assets/images/common/tongzhi3.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/tongzhi3.png";

/***/ }),

/***/ "./src/assets/images/common/x_icon.png":
/*!*********************************************!*\
  !*** ./src/assets/images/common/x_icon.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmBAMAAABaE/SdAAAAFVBMVEUAAAD///+ZmZmZmZmampqampqZmZnYuwvgAAAABnRSTlMAAQ9uiJxDDxVxAAAAaUlEQVQoz2NgGKKAyVkATDOaKMDFWNICwbRomgNcjDktFaSQMSzNAC4G5ASClaUKIAwE86AyKApRlYEVCqIqAysMRVMGUpiGpgysEF0ZVjEserHZgcUt2NyMxW/YwgBbWGELU2xhP8QAAEdpITWV6LIFAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/tonggao/reg_address.png":
/*!***************************************************!*\
  !*** ./src/assets/images/tonggao/reg_address.png ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/tonggao/reg_address.png";

/***/ }),

/***/ "./src/assets/images/tonggao/reg_hongren.png":
/*!***************************************************!*\
  !*** ./src/assets/images/tonggao/reg_hongren.png ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/tonggao/reg_hongren.png";

/***/ }),

/***/ "./src/packageAdd/pages/user/launchyuepai/index.scss":
/*!***********************************************************!*\
  !*** ./src/packageAdd/pages/user/launchyuepai/index.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageAdd/pages/user/launchyuepai/index.vue":
/*!**********************************************************!*\
  !*** ./src/packageAdd/pages/user/launchyuepai/index.vue ***!
  \**********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageAdd/pages/user/launchyuepai/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageAdd/pages/user/launchyuepai/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=template&id=da75183a&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=template&id=da75183a&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_da75183a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=da75183a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageAdd/pages/user/launchyuepai/index.vue?vue&type=template&id=da75183a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_da75183a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_da75183a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageAdd/pages/user/launchyuepai/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map