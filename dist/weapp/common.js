(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! exports provided: formatTime, formatNumber, openPage, timeformat, request, errortip */
/*! exports used: errortip, request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatTime */
/* unused harmony export formatNumber */
/* unused harmony export openPage */
/* unused harmony export timeformat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errortip; });
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
}; // header拦截 wx.getStorageSync('token')

var request = function request(obj) {
  var param = Object.assign({
    header: {
      "identity-authentic-request-header": wx.getStorageSync("token") || ""
    }
  }, obj); // console.log(param);
  // 拦截器

  var successcb = param.success;

  param.success = function (res) {
    if (res && res.data && (res.data.code == 10103 || res.data.code == 10104)) {//登录状态失效，需重新登录
      // wxlogin();
      // wx.redirectTo({
      //   url: '../../../../first/first',
      // })
      // return;
    }

    if (successcb) {
      successcb(res);
    }
  };

  wx.request(param);
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