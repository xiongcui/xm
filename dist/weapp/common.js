(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: wxlogin, getPhone, uploadFile, updateUser, getCareer, creatCareer, publicConfig, creatInvite */
/*! exports used: creatCareer, creatInvite, getCareer, getPhone, publicConfig, updateUser, wxlogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return wxlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPhone; });
/* unused harmony export uploadFile */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCareer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return creatCareer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return publicConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return creatInvite; });
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");

var baseUrl = "https://tapi.cupz.cn"; // WX登录,拿code换登录

var wxlogin = function wxlogin(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "c"])({
    url: baseUrl + "/v1/token",
    method: "POST",
    data: data
  });
}; // 获取手机号码

var getPhone = function getPhone(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "c"])({
    url: baseUrl + "/v1/user/decrypt/mobile",
    method: "POST",
    data: data
  });
}; // 上传文件

var uploadFile = function uploadFile(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "c"])({
    url: baseUrl + "/v1/file/upload",
    method: "POST",
    data: data
  });
}; // 更新个人资料

var updateUser = function updateUser(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "c"])({
    url: baseUrl + "/v1/user",
    method: "PUT",
    data: data
  });
}; // 获得身份

var getCareer = function getCareer(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "c"])({
    url: baseUrl + "/v1/user/career",
    method: "get",
    data: data
  });
}; // 创建身份

var creatCareer = function creatCareer(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "c"])({
    url: baseUrl + "/v1/user/career",
    method: "post",
    data: data
  });
}; // 获得参数

var publicConfig = function publicConfig(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "c"])({
    url: baseUrl + "/v1/public/config",
    method: "post",
    data: data
  });
}; // 创建约拍

var creatInvite = function creatInvite(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "c"])({
    url: baseUrl + "/v1/note/publish/invite",
    method: "post",
    data: data
  });
};

/***/ }),

/***/ "./src/assets/images/avatar_default.png":
/*!**********************************************!*\
  !*** ./src/assets/images/avatar_default.png ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/avatar_default.png";

/***/ }),

/***/ "./src/assets/images/nan.png":
/*!***********************************!*\
  !*** ./src/assets/images/nan.png ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/nan.png";

/***/ }),

/***/ "./src/assets/images/user/index/invoice.png":
/*!**************************************************!*\
  !*** ./src/assets/images/user/index/invoice.png ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAMAAACLUGAGAAAAgVBMVEUAAAA0NDQ0NDQzMzM2NjYzMzMzMzM0NDQ0NDQuLi4zMzMzMzMzMzMzMzMxMTEzMzMzMzMuLi4zMzMzMzMzMzMyMjIyMjIyMjIyMjIzMzMzMzMzMzMyMjIyMjIzMzMwMDAyMjIzMzMzMzMyMjIyMjIzMzMzMzMzMzM1NTUxMTEzMzMpKmdvAAAAKnRSTlMAcWOuJghpy2wE9UL74R6+pQ2BUkYys1nrzayZd0ooFcqRbuTa2NSNOjkVNVrzAAABFklEQVRIx+3U2XKDIBSA4YMNtgRFiVs0Rpt0P+//gD0MF8UFepOZTCb5bxT9ZHAZ4b4SMmZrnQu9xGWKvrZsgRMMtJstg2Z+ZdFacYeYDBMtCQvwdJpPHiMy8FUh5uDGECOv3iA+XULL2K0RQS3nj+6CGsoXt/BKll1N6/zZLRuCusFph6BW6fTLPv6zbu4m4Eae4I1qUfSlc/S4O49+rVpErDXYeEejvfTpwb72jINJZ/blF+u62iOmbEuzGz62JGO6IonWdE7uQ0FJm06AeicsgdfmQ1xqUzuaW0voyu83WnJFI5EjNdMFUpm2+8SpdGNPfSF1mmiR0YQcbI3hnwrA1ieYKpjyn8r5TR7qnv8NldTwyNsv5no8DtvqAe0AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! exports provided: formatTime, formatNumber, openPage, timeformat, request, errortip */
/*! exports used: errortip, openPage, request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatTime */
/* unused harmony export formatNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return openPage; });
/* unused harmony export timeformat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errortip; });
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var js_Base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-Base64 */ "./node_modules/js-Base64/base64.mjs");


var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":");
};
var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
var openPage = function openPage(url) {
  console.log("open page:", url);
  wx.navigateTo({
    url: url
  });
};
var timeformat = function timeformat(date, fmt) {
  fmt = fmt || "yyyy-MM-dd HH:mm:ss";
  var o = {
    "M+": date.getMonth() + 1,
    // 月份
    "d+": date.getDate(),
    // 日
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    // 小时
    "H+": date.getHours(),
    // 小时
    "m+": date.getMinutes(),
    // 分
    "s+": date.getSeconds(),
    // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3),
    // 季度
    S: date.getMilliseconds() // 毫秒

  };
  var week = {
    0: "/u65e5",
    1: "/u4e00",
    2: "/u4e8c",
    3: "/u4e09",
    4: "/u56db",
    5: "/u4e94",
    6: "/u516d"
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + week[date.getDay() + ""]);
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }

  return fmt;
};
var request = function request(params) {
  var header = {};
  var token = wx.getStorageSync("token");
  header["Authorization"] = "Basic " + js_Base64__WEBPACK_IMPORTED_MODULE_1__[/* Base64 */ "a"].encode(token + ":");
  var data = Object.assign(header, params);
  return new Promise(function (resolev, reject) {
    wx.request(Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, data), {}, {
      header: header,
      url: params.url,
      success: function success(res) {
        if (res.data.code == 200) {
          resolev(res);
        } else if (res.data.error_code == 1002 || res.data.error_code == 1003) {
          openPage("/pages/login/index");
        } else {
          errortip(res.data.msg);
          reject(res);
        }
      },
      fail: function fail(err) {
        reject(err);
      }
    }));
  });
};
var errortip = function errortip(txt) {
  wx.showToast({
    title: txt,
    icon: "error",
    duration: 2000
  });
};

/***/ })

}]);
//# sourceMappingURL=common.js.map