(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: wxlogin, getPhone, uploadFile */
/*! exports used: getPhone, uploadFile, wxlogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return wxlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uploadFile; });
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");

var baseUrl = "https://tapi.cupz.cn"; // WX登录,拿code换登录

var wxlogin = function wxlogin(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "a"])({
    url: baseUrl + "/v1/token",
    method: "POST",
    data: data
  });
}; // 获取手机号码

var getPhone = function getPhone(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "a"])({
    url: baseUrl + "/v1/phone",
    method: "POST",
    data: data
  });
}; // 上传文件

var uploadFile = function uploadFile(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "a"])({
    url: baseUrl + "/v1/file/upload",
    method: "POST",
    data: data
  }, true);
};

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! exports provided: formatTime, formatNumber, openPage, timeformat, request, errortip */
/*! exports used: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatTime */
/* unused harmony export formatNumber */
/* unused harmony export openPage */
/* unused harmony export timeformat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return request; });
/* unused harmony export errortip */
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");

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

var request = function request(params) {
  var upload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var oheader = {
    header: {
      Authorization: wx.getStorageSync("token") || ""
    }
  };

  if (upload) {
    oheader["content-type"] = "application/x-www-form-urlencoded";
  }

  console.log(oheader, "oheader");
  var data = Object.assign(oheader, params);
  return new Promise(function (resolev, reject) {
    wx.request(Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, data), {}, {
      url: params.url,
      success: function success(res) {
        if (res.statusCode == 200) {
          resolev(res);
        } else {
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