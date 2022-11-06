(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: wxlogin, getPhone, uploadFile, updateUser, getCareer, creatCareer, publicConfig, creatInvite, inviteList, inviteInfo */
/*! exports used: creatCareer, creatInvite, getCareer, getPhone, inviteInfo, inviteList, publicConfig, updateUser, wxlogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return wxlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPhone; });
/* unused harmony export uploadFile */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCareer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return creatCareer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return publicConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return creatInvite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return inviteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return inviteInfo; });
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
}; // 约拍列表

var inviteList = function inviteList(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "c"])({
    url: baseUrl + "/v1/note/invite/list",
    method: "post",
    data: data
  });
}; // 约拍详情页

var inviteInfo = function inviteInfo(data) {
  return Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* request */ "c"])({
    url: baseUrl + "/v1/note/invite/info",
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

/***/ "./src/assets/images/common/icon_favorite.png":
/*!****************************************************!*\
  !*** ./src/assets/images/common/icon_favorite.png ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/common/icon_favorite.png";

/***/ }),

/***/ "./src/assets/images/common/icon_pledge.png":
/*!**************************************************!*\
  !*** ./src/assets/images/common/icon_pledge.png ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAMAAADthUvBAAAAmVBMVEUTspoTspsUtZoAAAATspr////2/PswvKfU8e0btZ3e9PB81MeN2s5QxrRGwrA3vqq56OFVx7b8/v6q49rP7+qE1spozr4quqSl4djy+/pLxLLo9/W86eLL7uiv5d2b3tS05t9Cwq47v6shtqD5/fyJ2MwmuKLD6+Xu+fiU3NFw0MJkzL2h4NcVs5tgy7tbybni9fNTx7W/6uSsCw4ZAAAABHRSTlPwrSYAJ4s9KgAAAl1JREFUSMe91utyojAYgGFsvw8Ih3I+iYoCglCPvf+LW5OwELfp1u2svj+QkWGeQMhMlNeXmQIPTJm9vCovCjy4KzGDhzdTFHh4n4zKXPUH+M9NCGm0eR9kiGhYJydpCPwlx4bPlcl3SFwjyzeQp3r8Tu+mCliWAZ9b6/BuDnlSZMkEvXPgtMqYsgbaHm/aCIipDvE/q9qEsM5YfiBFdHQvJQFeYntLdPmtmtD7DRLt3mkmvgEtUisI02HIXyEFiK05cpvNkI3rGqrr2lHO54cjZLeHHyPb/j7EQvufkG0nIGEgIuLrukGcGucAoW6x8m+R1K83dyHZllZQhIQqRdaGYdTZ9dB9iWh5WwEUPrYHATmvxloBOSRRvaTpFNlnPUVoego8OXLxsSUdPYCA5AshbUDOvbEVX9fq+HYfwh7i7OOyAsmcCJFLi1mXiEgDVyRWab7PfmLpYgzYdCCG1IAW118hZoZZXv0x8RQpTdNcn/NQLa4npQQJ0GArSt8zg2RoSZEG4BRpw9el0S4jQi/nsZ5Gy4P8dXmIMUxFiKUMIf5x+rqQJyLuEvT0oFtyBHTMpie0a1yADNHQG5HGGSIjslWdKwJzP5YjpYo7G3jH63nyG1mB0Am1ERHiyGGPMf+6TN+UIuCp6BcNHW2AuHuDocVuQ8bKDz7ZhQGJPVVyJMAIOAIWmlIE5jlivShaH9Eop7H7KERHSIJ09wE9TgUciftpnXSOHIFmXyNN7Yg4Dcd47MhuTd3UAZJMVQz5fjHytOhDd80GfhIBWRx5Qk/ZEj1lc/eUbepTNty/AL2BXKma9nd2AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/common/icon_pledge_none.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/common/icon_pledge_none.png ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAMAAADthUvBAAAAWlBMVEW8vLy7u7u8vLwAAAC7u7v////Kysr8/Pzz8/Pe3t729vbq6uri4uLFxcXNzc3c3NzZ2dn6+vrw8PDBwcHm5ubk5OS/v7/4+PjT09O9vb3Dw8Ps7OzW1tbQ0NA7SPhBAAAABHRSTlPwrSYAJ4s9KgAAAk5JREFUSMe9ltuSoyAQQM0MLSB3QRQv//+bK6DBbEw5O7XJeRAoTR/phkj1/XWr0Bupbl/f1VeF3syquKG3c6sq9HaeHF67Gf1viiT4sZ6dAYCGLsL6gI546Y9DIdEzwl5JBgyZBjL4IU4N9XFIG/QMI2jQG/JU0kKEUIEWZyDCriQab+RbHmvUYpMAdyohwKTYU2Rr2e4SRSMOHE2EIlFmiOjNr7BHbbe98isJf5z7LiFNpIe+Sfh1Vow1mDGp+lyKLAk9R7+SnKfrXEJB/pNE0VVyXZMHicCxaQlNNJeSDnD9I4lRER5vhTZJ2JpQbNYLfSkZmykgxAGm+0wsz6zDrWd3iVW4jZAYnZt5fw2SUvZSItfwgcbLXTKShMGATe6OWTITdUyXW+ofShBPe7ENfxfe9xp0X/a8nMBQe5T4mNABRwBSM5xuRpfKsTpSsOko6dwawu3F1BhMNBbJVjWhtWZN32K+dsSJxEETG0W65AgGSu1mM64hbK/ycNHjtrrGiLxL0pwH0qn2RbokwIAKCkCUv7UlhZBYP64uyBwlrI01IfRcgggYUZKOgRWf3kIMwI8SLzbCXaKwiJIaD+cSgcHIrb+sfZu7I4N5CxEtrSiSwi7hMOTVpUGfSPLbA/cxrgMw9fZTY5bDZpQGp5Y3yMqCyE84UPsSpqBPJajuATDjEwCQPXPB2YcdP8aEuc5MaIaCy08Mc9knVJxLkOcYIpiGp2SYugw61gkUbCHO/2ozFkY1EaYt+g3h4hv/Zj5yJPrI4e4jx9SPHLj/AIqsSKdYreuZAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/common/icon_real.png":
/*!************************************************!*\
  !*** ./src/assets/images/common/icon_real.png ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAMAAADthUvBAAAAhFBMVEVXgf9Xgv9XgP8AAABXgf////9dhf/B0f+rwP+Hpf/k6v/F1P9rkP/4+v/W4P+Nqv/6/P/P2/+WsP+Trv9+nv9zlv9ukv9hiP/d5f+ctf94mv/t8v/2+P/m7P+xxP+Kp/+ku//y9f/v8/9ljP/a4/+Cof/o7v+7zP+1yP+guP/K1/+Zsv+5oLSFAAAABHRSTlPwrSYAJ4s9KgAAAh5JREFUSMfNlouOqjAQhtGdHyp3FYoIglxE3X3/9zuVdrmsEN2caPZLwMnE5Gs7TDPax3Kh0QvRFssPbanRixGKBb2chabRyxGON/BDEjHT900W0TMEq/ucFz6UBCVayqBLhasRQ/2l0OkHDKtHkjAFEsNIgLRb0Bkj9iQ4bVoYMhl0S9r6CZMEsxIXyEiQAW53gPaArZRYcIbAIMkRyaElQTwnCQFLRhYQ0gQnJXFH2VpKuItMZawkmpPEQKBqg34p7GtKotcXm8guTt8SbvhlvpdFuiKfrQkDbBnZACPFzriT5B7R5uAwsts6b2+vL4dFYWEGrUOt8PFO5iUC/VYBJ+Y49V+/eCoDrLL83vFsTXaN1eF+S9a7nIhTcFe6DfxG/ufJr0tJkvUALjKyArdwi3HbVsckZdHv+qQ/rnv2ZkxkmNTDYxdwzkwyK7FrDDp+XpJ7itJtf3LhNBrAL0xFiTlJUEAg765ZSSWeFGMckT4YXmSeSXG8l/SHlTJ5TrMSHZ54SXhhqYgkjyV6A5htn6x8CPzVlIT3N6BtIr1wGT8ryYCyogmJNSoHuIriotnHB3wGv5BUDpDTBOtir3eEbik7LzZhVDdpDcvuJAdDsZuWHIGa+o30W8l9DLneOu7T6XewTZxMV5LEVTTTkgzwJiXEvW2Hx+UFebSpI7rsVFRfSHFNJyVRdqVX8T+DxJ8aV7S3DHdvGVPfMnD/A66nTeBnc/ZPAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/common/icon_real_none.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/common/icon_real_none.png ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAMAAADthUvBAAAAXVBMVEW8vLy7u7u8vLwAAAC7u7v////9/f319fXd3d37+/vLy8v5+fnu7u7l5eXi4uK9vb3U1NTQ0NDGxsby8vLOzs7X19fDw8O/v7/n5+fa2trKysrBwcHf39/p6enr6+vOwKCdAAAABHRSTlPwrSYAJ4s9KgAAAiZJREFUSMfNlouu4iAQQKuXGUoH+qAt9KH3/z9zKWBbL/a6bqLZk6gTLBxmgIbs63zK2BvJTuev7JyxN+MUJ/Z2TlnG3o5zfIAfEpu3iG1uk+dskbYVHUto9FPJRAgOpCkZEIqkb0lJU47dM4kWiFwpjij0b5Ki9uRwCcE6pRopD0yHEol4WX4viHKbnEeBCkHlmgYUe1CxwIjEPQT9kUQjDCEaANdUbt1if7v8LdkeGSRauinG/mSPJD1AcSsO9EflihJZzozNVNwkWiE1ugoDYXe4JjnAHKIZIP9F0jWu/FyMzMAyWu2/RF5p4pOv2jbD1zPZqJaxRG92rXb5KMzt4B2vrMlcBq5wjZFP9rt1szdO/XMX1og+G/bK7jKthwQICqFhYQW+zTLk/RGdR3JV+8dzYmmEkezds60riuJsw/QSQZR54FBiJMDDE6+GAoph2BY+QtL/dEtqHBCJRwiOJBMtggfvrp6Mk8x0m56Ae4QrFFeN5SWLjEcSLQBErllCg53fXQWOcW8FDA0xYoHnkooDhFXtEBzrgcpxjFu4xnJf3BZEaXz415ILAM0skZgr9us5qVHqrYZc9xyH6QWJFQANSygENbvD2JHwg1ZueGWXUkoczCrhKtImkugGydZE1lQqNd+deFMuCV0FXm8Z1NvR4CQjPJXEajWJZGMS0/4FOe7WorrIGMlyraV4XK5Lz95DlDzn/7+uZB+53H3kmvqRC/cf67NGUNQWz6MAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/common/time.png":
/*!*******************************************!*\
  !*** ./src/assets/images/common/time.png ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAZlBMVEUAAACZmZmZmZmampqYmJibm5uZmZmZmZmZmZmZmZmampqZmZmZmZmUlJSZmZmampqampqZmZmWlpaZmZmZmZmZmZmZmZmampqYmJiZmZmZmZmampqYmJibm5uampqampqenp6ZmZmhGzd/AAAAIXRSTlMA+sK9MDSSfN2CVuaaHxTHtZ8R83dxaaurTNOIYUU/OiJ5jHJYAAAAzUlEQVQoz4WS6Q6DMAyDnRZ6ARsMxu6j7/+SO2jC0CrhX5U+1XISg1V4VRFVyhdYqtRR2dAeg1VRl7/EUN0A6AyApiYjYKfd5DKMk7fTu4T0doOFNlud3BwT92TmzDcBSaZYSl76PHWNf4Rav3lscqiJBbxCDkF5KJtHVqEKeRQqUNsNgk7yp2sJdDAjki79I7325kALQ/j+PhumGKyhv0kMCc9OdOLwPLJopMAj86JE1zMvitfLkvXyUURylLVTzgWweynASm1Wypav6Avh0wlC+djhpgAAAABJRU5ErkJggg=="

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

/***/ "./src/assets/images/nv.png":
/*!**********************************!*\
  !*** ./src/assets/images/nv.png ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/nv.png";

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

/***/ "./src/assets/images/user/index/yuepai.png":
/*!*************************************************!*\
  !*** ./src/assets/images/user/index/yuepai.png ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAABelBMVEUAAAAAAAAAAAAAAABAQEAzMzMrKyskJCQuLi4nJyc3NzcwMDA2NjYzMzMuLi41NTUzMzM3Nzc1NTUzMzMwMDAzMzMyMjI0NDQ0NDQzMzMyMjIwMDA0NDQyMjIwMDAzMzMyMjI0NDQxMTEzMzMyMjIyMjIzMzM0NDQzMzMyMjIyMjIyMjIzMzMzMzM0NDQ0NDQzMzMzMzMzMzMzMzMyMjIzMzMzMzMyMjIyMjIyMjIzMzMzMzMzMzMyMjIyMjIzMzMzMzMzMzMyMjI0NDQzMzMyMjIyMjIzMzMzMzMyMjIzMzMzMzMyMjI0NDQzMzMzMzMyMjIzMzMyMjI0NDQzMzMzMzMyMjIyMjIzMzMzMzMyMjIzMzMyMjIzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzPqmi6JAAAAfXRSTlMAAQIDBAUGBwsNDhATFBYYGRwdHiAjJCcsMjM1Njg6PD1AREZHTVBUVVtcZmpucXZ3gYOIiYuMjpOUlZebnZ6goaWnqKusra6wsrO0tre4ubu/wMHCxMXGx8jKztDR0tPb3N3e39/h4uPk5ebo6err7O3v8vP09fb3+Pr8/hfJ7skAAAF7SURBVEjH7ZVXTwJBFEZHulhQECv2XsCKBbAXUFQUUVERGyB2FAVEvv8uG1h3je6MiTxynu79crIzNzOZJaRIgWncjiNPYreVIZuSEJHupNsnwKYjz3oGERVN7gZmhW4GGKTZx3g3CJ0uiSvFL1bVdPAiSxiwieMp4JrLg/ZqUWq45edKiWOiS/D5g1FIF4HABoer7/uavW4PxxngFMIYfNKzqGpJiRdvQpCGQ9r2YIjYAYWU3TaxumZt5zs/Rii20ZcbzF+X68s7ZNJ2fQzI3EQzwEvDVyhlq8+BhRpC9A4gomHZZmAyV40hu2GG7cedOlcpwwiw7CTm+NKGDzndVmZg5dNRQMv49jNcfLmEBGsnTqTyd1b3ii2W3ZU9ljKuKN0Delg2WcneaYupyRwC3MzTIZod/k57tWybyC33nPs0rCR/sAmRNfcPtMjFCc3+yT/sRxzJabLsAHGhmweu9ilcAsui5yQEBlG9aKmK8cNTCn5rZfHvUxA+AWWctuD+3T7EAAAAAElFTkSuQmCC"

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
    icon: "none",
    duration: 3000
  });
};

/***/ })

}]);
//# sourceMappingURL=common.js.map