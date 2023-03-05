(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageMsg/pages/chat/index"],{

/***/ "./TUIKit/debug/GenerateTestUserSig.js":
/*!*********************************************!*\
  !*** ./TUIKit/debug/GenerateTestUserSig.js ***!
  \*********************************************/
/*! exports provided: genTestUserSig */
/*! exports used: genTestUserSig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genTestUserSig; });
/* harmony import */ var _lib_generate_test_usersig_es_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib-generate-test-usersig-es.min.js */ "./TUIKit/debug/lib-generate-test-usersig-es.min.js");

/**
 * 腾讯云 SDKAppId，需要替换为您自己账号下的 SDKAppId。
 *
 * 进入腾讯云实时音视频[控制台](https://console.cloud.tencent.com/rav ) 创建应用，即可看到 SDKAppId，
 * 它是腾讯云用于区分客户的唯一标识。
 */
// const SDKAPPID = 0;

/**
 * 签名过期时间，建议不要设置的过短
 * <p>
 * 时间单位：秒
 * 默认时间：7 x 24 x 60 x 60 = 604800 = 7 天
 */
// const EXPIRETIME = 604800;

/**
 * 计算签名用的加密密钥，获取步骤如下：
 *
 * step1. 进入腾讯云实时音视频[控制台](https://console.cloud.tencent.com/rav )，如果还没有应用就创建一个，
 * step2. 单击“应用配置”进入基础配置页面，并进一步找到“帐号体系集成”部分。
 * step3. 点击“查看密钥”按钮，就可以看到计算 UserSig 使用的加密的密钥了，请将其拷贝并复制到如下的变量中
 *
 * 注意：该方案仅适用于调试Demo，正式上线前请将 UserSig 计算代码和密钥迁移到您的后台服务器上，以避免加密密钥泄露导致的流量盗用。
 * 文档：https://cloud.tencent.com/document/product/647/17275#Server
 */
// const SECRETKEY = '';

/*
 * Module:   GenerateTestUserSig
 *
 * Function: 用于生成测试用的 UserSig，UserSig 是腾讯云为其云服务设计的一种安全保护签名。
 *           其计算方法是对 SDKAppID、UserID 和 EXPIRETIME 进行加密，加密算法为 HMAC-SHA256。
 *
 * Attention: 请不要将如下代码发布到您的线上正式版本的 App 中，原因如下：
 *
 *            本文件中的代码虽然能够正确计算出 UserSig，但仅适合快速调通 SDK 的基本功能，不适合线上产品，
 *            这是因为客户端代码中的 SECRETKEY 很容易被反编译逆向破解，尤其是 Web 端的代码被破解的难度几乎为零。
 *            一旦您的密钥泄露，攻击者就可以计算出正确的 UserSig 来盗用您的腾讯云流量。
 *
 *            正确的做法是将 UserSig 的计算代码和加密密钥放在您的业务服务器上，然后由 App 按需向您的服务器获取实时算出的 UserSig。
 *            由于破解服务器的成本要高于破解客户端 App，所以服务器计算的方案能够更好地保护您的加密密钥。
 *
 * Reference：https://cloud.tencent.com/document/product/647/17275#Server
 */

var genTestUserSig = function genTestUserSig(config) {
  var SDKAPPID = config.SDKAPPID,
      SECRETKEY = config.SECRETKEY,
      EXPIRETIME = config.EXPIRETIME,
      userID = config.userID;
  var generator = new _lib_generate_test_usersig_es_min_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](SDKAPPID, SECRETKEY, EXPIRETIME);
  var userSig = generator.genTestUserSig(userID);
  return {
    sdkAppID: SDKAPPID,
    userSig: userSig
  };
}; // export default { genTestUserSig };
// module.exports = {
//   genTestUserSig,
// };

/***/ }),

/***/ "./TUIKit/debug/lib-generate-test-usersig-es.min.js":
/*!**********************************************************!*\
  !*** ./TUIKit/debug/lib-generate-test-usersig-es.min.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, window) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");




/*eslint-disable*/
var e = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
    t = [],
    r = [],
    n = "undefined" != typeof Uint8Array ? Uint8Array : Array,
    i = !1;

function o() {
  i = !0;

  for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0, o = e.length; n < o; ++n) {
    t[n] = e[n], r[e.charCodeAt(n)] = n;
  }

  r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63;
}

function a(e, r, n) {
  for (var i, o, a = [], s = r; s < n; s += 3) {
    i = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2], a.push(t[(o = i) >> 18 & 63] + t[o >> 12 & 63] + t[o >> 6 & 63] + t[63 & o]);
  }

  return a.join("");
}

function s(e) {
  var r;
  i || o();

  for (var n = e.length, s = n % 3, h = "", l = [], f = 0, c = n - s; f < c; f += 16383) {
    l.push(a(e, f, f + 16383 > c ? c : f + 16383));
  }

  return 1 === s ? (r = e[n - 1], h += t[r >> 2], h += t[r << 4 & 63], h += "==") : 2 === s && (r = (e[n - 2] << 8) + e[n - 1], h += t[r >> 10], h += t[r >> 4 & 63], h += t[r << 2 & 63], h += "="), l.push(h), l.join("");
}

function h(e, t, r, n, i) {
  var o,
      a,
      s = 8 * i - n - 1,
      h = (1 << s) - 1,
      l = h >> 1,
      f = -7,
      c = r ? i - 1 : 0,
      u = r ? -1 : 1,
      d = e[t + c];

  for (c += u, o = d & (1 << -f) - 1, d >>= -f, f += s; f > 0; o = 256 * o + e[t + c], c += u, f -= 8) {
    ;
  }

  for (a = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; a = 256 * a + e[t + c], c += u, f -= 8) {
    ;
  }

  if (0 === o) o = 1 - l;else {
    if (o === h) return a ? NaN : 1 / 0 * (d ? -1 : 1);
    a += Math.pow(2, n), o -= l;
  }
  return (d ? -1 : 1) * a * Math.pow(2, o - n);
}

function l(e, t, r, n, i, o) {
  var a,
      s,
      h,
      l = 8 * o - i - 1,
      f = (1 << l) - 1,
      c = f >> 1,
      u = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      d = n ? 0 : o - 1,
      p = n ? 1 : -1,
      _ = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = f) : (a = Math.floor(Math.log(t) / Math.LN2), t * (h = Math.pow(2, -a)) < 1 && (a--, h *= 2), (t += a + c >= 1 ? u / h : u * Math.pow(2, 1 - c)) * h >= 2 && (a++, h /= 2), a + c >= f ? (s = 0, a = f) : a + c >= 1 ? (s = (t * h - 1) * Math.pow(2, i), a += c) : (s = t * Math.pow(2, c - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + d] = 255 & s, d += p, s /= 256, i -= 8) {
    ;
  }

  for (a = a << i | s, l += i; l > 0; e[r + d] = 255 & a, d += p, a /= 256, l -= 8) {
    ;
  }

  e[r + d - p] |= 128 * _;
}

var f = {}.toString,
    c = Array.isArray || function (e) {
  return "[object Array]" == f.call(e);
};

function u() {
  return p.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}

function d(e, t) {
  if (u() < t) throw new RangeError("Invalid typed array length");
  return p.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = p.prototype : (null === e && (e = new p(t)), e.length = t), e;
}

function p(e, t, r) {
  if (!(p.TYPED_ARRAY_SUPPORT || this instanceof p)) return new p(e, t, r);

  if ("number" == typeof e) {
    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
    return v(this, e);
  }

  return _(this, e, t, r);
}

function _(e, t, r, n) {
  if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
  return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, r, n) {
    if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
    if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
    t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
    p.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = p.prototype : e = w(e, t);
    return e;
  }(e, t, r, n) : "string" == typeof t ? function (e, t, r) {
    "string" == typeof r && "" !== r || (r = "utf8");
    if (!p.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
    var n = 0 | m(t, r),
        i = (e = d(e, n)).write(t, r);
    i !== n && (e = e.slice(0, i));
    return e;
  }(e, t, r) : function (e, t) {
    if (y(t)) {
      var r = 0 | b(t.length);
      return 0 === (e = d(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
    }

    if (t) {
      if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? d(e, 0) : w(e, t);
      if ("Buffer" === t.type && c(t.data)) return w(e, t.data);
    }

    var n;
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
  }(e, t);
}

function g(e) {
  if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
  if (e < 0) throw new RangeError('"size" argument must not be negative');
}

function v(e, t) {
  if (g(t), e = d(e, t < 0 ? 0 : 0 | b(t)), !p.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) {
    e[r] = 0;
  }
  return e;
}

function w(e, t) {
  var r = t.length < 0 ? 0 : 0 | b(t.length);
  e = d(e, r);

  for (var n = 0; n < r; n += 1) {
    e[n] = 255 & t[n];
  }

  return e;
}

function b(e) {
  if (e >= u()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u().toString(16) + " bytes");
  return 0 | e;
}

function y(e) {
  return !(null == e || !e._isBuffer);
}

function m(e, t) {
  if (y(e)) return e.length;
  if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
  "string" != typeof e && (e = "" + e);
  var r = e.length;
  if (0 === r) return 0;

  for (var n = !1;;) {
    switch (t) {
      case "ascii":
      case "latin1":
      case "binary":
        return r;

      case "utf8":
      case "utf-8":
      case void 0:
        return q(e).length;

      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * r;

      case "hex":
        return r >>> 1;

      case "base64":
        return V(e).length;

      default:
        if (n) return q(e).length;
        t = ("" + t).toLowerCase(), n = !0;
    }
  }
}

function k(e, t, r) {
  var n = !1;
  if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
  if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
  if ((r >>>= 0) <= (t >>>= 0)) return "";

  for (e || (e = "utf8");;) {
    switch (e) {
      case "hex":
        return O(this, t, r);

      case "utf8":
      case "utf-8":
        return C(this, t, r);

      case "ascii":
        return I(this, t, r);

      case "latin1":
      case "binary":
        return P(this, t, r);

      case "base64":
        return M(this, t, r);

      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return U(this, t, r);

      default:
        if (n) throw new TypeError("Unknown encoding: " + e);
        e = (e + "").toLowerCase(), n = !0;
    }
  }
}

function E(e, t, r) {
  var n = e[t];
  e[t] = e[r], e[r] = n;
}

function S(e, t, r, n, i) {
  if (0 === e.length) return -1;

  if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
    if (i) return -1;
    r = e.length - 1;
  } else if (r < 0) {
    if (!i) return -1;
    r = 0;
  }

  if ("string" == typeof t && (t = p.from(t, n)), y(t)) return 0 === t.length ? -1 : x(e, t, r, n, i);
  if ("number" == typeof t) return t &= 255, p.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : x(e, [t], r, n, i);
  throw new TypeError("val must be string, number or Buffer");
}

function x(e, t, r, n, i) {
  var o,
      a = 1,
      s = e.length,
      h = t.length;

  if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
    if (e.length < 2 || t.length < 2) return -1;
    a = 2, s /= 2, h /= 2, r /= 2;
  }

  function l(e, t) {
    return 1 === a ? e[t] : e.readUInt16BE(t * a);
  }

  if (i) {
    var f = -1;

    for (o = r; o < s; o++) {
      if (l(e, o) === l(t, -1 === f ? 0 : o - f)) {
        if (-1 === f && (f = o), o - f + 1 === h) return f * a;
      } else -1 !== f && (o -= o - f), f = -1;
    }
  } else for (r + h > s && (r = s - h), o = r; o >= 0; o--) {
    for (var c = !0, u = 0; u < h; u++) {
      if (l(e, o + u) !== l(t, u)) {
        c = !1;
        break;
      }
    }

    if (c) return o;
  }

  return -1;
}

function R(e, t, r, n) {
  r = Number(r) || 0;
  var i = e.length - r;
  n ? (n = Number(n)) > i && (n = i) : n = i;
  var o = t.length;
  if (o % 2 != 0) throw new TypeError("Invalid hex string");
  n > o / 2 && (n = o / 2);

  for (var a = 0; a < n; ++a) {
    var s = parseInt(t.substr(2 * a, 2), 16);
    if (isNaN(s)) return a;
    e[r + a] = s;
  }

  return a;
}

function A(e, t, r, n) {
  return G(q(t, e.length - r), e, r, n);
}

function B(e, t, r, n) {
  return G(function (e) {
    for (var t = [], r = 0; r < e.length; ++r) {
      t.push(255 & e.charCodeAt(r));
    }

    return t;
  }(t), e, r, n);
}

function z(e, t, r, n) {
  return B(e, t, r, n);
}

function L(e, t, r, n) {
  return G(V(t), e, r, n);
}

function T(e, t, r, n) {
  return G(function (e, t) {
    for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) {
      r = e.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
    }

    return o;
  }(t, e.length - r), e, r, n);
}

function M(e, t, r) {
  return 0 === t && r === e.length ? s(e) : s(e.slice(t, r));
}

function C(e, t, r) {
  r = Math.min(e.length, r);

  for (var n = [], i = t; i < r;) {
    var o,
        a,
        s,
        h,
        l = e[i],
        f = null,
        c = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
    if (i + c <= r) switch (c) {
      case 1:
        l < 128 && (f = l);
        break;

      case 2:
        128 == (192 & (o = e[i + 1])) && (h = (31 & l) << 6 | 63 & o) > 127 && (f = h);
        break;

      case 3:
        o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (h = (15 & l) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (h < 55296 || h > 57343) && (f = h);
        break;

      case 4:
        o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (h = (15 & l) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && h < 1114112 && (f = h);
    }
    null === f ? (f = 65533, c = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += c;
  }

  return function (e) {
    var t = e.length;
    if (t <= D) return String.fromCharCode.apply(String, e);
    var r = "",
        n = 0;

    for (; n < t;) {
      r += String.fromCharCode.apply(String, e.slice(n, n += D));
    }

    return r;
  }(n);
}

p.TYPED_ARRAY_SUPPORT = void 0 === e.TYPED_ARRAY_SUPPORT || e.TYPED_ARRAY_SUPPORT, p.poolSize = 8192, p._augment = function (e) {
  return e.__proto__ = p.prototype, e;
}, p.from = function (e, t, r) {
  return _(null, e, t, r);
}, p.TYPED_ARRAY_SUPPORT && (p.prototype.__proto__ = Uint8Array.prototype, p.__proto__ = Uint8Array), p.alloc = function (e, t, r) {
  return function (e, t, r, n) {
    return g(t), t <= 0 ? d(e, t) : void 0 !== r ? "string" == typeof n ? d(e, t).fill(r, n) : d(e, t).fill(r) : d(e, t);
  }(null, e, t, r);
}, p.allocUnsafe = function (e) {
  return v(null, e);
}, p.allocUnsafeSlow = function (e) {
  return v(null, e);
}, p.isBuffer = $, p.compare = function (e, t) {
  if (!y(e) || !y(t)) throw new TypeError("Arguments must be Buffers");
  if (e === t) return 0;

  for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i) {
    if (e[i] !== t[i]) {
      r = e[i], n = t[i];
      break;
    }
  }

  return r < n ? -1 : n < r ? 1 : 0;
}, p.isEncoding = function (e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;

    default:
      return !1;
  }
}, p.concat = function (e, t) {
  if (!c(e)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === e.length) return p.alloc(0);
  var r;
  if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) {
    t += e[r].length;
  }
  var n = p.allocUnsafe(t),
      i = 0;

  for (r = 0; r < e.length; ++r) {
    var o = e[r];
    if (!y(o)) throw new TypeError('"list" argument must be an Array of Buffers');
    o.copy(n, i), i += o.length;
  }

  return n;
}, p.byteLength = m, p.prototype._isBuffer = !0, p.prototype.swap16 = function () {
  var e = this.length;
  if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

  for (var t = 0; t < e; t += 2) {
    E(this, t, t + 1);
  }

  return this;
}, p.prototype.swap32 = function () {
  var e = this.length;
  if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

  for (var t = 0; t < e; t += 4) {
    E(this, t, t + 3), E(this, t + 1, t + 2);
  }

  return this;
}, p.prototype.swap64 = function () {
  var e = this.length;
  if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

  for (var t = 0; t < e; t += 8) {
    E(this, t, t + 7), E(this, t + 1, t + 6), E(this, t + 2, t + 5), E(this, t + 3, t + 4);
  }

  return this;
}, p.prototype.toString = function () {
  var e = 0 | this.length;
  return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : k.apply(this, arguments);
}, p.prototype.equals = function (e) {
  if (!y(e)) throw new TypeError("Argument must be a Buffer");
  return this === e || 0 === p.compare(this, e);
}, p.prototype.inspect = function () {
  var e = "";
  return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">";
}, p.prototype.compare = function (e, t, r, n, i) {
  if (!y(e)) throw new TypeError("Argument must be a Buffer");
  if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
  if (n >= i && t >= r) return 0;
  if (n >= i) return -1;
  if (t >= r) return 1;
  if (this === e) return 0;

  for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), s = Math.min(o, a), h = this.slice(n, i), l = e.slice(t, r), f = 0; f < s; ++f) {
    if (h[f] !== l[f]) {
      o = h[f], a = l[f];
      break;
    }
  }

  return o < a ? -1 : a < o ? 1 : 0;
}, p.prototype.includes = function (e, t, r) {
  return -1 !== this.indexOf(e, t, r);
}, p.prototype.indexOf = function (e, t, r) {
  return S(this, e, t, r, !0);
}, p.prototype.lastIndexOf = function (e, t, r) {
  return S(this, e, t, r, !1);
}, p.prototype.write = function (e, t, r, n) {
  if (void 0 === t) n = "utf8", r = this.length, t = 0;else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;else {
    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
  }
  var i = this.length - t;
  if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  n || (n = "utf8");

  for (var o = !1;;) {
    switch (n) {
      case "hex":
        return R(this, e, t, r);

      case "utf8":
      case "utf-8":
        return A(this, e, t, r);

      case "ascii":
        return B(this, e, t, r);

      case "latin1":
      case "binary":
        return z(this, e, t, r);

      case "base64":
        return L(this, e, t, r);

      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return T(this, e, t, r);

      default:
        if (o) throw new TypeError("Unknown encoding: " + n);
        n = ("" + n).toLowerCase(), o = !0;
    }
  }
}, p.prototype.toJSON = function () {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
var D = 4096;

function I(e, t, r) {
  var n = "";
  r = Math.min(e.length, r);

  for (var i = t; i < r; ++i) {
    n += String.fromCharCode(127 & e[i]);
  }

  return n;
}

function P(e, t, r) {
  var n = "";
  r = Math.min(e.length, r);

  for (var i = t; i < r; ++i) {
    n += String.fromCharCode(e[i]);
  }

  return n;
}

function O(e, t, r) {
  var n = e.length;
  (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);

  for (var i = "", o = t; o < r; ++o) {
    i += X(e[o]);
  }

  return i;
}

function U(e, t, r) {
  for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) {
    i += String.fromCharCode(n[o] + 256 * n[o + 1]);
  }

  return i;
}

function H(e, t, r) {
  if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
  if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
}

function F(e, t, r, n, i, o) {
  if (!y(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
  if (r + n > e.length) throw new RangeError("Index out of range");
}

function N(e, t, r, n) {
  t < 0 && (t = 65535 + t + 1);

  for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) {
    e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
  }
}

function Z(e, t, r, n) {
  t < 0 && (t = 4294967295 + t + 1);

  for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) {
    e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255;
  }
}

function j(e, t, r, n, i, o) {
  if (r + n > e.length) throw new RangeError("Index out of range");
  if (r < 0) throw new RangeError("Index out of range");
}

function W(e, t, r, n, i) {
  return i || j(e, 0, r, 4), l(e, t, r, n, 23, 4), r + 4;
}

function Y(e, t, r, n, i) {
  return i || j(e, 0, r, 8), l(e, t, r, n, 52, 8), r + 8;
}

p.prototype.slice = function (e, t) {
  var r,
      n = this.length;
  if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), p.TYPED_ARRAY_SUPPORT) (r = this.subarray(e, t)).__proto__ = p.prototype;else {
    var i = t - e;
    r = new p(i, void 0);

    for (var o = 0; o < i; ++o) {
      r[o] = this[o + e];
    }
  }
  return r;
}, p.prototype.readUIntLE = function (e, t, r) {
  e |= 0, t |= 0, r || H(e, t, this.length);

  for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
    n += this[e + o] * i;
  }

  return n;
}, p.prototype.readUIntBE = function (e, t, r) {
  e |= 0, t |= 0, r || H(e, t, this.length);

  for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) {
    n += this[e + --t] * i;
  }

  return n;
}, p.prototype.readUInt8 = function (e, t) {
  return t || H(e, 1, this.length), this[e];
}, p.prototype.readUInt16LE = function (e, t) {
  return t || H(e, 2, this.length), this[e] | this[e + 1] << 8;
}, p.prototype.readUInt16BE = function (e, t) {
  return t || H(e, 2, this.length), this[e] << 8 | this[e + 1];
}, p.prototype.readUInt32LE = function (e, t) {
  return t || H(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
}, p.prototype.readUInt32BE = function (e, t) {
  return t || H(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
}, p.prototype.readIntLE = function (e, t, r) {
  e |= 0, t |= 0, r || H(e, t, this.length);

  for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
    n += this[e + o] * i;
  }

  return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
}, p.prototype.readIntBE = function (e, t, r) {
  e |= 0, t |= 0, r || H(e, t, this.length);

  for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) {
    o += this[e + --n] * i;
  }

  return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
}, p.prototype.readInt8 = function (e, t) {
  return t || H(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
}, p.prototype.readInt16LE = function (e, t) {
  t || H(e, 2, this.length);
  var r = this[e] | this[e + 1] << 8;
  return 32768 & r ? 4294901760 | r : r;
}, p.prototype.readInt16BE = function (e, t) {
  t || H(e, 2, this.length);
  var r = this[e + 1] | this[e] << 8;
  return 32768 & r ? 4294901760 | r : r;
}, p.prototype.readInt32LE = function (e, t) {
  return t || H(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
}, p.prototype.readInt32BE = function (e, t) {
  return t || H(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
}, p.prototype.readFloatLE = function (e, t) {
  return t || H(e, 4, this.length), h(this, e, !0, 23, 4);
}, p.prototype.readFloatBE = function (e, t) {
  return t || H(e, 4, this.length), h(this, e, !1, 23, 4);
}, p.prototype.readDoubleLE = function (e, t) {
  return t || H(e, 8, this.length), h(this, e, !0, 52, 8);
}, p.prototype.readDoubleBE = function (e, t) {
  return t || H(e, 8, this.length), h(this, e, !1, 52, 8);
}, p.prototype.writeUIntLE = function (e, t, r, n) {
  (e = +e, t |= 0, r |= 0, n) || F(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
  var i = 1,
      o = 0;

  for (this[t] = 255 & e; ++o < r && (i *= 256);) {
    this[t + o] = e / i & 255;
  }

  return t + r;
}, p.prototype.writeUIntBE = function (e, t, r, n) {
  (e = +e, t |= 0, r |= 0, n) || F(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
  var i = r - 1,
      o = 1;

  for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) {
    this[t + i] = e / o & 255;
  }

  return t + r;
}, p.prototype.writeUInt8 = function (e, t, r) {
  return e = +e, t |= 0, r || F(this, e, t, 1, 255, 0), p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
}, p.prototype.writeUInt16LE = function (e, t, r) {
  return e = +e, t |= 0, r || F(this, e, t, 2, 65535, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : N(this, e, t, !0), t + 2;
}, p.prototype.writeUInt16BE = function (e, t, r) {
  return e = +e, t |= 0, r || F(this, e, t, 2, 65535, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : N(this, e, t, !1), t + 2;
}, p.prototype.writeUInt32LE = function (e, t, r) {
  return e = +e, t |= 0, r || F(this, e, t, 4, 4294967295, 0), p.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : Z(this, e, t, !0), t + 4;
}, p.prototype.writeUInt32BE = function (e, t, r) {
  return e = +e, t |= 0, r || F(this, e, t, 4, 4294967295, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Z(this, e, t, !1), t + 4;
}, p.prototype.writeIntLE = function (e, t, r, n) {
  if (e = +e, t |= 0, !n) {
    var i = Math.pow(2, 8 * r - 1);
    F(this, e, t, r, i - 1, -i);
  }

  var o = 0,
      a = 1,
      s = 0;

  for (this[t] = 255 & e; ++o < r && (a *= 256);) {
    e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
  }

  return t + r;
}, p.prototype.writeIntBE = function (e, t, r, n) {
  if (e = +e, t |= 0, !n) {
    var i = Math.pow(2, 8 * r - 1);
    F(this, e, t, r, i - 1, -i);
  }

  var o = r - 1,
      a = 1,
      s = 0;

  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
    e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
  }

  return t + r;
}, p.prototype.writeInt8 = function (e, t, r) {
  return e = +e, t |= 0, r || F(this, e, t, 1, 127, -128), p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
}, p.prototype.writeInt16LE = function (e, t, r) {
  return e = +e, t |= 0, r || F(this, e, t, 2, 32767, -32768), p.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : N(this, e, t, !0), t + 2;
}, p.prototype.writeInt16BE = function (e, t, r) {
  return e = +e, t |= 0, r || F(this, e, t, 2, 32767, -32768), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : N(this, e, t, !1), t + 2;
}, p.prototype.writeInt32LE = function (e, t, r) {
  return e = +e, t |= 0, r || F(this, e, t, 4, 2147483647, -2147483648), p.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : Z(this, e, t, !0), t + 4;
}, p.prototype.writeInt32BE = function (e, t, r) {
  return e = +e, t |= 0, r || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Z(this, e, t, !1), t + 4;
}, p.prototype.writeFloatLE = function (e, t, r) {
  return W(this, e, t, !0, r);
}, p.prototype.writeFloatBE = function (e, t, r) {
  return W(this, e, t, !1, r);
}, p.prototype.writeDoubleLE = function (e, t, r) {
  return Y(this, e, t, !0, r);
}, p.prototype.writeDoubleBE = function (e, t, r) {
  return Y(this, e, t, !1, r);
}, p.prototype.copy = function (e, t, r, n) {
  if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
  if (0 === e.length || 0 === this.length) return 0;
  if (t < 0) throw new RangeError("targetStart out of bounds");
  if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
  if (n < 0) throw new RangeError("sourceEnd out of bounds");
  n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
  var i,
      o = n - r;
  if (this === e && r < t && t < n) for (i = o - 1; i >= 0; --i) {
    e[i + t] = this[i + r];
  } else if (o < 1e3 || !p.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) {
    e[i + t] = this[i + r];
  } else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
  return o;
}, p.prototype.fill = function (e, t, r, n) {
  if ("string" == typeof e) {
    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
      var i = e.charCodeAt(0);
      i < 256 && (e = i);
    }

    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
    if ("string" == typeof n && !p.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
  } else "number" == typeof e && (e &= 255);

  if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
  if (r <= t) return this;
  var o;
  if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < r; ++o) {
    this[o] = e;
  } else {
    var a = y(e) ? e : q(new p(e, n).toString()),
        s = a.length;

    for (o = 0; o < r - t; ++o) {
      this[o + t] = a[o % s];
    }
  }
  return this;
};
var K = /[^+\/0-9A-Za-z-_]/g;

function X(e) {
  return e < 16 ? "0" + e.toString(16) : e.toString(16);
}

function q(e, t) {
  var r;
  t = t || 1 / 0;

  for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
    if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
      if (!i) {
        if (r > 56319) {
          (t -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }

        if (a + 1 === n) {
          (t -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }

        i = r;
        continue;
      }

      if (r < 56320) {
        (t -= 3) > -1 && o.push(239, 191, 189), i = r;
        continue;
      }

      r = 65536 + (i - 55296 << 10 | r - 56320);
    } else i && (t -= 3) > -1 && o.push(239, 191, 189);

    if (i = null, r < 128) {
      if ((t -= 1) < 0) break;
      o.push(r);
    } else if (r < 2048) {
      if ((t -= 2) < 0) break;
      o.push(r >> 6 | 192, 63 & r | 128);
    } else if (r < 65536) {
      if ((t -= 3) < 0) break;
      o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
    } else {
      if (!(r < 1114112)) throw new Error("Invalid code point");
      if ((t -= 4) < 0) break;
      o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
    }
  }

  return o;
}

function V(e) {
  return function (e) {
    var t, a, s, h, l, f;
    i || o();
    var c = e.length;
    if (c % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    l = "=" === e[c - 2] ? 2 : "=" === e[c - 1] ? 1 : 0, f = new n(3 * c / 4 - l), s = l > 0 ? c - 4 : c;
    var u = 0;

    for (t = 0, a = 0; t < s; t += 4, a += 3) {
      h = r[e.charCodeAt(t)] << 18 | r[e.charCodeAt(t + 1)] << 12 | r[e.charCodeAt(t + 2)] << 6 | r[e.charCodeAt(t + 3)], f[u++] = h >> 16 & 255, f[u++] = h >> 8 & 255, f[u++] = 255 & h;
    }

    return 2 === l ? (h = r[e.charCodeAt(t)] << 2 | r[e.charCodeAt(t + 1)] >> 4, f[u++] = 255 & h) : 1 === l && (h = r[e.charCodeAt(t)] << 10 | r[e.charCodeAt(t + 1)] << 4 | r[e.charCodeAt(t + 2)] >> 2, f[u++] = h >> 8 & 255, f[u++] = 255 & h), f;
  }(function (e) {
    if ((e = function (e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    }(e).replace(K, "")).length < 2) return "";

    for (; e.length % 4 != 0;) {
      e += "=";
    }

    return e;
  }(e));
}

function G(e, t, r, n) {
  for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) {
    t[i + r] = e[i];
  }

  return i;
}

function $(e) {
  return null != e && (!!e._isBuffer || J(e) || function (e) {
    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && J(e.slice(0, 0));
  }(e));
}

function J(e) {
  return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
}

"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

function Q(e, t) {
  return e(t = {
    exports: {}
  }, t.exports), t.exports;
}

var ee = Q(function (e, t) {
  var r;
  e.exports = (r = r || function (e, t) {
    var r = Object.create || function () {
      function e() {}

      return function (t) {
        var r;
        return e.prototype = t, r = new e(), e.prototype = null, r;
      };
    }(),
        n = {},
        i = n.lib = {},
        o = i.Base = {
      extend: function extend(e) {
        var t = r(this);
        return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
          t.$super.init.apply(this, arguments);
        }), t.init.prototype = t, t.$super = this, t;
      },
      create: function create() {
        var e = this.extend();
        return e.init.apply(e, arguments), e;
      },
      init: function init() {},
      mixIn: function mixIn(e) {
        for (var t in e) {
          e.hasOwnProperty(t) && (this[t] = e[t]);
        }

        e.hasOwnProperty("toString") && (this.toString = e.toString);
      },
      clone: function clone() {
        return this.init.prototype.extend(this);
      }
    },
        a = i.WordArray = o.extend({
      init: function init(e, t) {
        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
      },
      toString: function toString(e) {
        return (e || h).stringify(this);
      },
      concat: function concat(e) {
        var t = this.words,
            r = e.words,
            n = this.sigBytes,
            i = e.sigBytes;
        if (this.clamp(), n % 4) for (var o = 0; o < i; o++) {
          var a = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
          t[n + o >>> 2] |= a << 24 - (n + o) % 4 * 8;
        } else for (var o = 0; o < i; o += 4) {
          t[n + o >>> 2] = r[o >>> 2];
        }
        return this.sigBytes += i, this;
      },
      clamp: function clamp() {
        var t = this.words,
            r = this.sigBytes;
        t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, t.length = e.ceil(r / 4);
      },
      clone: function clone() {
        var e = o.clone.call(this);
        return e.words = this.words.slice(0), e;
      },
      random: function random(t) {
        for (var r, n = [], i = function i(t) {
          var t = t,
              r = 987654321,
              n = 4294967295;
          return function () {
            var i = ((r = 36969 * (65535 & r) + (r >> 16) & n) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & n) & n;
            return i /= 4294967296, (i += .5) * (e.random() > .5 ? 1 : -1);
          };
        }, o = 0; o < t; o += 4) {
          var s = i(4294967296 * (r || e.random()));
          r = 987654071 * s(), n.push(4294967296 * s() | 0);
        }

        return new a.init(n, t);
      }
    }),
        s = n.enc = {},
        h = s.Hex = {
      stringify: function stringify(e) {
        for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
          var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
          n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
        }

        return n.join("");
      },
      parse: function parse(e) {
        for (var t = e.length, r = [], n = 0; n < t; n += 2) {
          r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
        }

        return new a.init(r, t / 2);
      }
    },
        l = s.Latin1 = {
      stringify: function stringify(e) {
        for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
          var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
          n.push(String.fromCharCode(o));
        }

        return n.join("");
      },
      parse: function parse(e) {
        for (var t = e.length, r = [], n = 0; n < t; n++) {
          r[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
        }

        return new a.init(r, t);
      }
    },
        f = s.Utf8 = {
      stringify: function stringify(e) {
        try {
          return decodeURIComponent(escape(l.stringify(e)));
        } catch (e) {
          throw new Error("Malformed UTF-8 data");
        }
      },
      parse: function parse(e) {
        return l.parse(unescape(encodeURIComponent(e)));
      }
    },
        c = i.BufferedBlockAlgorithm = o.extend({
      reset: function reset() {
        this._data = new a.init(), this._nDataBytes = 0;
      },
      _append: function _append(e) {
        "string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
      },
      _process: function _process(t) {
        var r = this._data,
            n = r.words,
            i = r.sigBytes,
            o = this.blockSize,
            s = 4 * o,
            h = i / s,
            l = (h = t ? e.ceil(h) : e.max((0 | h) - this._minBufferSize, 0)) * o,
            f = e.min(4 * l, i);

        if (l) {
          for (var c = 0; c < l; c += o) {
            this._doProcessBlock(n, c);
          }

          var u = n.splice(0, l);
          r.sigBytes -= f;
        }

        return new a.init(u, f);
      },
      clone: function clone() {
        var e = o.clone.call(this);
        return e._data = this._data.clone(), e;
      },
      _minBufferSize: 0
    }),
        u = (i.Hasher = c.extend({
      cfg: o.extend(),
      init: function init(e) {
        this.cfg = this.cfg.extend(e), this.reset();
      },
      reset: function reset() {
        c.reset.call(this), this._doReset();
      },
      update: function update(e) {
        return this._append(e), this._process(), this;
      },
      finalize: function finalize(e) {
        e && this._append(e);

        var t = this._doFinalize();

        return t;
      },
      blockSize: 16,
      _createHelper: function _createHelper(e) {
        return function (t, r) {
          return new e.init(r).finalize(t);
        };
      },
      _createHmacHelper: function _createHmacHelper(e) {
        return function (t, r) {
          return new u.HMAC.init(e, r).finalize(t);
        };
      }
    }), n.algo = {});

    return n;
  }(Math), r);
}),
    te = (Q(function (e, t) {
  var r, n, i, o, a, s;
  e.exports = (i = (n = r = ee).lib, o = i.Base, a = i.WordArray, (s = n.x64 = {}).Word = o.extend({
    init: function init(e, t) {
      this.high = e, this.low = t;
    }
  }), s.WordArray = o.extend({
    init: function init(e, t) {
      e = this.words = e || [], this.sigBytes = null != t ? t : 8 * e.length;
    },
    toX32: function toX32() {
      for (var e = this.words, t = e.length, r = [], n = 0; n < t; n++) {
        var i = e[n];
        r.push(i.high), r.push(i.low);
      }

      return a.create(r, this.sigBytes);
    },
    clone: function clone() {
      for (var e = o.clone.call(this), t = e.words = this.words.slice(0), r = t.length, n = 0; n < r; n++) {
        t[n] = t[n].clone();
      }

      return e;
    }
  }), r);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function () {
    if ("function" == typeof ArrayBuffer) {
      var e = r.lib.WordArray,
          t = e.init;
      (e.init = function (e) {
        if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
          for (var r = e.byteLength, n = [], i = 0; i < r; i++) {
            n[i >>> 2] |= e[i] << 24 - i % 4 * 8;
          }

          t.call(this, n, r);
        } else t.apply(this, arguments);
      }).prototype = e;
    }
  }(), r.lib.WordArray);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function () {
    var e = r,
        t = e.lib.WordArray,
        n = e.enc;

    function i(e) {
      return e << 8 & 4278255360 | e >>> 8 & 16711935;
    }

    n.Utf16 = n.Utf16BE = {
      stringify: function stringify(e) {
        for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i += 2) {
          var o = t[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
          n.push(String.fromCharCode(o));
        }

        return n.join("");
      },
      parse: function parse(e) {
        for (var r = e.length, n = [], i = 0; i < r; i++) {
          n[i >>> 1] |= e.charCodeAt(i) << 16 - i % 2 * 16;
        }

        return t.create(n, 2 * r);
      }
    }, n.Utf16LE = {
      stringify: function stringify(e) {
        for (var t = e.words, r = e.sigBytes, n = [], o = 0; o < r; o += 2) {
          var a = i(t[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
          n.push(String.fromCharCode(a));
        }

        return n.join("");
      },
      parse: function parse(e) {
        for (var r = e.length, n = [], o = 0; o < r; o++) {
          n[o >>> 1] |= i(e.charCodeAt(o) << 16 - o % 2 * 16);
        }

        return t.create(n, 2 * r);
      }
    };
  }(), r.enc.Utf16);
}), Q(function (e, t) {
  var r, n, i;
  e.exports = (i = (n = r = ee).lib.WordArray, n.enc.Base64 = {
    stringify: function stringify(e) {
      var t = e.words,
          r = e.sigBytes,
          n = this._map;
      e.clamp();

      for (var i = [], o = 0; o < r; o += 3) {
        for (var a = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, s = 0; s < 4 && o + .75 * s < r; s++) {
          i.push(n.charAt(a >>> 6 * (3 - s) & 63));
        }
      }

      var h = n.charAt(64);
      if (h) for (; i.length % 4;) {
        i.push(h);
      }
      return i.join("");
    },
    parse: function parse(e) {
      var t = e.length,
          r = this._map,
          n = this._reverseMap;

      if (!n) {
        n = this._reverseMap = [];

        for (var o = 0; o < r.length; o++) {
          n[r.charCodeAt(o)] = o;
        }
      }

      var a = r.charAt(64);

      if (a) {
        var s = e.indexOf(a);
        -1 !== s && (t = s);
      }

      return function (e, t, r) {
        for (var n = [], o = 0, a = 0; a < t; a++) {
          if (a % 4) {
            var s = r[e.charCodeAt(a - 1)] << a % 4 * 2,
                h = r[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
            n[o >>> 2] |= (s | h) << 24 - o % 4 * 8, o++;
          }
        }

        return i.create(n, o);
      }(e, t, n);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  }, r.enc.Base64);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function (e) {
    var t = r,
        n = t.lib,
        i = n.WordArray,
        o = n.Hasher,
        a = t.algo,
        s = [];
    !function () {
      for (var t = 0; t < 64; t++) {
        s[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
      }
    }();
    var h = a.MD5 = o.extend({
      _doReset: function _doReset() {
        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878]);
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        for (var r = 0; r < 16; r++) {
          var n = t + r,
              i = e[n];
          e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
        }

        var o = this._hash.words,
            a = e[t + 0],
            h = e[t + 1],
            d = e[t + 2],
            p = e[t + 3],
            _ = e[t + 4],
            g = e[t + 5],
            v = e[t + 6],
            w = e[t + 7],
            b = e[t + 8],
            y = e[t + 9],
            m = e[t + 10],
            k = e[t + 11],
            E = e[t + 12],
            S = e[t + 13],
            x = e[t + 14],
            R = e[t + 15],
            A = o[0],
            B = o[1],
            z = o[2],
            L = o[3];
        A = l(A, B, z, L, a, 7, s[0]), L = l(L, A, B, z, h, 12, s[1]), z = l(z, L, A, B, d, 17, s[2]), B = l(B, z, L, A, p, 22, s[3]), A = l(A, B, z, L, _, 7, s[4]), L = l(L, A, B, z, g, 12, s[5]), z = l(z, L, A, B, v, 17, s[6]), B = l(B, z, L, A, w, 22, s[7]), A = l(A, B, z, L, b, 7, s[8]), L = l(L, A, B, z, y, 12, s[9]), z = l(z, L, A, B, m, 17, s[10]), B = l(B, z, L, A, k, 22, s[11]), A = l(A, B, z, L, E, 7, s[12]), L = l(L, A, B, z, S, 12, s[13]), z = l(z, L, A, B, x, 17, s[14]), A = f(A, B = l(B, z, L, A, R, 22, s[15]), z, L, h, 5, s[16]), L = f(L, A, B, z, v, 9, s[17]), z = f(z, L, A, B, k, 14, s[18]), B = f(B, z, L, A, a, 20, s[19]), A = f(A, B, z, L, g, 5, s[20]), L = f(L, A, B, z, m, 9, s[21]), z = f(z, L, A, B, R, 14, s[22]), B = f(B, z, L, A, _, 20, s[23]), A = f(A, B, z, L, y, 5, s[24]), L = f(L, A, B, z, x, 9, s[25]), z = f(z, L, A, B, p, 14, s[26]), B = f(B, z, L, A, b, 20, s[27]), A = f(A, B, z, L, S, 5, s[28]), L = f(L, A, B, z, d, 9, s[29]), z = f(z, L, A, B, w, 14, s[30]), A = c(A, B = f(B, z, L, A, E, 20, s[31]), z, L, g, 4, s[32]), L = c(L, A, B, z, b, 11, s[33]), z = c(z, L, A, B, k, 16, s[34]), B = c(B, z, L, A, x, 23, s[35]), A = c(A, B, z, L, h, 4, s[36]), L = c(L, A, B, z, _, 11, s[37]), z = c(z, L, A, B, w, 16, s[38]), B = c(B, z, L, A, m, 23, s[39]), A = c(A, B, z, L, S, 4, s[40]), L = c(L, A, B, z, a, 11, s[41]), z = c(z, L, A, B, p, 16, s[42]), B = c(B, z, L, A, v, 23, s[43]), A = c(A, B, z, L, y, 4, s[44]), L = c(L, A, B, z, E, 11, s[45]), z = c(z, L, A, B, R, 16, s[46]), A = u(A, B = c(B, z, L, A, d, 23, s[47]), z, L, a, 6, s[48]), L = u(L, A, B, z, w, 10, s[49]), z = u(z, L, A, B, x, 15, s[50]), B = u(B, z, L, A, g, 21, s[51]), A = u(A, B, z, L, E, 6, s[52]), L = u(L, A, B, z, p, 10, s[53]), z = u(z, L, A, B, m, 15, s[54]), B = u(B, z, L, A, h, 21, s[55]), A = u(A, B, z, L, b, 6, s[56]), L = u(L, A, B, z, R, 10, s[57]), z = u(z, L, A, B, v, 15, s[58]), B = u(B, z, L, A, S, 21, s[59]), A = u(A, B, z, L, _, 6, s[60]), L = u(L, A, B, z, k, 10, s[61]), z = u(z, L, A, B, d, 15, s[62]), B = u(B, z, L, A, y, 21, s[63]), o[0] = o[0] + A | 0, o[1] = o[1] + B | 0, o[2] = o[2] + z | 0, o[3] = o[3] + L | 0;
      },
      _doFinalize: function _doFinalize() {
        var t = this._data,
            r = t.words,
            n = 8 * this._nDataBytes,
            i = 8 * t.sigBytes;
        r[i >>> 5] |= 128 << 24 - i % 32;
        var o = e.floor(n / 4294967296),
            a = n;
        r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), t.sigBytes = 4 * (r.length + 1), this._process();

        for (var s = this._hash, h = s.words, l = 0; l < 4; l++) {
          var f = h[l];
          h[l] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
        }

        return s;
      },
      clone: function clone() {
        var e = o.clone.call(this);
        return e._hash = this._hash.clone(), e;
      }
    });

    function l(e, t, r, n, i, o, a) {
      var s = e + (t & r | ~t & n) + i + a;
      return (s << o | s >>> 32 - o) + t;
    }

    function f(e, t, r, n, i, o, a) {
      var s = e + (t & n | r & ~n) + i + a;
      return (s << o | s >>> 32 - o) + t;
    }

    function c(e, t, r, n, i, o, a) {
      var s = e + (t ^ r ^ n) + i + a;
      return (s << o | s >>> 32 - o) + t;
    }

    function u(e, t, r, n, i, o, a) {
      var s = e + (r ^ (t | ~n)) + i + a;
      return (s << o | s >>> 32 - o) + t;
    }

    t.MD5 = o._createHelper(h), t.HmacMD5 = o._createHmacHelper(h);
  }(Math), r.MD5);
}), Q(function (e, t) {
  var r, n, i, o, a, s, h, l;
  e.exports = (i = (n = r = ee).lib, o = i.WordArray, a = i.Hasher, s = n.algo, h = [], l = s.SHA1 = a.extend({
    _doReset: function _doReset() {
      this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function _doProcessBlock(e, t) {
      for (var r = this._hash.words, n = r[0], i = r[1], o = r[2], a = r[3], s = r[4], l = 0; l < 80; l++) {
        if (l < 16) h[l] = 0 | e[t + l];else {
          var f = h[l - 3] ^ h[l - 8] ^ h[l - 14] ^ h[l - 16];
          h[l] = f << 1 | f >>> 31;
        }
        var c = (n << 5 | n >>> 27) + s + h[l];
        c += l < 20 ? 1518500249 + (i & o | ~i & a) : l < 40 ? 1859775393 + (i ^ o ^ a) : l < 60 ? (i & o | i & a | o & a) - 1894007588 : (i ^ o ^ a) - 899497514, s = a, a = o, o = i << 30 | i >>> 2, i = n, n = c;
      }

      r[0] = r[0] + n | 0, r[1] = r[1] + i | 0, r[2] = r[2] + o | 0, r[3] = r[3] + a | 0, r[4] = r[4] + s | 0;
    },
    _doFinalize: function _doFinalize() {
      var e = this._data,
          t = e.words,
          r = 8 * this._nDataBytes,
          n = 8 * e.sigBytes;
      return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), t[15 + (n + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash;
    },
    clone: function clone() {
      var e = a.clone.call(this);
      return e._hash = this._hash.clone(), e;
    }
  }), n.SHA1 = a._createHelper(l), n.HmacSHA1 = a._createHmacHelper(l), r.SHA1);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function (e) {
    var t = r,
        n = t.lib,
        i = n.WordArray,
        o = n.Hasher,
        a = t.algo,
        s = [],
        h = [];
    !function () {
      function t(t) {
        for (var r = e.sqrt(t), n = 2; n <= r; n++) {
          if (!(t % n)) return !1;
        }

        return !0;
      }

      function r(e) {
        return 4294967296 * (e - (0 | e)) | 0;
      }

      for (var n = 2, i = 0; i < 64;) {
        t(n) && (i < 8 && (s[i] = r(e.pow(n, .5))), h[i] = r(e.pow(n, 1 / 3)), i++), n++;
      }
    }();
    var l = [],
        f = a.SHA256 = o.extend({
      _doReset: function _doReset() {
        this._hash = new i.init(s.slice(0));
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        for (var r = this._hash.words, n = r[0], i = r[1], o = r[2], a = r[3], s = r[4], f = r[5], c = r[6], u = r[7], d = 0; d < 64; d++) {
          if (d < 16) l[d] = 0 | e[t + d];else {
            var p = l[d - 15],
                _ = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
                g = l[d - 2],
                v = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;

            l[d] = _ + l[d - 7] + v + l[d - 16];
          }
          var w = n & i ^ n & o ^ i & o,
              b = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22),
              y = u + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & f ^ ~s & c) + h[d] + l[d];
          u = c, c = f, f = s, s = a + y | 0, a = o, o = i, i = n, n = y + (b + w) | 0;
        }

        r[0] = r[0] + n | 0, r[1] = r[1] + i | 0, r[2] = r[2] + o | 0, r[3] = r[3] + a | 0, r[4] = r[4] + s | 0, r[5] = r[5] + f | 0, r[6] = r[6] + c | 0, r[7] = r[7] + u | 0;
      },
      _doFinalize: function _doFinalize() {
        var t = this._data,
            r = t.words,
            n = 8 * this._nDataBytes,
            i = 8 * t.sigBytes;
        return r[i >>> 5] |= 128 << 24 - i % 32, r[14 + (i + 64 >>> 9 << 4)] = e.floor(n / 4294967296), r[15 + (i + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * r.length, this._process(), this._hash;
      },
      clone: function clone() {
        var e = o.clone.call(this);
        return e._hash = this._hash.clone(), e;
      }
    });
    t.SHA256 = o._createHelper(f), t.HmacSHA256 = o._createHmacHelper(f);
  }(Math), r.SHA256);
}), Q(function (e, t) {
  var r, n, i, o, a, s;
  e.exports = (i = (n = r = ee).lib.WordArray, o = n.algo, a = o.SHA256, s = o.SHA224 = a.extend({
    _doReset: function _doReset() {
      this._hash = new i.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
    },
    _doFinalize: function _doFinalize() {
      var e = a._doFinalize.call(this);

      return e.sigBytes -= 4, e;
    }
  }), n.SHA224 = a._createHelper(s), n.HmacSHA224 = a._createHmacHelper(s), r.SHA224);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function () {
    var e = r,
        t = e.lib.Hasher,
        n = e.x64,
        i = n.Word,
        o = n.WordArray,
        a = e.algo;

    function s() {
      return i.create.apply(i, arguments);
    }

    var h = [s(1116352408, 3609767458), s(1899447441, 602891725), s(3049323471, 3964484399), s(3921009573, 2173295548), s(961987163, 4081628472), s(1508970993, 3053834265), s(2453635748, 2937671579), s(2870763221, 3664609560), s(3624381080, 2734883394), s(310598401, 1164996542), s(607225278, 1323610764), s(1426881987, 3590304994), s(1925078388, 4068182383), s(2162078206, 991336113), s(2614888103, 633803317), s(3248222580, 3479774868), s(3835390401, 2666613458), s(4022224774, 944711139), s(264347078, 2341262773), s(604807628, 2007800933), s(770255983, 1495990901), s(1249150122, 1856431235), s(1555081692, 3175218132), s(1996064986, 2198950837), s(2554220882, 3999719339), s(2821834349, 766784016), s(2952996808, 2566594879), s(3210313671, 3203337956), s(3336571891, 1034457026), s(3584528711, 2466948901), s(113926993, 3758326383), s(338241895, 168717936), s(666307205, 1188179964), s(773529912, 1546045734), s(1294757372, 1522805485), s(1396182291, 2643833823), s(1695183700, 2343527390), s(1986661051, 1014477480), s(2177026350, 1206759142), s(2456956037, 344077627), s(2730485921, 1290863460), s(2820302411, 3158454273), s(3259730800, 3505952657), s(3345764771, 106217008), s(3516065817, 3606008344), s(3600352804, 1432725776), s(4094571909, 1467031594), s(275423344, 851169720), s(430227734, 3100823752), s(506948616, 1363258195), s(659060556, 3750685593), s(883997877, 3785050280), s(958139571, 3318307427), s(1322822218, 3812723403), s(1537002063, 2003034995), s(1747873779, 3602036899), s(1955562222, 1575990012), s(2024104815, 1125592928), s(2227730452, 2716904306), s(2361852424, 442776044), s(2428436474, 593698344), s(2756734187, 3733110249), s(3204031479, 2999351573), s(3329325298, 3815920427), s(3391569614, 3928383900), s(3515267271, 566280711), s(3940187606, 3454069534), s(4118630271, 4000239992), s(116418474, 1914138554), s(174292421, 2731055270), s(289380356, 3203993006), s(460393269, 320620315), s(685471733, 587496836), s(852142971, 1086792851), s(1017036298, 365543100), s(1126000580, 2618297676), s(1288033470, 3409855158), s(1501505948, 4234509866), s(1607167915, 987167468), s(1816402316, 1246189591)],
        l = [];
    !function () {
      for (var e = 0; e < 80; e++) {
        l[e] = s();
      }
    }();
    var f = a.SHA512 = t.extend({
      _doReset: function _doReset() {
        this._hash = new o.init([new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209)]);
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        for (var r = this._hash.words, n = r[0], i = r[1], o = r[2], a = r[3], s = r[4], f = r[5], c = r[6], u = r[7], d = n.high, p = n.low, _ = i.high, g = i.low, v = o.high, w = o.low, b = a.high, y = a.low, m = s.high, k = s.low, E = f.high, S = f.low, x = c.high, R = c.low, A = u.high, B = u.low, z = d, L = p, T = _, M = g, C = v, D = w, I = b, P = y, O = m, U = k, H = E, F = S, N = x, Z = R, j = A, W = B, Y = 0; Y < 80; Y++) {
          var K = l[Y];
          if (Y < 16) var X = K.high = 0 | e[t + 2 * Y],
              q = K.low = 0 | e[t + 2 * Y + 1];else {
            var V = l[Y - 15],
                G = V.high,
                $ = V.low,
                J = (G >>> 1 | $ << 31) ^ (G >>> 8 | $ << 24) ^ G >>> 7,
                Q = ($ >>> 1 | G << 31) ^ ($ >>> 8 | G << 24) ^ ($ >>> 7 | G << 25),
                ee = l[Y - 2],
                te = ee.high,
                re = ee.low,
                ne = (te >>> 19 | re << 13) ^ (te << 3 | re >>> 29) ^ te >>> 6,
                ie = (re >>> 19 | te << 13) ^ (re << 3 | te >>> 29) ^ (re >>> 6 | te << 26),
                oe = l[Y - 7],
                ae = oe.high,
                se = oe.low,
                he = l[Y - 16],
                le = he.high,
                fe = he.low;
            X = (X = (X = J + ae + ((q = Q + se) >>> 0 < Q >>> 0 ? 1 : 0)) + ne + ((q += ie) >>> 0 < ie >>> 0 ? 1 : 0)) + le + ((q += fe) >>> 0 < fe >>> 0 ? 1 : 0), K.high = X, K.low = q;
          }

          var ce,
              ue = O & H ^ ~O & N,
              de = U & F ^ ~U & Z,
              pe = z & T ^ z & C ^ T & C,
              _e = L & M ^ L & D ^ M & D,
              ge = (z >>> 28 | L << 4) ^ (z << 30 | L >>> 2) ^ (z << 25 | L >>> 7),
              ve = (L >>> 28 | z << 4) ^ (L << 30 | z >>> 2) ^ (L << 25 | z >>> 7),
              we = (O >>> 14 | U << 18) ^ (O >>> 18 | U << 14) ^ (O << 23 | U >>> 9),
              be = (U >>> 14 | O << 18) ^ (U >>> 18 | O << 14) ^ (U << 23 | O >>> 9),
              ye = h[Y],
              me = ye.high,
              ke = ye.low,
              Ee = j + we + ((ce = W + be) >>> 0 < W >>> 0 ? 1 : 0),
              Se = ve + _e;

          j = N, W = Z, N = H, Z = F, H = O, F = U, O = I + (Ee = (Ee = (Ee = Ee + ue + ((ce += de) >>> 0 < de >>> 0 ? 1 : 0)) + me + ((ce += ke) >>> 0 < ke >>> 0 ? 1 : 0)) + X + ((ce += q) >>> 0 < q >>> 0 ? 1 : 0)) + ((U = P + ce | 0) >>> 0 < P >>> 0 ? 1 : 0) | 0, I = C, P = D, C = T, D = M, T = z, M = L, z = Ee + (ge + pe + (Se >>> 0 < ve >>> 0 ? 1 : 0)) + ((L = ce + Se | 0) >>> 0 < ce >>> 0 ? 1 : 0) | 0;
        }

        p = n.low = p + L, n.high = d + z + (p >>> 0 < L >>> 0 ? 1 : 0), g = i.low = g + M, i.high = _ + T + (g >>> 0 < M >>> 0 ? 1 : 0), w = o.low = w + D, o.high = v + C + (w >>> 0 < D >>> 0 ? 1 : 0), y = a.low = y + P, a.high = b + I + (y >>> 0 < P >>> 0 ? 1 : 0), k = s.low = k + U, s.high = m + O + (k >>> 0 < U >>> 0 ? 1 : 0), S = f.low = S + F, f.high = E + H + (S >>> 0 < F >>> 0 ? 1 : 0), R = c.low = R + Z, c.high = x + N + (R >>> 0 < Z >>> 0 ? 1 : 0), B = u.low = B + W, u.high = A + j + (B >>> 0 < W >>> 0 ? 1 : 0);
      },
      _doFinalize: function _doFinalize() {
        var e = this._data,
            t = e.words,
            r = 8 * this._nDataBytes,
            n = 8 * e.sigBytes;
        return t[n >>> 5] |= 128 << 24 - n % 32, t[30 + (n + 128 >>> 10 << 5)] = Math.floor(r / 4294967296), t[31 + (n + 128 >>> 10 << 5)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash.toX32();
      },
      clone: function clone() {
        var e = t.clone.call(this);
        return e._hash = this._hash.clone(), e;
      },
      blockSize: 32
    });
    e.SHA512 = t._createHelper(f), e.HmacSHA512 = t._createHmacHelper(f);
  }(), r.SHA512);
}), Q(function (e, t) {
  var r, n, i, o, a, s, h, l;
  e.exports = (i = (n = r = ee).x64, o = i.Word, a = i.WordArray, s = n.algo, h = s.SHA512, l = s.SHA384 = h.extend({
    _doReset: function _doReset() {
      this._hash = new a.init([new o.init(3418070365, 3238371032), new o.init(1654270250, 914150663), new o.init(2438529370, 812702999), new o.init(355462360, 4144912697), new o.init(1731405415, 4290775857), new o.init(2394180231, 1750603025), new o.init(3675008525, 1694076839), new o.init(1203062813, 3204075428)]);
    },
    _doFinalize: function _doFinalize() {
      var e = h._doFinalize.call(this);

      return e.sigBytes -= 16, e;
    }
  }), n.SHA384 = h._createHelper(l), n.HmacSHA384 = h._createHmacHelper(l), r.SHA384);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function (e) {
    var t = r,
        n = t.lib,
        i = n.WordArray,
        o = n.Hasher,
        a = t.x64.Word,
        s = t.algo,
        h = [],
        l = [],
        f = [];
    !function () {
      for (var e = 1, t = 0, r = 0; r < 24; r++) {
        h[e + 5 * t] = (r + 1) * (r + 2) / 2 % 64;
        var n = (2 * e + 3 * t) % 5;
        e = t % 5, t = n;
      }

      for (e = 0; e < 5; e++) {
        for (t = 0; t < 5; t++) {
          l[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
        }
      }

      for (var i = 1, o = 0; o < 24; o++) {
        for (var s = 0, c = 0, u = 0; u < 7; u++) {
          if (1 & i) {
            var d = (1 << u) - 1;
            d < 32 ? c ^= 1 << d : s ^= 1 << d - 32;
          }

          128 & i ? i = i << 1 ^ 113 : i <<= 1;
        }

        f[o] = a.create(s, c);
      }
    }();
    var c = [];
    !function () {
      for (var e = 0; e < 25; e++) {
        c[e] = a.create();
      }
    }();
    var u = s.SHA3 = o.extend({
      cfg: o.cfg.extend({
        outputLength: 512
      }),
      _doReset: function _doReset() {
        for (var e = this._state = [], t = 0; t < 25; t++) {
          e[t] = new a.init();
        }

        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        for (var r = this._state, n = this.blockSize / 2, i = 0; i < n; i++) {
          var o = e[t + 2 * i],
              a = e[t + 2 * i + 1];
          o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), (B = r[i]).high ^= a, B.low ^= o;
        }

        for (var s = 0; s < 24; s++) {
          for (var u = 0; u < 5; u++) {
            for (var d = 0, p = 0, _ = 0; _ < 5; _++) {
              d ^= (B = r[u + 5 * _]).high, p ^= B.low;
            }

            var g = c[u];
            g.high = d, g.low = p;
          }

          for (u = 0; u < 5; u++) {
            var v = c[(u + 4) % 5],
                w = c[(u + 1) % 5],
                b = w.high,
                y = w.low;

            for (d = v.high ^ (b << 1 | y >>> 31), p = v.low ^ (y << 1 | b >>> 31), _ = 0; _ < 5; _++) {
              (B = r[u + 5 * _]).high ^= d, B.low ^= p;
            }
          }

          for (var m = 1; m < 25; m++) {
            var k = (B = r[m]).high,
                E = B.low,
                S = h[m];
            S < 32 ? (d = k << S | E >>> 32 - S, p = E << S | k >>> 32 - S) : (d = E << S - 32 | k >>> 64 - S, p = k << S - 32 | E >>> 64 - S);
            var x = c[l[m]];
            x.high = d, x.low = p;
          }

          var R = c[0],
              A = r[0];

          for (R.high = A.high, R.low = A.low, u = 0; u < 5; u++) {
            for (_ = 0; _ < 5; _++) {
              var B = r[m = u + 5 * _],
                  z = c[m],
                  L = c[(u + 1) % 5 + 5 * _],
                  T = c[(u + 2) % 5 + 5 * _];
              B.high = z.high ^ ~L.high & T.high, B.low = z.low ^ ~L.low & T.low;
            }
          }

          B = r[0];
          var M = f[s];
          B.high ^= M.high, B.low ^= M.low;
        }
      },
      _doFinalize: function _doFinalize() {
        var t = this._data,
            r = t.words,
            n = (this._nDataBytes, 8 * t.sigBytes),
            o = 32 * this.blockSize;
        r[n >>> 5] |= 1 << 24 - n % 32, r[(e.ceil((n + 1) / o) * o >>> 5) - 1] |= 128, t.sigBytes = 4 * r.length, this._process();

        for (var a = this._state, s = this.cfg.outputLength / 8, h = s / 8, l = [], f = 0; f < h; f++) {
          var c = a[f],
              u = c.high,
              d = c.low;
          u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8), d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), l.push(d), l.push(u);
        }

        return new i.init(l, s);
      },
      clone: function clone() {
        for (var e = o.clone.call(this), t = e._state = this._state.slice(0), r = 0; r < 25; r++) {
          t[r] = t[r].clone();
        }

        return e;
      }
    });
    t.SHA3 = o._createHelper(u), t.HmacSHA3 = o._createHmacHelper(u);
  }(Math), r.SHA3);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function (e) {
    var t = r,
        n = t.lib,
        i = n.WordArray,
        o = n.Hasher,
        a = t.algo,
        s = i.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
        h = i.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
        l = i.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
        f = i.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
        c = i.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
        u = i.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
        d = a.RIPEMD160 = o.extend({
      _doReset: function _doReset() {
        this._hash = i.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        for (var r = 0; r < 16; r++) {
          var n = t + r,
              i = e[n];
          e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
        }

        var o,
            a,
            d,
            y,
            m,
            k,
            E,
            S,
            x,
            R,
            A,
            B = this._hash.words,
            z = c.words,
            L = u.words,
            T = s.words,
            M = h.words,
            C = l.words,
            D = f.words;

        for (k = o = B[0], E = a = B[1], S = d = B[2], x = y = B[3], R = m = B[4], r = 0; r < 80; r += 1) {
          A = o + e[t + T[r]] | 0, A += r < 16 ? p(a, d, y) + z[0] : r < 32 ? _(a, d, y) + z[1] : r < 48 ? g(a, d, y) + z[2] : r < 64 ? v(a, d, y) + z[3] : w(a, d, y) + z[4], A = (A = b(A |= 0, C[r])) + m | 0, o = m, m = y, y = b(d, 10), d = a, a = A, A = k + e[t + M[r]] | 0, A += r < 16 ? w(E, S, x) + L[0] : r < 32 ? v(E, S, x) + L[1] : r < 48 ? g(E, S, x) + L[2] : r < 64 ? _(E, S, x) + L[3] : p(E, S, x) + L[4], A = (A = b(A |= 0, D[r])) + R | 0, k = R, R = x, x = b(S, 10), S = E, E = A;
        }

        A = B[1] + d + x | 0, B[1] = B[2] + y + R | 0, B[2] = B[3] + m + k | 0, B[3] = B[4] + o + E | 0, B[4] = B[0] + a + S | 0, B[0] = A;
      },
      _doFinalize: function _doFinalize() {
        var e = this._data,
            t = e.words,
            r = 8 * this._nDataBytes,
            n = 8 * e.sigBytes;
        t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();

        for (var i = this._hash, o = i.words, a = 0; a < 5; a++) {
          var s = o[a];
          o[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
        }

        return i;
      },
      clone: function clone() {
        var e = o.clone.call(this);
        return e._hash = this._hash.clone(), e;
      }
    });

    function p(e, t, r) {
      return e ^ t ^ r;
    }

    function _(e, t, r) {
      return e & t | ~e & r;
    }

    function g(e, t, r) {
      return (e | ~t) ^ r;
    }

    function v(e, t, r) {
      return e & r | t & ~r;
    }

    function w(e, t, r) {
      return e ^ (t | ~r);
    }

    function b(e, t) {
      return e << t | e >>> 32 - t;
    }

    t.RIPEMD160 = o._createHelper(d), t.HmacRIPEMD160 = o._createHmacHelper(d);
  }(), r.RIPEMD160);
}), Q(function (e, t) {
  var r, n, i, o, a, s;
  e.exports = (n = (r = ee).lib, i = n.Base, o = r.enc, a = o.Utf8, s = r.algo, void (s.HMAC = i.extend({
    init: function init(e, t) {
      e = this._hasher = new e.init(), "string" == typeof t && (t = a.parse(t));
      var r = e.blockSize,
          n = 4 * r;
      t.sigBytes > n && (t = e.finalize(t)), t.clamp();

      for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), s = i.words, h = o.words, l = 0; l < r; l++) {
        s[l] ^= 1549556828, h[l] ^= 909522486;
      }

      i.sigBytes = o.sigBytes = n, this.reset();
    },
    reset: function reset() {
      var e = this._hasher;
      e.reset(), e.update(this._iKey);
    },
    update: function update(e) {
      return this._hasher.update(e), this;
    },
    finalize: function finalize(e) {
      var t = this._hasher,
          r = t.finalize(e);
      t.reset();
      var n = t.finalize(this._oKey.clone().concat(r));
      return n;
    }
  })));
}), Q(function (e, t) {
  var r, n, i, o, a, s, h, l, f;
  e.exports = (i = (n = r = ee).lib, o = i.Base, a = i.WordArray, s = n.algo, h = s.SHA1, l = s.HMAC, f = s.PBKDF2 = o.extend({
    cfg: o.extend({
      keySize: 4,
      hasher: h,
      iterations: 1
    }),
    init: function init(e) {
      this.cfg = this.cfg.extend(e);
    },
    compute: function compute(e, t) {
      for (var r = this.cfg, n = l.create(r.hasher, e), i = a.create(), o = a.create([1]), s = i.words, h = o.words, f = r.keySize, c = r.iterations; s.length < f;) {
        var u = n.update(t).finalize(o);
        n.reset();

        for (var d = u.words, p = d.length, _ = u, g = 1; g < c; g++) {
          _ = n.finalize(_), n.reset();

          for (var v = _.words, w = 0; w < p; w++) {
            d[w] ^= v[w];
          }
        }

        i.concat(u), h[0]++;
      }

      return i.sigBytes = 4 * f, i;
    }
  }), n.PBKDF2 = function (e, t, r) {
    return f.create(r).compute(e, t);
  }, r.PBKDF2);
}), Q(function (e, t) {
  var r, n, i, o, a, s, h, l;
  e.exports = (i = (n = r = ee).lib, o = i.Base, a = i.WordArray, s = n.algo, h = s.MD5, l = s.EvpKDF = o.extend({
    cfg: o.extend({
      keySize: 4,
      hasher: h,
      iterations: 1
    }),
    init: function init(e) {
      this.cfg = this.cfg.extend(e);
    },
    compute: function compute(e, t) {
      for (var r = this.cfg, n = r.hasher.create(), i = a.create(), o = i.words, s = r.keySize, h = r.iterations; o.length < s;) {
        l && n.update(l);
        var l = n.update(e).finalize(t);
        n.reset();

        for (var f = 1; f < h; f++) {
          l = n.finalize(l), n.reset();
        }

        i.concat(l);
      }

      return i.sigBytes = 4 * s, i;
    }
  }), n.EvpKDF = function (e, t, r) {
    return l.create(r).compute(e, t);
  }, r.EvpKDF);
}), Q(function (e, t) {
  var r, n, i, o, a, s, h, l, f, c, u, d, p, _, g, v, w, b, y, m, k, E, S, x;

  e.exports = void ((r = ee).lib.Cipher || (i = r, o = i.lib, a = o.Base, s = o.WordArray, h = o.BufferedBlockAlgorithm, l = i.enc, l.Utf8, f = l.Base64, c = i.algo, u = c.EvpKDF, d = o.Cipher = h.extend({
    cfg: a.extend(),
    createEncryptor: function createEncryptor(e, t) {
      return this.create(this._ENC_XFORM_MODE, e, t);
    },
    createDecryptor: function createDecryptor(e, t) {
      return this.create(this._DEC_XFORM_MODE, e, t);
    },
    init: function init(e, t, r) {
      this.cfg = this.cfg.extend(r), this._xformMode = e, this._key = t, this.reset();
    },
    reset: function reset() {
      h.reset.call(this), this._doReset();
    },
    process: function process(e) {
      return this._append(e), this._process();
    },
    finalize: function finalize(e) {
      e && this._append(e);

      var t = this._doFinalize();

      return t;
    },
    keySize: 4,
    ivSize: 4,
    _ENC_XFORM_MODE: 1,
    _DEC_XFORM_MODE: 2,
    _createHelper: function () {
      function e(e) {
        return "string" == typeof e ? x : k;
      }

      return function (t) {
        return {
          encrypt: function encrypt(r, n, i) {
            return e(n).encrypt(t, r, n, i);
          },
          decrypt: function decrypt(r, n, i) {
            return e(n).decrypt(t, r, n, i);
          }
        };
      };
    }()
  }), o.StreamCipher = d.extend({
    _doFinalize: function _doFinalize() {
      var e = this._process(!0);

      return e;
    },
    blockSize: 1
  }), p = i.mode = {}, _ = o.BlockCipherMode = a.extend({
    createEncryptor: function createEncryptor(e, t) {
      return this.Encryptor.create(e, t);
    },
    createDecryptor: function createDecryptor(e, t) {
      return this.Decryptor.create(e, t);
    },
    init: function init(e, t) {
      this._cipher = e, this._iv = t;
    }
  }), g = p.CBC = function () {
    var e = _.extend();

    function t(e, t, r) {
      var i = this._iv;

      if (i) {
        var o = i;
        this._iv = n;
      } else var o = this._prevBlock;

      for (var a = 0; a < r; a++) {
        e[t + a] ^= o[a];
      }
    }

    return e.Encryptor = e.extend({
      processBlock: function processBlock(e, r) {
        var n = this._cipher,
            i = n.blockSize;
        t.call(this, e, r, i), n.encryptBlock(e, r), this._prevBlock = e.slice(r, r + i);
      }
    }), e.Decryptor = e.extend({
      processBlock: function processBlock(e, r) {
        var n = this._cipher,
            i = n.blockSize,
            o = e.slice(r, r + i);
        n.decryptBlock(e, r), t.call(this, e, r, i), this._prevBlock = o;
      }
    }), e;
  }(), v = i.pad = {}, w = v.Pkcs7 = {
    pad: function pad(e, t) {
      for (var r = 4 * t, n = r - e.sigBytes % r, i = n << 24 | n << 16 | n << 8 | n, o = [], a = 0; a < n; a += 4) {
        o.push(i);
      }

      var h = s.create(o, n);
      e.concat(h);
    },
    unpad: function unpad(e) {
      var t = 255 & e.words[e.sigBytes - 1 >>> 2];
      e.sigBytes -= t;
    }
  }, o.BlockCipher = d.extend({
    cfg: d.cfg.extend({
      mode: g,
      padding: w
    }),
    reset: function reset() {
      d.reset.call(this);
      var e = this.cfg,
          t = e.iv,
          r = e.mode;
      if (this._xformMode == this._ENC_XFORM_MODE) var n = r.createEncryptor;else {
        var n = r.createDecryptor;
        this._minBufferSize = 1;
      }
      this._mode && this._mode.__creator == n ? this._mode.init(this, t && t.words) : (this._mode = n.call(r, this, t && t.words), this._mode.__creator = n);
    },
    _doProcessBlock: function _doProcessBlock(e, t) {
      this._mode.processBlock(e, t);
    },
    _doFinalize: function _doFinalize() {
      var e = this.cfg.padding;

      if (this._xformMode == this._ENC_XFORM_MODE) {
        e.pad(this._data, this.blockSize);

        var t = this._process(!0);
      } else {
        var t = this._process(!0);

        e.unpad(t);
      }

      return t;
    },
    blockSize: 4
  }), b = o.CipherParams = a.extend({
    init: function init(e) {
      this.mixIn(e);
    },
    toString: function toString(e) {
      return (e || this.formatter).stringify(this);
    }
  }), y = i.format = {}, m = y.OpenSSL = {
    stringify: function stringify(e) {
      var t = e.ciphertext,
          r = e.salt;
      if (r) var n = s.create([1398893684, 1701076831]).concat(r).concat(t);else var n = t;
      return n.toString(f);
    },
    parse: function parse(e) {
      var t = f.parse(e),
          r = t.words;

      if (1398893684 == r[0] && 1701076831 == r[1]) {
        var n = s.create(r.slice(2, 4));
        r.splice(0, 4), t.sigBytes -= 16;
      }

      return b.create({
        ciphertext: t,
        salt: n
      });
    }
  }, k = o.SerializableCipher = a.extend({
    cfg: a.extend({
      format: m
    }),
    encrypt: function encrypt(e, t, r, n) {
      n = this.cfg.extend(n);
      var i = e.createEncryptor(r, n),
          o = i.finalize(t),
          a = i.cfg;
      return b.create({
        ciphertext: o,
        key: r,
        iv: a.iv,
        algorithm: e,
        mode: a.mode,
        padding: a.padding,
        blockSize: e.blockSize,
        formatter: n.format
      });
    },
    decrypt: function decrypt(e, t, r, n) {
      n = this.cfg.extend(n), t = this._parse(t, n.format);
      var i = e.createDecryptor(r, n).finalize(t.ciphertext);
      return i;
    },
    _parse: function _parse(e, t) {
      return "string" == typeof e ? t.parse(e, this) : e;
    }
  }), E = i.kdf = {}, S = E.OpenSSL = {
    execute: function execute(e, t, r, n) {
      n || (n = s.random(8));
      var i = u.create({
        keySize: t + r
      }).compute(e, n),
          o = s.create(i.words.slice(t), 4 * r);
      return i.sigBytes = 4 * t, b.create({
        key: i,
        iv: o,
        salt: n
      });
    }
  }, x = o.PasswordBasedCipher = k.extend({
    cfg: k.cfg.extend({
      kdf: S
    }),
    encrypt: function encrypt(e, t, r, n) {
      var i = (n = this.cfg.extend(n)).kdf.execute(r, e.keySize, e.ivSize);
      n.iv = i.iv;
      var o = k.encrypt.call(this, e, t, i.key, n);
      return o.mixIn(i), o;
    },
    decrypt: function decrypt(e, t, r, n) {
      n = this.cfg.extend(n), t = this._parse(t, n.format);
      var i = n.kdf.execute(r, e.keySize, e.ivSize, t.salt);
      n.iv = i.iv;
      var o = k.decrypt.call(this, e, t, i.key, n);
      return o;
    }
  })));
}), Q(function (e, t) {
  var r;
  e.exports = ((r = ee).mode.CFB = function () {
    var e = r.lib.BlockCipherMode.extend();

    function t(e, t, r, n) {
      var i = this._iv;

      if (i) {
        var o = i.slice(0);
        this._iv = void 0;
      } else o = this._prevBlock;

      n.encryptBlock(o, 0);

      for (var a = 0; a < r; a++) {
        e[t + a] ^= o[a];
      }
    }

    return e.Encryptor = e.extend({
      processBlock: function processBlock(e, r) {
        var n = this._cipher,
            i = n.blockSize;
        t.call(this, e, r, i, n), this._prevBlock = e.slice(r, r + i);
      }
    }), e.Decryptor = e.extend({
      processBlock: function processBlock(e, r) {
        var n = this._cipher,
            i = n.blockSize,
            o = e.slice(r, r + i);
        t.call(this, e, r, i, n), this._prevBlock = o;
      }
    }), e;
  }(), r.mode.CFB);
}), Q(function (e, t) {
  var r, n, i;
  e.exports = ((r = ee).mode.CTR = (n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
    processBlock: function processBlock(e, t) {
      var r = this._cipher,
          n = r.blockSize,
          i = this._iv,
          o = this._counter;
      i && (o = this._counter = i.slice(0), this._iv = void 0);
      var a = o.slice(0);
      r.encryptBlock(a, 0), o[n - 1] = o[n - 1] + 1 | 0;

      for (var s = 0; s < n; s++) {
        e[t + s] ^= a[s];
      }
    }
  }), n.Decryptor = i, n), r.mode.CTR);
}), Q(function (e, t) {
  var r;
  e.exports = ((r = ee).mode.CTRGladman = function () {
    var e = r.lib.BlockCipherMode.extend();

    function t(e) {
      if (255 == (e >> 24 & 255)) {
        var t = e >> 16 & 255,
            r = e >> 8 & 255,
            n = 255 & e;
        255 === t ? (t = 0, 255 === r ? (r = 0, 255 === n ? n = 0 : ++n) : ++r) : ++t, e = 0, e += t << 16, e += r << 8, e += n;
      } else e += 1 << 24;

      return e;
    }

    var n = e.Encryptor = e.extend({
      processBlock: function processBlock(e, r) {
        var n = this._cipher,
            i = n.blockSize,
            o = this._iv,
            a = this._counter;
        o && (a = this._counter = o.slice(0), this._iv = void 0), function (e) {
          0 === (e[0] = t(e[0])) && (e[1] = t(e[1]));
        }(a);
        var s = a.slice(0);
        n.encryptBlock(s, 0);

        for (var h = 0; h < i; h++) {
          e[r + h] ^= s[h];
        }
      }
    });
    return e.Decryptor = n, e;
  }(), r.mode.CTRGladman);
}), Q(function (e, t) {
  var r, n, i;
  e.exports = ((r = ee).mode.OFB = (n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
    processBlock: function processBlock(e, t) {
      var r = this._cipher,
          n = r.blockSize,
          i = this._iv,
          o = this._keystream;
      i && (o = this._keystream = i.slice(0), this._iv = void 0), r.encryptBlock(o, 0);

      for (var a = 0; a < n; a++) {
        e[t + a] ^= o[a];
      }
    }
  }), n.Decryptor = i, n), r.mode.OFB);
}), Q(function (e, t) {
  var r, n;
  e.exports = ((r = ee).mode.ECB = ((n = r.lib.BlockCipherMode.extend()).Encryptor = n.extend({
    processBlock: function processBlock(e, t) {
      this._cipher.encryptBlock(e, t);
    }
  }), n.Decryptor = n.extend({
    processBlock: function processBlock(e, t) {
      this._cipher.decryptBlock(e, t);
    }
  }), n), r.mode.ECB);
}), Q(function (e, t) {
  var r;
  e.exports = ((r = ee).pad.AnsiX923 = {
    pad: function pad(e, t) {
      var r = e.sigBytes,
          n = 4 * t,
          i = n - r % n,
          o = r + i - 1;
      e.clamp(), e.words[o >>> 2] |= i << 24 - o % 4 * 8, e.sigBytes += i;
    },
    unpad: function unpad(e) {
      var t = 255 & e.words[e.sigBytes - 1 >>> 2];
      e.sigBytes -= t;
    }
  }, r.pad.Ansix923);
}), Q(function (e, t) {
  var r;
  e.exports = ((r = ee).pad.Iso10126 = {
    pad: function pad(e, t) {
      var n = 4 * t,
          i = n - e.sigBytes % n;
      e.concat(r.lib.WordArray.random(i - 1)).concat(r.lib.WordArray.create([i << 24], 1));
    },
    unpad: function unpad(e) {
      var t = 255 & e.words[e.sigBytes - 1 >>> 2];
      e.sigBytes -= t;
    }
  }, r.pad.Iso10126);
}), Q(function (e, t) {
  var r;
  e.exports = ((r = ee).pad.Iso97971 = {
    pad: function pad(e, t) {
      e.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(e, t);
    },
    unpad: function unpad(e) {
      r.pad.ZeroPadding.unpad(e), e.sigBytes--;
    }
  }, r.pad.Iso97971);
}), Q(function (e, t) {
  var r;
  e.exports = ((r = ee).pad.ZeroPadding = {
    pad: function pad(e, t) {
      var r = 4 * t;
      e.clamp(), e.sigBytes += r - (e.sigBytes % r || r);
    },
    unpad: function unpad(e) {
      for (var t = e.words, r = e.sigBytes - 1; !(t[r >>> 2] >>> 24 - r % 4 * 8 & 255);) {
        r--;
      }

      e.sigBytes = r + 1;
    }
  }, r.pad.ZeroPadding);
}), Q(function (e, t) {
  var r;
  e.exports = ((r = ee).pad.NoPadding = {
    pad: function pad() {},
    unpad: function unpad() {}
  }, r.pad.NoPadding);
}), Q(function (e, t) {
  var r, n, i, o;
  e.exports = (i = (n = r = ee).lib.CipherParams, o = n.enc.Hex, n.format.Hex = {
    stringify: function stringify(e) {
      return e.ciphertext.toString(o);
    },
    parse: function parse(e) {
      var t = o.parse(e);
      return i.create({
        ciphertext: t
      });
    }
  }, r.format.Hex);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function () {
    var e = r,
        t = e.lib.BlockCipher,
        n = e.algo,
        i = [],
        o = [],
        a = [],
        s = [],
        h = [],
        l = [],
        f = [],
        c = [],
        u = [],
        d = [];
    !function () {
      for (var e = [], t = 0; t < 256; t++) {
        e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
      }

      var r = 0,
          n = 0;

      for (t = 0; t < 256; t++) {
        var p = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
        p = p >>> 8 ^ 255 & p ^ 99, i[r] = p, o[p] = r;
        var _ = e[r],
            g = e[_],
            v = e[g],
            w = 257 * e[p] ^ 16843008 * p;
        a[r] = w << 24 | w >>> 8, s[r] = w << 16 | w >>> 16, h[r] = w << 8 | w >>> 24, l[r] = w, w = 16843009 * v ^ 65537 * g ^ 257 * _ ^ 16843008 * r, f[p] = w << 24 | w >>> 8, c[p] = w << 16 | w >>> 16, u[p] = w << 8 | w >>> 24, d[p] = w, r ? (r = _ ^ e[e[e[v ^ _]]], n ^= e[e[n]]) : r = n = 1;
      }
    }();

    var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        _ = n.AES = t.extend({
      _doReset: function _doReset() {
        if (!this._nRounds || this._keyPriorReset !== this._key) {
          for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = 4 * ((this._nRounds = r + 6) + 1), o = this._keySchedule = [], a = 0; a < n; a++) {
            if (a < r) o[a] = t[a];else {
              var s = o[a - 1];
              a % r ? r > 6 && a % r == 4 && (s = i[s >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s]) : (s = i[(s = s << 8 | s >>> 24) >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s], s ^= p[a / r | 0] << 24), o[a] = o[a - r] ^ s;
            }
          }

          for (var h = this._invKeySchedule = [], l = 0; l < n; l++) {
            a = n - l, s = l % 4 ? o[a] : o[a - 4], h[l] = l < 4 || a <= 4 ? s : f[i[s >>> 24]] ^ c[i[s >>> 16 & 255]] ^ u[i[s >>> 8 & 255]] ^ d[i[255 & s]];
          }
        }
      },
      encryptBlock: function encryptBlock(e, t) {
        this._doCryptBlock(e, t, this._keySchedule, a, s, h, l, i);
      },
      decryptBlock: function decryptBlock(e, t) {
        var r = e[t + 1];
        e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, f, c, u, d, o), r = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = r;
      },
      _doCryptBlock: function _doCryptBlock(e, t, r, n, i, o, a, s) {
        for (var h = this._nRounds, l = e[t] ^ r[0], f = e[t + 1] ^ r[1], c = e[t + 2] ^ r[2], u = e[t + 3] ^ r[3], d = 4, p = 1; p < h; p++) {
          var _ = n[l >>> 24] ^ i[f >>> 16 & 255] ^ o[c >>> 8 & 255] ^ a[255 & u] ^ r[d++],
              g = n[f >>> 24] ^ i[c >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & l] ^ r[d++],
              v = n[c >>> 24] ^ i[u >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & f] ^ r[d++],
              w = n[u >>> 24] ^ i[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & c] ^ r[d++];

          l = _, f = g, c = v, u = w;
        }

        _ = (s[l >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & u]) ^ r[d++], g = (s[f >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ r[d++], v = (s[c >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & f]) ^ r[d++], w = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & c]) ^ r[d++], e[t] = _, e[t + 1] = g, e[t + 2] = v, e[t + 3] = w;
      },
      keySize: 8
    });

    e.AES = t._createHelper(_);
  }(), r.AES);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function () {
    var e = r,
        t = e.lib,
        n = t.WordArray,
        i = t.BlockCipher,
        o = e.algo,
        a = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
        s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
        h = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
        l = [{
      0: 8421888,
      268435456: 32768,
      536870912: 8421378,
      805306368: 2,
      1073741824: 512,
      1342177280: 8421890,
      1610612736: 8389122,
      1879048192: 8388608,
      2147483648: 514,
      2415919104: 8389120,
      2684354560: 33280,
      2952790016: 8421376,
      3221225472: 32770,
      3489660928: 8388610,
      3758096384: 0,
      4026531840: 33282,
      134217728: 0,
      402653184: 8421890,
      671088640: 33282,
      939524096: 32768,
      1207959552: 8421888,
      1476395008: 512,
      1744830464: 8421378,
      2013265920: 2,
      2281701376: 8389120,
      2550136832: 33280,
      2818572288: 8421376,
      3087007744: 8389122,
      3355443200: 8388610,
      3623878656: 32770,
      3892314112: 514,
      4160749568: 8388608,
      1: 32768,
      268435457: 2,
      536870913: 8421888,
      805306369: 8388608,
      1073741825: 8421378,
      1342177281: 33280,
      1610612737: 512,
      1879048193: 8389122,
      2147483649: 8421890,
      2415919105: 8421376,
      2684354561: 8388610,
      2952790017: 33282,
      3221225473: 514,
      3489660929: 8389120,
      3758096385: 32770,
      4026531841: 0,
      134217729: 8421890,
      402653185: 8421376,
      671088641: 8388608,
      939524097: 512,
      1207959553: 32768,
      1476395009: 8388610,
      1744830465: 2,
      2013265921: 33282,
      2281701377: 32770,
      2550136833: 8389122,
      2818572289: 514,
      3087007745: 8421888,
      3355443201: 8389120,
      3623878657: 0,
      3892314113: 33280,
      4160749569: 8421378
    }, {
      0: 1074282512,
      16777216: 16384,
      33554432: 524288,
      50331648: 1074266128,
      67108864: 1073741840,
      83886080: 1074282496,
      100663296: 1073758208,
      117440512: 16,
      134217728: 540672,
      150994944: 1073758224,
      167772160: 1073741824,
      184549376: 540688,
      201326592: 524304,
      218103808: 0,
      234881024: 16400,
      251658240: 1074266112,
      8388608: 1073758208,
      25165824: 540688,
      41943040: 16,
      58720256: 1073758224,
      75497472: 1074282512,
      92274688: 1073741824,
      109051904: 524288,
      125829120: 1074266128,
      142606336: 524304,
      159383552: 0,
      176160768: 16384,
      192937984: 1074266112,
      209715200: 1073741840,
      226492416: 540672,
      243269632: 1074282496,
      260046848: 16400,
      268435456: 0,
      285212672: 1074266128,
      301989888: 1073758224,
      318767104: 1074282496,
      335544320: 1074266112,
      352321536: 16,
      369098752: 540688,
      385875968: 16384,
      402653184: 16400,
      419430400: 524288,
      436207616: 524304,
      452984832: 1073741840,
      469762048: 540672,
      486539264: 1073758208,
      503316480: 1073741824,
      520093696: 1074282512,
      276824064: 540688,
      293601280: 524288,
      310378496: 1074266112,
      327155712: 16384,
      343932928: 1073758208,
      360710144: 1074282512,
      377487360: 16,
      394264576: 1073741824,
      411041792: 1074282496,
      427819008: 1073741840,
      444596224: 1073758224,
      461373440: 524304,
      478150656: 0,
      494927872: 16400,
      511705088: 1074266128,
      528482304: 540672
    }, {
      0: 260,
      1048576: 0,
      2097152: 67109120,
      3145728: 65796,
      4194304: 65540,
      5242880: 67108868,
      6291456: 67174660,
      7340032: 67174400,
      8388608: 67108864,
      9437184: 67174656,
      10485760: 65792,
      11534336: 67174404,
      12582912: 67109124,
      13631488: 65536,
      14680064: 4,
      15728640: 256,
      524288: 67174656,
      1572864: 67174404,
      2621440: 0,
      3670016: 67109120,
      4718592: 67108868,
      5767168: 65536,
      6815744: 65540,
      7864320: 260,
      8912896: 4,
      9961472: 256,
      11010048: 67174400,
      12058624: 65796,
      13107200: 65792,
      14155776: 67109124,
      15204352: 67174660,
      16252928: 67108864,
      16777216: 67174656,
      17825792: 65540,
      18874368: 65536,
      19922944: 67109120,
      20971520: 256,
      22020096: 67174660,
      23068672: 67108868,
      24117248: 0,
      25165824: 67109124,
      26214400: 67108864,
      27262976: 4,
      28311552: 65792,
      29360128: 67174400,
      30408704: 260,
      31457280: 65796,
      32505856: 67174404,
      17301504: 67108864,
      18350080: 260,
      19398656: 67174656,
      20447232: 0,
      21495808: 65540,
      22544384: 67109120,
      23592960: 256,
      24641536: 67174404,
      25690112: 65536,
      26738688: 67174660,
      27787264: 65796,
      28835840: 67108868,
      29884416: 67109124,
      30932992: 67174400,
      31981568: 4,
      33030144: 65792
    }, {
      0: 2151682048,
      65536: 2147487808,
      131072: 4198464,
      196608: 2151677952,
      262144: 0,
      327680: 4198400,
      393216: 2147483712,
      458752: 4194368,
      524288: 2147483648,
      589824: 4194304,
      655360: 64,
      720896: 2147487744,
      786432: 2151678016,
      851968: 4160,
      917504: 4096,
      983040: 2151682112,
      32768: 2147487808,
      98304: 64,
      163840: 2151678016,
      229376: 2147487744,
      294912: 4198400,
      360448: 2151682112,
      425984: 0,
      491520: 2151677952,
      557056: 4096,
      622592: 2151682048,
      688128: 4194304,
      753664: 4160,
      819200: 2147483648,
      884736: 4194368,
      950272: 4198464,
      1015808: 2147483712,
      1048576: 4194368,
      1114112: 4198400,
      1179648: 2147483712,
      1245184: 0,
      1310720: 4160,
      1376256: 2151678016,
      1441792: 2151682048,
      1507328: 2147487808,
      1572864: 2151682112,
      1638400: 2147483648,
      1703936: 2151677952,
      1769472: 4198464,
      1835008: 2147487744,
      1900544: 4194304,
      1966080: 64,
      2031616: 4096,
      1081344: 2151677952,
      1146880: 2151682112,
      1212416: 0,
      1277952: 4198400,
      1343488: 4194368,
      1409024: 2147483648,
      1474560: 2147487808,
      1540096: 64,
      1605632: 2147483712,
      1671168: 4096,
      1736704: 2147487744,
      1802240: 2151678016,
      1867776: 4160,
      1933312: 2151682048,
      1998848: 4194304,
      2064384: 4198464
    }, {
      0: 128,
      4096: 17039360,
      8192: 262144,
      12288: 536870912,
      16384: 537133184,
      20480: 16777344,
      24576: 553648256,
      28672: 262272,
      32768: 16777216,
      36864: 537133056,
      40960: 536871040,
      45056: 553910400,
      49152: 553910272,
      53248: 0,
      57344: 17039488,
      61440: 553648128,
      2048: 17039488,
      6144: 553648256,
      10240: 128,
      14336: 17039360,
      18432: 262144,
      22528: 537133184,
      26624: 553910272,
      30720: 536870912,
      34816: 537133056,
      38912: 0,
      43008: 553910400,
      47104: 16777344,
      51200: 536871040,
      55296: 553648128,
      59392: 16777216,
      63488: 262272,
      65536: 262144,
      69632: 128,
      73728: 536870912,
      77824: 553648256,
      81920: 16777344,
      86016: 553910272,
      90112: 537133184,
      94208: 16777216,
      98304: 553910400,
      102400: 553648128,
      106496: 17039360,
      110592: 537133056,
      114688: 262272,
      118784: 536871040,
      122880: 0,
      126976: 17039488,
      67584: 553648256,
      71680: 16777216,
      75776: 17039360,
      79872: 537133184,
      83968: 536870912,
      88064: 17039488,
      92160: 128,
      96256: 553910272,
      100352: 262272,
      104448: 553910400,
      108544: 0,
      112640: 553648128,
      116736: 16777344,
      120832: 262144,
      124928: 537133056,
      129024: 536871040
    }, {
      0: 268435464,
      256: 8192,
      512: 270532608,
      768: 270540808,
      1024: 268443648,
      1280: 2097152,
      1536: 2097160,
      1792: 268435456,
      2048: 0,
      2304: 268443656,
      2560: 2105344,
      2816: 8,
      3072: 270532616,
      3328: 2105352,
      3584: 8200,
      3840: 270540800,
      128: 270532608,
      384: 270540808,
      640: 8,
      896: 2097152,
      1152: 2105352,
      1408: 268435464,
      1664: 268443648,
      1920: 8200,
      2176: 2097160,
      2432: 8192,
      2688: 268443656,
      2944: 270532616,
      3200: 0,
      3456: 270540800,
      3712: 2105344,
      3968: 268435456,
      4096: 268443648,
      4352: 270532616,
      4608: 270540808,
      4864: 8200,
      5120: 2097152,
      5376: 268435456,
      5632: 268435464,
      5888: 2105344,
      6144: 2105352,
      6400: 0,
      6656: 8,
      6912: 270532608,
      7168: 8192,
      7424: 268443656,
      7680: 270540800,
      7936: 2097160,
      4224: 8,
      4480: 2105344,
      4736: 2097152,
      4992: 268435464,
      5248: 268443648,
      5504: 8200,
      5760: 270540808,
      6016: 270532608,
      6272: 270540800,
      6528: 270532616,
      6784: 8192,
      7040: 2105352,
      7296: 2097160,
      7552: 0,
      7808: 268435456,
      8064: 268443656
    }, {
      0: 1048576,
      16: 33555457,
      32: 1024,
      48: 1049601,
      64: 34604033,
      80: 0,
      96: 1,
      112: 34603009,
      128: 33555456,
      144: 1048577,
      160: 33554433,
      176: 34604032,
      192: 34603008,
      208: 1025,
      224: 1049600,
      240: 33554432,
      8: 34603009,
      24: 0,
      40: 33555457,
      56: 34604032,
      72: 1048576,
      88: 33554433,
      104: 33554432,
      120: 1025,
      136: 1049601,
      152: 33555456,
      168: 34603008,
      184: 1048577,
      200: 1024,
      216: 34604033,
      232: 1,
      248: 1049600,
      256: 33554432,
      272: 1048576,
      288: 33555457,
      304: 34603009,
      320: 1048577,
      336: 33555456,
      352: 34604032,
      368: 1049601,
      384: 1025,
      400: 34604033,
      416: 1049600,
      432: 1,
      448: 0,
      464: 34603008,
      480: 33554433,
      496: 1024,
      264: 1049600,
      280: 33555457,
      296: 34603009,
      312: 1,
      328: 33554432,
      344: 1048576,
      360: 1025,
      376: 34604032,
      392: 33554433,
      408: 34603008,
      424: 0,
      440: 34604033,
      456: 1049601,
      472: 1024,
      488: 33555456,
      504: 1048577
    }, {
      0: 134219808,
      1: 131072,
      2: 134217728,
      3: 32,
      4: 131104,
      5: 134350880,
      6: 134350848,
      7: 2048,
      8: 134348800,
      9: 134219776,
      10: 133120,
      11: 134348832,
      12: 2080,
      13: 0,
      14: 134217760,
      15: 133152,
      2147483648: 2048,
      2147483649: 134350880,
      2147483650: 134219808,
      2147483651: 134217728,
      2147483652: 134348800,
      2147483653: 133120,
      2147483654: 133152,
      2147483655: 32,
      2147483656: 134217760,
      2147483657: 2080,
      2147483658: 131104,
      2147483659: 134350848,
      2147483660: 0,
      2147483661: 134348832,
      2147483662: 134219776,
      2147483663: 131072,
      16: 133152,
      17: 134350848,
      18: 32,
      19: 2048,
      20: 134219776,
      21: 134217760,
      22: 134348832,
      23: 131072,
      24: 0,
      25: 131104,
      26: 134348800,
      27: 134219808,
      28: 134350880,
      29: 133120,
      30: 2080,
      31: 134217728,
      2147483664: 131072,
      2147483665: 2048,
      2147483666: 134348832,
      2147483667: 133152,
      2147483668: 32,
      2147483669: 134348800,
      2147483670: 134217728,
      2147483671: 134219808,
      2147483672: 134350880,
      2147483673: 134217760,
      2147483674: 134219776,
      2147483675: 0,
      2147483676: 133120,
      2147483677: 2080,
      2147483678: 131104,
      2147483679: 134350848
    }],
        f = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
        c = o.DES = i.extend({
      _doReset: function _doReset() {
        for (var e = this._key.words, t = [], r = 0; r < 56; r++) {
          var n = a[r] - 1;
          t[r] = e[n >>> 5] >>> 31 - n % 32 & 1;
        }

        for (var i = this._subKeys = [], o = 0; o < 16; o++) {
          var l = i[o] = [],
              f = h[o];

          for (r = 0; r < 24; r++) {
            l[r / 6 | 0] |= t[(s[r] - 1 + f) % 28] << 31 - r % 6, l[4 + (r / 6 | 0)] |= t[28 + (s[r + 24] - 1 + f) % 28] << 31 - r % 6;
          }

          for (l[0] = l[0] << 1 | l[0] >>> 31, r = 1; r < 7; r++) {
            l[r] = l[r] >>> 4 * (r - 1) + 3;
          }

          l[7] = l[7] << 5 | l[7] >>> 27;
        }

        var c = this._invSubKeys = [];

        for (r = 0; r < 16; r++) {
          c[r] = i[15 - r];
        }
      },
      encryptBlock: function encryptBlock(e, t) {
        this._doCryptBlock(e, t, this._subKeys);
      },
      decryptBlock: function decryptBlock(e, t) {
        this._doCryptBlock(e, t, this._invSubKeys);
      },
      _doCryptBlock: function _doCryptBlock(e, t, r) {
        this._lBlock = e[t], this._rBlock = e[t + 1], u.call(this, 4, 252645135), u.call(this, 16, 65535), d.call(this, 2, 858993459), d.call(this, 8, 16711935), u.call(this, 1, 1431655765);

        for (var n = 0; n < 16; n++) {
          for (var i = r[n], o = this._lBlock, a = this._rBlock, s = 0, h = 0; h < 8; h++) {
            s |= l[h][((a ^ i[h]) & f[h]) >>> 0];
          }

          this._lBlock = a, this._rBlock = o ^ s;
        }

        var c = this._lBlock;
        this._lBlock = this._rBlock, this._rBlock = c, u.call(this, 1, 1431655765), d.call(this, 8, 16711935), d.call(this, 2, 858993459), u.call(this, 16, 65535), u.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock;
      },
      keySize: 2,
      ivSize: 2,
      blockSize: 2
    });

    function u(e, t) {
      var r = (this._lBlock >>> e ^ this._rBlock) & t;
      this._rBlock ^= r, this._lBlock ^= r << e;
    }

    function d(e, t) {
      var r = (this._rBlock >>> e ^ this._lBlock) & t;
      this._lBlock ^= r, this._rBlock ^= r << e;
    }

    e.DES = i._createHelper(c);
    var p = o.TripleDES = i.extend({
      _doReset: function _doReset() {
        var e = this._key.words;
        this._des1 = c.createEncryptor(n.create(e.slice(0, 2))), this._des2 = c.createEncryptor(n.create(e.slice(2, 4))), this._des3 = c.createEncryptor(n.create(e.slice(4, 6)));
      },
      encryptBlock: function encryptBlock(e, t) {
        this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t);
      },
      decryptBlock: function decryptBlock(e, t) {
        this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t);
      },
      keySize: 6,
      ivSize: 2,
      blockSize: 2
    });
    e.TripleDES = i._createHelper(p);
  }(), r.TripleDES);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function () {
    var e = r,
        t = e.lib.StreamCipher,
        n = e.algo,
        i = n.RC4 = t.extend({
      _doReset: function _doReset() {
        for (var e = this._key, t = e.words, r = e.sigBytes, n = this._S = [], i = 0; i < 256; i++) {
          n[i] = i;
        }

        i = 0;

        for (var o = 0; i < 256; i++) {
          var a = i % r,
              s = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
          o = (o + n[i] + s) % 256;
          var h = n[i];
          n[i] = n[o], n[o] = h;
        }

        this._i = this._j = 0;
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        e[t] ^= o.call(this);
      },
      keySize: 8,
      ivSize: 0
    });

    function o() {
      for (var e = this._S, t = this._i, r = this._j, n = 0, i = 0; i < 4; i++) {
        r = (r + e[t = (t + 1) % 256]) % 256;
        var o = e[t];
        e[t] = e[r], e[r] = o, n |= e[(e[t] + e[r]) % 256] << 24 - 8 * i;
      }

      return this._i = t, this._j = r, n;
    }

    e.RC4 = t._createHelper(i);
    var a = n.RC4Drop = i.extend({
      cfg: i.cfg.extend({
        drop: 192
      }),
      _doReset: function _doReset() {
        i._doReset.call(this);

        for (var e = this.cfg.drop; e > 0; e--) {
          o.call(this);
        }
      }
    });
    e.RC4Drop = t._createHelper(a);
  }(), r.RC4);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function () {
    var e = r,
        t = e.lib.StreamCipher,
        n = e.algo,
        i = [],
        o = [],
        a = [],
        s = n.Rabbit = t.extend({
      _doReset: function _doReset() {
        for (var e = this._key.words, t = this.cfg.iv, r = 0; r < 4; r++) {
          e[r] = 16711935 & (e[r] << 8 | e[r] >>> 24) | 4278255360 & (e[r] << 24 | e[r] >>> 8);
        }

        var n = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
            i = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];

        for (this._b = 0, r = 0; r < 4; r++) {
          h.call(this);
        }

        for (r = 0; r < 8; r++) {
          i[r] ^= n[r + 4 & 7];
        }

        if (t) {
          var o = t.words,
              a = o[0],
              s = o[1],
              l = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
              f = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
              c = l >>> 16 | 4294901760 & f,
              u = f << 16 | 65535 & l;

          for (i[0] ^= l, i[1] ^= c, i[2] ^= f, i[3] ^= u, i[4] ^= l, i[5] ^= c, i[6] ^= f, i[7] ^= u, r = 0; r < 4; r++) {
            h.call(this);
          }
        }
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        var r = this._X;
        h.call(this), i[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, i[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, i[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, i[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;

        for (var n = 0; n < 4; n++) {
          i[n] = 16711935 & (i[n] << 8 | i[n] >>> 24) | 4278255360 & (i[n] << 24 | i[n] >>> 8), e[t + n] ^= i[n];
        }
      },
      blockSize: 4,
      ivSize: 2
    });

    function h() {
      for (var e = this._X, t = this._C, r = 0; r < 8; r++) {
        o[r] = t[r];
      }

      for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < o[7] >>> 0 ? 1 : 0, r = 0; r < 8; r++) {
        var n = e[r] + t[r],
            i = 65535 & n,
            s = n >>> 16,
            h = ((i * i >>> 17) + i * s >>> 15) + s * s,
            l = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
        a[r] = h ^ l;
      }

      e[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, e[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, e[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, e[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, e[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, e[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, e[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, e[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
    }

    e.Rabbit = t._createHelper(s);
  }(), r.Rabbit);
}), Q(function (e, t) {
  var r;
  e.exports = (r = ee, function () {
    var e = r,
        t = e.lib.StreamCipher,
        n = e.algo,
        i = [],
        o = [],
        a = [],
        s = n.RabbitLegacy = t.extend({
      _doReset: function _doReset() {
        var e = this._key.words,
            t = this.cfg.iv,
            r = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
            n = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
        this._b = 0;

        for (var i = 0; i < 4; i++) {
          h.call(this);
        }

        for (i = 0; i < 8; i++) {
          n[i] ^= r[i + 4 & 7];
        }

        if (t) {
          var o = t.words,
              a = o[0],
              s = o[1],
              l = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
              f = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
              c = l >>> 16 | 4294901760 & f,
              u = f << 16 | 65535 & l;

          for (n[0] ^= l, n[1] ^= c, n[2] ^= f, n[3] ^= u, n[4] ^= l, n[5] ^= c, n[6] ^= f, n[7] ^= u, i = 0; i < 4; i++) {
            h.call(this);
          }
        }
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        var r = this._X;
        h.call(this), i[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, i[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, i[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, i[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;

        for (var n = 0; n < 4; n++) {
          i[n] = 16711935 & (i[n] << 8 | i[n] >>> 24) | 4278255360 & (i[n] << 24 | i[n] >>> 8), e[t + n] ^= i[n];
        }
      },
      blockSize: 4,
      ivSize: 2
    });

    function h() {
      for (var e = this._X, t = this._C, r = 0; r < 8; r++) {
        o[r] = t[r];
      }

      for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < o[7] >>> 0 ? 1 : 0, r = 0; r < 8; r++) {
        var n = e[r] + t[r],
            i = 65535 & n,
            s = n >>> 16,
            h = ((i * i >>> 17) + i * s >>> 15) + s * s,
            l = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
        a[r] = h ^ l;
      }

      e[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, e[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, e[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, e[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, e[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, e[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, e[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, e[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
    }

    e.RabbitLegacy = t._createHelper(s);
  }(), r.RabbitLegacy);
}), Q(function (e, t) {
  e.exports = ee;
}));

function re() {
  throw new Error("setTimeout has not been defined");
}

function ne() {
  throw new Error("clearTimeout has not been defined");
}

var ie = re,
    oe = ne;

function ae(e) {
  if (ie === setTimeout) return setTimeout(e, 0);
  if ((ie === re || !ie) && setTimeout) return ie = setTimeout, setTimeout(e, 0);

  try {
    return ie(e, 0);
  } catch (t) {
    try {
      return ie.call(null, e, 0);
    } catch (t) {
      return ie.call(this, e, 0);
    }
  }
}

"function" == typeof e.setTimeout && (ie = setTimeout), "function" == typeof e.clearTimeout && (oe = clearTimeout);
var se,
    he = [],
    le = !1,
    fe = -1;

function ce() {
  le && se && (le = !1, se.length ? he = se.concat(he) : fe = -1, he.length && ue());
}

function ue() {
  if (!le) {
    var e = ae(ce);
    le = !0;

    for (var t = he.length; t;) {
      for (se = he, he = []; ++fe < t;) {
        se && se[fe].run();
      }

      fe = -1, t = he.length;
    }

    se = null, le = !1, function (e) {
      if (oe === clearTimeout) return clearTimeout(e);
      if ((oe === ne || !oe) && clearTimeout) return oe = clearTimeout, clearTimeout(e);

      try {
        oe(e);
      } catch (t) {
        try {
          return oe.call(null, e);
        } catch (t) {
          return oe.call(this, e);
        }
      }
    }(e);
  }
}

function de(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) {
    t[r - 1] = arguments[r];
  }
  he.push(new pe(e, t)), 1 !== he.length || le || ae(ue);
}

function pe(e, t) {
  this.fun = e, this.array = t;
}

pe.prototype.run = function () {
  this.fun.apply(null, this.array);
};

var _e = e.performance || {};

_e.now || _e.mozNow || _e.msNow || _e.oNow || _e.webkitNow;

function ge() {}

function ve() {
  ve.init.call(this);
}

function we(e) {
  return void 0 === e._maxListeners ? ve.defaultMaxListeners : e._maxListeners;
}

function be(e, t, r) {
  if (t) e.call(r);else for (var n = e.length, i = Ae(e, n), o = 0; o < n; ++o) {
    i[o].call(r);
  }
}

function ye(e, t, r, n) {
  if (t) e.call(r, n);else for (var i = e.length, o = Ae(e, i), a = 0; a < i; ++a) {
    o[a].call(r, n);
  }
}

function me(e, t, r, n, i) {
  if (t) e.call(r, n, i);else for (var o = e.length, a = Ae(e, o), s = 0; s < o; ++s) {
    a[s].call(r, n, i);
  }
}

function ke(e, t, r, n, i, o) {
  if (t) e.call(r, n, i, o);else for (var a = e.length, s = Ae(e, a), h = 0; h < a; ++h) {
    s[h].call(r, n, i, o);
  }
}

function Ee(e, t, r, n) {
  if (t) e.apply(r, n);else for (var i = e.length, o = Ae(e, i), a = 0; a < i; ++a) {
    o[a].apply(r, n);
  }
}

function Se(e, t, r, n) {
  var i, o, a, s;
  if ("function" != typeof r) throw new TypeError('"listener" argument must be a function');

  if ((o = e._events) ? (o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), a = o[t]) : (o = e._events = new ge(), e._eventsCount = 0), a) {
    if ("function" == typeof a ? a = o[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), !a.warned && (i = we(e)) && i > 0 && a.length > i) {
      a.warned = !0;
      var h = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
      h.name = "MaxListenersExceededWarning", h.emitter = e, h.type = t, h.count = a.length, s = h, "function" == typeof console.warn ? console.warn(s) : console.log(s);
    }
  } else a = o[t] = r, ++e._eventsCount;

  return e;
}

function xe(e, t, r) {
  var n = !1;

  function i() {
    e.removeListener(t, i), n || (n = !0, r.apply(e, arguments));
  }

  return i.listener = r, i;
}

function Re(e) {
  var t = this._events;

  if (t) {
    var r = t[e];
    if ("function" == typeof r) return 1;
    if (r) return r.length;
  }

  return 0;
}

function Ae(e, t) {
  for (var r = new Array(t); t--;) {
    r[t] = e[t];
  }

  return r;
}

ge.prototype = Object.create(null), ve.EventEmitter = ve, ve.usingDomains = !1, ve.prototype.domain = void 0, ve.prototype._events = void 0, ve.prototype._maxListeners = void 0, ve.defaultMaxListeners = 10, ve.init = function () {
  this.domain = null, ve.usingDomains && (void 0).active && (void 0).Domain, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new ge(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, ve.prototype.setMaxListeners = function (e) {
  if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
  return this._maxListeners = e, this;
}, ve.prototype.getMaxListeners = function () {
  return we(this);
}, ve.prototype.emit = function (e) {
  var t,
      r,
      n,
      i,
      o,
      a,
      s,
      h = "error" === e;
  if (a = this._events) h = h && null == a.error;else if (!h) return !1;

  if (s = this.domain, h) {
    if (t = arguments[1], !s) {
      if (t instanceof Error) throw t;
      var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
      throw l.context = t, l;
    }

    return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = s, t.domainThrown = !1, s.emit("error", t), !1;
  }

  if (!(r = a[e])) return !1;
  var f = "function" == typeof r;

  switch (n = arguments.length) {
    case 1:
      be(r, f, this);
      break;

    case 2:
      ye(r, f, this, arguments[1]);
      break;

    case 3:
      me(r, f, this, arguments[1], arguments[2]);
      break;

    case 4:
      ke(r, f, this, arguments[1], arguments[2], arguments[3]);
      break;

    default:
      for (i = new Array(n - 1), o = 1; o < n; o++) {
        i[o - 1] = arguments[o];
      }

      Ee(r, f, this, i);
  }

  return !0;
}, ve.prototype.addListener = function (e, t) {
  return Se(this, e, t, !1);
}, ve.prototype.on = ve.prototype.addListener, ve.prototype.prependListener = function (e, t) {
  return Se(this, e, t, !0);
}, ve.prototype.once = function (e, t) {
  if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
  return this.on(e, xe(this, e, t)), this;
}, ve.prototype.prependOnceListener = function (e, t) {
  if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
  return this.prependListener(e, xe(this, e, t)), this;
}, ve.prototype.removeListener = function (e, t) {
  var r, n, i, o, a;
  if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
  if (!(n = this._events)) return this;
  if (!(r = n[e])) return this;
  if (r === t || r.listener && r.listener === t) 0 == --this._eventsCount ? this._events = new ge() : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));else if ("function" != typeof r) {
    for (i = -1, o = r.length; o-- > 0;) {
      if (r[o] === t || r[o].listener && r[o].listener === t) {
        a = r[o].listener, i = o;
        break;
      }
    }

    if (i < 0) return this;

    if (1 === r.length) {
      if (r[0] = void 0, 0 == --this._eventsCount) return this._events = new ge(), this;
      delete n[e];
    } else !function (e, t) {
      for (var r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1) {
        e[r] = e[n];
      }

      e.pop();
    }(r, i);

    n.removeListener && this.emit("removeListener", e, a || t);
  }
  return this;
}, ve.prototype.removeAllListeners = function (e) {
  var t, r;
  if (!(r = this._events)) return this;
  if (!r.removeListener) return 0 === arguments.length ? (this._events = new ge(), this._eventsCount = 0) : r[e] && (0 == --this._eventsCount ? this._events = new ge() : delete r[e]), this;

  if (0 === arguments.length) {
    for (var n, i = Object.keys(r), o = 0; o < i.length; ++o) {
      "removeListener" !== (n = i[o]) && this.removeAllListeners(n);
    }

    return this.removeAllListeners("removeListener"), this._events = new ge(), this._eventsCount = 0, this;
  }

  if ("function" == typeof (t = r[e])) this.removeListener(e, t);else if (t) do {
    this.removeListener(e, t[t.length - 1]);
  } while (t[0]);
  return this;
}, ve.prototype.listeners = function (e) {
  var t,
      r = this._events;
  return r && (t = r[e]) ? "function" == typeof t ? [t.listener || t] : function (e) {
    for (var t = new Array(e.length), r = 0; r < t.length; ++r) {
      t[r] = e[r].listener || e[r];
    }

    return t;
  }(t) : [];
}, ve.listenerCount = function (e, t) {
  return "function" == typeof e.listenerCount ? e.listenerCount(t) : Re.call(e, t);
}, ve.prototype.listenerCount = Re, ve.prototype.eventNames = function () {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};
var Be = "function" == typeof Object.create ? function (e, t) {
  e.super_ = t, e.prototype = Object.create(t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
} : function (e, t) {
  e.super_ = t;

  var r = function r() {};

  r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e;
},
    ze = /%[sdj%]/g;

function Le(e) {
  if (!Ze(e)) {
    for (var t = [], r = 0; r < arguments.length; r++) {
      t.push(De(arguments[r]));
    }

    return t.join(" ");
  }

  r = 1;

  for (var n = arguments, i = n.length, o = String(e).replace(ze, function (e) {
    if ("%%" === e) return "%";
    if (r >= i) return e;

    switch (e) {
      case "%s":
        return String(n[r++]);

      case "%d":
        return Number(n[r++]);

      case "%j":
        try {
          return JSON.stringify(n[r++]);
        } catch (e) {
          return "[Circular]";
        }

      default:
        return e;
    }
  }), a = n[r]; r < i; a = n[++r]) {
    Ne(a) || !Ye(a) ? o += " " + a : o += " " + De(a);
  }

  return o;
}

function Te(t, r) {
  if (je(e.process)) return function () {
    return Te(t, r).apply(this, arguments);
  };
  var n = !1;
  return function () {
    return n || (console.error(r), n = !0), t.apply(this, arguments);
  };
}

var Me,
    Ce = {};

function De(e, t) {
  var r = {
    seen: [],
    stylize: Pe
  };
  return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), Fe(t) ? r.showHidden = t : t && function (e, t) {
    if (!t || !Ye(t)) return e;
    var r = Object.keys(t),
        n = r.length;

    for (; n--;) {
      e[r[n]] = t[r[n]];
    }
  }(r, t), je(r.showHidden) && (r.showHidden = !1), je(r.depth) && (r.depth = 2), je(r.colors) && (r.colors = !1), je(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = Ie), Oe(r, e, r.depth);
}

function Ie(e, t) {
  var r = De.styles[t];
  return r ? "[" + De.colors[r][0] + "m" + e + "[" + De.colors[r][1] + "m" : e;
}

function Pe(e, t) {
  return e;
}

function Oe(e, t, r) {
  if (e.customInspect && t && qe(t.inspect) && t.inspect !== De && (!t.constructor || t.constructor.prototype !== t)) {
    var n = t.inspect(r, e);
    return Ze(n) || (n = Oe(e, n, r)), n;
  }

  var i = function (e, t) {
    if (je(t)) return e.stylize("undefined", "undefined");

    if (Ze(t)) {
      var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return e.stylize(r, "string");
    }

    if (n = t, "number" == typeof n) return e.stylize("" + t, "number");
    var n;
    if (Fe(t)) return e.stylize("" + t, "boolean");
    if (Ne(t)) return e.stylize("null", "null");
  }(e, t);

  if (i) return i;

  var o = Object.keys(t),
      a = function (e) {
    var t = {};
    return e.forEach(function (e, r) {
      t[e] = !0;
    }), t;
  }(o);

  if (e.showHidden && (o = Object.getOwnPropertyNames(t)), Xe(t) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return Ue(t);

  if (0 === o.length) {
    if (qe(t)) {
      var s = t.name ? ": " + t.name : "";
      return e.stylize("[Function" + s + "]", "special");
    }

    if (We(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
    if (Ke(t)) return e.stylize(Date.prototype.toString.call(t), "date");
    if (Xe(t)) return Ue(t);
  }

  var h,
      l,
      f = "",
      c = !1,
      u = ["{", "}"];
  (h = t, Array.isArray(h) && (c = !0, u = ["[", "]"]), qe(t)) && (f = " [Function" + (t.name ? ": " + t.name : "") + "]");
  return We(t) && (f = " " + RegExp.prototype.toString.call(t)), Ke(t) && (f = " " + Date.prototype.toUTCString.call(t)), Xe(t) && (f = " " + Ue(t)), 0 !== o.length || c && 0 != t.length ? r < 0 ? We(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(t), l = c ? function (e, t, r, n, i) {
    for (var o = [], a = 0, s = t.length; a < s; ++a) {
      Ge(t, String(a)) ? o.push(He(e, t, r, n, String(a), !0)) : o.push("");
    }

    return i.forEach(function (i) {
      i.match(/^\d+$/) || o.push(He(e, t, r, n, i, !0));
    }), o;
  }(e, t, r, a, o) : o.map(function (n) {
    return He(e, t, r, a, n, c);
  }), e.seen.pop(), function (e, t, r) {
    if (e.reduce(function (e, t) {
      return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) > 60) return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
    return r[0] + t + " " + e.join(", ") + " " + r[1];
  }(l, f, u)) : u[0] + f + u[1];
}

function Ue(e) {
  return "[" + Error.prototype.toString.call(e) + "]";
}

function He(e, t, r, n, i, o) {
  var a, s, h;

  if ((h = Object.getOwnPropertyDescriptor(t, i) || {
    value: t[i]
  }).get ? s = h.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : h.set && (s = e.stylize("[Setter]", "special")), Ge(n, i) || (a = "[" + i + "]"), s || (e.seen.indexOf(h.value) < 0 ? (s = Ne(r) ? Oe(e, h.value, null) : Oe(e, h.value, r - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map(function (e) {
    return "  " + e;
  }).join("\n").substr(2) : "\n" + s.split("\n").map(function (e) {
    return "   " + e;
  }).join("\n")) : s = e.stylize("[Circular]", "special")), je(a)) {
    if (o && i.match(/^\d+$/)) return s;
    (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"));
  }

  return a + ": " + s;
}

function Fe(e) {
  return "boolean" == typeof e;
}

function Ne(e) {
  return null === e;
}

function Ze(e) {
  return "string" == typeof e;
}

function je(e) {
  return void 0 === e;
}

function We(e) {
  return Ye(e) && "[object RegExp]" === Ve(e);
}

function Ye(e) {
  return "object" == Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(e) && null !== e;
}

function Ke(e) {
  return Ye(e) && "[object Date]" === Ve(e);
}

function Xe(e) {
  return Ye(e) && ("[object Error]" === Ve(e) || e instanceof Error);
}

function qe(e) {
  return "function" == typeof e;
}

function Ve(e) {
  return Object.prototype.toString.call(e);
}

function Ge(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}

function $e() {
  this.head = null, this.tail = null, this.length = 0;
}

De.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
}, De.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
}, $e.prototype.push = function (e) {
  var t = {
    data: e,
    next: null
  };
  this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
}, $e.prototype.unshift = function (e) {
  var t = {
    data: e,
    next: this.head
  };
  0 === this.length && (this.tail = t), this.head = t, ++this.length;
}, $e.prototype.shift = function () {
  if (0 !== this.length) {
    var e = this.head.data;
    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
  }
}, $e.prototype.clear = function () {
  this.head = this.tail = null, this.length = 0;
}, $e.prototype.join = function (e) {
  if (0 === this.length) return "";

  for (var t = this.head, r = "" + t.data; t = t.next;) {
    r += e + t.data;
  }

  return r;
}, $e.prototype.concat = function (e) {
  if (0 === this.length) return p.alloc(0);
  if (1 === this.length) return this.head.data;

  for (var t = p.allocUnsafe(e >>> 0), r = this.head, n = 0; r;) {
    r.data.copy(t, n), n += r.data.length, r = r.next;
  }

  return t;
};

var Je = p.isEncoding || function (e) {
  switch (e && e.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return !0;

    default:
      return !1;
  }
};

function Qe(e) {
  switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), function (e) {
    if (e && !Je(e)) throw new Error("Unknown encoding: " + e);
  }(e), this.encoding) {
    case "utf8":
      this.surrogateSize = 3;
      break;

    case "ucs2":
    case "utf16le":
      this.surrogateSize = 2, this.detectIncompleteChar = tt;
      break;

    case "base64":
      this.surrogateSize = 3, this.detectIncompleteChar = rt;
      break;

    default:
      return void (this.write = et);
  }

  this.charBuffer = new p(6), this.charReceived = 0, this.charLength = 0;
}

function et(e) {
  return e.toString(this.encoding);
}

function tt(e) {
  this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0;
}

function rt(e) {
  this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0;
}

Qe.prototype.write = function (e) {
  for (var t = ""; this.charLength;) {
    var r = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
    if (e.copy(this.charBuffer, this.charReceived, 0, r), this.charReceived += r, this.charReceived < this.charLength) return "";

    if (e = e.slice(r, e.length), !((i = (t = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 && i <= 56319)) {
      if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
      break;
    }

    this.charLength += this.surrogateSize, t = "";
  }

  this.detectIncompleteChar(e);
  var n = e.length;
  this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, n), n -= this.charReceived);
  var i;
  n = (t += e.toString(this.encoding, 0, n)).length - 1;

  if ((i = t.charCodeAt(n)) >= 55296 && i <= 56319) {
    var o = this.surrogateSize;
    return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, n);
  }

  return t;
}, Qe.prototype.detectIncompleteChar = function (e) {
  for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
    var r = e[e.length - t];

    if (1 == t && r >> 5 == 6) {
      this.charLength = 2;
      break;
    }

    if (t <= 2 && r >> 4 == 14) {
      this.charLength = 3;
      break;
    }

    if (t <= 3 && r >> 3 == 30) {
      this.charLength = 4;
      break;
    }
  }

  this.charReceived = t;
}, Qe.prototype.end = function (e) {
  var t = "";

  if (e && e.length && (t = this.write(e)), this.charReceived) {
    var r = this.charReceived,
        n = this.charBuffer,
        i = this.encoding;
    t += n.slice(0, r).toString(i);
  }

  return t;
}, ot.ReadableState = it;

var nt = function (e) {
  je(Me) && (Me = ""), e = e.toUpperCase(), Ce[e] || (new RegExp("\\b" + e + "\\b", "i").test(Me) ? Ce[e] = function () {
    var t = Le.apply(null, arguments);
    console.error("%s %d: %s", e, 0, t);
  } : Ce[e] = function () {});
  return Ce[e];
}("stream");

function it(e, t) {
  e = e || {}, this.objectMode = !!e.objectMode, t instanceof Ct && (this.objectMode = this.objectMode || !!e.readableObjectMode);
  var r = e.highWaterMark,
      n = this.objectMode ? 16 : 16384;
  this.highWaterMark = r || 0 === r ? r : n, this.highWaterMark = ~~this.highWaterMark, this.buffer = new $e(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (this.decoder = new Qe(e.encoding), this.encoding = e.encoding);
}

function ot(e) {
  if (!(this instanceof ot)) return new ot(e);
  this._readableState = new it(e, this), this.readable = !0, e && "function" == typeof e.read && (this._read = e.read), ve.call(this);
}

function at(e, t, r, n, i) {
  var o = function (e, t) {
    var r = null;
    $(t) || "string" == typeof t || null == t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
    return r;
  }(t, r);

  if (o) e.emit("error", o);else if (null === r) t.reading = !1, function (e, t) {
    if (t.ended) return;

    if (t.decoder) {
      var r = t.decoder.end();
      r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
    }

    t.ended = !0, lt(e);
  }(e, t);else if (t.objectMode || r && r.length > 0) {
    if (t.ended && !i) {
      var a = new Error("stream.push() after EOF");
      e.emit("error", a);
    } else if (t.endEmitted && i) {
      var s = new Error("stream.unshift() after end event");
      e.emit("error", s);
    } else {
      var h;
      !t.decoder || i || n || (r = t.decoder.write(r), h = !t.objectMode && 0 === r.length), i || (t.reading = !1), h || (t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && lt(e))), function (e, t) {
        t.readingMore || (t.readingMore = !0, de(ct, e, t));
      }(e, t);
    }
  } else i || (t.reading = !1);
  return function (e) {
    return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
  }(t);
}

Be(ot, ve), ot.prototype.push = function (e, t) {
  var r = this._readableState;
  return r.objectMode || "string" != typeof e || (t = t || r.defaultEncoding) !== r.encoding && (e = p.from(e, t), t = ""), at(this, r, e, t, !1);
}, ot.prototype.unshift = function (e) {
  return at(this, this._readableState, e, "", !0);
}, ot.prototype.isPaused = function () {
  return !1 === this._readableState.flowing;
}, ot.prototype.setEncoding = function (e) {
  return this._readableState.decoder = new Qe(e), this._readableState.encoding = e, this;
};
var st = 8388608;

function ht(e, t) {
  return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
    return e >= st ? e = st : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
  }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
}

function lt(e) {
  var t = e._readableState;
  t.needReadable = !1, t.emittedReadable || (nt("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? de(ft, e) : ft(e));
}

function ft(e) {
  nt("emit readable"), e.emit("readable"), pt(e);
}

function ct(e, t) {
  for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (nt("maybeReadMore read 0"), e.read(0), r !== t.length);) {
    r = t.length;
  }

  t.readingMore = !1;
}

function ut(e) {
  nt("readable nexttick read 0"), e.read(0);
}

function dt(e, t) {
  t.reading || (nt("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), pt(e), t.flowing && !t.reading && e.read(0);
}

function pt(e) {
  var t = e._readableState;

  for (nt("flow", t.flowing); t.flowing && null !== e.read();) {
    ;
  }
}

function _t(e, t) {
  return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = function (e, t, r) {
    var n;
    e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function (e, t) {
      var r = t.head,
          n = 1,
          i = r.data;
      e -= i.length;

      for (; r = r.next;) {
        var o = r.data,
            a = e > o.length ? o.length : e;

        if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) {
          a === o.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a));
          break;
        }

        ++n;
      }

      return t.length -= n, i;
    }(e, t) : function (e, t) {
      var r = p.allocUnsafe(e),
          n = t.head,
          i = 1;
      n.data.copy(r), e -= n.data.length;

      for (; n = n.next;) {
        var o = n.data,
            a = e > o.length ? o.length : e;

        if (o.copy(r, r.length - e, 0, a), 0 === (e -= a)) {
          a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
          break;
        }

        ++i;
      }

      return t.length -= i, r;
    }(e, t);
    return n;
  }(e, t.buffer, t.decoder), r);
  var r;
}

function gt(e) {
  var t = e._readableState;
  if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
  t.endEmitted || (t.ended = !0, de(vt, t, e));
}

function vt(e, t) {
  e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"));
}

function wt(e, t) {
  for (var r = 0, n = e.length; r < n; r++) {
    if (e[r] === t) return r;
  }

  return -1;
}

function bt() {}

function yt(e, t, r) {
  this.chunk = e, this.encoding = t, this.callback = r, this.next = null;
}

function mt(e, t) {
  Object.defineProperty(this, "buffer", {
    get: Te(function () {
      return this.getBuffer();
    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
  }), e = e || {}, this.objectMode = !!e.objectMode, t instanceof Ct && (this.objectMode = this.objectMode || !!e.writableObjectMode);
  var r = e.highWaterMark,
      n = this.objectMode ? 16 : 16384;
  this.highWaterMark = r || 0 === r ? r : n, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
  var i = !1 === e.decodeStrings;
  this.decodeStrings = !i, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
    !function (e, t) {
      var r = e._writableState,
          n = r.sync,
          i = r.writecb;
      if (function (e) {
        e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
      }(r), t) !function (e, t, r, n, i) {
        --t.pendingcb, r ? de(i, n) : i(n);
        e._writableState.errorEmitted = !0, e.emit("error", n);
      }(e, r, n, t, i);else {
        var o = Rt(r);
        o || r.corked || r.bufferProcessing || !r.bufferedRequest || xt(e, r), n ? de(St, e, r, o, i) : St(e, r, o, i);
      }
    }(t, e);
  }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new zt(this);
}

function kt(e) {
  if (!(this instanceof kt || this instanceof Ct)) return new kt(e);
  this._writableState = new mt(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev)), ve.call(this);
}

function Et(e, t, r, n, i, o, a) {
  t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1;
}

function St(e, t, r, n) {
  r || function (e, t) {
    0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
  }(e, t), t.pendingcb--, n(), Bt(e, t);
}

function xt(e, t) {
  t.bufferProcessing = !0;
  var r = t.bufferedRequest;

  if (e._writev && r && r.next) {
    var n = t.bufferedRequestCount,
        i = new Array(n),
        o = t.corkedRequestsFree;
    o.entry = r;

    for (var a = 0; r;) {
      i[a] = r, r = r.next, a += 1;
    }

    Et(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new zt(t);
  } else {
    for (; r;) {
      var s = r.chunk,
          h = r.encoding,
          l = r.callback;
      if (Et(e, t, !1, t.objectMode ? 1 : s.length, s, h, l), r = r.next, t.writing) break;
    }

    null === r && (t.lastBufferedRequest = null);
  }

  t.bufferedRequestCount = 0, t.bufferedRequest = r, t.bufferProcessing = !1;
}

function Rt(e) {
  return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
}

function At(e, t) {
  t.prefinished || (t.prefinished = !0, e.emit("prefinish"));
}

function Bt(e, t) {
  var r = Rt(t);
  return r && (0 === t.pendingcb ? (At(e, t), t.finished = !0, e.emit("finish")) : At(e, t)), r;
}

function zt(e) {
  var t = this;
  this.next = null, this.entry = null, this.finish = function (r) {
    var n = t.entry;

    for (t.entry = null; n;) {
      var i = n.callback;
      e.pendingcb--, i(r), n = n.next;
    }

    e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t;
  };
}

ot.prototype.read = function (e) {
  nt("read", e), e = parseInt(e, 10);
  var t = this._readableState,
      r = e;
  if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return nt("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? gt(this) : lt(this), null;
  if (0 === (e = ht(e, t)) && t.ended) return 0 === t.length && gt(this), null;
  var n,
      i = t.needReadable;
  return nt("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && nt("length less than watermark", i = !0), t.ended || t.reading ? nt("reading or ended", i = !1) : i && (nt("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = ht(r, t))), null === (n = e > 0 ? _t(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && gt(this)), null !== n && this.emit("data", n), n;
}, ot.prototype._read = function (e) {
  this.emit("error", new Error("not implemented"));
}, ot.prototype.pipe = function (e, t) {
  var r = this,
      n = this._readableState;

  switch (n.pipesCount) {
    case 0:
      n.pipes = e;
      break;

    case 1:
      n.pipes = [n.pipes, e];
      break;

    default:
      n.pipes.push(e);
  }

  n.pipesCount += 1, nt("pipe count=%d opts=%j", n.pipesCount, t);
  var i = !t || !1 !== t.end ? a : l;

  function o(e) {
    nt("onunpipe"), e === r && l();
  }

  function a() {
    nt("onend"), e.end();
  }

  n.endEmitted ? de(i) : r.once("end", i), e.on("unpipe", o);

  var s = function (e) {
    return function () {
      var t = e._readableState;
      nt("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && e.listeners("data").length && (t.flowing = !0, pt(e));
    };
  }(r);

  e.on("drain", s);
  var h = !1;

  function l() {
    nt("cleanup"), e.removeListener("close", d), e.removeListener("finish", p), e.removeListener("drain", s), e.removeListener("error", u), e.removeListener("unpipe", o), r.removeListener("end", a), r.removeListener("end", l), r.removeListener("data", c), h = !0, !n.awaitDrain || e._writableState && !e._writableState.needDrain || s();
  }

  var f = !1;

  function c(t) {
    nt("ondata"), f = !1, !1 !== e.write(t) || f || ((1 === n.pipesCount && n.pipes === e || n.pipesCount > 1 && -1 !== wt(n.pipes, e)) && !h && (nt("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, f = !0), r.pause());
  }

  function u(t) {
    var r;
    nt("onerror", t), _(), e.removeListener("error", u), 0 === (r = "error", e.listeners(r).length) && e.emit("error", t);
  }

  function d() {
    e.removeListener("finish", p), _();
  }

  function p() {
    nt("onfinish"), e.removeListener("close", d), _();
  }

  function _() {
    nt("unpipe"), r.unpipe(e);
  }

  return r.on("data", c), function (e, t, r) {
    if ("function" == typeof e.prependListener) return e.prependListener(t, r);
    e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r);
  }(e, "error", u), e.once("close", d), e.once("finish", p), e.emit("pipe", r), n.flowing || (nt("pipe resume"), r.resume()), e;
}, ot.prototype.unpipe = function (e) {
  var t = this._readableState;
  if (0 === t.pipesCount) return this;
  if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this), this);

  if (!e) {
    var r = t.pipes,
        n = t.pipesCount;
    t.pipes = null, t.pipesCount = 0, t.flowing = !1;

    for (var i = 0; i < n; i++) {
      r[i].emit("unpipe", this);
    }

    return this;
  }

  var o = wt(t.pipes, e);
  return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this);
}, ot.prototype.on = function (e, t) {
  var r = ve.prototype.on.call(this, e, t);
  if ("data" === e) !1 !== this._readableState.flowing && this.resume();else if ("readable" === e) {
    var n = this._readableState;
    n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && lt(this) : de(ut, this));
  }
  return r;
}, ot.prototype.addListener = ot.prototype.on, ot.prototype.resume = function () {
  var e = this._readableState;
  return e.flowing || (nt("resume"), e.flowing = !0, function (e, t) {
    t.resumeScheduled || (t.resumeScheduled = !0, de(dt, e, t));
  }(this, e)), this;
}, ot.prototype.pause = function () {
  return nt("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (nt("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
}, ot.prototype.wrap = function (e) {
  var t = this._readableState,
      r = !1,
      n = this;

  for (var i in e.on("end", function () {
    if (nt("wrapped end"), t.decoder && !t.ended) {
      var e = t.decoder.end();
      e && e.length && n.push(e);
    }

    n.push(null);
  }), e.on("data", function (i) {
    (nt("wrapped data"), t.decoder && (i = t.decoder.write(i)), t.objectMode && null == i) || (t.objectMode || i && i.length) && (n.push(i) || (r = !0, e.pause()));
  }), e) {
    void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) {
      return function () {
        return e[t].apply(e, arguments);
      };
    }(i));
  }

  return function (e, t) {
    for (var r = 0, n = e.length; r < n; r++) {
      t(e[r], r);
    }
  }(["error", "close", "destroy", "pause", "resume"], function (t) {
    e.on(t, n.emit.bind(n, t));
  }), n._read = function (t) {
    nt("wrapped _read", t), r && (r = !1, e.resume());
  }, n;
}, ot._fromList = _t, kt.WritableState = mt, Be(kt, ve), mt.prototype.getBuffer = function () {
  for (var e = this.bufferedRequest, t = []; e;) {
    t.push(e), e = e.next;
  }

  return t;
}, kt.prototype.pipe = function () {
  this.emit("error", new Error("Cannot pipe, not readable"));
}, kt.prototype.write = function (e, t, r) {
  var n = this._writableState,
      i = !1;
  return "function" == typeof t && (r = t, t = null), p.isBuffer(e) ? t = "buffer" : t || (t = n.defaultEncoding), "function" != typeof r && (r = bt), n.ended ? function (e, t) {
    var r = new Error("write after end");
    e.emit("error", r), de(t, r);
  }(this, r) : function (e, t, r, n) {
    var i = !0,
        o = !1;
    return null === r ? o = new TypeError("May not write null values to stream") : p.isBuffer(r) || "string" == typeof r || void 0 === r || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), de(n, o), i = !1), i;
  }(this, n, e, r) && (n.pendingcb++, i = function (e, t, r, n, i) {
    r = function (e, t, r) {
      return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = p.from(t, r)), t;
    }(t, r, n), p.isBuffer(r) && (n = "buffer");
    var o = t.objectMode ? 1 : r.length;
    t.length += o;
    var a = t.length < t.highWaterMark;
    a || (t.needDrain = !0);

    if (t.writing || t.corked) {
      var s = t.lastBufferedRequest;
      t.lastBufferedRequest = new yt(r, n, i), s ? s.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
    } else Et(e, t, !1, o, r, n, i);

    return a;
  }(this, n, e, t, r)), i;
}, kt.prototype.cork = function () {
  this._writableState.corked++;
}, kt.prototype.uncork = function () {
  var e = this._writableState;
  e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || xt(this, e));
}, kt.prototype.setDefaultEncoding = function (e) {
  if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
  return this._writableState.defaultEncoding = e, this;
}, kt.prototype._write = function (e, t, r) {
  r(new Error("not implemented"));
}, kt.prototype._writev = null, kt.prototype.end = function (e, t, r) {
  var n = this._writableState;
  "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function (e, t, r) {
    t.ending = !0, Bt(e, t), r && (t.finished ? de(r) : e.once("finish", r));
    t.ended = !0, e.writable = !1;
  }(this, n, r);
}, Be(Ct, ot);

for (var Lt = Object.keys(kt.prototype), Tt = 0; Tt < Lt.length; Tt++) {
  var Mt = Lt[Tt];
  Ct.prototype[Mt] || (Ct.prototype[Mt] = kt.prototype[Mt]);
}

function Ct(e) {
  if (!(this instanceof Ct)) return new Ct(e);
  ot.call(this, e), kt.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", Dt);
}

function Dt() {
  this.allowHalfOpen || this._writableState.ended || de(It, this);
}

function It(e) {
  e.end();
}

function Pt(e) {
  this.afterTransform = function (t, r) {
    return function (e, t, r) {
      var n = e._transformState;
      n.transforming = !1;
      var i = n.writecb;
      if (!i) return e.emit("error", new Error("no writecb in Transform class"));
      n.writechunk = null, n.writecb = null, null != r && e.push(r);
      i(t);
      var o = e._readableState;
      o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark);
    }(e, t, r);
  }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null;
}

function Ot(e) {
  if (!(this instanceof Ot)) return new Ot(e);
  Ct.call(this, e), this._transformState = new Pt(this);
  var t = this;
  this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.once("prefinish", function () {
    "function" == typeof this._flush ? this._flush(function (e) {
      Ut(t, e);
    }) : Ut(t);
  });
}

function Ut(e, t) {
  if (t) return e.emit("error", t);
  var r = e._writableState,
      n = e._transformState;
  if (r.length) throw new Error("Calling transform done when ws.length != 0");
  if (n.transforming) throw new Error("Calling transform done when still transforming");
  return e.push(null);
}

function Ht(e) {
  if (!(this instanceof Ht)) return new Ht(e);
  Ot.call(this, e);
}

function Ft() {
  ve.call(this);
}

Be(Ot, Ct), Ot.prototype.push = function (e, t) {
  return this._transformState.needTransform = !1, Ct.prototype.push.call(this, e, t);
}, Ot.prototype._transform = function (e, t, r) {
  throw new Error("Not implemented");
}, Ot.prototype._write = function (e, t, r) {
  var n = this._transformState;

  if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
    var i = this._readableState;
    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  }
}, Ot.prototype._read = function (e) {
  var t = this._transformState;
  null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
}, Be(Ht, Ot), Ht.prototype._transform = function (e, t, r) {
  r(null, e);
}, Be(Ft, ve), Ft.Readable = ot, Ft.Writable = kt, Ft.Duplex = Ct, Ft.Transform = Ot, Ft.PassThrough = Ht, Ft.Stream = Ft, Ft.prototype.pipe = function (e, t) {
  var r = this;

  function n(t) {
    e.writable && !1 === e.write(t) && r.pause && r.pause();
  }

  function i() {
    r.readable && r.resume && r.resume();
  }

  r.on("data", n), e.on("drain", i), e._isStdio || t && !1 === t.end || (r.on("end", a), r.on("close", s));
  var o = !1;

  function a() {
    o || (o = !0, e.end());
  }

  function s() {
    o || (o = !0, "function" == typeof e.destroy && e.destroy());
  }

  function h(e) {
    if (l(), 0 === ve.listenerCount(this, "error")) throw e;
  }

  function l() {
    r.removeListener("data", n), e.removeListener("drain", i), r.removeListener("end", a), r.removeListener("close", s), r.removeListener("error", h), e.removeListener("error", h), r.removeListener("end", l), r.removeListener("close", l), e.removeListener("close", l);
  }

  return r.on("error", h), e.on("error", h), r.on("end", l), r.on("close", l), e.on("close", l), e.emit("pipe", r), e;
};
var Nt = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
};

function Zt() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}

function jt(e, t, r, n, i) {
  if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);else for (var o = 0; o < n; o++) {
    e[i + o] = t[r + o];
  }
}

var Wt = Uint8Array,
    Yt = Uint16Array,
    Kt = Int32Array,
    Xt = 4,
    qt = 0,
    Vt = 1,
    Gt = 2;

function $t(e) {
  for (var t = e.length; --t >= 0;) {
    e[t] = 0;
  }
}

var Jt = 0,
    Qt = 1,
    er = 2,
    tr = 29,
    rr = 256,
    nr = rr + 1 + tr,
    ir = 30,
    or = 19,
    ar = 2 * nr + 1,
    sr = 15,
    hr = 16,
    lr = 7,
    fr = 256,
    cr = 16,
    ur = 17,
    dr = 18,
    pr = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    _r = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    gr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    vr = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    wr = new Array(2 * (nr + 2));
$t(wr);
var br = new Array(2 * ir);
$t(br);
var yr = new Array(512);
$t(yr);
var mr = new Array(256);
$t(mr);
var kr = new Array(tr);
$t(kr);
var Er,
    Sr,
    xr,
    Rr = new Array(ir);

function Ar(e, t, r, n, i) {
  this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = i, this.has_stree = e && e.length;
}

function Br(e, t) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
}

function zr(e) {
  return e < 256 ? yr[e] : yr[256 + (e >>> 7)];
}

function Lr(e, t) {
  e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
}

function Tr(e, t, r) {
  e.bi_valid > hr - r ? (e.bi_buf |= t << e.bi_valid & 65535, Lr(e, e.bi_buf), e.bi_buf = t >> hr - e.bi_valid, e.bi_valid += r - hr) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r);
}

function Mr(e, t, r) {
  Tr(e, r[2 * t], r[2 * t + 1]);
}

function Cr(e, t) {
  var r = 0;

  do {
    r |= 1 & e, e >>>= 1, r <<= 1;
  } while (--t > 0);

  return r >>> 1;
}

function Dr(e, t, r) {
  var n,
      i,
      o = new Array(sr + 1),
      a = 0;

  for (n = 1; n <= sr; n++) {
    o[n] = a = a + r[n - 1] << 1;
  }

  for (i = 0; i <= t; i++) {
    var s = e[2 * i + 1];
    0 !== s && (e[2 * i] = Cr(o[s]++, s));
  }
}

function Ir(e) {
  var t;

  for (t = 0; t < nr; t++) {
    e.dyn_ltree[2 * t] = 0;
  }

  for (t = 0; t < ir; t++) {
    e.dyn_dtree[2 * t] = 0;
  }

  for (t = 0; t < or; t++) {
    e.bl_tree[2 * t] = 0;
  }

  e.dyn_ltree[2 * fr] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
}

function Pr(e) {
  e.bi_valid > 8 ? Lr(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}

function Or(e, t, r, n) {
  var i = 2 * t,
      o = 2 * r;
  return e[i] < e[o] || e[i] === e[o] && n[t] <= n[r];
}

function Ur(e, t, r) {
  for (var n = e.heap[r], i = r << 1; i <= e.heap_len && (i < e.heap_len && Or(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !Or(t, n, e.heap[i], e.depth));) {
    e.heap[r] = e.heap[i], r = i, i <<= 1;
  }

  e.heap[r] = n;
}

function Hr(e, t, r) {
  var n,
      i,
      o,
      a,
      s = 0;
  if (0 !== e.last_lit) do {
    n = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, 0 === n ? Mr(e, i, t) : (Mr(e, (o = mr[i]) + rr + 1, t), 0 !== (a = pr[o]) && Tr(e, i -= kr[o], a), Mr(e, o = zr(--n), r), 0 !== (a = _r[o]) && Tr(e, n -= Rr[o], a));
  } while (s < e.last_lit);
  Mr(e, fr, t);
}

function Fr(e, t) {
  var r,
      n,
      i,
      o = t.dyn_tree,
      a = t.stat_desc.static_tree,
      s = t.stat_desc.has_stree,
      h = t.stat_desc.elems,
      l = -1;

  for (e.heap_len = 0, e.heap_max = ar, r = 0; r < h; r++) {
    0 !== o[2 * r] ? (e.heap[++e.heap_len] = l = r, e.depth[r] = 0) : o[2 * r + 1] = 0;
  }

  for (; e.heap_len < 2;) {
    o[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= a[2 * i + 1]);
  }

  for (t.max_code = l, r = e.heap_len >> 1; r >= 1; r--) {
    Ur(e, o, r);
  }

  i = h;

  do {
    r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], Ur(e, o, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, o[2 * i] = o[2 * r] + o[2 * n], e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, o[2 * r + 1] = o[2 * n + 1] = i, e.heap[1] = i++, Ur(e, o, 1);
  } while (e.heap_len >= 2);

  e.heap[--e.heap_max] = e.heap[1], function (e, t) {
    var r,
        n,
        i,
        o,
        a,
        s,
        h = t.dyn_tree,
        l = t.max_code,
        f = t.stat_desc.static_tree,
        c = t.stat_desc.has_stree,
        u = t.stat_desc.extra_bits,
        d = t.stat_desc.extra_base,
        p = t.stat_desc.max_length,
        _ = 0;

    for (o = 0; o <= sr; o++) {
      e.bl_count[o] = 0;
    }

    for (h[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < ar; r++) {
      (o = h[2 * h[2 * (n = e.heap[r]) + 1] + 1] + 1) > p && (o = p, _++), h[2 * n + 1] = o, n > l || (e.bl_count[o]++, a = 0, n >= d && (a = u[n - d]), s = h[2 * n], e.opt_len += s * (o + a), c && (e.static_len += s * (f[2 * n + 1] + a)));
    }

    if (0 !== _) {
      do {
        for (o = p - 1; 0 === e.bl_count[o];) {
          o--;
        }

        e.bl_count[o]--, e.bl_count[o + 1] += 2, e.bl_count[p]--, _ -= 2;
      } while (_ > 0);

      for (o = p; 0 !== o; o--) {
        for (n = e.bl_count[o]; 0 !== n;) {
          (i = e.heap[--r]) > l || (h[2 * i + 1] !== o && (e.opt_len += (o - h[2 * i + 1]) * h[2 * i], h[2 * i + 1] = o), n--);
        }
      }
    }
  }(e, t), Dr(o, l, e.bl_count);
}

function Nr(e, t, r) {
  var n,
      i,
      o = -1,
      a = t[1],
      s = 0,
      h = 7,
      l = 4;

  for (0 === a && (h = 138, l = 3), t[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++) {
    i = a, a = t[2 * (n + 1) + 1], ++s < h && i === a || (s < l ? e.bl_tree[2 * i] += s : 0 !== i ? (i !== o && e.bl_tree[2 * i]++, e.bl_tree[2 * cr]++) : s <= 10 ? e.bl_tree[2 * ur]++ : e.bl_tree[2 * dr]++, s = 0, o = i, 0 === a ? (h = 138, l = 3) : i === a ? (h = 6, l = 3) : (h = 7, l = 4));
  }
}

function Zr(e, t, r) {
  var n,
      i,
      o = -1,
      a = t[1],
      s = 0,
      h = 7,
      l = 4;

  for (0 === a && (h = 138, l = 3), n = 0; n <= r; n++) {
    if (i = a, a = t[2 * (n + 1) + 1], !(++s < h && i === a)) {
      if (s < l) do {
        Mr(e, i, e.bl_tree);
      } while (0 != --s);else 0 !== i ? (i !== o && (Mr(e, i, e.bl_tree), s--), Mr(e, cr, e.bl_tree), Tr(e, s - 3, 2)) : s <= 10 ? (Mr(e, ur, e.bl_tree), Tr(e, s - 3, 3)) : (Mr(e, dr, e.bl_tree), Tr(e, s - 11, 7));
      s = 0, o = i, 0 === a ? (h = 138, l = 3) : i === a ? (h = 6, l = 3) : (h = 7, l = 4);
    }
  }
}

$t(Rr);
var jr = !1;

function Wr(e) {
  jr || (!function () {
    var e,
        t,
        r,
        n,
        i,
        o = new Array(sr + 1);

    for (r = 0, n = 0; n < tr - 1; n++) {
      for (kr[n] = r, e = 0; e < 1 << pr[n]; e++) {
        mr[r++] = n;
      }
    }

    for (mr[r - 1] = n, i = 0, n = 0; n < 16; n++) {
      for (Rr[n] = i, e = 0; e < 1 << _r[n]; e++) {
        yr[i++] = n;
      }
    }

    for (i >>= 7; n < ir; n++) {
      for (Rr[n] = i << 7, e = 0; e < 1 << _r[n] - 7; e++) {
        yr[256 + i++] = n;
      }
    }

    for (t = 0; t <= sr; t++) {
      o[t] = 0;
    }

    for (e = 0; e <= 143;) {
      wr[2 * e + 1] = 8, e++, o[8]++;
    }

    for (; e <= 255;) {
      wr[2 * e + 1] = 9, e++, o[9]++;
    }

    for (; e <= 279;) {
      wr[2 * e + 1] = 7, e++, o[7]++;
    }

    for (; e <= 287;) {
      wr[2 * e + 1] = 8, e++, o[8]++;
    }

    for (Dr(wr, nr + 1, o), e = 0; e < ir; e++) {
      br[2 * e + 1] = 5, br[2 * e] = Cr(e, 5);
    }

    Er = new Ar(wr, pr, rr + 1, nr, sr), Sr = new Ar(br, _r, 0, ir, sr), xr = new Ar(new Array(0), gr, 0, or, lr);
  }(), jr = !0), e.l_desc = new Br(e.dyn_ltree, Er), e.d_desc = new Br(e.dyn_dtree, Sr), e.bl_desc = new Br(e.bl_tree, xr), e.bi_buf = 0, e.bi_valid = 0, Ir(e);
}

function Yr(e, t, r, n) {
  Tr(e, (Jt << 1) + (n ? 1 : 0), 3), function (e, t, r, n) {
    Pr(e), n && (Lr(e, r), Lr(e, ~r)), jt(e.pending_buf, e.window, t, r, e.pending), e.pending += r;
  }(e, t, r, !0);
}

function Kr(e) {
  Tr(e, Qt << 1, 3), Mr(e, fr, wr), function (e) {
    16 === e.bi_valid ? (Lr(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
  }(e);
}

function Xr(e, t, r, n) {
  var i,
      o,
      a = 0;
  e.level > 0 ? (e.strm.data_type === Gt && (e.strm.data_type = function (e) {
    var t,
        r = 4093624447;

    for (t = 0; t <= 31; t++, r >>>= 1) {
      if (1 & r && 0 !== e.dyn_ltree[2 * t]) return qt;
    }

    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return Vt;

    for (t = 32; t < rr; t++) {
      if (0 !== e.dyn_ltree[2 * t]) return Vt;
    }

    return qt;
  }(e)), Fr(e, e.l_desc), Fr(e, e.d_desc), a = function (e) {
    var t;

    for (Nr(e, e.dyn_ltree, e.l_desc.max_code), Nr(e, e.dyn_dtree, e.d_desc.max_code), Fr(e, e.bl_desc), t = or - 1; t >= 3 && 0 === e.bl_tree[2 * vr[t] + 1]; t--) {
      ;
    }

    return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
  }(e), i = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= i && (i = o)) : i = o = r + 5, r + 4 <= i && -1 !== t ? Yr(e, t, r, n) : e.strategy === Xt || o === i ? (Tr(e, (Qt << 1) + (n ? 1 : 0), 3), Hr(e, wr, br)) : (Tr(e, (er << 1) + (n ? 1 : 0), 3), function (e, t, r, n) {
    var i;

    for (Tr(e, t - 257, 5), Tr(e, r - 1, 5), Tr(e, n - 4, 4), i = 0; i < n; i++) {
      Tr(e, e.bl_tree[2 * vr[i] + 1], 3);
    }

    Zr(e, e.dyn_ltree, t - 1), Zr(e, e.dyn_dtree, r - 1);
  }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), Hr(e, e.dyn_ltree, e.dyn_dtree)), Ir(e), n && Pr(e);
}

function qr(e, t, r) {
  return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[2 * (mr[r] + rr + 1)]++, e.dyn_dtree[2 * zr(t)]++), e.last_lit === e.lit_bufsize - 1;
}

function Vr(e, t, r, n) {
  for (var i = 65535 & e | 0, o = e >>> 16 & 65535 | 0, a = 0; 0 !== r;) {
    r -= a = r > 2e3 ? 2e3 : r;

    do {
      o = o + (i = i + t[n++] | 0) | 0;
    } while (--a);

    i %= 65521, o %= 65521;
  }

  return i | o << 16 | 0;
}

var Gr = function () {
  for (var e, t = [], r = 0; r < 256; r++) {
    e = r;

    for (var n = 0; n < 8; n++) {
      e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
    }

    t[r] = e;
  }

  return t;
}();

function $r(e, t, r, n) {
  var i = Gr,
      o = n + r;
  e ^= -1;

  for (var a = n; a < o; a++) {
    e = e >>> 8 ^ i[255 & (e ^ t[a])];
  }

  return -1 ^ e;
}

var Jr,
    Qr = 0,
    en = 1,
    tn = 3,
    rn = 4,
    nn = 5,
    on = 0,
    an = 1,
    sn = -2,
    hn = -3,
    ln = -5,
    fn = -1,
    cn = 1,
    un = 2,
    dn = 3,
    pn = 4,
    _n = 2,
    gn = 8,
    vn = 9,
    wn = 286,
    bn = 30,
    yn = 19,
    mn = 2 * wn + 1,
    kn = 15,
    En = 3,
    Sn = 258,
    xn = Sn + En + 1,
    Rn = 32,
    An = 42,
    Bn = 69,
    zn = 73,
    Ln = 91,
    Tn = 103,
    Mn = 113,
    Cn = 666,
    Dn = 1,
    In = 2,
    Pn = 3,
    On = 4,
    Un = 3;

function Hn(e, t) {
  return e.msg = Nt[t], t;
}

function Fn(e) {
  return (e << 1) - (e > 4 ? 9 : 0);
}

function Nn(e) {
  for (var t = e.length; --t >= 0;) {
    e[t] = 0;
  }
}

function Zn(e) {
  var t = e.state,
      r = t.pending;
  r > e.avail_out && (r = e.avail_out), 0 !== r && (jt(e.output, t.pending_buf, t.pending_out, r, e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0));
}

function jn(e, t) {
  Xr(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, Zn(e.strm);
}

function Wn(e, t) {
  e.pending_buf[e.pending++] = t;
}

function Yn(e, t) {
  e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
}

function Kn(e, t) {
  var r,
      n,
      i = e.max_chain_length,
      o = e.strstart,
      a = e.prev_length,
      s = e.nice_match,
      h = e.strstart > e.w_size - xn ? e.strstart - (e.w_size - xn) : 0,
      l = e.window,
      f = e.w_mask,
      c = e.prev,
      u = e.strstart + Sn,
      d = l[o + a - 1],
      p = l[o + a];
  e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead);

  do {
    if (l[(r = t) + a] === p && l[r + a - 1] === d && l[r] === l[o] && l[++r] === l[o + 1]) {
      o += 2, r++;

      do {} while (l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && o < u);

      if (n = Sn - (u - o), o = u - Sn, n > a) {
        if (e.match_start = t, a = n, n >= s) break;
        d = l[o + a - 1], p = l[o + a];
      }
    }
  } while ((t = c[t & f]) > h && 0 != --i);

  return a <= e.lookahead ? a : e.lookahead;
}

function Xn(e) {
  var t,
      r,
      n,
      i,
      o,
      a,
      s,
      h,
      l,
      f,
      c = e.w_size;

  do {
    if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= c + (c - xn)) {
      jt(e.window, e.window, c, c, 0), e.match_start -= c, e.strstart -= c, e.block_start -= c, t = r = e.hash_size;

      do {
        n = e.head[--t], e.head[t] = n >= c ? n - c : 0;
      } while (--r);

      t = r = c;

      do {
        n = e.prev[--t], e.prev[t] = n >= c ? n - c : 0;
      } while (--r);

      i += c;
    }

    if (0 === e.strm.avail_in) break;
    if (a = e.strm, s = e.window, h = e.strstart + e.lookahead, l = i, f = void 0, (f = a.avail_in) > l && (f = l), r = 0 === f ? 0 : (a.avail_in -= f, jt(s, a.input, a.next_in, f, h), 1 === a.state.wrap ? a.adler = Vr(a.adler, s, f, h) : 2 === a.state.wrap && (a.adler = $r(a.adler, s, f, h)), a.next_in += f, a.total_in += f, f), e.lookahead += r, e.lookahead + e.insert >= En) for (o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + En - 1]) & e.hash_mask, e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < En));) {
      ;
    }
  } while (e.lookahead < xn && 0 !== e.strm.avail_in);
}

function qn(e, t) {
  for (var r, n;;) {
    if (e.lookahead < xn) {
      if (Xn(e), e.lookahead < xn && t === Qr) return Dn;
      if (0 === e.lookahead) break;
    }

    if (r = 0, e.lookahead >= En && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + En - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - xn && (e.match_length = Kn(e, r)), e.match_length >= En) {
      if (n = qr(e, e.strstart - e.match_start, e.match_length - En), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= En) {
        e.match_length--;

        do {
          e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + En - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
        } while (0 != --e.match_length);

        e.strstart++;
      } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
    } else n = qr(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
    if (n && (jn(e, !1), 0 === e.strm.avail_out)) return Dn;
  }

  return e.insert = e.strstart < En - 1 ? e.strstart : En - 1, t === rn ? (jn(e, !0), 0 === e.strm.avail_out ? Pn : On) : e.last_lit && (jn(e, !1), 0 === e.strm.avail_out) ? Dn : In;
}

function Vn(e, t) {
  for (var r, n, i;;) {
    if (e.lookahead < xn) {
      if (Xn(e), e.lookahead < xn && t === Qr) return Dn;
      if (0 === e.lookahead) break;
    }

    if (r = 0, e.lookahead >= En && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + En - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = En - 1, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - xn && (e.match_length = Kn(e, r), e.match_length <= 5 && (e.strategy === cn || e.match_length === En && e.strstart - e.match_start > 4096) && (e.match_length = En - 1)), e.prev_length >= En && e.match_length <= e.prev_length) {
      i = e.strstart + e.lookahead - En, n = qr(e, e.strstart - 1 - e.prev_match, e.prev_length - En), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;

      do {
        ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + En - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
      } while (0 != --e.prev_length);

      if (e.match_available = 0, e.match_length = En - 1, e.strstart++, n && (jn(e, !1), 0 === e.strm.avail_out)) return Dn;
    } else if (e.match_available) {
      if ((n = qr(e, 0, e.window[e.strstart - 1])) && jn(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return Dn;
    } else e.match_available = 1, e.strstart++, e.lookahead--;
  }

  return e.match_available && (n = qr(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < En - 1 ? e.strstart : En - 1, t === rn ? (jn(e, !0), 0 === e.strm.avail_out ? Pn : On) : e.last_lit && (jn(e, !1), 0 === e.strm.avail_out) ? Dn : In;
}

function Gn(e, t, r, n, i) {
  this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = i;
}

function $n() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = gn, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Yt(2 * mn), this.dyn_dtree = new Yt(2 * (2 * bn + 1)), this.bl_tree = new Yt(2 * (2 * yn + 1)), Nn(this.dyn_ltree), Nn(this.dyn_dtree), Nn(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Yt(kn + 1), this.heap = new Yt(2 * wn + 1), Nn(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Yt(2 * wn + 1), Nn(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}

function Jn(e) {
  var t,
      r = function (e) {
    var t;
    return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = _n, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? An : Mn, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = Qr, Wr(t), on) : Hn(e, sn);
  }(e);

  return r === on && ((t = e.state).window_size = 2 * t.w_size, Nn(t.head), t.max_lazy_match = Jr[t.level].max_lazy, t.good_match = Jr[t.level].good_length, t.nice_match = Jr[t.level].nice_length, t.max_chain_length = Jr[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = En - 1, t.match_available = 0, t.ins_h = 0), r;
}

function Qn(e, t) {
  var r, n, i, o;
  if (!e || !e.state || t > nn || t < 0) return e ? Hn(e, sn) : sn;
  if (n = e.state, !e.output || !e.input && 0 !== e.avail_in || n.status === Cn && t !== rn) return Hn(e, 0 === e.avail_out ? ln : sn);
  if (n.strm = e, r = n.last_flush, n.last_flush = t, n.status === An) if (2 === n.wrap) e.adler = 0, Wn(n, 31), Wn(n, 139), Wn(n, 8), n.gzhead ? (Wn(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), Wn(n, 255 & n.gzhead.time), Wn(n, n.gzhead.time >> 8 & 255), Wn(n, n.gzhead.time >> 16 & 255), Wn(n, n.gzhead.time >> 24 & 255), Wn(n, 9 === n.level ? 2 : n.strategy >= un || n.level < 2 ? 4 : 0), Wn(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (Wn(n, 255 & n.gzhead.extra.length), Wn(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = $r(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = Bn) : (Wn(n, 0), Wn(n, 0), Wn(n, 0), Wn(n, 0), Wn(n, 0), Wn(n, 9 === n.level ? 2 : n.strategy >= un || n.level < 2 ? 4 : 0), Wn(n, Un), n.status = Mn);else {
    var a = gn + (n.w_bits - 8 << 4) << 8;
    a |= (n.strategy >= un || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (a |= Rn), a += 31 - a % 31, n.status = Mn, Yn(n, a), 0 !== n.strstart && (Yn(n, e.adler >>> 16), Yn(n, 65535 & e.adler)), e.adler = 1;
  }
  if (n.status === Bn) if (n.gzhead.extra) {
    for (i = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > i && (e.adler = $r(e.adler, n.pending_buf, n.pending - i, i)), Zn(e), i = n.pending, n.pending !== n.pending_buf_size));) {
      Wn(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
    }

    n.gzhead.hcrc && n.pending > i && (e.adler = $r(e.adler, n.pending_buf, n.pending - i, i)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = zn);
  } else n.status = zn;
  if (n.status === zn) if (n.gzhead.name) {
    i = n.pending;

    do {
      if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = $r(e.adler, n.pending_buf, n.pending - i, i)), Zn(e), i = n.pending, n.pending === n.pending_buf_size)) {
        o = 1;
        break;
      }

      o = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, Wn(n, o);
    } while (0 !== o);

    n.gzhead.hcrc && n.pending > i && (e.adler = $r(e.adler, n.pending_buf, n.pending - i, i)), 0 === o && (n.gzindex = 0, n.status = Ln);
  } else n.status = Ln;
  if (n.status === Ln) if (n.gzhead.comment) {
    i = n.pending;

    do {
      if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = $r(e.adler, n.pending_buf, n.pending - i, i)), Zn(e), i = n.pending, n.pending === n.pending_buf_size)) {
        o = 1;
        break;
      }

      o = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, Wn(n, o);
    } while (0 !== o);

    n.gzhead.hcrc && n.pending > i && (e.adler = $r(e.adler, n.pending_buf, n.pending - i, i)), 0 === o && (n.status = Tn);
  } else n.status = Tn;

  if (n.status === Tn && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && Zn(e), n.pending + 2 <= n.pending_buf_size && (Wn(n, 255 & e.adler), Wn(n, e.adler >> 8 & 255), e.adler = 0, n.status = Mn)) : n.status = Mn), 0 !== n.pending) {
    if (Zn(e), 0 === e.avail_out) return n.last_flush = -1, on;
  } else if (0 === e.avail_in && Fn(t) <= Fn(r) && t !== rn) return Hn(e, ln);

  if (n.status === Cn && 0 !== e.avail_in) return Hn(e, ln);

  if (0 !== e.avail_in || 0 !== n.lookahead || t !== Qr && n.status !== Cn) {
    var s = n.strategy === un ? function (e, t) {
      for (var r;;) {
        if (0 === e.lookahead && (Xn(e), 0 === e.lookahead)) {
          if (t === Qr) return Dn;
          break;
        }

        if (e.match_length = 0, r = qr(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (jn(e, !1), 0 === e.strm.avail_out)) return Dn;
      }

      return e.insert = 0, t === rn ? (jn(e, !0), 0 === e.strm.avail_out ? Pn : On) : e.last_lit && (jn(e, !1), 0 === e.strm.avail_out) ? Dn : In;
    }(n, t) : n.strategy === dn ? function (e, t) {
      for (var r, n, i, o, a = e.window;;) {
        if (e.lookahead <= Sn) {
          if (Xn(e), e.lookahead <= Sn && t === Qr) return Dn;
          if (0 === e.lookahead) break;
        }

        if (e.match_length = 0, e.lookahead >= En && e.strstart > 0 && (n = a[i = e.strstart - 1]) === a[++i] && n === a[++i] && n === a[++i]) {
          o = e.strstart + Sn;

          do {} while (n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && i < o);

          e.match_length = Sn - (o - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
        }

        if (e.match_length >= En ? (r = qr(e, 1, e.match_length - En), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = qr(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (jn(e, !1), 0 === e.strm.avail_out)) return Dn;
      }

      return e.insert = 0, t === rn ? (jn(e, !0), 0 === e.strm.avail_out ? Pn : On) : e.last_lit && (jn(e, !1), 0 === e.strm.avail_out) ? Dn : In;
    }(n, t) : Jr[n.level].func(n, t);
    if (s !== Pn && s !== On || (n.status = Cn), s === Dn || s === Pn) return 0 === e.avail_out && (n.last_flush = -1), on;
    if (s === In && (t === en ? Kr(n) : t !== nn && (Yr(n, 0, 0, !1), t === tn && (Nn(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), Zn(e), 0 === e.avail_out)) return n.last_flush = -1, on;
  }

  return t !== rn ? on : n.wrap <= 0 ? an : (2 === n.wrap ? (Wn(n, 255 & e.adler), Wn(n, e.adler >> 8 & 255), Wn(n, e.adler >> 16 & 255), Wn(n, e.adler >> 24 & 255), Wn(n, 255 & e.total_in), Wn(n, e.total_in >> 8 & 255), Wn(n, e.total_in >> 16 & 255), Wn(n, e.total_in >> 24 & 255)) : (Yn(n, e.adler >>> 16), Yn(n, 65535 & e.adler)), Zn(e), n.wrap > 0 && (n.wrap = -n.wrap), 0 !== n.pending ? on : an);
}

Jr = [new Gn(0, 0, 0, 0, function (e, t) {
  var r = 65535;

  for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;) {
    if (e.lookahead <= 1) {
      if (Xn(e), 0 === e.lookahead && t === Qr) return Dn;
      if (0 === e.lookahead) break;
    }

    e.strstart += e.lookahead, e.lookahead = 0;
    var n = e.block_start + r;
    if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, jn(e, !1), 0 === e.strm.avail_out)) return Dn;
    if (e.strstart - e.block_start >= e.w_size - xn && (jn(e, !1), 0 === e.strm.avail_out)) return Dn;
  }

  return e.insert = 0, t === rn ? (jn(e, !0), 0 === e.strm.avail_out ? Pn : On) : (e.strstart > e.block_start && (jn(e, !1), e.strm.avail_out), Dn);
}), new Gn(4, 4, 8, 4, qn), new Gn(4, 5, 16, 8, qn), new Gn(4, 6, 32, 32, qn), new Gn(4, 4, 16, 16, Vn), new Gn(8, 16, 32, 32, Vn), new Gn(8, 16, 128, 128, Vn), new Gn(8, 32, 128, 256, Vn), new Gn(32, 128, 258, 1024, Vn), new Gn(32, 258, 258, 4096, Vn)];
var ei = 30,
    ti = 12;

function ri(e, t) {
  var r, n, i, o, a, s, h, l, f, c, u, d, p, _, g, v, w, b, y, m, k, E, S, x, R;

  r = e.state, n = e.next_in, x = e.input, i = n + (e.avail_in - 5), o = e.next_out, R = e.output, a = o - (t - e.avail_out), s = o + (e.avail_out - 257), h = r.dmax, l = r.wsize, f = r.whave, c = r.wnext, u = r.window, d = r.hold, p = r.bits, _ = r.lencode, g = r.distcode, v = (1 << r.lenbits) - 1, w = (1 << r.distbits) - 1;

  e: do {
    p < 15 && (d += x[n++] << p, p += 8, d += x[n++] << p, p += 8), b = _[d & v];

    t: for (;;) {
      if (d >>>= y = b >>> 24, p -= y, 0 === (y = b >>> 16 & 255)) R[o++] = 65535 & b;else {
        if (!(16 & y)) {
          if (0 == (64 & y)) {
            b = _[(65535 & b) + (d & (1 << y) - 1)];
            continue t;
          }

          if (32 & y) {
            r.mode = ti;
            break e;
          }

          e.msg = "invalid literal/length code", r.mode = ei;
          break e;
        }

        m = 65535 & b, (y &= 15) && (p < y && (d += x[n++] << p, p += 8), m += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += x[n++] << p, p += 8, d += x[n++] << p, p += 8), b = g[d & w];

        r: for (;;) {
          if (d >>>= y = b >>> 24, p -= y, !(16 & (y = b >>> 16 & 255))) {
            if (0 == (64 & y)) {
              b = g[(65535 & b) + (d & (1 << y) - 1)];
              continue r;
            }

            e.msg = "invalid distance code", r.mode = ei;
            break e;
          }

          if (k = 65535 & b, p < (y &= 15) && (d += x[n++] << p, (p += 8) < y && (d += x[n++] << p, p += 8)), (k += d & (1 << y) - 1) > h) {
            e.msg = "invalid distance too far back", r.mode = ei;
            break e;
          }

          if (d >>>= y, p -= y, k > (y = o - a)) {
            if ((y = k - y) > f && r.sane) {
              e.msg = "invalid distance too far back", r.mode = ei;
              break e;
            }

            if (E = 0, S = u, 0 === c) {
              if (E += l - y, y < m) {
                m -= y;

                do {
                  R[o++] = u[E++];
                } while (--y);

                E = o - k, S = R;
              }
            } else if (c < y) {
              if (E += l + c - y, (y -= c) < m) {
                m -= y;

                do {
                  R[o++] = u[E++];
                } while (--y);

                if (E = 0, c < m) {
                  m -= y = c;

                  do {
                    R[o++] = u[E++];
                  } while (--y);

                  E = o - k, S = R;
                }
              }
            } else if (E += c - y, y < m) {
              m -= y;

              do {
                R[o++] = u[E++];
              } while (--y);

              E = o - k, S = R;
            }

            for (; m > 2;) {
              R[o++] = S[E++], R[o++] = S[E++], R[o++] = S[E++], m -= 3;
            }

            m && (R[o++] = S[E++], m > 1 && (R[o++] = S[E++]));
          } else {
            E = o - k;

            do {
              R[o++] = R[E++], R[o++] = R[E++], R[o++] = R[E++], m -= 3;
            } while (m > 2);

            m && (R[o++] = R[E++], m > 1 && (R[o++] = R[E++]));
          }

          break;
        }
      }
      break;
    }
  } while (n < i && o < s);

  n -= m = p >> 3, d &= (1 << (p -= m << 3)) - 1, e.next_in = n, e.next_out = o, e.avail_in = n < i ? i - n + 5 : 5 - (n - i), e.avail_out = o < s ? s - o + 257 : 257 - (o - s), r.hold = d, r.bits = p;
}

var ni = 15,
    ii = 852,
    oi = 592,
    ai = 0,
    si = 1,
    hi = 2,
    li = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
    fi = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
    ci = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
    ui = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];

function di(e, t, r, n, i, o, a, s) {
  var h,
      l,
      f,
      c,
      u,
      d,
      p,
      _,
      g,
      v = s.bits,
      w = 0,
      b = 0,
      y = 0,
      m = 0,
      k = 0,
      E = 0,
      S = 0,
      x = 0,
      R = 0,
      A = 0,
      B = null,
      z = 0,
      L = new Yt(ni + 1),
      T = new Yt(ni + 1),
      M = null,
      C = 0;

  for (w = 0; w <= ni; w++) {
    L[w] = 0;
  }

  for (b = 0; b < n; b++) {
    L[t[r + b]]++;
  }

  for (k = v, m = ni; m >= 1 && 0 === L[m]; m--) {
    ;
  }

  if (k > m && (k = m), 0 === m) return i[o++] = 20971520, i[o++] = 20971520, s.bits = 1, 0;

  for (y = 1; y < m && 0 === L[y]; y++) {
    ;
  }

  for (k < y && (k = y), x = 1, w = 1; w <= ni; w++) {
    if (x <<= 1, (x -= L[w]) < 0) return -1;
  }

  if (x > 0 && (e === ai || 1 !== m)) return -1;

  for (T[1] = 0, w = 1; w < ni; w++) {
    T[w + 1] = T[w] + L[w];
  }

  for (b = 0; b < n; b++) {
    0 !== t[r + b] && (a[T[t[r + b]]++] = b);
  }

  if (e === ai ? (B = M = a, d = 19) : e === si ? (B = li, z -= 257, M = fi, C -= 257, d = 256) : (B = ci, M = ui, d = -1), A = 0, b = 0, w = y, u = o, E = k, S = 0, f = -1, c = (R = 1 << k) - 1, e === si && R > ii || e === hi && R > oi) return 1;

  for (;;) {
    p = w - S, a[b] < d ? (_ = 0, g = a[b]) : a[b] > d ? (_ = M[C + a[b]], g = B[z + a[b]]) : (_ = 96, g = 0), h = 1 << w - S, y = l = 1 << E;

    do {
      i[u + (A >> S) + (l -= h)] = p << 24 | _ << 16 | g | 0;
    } while (0 !== l);

    for (h = 1 << w - 1; A & h;) {
      h >>= 1;
    }

    if (0 !== h ? (A &= h - 1, A += h) : A = 0, b++, 0 == --L[w]) {
      if (w === m) break;
      w = t[r + a[b]];
    }

    if (w > k && (A & c) !== f) {
      for (0 === S && (S = k), u += y, x = 1 << (E = w - S); E + S < m && !((x -= L[E + S]) <= 0);) {
        E++, x <<= 1;
      }

      if (R += 1 << E, e === si && R > ii || e === hi && R > oi) return 1;
      i[f = A & c] = k << 24 | E << 16 | u - o | 0;
    }
  }

  return 0 !== A && (i[u + A] = w - S << 24 | 64 << 16 | 0), s.bits = k, 0;
}

var pi = 0,
    _i = 1,
    gi = 2,
    vi = 4,
    wi = 5,
    bi = 6,
    yi = 0,
    mi = 1,
    ki = 2,
    Ei = -2,
    Si = -3,
    xi = -4,
    Ri = -5,
    Ai = 8,
    Bi = 1,
    zi = 2,
    Li = 3,
    Ti = 4,
    Mi = 5,
    Ci = 6,
    Di = 7,
    Ii = 8,
    Pi = 9,
    Oi = 10,
    Ui = 11,
    Hi = 12,
    Fi = 13,
    Ni = 14,
    Zi = 15,
    ji = 16,
    Wi = 17,
    Yi = 18,
    Ki = 19,
    Xi = 20,
    qi = 21,
    Vi = 22,
    Gi = 23,
    $i = 24,
    Ji = 25,
    Qi = 26,
    eo = 27,
    to = 28,
    ro = 29,
    no = 30,
    io = 31,
    oo = 32,
    ao = 852,
    so = 592;

function ho(e) {
  return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
}

function lo() {
  this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Yt(320), this.work = new Yt(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}

function fo(e) {
  var t;
  return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, function (e) {
    var t;
    return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = Bi, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Kt(ao), t.distcode = t.distdyn = new Kt(so), t.sane = 1, t.back = -1, yi) : Ei;
  }(e)) : Ei;
}

function co(e, t) {
  var r, n;
  return e ? (n = new lo(), e.state = n, n.window = null, (r = function (e, t) {
    var r, n;
    return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? Ei : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, fo(e))) : Ei;
  }(e, t)) !== yi && (e.state = null), r) : Ei;
}

var uo,
    po,
    _o = !0;

function go(e) {
  if (_o) {
    var t;

    for (uo = new Kt(512), po = new Kt(32), t = 0; t < 144;) {
      e.lens[t++] = 8;
    }

    for (; t < 256;) {
      e.lens[t++] = 9;
    }

    for (; t < 280;) {
      e.lens[t++] = 7;
    }

    for (; t < 288;) {
      e.lens[t++] = 8;
    }

    for (di(_i, e.lens, 0, 288, uo, 0, e.work, {
      bits: 9
    }), t = 0; t < 32;) {
      e.lens[t++] = 5;
    }

    di(gi, e.lens, 0, 32, po, 0, e.work, {
      bits: 5
    }), _o = !1;
  }

  e.lencode = uo, e.lenbits = 9, e.distcode = po, e.distbits = 5;
}

function vo(e, t) {
  var r,
      n,
      i,
      o,
      a,
      s,
      h,
      l,
      f,
      c,
      u,
      d,
      p,
      _,
      g,
      v,
      w,
      b,
      y,
      m,
      k,
      E,
      S,
      x,
      R = 0,
      A = new Wt(4),
      B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

  if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return Ei;
  (r = e.state).mode === Hi && (r.mode = Fi), a = e.next_out, i = e.output, h = e.avail_out, o = e.next_in, n = e.input, s = e.avail_in, l = r.hold, f = r.bits, c = s, u = h, E = yi;

  e: for (;;) {
    switch (r.mode) {
      case Bi:
        if (0 === r.wrap) {
          r.mode = Fi;
          break;
        }

        for (; f < 16;) {
          if (0 === s) break e;
          s--, l += n[o++] << f, f += 8;
        }

        if (2 & r.wrap && 35615 === l) {
          r.check = 0, A[0] = 255 & l, A[1] = l >>> 8 & 255, r.check = $r(r.check, A, 2, 0), l = 0, f = 0, r.mode = zi;
          break;
        }

        if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & l) << 8) + (l >> 8)) % 31) {
          e.msg = "incorrect header check", r.mode = no;
          break;
        }

        if ((15 & l) !== Ai) {
          e.msg = "unknown compression method", r.mode = no;
          break;
        }

        if (f -= 4, k = 8 + (15 & (l >>>= 4)), 0 === r.wbits) r.wbits = k;else if (k > r.wbits) {
          e.msg = "invalid window size", r.mode = no;
          break;
        }
        r.dmax = 1 << k, e.adler = r.check = 1, r.mode = 512 & l ? Oi : Hi, l = 0, f = 0;
        break;

      case zi:
        for (; f < 16;) {
          if (0 === s) break e;
          s--, l += n[o++] << f, f += 8;
        }

        if (r.flags = l, (255 & r.flags) !== Ai) {
          e.msg = "unknown compression method", r.mode = no;
          break;
        }

        if (57344 & r.flags) {
          e.msg = "unknown header flags set", r.mode = no;
          break;
        }

        r.head && (r.head.text = l >> 8 & 1), 512 & r.flags && (A[0] = 255 & l, A[1] = l >>> 8 & 255, r.check = $r(r.check, A, 2, 0)), l = 0, f = 0, r.mode = Li;

      case Li:
        for (; f < 32;) {
          if (0 === s) break e;
          s--, l += n[o++] << f, f += 8;
        }

        r.head && (r.head.time = l), 512 & r.flags && (A[0] = 255 & l, A[1] = l >>> 8 & 255, A[2] = l >>> 16 & 255, A[3] = l >>> 24 & 255, r.check = $r(r.check, A, 4, 0)), l = 0, f = 0, r.mode = Ti;

      case Ti:
        for (; f < 16;) {
          if (0 === s) break e;
          s--, l += n[o++] << f, f += 8;
        }

        r.head && (r.head.xflags = 255 & l, r.head.os = l >> 8), 512 & r.flags && (A[0] = 255 & l, A[1] = l >>> 8 & 255, r.check = $r(r.check, A, 2, 0)), l = 0, f = 0, r.mode = Mi;

      case Mi:
        if (1024 & r.flags) {
          for (; f < 16;) {
            if (0 === s) break e;
            s--, l += n[o++] << f, f += 8;
          }

          r.length = l, r.head && (r.head.extra_len = l), 512 & r.flags && (A[0] = 255 & l, A[1] = l >>> 8 & 255, r.check = $r(r.check, A, 2, 0)), l = 0, f = 0;
        } else r.head && (r.head.extra = null);

        r.mode = Ci;

      case Ci:
        if (1024 & r.flags && ((d = r.length) > s && (d = s), d && (r.head && (k = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), jt(r.head.extra, n, o, d, k)), 512 & r.flags && (r.check = $r(r.check, n, d, o)), s -= d, o += d, r.length -= d), r.length)) break e;
        r.length = 0, r.mode = Di;

      case Di:
        if (2048 & r.flags) {
          if (0 === s) break e;
          d = 0;

          do {
            k = n[o + d++], r.head && k && r.length < 65536 && (r.head.name += String.fromCharCode(k));
          } while (k && d < s);

          if (512 & r.flags && (r.check = $r(r.check, n, d, o)), s -= d, o += d, k) break e;
        } else r.head && (r.head.name = null);

        r.length = 0, r.mode = Ii;

      case Ii:
        if (4096 & r.flags) {
          if (0 === s) break e;
          d = 0;

          do {
            k = n[o + d++], r.head && k && r.length < 65536 && (r.head.comment += String.fromCharCode(k));
          } while (k && d < s);

          if (512 & r.flags && (r.check = $r(r.check, n, d, o)), s -= d, o += d, k) break e;
        } else r.head && (r.head.comment = null);

        r.mode = Pi;

      case Pi:
        if (512 & r.flags) {
          for (; f < 16;) {
            if (0 === s) break e;
            s--, l += n[o++] << f, f += 8;
          }

          if (l !== (65535 & r.check)) {
            e.msg = "header crc mismatch", r.mode = no;
            break;
          }

          l = 0, f = 0;
        }

        r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = Hi;
        break;

      case Oi:
        for (; f < 32;) {
          if (0 === s) break e;
          s--, l += n[o++] << f, f += 8;
        }

        e.adler = r.check = ho(l), l = 0, f = 0, r.mode = Ui;

      case Ui:
        if (0 === r.havedict) return e.next_out = a, e.avail_out = h, e.next_in = o, e.avail_in = s, r.hold = l, r.bits = f, ki;
        e.adler = r.check = 1, r.mode = Hi;

      case Hi:
        if (t === wi || t === bi) break e;

      case Fi:
        if (r.last) {
          l >>>= 7 & f, f -= 7 & f, r.mode = eo;
          break;
        }

        for (; f < 3;) {
          if (0 === s) break e;
          s--, l += n[o++] << f, f += 8;
        }

        switch (r.last = 1 & l, f -= 1, 3 & (l >>>= 1)) {
          case 0:
            r.mode = Ni;
            break;

          case 1:
            if (go(r), r.mode = Xi, t === bi) {
              l >>>= 2, f -= 2;
              break e;
            }

            break;

          case 2:
            r.mode = Wi;
            break;

          case 3:
            e.msg = "invalid block type", r.mode = no;
        }

        l >>>= 2, f -= 2;
        break;

      case Ni:
        for (l >>>= 7 & f, f -= 7 & f; f < 32;) {
          if (0 === s) break e;
          s--, l += n[o++] << f, f += 8;
        }

        if ((65535 & l) != (l >>> 16 ^ 65535)) {
          e.msg = "invalid stored block lengths", r.mode = no;
          break;
        }

        if (r.length = 65535 & l, l = 0, f = 0, r.mode = Zi, t === bi) break e;

      case Zi:
        r.mode = ji;

      case ji:
        if (d = r.length) {
          if (d > s && (d = s), d > h && (d = h), 0 === d) break e;
          jt(i, n, o, d, a), s -= d, o += d, h -= d, a += d, r.length -= d;
          break;
        }

        r.mode = Hi;
        break;

      case Wi:
        for (; f < 14;) {
          if (0 === s) break e;
          s--, l += n[o++] << f, f += 8;
        }

        if (r.nlen = 257 + (31 & l), l >>>= 5, f -= 5, r.ndist = 1 + (31 & l), l >>>= 5, f -= 5, r.ncode = 4 + (15 & l), l >>>= 4, f -= 4, r.nlen > 286 || r.ndist > 30) {
          e.msg = "too many length or distance symbols", r.mode = no;
          break;
        }

        r.have = 0, r.mode = Yi;

      case Yi:
        for (; r.have < r.ncode;) {
          for (; f < 3;) {
            if (0 === s) break e;
            s--, l += n[o++] << f, f += 8;
          }

          r.lens[B[r.have++]] = 7 & l, l >>>= 3, f -= 3;
        }

        for (; r.have < 19;) {
          r.lens[B[r.have++]] = 0;
        }

        if (r.lencode = r.lendyn, r.lenbits = 7, S = {
          bits: r.lenbits
        }, E = di(pi, r.lens, 0, 19, r.lencode, 0, r.work, S), r.lenbits = S.bits, E) {
          e.msg = "invalid code lengths set", r.mode = no;
          break;
        }

        r.have = 0, r.mode = Ki;

      case Ki:
        for (; r.have < r.nlen + r.ndist;) {
          for (; v = (R = r.lencode[l & (1 << r.lenbits) - 1]) >>> 16 & 255, w = 65535 & R, !((g = R >>> 24) <= f);) {
            if (0 === s) break e;
            s--, l += n[o++] << f, f += 8;
          }

          if (w < 16) l >>>= g, f -= g, r.lens[r.have++] = w;else {
            if (16 === w) {
              for (x = g + 2; f < x;) {
                if (0 === s) break e;
                s--, l += n[o++] << f, f += 8;
              }

              if (l >>>= g, f -= g, 0 === r.have) {
                e.msg = "invalid bit length repeat", r.mode = no;
                break;
              }

              k = r.lens[r.have - 1], d = 3 + (3 & l), l >>>= 2, f -= 2;
            } else if (17 === w) {
              for (x = g + 3; f < x;) {
                if (0 === s) break e;
                s--, l += n[o++] << f, f += 8;
              }

              f -= g, k = 0, d = 3 + (7 & (l >>>= g)), l >>>= 3, f -= 3;
            } else {
              for (x = g + 7; f < x;) {
                if (0 === s) break e;
                s--, l += n[o++] << f, f += 8;
              }

              f -= g, k = 0, d = 11 + (127 & (l >>>= g)), l >>>= 7, f -= 7;
            }

            if (r.have + d > r.nlen + r.ndist) {
              e.msg = "invalid bit length repeat", r.mode = no;
              break;
            }

            for (; d--;) {
              r.lens[r.have++] = k;
            }
          }
        }

        if (r.mode === no) break;

        if (0 === r.lens[256]) {
          e.msg = "invalid code -- missing end-of-block", r.mode = no;
          break;
        }

        if (r.lenbits = 9, S = {
          bits: r.lenbits
        }, E = di(_i, r.lens, 0, r.nlen, r.lencode, 0, r.work, S), r.lenbits = S.bits, E) {
          e.msg = "invalid literal/lengths set", r.mode = no;
          break;
        }

        if (r.distbits = 6, r.distcode = r.distdyn, S = {
          bits: r.distbits
        }, E = di(gi, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S), r.distbits = S.bits, E) {
          e.msg = "invalid distances set", r.mode = no;
          break;
        }

        if (r.mode = Xi, t === bi) break e;

      case Xi:
        r.mode = qi;

      case qi:
        if (s >= 6 && h >= 258) {
          e.next_out = a, e.avail_out = h, e.next_in = o, e.avail_in = s, r.hold = l, r.bits = f, ri(e, u), a = e.next_out, i = e.output, h = e.avail_out, o = e.next_in, n = e.input, s = e.avail_in, l = r.hold, f = r.bits, r.mode === Hi && (r.back = -1);
          break;
        }

        for (r.back = 0; v = (R = r.lencode[l & (1 << r.lenbits) - 1]) >>> 16 & 255, w = 65535 & R, !((g = R >>> 24) <= f);) {
          if (0 === s) break e;
          s--, l += n[o++] << f, f += 8;
        }

        if (v && 0 == (240 & v)) {
          for (b = g, y = v, m = w; v = (R = r.lencode[m + ((l & (1 << b + y) - 1) >> b)]) >>> 16 & 255, w = 65535 & R, !(b + (g = R >>> 24) <= f);) {
            if (0 === s) break e;
            s--, l += n[o++] << f, f += 8;
          }

          l >>>= b, f -= b, r.back += b;
        }

        if (l >>>= g, f -= g, r.back += g, r.length = w, 0 === v) {
          r.mode = Qi;
          break;
        }

        if (32 & v) {
          r.back = -1, r.mode = Hi;
          break;
        }

        if (64 & v) {
          e.msg = "invalid literal/length code", r.mode = no;
          break;
        }

        r.extra = 15 & v, r.mode = Vi;

      case Vi:
        if (r.extra) {
          for (x = r.extra; f < x;) {
            if (0 === s) break e;
            s--, l += n[o++] << f, f += 8;
          }

          r.length += l & (1 << r.extra) - 1, l >>>= r.extra, f -= r.extra, r.back += r.extra;
        }

        r.was = r.length, r.mode = Gi;

      case Gi:
        for (; v = (R = r.distcode[l & (1 << r.distbits) - 1]) >>> 16 & 255, w = 65535 & R, !((g = R >>> 24) <= f);) {
          if (0 === s) break e;
          s--, l += n[o++] << f, f += 8;
        }

        if (0 == (240 & v)) {
          for (b = g, y = v, m = w; v = (R = r.distcode[m + ((l & (1 << b + y) - 1) >> b)]) >>> 16 & 255, w = 65535 & R, !(b + (g = R >>> 24) <= f);) {
            if (0 === s) break e;
            s--, l += n[o++] << f, f += 8;
          }

          l >>>= b, f -= b, r.back += b;
        }

        if (l >>>= g, f -= g, r.back += g, 64 & v) {
          e.msg = "invalid distance code", r.mode = no;
          break;
        }

        r.offset = w, r.extra = 15 & v, r.mode = $i;

      case $i:
        if (r.extra) {
          for (x = r.extra; f < x;) {
            if (0 === s) break e;
            s--, l += n[o++] << f, f += 8;
          }

          r.offset += l & (1 << r.extra) - 1, l >>>= r.extra, f -= r.extra, r.back += r.extra;
        }

        if (r.offset > r.dmax) {
          e.msg = "invalid distance too far back", r.mode = no;
          break;
        }

        r.mode = Ji;

      case Ji:
        if (0 === h) break e;

        if (d = u - h, r.offset > d) {
          if ((d = r.offset - d) > r.whave && r.sane) {
            e.msg = "invalid distance too far back", r.mode = no;
            break;
          }

          d > r.wnext ? (d -= r.wnext, p = r.wsize - d) : p = r.wnext - d, d > r.length && (d = r.length), _ = r.window;
        } else _ = i, p = a - r.offset, d = r.length;

        d > h && (d = h), h -= d, r.length -= d;

        do {
          i[a++] = _[p++];
        } while (--d);

        0 === r.length && (r.mode = qi);
        break;

      case Qi:
        if (0 === h) break e;
        i[a++] = r.length, h--, r.mode = qi;
        break;

      case eo:
        if (r.wrap) {
          for (; f < 32;) {
            if (0 === s) break e;
            s--, l |= n[o++] << f, f += 8;
          }

          if (u -= h, e.total_out += u, r.total += u, u && (e.adler = r.check = r.flags ? $r(r.check, i, u, a - u) : Vr(r.check, i, u, a - u)), u = h, (r.flags ? l : ho(l)) !== r.check) {
            e.msg = "incorrect data check", r.mode = no;
            break;
          }

          l = 0, f = 0;
        }

        r.mode = to;

      case to:
        if (r.wrap && r.flags) {
          for (; f < 32;) {
            if (0 === s) break e;
            s--, l += n[o++] << f, f += 8;
          }

          if (l !== (4294967295 & r.total)) {
            e.msg = "incorrect length check", r.mode = no;
            break;
          }

          l = 0, f = 0;
        }

        r.mode = ro;

      case ro:
        E = mi;
        break e;

      case no:
        E = Si;
        break e;

      case io:
        return xi;

      case oo:
      default:
        return Ei;
    }
  }

  return e.next_out = a, e.avail_out = h, e.next_in = o, e.avail_in = s, r.hold = l, r.bits = f, (r.wsize || u !== e.avail_out && r.mode < no && (r.mode < eo || t !== vi)) && function (e, t, r, n) {
    var i,
        o = e.state;
    null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new Wt(o.wsize)), n >= o.wsize ? (jt(o.window, t, r - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : ((i = o.wsize - o.wnext) > n && (i = n), jt(o.window, t, r - n, i, o.wnext), (n -= i) ? (jt(o.window, t, r - n, n, 0), o.wnext = n, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i)));
  }(e, e.output, e.next_out, u - e.avail_out), c -= e.avail_in, u -= e.avail_out, e.total_in += c, e.total_out += u, r.total += u, r.wrap && u && (e.adler = r.check = r.flags ? $r(r.check, i, u, e.next_out - u) : Vr(r.check, i, u, e.next_out - u)), e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === Hi ? 128 : 0) + (r.mode === Xi || r.mode === Zi ? 256 : 0), (0 === c && 0 === u || t === vi) && E === yi && (E = Ri), E;
}

var wo,
    bo = 1,
    yo = 7;

function mo(e) {
  if (e < bo || e > yo) throw new TypeError("Bad argument");
  this.mode = e, this.init_done = !1, this.write_in_progress = !1, this.pending_close = !1, this.windowBits = 0, this.level = 0, this.memLevel = 0, this.strategy = 0, this.dictionary = null;
}

function ko(e, t) {
  for (var r = 0; r < e.length; r++) {
    this[t + r] = e[r];
  }
}

mo.prototype.init = function (e, t, r, n, i) {
  var o;

  switch (this.windowBits = e, this.level = t, this.memLevel = r, this.strategy = n, 3 !== this.mode && 4 !== this.mode || (this.windowBits += 16), this.mode === yo && (this.windowBits += 32), 5 !== this.mode && 6 !== this.mode || (this.windowBits = -this.windowBits), this.strm = new Zt(), this.mode) {
    case bo:
    case 3:
    case 5:
      o = function (e, t, r, n, i, o) {
        if (!e) return sn;
        var a = 1;
        if (t === fn && (t = 6), n < 0 ? (a = 0, n = -n) : n > 15 && (a = 2, n -= 16), i < 1 || i > vn || r !== gn || n < 8 || n > 15 || t < 0 || t > 9 || o < 0 || o > pn) return Hn(e, sn);
        8 === n && (n = 9);
        var s = new $n();
        return e.state = s, s.strm = e, s.wrap = a, s.gzhead = null, s.w_bits = n, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = i + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + En - 1) / En), s.window = new Wt(2 * s.w_size), s.head = new Yt(s.hash_size), s.prev = new Yt(s.w_size), s.lit_bufsize = 1 << i + 6, s.pending_buf_size = 4 * s.lit_bufsize, s.pending_buf = new Wt(s.pending_buf_size), s.d_buf = 1 * s.lit_bufsize, s.l_buf = 3 * s.lit_bufsize, s.level = t, s.strategy = o, s.method = r, Jn(e);
      }(this.strm, this.level, 8, this.windowBits, this.memLevel, this.strategy);

      break;

    case 2:
    case 4:
    case 6:
    case yo:
      o = co(this.strm, this.windowBits);
      break;

    default:
      throw new Error("Unknown mode " + this.mode);
  }

  0 === o ? (this.write_in_progress = !1, this.init_done = !0) : this._error(o);
}, mo.prototype.params = function () {
  throw new Error("deflateParams Not supported");
}, mo.prototype._writeCheck = function () {
  if (!this.init_done) throw new Error("write before init");
  if (0 === this.mode) throw new Error("already finalized");
  if (this.write_in_progress) throw new Error("write already in progress");
  if (this.pending_close) throw new Error("close is pending");
}, mo.prototype.write = function (e, t, r, n, i, o, a) {
  this._writeCheck(), this.write_in_progress = !0;
  var s = this;
  return de(function () {
    s.write_in_progress = !1;

    var h = s._write(e, t, r, n, i, o, a);

    s.callback(h[0], h[1]), s.pending_close && s.close();
  }), this;
}, mo.prototype.writeSync = function (e, t, r, n, i, o, a) {
  return this._writeCheck(), this._write(e, t, r, n, i, o, a);
}, mo.prototype._write = function (e, t, r, n, i, o, a) {
  if (this.write_in_progress = !0, 0 !== e && 1 !== e && 2 !== e && 3 !== e && 4 !== e && 5 !== e) throw new Error("Invalid flush value");
  null == t && (t = new p(0), n = 0, r = 0), i._set ? i.set = i._set : i.set = ko;
  var s,
      h = this.strm;

  switch (h.avail_in = n, h.input = t, h.next_in = r, h.avail_out = a, h.output = i, h.next_out = o, this.mode) {
    case bo:
    case 3:
    case 5:
      s = Qn(h, e);
      break;

    case yo:
    case 2:
    case 4:
    case 6:
      s = vo(h, e);
      break;

    default:
      throw new Error("Unknown mode " + this.mode);
  }

  return 1 !== s && 0 !== s && this._error(s), this.write_in_progress = !1, [h.avail_in, h.avail_out];
}, mo.prototype.close = function () {
  this.write_in_progress ? this.pending_close = !0 : (this.pending_close = !1, this.mode === bo || 3 === this.mode || 5 === this.mode ? function (e) {
    var t;
    e && e.state && ((t = e.state.status) !== An && t !== Bn && t !== zn && t !== Ln && t !== Tn && t !== Mn && t !== Cn ? Hn(e, sn) : (e.state = null, t === Mn && Hn(e, hn)));
  }(this.strm) : function (e) {
    if (!e || !e.state) return Ei;
    var t = e.state;
    t.window && (t.window = null), e.state = null;
  }(this.strm), this.mode = 0);
}, mo.prototype.reset = function () {
  switch (this.mode) {
    case bo:
    case 5:
      wo = Jn(this.strm);
      break;

    case 2:
    case 6:
      wo = fo(this.strm);
  }

  0 !== wo && this._error(wo);
}, mo.prototype._error = function (e) {
  this.onerror(Nt[e] + ": " + this.strm.msg, e), this.write_in_progress = !1, this.pending_close && this.close();
};
var Eo = Object.freeze({
  NONE: 0,
  DEFLATE: bo,
  INFLATE: 2,
  GZIP: 3,
  GUNZIP: 4,
  DEFLATERAW: 5,
  INFLATERAW: 6,
  UNZIP: yo,
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_BUF_ERROR: -5,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  Z_BINARY: 0,
  Z_TEXT: 1,
  Z_UNKNOWN: 2,
  Z_DEFLATED: 8,
  Zlib: mo
});
var So = {};
Object.keys(Eo).forEach(function (e) {
  So[e] = Eo[e];
}), So.Z_MIN_WINDOWBITS = 8, So.Z_MAX_WINDOWBITS = 15, So.Z_DEFAULT_WINDOWBITS = 15, So.Z_MIN_CHUNK = 64, So.Z_MAX_CHUNK = 1 / 0, So.Z_DEFAULT_CHUNK = 16384, So.Z_MIN_MEMLEVEL = 1, So.Z_MAX_MEMLEVEL = 9, So.Z_DEFAULT_MEMLEVEL = 8, So.Z_MIN_LEVEL = -1, So.Z_MAX_LEVEL = 9, So.Z_DEFAULT_LEVEL = So.Z_DEFAULT_COMPRESSION;
var xo = {
  Z_OK: So.Z_OK,
  Z_STREAM_END: So.Z_STREAM_END,
  Z_NEED_DICT: So.Z_NEED_DICT,
  Z_ERRNO: So.Z_ERRNO,
  Z_STREAM_ERROR: So.Z_STREAM_ERROR,
  Z_DATA_ERROR: So.Z_DATA_ERROR,
  Z_MEM_ERROR: So.Z_MEM_ERROR,
  Z_BUF_ERROR: So.Z_BUF_ERROR,
  Z_VERSION_ERROR: So.Z_VERSION_ERROR
};

function Ro(e, t, r) {
  var n = [],
      i = 0;

  function o() {
    for (var t; null !== (t = e.read());) {
      n.push(t), i += t.length;
    }

    e.once("readable", o);
  }

  function a() {
    var t = p.concat(n, i);
    n = [], r(null, t), e.close();
  }

  e.on("error", function (t) {
    e.removeListener("end", a), e.removeListener("readable", o), r(t);
  }), e.on("end", a), e.end(t), o();
}

function Ao(e, t) {
  if ("string" == typeof t && (t = new p(t)), !$(t)) throw new TypeError("Not a string or buffer");
  var r = So.Z_FINISH;
  return e._processChunk(t, r);
}

function Bo(e) {
  if (!(this instanceof Bo)) return new Bo(e);
  Io.call(this, e, So.DEFLATE);
}

function zo(e) {
  if (!(this instanceof zo)) return new zo(e);
  Io.call(this, e, So.INFLATE);
}

function Lo(e) {
  if (!(this instanceof Lo)) return new Lo(e);
  Io.call(this, e, So.GZIP);
}

function To(e) {
  if (!(this instanceof To)) return new To(e);
  Io.call(this, e, So.GUNZIP);
}

function Mo(e) {
  if (!(this instanceof Mo)) return new Mo(e);
  Io.call(this, e, So.DEFLATERAW);
}

function Co(e) {
  if (!(this instanceof Co)) return new Co(e);
  Io.call(this, e, So.INFLATERAW);
}

function Do(e) {
  if (!(this instanceof Do)) return new Do(e);
  Io.call(this, e, So.UNZIP);
}

function Io(e, t) {
  if (this._opts = e = e || {}, this._chunkSize = e.chunkSize || So.Z_DEFAULT_CHUNK, Ot.call(this, e), e.flush && e.flush !== So.Z_NO_FLUSH && e.flush !== So.Z_PARTIAL_FLUSH && e.flush !== So.Z_SYNC_FLUSH && e.flush !== So.Z_FULL_FLUSH && e.flush !== So.Z_FINISH && e.flush !== So.Z_BLOCK) throw new Error("Invalid flush flag: " + e.flush);
  if (this._flushFlag = e.flush || So.Z_NO_FLUSH, e.chunkSize && (e.chunkSize < So.Z_MIN_CHUNK || e.chunkSize > So.Z_MAX_CHUNK)) throw new Error("Invalid chunk size: " + e.chunkSize);
  if (e.windowBits && (e.windowBits < So.Z_MIN_WINDOWBITS || e.windowBits > So.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + e.windowBits);
  if (e.level && (e.level < So.Z_MIN_LEVEL || e.level > So.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + e.level);
  if (e.memLevel && (e.memLevel < So.Z_MIN_MEMLEVEL || e.memLevel > So.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + e.memLevel);
  if (e.strategy && e.strategy != So.Z_FILTERED && e.strategy != So.Z_HUFFMAN_ONLY && e.strategy != So.Z_RLE && e.strategy != So.Z_FIXED && e.strategy != So.Z_DEFAULT_STRATEGY) throw new Error("Invalid strategy: " + e.strategy);
  if (e.dictionary && !$(e.dictionary)) throw new Error("Invalid dictionary: it should be a Buffer instance");
  this._binding = new So.Zlib(t);
  var r = this;
  this._hadError = !1, this._binding.onerror = function (e, t) {
    r._binding = null, r._hadError = !0;
    var n = new Error(e);
    n.errno = t, n.code = So.codes[t], r.emit("error", n);
  };
  var n = So.Z_DEFAULT_COMPRESSION;
  "number" == typeof e.level && (n = e.level);
  var i = So.Z_DEFAULT_STRATEGY;
  "number" == typeof e.strategy && (i = e.strategy), this._binding.init(e.windowBits || So.Z_DEFAULT_WINDOWBITS, n, e.memLevel || So.Z_DEFAULT_MEMLEVEL, i, e.dictionary), this._buffer = new p(this._chunkSize), this._offset = 0, this._closed = !1, this._level = n, this._strategy = i, this.once("end", this.close);
}

Object.keys(xo).forEach(function (e) {
  xo[xo[e]] = e;
}), Be(Io, Ot), Io.prototype.params = function (e, t, r) {
  if (e < So.Z_MIN_LEVEL || e > So.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + e);
  if (t != So.Z_FILTERED && t != So.Z_HUFFMAN_ONLY && t != So.Z_RLE && t != So.Z_FIXED && t != So.Z_DEFAULT_STRATEGY) throw new TypeError("Invalid strategy: " + t);

  if (this._level !== e || this._strategy !== t) {
    var n = this;
    this.flush(So.Z_SYNC_FLUSH, function () {
      n._binding.params(e, t), n._hadError || (n._level = e, n._strategy = t, r && r());
    });
  } else de(r);
}, Io.prototype.reset = function () {
  return this._binding.reset();
}, Io.prototype._flush = function (e) {
  this._transform(new p(0), "", e);
}, Io.prototype.flush = function (e, t) {
  var r = this._writableState;
  if (("function" == typeof e || void 0 === e && !t) && (t = e, e = So.Z_FULL_FLUSH), r.ended) t && de(t);else if (r.ending) t && this.once("end", t);else if (r.needDrain) {
    var n = this;
    this.once("drain", function () {
      n.flush(t);
    });
  } else this._flushFlag = e, this.write(new p(0), "", t);
}, Io.prototype.close = function (e) {
  if (e && de(e), !this._closed) {
    this._closed = !0, this._binding.close();
    var t = this;
    de(function () {
      t.emit("close");
    });
  }
}, Io.prototype._transform = function (e, t, r) {
  var n,
      i = this._writableState,
      o = (i.ending || i.ended) && (!e || i.length === e.length);
  if (null === !e && !$(e)) return r(new Error("invalid input"));
  o ? n = So.Z_FINISH : (n = this._flushFlag, e.length >= i.length && (this._flushFlag = this._opts.flush || So.Z_NO_FLUSH)), this._processChunk(e, n, r);
}, Io.prototype._processChunk = function (e, t, r) {
  var n = e && e.length,
      i = this._chunkSize - this._offset,
      o = 0,
      a = this,
      s = "function" == typeof r;

  if (!s) {
    var h,
        l = [],
        f = 0;
    this.on("error", function (e) {
      h = e;
    });

    do {
      var c = this._binding.writeSync(t, e, o, n, this._buffer, this._offset, i);
    } while (!this._hadError && _(c[0], c[1]));

    if (this._hadError) throw h;
    var u = p.concat(l, f);
    return this.close(), u;
  }

  var d = this._binding.write(t, e, o, n, this._buffer, this._offset, i);

  function _(h, c) {
    if (!a._hadError) {
      var u = i - c;

      if (function (e, t) {
        if (!e) throw new Error(t);
      }(u >= 0, "have should not go down"), u > 0) {
        var d = a._buffer.slice(a._offset, a._offset + u);

        a._offset += u, s ? a.push(d) : (l.push(d), f += d.length);
      }

      if ((0 === c || a._offset >= a._chunkSize) && (i = a._chunkSize, a._offset = 0, a._buffer = new p(a._chunkSize)), 0 === c) {
        if (o += n - h, n = h, !s) return !0;

        var g = a._binding.write(t, e, o, n, a._buffer, a._offset, a._chunkSize);

        return g.callback = _, void (g.buffer = e);
      }

      if (!s) return !1;
      r();
    }
  }

  d.buffer = e, d.callback = _;
}, Be(Bo, Io), Be(zo, Io), Be(Lo, Io), Be(To, Io), Be(Mo, Io), Be(Co, Io), Be(Do, Io);
var Po = {
  codes: xo,
  createDeflate: function createDeflate(e) {
    return new Bo(e);
  },
  createInflate: function createInflate(e) {
    return new zo(e);
  },
  createDeflateRaw: function createDeflateRaw(e) {
    return new Mo(e);
  },
  createInflateRaw: function createInflateRaw(e) {
    return new Co(e);
  },
  createGzip: function createGzip(e) {
    return new Lo(e);
  },
  createGunzip: function createGunzip(e) {
    return new To(e);
  },
  createUnzip: function createUnzip(e) {
    return new Do(e);
  },
  deflate: function deflate(e, t, r) {
    return "function" == typeof t && (r = t, t = {}), Ro(new Bo(t), e, r);
  },
  deflateSync: function deflateSync(e, t) {
    return Ao(new Bo(t), e);
  },
  gzip: function gzip(e, t, r) {
    return "function" == typeof t && (r = t, t = {}), Ro(new Lo(t), e, r);
  },
  gzipSync: function gzipSync(e, t) {
    return Ao(new Lo(t), e);
  },
  deflateRaw: function deflateRaw(e, t, r) {
    return "function" == typeof t && (r = t, t = {}), Ro(new Mo(t), e, r);
  },
  deflateRawSync: function deflateRawSync(e, t) {
    return Ao(new Mo(t), e);
  },
  unzip: function unzip(e, t, r) {
    return "function" == typeof t && (r = t, t = {}), Ro(new Do(t), e, r);
  },
  unzipSync: function unzipSync(e, t) {
    return Ao(new Do(t), e);
  },
  inflate: function inflate(e, t, r) {
    return "function" == typeof t && (r = t, t = {}), Ro(new zo(t), e, r);
  },
  inflateSync: function inflateSync(e, t) {
    return Ao(new zo(t), e);
  },
  gunzip: function gunzip(e, t, r) {
    return "function" == typeof t && (r = t, t = {}), Ro(new To(t), e, r);
  },
  gunzipSync: function gunzipSync(e, t) {
    return Ao(new To(t), e);
  },
  inflateRaw: function inflateRaw(e, t, r) {
    return "function" == typeof t && (r = t, t = {}), Ro(new Co(t), e, r);
  },
  inflateRawSync: function inflateRawSync(e, t) {
    return Ao(new Co(t), e);
  },
  Deflate: Bo,
  Inflate: zo,
  Gzip: Lo,
  Gunzip: To,
  DeflateRaw: Mo,
  InflateRaw: Co,
  Unzip: Do,
  Zlib: Io
};

var _default = /*#__PURE__*/function () {
  function _default(e, t, r) {
    Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, _default);

    this.SDKAPPID = e, this.EXPIRETIME = r, this.PRIVATEKEY = t;
  }

  Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_default, [{
    key: "genTestUserSig",
    value: function genTestUserSig(e) {
      return this._isNumber(this.SDKAPPID) ? this._isString(this.PRIVATEKEY) ? this._isString(e) ? this._isNumber(this.EXPIRETIME) ? (console.log("sdkAppID=" + this.SDKAPPID + " key=" + this.PRIVATEKEY + " userID=" + e + " expire=" + this.EXPIRETIME), this.genSigWithUserbuf(e, this.EXPIRETIME, null)) : (console.error("expireTime must be a number"), "") : (console.error("userID must be a string"), "") : (console.error("privateKey must be a string"), "") : (console.error("sdkAppID must be a number"), "");
    }
  }, {
    key: "newBuffer",
    value: function newBuffer(e, t) {
      return p.from ? p.from(e, t) : new p(e, t);
    }
  }, {
    key: "unescape",
    value: function unescape(e) {
      return e.replace(/_/g, "=").replace(/\-/g, "/").replace(/\*/g, "+");
    }
  }, {
    key: "escape",
    value: function escape(e) {
      return e.replace(/\+/g, "*").replace(/\//g, "-").replace(/=/g, "_");
    }
  }, {
    key: "encode",
    value: function encode(e) {
      return this.escape(this.newBuffer(e).toString("base64"));
    }
  }, {
    key: "decode",
    value: function decode(e) {
      return this.newBuffer(this.unescape(e), "base64");
    }
  }, {
    key: "base64encode",
    value: function base64encode(e) {
      return this.newBuffer(e).toString("base64");
    }
  }, {
    key: "base64decode",
    value: function base64decode(e) {
      return this.newBuffer(e, "base64").toString();
    }
  }, {
    key: "_hmacsha256",
    value: function _hmacsha256(e, t, r, n) {
      var i = "TLS.identifier:" + e + "\n";
      i += "TLS.sdkappid:" + this.SDKAPPID + "\n", i += "TLS.time:" + t + "\n", i += "TLS.expire:" + r + "\n", null != n && (i += "TLS.userbuf:" + n + "\n");
      var o = te.HmacSHA256(i, this.PRIVATEKEY);
      return te.enc.Base64.stringify(o);
    }
  }, {
    key: "_utc",
    value: function _utc() {
      return Math.round(Date.now() / 1e3);
    }
  }, {
    key: "_isNumber",
    value: function _isNumber(e) {
      return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(e) && e.constructor === Number);
    }
  }, {
    key: "_isString",
    value: function _isString(e) {
      return "string" == typeof e;
    }
  }, {
    key: "genSigWithUserbuf",
    value: function genSigWithUserbuf(e, t, r) {
      var n = this._utc(),
          i = {
        "TLS.ver": "2.0",
        "TLS.identifier": e,
        "TLS.sdkappid": this.SDKAPPID,
        "TLS.time": n,
        "TLS.expire": t
      },
          o = "";

      if (null != r) {
        var _a = this.base64encode(r);

        i["TLS.userbuf"] = _a, o = this._hmacsha256(e, n, t, _a);
      } else o = this._hmacsha256(e, n, t, null);

      i["TLS.sig"] = o;
      var a = JSON.stringify(i),
          s = Po.deflateSync(this.newBuffer(a)).toString("base64"),
          h = this.escape(s);
      return console.log("ret=" + h), h;
    }
  }, {
    key: "validate",
    value: function validate(e) {
      var t = this.decode(e),
          r = Po.inflateSync(t);
      console.log("validate ret=" + r);
    }
  }]);

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./TUIKit/lib/tim-wx-sdk.js":
/*!**********************************!*\
  !*** ./TUIKit/lib/tim-wx-sdk.js ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global, document, navigator) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js").default;!function(e,t){"object"==( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(this,function(){function e(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable;})),o.push.apply(o,n);}return o;}function t(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(Object(n),!0).forEach(function(e){r(t,e,n[e]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));});}return t;}function o(e){return(o="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e);})(e);}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}function a(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,S(n.key),n);}}function s(e,t,o){return t&&a(e.prototype,t),o&&a(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e;}function r(e,t,o){return(t=S(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e;}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t);}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e);})(e);}function u(e,t){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e;})(e,t);}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0;}catch(e){return!1;}}function d(e,t,o){return(d=l()?Reflect.construct.bind():function(e,t,o){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n))();return o&&u(a,o.prototype),a;}).apply(null,arguments);}function p(e){var t="function"==typeof Map?new Map():void 0;return(p=function p(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n);}function n(){return d(e,arguments,c(this).constructor);}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,e);})(e);}function g(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++){o=s[n],t.indexOf(o)>=0||(a[o]=e[o]);}return a;}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++){o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o]);}}return a;}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function h(e,t){if(t&&("object"==_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e);}function f(e){var t=l();return function(){var o,n=c(e);if(t){var a=c(this).constructor;o=Reflect.construct(n,arguments,a);}else o=n.apply(this,arguments);return h(this,o);};}function m(e,t){return v(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,a,s,r,i=[],c=!0,u=!1;try{if(s=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1;}else for(;!(c=(n=s.call(o)).done)&&(i.push(n.value),i.length!==t);c=!0){;}}catch(l){u=!0,a=l;}finally{try{if(!c&&null!=o.return&&(r=o.return(),Object(r)!==r))return;}finally{if(u)throw a;}}return i;}}(e,t)||I(e,t)||C();}function M(e){return function(e){if(Array.isArray(e))return T(e);}(e)||y(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}();}function v(e){if(Array.isArray(e))return e;}function y(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e);}function I(e,t){if(e){if("string"==typeof e)return T(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?T(e,t):void 0;}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++){n[o]=e[o];}return n;}function C(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function E(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=I(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var _n2=0,a=function a(){};return{s:a,n:function n(){return _n2>=e.length?{done:!0}:{done:!1,value:e[_n2++]};},e:function e(_e2){throw _e2;},f:a};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var s,r=!0,i=!1;return{s:function s(){o=o.call(e);},n:function n(){var e=o.next();return r=e.done,e;},e:function e(_e3){i=!0,s=_e3;},f:function f(){try{r||null==o.return||o.return();}finally{if(i)throw s;}}};}function S(e){var t=function(e,t){if("object"!=_typeof(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===t?String:Number)(e);}(e,"string");return"symbol"==_typeof(t)?t:String(t);}var D={SDK_READY:"sdkStateReady",SDK_NOT_READY:"sdkStateNotReady",SDK_DESTROY:"sdkDestroy",MESSAGE_RECEIVED:"onMessageReceived",MESSAGE_MODIFIED:"onMessageModified",MESSAGE_REVOKED:"onMessageRevoked",MESSAGE_READ_BY_PEER:"onMessageReadByPeer",MESSAGE_READ_RECEIPT_RECEIVED:"onMessageReadReceiptReceived",MESSAGE_EXTENSIONS_UPDATED:"onMessageExtensionsUpdated",MESSAGE_EXTENSIONS_DELETED:"onMessageExtensionsDeleted",CONVERSATION_LIST_UPDATED:"onConversationListUpdated",TOTAL_UNREAD_MESSAGE_COUNT_UPDATED:"onTotalUnreadMessageCountUpdated",CONVERSATION_GROUP_LIST_UPDATED:"onConversationGroupListUpdated",CONVERSATION_IN_GROUP_UPDATED:"onConversationInGroupUpdated",GROUP_LIST_UPDATED:"onGroupListUpdated",GROUP_SYSTEM_NOTICE_RECEIVED:"receiveGroupSystemNotice",GROUP_ATTRIBUTES_UPDATED:"groupAttributesUpdated",TOPIC_CREATED:"onTopicCreated",TOPIC_DELETED:"onTopicDeleted",TOPIC_UPDATED:"onTopicUpdated",PROFILE_UPDATED:"onProfileUpdated",USER_STATUS_UPDATED:"onUserStatusUpdated",BLACKLIST_UPDATED:"blacklistUpdated",FRIEND_LIST_UPDATED:"onFriendListUpdated",FRIEND_GROUP_LIST_UPDATED:"onFriendGroupListUpdated",FRIEND_APPLICATION_LIST_UPDATED:"onFriendApplicationListUpdated",KICKED_OUT:"kickedOut",ERROR:"error",NET_STATE_CHANGE:"netStateChange",SDK_RELOAD:"sdkReload"},N={MSG_TEXT:"TIMTextElem",MSG_IMAGE:"TIMImageElem",MSG_SOUND:"TIMSoundElem",MSG_AUDIO:"TIMSoundElem",MSG_FILE:"TIMFileElem",MSG_FACE:"TIMFaceElem",MSG_VIDEO:"TIMVideoFileElem",MSG_GEO:"TIMLocationElem",MSG_LOCATION:"TIMLocationElem",MSG_GRP_TIP:"TIMGroupTipElem",MSG_GRP_SYS_NOTICE:"TIMGroupSystemNoticeElem",MSG_CUSTOM:"TIMCustomElem",MSG_MERGER:"TIMRelayElem",MSG_PRIORITY_HIGH:"High",MSG_PRIORITY_NORMAL:"Normal",MSG_PRIORITY_LOW:"Low",MSG_PRIORITY_LOWEST:"Lowest",CONV_C2C:"C2C",CONV_GROUP:"GROUP",CONV_TOPIC:"TOPIC",CONV_SYSTEM:"@TIM#SYSTEM",CONV_AT_ME:1,CONV_AT_ALL:2,CONV_AT_ALL_AT_ME:3,CONV_MARK_TYPE_STAR:1,CONV_MARK_TYPE_UNREAD:2,CONV_MARK_TYPE_FOLD:4,CONV_MARK_TYPE_HIDE:8,GRP_PRIVATE:"Private",GRP_WORK:"Private",GRP_PUBLIC:"Public",GRP_CHATROOM:"ChatRoom",GRP_MEETING:"ChatRoom",GRP_AVCHATROOM:"AVChatRoom",GRP_COMMUNITY:"Community",GRP_MBR_ROLE_OWNER:"Owner",GRP_MBR_ROLE_ADMIN:"Admin",GRP_MBR_ROLE_MEMBER:"Member",GRP_MBR_ROLE_CUSTOM:"Custom",GRP_TIP_MBR_JOIN:1,GRP_TIP_MBR_QUIT:2,GRP_TIP_MBR_KICKED_OUT:3,GRP_TIP_MBR_SET_ADMIN:4,GRP_TIP_MBR_CANCELED_ADMIN:5,GRP_TIP_GRP_PROFILE_UPDATED:6,GRP_TIP_MBR_PROFILE_UPDATED:7,GRP_TIP_BAN_AVCHATROOM_MEMBER:10,GRP_TIP_UNBAN_AVCHATROOM_MEMBER:11,MSG_REMIND_ACPT_AND_NOTE:"AcceptAndNotify",MSG_REMIND_ACPT_NOT_NOTE:"AcceptNotNotify",MSG_REMIND_DISCARD:"Discard",GENDER_UNKNOWN:"Gender_Type_Unknown",GENDER_FEMALE:"Gender_Type_Female",GENDER_MALE:"Gender_Type_Male",KICKED_OUT_MULT_ACCOUNT:"multipleAccount",KICKED_OUT_MULT_DEVICE:"multipleDevice",KICKED_OUT_USERSIG_EXPIRED:"userSigExpired",KICKED_OUT_REST_API:"REST_API_Kick",ALLOW_TYPE_ALLOW_ANY:"AllowType_Type_AllowAny",ALLOW_TYPE_NEED_CONFIRM:"AllowType_Type_NeedConfirm",ALLOW_TYPE_DENY_ANY:"AllowType_Type_DenyAny",FORBID_TYPE_NONE:"AdminForbid_Type_None",FORBID_TYPE_SEND_OUT:"AdminForbid_Type_SendOut",JOIN_OPTIONS_FREE_ACCESS:"FreeAccess",JOIN_OPTIONS_NEED_PERMISSION:"NeedPermission",JOIN_OPTIONS_DISABLE_APPLY:"DisableApply",JOIN_STATUS_SUCCESS:"JoinedSuccess",JOIN_STATUS_ALREADY_IN_GROUP:"AlreadyInGroup",JOIN_STATUS_WAIT_APPROVAL:"WaitAdminApproval",GRP_PROFILE_OWNER_ID:"ownerID",GRP_PROFILE_CREATE_TIME:"createTime",GRP_PROFILE_LAST_INFO_TIME:"lastInfoTime",GRP_PROFILE_MEMBER_NUM:"memberNum",GRP_PROFILE_MAX_MEMBER_NUM:"maxMemberNum",GRP_PROFILE_JOIN_OPTION:"joinOption",GRP_PROFILE_INTRODUCTION:"introduction",GRP_PROFILE_NOTIFICATION:"notification",GRP_PROFILE_MUTE_ALL_MBRS:"muteAllMembers",SNS_ADD_TYPE_SINGLE:"Add_Type_Single",SNS_ADD_TYPE_BOTH:"Add_Type_Both",SNS_DELETE_TYPE_SINGLE:"Delete_Type_Single",SNS_DELETE_TYPE_BOTH:"Delete_Type_Both",SNS_APPLICATION_TYPE_BOTH:"Pendency_Type_Both",SNS_APPLICATION_SENT_TO_ME:"Pendency_Type_ComeIn",SNS_APPLICATION_SENT_BY_ME:"Pendency_Type_SendOut",SNS_APPLICATION_AGREE:"Response_Action_Agree",SNS_APPLICATION_AGREE_AND_ADD:"Response_Action_AgreeAndAdd",SNS_CHECK_TYPE_BOTH:"CheckResult_Type_Both",SNS_CHECK_TYPE_SINGLE:"CheckResult_Type_Single",SNS_TYPE_NO_RELATION:"CheckResult_Type_NoRelation",SNS_TYPE_A_WITH_B:"CheckResult_Type_AWithB",SNS_TYPE_B_WITH_A:"CheckResult_Type_BWithA",SNS_TYPE_BOTH_WAY:"CheckResult_Type_BothWay",NET_STATE_CONNECTED:"connected",NET_STATE_CONNECTING:"connecting",NET_STATE_DISCONNECTED:"disconnected",MSG_AT_ALL:"__kImSDK_MesssageAtALL__",READ_ALL_C2C_MSG:"readAllC2CMessage",READ_ALL_GROUP_MSG:"readAllGroupMessage",READ_ALL_MSG:"readAllMessage",USER_STATUS_UNKNOWN:0,USER_STATUS_ONLINE:1,USER_STATUS_OFFLINE:2,USER_STATUS_UNLOGINED:3},A=function(){function e(){n(this,e),this.cache=[],this.options=null;}return s(e,[{key:"use",value:function value(e){if("function"!=typeof e)throw"middleware must be a function";return this.cache.push(e),this;}},{key:"next",value:function value(e){if(this.middlewares&&this.middlewares.length>0)return this.middlewares.shift().call(this,this.options,this.next.bind(this));}},{key:"run",value:function value(e){return this.middlewares=this.cache.map(function(e){return e;}),this.options=e,this.next();}}]),e;}(),k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function R(e,t){return e(t={exports:{}},t.exports),t.exports;}var O=R(function(e,t){var o,n,a,s,r,i,c,u,l,d,p,g,_,h,f,m,M,v;e.exports=(o="function"==typeof Promise,n="object"==(typeof self==="undefined"?"undefined":_typeof(self))?self:k,a="undefined"!=typeof Symbol,s="undefined"!=typeof Map,r="undefined"!=typeof Set,i="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,u="undefined"!=typeof DataView,l=a&&void 0!==Symbol.iterator,d=a&&void 0!==Symbol.toStringTag,p=r&&"function"==typeof Set.prototype.entries,g=s&&"function"==typeof Map.prototype.entries,_=p&&Object.getPrototypeOf(new Set().entries()),h=g&&Object.getPrototypeOf(new Map().entries()),f=l&&"function"==typeof Array.prototype[Symbol.iterator],m=f&&Object.getPrototypeOf([][Symbol.iterator]()),M=l&&"function"==typeof String.prototype[Symbol.iterator],v=M&&Object.getPrototypeOf(""[Symbol.iterator]()),function(e){var t=_typeof(e);if("object"!==t)return t;if(null===e)return"null";if(e===n)return"global";if(Array.isArray(e)&&(!1===d||!(Symbol.toStringTag in e)))return"Array";if("object"==(typeof window==="undefined"?"undefined":_typeof(window))&&null!==window){if("object"==_typeof(window.location)&&e===window.location)return"Location";if("object"==_typeof(window.document)&&e===window.document)return"Document";if("object"==_typeof(window.navigator)){if("object"==_typeof(window.navigator.mimeTypes)&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==_typeof(window.navigator.plugins)&&e===window.navigator.plugins)return"PluginArray";}if(("function"==typeof window.HTMLElement||"object"==_typeof(window.HTMLElement))&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement";}}var a=d&&e[Symbol.toStringTag];if("string"==typeof a)return a;var l=Object.getPrototypeOf(e);return l===RegExp.prototype?"RegExp":l===Date.prototype?"Date":o&&l===Promise.prototype?"Promise":r&&l===Set.prototype?"Set":s&&l===Map.prototype?"Map":c&&l===WeakSet.prototype?"WeakSet":i&&l===WeakMap.prototype?"WeakMap":u&&l===DataView.prototype?"DataView":s&&l===h?"Map Iterator":r&&l===_?"Set Iterator":f&&l===m?"Array Iterator":M&&l===v?"String Iterator":null===l?"Object":Object.prototype.toString.call(e).slice(8,-1);});}),L=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n(this,e),this.high=t,this.low=o;}return s(e,[{key:"equal",value:function value(e){return null!==e&&this.low===e.low&&this.high===e.high;}},{key:"toString",value:function value(){var e=Number(this.high).toString(16),t=Number(this.low).toString(16);if(t.length<8)for(var o=8-t.length;o;){t="0"+t,o--;}return e+t;}}]),e;}(),G={TEST:{CHINA:{DEFAULT:"wss://wss-dev.tim.qq.com"},OVERSEA:{DEFAULT:"wss://wss-dev.tim.qq.com"},SINGAPORE:{DEFAULT:"wss://wsssgp-dev.im.qcloud.com"},KOREA:{DEFAULT:"wss://wsskr-dev.im.qcloud.com"},GERMANY:{DEFAULT:"wss://wssger-dev.im.qcloud.com"},IND:{DEFAULT:"wss://wssind-dev.im.qcloud.com"},JPN:{DEFAULT:"wss://wssjpn-dev.im.qcloud.com"},USA:{DEFAULT:"wss://wssusa-dev.im.qcloud.com"}},PRODUCTION:{CHINA:{DEFAULT:"wss://wss.im.qcloud.com",BACKUP:"wss://wss.tim.qq.com",STAT:"https://events.im.qcloud.com"},OVERSEA:{DEFAULT:"wss://wss.im.qcloud.com",BACKUP:"wss://wss.my-imcloud.com",STAT:"https://api.my-imcloud.com"},SINGAPORE:{DEFAULT:"wss://wsssgp.im.qcloud.com",BACKUP:"wss://wsssgp.my-imcloud.com",STAT:"https://apisgp.my-imcloud.com"},KOREA:{DEFAULT:"wss://wsskr.im.qcloud.com",BACKUP:"wss://wsskr.my-imcloud.com",STAT:"https://apikr.my-imcloud.com"},GERMANY:{DEFAULT:"wss://wssger.im.qcloud.com",BACKUP:"wss://wssger.my-imcloud.com",STAT:"https://apiger.my-imcloud.com"},IND:{DEFAULT:"wss://wssind.my-imcloud.com",BACKUP:"wss://wssind.im.qcloud.com",STAT:"https://apiind.my-imcloud.com"},JPN:{DEFAULT:"wss://wssjpn.im.qcloud.com",BACKUP:"wss://wssjpn.my-imcloud.com",STAT:"https://apijpn.my-imcloud.com"},USA:{DEFAULT:"wss://wssusa.im.qcloud.com",BACKUP:"wss://wssusa.my-imcloud.com",STAT:"https://apiusa.my-imcloud.com"}}},P={ANDROID:2,IOS:3,MAC:4,WEB:7,WX_MP:8,QQ_MP:9,TT_MP:10,BAIDU_MP:11,ALI_MP:12,IPAD:13,UNI_NATIVE_APP:15},U="1.7.3",b=537048168,w="CHINA",F="OVERSEA",q="SINGAPORE",V="KOREA",x="GERMANY",B="IND",K="JPN",H="USA",W={HOST:{CURRENT:{DEFAULT:"wss://wss.im.qcloud.com",STAT:"https://events.im.qcloud.com"},setCurrent:function setCurrent(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;this.CURRENT=G.PRODUCTION[e];}},NAME:{OPEN_IM:"openim",OPEN_IM_MSG_EXT:"openim_msg_ext_http_svc",GROUP:"group_open_http_svc",GROUP_AVCHATROOM:"group_open_avchatroom_http_svc",GROUP_COMMUNITY:"million_group_open_http_svc",GROUP_ATTR:"group_open_attr_http_svc",FRIEND:"sns",PROFILE:"profile",RECENT_CONTACT:"recentcontact",PIC:"openpic",BIG_GROUP_NO_AUTH:"group_open_http_noauth_svc",BIG_GROUP_LONG_POLLING:"group_open_long_polling_http_svc",BIG_GROUP_LONG_POLLING_NO_AUTH:"group_open_long_polling_http_noauth_svc",IM_OPEN_STAT:"imopenstat",WEB_IM:"webim",IM_COS_SIGN:"im_cos_sign_svr",CUSTOM_UPLOAD:"im_cos_msg",HEARTBEAT:"heartbeat",IM_OPEN_PUSH:"im_open_push",IM_OPEN_STATUS:"im_open_status",IM_LONG_MESSAGE:"im_long_msg",IM_CONFIG_MANAGER:"im_sdk_config_mgr",STAT_SERVICE:"StatSvc",OVERLOAD_PUSH:"OverLoadPush",IM_MSG_AUDIT_MGR:"im_msg_audit_mgr",TUIROOM_SVR:"tui_room_svr"},CMD:{LOGIN:"wslogin",LOGOUT_LONG_POLL:"longpollinglogout",LOGOUT:"wslogout",HELLO:"wshello",STAT_BACKGROUND:"ws_stat_background",STAT_FOREGROUND:"ws_stat_foreground",SET_TOKEN:"ws_stat_settoken",PORTRAIT_GET:"portrait_get_all",PORTRAIT_SET:"portrait_set",GET_LONG_POLL_ID:"getlongpollingid",LONG_POLL:"longpolling",AVCHATROOM_LONG_POLL:"get_msg",ADD_FRIEND:"friend_add",UPDATE_FRIEND:"friend_update",GET_FRIEND_LIST:"friend_get",GET_FRIEND_PROFILE:"friend_get_specified",DELETE_FRIEND:"friend_delete",CHECK_FRIEND:"friend_check",GET_FRIEND_GROUP_LIST:"group_get",RESPOND_FRIEND_APPLICATION:"friend_response",GET_FRIEND_APPLICATION_LIST:"pendency_get",DELETE_FRIEND_APPLICATION:"pendency_delete",REPORT_FRIEND_APPLICATION:"pendency_report",GET_GROUP_APPLICATION:"get_pendency",CREATE_FRIEND_GROUP:"group_add",DELETE_FRIEND_GROUP:"group_delete",UPDATE_FRIEND_GROUP:"group_update",GET_BLACKLIST:"black_list_get",ADD_BLACKLIST:"black_list_add",DELETE_BLACKLIST:"black_list_delete",CREATE_GROUP:"create_group",GET_JOINED_GROUPS:"get_joined_group_list",SET_GROUP_ATTRIBUTES:"set_group_attr",MODIFY_GROUP_ATTRIBUTES:"modify_group_attr",DELETE_GROUP_ATTRIBUTES:"delete_group_attr",CLEAR_GROUP_ATTRIBUTES:"clear_group_attr",GET_GROUP_ATTRIBUTES:"get_group_attr",SEND_MESSAGE:"sendmsg",REVOKE_C2C_MESSAGE:"msgwithdraw",DELETE_C2C_MESSAGE:"delete_c2c_msg_ramble",MODIFY_C2C_MESSAGE:"modify_c2c_msg",MODIFY_C2C_MESSAGE_EXTENSIONS:"set_key_values",GET_C2C_MESSAGE_EXTENSIONS:"get_key_values",SEND_GROUP_MESSAGE:"send_group_msg",REVOKE_GROUP_MESSAGE:"group_msg_recall",DELETE_GROUP_MESSAGE:"delete_group_ramble_msg_by_seq",MODIFY_GROUP_MESSAGE:"modify_group_msg",MODIFY_GROUP_MESSAGE_EXTENSIONS:"group_set_key_values",GET_GROUP_MESSAGE_EXTENSIONS:"group_get_key_values",GET_GROUP_INFO:"get_group_self_member_info",GET_GROUP_MEMBER_INFO:"get_specified_group_member_info",GET_GROUP_MEMBER_LIST:"get_group_member_info",GET_AVCHATROOM_MEMBER_LIST:"get_members",MARK_AVCHATROOM_MEMBER_INFO:"modify_user_info",QUIT_GROUP:"quit_group",CHANGE_GROUP_OWNER:"change_group_owner",DESTROY_GROUP:"destroy_group",ADD_GROUP_MEMBER:"add_group_member",DELETE_GROUP_MEMBER:"delete_group_member",BAN_AVCHATROOM_MEMBER:"ban_group_member",SEARCH_GROUP_BY_ID:"get_group_public_info",APPLY_JOIN_GROUP:"apply_join_group",HANDLE_APPLY_JOIN_GROUP:"handle_apply_join_group",HANDLE_GROUP_INVITATION:"handle_invite_join_group",MODIFY_GROUP_INFO:"modify_group_base_info",MODIFY_GROUP_MEMBER_INFO:"modify_group_member_info",DELETE_GROUP_SYSTEM_MESSAGE:"deletemsg",DELETE_GROUP_AT_TIPS:"deletemsg",GET_CONVERSATION_LIST:"get",PAGING_GET_CONVERSATION_LIST:"page_get",DELETE_CONVERSATION:"delete",CLEAR_HISTORY_MESSAGE:"clear_msg",PIN_CONVERSATION:"top",SET_CONVERSATION_CUSTOM_DATA:"mark_contact",MARK_CONVERSATION:"mark_contact",CREATE_CONVERSATION_GROUP:"create_contact_group",DELETE_CONVERSATION_GROUP:"del_contact_group",UPDATE_CONVERSATION_GROUP:"update_contact_group",GET_CONVERSATION_GROUP_LIST:"get_contact_group",GET_MESSAGES:"getmsg",GET_C2C_ROAM_MESSAGES:"getroammsg",SET_C2C_PEER_MUTE_NOTIFICATIONS:"set_c2c_peer_mute_notifications",GET_C2C_PEER_MUTE_NOTIFICATIONS:"get_c2c_peer_mute_notifications",GET_GROUP_ROAM_MESSAGES:"group_msg_get",GET_READ_RECEIPT:"get_group_msg_receipt",GET_READ_RECEIPT_DETAIL:"get_group_msg_receipt_detail",SEND_READ_RECEIPT:"group_msg_receipt",SEND_C2C_READ_RECEIPT:"c2c_msg_read_receipt",SET_C2C_MESSAGE_READ:"msgreaded",GET_PEER_READ_TIME:"get_peer_read_time",SET_GROUP_MESSAGE_READ:"msg_read_report",FILE_READ_AND_WRITE_AUTHKEY:"authkey",FILE_UPLOAD:"pic_up",COS_SIGN:"cos",COS_PRE_SIG:"pre_sig",VIDEO_COVER:"video_cover",TIM_WEB_REPORT_V2:"tim_web_report_v2",BIG_DATA_HALLWAY_AUTH_KEY:"authkey",GET_ONLINE_MEMBER_NUM:"get_online_member_num",ALIVE:"alive",MESSAGE_PUSH:"msg_push",MULTI_MESSAGE_PUSH:"multi_msg_push_ws",MESSAGE_PUSH_ACK:"ws_msg_push_ack",STATUS_FORCE_OFFLINE:"stat_forceoffline",DOWNLOAD_MERGER_MESSAGE:"get_relay_json_msg",UPLOAD_MERGER_MESSAGE:"save_relay_json_msg",FETCH_CLOUD_CONTROL_CONFIG:"fetch_config",PUSHED_CLOUD_CONTROL_CONFIG:"push_configv2",FETCH_COMMERCIAL_CONFIG:"fetch_imsdk_purchase_bitsv2",PUSHED_COMMERCIAL_CONFIG:"push_imsdk_purchase_bitsv2",KICK_OTHER:"KickOther",OVERLOAD_NOTIFY:"notify2",SET_ALL_MESSAGE_READ:"read_all_unread_msg",CREATE_TOPIC:"create_topic",DELETE_TOPIC:"destroy_topic",UPDATE_TOPIC_PROFILE:"modify_topic",GET_TOPIC_LIST:"get_topic",SET_SELF_STATUS:"ws_set_custom_status",GET_USER_STATUS:"ws_get_user_status",SUBSCRIBE_USER_STATUS:"ws_status_subscribe",UNSUBSCRIBE_USER_STATUS:"ws_status_unsubscribe",GET_RPOFANITY_LIST:"get_local_words"},CHANNEL:{SOCKET:1,XHR:2,AUTO:0},NAME_VERSION:{openim:"v4",group_open_http_svc:"v4",sns:"v4",profile:"v4",recentcontact:"v4",openpic:"v4",group_open_http_noauth_svc:"v4",group_open_long_polling_http_svc:"v4",group_open_long_polling_http_noauth_svc:"v4",imopenstat:"v4",im_cos_sign_svr:"v4",im_cos_msg:"v4",webim:"v4",im_open_push:"v4",im_open_status:"v4"}},Y={SEARCH_MSG:new L(0,Math.pow(2,0)).toString(),SEARCH_GRP_SNS:new L(0,Math.pow(2,1)).toString(),AVCHATROOM_HISTORY_MSG:new L(0,Math.pow(2,2)).toString(),GRP_COMMUNITY:new L(0,Math.pow(2,3)).toString(),MSG_TO_SPECIFIED_GRP_MBR:new L(0,Math.pow(2,4)).toString(),AVCHATROOM_MBR_LIST:new L(0,Math.pow(2,6)).toString(),USER_STATUS:new L(0,Math.pow(2,7)).toString(),CONV_MARK:new L(0,Math.pow(2,9)).toString(),CONV_GROUP:new L(0,Math.pow(2,10)).toString(),AVCHATROOM_BAN_MBR:new L(0,Math.pow(2,11)).toString(),MSG_EXT:new L(0,Math.pow(2,13)).toString()},j="c2c_text_message",$="c2c_custom_message",z="group_text_message",J="group_custom_message",X="user_profile",Q="group_profile",Z="group_member_profile";W.HOST.setCurrent(w);var ee,te,oe,ne,ae="undefined"!=typeof wx&&"function"==typeof wx.getSystemInfoSync&&Boolean(wx.getSystemInfoSync().fontSizeSetting),se="undefined"!=typeof qq&&"function"==typeof qq.getSystemInfoSync&&Boolean(qq.getSystemInfoSync().fontSizeSetting),re="undefined"!=typeof tt&&"function"==typeof tt.getSystemInfoSync&&Boolean(tt.getSystemInfoSync().fontSizeSetting),ie="undefined"!=typeof swan&&"function"==typeof swan.getSystemInfoSync&&Boolean(swan.getSystemInfoSync().fontSizeSetting),ce="undefined"!=typeof my&&"function"==typeof my.getSystemInfoSync&&Boolean(my.getSystemInfoSync().fontSizeSetting),ue="undefined"!=typeof uni&&"undefined"==typeof window,le="undefined"!=typeof uni,de=ae||se||re||ie||ce||ue,pe=("undefined"!=typeof uni||"undefined"!=typeof window)&&!de,ge=se?qq:re?tt:ie?swan:ce?my:ae?wx:ue?uni:{},_e=(ee="WEB",ke?ee="WEB":se?ee="QQ_MP":re?ee="TT_MP":ie?ee="BAIDU_MP":ce?ee="ALI_MP":ae?ee="WX_MP":ue&&(ee="UNI_NATIVE_APP"),P[ee]),he=pe&&window&&window.navigator&&window.navigator.userAgent||"",fe=/AppleWebKit\/([\d.]+)/i.exec(he),me=(fe&&parseFloat(fe.pop()),/iPad/i.test(he)),Me=/iPhone/i.test(he)&&!me,ve=/iPod/i.test(he),ye=Me||me||ve,Ie=(te=he.match(/OS (\d+)_/i))&&te[1]?te[1]:null,Te=/Android/i.test(he),Ce=function(){var e=he.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!e)return null;var t=e[1]&&parseFloat(e[1]),o=e[2]&&parseFloat(e[2]);return t&&o?parseFloat(e[1]+"."+e[2]):t||null;}(),Ee=(Te&&/webkit/i.test(he),/Firefox/i.test(he),/Edge/i.test(he)),Se=!Ee&&/Chrome/i.test(he),De=(function(){var e=he.match(/Chrome\/(\d+)/);e&&e[1]&&parseFloat(e[1]);}(),/MSIE/.test(he)||he.indexOf("Trident")>-1&&he.indexOf("rv:11.0")>-1),Ne=(/MSIE\s8\.0/.test(he),function(){var e=/MSIE\s(\d+)\.\d/.exec(he),t=e&&parseFloat(e[1]);return!t&&/Trident\/7.0/i.test(he)&&/rv:11.0/.test(he)&&(t=11),t;}()),Ae=(/Safari/i.test(he),/TBS\/\d+/i.test(he)),ke=(function(){var e=he.match(/TBS\/(\d+)/i);if(e&&e[1])e[1];}(),!Ae&&/MQQBrowser\/\d+/i.test(he),!Ae&&/ QQBrowser\/\d+/i.test(he),/(micromessenger|webbrowser)/i.test(he)),Re=/Windows/i.test(he),Oe=/MAC OS X/i.test(he),Le=(/MicroMessenger/i.test(he),pe&&"undefined"!=typeof Worker&&!De),Ge=Te||ye,Pe=pe&&void 0!==window.tencent_cloud_im_csig_flutter_for_web_25F_cy,Ue="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};oe="undefined"!=typeof console?console:void 0!==Ue&&Ue.console?Ue.console:"undefined"!=typeof window&&window.console?window.console:{};for(var be=function be(){},we=["assert","clear","count","debug","dir","dirxml","error","group","groupCollapsed","groupEnd","info","log","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],Fe=we.length;Fe--;){ne=we[Fe],console[ne]||(oe[ne]=be);}var qe=oe,Ve=0,xe=function xe(){return new Date().getTime()+Ve;},Be=function Be(){Ve=0;},Ke=function Ke(){return Math.floor(xe()/1e3);},He=0;function We(){return eo()?"%c TIM %c":"TIM";}function Ye(){var e,t=((e=new Date()).setTime(xe()),e);return t.toLocaleTimeString("en-US",{hour12:!1})+"."+function(e){var t;switch(e.toString().length){case 1:t="00"+e;break;case 2:t="0"+e;break;default:t=e;}return t;}(t.getMilliseconds());}var je={arguments2String:function arguments2String(e){var t="";if(1===e.length)t=e[0];else for(var o=0,n=e.length;o<n;o++){gt(e[o])?ht(e[o])?t+=It(e[o]):t+=JSON.stringify(e[o]):t+=e[o],t+=" ";}return t;},_exec:function _exec(e,t){eo()?qe[e](We(),"background:#0abf5b; padding:1px; border-radius:3px; color: #fff","background:transparent",Ye(),t):qe[e]("".concat(We()," ").concat(Ye()," ").concat(t));},debug:function debug(){if(He<=-1){var e=this.arguments2String(arguments);this._exec("debug",e);}},log:function log(){if(He<=0){var e=this.arguments2String(arguments);this._exec("log",e);}},info:function info(){if(He<=1){var e=this.arguments2String(arguments);this._exec("info",e);}},warn:function warn(){if(He<=2){var e=this.arguments2String(arguments);this._exec("warn",e);}},error:function error(){if(He<=3){var e=this.arguments2String(arguments);this._exec("error",e);}},setLevel:function setLevel(e){e<4&&this._exec("log","set level from "+He+" to "+e),He=e;},getLevel:function getLevel(){return He;}},$e={JPG:1,JPEG:1,GIF:2,PNG:3,BMP:4,UNKNOWN:255},ze={NICK:"Tag_Profile_IM_Nick",GENDER:"Tag_Profile_IM_Gender",BIRTHDAY:"Tag_Profile_IM_BirthDay",LOCATION:"Tag_Profile_IM_Location",SELFSIGNATURE:"Tag_Profile_IM_SelfSignature",ALLOWTYPE:"Tag_Profile_IM_AllowType",LANGUAGE:"Tag_Profile_IM_Language",AVATAR:"Tag_Profile_IM_Image",MESSAGESETTINGS:"Tag_Profile_IM_MsgSettings",ADMINFORBIDTYPE:"Tag_Profile_IM_AdminForbidType",LEVEL:"Tag_Profile_IM_Level",ROLE:"Tag_Profile_IM_Role"},Je={UNKNOWN:"Gender_Type_Unknown",FEMALE:"Gender_Type_Female",MALE:"Gender_Type_Male"},Xe={NONE:"AdminForbid_Type_None",SEND_OUT:"AdminForbid_Type_SendOut"},Qe={NEED_CONFIRM:"AllowType_Type_NeedConfirm",ALLOW_ANY:"AllowType_Type_AllowAny",DENY_ANY:"AllowType_Type_DenyAny"},Ze="JoinedSuccess",et="WaitAdminApproval",ot="@TGS#_",nt="@TOPIC#_",at=["url"],st=function st(e){return"map"===ft(e);},rt=function rt(e){return"file"===ft(e);},it=function it(e){return null!==e&&("number"==typeof e&&!isNaN(e-0)||"object"===o(e)&&e.constructor===Number);},ct=function ct(e){return"string"==typeof e;},ut=function ut(e){return null!==e&&"object"===o(e);},lt=function lt(e){if("object"!==o(e)||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var n=t;null!==Object.getPrototypeOf(n);){n=Object.getPrototypeOf(n);}return t===n;},dt=function dt(e){return"function"==typeof Array.isArray?Array.isArray(e):"array"===ft(e);},pt=function pt(e){return void 0===e;},gt=function gt(e){return dt(e)||ut(e);},_t=function _t(e){return"function"==typeof e;},ht=function ht(e){return e instanceof Error;},ft=function ft(e){return Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1].toLowerCase();},mt=function mt(e){if("string"!=typeof e)return!1;var t=e[0];return!/[^a-zA-Z0-9]/.test(t);},Mt=0;Date.now||(Date.now=function(){return new Date().getTime();});var vt=function vt(){0===Mt&&(Mt=Date.now()-1);var e=Date.now()-Mt;return e>4294967295?(Mt+=4294967295,Date.now()-Mt):e;},yt=function e(t,o,n,a){if(!gt(t)||!gt(o))return 0;for(var s,r=0,i=Object.keys(o),c=0,u=i.length;c<u;c++){if(s=i[c],!(pt(o[s])||n&&n.includes(s)))if(gt(t[s])&&gt(o[s]))r+=e(t[s],o[s],n,a);else{if(a&&a.includes(o[s]))continue;t[s]!==o[s]&&(t[s]=o[s],r+=1);}}return r;},It=function It(e){return JSON.stringify(e,["message","code"]);},Tt=function Tt(e){if(0===e.length)return 0;for(var t=0,o=0,n="undefined"!=typeof document&&void 0!==document.characterSet?document.characterSet:"UTF-8";void 0!==e[t];){o+=e[t++].charCodeAt[t]<=255?1:!1===n?3:2;}return o;},Ct=function Ct(e){var t=e||99999999;return Math.round(Math.random()*t);},Et="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",St=Et.length,Dt=function Dt(e,t){for(var o in e){if(e[o]===t)return!0;}return!1;},Nt={},At=function At(e){return-1===e.indexOf("http://")||-1===e.indexOf("https://")?"https://"+e:e.replace(/https|http/,"https");},kt=function e(t){if(0===Object.getOwnPropertyNames(t).length)return Object.create(null);var n=Array.isArray(t)?[]:Object.create(null),a="";for(var s in t){null!==t[s]?void 0!==t[s]?(a=o(t[s]),["string","number","function","boolean"].indexOf(a)>=0?n[s]=t[s]:n[s]=e(t[s])):n[s]=void 0:n[s]=null;}return n;};function Rt(e,t){dt(e)&&dt(t)&&t.forEach(function(t){var o=t.key,n=t.value,a=e.find(function(e){return e.key===o;});a?a.value=n:e.push({key:o,value:n});});}var Ot=function Ot(e){return e===N.GRP_PUBLIC;},Lt=function Lt(e){return e===N.GRP_AVCHATROOM;},Gt=function Gt(e){var t=e.type,o=e.groupID;return t===N.GRP_COMMUNITY||"".concat(o).startsWith(ot)&&!"".concat(o).includes(nt);},Pt=function Pt(e){return"".concat(e).startsWith(ot)&&"".concat(e).includes(nt);},Ut=function Ut(e){return ct(e)&&e.slice(0,3)===N.CONV_C2C;},bt=function bt(e){return ct(e)&&e.slice(0,5)===N.CONV_GROUP;},wt=function wt(e){return ct(e)&&e===N.CONV_SYSTEM;};function Ft(e,t){var o={};return Object.keys(e).forEach(function(n){o[n]=t(e[n],n);}),o;}function qt(e){return de?new Promise(function(t,o){ge.getImageInfo({src:e,success:function success(e){t({width:e.width,height:e.height});},fail:function fail(){t({width:0,height:0});}});}):De&&9===Ne?Promise.resolve({width:0,height:0}):new Promise(function(t,o){var n=new Image();n.onload=function(){t({width:this.width,height:this.height}),n=null;},n.onerror=function(){t({width:0,height:0}),n=null;},n.src=e;});}function Vt(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1);}return"".concat(e()+e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e());}function xt(){var e="unknown";if(Oe&&(e="mac"),Re&&(e="windows"),ye&&(e="ios"),Te&&(e="android"),de)try{var t=ge.getSystemInfoSync().platform;void 0!==t&&(e=t);}catch(o){}return e;}function Bt(e,t){e=e.split("."),t=t.split(".");for(var o=Math.max(e.length,t.length);e.length<o;){e.push("0");}for(;t.length<o;){t.push("0");}for(var n=0;n<o;n++){var a=parseInt(e[n]),s=parseInt(t[n]);if(a>s)return 1;if(a<s)return-1;}return 0;}function Kt(e){var t=e.originUrl,o=void 0===t?void 0:t,n=e.originWidth,a=e.originHeight,s=e.min,r=void 0===s?198:s,i=parseInt(n),c=parseInt(a),u={url:void 0,width:0,height:0};if((i<=c?i:c)<=r)u.url=o,u.width=i,u.height=c;else{c<=i?(u.width=Math.ceil(i*r/c),u.height=r):(u.width=r,u.height=Math.ceil(c*r/i));var l=o&&o.indexOf("?")>-1?"".concat(o,"&"):"".concat(o,"?");u.url="".concat(l,198===r?"imageView2/3/w/198/h/198":"imageView2/3/w/720/h/720");}return pt(o)?g(u,at):u;}function Ht(e){var t=e[2];e[2]=e[1],e[1]=t;for(var o=0;o<e.length;o++){e[o].setType(o);}}function Wt(e){var t=e.servcmd;return t.slice(t.indexOf(".")+1);}function Yt(e,t){return Math.round(Number(e)*Math.pow(10,t))/Math.pow(10,t);}function jt(e,t){return e.includes(t);}function $t(e,t){return e.includes(t);}function zt(e){return e.split(nt)[0];}var Jt=function Jt(e,t,o){if(pt(t))return"";switch(e){case N.MSG_TEXT:return t.text;case N.MSG_IMAGE:return o?"[Image]":"[图片]";case N.MSG_LOCATION:return o?"[Location]":"[位置]";case N.MSG_AUDIO:return o?"[Voice]":"[语音]";case N.MSG_VIDEO:return o?"[Video]":"[视频]";case N.MSG_FILE:return o?"[File]":"[文件]";case N.MSG_CUSTOM:return o?"[Custom Messages]":"[自定义消息]";case N.MSG_GRP_TIP:return o?"[Group Notification]":"[群提示消息]";case N.MSG_GRP_SYS_NOTICE:return o?"[Group System Message]":"[群系统通知]";case N.MSG_FACE:return o?"[Animated Sticker]":"[动画表情]";case N.MSG_MERGER:return o?"[Chat Record]":"[聊天记录]";default:return"";}};function Xt(e){return e===N.MSG_TEXT||e===N.MSG_CUSTOM||e===N.MSG_LOCATION||e===N.MSG_FACE;}function Qt(e){var t=[];if(!ct(e))return t;var o=e.length;if(0===o)return t;for(var n=o-1;n>=0;n--){"1"===e[n]&&t.push(Math.pow(2,o-n-1));}return t;}function Zt(e){return 0===e||e>=2e7&&e<3e7||e>=3e7&&e<4e7||e>=4e7&&e<5e7||e>=5e7&&e<6e7;}function eo(){return!De&&!de;}function to(e){return"the length of userIDList cannot exceed ".concat(e);}var oo=Object.prototype.hasOwnProperty;function no(e){if(null==e)return!0;if("boolean"==typeof e)return!1;if("number"==typeof e)return 0===e;if("string"==typeof e)return 0===e.length;if("function"==typeof e)return 0===e.length;if(Array.isArray(e))return 0===e.length;if(e instanceof Error)return""===e.message;if(lt(e)){for(var t in e){if(oo.call(e,t))return!1;}return!0;}return!(!st(e)&&(o=e,"set"!==ft(o))&&!rt(e))&&0===e.size;var o;}function ao(e,t,o){if(void 0===t)return!0;var n=!0;if("object"===O(t).toLowerCase())Object.keys(t).forEach(function(a){var s=1===e.length?e[0][a]:void 0;n=!!so(s,t[a],o,a)&&n;});else if("array"===O(t).toLowerCase())for(var a=0;a<t.length;a++){n=!!so(e[a],t[a],o,t[a].name)&&n;}if(n)return n;throw new Error("Params validate failed.");}function so(e,t,o,n){if(void 0===t)return!0;var a=!0;return t.required&&no(e)&&(je.error("[".concat(o,'] Missing required params: "').concat(n,'".')),a=!1),no(e)||O(e).toLowerCase()===t.type.toLowerCase()||(je.error("[".concat(o,'] Invalid params: type check failed for "').concat(n,'".Expected ').concat(t.type,".")),a=!1),t.validator&&!t.validator(e)&&(je.error("[".concat(o,"] Invalid params: custom validator check failed for params.")),a=!1),a;}var ro,io={UNSEND:"unSend",SUCCESS:"success",FAIL:"fail"},co={NOT_START:"notStart",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},uo=!1,lo=function lo(e){return!!e&&(!!(Ut(e)||bt(e)||wt(e))||(uo?je.warn("Invalid conversationID:".concat(e,"."),"Supported formats: C2C${userID} (one-to-one chat) | GROUP${groupID} (group chat) | @TIM#SYSTEM (system notification conversation)"):je.warn("非法的会话 ID:".concat(e,"。会话 ID 组成方式：C2C + userID（单聊）GROUP + groupID（群聊）@TIM#SYSTEM（系统通知会话）")),!1));},po=function po(e){return"[".concat(e.api,"] | ").concat(e.param," | ").concat(e.desc,", ").concat(uo?"see https://web.sdk.qcloud.com/im/doc/en/SDK.html#":"请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#").concat(e.api);},go=function go(){return uo?"String type required":"类型必须为 String";},_o=function _o(e){return uo?"String type required and ".concat(e," must not be an empty string"):"类型必须为 String，且不能为空";},ho=function ho(){return uo?"Number type required":"类型必须为 Number";},fo=function fo(){return uo?"Must not be undefined":"不能为 undefined";},mo=function mo(){return uo?"HTMLInputElement or File required":"类型必须为 HTMLInputElement 或 File";},Mo=function Mo(){return uo?"Function type required":"类型必须为 Function";},vo=function vo(){return uo?"Array type required":"类型必须为 Array";},yo=function yo(){return uo?"Must not be an empty array":"不能为空数组";},Io=function Io(){return uo?"Without onProgress function, you can not query the upload progress":"没有 onProgress 回调，您将无法获取上传进度";},To=function To(){return uo?"A positive integer required":"必须为正整数";},Co=function Co(e,t){return uo?"".concat(e," must not be longer than ").concat(t," bytes"):"".concat(e," 长度不得超过 ").concat(t," 字节");},Eo=function Eo(e,t){return uo?"".concat(e," must be less than ").concat(t):"".concat(e," 必须小于").concat(t);},So=function So(e){return uo?"Type of ".concat(e," of key-value pairs must be String"):"键值对的 ".concat(e," 的类型必须为 String");},Do=function Do(){return uo?"Plain Object required":"类型必须为 Plain Object";},No=function No(){return uo?"Message content must not be empty":"消息内容不能为空";},Ao=function Ao(){return uo?"Please select a file first":"您没有选择文件，无法发送";},ko=function ko(){return uo?"A message instance required":"请传入消息（Message）实例";},Ro=function Ro(){return uo?"Non-anonymous Function recommended":"推荐使用具名函数";},Oo=function Oo(){return uo?"Please check the status and isSupportExtension properties of the message":"请检查消息的 status 和 isSupportExtension 属性";},Lo={type:"String",required:!0},Go={type:"Array",required:!0},Po={type:"Object",required:!0},Uo={type:"Boolean",required:!0},bo={setIsIntl:function setIsIntl(e){uo=e;},login:{userID:Lo,userSig:Lo},addToBlacklist:{userIDList:Go},removeFromBlacklist:{userIDList:Go},on:[{name:"eventName",type:"String",validator:function validator(e){return"string"==typeof e&&0!==e.length||(je.warn(po({api:"on",param:"eventName",desc:_o("eventName")})),!1);}},{name:"handler",type:"Function",validator:function validator(e){return"function"!=typeof e?(je.warn(po({api:"on",param:"handler",desc:Mo()})),!1):(""===e.name&&je.warn(po({api:"on",param:"handler",desc:Ro()})),!0);}}],once:[{name:"eventName",type:"String",validator:function validator(e){return"string"==typeof e&&0!==e.length||(je.warn(po({api:"once",param:"eventName",desc:_o("eventName")})),!1);}},{name:"handler",type:"Function",validator:function validator(e){return"function"!=typeof e?(je.warn(po({api:"once",param:"handler",desc:Mo()})),!1):(""===e.name&&je.warn(po({api:"once",param:"handler",desc:Ro()})),!0);}}],off:[{name:"eventName",type:"String",validator:function validator(e){return"string"==typeof e&&0!==e.length||(je.warn(po({api:"off",param:"eventName",desc:_o("eventName")})),!1);}},{name:"handler",type:"Function",validator:function validator(e){return"function"!=typeof e?(je.warn(po({api:"off",param:"handler",desc:Mo()})),!1):(""===e.name&&je.warn(po({api:"off",param:"handler",desc:Ro()})),!0);}}],sendMessage:[t({name:"message"},Po)],setMessageExtensions:[t(t({name:"message"},Po),{},{validator:function validator(e){return e.status===io.SUCCESS&&!0===e.isSupportExtension||(je.warn(po({api:"setMessageExtensions",param:"message",desc:Oo()})),!1);}}),t({name:"extensions"},Go)],getMessageExtensions:[t(t({name:"message"},Po),{},{validator:function validator(e){return e.status===io.SUCCESS&&!0===e.isSupportExtension||(je.warn(po({api:"getMessageExtensions",param:"message",desc:Oo()})),!1);}})],deleteMessageExtensions:[t(t({name:"message"},Po),{},{validator:function validator(e){return e.status===io.SUCCESS&&!0===e.isSupportExtension||(je.warn(po({api:"deleteMessageExtensions",param:"message",desc:Oo()})),!1);}})],getMessageList:{conversationID:t(t({},Lo),{},{validator:function validator(e){return lo(e);}}),nextReqMessageID:{type:"String"},count:{type:"Number",validator:function validator(e){return!(!pt(e)&&!/^[1-9][0-9]*$/.test(e))||(je.warn(po({api:"getMessageList",param:"count",desc:To()})),!1);}}},getMessageListHopping:{conversationID:t(t({},Lo),{},{validator:function validator(e){return lo(e);}}),sequence:{type:"Number"},time:{type:"Number"},direction:{type:"Number",validator:function validator(e){return!(!pt(e)&&0!==e&&1!==e)||(je.warn(po({api:"getMessageListHopping",param:"direction",desc:uo?"0 or 1 required":"必须为0或1"})),!1);}},count:{type:"Number",validator:function validator(e){return!(!pt(e)&&!/^[1-9][0-9]*$/.test(e))||(je.warn(po({api:"getMessageListHopping",param:"count",desc:To})),!1);}}},setMessageRead:{conversationID:t(t({},Lo),{},{validator:function validator(e){return lo(e);}})},setAllMessageRead:{scope:{type:"String",required:!1,validator:function validator(e){return!e||-1!==[N.READ_ALL_C2C_MSG,N.READ_ALL_GROUP_MSG,N.READ_ALL_MSG].indexOf(e)||(je.warn(po({api:"setAllMessageRead",param:"scope",desc:"TIM.TYPES.READ_ALL_C2C_MSG or TIM.TYPES.READ_ALL_GROUP_MSG or TIM.TYPES.READ_ALL_MSG required"})),!1);}}},getConversationProfile:[t(t({name:"conversationID"},Lo),{},{validator:function validator(e){return lo(e);}})],deleteConversation:[t(t({name:"conversationID"},Lo),{},{validator:function validator(e){return lo(e);}})],clearHistoryMessage:[t(t({name:"conversationID"},Lo),{},{validator:function validator(e){return lo(e);}})],pinConversation:{conversationID:t(t({},Lo),{},{validator:function validator(e){return lo(e);}}),isPinned:t({},Uo)},setConversationCustomData:{conversationIDList:t({},Go),customData:{type:"String",validator:function validator(e){return ct(e)?!(e.length>256)||(je.warn(po({api:"setConversationCustomData",param:"customData",desc:Co("customData",256)})),!1):(je.warn(po({api:"setConversationCustomData",param:"customData",desc:go()})),!1);}}},markConversation:{conversationIDList:t({},Go),markType:{type:"number",validator:function validator(e){return it(e)?e<=0?(je.warn(po({api:"markConversation",param:"markType",desc:(t="markType",o=0,uo?"".concat(t," must be greater than ").concat(o):"".concat(t," 必须大于").concat(o))})),!1):!(e>=Math.pow(2,64))||(je.warn(po({api:"markConversation",param:"markType",desc:Eo("markType","Math.pow(2,64)")})),!1):(je.warn(po({api:"markConversation",param:"markType",desc:ho()})),!1);var t,o;}},enableMark:t({},Uo)},createConversationGroup:{conversationIDList:t({},Go),groupName:t(t({},Lo),{},{validator:function validator(e){return!!e&&(!(e.length>32)||(je.warn(po({api:"createConversationGroup",param:"groupName",desc:Co("groupName",32)})),!1));}})},deleteConversationGroup:[t({name:"groupName"},Lo)],renameConversationGroup:{oldName:t({},Lo),newName:t(t({},Lo),{},{validator:function validator(e){return!!e&&(!(e.length>32)||(je.warn(po({api:"renameConversationGroup",param:"newName",desc:Co("newName",32)})),!1));}})},addConversationsToGroup:{conversationIDList:t({},Go),groupName:t({},Lo)},deleteConversationsFromGroup:{conversationIDList:t({},Go),groupName:t({},Lo)},getGroupList:{groupProfileFilter:{type:"Array"}},getGroupProfile:{groupID:Lo,groupCustomFieldFilter:{type:"Array"},memberCustomFieldFilter:{type:"Array"}},getGroupProfileAdvance:{groupIDList:Go},createGroup:{name:Lo},joinGroup:{groupID:Lo,type:{type:"String"},applyMessage:{type:"String"}},quitGroup:[t({name:"groupID"},Lo)],handleApplication:{message:Po,handleAction:Lo,handleMessage:{type:"String"}},changeGroupOwner:{groupID:Lo,newOwnerID:Lo},updateGroupProfile:{groupID:Lo,muteAllMembers:{type:"Boolean"}},dismissGroup:[t({name:"groupID"},Lo)],searchGroupByID:[t({name:"groupID"},Lo)],initGroupAttributes:{groupID:Lo,groupAttributes:t(t({},Po),{},{validator:function validator(e){var t=!0;return Object.keys(e).forEach(function(o){if(!ct(e[o]))return je.warn(po({api:"initGroupAttributes",param:"groupAttributes",desc:So("value")})),t=!1;}),t;}})},setGroupAttributes:{groupID:Lo,groupAttributes:t(t({},Po),{},{validator:function validator(e){var t=!0;return Object.keys(e).forEach(function(o){if(!ct(e[o]))return je.warn(po({api:"setGroupAttributes",param:"groupAttributes",desc:So("value")})),t=!1;}),t;}})},deleteGroupAttributes:{groupID:Lo,keyList:{type:"Array",validator:function validator(e){if(pt(e)||!dt(e))return je.warn(po({api:"deleteGroupAttributes",param:"keyList",desc:vo()})),!1;if(!no(e)){var t=!0;return e.forEach(function(e){if(!ct(e))return je.warn(po({api:"deleteGroupAttributes",param:"keyList",desc:uo?"Type of the array element must be String":"数组元素的类型必须为 String"})),t=!1;}),t;}return!0;}}},getGroupAttributes:{groupID:Lo,keyList:{type:"Array",validator:function validator(e){if(pt(e)||!dt(e))return je.warn(po({api:"getGroupAttributes",param:"keyList",desc:vo()})),!1;if(!no(e)){var t=!0;return e.forEach(function(e){if(!ct(e))return je.warn(po({api:"getGroupAttributes",param:"keyList",desc:So("key")})),t=!1;}),t;}return!0;}}},getGroupMemberList:{groupID:Lo,count:{type:"Number"}},getGroupMemberProfile:{groupID:Lo,userIDList:Go,memberCustomFieldFilter:{type:"Array"}},addGroupMember:{groupID:Lo,userIDList:Go},setGroupMemberRole:{groupID:Lo,userID:Lo,role:Lo},setGroupMemberMuteTime:{groupID:Lo,userID:Lo,muteTime:{type:"Number",validator:function validator(e){return e>=0;}}},setGroupMemberNameCard:{groupID:Lo,userID:{type:"String"},nameCard:{type:"String",validator:function validator(e){return ct(e)?(e.length,!0):(je.warn(po({api:"setGroupMemberNameCard",param:"nameCard",desc:go()})),!1);}}},setGroupMemberCustomField:{groupID:Lo,userID:{type:"String"},memberCustomField:Go},deleteGroupMember:{groupID:Lo},markGroupMemberList:{groupID:Lo,markType:{type:"number",validator:function validator(e){return it(e)?!(e<1e3)||(je.warn(po({api:"markGroupMemberList",param:"markType",desc:(t="markType",o=1e3,uo?"".concat(t," must be greater than or equal to ").concat(o):"".concat(t," 必须大于或等于").concat(o))})),!1):(je.warn(po({api:"markGroupMemberList",param:"markType",desc:ho()})),!1);var t,o;}},userIDList:t({},Go),enableMark:t({},Uo)},createTextMessage:{to:Lo,conversationType:Lo,payload:t(t({},Po),{},{validator:function validator(e){return lt(e)?ct(e.text)?0!==e.text.length||(je.warn(po({api:"createTextMessage",param:"payload.text",desc:No()})),!1):(je.warn(po({api:"createTextMessage",param:"payload.text",desc:go()})),!1):(je.warn(po({api:"createTextMessage",param:"payload",desc:Do()})),!1);}})},createTextAtMessage:{to:Lo,conversationType:Lo,payload:t(t({},Po),{},{validator:function validator(e){return lt(e)?ct(e.text)?0===e.text.length?(je.warn(po({api:"createTextAtMessage",param:"payload.text",desc:No()})),!1):!(e.atUserList&&!dt(e.atUserList))||(je.warn(po({api:"createTextAtMessage",param:"payload.atUserList",desc:vo()})),!1):(je.warn(po({api:"createTextAtMessage",param:"payload.text",desc:go()})),!1):(je.warn(po({api:"createTextAtMessage",param:"payload",desc:Do()})),!1);}})},createCustomMessage:{to:Lo,conversationType:Lo,payload:t(t({},Po),{},{validator:function validator(e){return lt(e)?e.data&&!ct(e.data)?(je.warn(po({api:"createCustomMessage",param:"payload.data",desc:go()})),!1):e.description&&!ct(e.description)?(je.warn(po({api:"createCustomMessage",param:"payload.description",desc:go()})),!1):!(e.extension&&!ct(e.extension))||(je.warn(po({api:"createCustomMessage",param:"payload.extension",desc:go()})),!1):(je.warn(po({api:"createCustomMessage",param:"payload",desc:Do()})),!1);}})},createImageMessage:{to:Lo,conversationType:Lo,payload:t(t({},Po),{},{validator:function validator(e){if(!lt(e))return je.warn(po({api:"createImageMessage",param:"payload",desc:Do()})),!1;if(pt(e.file))return je.warn(po({api:"createImageMessage",param:"payload.file",desc:fo()})),!1;if(pe){if(!(e.file instanceof HTMLInputElement||rt(e.file)))return lt(e.file)&&"undefined"!=typeof uni?0!==e.file.tempFilePaths.length&&0!==e.file.tempFiles.length||(je.warn(po({api:"createImageMessage",param:"payload.file",desc:Ao()})),!1):(je.warn(po({api:"createImageMessage",param:"payload.file",desc:mo()})),!1);if(e.file instanceof HTMLInputElement&&0===e.file.files.length)return je.warn(po({api:"createImageMessage",param:"payload.file",desc:Ao()})),!1;}return!0;},onProgress:{type:"Function",required:!1,validator:function validator(e){return pt(e)&&je.warn(po({api:"createImageMessage",param:"onProgress",desc:Io()})),!0;}}})},createAudioMessage:{to:Lo,conversationType:Lo,payload:t(t({},Po),{},{validator:function validator(e){return!!lt(e)||(je.warn(po({api:"createAudioMessage",param:"payload",desc:Do()})),!1);}}),onProgress:{type:"Function",required:!1,validator:function validator(e){return pt(e)&&je.warn(po({api:"createAudioMessage",param:"onProgress",desc:Io()})),!0;}}},createVideoMessage:{to:Lo,conversationType:Lo,payload:t(t({},Po),{},{validator:function validator(e){if(!lt(e))return je.warn(po({api:"createVideoMessage",param:"payload",desc:Do()})),!1;if(pt(e.file))return je.warn(po({api:"createVideoMessage",param:"payload.file",desc:fo()})),!1;if(pe){if(!(e.file instanceof HTMLInputElement||rt(e.file)))return lt(e.file)&&"undefined"!=typeof uni?!!rt(e.file.tempFile)||(je.warn(po({api:"createVideoMessage",param:"payload.file",desc:Ao()})),!1):(je.warn(po({api:"createVideoMessage",param:"payload.file",desc:mo()})),!1);if(e.file instanceof HTMLInputElement&&0===e.file.files.length)return je.warn(po({api:"createVideoMessage",param:"payload.file",desc:Ao()})),!1;}return!0;}}),onProgress:{type:"Function",required:!1,validator:function validator(e){return pt(e)&&je.warn(po({api:"createVideoMessage",param:"onProgress",desc:Io()})),!0;}}},createFaceMessage:{to:Lo,conversationType:Lo,payload:t(t({},Po),{},{validator:function validator(e){return lt(e)?it(e.index)?!!ct(e.data)||(je.warn(po({api:"createFaceMessage",param:"payload.data",desc:go()})),!1):(je.warn(po({api:"createFaceMessage",param:"payload.index",desc:ho()})),!1):(je.warn(po({api:"createFaceMessage",param:"payload",desc:Do()})),!1);}})},createFileMessage:{to:Lo,conversationType:Lo,payload:t(t({},Po),{},{validator:function validator(e){if(!lt(e))return je.warn(po({api:"createFileMessage",param:"payload",desc:Do()})),!1;if(pt(e.file))return je.warn(po({api:"createFileMessage",param:"payload.file",desc:fo()})),!1;if(pe){if(!(e.file instanceof HTMLInputElement||rt(e.file)))return lt(e.file)&&"undefined"!=typeof uni?0!==e.file.tempFilePaths.length&&0!==e.file.tempFiles.length||(je.warn(po({api:"createFileMessage",param:"payload.file",desc:Ao()})),!1):(je.warn(po({api:"createFileMessage",param:"payload.file",desc:mo()})),!1);if(e.file instanceof HTMLInputElement&&0===e.file.files.length)return je.warn(po({api:"createFileMessage",param:"payload.file",desc:Ao()})),!1;}return!0;}}),onProgress:{type:"Function",required:!1,validator:function validator(e){return pt(e)&&je.warn(po({api:"createFileMessage",param:"onProgress",desc:Io()})),!0;}}},createLocationMessage:{to:Lo,conversationType:Lo,payload:t(t({},Po),{},{validator:function validator(e){return lt(e)?ct(e.description)?it(e.longitude)?!!it(e.latitude)||(je.warn(po({api:"createLocationMessage",param:"payload.latitude",desc:ho()})),!1):(je.warn(po({api:"createLocationMessage",param:"payload.longitude",desc:ho()})),!1):(je.warn(po({api:"createLocationMessage",param:"payload.description",desc:go()})),!1):(je.warn(po({api:"createLocationMessage",param:"payload",desc:Do()})),!1);}})},createMergerMessage:{to:Lo,conversationType:Lo,payload:t(t({},Po),{},{validator:function validator(e){if(no(e.messageList))return je.warn(po({api:"createMergerMessage",param:"payload.messageList",desc:yo()})),!1;if(no(e.compatibleText))return je.warn(po({api:"createMergerMessage",param:"payload.compatibleText",desc:_o("compatibleText")})),!1;var t=!1;return e.messageList.forEach(function(e){e.status===io.FAIL&&(t=!0);}),!t||(je.warn(po({api:"createMergerMessage",param:"payload.messageList",desc:uo?"Does not support combining messages that failed to sent":"不支持合并已发送失败的消息"})),!1);}})},revokeMessage:[t(t({name:"message"},Po),{},{validator:function validator(e){return no(e)?(je.warn(po({api:"revokeMessage",param:"message",desc:ko()})),!1):e.conversationType===N.CONV_SYSTEM?(je.warn(po({api:"revokeMessage",param:"message",desc:uo?"Only one-to-one or group message can be recalled":"不支持撤回系统会话消息，只支持撤回单聊消息或群消息"})),!1):!0!==e.isRevoked||(je.warn(po({api:"revokeMessage",param:"message",desc:uo?"Message has been recalled":"消息已经被撤回，请勿重复操作"})),!1);}})],deleteMessage:[t(t({name:"messageList"},Go),{},{validator:function validator(e){return!no(e)||(je.warn(po({api:"deleteMessage",param:"messageList",desc:yo()})),!1);}})],modifyMessage:[t(t({name:"message"},Po),{},{validator:function validator(e){return no(e)?(je.warn(po({api:"modifyMessage",param:"message",desc:ko()})),!1):e.conversationType===N.CONV_SYSTEM?(je.warn(po({api:"modifyMessage",param:"message",desc:uo?"Only one-to-one or group message can be modified":"不支持修改系统会话消息，只支持修改单聊消息或群消息"})),!1):!0!==e._onlineOnlyFlag||(je.warn(po({api:"modifyMessage",param:"message",desc:uo?"Does not support modifying online message":"不支持修改在线消息"})),!1);}})],getUserProfile:{userIDList:{type:"Array",validator:function validator(e){return dt(e)?(0===e.length&&je.warn(po({api:"getUserProfile",param:"userIDList",desc:yo()})),!0):(je.warn(po({api:"getUserProfile",param:"userIDList",desc:vo()})),!1);}}},updateMyProfile:{profileCustomField:{type:"Array",validator:function validator(e){return!!pt(e)||!!dt(e)||(je.warn(po({api:"updateMyProfile",param:"profileCustomField",desc:vo()})),!1);}}},setSelfStatus:{customStatus:{type:"String",validator:function validator(e){return!!ct(e)||(je.warn(po({api:"setSelfStatus",param:"customStatus",desc:go()})),!1);}}},getUserStatus:{userIDList:{type:"Array",validator:function validator(e){return dt(e)?0!==e.length||(je.warn(po({api:"getUserStatus",param:"userIDList",desc:yo()})),!1):(je.warn(po({api:"getUserStatus",param:"userIDList",desc:vo()})),!1);}}},subscribeUserStatus:{userIDList:{type:"Array",validator:function validator(e){return dt(e)?0!==e.length||(je.warn(po({api:"subscribeUserStatus",param:"userIDList",desc:yo()})),!1):(je.warn(po({api:"subscribeUserStatus",param:"userIDList",desc:vo()})),!1);}}},unsubscribeUserStatus:{userIDList:{type:"Array",validator:function validator(e){return!e||!!dt(e)||(je.warn(po({api:"subscribeUserStatus",param:"userIDList",desc:vo()})),!1);}}},addFriend:{to:Lo,source:{type:"String",required:!0,validator:function validator(e){return!!e&&(e.startsWith("AddSource_Type_")?!(e.replace("AddSource_Type_","").length>8)||(je.warn(po({api:"addFriend",param:"source",desc:Co("keyword",8)})),!1):(je.warn(po({api:"addFriend",param:"source",desc:uo?"The prefix of the source field is AddSource_Type_":"前缀必须是：AddSource_Type_"})),!1));}},remark:{type:"String",required:!1,validator:function validator(e){return!(ct(e)&&e.length>96)||(je.warn(po({api:"addFriend",param:"remark",desc:Co("remark",96)})),!1);}}},deleteFriend:{userIDList:Go},checkFriend:{userIDList:Go},getFriendProfile:{userIDList:Go},updateFriend:{userID:Lo,remark:{type:"String",required:!1,validator:function validator(e){return!(ct(e)&&e.length>96)||(je.warn(po({api:"updateFriend",param:"remark",desc:Co("remark",96)})),!1);}},friendCustomField:{type:"Array",required:!1,validator:function validator(e){if(e){if(!dt(e))return je.warn(po({api:"updateFriend",param:"friendCustomField",desc:vo()})),!1;var t=!0;return e.forEach(function(e){return ct(e.key)&&-1!==e.key.indexOf("Tag_SNS_Custom")?ct(e.value)?e.key.replace("Tag_SNS_Custom_","").length>8?(je.warn(po({api:"updateFriend",param:"friendCustomField",desc:Co("keyword",8)})),t=!1):void 0:(je.warn(po({api:"updateFriend",param:"friendCustomField",desc:So("value")})),t=!1):(je.warn(po({api:"updateFriend",param:"friendCustomField",desc:uo?"The prefix of the friendCustomField is Tag_SNS_Custom":"前缀必须是 Tag_SNS_Custom"})),t=!1);}),t;}return!0;}}},acceptFriendApplication:{userID:Lo},refuseFriendApplication:{userID:Lo},deleteFriendApplication:{userID:Lo},createFriendGroup:{name:Lo},deleteFriendGroup:{name:Lo},addToFriendGroup:{name:Lo,userIDList:Go},removeFromFriendGroup:{name:Lo,userIDList:Go},renameFriendGroup:{oldName:Lo,newName:Lo},sendMessageReadReceipt:[{name:"messageList",type:"Array",validator:function validator(e){return dt(e)?0!==e.length||(je.warn(po({api:"sendMessageReadReceipt",param:"messageList",desc:yo()})),!1):(je.warn(po({api:"sendMessageReadReceipt",param:"messageList",desc:vo()})),!1);}}],getMessageReadReceiptList:[{name:"messageList",type:"Array",validator:function validator(e){return dt(e)?0!==e.length||(je.warn(po({api:"getMessageReadReceiptList",param:"messageList",desc:yo()})),!1):(je.warn(po({api:"getMessageReadReceiptList",param:"messageList",desc:vo()})),!1);}}],createTopicInCommunity:{groupID:Lo,topicName:Lo},deleteTopicFromCommunity:{groupID:Lo,topicIDList:{type:"Array",validator:function validator(e){return!e||!!dt(e)||(je.warn(po({api:"deleteTopicFromCommunity",param:"topicIDList",desc:vo()})),!1);}}},updateTopicProfile:{groupID:Lo,topicID:Lo},getTopicList:{groupID:Lo,topicIDList:{type:"Array",validator:function validator(e){return!e||!!dt(e)||(je.warn(po({api:"getTopicList",param:"topicIDList",desc:vo()})),!1);}}}},wo={login:"login",logout:"logout",on:"on",once:"once",off:"off",setLogLevel:"setLogLevel",registerPlugin:"registerPlugin",destroy:"destroy",createTextMessage:"createTextMessage",createTextAtMessage:"createTextAtMessage",createImageMessage:"createImageMessage",createAudioMessage:"createAudioMessage",createVideoMessage:"createVideoMessage",createCustomMessage:"createCustomMessage",createFaceMessage:"createFaceMessage",createFileMessage:"createFileMessage",createLocationMessage:"createLocationMessage",createMergerMessage:"createMergerMessage",downloadMergerMessage:"downloadMergerMessage",createForwardMessage:"createForwardMessage",sendMessage:"sendMessage",resendMessage:"resendMessage",revokeMessage:"revokeMessage",deleteMessage:"deleteMessage",modifyMessage:"modifyMessage",sendMessageReadReceipt:"sendMessageReadReceipt",getGroupMessageReadMemberList:"getGroupMessageReadMemberList",getMessageReadReceiptList:"getMessageReadReceiptList",setMessageExtensions:"setMessageExtensions",getMessageExtensions:"getMessageExtensions",deleteMessageExtensions:"deleteMessageExtensions",getMessageList:"getMessageList",findMessage:"findMessage",getMessageListHopping:"getMessageListHopping",setMessageRead:"setMessageRead",setAllMessageRead:"setAllMessageRead",getConversationList:"getConversationList",getConversationProfile:"getConversationProfile",deleteConversation:"deleteConversation",pinConversation:"pinConversation",getTotalUnreadMessageCount:"getTotalUnreadMessageCount",setConversationCustomData:"setConversationCustomData",markConversation:"markConversation",createConversationGroup:"createConversationGroup",getConversationGroupList:"getConversationGroupList",deleteConversationGroup:"deleteConversationGroup",renameConversationGroup:"renameConversationGroup",addConversationsToGroup:"addConversationsToGroup",deleteConversationsFromGroup:"deleteConversationsFromGroup",clearHistoryMessage:"clearHistoryMessage",getGroupList:"getGroupList",getGroupProfile:"getGroupProfile",createGroup:"createGroup",joinGroup:"joinGroup",updateGroupProfile:"updateGroupProfile",quitGroup:"quitGroup",dismissGroup:"dismissGroup",changeGroupOwner:"changeGroupOwner",searchGroupByID:"searchGroupByID",setMessageRemindType:"setMessageRemindType",getGroupApplicationList:"getGroupApplicationList",handleGroupApplication:"handleGroupApplication",initGroupAttributes:"initGroupAttributes",setGroupAttributes:"setGroupAttributes",deleteGroupAttributes:"deleteGroupAttributes",getGroupAttributes:"getGroupAttributes",getJoinedCommunityList:"getJoinedCommunityList",createTopicInCommunity:"createTopicInCommunity",deleteTopicFromCommunity:"deleteTopicFromCommunity",updateTopicProfile:"updateTopicProfile",getTopicList:"getTopicList",getGroupMemberProfile:"getGroupMemberProfile",getGroupMemberList:"getGroupMemberList",addGroupMember:"addGroupMember",deleteGroupMember:"deleteGroupMember",setGroupMemberNameCard:"setGroupMemberNameCard",setGroupMemberMuteTime:"setGroupMemberMuteTime",setGroupMemberRole:"setGroupMemberRole",setGroupMemberCustomField:"setGroupMemberCustomField",getGroupOnlineMemberCount:"getGroupOnlineMemberCount",markGroupMemberList:"markGroupMemberList",getMyProfile:"getMyProfile",getUserProfile:"getUserProfile",updateMyProfile:"updateMyProfile",setSelfStatus:"setSelfStatus",getUserStatus:"getUserStatus",subscribeUserStatus:"subscribeUserStatus",unsubscribeUserStatus:"unsubscribeUserStatus",getBlacklist:"getBlacklist",addToBlacklist:"addToBlacklist",removeFromBlacklist:"removeFromBlacklist",getFriendList:"getFriendList",addFriend:"addFriend",deleteFriend:"deleteFriend",checkFriend:"checkFriend",updateFriend:"updateFriend",getFriendProfile:"getFriendProfile",getFriendApplicationList:"getFriendApplicationList",refuseFriendApplication:"refuseFriendApplication",deleteFriendApplication:"deleteFriendApplication",acceptFriendApplication:"acceptFriendApplication",setFriendApplicationRead:"setFriendApplicationRead",getFriendGroupList:"getFriendGroupList",createFriendGroup:"createFriendGroup",renameFriendGroup:"renameFriendGroup",deleteFriendGroup:"deleteFriendGroup",addToFriendGroup:"addToFriendGroup",removeFromFriendGroup:"removeFromFriendGroup",callExperimentalAPI:"callExperimentalAPI"},Fo="sign",qo="message",Vo="messageExtension",xo="user",Bo="c2c",Ko="group",Ho="sns",Wo="groupMember",Yo="Topic",jo="conversation",$o="context",zo="storage",Jo="eventStat",Xo="netMonitor",Qo="bigDataChannel",Zo="upload",en="plugin",tn="syncUnreadMessage",on="session",nn="channel",an="message_loss_detection",sn="cloudControl",rn="workerTimer",cn="recoverMessage",un="qualityStat",ln="commercialConfig",dn="offlinePush",pn="profanityFilter",gn="transCmd",_n={NO_SDKAPPID:2e3,NO_ACCOUNT_TYPE:2001,NO_IDENTIFIER:2002,NO_USERSIG:2003,NO_TINYID:2022,NO_A2KEY:2023,USER_NOT_LOGGED_IN:2024,REPEAT_LOGIN:2025,COS_UNDETECTED:2040,COS_GET_SIG_FAIL:2041,MESSAGE_SEND_FAIL:2100,MESSAGE_SEND_FAIL_NOT_IN_AVCHATROOM:2101,MESSAGE_SEND_NEED_MESSAGE_INSTANCE:2105,MESSAGE_SEND_INVALID_CONVERSATION_TYPE:2106,MESSAGE_FILE_IS_EMPTY:2108,MESSAGE_ONPROGRESS_FUNCTION_ERROR:2109,MESSAGE_REVOKE_FAIL:2110,MESSAGE_DELETE_FAIL:2111,MESSAGE_UNREAD_ALL_FAIL:2112,READ_RECEIPT_MESSAGE_LIST_EMPTY:2114,MESSAGE_SEND_GROUP_WITH_TOPIC_FAIL:2115,CANNOT_DELETE_GROUP_SYSTEM_NOTICE:2116,MESSAGE_IMAGE_SELECT_FILE_FIRST:2251,MESSAGE_IMAGE_TYPES_LIMIT:2252,MESSAGE_IMAGE_SIZE_LIMIT:2253,MESSAGE_AUDIO_UPLOAD_FAIL:2300,MESSAGE_AUDIO_SIZE_LIMIT:2301,MESSAGE_VIDEO_UPLOAD_FAIL:2350,MESSAGE_VIDEO_SIZE_LIMIT:2351,MESSAGE_VIDEO_TYPES_LIMIT:2352,MESSAGE_FILE_UPLOAD_FAIL:2400,MESSAGE_FILE_SELECT_FILE_FIRST:2401,MESSAGE_FILE_SIZE_LIMIT:2402,MESSAGE_FILE_URL_IS_EMPTY:2403,MESSAGE_MERGER_TYPE_INVALID:2450,MESSAGE_MERGER_KEY_INVALID:2451,MESSAGE_MERGER_DOWNLOAD_FAIL:2452,MESSAGE_FORWARD_TYPE_INVALID:2453,MESSAGE_MODIFY_CONFLICT:2480,MESSAGE_MODIFY_DISABLED_IN_AVCHATROOM:2481,CONVERSATION_NOT_FOUND:2500,USER_OR_GROUP_NOT_FOUND:2501,CONVERSATION_UN_RECORDED_TYPE:2502,INVALID_CONVERSATION_ID:2503,ILLEGAL_GROUP_TYPE:2600,CANNOT_JOIN_WORK:2601,ILLEGAL_GROUP_ID:2602,CANNOT_FIND_GROUP:2603,CANNOT_CHANGE_OWNER_IN_AVCHATROOM:2620,CANNOT_CHANGE_OWNER_TO_SELF:2621,CANNOT_DISMISS_WORK:2622,MEMBER_NOT_IN_GROUP:2623,JOIN_GROUP_FAIL:2660,CANNOT_ADD_MEMBER_IN_AVCHATROOM:2661,CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN:2662,NOT_OWNER:2681,CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM:2682,INVALID_MEMBER_ROLE:2683,CANNOT_SET_SELF_MEMBER_ROLE:2684,CANNOT_MUTE_SELF:2685,BAN_DURATION_INVALID:2686,NOT_MY_FRIEND:2700,ALREADY_MY_FRIEND:2701,FRIEND_GROUP_EXISTED:2710,FRIEND_GROUP_NOT_EXIST:2711,FRIEND_APPLICATION_NOT_EXIST:2716,UPDATE_PROFILE_INVALID_PARAM:2721,UPDATE_PROFILE_NO_KEY:2722,CANNOT_ADD_SELF_TO_BLACKLIST:2742,NETWORK_ERROR:2800,NETWORK_TIMEOUT:2801,NO_NETWORK:2805,UNCAUGHT_ERROR:2903,INVALID_OPERATION:2905,OVER_FREQUENCY_LIMIT:2996,CANNOT_FIND_PROTOCOL:2997,CANNOT_FIND_MODULE:2998,SDK_IS_NOT_READY:2999,LOGGING_IN:3e3,LOGIN_FAILED:3001,KICKED_OUT_MULT_DEVICE:3002,KICKED_OUT_MULT_ACCOUNT:3003,KICKED_OUT_USERSIG_EXPIRED:3004,LOGGED_OUT:3005,KICKED_OUT_REST_API:3006,ILLEGAL_TOPIC_ID:3021,CANNOT_USE_COMMERCIAL_ABILITY:3122,PROFANITY_FOUND:3123,MESSAGE_A2KEY_EXPIRED:20002,ACCOUNT_A2KEY_EXPIRED:70001,HELLO_ANSWER_KICKED_OUT:1002,OPEN_SERVICE_OVERLOAD_ERROR:60022},hn={2e3:"无 SDKAppID",2022:"无 tinyID",2023:"无 a2key",2024:"用户未登录",2025:"重复登录",2040:"未检测到上传插件",2041:"获取 COS 预签名 URL 失败",2100:"消息发送失败",2101:"未加入直播群不能向直播群发送消息",2105:"需要 Message 的实例",2106:'Message.conversationType 只能为 "C2C" 或 "GROUP"',2108:"无法发送空文件",2109:"回调函数运行时遇到错误，请检查接入侧代码",2110:"消息撤回失败",2111:"消息删除失败",2112:"设置所有未读消息为已读处理失败",2114:"消息列表中没有需要发送已读回执的消息",2115:"不能在支持话题的群组中发消息，请检查群组 isSupportTopic 属性",2116:"不支持删除群系统通知",2251:"请先选择一张图片",2252:"只允许上传 jpg png jpeg gif bmp image webp 格式的图片",2253:"图片大小超过20M，无法发送",2300:"语音上传失败",2301:"语音大小超过20M，无法发送",2350:"视频上传失败",2351:"视频大小超过100M，无法发送",2352:"只允许上传 mp4/mov 格式的视频",2400:"文件上传失败",2401:"请先选择一个文件",2402:"文件大小超过100M，无法发送",2403:"缺少必要的参数文件 URL",2450:"非合并消息",2451:"合并消息的 messageKey 无效",2452:"下载合并消息失败",2453:"选择的消息类型（如群提示消息）不可以转发",2480:"修改消息时发生冲突",2481:"直播群不支持修改消息",2500:"没有找到相应的会话，请检查传入参数",2501:"没有找到相应的用户或群主，请检查传入参数",2502:"未记录的会话类型",2503:"无效的会话 ID",2600:"非法的群类型，请检查传入参数",2601:"不能加入 Work 类型的群组",2602:"群组 ID 非法",2603:"找不到指定 ID 的群组",2620:"AVChatRoom 类型的群组不能转让群主",2621:"不能把群主转让给自己",2622:"不能解散 Work 类型的群组",2623:"用户不在该群组内",2660:"加群失败，请检查传入参数或重试",2661:"AVChatRoom 类型的群不支持邀请群成员",2662:"非 AVChatRoom 类型的群组不允许匿名加群，请先登录后再加群",2681:"你不是群主，只有群主才有权限操作",2682:"不能在 Work / AVChatRoom 类型的群中设置群成员身份",2683:"不合法的群成员身份，请检查传入参数",2684:"不能设置自己的群成员身份，请检查传入参数",2685:"不能将自己禁言，请检查传入参数",2686:"封禁时长无效，必须传入 duration 参数且要大于 0",2700:"指定的 userID 不是我的好友效",2701:"已经是好友关系",2710:"好友分组已经存在",2711:"好友分组不存在",2716:"好友申请不存在",2721:"传入 updateMyProfile 接口的参数无效",2722:"updateMyProfile 无标配资料字段或自定义资料字段",2742:"不能拉黑自己",2800:"网络错误",2801:"请求超时",2805:"未连接到网络",2903:"未经明确定义的错误",2905:"无效操作，如调用了未定义或者未实现的方法等",2996:"超出 SDK 频率控制",2997:"无法找到协议",2998:"无法找到模块，关系链使用指引：https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-03-sns.html",2999:"接口调用时机不合理，请等待 SDK 处于 ready 状态后再调用（监听 TIM.EVENT.SDK_READY 事件）",3e3:"用户正在登录中导致 sdk not ready",3001:"用户登录失败导致 sdk not ready",3002:"用户多终端登录被踢出导致 sdk not ready",3003:"用户多实例登录被踢出导致 sdk not ready",3004:"用户 userSig 过期被踢出导致 sdk not ready",3005:"用户已登出导致 sdk not ready",3006:"用户被 REST API 踢出导致 sdk not ready",3021:"非法的 topicID",3122:"套餐包不支持该接口的使用，请升级到旗舰版套餐",3123:"文本包含本地审核拦截词",60022:"后台服务正忙，请稍后再试"},fn={2e3:"No SDKAppID",2022:"No tinyID",2023:"No a2key",2024:"The user has not logged in",2025:"Repeated login",2040:"No upload plugin is detected",2041:"Failed to get cos presig url",2100:"Failed to send the message",2101:"Failed to send the message to an audio-video group due to not joining it",2105:"A message instance is required",2106:'Message.conversationType can only be "C2C" or "GROUP"',2108:"An empty file cannot be sent",2109:"An error occurred while running the callback function. Please check the code on the access side",2110:"Failed to recall the message",2111:"Failed to delete the message",2112:"Failed to set all messages as read",2114:"No messages in the message list that require a read receipt",2115:"Message cannot be sent to Community that supports Topic, please check the isSupportTopic property of Community",2116:"Group system notification cannot be deleted",2251:"Please select an image first",2252:"Only JPG/PNG/JPEG/GIF images can be uploaded",2253:"Unable to send the image as it exceeds 20 MB",2300:"Failed to upload the audio",2301:"Unable to send the audio as it exceeds 20 MB",2350:"Failed to upload the video",2351:"Unable to send the video as it exceeds 100 MB",2352:"Only MP4 videos can be uploaded",2400:"File upload failed",2401:"Please select a file first",2402:"Unable to send the file as it exceeds 100 MB",2403:"The required parameter file URL is missing",2450:"Non-combined message",2451:"Invalid messageKey of the combined message",2452:"Failed to download the combined message",2453:"The selected message type (such as group notification) does not support forwarding",2480:"Conflict occurred while modifying message",2481:"Audio-video group does not support modifying messages",2500:"The corresponding conversation is not found. Please check the input parameters",2501:"The corresponding user or group owner is not found. Please check the input parameters",2502:"Unrecorded conversation type",2503:"Invalid conversationID",2600:"Invalid group type. Please check the input parameters",2601:"Unable to join a work group",2602:"Invalid groupID",2603:"The group with the given id could not be found",2620:"The group owner of an audio-video group cannot be changed",2621:"You cannot change the group owner to yourself",2622:"A work group cannot be disbanded",2623:"The user is not in the group",2660:"Failed to join the group. Please check the input parameters and try again",2661:"Audio-video groups do not support inviting group members",2662:"Non Audio-video groups do not allow anonymous joining. Please log in before you join the group",2681:"You are not the group owner. Only the group owner has the permission to perform the operation",2682:"You cannot set the group member role in a Work or Audio-video group",2683:"Invalid group member role. Please check the input parameters",2684:"You cannot set the group member role for yourself. Please check the input parameters",2685:"You cannot mute yourself. Please check the input parameters",2686:"Ban duration must be greater than 0",2700:"The specified userID is not my friend",2701:"The specified userID is my friend already",2710:"The Friend group already exists",2711:"The Friend group does not exist",2716:"The Friend application does not exist",2721:"Invalid parameter passed in to the updateMyProfile API",2722:"updateMyProfile does not contain standard or custom profile fields",2742:"You cannot blacklist yourself",2800:"Network error",2801:"Request timeout",2805:"Network disconnected",2903:"Undefined error",2905:"Invalid operation, such as calling an undefined or unimplemented method",2996:"Frequency control limit exceeded",2997:"Protocol not found",2998:"Module not found",2999:"The API call timing is inappropriate. Call the API until the SDK is ready (listening for the TIM.EVENT.SDK_READY event)",3e3:"SDK not ready because the user is Logging in",3001:"SDK not ready because the user login failed",3002:"SDK not ready because the user is kicked offline(the same account logs in from multiple pages on the web client)",3003:"SDK not ready because the user is kicked offline(the same account logs in from multiple terminals)",3004:"SDK not ready because the user is kicked offline(the signature expires)",3005:"SDK not ready because the user is logged out ",3006:"SDK not ready because the user is kicked offline by REST API",3021:"Invalid topicID",3122:"Please upgrade to the ultimate version",3123:"Blocked due to filtering profanity",60022:"Service is busy, please try again later"},mn=function(){function e(t){n(this,e),this._moduleManager=t,this._className="";}return s(e,[{key:"isLoggedIn",value:function value(){return this._moduleManager.getModule($o).isLoggedIn();}},{key:"isOversea",value:function value(){return this._moduleManager.getModule($o).isOversea();}},{key:"isPrivateNetWork",value:function value(){return this._moduleManager.getModule($o).isPrivateNetWork();}},{key:"getMyUserID",value:function value(){return this._moduleManager.getModule($o).getUserID();}},{key:"getMyTinyID",value:function value(){return this._moduleManager.getModule($o).getTinyID();}},{key:"isIntl",value:function value(){return this._moduleManager.getModule($o).isIntl();}},{key:"isDevMode",value:function value(){return this._moduleManager.getModule($o).isDevMode();}},{key:"getModule",value:function value(e){return this._moduleManager.getModule(e);}},{key:"getPlatform",value:function value(){return _e;}},{key:"getNetworkType",value:function value(){return this._moduleManager.getModule(Xo).getNetworkType();}},{key:"probeNetwork",value:function value(e){return this._moduleManager.getModule(Xo).probe(e);}},{key:"getCloudConfig",value:function value(e){return this._moduleManager.getModule(sn).getCloudConfig(e);}},{key:"emitOuterEvent",value:function value(e,t){this._moduleManager.getOuterEmitterInstance().emit(e,t);}},{key:"emitInnerEvent",value:function value(e,t){this._moduleManager.getInnerEmitterInstance().emit(e,t);}},{key:"getInnerEmitterInstance",value:function value(){return this._moduleManager.getInnerEmitterInstance();}},{key:"generateTjgID",value:function value(e){return this._moduleManager.getModule($o).getTinyID()+"-"+e.random;}},{key:"filterModifiedMessage",value:function value(e){if(!no(e)){var t=e.filter(function(e){return!0===e.isModified;});t.length>0&&this.emitOuterEvent(D.MESSAGE_MODIFIED,t);}}},{key:"filterUnmodifiedMessage",value:function value(e){return no(e)?[]:e.filter(function(e){return!1===e.isModified;});}},{key:"request",value:function value(e){return this._moduleManager.getModule(on).request(e);}},{key:"canIUse",value:function value(e){return this._moduleManager.getModule(ln).canIUse(e);}},{key:"getErrorMessage",value:function value(e){return this.isIntl()?fn[e]:hn[e];}}]),e;}(),Mn="wslogin",vn="wslogout",yn="wshello",In="KickOther",Tn="getmsg",Cn="authkey",En="sendmsg",Sn="send_group_msg",Dn="portrait_get_all",Nn="portrait_set",An="black_list_get",kn="black_list_add",Rn="black_list_delete",On="msgwithdraw",Ln="msgreaded",Gn="set_c2c_peer_mute_notifications",Pn="get_c2c_peer_mute_notifications",Un="getroammsg",bn="get_peer_read_time",wn="delete_c2c_msg_ramble",Fn="modify_c2c_msg",qn="set_key_values",Vn="get_key_values",xn="page_get",Bn="get",Kn="delete",Hn="clear_msg",Wn="top",Yn="deletemsg",jn="set_conv_custom_data",$n="mark_contact",zn="create_contact_group",Jn="del_contact_group",Xn="update_contact_group",Qn="add_conv_to_group",Zn="del_conv_from_group",ea="get_contact_group",ta="get_joined_group_list",oa="get_group_self_member_info",na="create_group",aa="destroy_group",sa="modify_group_base_info",ra="apply_join_group",ia="apply_join_group_noauth",ca="quit_group",ua="get_group_public_info",la="change_group_owner",da="handle_apply_join_group",pa="handle_invite_join_group",ga="group_msg_recall",_a="msg_read_report",ha="read_all_unread_msg",fa="group_msg_get",ma="get_group_msg_receipt",Ma="group_msg_receipt",va="c2c_msg_read_receipt",ya="get_group_msg_receipt_detail",Ia="get_pendency",Ta="deletemsg",Ca="get_msg",Ea="get_msg_noauth",Sa="get_online_member_num",Da="delete_group_ramble_msg_by_seq",Na="modify_group_msg",Aa="set_group_attr",ka="modify_group_attr",Ra="delete_group_attr",Oa="clear_group_attr",La="get_group_attr",Ga="group_set_key_values",Pa="group_get_key_values",Ua="get_group_member_info",ba="get_members",wa="get_specified_group_member_info",Fa="add_group_member",qa="delete_group_member",Va="ban_group_member",xa="modify_group_member_info",Ba="modify_user_info",Ka="cos",Ha="pre_sig",Wa="video_cover",Ya="tim_web_report_v2",ja="alive",$a="msg_push",za="multi_msg_push_ws",Ja="ws_msg_push_ack",Xa="stat_forceoffline",Qa="save_relay_json_msg",Za="get_relay_json_msg",es="fetch_config",ts="push_configv2",os="fetch_imsdk_purchase_bitsv2",ns="push_imsdk_purchase_bitsv2",as="notify2",ss="create_topic",rs="destroy_topic",is="modify_topic",cs="get_topic",us="ws_set_custom_status",ls="ws_get_user_status",ds="ws_status_subscribe",ps="ws_status_unsubscribe",gs="ws_stat_background",_s="ws_stat_foreground",hs="ws_stat_settoken",fs="get_local_words",ms="networkRTT",Ms="messageE2EDelay",vs="sendMessageC2C",ys="sendMessageGroup",Is="sendMessageGroupAV",Ts="sendMessageRichMedia",Cs="cosUpload",Es="messageReceivedGroup",Ss="messageReceivedGroupAVPush",Ds="messageReceivedGroupAVPull",Ns=(r(ro={},ms,2),r(ro,Ms,3),r(ro,vs,4),r(ro,ys,5),r(ro,Is,6),r(ro,Ts,7),r(ro,Es,8),r(ro,Ss,9),r(ro,Ds,10),r(ro,Cs,11),ro),As={info:4,warning:5,error:6},ks={wifi:1,"2g":2,"3g":3,"4g":4,"5g":5,unknown:6,none:7,online:8},Rs={login:4},Os=function(){function e(t){n(this,e),this.eventType=Rs[t]||0,this.timestamp=0,this.networkType=8,this.code=0,this.message="",this.moreMessage="",this.extension=t,this.costTime=0,this.duplicate=!1,this.level=4,this.uiPlatform=void 0,this._sentFlag=!1,this._startts=xe();}return s(e,[{key:"updateTimeStamp",value:function value(){this.timestamp=xe();}},{key:"start",value:function value(e){return this._startts=e,this;}},{key:"end",value:function value(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this._sentFlag){var o=xe();0===this.costTime&&(this.costTime=o-this._startts),this.setMoreMessage("startts:".concat(this._startts," endts:").concat(o)),t?(this._sentFlag=!0,this._eventStatModule&&this._eventStatModule.pushIn(this)):setTimeout(function(){e._sentFlag=!0,e._eventStatModule&&e._eventStatModule.pushIn(e);},0);}}},{key:"setError",value:function value(e,t,o){if(!(e instanceof Error))return je.warn("SSOLogData.setError value not instanceof Error, please check!"),this;if(this._sentFlag)return this;if(this.setNetworkType(o),t)e.code&&this.setCode(e.code),e.message&&this.setMoreMessage(e.message);else{var n=_n.NO_NETWORK;this.setCode(n),this.setMoreMessage(fn[n]);}return this.setLevel("error"),this;}},{key:"setCode",value:function value(e){return pt(e)||this._sentFlag||("ECONNABORTED"===e&&(this.code=103),it(e)?this.code=e:je.warn("SSOLogData.setCode value not a number, please check!",e,o(e))),this;}},{key:"setMessage",value:function value(e){return pt(e)||this._sentFlag||(it(e)&&(this.message=e.toString()),ct(e)&&(this.message=e)),this;}},{key:"setCostTime",value:function value(e){return this.costTime=e,this;}},{key:"setLevel",value:function value(e){return pt(e)||this._sentFlag||(this.level=As[e]),this;}},{key:"setMoreMessage",value:function value(e){return no(this.moreMessage)?this.moreMessage="".concat(e):this.moreMessage+=" ".concat(e),this;}},{key:"setNetworkType",value:function value(e){if(pt(e))je.warn("SSOLogData.setNetworkType value is undefined, please check!");else{var t=ks[e.toLowerCase()];pt(t)||(this.networkType=t);}return this;}},{key:"getStartTs",value:function value(){return this._startts;}},{key:"setUIPlatform",value:function value(e){this.uiPlatform=e;}}],[{key:"bindEventStatModule",value:function value(t){e.prototype._eventStatModule=t;}}]),e;}(),Ls={SDK_CONSTRUCT:"sdkConstruct",SDK_READY:"sdkReady",LOGIN:"login",LOGOUT:"logout",KICKED_OUT:"kickedOut",REGISTER_PLUGIN:"registerPlugin",KICK_OTHER:"kickOther",WS_CONNECT:"wsConnect",WS_ON_OPEN:"wsOnOpen",WS_ON_CLOSE:"wsOnClose",WS_ON_ERROR:"wsOnError",NETWORK_CHANGE:"networkChange",GET_COS_AUTH_KEY:"getCosAuthKey",GET_COS_PRE_SIG_URL:"getCosPreSigUrl",GET_SNAPSHOT_INFO:"getSnapshotInfo",UPLOAD:"upload",SEND_MESSAGE:"sendMessage",SEND_MESSAGE_WITH_RECEIPT:"sendMessageWithReceipt",SEND_COMBO_MESSAGE:"sendComboMessage",GET_C2C_ROAMING_MESSAGES:"getC2CRoamingMessages",GET_GROUP_ROAMING_MESSAGES:"getGroupRoamingMessages",GET_C2C_ROAMING_MESSAGES_HOPPING:"getC2CRoamingMessagesHopping",GET_GROUP_ROAMING_MESSAGES_HOPPING:"getGroupRoamingMessagesHopping",GET_READ_RECEIPT:"getReadReceipt",GET_READ_RECEIPT_DETAIL:"getReadReceiptDetail",SEND_READ_RECEIPT:"sendReadReceipt",SEND_C2C_READ_RECEIPT:"sendC2CReadReceipt",REVOKE_MESSAGE:"revokeMessage",DELETE_MESSAGE:"deleteMessage",EDIT_MESSAGE:"modifyMessage",SET_C2C_MESSAGE_READ:"setC2CMessageRead",SET_GROUP_MESSAGE_READ:"setGroupMessageRead",EMPTY_MESSAGE_BODY:"emptyMessageBody",GET_PEER_READ_TIME:"getPeerReadTime",UPLOAD_MERGER_MESSAGE:"uploadMergerMessage",DOWNLOAD_MERGER_MESSAGE:"downloadMergerMessage",JSON_PARSE_ERROR:"jsonParseError",MESSAGE_E2E_DELAY_EXCEPTION:"messageE2EDelayException",SET_MESSAGE_EXTENSIONS:"setMessageExtensions",DELETE_MESSAGE_EXTENSIONS:"deleteMessageExtensions",GET_MESSAGE_EXTENSIONS:"getMessageExtensions",PROFANITY_FILTER:"profanityFilter",GET_CONVERSATION_LIST:"getConversationList",GET_CONVERSATION_PROFILE:"getConversationProfile",DELETE_CONVERSATION:"deleteConversation",CLEAR_HISTORY_MESSAGE:"clearHistoryMessage",PIN_CONVERSATION:"pinConversation",GET_CONVERSATION_LIST_IN_STORAGE:"getConversationListInStorage",SYNC_CONVERSATION_LIST:"syncConversationList",SET_ALL_MESSAGE_READ:"setAllMessageRead",SET_CONV_CUSTOM_DATA:"setConvCustomData",MARK_CONVERSATION:"markConversation",GET_REMOTE_CONV_GROUP_LIST:"getRemoteConvGroupList",CREATE_CONV_GROUP:"createConvGroup",DELETE_CONV_GROUP:"deleteConvGroup",RENAME_CONV_GROUP:"renameConvGroup",ADD_CONVS_TO_GROUP:"addConvsToGroup",DELETE_CONVS_FROM_GROUP:"deleteConvsFromGroup",CREATE_GROUP:"createGroup",APPLY_JOIN_GROUP:"applyJoinGroup",QUIT_GROUP:"quitGroup",SEARCH_GROUP_BY_ID:"searchGroupByID",CHANGE_GROUP_OWNER:"changeGroupOwner",HANDLE_GROUP_APPLICATION:"handleGroupApplication",HANDLE_GROUP_INVITATION:"handleGroupInvitation",SET_MESSAGE_REMIND_TYPE:"setMessageRemindType",DISMISS_GROUP:"dismissGroup",UPDATE_GROUP_PROFILE:"updateGroupProfile",GET_GROUP_LIST:"getGroupList",GET_GROUP_PROFILE:"getGroupProfile",GET_GROUP_LIST_IN_STORAGE:"getGroupListInStorage",GET_GROUP_LAST_SEQUENCE:"getGroupLastSequence",RECOVER_MESSAGE:"recoverMessage",PAGING_GET_GROUP_LIST:"pagingGetGroupList",PAGING_GET_GROUP_LIST_WITH_TOPIC:"pagingGetGroupListWithTopic",GET_GROUP_SIMPLIFIED_INFO:"getGroupSimplifiedInfo",JOIN_WITHOUT_AUTH:"joinWithoutAuth",INIT_GROUP_ATTRIBUTES:"initGroupAttributes",SET_GROUP_ATTRIBUTES:"setGroupAttributes",DELETE_GROUP_ATTRIBUTES:"deleteGroupAttributes",GET_GROUP_ATTRIBUTES:"getGroupAttributes",GET_GROUP_MEMBER_LIST:"getGroupMemberList",GET_AVCHATROOM_MEMBER_LIST:"getAVChatRoomMemberList",GET_GROUP_MEMBER_PROFILE:"getGroupMemberProfile",ADD_GROUP_MEMBER:"addGroupMember",DELETE_GROUP_MEMBER:"deleteGroupMember",BAN_AVCHATROOM_MEMBER:"banAVChatRoomMember",SET_GROUP_MEMBER_MUTE_TIME:"setGroupMemberMuteTime",SET_GROUP_MEMBER_NAME_CARD:"setGroupMemberNameCard",SET_GROUP_MEMBER_ROLE:"setGroupMemberRole",SET_GROUP_MEMBER_CUSTOM_FIELD:"setGroupMemberCustomField",GET_GROUP_ONLINE_MEMBER_COUNT:"getGroupOnlineMemberCount",MARK_GROUP_MEMBER_LIST:"markGroupMemberList",SYNC_MESSAGE:"syncMessage",LONG_POLLING_AV_ERROR:"longPollingAVError",MESSAGE_LOSS:"messageLoss",MESSAGE_STACKED:"messageStacked",GET_USER_PROFILE:"getUserProfile",UPDATE_MY_PROFILE:"updateMyProfile",GET_BLACKLIST:"getBlacklist",ADD_TO_BLACKLIST:"addToBlacklist",REMOVE_FROM_BLACKLIST:"removeFromBlacklist",SET_SELF_STATUS:"setSelfStatus",GET_USER_STATUS:"getUserStatus",SUBSCRIBE_USER_STATUS:"subscribeUserStatus",UNSUBSCRIBE_USER_STATUS:"unsubscribeUserStatus",ADD_FRIEND:"addFriend",CHECK_FRIEND:"checkFriend",DELETE_FRIEND:"removeFromFriendList",GET_FRIEND_PROFILE:"getFriendProfile",GET_FRIEND_LIST:"getFriendList",UPDATE_FRIEND:"updateFriend",GET_FRIEND_APPLICATION_LIST:"getFriendApplicationList",DELETE_FRIEND_APPLICATION:"deleteFriendApplication",ACCEPT_FRIEND_APPLICATION:"acceptFriendApplication",REFUSE_FRIEND_APPLICATION:"refuseFriendApplication",SET_FRIEND_APPLICATION_READ:"setFriendApplicationRead",CREATE_FRIEND_GROUP:"createFriendGroup",DELETE_FRIEND_GROUP:"deleteFriendGroup",RENAME_FRIEND_GROUP:"renameFriendGroup",ADD_TO_FRIEND_GROUP:"addToFriendGroup",REMOVE_FROM_FRIEND_GROUP:"removeFromFriendGroup",GET_FRIEND_GROUP_LIST:"getFriendGroupList",CREATE_TOPIC:"createTopic",DELETE_TOPIC:"deleteTopic",UPDATE_TOPIC_PROFILE:"updateTopicProfile",GET_TOPIC_LIST:"getTopicList",RELAY_GET_TOPIC_LIST:"relayGetTopicList",GET_TOPIC_LAST_SEQUENCE:"getTopicLastSequence",GET_DEVICE_TOKEN:"getDeviceToken",GET_DEVICE_TOKEN_RES:"getDeviceTokenRes",OFFLINE_PUSH_SET_TOKEN:"offlinePushSetToken",SET_APP_SHOW_LISTENER:"setAppShowListener",SET_APP_SHOW_LISTENER_RES:"setAppShowListenerRes",ON_FOREGROUND:"onForeground",ON_BACKGROUND:"onBackground",MP_HIDE_TO_SHOW:"mpHideToShow",CALLBACK_FUNCTION_ERROR:"callbackFunctionError",FETCH_CLOUD_CONTROL_CONFIG:"fetchCloudControlConfig",PUSHED_CLOUD_CONTROL_CONFIG:"pushedCloudControlConfig",FETCH_COMMERCIAL_CONFIG:"fetchCommercialConfig",PUSHED_COMMERCIAL_CONFIG:"pushedCommercialConfig",ERROR:"error",LAST_MESSAGE_NOT_EXIST:"lastMessageNotExist"},Gs=function(){function e(t){n(this,e),this.type=N.MSG_TEXT,this.content={text:t.text||""};}return s(e,[{key:"setText",value:function value(e){this.content.text=e;}},{key:"sendable",value:function value(){return 0!==this.content.text.length;}}]),e;}(),Ps=function(){function e(t){n(this,e),this._imageMemoryURL="",de?this.createImageDataASURLInWXMiniApp(t.file):this.createImageDataASURLInWeb(t.file),this._initImageInfoModel(),this.type=N.MSG_IMAGE,this._percent=0,this.content={imageFormat:t.imageFormat||$e.UNKNOWN,uuid:t.uuid,imageInfoArray:[]},this.initImageInfoArray(t.imageInfoArray),this._defaultImage="http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg",this._autoFixUrl();}return s(e,[{key:"_initImageInfoModel",value:function value(){var e=this;this._ImageInfoModel=function(t){this.instanceID=Ct(9999999),this.sizeType=t.type||0,this.type=0,this.size=t.size||0,this.width=t.width||0,this.height=t.height||0,this.imageUrl=t.url||"",this.url=t.url||e._imageMemoryURL||e._defaultImage;},this._ImageInfoModel.prototype={setSizeType:function setSizeType(e){this.sizeType=e;},setType:function setType(e){this.type=e;},setImageUrl:function setImageUrl(e){e&&(this.imageUrl=e);},getImageUrl:function getImageUrl(){return this.imageUrl;}};}},{key:"initImageInfoArray",value:function value(e){for(var t=0,o=null,n=null;t<=2;){n=pt(e)||pt(e[t])?{type:0,size:0,width:0,height:0,url:""}:e[t],(o=new this._ImageInfoModel(n)).setSizeType(t+1),o.setType(t),this.addImageInfo(o),t++;}this.updateAccessSideImageInfoArray();}},{key:"updateImageInfoArray",value:function value(e){for(var t,o=this.content.imageInfoArray.length,n=0;n<o;n++){t=this.content.imageInfoArray[n],e[n].size&&(t.size=e[n].size),e[n].url&&t.setImageUrl(e[n].url),e[n].width&&(t.width=e[n].width),e[n].height&&(t.height=e[n].height);}}},{key:"_autoFixUrl",value:function value(){for(var e=this.content.imageInfoArray.length,t="",o="",n=["http","https"],a=null,s=0;s<e;s++){this.content.imageInfoArray[s].url&&""!==(a=this.content.imageInfoArray[s]).imageUrl&&(o=a.imageUrl.slice(0,a.imageUrl.indexOf("://")+1),t=a.imageUrl.slice(a.imageUrl.indexOf("://")+1),n.indexOf(o)<0&&(o="https:"),this.content.imageInfoArray[s].setImageUrl([o,t].join("")));}}},{key:"updatePercent",value:function value(e){this._percent=e,this._percent>1&&(this._percent=1);}},{key:"updateImageFormat",value:function value(e){this.content.imageFormat=$e[e.toUpperCase()]||$e.UNKNOWN;}},{key:"createImageDataASURLInWeb",value:function value(e){void 0!==e&&e.files.length>0&&(this._imageMemoryURL=window.URL.createObjectURL(e.files[0]));}},{key:"createImageDataASURLInWXMiniApp",value:function value(e){e&&e.url&&(this._imageMemoryURL=e.url);}},{key:"replaceImageInfo",value:function value(e,t){this.content.imageInfoArray[t]instanceof this._ImageInfoModel||(this.content.imageInfoArray[t]=e);}},{key:"addImageInfo",value:function value(e){this.content.imageInfoArray.length>=3||this.content.imageInfoArray.push(e);}},{key:"updateAccessSideImageInfoArray",value:function value(){var e=this.content.imageInfoArray,t=e[0],o=t.width,n=void 0===o?0:o,a=t.height,s=void 0===a?0:a;0!==n&&0!==s&&(Ht(e),Object.assign(e[2],Kt({originWidth:n,originHeight:s,min:720})));}},{key:"sendable",value:function value(){return 0!==this.content.imageInfoArray.length&&""!==this.content.imageInfoArray[0].imageUrl&&0!==this.content.imageInfoArray[0].size;}}]),e;}(),Us=function(){function e(t){n(this,e),this.type=N.MSG_FACE,this.content=t||null;}return s(e,[{key:"sendable",value:function value(){return null!==this.content;}}]),e;}(),bs=function(){function e(t){n(this,e),this.type=N.MSG_AUDIO,this._percent=0,this.content={downloadFlag:2,second:t.second,size:t.size,url:t.url,remoteAudioUrl:t.url||"",uuid:t.uuid};}return s(e,[{key:"updatePercent",value:function value(e){this._percent=e,this._percent>1&&(this._percent=1);}},{key:"updateAudioUrl",value:function value(e){this.content.remoteAudioUrl=e;}},{key:"sendable",value:function value(){return""!==this.content.remoteAudioUrl;}}]),e;}(),ws={from:!0,groupID:!0,groupName:!0,to:!0},Fs=function(){function e(t){n(this,e),this.type=N.MSG_GRP_TIP,this.content={},this._initContent(t);}return s(e,[{key:"_initContent",value:function value(e){var t=this;Object.keys(e).forEach(function(o){switch(o){case"remarkInfo":break;case"groupProfile":t.content.groupProfile={},t._initGroupProfile(e[o]);break;case"operatorInfo":break;case"memberInfoList":case"msgMemberInfo":t._updateMemberList(e[o]);break;case"memberExtraInfo":case"onlineMemberInfo":break;case"memberNum":t.content[o]=e[o],t.content.memberCount=e[o];break;case"newGroupProfile":t.content.newGroupProfile={},t._initNewGroupProfile(e[o]);break;default:t.content[o]=e[o];}}),this.content.userIDList||(this.content.userIDList=[this.content.operatorID]);}},{key:"_initGroupProfile",value:function value(e){for(var t=Object.keys(e),o=0;o<t.length;o++){var n=t[o];ws[n]&&(this.content.groupProfile[n]=e[n]);}}},{key:"_updateMemberList",value:function value(e){no(this.content.memberList)?this.content.memberList=e:this.content.memberList.forEach(function(t){e.forEach(function(e){t.userID===e.userID&&Object.assign(t,e);});});}},{key:"_initNewGroupProfile",value:function value(e){for(var t=Object.keys(e),o=0;o<t.length;o++){var n=t[o];"muteAllMembers"!==n?this.content.newGroupProfile[n]=e[n]:this.content.newGroupProfile[n]=1===e[n];}}}]),e;}(),qs={from:!0,groupID:!0,groupName:!0,to:!0},Vs=function(){function e(t){n(this,e),this.type=N.MSG_GRP_SYS_NOTICE,this.content={},this._initContent(t);}return s(e,[{key:"_initContent",value:function value(e){var t=this;Object.keys(e).forEach(function(o){switch(o){case"memberInfoList":break;case"remarkInfo":t.content.handleMessage=e[o];break;case"groupProfile":t.content.groupProfile={},t._initGroupProfile(e[o]);break;default:t.content[o]=e[o];}});}},{key:"_initGroupProfile",value:function value(e){for(var t=Object.keys(e),o=0;o<t.length;o++){var n=t[o];qs[n]&&("groupName"===n?this.content.groupProfile.name=e[n]:this.content.groupProfile[n]=e[n]);}}}]),e;}(),xs=function(){function e(t){n(this,e),this.type=N.MSG_FILE,this._percent=0;var o=this._getFileInfo(t);this.content={downloadFlag:2,fileUrl:t.url||"",uuid:t.uuid,fileName:o.name||"",fileSize:o.size||0};}return s(e,[{key:"_getFileInfo",value:function value(e){if(!pt(e.fileName)&&!pt(e.fileSize))return{size:e.fileSize,name:e.fileName};var t=e.file.files[0];if(ue){if(t.path&&-1!==t.path.indexOf(".")){var o=t.path.slice(t.path.lastIndexOf(".")+1).toLowerCase();t.type=o,t.name||(t.name="".concat(Ct(999999),".").concat(o));}t.name||(t.type="",t.name=t.path.slice(t.path.lastIndexOf("/")+1).toLowerCase()),t.suffix&&(t.type=t.suffix),t.url||(t.url=t.path);}return{size:t.size,name:t.name};}},{key:"updatePercent",value:function value(e){this._percent=e,this._percent>1&&(this._percent=1);}},{key:"updateFileUrl",value:function value(e){this.content.fileUrl=e;}},{key:"sendable",value:function value(){return""!==this.content.fileUrl&&""!==this.content.fileName&&0!==this.content.fileSize;}}]),e;}(),Bs=function(){function e(t){n(this,e),this.type=N.MSG_CUSTOM,this.content={data:t.data||"",description:t.description||"",extension:t.extension||""};}return s(e,[{key:"setData",value:function value(e){return this.content.data=e,this;}},{key:"setDescription",value:function value(e){return this.content.description=e,this;}},{key:"setExtension",value:function value(e){return this.content.extension=e,this;}},{key:"sendable",value:function value(){return 0!==this.content.data.length||0!==this.content.description.length||0!==this.content.extension.length;}}]),e;}(),Ks=function(){function e(t){n(this,e),this.type=N.MSG_VIDEO,this._percent=0,this.content={remoteVideoUrl:t.remoteVideoUrl||t.videoUrl||"",videoFormat:t.videoFormat,videoSecond:parseInt(t.videoSecond,10),videoSize:t.videoSize,videoUrl:t.videoUrl,videoDownloadFlag:2,videoUUID:t.videoUUID,thumbUUID:t.thumbUUID,thumbFormat:t.thumbFormat,thumbWidth:t.thumbWidth,snapshotWidth:t.thumbWidth,thumbHeight:t.thumbHeight,snapshotHeight:t.thumbHeight,thumbSize:t.thumbSize,snapshotSize:t.thumbSize,thumbDownloadFlag:2,thumbUrl:t.thumbUrl,snapshotUrl:t.thumbUrl};}return s(e,[{key:"updatePercent",value:function value(e){this._percent=e,this._percent>1&&(this._percent=1);}},{key:"updateVideoUrl",value:function value(e){e&&(this.content.remoteVideoUrl=e);}},{key:"updateSnapshotInfo",value:function value(e){var t=e.snapshotUrl,o=e.snapshotWidth,n=e.snapshotHeight;no(t)||(this.content.thumbUrl=this.content.snapshotUrl=t),no(o)||(this.content.thumbWidth=this.content.snapshotWidth=Number(o)),no(n)||(this.content.thumbHeight=this.content.snapshotHeight=Number(n));}},{key:"sendable",value:function value(){return""!==this.content.remoteVideoUrl;}}]),e;}(),Hs=function(){function e(t){n(this,e),this.type=N.MSG_LOCATION;var o=t.description,a=t.longitude,s=t.latitude;this.content={description:o,longitude:a,latitude:s};}return s(e,[{key:"sendable",value:function value(){return!0;}}]),e;}(),Ws=function(){function e(t){if(n(this,e),this.from=t.from,this.messageSender=t.from,this.time=t.time,this.messageSequence=t.sequence,this.clientSequence=t.clientSequence||t.sequence,this.messageRandom=t.random,this.cloudCustomData=t.cloudCustomData||"",this.clientTime=t.clientTime||void 0,t.ID)this.ID=t.ID||"",this.nick=t.nick||"",this.avatar=t.avatar||"",this.messageBody=[{type:t.type,payload:t.payload}],t.conversationType.startsWith(N.CONV_C2C)?this.receiverUserID=t.to:t.conversationType.startsWith(N.CONV_GROUP)&&(this.receiverGroupID=t.to),this.messageReceiver=t.to;else{this.nick=t.nick||"",this.avatar=t.avatar||"",this.messageBody=[];var o=t.elements[0].type,a=t.elements[0].content;this._patchRichMediaPayload(o,a),o===N.MSG_MERGER?this.messageBody.push({type:o,payload:new Ys(a).content}):this.messageBody.push({type:o,payload:a}),t.groupID&&(this.receiverGroupID=t.groupID,this.messageReceiver=t.groupID),t.to&&(this.receiverUserID=t.to,this.messageReceiver=t.to),this.ID="".concat(t.tinyID,"-").concat(t.clientTime,"-").concat(t.random);}}return s(e,[{key:"_patchRichMediaPayload",value:function value(e,t){e===N.MSG_IMAGE?t.imageInfoArray.forEach(function(e){!e.imageUrl&&e.url&&(e.imageUrl=e.url,e.sizeType=e.type,1===e.type?e.type=0:3===e.type&&(e.type=1));}):e===N.MSG_VIDEO?!t.remoteVideoUrl&&t.videoUrl&&(t.remoteVideoUrl=t.videoUrl):e===N.MSG_AUDIO?!t.remoteAudioUrl&&t.url&&(t.remoteAudioUrl=t.url):e===N.MSG_FILE&&!t.fileUrl&&t.url&&(t.fileUrl=t.url,t.url=void 0);}}]),e;}(),Ys=function(){function e(t){if(n(this,e),this.type=N.MSG_MERGER,this.content={downloadKey:"",pbDownloadKey:"",messageList:[],title:"",abstractList:[],compatibleText:"",version:0,layersOverLimit:!1},t.downloadKey){var o=t.downloadKey,a=t.pbDownloadKey,s=t.title,r=t.abstractList,i=t.compatibleText,c=t.version;this.content.downloadKey=o,this.content.pbDownloadKey=a,this.content.title=s,this.content.abstractList=r,this.content.compatibleText=i,this.content.version=c||0;}else if(no(t.messageList))1===t.layersOverLimit&&(this.content.layersOverLimit=!0);else{var u=t.messageList,l=t.title,d=t.abstractList,p=t.compatibleText,g=t.version,_=[];u.forEach(function(e){if(!no(e)){var t=new Ws(e);_.push(t);}}),this.content.messageList=_,this.content.title=l,this.content.abstractList=d,this.content.compatibleText=p,this.content.version=g||0;}je.debug("MergerElement.content:",this.content);}return s(e,[{key:"sendable",value:function value(){return!no(this.content.messageList)||!no(this.content.downloadKey);}}]),e;}(),js={1:N.MSG_PRIORITY_HIGH,2:N.MSG_PRIORITY_NORMAL,3:N.MSG_PRIORITY_LOW,4:N.MSG_PRIORITY_LOWEST},$s=function(){function e(t){n(this,e),this.ID="",this.conversationID=t.conversationID||null,this.conversationType=t.conversationType||N.CONV_C2C,this.conversationSubType=t.conversationSubType,this.time=t.time||Math.ceil(Date.now()/1e3),this.sequence=t.sequence||0,this.clientSequence=t.clientSequence||t.sequence||0,this.random=t.random||0===t.random?t.random:Ct(),this.priority=this._computePriority(t.priority),this.nick=t.nick||"",this.avatar=t.avatar||"",this.isPeerRead=!1,this.nameCard="",this._elements=[],this.isPlaceMessage=t.isPlaceMessage||0,this.isRevoked=2===t.isPlaceMessage||8===t.msgFlagBits,this.from=t.from||null,this.to=t.to||null,this.flow="",this.isSystemMessage=t.isSystemMessage||!1,this.protocol=t.protocol||"JSON",this.isResend=!1,this.isRead=!1,this.status=t.status||io.SUCCESS,this._onlineOnlyFlag=!1,this._groupAtInfoList=[],this._relayFlag=!1,this.atUserList=[],this.cloudCustomData=t.cloudCustomData||"",this.isDeleted=!1,this.isModified=!1,this._isExcludedFromUnreadCount=!(!t.messageControlInfo||1!==t.messageControlInfo.excludedFromUnreadCount),this._isExcludedFromLastMessage=!(!t.messageControlInfo||1!==t.messageControlInfo.excludedFromLastMessage),this.clientTime=t.clientTime||Ke()||0,this.senderTinyID=t.senderTinyID||t.tinyID||"",this.readReceiptInfo=t.readReceiptInfo||{readCount:void 0,unreadCount:void 0,isPeerRead:void 0},this.needReadReceipt=!0===t.needReadReceipt||1===t.needReadReceipt,this.version=t.messageVersion||0,this.isBroadcastMessage=t.isBroadcastMessage||!1,this._receiverList=t.receiverList||void 0,this.isSupportExtension=!0===t.isSupportExtension||1===t.isSupportExtension,this.reInitialize(t.currentUser),this.extractGroupInfo(t.groupProfile||null),this.handleGroupAtInfo(t),this.initC2CReadReceiptInfo(t.readReceiptSentByPeer);}return s(e,[{key:"elements",get:function get(){return this._elements;}},{key:"getElements",value:function value(){return this._elements;}},{key:"extractGroupInfo",value:function value(e){if(null!==e){ct(e.nick)&&(this.nick=e.nick),ct(e.avatar)&&(this.avatar=e.avatar);var t=e.messageFromAccountExtraInformation;lt(t)&&ct(t.nameCard)&&(this.nameCard=t.nameCard);}}},{key:"handleGroupAtInfo",value:function value(e){var t=this;e.payload&&e.payload.atUserList&&e.payload.atUserList.forEach(function(e){e!==N.MSG_AT_ALL?(t._groupAtInfoList.push({groupAtAllFlag:0,groupAtUserID:e}),t.atUserList.push(e)):(t._groupAtInfoList.push({groupAtAllFlag:1}),t.atUserList.push(N.MSG_AT_ALL));}),dt(e.groupAtInfo)&&e.groupAtInfo.forEach(function(e){0===e.groupAtAllFlag?t.atUserList.push(e.groupAtUserID):1===e.groupAtAllFlag&&t.atUserList.push(N.MSG_AT_ALL);});}},{key:"getGroupAtInfoList",value:function value(){return this._groupAtInfoList;}},{key:"_initProxy",value:function value(){this._elements[0]&&(this.payload=this._elements[0].content,this.type=this._elements[0].type);}},{key:"reInitialize",value:function value(e){e&&(this.status=this.from?io.SUCCESS:io.UNSEND,!this.from&&(this.from=e)),this._initFlow(e),this._initSequence(e),this._concatConversationID(e),this.generateMessageID();}},{key:"isSendable",value:function value(){return 0!==this._elements.length&&("function"!=typeof this._elements[0].sendable?(je.warn("".concat(this._elements[0].type,' need "boolean : sendable()" method')),!1):this._elements[0].sendable());}},{key:"_initTo",value:function value(e){this.conversationType===N.CONV_GROUP&&(this.to=e.groupID);}},{key:"_initSequence",value:function value(e){0===this.clientSequence&&e&&(this.clientSequence=function(e){if(!e)return je.error("autoIncrementIndex(string: key) need key parameter"),!1;if(void 0===Nt[e]){var t=new Date(),o="3".concat(t.getHours()).slice(-2),n="0".concat(t.getMinutes()).slice(-2),a="0".concat(t.getSeconds()).slice(-2);Nt[e]=parseInt([o,n,a,"0001"].join("")),o=null,n=null,a=null,je.log("autoIncrementIndex start index:".concat(Nt[e]));}return Nt[e]++;}(e)),0===this.sequence&&this.conversationType===N.CONV_C2C&&(this.sequence=this.clientSequence);}},{key:"generateMessageID",value:function value(){this.from===N.CONV_SYSTEM&&(this.senderTinyID="144115198244471703"),this.ID="".concat(this.senderTinyID,"-").concat(this.clientTime,"-").concat(this.random);}},{key:"_initFlow",value:function value(e){""!==e&&(e===this.from?(this.flow="out",this.isRead=!0):this.flow="in");}},{key:"_concatConversationID",value:function value(e){var t=this.to,o="",n=this.conversationType;n!==N.CONV_SYSTEM?(o=n===N.CONV_C2C?e===this.from?t:this.from:this.to,this.conversationID="".concat(n).concat(o)):this.conversationID=N.CONV_SYSTEM;}},{key:"isElement",value:function value(e){return e instanceof Gs||e instanceof Ps||e instanceof Us||e instanceof bs||e instanceof xs||e instanceof Ks||e instanceof Fs||e instanceof Vs||e instanceof Bs||e instanceof Hs||e instanceof Ys;}},{key:"setElement",value:function value(e){var t=this;if(this.isElement(e))return this._elements=[e],void this._initProxy();var o=function o(e){if(e.type&&e.content)switch(e.type){case N.MSG_TEXT:t.setTextElement(e.content);break;case N.MSG_IMAGE:t.setImageElement(e.content);break;case N.MSG_AUDIO:t.setAudioElement(e.content);break;case N.MSG_FILE:t.setFileElement(e.content);break;case N.MSG_VIDEO:t.setVideoElement(e.content);break;case N.MSG_CUSTOM:t.setCustomElement(e.content);break;case N.MSG_LOCATION:t.setLocationElement(e.content);break;case N.MSG_GRP_TIP:t.setGroupTipElement(e.content);break;case N.MSG_GRP_SYS_NOTICE:t.setGroupSystemNoticeElement(e.content);break;case N.MSG_FACE:t.setFaceElement(e.content);break;case N.MSG_MERGER:t.setMergerElement(e.content);break;default:je.warn(e.type,e.content,"no operation......");}};if(dt(e))for(var n=0;n<e.length;n++){o(e[n]);}else o(e);this._initProxy();}},{key:"clearElement",value:function value(){this._elements.length=0;}},{key:"setTextElement",value:function value(e){var t="string"==typeof e?e:e.text,o=new Gs({text:t});this._elements.push(o);}},{key:"setImageElement",value:function value(e){var t=new Ps(e);this._elements.push(t);}},{key:"setAudioElement",value:function value(e){var t=new bs(e);this._elements.push(t);}},{key:"setFileElement",value:function value(e){var t=new xs(e);this._elements.push(t);}},{key:"setVideoElement",value:function value(e){var t=new Ks(e);this._elements.push(t);}},{key:"setLocationElement",value:function value(e){var t=new Hs(e);this._elements.push(t);}},{key:"setCustomElement",value:function value(e){var t=new Bs(e);this._elements.push(t);}},{key:"setGroupTipElement",value:function value(e){var t={},o=e.operationType;if(no(e.memberInfoList)?e.operatorInfo&&(t=e.operatorInfo):o!==N.GRP_TIP_MBR_JOIN&&o!==N.GRP_TIP_MBR_KICKED_OUT&&o!==N.GRP_TIP_MBR_SET_ADMIN&&o!==N.GRP_TIP_MBR_CANCELED_ADMIN||(t=e.memberInfoList[0]),!no(e.memberExtraInfo)){var n=e.memberExtraInfo.reason;e.msgMemberInfo.forEach(function(e){e.reason=n;});}var a=t,s=a.nick,r=a.avatar;ct(s)&&(this.nick=s),ct(r)&&(this.avatar=r);var i=new Fs(e);this._elements.push(i);}},{key:"setGroupSystemNoticeElement",value:function value(e){var t=new Vs(e);this._elements.push(t);}},{key:"setFaceElement",value:function value(e){var t=new Us(e);this._elements.push(t);}},{key:"setMergerElement",value:function value(e){var t=new Ys(e);this._elements.push(t);}},{key:"setIsRead",value:function value(e){this.isRead=e;}},{key:"setRelayFlag",value:function value(e){this._relayFlag=e;}},{key:"getRelayFlag",value:function value(){return this._relayFlag;}},{key:"_computePriority",value:function value(e){if(pt(e))return N.MSG_PRIORITY_NORMAL;if(ct(e)&&-1!==Object.values(js).indexOf(e))return e;if(it(e)){var t=""+e;if(-1!==Object.keys(js).indexOf(t))return js[t];}return N.MSG_PRIORITY_NORMAL;}},{key:"setNickAndAvatar",value:function value(e){var t=e.nick,o=e.avatar;ct(t)&&(this.nick=t),ct(o)&&(this.avatar=o);}},{key:"setNameCard",value:function value(e){ct(e)&&(this.nameCard=e);}},{key:"initC2CReadReceiptInfo",value:function value(e){this.conversationType===N.CONV_C2C&&!0===this.needReadReceipt&&(this.readReceiptInfo.isPeerRead=1===e);}}]),e;}(),zs=function zs(e){return{code:0,data:e||{}};},Js="https://cloud.tencent.com/document/product/",Xs="您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】 页面校验 UserSig。",Qs="UserSig 非法，请使用官网提供的 API 重新生成 UserSig(".concat(Js,"269/32688)。"),Zs="#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement",er={70001:"UserSig 已过期，请重新生成。建议 UserSig 有效期设置不小于24小时。",70002:"UserSig 长度为0，请检查传入的 UserSig 是否正确。",70003:Qs,70005:Qs,70009:"UserSig 验证失败，可能因为生成 UserSig 时混用了其他 SDKAppID 的私钥或密钥导致，请使用对应 SDKAppID 下的私钥或密钥重新生成 UserSig(".concat(Js,"269/32688)。"),70013:"请求中的 UserID 与生成 UserSig 时使用的 UserID 不匹配。".concat(Xs),70014:"请求中的 SDKAppID 与生成 UserSig 时使用的 SDKAppID 不匹配。".concat(Xs),70016:"密钥不存在，UserSig 验证失败，请在即时通信 IM 控制台获取密钥(".concat(Js,"269/32578#.E8.8E.B7.E5.8F.96.E5.AF.86.E9.92.A5)。"),70020:"SDKAppID 未找到，请在即时通信 IM 控制台确认应用信息。",70050:"UserSig 验证次数过于频繁。请检查 UserSig 是否正确，并于1分钟后重新验证。".concat(Xs),70051:"帐号被拉入黑名单。",70052:"UserSig 已经失效，请重新生成，再次尝试。",70107:"因安全原因被限制登录，请不要频繁登录。",70169:"请求的用户帐号不存在。",70114:"".concat("服务端内部超时，请稍后重试。"),70202:"".concat("服务端内部超时，请稍后重试。"),70206:"请求中批量数量不合法。",70402:"参数非法，请检查必填字段是否填充，或者字段的填充是否满足协议要求。",70403:"请求失败，需要 App 管理员权限。",70398:"帐号数超限。如需创建多于100个帐号，请将应用升级为专业版，具体操作指引请参见购买指引(".concat(Js,"269/32458)。"),70500:"".concat("服务端内部错误，请重试。"),71e3:"删除帐号失败。仅支持删除体验版帐号，您当前应用为专业版，暂不支持帐号删除。",20001:"请求包非法。",20002:"UserSig 或 A2 失效。",20003:"消息发送方或接收方 UserID 无效或不存在，请检查 UserID 是否已导入即时通信 IM。",20004:"网络异常，请重试。",20005:"".concat("服务端内部错误，请重试。"),20006:"触发发送".concat("单聊消息","之前回调，App 后台返回禁止下发该消息。"),20007:"发送".concat("单聊消息","，被对方拉黑，禁止发送。消息发送状态默认展示为失败，您可以登录控制台修改该场景下的消息发送状态展示结果，具体操作请参见消息保留设置(").concat(Js,"269/38656)。"),20009:"消息发送双方互相不是好友，禁止发送（配置".concat("单聊消息","校验好友关系才会出现）。"),20010:"发送".concat("单聊消息","，自己不是对方的好友（单向关系），禁止发送。"),20011:"发送".concat("单聊消息","，对方不是自己的好友（单向关系），禁止发送。"),20012:"发送方被禁言，该条消息被禁止发送。",20016:"消息撤回超过了时间限制（默认2分钟）。",20018:"删除漫游内部错误。",90001:"JSON 格式解析失败，请检查请求包是否符合 JSON 规范。",90002:"".concat("JSON 格式请求包体","中 MsgBody 不符合消息格式描述，或者 MsgBody 不是 Array 类型，请参考 TIMMsgElement 对象的定义(").concat(Js,"269/2720").concat(Zs,")。"),90003:"".concat("JSON 格式请求包体","中缺少 To_Account 字段或者 To_Account 帐号不存在。"),90005:"".concat("JSON 格式请求包体","中缺少 MsgRandom 字段或者 MsgRandom 字段不是 Integer 类型。"),90006:"".concat("JSON 格式请求包体","中缺少 MsgTimeStamp 字段或者 MsgTimeStamp 字段不是 Integer 类型。"),90007:"".concat("JSON 格式请求包体","中 MsgBody 类型不是 Array 类型，请将其修改为 Array 类型。"),90008:"".concat("JSON 格式请求包体","中缺少 From_Account 字段或者 From_Account 帐号不存在。"),90009:"请求需要 App 管理员权限。",90010:"".concat("JSON 格式请求包体","不符合消息格式描述，请参考 TIMMsgElement 对象的定义(").concat(Js,"269/2720").concat(Zs,")。"),90011:"批量发消息目标帐号超过500，请减少 To_Account 中目标帐号数量。",90012:"To_Account 没有注册或不存在，请确认 To_Account 是否导入即时通信 IM 或者是否拼写错误。",90026:"消息离线存储时间错误（最多不能超过7天）。",90031:"".concat("JSON 格式请求包体","中 SyncOtherMachine 字段不是 Integer 类型。"),90044:"".concat("JSON 格式请求包体","中 MsgLifeTime 字段不是 Integer 类型。"),90048:"请求的用户帐号不存在。",90054:"撤回请求中的 MsgKey 不合法。",90994:"".concat("服务端内部错误，请重试。"),90995:"".concat("服务端内部错误，请重试。"),91e3:"".concat("服务端内部错误，请重试。"),90992:"".concat("服务端内部错误，请重试。","如果所有请求都返回该错误码，且 App 配置了第三方回调，请检查 App 服务端是否正常向即时通信 IM 后台服务端返回回调结果。"),93e3:"JSON 数据包超长，消息包体请不要超过8k。",91101:"Web 端长轮询被踢（Web 端同时在线实例个数超出限制）。",10002:"".concat("服务端内部错误，请重试。"),10003:"请求中的接口名称错误，请核对接口名称并重试。",10004:"参数非法，请根据错误描述检查请求是否正确。",10005:"请求包体中携带的帐号数量过多。",10006:"操作频率限制，请尝试降低调用的频率。",10007:"操作权限不足，例如 Work ".concat("群组","中普通成员尝试执行踢人操作，但只有 App 管理员才有权限。"),10008:"请求非法，可能是请求中携带的签名信息验证不正确，请再次尝试。",10009:"该群不允许群主主动退出。",10010:"".concat("群组","不存在，或者曾经存在过，但是目前已经被解散。"),10011:"解析 JSON 包体失败，请检查包体的格式是否符合 JSON 格式。",10012:"发起操作的 UserID 非法，请检查发起操作的用户 UserID 是否填写正确。",10013:"被邀请加入的用户已经是群成员。",10014:"群已满员，无法将请求中的用户加入".concat("群组","，如果是批量加人，可以尝试减少加入用户的数量。"),10015:"找不到指定 ID 的".concat("群组","。"),10016:"App 后台通过第三方回调拒绝本次操作。",10017:"因被禁言而不能发送消息，请检查发送者是否被设置禁言。",10018:"应答包长度超过最大包长（1MB），请求的内容过多，请尝试减少单次请求的数据量。",10019:"请求的用户帐号不存在。",10021:"".concat("群组"," ID 已被使用，请选择其他的").concat("群组"," ID。"),10023:"发消息的频率超限，请延长两次发消息时间的间隔。",10024:"此邀请或者申请请求已经被处理。",10025:"".concat("群组"," ID 已被使用，并且操作者为群主，可以直接使用。"),10026:"该 SDKAppID 请求的命令字已被禁用。",10030:"请求撤回的消息不存在。",10031:"消息撤回超过了时间限制（默认2分钟）。",10032:"请求撤回的消息不支持撤回操作。",10033:"".concat("群组","类型不支持消息撤回操作。"),10034:"该消息类型不支持删除操作。",10035:"直播群和在线成员广播大群不支持删除消息。",10036:"直播群创建数量超过了限制，请参考价格说明(".concat(Js,"269/11673)购买预付费套餐“IM直播群”。"),10037:"单个用户可创建和加入的".concat("群组","数量超过了限制，请参考价格说明(").concat(Js,"269/11673)购买或升级预付费套餐“单人可创建与加入").concat("群组","数”。"),10038:"群成员数量超过限制，请参考价格说明(".concat(Js,"269/11673)购买或升级预付费套餐“扩展群人数上限”。"),10041:"该应用（SDKAppID）已配置不支持群消息撤回。",10050:"群属性 key 不存在",10056:"请在写入群属性前先使用 getGroupAttributes 接口更新本地群属性，避免冲突。",10059:"非旗舰版",10060:"群人数超过已读回执人数上限",10061:"在线消息不支持已读回执",10062:"找不到群消息的已读回执信息",20026:"消息不存在",20029:"该群类型不支持修改消息。",30001:"请求参数错误，请根据错误描述检查请求参数",30002:"SDKAppID 不匹配",30003:"请求的用户帐号不存在",30004:"请求需要 App 管理员权限",30005:"关系链字段中包含敏感词",30006:"".concat("服务端内部错误，请重试。"),30007:"".concat("网络超时，请稍后重试. "),30008:"并发写导致写冲突，建议使用批量方式",30009:"后台禁止该用户发起加好友请求",30010:"自己的好友数已达系统上限",30011:"分组已达系统上限",30012:"未决数已达系统上限",30014:"对方的好友数已达系统上限",30515:"请求添加好友时，对方在自己的黑名单中，不允许加好友",30516:"请求添加好友时，对方的加好友验证方式是不允许任何人添加自己为好友",30525:"请求添加好友时，自己在对方的黑名单中，不允许加好友",30539:"等待对方同意",30540:"添加好友请求被安全策略打击，请勿频繁发起添加好友请求",31704:"与请求删除的帐号之间不存在好友关系",31707:"删除好友请求被安全策略打击，请勿频繁发起删除好友请求",50001:"解包失败",50002:"请求参数错误，请根据错误描述检查请求是否正确",50004:"会话分组不存在",51006:"会话标记每次调整的会话数为空或者超过了100个上限",51007:"GroupID 换 GroupCode 失败，内部错误或 Group 已经解散",51008:"会话分组的总的会话数超过了1000",51009:"删除会话分组时分组不存在",51010:"会话分组数超过了上限（默认20个）",51011:"分组名超过了32个字节"},tr=function(e){i(o,e);var t=f(o);function o(e){var a;n(this,o),a=t.call(this);var s=e.code,r=e.message,i=e.data;return a.code=s,r?a.message=r:a._isIntl?a.message=fn[a.code]:a.message=er[a.code]||hn[a.code],a.data=i||{},a;}return s(o);}(p(Error)),or=null,nr=function nr(e){or=e;},ar=function ar(e){return Promise.resolve(zs(e));},sr=function sr(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e instanceof tr)return t&&null!==or&&or.emit(D.ERROR,e),Promise.reject(e);if(e instanceof Error){var o=new tr({code:_n.UNCAUGHT_ERROR,message:fn[_n.UNCAUGHT_ERROR]});return t&&null!==or&&or.emit(D.ERROR,o),Promise.reject(o);}if(!pt(e)&&!pt(e.code)){var n=new tr(e);return t&&null!==or&&or.emit(D.ERROR,n),Promise.reject(n);}je.error("IMPromise.reject code required!");},rr=function(e){i(a,e);var o=f(a);function a(e){var t;return n(this,a),(t=o.call(this,e))._className="C2CModule",t._messageFromUnreadDBMap=new Map(),t;}return s(a,[{key:"onNewC2CMessage",value:function value(e){var t=e.dataList,o=e.isInstantMessage,n=e.C2CRemainingUnreadList,a=e.C2CPairUnreadList;je.debug("".concat(this._className,".onNewC2CMessage count:").concat(t.length," isInstantMessage:").concat(o));var s=this._newC2CMessageStoredAndSummary({dataList:t,C2CRemainingUnreadList:n,C2CPairUnreadList:a,isInstantMessage:o}),r=s.conversationOptionsList,i=s.messageList,c=s.isUnreadC2CMessage;(this.filterModifiedMessage(i),r.length>0)&&this.getModule(jo).onNewMessage({conversationOptionsList:r,isInstantMessage:o,isUnreadC2CMessage:c});var u=this.filterUnmodifiedMessage(i);o&&u.length>0&&this.emitOuterEvent(D.MESSAGE_RECEIVED,u),i.length=0;}},{key:"_newC2CMessageStoredAndSummary",value:function value(e){for(var t=e.dataList,o=e.C2CRemainingUnreadList,n=e.C2CPairUnreadList,a=e.isInstantMessage,s=null,r=[],i=[],c={},u=this.getModule(Qo),l=this.getModule(un),d=!1,p=this.getModule(jo),g=0,_=t.length;g<_;g++){var h=t[g];h.currentUser=this.getMyUserID(),h.conversationType=N.CONV_C2C,h.isSystemMessage=!!h.isSystemMessage,(pt(h.nick)||pt(h.avatar))&&(d=!0,je.debug("".concat(this._className,"._newC2CMessageStoredAndSummary nick or avatar missing!"))),s=new $s(h),h.elements=u.parseElements(h.elements,h.from),s.setElement(h.elements),s.setNickAndAvatar({nick:h.nick,avatar:h.avatar});var f=s.conversationID;if(a){if(1===this._messageFromUnreadDBMap.get(s.ID))continue;var m=!1;if(s.from!==this.getMyUserID()){var M=p.getLatestMessageSentByPeer(f);if(M){var v=M.nick,y=M.avatar;d?s.setNickAndAvatar({nick:v,avatar:y}):v===s.nick&&y===s.avatar||(m=!0);}}else{var I=p.getLatestMessageSentByMe(f);if(I){var T=I.nick,C=I.avatar;T===s.nick&&C===s.avatar||p.modifyMessageSentByMe({conversationID:f,latestNick:s.nick,latestAvatar:s.avatar});}}var E=1===t[g].isModified;if(p.isMessageSentByCurrentInstance(s)?s.isModified=E:E=!1,0===h.msgLifeTime)s._onlineOnlyFlag=!0,p.isMessageSentByCurrentInstance(s)||i.push(s);else{if(!p.pushIntoMessageList(i,s,E))continue;m&&(p.modifyMessageSentByPeer({conversationID:f,latestNick:s.nick,latestAvatar:s.avatar}),p.updateUserProfileSpecifiedKey({conversationID:f,nick:s.nick,avatar:s.avatar}));}a&&s.clientTime>0&&l.addMessageDelay(s.clientTime);}else this._messageFromUnreadDBMap.set(s.ID,1);if(0!==h.msgLifeTime){if(!1===s._onlineOnlyFlag){var S=p.getLastMessageTime(f);if(it(S)&&s.time<S)continue;if(pt(c[f])){var D=0;"in"===s.flow&&(s._isExcludedFromUnreadCount||(D=1)),c[f]=r.push({conversationID:f,unreadCount:D,type:s.conversationType,subType:s.conversationSubType,lastMessage:s._isExcludedFromLastMessage?"":s})-1;}else{var A=c[f];r[A].type=s.conversationType,r[A].subType=s.conversationSubType,r[A].lastMessage=s._isExcludedFromLastMessage?"":s,"in"===s.flow&&(s._isExcludedFromUnreadCount||r[A].unreadCount++);}}}else s._onlineOnlyFlag=!0;}var k=!1;if(dt(n))for(var R=function R(e,t){if(n[e].unreadCount>0){k=!0;var o=r.find(function(t){return t.conversationID==="C2C".concat(n[e].from);});o?o.unreadCount=n[e].unreadCount:r.push({conversationID:"C2C".concat(n[e].from),unreadCount:n[e].unreadCount,type:N.CONV_C2C});}},O=0,L=n.length;O<L;O++){R(O);}if(dt(o))for(var G=function G(e,t){r.find(function(t){return t.conversationID==="C2C".concat(o[e].from);})||r.push({conversationID:"C2C".concat(o[e].from),type:N.CONV_C2C,lastMsgTime:o[e].lastMsgTime});},P=0,U=o.length;P<U;P++){G(P);}return{conversationOptionsList:r,messageList:i,isUnreadC2CMessage:k};}},{key:"onC2CMessageRevoked",value:function value(e){var t=this,o=this.getModule(jo),n=[],a=null,s=!0;e.dataList.forEach(function(e){if(e.c2cMessageRevokedNotify){var r=e.c2cMessageRevokedNotify.revokedInfos;pt(r)||r.forEach(function(e){var r=t.getMyUserID()===e.from?"".concat(N.CONV_C2C).concat(e.to):"".concat(N.CONV_C2C).concat(e.from);if(a=o.revoke(r,e.sequence,e.random))n.push(a);else{var i={conversationID:r,sequence:e.sequence,time:e.time};o.isLastMessageRevoked(i)&&(n.push(i),s=!1);}});}}),0!==n.length&&(o.onMessageRevoked(n),!0===s&&(je.log("".concat(this._className,".onC2CMessageRevoked count:").concat(n.length)),this.emitOuterEvent(D.MESSAGE_REVOKED,n)));}},{key:"onC2CMessageReadReceipt",value:function value(e){var t=this;e.dataList.forEach(function(e){if(!no(e.c2cMessageReadReceipt)){var o=e.c2cMessageReadReceipt.to;e.c2cMessageReadReceipt.uinPairReadArray.forEach(function(e){var n=e.peerReadTime;je.debug("".concat(t._className,"._onC2CMessageReadReceipt to:").concat(o," peerReadTime:").concat(n));var a="".concat(N.CONV_C2C).concat(o),s=t.getModule(jo);s.recordPeerReadTime(a,n),s.updateMessageIsPeerReadProperty(a,n);});}});}},{key:"onC2CMessageReadNotice",value:function value(e){var t=this;e.dataList.forEach(function(e){if(!no(e.c2cMessageReadNotice)){var o=t.getModule(jo);e.c2cMessageReadNotice.uinPairReadArray.forEach(function(e){var n=e.from,a=e.peerReadTime;je.debug("".concat(t._className,".onC2CMessageReadNotice from:").concat(n," lastReadTime:").concat(a));var s="".concat(N.CONV_C2C).concat(n);o.updateIsReadAfterReadReport({conversationID:s,lastMessageTime:a}),o.updateUnreadCount(s);});}});}},{key:"onC2CMessageModified",value:function value(e){je.debug("".concat(this._className,".onC2CMessageModified options:"),JSON.stringify(e));var o=this.getModule(jo);e.dataList.forEach(function(e){o.onMessageModified(t(t({},e),{},{conversationType:N.CONV_C2C}));});}},{key:"onReadReceiptList",value:function value(e){je.debug("".concat(this._className,".onReadReceiptList options:"),JSON.stringify(e));var t=e.dataList,o=t.userID,n=t.readReceiptList;this.getModule(jo).updateReadReceiptInfo({userID:o,readReceiptList:n});}},{key:"sendMessage",value:function value(e,t){var o=this._createC2CMessagePack(e,t);return this.request(o);}},{key:"_createC2CMessagePack",value:function value(e,t){var o=null;t&&(t.offlinePushInfo&&(o=t.offlinePushInfo),!0===t.onlineUserOnly&&(o?o.disablePush=!0:o={disablePush:!0}));var n="";ct(e.cloudCustomData)&&e.cloudCustomData.length>0&&(n=e.cloudCustomData);var a=[];if(lt(t)&&lt(t.messageControlInfo)){var s=t.messageControlInfo,r=s.excludedFromUnreadCount,i=s.excludedFromLastMessage;!0===r&&a.push("NoUnread"),!0===i&&a.push("NoLastMsg");}return{protocolName:En,tjgID:this.generateTjgID(e),requestData:{fromAccount:this.getMyUserID(),toAccount:e.to,msgBody:e.getElements(),cloudCustomData:n,msgSeq:e.sequence,msgRandom:e.random,msgLifeTime:this.isOnlineMessage(e,t)?0:void 0,nick:e.nick,avatar:e.avatar,offlinePushInfo:o?{pushFlag:!0===o.disablePush?1:0,title:o.title||"",desc:o.description||"",ext:o.extension||"",apnsInfo:{badgeMode:!0===o.ignoreIOSBadge?1:0,isVoipPush:this._isVoipPush(o)},androidInfo:{OPPOChannelID:o.androidOPPOChannelID||""}}:void 0,messageControlInfo:a,clientTime:e.clientTime,needReadReceipt:!0===e.needReadReceipt?1:0,isSupportExtension:!0===e.isSupportExtension?1:0}};}},{key:"_isVoipPush",value:function value(e){var t=void 0;return pt(e.disableVoipPush)||(t=!1===e.disableVoipPush?1:0),t;}},{key:"isOnlineMessage",value:function value(e,t){return!(!t||!0!==t.onlineUserOnly);}},{key:"revokeMessage",value:function value(e){return this.request({protocolName:On,requestData:{msgInfo:{fromAccount:e.from,toAccount:e.to,msgSeq:e.sequence,msgRandom:e.random,msgTimeStamp:e.time}}});}},{key:"deleteMessage",value:function value(e){var t=e.to,o=e.keyList;return je.log("".concat(this._className,".deleteMessage toAccount:").concat(t," count:").concat(o.length)),this.request({protocolName:wn,requestData:{fromAccount:this.getMyUserID(),to:t,keyList:o}});}},{key:"modifyRemoteMessage",value:function value(e){var t=e.from,o=e.to,n=e.version,a=void 0===n?0:n,s=e.sequence,r=e.random,i=e.time,c=e.payload,u=e.type,l=e.cloudCustomData,d=void 0;return Xt(u)&&(d=[]).push({type:u,content:c}),this.request({protocolName:Fn,requestData:{from:t,to:o,version:a,sequence:s,random:r,time:i,elements:d,cloudCustomData:l}});}},{key:"setMessageRead",value:function value(e){var t=this,o=e.conversationID,n=e.lastMessageTime,a="".concat(this._className,".setMessageRead");if(je.log("".concat(a," conversationID:").concat(o," lastMessageTime:").concat(n)),!it(n)){var s="";s=this.isIntl()?"Do not modify Conversation.lastMessage.lastTime, otherwise the result of setMessageRead will be incorrect":"请勿修改 Conversation.lastMessage.lastTime，否则可能会导致已读上报结果不准确",je.warn("".concat(a," ").concat(s));}var r=new Os(Ls.SET_C2C_MESSAGE_READ);return r.setMessage("conversationID:".concat(o," lastMessageTime:").concat(n)),this.request({protocolName:Ln,requestData:{C2CMsgReaded:{cookie:"",C2CMsgReadedItem:[{toAccount:o.replace("C2C",""),lastMessageTime:n,receipt:1}]}}}).then(function(){r.setNetworkType(t.getNetworkType()).end(),je.log("".concat(a," ok"));var e=t.getModule(jo);return e.updateIsReadAfterReadReport({conversationID:o,lastMessageTime:n}),e.updateUnreadCount(o),zs();}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setError(e,n,a).end();}),je.log("".concat(a," failed. error:"),e),sr(e);});}},{key:"getRoamingMessage",value:function value(e){var t=this,o="".concat(this._className,".getRoamingMessage"),n=e.peerAccount,a=e.conversationID,s=e.count,r=e.lastMessageTime,i=e.messageKey,c="peerAccount:".concat(n," count:").concat(s||15," lastMessageTime:").concat(r||0," messageKey:").concat(i);je.log("".concat(o," ").concat(c));var u=new Os(Ls.GET_C2C_ROAMING_MESSAGES);return this.request({protocolName:Un,requestData:{peerAccount:n,count:s||15,lastMessageTime:r||0,messageKey:i}}).then(function(e){var n=e.data,s=n.complete,r=n.messageList,i=n.messageKey,l=n.lastMessageTime;pt(r)?je.log("".concat(o," ok. complete:").concat(s," but messageList is undefined!")):je.log("".concat(o," ok. complete:").concat(s," count:").concat(r.length)),u.setNetworkType(t.getNetworkType()).setMessage("".concat(c," complete:").concat(s," length:").concat(r.length)).end();var d=t.getModule(jo);1===s&&d.setCompleted(a);var p=d.onRoamingMessage(r,a);d.modifyMessageList(a),d.updateIsRead(a),d.updateRoamingMessageKeyAndTime(a,i,l);var g=d.getPeerReadTime(a);if(je.log("".concat(o," update isPeerRead property. conversationID:").concat(a," peerReadTime:").concat(g)),g)d.updateMessageIsPeerReadProperty(a,g);else{var _=a.replace(N.CONV_C2C,"");t.getRemotePeerReadTime([_]).then(function(){d.updateMessageIsPeerReadProperty(a,d.getPeerReadTime(a));});}var h="";if(p.length>0)h=p[0].ID;else{var f=d.getLocalOldestMessage(a);f&&(h=f.ID);}return je.log("".concat(o," nextReqID:").concat(h," stored message count:").concat(p.length)),{nextReqID:h,storedMessageList:p};}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];u.setMessage(c).setError(e,n,a).end();}),je.warn("".concat(o," failed. error:"),e),sr(e);});}},{key:"getRoamingMessagesHopping",value:function value(e){var t=this,o="".concat(this._className,".getRoamingMessagesHopping"),n=e.peerAccount,a=e.time,s=void 0===a?0:a,r=e.count,i=e.direction,c="".concat(N.CONV_C2C).concat(n),u="peerAccount:".concat(n," count:").concat(r," time:").concat(s," direction:").concat(i);je.log("".concat(o," ").concat(u));var l=new Os(Ls.GET_C2C_ROAMING_MESSAGES_HOPPING);return this.request({protocolName:Un,requestData:{peerAccount:n,count:r+1,lastMessageTime:s,direction:i}}).then(function(e){var n=e.data,a=n.complete,s=n.messageList,r=void 0===s?[]:s,d=n.lastMessageTime;je.log("".concat(o," ok. complete:").concat(a," count:").concat(r.length)),l.setNetworkType(t.getNetworkType()).setMessage("".concat(u," complete:").concat(a," length:").concat(r.length)).end(),1!==a&&(1===i?r.pop():r.shift());var p=t.getModule(jo).onRoamingMessage(r,c,!1);t._modifyMessageList(c,p);var g=t._computeResult({complete:a,lastMessageTime:d,resultList:p});return zs(g);}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];l.setMessage(u).setError(e,n,a).end();}),je.warn("".concat(o," failed. error:"),e),sr(e);});}},{key:"_computeResult",value:function value(e){var t=e.complete,o=void 0===t?0:t,n=e.lastMessageTime,a=e.resultList,s={messageList:M(void 0===a?[]:a),isCompleted:!1,nextMessageTime:""};return 1===o?(s.isCompleted=!0,s):(s.nextMessageTime=n,s);}},{key:"_modifyMessageList",value:function value(e,t){var o=this.getModule(jo).getLocalConversation(e);if(o)for(var n=o.userProfile.nick,a=o.userProfile.avatar,s=this.getModule(xo).getNickAndAvatarByUserID(this.getMyUserID()),r=s.nick,i=s.avatar,c=t.length-1;c>=0;c--){var u=t[c];"in"===u.flow&&(u.nick!==n&&u.setNickAndAvatar({nick:n}),u.avatar!==a&&u.setNickAndAvatar({avatar:a})),"out"===u.flow&&(u.nick!==r&&u.setNickAndAvatar({nick:r}),u.avatar!==i&&u.setNickAndAvatar({avatar:i}));}}},{key:"getRemotePeerReadTime",value:function value(e){var t=this,o="".concat(this._className,".getRemotePeerReadTime");if(no(e))return je.warn("".concat(o," userIDList is empty!")),Promise.resolve();var n=new Os(Ls.GET_PEER_READ_TIME);return je.log("".concat(o," userIDList:").concat(e)),this.request({protocolName:bn,requestData:{userIDList:e}}).then(function(a){var s=a.data.peerReadTimeList;je.log("".concat(o," ok. peerReadTimeList:").concat(s));for(var r="",i=t.getModule(jo),c=0;c<e.length;c++){r+="".concat(e[c],"-").concat(s[c]," "),s[c]>0&&i.recordPeerReadTime("C2C".concat(e[c]),s[c]);}n.setNetworkType(t.getNetworkType()).setMessage(r).end();}).catch(function(e){t.probeNetwork().then(function(t){var o=m(t,2),a=o[0],s=o[1];n.setError(e,a,s).end();}),je.warn("".concat(o," failed. error:"),e);});}},{key:"sendReadReceipt",value:function value(e){var t=this,o=e[0].conversationID.replace(N.CONV_C2C,""),n=new Os(Ls.SEND_C2C_READ_RECEIPT);n.setMessage("peerAccount:".concat(o));var a=this.getMyUserID(),s=e.filter(function(e){return e.from!==a&&!0===e.needReadReceipt;}).map(function(e){return{fromAccount:e.from,toAccount:e.to,sequence:e.sequence,random:e.random,time:e.time,clientTime:e.clientTime};});if(0===s.length)return sr({code:_n.READ_RECEIPT_MESSAGE_LIST_EMPTY});var r="".concat(this._className,".sendReadReceipt");return je.log("".concat(r,". peerAccount:").concat(o," messageInfoList length:").concat(s.length)),this.request({protocolName:va,requestData:{peerAccount:o,messageInfoList:s}}).then(function(e){return n.end(),je.log("".concat(r," ok")),zs();}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),a=o[0],s=o[1];n.setError(e,a,s).end();}),je.warn("".concat(r," failed. error:"),e),sr(e);});}},{key:"getReadReceiptList",value:function value(e){var t="".concat(this._className,".getReadReceiptList"),o=this.getMyUserID(),n=e.filter(function(e){return e.from===o&&!0===e.needReadReceipt;});return je.log("".concat(t," userID:").concat(o," messageList length:").concat(n.length)),ar({messageList:n});}},{key:"getMessageExtensions",value:function value(e,t){return je.log("".concat(this._className,".getMessageExtensions startSequence:").concat(t)),this.request({protocolName:Vn,requestData:{from:e.from,to:e.to,messageKey:this._getMessageKey(e),startSequence:t}});}},{key:"modifyMessageExtensions",value:function value(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return je.log("".concat(this._className,".modifyMessageExtensions operateType:").concat(o)),this.request({protocolName:qn,requestData:{from:e.from,to:e.to,messageKey:this._getMessageKey(e),extensionList:t,operateType:o}});}},{key:"_getMessageKey",value:function value(e){var t=e.clientSequence,o=e.random,n=e.time;return"".concat(t,"_").concat(o,"_").concat(n);}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._messageFromUnreadDBMap.clear();}}]),a;}(mn),ir=function(){function e(){n(this,e),this.list=new Map(),this._className="MessageListHandler",this._latestMessageSentByPeerMap=new Map(),this._latestMessageSentByMeMap=new Map();}return s(e,[{key:"getLocalOldestMessageByConversationID",value:function value(e){if(!e)return null;if(!this.list.has(e))return null;var t=this.list.get(e).values();return t?t.next().value:null;}},{key:"pushIn",value:function value(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.conversationID,n=!0;this.list.has(o)||this.list.set(o,new Map());var a=this._getUniqueIDOfMessage(e),s=this.list.get(o).has(a);if(s){var r=this.list.get(o).get(a);if(!t||!0===r.isModified)return n=!1;}return this.list.get(o).set(a,e),this._setLatestMessageSentByPeer(o,e),this._setLatestMessageSentByMe(o,e),n;}},{key:"unshift",value:function value(e,t){var o;if(dt(e)?e.length>0&&(o=e[0].conversationID,this._unshiftMultipleMessages(e,t)):(o=e.conversationID,this._unshiftSingleMessage(e,t)),o&&o.startsWith(N.CONV_C2C)){var n=Array.from(this.list.get(o).values()),a=n.length;if(0===a)return;for(var s=a-1;s>=0;s--){if("out"===n[s].flow){this._setLatestMessageSentByMe(o,n[s]);break;}}for(var r=a-1;r>=0;r--){if("in"===n[r].flow){this._setLatestMessageSentByPeer(o,n[r]);break;}}}}},{key:"_unshiftSingleMessage",value:function value(e,t){var o=e.conversationID,n=this._getUniqueIDOfMessage(e);if(!this.list.has(o))return this.list.set(o,new Map()),this.list.get(o).set(n,e),void t.push(e);var a=this.list.get(o),s=Array.from(a);a.has(n)||(s.unshift([n,e]),this.list.set(o,new Map(s)),t.push(e));}},{key:"_unshiftMultipleMessages",value:function value(e,t){for(var o=e.length,n=[],a=e[0].conversationID,s=this.list.get(a),r=this.list.has(a)?Array.from(s):[],i=0;i<o;i++){var c=this._getUniqueIDOfMessage(e[i]);s&&s.has(c)||(n.push([c,e[i]]),t.push(e[i]));}this.list.set(a,new Map(n.concat(r)));}},{key:"remove",value:function value(e){var t=e.conversationID,o=this._getUniqueIDOfMessage(e);this.list.has(t)&&this.list.get(t).delete(o);}},{key:"revoke",value:function value(e,t,o){if(je.debug("revoke message",e,t,o),this.list.has(e)){var n,a=E(this.list.get(e));try{for(a.s();!(n=a.n()).done;){var s=m(n.value,2)[1];if(s.sequence===t&&!s.isRevoked&&(pt(o)||s.random===o))return s.isRevoked=!0,s;}}catch(r){a.e(r);}finally{a.f();}}return null;}},{key:"removeByConversationID",value:function value(e){this.list.has(e)&&(this.list.delete(e),this._latestMessageSentByPeerMap.delete(e),this._latestMessageSentByMeMap.delete(e));}},{key:"findMessage",value:function value(e){var t,o=null,n=E(this.list);try{for(n.s();!(t=n.n()).done;){for(var a=M(m(t.value,2)[1].values()),s=a.length,r=0;r<s;r++){if(a[r].ID===e){o=a[r];break;}}}}catch(i){n.e(i);}finally{n.f();}return o;}},{key:"updateMessageIsPeerReadProperty",value:function value(e,t){var o=[];if(this.list.has(e)){var n,a=E(this.list.get(e));try{for(a.s();!(n=a.n()).done;){var s=m(n.value,2)[1];s.time<=t&&!s.isPeerRead&&"out"===s.flow&&(s.isPeerRead=!0,o.push(s));}}catch(r){a.e(r);}finally{a.f();}je.log("".concat(this._className,".updateMessageIsPeerReadProperty conversationID:").concat(e," peerReadTime:").concat(t," count:").concat(o.length));}return o;}},{key:"updateMessageIsModifiedProperty",value:function value(e){var t=e.conversationID;if(this.list.has(t)){var o=this._getUniqueIDOfMessage(e),n=this.list.get(t).get(o);n&&(n.isModified=!0);}}},{key:"hasLocalMessageList",value:function value(e){return this.list.has(e);}},{key:"getLocalMessageList",value:function value(e){return this.hasLocalMessageList(e)?M(this.list.get(e).values()):[];}},{key:"hasLocalMessage",value:function value(e,t){for(var o=!1,n=this.getLocalMessageList(e),a=n.length,s=0;s<a;s++){n[s].ID===t&&(o=!0);}return o;}},{key:"getLocalMessage",value:function value(e,t){for(var o=null,n=this.getLocalMessageList(e),a=n.length,s=0;s<a;s++){if(n[s].ID===t){o=n[s];break;}}return o;}},{key:"getLocalLastMessage",value:function value(e){var t=this.getLocalMessageList(e);return t[t.length-1];}},{key:"getLocalOldestMessage",value:function value(e){return this.getLocalMessageList(e)[0];}},{key:"_setLatestMessageSentByPeer",value:function value(e,t){e.startsWith(N.CONV_C2C)&&"in"===t.flow&&this._latestMessageSentByPeerMap.set(e,t);}},{key:"_setLatestMessageSentByMe",value:function value(e,t){e.startsWith(N.CONV_C2C)&&"out"===t.flow&&this._latestMessageSentByMeMap.set(e,t);}},{key:"getLatestMessageSentByPeer",value:function value(e){return this._latestMessageSentByPeerMap.get(e);}},{key:"getLatestMessageSentByMe",value:function value(e){return this._latestMessageSentByMeMap.get(e);}},{key:"modifyMessageSentByPeer",value:function value(e){var t=e.conversationID,o=e.latestNick,n=e.latestAvatar,a=this.list.get(t);if(!no(a)){var s=Array.from(a.values()),r=s.length;if(0!==r){for(var i=null,c=0,u=!1,l=r-1;l>=0;l--){"in"===s[l].flow&&((i=s[l]).nick!==o&&(i.setNickAndAvatar({nick:o}),u=!0),i.avatar!==n&&(i.setNickAndAvatar({avatar:n}),u=!0),u&&(c+=1));}je.log("".concat(this._className,".modifyMessageSentByPeer conversationID:").concat(t," count:").concat(c));}}}},{key:"modifyMessageSentByMe",value:function value(e){var t=e.conversationID,o=e.latestNick,n=e.latestAvatar,a=this.list.get(t);if(!no(a)){var s=Array.from(a.values()),r=s.length;if(0!==r){for(var i=null,c=0,u=!1,l=r-1;l>=0;l--){"out"===s[l].flow&&((i=s[l]).nick!==o&&(i.setNickAndAvatar({nick:o}),u=!0),i.avatar!==n&&(i.setNickAndAvatar({avatar:n}),u=!0),u&&(c+=1));}je.log("".concat(this._className,".modifyMessageSentByMe conversationID:").concat(t," count:").concat(c));}}}},{key:"getTopicConversationIDList",value:function value(e){return M(this.list.keys()).filter(function(t){return t.startsWith("".concat(N.CONV_GROUP).concat(e));});}},{key:"traversal",value:function value(){if(0!==this.list.size&&-1===je.getLevel()){console.group("conversationID-messageCount");var e,t=E(this.list);try{for(t.s();!(e=t.n()).done;){var o=m(e.value,2),n=o[0],a=o[1];console.log("".concat(n,"-").concat(a.size));}}catch(s){t.e(s);}finally{t.f();}console.groupEnd();}}},{key:"onMessageModified",value:function value(e,t){if(!this.list.has(e))return{isUpdated:!1,message:null};var o=this._getUniqueIDOfMessage(t),n=this.list.get(e).has(o);if(je.debug("".concat(this._className,".onMessageModified conversationID:").concat(e," uniqueID:").concat(o," has:").concat(n)),n){var a=this.list.get(e).get(o),s=t.messageVersion,r=t.elements,i=t.cloudCustomData;return a.version<s?(a.version=s,a._elements=JSON.parse(JSON.stringify(r)),a.payload=JSON.parse(JSON.stringify(r[0].content)),a.type=r[0].type,a.cloudCustomData=i,a.isModified=!0,{isUpdated:!0,message:a}):{isUpdated:!1,message:a};}return{isUpdated:!1,message:null};}},{key:"_getUniqueIDOfMessage",value:function value(e){var t=e.from,o=e.to,n=e.random,a=e.sequence,s=e.time;return"".concat(t,"-").concat(o,"-").concat(n,"-").concat(a,"-").concat(s);}},{key:"reset",value:function value(){this.list.clear(),this._latestMessageSentByPeerMap.clear(),this._latestMessageSentByMeMap.clear();}}]),e;}(),cr="_a2KeyAndTinyIDUpdated",ur="_cloudConfigUpdated",lr="_profileUpdated";function dr(e){this.mixin(e);}dr.mixin=function(e){var t=e.prototype||e;t._isReady=!1,t.ready=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e)return this._isReady?void(t?e.call(this):setTimeout(e,1)):(this._readyQueue=this._readyQueue||[],void this._readyQueue.push(e));},t.triggerReady=function(){var e=this;this._isReady=!0,setTimeout(function(){var t=e._readyQueue;e._readyQueue=[],t&&t.length>0&&t.forEach(function(e){e.call(this);},e);},1);},t.resetReady=function(){this._isReady=!1,this._readyQueue=[];},t.isReady=function(){return this._isReady;};};var pr=["jpg","jpeg","gif","png","bmp","image","webp"],gr=["mp4","quicktime","mov"],_r=1,hr=2,fr=3,mr=255,Mr=function(){function e(t){var o=this;n(this,e),no(t)||(this.userID=t.userID||"",this.nick=t.nick||"",this.gender=t.gender||"",this.birthday=t.birthday||0,this.location=t.location||"",this.selfSignature=t.selfSignature||"",this.allowType=t.allowType||N.ALLOW_TYPE_ALLOW_ANY,this.language=t.language||0,this.avatar=t.avatar||"",this.messageSettings=t.messageSettings||0,this.adminForbidType=t.adminForbidType||N.FORBID_TYPE_NONE,this.level=t.level||0,this.role=t.role||0,this.lastUpdatedTime=0,this.profileCustomField=[],no(t.profileCustomField)||t.profileCustomField.forEach(function(e){o.profileCustomField.push({key:e.key,value:e.value});}));}return s(e,[{key:"validate",value:function value(e){var t=!0,o="";if(no(e))return{valid:!1,tips:"empty options"};if(e.profileCustomField)for(var n=e.profileCustomField.length,a=null,s=0;s<n;s++){if(a=e.profileCustomField[s],!ct(a.key)||-1===a.key.indexOf("Tag_Profile_Custom"))return{valid:!1,tips:"The prefix of keys of the custom profile key-value pairs (which is profileCustomField) must be Tag_Profile_Custom"};if(!ct(a.value))return{valid:!1,tips:"The type of values of the custom profile key-value pairs (which is profileCustomField) must be String"};}for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){if("profileCustomField"===r)continue;if(no(e[r])&&!ct(e[r])&&!it(e[r])){o="key:"+r+", invalid value:"+e[r],t=!1;continue;}switch(r){case"nick":ct(e[r])||(o="nick must be a string",t=!1),Tt(e[r])>500&&(o="nick name limited: must less than or equal to ".concat(500," bytes, current size: ").concat(Tt(e[r])," bytes"),t=!1);break;case"gender":Dt(Je,e.gender)||(o="key:gender, invalid value:"+e.gender,t=!1);break;case"birthday":it(e.birthday)||(o="birthday must be a number",t=!1);break;case"location":ct(e.location)||(o="location must be a string",t=!1);break;case"selfSignature":ct(e.selfSignature)||(o="selfSignature must be a string",t=!1);break;case"allowType":Dt(Qe,e.allowType)||(o="key:allowType, invalid value:"+e.allowType,t=!1);break;case"language":it(e.language)||(o="language must be a number",t=!1);break;case"avatar":ct(e.avatar)||(o="avatar must be a string",t=!1);break;case"messageSettings":0!==e.messageSettings&&1!==e.messageSettings&&(o="messageSettings must be 0 or 1",t=!1);break;case"adminForbidType":Dt(Xe,e.adminForbidType)||(o="key:adminForbidType, invalid value:"+e.adminForbidType,t=!1);break;case"level":it(e.level)||(o="level must be a number",t=!1);break;case"role":it(e.role)||(o="role must be a number",t=!1);break;default:o="unknown key:"+r+"  "+e[r],t=!1;}}}return{valid:t,tips:o};}}]),e;}(),vr=s(function e(t){n(this,e),this.value=t,this.next=null;}),yr=function(){function e(t){n(this,e),this.MAX_LENGTH=t,this.pTail=null,this.pNodeToDel=null,this.map=new Map(),je.debug("SinglyLinkedList init MAX_LENGTH:".concat(this.MAX_LENGTH));}return s(e,[{key:"set",value:function value(e){var t=new vr(e);if(this.map.size<this.MAX_LENGTH)null===this.pTail?(this.pTail=t,this.pNodeToDel=t):(this.pTail.next=t,this.pTail=t),this.map.set(e,1);else{var o=this.pNodeToDel;this.pNodeToDel=this.pNodeToDel.next,this.map.delete(o.value),o.next=null,o=null,this.pTail.next=t,this.pTail=t,this.map.set(e,1);}}},{key:"has",value:function value(e){return this.map.has(e);}},{key:"delete",value:function value(e){this.has(e)&&this.map.delete(e);}},{key:"tail",value:function value(){return this.pTail;}},{key:"size",value:function value(){return this.map.size;}},{key:"data",value:function value(){return Array.from(this.map.keys());}},{key:"reset",value:function value(){for(var e;null!==this.pNodeToDel;){e=this.pNodeToDel,this.pNodeToDel=this.pNodeToDel.next,e.next=null,e=null;}this.pTail=null,this.map.clear();}}]),e;}(),Ir=["groupID","name","avatar","type","introduction","notification","ownerID","selfInfo","createTime","infoSequence","lastInfoTime","lastMessage","nextMessageSeq","memberNum","maxMemberNum","memberList","joinOption","groupCustomField","muteAllMembers","isSupportTopic"],Tr=function(){function e(t){n(this,e),this.groupID="",this.name="",this.avatar="",this.type="",this.introduction="",this.notification="",this.ownerID="",this.createTime="",this.infoSequence="",this.lastInfoTime="",this.selfInfo={messageRemindType:"",joinTime:"",nameCard:"",role:"",userID:"",memberCustomField:void 0,readedSequence:0,excludedUnreadSequenceList:void 0},this.lastMessage={lastTime:"",lastSequence:"",fromAccount:"",messageForShow:""},this.nextMessageSeq="",this.memberNum="",this.memberCount="",this.maxMemberNum="",this.maxMemberCount="",this.joinOption="",this.groupCustomField=[],this.muteAllMembers=!1,this.isSupportTopic=!1,this._initGroup(t);}return s(e,[{key:"memberNum",get:function get(){return this.memberCount;},set:function set(e){}},{key:"maxMemberNum",get:function get(){return this.maxMemberCount;},set:function set(e){}},{key:"_initGroup",value:function value(e){for(var t in e){Ir.indexOf(t)<0||("selfInfo"!==t?("memberNum"===t&&(this.memberCount=e[t]),"maxMemberNum"===t&&(this.maxMemberCount=e[t]),"isSupportTopic"!==t?this[t]=e[t]:this.isSupportTopic=1===e[t]):this.updateSelfInfo(e[t]));}}},{key:"updateGroup",value:function value(e){var t=this,o=JSON.parse(JSON.stringify(e));o.lastMsgTime&&(this.lastMessage.lastTime=o.lastMsgTime),pt(o.muteAllMembers)||("On"===o.muteAllMembers?o.muteAllMembers=!0:o.muteAllMembers=!1),o.groupCustomField&&Rt(this.groupCustomField,o.groupCustomField),pt(o.memberNum)||(this.memberCount=o.memberNum),pt(o.maxMemberNum)||(this.maxMemberCount=o.maxMemberNum),pt(o.isSupportTopic)||(this.isSupportTopic=it(o.isSupportTopic)?1===o.isSupportTopic:o.isSupportTopic),yt(this,o,["members","errorCode","lastMsgTime","groupCustomField","memberNum","maxMemberNum","isSupportTopic"]),dt(o.members)&&o.members.length>0&&o.members.forEach(function(e){e.userID===t.selfInfo.userID&&yt(t.selfInfo,e,["sequence"]);});}},{key:"updateSelfInfo",value:function value(e){var o={nameCard:e.nameCard,joinTime:e.joinTime,role:e.role,messageRemindType:e.messageRemindType,readedSequence:e.readedSequence,excludedUnreadSequenceList:e.excludedUnreadSequenceList};yt(this.selfInfo,t({},o),[],["",null,void 0,0,NaN]);}},{key:"setSelfNameCard",value:function value(e){this.selfInfo.nameCard=e;}}]),e;}(),Cr=function Cr(e,o){return pt(e)?{lastTime:0,lastSequence:0,fromAccount:0,messageForShow:"",payload:null,type:"",isRevoked:!1,cloudCustomData:"",onlineOnlyFlag:!1,nick:"",nameCard:"",version:0,isPeerRead:!1}:e instanceof $s?{lastTime:e.time||0,lastSequence:e.sequence||0,fromAccount:e.from||"",messageForShow:Jt(e.type,e.payload,o),payload:e.payload||null,type:e.type||null,isRevoked:e.isRevoked||!1,cloudCustomData:e.cloudCustomData||"",onlineOnlyFlag:e._onlineOnlyFlag||!1,nick:e.nick||"",nameCard:e.nameCard||"",version:e.version||0,isPeerRead:e.isPeerRead||!1}:t(t({},e),{},{messageForShow:Jt(e.type,e.payload,o)});},Er=function(){function e(t,o){n(this,e),this.conversationID=t.conversationID||"",this.unreadCount=t.unreadCount||0,this.type=t.type||"",this.lastMessage=Cr(t.lastMessage,o),t.lastMsgTime&&(this.lastMessage.lastTime=t.lastMsgTime),this._isInfoCompleted=!1,this.peerReadTime=t.peerReadTime||0,this.groupAtInfoList=[],this.remark="",this.isPinned=t.isPinned||!1,this.messageRemindType="",this.markList=[],this.customData=t.customData||"",this.conversationGroupList=t.conversationGroupList||[],this._initProfile(t);}return s(e,[{key:"toAccount",get:function get(){return this.conversationID.startsWith(N.CONV_C2C)?this.conversationID.replace(N.CONV_C2C,""):this.conversationID.startsWith(N.CONV_GROUP)?this.conversationID.replace(N.CONV_GROUP,""):"";}},{key:"subType",get:function get(){return this.groupProfile?this.groupProfile.type:"";}},{key:"_initProfile",value:function value(e){var t=this;Object.keys(e).forEach(function(o){switch(o){case"userProfile":t.userProfile=e.userProfile;break;case"groupProfile":t.groupProfile=e.groupProfile;}}),pt(this.userProfile)&&this.type===N.CONV_C2C?this.userProfile=new Mr({userID:e.conversationID.replace("C2C","")}):pt(this.groupProfile)&&this.type===N.CONV_GROUP&&(this.groupProfile=new Tr({groupID:e.conversationID.replace("GROUP","")}));}},{key:"updateUnreadCount",value:function value(e){var t=e.nextUnreadCount,o=e.isFromGetConversations,n=e.isUnreadC2CMessage;pt(t)||(Lt(this.subType)?this.unreadCount=0:o&&this.type===N.CONV_GROUP||o&&this.type===N.CONV_TOPIC||n&&this.type===N.CONV_C2C?this.unreadCount=t:this.unreadCount=this.unreadCount+t);}},{key:"updateLastMessage",value:function value(e){this.lastMessage=Cr(e);}},{key:"updateGroupAtInfoList",value:function value(e){if(!this._isNeedMergeGroupAtInfo(e)){var t,o=(v(t=e.groupAtType)||y(t)||I(t)||C()).slice(0);-1!==o.indexOf(N.CONV_AT_ME)&&-1!==o.indexOf(N.CONV_AT_ALL)&&(o=[N.CONV_AT_ALL_AT_ME]);var n={from:e.from,groupID:e.groupID,topicID:e.topicID,messageSequence:e.sequence,atTypeArray:o,__random:e.__random,__sequence:e.__sequence};this.groupAtInfoList.push(n),je.debug("Conversation.updateGroupAtInfoList conversationID:".concat(this.conversationID),this.groupAtInfoList);}}},{key:"_isNeedMergeGroupAtInfo",value:function value(e){var t=e.groupID,o=e.sequence;if(!Gt({groupID:t}))return!1;var n=!1;return this.groupAtInfoList.forEach(function(t){t.messageSequence===o&&(t.atTypeArray.indexOf(N.CONV_AT_ME)>-1&&e.groupAtType.indexOf(N.CONV_AT_ALL)>-1&&(t.atTypeArray=[N.CONV_AT_ALL_AT_ME]),t.atTypeArray.indexOf(N.CONV_AT_ALL)>-1&&e.groupAtType.indexOf(N.CONV_AT_ME)>-1&&(t.atTypeArray=[N.CONV_AT_ALL_AT_ME],t.__random=e.__random,t.__sequence=e.__sequence),n=!0);}),n;}},{key:"clearGroupAtInfoList",value:function value(){this.groupAtInfoList.length=0;}},{key:"reduceUnreadCount",value:function value(){return this.unreadCount>=1&&(this.unreadCount-=1,!0);}},{key:"isLastMessageRevoked",value:function value(e){var t=e.sequence,o=e.time;return this.type===N.CONV_C2C&&t===this.lastMessage.lastSequence&&o===this.lastMessage.lastTime||this.type===N.CONV_GROUP&&t===this.lastMessage.lastSequence;}},{key:"setLastMessageRevoked",value:function value(e){this.lastMessage.isRevoked=e;}}]),e;}(),Sr=function(){function e(t){n(this,e),this._conversationModule=t,this._className="MessageRemindHandler",this._updateSequence=0;}return s(e,[{key:"getC2CMessageRemindType",value:function value(){var e=this,t="".concat(this._className,".getC2CMessageRemindType");return this._conversationModule.request({protocolName:Pn,updateSequence:this._updateSequence}).then(function(o){je.log("".concat(t," ok"));var n=o.data,a=n.updateSequence,s=n.muteFlagList;e._updateSequence=a,e._patchC2CMessageRemindType(s);}).catch(function(e){je.error("".concat(t," failed. error:"),e);});}},{key:"_patchC2CMessageRemindType",value:function value(e){var t=this,o=0,n="";dt(e)&&e.length>0&&e.forEach(function(e){var a=e.userID,s=e.muteFlag;0===s?n=N.MSG_REMIND_ACPT_AND_NOTE:1===s?n=N.MSG_REMIND_DISCARD:2===s&&(n=N.MSG_REMIND_ACPT_NOT_NOTE),!0===t._conversationModule.patchMessageRemindType({ID:a,isC2CConversation:!0,messageRemindType:n})&&(o+=1);}),je.log("".concat(this._className,"._patchC2CMessageRemindType count:").concat(o));}},{key:"set",value:function value(e){return e.groupID?this._setGroupMessageRemindType(e):dt(e.userIDList)?this._setC2CMessageRemindType(e):void 0;}},{key:"_setGroupMessageRemindType",value:function value(e){var t=this,o="".concat(this._className,"._setGroupMessageRemindType"),n=e.groupID,a=e.messageRemindType,s="groupID:".concat(n," messageRemindType:").concat(a),r=new Os(Ls.SET_MESSAGE_REMIND_TYPE);return r.setMessage(s),this._getModule(Wo).modifyGroupMemberInfo({groupID:n,messageRemindType:a,userID:this._conversationModule.getMyUserID()}).then(function(){r.setNetworkType(t._conversationModule.getNetworkType()).end(),je.log("".concat(o," ok. ").concat(s));var n=t.onGroupMessageRemindTypeUpdated(e);return t._conversationModule.emitTotalUnreadMessageCountUpdate(),zs(n);}).catch(function(e){return t._conversationModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"onGroupMessageRemindTypeUpdated",value:function value(e){var t=e.groupID,o=e.messageRemindType,n=this._getModule(Ko).getLocalGroupProfile(t);if(n&&(n.selfInfo.messageRemindType=o),Pt(t)){var a=t,s=zt(a),r=this._getModule(Yo).getLocalTopic(s,a);return r&&(r.updateSelfInfo({messageRemindType:o}),this._conversationModule.emitOuterEvent(D.TOPIC_UPDATED,{groupID:s,topic:r})),{topic:r};}return this._conversationModule.patchMessageRemindType({ID:t,isC2CConversation:!1,messageRemindType:o})&&this._emitConversationUpdate(),{group:n};}},{key:"_setC2CMessageRemindType",value:function value(e){var t=this,o="".concat(this._className,"._setC2CMessageRemindType"),n=e.userIDList,a=e.messageRemindType,s=n.slice(0,30),r=0;a===N.MSG_REMIND_DISCARD?r=1:a===N.MSG_REMIND_ACPT_NOT_NOTE&&(r=2);var i="userIDList:".concat(s," messageRemindType:").concat(a),c=new Os(Ls.SET_MESSAGE_REMIND_TYPE);return c.setMessage(i),this._conversationModule.request({protocolName:Gn,requestData:{userIDList:s,muteFlag:r}}).then(function(e){c.setNetworkType(t._conversationModule.getNetworkType()).end();var n=e.data,r=n.updateSequence,i=n.errorList;t._updateSequence=r;var u=[],l=[];dt(i)&&i.forEach(function(e){u.push(e.userID),l.push({userID:e.userID,code:e.errorCode});});var d=s.filter(function(e){return-1===u.indexOf(e);});je.log("".concat(o," ok. successUserIDList:").concat(d," failureUserIDList:").concat(JSON.stringify(l)));var p=0;return d.forEach(function(e){t._conversationModule.patchMessageRemindType({ID:e,isC2CConversation:!0,messageRemindType:a})&&(p+=1);}),p>=1&&t._emitConversationUpdate(),s.length=u.length=0,t._conversationModule.emitTotalUnreadMessageCountUpdate(),ar({successUserIDList:d.map(function(e){return{userID:e};}),failureUserIDList:l});}).catch(function(e){return t._conversationModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];c.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"_getModule",value:function value(e){return this._conversationModule.getModule(e);}},{key:"_emitConversationUpdate",value:function value(){this._conversationModule.emitConversationUpdate(!0,!1);}},{key:"setUpdateSequence",value:function value(e){this._updateSequence=e;}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._updateSequence=0;}}]),e;}(),Dr=function(){function e(t){n(this,e),this._conversationModule=t,this._className="ConvGroupHandler",this._convGroupMap=new Map(),this._startIndex=0,this._pagingStatus=co.NOT_START;}return s(e,[{key:"setConvCustomData",value:function value(e){var t=this,o="".concat(this._className,".setConvCustomData"),n=e.conversationIDList,a=e.customData;je.log("".concat(o," options:"),e);var s=new Os(Ls.SET_CONV_CUSTOM_DATA);s.setMessage(JSON.stringify(e));var r={fromAccount:this._getMyUserID(),itemList:[]},i=[],c=[];return n.forEach(function(e){if(!t._hasLocalConversation(e))return t._onConversationNotFound(c,e),!0;if(!Ut(e)&&!bt(e))return t._onConversationIDInvalid(c,e),!0;var o={operationType:2,contactItem:void 0,customMark:a};Ut(e)?o.contactItem={type:1,toAccount:e.replace(N.CONV_C2C,"")}:bt(e)&&(o.contactItem={type:2,groupID:e.replace(N.CONV_GROUP,"")}),r.itemList.push(o);}),c.length===n.length?ar({successConversationIDList:i,failureConversationIDList:c}):this._conversationModule.request({protocolName:jn,requestData:r}).then(function(e){s.setNetworkType(t._conversationModule.getNetworkType()).end(),je.log("".concat(o," ok"));var n=e.data.resultItem;if(dt(n)){var r,u,l=!1;n.forEach(function(e){r=t._concatConversationID(e.contactItem),0===e.resultCode?(i.push(r),(u=t._getLocalConversation(r))&&u.customData!==a&&(u.customData=a,l=!0)):c.push({conversationID:r,code:e.resultCode,message:e.resultInfo});}),!0===l&&t._emitConversationUpdate();}return zs({successConversationIDList:i,failureConversationIDList:c});}).catch(function(e){return t._conversationModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];s.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"markConversation",value:function value(e){var t=this;if(!this._conversationModule.canIUse(Y.CONV_MARK))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var o="".concat(this._className,".markConversation"),n=e.conversationIDList,a=e.markType,s=e.enableMark;je.log("".concat(o," options:"),e);var r=new Os(Ls.MARK_CONVERSATION);r.setMessage(JSON.stringify(e));var i=void 0,c=void 0,u=this._getFlagBit(a);!0===s?c=[u]:i=[u];var l={fromAccount:this._getMyUserID(),itemList:[]},d=[],p=[];return n.forEach(function(e){if(!t._hasLocalConversation(e))return t._onConversationNotFound(p,e),!0;if(!Ut(e)&&!bt(e))return t._onConversationIDInvalid(p,e),!0;var o={operationType:1,contactItem:void 0,clearMark:i,setMark:c};Ut(e)?o.contactItem={type:1,toAccount:e.replace(N.CONV_C2C,"")}:bt(e)&&(o.contactItem={type:2,groupID:e.replace(N.CONV_GROUP,"")}),l.itemList.push(o);}),p.length===n.length?ar({successConversationIDList:d,failureConversationIDList:p}):this._conversationModule.request({protocolName:$n,requestData:l}).then(function(e){r.setNetworkType(t._conversationModule.getNetworkType()).end(),je.log("".concat(o," ok"));var n=e.data.resultItem;if(dt(n)){var i,c,u=!1;n.forEach(function(e){if(i=t._concatConversationID(e.contactItem),0===e.resultCode){if(d.push(i),c=t._getLocalConversation(i)){var o=c.markList.indexOf(a);!0===s?-1===o&&(c.markList.push(a),u=!0):-1!==o&&(c.markList.splice(o,1),u=!0);}}else p.push({conversationID:i,code:e.resultCode,message:e.resultInfo});}),!0===u&&t._emitConversationUpdate();}return zs({successConversationIDList:d,failureConversationIDList:p});}).catch(function(e){return t._conversationModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"getLocalConvGroupList",value:function value(){var e=this;return je.log("".concat(this._className,".getLocalConvGroupList pagingStatus:").concat(this._pagingStatus)),this._pagingStatus===co.REJECTED?this.getRemoteConvGroupList().then(function(){return zs(M(e._convGroupMap.values()));}):ar(M(this._convGroupMap.values()));}},{key:"getRemoteConvGroupList",value:function value(){var e=this,t="".concat(this._className,".getRemoteConvGroupList");return this._pagingStatus=co.PENDING,this._conversationModule.request({protocolName:ea,requestData:{fromAccount:this._getMyUserID(),startIndex:this._startIndex,startTime:Ke()}}).then(function(o){var n,a,s=o.data,r=s.completeFlag,i=s.contactItem,c=s.nextStartIndex,u=void 0===c?0:c,l=s.groupItem;(e._startIndex=u,je.log("".concat(t," completeFlag:").concat(r," nextStartIndex:").concat(u)),dt(l)&&l.forEach(function(t){var o=t.convGroupID,n=t.groupName;e._convGroupMap.set(o,n);}),dt(i))&&i.forEach(function(t){var o=t.standardMark,s=t.customData,r=t.convGroupIDList;if(n=e._concatConversationID(t),(a=e._getLocalConversation(n))&&(a.markList=Qt(o),a.customData=s||"",dt(r))){var i=[];r.forEach(function(t){e._convGroupMap.has(t)&&i.push(e._convGroupMap.get(t));}),a.conversationGroupList=[].concat(i),i.length=0;}});if(0===r)return e.getRemoteConvGroupList();1===r&&(e._pagingStatus=co.RESOLVED,e._emitConversationUpdate(),e._emitConvGroupListUpdate());}).catch(function(o){e._pagingStatus=co.REJECTED,je.warn("".concat(t," failed. error:"),o);});}},{key:"createConvGroup",value:function value(e){var t=this;if(!this._conversationModule.canIUse(Y.CONV_GROUP))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var o=new Os(Ls.CREATE_CONV_GROUP);o.setMessage(JSON.stringify(e));var n="".concat(this._className,".createConvGroup");je.log("".concat(n," options:"),e);var a=e.groupName,s=e.conversationIDList,r={fromAccount:this._getMyUserID(),itemList:[{groupName:a,contactItem:[]}]},i=[],c=[];return s.forEach(function(e){return t._hasLocalConversation(e)?Ut(e)||bt(e)?void(Ut(e)?r.itemList[0].contactItem.push({type:1,toAccount:e.replace(N.CONV_C2C,"")}):bt(e)&&r.itemList[0].contactItem.push({type:2,groupID:e.replace(N.CONV_GROUP,"")})):(t._onConversationIDInvalid(c,e),!0):(t._onConversationNotFound(c,e),!0);}),c.length===s.length?ar({successConversationIDList:i,failureConversationIDList:c}):this._conversationModule.request({protocolName:zn,requestData:r}).then(function(e){o.setNetworkType(t._conversationModule.getNetworkType()).end(),je.log("".concat(n," ok"));var s=e.data.groupResultItem[0],r=s.groupItem,u=s.resultItem;if(lt(r)&&(t._convGroupMap.set(r.convGroupID,r.groupName),t._emitConvGroupListUpdate()),dt(u)){var l,d,p=!1;u.forEach(function(e){l=t._concatConversationID(e.contactItem),0===e.resultCode?(i.push(l),(d=t._getLocalConversation(l))&&-1===d.conversationGroupList.indexOf(a)&&(d.conversationGroupList.push(a),p=!0)):c.push({conversationID:l,code:e.resultCode,message:e.resultInfo});}),!0===p&&(t._emitConversationUpdate(),t._emitConvGroupListUpdate());}return zs({successConversationIDList:i,failureConversationIDList:c});}).catch(function(e){return t._conversationModule.probeNetwork().then(function(t){var n=m(t,2),a=n[0],s=n[1];o.setError(e,a,s).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"deleteConvGroup",value:function value(e){var t=this;if(!this._conversationModule.canIUse(Y.CONV_GROUP))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var o=new Os(Ls.DELETE_CONV_GROUP);o.setMessage(e);var n="".concat(this._className,".deleteConvGroup");return je.log("".concat(n," groupName:").concat(e)),this._conversationModule.request({protocolName:Jn,requestData:{fromAccount:this._getMyUserID(),groupName:[e]}}).then(function(a){o.setNetworkType(t._conversationModule.getNetworkType()).end(),je.log("".concat(n," ok"));var s=a.data.groupItem;if(dt(s)){var r=!1;s.forEach(function(e){t._convGroupMap.has(e.convGroupID)&&(t._convGroupMap.delete(e.convGroupID),r=!0);}),!0===r&&t._emitConvGroupListUpdate();}t._eraseFromConversationGroupList([e]);}).catch(function(e){return t._conversationModule.probeNetwork().then(function(t){var n=m(t,2),a=n[0],s=n[1];o.setError(e,a,s).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"renameConvGroup",value:function value(e){var t=this;if(!this._conversationModule.canIUse(Y.CONV_GROUP))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var o=new Os(Ls.RENAME_CONV_GROUP);o.setMessage(JSON.stringify(e));var n="".concat(this._className,".renameConvGroup");je.log("".concat(n," options:"),e);var a=e.oldName,s=e.newName;return this._conversationModule.request({protocolName:Xn,requestData:{fromAccount:this._getMyUserID(),updateType:1,updateGroup:{updateGroupType:1,oldName:a,newName:s}}}).then(function(e){o.setNetworkType(t._conversationModule.getNetworkType()).end(),je.log("".concat(n," ok"));var r=e.data.updateGroupResult.convGroupID;t._convGroupMap.set(r,s),t._emitConvGroupListUpdate();var i,c,u=t._conversationModule.getLocalConversationList(),l=!1;u.forEach(function(e){i=e.conversationGroupList,-1!==(c=i.indexOf(a))&&(i.splice(c,1,s),l=!0);}),!0===l&&t._emitConversationUpdate();}).catch(function(e){return t._conversationModule.probeNetwork().then(function(t){var n=m(t,2),a=n[0],s=n[1];o.setError(e,a,s).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"addConvsToGroup",value:function value(e){var t=this;if(!this._conversationModule.canIUse(Y.CONV_GROUP))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var o=new Os(Ls.ADD_CONVS_TO_GROUP);o.setMessage(JSON.stringify(e));var n="".concat(this._className,".addConvsToGroup");je.log("".concat(n," options:"),e);var a=e.conversationIDList,s=e.groupName,r={fromAccount:this._getMyUserID(),updateType:1,updateGroup:{updateGroupType:2,groupName:s,updateItem:[]}},i=[],c=[];return a.forEach(function(e){return t._hasLocalConversation(e)?Ut(e)||bt(e)?void(Ut(e)?r.updateGroup.updateItem.push({operationType:1,contactItem:{type:1,toAccount:e.replace(N.CONV_C2C,"")}}):bt(e)&&r.updateGroup.updateItem.push({operationType:1,contactItem:{type:2,groupID:e.replace(N.CONV_GROUP,"")}})):(t._onConversationIDInvalid(c,e),!0):(t._onConversationNotFound(c,e),!0);}),c.length===a.length?ar({successConversationIDList:i,failureConversationIDList:c}):this._conversationModule.request({protocolName:Qn,requestData:r}).then(function(e){o.setNetworkType(t._conversationModule.getNetworkType()).end(),je.log("".concat(n," ok"));var a=e.data.updateGroupResult.contactResultItem;if(dt(a)){var r,u,l=!1;a.forEach(function(e){r=t._concatConversationID(e.contactItem),0===e.resultCode?(u=t._getLocalConversation(r))&&-1===u.conversationGroupList.indexOf(s)&&(u.conversationGroupList.push(s),i.push(r),l=!0):c.push({conversationID:r,code:e.resultCode,message:e.resultInfo});}),!0===l&&(t._emitConversationUpdate(),t._emitConvInGroupUpdate(s));}return zs({successConversationIDList:i,failureConversationIDList:c});}).catch(function(e){return t._conversationModule.probeNetwork().then(function(t){var n=m(t,2),a=n[0],s=n[1];o.setError(e,a,s).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"deleteConvsFromGroup",value:function value(e){var t=this;if(!this._conversationModule.canIUse(Y.CONV_GROUP))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var o=new Os(Ls.DELETE_CONVS_FROM_GROUP);o.setMessage(JSON.stringify(e));var n="".concat(this._className,".deleteConvsFromGroup");je.log("".concat(n," options:"),e);var a=e.conversationIDList,s=e.groupName,r={fromAccount:this._getMyUserID(),updateType:1,updateGroup:{updateGroupType:2,groupName:s,updateItem:[]}},i=[],c=[];return a.forEach(function(e){return t._hasLocalConversation(e)?Ut(e)||bt(e)?void(Ut(e)?r.updateGroup.updateItem.push({operationType:2,contactItem:{type:1,toAccount:e.replace(N.CONV_C2C,"")}}):bt(e)&&r.updateGroup.updateItem.push({operationType:2,contactItem:{type:2,groupID:e.replace(N.CONV_GROUP,"")}})):(t._onConversationIDInvalid(c,e),!0):(t._onConversationNotFound(c,e),!0);}),c.length===a.length?ar({successConversationIDList:i,failureConversationIDList:c}):this._conversationModule.request({protocolName:Zn,requestData:r}).then(function(e){o.setNetworkType(t._conversationModule.getNetworkType()).end(),je.log("".concat(n," ok"));var a=e.data.updateGroupResult.contactResultItem;if(dt(a)){var r,u,l=!1;a.forEach(function(e){if(r=t._concatConversationID(e.contactItem),0===e.resultCode){if(u=t._getLocalConversation(r)){var o=u.conversationGroupList.indexOf(s);-1!==o&&(u.conversationGroupList.splice(o,1),i.push(r),l=!0);}}else c.push({conversationID:r,code:e.resultCode,message:e.resultInfo});}),!0===l&&(t._emitConversationUpdate(),t._emitConvInGroupUpdate(s));}return zs({successConversationIDList:i,failureConversationIDList:c});}).catch(function(e){return t._conversationModule.probeNetwork().then(function(t){var n=m(t,2),a=n[0],s=n[1];o.setError(e,a,s).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"onConvMarkUpdated",value:function value(e){var t=this;if(!no(e)){var o,n;je.debug("".concat(this._className,".onConvMarkUpdated markItemList:"),e);var a=!1;e.forEach(function(e){var s=e.recentContactItem,r=e.optType,i=e.standardMark,c=e.customMark;if(o=t._concatConversationID(s),n=t._getLocalConversation(o))if(1===r){var u=Qt(i);!0!==function(e,t){if(e===t)return!0;if(!e||!t)return!1;if(e.length!==t.length)return!1;for(var o=0,n=e.length;o<n;o++){if(e[o]!==t[o])return!1;}return!0;}(n.markList,u)&&(n.markList=u,a=!0);}else 2===r&&n.customData!==c&&void 0!==c&&(n.customData=c,a=!0);}),!0===a&&this._emitConversationUpdate();}}},{key:"onConvGroupCreated",value:function value(e){var t=this;je.debug("".concat(this._className,".onConvGroupCreated resultList:"),e);var o=!1,n=!1;dt(e)&&(e.forEach(function(e){var a=e.msgGroupItem,s=a.groupID,r=a.groupName;t._convGroupMap.get(s)!==r&&(t._convGroupMap.set(s,r),n=!0);var i,c,u=e.msgRecentContactItem;dt(u)&&u.forEach(function(e){i=t._concatConversationID(e),(c=t._getLocalConversation(i))&&-1===c.conversationGroupList.indexOf(r)&&(c.conversationGroupList.push(r),o=!0);});}),!0===o&&this._emitConversationUpdate(),!0===n&&this._emitConvGroupListUpdate());}},{key:"onConvGroupDeleted",value:function value(e){var t=this;je.debug("".concat(this._className,".onConvGroupDeleted groupItemList:"),e);var o=[];if(dt(e)){var n=!1;e.forEach(function(e){var a=e.groupID,s=e.groupName;t._convGroupMap.has(a)&&(t._convGroupMap.delete(a),n=!0,o.push(s));}),!0===n&&this._emitConvGroupListUpdate();}this._eraseFromConversationGroupList(o);}},{key:"_eraseFromConversationGroupList",value:function value(e){no(e)||(this._conversationModule.getLocalConversationList().forEach(function(t){t.conversationGroupList=t.conversationGroupList.filter(function(t){return!e.includes(t);});}),this._emitConversationUpdate());}},{key:"onConvGroupNameUpdated",value:function value(e){je.debug("".concat(this._className,".onConvGroupNameUpdated options:"),e);var t=e.groupID,o=e.groupName,n=e.oldGroupName;if(this._convGroupMap.get(t)!==o){this._convGroupMap.set(t,o),this._emitConvGroupListUpdate();var a,s,r=this._conversationModule.getLocalConversationList(),i=!1;r.forEach(function(e){a=e.conversationGroupList,-1!==(s=a.indexOf(n))&&(a.splice(s,1,o),i=!0);}),!0===i&&this._emitConversationUpdate();}}},{key:"onConvInGroupUpdated",value:function value(e){var t=this;je.debug("".concat(this._className,".onConvInGroupUpdated options:"),e);var o=e.oldGroupName,n=e.recentContactUpdateGroupItem;if(dt(n)){var a,s,r,i=!1;n.forEach(function(e){var n=e.contactOptType,c=e.recentContactItem;a=t._concatConversationID(c),(s=t._getLocalConversation(a))&&(r=s.conversationGroupList.indexOf(o),1===n?-1===r&&(s.conversationGroupList.push(o),i=!0):2===n&&-1!==r&&(s.conversationGroupList.splice(r,1),i=!0));}),!0===i&&(this._emitConversationUpdate(),this._emitConvInGroupUpdate(o));}}},{key:"onConvAddedToOrDeletedFromGroup",value:function value(e){var t=this;je.debug("".concat(this._className,".onConvAddedToOrDeletedFromGroup options:"),e);var o=e.msgRecentContactItem,n=e.msgRecentContactUpdateContactItem,a=this._concatConversationID(o),s=this._getLocalConversation(a);if(s&&dt(n)){var r,i=!1;n.forEach(function(e){var o=e.groupOptType,n=e.recentContactGroupItem.groupName;r=s.conversationGroupList.indexOf(n),1===o?-1===r&&(s.conversationGroupList.push(n),i=!0):2===o&&-1!==r&&(s.conversationGroupList.splice(r,1),i=!0),!0===i&&t._emitConvInGroupUpdate(n);}),!0===i&&this._emitConversationUpdate();}}},{key:"onConvGroupListSynced",value:function value(e){var t=this;dt(e)&&0!==e.length&&(je.log("".concat(this._className,".onConvGroupListSynced groupItemList:"),e),e.forEach(function(e){t._convGroupMap.set(e.convGroupID,e.groupName);}));}},{key:"getConvGroupListByID",value:function value(e){var t=this;if(!no(e)){var o=[];return e.forEach(function(e){t._convGroupMap.has(e)&&o.push(t._convGroupMap.get(e));}),o;}}},{key:"_onConversationNotFound",value:function value(e,t){e.push({conversationID:t,code:_n.CONVERSATION_NOT_FOUND,message:this._conversationModule.getErrorMessage(_n.CONVERSATION_NOT_FOUND)});}},{key:"_onConversationIDInvalid",value:function value(e,t){e.push({conversationID:t,code:_n.INVALID_CONVERSATION_ID,message:this._conversationModule.getErrorMessage(_n.INVALID_CONVERSATION_ID)});}},{key:"_getFlagBit",value:function value(e){for(var t=e.toString(2),o=t.length,n=o-1;n>=0;n--){if("1"===t[n])return o-n-1;}}},{key:"_concatConversationID",value:function value(e){var t,o=e.type,n=e.to,a=e.groupID,s=e.userID;return 1===o?pt(s)?pt(n)||(t="".concat(N.CONV_C2C).concat(n)):t="".concat(N.CONV_C2C).concat(s):2===o&&(t="".concat(N.CONV_GROUP).concat(a)),t;}},{key:"_getMyUserID",value:function value(){return this._conversationModule.getMyUserID();}},{key:"_insertConversationGroup",value:function value(e,t){var o=this._getLocalConversation(e);if(o){var n=o.conversationGroupList;-1===n.indexOf(t)&&n.push(t);}}},{key:"_getLocalConversation",value:function value(e){return this._conversationModule.getLocalConversation(e);}},{key:"_hasLocalConversation",value:function value(e){return this._conversationModule.hasLocalConversation(e);}},{key:"_emitConversationUpdate",value:function value(){this._conversationModule.emitConversationUpdate(!0,!1);}},{key:"_emitConvGroupListUpdate",value:function value(){this._conversationModule.emitOuterEvent(D.CONVERSATION_GROUP_LIST_UPDATED,M(this._convGroupMap.values()));}},{key:"_emitConvInGroupUpdate",value:function value(e){var t={groupName:e,conversationList:[]},o=this._conversationModule.getLocalConversationList();t.conversationList=o.filter(function(t){return t.conversationGroupList.includes(e);}),this._conversationModule.emitOuterEvent(D.CONVERSATION_IN_GROUP_UPDATED,t);}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._convGroupMap.clear(),this._startIndex=0,this._pagingStatus=co.NOT_START;}}]),e;}(),Nr=function(e){i(a,e);var o=f(a);function a(e){var t;return n(this,a),(t=o.call(this,e))._className="ConversationModule",dr.mixin(_(t)),t._messageListHandler=new ir(),t._messageRemindHandler=new Sr(_(t)),t._convGroupHandler=new Dr(_(t)),t.singlyLinkedList=new yr(100),t._pagingStatus=co.NOT_START,t._pagingTimeStamp=0,t._pagingStartIndex=0,t._pagingPinnedTimeStamp=0,t._pagingPinnedStartIndex=0,t._conversationMap=new Map(),t._tmpGroupList=[],t._tmpGroupAtTipsList=[],t._peerReadTimeMap=new Map(),t._completedMap=new Map(),t._roamingMessageKeyAndTimeMap=new Map(),t._roamingMessageSequenceMap=new Map(),t._remoteGroupReadSequenceMap=new Map(),t._convTotalUnreadCount=0,t._initListeners(),t;}return s(a,[{key:"_initListeners",value:function value(){var e=this.getInnerEmitterInstance();e.on(cr,this._initLocalConversationList,this),e.on(lr,this._onProfileUpdated,this);}},{key:"onCheckTimer",value:function value(e){e%60==0&&this._messageListHandler.traversal();}},{key:"_initLocalConversationList",value:function value(){var e=this,t=new Os(Ls.GET_CONVERSATION_LIST_IN_STORAGE);je.log("".concat(this._className,"._initLocalConversationList."));var o="",n=this._getStorageConversationList(),a=this.isIntl();if(n){for(var s=n.length,r=0;r<s;r++){var i=n[r];if(i){if(i.conversationID==="".concat(N.CONV_C2C,"@TLS#ERROR")||i.conversationID==="".concat(N.CONV_C2C,"@TLS#NOT_FOUND"))continue;if(i.groupProfile){var c=i.groupProfile.type;if(Lt(c))continue;}}this._conversationMap.set(n[r].conversationID,new Er(n[r],a));}this.emitConversationUpdate(!0,!1),o="count:".concat(s);}else o="count:0";t.setNetworkType(this.getNetworkType()).setMessage(o).end(),this.getModule(Bo)||this.triggerReady(),this.ready(function(){e._tmpGroupList.length>0&&(e.updateConversationGroupProfile(e._tmpGroupList),e._tmpGroupList.length=0);}),this.syncConversationList();}},{key:"onMessageSent",value:function value(e){this._onSendOrReceiveMessage({conversationOptionsList:e.conversationOptionsList,isInstantMessage:!0});}},{key:"onNewMessage",value:function value(e){this._onSendOrReceiveMessage(e);}},{key:"_onSendOrReceiveMessage",value:function value(e){var t=this,o=e.conversationOptionsList,n=e.isInstantMessage,a=void 0===n||n,s=e.isUnreadC2CMessage,r=void 0!==s&&s,i=e.updateUnreadCount,c=void 0===i||i;this._isReady?0!==o.length&&(this._getC2CPeerReadTime(o),this._updateLocalConversationList({conversationOptionsList:o,isInstantMessage:a,isUnreadC2CMessage:r,isFromGetConversations:!1,updateUnreadCount:c}),this._setStorageConversationList(),o.filter(function(e){return e.type===N.CONV_TOPIC;}).length>0||this.emitConversationUpdate()):this.ready(function(){t._onSendOrReceiveMessage(e);});}},{key:"updateConversationGroupProfile",value:function value(e){var t=this;if(!dt(e)||0!==e.length)if(0!==this._conversationMap.size){var o=!1;e.forEach(function(e){var n="GROUP".concat(e.groupID);if(t._conversationMap.has(n)){o=!0;var a=t._conversationMap.get(n);a.groupProfile=JSON.parse(JSON.stringify(e)),a.lastMessage.lastSequence<e.nextMessageSeq&&(a.lastMessage.lastSequence=e.nextMessageSeq-1),a.subType||(a.subType=e.type);}}),o&&this.emitConversationUpdate(!0,!1);}else this._tmpGroupList=e;}},{key:"_updateConversationUserProfile",value:function value(e){var t=this;e.data.forEach(function(e){var o="C2C".concat(e.userID);t._conversationMap.has(o)&&(t._conversationMap.get(o).userProfile=e);}),this.emitConversationUpdate(!0,!1);}},{key:"onMessageRevoked",value:function value(e){var t=this;if(0!==e.length){var o=null,n=!1,a=[];e.forEach(function(e){(o=t._conversationMap.get(e.conversationID))&&(o.type===N.CONV_TOPIC?a.push(e):(o.reduceUnreadCount()&&(n=!0),o.isLastMessageRevoked({sequence:e.sequence,time:e.time})&&(o.setLastMessageRevoked(!0),n=!0)));}),this.getModule(Yo).onMessageRevoked(a),n&&(this.emitConversationUpdate(!0,!1),this.emitTotalUnreadMessageCountUpdate());}}},{key:"isLastMessageRevoked",value:function value(e){var t=!1,o=e.conversationID,n=e.sequence,a=e.time,s=this._conversationMap.get(o);s&&(t=s.type===N.CONV_TOPIC?this.getModule(Yo).isLastMessageRevoked({topicID:o.replace(N.CONV_GROUP,""),sequence:n}):s.isLastMessageRevoked({sequence:n,time:a}));return je.log("".concat(this._className,".isLastMessageRevoked options:").concat(JSON.stringify(e)," ret:").concat(t)),t;}},{key:"onMessageDeleted",value:function value(e){var t=this;if(0!==e.length){var o=null;e.forEach(function(e){(o=t._messageListHandler.getLocalMessage(e.conversationID,e.ID))&&(o.isDeleted=!0),e!==o&&(e.isDeleted=!0);});for(var n=e[0].conversationID,a=this._messageListHandler.getLocalMessageList(n),s={},r=a.length-1;r>=0;r--){if(!a[r].isDeleted){s=a[r];break;}}var i=this._conversationMap.get(n);if(i){var c=!1;i.lastMessage.lastSequence===s.sequence&&i.lastMessage.lastTime===s.time||(no(s)&&(s=void 0),i.updateLastMessage(s),i.type!==N.CONV_TOPIC&&(c=!0),je.log("".concat(this._className,".onMessageDeleted. update conversationID:").concat(n," with lastMessage:"),i.lastMessage)),n.startsWith(N.CONV_C2C)&&this.updateUnreadCount(n),c&&this.emitConversationUpdate(!0,!1);}}}},{key:"onMessageModified",value:function value(e){var t=e.conversationType,o=e.from,n=e.to,a=e.time,s=e.sequence,r=e.elements,i=e.cloudCustomData,c=e.messageVersion,u=this.getMyUserID(),l="".concat(t).concat(n);n===u&&t===N.CONV_C2C&&(l="".concat(t).concat(o));var d=this._messageListHandler.onMessageModified(l,e),p=d.isUpdated,g=d.message;!0===p&&this.emitOuterEvent(D.MESSAGE_MODIFIED,[g]);var _=this._isTopicConversation(l);if(je.log("".concat(this._className,".onMessageModified isUpdated:").concat(p," isTopicMessage:").concat(_," from:").concat(o," to:").concat(n)),_){this.getModule(Yo).onMessageModified(e);}else{var h=this._conversationMap.get(l);if(h){var f=h.lastMessage;je.debug("".concat(this._className.onMessageModified," lastMessage:"),JSON.stringify(f),"options:",JSON.stringify(e)),f&&f.lastTime===a&&f.lastSequence===s&&f.version!==c&&(f.type=r[0].type,f.payload=r[0].content,f.messageForShow=Jt(f.type,f.payload,this.isIntl()),f.cloudCustomData=i,f.version=c,this.emitConversationUpdate(!0,!1));}}return g;}},{key:"onNewGroupAtTips",value:function value(e){var o=this,n=e.dataList,a=null;n.forEach(function(e){e.groupAtTips?a=e.groupAtTips:e.elements?a=t(t({},e.elements),{},{sync:!0}):e.groupAtType&&(a=t(t({},e),{},{sync:!0})),a.__random=e.random,a.__sequence=e.clientSequence,o._tmpGroupAtTipsList.push(a);}),je.debug("".concat(this._className,".onNewGroupAtTips isReady:").concat(this._isReady),this._tmpGroupAtTipsList),this._isReady&&this._handleGroupAtTipsList();}},{key:"_handleGroupAtTipsList",value:function value(){var e=this;if(0!==this._tmpGroupAtTipsList.length){var t=!1;this._tmpGroupAtTipsList.forEach(function(o){var n=o.groupID,a=o.from,s=o.topicID,r=void 0===s?void 0:s,i=o.sync,c=void 0!==i&&i;if(a!==e.getMyUserID())if(pt(r)){var u=e._conversationMap.get("".concat(N.CONV_GROUP).concat(n));u&&(u.updateGroupAtInfoList(o),t=!0);}else{var l=e._conversationMap.get("".concat(N.CONV_GROUP).concat(r));if(l){l.updateGroupAtInfoList(o);var d=e.getModule(Yo),p=l.groupAtInfoList;d.onConversationProxy({topicID:r,groupAtInfoList:p});}if(no(l)&&c)e.updateTopicConversation([{conversationID:"".concat(N.CONV_GROUP).concat(r),type:N.CONV_TOPIC}]),e._conversationMap.get("".concat(N.CONV_GROUP).concat(r)).updateGroupAtInfoList(o);}}),t&&this.emitConversationUpdate(!0,!1),this._tmpGroupAtTipsList.length=0;}}},{key:"_getC2CPeerReadTime",value:function value(e){var t=this,o=[];if(e.forEach(function(e){t._conversationMap.has(e.conversationID)||e.type!==N.CONV_C2C||o.push(e.conversationID.replace(N.CONV_C2C,""));}),o.length>0){je.debug("".concat(this._className,"._getC2CPeerReadTime userIDList:").concat(o));var n=this.getModule(Bo);n&&n.getRemotePeerReadTime(o);}}},{key:"_getStorageConversationList",value:function value(){return this.getModule(zo).getItem("conversationMap");}},{key:"_setStorageConversationList",value:function value(){var e=this.getLocalConversationList().slice(0,20).map(function(e){return{conversationID:e.conversationID,type:e.type,subType:e.subType,lastMessage:e.lastMessage,groupProfile:e.groupProfile,userProfile:e.userProfile};});this.getModule(zo).setItem("conversationMap",e);}},{key:"emitConversationUpdate",value:function value(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this.getLocalConversationList();if(t){var n=this.getModule(Ko);n&&n.updateGroupLastMessage(o);}e&&this.emitOuterEvent(D.CONVERSATION_LIST_UPDATED);}},{key:"getLocalConversationList",value:function value(){return M(this._conversationMap.values()).filter(function(e){return e.type!==N.CONV_TOPIC;});}},{key:"getLocalConversation",value:function value(e){return this._conversationMap.get(e);}},{key:"hasLocalConversation",value:function value(e){return this._conversationMap.has(e);}},{key:"getLocalOldestMessage",value:function value(e){return this._messageListHandler.getLocalOldestMessage(e);}},{key:"syncConversationList",value:function value(){var e=this,t=new Os(Ls.SYNC_CONVERSATION_LIST);return this._pagingStatus===co.NOT_START&&this._conversationMap.clear(),this._pagingGetConversationList().then(function(o){return e._pagingStatus=co.RESOLVED,e._setStorageConversationList(),e._handleC2CPeerReadTime(),e._patchConversationProperties(),t.setMessage(e._conversationMap.size).setNetworkType(e.getNetworkType()).end(),o;}).catch(function(o){return e._pagingStatus=co.REJECTED,t.setMessage(e._pagingTimeStamp),e.probeNetwork().then(function(e){var n=m(e,2),a=n[0],s=n[1];t.setError(o,a,s).end();}),sr(o);});}},{key:"_patchConversationProperties",value:function value(){var e=this,t=Date.now(),o=this.checkAndPatchRemark(),n=this._messageRemindHandler.getC2CMessageRemindType(),a=this.getModule(Ko).getGroupList();Promise.all([o,n,a]).then(function(){var o=Date.now()-t;je.log("".concat(e._className,"._patchConversationProperties ok. cost ").concat(o," ms")),e.emitConversationUpdate(!0,!1),e.emitTotalUnreadMessageCountUpdate();});}},{key:"_pagingGetConversationList",value:function value(){var e=this,t="".concat(this._className,"._pagingGetConversationList");return je.log("".concat(t," timeStamp:").concat(this._pagingTimeStamp," startIndex:").concat(this._pagingStartIndex)+" pinnedTimeStamp:".concat(this._pagingPinnedTimeStamp," pinnedStartIndex:").concat(this._pagingPinnedStartIndex)),this._pagingStatus=co.PENDING,this.request({protocolName:xn,requestData:{fromAccount:this.getMyUserID(),timeStamp:this._pagingTimeStamp,startIndex:this._pagingStartIndex,pinnedTimeStamp:this._pagingPinnedTimeStamp,pinnedStartIndex:this._pagingPinnedStartIndex,orderType:1}}).then(function(o){var n=o.data,a=n.completeFlag,s=n.conversations,r=void 0===s?[]:s,i=n.timeStamp,c=n.startIndex,u=n.pinnedTimeStamp,l=n.pinnedStartIndex,d=n.groupItem;if(je.log("".concat(t," ok. completeFlag:").concat(a," count:").concat(r.length," isReady:").concat(e._isReady)),e._convGroupHandler.onConvGroupListSynced(d),r.length>0){var p=e._getConversationOptions(r);e._updateLocalConversationList({conversationOptionsList:p,isFromGetConversations:!0}),e.isLoggedIn()&&e.emitConversationUpdate();}if(!e._isReady){if(!e.isLoggedIn())return ar();e.triggerReady();}return e._pagingTimeStamp=i,e._pagingStartIndex=c,e._pagingPinnedTimeStamp=u,e._pagingPinnedStartIndex=l,1!==a?e._pagingGetConversationList():(e._handleGroupAtTipsList(),e._convGroupHandler.getRemoteConvGroupList(),ar());}).catch(function(o){throw e.isLoggedIn()&&(e._isReady||(je.warn("".concat(t," failed. error:"),o),e.triggerReady())),o;});}},{key:"_updateLocalConversationList",value:function value(e){var t,o=e.isFromGetConversations,n=e.isInstantMessage,a=Date.now();t=this._getTmpConversationListMapping(e),this._conversationMap=new Map(this._sortConversationList([].concat(M(t.toBeUpdatedConversationList),M(this._conversationMap)))),o||(this._updateUserOrGroupProfile(t.newConversationList),n&&this.emitTotalUnreadMessageCountUpdate()),je.debug("".concat(this._className,"._updateLocalConversationList cost ").concat(Date.now()-a," ms"));}},{key:"_getTmpConversationListMapping",value:function value(e){for(var t=e.conversationOptionsList,o=e.isFromGetConversations,n=e.isInstantMessage,a=e.isUnreadC2CMessage,s=void 0!==a&&a,r=e.updateUnreadCount,i=[],c=[],u=this.getModule(Ko),l=this.getModule(Ho),d=this.isIntl(),p=0,g=t.length;p<g;p++){var _=new Er(t[p],d),h=_.conversationID;if(h!=="".concat(N.CONV_C2C,"@TLS#ERROR")&&h!=="".concat(N.CONV_C2C,"@TLS#NOT_FOUND"))if(this._conversationMap.has(h)){var f=this._conversationMap.get(h),m=["unreadCount","allowType","adminForbidType","payload","isPinned"];!1===n&&m.push("lastMessage");var M=t[p].lastMessage,v=!pt(M);v||t[p].type===N.CONV_TOPIC||this._onLastMessageNotExist(t[p]),pt(n)&&v&&null===f.lastMessage.payload&&(f.lastMessage.payload=M.payload),yt(f,_,m,[null,void 0,"",0,NaN]),!0===r&&f.updateUnreadCount({nextUnreadCount:_.unreadCount,isFromGetConversations:o,isUnreadC2CMessage:s}),n&&v&&(M.payload&&(f.lastMessage.payload=M.payload),f.type===N.CONV_GROUP&&(f.lastMessage.nameCard=M.nameCard,f.lastMessage.nick=M.nick)),v&&f.lastMessage.cloudCustomData!==M.cloudCustomData&&(f.lastMessage.cloudCustomData=M.cloudCustomData||""),this._conversationMap.delete(h),i.push([h,f]);}else{if(_.type===N.CONV_GROUP&&u){var y=_.groupProfile.groupID,I=u.getLocalGroupProfile(y);I&&(_.groupProfile=I,!0===r&&_.updateUnreadCount({nextUnreadCount:0}));}else if(_.type===N.CONV_C2C){var T=h.replace(N.CONV_C2C,"");l&&l.isMyFriend(T)&&(_.remark=l.getFriendRemark(T));}c.push(_),i.push([h,_]);}}var C=this.getModule(Yo);return i.forEach(function(e){if(e[1].type===N.CONV_TOPIC){var t=e[1],o=t.conversationID,n=t.unreadCount,a=t.groupAtInfoList;C.onConversationProxy({topicID:o.replace(N.CONV_GROUP,""),unreadCount:n,groupAtInfoList:no(a)?void 0:a});}}),{toBeUpdatedConversationList:i,newConversationList:c};}},{key:"_onLastMessageNotExist",value:function value(e){new Os(Ls.LAST_MESSAGE_NOT_EXIST).setMessage("".concat(JSON.stringify(e))).setNetworkType(this.getNetworkType()).end();}},{key:"_sortConversationList",value:function value(e){var t=[],o=[];return e.forEach(function(e){!0===e[1].isPinned?t.push(e):o.push(e);}),t.sort(function(e,t){return t[1].lastMessage.lastTime-e[1].lastMessage.lastTime;}).concat(o.sort(function(e,t){return t[1].lastMessage.lastTime-e[1].lastMessage.lastTime;}));}},{key:"_sortConversationListAndEmitEvent",value:function value(){this._conversationMap=new Map(this._sortConversationList(M(this._conversationMap))),this.emitConversationUpdate(!0,!1);}},{key:"_updateUserOrGroupProfile",value:function value(e){var t=this;if(0!==e.length){var o=[],n=[],a=this.getModule(xo),s=this.getModule(Ko);e.forEach(function(e){if(e.type===N.CONV_C2C)o.push(e.toAccount);else if(e.type===N.CONV_GROUP){var t=e.toAccount;s.hasLocalGroup(t)?e.groupProfile=s.getLocalGroupProfile(t):n.push(t);}}),je.log("".concat(this._className,"._updateUserOrGroupProfile c2cUserIDList:").concat(o," groupIDList:").concat(n)),o.length>0&&a.getUserProfile({userIDList:o}).then(function(e){var o=e.data;dt(o)?o.forEach(function(e){t._conversationMap.get("C2C".concat(e.userID)).userProfile=e;}):t._conversationMap.get("C2C".concat(o.userID)).userProfile=o;}),n.length>0&&s.getGroupProfileAdvance({groupIDList:n,responseFilter:{groupBaseInfoFilter:["Type","Name","FaceUrl"]}}).then(function(e){e.data.successGroupList.forEach(function(e){var o="GROUP".concat(e.groupID);if(t._conversationMap.has(o)){var n=t._conversationMap.get(o);yt(n.groupProfile,e,[],[null,void 0,"",0,NaN]),!n.subType&&e.type&&(n.subType=e.type);}});});}}},{key:"_getConversationOptions",value:function value(e){var o=this,n=[],a=e.filter(function(e){var t=e.type,o=e.userID;return 1===t&&"@TLS#NOT_FOUND"!==o&&"@TLS#ERROR"!==o||2===t;}),s=this.getMyUserID(),r=a.map(function(e){if(pt(e.lastMsg)&&(e.lastMsg={elements:[]}),1===e.type){var a={userID:e.userID,nick:e.peerNick,avatar:e.peerAvatar};return n.push(a),{conversationID:"C2C".concat(e.userID),type:"C2C",lastMessage:{lastTime:e.time,lastSequence:e.sequence,fromAccount:e.lastC2CMsgFromAccount,messageForShow:e.messageShow,type:e.lastMsg.elements[0]?e.lastMsg.elements[0].type:null,payload:e.lastMsg.elements[0]?o._amendLayersOverLimitProperty(e.lastMsg.elements[0].content):null,cloudCustomData:e.lastMsg.cloudCustomData||"",isRevoked:8===e.lastMessageFlag,onlineOnlyFlag:!1,nick:"",nameCard:"",version:0,isPeerRead:e.lastC2CMsgFromAccount===s&&e.time<=e.c2cPeerReadTime},userProfile:new Mr(a),peerReadTime:e.c2cPeerReadTime,isPinned:1===e.isPinned,messageRemindType:"",customData:e.customMark||"",markList:Qt(e.standardMark),conversationGroupList:o._convGroupHandler.getConvGroupListByID(e.contactGroupId)};}return{conversationID:"GROUP".concat(e.groupID),type:"GROUP",lastMessage:t(t({lastTime:e.time,lastSequence:e.messageReadSeq+e.unreadCount,fromAccount:e.msgGroupFromAccount,messageForShow:e.messageShow},o._patchTypeAndPayload(e)),{},{cloudCustomData:e.lastMsg.cloudCustomData||"",isRevoked:2===e.lastMessageFlag,onlineOnlyFlag:!1,nick:e.senderNick||"",nameCard:e.senderNameCard||""}),groupProfile:new Tr({groupID:e.groupID,name:e.groupNick,avatar:e.groupImage}),unreadCount:e.unreadCount,peerReadTime:0,isPinned:1===e.isPinned,messageRemindType:"",version:0,customData:e.customMark||"",markList:Qt(e.standardMark),conversationGroupList:o._convGroupHandler.getConvGroupListByID(e.contactGroupId)};});n.length>0&&this.getModule(xo).onConversationsProfileUpdated(n);return r;}},{key:"_patchTypeAndPayload",value:function value(e){var o=e.lastMsg,n=o.event,a=void 0===n?void 0:n,s=o.elements,r=void 0===s?[]:s,i=o.groupTips,c=void 0===i?{}:i;if(!pt(a)&&!no(c)){var u=new $s(c);u.setElement({type:N.MSG_GRP_TIP,content:t(t({},c.elements),{},{groupProfile:c.groupProfile})});var l=JSON.parse(JSON.stringify(u.payload));return u=null,{type:N.MSG_GRP_TIP,payload:l};}return{type:r[0]?r[0].type:null,payload:r[0]?this._amendLayersOverLimitProperty(r[0].content):null};}},{key:"_amendLayersOverLimitProperty",value:function value(e){var t=e.layersOverLimit;return 0===t?e.layersOverLimit=!1:1===t&&(e.layersOverLimit=!0),e;}},{key:"getLocalMessageList",value:function value(e){return this._messageListHandler.getLocalMessageList(e);}},{key:"deleteLocalMessage",value:function value(e){e instanceof $s&&this._messageListHandler.remove(e);}},{key:"onConversationDeleted",value:function value(e){var t=this;je.log("".concat(this._className,".onConversationDeleted")),dt(e)&&e.forEach(function(e){var o=e.type,n=e.userID,a=e.groupID,s="";1===o?s="".concat(N.CONV_C2C).concat(n):2===o&&(s="".concat(N.CONV_GROUP).concat(a)),t.deleteLocalConversation(s);});}},{key:"onConversationPinned",value:function value(e){var t=this;if(dt(e)){var o=!1;e.forEach(function(e){var n,a=e.type,s=e.userID,r=e.groupID;1===a?n=t.getLocalConversation("".concat(N.CONV_C2C).concat(s)):2===a&&(n=t.getLocalConversation("".concat(N.CONV_GROUP).concat(r))),n&&(je.log("".concat(t._className,".onConversationPinned conversationID:").concat(n.conversationID," isPinned:").concat(n.isPinned)),n.isPinned||(n.isPinned=!0,o=!0));}),o&&this._sortConversationListAndEmitEvent();}}},{key:"onConversationUnpinned",value:function value(e){var t=this;if(dt(e)){var o=!1;e.forEach(function(e){var n,a=e.type,s=e.userID,r=e.groupID;1===a?n=t.getLocalConversation("".concat(N.CONV_C2C).concat(s)):2===a&&(n=t.getLocalConversation("".concat(N.CONV_GROUP).concat(r))),n&&(je.log("".concat(t._className,".onConversationUnpinned conversationID:").concat(n.conversationID," isPinned:").concat(n.isPinned)),n.isPinned&&(n.isPinned=!1,o=!0));}),o&&this._sortConversationListAndEmitEvent();}}},{key:"getMessageList",value:function value(e){var t=this,o=e.conversationID,n=e.nextReqMessageID,a=e.count,s="".concat(this._className,".getMessageList"),r=this.getLocalConversation(o),i="";if(r&&r.groupProfile&&(i=r.groupProfile.type),Lt(i))return je.log("".concat(s," not available in avchatroom. conversationID:").concat(o)),ar({messageList:[],nextReqMessageID:"",isCompleted:!0});(pt(a)||a>15)&&(a=15),!n&&this._isNotInCommunity(o)&&(this._messageListHandler.removeByConversationID(o),this._completedMap.delete(o),this._roamingMessageSequenceMap.delete(o));var c=this._computeRemainingCount({conversationID:o,nextReqMessageID:n}),u=this._completedMap.has(o);if(je.log("".concat(s," conversationID:").concat(o," nextReqMessageID:").concat(n)+" remainingCount:".concat(c," count:").concat(a," isCompleted:").concat(u)),this._needGetHistory({conversationID:o,remainingCount:c,count:a}))return this.getHistoryMessages({conversationID:o,nextReqMessageID:n,count:20}).then(function(e){var n=e.nextReqID,a=e.storedMessageList,r=t._completedMap.has(o),i=a;c>0&&(i=t._messageListHandler.getLocalMessageList(o).slice(0,a.length+c));var u={nextReqMessageID:r?"":n,messageList:i,isCompleted:r};return je.log("".concat(s," ret.nextReqMessageID:").concat(u.nextReqMessageID," ret.isCompleted:").concat(u.isCompleted," ret.length:").concat(i.length)),zs(u);});this.modifyMessageList(o);var l=this._getMessageListFromMemory({conversationID:o,nextReqMessageID:n,count:a});return ar(l);}},{key:"_getMessageListFromMemory",value:function value(e){var t=e.conversationID,o=e.nextReqMessageID,n=e.count,a="".concat(this._className,"._getMessageListFromMemory"),s=this._messageListHandler.getLocalMessageList(t),r=s.length,i=0,c={isCompleted:!1,nextReqMessageID:"",messageList:[]};return o?(i=s.findIndex(function(e){return e.ID===o;}))>n?(c.messageList=s.slice(i-n,i),c.nextReqMessageID=s[i-n].ID):(c.messageList=s.slice(0,i),c.isCompleted=!0):r>n?(i=r-n,c.messageList=s.slice(i,r),c.nextReqMessageID=s[i].ID):(c.messageList=s.slice(0,r),c.isCompleted=!0),je.log("".concat(a," conversationID:").concat(t)+" ret.nextReqMessageID:".concat(c.nextReqMessageID," ret.isCompleted:").concat(c.isCompleted," ret.length:").concat(c.messageList.length)),c;}},{key:"getMessageListHopping",value:function value(e){var t=e.conversationID,o=e.sequence,n=e.time,a=e.count,s=e.direction,r=void 0===s?0:s;if((pt(a)||a>15)&&(a=15),t.startsWith(N.CONV_C2C)){var i=this.getModule(Bo),c=t.replace(N.CONV_C2C,"");return i.getRoamingMessagesHopping({peerAccount:c,time:n,count:a,direction:r});}if(t.startsWith(N.CONV_GROUP)){var u=this.getModule(Ko),l=t.replace(N.CONV_GROUP,"");return u.getRoamingMessagesHopping({groupID:l,sequence:o,count:a,direction:r});}}},{key:"_computeRemainingCount",value:function value(e){var t=e.conversationID,o=e.nextReqMessageID,n=this._messageListHandler.getLocalMessageList(t),a=n.length;if(!o)return a;var s=0;return Ut(t)?s=n.findIndex(function(e){return e.ID===o;}):bt(t)&&(s=-1!==o.indexOf("-")?n.findIndex(function(e){return e.ID===o;}):n.findIndex(function(e){return e.sequence===o;})),-1===s&&(s=0),s;}},{key:"_getMessageListSize",value:function value(e){return this._messageListHandler.getLocalMessageList(e).length;}},{key:"_needGetHistory",value:function value(e){var t=e.conversationID,o=e.remainingCount,n=e.count,a=this.getLocalConversation(t),s="";return a&&a.groupProfile&&(s=a.groupProfile.type),!wt(t)&&!Lt(s)&&!(bt(t)&&this._isPagingGetGroupListCompleted()&&this._getLocalGroupCount()<=4e3&&!this._hasLocalGroup(t)&&!this._isTopicConversation(t))&&o<=n&&!this._completedMap.has(t);}},{key:"_isTopicConversation",value:function value(e){var t=e.replace(N.CONV_GROUP,"");return Pt(t);}},{key:"getHistoryMessages",value:function value(e){var t=e.conversationID,o=e.count;if(t===N.CONV_SYSTEM)return ar();var n=15;o>20&&(n=20);var a=null;if(Ut(t)){var s=this._roamingMessageKeyAndTimeMap.has(t);return(a=this.getModule(Bo))?a.getRoamingMessage({conversationID:t,peerAccount:t.replace(N.CONV_C2C,""),count:n,lastMessageTime:s?this._roamingMessageKeyAndTimeMap.get(t).lastMessageTime:0,messageKey:s?this._roamingMessageKeyAndTimeMap.get(t).messageKey:""}):sr({code:_n.CANNOT_FIND_MODULE});}if(bt(t)){if(!(a=this.getModule(Ko)))return sr({code:_n.CANNOT_FIND_MODULE});var r=null;this._conversationMap.has(t)&&(r=this._conversationMap.get(t).lastMessage);var i=0;r&&(i=r.lastSequence);var c=this._roamingMessageSequenceMap.get(t);return a.getRoamingMessage({conversationID:t,groupID:t.replace(N.CONV_GROUP,""),count:n,sequence:c||i});}return ar();}},{key:"patchConversationLastMessage",value:function value(e){var t=this.getLocalConversation(e);if(t){var o=t.lastMessage,n=o.messageForShow,a=o.payload;if(no(n)||no(a)){var s=this._messageListHandler.getLocalMessageList(e);if(0===s.length)return;var r=s[s.length-1];je.log("".concat(this._className,".patchConversationLastMessage conversationID:").concat(e," payload:"),r.payload),t.updateLastMessage(r);}}}},{key:"onRoamingMessage",value:function value(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=o.startsWith(N.CONV_C2C)?N.CONV_C2C:N.CONV_GROUP,s=null,r=[],i=[],c=0,u=e.length,l=null,d=a===N.CONV_GROUP,p=this.getModule(Qo),g=function g(){c=d?e.length-1:0,u=d?0:e.length;},_=function _(){d?--c:++c;},h=function h(){return d?c>=u:c<u;};for(g();h();_()){if(d&&1===e[c].sequence&&n&&this.setCompleted(o),1!==e[c].isPlaceMessage)if((s=new $s(e[c])).to=e[c].to,a!==N.CONV_GROUP||pt(e[c].topicID)||(s.to=e[c].topicID),s.isSystemMessage=!!e[c].isSystemMessage,s.conversationType=a,4===e[c].event?l={type:N.MSG_GRP_TIP,content:t(t({},e[c].elements),{},{groupProfile:e[c].groupProfile})}:(e[c].elements=p.parseElements(e[c].elements,e[c].from),l=e[c].elements),d||s.setNickAndAvatar({nick:e[c].nick,avatar:e[c].avatar}),no(l)){var f=new Os(Ls.EMPTY_MESSAGE_BODY);f.setMessage("from:".concat(s.from," to:").concat(s.to," sequence:").concat(s.sequence," event:").concat(e[c].event)),f.setNetworkType(this.getNetworkType()).setLevel("warning").end();}else s.setElement(l),s.reInitialize(this.getMyUserID()),r.push(s);}return g=_=h=null,n?(this._messageListHandler.unshift(r,i),r=null,i):(i=null,r);}},{key:"findMessage",value:function value(e){return this._messageListHandler.findMessage(e);}},{key:"_isNotInCommunity",value:function value(e){var t=!1;if(e.startsWith(N.CONV_GROUP)&&this._isTopicConversation(e)){var o=zt(e.replace(N.CONV_GROUP,""));this.getModule(Ko).hasLocalGroup(o)||(t=!0);}return t;}},{key:"deleteTopicRoamingMessageInfo",value:function value(e){var t=this;Gt({groupID:e})&&this._messageListHandler.getTopicConversationIDList(e).forEach(function(e){t._messageListHandler.removeByConversationID(e),t._completedMap.delete(e),t._roamingMessageSequenceMap.delete(e);});}},{key:"deleteGroupRomaingMessageInfo",value:function value(e){var t="".concat(N.CONV_GROUP).concat(e);this._messageListHandler.removeByConversationID(t),this._completedMap.delete(t),this._roamingMessageSequenceMap.delete(t);}},{key:"setMessageRead",value:function value(e){var t=e.conversationID,o=this.getLocalConversation(t);if(je.log("".concat(this._className,".setMessageRead conversationID:").concat(t," unreadCount:").concat(o?o.unreadCount:0)),!o)return ar();if(o.type!==N.CONV_GROUP&&o.type!==N.CONV_TOPIC||no(o.groupAtInfoList)||this.deleteGroupAtTips(t),0===o.unreadCount)return ar();if(o.type===N.CONV_GROUP&&!this._hasLocalGroup(t))return 0!==o.unreadCount&&(o.unreadCount=0,this.emitConversationUpdate(!0,!1)),ar();var n=this._messageListHandler.getLocalLastMessage(t),a=o.lastMessage.lastTime;n&&a<n.time&&(a=n.time);var s=o.lastMessage.lastSequence;if(n&&s<n.sequence&&(s=n.sequence),o.type===N.CONV_TOPIC&&pt(n)){var r=this.getModule(Yo),i=t.replace(N.CONV_GROUP,""),c=zt(i),u=r.getLocalTopic(c,i);u&&(s=u.nextMessageSeq-1);}var l=null;switch(o.type){case N.CONV_C2C:return(l=this.getModule(Bo))?l.setMessageRead({conversationID:t,lastMessageTime:a}):sr({code:_n.CANNOT_FIND_MODULE});case N.CONV_GROUP:case N.CONV_TOPIC:return(l=this.getModule(Ko))?l.setMessageRead({conversationID:t,lastMessageSeq:s}):sr({code:_n.CANNOT_FIND_MODULE});case N.CONV_SYSTEM:return o.unreadCount=0,this.emitConversationUpdate(!0,!1),ar();default:return ar();}}},{key:"setAllMessageRead",value:function value(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o="".concat(this._className,".setAllMessageRead");t.scope||(t.scope=N.READ_ALL_MSG),je.log("".concat(o," options:"),t);var n=this._createSetAllMessageReadPack(t);if(0===n.readAllC2CMessage&&0===n.groupMessageReadInfoList.length)return ar();var a=new Os(Ls.SET_ALL_MESSAGE_READ);return this.request({protocolName:ha,requestData:n}).then(function(o){var n=o.data,s=e._handleAllMessageRead(n);return a.setMessage("scope:".concat(t.scope," failureGroups:").concat(JSON.stringify(s))).setNetworkType(e.getNetworkType()).end(),ar();}).catch(function(t){return e.probeNetwork().then(function(e){var o=m(e,2),n=o[0],s=o[1];a.setError(t,n,s).end();}),je.warn("".concat(o," failed. error:"),t),sr({code:t&&t.code?t.code:_n.MESSAGE_UNREAD_ALL_FAIL,message:t&&t.message?t.message:void 0});});}},{key:"setConversationCustomData",value:function value(e){return this._convGroupHandler.setConvCustomData(e);}},{key:"markConversation",value:function value(e){return this._convGroupHandler.markConversation(e);}},{key:"getConversationGroupList",value:function value(){return this._convGroupHandler.getLocalConvGroupList();}},{key:"createConversationGroup",value:function value(e){return this._convGroupHandler.createConvGroup(e);}},{key:"deleteConversationGroup",value:function value(e){return this._convGroupHandler.deleteConvGroup(e);}},{key:"renameConversationGroup",value:function value(e){return this._convGroupHandler.renameConvGroup(e);}},{key:"addConversationsToGroup",value:function value(e){return this._convGroupHandler.addConvsToGroup(e);}},{key:"deleteConversationsFromGroup",value:function value(e){return this._convGroupHandler.deleteConvsFromGroup(e);}},{key:"onConversationMarkUpdated",value:function value(e){this._convGroupHandler.onConvMarkUpdated(e);}},{key:"onConversationGroupCreated",value:function value(e){this._convGroupHandler.onConvGroupCreated(e);}},{key:"onConversationGroupDeleted",value:function value(e){this._convGroupHandler.onConvGroupDeleted(e);}},{key:"onConversationGroupNameUpdated",value:function value(e){this._convGroupHandler.onConvGroupNameUpdated(e);}},{key:"onConversationInGroupUpdated",value:function value(e){this._convGroupHandler.onConvInGroupUpdated(e);}},{key:"onConversationAddedToOrDeletedFromGroup",value:function value(e){this._convGroupHandler.onConvAddedToOrDeletedFromGroup(e);}},{key:"_getConversationLastMessageSequence",value:function value(e){var t=this._messageListHandler.getLocalLastMessage(e.conversationID),o=e.lastMessage.lastSequence;return t&&o<t.sequence&&(o=t.sequence),o;}},{key:"_getConversationLastMessageTime",value:function value(e){var t=this._messageListHandler.getLocalLastMessage(e.conversationID),o=e.lastMessage.lastTime;return t&&o<t.time&&(o=t.time),o;}},{key:"_createSetAllMessageReadPack",value:function value(e){var t,o={readAllC2CMessage:0,groupMessageReadInfoList:[]},n=e.scope,a=E(this._conversationMap);try{for(a.s();!(t=a.n()).done;){var s=m(t.value,2)[1];if(s.unreadCount>0)if(s.type===N.CONV_C2C&&0===o.readAllC2CMessage){if(n===N.READ_ALL_MSG)o.readAllC2CMessage=1;else if(n===N.READ_ALL_C2C_MSG){o.readAllC2CMessage=1;break;}}else if(s.type===N.CONV_GROUP&&(n===N.READ_ALL_GROUP_MSG||n===N.READ_ALL_MSG)){var r=this._getConversationLastMessageSequence(s);o.groupMessageReadInfoList.push({groupID:s.groupProfile.groupID,messageSequence:r});}}}catch(i){a.e(i);}finally{a.f();}return o;}},{key:"onPushedAllMessageRead",value:function value(e){this._handleAllMessageRead(e);}},{key:"_handleAllMessageRead",value:function value(e){var t=e.groupMessageReadInfoList,o=e.readAllC2CMessage,n=this._parseGroupReadInfo(t);return this._updateAllConversationUnreadCount({readAllC2CMessage:o})>=1&&(this.emitConversationUpdate(!0,!1),this.emitTotalUnreadMessageCountUpdate()),n;}},{key:"_parseGroupReadInfo",value:function value(e){var t=[];if(e&&e.length)for(var o=0,n=e.length;o<n;o++){var a=e[o],s=a.groupID,r=a.sequence,i=a.retCode,c=a.lastMessageSeq;pt(i)?this._remoteGroupReadSequenceMap.set(s,c):(this._remoteGroupReadSequenceMap.set(s,r),0!==i&&t.push("".concat(s,"-").concat(r,"-").concat(i)));}return t;}},{key:"_updateAllConversationUnreadCount",value:function value(e){var t,o=e.readAllC2CMessage,n=0,a=E(this._conversationMap);try{for(a.s();!(t=a.n()).done;){var s=m(t.value,2),r=s[0],i=s[1];if(i.unreadCount>=1){if(1===o&&i.type===N.CONV_C2C){var c=this._getConversationLastMessageTime(i);this.updateIsReadAfterReadReport({conversationID:r,lastMessageTime:c});}else if(i.type===N.CONV_GROUP){var u=r.replace(N.CONV_GROUP,"");if(this._remoteGroupReadSequenceMap.has(u)){var l=this._remoteGroupReadSequenceMap.get(u),d=this._getConversationLastMessageSequence(i);this.updateIsReadAfterReadReport({conversationID:r,remoteReadSequence:l}),d>=l&&this._remoteGroupReadSequenceMap.delete(u);}}this.updateUnreadCount(r,!1)&&(n+=1);}}}catch(p){a.e(p);}finally{a.f();}return n;}},{key:"isRemoteRead",value:function value(e){var t=e.conversationID,o=e.sequence,n=t.replace(N.CONV_GROUP,""),a=!1;if(this._remoteGroupReadSequenceMap.has(n)){var s=this._remoteGroupReadSequenceMap.get(n);o<=s&&(a=!0,je.log("".concat(this._className,".isRemoteRead conversationID:").concat(t," messageSequence:").concat(o," remoteReadSequence:").concat(s))),o>=s+10&&this._remoteGroupReadSequenceMap.delete(n);}return a;}},{key:"updateIsReadAfterReadReport",value:function value(e){var t=e.conversationID,o=e.lastMessageSeq,n=e.lastMessageTime,a=this._messageListHandler.getLocalMessageList(t);if(0!==a.length)for(var s,r=a.length-1;r>=0;r--){if(s=a[r],!(n&&s.time>n||o&&s.sequence>o)){if("in"===s.flow&&s.isRead)break;s.setIsRead(!0);}}}},{key:"updateUnreadCount",value:function value(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=!1,n=this.getLocalConversation(e),a=this._messageListHandler.getLocalMessageList(e);if(n){var s=n.unreadCount,r=a.filter(function(e){return!e.isRead&&!e._onlineOnlyFlag&&!e.isDeleted;}).length;if(s!==r&&(n.unreadCount=r,o=!0,je.log("".concat(this._className,".updateUnreadCount from ").concat(s," to ").concat(r,", conversationID:").concat(e)),!0===t&&(this.emitConversationUpdate(!0,!1),this.emitTotalUnreadMessageCountUpdate())),o&&n.type===N.CONV_TOPIC){var i=n.unreadCount,c=this.getModule(Yo),u=e.replace(N.CONV_GROUP,"");c.onConversationProxy({topicID:u,unreadCount:i});}return o;}}},{key:"clearGroupAtInfoList",value:function value(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this.getLocalConversation(e);if(o&&o.groupAtInfoList.length>0){if(o.clearGroupAtInfoList(),je.log("".concat(this._className,".clearGroupAtInfoList conversationID:").concat(e)),o.type===N.CONV_TOPIC){var n=o.groupAtInfoList,a=this.getModule(Yo),s=e.replace(N.CONV_GROUP,"");a.onConversationProxy({topicID:s,groupAtInfoList:n});}!0===t&&this.emitConversationUpdate(!0,!1);}}},{key:"updateReadReceiptInfo",value:function value(e){var t=this,o=e.userID,n=void 0===o?void 0:o,a=e.groupID,s=void 0===a?void 0:a,r=e.readReceiptList;if(!no(r)){var i=[];if(pt(n)){if(!pt(s)){var c="".concat(N.CONV_GROUP).concat(s);r.forEach(function(e){var o=e.tinyID,n=e.clientTime,a=e.random,r=e.readCount,u=e.unreadCount,l="".concat(o,"-").concat(n,"-").concat(a),d=t._messageListHandler.getLocalMessage(c,l),p={groupID:s,messageID:l,readCount:0,unreadCount:0};d&&(it(r)&&(d.readReceiptInfo.readCount=r,p.readCount=r),it(u)&&(d.readReceiptInfo.unreadCount=u,p.unreadCount=u),i.push(p));});}}else{var u="".concat(N.CONV_C2C).concat(n);r.forEach(function(e){var o=e.tinyID,a=e.clientTime,s=e.random,r="".concat(o,"-").concat(a,"-").concat(s),c=t._messageListHandler.getLocalMessage(u,r);if(c){c.readReceiptInfo.isPeerRead=!0;var l={userID:n,messageID:r,isPeerRead:!0};i.push(l);}});}i.length>0&&this.emitOuterEvent(D.MESSAGE_READ_RECEIPT_RECEIVED,i);}}},{key:"recomputeGroupUnreadCount",value:function value(e){var t=e.conversationID,o=e.count,n=this.getLocalConversation(t);if(n){var a=n.unreadCount,s=a-o;s<0&&(s=0),n.unreadCount=s,je.log("".concat(this._className,".recomputeGroupUnreadCount from ").concat(a," to ").concat(s,", conversationID:").concat(t));}}},{key:"updateIsRead",value:function value(e){var t=this.getLocalConversation(e),o=this.getLocalMessageList(e);if(t&&0!==o.length&&!wt(t.type)){for(var n=[],a=0,s=o.length;a<s;a++){"in"!==o[a].flow?"out"!==o[a].flow||o[a].isRead||o[a].setIsRead(!0):n.push(o[a]);}var r=0;if(t.type===N.CONV_C2C){var i=n.slice(-t.unreadCount).filter(function(e){return e.isRevoked;}).length;r=n.length-t.unreadCount-i;}else r=n.length-t.unreadCount;for(var c=0;c<r&&!n[c].isRead;c++){n[c].setIsRead(!0);}}}},{key:"deleteGroupAtTips",value:function value(e){var t=this,o="".concat(this._className,".deleteGroupAtTips");je.log("".concat(o));var n=this._conversationMap.get(e);if(!n)return Promise.resolve();var a=n.groupAtInfoList;if(0===a.length)return Promise.resolve();var s=void 0;e.startsWith(N.CONV_GROUP)&&(s=e.replace(N.CONV_GROUP,""));var r=M(a);if((Gt({groupID:s})||Pt(s))&&0===(r=a.filter(function(e){return!e.atTypeArray.includes(N.CONV_AT_ALL);})).length)return this.clearGroupAtInfoList(e,!1),Promise.resolve();var i=this.getMyUserID();return this.request({protocolName:Yn,requestData:{messageListToDelete:r.map(function(e){return{from:e.from,to:i,messageSeq:e.__sequence,messageRandom:e.__random,groupID:pt(e.topicID)?e.groupID:e.topicID};})}}).then(function(){return je.log("".concat(o," ok. count:").concat(a.length)),t.clearGroupAtInfoList(e,!1),Promise.resolve();}).catch(function(e){return je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"appendToMessageList",value:function value(e){this._messageListHandler.pushIn(e);}},{key:"setMessageRandom",value:function value(e){this.singlyLinkedList.set(e.random);}},{key:"deleteMessageRandom",value:function value(e){this.singlyLinkedList.delete(e.random);}},{key:"pushIntoMessageList",value:function value(e,t,o){return!(!this._messageListHandler.pushIn(t,o)||this._isMessageFromCurrentInstance(t)&&!o)&&(e.push(t),!0);}},{key:"_isMessageFromCurrentInstance",value:function value(e){return this.singlyLinkedList.has(e.random);}},{key:"revoke",value:function value(e,t,o){return this._messageListHandler.revoke(e,t,o);}},{key:"getPeerReadTime",value:function value(e){return this._peerReadTimeMap.get(e);}},{key:"recordPeerReadTime",value:function value(e,t){this._peerReadTimeMap.has(e)?this._peerReadTimeMap.get(e)<t&&this._peerReadTimeMap.set(e,t):this._peerReadTimeMap.set(e,t);}},{key:"updateMessageIsPeerReadProperty",value:function value(e,t){if(e.startsWith(N.CONV_C2C)&&t>0){var o=this._messageListHandler.updateMessageIsPeerReadProperty(e,t);if(o.length>0&&this.emitOuterEvent(D.MESSAGE_READ_BY_PEER,o),this._conversationMap.has(e)){var n=this._conversationMap.get(e).lastMessage;no(n)||n.fromAccount===this.getMyUserID()&&n.lastTime<=t&&!n.isPeerRead&&(n.isPeerRead=!0,this.emitConversationUpdate(!0,!1));}}}},{key:"updateMessageIsModifiedProperty",value:function value(e){this._messageListHandler.updateMessageIsModifiedProperty(e);}},{key:"setCompleted",value:function value(e){je.log("".concat(this._className,".setCompleted. conversationID:").concat(e)),this._completedMap.set(e,!0);}},{key:"updateRoamingMessageKeyAndTime",value:function value(e,t,o){this._roamingMessageKeyAndTimeMap.set(e,{messageKey:t,lastMessageTime:o});}},{key:"updateRoamingMessageSequence",value:function value(e,t){this._roamingMessageSequenceMap.set(e,t);}},{key:"getConversationList",value:function value(e){var t=this,o="".concat(this._className,".getConversationList"),n="pagingStatus:".concat(this._pagingStatus,", local conversation count:").concat(this._conversationMap.size,", options:").concat(e);if(je.log("".concat(o,". ").concat(n)),this._pagingStatus===co.REJECTED){var a=new Os(Ls.GET_CONVERSATION_LIST);return a.setMessage(n),this.syncConversationList().then(function(){a.setNetworkType(t.getNetworkType()).end();var o=t._getConversationList(e);return zs({conversationList:o,isSyncCompleted:t._isSyncCompleted()});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],s=o[1];a.setError(e,n,s).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}if(0===this._conversationMap.size){var s=new Os(Ls.GET_CONVERSATION_LIST);return s.setMessage(n),this.syncConversationList().then(function(){s.setNetworkType(t.getNetworkType()).end();var o=t._getConversationList(e);return zs({conversationList:o,isSyncCompleted:t._isSyncCompleted()});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];s.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}var r=this._getConversationList(e);return je.log("".concat(o,". returned conversation count:").concat(r.length)),ar({conversationList:r,isSyncCompleted:this._isSyncCompleted()});}},{key:"_getConversationList",value:function value(e){if(pt(e))return this.getLocalConversationList();if(dt(e))return 0===e.length?[]:this.getLocalConversationList().filter(function(t){return e.includes(t.conversationID);});if(lt(e)){var t=e.type,o=e.markType,n=e.groupName;return this.getLocalConversationList().filter(function(e){return(t!==N.CONV_C2C&&t!==N.CONV_GROUP||e.type===t)&&(!ct(n)||e.conversationGroupList.includes(n))&&(!it(o)||e.markList.includes(o));});}return[];}},{key:"_handleC2CPeerReadTime",value:function value(){var e,t=E(this._conversationMap);try{for(t.s();!(e=t.n()).done;){var o=m(e.value,2),n=o[0],a=o[1];a.type===N.CONV_C2C&&(je.debug("".concat(this._className,"._handleC2CPeerReadTime conversationID:").concat(n," peerReadTime:").concat(a.peerReadTime)),this.recordPeerReadTime(n,a.peerReadTime));}}catch(s){t.e(s);}finally{t.f();}}},{key:"_isPagingGetGroupListCompleted",value:function value(){return this.getModule(Ko).isPagingGetCompleted();}},{key:"_getLocalGroupCount",value:function value(){return this.getModule(Ko).getLocalGroupList().length;}},{key:"_hasLocalGroup",value:function value(e){return this.getModule(Ko).hasLocalGroup(e.replace(N.CONV_GROUP,""));}},{key:"getConversationProfile",value:function value(e){var t,o=this;if((t=this._conversationMap.has(e)?this._conversationMap.get(e):new Er({conversationID:e,type:e.slice(0,3)===N.CONV_C2C?N.CONV_C2C:N.CONV_GROUP},this.isIntl()))._isInfoCompleted||t.type===N.CONV_SYSTEM)return ar({conversation:t});if(bt(e)&&!this._hasLocalGroup(e))return ar({conversation:t});var n=new Os(Ls.GET_CONVERSATION_PROFILE),a="".concat(this._className,".getConversationProfile");return je.log("".concat(a,". conversationID:").concat(e," remark:").concat(t.remark," lastMessage:"),t.lastMessage),this._updateUserOrGroupProfileCompletely(t).then(function(s){n.setNetworkType(o.getNetworkType()).setMessage("conversationID:".concat(e," unreadCount:").concat(s.data.conversation.unreadCount)).end();var r=o.getModule(Ho);if(r&&t.type===N.CONV_C2C){var i=e.replace(N.CONV_C2C,"");if(r.isMyFriend(i)){var c=r.getFriendRemark(i);t.remark!==c&&(t.remark=c,je.log("".concat(a,". conversationID:").concat(e," patch remark:").concat(t.remark)));}}return je.log("".concat(a," ok. conversationID:").concat(e)),s;}).catch(function(t){return o.probeNetwork().then(function(o){var a=m(o,2),s=a[0],r=a[1];n.setError(t,s,r).setMessage("conversationID:".concat(e)).end();}),je.error("".concat(a," failed. error:"),t),sr(t);});}},{key:"_updateUserOrGroupProfileCompletely",value:function value(e){var t=this;return e.type===N.CONV_C2C?this.getModule(xo).getUserProfile({userIDList:[e.toAccount]}).then(function(o){var n=o.data;return 0===n.length?sr(new tr({code:_n.USER_OR_GROUP_NOT_FOUND})):(e.userProfile=n[0],e._isInfoCompleted=!0,t._unshiftConversation(e),ar({conversation:e}));}):this.getModule(Ko).getGroupProfile({groupID:e.toAccount}).then(function(o){return e.groupProfile=o.data.group,e._isInfoCompleted=!0,t._unshiftConversation(e),ar({conversation:e});});}},{key:"_unshiftConversation",value:function value(e){e instanceof Er&&!this._conversationMap.has(e.conversationID)&&(this._conversationMap=new Map([[e.conversationID,e]].concat(M(this._conversationMap))),this._setStorageConversationList(),this.emitConversationUpdate(!0,!1));}},{key:"_onProfileUpdated",value:function value(e){var t=this;e.data.forEach(function(e){var o=e.userID;if(o===t.getMyUserID())t._onMyProfileModified({latestNick:e.nick,latestAvatar:e.avatar});else{var n=t._conversationMap.get("".concat(N.CONV_C2C).concat(o));n&&(n.userProfile=e);}});}},{key:"_isSyncCompleted",value:function value(){return this._pagingStatus===co.RESOLVED;}},{key:"deleteConversation",value:function value(e){var t=this,o={fromAccount:this.getMyUserID(),toAccount:void 0,type:void 0,toGroupID:void 0};if(!this._conversationMap.has(e))return sr({code:_n.CONVERSATION_NOT_FOUND});var n=this._conversationMap.get(e).type;if(n===N.CONV_C2C)o.type=1,o.toAccount=e.replace(N.CONV_C2C,"");else{if(n!==N.CONV_GROUP)return n===N.CONV_SYSTEM?(this.getModule(Ko).deleteGroupSystemNotice({messageList:this._messageListHandler.getLocalMessageList(e)}),this.deleteLocalConversation(e),ar({conversationID:e})):sr({code:_n.CONVERSATION_UN_RECORDED_TYPE});if(!this._hasLocalGroup(e))return this.deleteLocalConversation(e),ar({conversationID:e});o.type=2,o.toGroupID=e.replace(N.CONV_GROUP,"");}var a=new Os(Ls.DELETE_CONVERSATION);a.setMessage("conversationID:".concat(e));var s="".concat(this._className,".deleteConversation");return je.log("".concat(s,". conversationID:").concat(e)),this.setMessageRead({conversationID:e}).then(function(){return t.request({protocolName:Kn,requestData:o});}).then(function(){return a.setNetworkType(t.getNetworkType()).end(),je.log("".concat(s," ok")),t.deleteLocalConversation(e),ar({conversationID:e});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],s=o[1];a.setError(e,n,s).end();}),je.error("".concat(s," failed. error:"),e),sr(e);});}},{key:"clearHistoryMessage",value:function value(e){var t=this,o={fromAccount:this.getMyUserID(),toAccount:void 0,type:void 0,toGroupID:void 0};if(!this._conversationMap.has(e))return sr({code:_n.CONVERSATION_NOT_FOUND});var n=this._conversationMap.get(e).type;if(n===N.CONV_C2C)o.type=1,o.toAccount=e.replace(N.CONV_C2C,"");else{if(n!==N.CONV_GROUP)return n===N.CONV_SYSTEM?(this.getModule(Ko).deleteGroupSystemNotice({messageList:this._messageListHandler.getLocalMessageList(e)}),ar({conversationID:e})):sr({code:_n.CONVERSATION_UN_RECORDED_TYPE});o.type=2,o.toGroupID=e.replace(N.CONV_GROUP,"");}var a=new Os(Ls.CLEAR_HISTORY_MESSAGE);a.setMessage("conversationID:".concat(e));var s="".concat(this._className,".clearHistoryMessage");return je.log("".concat(s,". conversationID:").concat(e)),this.setMessageRead({conversationID:e}).then(function(){return t.request({protocolName:Hn,requestData:o});}).then(function(){a.setNetworkType(t.getNetworkType()).end(),je.log("".concat(s," ok")),t._messageListHandler.removeByConversationID(e),t.setCompleted(e);var o=t.getLocalConversation(e);return o&&(o.updateLastMessage(),t.emitConversationUpdate(!0,!1)),ar({conversationID:e});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],s=o[1];a.setError(e,n,s).end();}),je.error("".concat(s," failed. error:"),e),sr(e);});}},{key:"pinConversation",value:function value(e){var t=this,o=e.conversationID,n=e.isPinned;if(!this._conversationMap.has(o))return sr({code:_n.CONVERSATION_NOT_FOUND});var a=this.getLocalConversation(o);if(a.isPinned===n)return ar({conversationID:o});var s=new Os(Ls.PIN_CONVERSATION);s.setMessage("conversationID:".concat(o," isPinned:").concat(n));var r="".concat(this._className,".pinConversation");je.log("".concat(r,". conversationID:").concat(o," isPinned:").concat(n));var i=null;return Ut(o)?i={type:1,toAccount:o.replace(N.CONV_C2C,"")}:bt(o)&&(i={type:2,groupID:o.replace(N.CONV_GROUP,"")}),this.request({protocolName:Wn,requestData:{fromAccount:this.getMyUserID(),operationType:!0===n?1:2,itemList:[i]}}).then(function(){return s.setNetworkType(t.getNetworkType()).end(),je.log("".concat(r," ok")),a.isPinned!==n&&(a.isPinned=n,t._sortConversationListAndEmitEvent()),zs({conversationID:o});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];s.setError(e,n,a).end();}),je.error("".concat(r," failed. error:"),e),sr(e);});}},{key:"setMessageRemindType",value:function value(e){return this._messageRemindHandler.set(e);}},{key:"patchMessageRemindType",value:function value(e){var t=e.ID,o=e.isC2CConversation,n=e.messageRemindType,a=!1,s=this.getLocalConversation(o?"".concat(N.CONV_C2C).concat(t):"".concat(N.CONV_GROUP).concat(t));return s&&s.messageRemindType!==n&&(s.messageRemindType=n,a=!0),je.debug("".concat(this._className,".patchMessageRemindType options:"),e,"ret:".concat(a)),a;}},{key:"onC2CMessageRemindTypeSynced",value:function value(e){var t=this;je.debug("".concat(this._className,".onC2CMessageRemindTypeSynced options:"),e),e.dataList.forEach(function(e){if(!no(e.muteNotificationsSync)){var o,n=e.muteNotificationsSync,a=n.to,s=n.updateSequence,r=n.muteFlag;t._messageRemindHandler.setUpdateSequence(s),0===r?o=N.MSG_REMIND_ACPT_AND_NOTE:1===r?o=N.MSG_REMIND_DISCARD:2===r&&(o=N.MSG_REMIND_ACPT_NOT_NOTE);var i=0;t.patchMessageRemindType({ID:a,isC2CConversation:!0,messageRemindType:o})&&(i+=1),je.log("".concat(t._className,".onC2CMessageRemindTypeSynced updateCount:").concat(i)),i>=1&&t.emitConversationUpdate(!0,!1);}});}},{key:"onGroupMessageRemindTypeSynced",value:function value(e){je.debug("".concat(this._className,".onGroupMessageRemindTypeSynced options:"),e),this._messageRemindHandler.onGroupMessageRemindTypeUpdated(e);}},{key:"deleteLocalConversation",value:function value(e){var t=this._conversationMap.has(e);if(je.log("".concat(this._className,".deleteLocalConversation conversationID:").concat(e," has:").concat(t)),t){this._conversationMap.delete(e),this._roamingMessageKeyAndTimeMap.has(e)&&this._roamingMessageKeyAndTimeMap.delete(e),this._roamingMessageSequenceMap.has(e)&&this._roamingMessageSequenceMap.delete(e),this._setStorageConversationList(),this._messageListHandler.removeByConversationID(e),this._completedMap.delete(e);var o=!this._isTopicConversation(e);this.emitConversationUpdate(o,!1);}}},{key:"isMessageSentByCurrentInstance",value:function value(e){return!(!this._messageListHandler.hasLocalMessage(e.conversationID,e.ID)&&!this.singlyLinkedList.has(e.random));}},{key:"modifyMessageList",value:function value(e){if(e.startsWith(N.CONV_C2C)&&this._conversationMap.has(e)){var t=this._conversationMap.get(e),o=Date.now();this._messageListHandler.modifyMessageSentByPeer({conversationID:e,latestNick:t.userProfile.nick,latestAvatar:t.userProfile.avatar});var n=this.getModule(xo).getNickAndAvatarByUserID(this.getMyUserID());this._messageListHandler.modifyMessageSentByMe({conversationID:e,latestNick:n.nick,latestAvatar:n.avatar}),je.log("".concat(this._className,".modifyMessageList conversationID:").concat(e," cost ").concat(Date.now()-o," ms"));}}},{key:"updateUserProfileSpecifiedKey",value:function value(e){je.log("".concat(this._className,".updateUserProfileSpecifiedKey options:"),e);var t=e.conversationID,o=e.nick,n=e.avatar;if(this._conversationMap.has(t)){var a=this._conversationMap.get(t).userProfile;ct(o)&&a.nick!==o&&(a.nick=o),ct(n)&&a.avatar!==n&&(a.avatar=n),this.emitConversationUpdate(!0,!1);}}},{key:"_onMyProfileModified",value:function value(e){var o=this,n=this.getLocalConversationList(),a=Date.now();n.forEach(function(n){o.modifyMessageSentByMe(t({conversationID:n.conversationID},e));}),je.log("".concat(this._className,"._onMyProfileModified. modify all messages sent by me, cost ").concat(Date.now()-a," ms"));}},{key:"modifyMessageSentByMe",value:function value(e){this._messageListHandler.modifyMessageSentByMe(e);}},{key:"getLatestMessageSentByMe",value:function value(e){return this._messageListHandler.getLatestMessageSentByMe(e);}},{key:"modifyMessageSentByPeer",value:function value(e){this._messageListHandler.modifyMessageSentByPeer(e);}},{key:"getLatestMessageSentByPeer",value:function value(e){return this._messageListHandler.getLatestMessageSentByPeer(e);}},{key:"pushIntoNoticeResult",value:function value(e,t){return!(!this._messageListHandler.pushIn(t)||this.singlyLinkedList.has(t.random))&&(e.push(t),!0);}},{key:"getLocalLastMessage",value:function value(e){return this._messageListHandler.getLocalLastMessage(e);}},{key:"checkAndPatchRemark",value:function value(){var e=Promise.resolve();if(0===this._conversationMap.size)return e;var t=this.getModule(Ho);if(!t)return e;var o=M(this._conversationMap.values()).filter(function(e){return e.type===N.CONV_C2C;});if(0===o.length)return e;var n=0;return o.forEach(function(e){var o=e.conversationID.replace(N.CONV_C2C,"");if(t.isMyFriend(o)){var a=t.getFriendRemark(o);e.remark!==a&&(e.remark=a,n+=1);}}),je.log("".concat(this._className,".checkAndPatchRemark. c2c conversation count:").concat(o.length,", patched count:").concat(n)),e;}},{key:"updateTopicConversation",value:function value(e){this._updateLocalConversationList({conversationOptionsList:e,isFromGetConversations:!0});}},{key:"sendReadReceipt",value:function value(e){var t=e[0],o=null;return t.conversationType===N.CONV_C2C?o=this._moduleManager.getModule(Bo):t.conversationType===N.CONV_GROUP&&(o=this._moduleManager.getModule(Ko)),o?o.sendReadReceipt(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"getReadReceiptList",value:function value(e){var t=e[0],o=null;return t.conversationType===N.CONV_C2C?o=this._moduleManager.getModule(Bo):t.conversationType===N.CONV_GROUP&&(o=this._moduleManager.getModule(Ko)),o?o.getReadReceiptList(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"getLastMessageTime",value:function value(e){var t=this.getLocalConversation(e);return t?t.lastMessage.lastTime:0;}},{key:"getTotalUnreadMessageCount",value:function value(){var e=this.getLocalConversationList(),t=0;return e.forEach(function(e){e.type!==N.CONV_SYSTEM&&(""!==e.messageRemindType&&e.messageRemindType!==N.MSG_REMIND_ACPT_AND_NOTE||(t+=e.unreadCount));}),t;}},{key:"emitTotalUnreadMessageCountUpdate",value:function value(){var e=this.getTotalUnreadMessageCount();this._convTotalUnreadCount!==e&&(je.log("".concat(this._className,".emitTotalUnreadMessageCountUpdate from ").concat(this._convTotalUnreadCount," to ").concat(e)),this._convTotalUnreadCount=e,this.emitOuterEvent(D.TOTAL_UNREAD_MESSAGE_COUNT_UPDATED));}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._pagingStatus=co.NOT_START,this._messageListHandler.reset(),this._messageRemindHandler.reset(),this._roamingMessageKeyAndTimeMap.clear(),this._roamingMessageSequenceMap.clear(),this.singlyLinkedList.reset(),this._peerReadTimeMap.clear(),this._completedMap.clear(),this._conversationMap.clear(),this._pagingTimeStamp=0,this._pagingStartIndex=0,this._pagingPinnedTimeStamp=0,this._pagingPinnedStartIndex=0,this._remoteGroupReadSequenceMap.clear(),this._convTotalUnreadCount=0,this.resetReady();}}]),a;}(mn),Ar=function(){function e(t){n(this,e),this._groupModule=t,this._className="GroupTipsHandler",this._cachedGroupTipsMap=new Map(),this._checkCountMap=new Map(),this.MAX_CHECK_COUNT=4,this._getTopicPendingMap=new Map();}return s(e,[{key:"onCheckTimer",value:function value(e){e%1==0&&this._cachedGroupTipsMap.size>0&&this._checkCachedGroupTips();}},{key:"_checkCachedGroupTips",value:function value(){var e=this;this._cachedGroupTipsMap.forEach(function(t,o){var n=e._checkCountMap.get(o),a=e._groupModule.hasLocalGroup(o);je.log("".concat(e._className,"._checkCachedGroupTips groupID:").concat(o," hasLocalGroup:").concat(a," checkCount:").concat(n)),a?(e._notifyCachedGroupTips(o),e._checkCountMap.delete(o),e._groupModule.deleteUnjoinedAVChatRoom(o)):n>=e.MAX_CHECK_COUNT?(e._deleteCachedGroupTips(o),e._checkCountMap.delete(o)):(n++,e._checkCountMap.set(o,n));});}},{key:"onNewGroupTips",value:function value(e){je.debug("".concat(this._className,".onReceiveGroupTips count:").concat(e.dataList.length));var t=this.newGroupTipsStoredAndSummary(e),o=t.eventDataList,n=t.result,a=t.AVChatRoomMessageList;(a.length>0&&this._groupModule.onAVChatRoomMessage(a),o.length>0)&&(this._groupModule.updateNextMessageSeq(o),this._groupModule.getModule(jo).onNewMessage({conversationOptionsList:o,isInstantMessage:!0}));n.length>0&&(this._groupModule.emitOuterEvent(D.MESSAGE_RECEIVED,n),this.handleMessageList(n));}},{key:"newGroupTipsStoredAndSummary",value:function value(e){for(var o=this,n=e.event,a=e.dataList,s=null,r=[],i=[],c={},u=[],l=function l(e,_l){var d=kt(a[e]);if(6===n&&o._groupModule.isGroupAttributesUpdatedNotice(d))return"continue";var p=d.groupProfile,g=p.groupID,_=p.communityType,h=void 0===_?0:_,f=p.topicID,m=void 0===f?void 0:f,M=p.invisible,v=void 0,y=o._groupModule.isMessageFromTopic(h,m);if(y){v=N.CONV_TOPIC,d.to=m;var I=o._groupModule.getModule(Yo);I.hasLocalTopic(g,m)||o._getTopicPendingMap.has(m)||(o._getTopicPendingMap.set(m,1),I.getTopicList({groupID:g,topicIDList:[m]}).finally(function(){o._getTopicPendingMap.delete(m);}));}var T=o._groupModule.hasLocalGroup(g);if(!T&&o._groupModule.isUnjoinedAVChatRoom(g))return"continue";if(!T&&!y)return o._cacheGroupTipsAndProbe({groupID:g,event:n,item:d}),"continue";if(o._groupModule.isMessageFromOrToAVChatroom(g))return d.event=n,u.push(d),"continue";if(d.currentUser=o._groupModule.getMyUserID(),d.conversationType=N.CONV_GROUP,(s=new $s(d)).setElement({type:N.MSG_GRP_TIP,content:t(t({},d.elements),{},{groupProfile:d.groupProfile})}),s.isSystemMessage=!1,1===M)return o._qualityStat(s),"continue";var C=o._groupModule.getModule(jo),E=s,S=E.conversationID,D=E.sequence;if(6===n)s._onlineOnlyFlag=!0,i.push(s);else if(!C.pushIntoNoticeResult(i,s))return"continue";if(o._groupModule.isMessageFromCommunityOfTopic(h,m))return"continue";if(6===n&&C.getLocalConversation(S))return"continue";6!==n&&o._qualityStat(s);var A=C.isRemoteRead({conversationID:S,sequence:D});if(pt(c[S])){var k=0;"in"===s.flow&&(s._isExcludedFromUnreadCount||s._onlineOnlyFlag||A||(k=1)),c[S]=r.push({conversationID:S,unreadCount:k,type:pt(v)?s.conversationType:v,subType:s.conversationSubType,lastMessage:s._isExcludedFromLastMessage?"":s})-1;}else{var R=c[S];r[R].type=s.conversationType,r[R].subType=s.conversationSubType,r[R].lastMessage=s._isExcludedFromLastMessage?"":s,"in"===s.flow&&(s._isExcludedFromUnreadCount||s._onlineOnlyFlag||A||r[R].unreadCount++);}},d=0,p=a.length;d<p;d++){l(d);}return{eventDataList:r,result:i,AVChatRoomMessageList:u};}},{key:"_qualityStat",value:function value(e){this._groupModule.getModule(un).addMessageSequence({key:Es,message:e});}},{key:"handleMessageList",value:function value(e){var t=this;e.forEach(function(e){switch(e.payload.operationType){case 1:t._onNewMemberComeIn(e);break;case 2:t._onMemberQuit(e);break;case 3:t._onMemberKickedOut(e);break;case 4:t._onMemberSetAdmin(e);break;case 5:t._onMemberCancelledAdmin(e);break;case 6:t._onGroupProfileModified(e);break;case 7:t._onMemberInfoModified(e);break;case 8:t._onTopicProfileUpdated(e);break;default:je.warn("".concat(t._className,".handleMessageList unknown operationType:").concat(e.payload.operationType));}});}},{key:"_onNewMemberComeIn",value:function value(e){var t=e.payload,o=t.memberNum,n=t.groupProfile.groupID,a=this._groupModule.getLocalGroupProfile(n);a&&it(o)&&a.memberCount!==o&&(a.memberCount=o,this._updateConversationGroupProfile(a));}},{key:"_onMemberQuit",value:function value(e){var t=e.payload,o=t.memberNum,n=t.groupProfile.groupID,a=this._groupModule.getLocalGroupProfile(n);a&&it(o)&&a.memberCount!==o&&(a.memberCount=o,this._updateConversationGroupProfile(a)),this._groupModule.getModule(Wo).deleteLocalGroupMembers(n,e.payload.userIDList);}},{key:"_onMemberKickedOut",value:function value(e){var t=e.payload,o=t.memberNum,n=t.groupProfile.groupID,a=this._groupModule.getLocalGroupProfile(n);a&&it(o)&&a.memberCount!==o&&(a.memberCount=o,this._updateConversationGroupProfile(a)),this._groupModule.getModule(Wo).deleteLocalGroupMembers(n,e.payload.userIDList);}},{key:"_updateConversationGroupProfile",value:function value(e){this._groupModule.getModule(jo).updateConversationGroupProfile([e]);}},{key:"_onMemberSetAdmin",value:function value(e){var t=e.payload.groupProfile.groupID,o=e.payload.userIDList,n=this._groupModule.getModule(Wo);o.forEach(function(e){var o=n.getLocalGroupMemberInfo(t,e);o&&o.updateRole(N.GRP_MBR_ROLE_ADMIN);});}},{key:"_onMemberCancelledAdmin",value:function value(e){var t=e.payload.groupProfile.groupID,o=e.payload.userIDList,n=this._groupModule.getModule(Wo);o.forEach(function(e){var o=n.getLocalGroupMemberInfo(t,e);o&&o.updateRole(N.GRP_MBR_ROLE_MEMBER);});}},{key:"_onGroupProfileModified",value:function value(e){var t=this,o=e.payload,n=o.newGroupProfile,a=o.groupProfile.groupID,s=this._groupModule.getLocalGroupProfile(a);Object.keys(n).forEach(function(e){switch(e){case"ownerID":t._ownerChanged(s,n);break;case"muteAllMembers":s.muteAllMembers=n.muteAllMembers;break;case"joinOption":s.joinOption=n.joinOption;break;default:s[e]=n[e];}});var r=!s.isSupportTopic;this._groupModule.emitGroupListUpdate(!0,r);}},{key:"_ownerChanged",value:function value(e,t){var o=e.groupID,n=this._groupModule.getLocalGroupProfile(o),a=this._groupModule.getMyUserID();if(a===t.ownerID){n.updateGroup({selfInfo:{role:N.GRP_MBR_ROLE_OWNER}});var s=this._groupModule.getModule(Wo),r=s.getLocalGroupMemberInfo(o,a),i=this._groupModule.getLocalGroupProfile(o).ownerID,c=s.getLocalGroupMemberInfo(o,i);r&&r.updateRole(N.GRP_MBR_ROLE_OWNER),c&&c.updateRole(N.GRP_MBR_ROLE_MEMBER);}}},{key:"_onMemberInfoModified",value:function value(e){var t=e.to,o=e.payload,n=o.groupProfile,a=o.memberList,s=n.groupID;Pt(t)&&this._updateTopicMuteTime(e);var r=this._groupModule.getModule(Wo);a.forEach(function(e){var t=r.getLocalGroupMemberInfo(s,e.userID);t&&it(e.muteTime)&&t.updateMuteUntil(e.muteTime);});}},{key:"_updateTopicMuteTime",value:function value(e){var t=e.to,o=e.payload,n=o.groupProfile,a=o.memberList,s=void 0===a?[]:a,r=this._groupModule.getModule(Yo),i=n.groupID,c=r.getLocalTopic(i,t);if(c){for(var u=!1,l=0;l<s.length;l++){var d=s[l];if(d.userID===this._groupModule.getMyUserID()&&d.muteTime>=0){c.updateSelfInfo({muteTime:d.muteTime}),u=!0;break;}}u&&this._groupModule.emitOuterEvent(D.TOPIC_UPDATED,{groupID:i,topic:c});}}},{key:"_onTopicProfileUpdated",value:function value(e){var o=e.payload,n=o.groupProfile.groupID,a=o.newTopicInfo;this._groupModule.getModule(Yo).onTopicProfileUpdated(t({groupID:n,topicID:e.to},a));}},{key:"_cacheGroupTips",value:function value(e,t){this._cachedGroupTipsMap.has(e)||this._cachedGroupTipsMap.set(e,[]),this._cachedGroupTipsMap.get(e).push(t);}},{key:"_deleteCachedGroupTips",value:function value(e){this._cachedGroupTipsMap.has(e)&&this._cachedGroupTipsMap.delete(e);}},{key:"_notifyCachedGroupTips",value:function value(e){var t=this,o=this._cachedGroupTipsMap.get(e)||[];o.forEach(function(e){t.onNewGroupTips(e);}),this._deleteCachedGroupTips(e),je.log("".concat(this._className,"._notifyCachedGroupTips groupID:").concat(e," count:").concat(o.length));}},{key:"_cacheGroupTipsAndProbe",value:function value(e){var t=this,o=e.groupID,n=e.event,a=e.item;this._cacheGroupTips(o,{event:n,dataList:[a]}),this._groupModule.getGroupSimplifiedInfo(o).then(function(e){e.type===N.GRP_AVCHATROOM?t._groupModule.hasLocalGroup(o)?t._notifyCachedGroupTips(o):t._groupModule.setUnjoinedAVChatRoom(o):(t._groupModule.updateGroupMap([e]),t._notifyCachedGroupTips(o));}),this._checkCountMap.has(o)||this._checkCountMap.set(o,0),je.log("".concat(this._className,"._cacheGroupTipsAndProbe groupID:").concat(o));}},{key:"reset",value:function value(){this._cachedGroupTipsMap.clear(),this._checkCountMap.clear(),this._getTopicPendingMap.clear();}}]),e;}(),kr=function(){function e(t){n(this,e),this._groupModule=t,this._className="CommonGroupHandler",this.tempConversationList=null,this._cachedGroupMessageMap=new Map(),this._checkCountMap=new Map(),this.MAX_CHECK_COUNT=4,this._getTopicPendingMap=new Map(),this._isPagingGetCompleted=!1,t.getInnerEmitterInstance().once(cr,this._initGroupList,this);}return s(e,[{key:"onCheckTimer",value:function value(e){e%1==0&&this._cachedGroupMessageMap.size>0&&this._checkCachedGroupMessage();}},{key:"_checkCachedGroupMessage",value:function value(){var e=this;this._cachedGroupMessageMap.forEach(function(t,o){var n=e._checkCountMap.get(o),a=e._groupModule.hasLocalGroup(o);je.log("".concat(e._className,"._checkCachedGroupMessage groupID:").concat(o," hasLocalGroup:").concat(a," checkCount:").concat(n)),a?(e._notifyCachedGroupMessage(o),e._checkCountMap.delete(o),e._groupModule.deleteUnjoinedAVChatRoom(o)):n>=e.MAX_CHECK_COUNT?(e._deleteCachedGroupMessage(o),e._checkCountMap.delete(o)):(n++,e._checkCountMap.set(o,n));});}},{key:"_initGroupList",value:function value(){var e=this;je.log("".concat(this._className,"._initGroupList"));var t=new Os(Ls.GET_GROUP_LIST_IN_STORAGE),o=this._groupModule.getStorageGroupList();if(dt(o)&&o.length>0){o.forEach(function(t){e._groupModule.initGroupMap(t);}),this._groupModule.emitGroupListUpdate(!0,!1);var n=this._groupModule.getLocalGroupList().length;t.setNetworkType(this._groupModule.getNetworkType()).setMessage("group count:".concat(n)).end();}else t.setNetworkType(this._groupModule.getNetworkType()).setMessage("group count:0").end();je.log("".concat(this._className,"._initGroupList ok"));}},{key:"handleUpdateGroupLastMessage",value:function value(e){var t="".concat(this._className,".handleUpdateGroupLastMessage");if(je.debug("".concat(t," conversation count:").concat(e.length,", local group count:").concat(this._groupModule.getLocalGroupList().length)),0!==this._groupModule.getGroupMap().size){for(var o,n,a,s=!1,r=0,i=e.length;r<i;r++){(o=e[r]).type===N.CONV_GROUP&&(n=o.conversationID.split(/^GROUP/)[1],(a=this._groupModule.getLocalGroupProfile(n))&&(a.lastMessage=o.lastMessage,s=!0));}s&&(this._groupModule.sortLocalGroupList(),this._groupModule.emitGroupListUpdate(!0,!1));}else this.tempConversationList=e;}},{key:"onNewGroupMessage",value:function value(e){je.debug("".concat(this._className,".onNewGroupMessage count:").concat(e.dataList.length));var t=this._newGroupMessageStoredAndSummary(e),o=t.conversationOptionsList,n=t.messageList,a=t.AVChatRoomMessageList;(a.length>0&&this._groupModule.onAVChatRoomMessage(a),this._groupModule.filterModifiedMessage(n),o.length>0)&&(this._groupModule.updateNextMessageSeq(o),this._groupModule.getModule(jo).onNewMessage({conversationOptionsList:o,isInstantMessage:e.isInstantMessage||!0,updateUnreadCount:e.updateUnreadCount||!0}));var s=this._groupModule.filterUnmodifiedMessage(n);s.length>0&&this._groupModule.emitOuterEvent(D.MESSAGE_RECEIVED,s),n.length=0;}},{key:"_newGroupMessageStoredAndSummary",value:function value(e){var t=this,o=e.dataList,n=e.event,a=e.isInstantMessage,s=null,r=[],i=[],c=[],u={},l=this._groupModule.getModule(Qo),d=o.length;d>1&&o.sort(function(e,t){return e.sequence-t.sequence;});for(var p=function p(e){var d=kt(o[e]),p=d.groupProfile,g=p.groupID,_=p.communityType,h=void 0===_?0:_,f=p.topicID,m=void 0===f?void 0:f,M=p.invisible,v=void 0,y=t._groupModule.isMessageFromTopic(h,m);if(y){v=N.CONV_TOPIC,d.to=m;var I=t._groupModule.getModule(Yo);I.hasLocalTopic(g,m)||t._getTopicPendingMap.has(m)||(t._getTopicPendingMap.set(m,1),I.getTopicList({groupID:g,topicIDList:[m]}).finally(function(){t._getTopicPendingMap.delete(m);}));}var T=t._groupModule.hasLocalGroup(g);if(!T&&t._groupModule.isUnjoinedAVChatRoom(g))return"continue";if(!T&&!y)return t._cacheGroupMessageAndProbe({groupID:g,event:n,item:d}),"continue";if(t._groupModule.isMessageFromOrToAVChatroom(g))return d.event=n,c.push(d),"continue";if(d.currentUser=t._groupModule.getMyUserID(),d.conversationType=N.CONV_GROUP,d.isSystemMessage=!!d.isSystemMessage,s=new $s(d),d.elements=l.parseElements(d.elements,d.from),s.setElement(d.elements),1===M)return t._qualityStat(a,s),"continue";var C=1===o[e].isModified,E=t._groupModule.getModule(jo);if(E.isMessageSentByCurrentInstance(s)?s.isModified=C:C=!1,1===d.onlineOnlyFlag)s._onlineOnlyFlag=!0,E.isMessageSentByCurrentInstance(s)||i.push(s);else{if(t._groupModule.isMessageFromCommunityOfTopic(h,m))return i.push(s),"continue";if(!E.pushIntoMessageList(i,s,C))return"continue";t._qualityStat(a,s);var S=s,D=S.conversationID,A=S.sequence,k=E.isRemoteRead({conversationID:D,sequence:A});if(pt(u[D])){var R=0;"in"===s.flow&&(s._isExcludedFromUnreadCount||k||(R=1)),u[D]=r.push({conversationID:D,unreadCount:R,type:pt(v)?s.conversationType:v,subType:s.conversationSubType,lastMessage:s._isExcludedFromLastMessage?"":s})-1;}else{var O=u[D];r[O].type=pt(v)?s.conversationType:v,r[O].subType=s.conversationSubType,r[O].lastMessage=s._isExcludedFromLastMessage?"":s,"in"===s.flow&&(s._isExcludedFromUnreadCount||k||r[O].unreadCount++);}}},g=0;g<d;g++){p(g);}return{conversationOptionsList:r,messageList:i,AVChatRoomMessageList:c};}},{key:"_qualityStat",value:function value(e,t){var o=this._groupModule.getModule(un);o.addMessageSequence({key:Es,message:t}),e&&t.clientTime>0&&o.addMessageDelay(t.clientTime);}},{key:"onGroupMessageRevoked",value:function value(e){var t=this._groupModule.getModule(jo),o=[],n=null,a=!0;e.dataList.forEach(function(e){var s=e.elements.revokedInfos;pt(s)||s.forEach(function(e){var s=pt(e.topicID)?"GROUP".concat(e.groupID):"GROUP".concat(e.topicID);if(n=t.revoke(s,e.sequence,e.random))o.push(n);else{var r={conversationID:s,to:e.topicID||"",sequence:e.sequence,time:e.time};t.isLastMessageRevoked(r)&&(o.push(r),a=!1);}});}),0!==o.length&&(t.onMessageRevoked(o),!0===a&&(je.log("".concat(this._className,".onGroupMessageRevoked count:").concat(o.length)),this._groupModule.emitOuterEvent(D.MESSAGE_REVOKED,o)));}},{key:"_groupListTreeShaking",value:function value(e){for(var t=new Map(M(this._groupModule.getGroupMap())),o=0,n=e.length;o<n;o++){t.delete(e[o].groupID);}this._groupModule.hasJoinedAVChatRoom()&&this._groupModule.getJoinedAVChatRoom().forEach(function(e){t.delete(e);});this._groupModule.getGroupMap().forEach(function(e,o){e.isSupportTopic&&t.delete(o);});for(var a=M(t.keys()),s=0,r=a.length;s<r;s++){this._groupModule.deleteGroup(a[s]);}}},{key:"getGroupList",value:function value(e){var t=this,o="".concat(this._className,".getGroupList"),n=new Os(Ls.GET_GROUP_LIST);je.log("".concat(o));var a={introduction:"Introduction",notification:"Notification",createTime:"CreateTime",ownerID:"Owner_Account",lastInfoTime:"LastInfoTime",memberNum:"MemberNum",maxMemberNum:"MaxMemberNum",joinOption:"ApplyJoinOption",muteAllMembers:"ShutUpAllMember"},s=["Type","Name","FaceUrl","NextMsgSeq","LastMsgTime","AtInfoList"],r=[];e&&e.groupProfileFilter&&e.groupProfileFilter.forEach(function(e){a[e]&&s.push(a[e]);});var i=(e||{}).isGroupWithTopicOnly,c=void 0!==i&&i;return this._pagingGetGroupList({limit:50,offset:0,groupBaseInfoFilter:s,groupList:r,isGroupWithTopicOnly:c}).then(function(){je.log("".concat(o," ok. count:").concat(r.length," isGroupWithTopicOnly:").concat(c)),c||t._groupListTreeShaking(r),t._groupModule.updateGroupMap(r);var e=t._groupModule.getLocalGroupList().length;n.setNetworkType(t._groupModule.getNetworkType()).setMessage("remote count:".concat(r.length,", after tree shaking, local count:").concat(e,", isGroupWithTopicOnly:").concat(c)).end(),t.tempConversationList&&(je.log("".concat(o," update last message with tempConversationList, count:").concat(t.tempConversationList.length)),t.handleUpdateGroupLastMessage({data:t.tempConversationList}),t.tempConversationList=null),t._groupModule.patchGroupMessageRemindType(),t._groupModule.recomputeUnreadCount(),t._groupModule.emitGroupListUpdate(!0,!c);var a=t._groupModule.getLocalGroupList();if(c){var s=a.filter(function(e){return!0===e.isSupportTopic;});return zs({groupList:s});}return t._isPagingGetCompleted=!0,zs({groupList:a});}).catch(function(e){return t._groupModule.probeNetwork().then(function(t){var o=m(t,2),a=o[0],s=o[1];n.setError(e,a,s).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"isPagingGetCompleted",value:function value(){return this._isPagingGetCompleted;}},{key:"_pagingGetGroupList",value:function value(e){var t=this,o="".concat(this._className,"._pagingGetGroupList"),n=e.isCommunityRelay,a=void 0!==n&&n,s=e.isGroupWithTopicOnly,r=void 0!==s&&s,i=e.limit,c=e.offset,u=e.groupBaseInfoFilter,l=e.groupList;if(r)return this._pagingGetGroupListWithTopic({limit:i,offset:c,groupBaseInfoFilter:u,groupList:l});var d=new Os(Ls.PAGING_GET_GROUP_LIST);return this._groupModule.request({protocolName:ta,requestData:{type:a?N.GRP_COMMUNITY:void 0,memberAccount:this._groupModule.getMyUserID(),limit:i,offset:c,responseFilter:{groupBaseInfoFilter:u,selfInfoFilter:["Role","JoinTime","MsgFlag","MsgSeq"]}}}).then(function(e){var n=e.data,s=n.groups,r=void 0===s?[]:s,p=n.totalCount;l.push.apply(l,M(r)),t._handleGroupAtInfoWithoutTopic(a,r);var g=c+i,_=!(p>g),h="offset:".concat(c," totalCount:").concat(p," isCompleted:").concat(_," ")+"currentCount:".concat(l.length," isCommunityRelay:").concat(a);return d.setNetworkType(t._groupModule.getNetworkType()).setMessage("".concat(h)).end(),a||_?!a&&_?(je.log("".concat(o," start to get community list")),c=0,t._pagingGetGroupList({limit:i,offset:c,groupBaseInfoFilter:u,groupList:l,isCommunityRelay:!0})):a&&!_?(c=g,t._pagingGetGroupList({limit:i,offset:c,groupBaseInfoFilter:u,groupList:l,isCommunityRelay:!0})):(je.log("".concat(o," ok. totalCount:").concat(l.length)),zs({groupList:l})):(c=g,t._pagingGetGroupList({limit:i,offset:c,groupBaseInfoFilter:u,groupList:l}));}).catch(function(e){return 11e3!==e.code&&t._groupModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],s=o[1];d.setMessage("isCommunityRelay:".concat(a)).setError(e,n,s).end();}),a?(11e3===e.code&&(d=null,je.log("".concat(o," ok. community unavailable"))),ar({groupList:l})):sr(e);});}},{key:"_pagingGetGroupListWithTopic",value:function value(e){var t=this,o="".concat(this._className,"._pagingGetGroupListWithTopic"),n=e.limit,a=e.offset,s=e.groupBaseInfoFilter,r=e.groupList,i=new Os(Ls.PAGING_GET_GROUP_LIST_WITH_TOPIC);return this._groupModule.request({protocolName:ta,requestData:{type:N.GRP_COMMUNITY,memberAccount:this._groupModule.getMyUserID(),limit:n,offset:a,responseFilter:{groupBaseInfoFilter:s,selfInfoFilter:["Role","JoinTime","MsgFlag","MsgSeq"]},isSupportTopic:1}}).then(function(e){var c=e.data,u=c.groups,l=void 0===u?[]:u,d=c.totalCount;r.push.apply(r,M(l));var p=a+n,g=!(d>p),_="offset:".concat(a," totalCount:").concat(d," isCompleted:").concat(g," ")+"currentCount:".concat(r.length);return i.setNetworkType(t._groupModule.getNetworkType()).setMessage("".concat(_)).end(),g?(je.log("".concat(o," ok. totalCount:").concat(r.length)),zs({groupList:r})):(a=p,t._pagingGetGroupListWithTopic({limit:n,offset:a,groupBaseInfoFilter:s,groupList:r}));}).catch(function(e){return t._groupModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];i.setError(e,n,a).end();}),sr(e);});}},{key:"_cacheGroupMessage",value:function value(e,t){this._cachedGroupMessageMap.has(e)||this._cachedGroupMessageMap.set(e,[]),this._cachedGroupMessageMap.get(e).push(t);}},{key:"_deleteCachedGroupMessage",value:function value(e){this._cachedGroupMessageMap.has(e)&&this._cachedGroupMessageMap.delete(e);}},{key:"_notifyCachedGroupMessage",value:function value(e){var t=this,o=this._cachedGroupMessageMap.get(e)||[];o.forEach(function(e){t.onNewGroupMessage(e);}),this._deleteCachedGroupMessage(e),je.log("".concat(this._className,"._notifyCachedGroupMessage groupID:").concat(e," count:").concat(o.length));}},{key:"_cacheGroupMessageAndProbe",value:function value(e){var t=this,o=e.groupID,n=e.event,a=e.item;this._cacheGroupMessage(o,{event:n,dataList:[a]}),this._groupModule.getGroupSimplifiedInfo(o).then(function(e){e.type===N.GRP_AVCHATROOM?t._groupModule.hasLocalGroup(o)?t._notifyCachedGroupMessage(o):t._groupModule.setUnjoinedAVChatRoom(o):(t._groupModule.updateGroupMap([e]),t._notifyCachedGroupMessage(o));}),this._checkCountMap.has(o)||this._checkCountMap.set(o,0),je.log("".concat(this._className,"._cacheGroupMessageAndProbe groupID:").concat(o));}},{key:"_handleGroupAtInfoWithoutTopic",value:function value(e,o){var n=this;e&&0!==o.length&&o.forEach(function(e){var o=e.groupID,a=e.groupAtInfoList,s=[];pt(a)||(a.forEach(function(e){s.push(t(t({},e),{},{groupID:o}));}),n._groupModule.getModule(jo).onNewGroupAtTips({dataList:s}));});}},{key:"reset",value:function value(){this._cachedGroupMessageMap.clear(),this._checkCountMap.clear(),this._getTopicPendingMap.clear(),this._isPagingGetCompleted=!1,this._groupModule.getInnerEmitterInstance().once(cr,this._initGroupList,this);}}]),e;}(),Rr=1,Or=2,Lr=3,Gr=4,Pr=5,Ur=function(){function e(t){n(this,e),this._groupModule=t,this._className="GroupAttributesHandler",this._groupAttributesMap=new Map(),this.CACHE_EXPIRE_TIME=3e4,this._groupModule.getInnerEmitterInstance().on(ur,this._onCloudConfigUpdated,this);}return s(e,[{key:"_onCloudConfigUpdated",value:function value(){var e=this._groupModule.getCloudConfig("grp_attr_cache_time");pt(e)||(this.CACHE_EXPIRE_TIME=Number(e));}},{key:"updateLocalMainSequenceOnReconnected",value:function value(){this._groupAttributesMap.forEach(function(e){e.localMainSequence=0;});}},{key:"isGroupAttributesUpdatedNotice",value:function value(e){var t=e.to,o=e.elements.newGroupProfile,n=!pt(o)&&!no(o.groupAttributeOption);return n&&this._onGroupAttributesUpdated({groupID:t,groupAttributeOption:o.groupAttributeOption}),n;}},{key:"_onGroupAttributesUpdated",value:function value(e){var t=this,o=e.groupID,n=e.groupAttributeOption,a=n.mainSequence,s=n.isWithChangedAttributeInfo,r=n.groupAttributeList,i=void 0===r?[]:r,c=n.operationType;if(je.log("".concat(this._className,".onGroupAttributesUpdated. ")+"groupID:".concat(o," isWithChangedAttributeInfo:").concat(s," operationType:").concat(c)),!pt(c)){if(1===s)return this._refreshCachedGroupAttributes({groupID:o,remoteMainSequence:a,groupAttributeList:i,operationType:c}),void this._emitGroupAttributesUpdated(o);if(this._hasLocalGroupAttributes(o)){var u=this._getLocalGroupAttributes(o).avChatRoomKey;this._getGroupAttributes({groupID:o,avChatRoomKey:u}).then(function(){t._emitGroupAttributesUpdated(o);});}}}},{key:"initGroupAttributesCache",value:function value(e){var t=e.groupID,o=e.avChatRoomKey,n=void 0===o?void 0:o;this._groupAttributesMap.set(t,{lastUpdateTime:0,localMainSequence:0,remoteMainSequence:0,attributes:new Map(),avChatRoomKey:n}),je.log("".concat(this._className,".initGroupAttributesCache groupID:").concat(t," avChatRoomKey:").concat(n));}},{key:"initGroupAttributes",value:function value(e){var t=this,o=e.groupID,n=e.groupAttributes,a=this._getLocalGroupAttributes(o),s=a.remoteMainSequence,r=a.avChatRoomKey,i=new Os(Ls.INIT_GROUP_ATTRIBUTES);return i.setMessage("groupID:".concat(o," avChatRoomKey:").concat(r," mainSequence:").concat(s)),this._groupModule.request({protocolName:Aa,requestData:{groupID:o,avChatRoomKey:r,mainSequence:s,groupAttributeList:this._transformGroupAttributes(n)}}).then(function(e){var a=e.data,s=a.mainSequence,r=M(a.groupAttributeList);return r.forEach(function(e){e.value=n[e.key];}),t._refreshCachedGroupAttributes({groupID:o,remoteMainSequence:s,groupAttributeList:r,operationType:Rr}),i.setNetworkType(t._groupModule.getNetworkType()).end(),je.log("".concat(t._className,".initGroupAttributes ok. groupID:").concat(o)),zs({groupAttributes:n});}).catch(function(e){return t._groupModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];i.setError(e,n,a).end();}),sr(e);});}},{key:"setGroupAttributes",value:function value(e){var t=this,o="".concat(this._className,".setGroupAttributes"),n=e.groupID,a=e.groupAttributes,s=this._getLocalGroupAttributes(n),r=s.remoteMainSequence,i=s.avChatRoomKey,c=s.attributes,u=this._transformGroupAttributes(a);u.forEach(function(e){var t=e.key;e.sequence=0,c.has(t)&&(e.sequence=c.get(t).sequence);});var l=new Os(Ls.SET_GROUP_ATTRIBUTES);return l.setMessage("groupID:".concat(n,"groupAttributes:").concat(JSON.stringify(a))),je.log("".concat(o,". groupID:").concat(n," mainSequence:").concat(r)),this._groupModule.request({protocolName:ka,requestData:{groupID:n,avChatRoomKey:i,mainSequence:r,groupAttributeList:u}}).then(function(e){var s=e.data,r=s.mainSequence,i=M(s.groupAttributeList);return i.forEach(function(e){e.value=a[e.key];}),t._refreshCachedGroupAttributes({groupID:n,remoteMainSequence:r,groupAttributeList:i,operationType:Or}),l.setNetworkType(t._groupModule.getNetworkType()).end(),je.log("".concat(o," ok.")),zs({groupAttributes:a});}).catch(function(e){return t._groupModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];l.setError(e,n,a).end();}),sr(e);});}},{key:"deleteGroupAttributes",value:function value(e){var t=this,o=e.groupID,n=e.keyList,a=void 0===n?[]:n,s=this._getLocalGroupAttributes(o),r=s.remoteMainSequence,i=s.avChatRoomKey,c=s.attributes,u=M(c.keys()),l=Oa,d=Lr,p={groupID:o,avChatRoomKey:i,mainSequence:r},g=[];a.length>0&&(u=[],l=Ra,d=Gr,a.forEach(function(e){var t=0;c.has(e)&&(t=c.get(e).sequence,u.push(e)),g.push({key:e,sequence:t});}),p.groupAttributeList=g);var _=new Os(Ls.DELETE_GROUP_ATTRIBUTES);return _.setMessage("groupID:".concat(o," mainSequence:").concat(r," keyList:").concat(a," protocolName:").concat(l)),this._groupModule.request({protocolName:l,requestData:p}).then(function(e){var n=e.data.mainSequence;return t._refreshCachedGroupAttributes({groupID:o,remoteMainSequence:n,groupAttributeList:g,operationType:d}),_.setNetworkType(t._groupModule.getNetworkType()).end(),je.log("".concat(t._className,".deleteGroupAttributes ok. groupID:").concat(o)),zs({keyList:u});}).catch(function(e){return t._groupModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];_.setError(e,n,a).end();}),sr(e);});}},{key:"getGroupAttributes",value:function value(e){var t=this,o=e.groupID,n=this._getLocalGroupAttributes(o),a=n.avChatRoomKey,s=n.lastUpdateTime,r=n.localMainSequence,i=n.remoteMainSequence,c=new Os(Ls.GET_GROUP_ATTRIBUTES);if(c.setMessage("groupID:".concat(o," localMainSequence:").concat(r," remoteMainSequence:").concat(i," keyList:").concat(e.keyList)),Date.now()-s>=this.CACHE_EXPIRE_TIME||r<i)return this._getGroupAttributes({groupID:o,avChatRoomKey:a}).then(function(n){c.setMoreMessage("get attributes from remote. count:".concat(n.length)).setNetworkType(t._groupModule.getNetworkType()).end(),je.log("".concat(t._className,".getGroupAttributes from remote. groupID:").concat(o));var a=t._getCachedAttributes(e);return zs({groupAttributes:a});}).catch(function(e){return t._groupModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];c.setError(e,n,a).end();}),sr(e);});c.setMoreMessage("get attributes from cache").setNetworkType(this._groupModule.getNetworkType()).end(),je.log("".concat(this._className,".getGroupAttributes from cache. groupID:").concat(o));var u=this._getCachedAttributes(e);return ar({groupAttributes:u});}},{key:"_getGroupAttributes",value:function value(e){var o=this,n=0;return pt(e.avChatRoomKey)||(n=1),this._groupModule.request({protocolName:La,requestData:t(t({},e),{},{groupType:n})}).then(function(t){var n=t.data,a=n.mainSequence,s=n.groupAttributeList,r=M(s);return pt(a)||o._refreshCachedGroupAttributes({groupID:e.groupID,remoteMainSequence:a,groupAttributeList:r,operationType:Pr}),je.log("".concat(o._className,"._getGroupAttributes ok. groupID:").concat(e.groupID)),s;}).catch(function(e){return sr(e);});}},{key:"_refreshCachedGroupAttributes",value:function value(e){var t=e.groupID,o=e.remoteMainSequence,n=e.groupAttributeList,a=e.operationType;if(this._hasLocalGroupAttributes(t)){var s=this._getLocalGroupAttributes(t),r=s.localMainSequence;if(a===Pr||o-r==1)s.remoteMainSequence=o,s.localMainSequence=o,s.lastUpdateTime=Date.now(),this._updateCachedAttributes({groupAttributes:s,groupAttributeList:n,operationType:a});else{if(r===o)return;s.remoteMainSequence=o;}this._groupAttributesMap.set(t,s);var i="operationType:".concat(a," localMainSequence:").concat(r," remoteMainSequence:").concat(o);je.log("".concat(this._className,"._refreshCachedGroupAttributes. ").concat(i));}}},{key:"_getCachedAttributes",value:function value(e){var t=e.groupID,o=e.keyList,n=void 0===o?[]:o,a={};if(this._hasLocalGroupAttributes(t)){var s=this._getLocalGroupAttributes(t).attributes;if(n.length>0)n.forEach(function(e){s.has(e)&&(a[e]=s.get(e).value);});else{var r,i=E(s.keys());try{for(i.s();!(r=i.n()).done;){var c=r.value;a[c]=s.get(c).value;}}catch(u){i.e(u);}finally{i.f();}}}return a;}},{key:"_updateCachedAttributes",value:function value(e){var t=e.groupAttributes,o=e.groupAttributeList,n=e.operationType;n!==Lr?n!==Gr?(n===Rr&&t.attributes.clear(),o.forEach(function(e){var o=e.key,n=e.value,a=e.sequence;t.attributes.set(o,{value:n,sequence:a});})):o.forEach(function(e){t.attributes.delete(e.key);}):t.attributes.clear();}},{key:"_hasLocalGroupAttributes",value:function value(e){return this._groupAttributesMap.has(e);}},{key:"_getLocalGroupAttributes",value:function value(e){return this._hasLocalGroupAttributes(e)||this.initGroupAttributesCache({groupID:e}),this._groupAttributesMap.get(e);}},{key:"_transformGroupAttributes",value:function value(e){var t=[];return Object.keys(e).forEach(function(o){t.push({key:o,value:e[o]});}),t;}},{key:"_emitGroupAttributesUpdated",value:function value(e){var t=this._getCachedAttributes({groupID:e});this._groupModule.emitOuterEvent(D.GROUP_ATTRIBUTES_UPDATED,{groupID:e,groupAttributes:t});}},{key:"deleteLocalGroupAttributes",value:function value(e){this._hasLocalGroupAttributes(e)&&this._groupAttributesMap.delete(e);}},{key:"reset",value:function value(){this._groupAttributesMap.clear(),this.CACHE_EXPIRE_TIME=3e4;}}]),e;}(),br=function(){function e(t){n(this,e);var o=t.manager,a=t.groupID,s=t.onInit,r=t.onSuccess,i=t.onFail;this._className="Polling",this._manager=o,this._groupModule=o._groupModule,this._onInit=s,this._onSuccess=r,this._onFail=i,this._groupID=a,this._timeoutID=-1,this._isRunning=!1,this._protocolName=Ca;}return s(e,[{key:"start",value:function value(){var e=this._groupModule.isLoggedIn();e||(this._protocolName=Ea),je.log("".concat(this._className,".start pollingInterval:").concat(this._manager.getPollingInterval()," isLoggedIn:").concat(e)),this._isRunning=!0,this._request();}},{key:"isRunning",value:function value(){return this._isRunning;}},{key:"_request",value:function value(){var e=this,t=this._onInit(this._groupID);this._groupModule.request({protocolName:this._protocolName,requestData:t}).then(function(t){e._onSuccess(e._groupID,t),e.isRunning()&&(clearTimeout(e._timeoutID),e._timeoutID=setTimeout(e._request.bind(e),e._manager.getPollingInterval()));}).catch(function(t){e._onFail(e._groupID,t),e.isRunning()&&(clearTimeout(e._timeoutID),e._timeoutID=setTimeout(e._request.bind(e),e._manager.MAX_POLLING_INTERVAL));});}},{key:"stop",value:function value(){je.log("".concat(this._className,".stop")),this._timeoutID>0&&(clearTimeout(this._timeoutID),this._timeoutID=-1),this._isRunning=!1;}}]),e;}(),wr={3:!0,4:!0,5:!0,6:!0,17:!0},Fr=function(){function e(t){n(this,e),this._groupModule=t,this._className="AVChatRoomHandler",this._joinedGroupMap=new Map(),this._pollingRequestInfoMap=new Map(),this._pollingInstanceMap=new Map(),this.sequencesLinkedList=new yr(200),this.messageIDLinkedList=new yr(100),this.receivedMessageCount=0,this._reportMessageStackedCount=0,this._onlineMemberCountMap=new Map(),this.DEFAULT_EXPIRE_TIME=60,this.DEFAULT_POLLING_INTERVAL=300,this.MAX_POLLING_INTERVAL=2e3,this._pollingInterval=this.DEFAULT_POLLING_INTERVAL,this.DEFAULT_POLLING_NO_MESSAGE_COUNT=20,this.DEFAULT_POLLING_INTERVAL_PLUS=2e3,this._pollingNoMessageCount=0,this._startBroadcastSeq=1,this._broadcastMessageIDMap=new Map();}return s(e,[{key:"hasJoinedAVChatRoom",value:function value(){return this._joinedGroupMap.size>0;}},{key:"checkJoinedAVChatRoomByID",value:function value(e){return this._joinedGroupMap.has(e);}},{key:"getJoinedAVChatRoom",value:function value(){return this._joinedGroupMap.size>0?M(this._joinedGroupMap.keys()):null;}},{key:"_updateRequestData",value:function value(e){var o=this._pollingRequestInfoMap.get(e);return e===M(this._pollingInstanceMap.keys())[0]?t(t({},o),{},{startBroadcastSeq:this._startBroadcastSeq}):t({},o);}},{key:"_handleSuccess",value:function value(e,t){var o=t.data,n=o.key,a=o.nextSeq,s=o.rspMsgList,r=o.errorCode,i=o.nextBroadcastSeq,c=o.broadcastMessageList;if(0!==r){var u=this._pollingRequestInfoMap.get(e),l=new Os(Ls.LONG_POLLING_AV_ERROR),d=u?"".concat(u.key,"-").concat(u.startSeq):"requestInfo is undefined";l.setMessage("".concat(e,"-").concat(d,"-").concat(t.errorInfo)).setCode(t.errorCode).setNetworkType(this._groupModule.getNetworkType()).end(!0);}else{if(!this.checkJoinedAVChatRoomByID(e))return;ct(n)&&it(a)&&this._pollingRequestInfoMap.set(e,{key:n,startSeq:a}),it(i)&&i>this._startBroadcastSeq&&(this._startBroadcastSeq=i),dt(s)&&s.length>0?(s.forEach(function(e){e.to=e.groupID;}),this.onMessage(s)):(this._pollingNoMessageCount+=1,this._pollingNoMessageCount===this.DEFAULT_POLLING_NO_MESSAGE_COUNT&&(this._pollingInterval=this.DEFAULT_POLLING_INTERVAL+this.DEFAULT_POLLING_INTERVAL_PLUS)),this._onBroadcastMessage(c);}}},{key:"_handleFailure",value:function value(e,t){}},{key:"onMessage",value:function value(e){if(dt(e)&&0!==e.length){0!==this._pollingNoMessageCount&&(this._pollingNoMessageCount=0,this._pollingInterval=this.DEFAULT_POLLING_INTERVAL);var t=null,o=[],n=this._getModule(jo),a=this._getModule(un),s=e.length;s>1&&e.sort(function(e,t){return e.sequence-t.sequence;});for(var r=this._getModule($o),i=0;i<s;i++){if(wr[e[i].event]){if(6!==e[i].event||!this._groupModule.isGroupAttributesUpdatedNotice(e[i])){this.receivedMessageCount+=1,t=this.packMessage(e[i],e[i].event);var c=1===e[i].isModified,u=1===e[i].isHistoryMessage;if((r.isUnlimitedAVChatRoom()||!this.sequencesLinkedList.has(t.sequence))&&!this.messageIDLinkedList.has(t.ID)){var l=t.conversationID;if(this.receivedMessageCount%50==0?this._getModule(an).detectFirstRound(l,this.sequencesLinkedList.data()):this.receivedMessageCount%80==0&&this._getModule(an).detectSecondRound(l,this.sequencesLinkedList.data()),null!==this.sequencesLinkedList.tail()){var d=this.sequencesLinkedList.tail().value,p=t.sequence-d;p>1&&p<=20?this._getModule(an).onMessageMaybeLost(l,d+1,p-1):p<-1&&p>=-20&&this._getModule(an).onMessageMaybeLost(l,t.sequence+1,Math.abs(p)-1);}this.sequencesLinkedList.set(t.sequence),this.messageIDLinkedList.set(t.ID);var g=!1;if(this._isMessageSentByCurrentInstance(t)?c&&(g=!0,t.isModified=c,n.updateMessageIsModifiedProperty(t)):g=!0,g){if(t.conversationType===N.CONV_SYSTEM&&5===t.payload.operationType&&this._onGroupDismissed(t.payload.groupProfile.groupID),!u&&t.conversationType!==N.CONV_SYSTEM){var _=t.conversationID.replace(N.CONV_GROUP,"");this._pollingInstanceMap.has(_)?this._groupModule.isLoggedIn()&&a.addMessageSequence({key:Ds,message:t}):(t.type!==N.MSG_GRP_TIP&&t.clientTime>0&&a.addMessageDelay(t.clientTime),a.addMessageSequence({key:Ss,message:t}));}o.push(t);}}}}else je.warn("".concat(this._className,".onMessage unknown event:").concat(e[i].event));}if(0!==o.length){this._groupModule.filterModifiedMessage(o);var h=this.packConversationOption(o);if(h.length>0)this._getModule(jo).onNewMessage({conversationOptionsList:h,isInstantMessage:!0});je.debug("".concat(this._className,".onMessage count:").concat(o.length)),this._checkMessageStacked(o);var f=this._groupModule.filterUnmodifiedMessage(o);f.length>0&&this._groupModule.emitOuterEvent(D.MESSAGE_RECEIVED,f),o.length=0;}}}},{key:"_onGroupDismissed",value:function value(e){je.log("".concat(this._className,"._onGroupDismissed groupID:").concat(e)),this._groupModule.deleteLocalGroupAndConversation(e),this.reset(e);}},{key:"_checkMessageStacked",value:function value(e){var t="".concat(this._className,"._checkMessageStacked"),o=e.length;o>=100&&(this._groupModule.isIntl()||je.warn("".concat(t," 直播群消息堆积数:").concat(e.length,'！可能会导致微信小程序渲染时遇到 "Dom limit exceeded" 的错误，建议接入侧此时只渲染最近的10条消息')),this._reportMessageStackedCount<5&&(new Os(Ls.MESSAGE_STACKED).setNetworkType(this._groupModule.getNetworkType()).setMessage("count:".concat(o," groupID:").concat(M(this._joinedGroupMap.keys()))).setLevel("warning").end(),this._reportMessageStackedCount+=1));}},{key:"_isMessageSentByCurrentInstance",value:function value(e){return!!this._getModule(jo).isMessageSentByCurrentInstance(e);}},{key:"packMessage",value:function value(e,t){e.currentUser=this._groupModule.getMyUserID(),e.conversationType=5===t?N.CONV_SYSTEM:N.CONV_GROUP,e.isSystemMessage=!!e.isSystemMessage;var o=new $s(e),n=this.packElements(e,t);return o.setElement(n),o;}},{key:"packElements",value:function value(e,o){return 4===o||6===o?(this._updateMemberCountByGroupTips(e),{type:N.MSG_GRP_TIP,content:t(t({},e.elements),{},{groupProfile:e.groupProfile})}):5===o?{type:N.MSG_GRP_SYS_NOTICE,content:t(t({},e.elements),{},{groupProfile:t(t({},e.groupProfile),{},{groupID:e.groupID})})}:this._getModule(Qo).parseElements(e.elements,e.from);}},{key:"packConversationOption",value:function value(e){for(var t=new Map(),o=0;o<e.length;o++){var n=e[o],a=n.conversationID;if(t.has(a)){var s=t.get(a);s.lastMessage=n,"in"===n.flow&&s.unreadCount++;}else t.set(a,{conversationID:n.conversationID,unreadCount:"out"===n.flow?0:1,type:n.conversationType,subType:n.conversationSubType,lastMessage:n});}return M(t.values());}},{key:"_updateMemberCountByGroupTips",value:function value(e){var t=e.groupProfile.groupID,o=e.elements.onlineMemberInfo,n=void 0===o?void 0:o;if(!no(n)){var a=n.onlineMemberNum,s=void 0===a?0:a,r=n.expireTime,i=void 0===r?this.DEFAULT_EXPIRE_TIME:r,c=this._onlineMemberCountMap.get(t)||{},u=Date.now();no(c)?Object.assign(c,{lastReqTime:0,lastSyncTime:0,latestUpdateTime:u,memberCount:s,expireTime:i}):(c.latestUpdateTime=u,c.memberCount=s),je.debug("".concat(this._className,"._updateMemberCountByGroupTips info:"),c),this._onlineMemberCountMap.set(t,c);}}},{key:"_onBroadcastMessage",value:function value(e){if(!no(e)){for(var t=[],o=e.length,n=null,a=0;a<o;a++){wr[e[a].event]?((n=this.packMessage(e[a],e[a].event)).isBroadcastMessage=!0,this._broadcastMessageIDMap.has(n.ID)||(t.push(n),this._broadcastMessageIDMap.set(n.ID,1))):je.warn("".concat(this._className,"._onBroadcastMessage unknown event:").concat(e[a].event));}t.length>0&&this._groupModule.emitOuterEvent(D.MESSAGE_RECEIVED,t);}}},{key:"start",value:function value(e){if(this._pollingInstanceMap.has(e)){var t=this._pollingInstanceMap.get(e);t.isRunning()||t.start();}else{var o=new br({manager:this,groupID:e,onInit:this._updateRequestData.bind(this),onSuccess:this._handleSuccess.bind(this),onFail:this._handleFailure.bind(this)});o.start(),this._pollingInstanceMap.set(e,o),je.log("".concat(this._className,".start groupID:").concat(e));}}},{key:"handleJoinResult",value:function value(e){var t=this;return this._preCheck().then(function(){var o=e.longPollingKey,n=e.group,a=n.groupID;return t._joinedGroupMap.set(a,n),t._groupModule.updateGroupMap([n]),t._groupModule.deleteUnjoinedAVChatRoom(a),t._groupModule.emitGroupListUpdate(!0,!1),pt(o)?ar({status:Ze,group:n}):Promise.resolve();});}},{key:"startRunLoop",value:function value(e){var t=this;return this.handleJoinResult(e).then(function(){var o=e.longPollingKey,n=e.group,a=e.startSeq,s=void 0===a?0:a,r=n.groupID;return t._pollingRequestInfoMap.set(r,{key:o,startSeq:s}),t.start(r),t._groupModule.isLoggedIn()?ar({status:Ze,group:n}):ar({status:Ze});});}},{key:"_preCheck",value:function value(){if(this._getModule($o).isUnlimitedAVChatRoom())return Promise.resolve();if(!this.hasJoinedAVChatRoom())return Promise.resolve();var e=m(this._joinedGroupMap.entries().next().value,2),t=e[0],o=e[1];if(this._groupModule.isLoggedIn()){if(!(o.selfInfo.role===N.GRP_MBR_ROLE_OWNER||o.ownerID===this._groupModule.getMyUserID()))return this._groupModule.quitGroup(t);this._groupModule.deleteLocalGroupAndConversation(t);}else this._groupModule.deleteLocalGroupAndConversation(t);return this.reset(t),Promise.resolve();}},{key:"joinWithoutAuth",value:function value(e){var t=this,o=e.groupID,n="".concat(this._className,".joinWithoutAuth"),a=new Os(Ls.JOIN_WITHOUT_AUTH);return this._groupModule.request({protocolName:ia,requestData:e}).then(function(e){var s=e.data.longPollingKey;if(t._groupModule.probeNetwork().then(function(e){var t=m(e,2),n=(t[0],t[1]);a.setNetworkType(n).setMessage("groupID:".concat(o," longPollingKey:").concat(s)).end(!0);}),pt(s))return sr({code:_n.CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN});je.log("".concat(n," ok. groupID:").concat(o)),t._getModule(jo).setCompleted("".concat(N.CONV_GROUP).concat(o));var r=new Tr({groupID:o});return t.startRunLoop({group:r,longPollingKey:s}),zs({status:Ze});}).catch(function(e){return je.error("".concat(n," failed. groupID:").concat(o," error:"),e),t._groupModule.probeNetwork().then(function(t){var n=m(t,2),s=n[0],r=n[1];a.setError(e,s,r).setMessage("groupID:".concat(o)).end(!0);}),sr(e);}).finally(function(){t._groupModule.getModule(Jo).reportAtOnce();});}},{key:"getGroupOnlineMemberCount",value:function value(e){var t=this._onlineMemberCountMap.get(e)||{},o=Date.now();return no(t)||o-t.lastSyncTime>1e3*t.expireTime&&o-t.latestUpdateTime>1e4&&o-t.lastReqTime>3e3?(t.lastReqTime=o,this._onlineMemberCountMap.set(e,t),this._getGroupOnlineMemberCount(e).then(function(e){return zs({memberCount:e.memberCount});}).catch(function(e){return sr(e);})):ar({memberCount:t.memberCount});}},{key:"_getGroupOnlineMemberCount",value:function value(e){var t=this,o="".concat(this._className,"._getGroupOnlineMemberCount");return this._groupModule.request({protocolName:Sa,requestData:{groupID:e}}).then(function(n){var a=t._onlineMemberCountMap.get(e)||{},s=n.data,r=s.onlineMemberNum,i=void 0===r?0:r,c=s.expireTime,u=void 0===c?t.DEFAULT_EXPIRE_TIME:c;je.log("".concat(o," ok. groupID:").concat(e," memberCount:").concat(i," expireTime:").concat(u));var l=Date.now();return no(a)&&(a.lastReqTime=l),t._onlineMemberCountMap.set(e,Object.assign(a,{lastSyncTime:l,latestUpdateTime:l,memberCount:i,expireTime:u})),{memberCount:i};}).catch(function(n){return je.warn("".concat(o," failed. error:"),n),new Os(Ls.GET_GROUP_ONLINE_MEMBER_COUNT).setCode(n.code).setMessage("groupID:".concat(e," error:").concat(JSON.stringify(n))).setNetworkType(t._groupModule.getNetworkType()).end(),Promise.reject(n);});}},{key:"_getModule",value:function value(e){return this._groupModule.getModule(e);}},{key:"setPollingInterval",value:function value(e){pt(e)||(it(e)?this._pollingInterval=this.DEFAULT_POLLING_INTERVAL=e:this._pollingInterval=this.DEFAULT_POLLING_INTERVAL=parseInt(e,10));}},{key:"setPollingIntervalPlus",value:function value(e){pt(e)||(it(e)?this.DEFAULT_POLLING_INTERVAL_PLUS=e:this.DEFAULT_POLLING_INTERVAL_PLUS=parseInt(e,10));}},{key:"setPollingNoMessageCount",value:function value(e){pt(e)||(it(e)?this.DEFAULT_POLLING_NO_MESSAGE_COUNT=e:this.DEFAULT_POLLING_NO_MESSAGE_COUNT=parseInt(e,10));}},{key:"getPollingInterval",value:function value(){return this._pollingInterval;}},{key:"onAVChatRoomMemberBanned",value:function value(e){var t=e.payload.groupProfile.groupID;je.log("".concat(this._className,".onAVChatRoomMemberBanned groupID:").concat(t)),this._groupModule.deleteLocalGroupAndConversation(t),this.reset(t);}},{key:"reset",value:function value(e){if(e){je.log("".concat(this._className,".reset groupID:").concat(e));var t=this._pollingInstanceMap.get(e);t&&t.stop(),this._pollingInstanceMap.delete(e),this._joinedGroupMap.delete(e),this._pollingRequestInfoMap.delete(e),this._onlineMemberCountMap.delete(e);}else{je.log("".concat(this._className,".reset all"));var o,n=E(this._pollingInstanceMap.values());try{for(n.s();!(o=n.n()).done;){o.value.stop();}}catch(a){n.e(a);}finally{n.f();}this._pollingInstanceMap.clear(),this._joinedGroupMap.clear(),this._pollingRequestInfoMap.clear(),this._onlineMemberCountMap.clear(),this._broadcastMessageIDMap.clear();}this.sequencesLinkedList.reset(),this.messageIDLinkedList.reset(),this.receivedMessageCount=0,this._reportMessageStackedCount=0,this._pollingInterval=this.DEFAULT_POLLING_INTERVAL=300,this.DEFAULT_POLLING_NO_MESSAGE_COUNT=20,this.DEFAULT_POLLING_INTERVAL_PLUS=2e3,this._pollingNoMessageCount=0;}}]),e;}(),qr=1,Vr=15,xr=function(){function e(t){n(this,e),this._groupModule=t,this._className="GroupSystemNoticeHandler",this.pendencyMap=new Map();}return s(e,[{key:"onNewGroupSystemNotice",value:function value(e){var t=e.dataList,o=e.isSyncingEnded,n=e.isInstantMessage;je.debug("".concat(this._className,".onReceiveSystemNotice count:").concat(t.length));var a=this.newSystemNoticeStoredAndSummary({notifiesList:t,isInstantMessage:n}),s=a.eventDataList,r=a.result;s.length>0&&(this._groupModule.getModule(jo).onNewMessage({conversationOptionsList:s,isInstantMessage:n}),this._onReceivedGroupSystemNotice({result:r,isInstantMessage:n}));n?r.length>0&&this._groupModule.emitOuterEvent(D.MESSAGE_RECEIVED,r):!0===o&&this._clearGroupSystemNotice();}},{key:"newSystemNoticeStoredAndSummary",value:function value(e){var o=e.notifiesList,n=e.isInstantMessage,a=null,s=o.length,r=0,i=[],c={conversationID:N.CONV_SYSTEM,unreadCount:0,type:N.CONV_SYSTEM,subType:null,lastMessage:null};for(r=0;r<s;r++){var u=o[r],l=u.groupProfile,d=l.communityType,p=void 0===d?0:d,g=l.topicID,_=void 0===g?void 0:g,h=u.elements,f=h.topicIDList,m=void 0===f?void 0:f,M=h.operationType;if(!(2!==p||no(_)&&no(m))){if([17,18,20].includes(M)){this._handleTopicSystemNotice(u);continue;}no(_)||(u.to=_);}if(u.elements.operationType!==Vr)u.currentUser=this._groupModule.getMyUserID(),u.conversationType=N.CONV_SYSTEM,u.conversationID=N.CONV_SYSTEM,(a=new $s(u)).setElement({type:N.MSG_GRP_SYS_NOTICE,content:t(t({},u.elements),{},{groupProfile:t({},u.groupProfile)})}),a.isSystemMessage=!0,(1===a.sequence&&1===a.random||2===a.sequence&&2===a.random)&&(a.sequence=Ct(),a.random=Ct(),a.generateMessageID(),je.log("".concat(this._className,".newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID:").concat(a.ID))),this._groupModule.getModule(jo).pushIntoNoticeResult(i,a)&&(n?c.unreadCount++:a.setIsRead(!0),c.subType=a.conversationSubType);}return c.lastMessage=i[i.length-1],{eventDataList:i.length>0?[c]:[],result:i};}},{key:"_clearGroupSystemNotice",value:function value(){var e=this;this._getPendencyList().then(function(t){t.forEach(function(t){e.pendencyMap.set("".concat(t.from,"_").concat(t.groupID,"_").concat(t.to),t);});var o=e._groupModule.getModule(jo).getLocalMessageList(N.CONV_SYSTEM),n=[];o.forEach(function(t){var o=t.payload,a=o.operatorID,s=o.operationType,r=o.groupProfile;if(s===qr){var i="".concat(a,"_").concat(r.groupID,"_").concat(r.to),c=e.pendencyMap.get(i);c&&it(c.handled)&&0!==c.handled&&n.push(t);}}),e.deleteGroupSystemNotice({messageList:n});});}},{key:"deleteGroupSystemNotice",value:function value(e){var t=this,o="".concat(this._className,".deleteGroupSystemNotice");return dt(e.messageList)&&0!==e.messageList.length?(je.log("".concat(o," ")+e.messageList.map(function(e){return e.ID;})),this._groupModule.request({protocolName:Ta,requestData:{messageListToDelete:e.messageList.map(function(e){return{from:N.CONV_SYSTEM,messageSeq:e.clientSequence,messageRandom:e.random};})}}).then(function(){je.log("".concat(o," ok"));var n=t._groupModule.getModule(jo);return e.messageList.forEach(function(e){n.deleteLocalMessage(e);}),zs();}).catch(function(e){return je.error("".concat(o," error:"),e),sr(e);})):ar();}},{key:"_getPendencyList",value:function value(e){var t=this;return this._groupModule.request({protocolName:Ia,requestData:{startTime:e&&e.startTime?e.startTime:0,limit:e&&e.limit?e.limit:10,handleAccount:this._groupModule.getMyUserID()}}).then(function(e){var o=e.data.pendencyList;return 0!==e.data.nextStartTime?t._getPendencyList({startTime:e.data.nextStartTime}).then(function(e){return[].concat(M(o),M(e));}):o;});}},{key:"getGroupApplicationList",value:function value(){var e=this;return this._getPendencyList().then(function(t){var o=[];return t.forEach(function(t){e.pendencyMap.set("".concat(t.from,"_").concat(t.groupID,"_").concat(t.to),t),0===t.handled&&o.push({applicant:t.from,applicantNick:t.fromUserNickName,groupName:t.groupName,groupID:t.groupID,authentication:t.authentication,messageKey:t.time});}),ar({applicationList:o});});}},{key:"_onReceivedGroupSystemNotice",value:function value(e){var t=this,o=e.result;e.isInstantMessage&&o.forEach(function(e){switch(e.payload.operationType){case 1:break;case 2:t._onApplyGroupRequestAgreed(e);break;case 3:break;case 4:t._onMemberKicked(e);break;case 5:t._onGroupDismissed(e);break;case 6:break;case 7:t._onInviteGroup(e);break;case 8:t._onQuitGroup(e);break;case 9:t._onSetManager(e);break;case 10:t._onDeleteManager(e);break;case 11:case 12:case 15:break;case 20:t._onMessageRemindTypeSynced(e);break;case 21:t._groupModule.onAVChatRoomMemberBanned(e);}});}},{key:"_onApplyGroupRequestAgreed",value:function value(e){var t=this,o=e.payload.groupProfile.groupID;this._groupModule.hasLocalGroup(o)||this._groupModule.getGroupProfile({groupID:o}).then(function(e){var o=e.data.group;if(o){t._groupModule.updateGroupMap([o]);var n=!o.isSupportTopic;t._groupModule.emitGroupListUpdate(!0,n);}});}},{key:"_onMemberKicked",value:function value(e){var t=e.payload.groupProfile.groupID;this._groupModule.hasLocalGroup(t)&&this._groupModule.deleteLocalGroupAndConversation(t);}},{key:"_onGroupDismissed",value:function value(e){var t=e.payload.groupProfile.groupID;this._groupModule.hasLocalGroup(t)&&this._groupModule.deleteLocalGroupAndConversation(t);var o=this._groupModule._AVChatRoomHandler;o&&o.checkJoinedAVChatRoomByID(t)&&o.reset(t);}},{key:"_onInviteGroup",value:function value(e){var t=this,o=e.payload.groupProfile.groupID;this._groupModule.hasLocalGroup(o)||this._groupModule.getGroupProfile({groupID:o}).then(function(e){var o=e.data.group;o&&(t._groupModule.updateGroupMap([o]),t._groupModule.emitGroupListUpdate());});}},{key:"_onQuitGroup",value:function value(e){var t=e.payload.groupProfile.groupID;this._groupModule.hasLocalGroup(t)&&this._groupModule.deleteLocalGroupAndConversation(t);}},{key:"_onSetManager",value:function value(e){var t=e.payload.groupProfile,o=t.to,n=t.groupID,a=this._groupModule.getModule(Wo).getLocalGroupMemberInfo(n,o);a&&a.updateRole(N.GRP_MBR_ROLE_ADMIN);}},{key:"_onDeleteManager",value:function value(e){var t=e.payload.groupProfile,o=t.to,n=t.groupID,a=this._groupModule.getModule(Wo).getLocalGroupMemberInfo(n,o);a&&a.updateRole(N.GRP_MBR_ROLE_MEMBER);}},{key:"_onMessageRemindTypeSynced",value:function value(e){var t=e.payload.groupProfile.groupID,o=e.payload.messageRemindType;this._groupModule.getModule(jo).onGroupMessageRemindTypeSynced({groupID:t,messageRemindType:o});}},{key:"_handleTopicSystemNotice",value:function value(e){var t=e.groupProfile,o=t.groupID,n=t.topicID,a=e.elements,s=a.operationType,r=a.topicIDList,i=a.messageRemindType,c=this._groupModule.getModule(Yo);17===s?c.onTopicCreated({groupID:o,topicID:n}):18===s?c.onTopicDeleted({groupID:o,topicIDList:r}):20===s&&c.onTopicMessageRemindTypeUpdated({groupID:o,topicID:n,messageRemindType:i});}},{key:"reset",value:function value(){this.pendencyMap.clear();}}]),e;}(),Br=["relayFlag"],Kr=function(e){i(a,e);var o=f(a);function a(e){var t;return n(this,a),(t=o.call(this,e))._className="GroupModule",t._commonGroupHandler=null,t._AVChatRoomHandler=null,t._groupSystemNoticeHandler=null,t._commonGroupHandler=new kr(_(t)),t._groupAttributesHandler=new Ur(_(t)),t._AVChatRoomHandler=new Fr(_(t)),t._groupTipsHandler=new Ar(_(t)),t._groupSystemNoticeHandler=new xr(_(t)),t.groupMap=new Map(),t._unjoinedAVChatRoomList=new Map(),t._receiptDetailCompleteMap=new Map(),t.getInnerEmitterInstance().on(ur,t._onCloudConfigUpdated,_(t)),t;}return s(a,[{key:"_onCloudConfigUpdated",value:function value(){var e=this.getCloudConfig("polling_interval"),t=this.getCloudConfig("polling_interval_plus"),o=this.getCloudConfig("polling_no_msg_count");this._AVChatRoomHandler&&(je.log("".concat(this._className,"._onCloudConfigUpdated pollingInterval:").concat(e)+" pollingIntervalPlus:".concat(t," pollingNoMessageCount:").concat(o)),this._AVChatRoomHandler.setPollingInterval(e),this._AVChatRoomHandler.setPollingIntervalPlus(t),this._AVChatRoomHandler.setPollingNoMessageCount(o));}},{key:"onCheckTimer",value:function value(e){this.isLoggedIn()&&(this._commonGroupHandler.onCheckTimer(e),this._groupTipsHandler.onCheckTimer(e));}},{key:"guardForAVChatRoom",value:function value(e){var t=this;if(e.conversationType===N.CONV_GROUP){var o=Pt(e.to)?zt(e.to):e.to;return this.hasLocalGroup(o)?ar():this.getGroupProfile({groupID:o}).then(function(n){var a=n.data.group.type;if(je.log("".concat(t._className,".guardForAVChatRoom. groupID:").concat(o," type:").concat(a)),a===N.GRP_AVCHATROOM){var s=_n.MESSAGE_SEND_FAIL_NOT_IN_AVCHATROOM,r=t.isIntl()?"".concat(fn[s],". See https://web.sdk.qcloud.com/im/doc/en/SDK.html#joinGroup"):"userID:".concat(e.from," 未加入群 groupID:").concat(o,"。发消息前先使用 joinGroup 接口申请加群，详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#joinGroup");return je.warn("".concat(t._className,".guardForAVChatRoom. ").concat(r)),sr(new tr({code:s,message:r,data:{message:e}}));}return ar();});}return ar();}},{key:"checkJoinedAVChatRoomByID",value:function value(e){return!!this._AVChatRoomHandler&&this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e);}},{key:"onNewGroupMessage",value:function value(e){this._commonGroupHandler&&this._commonGroupHandler.onNewGroupMessage(e);}},{key:"updateNextMessageSeq",value:function value(e){var t=this;if(dt(e)){var o=this.getModule(Yo);e.forEach(function(e){var n=e.conversationID.replace(N.CONV_GROUP,"");Pt(n)&&o.updateLastMessage(n,e.lastMessage),t.groupMap.has(n)&&(t.groupMap.get(n).nextMessageSeq=e.lastMessage.sequence+1);});}}},{key:"onNewGroupTips",value:function value(e){this._groupTipsHandler&&this._groupTipsHandler.onNewGroupTips(e);}},{key:"onGroupMessageRevoked",value:function value(e){this._commonGroupHandler&&this._commonGroupHandler.onGroupMessageRevoked(e);}},{key:"onNewGroupSystemNotice",value:function value(e){this._groupSystemNoticeHandler&&this._groupSystemNoticeHandler.onNewGroupSystemNotice(e);}},{key:"onGroupMessageReadNotice",value:function value(e){var t=this;e.dataList.forEach(function(e){var o=e.elements.groupMessageReadNotice;if(!pt(o)){var n=t.getModule(jo);o.forEach(function(e){var o=e.groupID,a=e.topicID,s=void 0===a?void 0:a,r=e.lastMessageSeq;je.debug("".concat(t._className,".onGroupMessageReadNotice groupID:").concat(o," lastMessageSeq:").concat(r));var i="".concat(N.CONV_GROUP).concat(o),c=!0;no(s)||(i="".concat(N.CONV_GROUP).concat(s),c=!1),n.updateIsReadAfterReadReport({conversationID:i,lastMessageSeq:r}),n.updateUnreadCount(i,c),n.clearGroupAtInfoList(i,c);});}});}},{key:"onReadReceiptList",value:function value(e){var t=this;je.debug("".concat(this._className,".onReadReceiptList options:"),JSON.stringify(e)),e.dataList.forEach(function(e){var o=e.groupProfile,n=e.elements,a=o.groupID,s=t.getModule(jo),r=n.readReceiptList;s.updateReadReceiptInfo({groupID:a,readReceiptList:r});});}},{key:"onGroupMessageModified",value:function value(e){je.debug("".concat(this._className,".onGroupMessageModified options:"),JSON.stringify(e));var o=this.getModule(jo);e.dataList.forEach(function(e){o.onMessageModified(t(t({},e),{},{conversationType:N.CONV_GROUP,to:e.topicID?e.topicID:e.groupID}));});}},{key:"deleteGroupSystemNotice",value:function value(e){this._groupSystemNoticeHandler&&this._groupSystemNoticeHandler.deleteGroupSystemNotice(e);}},{key:"initGroupMap",value:function value(e){this.groupMap.set(e.groupID,new Tr(e));}},{key:"deleteGroup",value:function value(e){this.groupMap.delete(e);}},{key:"updateGroupMap",value:function value(e){var t,o=this,n=this.getModule(jo);e.forEach(function(e){t=e.groupID,o.groupMap.has(t)?o.groupMap.get(t).updateGroup(e):(o.groupMap.set(t,new Tr(e)),n.deleteGroupRomaingMessageInfo(t));});var a,s=this.getMyUserID(),r=E(this.groupMap);try{for(r.s();!(a=r.n()).done;){m(a.value,2)[1].selfInfo.userID=s;}}catch(i){r.e(i);}finally{r.f();}this._setStorageGroupList();}},{key:"getStorageGroupList",value:function value(){return this.getModule(zo).getItem("groupMap");}},{key:"_setStorageGroupList",value:function value(){var e=this.getLocalGroupList().filter(function(e){var t=e.type;return!Lt(t);}).filter(function(e){return!e.isSupportTopic;}).slice(0,20).map(function(e){return{groupID:e.groupID,name:e.name,avatar:e.avatar,type:e.type};});this.getModule(zo).setItem("groupMap",e);}},{key:"getGroupMap",value:function value(){return this.groupMap;}},{key:"getLocalGroupList",value:function value(){return M(this.groupMap.values());}},{key:"getLocalGroupProfile",value:function value(e){return this.groupMap.get(e);}},{key:"sortLocalGroupList",value:function value(){var e=M(this.groupMap).filter(function(e){var t=m(e,2);t[0];return!no(t[1].lastMessage);});e.sort(function(e,t){return t[1].lastMessage.lastTime-e[1].lastMessage.lastTime;}),this.groupMap=new Map(M(e));}},{key:"updateGroupLastMessage",value:function value(e){this._commonGroupHandler&&this._commonGroupHandler.handleUpdateGroupLastMessage(e);}},{key:"emitGroupListUpdate",value:function value(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this.getLocalGroupList();if(e&&this.emitOuterEvent(D.GROUP_LIST_UPDATED),t){var n=JSON.parse(JSON.stringify(o)),a=this.getModule(jo);a.updateConversationGroupProfile(n);}}},{key:"patchGroupMessageRemindType",value:function value(){var e=this.getLocalGroupList(),t=this.getModule(jo),o=0;e.forEach(function(e){!0===t.patchMessageRemindType({ID:e.groupID,isC2CConversation:!1,messageRemindType:e.selfInfo.messageRemindType})&&(o+=1);}),je.log("".concat(this._className,".patchGroupMessageRemindType count:").concat(o));}},{key:"recomputeUnreadCount",value:function value(){var e=this.getLocalGroupList(),t=this.getModule(jo);e.forEach(function(e){var o=e.groupID,n=e.selfInfo,a=n.excludedUnreadSequenceList,s=n.readedSequence;if(dt(a)){var r=0;a.forEach(function(t){t>=s&&t<=e.nextMessageSeq-1&&(r+=1);}),r>=1&&t.recomputeGroupUnreadCount({conversationID:"".concat(N.CONV_GROUP).concat(o),count:r});}});}},{key:"getMyNameCardByGroupID",value:function value(e){var t=this.getLocalGroupProfile(e);return t?t.selfInfo.nameCard:"";}},{key:"isPagingGetCompleted",value:function value(){return!!this._commonGroupHandler&&this._commonGroupHandler.isPagingGetCompleted();}},{key:"getGroupList",value:function value(e){return this._commonGroupHandler?this._commonGroupHandler.getGroupList(e):ar();}},{key:"getGroupProfile",value:function value(e){var t=this,o=new Os(Ls.GET_GROUP_PROFILE),n="".concat(this._className,".getGroupProfile"),a=e.groupID,s=e.groupCustomFieldFilter;je.log("".concat(n," groupID:").concat(a));var r={groupIDList:[a],responseFilter:{groupBaseInfoFilter:["Type","Name","Introduction","Notification","FaceUrl","Owner_Account","CreateTime","InfoSeq","LastInfoTime","LastMsgTime","MemberNum","MaxMemberNum","ApplyJoinOption","NextMsgSeq","ShutUpAllMember"],groupCustomFieldFilter:s,memberInfoFilter:["Role","JoinTime","MsgSeq","MsgFlag","NameCard"]}};return this.getGroupProfileAdvance(r).then(function(e){var s,r=e.data,i=r.successGroupList,c=r.failureGroupList;if(je.log("".concat(n," ok")),c.length>0)return sr(c[0]);(Lt(i[0].type)&&!t.hasLocalGroup(a)?s=new Tr(i[0]):(t.updateGroupMap(i),s=t.getLocalGroupProfile(a)),s.isSupportTopic)||t.getModule(jo).updateConversationGroupProfile([s]);return o.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(a," type:").concat(s.type," muteAllMembers:").concat(s.muteAllMembers," ownerID:").concat(s.ownerID)).end(),zs({group:s});}).catch(function(a){return t.probeNetwork().then(function(t){var n=m(t,2),s=n[0],r=n[1];o.setError(a,s,r).setMessage("groupID:".concat(e.groupID)).end();}),je.error("".concat(n," failed. error:"),a),sr(a);});}},{key:"getGroupProfileAdvance",value:function value(e){var o=this,n="".concat(this._className,".getGroupProfileAdvance"),a=e.groupIDList;dt(a)&&a.length>50&&(je.warn("".concat(n," 获取群资料的数量不能超过50个")),a.length=50);var s=[],r=[];a.forEach(function(e){Gt({groupID:e})?r.push(e):s.push(e);});var i=[];if(s.length>0){var c=this._getGroupProfileAdvance(t(t({},e),{},{groupIDList:s}));i.push(c);}if(r.length>0){var u=this._getGroupProfileAdvance(t(t({},e),{},{groupIDList:r,relayFlag:s.length>0}));i.push(u);}return Promise.all(i).then(function(e){var t=[],o=[];return e.forEach(function(e){t.push.apply(t,M(e.successGroupList)),o.push.apply(o,M(e.failureGroupList));}),zs({successGroupList:t,failureGroupList:o});}).catch(function(e){return je.error("".concat(o._className,"._getGroupProfileAdvance failed. error:"),e),sr(e);});}},{key:"_getGroupProfileAdvance",value:function value(e){var t=this,o=e.relayFlag,n=void 0!==o&&o,a=g(e,Br);return this.request({protocolName:oa,requestData:a}).then(function(e){je.log("".concat(t._className,"._getGroupProfileAdvance ok."));var o=e.data.groups;return{successGroupList:o.filter(function(e){return pt(e.errorCode)||0===e.errorCode;}),failureGroupList:o.filter(function(e){return e.errorCode&&0!==e.errorCode;}).map(function(e){return new tr({code:e.errorCode,message:e.errorInfo,data:{groupID:e.groupID}});})};}).catch(function(t){return n&&Gt({groupID:e.groupIDList[0]})?{successGroupList:[],failureGroupList:[]}:sr(t);});}},{key:"createGroup",value:function value(e){var o=this,n="".concat(this._className,".createGroup"),a=e.type,s=e.groupID;if(e.name&&!1===this._filterProfanity("name",e))return sr({code:_n.PROFANITY_FOUND});if(e.introduction&&!1===this._filterProfanity("introduction",e))return sr({code:_n.PROFANITY_FOUND});if(e.notification&&!1===this._filterProfanity("notification",e))return sr({code:_n.PROFANITY_FOUND});if(!["Public","Private","ChatRoom","AVChatRoom","Community"].includes(a))return sr({code:_n.ILLEGAL_GROUP_TYPE});if(!Gt({type:a})){if(!no(s)&&Gt({groupID:s}))return sr({code:_n.ILLEGAL_GROUP_ID});e.isSupportTopic=void 0;}if(Lt(a)&&!pt(e.memberList)&&e.memberList.length>0&&(e.memberList=void 0),Ot(a)||pt(e.joinOption)||(e.joinOption=void 0),Gt({type:a})){if(!no(s)&&!Gt({groupID:s}))return sr({code:_n.ILLEGAL_GROUP_ID});e.isSupportTopic=!0===e.isSupportTopic?1:0;}var r=new Os(Ls.CREATE_GROUP);je.log("".concat(n," options:"),e);var i=[];return this.request({protocolName:na,requestData:t(t({},e),{},{ownerID:this.getMyUserID(),webPushFlag:1})}).then(function(a){var s=a.data,c=s.groupID,u=s.overLimitUserIDList,l=void 0===u?[]:u;if(i=l,r.setNetworkType(o.getNetworkType()).setMessage("groupType:".concat(e.type," groupID:").concat(c," overLimitUserIDList=").concat(l)).end(),je.log("".concat(n," ok groupID:").concat(c," overLimitUserIDList:"),l),e.type===N.GRP_AVCHATROOM)return o.getGroupProfile({groupID:c});if(e.type===N.GRP_COMMUNITY&&1===e.isSupportTopic)return o.getGroupProfile({groupID:c});no(e.memberList)||no(l)||(e.memberList=e.memberList.filter(function(e){return-1===l.indexOf(e.userID);})),o.updateGroupMap([t(t({},e),{},{groupID:c})]);var d=o.getModule(qo),p=d.createCustomMessage({to:c,conversationType:N.CONV_GROUP,payload:{data:"group_create",extension:o.isIntl()?"".concat(o.getMyUserID()," created a group"):"".concat(o.getMyUserID(),"创建群组")}});return d.sendMessageInstance(p),o.emitGroupListUpdate(),o.getGroupProfile({groupID:c});}).then(function(e){var t=e.data.group,o=t.selfInfo,n=o.nameCard,a=o.joinTime;return t.updateSelfInfo({nameCard:n,joinTime:a,messageRemindType:N.MSG_REMIND_ACPT_AND_NOTE,role:N.GRP_MBR_ROLE_OWNER}),zs({group:t,overLimitUserIDList:i});}).catch(function(t){return r.setMessage("groupType:".concat(e.type)),o.probeNetwork().then(function(e){var o=m(e,2),n=o[0],a=o[1];r.setError(t,n,a).end();}),je.error("".concat(n," failed. error:"),t),sr(t);});}},{key:"dismissGroup",value:function value(e){var t=this,o="".concat(this._className,".dismissGroup");if(this.hasLocalGroup(e)&&this.getLocalGroupProfile(e).type===N.GRP_WORK)return sr(new tr({code:_n.CANNOT_DISMISS_WORK}));var n=new Os(Ls.DISMISS_GROUP);return n.setMessage("groupID:".concat(e)),je.log("".concat(o," groupID:").concat(e)),this.request({protocolName:aa,requestData:{groupID:e}}).then(function(){return n.setNetworkType(t.getNetworkType()).end(),je.log("".concat(o," ok")),t.deleteLocalGroupAndConversation(e),t.checkJoinedAVChatRoomByID(e)&&t._AVChatRoomHandler.reset(e),zs({groupID:e});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),a=o[0],s=o[1];n.setError(e,a,s).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"updateGroupProfile",value:function value(e){var t=this,o="".concat(this._className,".updateGroupProfile");if(!this.hasLocalGroup(e.groupID)||Ot(this.getLocalGroupProfile(e.groupID).type)||pt(e.joinOption)||(je.warn("".concat(o," joinOption is unavailable for Work/Meeting/AVChatRoom/Community")),e.joinOption=void 0),pt(e.muteAllMembers)||(e.muteAllMembers?e.muteAllMembers="On":e.muteAllMembers="Off"),e.name&&!1===this._filterProfanity("name",e))return sr({code:_n.PROFANITY_FOUND});if(e.introduction&&!1===this._filterProfanity("introduction",e))return sr({code:_n.PROFANITY_FOUND});if(e.notification&&!1===this._filterProfanity("notification",e))return sr({code:_n.PROFANITY_FOUND});var n=new Os(Ls.UPDATE_GROUP_PROFILE);return n.setMessage(JSON.stringify(e)),je.log("".concat(o," groupID:").concat(e.groupID)),this.request({protocolName:sa,requestData:e}).then(function(){(n.setNetworkType(t.getNetworkType()).end(),je.log("".concat(o," ok")),t.hasLocalGroup(e.groupID))&&(t.groupMap.get(e.groupID).updateGroup(e),t._setStorageGroupList());return zs({group:t.groupMap.get(e.groupID)});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),a=o[0],s=o[1];n.setError(e,a,s).end();}),je.log("".concat(o," failed. error:"),e),sr(e);});}},{key:"_filterProfanity",value:function value(e,t){var o=this.getModule(pn);if(!o)return!0;var n=o.filterText(t[e],Q),a=n.isAllowedToSend,s=n.modifiedText;return!0===a&&(t[e]=s,!0);}},{key:"joinGroup",value:function value(e){var t=this,o=e.groupID,n=e.type,a="".concat(this._className,".joinGroup");if(n===N.GRP_WORK)return sr({code:_n.CANNOT_JOIN_WORK});if(this.deleteUnjoinedAVChatRoom(o),this.hasLocalGroup(o)){if(!this.isLoggedIn())return ar({status:N.JOIN_STATUS_ALREADY_IN_GROUP});var s=new Os(Ls.APPLY_JOIN_GROUP);return this.getGroupProfile({groupID:o}).then(function(){return s.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(o," joinedStatus:").concat(N.JOIN_STATUS_ALREADY_IN_GROUP)).end(),ar({status:N.JOIN_STATUS_ALREADY_IN_GROUP});}).catch(function(n){return s.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(o," unjoined")).end(),je.warn("".concat(a," ").concat(o," was unjoined, now join!")),t.groupMap.delete(o),t.applyJoinGroup(e);});}return je.log("".concat(a," groupID:").concat(o)),this.isLoggedIn()?this.applyJoinGroup(e):this._AVChatRoomHandler.joinWithoutAuth(e);}},{key:"applyJoinGroup",value:function value(e){var o=this,n="".concat(this._className,".applyJoinGroup"),a=e.groupID;if(!no(e.applyMessage)&&!1===this._filterProfanity("applyMessage",e))return sr({code:_n.PROFANITY_FOUND});var s=new Os(Ls.APPLY_JOIN_GROUP),r=t({},e),i=this.canIUse(Y.AVCHATROOM_HISTORY_MSG);return i&&(r.historyMessageFlag=1),this.getModule(jo).deleteTopicRoamingMessageInfo(a),this.request({protocolName:ra,requestData:r}).then(function(e){var t=e.data,r=t.joinedStatus,c=t.longPollingKey,u=t.startSeq,l=t.avChatRoomFlag,d=t.avChatRoomKey,p=t.messageList,g="groupID:".concat(a," joinedStatus:").concat(r," longPollingKey:").concat(c," startSeq:").concat(u)+" avChatRoomFlag:".concat(l," canGetAVChatRoomHistoryMessage:").concat(i,",")+" history message count:".concat(no(p)?0:p.length);switch(s.setNetworkType(o.getNetworkType()).setMessage("".concat(g)).end(),je.log("".concat(n," ok. ").concat(g)),r){case et:return zs({status:et});case Ze:return o.getGroupProfile({groupID:a}).then(function(e){var t,n=e.data.group,s={status:Ze,group:n};return 1===l?(o.getModule(jo).setCompleted("".concat(N.CONV_GROUP).concat(a)),o._groupAttributesHandler.initGroupAttributesCache({groupID:a,avChatRoomKey:d}),(t=pt(c)?o._AVChatRoomHandler.handleJoinResult({group:n}):o._AVChatRoomHandler.startRunLoop({longPollingKey:c,group:n,startSeq:u})).then(function(){o._onAVChatRoomHistoryMessage(p);}),t):(o.emitGroupListUpdate(!0,!1),zs(s));});default:var _=new tr({code:_n.JOIN_GROUP_FAIL});return je.error("".concat(n," failed. error:"),_),sr(_);}}).catch(function(t){return s.setMessage("groupID:".concat(e.groupID)),o.probeNetwork().then(function(e){var o=m(e,2),n=o[0],a=o[1];s.setError(t,n,a).end();}),je.error("".concat(n," failed. error:"),t),sr(t);});}},{key:"quitGroup",value:function value(e){var t=this,o="".concat(this._className,".quitGroup");je.log("".concat(o," groupID:").concat(e));var n=this.checkJoinedAVChatRoomByID(e);if(!n&&!this.hasLocalGroup(e))return sr({code:_n.MEMBER_NOT_IN_GROUP});if(n&&!this.isLoggedIn())return je.log("".concat(o," anonymously ok. groupID:").concat(e)),this.deleteLocalGroupAndConversation(e),this._AVChatRoomHandler.reset(e),ar({groupID:e});var a=new Os(Ls.QUIT_GROUP);return a.setMessage("groupID:".concat(e)),this.request({protocolName:ca,requestData:{groupID:e}}).then(function(){return a.setNetworkType(t.getNetworkType()).end(),je.log("".concat(o," ok")),t.deleteLocalGroupAndConversation(e),n&&t._AVChatRoomHandler.reset(e),t._groupAttributesHandler.deleteLocalGroupAttributes(e),zs({groupID:e});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],s=o[1];a.setError(e,n,s).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"searchGroupByID",value:function value(e){var t=this,o="".concat(this._className,".searchGroupByID"),n={groupIDList:[e]},a=new Os(Ls.SEARCH_GROUP_BY_ID);return a.setMessage("groupID:".concat(e)),je.log("".concat(o," groupID:").concat(e)),this.request({protocolName:ua,requestData:n}).then(function(e){var n=e.data.groupProfile;if(0!==n[0].errorCode)throw new tr({code:n[0].errorCode,message:n[0].errorInfo});return a.setNetworkType(t.getNetworkType()).end(),je.log("".concat(o," ok")),zs({group:new Tr(n[0])});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],s=o[1];a.setError(e,n,s).end();}),je.warn("".concat(o," failed. error:"),e),sr(e);});}},{key:"changeGroupOwner",value:function value(e){var t=this,o="".concat(this._className,".changeGroupOwner");if(this.hasLocalGroup(e.groupID)&&this.getLocalGroupProfile(e.groupID).type===N.GRP_AVCHATROOM)return sr({code:_n.CANNOT_CHANGE_OWNER_IN_AVCHATROOM});if(e.newOwnerID===this.getMyUserID())return sr({code:_n.CANNOT_CHANGE_OWNER_TO_SELF});var n=new Os(Ls.CHANGE_GROUP_OWNER);return n.setMessage("groupID:".concat(e.groupID," newOwnerID:").concat(e.newOwnerID)),je.log("".concat(o," groupID:").concat(e.groupID)),this.request({protocolName:la,requestData:e}).then(function(){n.setNetworkType(t.getNetworkType()).end(),je.log("".concat(o," ok"));var a=e.groupID,s=e.newOwnerID;t.groupMap.get(a).ownerID=s;var r=t.getModule(Wo).getLocalGroupMemberList(a);if(r instanceof Map){var i=r.get(t.getMyUserID());pt(i)||(i.updateRole("Member"),t.groupMap.get(a).selfInfo.role="Member");var c=r.get(s);pt(c)||c.updateRole("Owner");}return t.emitGroupListUpdate(!0,!1),zs({group:t.groupMap.get(a)});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),a=o[0],s=o[1];n.setError(e,a,s).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"getGroupApplicationList",value:function value(){return this._groupSystemNoticeHandler.getGroupApplicationList();}},{key:"handleGroupApplication",value:function value(e){var t,o,n,a,s=this,r="".concat(this._className,".handleGroupApplication"),i=e.handleAction,c=e.handleMessage,u=e.message,l=e.application;u?(t=u.payload.operatorID,o=u.payload.groupProfile.groupID,n=u.payload.authentication,a=u.payload.messageKey):l&&(t=l.applicant,o=l.groupID,n=l.authentication,a=l.messageKey);var d=new Os(Ls.HANDLE_GROUP_APPLICATION);return d.setMessage("groupID:".concat(o)),je.log("".concat(r," groupID:").concat(o)),this.request({protocolName:da,requestData:{handleAction:i,handleMessage:c,applicant:t,groupID:o,authentication:n,messageKey:a}}).then(function(){return d.setNetworkType(s.getNetworkType()).end(),je.log("".concat(r," ok")),u&&s._groupSystemNoticeHandler.deleteGroupSystemNotice({messageList:[e.message]}),zs({group:s.getLocalGroupProfile(o)});}).catch(function(e){return s.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];d.setError(e,n,a).end();}),je.error("".concat(r," failed. error"),e),sr(e);});}},{key:"handleGroupInvitation",value:function value(e){var o=this,n="".concat(this._className,".handleGroupInvitation"),a=e.message.payload,s=a.groupProfile.groupID,r=a.authentication,i=a.messageKey,c=a.operatorID,u=e.handleAction,l=new Os(Ls.HANDLE_GROUP_INVITATION);return l.setMessage("groupID:".concat(s," inviter:").concat(c," handleAction:").concat(u)),je.log("".concat(n," groupID:").concat(s," inviter:").concat(c," handleAction:").concat(u)),this.request({protocolName:pa,requestData:t(t({},e),{},{inviter:c,groupID:s,authentication:r,messageKey:i})}).then(function(){return l.setNetworkType(o.getNetworkType()).end(),je.log("".concat(n," ok")),o._groupSystemNoticeHandler.deleteGroupSystemNotice({messageList:[e.message]}),zs({group:o.getLocalGroupProfile(s)});}).catch(function(e){return o.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];l.setError(e,n,a).end();}),je.error("".concat(n," failed. error"),e),sr(e);});}},{key:"getGroupOnlineMemberCount",value:function value(e){return this._AVChatRoomHandler?this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e)?this._AVChatRoomHandler.getGroupOnlineMemberCount(e):ar({memberCount:0}):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"hasLocalGroup",value:function value(e){return this.groupMap.has(e);}},{key:"deleteLocalGroupAndConversation",value:function value(e){var t=this.checkJoinedAVChatRoomByID(e);(je.log("".concat(this._className,".deleteLocalGroupAndConversation isJoinedAVChatRoom:").concat(t)),t)&&this.getModule(jo).deleteLocalConversation("".concat(N.CONV_GROUP).concat(e));if(Gt({groupID:e})){var o=this.getLocalGroupProfile(e);if(o&&!0===o.isSupportTopic)this.getModule(Yo).deleteTopicListInCommunity(e);}this._deleteLocalGroup(e),this.emitGroupListUpdate(!0,!1);}},{key:"_deleteLocalGroup",value:function value(e){this.groupMap.delete(e),this.getModule(Wo).deleteGroupMemberList(e),this._setStorageGroupList();}},{key:"sendMessage",value:function value(e,t){if(dt(e._receiverList)&&e._receiverList.length>0&&!this.canIUse(Y.MSG_TO_SPECIFIED_GRP_MBR))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var o=this.createGroupMessagePack(e,t);return this.request(o);}},{key:"createGroupMessagePack",value:function value(e,t){var o=null;t&&t.offlinePushInfo&&(o=t.offlinePushInfo);var n="";ct(e.cloudCustomData)&&e.cloudCustomData.length>0&&(n=e.cloudCustomData);var a=[];if(lt(t)&&lt(t.messageControlInfo)){var s=t.messageControlInfo,r=s.excludedFromUnreadCount,i=s.excludedFromLastMessage;!0===r&&a.push("NoUnread"),!0===i&&a.push("NoLastMsg");}var c=void 0;dt(e._receiverList)&&e._receiverList.length>0&&(c=e._receiverList,e._receiverList.length>50&&(c=e._receiverList.slice(0,50),je.warn("".concat(this._className,".createGroupMessagePack receiverList must be less than or equal to 50."))));var u=e.getGroupAtInfoList(),l={fromAccount:this.getMyUserID(),groupID:e.to,msgBody:e.getElements(),cloudCustomData:n,random:e.random,priority:e.priority,clientSequence:e.clientSequence,groupAtInfo:e.type!==N.MSG_TEXT||no(u)?void 0:u,onlineOnlyFlag:this.isOnlineMessage(e,t)?1:0,clientTime:e.clientTime,offlinePushInfo:o?{pushFlag:!0===o.disablePush?1:0,title:o.title||"",desc:o.description||"",ext:o.extension||"",apnsInfo:{badgeMode:!0===o.ignoreIOSBadge?1:0,isVoipPush:this._isVoipPush(o)},androidInfo:{OPPOChannelID:o.androidOPPOChannelID||""}}:void 0,messageControlInfo:a,needReadReceipt:!0!==e.needReadReceipt||this.isMessageFromOrToAVChatroom(e.to)?0:1,receiverList:c,isSupportExtension:!0===e.isSupportExtension?1:0};return Pt(e.to)&&(l.groupID=zt(e.to),l.topicID=e.to),{protocolName:Sn,tjgID:this.generateTjgID(e),requestData:l};}},{key:"_isVoipPush",value:function value(e){var t=void 0;return pt(e.disableVoipPush)||(t=!1===e.disableVoipPush?1:0),t;}},{key:"revokeMessage",value:function value(e){var t={groupID:e.to,msgSeqList:[{msgSeq:e.sequence}]};return Pt(e.to)&&(t.groupID=zt(e.to),t.topicID=e.to),this.request({protocolName:ga,requestData:t});}},{key:"deleteMessage",value:function value(e){var t=e.to,o=e.keyList;je.log("".concat(this._className,".deleteMessage groupID:").concat(t," count:").concat(o.length));var n={groupID:t,deleter:this.getMyUserID(),keyList:o};return Pt(t)&&(n.groupID=zt(t),n.topicID=t),this.request({protocolName:Da,requestData:n});}},{key:"modifyRemoteMessage",value:function value(e){var t=e.to,o=e.sequence,n=e.payload,a=e.type,s=e.version,r=void 0===s?0:s,i=e.cloudCustomData,c=t,u=void 0;Pt(t)&&(c=zt(t),u=t);var l=void 0;return Xt(a)&&(l=[]).push({type:a,content:n}),this.request({protocolName:Na,requestData:{groupID:c,topicID:u,sequence:o,version:r,elements:l,cloudCustomData:i}});}},{key:"getRoamingMessage",value:function value(e){var t=this,o="".concat(this._className,".getRoamingMessage"),n=e.conversationID,a=e.groupID,s=e.sequence,r=new Os(Ls.GET_GROUP_ROAMING_MESSAGES),i=0,c=void 0;return Pt(a)&&(a=zt(c=a)),this._computeLastSequence({groupID:a,topicID:c,sequence:s}).then(function(e){return i=e,je.log("".concat(o," groupID:").concat(a," startSequence:").concat(i)),t.request({protocolName:fa,requestData:{groupID:a,count:21,sequence:i,topicID:c}});}).then(function(e){var s=e.data,u=s.messageList,l=s.complete,d=s.invisibleSequence,p=void 0===d?[]:d;pt(u)?je.log("".concat(o," ok. complete:").concat(l," but messageList is undefined!")):je.log("".concat(o," ok. complete:").concat(l," count:").concat(u.length)),r.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(a," topicID:").concat(c," startSequence:").concat(i," complete:").concat(l," count:").concat(u?u.length:"undefined"," invisible count:").concat(p.length)).end();var g=t.getModule(jo);if(2===l||no(u))return g.setCompleted(n),{nextReqID:"",storedMessageList:[]};var _=u[u.length-1].sequence-1;g.updateRoamingMessageSequence(n,_);var h=g.onRoamingMessage(u,n);return g.updateIsRead(n),g.patchConversationLastMessage(n),je.log("".concat(o," nextReqID:").concat(_," stored message count:").concat(h.length," invisible count:").concat(p.length)),{nextReqID:_+"",storedMessageList:h};}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],s=o[1];r.setError(e,n,s).setMessage("groupID:".concat(a," topicID:").concat(c," startSequence:").concat(i)).end();}),je.warn("".concat(o," failed. error:"),e),sr(e);});}},{key:"_getGroupIDOfMessage",value:function value(e){return e.conversationID.replace(N.CONV_GROUP,"");}},{key:"getReadReceiptList",value:function value(e){var t=this,o="".concat(this._className,".getReadReceiptList"),n=this._getGroupIDOfMessage(e[0]),a=this.getMyUserID(),s=e.filter(function(e){return e.from===a&&!0===e.needReadReceipt;}).map(function(e){return{sequence:e.sequence};});if(je.log("".concat(o," groupID:").concat(n," sequenceList:").concat(JSON.stringify(s))),0===s.length)return ar({messageList:e});var r=new Os(Ls.GET_READ_RECEIPT);return r.setMessage("groupID:".concat(n)),this.request({protocolName:ma,requestData:{groupID:n,sequenceList:s}}).then(function(t){r.end(),je.log("".concat(o," ok"));var n=t.data.readReceiptList;return dt(n)&&n.forEach(function(t){e.forEach(function(e){0===t.code&&t.sequence===e.sequence&&(e.readReceiptInfo.readCount=t.readCount,e.readReceiptInfo.unreadCount=t.unreadCount);});}),zs({messageList:e});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setError(e,n,a).end();}),je.warn("".concat(o," failed. error:"),e),sr(e);});}},{key:"sendReadReceipt",value:function value(e){var t=this,o=this._getGroupIDOfMessage(e[0]),n=new Os(Ls.SEND_READ_RECEIPT);n.setMessage("groupID:".concat(o));var a=this.getMyUserID(),s=e.filter(function(e){return e.from!==a&&!0===e.needReadReceipt;}).map(function(e){return{sequence:e.sequence};});if(0===s.length)return sr({code:_n.READ_RECEIPT_MESSAGE_LIST_EMPTY});var r="".concat(this._className,".sendReadReceipt");return je.log("".concat(r,". sequenceList:").concat(JSON.stringify(s))),this.request({protocolName:Ma,requestData:{groupID:o,sequenceList:s}}).then(function(e){return n.end(),je.log("".concat(r," ok")),zs();}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),a=o[0],s=o[1];n.setError(e,a,s).end();}),je.warn("".concat(r," failed. error:"),e),sr(e);});}},{key:"getReadReceiptDetail",value:function value(e){var t=this,o=e.message,n=e.filter,a=e.cursor,s=e.count,r=this._getGroupIDOfMessage(o),i=o.ID,c=o.sequence,u="".concat(this._className,".getReadReceiptDetail"),l=this._receiptDetailCompleteMap.get(i)||!1,d=0!==n&&1!==n?0:n,p=ct(a)?a:"",g=!it(s)||s<=0||s>=100?100:s,_="groupID:".concat(r," sequence:").concat(c," cursor:").concat(p," filter:").concat(d," completeFlag:").concat(l);je.log("".concat(u," ").concat(_));var h={cursor:"",isCompleted:!1,messageID:i,unreadUserIDList:[],readUserIDList:[]},f=new Os(Ls.GET_READ_RECEIPT_DETAIL);return f.setMessage(_),this.request({protocolName:ya,requestData:{groupID:r,sequence:c,flag:d,cursor:p,count:g}}).then(function(e){f.end();var o=e.data,n=o.cursor,a=o.isCompleted,s=o.unreadUserIDList,r=o.readUserIDList;return h.cursor=n,1===a&&(h.isCompleted=!0,t._receiptDetailCompleteMap.set(i,!0)),0===d?h.readUserIDList=r.map(function(e){return e.userID;}):1===d&&(h.unreadUserIDList=s.map(function(e){return e.userID;})),je.log("".concat(u," ok")),zs(h);}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];f.setError(e,n,a).end();}),je.warn("".concat(u," failed. error:"),e),sr(e);});}},{key:"getRoamingMessagesHopping",value:function value(e){var t=this,o="".concat(this._className,".getRoamingMessagesHopping"),n=new Os(Ls.GET_GROUP_ROAMING_MESSAGES_HOPPING),a=e.groupID,s=e.count,r=e.sequence,i=e.direction,c=r;1===i&&(c=r+s-1);var u=void 0;Pt(a)&&(a=zt(u=a));var l="".concat(u?"topicID:".concat(u):"groupID:".concat(a)," sequence:").concat(r," direction:").concat(i);return je.log("".concat(o," ").concat(l)),this.request({protocolName:fa,requestData:{groupID:a,topicID:u,count:s,sequence:c}}).then(function(a){var s=a.data,c=s.messageList,u=s.complete,d="complete:".concat(u," count:").concat(c?c.length:0);if(je.log("".concat(o," ok. ").concat(d)),n.setNetworkType(t.getNetworkType()).setMessage("".concat(l," ").concat(d)).end(),2===u||no(c)){var p=t._computeResult();return zs(p);}var g="".concat(N.CONV_GROUP).concat(e.groupID),_=t.getModule(jo).onRoamingMessage(c,g,!1),h=t._computeResult({direction:i,sequence:r,remoteMessageList:c,processedMessageList:_});return zs(h);}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),i=o[0],c=o[1];n.setError(e,i,c).setMessage("groupID:".concat(a," sequence:").concat(r," count:").concat(s)).end();}),je.warn("".concat(o," failed. error:"),e),sr(e);});}},{key:"_computeResult",value:function value(e){var t={messageList:[],isCompleted:!1,nextMessageSeq:""};if(pt(e))return t.isCompleted=!0,t;var o=e.direction,n=e.sequence,a=e.remoteMessageList,s=void 0===a?[]:a,r=e.processedMessageList,i=void 0===r?[]:r,c=s.length;return 1===o?(t.nextMessageSeq=s[0].sequence+1,i.forEach(function(e){e.sequence>=n&&t.messageList.push(e);}),0===t.messageList.length&&s[0].sequence<n&&(t.isCompleted=!0,t.nextMessageSeq=""),t):(t.nextMessageSeq=s[c-1].sequence-1,t.messageList=M(i),0===t.nextMessageSeq&&(t.isCompleted=!0,t.nextMessageSeq=""),t);}},{key:"setMessageRead",value:function value(e){var t=this,o=e.conversationID,n=e.lastMessageSeq,a="".concat(this._className,".setMessageRead");je.log("".concat(a," conversationID:").concat(o," lastMessageSeq:").concat(n)),it(n)||je.warn("".concat(a," 请勿修改 Conversation.lastMessage.lastSequence，否则可能会导致已读上报结果不准确"));var s=new Os(Ls.SET_GROUP_MESSAGE_READ);s.setMessage("".concat(o,"-").concat(n));var r=o.replace(N.CONV_GROUP,""),i=void 0;return Pt(r)&&(r=zt(i=r)),this.request({protocolName:_a,requestData:{groupID:r,topicID:i,messageReadSeq:n}}).then(function(){s.setNetworkType(t.getNetworkType()).end(),je.log("".concat(a," ok."));var e=t.getModule(jo);e.updateIsReadAfterReadReport({conversationID:o,lastMessageSeq:n});var c=!0;if(!pt(i)){c=!1;var u=t.getModule(Yo).getLocalTopic(r,i);u&&u.updateSelfInfo({readedSequence:n});}return e.updateUnreadCount(o,c),zs();}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];s.setError(e,n,a).end();}),je.log("".concat(a," failed. error:"),e),sr(e);});}},{key:"_computeLastSequence",value:function value(e){var t=e.groupID,o=e.topicID,n=void 0===o?void 0:o,a=e.sequence;return a>0?Promise.resolve(a):pt(n)||this.hasLocalGroup(t)?pt(n)?this.getGroupLastSequence(t):this.getTopicLastSequence({groupID:t,topicID:n}):Promise.resolve(0);}},{key:"getGroupLastSequence",value:function value(e){var t=this,o="".concat(this._className,".getGroupLastSequence"),n=new Os(Ls.GET_GROUP_LAST_SEQUENCE),a=0,s="";if(this.hasLocalGroup(e)){var r=this.getLocalGroupProfile(e),i=r.lastMessage;if(i.lastSequence>0&&!1===i.onlineOnlyFlag)return a=i.lastSequence,s="got lastSequence:".concat(a," from local group profile[lastMessage.lastSequence]. groupID:").concat(e),je.log("".concat(o," ").concat(s)),n.setNetworkType(this.getNetworkType()).setMessage("".concat(s)).end(),Promise.resolve(a);if(r.nextMessageSeq>1)return a=r.nextMessageSeq-1,s="got lastSequence:".concat(a," from local group profile[nextMessageSeq]. groupID:").concat(e),je.log("".concat(o," ").concat(s)),n.setNetworkType(this.getNetworkType()).setMessage("".concat(s)).end(),Promise.resolve(a);}var c="GROUP".concat(e),u=this.getModule(jo).getLocalConversation(c);if(u&&u.lastMessage.lastSequence&&!1===u.lastMessage.onlineOnlyFlag)return a=u.lastMessage.lastSequence,s="got lastSequence:".concat(a," from local conversation profile[lastMessage.lastSequence]. groupID:").concat(e),je.log("".concat(o," ").concat(s)),n.setNetworkType(this.getNetworkType()).setMessage("".concat(s)).end(),Promise.resolve(a);var l={groupIDList:[e],responseFilter:{groupBaseInfoFilter:["NextMsgSeq"]}};return this.getGroupProfileAdvance(l).then(function(r){var i=r.data.successGroupList;return no(i)?je.log("".concat(o," successGroupList is empty. groupID:").concat(e)):(a=i[0].nextMessageSeq-1,s="got lastSequence:".concat(a," from getGroupProfileAdvance. groupID:").concat(e),je.log("".concat(o," ").concat(s))),n.setNetworkType(t.getNetworkType()).setMessage("".concat(s)).end(),a;}).catch(function(a){return t.probeNetwork().then(function(t){var o=m(t,2),s=o[0],r=o[1];n.setError(a,s,r).setMessage("get lastSequence failed from getGroupProfileAdvance. groupID:".concat(e)).end();}),je.warn("".concat(o," failed. error:"),a),sr(a);});}},{key:"getTopicLastSequence",value:function value(e){var t=this,o=e.groupID,n=e.topicID,a="".concat(this._className,".getTopicLastSequence"),s=new Os(Ls.GET_TOPIC_LAST_SEQUENCE),r=0,i="",c=this.getModule(Yo);return c.hasLocalTopic(o,n)?(r=c.getLocalTopic(o,n).nextMessageSeq-1,i="get lastSequence:".concat(r," from local topic info[nextMessageSeq]. topicID:").concat(n),je.log("".concat(a," ").concat(i)),s.setNetworkType(this.getNetworkType()).setMessage("".concat(i)).end(),Promise.resolve(r)):c.getTopicList({groupID:o,topicIDList:[n]}).then(function(e){var o=e.data.successTopicList;return no(o)?je.log("".concat(a," successTopicList is empty. topicID:").concat(n)):(r=o[0].nextMessageSeq-1,i="get lastSequence:".concat(r," from getTopicList. topicID:").concat(n),je.log("".concat(a," ").concat(i))),s.setNetworkType(t.getNetworkType()).setMessage("".concat(i)).end(),r;}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),a=o[0],r=o[1];s.setError(e,a,r).setMessage("get lastSequence failed from getTopicList. topicID:".concat(n)).end();}),je.warn("".concat(a," failed. error:"),e),sr(e);});}},{key:"isMessageFromOrToAVChatroom",value:function value(e){return!!this._AVChatRoomHandler&&this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e);}},{key:"hasJoinedAVChatRoom",value:function value(){return this._AVChatRoomHandler?this._AVChatRoomHandler.hasJoinedAVChatRoom():0;}},{key:"getJoinedAVChatRoom",value:function value(){return this._AVChatRoomHandler?this._AVChatRoomHandler.getJoinedAVChatRoom():[];}},{key:"isOnlineMessage",value:function value(e,t){return!(!this._canIUseOnlineOnlyFlag(e)||!t||!0!==t.onlineUserOnly);}},{key:"_canIUseOnlineOnlyFlag",value:function value(e){var t=this.getJoinedAVChatRoom();return!t||!t.includes(e.to)||e.conversationType!==N.CONV_GROUP;}},{key:"_onAVChatRoomHistoryMessage",value:function value(e){if(!no(e)){je.log("".concat(this._className,"._onAVChatRoomHistoryMessage count:").concat(e.length));var o=[];e.forEach(function(e){o.push(t(t({},e),{},{isHistoryMessage:1}));}),this.onAVChatRoomMessage(o);}}},{key:"onAVChatRoomMessage",value:function value(e){this._AVChatRoomHandler&&this._AVChatRoomHandler.onMessage(e);}},{key:"onAVChatRoomMemberBanned",value:function value(e){this._AVChatRoomHandler&&this._AVChatRoomHandler.onAVChatRoomMemberBanned(e);}},{key:"getGroupSimplifiedInfo",value:function value(e){var t=this,o=new Os(Ls.GET_GROUP_SIMPLIFIED_INFO),n={groupIDList:[e],responseFilter:{groupBaseInfoFilter:["Type","Name"]}};return this.getGroupProfileAdvance(n).then(function(n){var a=n.data.successGroupList;return o.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(e," type:").concat(a[0].type)).end(),a[0];}).catch(function(n){t.probeNetwork().then(function(t){var a=m(t,2),s=a[0],r=a[1];o.setError(n,s,r).setMessage("groupID:".concat(e)).end();});});}},{key:"setUnjoinedAVChatRoom",value:function value(e){this._unjoinedAVChatRoomList.set(e,1);}},{key:"deleteUnjoinedAVChatRoom",value:function value(e){this._unjoinedAVChatRoomList.has(e)&&this._unjoinedAVChatRoomList.delete(e);}},{key:"isUnjoinedAVChatRoom",value:function value(e){return this._unjoinedAVChatRoomList.has(e);}},{key:"isGroupAttributesUpdatedNotice",value:function value(e){return this._groupAttributesHandler.isGroupAttributesUpdatedNotice(e);}},{key:"updateLocalMainSequenceOnReconnected",value:function value(){this._groupAttributesHandler.updateLocalMainSequenceOnReconnected();}},{key:"initGroupAttributes",value:function value(e){return this._groupAttributesHandler.initGroupAttributes(e);}},{key:"setGroupAttributes",value:function value(e){return this._groupAttributesHandler.setGroupAttributes(e);}},{key:"deleteGroupAttributes",value:function value(e){return this._groupAttributesHandler.deleteGroupAttributes(e);}},{key:"getGroupAttributes",value:function value(e){return this._groupAttributesHandler.getGroupAttributes(e);}},{key:"isMessageFromTopic",value:function value(e,t){return 2===e&&!no(t);}},{key:"isMessageFromCommunityOfTopic",value:function value(e,t){return 2===e&&no(t);}},{key:"getMessageExtensions",value:function value(e,t){return je.log("".concat(this._className,".getMessageExtensions startSequence:").concat(t)),this.request({protocolName:Pa,requestData:{groupID:e.to,messageSequence:e.sequence,startSequence:t}});}},{key:"modifyMessageExtensions",value:function value(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return je.log("".concat(this._className,".modifyMessageExtensions operateType:").concat(o)),this.request({protocolName:Ga,requestData:{groupID:e.to,messageSequence:e.sequence,extensionList:t,operateType:o}});}},{key:"reset",value:function value(){this.groupMap.clear(),this._unjoinedAVChatRoomList.clear(),this._receiptDetailCompleteMap.clear(),this._commonGroupHandler.reset(),this._groupSystemNoticeHandler.reset(),this._groupTipsHandler.reset(),this._groupAttributesHandler.reset(),this._AVChatRoomHandler&&this._AVChatRoomHandler.reset();}}]),a;}(mn),Hr=function(){function e(t){n(this,e),this.userID="",this.avatar="",this.nick="",this.role="",this.joinTime="",this.lastSendMsgTime="",this.nameCard="",this.muteUntil=0,this.memberCustomField=[],this._initMember(t);}return s(e,[{key:"_initMember",value:function value(e){this.updateMember(e);}},{key:"updateMember",value:function value(e){var t=[null,void 0,"",0,NaN];e.memberCustomField&&Rt(this.memberCustomField,e.memberCustomField),yt(this,e,["memberCustomField","marks"],t);}},{key:"updateRole",value:function value(e){["Owner","Admin","Member"].indexOf(e)<0||(this.role=e);}},{key:"updateMuteUntil",value:function value(e){pt(e)||(this.muteUntil=Math.floor((Date.now()+1e3*e)/1e3));}},{key:"updateNameCard",value:function value(e){pt(e)||(this.nameCard=e);}},{key:"updateMemberCustomField",value:function value(e){e&&Rt(this.memberCustomField,e);}}]),e;}(),Wr=function(e){i(a,e);var o=f(a);function a(e){var t;return n(this,a),(t=o.call(this,e))._className="GroupMemberModule",t.groupMemberListMap=new Map(),t.getInnerEmitterInstance().on(lr,t._onProfileUpdated,_(t)),t;}return s(a,[{key:"_onProfileUpdated",value:function value(e){for(var t=this,o=e.data,n=function n(e){var n=o[e];t.groupMemberListMap.forEach(function(e){e.has(n.userID)&&e.get(n.userID).updateMember({nick:n.nick,avatar:n.avatar});});},a=0;a<o.length;a++){n(a);}}},{key:"deleteGroupMemberList",value:function value(e){this.groupMemberListMap.delete(e);}},{key:"getGroupMemberList",value:function value(e){var t=this,o=e.groupID,n=e.offset,a=void 0===n?0:n,s=e.count,r=void 0===s?15:s,i=e.filter,c=void 0===i?void 0:i,u="".concat(this._className,".getGroupMemberList"),l=this.getModule(Ko),d=l.hasLocalGroup(o);if(je.log("".concat(u," groupID:").concat(o," offset:").concat(a," count:").concat(r," hasLocalGroup:").concat(d)),!d)return ar({memberList:[],offset:0});if(l.getLocalGroupProfile(o).type===N.GRP_AVCHATROOM){if(this.canIUse(Y.AVCHATROOM_MBR_LIST))return this._getAVChatRoomMemberList({groupID:o,offset:a,filter:c});this.isIntl()||je.warn("".concat(u," 从 v2.22.0 起，SDK 支持获取直播群在线成员列表，请升级旗舰版套餐且前往即时通信 IM 控制台：https://console.cloud.tencent.com/im 开启开关。"));}var p=new Os(Ls.GET_GROUP_MEMBER_LIST),g=0,_={groupID:o,limit:r>100?100:r};Gt({groupID:o})?_.next="".concat(a):(_.offset=a,g=a+r);var h=[];return this.request({protocolName:Ua,requestData:_}).then(function(e){var n=e.data,a=n.members,s=n.memberNum,r=n.next,i=void 0===r?void 0:r;if(pt(i)||(g=no(i)?0:i),!dt(a)||0===a.length)return g=0,Promise.resolve([]);var c=t.getModule(Ko);return c.hasLocalGroup(o)&&(c.getLocalGroupProfile(o).memberNum=s),h=t._updateLocalGroupMemberMap(o,a),t.getModule(xo).getUserProfile({userIDList:a.map(function(e){return e.userID;}),tagList:[ze.NICK,ze.AVATAR]});}).then(function(e){var n=e.data;if(!dt(n)||0===n.length)return ar({memberList:[],offset:g});var s=n.map(function(e){return{userID:e.userID,nick:e.nick,avatar:e.avatar};});return t._updateLocalGroupMemberMap(o,s),h.length<r&&(g=0),p.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(o," offset:").concat(a," count:").concat(r)).end(),je.log("".concat(u," ok.")),zs({memberList:h,offset:g});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];p.setError(e,n,a).end();}),je.error("".concat(u," failed. error:"),e),sr(e);});}},{key:"_getAVChatRoomMemberList",value:function value(e){var t=this,o=e.groupID,n=e.offset,a=e.filter,s="".concat(this._className,"._getAVChatRoomMemberList"),r=new Os(Ls.GET_AVCHATROOM_MEMBER_LIST);return r.setMessage("groupID:".concat(o," offset:").concat(n," filter:").concat(a)),this.request({protocolName:ba,requestData:{groupID:o,offset:n,filter:a}}).then(function(e){var n=e.data,a=n.memberList,i=void 0===a?[]:a,c=n.offset,u=void 0===c?0:c;r.setNetworkType(t.getNetworkType()).end(),je.log("".concat(s," ok. member count:").concat(i.length,", next request timestamp:").concat(u));var l=t._updateLocalGroupMemberMap(o,i);return zs({memberList:l,offset:u});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setError(e,n,a).end();}),je.error("".concat(s," failed. error:"),e),sr(e);});}},{key:"getGroupMemberProfile",value:function value(e){var o=this,n="".concat(this._className,".getGroupMemberProfile"),a=new Os(Ls.GET_GROUP_MEMBER_PROFILE);a.setMessage(e.userIDList.length>5?"userIDList.length:".concat(e.userIDList.length):"userIDList:".concat(e.userIDList)),je.log("".concat(n," groupID:").concat(e.groupID," userIDList:").concat(e.userIDList.join(","))),e.userIDList.length>50&&(e.userIDList=e.userIDList.slice(0,50));var s=e.groupID,r=e.userIDList;return this._getGroupMemberProfileAdvance(t(t({},e),{},{userIDList:r})).then(function(e){var t=e.data.members;return dt(t)&&0!==t.length?(o._updateLocalGroupMemberMap(s,t),o.getModule(xo).getUserProfile({userIDList:t.map(function(e){return e.userID;}),tagList:[ze.NICK,ze.AVATAR]})):ar([]);}).then(function(e){var t=e.data.map(function(e){return{userID:e.userID,nick:e.nick,avatar:e.avatar};});o._updateLocalGroupMemberMap(s,t);var n=r.filter(function(e){return o.hasLocalGroupMember(s,e);}).map(function(e){return o.getLocalGroupMemberInfo(s,e);});return a.setNetworkType(o.getNetworkType()).end(),zs({memberList:n});});}},{key:"addGroupMember",value:function value(e){var t=this,o="".concat(this._className,".addGroupMember"),n=e.groupID,a=this.getModule(Ko).getLocalGroupProfile(n),s=a.type,r=new Os(Ls.ADD_GROUP_MEMBER);if(r.setMessage("groupID:".concat(n," groupType:").concat(s)),Lt(s)){var i=new tr({code:_n.CANNOT_ADD_MEMBER_IN_AVCHATROOM});return r.setError(i,!0,this.getNetworkType()).end(),sr(i);}return e.userIDList=e.userIDList.map(function(e){return{userID:e};}),je.log("".concat(o," groupID:").concat(n)),this.request({protocolName:Fa,requestData:e}).then(function(n){var s=n.data.members;je.log("".concat(o," ok"));var i=s.filter(function(e){return 1===e.result;}).map(function(e){return e.userID;}),c=s.filter(function(e){return 0===e.result;}).map(function(e){return e.userID;}),u=s.filter(function(e){return 2===e.result;}).map(function(e){return e.userID;}),l=s.filter(function(e){return 4===e.result;}).map(function(e){return e.userID;}),d="groupID:".concat(e.groupID,", ")+"successUserIDList:".concat(i,", ")+"failureUserIDList:".concat(c,", ")+"existedUserIDList:".concat(u,", ")+"overLimitUserIDList:".concat(l);return r.setNetworkType(t.getNetworkType()).setMoreMessage(d).end(),0===i.length?zs({successUserIDList:i,failureUserIDList:c,existedUserIDList:u,overLimitUserIDList:l}):(a.memberCount+=i.length,t._updateConversationGroupProfile(a),zs({successUserIDList:i,failureUserIDList:c,existedUserIDList:u,overLimitUserIDList:l,group:a}));}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"deleteGroupMember",value:function value(e){var t=this,o="".concat(this._className,".deleteGroupMember"),n=e.groupID,a=e.userIDList,s=this.getModule(Ko).getLocalGroupProfile(n);if(pt(s))return sr({code:_n.CANNOT_FIND_GROUP});if(Lt(s.type))return this.canIUse(Y.AVCHATROOM_BAN_MBR)?this._banAVChatRoomMember(e):sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var r=new Os(Ls.DELETE_GROUP_MEMBER),i="groupID:".concat(n," ").concat(a.length>5?"userIDList.length:".concat(a.length):"userIDList:".concat(a));return r.setMessage(i),je.log("".concat(o," groupID:").concat(n," userIDList:"),a),this.request({protocolName:qa,requestData:e}).then(function(){return r.setNetworkType(t.getNetworkType()).end(),je.log("".concat(o," ok")),s.memberCount-=1,t._updateConversationGroupProfile(s),t.deleteLocalGroupMembers(n,a),zs({group:s,userIDList:a});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"_updateConversationGroupProfile",value:function value(e){this.getModule(jo).updateConversationGroupProfile([e]);}},{key:"_banAVChatRoomMember",value:function value(e){var t=this,o="".concat(this._className,"._banAVChatRoomMember"),n=e.groupID,a=e.userIDList,s="groupID:".concat(n," ").concat(a.length>5?"userIDList.length:".concat(a.length):"userIDList:".concat(a)),r=new Os(Ls.BAN_AVCHATROOM_MEMBER);r.setMessage(s),je.log("".concat(o," groupID:").concat(n," userIDList:"),a);var i=this.getModule(Ko).getLocalGroupProfile(n);return pt(e.duration)||0===e.duration?sr({code:_n.BAN_DURATION_INVALID}):this.request({protocolName:Va,requestData:e}).then(function(){return r.setNetworkType(t.getNetworkType()).end(),je.log("".concat(o," ok")),t.deleteLocalGroupMembers(n,a),zs({group:i,userIDList:a});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"setGroupMemberMuteTime",value:function value(e){var t=this,o=e.groupID,n=e.userID,a=e.muteTime,s="".concat(this._className,".setGroupMemberMuteTime");if(n===this.getMyUserID())return sr(new tr({code:_n.CANNOT_MUTE_SELF}));je.log("".concat(s," groupID:").concat(o," userID:").concat(n));var r=new Os(Ls.SET_GROUP_MEMBER_MUTE_TIME);return r.setMessage("groupID:".concat(o," userID:").concat(n," muteTime:").concat(a)),this.modifyGroupMemberInfo({groupID:o,userID:n,muteTime:a}).then(function(e){r.setNetworkType(t.getNetworkType()).end(),je.log("".concat(s," ok"));var n=t.getModule(Ko);return zs({group:n.getLocalGroupProfile(o),member:e});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setError(e,n,a).end();}),je.error("".concat(s," failed. error:"),e),sr(e);});}},{key:"setGroupMemberRole",value:function value(e){var t=this,o="".concat(this._className,".setGroupMemberRole"),n=e.groupID,a=e.userID,s=e.role,r=this.getModule(Ko).getLocalGroupProfile(n);if(r.selfInfo.role!==N.GRP_MBR_ROLE_OWNER)return sr({code:_n.NOT_OWNER});if([N.GRP_WORK,N.GRP_AVCHATROOM].includes(r.type))return sr({code:_n.CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM});var i=[N.GRP_MBR_ROLE_ADMIN,N.GRP_MBR_ROLE_MEMBER];if(Gt({groupID:n})&&i.push(N.GRP_MBR_ROLE_CUSTOM),i.indexOf(s)<0)return sr({code:_n.INVALID_MEMBER_ROLE});if(a===this.getMyUserID())return sr({code:_n.CANNOT_SET_SELF_MEMBER_ROLE});var c=new Os(Ls.SET_GROUP_MEMBER_ROLE);return c.setMessage("groupID:".concat(n," userID:").concat(a," role:").concat(s)),je.log("".concat(o," groupID:").concat(n," userID:").concat(a)),this.modifyGroupMemberInfo({groupID:n,userID:a,role:s}).then(function(e){return c.setNetworkType(t.getNetworkType()).end(),je.log("".concat(o," ok")),zs({group:r,member:e});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];c.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"_filterProfanity",value:function value(e,t){var o=this.getModule(pn);if(!o)return!0;var n=o.filterText(t[e],Z),a=n.isAllowedToSend,s=n.modifiedText;return!0===a&&(t[e]=s,!0);}},{key:"setGroupMemberNameCard",value:function value(e){var t=this,o="".concat(this._className,".setGroupMemberNameCard");if(e.nameCard&&!1===this._filterProfanity("nameCard",e))return sr({code:_n.PROFANITY_FOUND});var n=e.groupID,a=e.userID,s=void 0===a?this.getMyUserID():a,r=e.nameCard;je.log("".concat(o," groupID:").concat(n," userID:").concat(s));var i=new Os(Ls.SET_GROUP_MEMBER_NAME_CARD);return i.setMessage("groupID:".concat(n," userID:").concat(s," nameCard:").concat(r)),this.modifyGroupMemberInfo({groupID:n,userID:s,nameCard:r}).then(function(e){je.log("".concat(o," ok")),i.setNetworkType(t.getNetworkType()).end();var a=t.getModule(Ko).getLocalGroupProfile(n);return s===t.getMyUserID()&&a&&a.setSelfNameCard(r),zs({group:a,member:e});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];i.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"setGroupMemberCustomField",value:function value(e){var t=this,o="".concat(this._className,".setGroupMemberCustomField"),n=e.groupID,a=e.userID,s=void 0===a?this.getMyUserID():a,r=e.memberCustomField;je.log("".concat(o," groupID:").concat(n," userID:").concat(s));var i=new Os(Ls.SET_GROUP_MEMBER_CUSTOM_FIELD);return i.setMessage("groupID:".concat(n," userID:").concat(s," memberCustomField:").concat(JSON.stringify(r))),this.modifyGroupMemberInfo({groupID:n,userID:s,memberCustomField:r}).then(function(e){i.setNetworkType(t.getNetworkType()).end(),je.log("".concat(o," ok"));var a=t.getModule(Ko).getLocalGroupProfile(n);return zs({group:a,member:e});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];i.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"modifyGroupMemberInfo",value:function value(e){var o=this,n=e.groupID,a=e.userID,s=void 0;return Pt(n)&&(n=zt(s=n)),this.request({protocolName:xa,requestData:t(t({},e),{},{groupID:n,topicID:s})}).then(function(){if(o.hasLocalGroupMember(n,a)){var t=o.getLocalGroupMemberInfo(n,a);return pt(e.muteTime)||t.updateMuteUntil(e.muteTime),pt(e.role)||t.updateRole(e.role),pt(e.nameCard)||t.updateNameCard(e.nameCard),pt(e.memberCustomField)||t.updateMemberCustomField(e.memberCustomField),t;}return o.getGroupMemberProfile({groupID:n,userIDList:[a]}).then(function(e){return m(e.data.memberList,1)[0];});});}},{key:"markGroupMemberList",value:function value(e){var t=this,o="".concat(this._className,".markGroupMemberList"),n=e.groupID,a=e.markType,s=e.enableMark,r=e.userIDList,i=void 0===r?[]:r,c="groupID:".concat(n," markType:").concat(a," enableMark:").concat(s," userIDList count: ").concat(i.length);je.log("".concat(o," ").concat(c));var u=2,l=[];!0===s&&(u=1);var d=M(i);i.length>500&&(d=i.slice(0,500),je.warn("".concat(o," ").concat(to(500)))),d.forEach(function(e){l.push({userID:e,markType:[a]});}),d=null;var p=new Os(Ls.MARK_GROUP_MEMBER_LIST);return p.setMessage("".concat(c)),this.request({protocolName:Ba,requestData:{groupID:n,operationType:u,memberList:l}}).then(function(e){var n=e.data.memberList,a=void 0===n?[]:n,s=[],r=[];a.length===i.length?s.push.apply(s,M(i)):(a.forEach(function(e){s.push(e.userID);}),i.forEach(function(e){s.includes(e)||r.push(e);}));var c="success count:".concat(s.length," fail count:").concat(r.length);return p.setNetworkType(t.getNetworkType()).setMessage(c).end(),je.log("".concat(o," ok. ").concat(c)),zs({successUserIDList:s,failureUserIDList:r});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];p.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"_getGroupMemberProfileAdvance",value:function value(e){return this.request({protocolName:wa,requestData:t(t({},e),{},{memberInfoFilter:e.memberInfoFilter?e.memberInfoFilter:["Role","JoinTime","NameCard","ShutUpUntil"]})});}},{key:"_updateLocalGroupMemberMap",value:function value(e,t){var o=this;return dt(t)&&0!==t.length?t.map(function(t){return o.hasLocalGroupMember(e,t.userID)?o.getLocalGroupMemberInfo(e,t.userID).updateMember(t):o.setLocalGroupMember(e,new Hr(t)),o.getLocalGroupMemberInfo(e,t.userID);}):[];}},{key:"deleteLocalGroupMembers",value:function value(e,t){var o=this.groupMemberListMap.get(e);o&&t.forEach(function(e){o.delete(e);});}},{key:"getLocalGroupMemberInfo",value:function value(e,t){return this.groupMemberListMap.has(e)?this.groupMemberListMap.get(e).get(t):null;}},{key:"setLocalGroupMember",value:function value(e,t){if(this.groupMemberListMap.has(e))this.groupMemberListMap.get(e).set(t.userID,t);else{var o=new Map().set(t.userID,t);this.groupMemberListMap.set(e,o);}}},{key:"getLocalGroupMemberList",value:function value(e){return this.groupMemberListMap.get(e);}},{key:"hasLocalGroupMember",value:function value(e,t){return this.groupMemberListMap.has(e)&&this.groupMemberListMap.get(e).has(t);}},{key:"hasLocalGroupMemberMap",value:function value(e){return this.groupMemberListMap.has(e);}},{key:"reset",value:function value(){this.groupMemberListMap.clear();}}]),a;}(mn),Yr=["topicID","topicName","avatar","introduction","notification","unreadCount","muteAllMembers","customData","groupAtInfoList","nextMessageSeq","selfInfo"],jr=function jr(e,t){return no(e)?{lastTime:0,lastSequence:0,fromAccount:"",payload:null,type:"",messageForShow:"",nick:"",version:0,cloudCustomData:"",isRevoked:!1}:{lastTime:e.time||0,lastSequence:e.sequence||0,fromAccount:e.from||"",payload:e.payload||null,type:e.type||"",messageForShow:Jt(e.type,e.payload,t),nick:e.nick||"",version:e.version||0,cloudCustomData:e.cloudCustomData||"",isRevoked:e.isRevoked||!1};},$r=function(){function e(t,o){n(this,e),this.topicID="",this.topicName="",this.avatar="",this.introduction="",this.notification="",this.unreadCount=0,this.muteAllMembers=!1,this.customData="",this.groupAtInfoList=[],this.nextMessageSeq=0,this.lastMessage=jr(t.lastMessage,o),this.selfInfo={muteTime:0,readedSequence:0,messageRemindType:"",excludedUnreadSequenceList:void 0},this._initTopic(t);}return s(e,[{key:"_initTopic",value:function value(e){for(var t in e){Yr.indexOf(t)<0||("selfInfo"===t?this.updateSelfInfo(e[t]):this[t]="muteAllMembers"===t?1===e[t]:e[t]);}}},{key:"updateUnreadCount",value:function value(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.unreadCount=e;}},{key:"updateNextMessageSeq",value:function value(e){this.nextMessageSeq=e;}},{key:"updateLastMessage",value:function value(e){this.lastMessage=jr(e);}},{key:"updateGroupAtInfoList",value:function value(e){this.groupAtInfoList=JSON.parse(JSON.stringify(e));}},{key:"updateTopic",value:function value(e){pt(e.selfInfo)||this.updateSelfInfo(e.selfInfo),pt(e.muteAllMembers)||(this.muteAllMembers=1===e.muteAllMembers),yt(this,e,["groupID","lastMessageTime","selfInfo","muteAllMembers","lastMsg"]);}},{key:"updateSelfInfo",value:function value(e){return 0!==yt(this.selfInfo,e,[],[""]);}},{key:"reduceUnreadCount",value:function value(){return this.unreadCount>=1&&(this.unreadCount-=1,!0);}},{key:"isLastMessageRevoked",value:function value(e){return e.sequence===this.lastMessage.lastSequence;}},{key:"setLastMessageRevoked",value:function value(e){this.lastMessage.isRevoked=e;}}]),e;}(),zr=function(e){i(a,e);var o=f(a);function a(e){var t;return n(this,a),(t=o.call(this,e))._className="TopicModule",t._topicMap=new Map(),t._getTopicTimeMap=new Map(),t.TOPIC_CACHE_TIME=300,t.TOPIC_LAST_ACTIVE_TIME=3600,t.getInnerEmitterInstance().on(ur,t._onCloudConfigUpdated,_(t)),t;}return s(a,[{key:"_onCloudConfigUpdated",value:function value(){var e=this.getCloudConfig("topic_cache_time"),t=this.getCloudConfig("topic_last_active_time");pt(e)||(this.TOPIC_CACHE_TIME=Number(e)),pt(t)||(this.TOPIC_LAST_ACTIVE_TIME=Number(t));}},{key:"onTopicCreated",value:function value(e){var t=e.groupID;this.resetGetTopicTime(t),this.emitOuterEvent(D.TOPIC_CREATED,e);}},{key:"onTopicDeleted",value:function value(e){var t=this,o=e.groupID,n=e.topicIDList;(void 0===n?[]:n).forEach(function(e){t._deleteLocalTopic(o,e);}),this.emitOuterEvent(D.TOPIC_DELETED,e);}},{key:"onTopicMessageRemindTypeUpdated",value:function value(e){var t=e.groupID,o=e.topicID,n=e.messageRemindType,a=this.getLocalTopic(t,o);if(a){var s=a.updateSelfInfo({messageRemindType:n});s&&this.emitOuterEvent(D.TOPIC_UPDATED,{groupID:t,topic:a}),je.debug("".concat(this._className,".onTopicMessageRemindTypeUpdated topicID:").concat(o)+" messageRemindType:".concat(n," isTopicUpdated:").concat(s));}}},{key:"onTopicProfileUpdated",value:function value(e){var t=e.groupID,o=e.topicID,n=this.getLocalTopic(t,o);n&&(n.updateTopic(e),this.emitOuterEvent(D.TOPIC_UPDATED,{groupID:t,topic:n}));}},{key:"onConversationProxy",value:function value(e){var t=e.topicID,o=e.unreadCount,n=e.groupAtInfoList,a=zt(t),s=this.getLocalTopic(a,t),r=!1;s&&(pt(o)||s.unreadCount===o||(s.updateUnreadCount(o),r=!0),pt(n)||(s.updateGroupAtInfoList(n),r=!0)),r&&this.emitOuterEvent(D.TOPIC_UPDATED,{groupID:a,topic:s});}},{key:"onMessageSent",value:function value(e){var t=e.groupID,o=e.topicID,n=e.lastMessage,a=this.getLocalTopic(t,o);a&&(a.nextMessageSeq+=1,a.updateLastMessage(n),this.emitOuterEvent(D.TOPIC_UPDATED,{groupID:t,topic:a}));}},{key:"onMessageModified",value:function value(e){var t=e.to,o=e.time,n=e.sequence,a=e.elements,s=e.cloudCustomData,r=e.messageVersion,i=zt(t),c=this.getLocalTopic(i,t);if(c){var u=c.lastMessage;je.debug("".concat(this._className,".onMessageModified topicID:").concat(t," lastMessage:"),JSON.stringify(u),"options:",JSON.stringify(e)),u&&(null===u.payload||u.lastTime===o&&u.lastSequence===n&&u.version!==r)&&(u.type=a[0].type,u.payload=a[0].content,u.messageForShow=Jt(u.type,u.payload,this.isIntl()),u.cloudCustomData=s,u.version=r,u.lastSequence=n,u.lastTime=o,this.emitOuterEvent(D.TOPIC_UPDATED,{groupID:i,topic:c}));}}},{key:"onMessageRevoked",value:function value(e){var t=this;if(0!==e.length){var o=null,n=null,a=!1;e.forEach(function(e){var s=e.to;n=zt(s),(o=t.getLocalTopic(n,s))&&(o.reduceUnreadCount()&&(a=!0),o.isLastMessageRevoked(e)&&(o.setLastMessageRevoked(!0),a=!0));}),a&&this.emitOuterEvent(D.TOPIC_UPDATED,{groupID:n,topic:o});}}},{key:"isLastMessageRevoked",value:function value(e){var t=e.topicID,o=e.sequence,n=zt(t),a=this.getLocalTopic(n,t),s=!1;return a&&(s=a.isLastMessageRevoked({sequence:o})),s;}},{key:"getJoinedCommunityList",value:function value(){return this.getModule(Ko).getGroupList({isGroupWithTopicOnly:!0}).then(function(e){var t=e.data.groupList;return zs({groupList:void 0===t?[]:t});}).catch(function(e){return sr(e);});}},{key:"createTopicInCommunity",value:function value(e){var o=this,n="".concat(this._className,".createTopicInCommunity"),a=e.topicID;if(!pt(a)&&!Pt(a))return sr({code:_n.ILLEGAL_TOPIC_ID});if(e.topicName&&!1===this._filterProfanity("topicName",e))return sr({code:_n.PROFANITY_FOUND});if(e.introduction&&!1===this._filterProfanity("introduction",e))return sr({code:_n.PROFANITY_FOUND});if(e.notification&&!1===this._filterProfanity("notification",e))return sr({code:_n.PROFANITY_FOUND});var s=new Os(Ls.CREATE_TOPIC);return this.request({protocolName:ss,requestData:t({},e)}).then(function(a){var r=a.data.topicID;return s.setMessage("topicID:".concat(r)).setNetworkType(o.getNetworkType()).end(),je.log("".concat(n," ok")),o._updateTopicMap([t(t({},e),{},{topicID:r})]),zs({topicID:r});}).catch(function(e){return o.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];s.setError(e,n,a).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"deleteTopicFromCommunity",value:function value(e){var t=this,o="".concat(this._className,".deleteTopicFromCommunity"),n=e.groupID,a=e.topicIDList,s=void 0===a?[]:a,r=new Os(Ls.DELETE_TOPIC);return r.setMessage("groupID:".concat(n," topicIDList:").concat(s)),this.request({protocolName:rs,requestData:{groupID:n,topicIDList:s}}).then(function(e){var o=e.data.resultList,a=[],s=[];(void 0===o?[]:o).forEach(function(e){var t=e.topicID,o=e.errorCode,n=e.errorInfo;0===o?a.push({topicID:t}):s.push({topicID:t,code:o,message:n});});var i="success count:".concat(a.length,", fail count:").concat(s.length);return r.setMoreMessage("".concat(i)).setNetworkType(t.getNetworkType()).end(),je.log("".concat(i)),a.forEach(function(e){t._deleteLocalTopic(n,e.topicID);}),zs({successTopicList:a,failureTopicList:s});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"updateTopicProfile",value:function value(e){var o=this,n="".concat(this._className,".updateTopicProfile");if(je.log("".concat(n," options:"),e),e.topicName&&!1===this._filterProfanity("topicName",e))return sr({code:_n.PROFANITY_FOUND});if(e.introduction&&!1===this._filterProfanity("introduction",e))return sr({code:_n.PROFANITY_FOUND});if(e.notification&&!1===this._filterProfanity("notification",e))return sr({code:_n.PROFANITY_FOUND});var a=new Os(Ls.UPDATE_TOPIC_PROFILE);return a.setMessage("groupID:".concat(e.groupID," topicID:").concat(e.topicID)),pt(e.muteAllMembers)||(e.muteAllMembers=!0===e.muteAllMembers?"On":"Off"),this.request({protocolName:is,requestData:t({},e)}).then(function(){return a.setNetworkType(o.getNetworkType()).end(),je.log("".concat(n," ok")),o._updateTopicMap([e]),zs({topic:o.getLocalTopic(e.groupID,e.topicID)});}).catch(function(e){return o.probeNetwork().then(function(t){var o=m(t,2),n=o[0],s=o[1];a.setError(e,n,s).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"getTopicList",value:function value(e){var o=this,n="".concat(this._className,".getTopicList"),a=e.groupID,s=e.topicIDList,r=void 0===s?[]:s,i=0===r.length,c=new Os(Ls.GET_TOPIC_LIST);if(c.setMessage("groupID:".concat(a)),this._getTopicTimeMap.has(a)){var u=this._getTopicTimeMap.get(a),l=u.isGetAll,d=u.time;if((l||!l&&!i)&&Date.now()-d<1e3*this.TOPIC_CACHE_TIME){var p=this._getLocalTopicList(a,r);if(i||p.length===r.length)return c.setNetworkType(this.getNetworkType()).setMoreMessage("from cache, topic count:".concat(p.length)).end(),je.log("".concat(n," groupID:").concat(a," from cache, topic count:").concat(p.length)),ar({successTopicList:p,failureTopicList:[]});}}return this.request({protocolName:cs,requestData:{groupID:a,topicIDList:r}}).then(function(e){var s=e.data.topicInfoList,r=[],u=[],l=[];(void 0===s?[]:s).forEach(function(e){var o=e.topic,n=e.selfInfo,a=e.errorCode,s=e.errorInfo,i=o.topicID;0===a?(r.push(t(t({},o),{},{selfInfo:n})),u.push(i)):l.push({topicID:i,code:a,message:s});}),o._updateTopicMap(r),o._handleTopicAtInfo(r);var d="success count:".concat(u.length,", fail count:").concat(l.length);c.setNetworkType(o.getNetworkType()).setMoreMessage("".concat(d)).end(),je.log("".concat(n," groupID:").concat(a," from remote, ").concat(d));var p=[];return no(u)||(o._getTopicTimeMap.set(a,{time:Date.now(),isGetAll:i}),p=o._getLocalTopicList(a,u)),zs({successTopicList:p,failureTopicList:l});}).catch(function(e){return o.probeNetwork(e).then(function(t){var o=m(t,2),n=o[0],a=o[1];c.setError(e,n,a).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"hasLocalTopic",value:function value(e,t){return!!this._topicMap.has(e)&&this._topicMap.get(e).has(t);}},{key:"getLocalTopic",value:function value(e,t){var o=null;return this._topicMap.has(e)&&(o=this._topicMap.get(e).get(t)),o;}},{key:"_getLocalTopicList",value:function value(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=this._topicMap.get(e),n=[];return o&&(n=M(o.values())),0===t.length?n:n.filter(function(e){return t.includes(e.topicID);});}},{key:"_deleteLocalTopic",value:function value(e,t){this._topicMap.has(e)&&(this._topicMap.get(e).delete(t),je.log("".concat(this._className,"._deleteLocalTopic groupID:").concat(e," topicID:").concat(t)));}},{key:"_updateTopicMap",value:function value(e){var t=this,o=[];(e.forEach(function(e){var n=e.groupID,a=e.topicID,s=null;t._topicMap.has(n)||t._topicMap.set(n,new Map()),t._topicMap.get(n).has(a)?(s=t._topicMap.get(n).get(a)).updateTopic(e):(t._getTopicLastMessage(e),s=new $r(e,t.isIntl()),t._topicMap.get(n).set(a,s));var r=t._computeUnreadCount(s);s.updateUnreadCount(r),o.push({conversationID:"".concat(N.CONV_GROUP).concat(a),type:N.CONV_TOPIC,unreadCount:r});}),o.length>0)&&this.getModule(jo).updateTopicConversation(o);}},{key:"resetGetTopicTime",value:function value(e){var t=this;pt(e)?M(this._getTopicTimeMap.keys()).forEach(function(e){t._getTopicTimeMap.set(e,0);}):this._getTopicTimeMap.set(e,0);}},{key:"getTopicListOnReconnected",value:function value(){var e=this,t=M(this._topicMap.keys()),o=[];t.forEach(function(t){var n=[];e._getLocalTopicList(t).forEach(function(t){var o=t.lastMessage.lastTime,a=void 0===o?0:o;Date.now()-1e3*a<1e3*e.TOPIC_LAST_ACTIVE_TIME&&n.push(t.topicID);}),n.length>0&&o.push({groupID:t,topicIDList:n});}),je.log("".concat(this._className,".getTopicListOnReconnected. active community count:").concat(o.length)),this._relayGetTopicList(o);}},{key:"_relayGetTopicList",value:function value(e){var t=this;if(0!==e.length){var o=e.shift(),n=o.topicIDList.length>5?"topicIDList.length:".concat(o.topicIDList.length):"topicIDList:".concat(o.topicIDList),a=new Os(Ls.RELAY_GET_TOPIC_LIST);a.setMessage(n),je.log("".concat(this._className,"._relayGetTopicList. ").concat(n)),this.getTopicList(o).then(function(){a.setNetworkType(t.getNetworkType()).end(),t._relayGetTopicList(e);}).catch(function(o){t.probeNetwork().then(function(e){var t=m(e,2),n=t[0],s=t[1];a.setError(o,n,s).end();}),t._relayGetTopicList(e);});}}},{key:"_handleTopicAtInfo",value:function value(e){var o=this;0!==e.length&&e.forEach(function(e){var n=e.groupID,a=e.topicID,s=e.groupAtInfoList,r=[];pt(s)||(s.forEach(function(e){r.push(t(t({},e),{},{groupID:n,topicID:a}));}),o.getModule(jo).onNewGroupAtTips({dataList:r}));});}},{key:"_getTopicLastMessage",value:function value(e){if(!pt(e.lastMsg)){var t={time:e.lastMsg.time,sequence:e.lastMsg.sequence,from:e.lastMsg.from,payload:e.lastMsg.elements[0]?e.lastMsg.elements[0].content:null,type:e.lastMsg.elements[0]?e.lastMsg.elements[0].type:"",nick:e.lastMsg.nick,version:e.lastMsg.messageVersion,cloudCustomData:e.lastMsg.cloudCustomData};e.lastMessage=t;}}},{key:"deleteTopicListInCommunity",value:function value(e){var t=this,o=this._getLocalTopicList(e),n=this.getModule(jo);o.forEach(function(o){var a=o.topicID;t._deleteLocalTopic(e,a),t._getTopicTimeMap.delete(e),n.deleteLocalConversation("".concat(N.CONV_GROUP).concat(a));});}},{key:"_computeUnreadCount",value:function value(e){var t=e.selfInfo,o=t.excludedUnreadSequenceList,n=t.readedSequence,a=e.nextMessageSeq-e.selfInfo.readedSequence-1;if(dt(o)){var s=0;o.forEach(function(t){t>=n&&t<=e.nextMessageSeq-1&&(s+=1);}),s>=1&&(a-=s);}return a<0?0:a;}},{key:"_filterProfanity",value:function value(e,t){var o=this.getModule(pn);if(!o)return!0;var n=o.filterText(t[e],Q),a=n.isAllowedToSend,s=n.modifiedText;return!0===a&&(t[e]=s,!0);}},{key:"updateLastMessage",value:function value(e,t){var o=zt(e),n=this.getLocalTopic(o,e);if(n){var a=t.sequence+1;n.updateNextMessageSeq(a),n.updateLastMessage(t),this.emitOuterEvent(D.TOPIC_UPDATED,{groupID:o,topic:n});}}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._topicMap.clear(),this._getTopicTimeMap.clear(),this.TOPIC_CACHE_TIME=300,this.TOPIC_LAST_ACTIVE_TIME=3600;}}]),a;}(mn),Jr=function(){function e(t){n(this,e),this._userModule=t,this._className="ProfileHandler",this.TAG="profile",this.accountProfileMap=new Map(),this.expirationTime=864e5;}return s(e,[{key:"setExpirationTime",value:function value(e){this.expirationTime=e;}},{key:"getUserProfile",value:function value(e){var t=this,o=e.userIDList;e.fromAccount=this._userModule.getMyAccount(),o.length>100&&(je.warn("".concat(this._className,".getUserProfile ").concat(to(100))),o.length=100);for(var n,a=[],s=[],r=0,i=o.length;r<i;r++){n=o[r],this._userModule.isMyFriend(n)&&this._containsAccount(n)?s.push(this._getProfileFromMap(n)):a.push(n);}if(0===a.length)return ar(s);e.toAccount=a;var c=e.bFromGetMyProfile||!1,u=[];e.toAccount.forEach(function(e){u.push({toAccount:e,standardSequence:0,customSequence:0});}),e.userItem=u;var l=new Os(Ls.GET_USER_PROFILE);return l.setMessage(o.length>5?"userIDList.length:".concat(o.length):"userIDList:".concat(o)),this._userModule.request({protocolName:Dn,requestData:e}).then(function(e){l.setNetworkType(t._userModule.getNetworkType()).end(),je.info("".concat(t._className,".getUserProfile ok"));var o=t._handleResponse(e).concat(s);return zs(c?o[0]:o);}).catch(function(e){return t._userModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];l.setError(e,n,a).end();}),je.error("".concat(t._className,".getUserProfile failed. error:"),e),sr(e);});}},{key:"getMyProfile",value:function value(){var e=this._userModule.getMyAccount();if(je.log("".concat(this._className,".getMyProfile myAccount:").concat(e)),this._fillMap(),this._containsAccount(e)){var t=this._getProfileFromMap(e);return je.debug("".concat(this._className,".getMyProfile from cache, myProfile:")+JSON.stringify(t)),ar(t);}return this.getUserProfile({fromAccount:e,userIDList:[e],bFromGetMyProfile:!0});}},{key:"_handleResponse",value:function value(e){for(var t,o,n=vt(),a=e.data.userProfileItem,s=[],r=0,i=a.length;r<i;r++){"@TLS#NOT_FOUND"!==a[r].to&&""!==a[r].to&&(t=a[r].to,o=this._updateMap(t,this._getLatestProfileFromResponse(t,a[r].profileItem)),s.push(o));}return je.log("".concat(this._className,"._handleResponse cost ").concat(vt()-n," ms")),s;}},{key:"_getLatestProfileFromResponse",value:function value(e,t){var o={};if(o.userID=e,o.profileCustomField=[],!no(t))for(var n=0,a=t.length;n<a;n++){if(t[n].tag.indexOf("Tag_Profile_Custom")>-1)o.profileCustomField.push({key:t[n].tag,value:t[n].value});else switch(t[n].tag){case ze.NICK:o.nick=t[n].value;break;case ze.GENDER:o.gender=t[n].value;break;case ze.BIRTHDAY:o.birthday=t[n].value;break;case ze.LOCATION:o.location=t[n].value;break;case ze.SELFSIGNATURE:o.selfSignature=t[n].value;break;case ze.ALLOWTYPE:o.allowType=t[n].value;break;case ze.LANGUAGE:o.language=t[n].value;break;case ze.AVATAR:o.avatar=t[n].value;break;case ze.MESSAGESETTINGS:o.messageSettings=t[n].value;break;case ze.ADMINFORBIDTYPE:o.adminForbidType=t[n].value;break;case ze.LEVEL:o.level=t[n].value;break;case ze.ROLE:o.role=t[n].value;break;default:je.warn("".concat(this._className,"._handleResponse unknown tag:"),t[n].tag,t[n].value);}}return o;}},{key:"updateMyProfile",value:function value(e){var t=this,o="".concat(this._className,".updateMyProfile");if(e.nick&&!1===this._userModule.filterProfanity("nick",e))return sr({code:_n.PROFANITY_FOUND});if(e.selfSignature&&!1===this._userModule.filterProfanity("selfSignature",e))return sr({code:_n.PROFANITY_FOUND});var n=new Os(Ls.UPDATE_MY_PROFILE);n.setMessage(JSON.stringify(e));var a=new Mr().validate(e);if(!a.valid)return n.setCode(_n.UPDATE_PROFILE_INVALID_PARAM).setMoreMessage("updateMyProfile info:".concat(a.tips)).setNetworkType(this._userModule.getNetworkType()).end(),je.error("".concat(o," info:").concat(a.tips)),sr({code:_n.UPDATE_PROFILE_INVALID_PARAM});var s=[];for(var r in e){Object.prototype.hasOwnProperty.call(e,r)&&("profileCustomField"===r?e.profileCustomField.forEach(function(e){s.push({tag:e.key,value:e.value});}):s.push({tag:ze[r.toUpperCase()],value:e[r]}));}if(0===s.length){var i=new tr({code:_n.UPDATE_PROFILE_NO_KEY});return n.setError(i,!0,this._userModule.getNetworkType()).end(),je.error("".concat(o," failed. error:"),i),sr(i);}return this._userModule.request({protocolName:Nn,requestData:{fromAccount:this._userModule.getMyAccount(),profileItem:s}}).then(function(a){n.setNetworkType(t._userModule.getNetworkType()).end(),je.info("".concat(o," ok"));var s=t._updateMap(t._userModule.getMyAccount(),e);return t._userModule.emitOuterEvent(D.PROFILE_UPDATED,[s]),ar(s);}).catch(function(e){return t._userModule.probeNetwork().then(function(t){var o=m(t,2),a=o[0],s=o[1];n.setError(e,a,s).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"onProfileModified",value:function value(e){var t=e.dataList;if(!no(t)){var o,n,a=t.length;je.debug("".concat(this._className,".onProfileModified count:").concat(a," dataList:"),e.dataList);for(var s=[],r=0;r<a;r++){o=t[r].userID,n=this._updateMap(o,this._getLatestProfileFromResponse(o,t[r].profileList)),s.push(n);}s.length>0&&(this._userModule.emitInnerEvent(lr,s),this._userModule.emitOuterEvent(D.PROFILE_UPDATED,s));}}},{key:"_fillMap",value:function value(){if(0===this.accountProfileMap.size){for(var e=this._getCachedProfiles(),t=Date.now(),o=0,n=e.length;o<n;o++){t-e[o].lastUpdatedTime<this.expirationTime&&this.accountProfileMap.set(e[o].userID,e[o]);}je.log("".concat(this._className,"._fillMap from cache, map.size:").concat(this.accountProfileMap.size));}}},{key:"_updateMap",value:function value(e,t){var o,n=Date.now();return this._containsAccount(e)?(o=this._getProfileFromMap(e),t.profileCustomField&&Rt(o.profileCustomField,t.profileCustomField),yt(o,t,["profileCustomField"]),o.lastUpdatedTime=n):(o=new Mr(t),(this._userModule.isMyFriend(e)||e===this._userModule.getMyAccount())&&(o.lastUpdatedTime=n,this.accountProfileMap.set(e,o))),this._flushMap(e===this._userModule.getMyAccount()),o;}},{key:"_flushMap",value:function value(e){var t=M(this.accountProfileMap.values()),o=this._userModule.getStorageModule();je.debug("".concat(this._className,"._flushMap length:").concat(t.length," flushAtOnce:").concat(e)),o.setItem(this.TAG,t,e);}},{key:"_containsAccount",value:function value(e){return this.accountProfileMap.has(e);}},{key:"_getProfileFromMap",value:function value(e){return this.accountProfileMap.get(e);}},{key:"_getCachedProfiles",value:function value(){var e=this._userModule.getStorageModule().getItem(this.TAG);return no(e)?[]:e;}},{key:"onConversationsProfileUpdated",value:function value(e){for(var t,o,n,a=[],s=0,r=e.length;s<r;s++){o=(t=e[s]).userID,this._userModule.isMyFriend(o)||(this._containsAccount(o)?(n=this._getProfileFromMap(o),yt(n,t)>0&&a.push(o)):a.push(t.userID));}0!==a.length&&(je.info("".concat(this._className,".onConversationsProfileUpdated toAccountList:").concat(a)),this.getUserProfile({userIDList:a}));}},{key:"getNickAndAvatarByUserID",value:function value(e){if(this._containsAccount(e)){var t=this._getProfileFromMap(e);return{nick:t.nick,avatar:t.avatar};}return{nick:"",avatar:""};}},{key:"reset",value:function value(){this._flushMap(!0),this.accountProfileMap.clear();}}]),e;}(),Xr=s(function e(t){n(this,e),no||(this.userID=t.userID||"",this.timeStamp=t.timeStamp||0);}),Qr=function(){function e(t){n(this,e),this._userModule=t,this._className="BlacklistHandler",this._blacklistMap=new Map(),this.startIndex=0,this.maxLimited=100,this.currentSequence=0;}return s(e,[{key:"getLocalBlacklist",value:function value(){return M(this._blacklistMap.keys());}},{key:"getBlacklist",value:function value(){var e=this,t="".concat(this._className,".getBlacklist"),o={fromAccount:this._userModule.getMyAccount(),maxLimited:this.maxLimited,startIndex:0,lastSequence:this.currentSequence},n=new Os(Ls.GET_BLACKLIST);return this._userModule.request({protocolName:An,requestData:o}).then(function(o){var a=o.data,s=a.blackListItem,r=a.currentSequence,i=no(s)?0:s.length;n.setNetworkType(e._userModule.getNetworkType()).setMessage("count:".concat(i)).end(),je.info("".concat(t," ok")),e.currentSequence=r,e._handleResponse(s,!0),e._userModule.emitOuterEvent(D.BLACKLIST_UPDATED,M(e._blacklistMap.keys()));}).catch(function(o){return e._userModule.probeNetwork().then(function(e){var t=m(e,2),a=t[0],s=t[1];n.setError(o,a,s).end();}),je.error("".concat(t," failed. error:"),o),sr(o);});}},{key:"addBlacklist",value:function value(e){var t=this,o=new Os(Ls.ADD_TO_BLACKLIST),n="".concat(this._className,".addBlacklist"),a=this._userModule.getMyAccount();if(1===e.userIDList.length&&e.userIDList[0]===a){var s=_n.CANNOT_ADD_SELF_TO_BLACKLIST,r=this._userModule.getErrorMessage(s);o.setCode(s).setMessage(r).setNetworkType(this._userModule.getNetworkType()).end();var i=new tr({code:s});return je.error("".concat(n," failed. error:"),i),sr(i);}return e.userIDList.includes(a)&&(e.userIDList=e.userIDList.filter(function(e){return e!==a;})),e.fromAccount=this._userModule.getMyAccount(),e.toAccount=e.userIDList,this._userModule.request({protocolName:kn,requestData:e}).then(function(a){return o.setNetworkType(t._userModule.getNetworkType()).setMessage(e.userIDList.length>5?"userIDList.length:".concat(e.userIDList.length):"userIDList:".concat(e.userIDList)).end(),je.info("".concat(n," ok")),t._handleResponse(a.resultItem,!0),zs(M(t._blacklistMap.keys()));}).catch(function(e){return t._userModule.probeNetwork().then(function(t){var n=m(t,2),a=n[0],s=n[1];o.setError(e,a,s).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"_handleResponse",value:function value(e,t){if(!no(e))for(var o,n,a,s=0,r=e.length;s<r;s++){n=e[s].to,a=e[s].resultCode,(pt(a)||0===a)&&(t?((o=this._blacklistMap.has(n)?this._blacklistMap.get(n):new Xr()).userID=n,!no(e[s].addBlackTimeStamp)&&(o.timeStamp=e[s].addBlackTimeStamp),this._blacklistMap.set(n,o)):this._blacklistMap.has(n)&&(o=this._blacklistMap.get(n),this._blacklistMap.delete(n)));}je.log("".concat(this._className,"._handleResponse total:").concat(this._blacklistMap.size," bAdd:").concat(t));}},{key:"deleteBlacklist",value:function value(e){var t=this,o="".concat(this._className,".deleteBlacklist"),n=new Os(Ls.REMOVE_FROM_BLACKLIST);return e.fromAccount=this._userModule.getMyAccount(),e.toAccount=e.userIDList,this._userModule.request({protocolName:Rn,requestData:e}).then(function(a){return n.setNetworkType(t._userModule.getNetworkType()).setMessage(e.userIDList.length>5?"userIDList.length:".concat(e.userIDList.length):"userIDList:".concat(e.userIDList)).end(),je.info("".concat(o," ok")),t._handleResponse(a.data.resultItem,!1),zs(M(t._blacklistMap.keys()));}).catch(function(e){return t._userModule.probeNetwork().then(function(t){var o=m(t,2),a=o[0],s=o[1];n.setError(e,a,s).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"onAccountDeleted",value:function value(e){for(var t,o=[],n=0,a=e.length;n<a;n++){t=e[n],this._blacklistMap.has(t)&&(this._blacklistMap.delete(t),o.push(t));}o.length>0&&(je.log("".concat(this._className,".onAccountDeleted count:").concat(o.length," userIDList:"),o),this._userModule.emitOuterEvent(D.BLACKLIST_UPDATED,M(this._blacklistMap.keys())));}},{key:"onAccountAdded",value:function value(e){for(var t,o=[],n=0,a=e.length;n<a;n++){t=e[n],this._blacklistMap.has(t)||(this._blacklistMap.set(t,new Xr({userID:t})),o.push(t));}o.length>0&&(je.log("".concat(this._className,".onAccountAdded count:").concat(o.length," userIDList:"),o),this._userModule.emitOuterEvent(D.BLACKLIST_UPDATED,M(this._blacklistMap.keys())));}},{key:"reset",value:function value(){this._blacklistMap.clear(),this.startIndex=0,this.maxLimited=100,this.currentSequence=0;}}]),e;}(),Zr=function Zr(e){var t=String(e).replace(/[=]+$/,""),o="";if(t.length%4==1)return je.warn("decodeBase64 failed: ".concat(e," to be decoded is not correctly encoded.")),"";for(var n,a,s=0,r=0;a=t.charAt(r++);~a&&(n=s%4?64*n+a:a,s++%4)?o+=String.fromCharCode(255&n>>(-2*s&6)):0){a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a);}try{return decodeURIComponent(escape(o));}catch(i){return je.warn("decodeBase64 failed: ".concat(e," to be decoded is not correctly encoded.")),"";}},ei=function(){function e(t){n(this,e),this._userModule=t,this._className="UserStatusHandler",this.MAX_QUERY_USER_COUNT=500,this.MAX_SUBSCRIBE_USER_COUNT=100,this.MAX_UNSUBSCRIBE_USER_COUNT=100,this._userModule.getInnerEmitterInstance().on(ur,this._onCloudConfigUpdated,this);}return s(e,[{key:"_onCloudConfigUpdated",value:function value(){var e=this._userModule.getCloudConfig("status_query_count"),t=this._userModule.getCloudConfig("status_sub_count"),o=this._userModule.getCloudConfig("status_unsub_count");je.log("".concat(this._className,"._onCloudConfigUpdated statusQueryCount:").concat(e," statusSubscribeCount:").concat(t)+" statusUnsubscribeCount:".concat(o)),pt(e)||(this.MAX_QUERY_USER_COUNT=parseInt(e,10)),pt(e)||(this.MAX_SUBSCRIBE_USER_COUNT=parseInt(t,10)),pt(e)||(this.MAX_UNSUBSCRIBE_USER_COUNT=parseInt(o,10));}},{key:"onUserStatusUpdated",value:function value(e){var t=e.dataList,o=this._userModule.getMyUserID(),n=this._userModule.getModule($o),a=t.map(function(e){var t=e.to,a=e.statusType,s=e.customStatus,r=Zr(s);return t===o&&n.setCustomStatus(r),{userID:t,statusType:a,customStatus:r};});this._userModule.emitOuterEvent(D.USER_STATUS_UPDATED,a);}},{key:"setSelfStatus",value:function value(e){var t=this,o="".concat(this._className,".setSelfStatus");if(!1===this._userModule.filterProfanity("customStatus",e))return sr({code:_n.PROFANITY_FOUND});var n=new Os(Ls.SET_SELF_STATUS),a=e.customStatus;return this._userModule.request({protocolName:us,requestData:{customStatus:a}}).then(function(e){return n.setNetworkType(t._userModule.getNetworkType()).setMessage("customStatus:".concat(a)).end(),je.log("".concat(o," ok. customStatus:").concat(a)),t._userModule.getModule($o).setCustomStatus(a),zs({userID:t._userModule.getMyUserID(),statusType:1,customStatus:a});}).catch(function(e){return t._userModule.probeNetwork().then(function(t){var o=m(t,2),a=o[0],s=o[1];n.setError(e,a,s).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"getUserStatus",value:function value(e){var t=this,o="".concat(this._className,".getUserStatus"),n=e.userIDList,a=void 0===n?[]:n,s=this._userModule.getMyUserID(),r=M(a),i=void 0,c=r.indexOf(s);if(c>-1){r.splice(c,1);var u=this._userModule.getModule($o).getCustomStatus();i={userID:s,statusType:1,customStatus:u};}if(0===r.length)return ar({successUserList:[i],failureUserList:[]});if(!this._userModule.canIUse(Y.USER_STATUS))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});r.length>this.MAX_QUERY_USER_COUNT&&(je.warn("".concat(o," ").concat(to(this.MAX_QUERY_USER_COUNT))),r=a.slice(0,this.MAX_QUERY_USER_COUNT));var l=new Os(Ls.GET_USER_STATUS);return this._userModule.request({protocolName:ls,requestData:{userIDList:r}}).then(function(e){var n=e.data,s=n.successUserList,r=void 0===s?[]:s,c=n.failureUserList,u=void 0===c?[]:c,d=r.map(function(e){var t=e.userID,o=e.statusType,n=e.customStatus;return{userID:t,statusType:o,customStatus:Zr(n)};}),p=u.map(function(e){var t=e.userID,o=e.invalidUserID,n=e.errorCode,a=e.errorInfo;return{userID:no(o)?t:o,code:n,message:a};});pt(i)||d.unshift(i);var g="userID count:".concat(a.length,", success count:").concat(d.length,", fail count:").concat(p.length);return l.setNetworkType(t._userModule.getNetworkType()).setMessage("".concat(g)).end(),je.log("".concat(o," ok. ").concat(g,".")),zs({successUserList:d,failureUserList:p});}).catch(function(e){return t._userModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],s=o[1];l.setMessage("userID count:".concat(a.length)).setError(e,n,s).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"subscribeUserStatus",value:function value(e){var t=this;if(!this._userModule.canIUse(Y.USER_STATUS))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var o="".concat(this._className,".subscribeUserStatus"),n=e.userIDList,a=void 0===n?[]:n,s=M(a);s.length>this.MAX_SUBSCRIBE_USER_COUNT&&(je.warn("".concat(o," ").concat(to(this.MAX_SUBSCRIBE_USER_COUNT))),s=a.slice(0,this.MAX_SUBSCRIBE_USER_COUNT));var r=new Os(Ls.SUBSCRIBE_USER_STATUS),i="userID count:".concat(a.length);return je.log("".concat(o," ").concat(i)),this._userModule.request({protocolName:ds,requestData:{userIDList:s}}).then(function(e){var n=e.data.failureUserList,a=(void 0===n?[]:n).map(function(e){var t=e.userID,o=e.invalidUserID,n=e.errorCode,a=e.errorInfo;return{userID:no(o)?t:o,code:n,message:a};});return r.setNetworkType(t._userModule.getNetworkType()).setMessage("".concat(i," fail count:").concat(a.length)).end(),je.log("".concat(o," ok. fail count:").concat(a.length,".")),zs({failureUserList:a});}).catch(function(e){return t._userModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setMessage("".concat(i)).setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"unsubscribeUserStatus",value:function value(e){var t=this;if(!this._userModule.canIUse(Y.USER_STATUS))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var o="".concat(this._className,".unsubscribeUserStatus"),n=(e||{}).userIDList,a=void 0===n?[]:n,s=M(a);a.length>this.MAX_UNSUBSCRIBE_USER_COUNT&&(je.warn("".concat(o," ").concat(to(this.MAX_UNSUBSCRIBE_USER_COUNT))),s=a.slice(0,this.MAX_UNSUBSCRIBE_USER_COUNT));var r=new Os(Ls.UNSUBSCRIBE_USER_STATUS),i="userID count:".concat(a.length);je.log("".concat(o," ").concat(i));var c={userIDList:s};return 0===s.length&&(c.userIDList=void 0,c.unsubscribeAll=1),this._userModule.request({protocolName:ps,requestData:c}).then(function(e){var n=e.data.failureUserList,a=(void 0===n?[]:n).map(function(e){var t=e.userID,o=e.invalidUserID,n=e.errorCode,a=e.errorInfo;return{userID:no(o)?t:o,code:n,message:a};});return r.setNetworkType(t._userModule.getNetworkType()).setMessage("".concat(i," fail count:").concat(a.length)).end(),je.log("".concat(o," ok. fail count:").concat(a.length,".")),zs({failureUserList:a});}).catch(function(e){return t._userModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];r.setMessage("".concat(i)).setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"reset",value:function value(){this.MAX_QUERY_USER_COUNT=500,this.MAX_SUBSCRIBE_USER_COUNT=100,this.MAX_UNSUBSCRIBE_USER_COUNT=100;}}]),e;}(),ti=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="UserModule",a._profileHandler=new Jr(_(a)),a._blacklistHandler=new Qr(_(a)),a._userStatusHandler=new ei(_(a)),a.getInnerEmitterInstance().on(cr,a.onContextUpdated,_(a)),a;}return s(o,[{key:"onContextUpdated",value:function value(e){this._profileHandler.getMyProfile(),this._blacklistHandler.getBlacklist();}},{key:"onProfileModified",value:function value(e){this._profileHandler.onProfileModified(e);}},{key:"onRelationChainModified",value:function value(e){var t=e.dataList;if(!no(t)){var o=[];t.forEach(function(e){e.blackListDelAccount&&o.push.apply(o,M(e.blackListDelAccount));}),o.length>0&&this._blacklistHandler.onAccountDeleted(o);var n=[];t.forEach(function(e){e.blackListAddAccount&&n.push.apply(n,M(e.blackListAddAccount));}),n.length>0&&this._blacklistHandler.onAccountAdded(n);}}},{key:"onConversationsProfileUpdated",value:function value(e){this._profileHandler.onConversationsProfileUpdated(e);}},{key:"getMyAccount",value:function value(){return this.getMyUserID();}},{key:"getMyProfile",value:function value(){return this._profileHandler.getMyProfile();}},{key:"getStorageModule",value:function value(){return this.getModule(zo);}},{key:"filterProfanity",value:function value(e,t){var o=this.getModule(pn);if(!o)return!0;var n=o.filterText(t[e],X),a=n.isAllowedToSend,s=n.modifiedText;return!0===a&&(t[e]=s,!0);}},{key:"isMyFriend",value:function value(e){var t=this.getModule(Ho);return!!t&&t.isMyFriend(e);}},{key:"getUserProfile",value:function value(e){return this._profileHandler.getUserProfile(e);}},{key:"updateMyProfile",value:function value(e){return this._profileHandler.updateMyProfile(e);}},{key:"getNickAndAvatarByUserID",value:function value(e){return this._profileHandler.getNickAndAvatarByUserID(e);}},{key:"getLocalBlacklist",value:function value(){var e=this._blacklistHandler.getLocalBlacklist();return ar(e);}},{key:"addBlacklist",value:function value(e){return this._blacklistHandler.addBlacklist(e);}},{key:"deleteBlacklist",value:function value(e){return this._blacklistHandler.deleteBlacklist(e);}},{key:"onUserStatusUpdated",value:function value(e){this._userStatusHandler.onUserStatusUpdated(e);}},{key:"setSelfStatus",value:function value(e){return this._userStatusHandler.setSelfStatus(e);}},{key:"getUserStatus",value:function value(e){return this._userStatusHandler.getUserStatus(e);}},{key:"subscribeUserStatus",value:function value(e){return this._userStatusHandler.subscribeUserStatus(e);}},{key:"unsubscribeUserStatus",value:function value(e){return this._userStatusHandler.unsubscribeUserStatus(e);}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._profileHandler.reset(),this._blacklistHandler.reset(),this._userStatusHandler.reset();}}]),o;}(mn),oi=function(){function e(t,o){n(this,e),this._moduleManager=t,this._isLoggedIn=!1,this._SDKAppID=o.SDKAppID,this._userID=o.userID||"",this._userSig=o.userSig||"",this._version="2.24.2",this._a2Key="",this._tinyID="",this._customStatus="",this._contentType="json",this._unlimitedAVChatRoom=o.unlimitedAVChatRoom,this._scene=o.scene||"",this._oversea=o.oversea,this._instanceID=o.instanceID,this._statusInstanceID=0,this._isDevMode=o.devMode,this._proxyServer=o.proxyServer;}return s(e,[{key:"isLoggedIn",value:function value(){return this._isLoggedIn;}},{key:"isOversea",value:function value(){return this._oversea;}},{key:"isPrivateNetWork",value:function value(){return this._proxyServer;}},{key:"isDevMode",value:function value(){return this._isDevMode;}},{key:"isSingaporeSite",value:function value(){return this._SDKAppID>=2e7&&this._SDKAppID<3e7||this._SDKAppID>=172e7&&this._SDKAppID<173e7;}},{key:"isKoreaSite",value:function value(){return this._SDKAppID>=3e7&&this._SDKAppID<4e7||this._SDKAppID>=173e7&&this._SDKAppID<174e7;}},{key:"isGermanySite",value:function value(){return this._SDKAppID>=4e7&&this._SDKAppID<5e7||this._SDKAppID>=174e7&&this._SDKAppID<175e7;}},{key:"isIndiaSite",value:function value(){return this._SDKAppID>=5e7&&this._SDKAppID<6e7||this._SDKAppID>=175e7&&this._SDKAppID<176e7;}},{key:"isJapanSite",value:function value(){return this._SDKAppID>=6e7&&this._SDKAppID<7e7||this._SDKAppID>=176e7&&this._SDKAppID<177e7;}},{key:"isUSASite",value:function value(){return this._SDKAppID>=7e7&&this._SDKAppID<8e7||this._SDKAppID>=177e7&&this._SDKAppID<178e7;}},{key:"isIntl",value:function value(){return Zt(this._SDKAppID);}},{key:"isUnlimitedAVChatRoom",value:function value(){return this._unlimitedAVChatRoom;}},{key:"setUserID",value:function value(e){this._userID=e;}},{key:"getUserID",value:function value(){return this._userID;}},{key:"setUserSig",value:function value(e){this._userSig=e;}},{key:"getUserSig",value:function value(){return this._userSig;}},{key:"getSDKAppID",value:function value(){return this._SDKAppID;}},{key:"setTinyID",value:function value(e){this._tinyID=e,this._isLoggedIn=!0;}},{key:"getTinyID",value:function value(){return this._tinyID;}},{key:"setCustomStatus",value:function value(e){this._customStatus=e;}},{key:"getCustomStatus",value:function value(){return this._customStatus;}},{key:"getScene",value:function value(){return Pe?window.tencent_cloud_im_csig_flutter_for_web_25F_cy:this._isTUIKit()?"tuikit":this._scene;}},{key:"getInstanceID",value:function value(){return this._instanceID;}},{key:"getStatusInstanceID",value:function value(){return this._statusInstanceID;}},{key:"setStatusInstanceID",value:function value(e){this._statusInstanceID=e;}},{key:"getVersion",value:function value(){return this._version;}},{key:"getA2Key",value:function value(){return this._a2Key;}},{key:"setA2Key",value:function value(e){this._a2Key=e;}},{key:"getContentType",value:function value(){return this._contentType;}},{key:"getProxyServer",value:function value(){return this._proxyServer;}},{key:"_isTUIKit",value:function value(){var e=!1,t=!1,o=!1,n=!1,a=[];de&&(a=Object.keys(ge)),pe&&(a=le?Object.keys(uni):Object.keys(window));for(var s=0,r=a.length;s<r;s++){if(a[s].toLowerCase().includes("uikit")){e=!0;break;}}if(a=null,de&&!_t(ge.createGamePortal)&&!pt(getApp())){var i=getApp().globalData;lt(i)&&!0===i.isTUIKit&&(t=!0);}!0===this._moduleManager.getModule(zo).getStorageSync("TIM_".concat(this._SDKAppID,"_isTUIKit"))&&(o=!0);var c=null;if(ae&&!re&&"undefined"==typeof uni&&__wxConfig&&(c=__wxConfig.pages),se&&"undefined"==typeof uni&&__qqConfig&&(c=__qqConfig.pages),dt(c)&&c.length>0){for(var u=0,l=c.length;u<l;u++){if(c[u].toLowerCase().includes("tui")){n=!0;break;}}c=null;}return e||t||o||n;}},{key:"reset",value:function value(){this._isLoggedIn=!1,this._userSig="",this._a2Key="",this._tinyID="",this._customStatus="",this._statusInstanceID=0;}}]),e;}(),ni=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="SignModule",a._helloInterval=120,a._lastLoginTs=0,a._lastWsHelloTs=0,a._isWebUniapp=0,dr.mixin(_(a)),a;}return s(o,[{key:"onCheckTimer",value:function value(e){this.isLoggedIn()&&e%this._helloInterval==0&&this._hello();}},{key:"login",value:function value(e){if(this.isLoggedIn()){var t=this.isIntl()?"You have already logged in to account ".concat(e.userID,". If you want to switch accounts, please call the logout interface, and then call the login interface"):"您已经登录帐号 ".concat(e.userID," ！如需切换帐号登录，请先调用 logout 接口登出，再调用 login 接口登录。");return je.warn(t),ar({actionStatus:"OK",errorCode:0,errorInfo:t,repeatLogin:!0});}if(Date.now()-this._lastLoginTs<=15e3)return je.warn(this.isIntl()?"You are trying to login in to account ".concat(e.userID,", please do not login in again"):"您正在尝试登录帐号 ".concat(e.userID,"！请勿重复登录。")),sr({code:_n.REPEAT_LOGIN});je.log("".concat(this._className,".login userID:").concat(e.userID));var o=this._checkLoginInfo(e);if(0!==o.code)return sr(o);var n=this.getModule($o),a=e.userID,s=e.userSig;return n.setUserID(a),n.setUserSig(s),this.getModule(on).updateProtocolConfig(),this._login();}},{key:"_login",value:function value(){var e=this,t=this.getModule($o),o=t.getScene(),n=0,a=new Os(Ls.LOGIN);a.setMessage("".concat(o)).setMoreMessage("identifier:".concat(this.getMyUserID())),le?"tuikit"===o?a.setUIPlatform(4):a.setUIPlatform(3):de?"tuikit"===o?a.setUIPlatform(12):a.setUIPlatform(11):pe&&(Pe?"flutter_web_uikit"===o?a.setUIPlatform(21):a.setUIPlatform(20):this._isReactUIKit()?Ge?a.setUIPlatform(25):a.setUIPlatform(24):Ge?"tuikit"===o?a.setUIPlatform(17):a.setUIPlatform(16):"tuikit"===o?a.setUIPlatform(14):a.setUIPlatform(13));var s=this.getModule(dn);if(s.canIUseOfflinePush()){this._isWebUniapp=s.getUniAppPlatform();var r=this._getStatusInstanceID();t.setStatusInstanceID(r),this.getModule(on).updateProtocolConfig(),n=s.getDeviceBrand();}return this._lastLoginTs=Date.now(),this.request({protocolName:Mn,requestData:{deviceBrand:n,isWebUniapp:this._isWebUniapp}}).then(function(n){e._lastLoginTs=0;var s=Date.now(),r=null,i=n.data,c=i.a2Key,u=i.tinyID,l=i.helloInterval,d=i.instanceID,p=i.timeStamp,g=i.customStatus,_=void 0===g?"":g;je.log("".concat(e._className,".login ok. scene:").concat(o," helloInterval:").concat(l," instanceID:").concat(d," timeStamp:").concat(p));var h=1e3*p,f=s-a.getStartTs(),m=h+parseInt(f/2)-s,M=a.getStartTs()+m;if(a.start(M),function(e,t){Ve=t;var o=new Date();o.setTime(e),je.info("baseTime from server:".concat(o," offset:").concat(Ve));}(h,m),!u)throw r=new tr({code:_n.NO_TINYID}),a.setError(r,!0,e.getNetworkType()).end(),r;if(!c)throw r=new tr({code:_n.NO_A2KEY}),a.setError(r,!0,e.getNetworkType()).end(),r;var v=Zr(_);a.setNetworkType(e.getNetworkType()).setMoreMessage("helloInterval:".concat(l," instanceID:").concat(d," offset:").concat(m," customStatus:").concat(v)).end(),t.setA2Key(c),t.setTinyID(u),t.setStatusInstanceID(d),t.setCustomStatus(v),e.getModule(on).updateProtocolConfig(),e.emitInnerEvent(cr),e._helloInterval=l,e.triggerReady();var y=e.getModule(dn);return y.canIUseOfflinePush()&&(uni.setStorageSync("timUniAppInstanceID",d),y.init()),e._fetchCloudControlConfig(),e.getModule(pn).init(),n;}).catch(function(t){return e.probeNetwork().then(function(e){var o=m(e,2),n=o[0],s=o[1];a.setError(t,n,s).end(!0);}),e._moduleManager.setNotReadyReason(_n.LOGIN_FAILED),je.error("".concat(e._className,".login failed. error:"),t),e._lastLoginTs=0,e._moduleManager.onLoginFailed(),sr(t);});}},{key:"logout",value:function value(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!this.isLoggedIn())return sr({code:_n.USER_NOT_LOGGED_IN});var o=new Os(Ls.LOGOUT);return o.setNetworkType(this.getNetworkType()).setMessage("identifier:".concat(this.getMyUserID())).end(!0),je.info("".concat(this._className,".logout type:").concat(t)),0===t&&this._moduleManager.setNotReadyReason(_n.LOGGED_OUT),this.request({protocolName:vn,requestData:{type:t}}).then(function(){return e.resetReady(),ar({});}).catch(function(t){return je.error("".concat(e._className,"._logout error:"),t),e.resetReady(),ar({});});}},{key:"_fetchCloudControlConfig",value:function value(){this.getModule(sn).fetchConfig();}},{key:"_getStatusInstanceID",value:function value(){return uni.getStorageSync("timUniAppInstanceID");}},{key:"_hello",value:function value(){var e=this;this._lastWsHelloTs=Date.now(),this.request({protocolName:yn,requestData:{isWebUniapp:this._isWebUniapp}}).catch(function(t){je.warn("".concat(e._className,"._hello error:"),t);});}},{key:"getLastWsHelloTs",value:function value(){return this._lastWsHelloTs;}},{key:"_checkLoginInfo",value:function value(e){var t=0;return no(this.getModule($o).getSDKAppID())?t=_n.NO_SDKAPPID:no(e.userID)?t=_n.NO_IDENTIFIER:no(e.userSig)&&(t=_n.NO_USERSIG),{code:t};}},{key:"_isReactUIKit",value:function value(){return pe&&void 0!==window.tencent_cloud_im_csig_react_uikit_23F_xa;}},{key:"onMultipleAccountKickedOut",value:function value(e){var t=this;new Os(Ls.KICKED_OUT).setNetworkType(this.getNetworkType()).setMessage("type:".concat(N.KICKED_OUT_MULT_ACCOUNT," newInstanceInfo:").concat(JSON.stringify(e))).end(!0),je.warn("".concat(this._className,".onMultipleAccountKickedOut userID:").concat(this.getMyUserID()," newInstanceInfo:"),e),this.logout(1).then(function(){t.emitOuterEvent(D.KICKED_OUT,{type:N.KICKED_OUT_MULT_ACCOUNT}),t._moduleManager.setNotReadyReason(_n.KICKED_OUT_MULT_ACCOUNT),t._moduleManager.reset();});}},{key:"onMultipleDeviceKickedOut",value:function value(e){var t=this;new Os(Ls.KICKED_OUT).setNetworkType(this.getNetworkType()).setMessage("type:".concat(N.KICKED_OUT_MULT_DEVICE," newInstanceInfo:").concat(JSON.stringify(e))).end(!0),je.warn("".concat(this._className,".onMultipleDeviceKickedOut userID:").concat(this.getMyUserID()," newInstanceInfo:"),e),this.logout(1).then(function(){t.emitOuterEvent(D.KICKED_OUT,{type:N.KICKED_OUT_MULT_DEVICE}),t._moduleManager.setNotReadyReason(_n.KICKED_OUT_MULT_DEVICE),t._moduleManager.reset();});}},{key:"onUserSigExpired",value:function value(){new Os(Ls.KICKED_OUT).setNetworkType(this.getNetworkType()).setMessage(N.KICKED_OUT_USERSIG_EXPIRED).end(!0),je.warn("".concat(this._className,".onUserSigExpired: userSig 签名过期被踢下线")),0!==this.getModule($o).getStatusInstanceID()&&(this.emitOuterEvent(D.KICKED_OUT,{type:N.KICKED_OUT_USERSIG_EXPIRED}),this._moduleManager.setNotReadyReason(_n.KICKED_OUT_USERSIG_EXPIRED),this._moduleManager.reset());}},{key:"onRestApiKickedOut",value:function value(e){(new Os(Ls.KICKED_OUT).setNetworkType(this.getNetworkType()).setMessage("type:".concat(N.KICKED_OUT_REST_API," newInstanceInfo:").concat(JSON.stringify(e))).end(!0),je.warn("".concat(this._className,".onRestApiKickedOut userID:").concat(this.getMyUserID()," newInstanceInfo:"),e),0!==this.getModule($o).getStatusInstanceID())&&(this.emitOuterEvent(D.KICKED_OUT,{type:N.KICKED_OUT_REST_API}),this._moduleManager.setNotReadyReason(_n.KICKED_OUT_REST_API),this._moduleManager.reset(),this.getModule(nn).onRestApiKickedOut());}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this.resetReady(),this._helloInterval=120,this._lastLoginTs=0,this._lastWsHelloTs=0,this._isWebUniapp=0;}}]),o;}(mn);function ai(){return null;}var si=function(){function e(t){n(this,e),this._moduleManager=t,this._className="StorageModule",this._storageQueue=new Map(),this._errorTolerantHandle();}return s(e,[{key:"_errorTolerantHandle",value:function value(){de||!pt(window)&&this._canIUseCookies()||(this.getItem=ai,this.setItem=ai,this.removeItem=ai,this.clear=ai);}},{key:"onCheckTimer",value:function value(e){if(e%20==0){if(0===this._storageQueue.size)return;this._doFlush();}}},{key:"_doFlush",value:function value(){try{var e,t=E(this._storageQueue);try{for(t.s();!(e=t.n()).done;){var o=m(e.value,2),n=o[0],a=o[1];this._setStorageSync(this._getKey(n),a);}}catch(s){t.e(s);}finally{t.f();}this._storageQueue.clear();}catch(r){je.warn("".concat(this._className,"._doFlush error:"),r);}}},{key:"_getPrefix",value:function value(){var e=this._moduleManager.getModule($o);return"TIM_".concat(e.getSDKAppID(),"_").concat(e.getUserID(),"_");}},{key:"_getKey",value:function value(e){return"".concat(this._getPrefix()).concat(e);}},{key:"getItem",value:function value(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{var o=t?this._getKey(e):e;return this.getStorageSync(o);}catch(n){return je.warn("".concat(this._className,".getItem error:"),n),{};}}},{key:"setItem",value:function value(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(o){var a=n?this._getKey(e):e;this._setStorageSync(a,t);}else this._storageQueue.set(e,t);}},{key:"clear",value:function value(){try{de?ge.clearStorageSync():this._canIUseCookies()&&localStorage.clear();}catch(e){je.warn("".concat(this._className,".clear error:"),e);}}},{key:"removeItem",value:function value(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{var o=t?this._getKey(e):e;this._removeStorageSync(o);}catch(n){je.warn("".concat(this._className,".removeItem error:"),n);}}},{key:"getSize",value:function value(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"b";try{var n={size:0,limitSize:5242880,unit:o};if(Object.defineProperty(n,"leftSize",{enumerable:!0,get:function get(){return n.limitSize-n.size;}}),de&&(n.limitSize=1024*ge.getStorageInfoSync().limitSize),e)n.size=JSON.stringify(this.getItem(e)).length+this._getKey(e).length;else if(de){var a=ge.getStorageInfoSync(),s=a.keys;s.forEach(function(e){n.size+=JSON.stringify(t.getStorageSync(e)).length+t._getKey(e).length;});}else if(this._canIUseCookies())for(var r in localStorage){localStorage.hasOwnProperty(r)&&(n.size+=localStorage.getItem(r).length+r.length);}return this._convertUnit(n);}catch(i){je.warn("".concat(this._className," error:"),i);}}},{key:"_convertUnit",value:function value(e){var t={},o=e.unit;for(var n in t.unit=o,e){"number"==typeof e[n]&&("kb"===o.toLowerCase()?t[n]=Math.round(e[n]/1024):"mb"===o.toLowerCase()?t[n]=Math.round(e[n]/1024/1024):t[n]=e[n]);}return t;}},{key:"_setStorageSync",value:function value(e,t){de?ce?my.setStorageSync({key:e,data:t}):ge.setStorageSync(e,t):this._canIUseCookies()&&localStorage.setItem(e,JSON.stringify(t));}},{key:"getStorageSync",value:function value(e){return de?ce?my.getStorageSync({key:e}).data:ge.getStorageSync(e):this._canIUseCookies()?JSON.parse(localStorage.getItem(e)):{};}},{key:"_removeStorageSync",value:function value(e){de?ce?my.removeStorageSync({key:e}):ge.removeStorageSync(e):this._canIUseCookies()&&localStorage.removeItem(e);}},{key:"_canIUseCookies",value:function value(){return navigator&&navigator.cookieEnabled&&localStorage;}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._doFlush();}}]),e;}(),ri=function(){function e(t){n(this,e),this._className="SSOLogBody",this._report=[];}return s(e,[{key:"pushIn",value:function value(e){je.debug("".concat(this._className,".pushIn"),this._report.length,e),this._report.push(e);}},{key:"backfill",value:function value(e){var t;dt(e)&&0!==e.length&&(je.debug("".concat(this._className,".backfill"),this._report.length,e.length),(t=this._report).unshift.apply(t,M(e)));}},{key:"getLogsNumInMemory",value:function value(){return this._report.length;}},{key:"isEmpty",value:function value(){return 0===this._report.length;}},{key:"_reset",value:function value(){this._report.length=0,this._report=[];}},{key:"getLogsInMemory",value:function value(){var e=this._report.slice();return this._reset(),e;}}]),e;}(),ii=function ii(e){var t=e.getModule($o);return{SDKType:10,SDKAppID:t.getSDKAppID(),SDKVersion:t.getVersion(),tinyID:Number(t.getTinyID()),userID:t.getUserID(),platform:e.getPlatform(),instanceID:t.getInstanceID(),traceID:xe()};},ci=function(e){i(a,e);var o=f(a);function a(e){var t;n(this,a),(t=o.call(this,e))._className="EventStatModule",t.TAG="im-ssolog-event",t._reportBody=new ri(),t.MIN_THRESHOLD=20,t.MAX_THRESHOLD=100,t.WAITING_TIME=6e4,t.REPORT_LEVEL=[4,5,6],t.REPORT_SDKAPPID_BLACKLIST=[],t.REPORT_TINYID_WHITELIST=[],t._lastReportTime=Date.now();var s=t.getInnerEmitterInstance();return s.on(cr,t._onLoginSuccess,_(t)),s.on(ur,t._onCloudConfigUpdated,_(t)),t;}return s(a,[{key:"reportAtOnce",value:function value(){je.debug("".concat(this._className,".reportAtOnce")),this._report();}},{key:"_onLoginSuccess",value:function value(){var e=this,t=this.getModule(zo),o=t.getItem(this.TAG,!1);!no(o)&&_t(o.forEach)&&(je.log("".concat(this._className,"._onLoginSuccess get ssolog in storage, count:").concat(o.length)),o.forEach(function(t){e._reportBody.pushIn(t);}),t.removeItem(this.TAG,!1));}},{key:"_onCloudConfigUpdated",value:function value(){var e=this.getCloudConfig("evt_rpt_threshold"),t=this.getCloudConfig("evt_rpt_waiting"),o=this.getCloudConfig("evt_rpt_level"),n=this.getCloudConfig("evt_rpt_sdkappid_bl"),a=this.getCloudConfig("evt_rpt_tinyid_wl");pt(e)||(this.MIN_THRESHOLD=Number(e)),pt(t)||(this.WAITING_TIME=Number(t)),pt(o)||(this.REPORT_LEVEL=o.split(",").map(function(e){return Number(e);})),pt(n)||(this.REPORT_SDKAPPID_BLACKLIST=n.split(",").map(function(e){return Number(e);})),pt(a)||(this.REPORT_TINYID_WHITELIST=a.split(","));}},{key:"pushIn",value:function value(e){e instanceof Os&&(e.updateTimeStamp(),this._reportBody.pushIn(e),this._reportBody.getLogsNumInMemory()>=this.MIN_THRESHOLD&&this._report());}},{key:"onCheckTimer",value:function value(){Date.now()<this._lastReportTime+this.WAITING_TIME||this._reportBody.isEmpty()||this._report();}},{key:"_filterLogs",value:function value(e){var t=this,o=this.getModule($o),n=o.getSDKAppID(),a=o.getTinyID();return jt(this.REPORT_SDKAPPID_BLACKLIST,n)&&!$t(this.REPORT_TINYID_WHITELIST,a)?[]:e.filter(function(e){return t.REPORT_LEVEL.includes(e.level);});}},{key:"_report",value:function value(){var e=this;if(!this._reportBody.isEmpty()){var o=this._reportBody.getLogsInMemory(),n=this._filterLogs(o);if(0!==n.length){var a={header:ii(this),event:n};this.request({protocolName:Ya,requestData:t({},a)}).then(function(){e._lastReportTime=Date.now();}).catch(function(t){je.warn("".concat(e._className,".report failed. networkType:").concat(e.getNetworkType()," error:"),t),e._reportBody.backfill(o),e._reportBody.getLogsNumInMemory()>e.MAX_THRESHOLD&&e._flushAtOnce();});}else this._lastReportTime=Date.now();}}},{key:"_flushAtOnce",value:function value(){var e=this.getModule(zo),t=e.getItem(this.TAG,!1),o=this._reportBody.getLogsInMemory();if(no(t))je.log("".concat(this._className,"._flushAtOnce count:").concat(o.length)),e.setItem(this.TAG,o,!0,!1);else{var n=o.concat(t);n.length>this.MAX_THRESHOLD&&(n=n.slice(0,this.MAX_THRESHOLD)),je.log("".concat(this._className,"._flushAtOnce count:").concat(n.length)),e.setItem(this.TAG,n,!0,!1);}}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._lastReportTime=0,this._report(),this.REPORT_SDKAPPID_BLACKLIST=[],this.REPORT_TINYID_WHITELIST=[];}}]),a;}(mn),ui="none",li="online",di=[_n.OVER_FREQUENCY_LIMIT,_n.OPEN_SERVICE_OVERLOAD_ERROR],pi=function(){function e(t){n(this,e),this._moduleManager=t,this._networkType="",this._className="NetMonitorModule",this.MAX_WAIT_TIME=3e3,this._mpNetworkStatusCallback=null,this._webOnlineCallback=null,this._webOfflineCallback=null;}return s(e,[{key:"start",value:function value(){var e=this;de?(ge.getNetworkType({success:function success(t){e._networkType=t.networkType,t.networkType===ui?je.warn("".concat(e._className,".start no network, please check!")):je.info("".concat(e._className,".start networkType:").concat(t.networkType));}}),this._mpNetworkStatusCallback=this._onNetworkStatusChange.bind(this),ge.onNetworkStatusChange(this._mpNetworkStatusCallback)):(this._networkType=li,this._webOnlineCallback=this._onWebOnline.bind(this),this._webOfflineCallback=this._onWebOffline.bind(this),window&&(window.addEventListener("online",this._webOnlineCallback),window.addEventListener("offline",this._webOfflineCallback)));}},{key:"_onWebOnline",value:function value(){this._onNetworkStatusChange({isConnected:!0,networkType:li});}},{key:"_onWebOffline",value:function value(){this._onNetworkStatusChange({isConnected:!1,networkType:ui});}},{key:"_onNetworkStatusChange",value:function value(e){var t=e.isConnected,o=e.networkType,n=!1;t?(je.info("".concat(this._className,"._onNetworkStatusChange previousNetworkType:").concat(this._networkType," currentNetworkType:").concat(o)),this._networkType!==o&&(n=!0,this._moduleManager.getModule(nn).reConnect(!0))):this._networkType!==o&&(n=!0,je.warn("".concat(this._className,"._onNetworkStatusChange no network, please check!")),this._moduleManager.getModule(nn).offline());n&&(new Os(Ls.NETWORK_CHANGE).setMessage("isConnected:".concat(t," previousNetworkType:").concat(this._networkType," networkType:").concat(o)).end(),this._networkType=o);}},{key:"probe",value:function value(e){var t=this;return!pt(e)&&di.includes(e.code)?Promise.resolve([!0,this._networkType]):new Promise(function(e,o){de?ge.getNetworkType({success:function success(o){t._networkType=o.networkType,o.networkType===ui?(je.warn("".concat(t._className,".probe no network, please check!")),e([!1,o.networkType])):(je.info("".concat(t._className,".probe networkType:").concat(o.networkType)),e([!0,o.networkType]));}}):t._networkType===ui?e([!1,ui]):e([!0,li]);});}},{key:"getNetworkType",value:function value(){return this._networkType;}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),de?null!==this._mpNetworkStatusCallback&&(ge.offNetworkStatusChange&&(ue||re?ge.offNetworkStatusChange(this._mpNetworkStatusCallback):ge.offNetworkStatusChange()),this._mpNetworkStatusCallback=null):window&&(null!==this._webOnlineCallback&&(window.removeEventListener("online",this._webOnlineCallback),this._webOnlineCallback=null),null!==this._onWebOffline&&(window.removeEventListener("offline",this._webOfflineCallback),this._webOfflineCallback=null));}}]),e;}(),gi=R(function(e){var t=Object.prototype.hasOwnProperty,o="~";function n(){}function a(e,t,o){this.fn=e,this.context=t,this.once=o||!1;}function s(e,t,n,s,r){if("function"!=typeof n)throw new TypeError("The listener must be a function");var i=new a(n,s||e,r),c=o?o+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],i]:e._events[c].push(i):(e._events[c]=i,e._eventsCount++),e;}function r(e,t){0==--e._eventsCount?e._events=new n():delete e._events[t];}function i(){this._events=new n(),this._eventsCount=0;}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(o=!1)),i.prototype.eventNames=function(){var e,n,a=[];if(0===this._eventsCount)return a;for(n in e=this._events){t.call(e,n)&&a.push(o?n.slice(1):n);}return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(e)):a;},i.prototype.listeners=function(e){var t=o?o+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var a=0,s=n.length,r=new Array(s);a<s;a++){r[a]=n[a].fn;}return r;},i.prototype.listenerCount=function(e){var t=o?o+e:e,n=this._events[t];return n?n.fn?1:n.length:0;},i.prototype.emit=function(e,t,n,a,s,r){var i=o?o+e:e;if(!this._events[i])return!1;var c,u,l=this._events[i],d=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),d){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,a),!0;case 5:return l.fn.call(l.context,t,n,a,s),!0;case 6:return l.fn.call(l.context,t,n,a,s,r),!0;}for(u=1,c=new Array(d-1);u<d;u++){c[u-1]=arguments[u];}l.fn.apply(l.context,c);}else{var p,g=l.length;for(u=0;u<g;u++){switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),d){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,n);break;case 4:l[u].fn.call(l[u].context,t,n,a);break;default:if(!c)for(p=1,c=new Array(d-1);p<d;p++){c[p-1]=arguments[p];}l[u].fn.apply(l[u].context,c);}}}return!0;},i.prototype.on=function(e,t,o){return s(this,e,t,o,!1);},i.prototype.once=function(e,t,o){return s(this,e,t,o,!0);},i.prototype.removeListener=function(e,t,n,a){var s=o?o+e:e;if(!this._events[s])return this;if(!t)return r(this,s),this;var i=this._events[s];if(i.fn)i.fn!==t||a&&!i.once||n&&i.context!==n||r(this,s);else{for(var c=0,u=[],l=i.length;c<l;c++){(i[c].fn!==t||a&&!i[c].once||n&&i[c].context!==n)&&u.push(i[c]);}u.length?this._events[s]=1===u.length?u[0]:u:r(this,s);}return this;},i.prototype.removeAllListeners=function(e){var t;return e?(t=o?o+e:e,this._events[t]&&r(this,t)):(this._events=new n(),this._eventsCount=0),this;},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=o,i.EventEmitter=i,e.exports=i;}),_i=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="BigDataChannelModule",a.FILETYPE={SOUND:2106,FILE:2107,VIDEO:2113},a._bdh_download_server="grouptalk.c2c.qq.com",a._BDHBizID=10001,a._authKey="",a._expireTime=0,a.getInnerEmitterInstance().on(cr,a._getAuthKey,_(a)),a;}return s(o,[{key:"_getAuthKey",value:function value(){var e=this;this.isIntl()||this.request({protocolName:Cn}).then(function(t){t.data.authKey&&(e._authKey=t.data.authKey,e._expireTime=parseInt(t.data.expireTime));});}},{key:"_isFromOlderVersion",value:function value(e){return!(!e.content||2===e.content.downloadFlag);}},{key:"parseElements",value:function value(e,t){if(!dt(e)||!t)return[];for(var o=[],n=null,a=0;a<e.length;a++){n=e[a],this._needParse(n)?o.push(this._parseElement(n,t)):o.push(e[a]);}return o;}},{key:"_needParse",value:function value(e){return!e.cloudCustomData&&!(!this._isFromOlderVersion(e)||e.type!==N.MSG_AUDIO&&e.type!==N.MSG_FILE&&e.type!==N.MSG_VIDEO);}},{key:"_parseElement",value:function value(e,t){switch(e.type){case N.MSG_AUDIO:return this._parseAudioElement(e,t);case N.MSG_FILE:return this._parseFileElement(e,t);case N.MSG_VIDEO:return this._parseVideoElement(e,t);}}},{key:"_parseAudioElement",value:function value(e,t){return e.content.url=this._genAudioUrl(e.content.uuid,t),e;}},{key:"_parseFileElement",value:function value(e,t){return e.content.url=this._genFileUrl(e.content.uuid,t,e.content.fileName),e;}},{key:"_parseVideoElement",value:function value(e,t){return e.content.url=this._genVideoUrl(e.content.uuid,t),e;}},{key:"_genAudioUrl",value:function value(e,t){if(""===this._authKey)return je.warn("".concat(this._className,"._genAudioUrl no authKey!")),"";var o=this.getModule($o).getSDKAppID();return"https://".concat(this._bdh_download_server,"/asn.com/stddownload_common_file?authkey=").concat(this._authKey,"&bid=").concat(this._BDHBizID,"&subbid=").concat(o,"&fileid=").concat(e,"&filetype=").concat(this.FILETYPE.SOUND,"&openid=").concat(t,"&ver=0");}},{key:"_genFileUrl",value:function value(e,t,o){if(""===this._authKey)return je.warn("".concat(this._className,"._genFileUrl no authKey!")),"";o||(o="".concat(Math.floor(1e5*Math.random()),"-").concat(Date.now()));var n=this.getModule($o).getSDKAppID();return"https://".concat(this._bdh_download_server,"/asn.com/stddownload_common_file?authkey=").concat(this._authKey,"&bid=").concat(this._BDHBizID,"&subbid=").concat(n,"&fileid=").concat(e,"&filetype=").concat(this.FILETYPE.FILE,"&openid=").concat(t,"&ver=0&filename=").concat(encodeURIComponent(o));}},{key:"_genVideoUrl",value:function value(e,t){if(""===this._authKey)return je.warn("".concat(this._className,"._genVideoUrl no authKey!")),"";var o=this.getModule($o).getSDKAppID();return"https://".concat(this._bdh_download_server,"/asn.com/stddownload_common_file?authkey=").concat(this._authKey,"&bid=").concat(this._BDHBizID,"&subbid=").concat(o,"&fileid=").concat(e,"&filetype=").concat(this.FILETYPE.VIDEO,"&openid=").concat(t,"&ver=0");}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._authKey="",this.expireTime=0;}}]),o;}(mn),hi=["requestSnapshotUrl"],fi=function(e){i(a,e);var o=f(a);function a(e){var t;return n(this,a),(t=o.call(this,e))._className="UploadModule",t.TIMUploadPlugin=null,t.timUploadPlugin=null,t.COSSDK=null,t._cosUploadMethod=null,t.expiredTimeLimit=600,t.appid=0,t.bucketName="",t.ciUrl="",t.directory="",t.downloadUrl="",t.uploadUrl="",t.region="ap-shanghai",t.cos=null,t.cosOptions={secretId:"",secretKey:"",sessionToken:"",expiredTime:0},t.uploadFileType="",t.duration=900,t.tryCount=0,t.getInnerEmitterInstance().on(cr,t._init,_(t)),t;}return s(a,[{key:"_init",value:function value(){var e="".concat(this._className,"._init"),t=this.getModule(en);if(this.TIMUploadPlugin=t.getPlugin("tim-upload-plugin"),this.TIMUploadPlugin)this._initUploaderMethod();else{var o=de?"cos-wx-sdk":"cos-js-sdk";this.COSSDK=t.getPlugin(o),this.COSSDK?(this._getAuthorizationKey(),je.warn("".concat(e," v2.9.2起推荐使用 tim-upload-plugin 代替 ").concat(o,"，上传更快更安全。请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin"))):je.warn("".concat(e," ").concat(this._getPluginUndetectedLog()));}}},{key:"_getAuthorizationKey",value:function value(){var e=this,t=new Os(Ls.GET_COS_AUTH_KEY),o=Math.ceil(Date.now()/1e3);this.request({protocolName:Ka,requestData:{duration:this.expiredTimeLimit}}).then(function(n){var a=n.data;je.log("".concat(e._className,"._getAuthorizationKey ok. data:"),a);var s=a.expiredTime-o;t.setMessage("requestId:".concat(a.requestId," requestTime:").concat(o," expiredTime:").concat(a.expiredTime," diff:").concat(s,"s")).setNetworkType(e.getNetworkType()).end(),!de&&a.region&&(e.region=a.region),e.appid=a.appid,e.bucketName=a.bucketName,e.ciUrl=a.ciUrl,e.directory=a.directory,e.downloadUrl=a.downloadUrl,e.uploadUrl=a.uploadUrl,e.cosOptions={secretId:a.secretId,secretKey:a.secretKey,sessionToken:a.sessionToken,expiredTime:a.expiredTime},je.log("".concat(e._className,"._getAuthorizationKey ok. region:").concat(e.region," bucketName:").concat(e.bucketName)),e._initUploaderMethod();}).catch(function(o){e.probeNetwork().then(function(e){var n=m(e,2),a=n[0],s=n[1];t.setError(o,a,s).end();}),je.warn("".concat(e._className,"._getAuthorizationKey failed. error:"),o);});}},{key:"_getCosPreSigUrl",value:function value(e){var t=this,o="".concat(this._className,"._getCosPreSigUrl"),n=Math.ceil(Date.now()/1e3),a=new Os(Ls.GET_COS_PRE_SIG_URL);return this.request({protocolName:Ha,requestData:{fileType:e.fileType,fileName:e.fileName,uploadMethod:e.uploadMethod,duration:e.duration}}).then(function(e){t.tryCount=0;var s=e.data||{},r=s.expiredTime-n;return je.log("".concat(o," ok. data:"),s),a.setMessage("requestId:".concat(s.requestId," expiredTime:").concat(s.expiredTime," diff:").concat(r,"s")).setNetworkType(t.getNetworkType()).end(),s;}).catch(function(n){return-1===n.code&&(n.code=_n.COS_GET_SIG_FAIL),t.probeNetwork().then(function(e){var t=m(e,2),o=t[0],s=t[1];a.setError(n,o,s).end();}),je.warn("".concat(o," failed. error:"),n),t.tryCount<1?(t.tryCount++,t._getCosPreSigUrl(e)):(t.tryCount=0,sr({code:_n.COS_GET_SIG_FAIL}));});}},{key:"_initUploaderMethod",value:function value(){var e=this;if(this.TIMUploadPlugin)return this.timUploadPlugin=new this.TIMUploadPlugin(),void(this._cosUploadMethod=function(t,o){e.timUploadPlugin.uploadFile(t,o);});this.appid&&(this.cos=de?new this.COSSDK({ForcePathStyle:!0,getAuthorization:this._getAuthorization.bind(this)}):new this.COSSDK({getAuthorization:this._getAuthorization.bind(this)}),this._cosUploadMethod=de?function(t,o){e.cos.postObject(t,o);}:function(t,o){e.cos.uploadFiles(t,o);});}},{key:"onCheckTimer",value:function value(e){this.COSSDK&&(this.TIMUploadPlugin||this.isLoggedIn()&&e%60==0&&Math.ceil(Date.now()/1e3)>=this.cosOptions.expiredTime-120&&this._getAuthorizationKey());}},{key:"_getAuthorization",value:function value(e,t){t({TmpSecretId:this.cosOptions.secretId,TmpSecretKey:this.cosOptions.secretKey,XCosSecurityToken:this.cosOptions.sessionToken,ExpiredTime:this.cosOptions.expiredTime});}},{key:"upload",value:function value(e){if(!0===e.getRelayFlag())return Promise.resolve();var t=this.getModule(un);switch(e.type){case N.MSG_IMAGE:return t.addTotalCount(Cs),this._uploadImage(e);case N.MSG_FILE:return t.addTotalCount(Cs),this._uploadFile(e);case N.MSG_AUDIO:return t.addTotalCount(Cs),this._uploadAudio(e);case N.MSG_VIDEO:return t.addTotalCount(Cs),this._uploadVideo(e);default:return Promise.resolve();}}},{key:"_uploadImage",value:function value(e){var o=this,n=this.getModule(qo),a=e.getElements()[0],s=n.getMessageOption(e.clientSequence);return this.doUploadImage({file:s.payload.file,to:s.to,onProgress:function onProgress(e){if(a.updatePercent(e),_t(s.onProgress))try{s.onProgress(e);}catch(t){return sr({code:_n.MESSAGE_ONPROGRESS_FUNCTION_ERROR});}}}).then(function(n){var s=n.location,r=n.fileType,i=n.fileSize,c=n.width,u=n.height,l=o.isPrivateNetWork()?s:At(s);a.updateImageFormat(r);var d=Kt({originUrl:l,originWidth:c,originHeight:u,min:198}),p=Kt({originUrl:l,originWidth:c,originHeight:u,min:720});return a.updateImageInfoArray([{size:i,url:l,width:c,height:u},t({},p),t({},d)]),e;});}},{key:"_uploadFile",value:function value(e){var t=this,o=this.getModule(qo),n=e.getElements()[0],a=o.getMessageOption(e.clientSequence);return this.doUploadFile({file:a.payload.file,to:a.to,onProgress:function onProgress(e){if(n.updatePercent(e),_t(a.onProgress))try{a.onProgress(e);}catch(t){return sr({code:_n.MESSAGE_ONPROGRESS_FUNCTION_ERROR});}}}).then(function(o){var a=o.location,s=t.isPrivateNetWork()?a:At(a);return n.updateFileUrl(s),e;});}},{key:"_uploadAudio",value:function value(e){var t=this,o=this.getModule(qo),n=e.getElements()[0],a=o.getMessageOption(e.clientSequence);return this.doUploadAudio({file:a.payload.file,to:a.to,onProgress:function onProgress(e){if(n.updatePercent(e),_t(a.onProgress))try{a.onProgress(e);}catch(t){return sr({code:_n.MESSAGE_ONPROGRESS_FUNCTION_ERROR});}}}).then(function(o){var a=o.location,s=t.isPrivateNetWork()?a:At(a);return n.updateAudioUrl(s),e;});}},{key:"_uploadVideo",value:function value(e){var t=this,o=this.getModule(qo),n=e.getElements()[0],a=o.getMessageOption(e.clientSequence);return this.doUploadVideo({file:a.payload.file,to:a.to,onProgress:function onProgress(e){if(n.updatePercent(e),_t(a.onProgress))try{a.onProgress(e);}catch(t){return sr({code:_n.MESSAGE_ONPROGRESS_FUNCTION_ERROR});}}}).then(function(o){var a=o.location,s=o.snapshotInfo,r=t.isPrivateNetWork()?a:At(a);return n.updateVideoUrl(r),no(s)||n.updateSnapshotInfo(s),e;});}},{key:"doUploadImage",value:function value(e){var t=this;if(!e.file)return sr({code:_n.MESSAGE_IMAGE_SELECT_FILE_FIRST});var o=this._checkImageType(e.file);if(!0!==o)return o;var n=this._checkImageSize(e.file);if(!0!==n)return n;var a=null;return this._setUploadFileType(_r),this.uploadByCOS(e).then(function(e){return a=e,t.isPrivateNetWork()?qt(e.location):qt("https://".concat(e.location));}).then(function(e){return a.width=e.width,a.height=e.height,Promise.resolve(a);});}},{key:"_checkImageType",value:function value(e){var t="";return t=de?e.url.slice(e.url.lastIndexOf(".")+1):e.files[0].name.slice(e.files[0].name.lastIndexOf(".")+1),pr.indexOf(t.toLowerCase())>=0||sr({code:_n.MESSAGE_IMAGE_TYPES_LIMIT});}},{key:"_checkImageSize",value:function value(e){var t=0;return 0===(t=de?e.size:e.files[0].size)?sr({code:_n.MESSAGE_FILE_IS_EMPTY}):t<20971520||sr({code:_n.MESSAGE_IMAGE_SIZE_LIMIT});}},{key:"doUploadFile",value:function value(e){return e.file?e.file.files[0].size>104857600?sr({code:_n.MESSAGE_FILE_SIZE_LIMIT}):0===e.file.files[0].size?sr({code:_n.MESSAGE_FILE_IS_EMPTY}):(this._setUploadFileType(mr),this.uploadByCOS(e)):sr({code:_n.MESSAGE_FILE_SELECT_FILE_FIRST});}},{key:"doUploadVideo",value:function value(e){return e.file.videoFile.size>104857600?sr({code:_n.MESSAGE_VIDEO_SIZE_LIMIT}):0===e.file.videoFile.size?sr({code:_n.MESSAGE_FILE_IS_EMPTY}):-1===gr.indexOf(e.file.videoFile.type)?sr({code:_n.MESSAGE_VIDEO_TYPES_LIMIT}):(this._setUploadFileType(hr),de?this.handleVideoUpload({file:e.file.videoFile,onProgress:e.onProgress}):pe?this.handleVideoUpload(e):void 0);}},{key:"handleVideoUpload",value:function value(e){var t=this;return new Promise(function(o,n){t.uploadByCOS(e).then(function(e){o(e);}).catch(function(){t.uploadByCOS(e).then(function(e){o(e);}).catch(function(){n(new tr({code:_n.MESSAGE_VIDEO_UPLOAD_FAIL}));});});});}},{key:"doUploadAudio",value:function value(e){return e.file?e.file.size>20971520?sr({code:_n.MESSAGE_AUDIO_SIZE_LIMIT}):0===e.file.size?sr({code:_n.MESSAGE_FILE_IS_EMPTY}):(this._setUploadFileType(fr),this.uploadByCOS(e)):sr({code:_n.MESSAGE_AUDIO_UPLOAD_FAIL});}},{key:"uploadByCOS",value:function value(e){var t=this,o="".concat(this._className,".uploadByCOS");if(!_t(this._cosUploadMethod))return je.warn("".concat(o," ").concat(this._getPluginUndetectedLog())),sr({code:_n.COS_UNDETECTED});if(this.timUploadPlugin)return this._uploadWithPreSigUrl(e);var n=new Os(Ls.UPLOAD),a=Date.now(),s=this._getFile(e);return new Promise(function(r,i){var c=de?t._createCosOptionsWXMiniApp(e):t._createCosOptionsWeb(e),u=t;t._cosUploadMethod(c,function(e,c){var l=Object.create(null);if(c){if(e||dt(c.files)&&c.files[0].error){var d=new tr({code:_n.MESSAGE_FILE_UPLOAD_FAIL});return n.setError(d,!0,t.getNetworkType()).end(),je.log("".concat(o," failed. error:"),c.files[0].error),403===c.files[0].error.statusCode&&(je.warn("".concat(o," failed. cos AccessKeyId was invalid, regain auth key!")),t._getAuthorizationKey()),void i(d);}l.fileName=s.name,l.fileSize=s.size,l.fileType=s.type.slice(s.type.indexOf("/")+1).toLowerCase(),l.location=de?c.Location:c.files[0].data.Location;var p=Date.now()-a,g=u._formatFileSize(s.size),_=u._formatSpeed(1e3*s.size/p),h="size:".concat(g," time:").concat(p,"ms speed:").concat(_);je.log("".concat(o," success. name:").concat(s.name," ").concat(h)),r(l);var f=t.getModule(un);return f.addCost(Cs,p),f.addFileSize(Cs,s.size),void n.setNetworkType(t.getNetworkType()).setMessage(h).end();}var m=new tr({code:_n.MESSAGE_FILE_UPLOAD_FAIL});n.setError(m,!0,u.getNetworkType()).end(),je.warn("".concat(o," failed. error:"),e),403===e.statusCode&&(je.warn("".concat(o," failed. cos AccessKeyId was invalid, regain auth key!")),t._getAuthorizationKey()),i(m);});});}},{key:"_uploadWithPreSigUrl",value:function value(e){var t=this,o="".concat(this._className,"._uploadWithPreSigUrl"),n=this._getFile(e);return this._createCosOptionsPreSigUrl(e).then(function(e){return new Promise(function(a,s){var r=new Os(Ls.UPLOAD),i=e.requestSnapshotUrl,c=void 0===i?void 0:i,u=g(e,hi),l=Date.now();t._cosUploadMethod(u,function(e,i){var u=Object.create(null);if(e||403===i.statusCode)return r.setError(new tr(e),!0,t.getNetworkType()).end(),je.log("".concat(o," failed, error:"),e),void s(new tr({code:_n.MESSAGE_FILE_UPLOAD_FAIL}));var d=i.data.location||"";t.isPrivateNetWork()||0!==d.indexOf("https://")&&0!==d.indexOf("http://")||(d=d.split("//")[1]),u.fileName=n.name,u.fileSize=n.size,u.fileType=n.type.slice(n.type.indexOf("/")+1).toLowerCase(),u.location=d;var p=Date.now()-l,g=t._formatFileSize(n.size),_=t._formatSpeed(1e3*n.size/p),h="size:".concat(g,",time:").concat(p,"ms,speed:").concat(_," res:").concat(JSON.stringify(i.data));je.log("".concat(o," success name:").concat(n.name,",").concat(h)),r.setNetworkType(t.getNetworkType()).setMessage(h).end();var f=t.getModule(un);if(f.addCost(Cs,p),f.addFileSize(Cs,n.size),!no(c))return t._getSnapshotInfoByUrl(c).then(function(e){u.snapshotInfo=e,a(u);});a(u);});});});}},{key:"_getFile",value:function value(e){var t;return dt(e.file.files)||(t=e.file.files,"filelist"===ft(t))?e.file.files[0]:e.file;}},{key:"_formatFileSize",value:function value(e){return e<1024?e+"B":e<1048576?Math.floor(e/1024)+"KB":Math.floor(e/1048576)+"MB";}},{key:"_formatSpeed",value:function value(e){return e<=1048576?Yt(e/1024,1)+"KB/s":Yt(e/1048576,1)+"MB/s";}},{key:"_createCosOptionsWeb",value:function value(e){var t=this._getFile(e),o=t.name,n=o.slice(o.lastIndexOf(".")),a=this._genFileName("".concat(Ct(999999)).concat(n));return{files:[{Bucket:"".concat(this.bucketName,"-").concat(this.appid),Region:this.region,Key:"".concat(this.directory,"/").concat(a),Body:t}],SliceSize:1048576,onProgress:function onProgress(t){if("function"==typeof e.onProgress)try{e.onProgress(t.percent);}catch(o){je.warn("onProgress callback error:",o);}},onFileFinish:function onFileFinish(e,t,o){}};}},{key:"_createCosOptionsWXMiniApp",value:function value(e){var t=this._getFile(e),o=this._genFileName(t.name),n=t.url;return{Bucket:"".concat(this.bucketName,"-").concat(this.appid),Region:this.region,Key:"".concat(this.directory,"/").concat(o),FilePath:n,onProgress:function onProgress(t){if(je.log(JSON.stringify(t)),"function"==typeof e.onProgress)try{e.onProgress(t.percent);}catch(o){je.warn("onProgress callback error:",o);}}};}},{key:"_createCosOptionsPreSigUrl",value:function value(e){var t=this,o="",n="",a=0,s=this._getFile(e);if(de)o=this._genFileName(s.name),n=s.url,a=1;else{var r=s.name,i=r.slice(r.lastIndexOf("."));o=this._genFileName("".concat(Ct(999999)).concat(i)),n=s,a=0;}return this._getCosPreSigUrl({fileType:this.uploadFileType,fileName:o,uploadMethod:a,duration:this.duration}).then(function(a){var s=a.uploadUrl,r=a.downloadUrl,i=a.requestSnapshotUrl,c=void 0===i?void 0:i;return{url:s,fileType:t.uploadFileType,fileName:o,resources:n,downloadUrl:r,requestSnapshotUrl:c,onProgress:function onProgress(t){if("function"==typeof e.onProgress)try{e.onProgress(t.percent);}catch(o){je.warn("onProgress callback error:",o),je.error(o);}}};});}},{key:"_genFileName",value:function value(e){return"".concat(Vt(),"-").concat(e);}},{key:"_setUploadFileType",value:function value(e){this.uploadFileType=e;}},{key:"_getSnapshotInfoByUrl",value:function value(e){var t=this,o=new Os(Ls.GET_SNAPSHOT_INFO);return this.request({protocolName:Wa,requestData:{platform:this.getPlatform(),coverName:this._genFileName(Ct(99999)),requestSnapshotUrl:e}}).then(function(e){var t=(e.data||{}).snapshotUrl;return o.setMessage("snapshotUrl:".concat(t)).end(),no(t)?{}:qt(t).then(function(e){return{snapshotUrl:t,snapshotWidth:e.width,snapshotHeight:e.height};});}).catch(function(e){return je.warn("".concat(t._className,"._getSnapshotInfoByUrl failed. error:"),e),o.setCode(e.errorCode).setMessage(e.errorInfo).end(),{};});}},{key:"_getPluginUndetectedLog",value:function value(){return this.isIntl()?"No upload plugin is detected. SDK can not send image/audio/video/file messages. See https://web.sdk.qcloud.com/im/doc/en/SDK.html#registerPlugin":"未检测到上传插件，SDK 将无法发送图片、音频、视频、文件等类型的消息。请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin";}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset"));}}]),a;}(mn),mi=["downloadKey","pbDownloadKey","messageList"],Mi=function(){function e(t){n(this,e),this._className="MergerMessageHandler",this._messageModule=t;}return s(e,[{key:"uploadMergerMessage",value:function value(e,t){var o=this;je.debug("".concat(this._className,".uploadMergerMessage message:"),e,"messageBytes:".concat(t));var n=e.payload.messageList,a=n.length,s=new Os(Ls.UPLOAD_MERGER_MESSAGE);return this._messageModule.request({protocolName:Qa,requestData:{messageList:n}}).then(function(e){je.debug("".concat(o._className,".uploadMergerMessage ok. response:"),e.data);var n=e.data,r=n.pbDownloadKey,i=n.downloadKey,c={pbDownloadKey:r,downloadKey:i,messageNumber:a};return s.setNetworkType(o._messageModule.getNetworkType()).setMessage("".concat(a,"-").concat(t,"-").concat(i)).end(),c;}).catch(function(e){throw je.warn("".concat(o._className,".uploadMergerMessage failed. error:"),e),o._messageModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];s.setError(e,n,a).end();}),e;});}},{key:"downloadMergerMessage",value:function value(e){var o=this;je.debug("".concat(this._className,".downloadMergerMessage message:"),e);var n=e.payload.downloadKey,a=new Os(Ls.DOWNLOAD_MERGER_MESSAGE);return a.setMessage("downloadKey:".concat(n)),this._messageModule.request({protocolName:Za,requestData:{downloadKey:n}}).then(function(n){if(je.debug("".concat(o._className,".downloadMergerMessage ok. response:"),n.data),_t(e.clearElement)){var s=e.payload,r=(s.downloadKey,s.pbDownloadKey,s.messageList,g(s,mi));e.clearElement(),e.setElement({type:e.type,content:t({messageList:n.data.messageList},r)});}else{var i=[];n.data.messageList.forEach(function(e){if(!no(e)){var t=new Ws(e);i.push(t);}}),e.payload.messageList=i,e.payload.downloadKey="",e.payload.pbDownloadKey="";}return a.setNetworkType(o._messageModule.getNetworkType()).end(),e;}).catch(function(e){throw je.warn("".concat(o._className,".downloadMergerMessage failed. key:").concat(n," error:"),e),o._messageModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0],s=o[1];a.setError(e,n,s).end();}),e;});}},{key:"createMergerMessagePack",value:function value(e,t,o){return e.conversationType===N.CONV_C2C?this._createC2CMergerMessagePack(e,t,o):this._createGroupMergerMessagePack(e,t,o);}},{key:"_createC2CMergerMessagePack",value:function value(e,t,o){var n=null;t&&(t.offlinePushInfo&&(n=t.offlinePushInfo),!0===t.onlineUserOnly&&(n?n.disablePush=!0:n={disablePush:!0}));var a="";ct(e.cloudCustomData)&&e.cloudCustomData.length>0&&(a=e.cloudCustomData);var s=o.pbDownloadKey,r=o.downloadKey,i=o.messageNumber,c=e.payload,u=c.title,l=c.abstractList,d=c.compatibleText,p=this._messageModule.getModule(Bo);return{protocolName:En,tjgID:this._messageModule.generateTjgID(e),requestData:{fromAccount:this._messageModule.getMyUserID(),toAccount:e.to,msgBody:[{msgType:e.type,msgContent:{pbDownloadKey:s,downloadKey:r,title:u,abstractList:l,compatibleText:d,messageNumber:i}}],cloudCustomData:a,clientTime:e.clientTime,msgSeq:e.sequence,msgRandom:e.random,msgLifeTime:p&&p.isOnlineMessage(e,t)?0:void 0,offlinePushInfo:n?{pushFlag:!0===n.disablePush?1:0,title:n.title||"",desc:n.description||"",ext:n.extension||"",apnsInfo:{badgeMode:!0===n.ignoreIOSBadge?1:0},androidInfo:{OPPOChannelID:n.androidOPPOChannelID||""}}:void 0}};}},{key:"_createGroupMergerMessagePack",value:function value(e,t,o){var n=null;t&&t.offlinePushInfo&&(n=t.offlinePushInfo);var a="";ct(e.cloudCustomData)&&e.cloudCustomData.length>0&&(a=e.cloudCustomData);var s=o.pbDownloadKey,r=o.downloadKey,i=o.messageNumber,c=e.payload,u=c.title,l=c.abstractList,d=c.compatibleText,p=this._messageModule.getModule(Ko);return{protocolName:Sn,tjgID:this._messageModule.generateTjgID(e),requestData:{fromAccount:this._messageModule.getMyUserID(),groupID:e.to,msgBody:[{msgType:e.type,msgContent:{pbDownloadKey:s,downloadKey:r,title:u,abstractList:l,compatibleText:d,messageNumber:i}}],random:e.random,priority:e.priority,clientSequence:e.clientSequence,groupAtInfo:void 0,cloudCustomData:a,onlineOnlyFlag:p&&p.isOnlineMessage(e,t)?1:0,offlinePushInfo:n?{pushFlag:!0===n.disablePush?1:0,title:n.title||"",desc:n.description||"",ext:n.extension||"",apnsInfo:{badgeMode:!0===n.ignoreIOSBadge?1:0},androidInfo:{OPPOChannelID:n.androidOPPOChannelID||""}}:void 0,clientTime:e.clientTime,needReadReceipt:!0!==e.needReadReceipt||p.isMessageFromOrToAVChatroom(e.to)?0:1}};}}]),e;}(),vi={ERR_SVR_COMM_SENSITIVE_TEXT:80001,ERR_SVR_COMM_BODY_SIZE_LIMIT:80002,OPEN_SERVICE_OVERLOAD_ERROR:60022,ERR_SVR_MSG_PKG_PARSE_FAILED:20001,ERR_SVR_MSG_INTERNAL_AUTH_FAILED:20002,ERR_SVR_MSG_INVALID_ID:20003,ERR_SVR_MSG_PUSH_DENY:20006,ERR_SVR_MSG_IN_PEER_BLACKLIST:20007,ERR_SVR_MSG_BOTH_NOT_FRIEND:20009,ERR_SVR_MSG_NOT_PEER_FRIEND:20010,ERR_SVR_MSG_NOT_SELF_FRIEND:20011,ERR_SVR_MSG_SHUTUP_DENY:20012,ERR_SVR_GROUP_INVALID_PARAMETERS:10004,ERR_SVR_GROUP_PERMISSION_DENY:10007,ERR_SVR_GROUP_NOT_FOUND:10010,ERR_SVR_GROUP_INVALID_GROUPID:10015,ERR_SVR_GROUP_REJECT_FROM_THIRDPARTY:10016,ERR_SVR_GROUP_SHUTUP_DENY:10017,MESSAGE_SEND_FAIL:2100,OVER_FREQUENCY_LIMIT:2996},yi=[_n.MESSAGE_ONPROGRESS_FUNCTION_ERROR,_n.MESSAGE_IMAGE_SELECT_FILE_FIRST,_n.MESSAGE_IMAGE_TYPES_LIMIT,_n.MESSAGE_FILE_IS_EMPTY,_n.MESSAGE_IMAGE_SIZE_LIMIT,_n.MESSAGE_FILE_SELECT_FILE_FIRST,_n.MESSAGE_FILE_SIZE_LIMIT,_n.MESSAGE_VIDEO_SIZE_LIMIT,_n.MESSAGE_VIDEO_TYPES_LIMIT,_n.MESSAGE_AUDIO_UPLOAD_FAIL,_n.MESSAGE_AUDIO_SIZE_LIMIT,_n.COS_UNDETECTED];var Ii=function(e){i(a,e);var o=f(a);function a(e){var t;return n(this,a),(t=o.call(this,e))._className="MessageModule",t._messageOptionsMap=new Map(),t._mergerMessageHandler=new Mi(_(t)),t;}return s(a,[{key:"createTextMessage",value:function value(e){var t=this.getMyUserID();e.currentUser=t,e.senderTinyID=this.getMyTinyID();var o=new $s(e),n="string"==typeof e.payload?e.payload:e.payload.text,a=new Gs({text:n}),s=this._getNickAndAvatarByUserID(t);return o.setElement(a),o.setNickAndAvatar(s),o.setNameCard(this._getNameCardByGroupID(o)),o;}},{key:"_fileUnsupportedWarning",value:function value(e){this.isIntl()||je.warn("小程序环境下调用 ".concat(e," 接口时，payload.file 不支持传入 File 对象"));}},{key:"createImageMessage",value:function value(e){var t=this.getMyUserID();e.currentUser=t,e.senderTinyID=this.getMyTinyID();var o=new $s(e);if(de){var n=e.payload.file;if(rt(n))return void this._fileUnsupportedWarning("createImageMessage");var a=n.tempFiles[0].path||n.tempFiles[0].tempFilePath,s={url:a,name:a.slice(a.lastIndexOf("/")+1),size:n.tempFiles&&n.tempFiles[0].size||1,type:a.slice(a.lastIndexOf(".")+1).toLowerCase()};e.payload.file=s;}else if(pe)if(rt(e.payload.file)){var r=e.payload.file;e.payload.file={files:[r]};}else if(lt(e.payload.file)&&"undefined"!=typeof uni){var i=e.payload.file.tempFiles[0];e.payload.file={files:[i]};}var c=new Ps({imageFormat:$e.UNKNOWN,uuid:this._generateUUID(),file:e.payload.file}),u=this._getNickAndAvatarByUserID(t);return o.setElement(c),o.setNickAndAvatar(u),o.setNameCard(this._getNameCardByGroupID(o)),this._messageOptionsMap.set(o.clientSequence,e),o;}},{key:"createAudioMessage",value:function value(e){var t=e.payload.file;if(de){var o={url:t.tempFilePath,name:t.tempFilePath.slice(t.tempFilePath.lastIndexOf("/")+1),size:t.fileSize,second:parseInt(t.duration)/1e3,type:t.tempFilePath.slice(t.tempFilePath.lastIndexOf(".")+1).toLowerCase()};e.payload.file=o;}var n=this.getMyUserID();e.currentUser=n,e.senderTinyID=this.getMyTinyID();var a=new $s(e),s=new bs({second:Math.floor(t.duration/1e3),size:t.fileSize||t.size,url:t.tempFilePath,uuid:this._generateUUID()}),r=this._getNickAndAvatarByUserID(n);return a.setElement(s),a.setNickAndAvatar(r),a.setNameCard(this._getNameCardByGroupID(a)),this._messageOptionsMap.set(a.clientSequence,e),a;}},{key:"createVideoMessage",value:function value(e){var t=this.getMyUserID();e.currentUser=t,e.senderTinyID=this.getMyTinyID(),e.payload.file.thumbUrl="https://web.sdk.qcloud.com/im/assets/images/transparent.png",e.payload.file.thumbSize=1668;var o={};if(de){if(ce)return void je.warn("createVideoMessage 不支持在支付宝小程序环境下使用");if(rt(e.payload.file))return void this._fileUnsupportedWarning("createVideoMessage");var n=e.payload.file;dt(n.tempFiles)&&(n=n.tempFiles[0]),o.url=n.tempFilePath,o.name=n.tempFilePath.slice(n.tempFilePath.lastIndexOf("/")+1),o.size=n.size,o.second=n.duration,o.type=n.tempFilePath.slice(n.tempFilePath.lastIndexOf(".")+1).toLowerCase();}else if(pe){if(rt(e.payload.file)){var a=e.payload.file;e.payload.file.files=[a];}else if(lt(e.payload.file)&&"undefined"!=typeof uni){var s=e.payload.file.tempFile;e.payload.file.files=[s];}var r=e.payload.file;o.url=window.URL.createObjectURL(r.files[0]),o.name=r.files[0].name,o.size=r.files[0].size,o.second=r.files[0].duration||0,o.type=r.files[0].type.split("/")[1];}e.payload.file.videoFile=o;var i=new $s(e),c=new Ks({videoFormat:o.type,videoSecond:Yt(o.second,0),videoSize:o.size,remoteVideoUrl:"",videoUrl:o.url,videoUUID:this._generateUUID(),thumbUUID:this._generateUUID(),thumbWidth:e.payload.file.width||200,thumbHeight:e.payload.file.height||200,thumbUrl:e.payload.file.thumbUrl,thumbSize:e.payload.file.thumbSize,thumbFormat:e.payload.file.thumbUrl.slice(e.payload.file.thumbUrl.lastIndexOf(".")+1).toLowerCase()}),u=this._getNickAndAvatarByUserID(t);return i.setElement(c),i.setNickAndAvatar(u),i.setNameCard(this._getNameCardByGroupID(i)),this._messageOptionsMap.set(i.clientSequence,e),i;}},{key:"createCustomMessage",value:function value(e){var t=this.getMyUserID();e.currentUser=t,e.senderTinyID=this.getMyTinyID();var o=new $s(e),n=new Bs({data:e.payload.data,description:e.payload.description,extension:e.payload.extension}),a=this._getNickAndAvatarByUserID(t);return o.setElement(n),o.setNickAndAvatar(a),o.setNameCard(this._getNameCardByGroupID(o)),o;}},{key:"createFaceMessage",value:function value(e){var t=this.getMyUserID();e.currentUser=t,e.senderTinyID=this.getMyTinyID();var o=new $s(e),n=new Us(e.payload),a=this._getNickAndAvatarByUserID(t);return o.setElement(n),o.setNickAndAvatar(a),o.setNameCard(this._getNameCardByGroupID(o)),o;}},{key:"createMergerMessage",value:function value(e){var t=this.getMyUserID();e.currentUser=t,e.senderTinyID=this.getMyTinyID();var o=this._getNickAndAvatarByUserID(t),n=new $s(e),a=new Ys(e.payload);return n.setElement(a),n.setNickAndAvatar(o),n.setNameCard(this._getNameCardByGroupID(n)),n.setRelayFlag(!0),n;}},{key:"createForwardMessage",value:function value(e){var t=e.to,o=e.conversationType,n=e.priority,a=e.payload,s=e.needReadReceipt,r=e.receiverList,i=this.getMyUserID(),c=this._getNickAndAvatarByUserID(i);if(a.type===N.MSG_GRP_TIP)return sr({code:_n.MESSAGE_FORWARD_TYPE_INVALID});var u={to:t,conversationType:o,conversationID:"".concat(o).concat(t),priority:n,isPlaceMessage:0,status:io.UNSEND,currentUser:i,senderTinyID:this.getMyTinyID(),cloudCustomData:e.cloudCustomData||a.cloudCustomData||"",needReadReceipt:s,receiverList:r,isSupportExtension:e.isSupportExtension||!1},l=new $s(u);return l.setElement(a.getElements()[0]),l.setNickAndAvatar(c),l.setNameCard(this._getNameCardByGroupID(a)),l.setRelayFlag(!0),l;}},{key:"downloadMergerMessage",value:function value(e){return this._mergerMessageHandler.downloadMergerMessage(e);}},{key:"createFileMessage",value:function value(e){if(de){var o,n="createFileMessage 接口不可用！";if(!ae&&!se&&!ue)return void je.warn("小程序目前不支持选择文件，".concat(n));var a=ge.getSystemInfoSync().SDKVersion;if(ae&&Bt(a,o="2.5.0")<0)return void je.warn("wx.chooseMessageFile 需要基础库".concat(o,"或更高版本，").concat(n));if(se&&Bt(a,o="1.18.0")<0)return void je.warn("qq.chooseMessageFile 需要基础库".concat(o,"或更高版本，").concat(n));}if(pe||ue){if(rt(e.payload.file)){var s=e.payload.file;e.payload.file={files:[s]};}else if(lt(e.payload.file)&&"undefined"!=typeof uni){var r=e.payload.file,i=r.tempFiles,c=r.files,u=null;dt(i)?u=i[0]:dt(c)&&(u=c[0]),e.payload.file={files:[u]};}}else if(ae||se){var l=e.payload.file.tempFiles,d=t(t({},l[0]),{},{url:l[0].path});e.payload.file={files:[d]};}var p=this.getMyUserID();e.currentUser=p,e.senderTinyID=this.getMyTinyID();var g=new $s(e),_=new xs({uuid:this._generateUUID(),file:e.payload.file}),h=this._getNickAndAvatarByUserID(p);return g.setElement(_),g.setNickAndAvatar(h),g.setNameCard(this._getNameCardByGroupID(g)),this._messageOptionsMap.set(g.clientSequence,e),g;}},{key:"createLocationMessage",value:function value(e){var t=this.getMyUserID();e.currentUser=t,e.senderTinyID=this.getMyTinyID();var o=new $s(e),n=new Hs(e.payload),a=this._getNickAndAvatarByUserID(t);return o.setElement(n),o.setNickAndAvatar(a),o.setNameCard(this._getNameCardByGroupID(o)),o;}},{key:"_onCannotFindModule",value:function value(){return sr({code:_n.CANNOT_FIND_MODULE});}},{key:"sendMessageInstance",value:function value(e,t){var o=this;if(!1===this.getModule(pn).filterMessage(e))return this._onSendMessageFailed(e,new tr({code:_n.PROFANITY_FOUND}));var n,a=null;switch(e.conversationType){case N.CONV_C2C:if(!(a=this.getModule(Bo)))return this._onCannotFindModule();break;case N.CONV_GROUP:if(!(a=this.getModule(Ko)))return this._onCannotFindModule();if(Gt({groupID:e.to})){var s=a.getLocalGroupProfile(e.to);if(s&&s.isSupportTopic)return sr({code:_n.MESSAGE_SEND_GROUP_WITH_TOPIC_FAIL});}break;default:return sr({code:_n.MESSAGE_SEND_INVALID_CONVERSATION_TYPE});}var r=this.getModule(Zo),i=this.getModule(Ko);return r.upload(e).then(function(){o._getSendMessageSpecifiedKey(e)===Ts&&o.getModule(un).addSuccessCount(Cs);return i.guardForAVChatRoom(e).then(function(){if(!e.isSendable())return sr({code:_n.MESSAGE_FILE_URL_IS_EMPTY});o._addSendMessageTotalCount(e),n=Date.now();var s=function(e){var t="utf-8";pe&&document&&(t=document.charset.toLowerCase());var o,n,a=0;if(n=e.length,"utf-8"===t||"utf8"===t)for(var s=0;s<n;s++){(o=e.codePointAt(s))<=127?a+=1:o<=2047?a+=2:o<=65535?a+=3:(a+=4,s++);}else if("utf-16"===t||"utf16"===t)for(var r=0;r<n;r++){(o=e.codePointAt(r))<=65535?a+=2:(a+=4,r++);}else a=e.replace(/[^\x00-\xff]/g,"aa").length;return a;}(JSON.stringify(e));return e.type===N.MSG_MERGER&&s>7e3?o._mergerMessageHandler.uploadMergerMessage(e,s).then(function(n){var a=o._mergerMessageHandler.createMergerMessagePack(e,t,n);return o.request(a);}):(o.getModule(jo).setMessageRandom(e),e.conversationType===N.CONV_C2C||e.conversationType===N.CONV_GROUP?a.sendMessage(e,t):void 0);}).then(function(s){var r=s.data,i=r.time,c=r.sequence,u=r.readReceiptCode;it(u)&&0!==u&&(new Os(Ls.SEND_MESSAGE_WITH_RECEIPT).setMessage("from:".concat(e.from," to:").concat(e.to," sequence:").concat(c," readReceiptCode:").concat(u)).end(),je.warn("".concat(o._className,".sendMessageInstance readReceiptCode:").concat(u," message:").concat(er[u])));o._addSendMessageSuccessCount(e,n),o._messageOptionsMap.delete(e.clientSequence);var l=o.getModule(jo);e.status=io.SUCCESS,e.time=i;var d=!1;if(e.conversationType===N.CONV_GROUP)e.sequence=c;else if(e.conversationType===N.CONV_C2C){var p=l.getLatestMessageSentByMe(e.conversationID);if(p){var g=p.nick,_=p.avatar;g===e.nick&&_===e.avatar||(d=!0);}}if(d&&l.modifyMessageSentByMe({conversationID:e.conversationID,latestNick:e.nick,latestAvatar:e.avatar}),a.isOnlineMessage(e,t))e._onlineOnlyFlag=!0;else{l.appendToMessageList(e);var h=e;lt(t)&&lt(t.messageControlInfo)&&(!0===t.messageControlInfo.excludedFromLastMessage&&(e._isExcludedFromLastMessage=!0,h=""),!0===t.messageControlInfo.excludedFromUnreadCount&&(e._isExcludedFromUnreadCount=!0));var f=e.conversationType;if(Pt(e.to))f=N.CONV_TOPIC,o.getModule(Yo).onMessageSent({groupID:zt(e.to),topicID:e.to,lastMessage:h});l.onMessageSent({conversationOptionsList:[{conversationID:e.conversationID,unreadCount:0,type:f,subType:e.conversationSubType,lastMessage:h}]});}return e.getRelayFlag()||"TIMImageElem"!==e.type||Ht(e.payload.imageInfoArray),zs({message:e});});}).catch(function(t){return o._onSendMessageFailed(e,t);});}},{key:"_onSendMessageFailed",value:function value(e,t){e.status=io.FAIL,this.getModule(jo).deleteMessageRandom(e),this._addSendMessageFailCountOnUser(e,t);var o=new Os(Ls.SEND_MESSAGE);return o.setMessage("tjg_id:".concat(this.generateTjgID(e)," type:").concat(e.type," from:").concat(e.from," to:").concat(e.to)),this.probeNetwork().then(function(e){var n=m(e,2),a=n[0],s=n[1];o.setError(t,a,s).end();}),je.error("".concat(this._className,"._onSendMessageFailed error:"),t),sr(new tr({code:t&&t.code?t.code:_n.MESSAGE_SEND_FAIL,message:t&&t.message?t.message:void 0,data:{message:e}}));}},{key:"_getSendMessageSpecifiedKey",value:function value(e){if([N.MSG_IMAGE,N.MSG_AUDIO,N.MSG_VIDEO,N.MSG_FILE].includes(e.type))return Ts;if(e.conversationType===N.CONV_C2C)return vs;if(e.conversationType===N.CONV_GROUP){var t=this.getModule(Ko).getLocalGroupProfile(e.to);if(!t)return;var o=t.type;return Lt(o)?Is:ys;}}},{key:"_addSendMessageTotalCount",value:function value(e){var t=this._getSendMessageSpecifiedKey(e);t&&this.getModule(un).addTotalCount(t);}},{key:"_addSendMessageSuccessCount",value:function value(e,t){var o=Math.abs(Date.now()-t),n=this._getSendMessageSpecifiedKey(e);if(n){var a=this.getModule(un);a.addSuccessCount(n),a.addCost(n,o);}}},{key:"_addSendMessageFailCountOnUser",value:function value(e,t){var o,n,a=t.code,s=void 0===a?-1:a,r=this.getModule(un),i=this._getSendMessageSpecifiedKey(e);i===Ts&&(o=s,n=!1,yi.includes(o)&&(n=!0),n)?r.addFailedCountOfUserSide(Cs):function(e){var t=!1;return Object.values(vi).includes(e)&&(t=!0),(e>=120001&&e<=13e4||e>=10100&&e<=10200)&&(t=!0),t;}(s)&&i&&r.addFailedCountOfUserSide(i);}},{key:"resendMessage",value:function value(e){return e.isResend=!0,e.status=io.UNSEND,this.sendMessageInstance(e);}},{key:"revokeMessage",value:function value(e){var t=this,o=null;if(e.conversationType===N.CONV_C2C){if(!(o=this.getModule(Bo)))return this._onCannotFindModule();}else if(e.conversationType===N.CONV_GROUP&&!(o=this.getModule(Ko)))return this._onCannotFindModule();var n=new Os(Ls.REVOKE_MESSAGE);return n.setMessage("tjg_id:".concat(this.generateTjgID(e)," type:").concat(e.type," from:").concat(e.from," to:").concat(e.to)),o.revokeMessage(e).then(function(o){var a=o.data.recallRetList;if(!no(a)&&0!==a[0].retCode){var s=new tr({code:a[0].retCode,data:{message:e}});return n.setCode(s.code).setMoreMessage(s.message).end(),sr(s);}return je.info("".concat(t._className,".revokeMessage ok. ID:").concat(e.ID)),e.isRevoked=!0,n.end(),t.getModule(jo).onMessageRevoked([e]),zs({message:e});}).catch(function(o){t.probeNetwork().then(function(e){var t=m(e,2),a=t[0],s=t[1];n.setError(o,a,s).end();});var a=new tr({code:o&&o.code?o.code:_n.MESSAGE_REVOKE_FAIL,message:o&&o.message?o.message:void 0,data:{message:e}});return je.warn("".concat(t._className,".revokeMessage failed. error:"),o),sr(a);});}},{key:"deleteMessage",value:function value(e){var t=this,o=null,n=e[0],a=n.conversationID,s="",r=[],i=[];if(n.conversationType===N.CONV_C2C)o=this.getModule(Bo),s=a.replace(N.CONV_C2C,""),e.forEach(function(e){e&&e.status===io.SUCCESS&&e.conversationID===a&&(e._onlineOnlyFlag||r.push("".concat(e.sequence,"_").concat(e.random,"_").concat(e.time)),i.push(e));});else if(n.conversationType===N.CONV_GROUP)o=this.getModule(Ko),s=a.replace(N.CONV_GROUP,""),e.forEach(function(e){e&&e.status===io.SUCCESS&&e.conversationID===a&&(e._onlineOnlyFlag||r.push("".concat(e.sequence)),i.push(e));});else if(n.conversationType===N.CONV_SYSTEM)return sr({code:_n.CANNOT_DELETE_GROUP_SYSTEM_NOTICE});if(!o)return this._onCannotFindModule();if(0===r.length)return this._onMessageDeleted(i);r.length>30&&(r=r.slice(0,30),i=i.slice(0,30));var c=new Os(Ls.DELETE_MESSAGE);return c.setMessage("to:".concat(s," count:").concat(r.length)),o.deleteMessage({to:s,keyList:r}).then(function(e){return c.end(),je.info("".concat(t._className,".deleteMessage ok")),t._onMessageDeleted(i);}).catch(function(e){t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];c.setError(e,n,a).end();}),je.warn("".concat(t._className,".deleteMessage failed. error:"),e);var o=new tr({code:e&&e.code?e.code:_n.MESSAGE_DELETE_FAIL,message:e&&e.message?e.message:void 0});return sr(o);});}},{key:"_onMessageDeleted",value:function value(e){return this.getModule(jo).onMessageDeleted(e),ar({messageList:e});}},{key:"modifyRemoteMessage",value:function value(e){var t=this,o=null,n=e.conversationType,a=e.to;if(this.getModule(Ko).isMessageFromOrToAVChatroom(a))return sr({code:_n.MESSAGE_MODIFY_DISABLED_IN_AVCHATROOM,data:{message:e}});if(!1===this.getModule(pn).filterMessage(e))return sr({code:_n.PROFANITY_FOUND,data:{message:e}});n===N.CONV_C2C?o=this.getModule(Bo):n===N.CONV_GROUP&&(o=this.getModule(Ko));var s=new Os(Ls.MODIFY_MESSAGE);return s.setMessage("to:".concat(a)),o.modifyRemoteMessage(e).then(function(o){s.end(),je.info("".concat(t._className,".modifyRemoteMessage ok"));var n=t._onModifyRemoteMessageResp(e,o.data);return zs({message:n});}).catch(function(o){if(s.setCode(o.code).setMoreMessage(o.message).end(),je.warn("".concat(t._className,".modifyRemoteMessage failed. error:"),o),20027===o.code){var n=t._onModifyRemoteMessageResp(e,o.data);return sr({code:_n.MESSAGE_MODIFY_CONFLICT,data:{message:n}});}return sr({code:o.code,message:o.message,data:{message:e}});});}},{key:"_onModifyRemoteMessageResp",value:function value(e,t){je.debug("".concat(this._className,"._onModifyRemoteMessageResp options:"),t);var o=e.conversationType,n=e.from,a=e.to,s=e.random,r=e.sequence,i=e.time,c=t.elements,u=t.messageVersion,l=t.cloudCustomData,d=void 0===l?"":l;return this.getModule(jo).onMessageModified({conversationType:o,from:n,to:a,time:i,random:s,sequence:r,elements:c,cloudCustomData:d,messageVersion:u});}},{key:"_generateUUID",value:function value(){var e=this.getModule($o);return"".concat(e.getSDKAppID(),"-").concat(e.getUserID(),"-").concat(function(){for(var e="",t=32;t>0;--t){e+=Et[Math.floor(Math.random()*St)];}return e;}());}},{key:"getMessageOption",value:function value(e){return this._messageOptionsMap.get(e);}},{key:"_getNickAndAvatarByUserID",value:function value(e){return this.getModule(xo).getNickAndAvatarByUserID(e);}},{key:"_getNameCardByGroupID",value:function value(e){if(e.conversationType===N.CONV_GROUP){var t=this.getModule(Ko);if(t)return t.getMyNameCardByGroupID(e.to);}return"";}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._messageOptionsMap.clear();}}]),a;}(mn),Ti=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="MessageExtensionModule",a.messageExtensionMap=new Map(),a.globalSeqMap=new Map(),a.getMessageExtensionsMap=new Map(),a;}return s(o,[{key:"onMessageExtensionNotify",value:function value(e){var t=this,o=e.dataList,n=o.messageInfo,a=o.operateType,s=o.operateResultList,r=o.tinyID,i=o.globalSequence,c=n.clientTime,u=n.random,l="".concat(r,"-").concat(c,"-").concat(u),d=[],p=[];je.log("".concat(this._className,".onMessageExtensionNotify messageID:").concat(l," operateType:").concat(a," globalSequence:").concat(i)),this._updateGlobalSequence(l,i);var g=!1,_=!1;s.forEach(function(e){var o=e.extensions,n=void 0===o?[]:o,s=e.clearSequence;if(1===a)g=!0,n.forEach(function(e){d.push({key:e.key,value:e.value});}),t._updateLocalExtension(l,n);else if(2===a)_=!0,n.forEach(function(e){p.push(e.key);}),t._updateLocalExtension(l,n);else if(3===a){if(_=!0,t._hasLocalExtension(l))t._getLocalExtension(l).forEach(function(e,t){e.seq<=s&&p.push(t);});t._clearLocalExtension(l,s);}}),g&&this.emitOuterEvent(D.MESSAGE_EXTENSIONS_UPDATED,{messageID:l,extensions:d}),_&&this.emitOuterEvent(D.MESSAGE_EXTENSIONS_DELETED,{messageID:l,keyList:p});}},{key:"setMessageExtensions",value:function value(e,t){var o=this;if(!this.canIUse(Y.MSG_EXT))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var n="".concat(this._className,".setMessageExtensions"),a=e.ID,s=e.conversationID,r=e.sequence,i=e.time,c=M(t);t.length>20&&(c=t.slice(0,20),je.warn("".concat(n,". the length of extensions cannot exceed 20.")));var u="conversationID:".concat(s," messageID:").concat(a," sequence:").concat(r," time:").concat(i," count:").concat(c.length),l=new Os(Ls.SET_MESSAGE_EXTENSIONS);return l.setMessage(u),je.log("".concat(n," ").concat(u)),this._modifyMessageExtensions(e,c).then(function(e){var t=e.resultList,o=e.successCount,a=e.failureCount,s="success count:".concat(o," fail count:").concat(a);return l.setMoreMessage(s).end(),je.log("".concat(n," ok. ").concat(s)),zs({extensions:t});}).catch(function(e){return o.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];l.setError(e,n,a).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"getMessageExtensions",value:function value(e){var t=this;if(!this.canIUse(Y.MSG_EXT))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var o="".concat(this._className,".getMessageExtensions"),n=e.ID,a=e.conversationID,s=e.sequence,r=e.time,i="conversationID:".concat(a," messageID:").concat(n," sequence:").concat(s," time:").concat(r),c=new Os(Ls.GET_MESSAGE_EXTENSIONS);c.setMessage(i),je.log("".concat(o," ").concat(i));var u=void 0;return this.getMessageExtensionsMap.has(n)&&(u=this._getGlobalSequence(n)),this._getMessageExtensions(e,u).then(function(e){return c.end(),je.log("".concat(o," ok. total count:").concat(e.length)),pt(u)&&e.length>0&&t.getMessageExtensionsMap.set(n,1),zs({extensions:e});}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];c.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"deleteMessageExtensions",value:function value(e,t){var o=this;if(!this.canIUse(Y.MSG_EXT))return sr({code:_n.CANNOT_USE_COMMERCIAL_ABILITY});var n="".concat(this._className,".deleteMessageExtensions"),a=[],s=3;no(t)||(s=2,t.forEach(function(e){a.push({key:e,value:"",seq:0});}));var r=e.ID,i=e.conversationID,c=e.sequence,u=e.time,l="conversationID:".concat(i," messageID:").concat(r," sequence:").concat(c," time:").concat(u," operateType:").concat(s),d=new Os(Ls.DELETE_MESSAGE_EXTENSIONS);return d.setMessage(l),je.log("".concat(n," ").concat(l)),this._modifyMessageExtensions(e,a,s).then(function(e){var t=e.resultList,o=e.successCount,a=e.failureCount,r="";return 2===s&&(r="success count:".concat(o," fail count:").concat(a)),d.setMoreMessage("".concat(r)).end(),je.log("".concat(n," ok. ").concat(r)),zs({extensions:t});}).catch(function(e){return o.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];d.setError(e,n,a).end();}),je.error("".concat(n," failed. error:"),e),sr(e);});}},{key:"_modifyMessageExtensions",value:function value(e,t){var o=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=e.conversationType,s=void 0;3!==n&&(s=this._getRequestExtensions(e,t));var r=null;switch(a){case N.CONV_C2C:r=this.getModule(Bo);break;case N.CONV_GROUP:r=this.getModule(Ko);break;default:return sr({code:_n.CANNOT_FIND_MODULE});}return r.modifyMessageExtensions(e,s,n).then(function(t){var n=t.data,a=n.extensions,s=n.seq,r=[],i=0,c=0,u=[];return(a=no(a)?[]:a).forEach(function(e){var t=e.errorCode,o=e.extension,n=o.key,a=o.value,s=o.seq;r.push({code:t,key:n,value:a}),0===t?i++:c++,u.push({key:n,value:a,seq:s});}),o._updateGlobalSequence(e.ID,s),u.length>0&&(o._updateLocalExtension(e.ID,u),u=null),{resultList:r,successCount:i,failureCount:c};}).catch(function(e){return sr(e);});}},{key:"_getRequestExtensions",value:function value(e,t){var o=[];if(this._hasLocalExtension(e.ID)){var n=this._getLocalExtension(e.ID);return t.forEach(function(e){var t=e.key,a=e.value,s=0;n.has(t)&&(s=n.get(t).seq),o.push({key:t,value:a,seq:s});}),o;}return t.forEach(function(e){var t=e.key,n=e.value;o.push({key:t,value:n,seq:0});}),o;}},{key:"_getMessageExtensions",value:function value(e,t){var o=this,n="".concat(this._className,"._getMessageExtensions"),a=e.ID,s=null;switch(e.conversationType){case N.CONV_C2C:s=this.getModule(Bo);break;case N.CONV_GROUP:s=this.getModule(Ko);break;default:return sr({code:_n.CANNOT_FIND_MODULE});}return s.getMessageExtensions(e,t).then(function(t){var s=t.data,r=s.extensions,i=s.completeFlag,c=s.globalSequence,u=s.clearSequence;if(r=no(r)?[]:r,je.log("".concat(n," ok. completeFlag:").concat(i," globalSequence:").concat(c," clearSequence:").concat(u," count:").concat(r.length)),o._updateLocalExtension(a,r),o._clearLocalExtension(a,u),o._updateGlobalSequence(a,c),1!==i){var l=r.slice(-1)[0].seq+1;return o._getMessageExtensions(e,l);}return o._getLocalExtensions(a);}).catch(function(e){return sr(e);});}},{key:"_hasLocalExtension",value:function value(e){return this.messageExtensionMap.has(e);}},{key:"_getLocalExtension",value:function value(e){return this.messageExtensionMap.get(e);}},{key:"_updateLocalExtension",value:function value(e,t){this._hasLocalExtension(e)||this.messageExtensionMap.set(e,new Map());var o=this._getLocalExtension(e);t.forEach(function(e){var t=e.key,n=e.value,a=void 0===n?"":n,s=e.seq;o.set(t,{value:a,seq:s});});}},{key:"_clearLocalExtension",value:function value(e,t){if(!(t<=0)&&this._hasLocalExtension(e)){var o=this._getLocalExtension(e);o.forEach(function(e,n){e.seq<=t&&o.delete(n);});}}},{key:"_getLocalExtensions",value:function value(e){var t=[];this._hasLocalExtension(e)&&this._getLocalExtension(e).forEach(function(e,o){var n=e.value;no(n)||t.push({key:o,value:n});});return t;}},{key:"_getGlobalSequence",value:function value(e){return this.globalSeqMap.get(e);}},{key:"_updateGlobalSequence",value:function value(e,t){this.globalSeqMap.set(e,t);}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this.messageExtensionMap.clear(),this.globalSeqMap.clear(),this.getMessageExtensionsMap.clear();}}]),o;}(mn),Ci=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="PluginModule",a.plugins={},a;}return s(o,[{key:"registerPlugin",value:function value(e){var t=this;Object.keys(e).forEach(function(o){t.plugins[o]=e[o];}),new Os(Ls.REGISTER_PLUGIN).setMessage("".concat(Object.keys(e))).end();}},{key:"getPlugin",value:function value(e){return this.plugins[e];}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset"));}}]),o;}(mn),Ei=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="SyncUnreadMessageModule",a._cookie="",a._onlineSyncFlag=!1,a.getInnerEmitterInstance().on(cr,a._onLoginSuccess,_(a)),a;}return s(o,[{key:"_onLoginSuccess",value:function value(e){this._startSync({cookie:this._cookie,syncFlag:0,isOnlineSync:0});}},{key:"_startSync",value:function value(e){var t=this,o=e.cookie,n=e.syncFlag,a=e.isOnlineSync;je.log("".concat(this._className,"._startSync cookie:").concat(o," syncFlag:").concat(n," isOnlineSync:").concat(a)),this.request({protocolName:Tn,requestData:{cookie:o,syncFlag:n,isOnlineSync:a}}).then(function(e){var o=e.data,n=o.cookie,a=o.syncFlag,s=o.eventArray,r=o.messageList,i=o.C2CRemainingUnreadList,c=o.C2CPairUnreadList;if(t._cookie=n,no(n));else if(0===a||1===a){if(s)t.getModule(on).onMessage({head:{},body:{eventArray:s,isInstantMessage:t._onlineSyncFlag,isSyncingEnded:!1}});t.getModule(Bo).onNewC2CMessage({dataList:r,isInstantMessage:!1,C2CRemainingUnreadList:i,C2CPairUnreadList:c}),t._startSync({cookie:n,syncFlag:a,isOnlineSync:0});}else if(2===a){if(s)t.getModule(on).onMessage({head:{},body:{eventArray:s,isInstantMessage:t._onlineSyncFlag,isSyncingEnded:!0}});t.getModule(Bo).onNewC2CMessage({dataList:r,isInstantMessage:t._onlineSyncFlag,C2CRemainingUnreadList:i,C2CPairUnreadList:c});}}).catch(function(e){je.error("".concat(t._className,"._startSync failed. error:"),e);});}},{key:"startOnlineSync",value:function value(){je.log("".concat(this._className,".startOnlineSync")),this._onlineSyncFlag=!0,this._startSync({cookie:this._cookie,syncFlag:0,isOnlineSync:1});}},{key:"startSyncOnReconnected",value:function value(){je.log("".concat(this._className,".startSyncOnReconnected.")),this._onlineSyncFlag=!0,this._startSync({cookie:this._cookie,syncFlag:0,isOnlineSync:0});}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._onlineSyncFlag=!1,this._cookie="";}}]),o;}(mn),Si={request:{toAccount:"To_Account",fromAccount:"From_Account",to:"To_Account",from:"From_Account",groupID:"GroupId",groupAtUserID:"GroupAt_Account",extension:"Ext",data:"Data",description:"Desc",elements:"MsgBody",sizeType:"Type",downloadFlag:"Download_Flag",thumbUUID:"ThumbUUID",videoUUID:"VideoUUID",remoteAudioUrl:"Url",remoteVideoUrl:"VideoUrl",videoUrl:"",imageUrl:"URL",fileUrl:"Url",uuid:"UUID",priority:"MsgPriority",receiverUserID:"To_Account",receiverGroupID:"GroupId",messageSender:"SenderId",messageReceiver:"ReceiverId",nick:"From_AccountNick",avatar:"From_AccountHeadurl",messageNumber:"MsgNum",pbDownloadKey:"PbMsgKey",downloadKey:"JsonMsgKey",applicationType:"PendencyType",userIDList:"To_Account",groupNameList:"GroupName",userID:"To_Account",groupAttributeList:"GroupAttr",mainSequence:"AttrMainSeq",avChatRoomKey:"BytesKey",attributeControl:"AttrControl",sequence:"seq",messageControlInfo:"SendMsgControl",updateSequence:"UpdateSeq",clientTime:"MsgClientTime",sequenceList:"MsgSeqList",topicID:"TopicId",customData:"CustomString",isSupportTopic:"SupportTopic",isWebUniapp:"is_web_uniapp",isSupportExtension:"SupportMessageExtension",messageSequence:"MsgSeq",messageKey:"MsgKey",startSequence:"startSeq"},response:{MsgPriority:"priority",ThumbUUID:"thumbUUID",VideoUUID:"videoUUID",Download_Flag:"downloadFlag",GroupId:"groupID",Member_Account:"userID",MsgList:"messageList",SyncFlag:"syncFlag",To_Account:"to",From_Account:"from",MsgSeq:"sequence",MsgRandom:"random",MsgTime:"time",MsgTimeStamp:"time",MsgContent:"content",MsgBody:"elements",From_AccountNick:"nick",From_AccountHeadurl:"avatar",GroupWithdrawInfoArray:"revokedInfos",GroupReadInfoArray:"groupMessageReadNotice",LastReadMsgSeq:"lastMessageSeq",WithdrawC2cMsgNotify:"c2cMessageRevokedNotify",C2cWithdrawInfoArray:"revokedInfos",C2cReadedReceipt:"c2cMessageReadReceipt",ReadC2cMsgNotify:"c2cMessageReadNotice",LastReadTime:"peerReadTime",MsgRand:"random",MsgType:"type",MsgShow:"messageShow",NextMsgSeq:"nextMessageSeq",FaceUrl:"avatar",ProfileDataMod:"profileModify",Profile_Account:"userID",ValueBytes:"value",ValueNum:"value",NoticeSeq:"noticeSequence",NotifySeq:"notifySequence",MsgFrom_AccountExtraInfo:"messageFromAccountExtraInformation",Operator_Account:"operatorID",OpType:"operationType",ReportType:"operationType",UserId:"userID",User_Account:"userID",List_Account:"userIDList",MsgOperatorMemberExtraInfo:"operatorInfo",MsgMemberExtraInfo:"memberInfoList",ImageUrl:"avatar",NickName:"nick",MsgGroupNewInfo:"newGroupProfile",MsgAppDefinedData:"groupCustomField",Owner_Account:"ownerID",GroupFaceUrl:"avatar",GroupIntroduction:"introduction",GroupNotification:"notification",GroupApplyJoinOption:"joinOption",MsgKey:"messageKey",GroupInfo:"groupProfile",ShutupTime:"muteTime",Desc:"description",Ext:"extension",GroupAt_Account:"groupAtUserID",MsgNum:"messageNumber",PbMsgKey:"pbDownloadKey",JsonMsgKey:"downloadKey",MsgModifiedFlag:"isModified",PendencyItem:"applicationItem",PendencyType:"applicationType",AddTime:"time",AddSource:"source",AddWording:"wording",ProfileImImage:"avatar",PendencyAdd:"friendApplicationAdded",FrienPencydDel_Account:"friendApplicationDeletedUserIDList",Peer_Account:"userID",GroupAttr:"groupAttributeList",GroupAttrAry:"groupAttributeList",AttrMainSeq:"mainSequence",seq:"sequence",GroupAttrOption:"groupAttributeOption",BytesChangedKeys:"changedKeyList",GroupAttrInfo:"groupAttributeList",GroupAttrSeq:"mainSequence",PushChangedAttrValFlag:"isWithChangedAttributeInfo",SubKeySeq:"sequence",Val:"value",MsgGroupFromCardName:"senderNameCard",MsgGroupFromNickName:"senderNick",C2cNick:"peerNick",C2cImage:"peerAvatar",SendMsgControl:"messageControlInfo",NoLastMsg:"excludedFromLastMessage",NoUnread:"excludedFromUnreadCount",UpdateSeq:"updateSequence",MuteNotifications:"muteFlag",MsgClientTime:"clientTime",TinyId:"tinyID",GroupMsgReceiptList:"readReceiptList",ReadNum:"readCount",UnreadNum:"unreadCount",TopicId:"topicID",MillionGroupFlag:"communityType",SupportTopic:"isSupportTopic",MsgTopicNewInfo:"newTopicInfo",ShutupAll:"muteAllMembers",CustomString:"customData",TopicFaceUrl:"avatar",TopicIntroduction:"introduction",TopicNotification:"notification",TopicIdArray:"topicIDList",MsgVersion:"messageVersion",C2cMsgModNotifys:"c2cMessageModified",GroupMsgModNotifys:"groupMessageModified",ApplyJoinOption:"joinOption",MsgFlag:"messageRemindType",AtInfoList:"groupAtInfoList",AtFlagList:"groupAtType",AtMsgSeq:"sequence",BanDuration:"duration",BanDescription:"reason",NotVisible:"invisible",BytesTag:"tag",BytesValue:"value",RptBytesValue:"value",LatestSeq:"globalSequence",ClearSeq:"clearSequence",SupportMessageExtension:"isSupportExtension",ExtensionList:"extensions"},ignoreKeyWord:["C2C","ID","USP"]};function Di(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var o;return 0===(e=Array.isArray(e)?e.map(function(e){return e.trim();}).filter(function(e){return e.length;}).join("-"):e.trim()).length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=Ni(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,function(e,t){return t.toUpperCase();}).replace(/\d+(\w|$)/g,function(e){return e.toUpperCase();}),o=e,t.pascalCase?o.charAt(0).toUpperCase()+o.slice(1):o);}var Ni=function Ni(e){for(var t=!1,o=!1,n=!1,a=0;a<e.length;a++){var s=e[a];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=o,o=!0,a++):o&&n&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=o,o=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,n=o,o=s.toUpperCase()===s&&s.toLowerCase()!==s);}return e;};function Ai(e,t){var o=0;return function e(t,n){if(++o>100)return o--,t;if(dt(t)){var a=t.map(function(t){return ut(t)?e(t,n):t;});return o--,a;}if(ut(t)){var s=(r=t,i=function i(e,t){if(!mt(t))return!1;if((a=t)!==Di(a))for(var o=0;o<Si.ignoreKeyWord.length&&!t.includes(Si.ignoreKeyWord[o]);o++){;}var a;return pt(n[t])?function(e){return"OPPOChannelID"===e?e:e[0].toUpperCase()+Di(e).slice(1);}(t):n[t];},c=Object.create(null),Object.keys(r).forEach(function(e){var t=i(r[e],e);t&&(c[t]=r[e]);}),c);return s=Ft(s,function(t,o){return dt(t)||ut(t)?e(t,n):t;}),o--,s;}var r,i,c;}(e,t);}function ki(e,t){if(dt(e))return e.map(function(e){return ut(e)?ki(e,t):e;});if(ut(e)){var o=(n=e,a=function a(e,o){return pt(t[o])?Di(o):t[o];},s={},Object.keys(n).forEach(function(e){s[a(n[e],e)]=n[e];}),s);return o=Ft(o,function(e){return dt(e)||ut(e)?ki(e,t):e;});}var n,a,s;}var Ri=String.fromCharCode,Oi=function Oi(e){var t=0|e.charCodeAt(0);if(55296<=t)if(t<56320){var o=0|e.charCodeAt(1);if(56320<=o&&o<=57343){if((t=(t<<10)+o-56613888|0)>65535)return Ri(240|t>>>18,128|t>>>12&63,128|t>>>6&63,128|63&t);}else t=65533;}else t<=57343&&(t=65533);return t<=2047?Ri(192|t>>>6,128|63&t):Ri(224|t>>>12,128|t>>>6&63,128|63&t);},Li=function Li(e){for(var t=void 0===e?"":(""+e).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,Oi),o=0|t.length,n=new Uint8Array(o),a=0;a<o;a=a+1|0){n[a]=0|t.charCodeAt(a);}return n;},Gi=function Gi(e){for(var t=new Uint8Array(e),o="",n=0,a=t.length;n<a;){var s=t[n],r=0,i=0;if(s<=127?(r=0,i=255&s):s<=223?(r=1,i=31&s):s<=239?(r=2,i=15&s):s<=244&&(r=3,i=7&s),a-n-r>0)for(var c=0;c<r;){i=i<<6|63&(s=t[n+c+1]),c+=1;}else i=65533,r=a-n;o+=String.fromCodePoint(i),n+=r+1;}return o;},Pi=function(){function e(t){n(this,e),this._handler=t;var o=t.getURL();if(this._socket=null,this._workerSocket=null,this._id=Ct(),this._handler.getIsWorkerEnabled()){var a=URL.createObjectURL(new Blob([';let _socket = null;onmessage = function(event) {  if (event.data.cmd === "start") {    const url = event.data.url;    _socket = new WebSocket(url);    _socket.binaryType = "arraybuffer";    _socket.onopen = function() {      postMessage({ callback: "onOpen" });    };    _socket.onclose = function(e) {      postMessage({ callback: "onOpen", e: { code: e.code, reason: e.reason } });    };    _socket.onmessage = function(e) {      postMessage({ callback: "onMessage", data: e.data });    };    _socket.onerror = function(e) {      postMessage({ callback: "onError", e: { isTrusted: "true" } });    };  } else if (event.data.cmd === "sendMessage") {    if (_socket !== null) {      _socket.send(event.data.data);    }  } else if (event.data.cmd === "stop") {    if (_socket !== null) {      _socket.close(event.data.code);      _socket = null;    }  }};'],{type:"application/javascript; charset=utf-8"}));this._workerSocket=new Worker(a);var s=this;this._workerSocket.onmessage=function(e){var t=e.data,o=t.callback,n=t.e;"onOpen"===o?s._onOpen():"onClose"===o?s._onClose(n):"onError"===o?s._onError(n):"onMessage"===o&&s._onMessage(e.data);},this._workerSocket.postMessage({cmd:"start",id:this._id,url:o});}else de?ce?(ge.connectSocket({url:o,header:{"content-type":"application/json"}}),ge.onSocketClose(this._onClose.bind(this)),ge.onSocketOpen(this._onOpen.bind(this)),ge.onSocketMessage(this._onMessage.bind(this)),ge.onSocketError(this._onError.bind(this))):(this._socket=ge.connectSocket({url:o,header:{"content-type":"application/json"},complete:function complete(){}}),this._socket.onClose(this._onClose.bind(this)),this._socket.onOpen(this._onOpen.bind(this)),this._socket.onMessage(this._onMessage.bind(this)),this._socket.onError(this._onError.bind(this))):pe&&(this._socket=new WebSocket(o),this._socket.binaryType="arraybuffer",this._socket.onopen=this._onOpen.bind(this),this._socket.onmessage=this._onMessage.bind(this),this._socket.onclose=this._onClose.bind(this),this._socket.onerror=this._onError.bind(this));this._canIUseBinaryFrame=t.canIUseBinaryFrame();}return s(e,[{key:"getID",value:function value(){return this._id;}},{key:"_onOpen",value:function value(){this._handler.onOpen({id:this._id});}},{key:"_onClose",value:function value(e){this._handler.onClose({id:this._id,e:e});}},{key:"_onMessage",value:function value(e){this._handler.onMessage({data:this._canIUseBinaryFrame?Gi(e.data):e.data});}},{key:"_onError",value:function value(e){this._handler.onError({id:this._id,e:e});}},{key:"setIsWorkerEnabled",value:function value(e){this._isWorkerEnabled=!0;}},{key:"close",value:function value(e){if(this._workerSocket&&(this._workerSocket.postMessage({cmd:"stop",code:e}),this._workerSocket.terminate(),this._workerSocket=null),ce)return ge.offSocketClose(),ge.offSocketMessage(),ge.offSocketOpen(),ge.offSocketError(),void ge.closeSocket();this._socket&&(de?(this._socket.onClose(function(){}),this._socket.onOpen(function(){}),this._socket.onMessage(function(){}),this._socket.onError(function(){})):pe&&(this._socket.onopen=null,this._socket.onmessage=null,this._socket.onclose=null,this._socket.onerror=null),ie?this._socket.close({code:e}):this._socket.close(e),this._socket=null);}},{key:"send",value:function value(e){if(this._workerSocket)this._workerSocket.postMessage({cmd:"sendMessage",data:this._canIUseBinaryFrame?Li(e.data).buffer:e.data});else{if(ce)return void ge.sendSocketMessage({data:e.data,fail:function fail(){e.fail&&e.requestID&&e.fail(e.requestID);}});this._socket&&(de?this._socket.send({data:this._canIUseBinaryFrame?Li(e.data).buffer:e.data,fail:function fail(){e.fail&&e.requestID&&e.fail(e.requestID);}}):pe&&this._socket.send(this._canIUseBinaryFrame?Li(e.data).buffer:e.data));}}}]),e;}(),Ui=4e3,bi=4001,wi=["keyMap"],Fi=["keyMap"],qi="connected",Vi="connecting",xi="disconnected",Bi=function(){function e(t){n(this,e),this._channelModule=t,this._className="SocketHandler",this._promiseMap=new Map(),this._readyState=xi,this._simpleRequestMap=new Map(),this.MAX_SIZE=100,this._startSequence=Ct(),this._startTs=0,this._reConnectFlag=!1,this._nextPingTs=0,this._reConnectCount=0,this.MAX_RECONNECT_COUNT=3,this._socketID=-1,this._random=0,this._socket=null,this._url="",this._onOpenTs=0,this._canIUseBinaryFrame=!0,this._isWorkerEnabled=!0,this._setWebsocketHost(),this._initConnection();}return s(e,[{key:"_setWebsocketHost",value:function value(){var e=this._channelModule.getModule($o),t=w;this._channelModule.isOversea()&&(t=F),e.isSingaporeSite()?t=q:e.isKoreaSite()?t=V:e.isGermanySite()?t=x:e.isIndiaSite()?t=B:e.isJapanSite()?t=K:e.isUSASite()&&(t=H),W.HOST.setCurrent(t);}},{key:"_initConnection",value:function value(){pt(W.HOST.CURRENT.BACKUP)||""===this._url?this._url=W.HOST.CURRENT.DEFAULT:this._url===W.HOST.CURRENT.DEFAULT?this._url=W.HOST.CURRENT.BACKUP:this._url===W.HOST.CURRENT.BACKUP&&(this._url=W.HOST.CURRENT.DEFAULT);var e=this._channelModule.getModule($o).getProxyServer();no(e)||(this._url=e),this._connect(),this._nextPingTs=0;}},{key:"onCheckTimer",value:function value(e){e%1==0&&this._checkPromiseMap();}},{key:"_checkPromiseMap",value:function value(){var e=this;0!==this._promiseMap.size&&this._promiseMap.forEach(function(t,o){var n=t.reject,a=t.timestamp,s=15e3;-1!==o.indexOf(Mn)&&(s=9e4),Date.now()-a>=s&&(je.log("".concat(e._className,"._checkPromiseMap request timeout, delete requestID:").concat(o)),e._promiseMap.delete(o),n(new tr({code:_n.NETWORK_TIMEOUT})),e._channelModule.onRequestTimeout(o));});}},{key:"onOpen",value:function value(e){if(""!==this._readyState){this._onOpenTs=Date.now();var t=e.id;this._socketID=t;var o=Date.now()-this._startTs;je.log("".concat(this._className,"._onOpen cost ").concat(o," ms. socketID:").concat(t)),new Os(Ls.WS_ON_OPEN).setMessage(o).setCostTime(o).setMoreMessage("socketID:".concat(t)).end(),e.id===this._socketID&&(this._readyState=qi,this._reConnectCount=0,this._resend(),!0===this._reConnectFlag&&(this._channelModule.onReconnected(),this._reConnectFlag=!1),this._channelModule.onOpen());}}},{key:"onClose",value:function value(e){var t=new Os(Ls.WS_ON_CLOSE),o=e.id,n=e.e,a="sourceSocketID:".concat(o," currentSocketID:").concat(this._socketID," code:").concat(n.code," reason:").concat(n.reason),s=0;0!==this._onOpenTs&&(s=Date.now()-this._onOpenTs),t.setMessage(s).setCostTime(s).setMoreMessage(a).setCode(n.code).end(),je.log("".concat(this._className,"._onClose ").concat(a," onlineTime:").concat(s)),o===this._socketID&&(this._readyState=xi,s<1e3?this._channelModule.onReconnectFailed():this._channelModule.onClose());}},{key:"onError",value:function value(e){var t=e.id,o=e.e,n="sourceSocketID:".concat(t," currentSocketID:").concat(this._socketID);new Os(Ls.WS_ON_ERROR).setMessage(o.errMsg||It(o)).setMoreMessage(n).setLevel("error").end(),je.warn("".concat(this._className,"._onError"),o,n),t===this._socketID&&(this._readyState="",this._channelModule.onError());}},{key:"onMessage",value:function value(e){var t;try{t=JSON.parse(e.data);}catch(u){new Os(Ls.JSON_PARSE_ERROR).setMessage(e.data).end();}if(t&&t.head){var o=this._getRequestIDFromHead(t.head),n=t.body;if(!o.startsWith(W.NAME.TUIROOM_SVR)){var a=Wt(t.head);n=ki(t.body,this._getResponseKeyMap(a));}if(je.debug("".concat(this._className,".onMessage ret:").concat(JSON.stringify(n)," requestID:").concat(o," has:").concat(this._promiseMap.has(o))),this._setNextPingTs(),this._promiseMap.has(o)){var s=this._promiseMap.get(o),r=s.resolve,i=s.reject,c=s.timestamp;return this._promiseMap.delete(o),this._calcRTT(c),void(n.errorCode&&0!==n.errorCode?(this._channelModule.onErrorCodeNotZero(n),i(new tr({code:n.errorCode,message:n.errorInfo||"",data:o.includes(Fn)||o.includes(Na)?{elements:n.elements,messageVersion:n.messageVersion,cloudCustomData:n.cloudCustomData}:void 0}))):r(zs(n)));}this._channelModule.onMessage({head:t.head,body:n});}}},{key:"_calcRTT",value:function value(e){var t=Date.now()-e;this._channelModule.getModule(un).addRTT(t);}},{key:"_connect",value:function value(){this._startTs=Date.now(),this._onOpenTs=0,this._socket=new Pi(this),this._socketID=this._socket.getID(),this._readyState=Vi,je.log("".concat(this._className,"._connect isWorkerEnabled:").concat(this.getIsWorkerEnabled()," socketID:").concat(this._socketID," url:").concat(this.getURL())),new Os(Ls.WS_CONNECT).setMessage("socketID:".concat(this._socketID," url:").concat(this.getURL())).end();}},{key:"getURL",value:function value(){this._channelModule.isDevMode()&&(this._canIUseBinaryFrame=!1);var e=xt();(ce||ae&&"windows"===e||ue)&&(this._canIUseBinaryFrame=!1);var t=-1;"ios"===e?t=Ie||-1:"android"===e&&(t=Ce||-1);var o=this._channelModule.getModule($o),n=this._channelModule.getPlatform(),a=o.getSDKAppID(),s=o.getInstanceID();return this._canIUseBinaryFrame?"".concat(this._url,"/binfo?sdkappid=").concat(a,"&instanceid=").concat(s,"&random=").concat(this._getRandom(),"&platform=").concat(n,"&host=").concat(e,"&version=").concat(t):"".concat(this._url,"/info?sdkappid=").concat(a,"&instanceid=").concat(s,"&random=").concat(this._getRandom(),"&platform=").concat(n,"&host=").concat(e,"&version=").concat(t);}},{key:"_closeConnection",value:function value(e){je.log("".concat(this._className,"._closeConnection socketID:").concat(this._socketID)),this._socket&&(this._socket.close(e),this._socketID=-1,this._socket=null,this._readyState=xi);}},{key:"_resend",value:function value(){var e=this;if(je.log("".concat(this._className,"._resend reConnectFlag:").concat(this._reConnectFlag),"promiseMap.size:".concat(this._promiseMap.size," simpleRequestMap.size:").concat(this._simpleRequestMap.size)),this._promiseMap.size>0&&this._promiseMap.forEach(function(t,o){var n=t.uplinkData,a=t.resolve,s=t.reject;e._promiseMap.set(o,{resolve:a,reject:s,timestamp:Date.now(),uplinkData:n}),e._execute(o,n);}),this._simpleRequestMap.size>0){var t,o=E(this._simpleRequestMap);try{for(o.s();!(t=o.n()).done;){var n=m(t.value,2),a=n[0],s=n[1];this._execute(a,s);}}catch(r){o.e(r);}finally{o.f();}this._simpleRequestMap.clear();}}},{key:"send",value:function value(e){var t=this;e.head.seq=this._getSequence(),e.head.reqtime=Math.floor(Date.now()/1e3);e.keyMap;var o=g(e,wi),n=this._getRequestIDFromHead(e.head),a=JSON.stringify(o);return new Promise(function(e,s){(t._promiseMap.set(n,{resolve:e,reject:s,timestamp:Date.now(),uplinkData:a}),je.debug("".concat(t._className,".send uplinkData:").concat(JSON.stringify(o)," requestID:").concat(n," readyState:").concat(t._readyState)),t._readyState!==qi)?t._reConnect():(t._execute(n,a),t._channelModule.getModule(un).addRequestCount());});}},{key:"simplySend",value:function value(e){e.head.seq=this._getSequence(),e.head.reqtime=Math.floor(Date.now()/1e3);e.keyMap;var t=g(e,Fi),o=this._getRequestIDFromHead(e.head),n=JSON.stringify(t);this._readyState!==qi?(this._simpleRequestMap.size<this.MAX_SIZE?this._simpleRequestMap.set(o,n):je.log("".concat(this._className,".simplySend. simpleRequestMap is full, drop request!")),this._reConnect()):this._execute(o,n);}},{key:"_execute",value:function value(e,t){this._socket.send({data:t,fail:de?this._onSendFail.bind(this):void 0,requestID:e});}},{key:"_onSendFail",value:function value(e){je.log("".concat(this._className,"._onSendFail requestID:").concat(e));}},{key:"_getSequence",value:function value(){var e;if(this._startSequence<2415919103)return e=this._startSequence,this._startSequence+=1,2415919103===this._startSequence&&(this._startSequence=Ct()),e;}},{key:"_getRequestIDFromHead",value:function value(e){return e.servcmd+e.seq;}},{key:"_getResponseKeyMap",value:function value(e){var o=this._channelModule.getKeyMap(e);return t(t({},Si.response),o.response);}},{key:"_reConnect",value:function value(){this._readyState!==qi&&this._readyState!==Vi&&this.forcedReconnect();}},{key:"forcedReconnect",value:function value(){var e=this;je.log("".concat(this._className,".forcedReconnect count:").concat(this._reConnectCount," readyState:").concat(this._readyState)),this._reConnectFlag=!0,this._resetRandom(),this._reConnectCount<this.MAX_RECONNECT_COUNT?(this._reConnectCount+=1,this._closeConnection(bi),this._initConnection()):(this._reConnectCount=0,this._channelModule.probeNetwork().then(function(t){var o=m(t,2),n=o[0];o[1];n?(je.warn("".concat(e._className,".forcedReconnect disconnected from wsserver but network is ok, continue...")),e._closeConnection(bi),e._initConnection()):e._channelModule.onReconnectFailed();}));}},{key:"getReconnectFlag",value:function value(){return this._reConnectFlag;}},{key:"_setNextPingTs",value:function value(){this._nextPingTs=Date.now()+1e4;}},{key:"getNextPingTs",value:function value(){return this._nextPingTs;}},{key:"isConnected",value:function value(){return this._readyState===qi;}},{key:"canIUseBinaryFrame",value:function value(){return this._canIUseBinaryFrame;}},{key:"setIsWorkerEnabled",value:function value(e){je.log("".concat(this._className,".setIsWorkerEnabled flag:").concat(e)),this._isWorkerEnabled=e;}},{key:"getIsWorkerEnabled",value:function value(){return this._isWorkerEnabled&&Le;}},{key:"_getRandom",value:function value(){return 0===this._random&&(this._random=Math.random()),this._random;}},{key:"_resetRandom",value:function value(){this._random=0;}},{key:"close",value:function value(){je.log("".concat(this._className,".close")),this._closeConnection(Ui),this._promiseMap.clear(),this._startSequence=Ct(),this._readyState=xi,this._simpleRequestMap.clear(),this._reConnectFlag=!1,this._reConnectCount=0,this._onOpenTs=0,this._url="",this._random=0,this._canIUseBinaryFrame=!0,this._isWorkerEnabled=!0;}}]),e;}(),Ki=function(e){i(o,e);var t=f(o);function o(e){var a;if(n(this,o),(a=t.call(this,e))._className="ChannelModule",a._socketHandler=new Bi(_(a)),a._probing=!1,a._isAppShowing=!0,a._previousState=N.NET_STATE_CONNECTED,de&&"function"==typeof ge.onAppShow&&"function"==typeof ge.onAppHide){var s=a._onAppHide.bind(_(a)),r=a._onAppShow.bind(_(a));"function"==typeof ge.offAppHide&&ge.offAppHide(s),"function"==typeof ge.offAppShow&&ge.offAppShow(r),ge.onAppHide(s),ge.onAppShow(r);}return a._timerForNotLoggedIn=-1,a._timerForNotLoggedIn=setInterval(a.onCheckTimer.bind(_(a)),1e3),a._fatalErrorFlag=!1,a;}return s(o,[{key:"onCheckTimer",value:function value(e){this._socketHandler&&(this.isLoggedIn()?(this._timerForNotLoggedIn>0&&(clearInterval(this._timerForNotLoggedIn),this._timerForNotLoggedIn=-1),this._socketHandler.onCheckTimer(e)):this._socketHandler.onCheckTimer(1),this._checkNextPing());}},{key:"onErrorCodeNotZero",value:function value(e){this.getModule(on).onErrorCodeNotZero(e);}},{key:"onMessage",value:function value(e){this.getModule(on).onMessage(e);}},{key:"send",value:function value(e){return this._socketHandler?this._previousState!==N.NET_STATE_CONNECTED&&e.head.servcmd.includes(Ya)?(this.reConnect(),this._sendLogViaHTTP(e)):this._socketHandler.send(e):Promise.reject();}},{key:"_sendLogViaHTTP",value:function value(e){var t=W.HOST.CURRENT.STAT;return new Promise(function(o,n){var a="".concat(t,"/v4/imopenstat/tim_web_report_v2?sdkappid=").concat(e.head.sdkappid,"&reqtime=").concat(Date.now()),s=JSON.stringify(e.body),r="application/x-www-form-urlencoded;charset=UTF-8";if(de)ge.request({url:a,data:s,method:"POST",timeout:3e3,header:{"content-type":r},success:function success(){o();},fail:function fail(){n(new tr({code:_n.NETWORK_ERROR}));}});else{var i=new XMLHttpRequest(),c=setTimeout(function(){i.abort(),n(new tr({code:_n.NETWORK_TIMEOUT}));},3e3);i.onreadystatechange=function(){4===i.readyState&&(clearTimeout(c),200===i.status||304===i.status?o():n(new tr({code:_n.NETWORK_ERROR})));},i.open("POST",a,!0),i.setRequestHeader("Content-type",r),i.send(s);}});}},{key:"simplySend",value:function value(e){return this._socketHandler?this._socketHandler.simplySend(e):Promise.reject();}},{key:"onOpen",value:function value(){this._ping();}},{key:"onClose",value:function value(){this._socketHandler&&this._socketHandler.getReconnectFlag()&&this._emitNetStateChangeEvent(N.NET_STATE_DISCONNECTED);this.reConnect();}},{key:"onError",value:function value(){de&&!ue&&(this.isIntl()||je.error("".concat(this._className,".onError 从v2.11.2起，SDK 支持了 WebSocket，如您未添加相关受信域名，请先添加！(如已添加请忽略)，升级指引: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-02-upgradeguideline.html"))),this._emitNetStateChangeEvent(N.NET_STATE_DISCONNECTED);}},{key:"getKeyMap",value:function value(e){return this.getModule(on).getKeyMap(e);}},{key:"_onAppHide",value:function value(){this._isAppShowing=!1;}},{key:"_onAppShow",value:function value(){this._isAppShowing=!0;}},{key:"onRequestTimeout",value:function value(e){}},{key:"onReconnected",value:function value(){je.log("".concat(this._className,".onReconnected")),this.getModule(on).onReconnected(),this._emitNetStateChangeEvent(N.NET_STATE_CONNECTED);}},{key:"onReconnectFailed",value:function value(){je.log("".concat(this._className,".onReconnectFailed")),this._emitNetStateChangeEvent(N.NET_STATE_DISCONNECTED);}},{key:"setIsWorkerEnabled",value:function value(e){this._socketHandler&&this._socketHandler.setIsWorkerEnabled(!1);}},{key:"offline",value:function value(){this._emitNetStateChangeEvent(N.NET_STATE_DISCONNECTED);}},{key:"reConnect",value:function value(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!1;this._socketHandler&&(t=this._socketHandler.getReconnectFlag());var o="forcedFlag:".concat(e," fatalErrorFlag:").concat(this._fatalErrorFlag," previousState:").concat(this._previousState," reconnectFlag:").concat(t);if(je.log("".concat(this._className,".reConnect ").concat(o)),!this._fatalErrorFlag&&this._socketHandler){if(!0===e)this._socketHandler.forcedReconnect();else{if(this._previousState===N.NET_STATE_CONNECTING&&t)return;this._socketHandler.forcedReconnect();}this._emitNetStateChangeEvent(N.NET_STATE_CONNECTING);}}},{key:"_emitNetStateChangeEvent",value:function value(e){this._previousState!==e&&(je.log("".concat(this._className,"._emitNetStateChangeEvent from ").concat(this._previousState," to ").concat(e)),this._previousState=e,this.emitOuterEvent(D.NET_STATE_CHANGE,{state:e}));}},{key:"_ping",value:function value(){var e=this;if(!0!==this._probing){this._probing=!0;var t=this.getModule(on).getProtocolData({protocolName:ja});this.send(t).then(function(){e._probing=!1;}).catch(function(t){if(je.warn("".concat(e._className,"._ping failed. error:"),t),e._probing=!1,t&&60002===t.code)return new Os(Ls.ERROR).setMessage("code:".concat(t.code," message:").concat(t.message)).setNetworkType(e.getModule(Xo).getNetworkType()).end(),e._fatalErrorFlag=!0,void e._emitNetStateChangeEvent(N.NET_STATE_DISCONNECTED);e.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];je.log("".concat(e._className,"._ping failed. probe network, isAppShowing:").concat(e._isAppShowing," online:").concat(n," networkType:").concat(a)),n?e.reConnect():e._emitNetStateChangeEvent(N.NET_STATE_DISCONNECTED);});});}}},{key:"_checkNextPing",value:function value(){this._socketHandler&&this._socketHandler.isConnected()&&Date.now()>=this._socketHandler.getNextPingTs()&&this._ping();}},{key:"dealloc",value:function value(){this._socketHandler&&(this._socketHandler.close(),this._socketHandler=null),this._timerForNotLoggedIn>-1&&clearInterval(this._timerForNotLoggedIn);}},{key:"onRestApiKickedOut",value:function value(){this._socketHandler&&(this._socketHandler.close(),this.reConnect(!0));}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._previousState=N.NET_STATE_CONNECTED,this._probing=!1,this._fatalErrorFlag=!1,this._timerForNotLoggedIn=setInterval(this.onCheckTimer.bind(this),1e3);}}]),o;}(mn),Hi=["a2","tinyid"],Wi=["a2","tinyid"],Yi=function(){function e(t){n(this,e),this._className="ProtocolHandler",this._sessionModule=t,this._configMap=new Map(),this._fillConfigMap();}return s(e,[{key:"_fillConfigMap",value:function value(){this._configMap.clear();var e=this._sessionModule.genCommonHead(),o=this._sessionModule.genCosSpecifiedHead(),n=this._sessionModule.genSSOReportHead(),a=this._sessionModule.isIntl();this._configMap.set(Mn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.LOGIN)}),body:{state:"Online",isWebUniapp:0,deviceBrand:0},keyMap:{request:{deviceBrand:"InstType"},response:{InstId:"instanceID",HelloInterval:"helloInterval"}}};}(e)),this._configMap.set(vn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.LOGOUT)}),body:{type:0},keyMap:{request:{type:"wslogout_type"}}};}(e)),this._configMap.set(yn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.HELLO)}),body:{isWebUniapp:0},keyMap:{response:{NewInstInfo:"newInstanceInfo"}}};}(e)),this._configMap.set(In,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.STAT_SERVICE,".").concat(W.CMD.KICK_OTHER)}),body:{}};}(e)),this._configMap.set(Ka,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_COS_SIGN,".").concat(W.CMD.COS_SIGN)}),body:{cmd:"open_im_cos_svc",subCmd:"get_cos_token",duration:300,version:2},keyMap:{request:{userSig:"usersig",subCmd:"sub_cmd",cmd:"cmd",duration:"duration",version:"version"},response:{expired_time:"expiredTime",bucket_name:"bucketName",session_token:"sessionToken",tmp_secret_id:"secretId",tmp_secret_key:"secretKey"}}};}(o)),this._configMap.set(Ha,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.CUSTOM_UPLOAD,".").concat(W.CMD.COS_PRE_SIG)}),body:{fileType:void 0,fileName:void 0,uploadMethod:0,duration:900},keyMap:{request:{userSig:"usersig",fileType:"file_type",fileName:"file_name",uploadMethod:"upload_method"},response:{expired_time:"expiredTime",request_id:"requestId",head_url:"headUrl",upload_url:"uploadUrl",download_url:"downloadUrl",ci_url:"ciUrl",snapshot_url:"requestSnapshotUrl"}}};}(o)),this._configMap.set(Wa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.CUSTOM_UPLOAD,".").concat(W.CMD.VIDEO_COVER)}),body:{version:1,platform:void 0,coverName:void 0,requestSnapshotUrl:void 0},keyMap:{request:{version:"version",platform:"platform",coverName:"cover_name",requestSnapshotUrl:"snapshot_url"},response:{error_code:"errorCode",error_msg:"errorInfo",download_url:"snapshotUrl"}}};}(o)),this._configMap.set(os,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_CONFIG_MANAGER,".").concat(W.CMD.FETCH_COMMERCIAL_CONFIG)}),body:{SDKAppID:0},keyMap:{request:{SDKAppID:"uint32_sdkappid"},response:{int32_error_code:"errorCode",str_error_message:"errorMessage",str_purchase_bits:"purchaseBits",uint32_expired_time:"expiredTime"}}};}(e)),this._configMap.set(ns,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_CONFIG_MANAGER,".").concat(W.CMD.PUSHED_COMMERCIAL_CONFIG)}),body:{},keyMap:{response:{int32_error_code:"errorCode",str_error_message:"errorMessage",str_purchase_bits:"purchaseBits",uint32_expired_time:"expiredTime"}}};}(e)),this._configMap.set(es,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_CONFIG_MANAGER,".").concat(W.CMD.FETCH_CLOUD_CONTROL_CONFIG)}),body:{SDKAppID:0,version:0},keyMap:{request:{SDKAppID:"uint32_sdkappid",version:"uint64_version"},response:{int32_error_code:"errorCode",str_error_message:"errorMessage",str_json_config:"cloudControlConfig",uint32_expired_time:"expiredTime",uint32_sdkappid:"SDKAppID",uint64_version:"version"}}};}(e)),this._configMap.set(ts,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_CONFIG_MANAGER,".").concat(W.CMD.PUSHED_CLOUD_CONTROL_CONFIG)}),body:{},keyMap:{response:{int32_error_code:"errorCode",str_error_message:"errorMessage",str_json_config:"cloudControlConfig",uint32_expired_time:"expiredTime",uint32_sdkappid:"SDKAppID",uint64_version:"version"}}};}(e)),this._configMap.set(as,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OVERLOAD_PUSH,".").concat(W.CMD.OVERLOAD_NOTIFY)}),body:{},keyMap:{response:{OverLoadServCmd:"overloadCommand",DelaySecs:"waitingTime"}}};}(e)),this._configMap.set(Tn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.GET_MESSAGES)}),body:{cookie:"",syncFlag:0,needAbstract:1,isOnlineSync:0},keyMap:{request:{fromAccount:"From_Account",toAccount:"To_Account",from:"From_Account",to:"To_Account",time:"MsgTimeStamp",sequence:"MsgSeq",random:"MsgRandom",elements:"MsgBody"},response:{MsgList:"messageList",SyncFlag:"syncFlag",To_Account:"to",From_Account:"from",ClientSeq:"clientSequence",MsgSeq:"sequence",NoticeSeq:"noticeSequence",NotifySeq:"notifySequence",MsgRandom:"random",MsgTimeStamp:"time",MsgContent:"content",ToGroupId:"to",MsgKey:"messageKey",GroupTips:"groupTips",MsgBody:"elements",MsgType:"type",C2CRemainingUnreadCount:"C2CRemainingUnreadList",C2CPairUnreadCount:"C2CPairUnreadList"}}};}(e)),a||(this._configMap.set(Cn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.BIG_DATA_HALLWAY_AUTH_KEY)}),body:{}};}(e)),this._configMap.set(fs,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_MSG_AUDIT_MGR,".").concat(W.CMD.GET_RPOFANITY_LIST)}),body:{version:0,deviceID:"",startIndex:void 0},keyMap:{request:{version:"uint64_version",deviceID:"str_device_id",startIndex:"uint64_start_index"},response:{msg_cmd_error_code:"errorInfo",str_err_msg:"errorMessage",uint32_code:"errorCode",msg_scene_ctl_config:"filterConfig",uint64_c2c_custom_msg_flag:"c2c_custom_message",uint64_c2c_text_msg_flag:"c2c_text_message",uint64_group_custom_msg_flag:"group_custom_message",uint64_group_text_msg_flag:"group_text_message",uint64_group_info_flag:"group_profile",uint64_group_member_info_flag:"group_member_profile",uint64_relation_chain_flag:"sns",uint64_user_info_flag:"user_profile",rpt_msg_dirty_word:"lexicon",str_dirty_word:"profanity",str_replaced_content:"replacement",uint64_filter_type:"filterType",uint64_id:"id",uint64_word_type:"profanityType",uint64_complete_flag:"completeFlag",uint64_next_start_index:"nextStartIndex",uint64_version:"version",uint64_expired_time:"expiredTime"}}};}(e))),this._configMap.set(En,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.SEND_MESSAGE)}),body:{fromAccount:"",toAccount:"",msgSeq:0,msgRandom:0,msgBody:[],cloudCustomData:void 0,nick:"",avatar:"",msgLifeTime:void 0,offlinePushInfo:{pushFlag:0,title:"",desc:"",ext:"",apnsInfo:{badgeMode:0,isVoipPush:void 0},androidInfo:{OPPOChannelID:""}},messageControlInfo:void 0,clientTime:void 0,needReadReceipt:0,isSupportExtension:0},keyMap:{request:{fromAccount:"From_Account",toAccount:"To_Account",msgTimeStamp:"MsgTimeStamp",msgSeq:"MsgSeq",msgRandom:"MsgRandom",msgBody:"MsgBody",count:"MaxCnt",lastMessageTime:"LastMsgTime",messageKey:"MsgKey",peerAccount:"Peer_Account",data:"Data",description:"Desc",extension:"Ext",type:"MsgType",content:"MsgContent",sizeType:"Type",uuid:"UUID",url:"",imageUrl:"URL",fileUrl:"Url",remoteAudioUrl:"Url",remoteVideoUrl:"VideoUrl",thumbUUID:"ThumbUUID",videoUUID:"VideoUUID",videoUrl:"",downloadFlag:"Download_Flag",nick:"From_AccountNick",avatar:"From_AccountHeadurl",from:"From_Account",time:"MsgTimeStamp",messageRandom:"MsgRandom",messageSequence:"MsgSeq",elements:"MsgBody",clientSequence:"ClientSeq",payload:"MsgContent",messageList:"MsgList",messageNumber:"MsgNum",abstractList:"AbstractList",messageBody:"MsgBody",needReadReceipt:"IsNeedReadReceipt"}}};}(e)),this._configMap.set(Sn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.SEND_GROUP_MESSAGE)}),body:{fromAccount:"",groupID:"",random:0,clientSequence:0,priority:"",msgBody:[],cloudCustomData:void 0,onlineOnlyFlag:0,offlinePushInfo:{pushFlag:0,title:"",desc:"",ext:"",apnsInfo:{badgeMode:0,isVoipPush:void 0},androidInfo:{OPPOChannelID:""}},groupAtInfo:[],messageControlInfo:void 0,clientTime:void 0,needReadReceipt:0,topicID:void 0,receiverList:void 0,isSupportExtension:0},keyMap:{request:{to:"GroupId",extension:"Ext",data:"Data",description:"Desc",random:"Random",sequence:"ReqMsgSeq",count:"ReqMsgNumber",type:"MsgType",priority:"MsgPriority",content:"MsgContent",elements:"MsgBody",sizeType:"Type",uuid:"UUID",url:"",imageUrl:"URL",fileUrl:"Url",remoteAudioUrl:"Url",remoteVideoUrl:"VideoUrl",thumbUUID:"ThumbUUID",videoUUID:"VideoUUID",videoUrl:"",downloadFlag:"Download_Flag",clientSequence:"ClientSeq",from:"From_Account",time:"MsgTimeStamp",messageRandom:"MsgRandom",messageSequence:"MsgSeq",payload:"MsgContent",messageList:"MsgList",messageNumber:"MsgNum",abstractList:"AbstractList",messageBody:"MsgBody",needReadReceipt:"NeedReadReceipt",receiverList:"To_Account"},response:{MsgTime:"time",MsgSeq:"sequence"}}};}(e)),this._configMap.set(On,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.REVOKE_C2C_MESSAGE)}),body:{msgInfo:{fromAccount:"",toAccount:"",msgTimeStamp:0,msgSeq:0,msgRandom:0}},keyMap:{request:{msgInfo:"MsgInfo",msgTimeStamp:"MsgTimeStamp",msgSeq:"MsgSeq",msgRandom:"MsgRandom"}}};}(e)),this._configMap.set(ga,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.REVOKE_GROUP_MESSAGE)}),body:{groupID:"",msgSeqList:void 0,topicID:""},keyMap:{request:{msgSeqList:"MsgSeqList",msgSeq:"MsgSeq"}}};}(e)),this._configMap.set(Un,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.GET_C2C_ROAM_MESSAGES)}),body:{peerAccount:"",count:15,lastMessageTime:0,messageKey:"",withRecalledMessage:1,direction:0},keyMap:{request:{messageKey:"MsgKey",peerAccount:"Peer_Account",count:"MaxCnt",lastMessageTime:"LastMsgTime",withRecalledMessage:"WithRecalledMsg",direction:"GetDirection"},response:{LastMsgTime:"lastMessageTime",IsNeedReadReceipt:"needReadReceipt",IsPeerRead:"readReceiptSentByPeer"}}};}(e)),this._configMap.set(Fn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.MODIFY_C2C_MESSAGE)}),body:{from:"",to:"",sequence:0,random:0,time:0,version:0,elements:void 0,cloudCustomData:void 0},keyMap:{request:{sequence:"MsgSeq",random:"MsgRandom",time:"MsgTime",version:"MsgVersion",type:"MsgType",content:"MsgContent"}}};}(e)),this._configMap.set(fa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.GET_GROUP_ROAM_MESSAGES)}),body:{withRecalledMsg:1,groupID:"",count:15,sequence:"",topicID:void 0},keyMap:{request:{sequence:"ReqMsgSeq",count:"ReqMsgNumber",withRecalledMessage:"WithRecalledMsg"},response:{Random:"random",MsgTime:"time",MsgSeq:"sequence",ReqMsgSeq:"sequence",RspMsgList:"messageList",IsPlaceMsg:"isPlaceMessage",IsSystemMsg:"isSystemMessage",ToGroupId:"to",EnumFrom_AccountType:"fromAccountType",EnumTo_AccountType:"toAccountType",GroupCode:"groupCode",MsgPriority:"priority",MsgBody:"elements",MsgType:"type",MsgContent:"content",IsFinished:"complete",Download_Flag:"downloadFlag",ClientSeq:"clientSequence",ThumbUUID:"thumbUUID",VideoUUID:"videoUUID",ToTopicId:"topicID",InvisibleMsgSeq:"invisibleSequence"}}};}(e)),this._configMap.set(Ln,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.SET_C2C_MESSAGE_READ)}),body:{C2CMsgReaded:void 0},keyMap:{request:{lastMessageTime:"LastedMsgTime"}}};}(e)),this._configMap.set(Gn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.SET_C2C_PEER_MUTE_NOTIFICATIONS)}),body:{userIDList:void 0,muteFlag:0},keyMap:{request:{userIDList:"Peer_Account",muteFlag:"Mute_Notifications"}}};}(e)),this._configMap.set(Pn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.GET_C2C_PEER_MUTE_NOTIFICATIONS)}),body:{updateSequence:0},keyMap:{response:{MuteNotificationsList:"muteFlagList"}}};}(e)),this._configMap.set(_a,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.SET_GROUP_MESSAGE_READ)}),body:{groupID:void 0,messageReadSeq:void 0,topicID:void 0},keyMap:{request:{messageReadSeq:"MsgReadedSeq"}}};}(e)),this._configMap.set(ha,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.SET_ALL_MESSAGE_READ)}),body:{readAllC2CMessage:0,groupMessageReadInfoList:[]},keyMap:{request:{readAllC2CMessage:"C2CReadAllMsg",groupMessageReadInfoList:"GroupReadInfo",messageSequence:"MsgSeq"},response:{C2CReadAllMsg:"readAllC2CMessage",GroupReadInfoArray:"groupMessageReadInfoList"}}};}(e)),this._configMap.set(wn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.DELETE_C2C_MESSAGE)}),body:{fromAccount:"",to:"",keyList:void 0},keyMap:{request:{keyList:"MsgKeyList"}}};}(e)),this._configMap.set(Da,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.DELETE_GROUP_MESSAGE)}),body:{groupID:"",deleter:"",keyList:void 0,topicID:void 0},keyMap:{request:{deleter:"Deleter_Account",keyList:"Seqs"}}};}(e)),this._configMap.set(Na,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.MODIFY_GROUP_MESSAGE)}),body:{groupID:"",topicID:void 0,sequence:0,version:0,elements:void 0,cloudCustomData:void 0},keyMap:{request:{sequence:"MsgSeq",version:"MsgVersion",type:"MsgType",content:"MsgContent"}}};}(e)),this._configMap.set(ma,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.GET_READ_RECEIPT)}),body:{groupID:"",sequenceList:void 0},keyMap:{request:{sequence:"MsgSeq"}}};}(e)),this._configMap.set(va,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.SEND_C2C_READ_RECEIPT)}),body:{peerAccount:"",messageInfoList:void 0},keyMap:{request:{peerAccount:"Peer_Account",messageInfoList:"C2CMsgInfo",fromAccount:"From_Account",toAccount:"To_Account",sequence:"MsgSeq",random:"MsgRandom",time:"MsgTime",clientTime:"MsgClientTime"}}};}(e)),this._configMap.set(Ma,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.SEND_READ_RECEIPT)}),body:{groupID:"",sequenceList:void 0},keyMap:{request:{sequenceList:"MsgSeqList",sequence:"MsgSeq"}}};}(e)),this._configMap.set(ya,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.GET_READ_RECEIPT_DETAIL)}),body:{groupID:"",sequence:void 0,flag:0,cursor:0,count:0},keyMap:{request:{sequence:"MsgSeq",count:"Num"},response:{ReadList:"readUserIDList",Read_Account:"userID",UnreadList:"unreadUserIDList",Unread_Account:"userID",IsFinish:"isCompleted"}}};}(e)),this._configMap.set(qn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM_MSG_EXT,".").concat(W.CMD.MODIFY_C2C_MESSAGE_EXTENSIONS)}),body:{from:void 0,to:void 0,messageKey:void 0,operateType:void 0,extensionList:void 0}};}(e)),this._configMap.set(Vn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM_MSG_EXT,".").concat(W.CMD.GET_C2C_MESSAGE_EXTENSIONS)}),body:{from:void 0,to:void 0,messageKey:void 0,startSequence:void 0}};}(e)),this._configMap.set(Ga,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM_MSG_EXT,".").concat(W.CMD.MODIFY_GROUP_MESSAGE_EXTENSIONS)}),body:{groupID:void 0,messageSequence:void 0,operateType:void 0,extensionList:void 0}};}(e)),this._configMap.set(Pa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM_MSG_EXT,".").concat(W.CMD.GET_GROUP_MESSAGE_EXTENSIONS)}),body:{groupID:void 0,messageSequence:void 0,startSequence:void 0}};}(e)),this._configMap.set(bn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.GET_PEER_READ_TIME)}),body:{userIDList:void 0},keyMap:{request:{userIDList:"To_Account"},response:{ReadTime:"peerReadTimeList"}}};}(e)),this._configMap.set(Bn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.GET_CONVERSATION_LIST)}),body:{fromAccount:void 0,count:0},keyMap:{request:{},response:{SessionItem:"conversations",ToAccount:"groupID",To_Account:"userID",UnreadMsgCount:"unreadCount",MsgGroupReadedSeq:"messageReadSeq",C2cPeerReadTime:"c2cPeerReadTime"}}};}(e)),this._configMap.set(xn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.PAGING_GET_CONVERSATION_LIST)}),body:{fromAccount:void 0,timeStamp:void 0,startIndex:void 0,pinnedTimeStamp:void 0,pinnedStartIndex:void 0,orderType:void 0,messageAssistFlag:4,assistFlag:15},keyMap:{request:{messageAssistFlag:"MsgAssistFlags",assistFlag:"AssistFlags",pinnedTimeStamp:"TopTimeStamp",pinnedStartIndex:"TopStartIndex"},response:{SessionItem:"conversations",ToAccount:"groupID",To_Account:"userID",UnreadMsgCount:"unreadCount",MsgGroupReadedSeq:"messageReadSeq",C2cPeerReadTime:"c2cPeerReadTime",LastMsgFlags:"lastMessageFlag",TopFlags:"isPinned",TopTimeStamp:"pinnedTimeStamp",TopStartIndex:"pinnedStartIndex",GroupId:"convGroupID"}}};}(e)),this._configMap.set(Kn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.DELETE_CONVERSATION)}),body:{fromAccount:"",toAccount:void 0,type:1,toGroupID:void 0,clearHistoryMessage:1},keyMap:{request:{toGroupID:"ToGroupid",clearHistoryMessage:"ClearRamble"}}};}(e)),this._configMap.set(Hn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.CLEAR_HISTORY_MESSAGE)}),body:{fromAccount:"",toAccount:void 0,type:1,toGroupID:void 0},keyMap:{request:{toGroupID:"ToGroupid"}}};}(e)),this._configMap.set(Wn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.PIN_CONVERSATION)}),body:{fromAccount:"",operationType:1,itemList:void 0},keyMap:{request:{itemList:"RecentContactItem"}}};}(e)),this._configMap.set(Yn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.DELETE_GROUP_AT_TIPS)}),body:{messageListToDelete:void 0},keyMap:{request:{messageListToDelete:"DelMsgList",messageSeq:"MsgSeq",messageRandom:"MsgRandom"}}};}(e)),this._configMap.set(jn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.MARK_CONVERSATION)}),body:{fromAccount:"",itemList:void 0},keyMap:{request:{itemList:"MarkItem",operationType:"OptType",groupID:"ToGroupId"},response:{ToGroupId:"groupID",OptType:"operationType"}}};}(e)),this._configMap.set($n,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.MARK_CONVERSATION)}),body:{fromAccount:"",itemList:void 0},keyMap:{request:{itemList:"MarkItem",operationType:"OptType",groupID:"ToGroupId"},response:{ToGroupId:"groupID",OptType:"operationType"}}};}(e)),this._configMap.set(zn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.CREATE_CONVERSATION_GROUP)}),body:{fromAccount:"",itemList:void 0},keyMap:{request:{itemList:"GroupContactItem",groupID:"ToGroupId"},response:{GroupId:"convGroupID",ToGroupId:"groupID",OptType:"operationType"}}};}(e)),this._configMap.set(Jn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.DELETE_CONVERSATION_GROUP)}),body:{fromAccount:"",groupName:void 0},keyMap:{request:{},response:{GroupId:"convGroupID"}}};}(e)),this._configMap.set(Xn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.UPDATE_CONVERSATION_GROUP)}),body:{fromAccount:"",updateType:void 0,updateGroup:void 0},keyMap:{request:{oldName:"OldGroupName",newName:"NewGroupName",groupID:"ToGroupId",operationType:"ContactOptType",groupName:"OldGroupName",updateItem:"ContactUpdateItem"},response:{ContactOptType:"operationType",ToGroupId:"groupID",GroupId:"convGroupID"}}};}(e)),this._configMap.set(Qn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.UPDATE_CONVERSATION_GROUP)}),body:{fromAccount:"",updateType:void 0,updateGroup:{groupName:void 0,updateGroupType:void 0,updateItem:void 0}},keyMap:{request:{},response:{}}};}(e)),this._configMap.set(Zn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.UPDATE_CONVERSATION_GROUP)}),body:{fromAccount:"",updateType:void 0,updateGroup:void 0},keyMap:{request:{},response:{}}};}(e)),this._configMap.set(ea,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.RECENT_CONTACT,".").concat(W.CMD.GET_CONVERSATION_GROUP_LIST)}),body:{fromAccount:"",startTime:void 0,startIndex:void 0},keyMap:{request:{},response:{GroupId:"convGroupID",ToGroupId:"groupID",OptType:"operationType",CustomMark:"customData",ContactGroupId:"convGroupIDList"}}};}(e)),this._configMap.set(Dn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.PROFILE,".").concat(W.CMD.PORTRAIT_GET)}),body:{fromAccount:"",userItem:[]},keyMap:{request:{toAccount:"To_Account",standardSequence:"StandardSequence",customSequence:"CustomSequence"}}};}(e)),this._configMap.set(Nn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.PROFILE,".").concat(W.CMD.PORTRAIT_SET)}),body:{fromAccount:"",profileItem:[{tag:ze.NICK,value:""},{tag:ze.GENDER,value:""},{tag:ze.ALLOWTYPE,value:""},{tag:ze.AVATAR,value:""}]},keyMap:{request:{toAccount:"To_Account",standardSequence:"StandardSequence",customSequence:"CustomSequence"}}};}(e)),this._configMap.set(An,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.FRIEND,".").concat(W.CMD.GET_BLACKLIST)}),body:{fromAccount:"",startIndex:0,maxLimited:30,lastSequence:0},keyMap:{response:{CurruentSequence:"currentSequence"}}};}(e)),this._configMap.set(kn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.FRIEND,".").concat(W.CMD.ADD_BLACKLIST)}),body:{fromAccount:"",toAccount:[]}};}(e)),this._configMap.set(Rn,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.FRIEND,".").concat(W.CMD.DELETE_BLACKLIST)}),body:{fromAccount:"",toAccount:[]}};}(e)),this._configMap.set(us,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.SET_SELF_STATUS)}),body:{customStatus:""},keyMap:{}};}(e)),this._configMap.set(ls,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.GET_USER_STATUS)}),body:{userIDList:void 0},keyMap:{response:{UserStatusList:"successUserList",ErrorList:"failureUserList",To_Account:"userID",Invalid_Account:"invalidUserID",Status:"statusType"}}};}(e)),this._configMap.set(ds,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.SUBSCRIBE_USER_STATUS)}),body:{userIDList:void 0},keyMap:{response:{ErrorList:"failureUserList",To_Account:"userID",Invalid_Account:"invalidUserID"}}};}(e)),this._configMap.set(ps,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.UNSUBSCRIBE_USER_STATUS)}),body:{userIDList:void 0,unsubscribeAll:void 0},keyMap:{response:{ErrorList:"failureUserList",To_Account:"userID",Invalid_Account:"invalidUserID"}}};}(e)),this._configMap.set(ta,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.GET_JOINED_GROUPS)}),body:{memberAccount:"",limit:void 0,offset:void 0,groupType:void 0,responseFilter:{groupBaseInfoFilter:void 0,selfInfoFilter:void 0},isSupportTopic:0},keyMap:{request:{memberAccount:"Member_Account"},response:{GroupIdList:"groups",NoUnreadSeqList:"excludedUnreadSequenceList",MsgSeq:"readedSequence"}}};}(e)),this._configMap.set(oa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.GET_GROUP_INFO)}),body:{groupIDList:void 0,responseFilter:{groupBaseInfoFilter:["Type","Name","Introduction","Notification","FaceUrl","Owner_Account","CreateTime","InfoSeq","LastInfoTime","LastMsgTime","MemberNum","MaxMemberNum","ApplyJoinOption","NextMsgSeq","ShutUpAllMember"],groupCustomFieldFilter:void 0,memberInfoFilter:void 0,memberCustomFieldFilter:void 0}},keyMap:{request:{groupIDList:"GroupIdList",groupCustomField:"AppDefinedData",memberCustomField:"AppMemberDefinedData",groupCustomFieldFilter:"AppDefinedDataFilter_Group",memberCustomFieldFilter:"AppDefinedDataFilter_GroupMember"},response:{GroupIdList:"groups",AppDefinedData:"groupCustomField",AppMemberDefinedData:"memberCustomField",AppDefinedDataFilter_Group:"groupCustomFieldFilter",AppDefinedDataFilter_GroupMember:"memberCustomFieldFilter",InfoSeq:"infoSequence",MemberList:"members",GroupInfo:"groups",ShutUpUntil:"muteUntil",ShutUpAllMember:"muteAllMembers"}}};}(e)),this._configMap.set(na,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.CREATE_GROUP)}),body:{type:void 0,name:void 0,groupID:void 0,ownerID:void 0,introduction:void 0,notification:void 0,maxMemberNum:void 0,joinOption:void 0,memberList:void 0,groupCustomField:void 0,memberCustomField:void 0,webPushFlag:1,avatar:"",isSupportTopic:void 0},keyMap:{request:{ownerID:"Owner_Account",userID:"Member_Account",avatar:"FaceUrl",maxMemberNum:"MaxMemberCount",joinOption:"ApplyJoinOption",groupCustomField:"AppDefinedData",memberCustomField:"AppMemberDefinedData"},response:{HugeGroupFlag:"avChatRoomFlag",OverJoinedGroupLimit_Account:"overLimitUserIDList"}}};}(e)),this._configMap.set(aa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.DESTROY_GROUP)}),body:{groupID:void 0}};}(e)),this._configMap.set(sa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.MODIFY_GROUP_INFO)}),body:{groupID:void 0,name:void 0,introduction:void 0,notification:void 0,avatar:void 0,joinOption:void 0,groupCustomField:void 0,muteAllMembers:void 0},keyMap:{request:{groupCustomField:"AppDefinedData",muteAllMembers:"ShutUpAllMember",joinOption:"ApplyJoinOption",avatar:"FaceUrl"},response:{AppDefinedData:"groupCustomField",ShutUpAllMember:"muteAllMembers"}}};}(e)),this._configMap.set(ra,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.APPLY_JOIN_GROUP)}),body:{groupID:void 0,applyMessage:void 0,userDefinedField:void 0,webPushFlag:1,historyMessageFlag:void 0},keyMap:{request:{applyMessage:"ApplyMsg",historyMessageFlag:"HugeGroupHistoryMsgFlag"},response:{HugeGroupFlag:"avChatRoomFlag",AVChatRoomKey:"avChatRoomKey",RspMsgList:"messageList",ToGroupId:"to"}}};}(e)),this._configMap.set(ia,function(e){e.a2,e.tinyid;return{head:t(t({},g(e,Hi)),{},{servcmd:"".concat(W.NAME.BIG_GROUP_NO_AUTH,".").concat(W.CMD.APPLY_JOIN_GROUP)}),body:{groupID:void 0,applyMessage:void 0,userDefinedField:void 0,webPushFlag:1},keyMap:{request:{applyMessage:"ApplyMsg"},response:{HugeGroupFlag:"avChatRoomFlag"}}};}(e)),this._configMap.set(ca,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.QUIT_GROUP)}),body:{groupID:void 0}};}(e)),this._configMap.set(ua,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.SEARCH_GROUP_BY_ID)}),body:{groupIDList:void 0,responseFilter:{groupBasePublicInfoFilter:["Type","Name","Introduction","Notification","FaceUrl","CreateTime","Owner_Account","LastInfoTime","LastMsgTime","NextMsgSeq","MemberNum","MaxMemberNum","ApplyJoinOption"]}},keyMap:{response:{}}};}(e)),this._configMap.set(la,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.CHANGE_GROUP_OWNER)}),body:{groupID:void 0,newOwnerID:void 0},keyMap:{request:{newOwnerID:"NewOwner_Account"}}};}(e)),this._configMap.set(da,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.HANDLE_APPLY_JOIN_GROUP)}),body:{groupID:void 0,applicant:void 0,handleAction:void 0,handleMessage:void 0,authentication:void 0,messageKey:void 0,userDefinedField:void 0},keyMap:{request:{applicant:"Applicant_Account",handleAction:"HandleMsg",handleMessage:"ApprovalMsg",messageKey:"MsgKey"}}};}(e)),this._configMap.set(pa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.HANDLE_GROUP_INVITATION)}),body:{groupID:void 0,inviter:void 0,handleAction:void 0,handleMessage:void 0,authentication:void 0,messageKey:void 0,userDefinedField:void 0},keyMap:{request:{inviter:"Inviter_Account",handleAction:"HandleMsg",handleMessage:"ApprovalMsg",messageKey:"MsgKey"}}};}(e)),this._configMap.set(Ia,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.GET_GROUP_APPLICATION)}),body:{startTime:void 0,limit:void 0,handleAccount:void 0},keyMap:{request:{handleAccount:"Handle_Account"}}};}(e)),this._configMap.set(Ta,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.DELETE_GROUP_SYSTEM_MESSAGE)}),body:{messageListToDelete:void 0},keyMap:{request:{messageListToDelete:"DelMsgList",messageSeq:"MsgSeq",messageRandom:"MsgRandom"}}};}(e)),this._configMap.set(Ca,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.BIG_GROUP_LONG_POLLING,".").concat(W.CMD.AVCHATROOM_LONG_POLL)}),body:{USP:1,startSeq:1,startBroadcastSeq:void 0,holdTime:90,key:void 0},keyMap:{request:{USP:"USP"},response:{ToGroupId:"groupID",RspBroadcastMsgList:"broadcastMessageList",IsSystemMsg:"isSystemMessage"}}};}(e)),this._configMap.set(Ea,function(e){e.a2,e.tinyid;return{head:t(t({},g(e,Wi)),{},{servcmd:"".concat(W.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH,".").concat(W.CMD.AVCHATROOM_LONG_POLL)}),body:{USP:1,startSeq:1,holdTime:90,key:void 0},keyMap:{request:{USP:"USP"},response:{ToGroupId:"groupID"}}};}(e)),this._configMap.set(Sa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.GET_ONLINE_MEMBER_NUM)}),body:{groupID:void 0}};}(e)),this._configMap.set(Aa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.SET_GROUP_ATTRIBUTES)}),body:{groupID:void 0,groupAttributeList:void 0,mainSequence:void 0,avChatRoomKey:void 0,attributeControl:["RaceConflict"]},keyMap:{request:{key:"key",value:"value"}}};}(e)),this._configMap.set(ka,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.MODIFY_GROUP_ATTRIBUTES)}),body:{groupID:void 0,groupAttributeList:void 0,mainSequence:void 0,avChatRoomKey:void 0,attributeControl:["RaceConflict"]},keyMap:{request:{key:"key",value:"value"}}};}(e)),this._configMap.set(Ra,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.DELETE_GROUP_ATTRIBUTES)}),body:{groupID:void 0,groupAttributeList:void 0,mainSequence:void 0,avChatRoomKey:void 0,attributeControl:["RaceConflict"]},keyMap:{request:{key:"key"}}};}(e)),this._configMap.set(Oa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.CLEAR_GROUP_ATTRIBUTES)}),body:{groupID:void 0,mainSequence:void 0,avChatRoomKey:void 0,attributeControl:["RaceConflict"]}};}(e)),this._configMap.set(La,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP_ATTR,".").concat(W.CMD.GET_GROUP_ATTRIBUTES)}),body:{groupID:void 0,avChatRoomKey:void 0,groupType:1},keyMap:{request:{avChatRoomKey:"Key",groupType:"GroupType"}}};}(e)),this._configMap.set(ss,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP_COMMUNITY,".").concat(W.CMD.CREATE_TOPIC)}),body:{groupID:void 0,topicName:void 0,avatar:void 0,customData:void 0,topicID:void 0,notification:void 0,introduction:void 0},keyMap:{request:{avatar:"FaceUrl"}}};}(e)),this._configMap.set(rs,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP_COMMUNITY,".").concat(W.CMD.DELETE_TOPIC)}),body:{groupID:void 0,topicIDList:void 0},keyMap:{request:{topicIDList:"TopicIdList"},response:{DestroyResultItem:"resultList"}}};}(e)),this._configMap.set(is,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP_COMMUNITY,".").concat(W.CMD.UPDATE_TOPIC_PROFILE)}),body:{groupID:void 0,topicID:void 0,avatar:void 0,customData:void 0,notification:void 0,introduction:void 0,muteAllMembers:void 0,topicName:void 0},keyMap:{request:{avatar:"FaceUrl",muteAllMembers:"ShutUpAllMember"}}};}(e)),this._configMap.set(cs,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP_COMMUNITY,".").concat(W.CMD.GET_TOPIC_LIST)}),body:{groupID:void 0,topicIDList:void 0,MemberInfoFilter:["NoUnreadSeqList"]},keyMap:{request:{topicIDList:"TopicIdList"},response:{TopicAndSelfInfo:"topicInfoList",TopicInfo:"topic",GroupID:"groupID",ShutUpTime:"muteTime",ShutUpAllFlag:"muteAllMembers",LastMsgTime:"lastMessageTime",MsgSeq:"readedSequence",LastMsgSeq:"sequence",NoUnreadSeqList:"excludedUnreadSequenceList"}}};}(e)),this._configMap.set(Ua,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.GET_GROUP_MEMBER_LIST)}),body:{groupID:void 0,limit:0,offset:void 0,next:void 0,memberRoleFilter:void 0,memberInfoFilter:["Role","NameCard","ShutUpUntil","JoinTime"],memberCustomFieldFilter:void 0},keyMap:{request:{memberCustomFieldFilter:"AppDefinedDataFilter_GroupMember"},response:{AppMemberDefinedData:"memberCustomField",AppDefinedDataFilter_GroupMember:"memberCustomFieldFilter",MemberList:"members",ShutUpUntil:"muteUntil"}}};}(e)),this._configMap.set(ba,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP_AVCHATROOM,".").concat(W.CMD.GET_AVCHATROOM_MEMBER_LIST)}),body:{groupID:void 0,offset:void 0,filter:void 0},keyMap:{request:{offset:"Timestamp",filter:"Mark"},response:{NextTimestamp:"offset"}}};}(e)),this._configMap.set(wa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.GET_GROUP_MEMBER_INFO)}),body:{groupID:void 0,userIDList:void 0,memberInfoFilter:void 0,memberCustomFieldFilter:void 0},keyMap:{request:{userIDList:"Member_List_Account",memberCustomFieldFilter:"AppDefinedDataFilter_GroupMember"},response:{MemberList:"members",ShutUpUntil:"muteUntil",AppDefinedDataFilter_GroupMember:"memberCustomFieldFilter",AppMemberDefinedData:"memberCustomField"}}};}(e)),this._configMap.set(Fa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.ADD_GROUP_MEMBER)}),body:{groupID:void 0,silence:void 0,userIDList:void 0},keyMap:{request:{userID:"Member_Account",userIDList:"MemberList"},response:{MemberList:"members"}}};}(e)),this._configMap.set(qa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.DELETE_GROUP_MEMBER)}),body:{groupID:void 0,userIDList:void 0,reason:void 0},keyMap:{request:{userIDList:"MemberToDel_Account"}}};}(e)),this._configMap.set(Va,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.BAN_AVCHATROOM_MEMBER)}),body:{groupID:void 0,userIDList:void 0,duration:void 0,reason:""},keyMap:{request:{userIDList:"Members_Account",duration:"Duration",reason:"Description"}}};}(e)),this._configMap.set(xa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP,".").concat(W.CMD.MODIFY_GROUP_MEMBER_INFO)}),body:{groupID:void 0,topicID:void 0,userID:void 0,messageRemindType:void 0,nameCard:void 0,role:void 0,memberCustomField:void 0,muteTime:void 0},keyMap:{request:{userID:"Member_Account",memberCustomField:"AppMemberDefinedData",muteTime:"ShutUpTime",messageRemindType:"MsgFlag"}}};}(e)),this._configMap.set(Ba,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.GROUP_AVCHATROOM,".").concat(W.CMD.MARK_AVCHATROOM_MEMBER_INFO)}),body:{groupID:void 0,operationType:1,memberList:[]},keyMap:{request:{operationType:"CommandType",memberList:"MemberList",markType:"Marks",userID:"Member_Account"},response:{CommandType:"operationType",Marks:"markType",Member_Account:"userID"}}};}(e)),this._configMap.set(Ya,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STAT,".").concat(W.CMD.TIM_WEB_REPORT_V2)}),body:{header:{},event:[],quality:[]},keyMap:{request:{SDKType:"sdk_type",SDKVersion:"sdk_version",deviceType:"device_type",platform:"platform",instanceID:"instance_id",traceID:"trace_id",SDKAppID:"sdk_app_id",userID:"user_id",tinyID:"tiny_id",extension:"extension",timestamp:"timestamp",networkType:"network_type",eventType:"event_type",code:"error_code",message:"error_message",moreMessage:"more_message",duplicate:"duplicate",costTime:"cost_time",level:"level",qualityType:"quality_type",reportIndex:"report_index",wholePeriod:"whole_period",totalCount:"total_count",rttCount:"success_count_business",successRateOfRequest:"percent_business",countLessThan1Second:"success_count_business",percentOfCountLessThan1Second:"percent_business",countLessThan3Second:"success_count_platform",percentOfCountLessThan3Second:"percent_platform",successCountOfBusiness:"success_count_business",successRateOfBusiness:"percent_business",successCountOfPlatform:"success_count_platform",successRateOfPlatform:"percent_platform",successCountOfMessageReceived:"success_count_business",successRateOfMessageReceived:"percent_business",avgRTT:"average_value",avgDelay:"average_value",avgValue:"average_value",uiPlatform:"ui_platform"}}};}(n)),this._configMap.set(ja,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.HEARTBEAT,".").concat(W.CMD.ALIVE)}),body:{}};}(e)),this._configMap.set($a,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_PUSH,".").concat(W.CMD.MESSAGE_PUSH)}),body:{},keyMap:{response:{C2cMsgArray:"C2CMessageArray",GroupMsgArray:"groupMessageArray",GroupTips:"groupTips",C2cNotifyMsgArray:"C2CNotifyMessageArray",C2cMsgInfo:"C2CReadReceiptArray",ClientSeq:"clientSequence",MsgPriority:"priority",NoticeSeq:"noticeSequence",MsgContent:"content",MsgType:"type",MsgBody:"elements",ToGroupId:"to",Desc:"description",Ext:"extension",IsSyncMsg:"isSyncMessage",Flag:"needSync",NeedAck:"needAck",PendencyAdd_Account:"userID",ProfileImNick:"nick",PendencyType:"applicationType",C2CReadAllMsg:"readAllC2CMessage",IsNeedReadReceipt:"needReadReceipt",Status:"statusType",MsgExtensionNotify:"messageExtensionNotify",ExtensionC2cMsgInfo:"messageInfo",ExtensionGroupMsgInfo:"messageInfo",MsgOptType:"operateType",SetKVInfo:"operateResultList",DeleteKVInfo:"operateResultList",ClearKVInfo:"operateResultList",MsgKeyValue:"extensions",ClearMsgSeq:"clearSequence",MsgLastSeq:"globalSequence"}}};}(e)),this._configMap.set(za,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_PUSH,".").concat(W.CMD.MULTI_MESSAGE_PUSH)}),body:{},keyMap:{response:{GroupMsgArray:"groupMessageArray",GroupTips:"groupTips",ClientSeq:"clientSequence",MsgPriority:"priority",NoticeSeq:"noticeSequence",MsgContent:"content",MsgType:"type",MsgBody:"elements",ToGroupId:"to",Desc:"description",Ext:"extension",IsSyncMsg:"isSyncMessage",Flag:"needSync",NeedAck:"needAck",PendencyType:"applicationType"}}};}(e)),this._configMap.set(Ja,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.OPEN_IM,".").concat(W.CMD.MESSAGE_PUSH_ACK)}),body:{sessionData:void 0},keyMap:{request:{sessionData:"SessionData"}}};}(e)),this._configMap.set(Xa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.STATUS_FORCE_OFFLINE)}),body:{},keyMap:{response:{C2cNotifyMsgArray:"C2CNotifyMessageArray",NoticeSeq:"noticeSequence",KickoutMsgNotify:"kickoutMsgNotify",NewInstInfo:"newInstanceInfo"}}};}(e)),this._configMap.set(Za,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_LONG_MESSAGE,".").concat(W.CMD.DOWNLOAD_MERGER_MESSAGE)}),body:{downloadKey:""},keyMap:{response:{Data:"data",Desc:"description",Ext:"extension",Download_Flag:"downloadFlag",ThumbUUID:"thumbUUID",VideoUUID:"videoUUID"}}};}(e)),this._configMap.set(Qa,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_LONG_MESSAGE,".").concat(W.CMD.UPLOAD_MERGER_MESSAGE)}),body:{messageList:[]},keyMap:{request:{fromAccount:"From_Account",toAccount:"To_Account",msgTimeStamp:"MsgTimeStamp",msgSeq:"MsgSeq",msgRandom:"MsgRandom",msgBody:"MsgBody",type:"MsgType",content:"MsgContent",data:"Data",description:"Desc",extension:"Ext",sizeType:"Type",uuid:"UUID",url:"",imageUrl:"URL",fileUrl:"Url",remoteAudioUrl:"Url",remoteVideoUrl:"VideoUrl",thumbUUID:"ThumbUUID",videoUUID:"VideoUUID",videoUrl:"",downloadFlag:"Download_Flag",from:"From_Account",time:"MsgTimeStamp",messageRandom:"MsgRandom",messageSequence:"MsgSeq",elements:"MsgBody",clientSequence:"ClientSeq",payload:"MsgContent",messageList:"MsgList",messageNumber:"MsgNum",abstractList:"AbstractList",messageBody:"MsgBody"}}};}(e)),this._configMap.set(hs,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.SET_TOKEN)}),body:{tokenID:"",pushMsg:0,sdkAppID:0,businessID:"",deviceBrand:"",deviceToken:"",isTpns:0,isWebUniapp:0},keyMap:{request:{tokenID:"TokenID",pushMsg:"PushMsg",sdkAppID:"EnterVersion",businessID:"BusiID",deviceBrand:"InstType",deviceToken:"VarToken",isTpns:"IsTpns"}}};}(e)),this._configMap.set(_s,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.STAT_FOREGROUND)}),body:{isWebUniapp:0}};}(e)),this._configMap.set(gs,function(e){return{head:t(t({},e),{},{servcmd:"".concat(W.NAME.IM_OPEN_STATUS,".").concat(W.CMD.STAT_BACKGROUND)}),body:{C2CUnread:0,GroupUnread:0,isWebUniapp:0},keyMap:{request:{c2cUnreadCount:"C2cUnread",groupUnreadCount:"GrpUnread"}}};}(e));}},{key:"has",value:function value(e){return this._configMap.has(e);}},{key:"get",value:function value(e){return this._configMap.get(e);}},{key:"update",value:function value(){this._fillConfigMap();}},{key:"getKeyMap",value:function value(e){return this.has(e)?this.get(e).keyMap||{}:(je.warn("".concat(this._className,".getKeyMap unknown protocolName:").concat(e)),{});}},{key:"getProtocolData",value:function value(e){var t=e.protocolName,o=e.requestData,n=this.get(t),a=null;if(o){var s=this._simpleDeepCopy(n),r=this._updateService(o,s),i=r.body,c=Object.create(null);for(var u in i){if(Object.prototype.hasOwnProperty.call(i,u)){if(c[u]=i[u],void 0===o[u])continue;c[u]=o[u];}}r.body=c,a=this._getUplinkData(r);}else a=this._getUplinkData(n);return a;}},{key:"_getUplinkData",value:function value(e){var t=this._requestDataCleaner(e),o=Wt(t.head),n=Ai(t.body,this._getRequestKeyMap(o));return t.body=n,t;}},{key:"_updateService",value:function value(e,t){var o=Wt(t.head);if(this._isFromGroupRequest(t)){var n=e.type,a=e.groupID,s=void 0===a?void 0:a,r=e.groupIDList,i=void 0===r?[]:r;pt(s)&&(s=i[0]||""),Gt({type:n,groupID:s})&&(t.head.servcmd="".concat(W.NAME.GROUP_COMMUNITY,".").concat(o));}return t;}},{key:"_isFromGroupRequest",value:function value(e){return e.head.servcmd.includes(W.NAME.GROUP)||e.head.servcmd.includes(W.NAME.GROUP_ATTR);}},{key:"_getRequestKeyMap",value:function value(e){var o=this.getKeyMap(e);return t(t({},Si.request),o.request);}},{key:"_requestDataCleaner",value:function value(e){var t=Array.isArray(e)?[]:Object.create(null);for(var n in e){Object.prototype.hasOwnProperty.call(e,n)&&mt(n)&&null!==e[n]&&void 0!==e[n]&&("object"!==o(e[n])?t[n]=e[n]:t[n]=this._requestDataCleaner.bind(this)(e[n]));}return t;}},{key:"_simpleDeepCopy",value:function value(e){for(var t,o=Object.keys(e),n={},a=0,s=o.length;a<s;a++){t=o[a],dt(e[t])?n[t]=Array.from(e[t]):ut(e[t])?n[t]=this._simpleDeepCopy(e[t]):n[t]=e[t];}return n;}}]),e;}(),ji=[Ja],$i=function(){function e(t){n(this,e),this._sessionModule=t,this._className="DownlinkHandler",this._eventHandlerMap=new Map(),this._eventHandlerMap.set("C2CMessageArray",this._c2cMessageArrayHandler.bind(this)),this._eventHandlerMap.set("groupMessageArray",this._groupMessageArrayHandler.bind(this)),this._eventHandlerMap.set("groupTips",this._groupTipsHandler.bind(this)),this._eventHandlerMap.set("C2CNotifyMessageArray",this._C2CNotifyMessageArrayHandler.bind(this)),this._eventHandlerMap.set("C2CReadReceiptArray",this._C2CReadReceiptArrayHandler.bind(this)),this._eventHandlerMap.set("profileModify",this._profileHandler.bind(this)),this._eventHandlerMap.set("friendListMod",this._relationChainHandler.bind(this)),this._eventHandlerMap.set("recentContactMod",this._recentContactHandler.bind(this)),this._eventHandlerMap.set("readAllC2CMessage",this._allMessageReadHandler.bind(this)),this._eventHandlerMap.set("c2cMessageModified",this._c2cMessageModifiedHandler.bind(this)),this._eventHandlerMap.set("groupMessageModified",this._groupMessageModifiedHandler.bind(this)),this._eventHandlerMap.set("userStatusList",this._userStatusListHandler.bind(this)),this._eventHandlerMap.set("messageExtensionNotify",this._messageExtensionNotifyHandler.bind(this)),this._keys=M(this._eventHandlerMap.keys());}return s(e,[{key:"_c2cMessageArrayHandler",value:function value(e){var t=this._sessionModule.getModule(Bo);if(t){if(e.dataList.forEach(function(e){if(1===e.isSyncMessage){var t=e.from;e.from=e.to,e.to=t;}}),1===e.needSync)this._sessionModule.getModule(tn).startOnlineSync();t.onNewC2CMessage({dataList:e.dataList,isInstantMessage:!0});}}},{key:"_c2cMessageModifiedHandler",value:function value(e){var t=this._sessionModule.getModule(Bo);t&&t.onC2CMessageModified(e);}},{key:"_groupMessageArrayHandler",value:function value(e){var t=this._sessionModule.getModule(Ko);t&&t.onNewGroupMessage({event:e.event,dataList:e.dataList,isInstantMessage:!0});}},{key:"_groupMessageModifiedHandler",value:function value(e){var t=this._sessionModule.getModule(Ko);t&&t.onGroupMessageModified(e);}},{key:"_groupTipsHandler",value:function value(e){var t=this._sessionModule.getModule(Ko);if(t){var o=e.event,n=e.dataList,a=e.isInstantMessage,s=void 0===a||a,r=e.isSyncingEnded;switch(o){case 4:case 6:t.onNewGroupTips({event:o,dataList:n});break;case 5:for(var i=0;i<n.length;i++){if(dt(n[i].elements.revokedInfos))t.onGroupMessageRevoked({dataList:n});else if(dt(n[i].elements.groupMessageReadNotice))t.onGroupMessageReadNotice({dataList:n});else{if(!dt(n[i].elements.readReceiptList)){t.onNewGroupSystemNotice({dataList:n,isInstantMessage:s,isSyncingEnded:r});break;}t.onReadReceiptList({dataList:n});}}break;case 12:this._sessionModule.getModule(jo).onNewGroupAtTips({dataList:n});break;default:je.log("".concat(this._className,"._groupTipsHandler unknown event:").concat(o," dataList:"),n);}}}},{key:"_C2CNotifyMessageArrayHandler",value:function value(e){var t=this,o=e.dataList;if(dt(o)){var n=this._sessionModule.getModule(Bo);o.forEach(function(e){if(lt(e))if(e.hasOwnProperty("kickoutMsgNotify")){var a=e.kickoutMsgNotify,s=a.kickType,r=a.newInstanceInfo,i=void 0===r?{}:r;1===s?t._sessionModule.onMultipleAccountKickedOut(i):2===s?t._sessionModule.onMultipleDeviceKickedOut(i):3===s&&t._sessionModule.onRestApiKickedOut(i);}else if(e.hasOwnProperty("c2cMessageRevokedNotify"))n&&n.onC2CMessageRevoked({dataList:o});else if(e.hasOwnProperty("c2cMessageReadReceipt"))n&&n.onC2CMessageReadReceipt({dataList:o});else if(e.hasOwnProperty("c2cMessageReadNotice"))n&&n.onC2CMessageReadNotice({dataList:o});else if(e.hasOwnProperty("muteNotificationsSync")){t._sessionModule.getModule(jo).onC2CMessageRemindTypeSynced({dataList:o});}});}}},{key:"_C2CReadReceiptArrayHandler",value:function value(e){this._sessionModule.getModule(Bo).onReadReceiptList(e);}},{key:"_profileHandler",value:function value(e){this._sessionModule.getModule(xo).onProfileModified({dataList:e.dataList});var t=this._sessionModule.getModule(Ho);t&&t.onFriendProfileModified({dataList:e.dataList});}},{key:"_relationChainHandler",value:function value(e){this._sessionModule.getModule(xo).onRelationChainModified({dataList:e.dataList});var t=this._sessionModule.getModule(Ho);t&&t.onRelationChainModified({dataList:e.dataList});}},{key:"_recentContactHandler",value:function value(e){var t=e.dataList;if(dt(t)){var o=this._sessionModule.getModule(jo);o&&t.forEach(function(e){var t=e.pushType;if(1===t){var n=e.recentContactDeleteItem;o.onConversationDeleted(n.recentContactList);}else if(2===t){var a=e.recentContactTopItem;o.onConversationPinned(a.recentContactList);}else if(3===t){var s=e.recentContactTopItem;o.onConversationUnpinned(s.recentContactList);}else if(4===t){var r=e.recentContactMarkContact;o.onConversationMarkUpdated(r.recentContactMarkContactItem);}else if(5===t){var i=e.recentContactCreateContactGroup;o.onConversationGroupCreated(i.msgContactGroupContactItem);}else if(6===t){var c=e.recentContactDelContactGroup;o.onConversationGroupDeleted(c.msgGroupItem);}else if(7===t){var u=e.recentContactUpdateContactGroup,l=u.updateType,d=u.msgUpdateGroup,p=u.msgUpdateContact;if(1===l){var g=d.updateGroupType;1===g?o.onConversationGroupNameUpdated(d):2===g&&o.onConversationInGroupUpdated(d);}else 2===l&&o.onConversationAddedToOrDeletedFromGroup(p);}});}}},{key:"_allMessageReadHandler",value:function value(e){var t=e.dataList,o=this._sessionModule.getModule(jo);o&&o.onPushedAllMessageRead(t);}},{key:"_userStatusListHandler",value:function value(e){this._sessionModule.getModule(xo).onUserStatusUpdated(e);}},{key:"_messageExtensionNotifyHandler",value:function value(e){this._sessionModule.getModule(Vo).onMessageExtensionNotify(e);}},{key:"onMessage",value:function value(e){var t=this,o=e.body;if(this._filterMessageFromIMOpenPush(e)){var n=o.eventArray,a=o.isInstantMessage,s=o.isSyncingEnded,r=o.needSync;if(dt(n))for(var i=null,c=null,u=0,l=0,d=n.length;l<d;l++){u=(i=n[l]).event;var p=Object.keys(i).find(function(e){return-1!==t._keys.indexOf(e);});p?(c=14===u?{readAllC2CMessage:i[p],groupMessageReadInfoList:i.groupMessageReadNotice||[]}:16===u?{userID:i.userID,readReceiptList:i[p]}:i[p],this._eventHandlerMap.get(p)({event:u,dataList:c,isInstantMessage:a,isSyncingEnded:s,needSync:r})):je.log("".concat(this._className,".onMessage unknown eventItem:").concat(i));}}}},{key:"_filterMessageFromIMOpenPush",value:function value(e){var t=e.head,o=e.body,n=t.servcmd,a=!1;if(pt(n)||(a=n.includes(W.NAME.IM_CONFIG_MANAGER)||n.includes(W.NAME.OVERLOAD_PUSH)||n.includes(W.NAME.STAT_SERVICE)),!a)return!0;if(n.includes(W.CMD.PUSHED_CLOUD_CONTROL_CONFIG))this._sessionModule.getModule(sn).onPushedCloudControlConfig(o);else if(n.includes(W.CMD.PUSHED_COMMERCIAL_CONFIG)){this._sessionModule.getModule(ln).onPushedConfig(o);}else if(n.includes(W.CMD.OVERLOAD_NOTIFY))this._sessionModule.onPushedServerOverload(o);else if(n.includes(W.CMD.KICK_OTHER)){var s=Date.now();this._sessionModule.reLoginOnKickOther();var r=new Os(Ls.KICK_OTHER),i=this._sessionModule.getModule(Fo).getLastWsHelloTs(),c=s-i;r.setMessage("last wshello time:".concat(i," diff:").concat(c,"ms")).setNetworkType(this._sessionModule.getNetworkType()).end();}return!1;}}]),e;}(),zi=[{cmd:W.CMD.GET_GROUP_INFO,interval:1,count:20},{cmd:W.CMD.GET_AVCHATROOM_MEMBER_LIST,interval:3,count:1},{cmd:W.CMD.GET_GROUP_APPLICATION,interval:1,count:1},{cmd:W.CMD.GET_TOPIC_LIST,interval:1,count:10},{cmd:W.CMD.SET_GROUP_ATTRIBUTES,interval:5,count:10},{cmd:W.CMD.MODIFY_GROUP_ATTRIBUTES,interval:5,count:10},{cmd:W.CMD.DELETE_GROUP_ATTRIBUTES,interval:5,count:10},{cmd:W.CMD.CLEAR_GROUP_ATTRIBUTES,interval:5,count:10},{cmd:W.CMD.GET_GROUP_ATTRIBUTES,interval:5,count:20},{cmd:W.CMD.SET_ALL_MESSAGE_READ,interval:1,count:1},{cmd:W.CMD.GET_USER_STATUS,interval:5,count:20},{cmd:W.CMD.SUBSCRIBE_USER_STATUS,interval:5,count:20},{cmd:W.CMD.UNSUBSCRIBE_USER_STATUS,interval:5,count:20}],Ji=function(e){i(a,e);var o=f(a);function a(e){var t;return n(this,a),(t=o.call(this,e))._className="SessionModule",t._platform=t.getPlatform(),t._protocolHandler=new Yi(_(t)),t._messageDispatcher=new $i(_(t)),t._commandFrequencyLimitMap=new Map(),t._commandRequestInfoMap=new Map(),t._serverOverloadInfoMap=new Map(),t._init(),t.getInnerEmitterInstance().on(ur,t._onCloudConfigUpdated,_(t)),t;}return s(a,[{key:"_init",value:function value(){this._updateCommandFrequencyLimitMap(zi);}},{key:"_onCloudConfigUpdated",value:function value(){var e=this.getCloudConfig("cmd_frequency_limit");pt(e)||(e=JSON.parse(e),this._updateCommandFrequencyLimitMap(e));}},{key:"_updateCommandFrequencyLimitMap",value:function value(e){var t=this;e.forEach(function(e){t._commandFrequencyLimitMap.set(e.cmd,{interval:e.interval,count:e.count});});}},{key:"updateProtocolConfig",value:function value(){this._protocolHandler.update();}},{key:"request",value:function value(e){je.debug("".concat(this._className,".request options:"),e);var t=e.protocolName,o=e.tjgID;if(!this._protocolHandler.has(t))return je.warn("".concat(this._className,".request unknown protocol:").concat(t)),sr({code:_n.CANNOT_FIND_PROTOCOL});var n=this.getProtocolData(e),a=n.head.servcmd;if(this._isFrequencyOverLimit(a))return sr({code:_n.OVER_FREQUENCY_LIMIT});if(this._isServerOverload(a))return sr({code:_n.OPEN_SERVICE_OVERLOAD_ERROR});no(o)||(n.head.tjgID=o);var s=this.getModule(nn);return ji.includes(t)?s.simplySend(n):s.send(n);}},{key:"getKeyMap",value:function value(e){return this._protocolHandler.getKeyMap(e);}},{key:"genCommonHead",value:function value(){var e=this.getModule($o);return{ver:"v4",platform:this._platform,websdkappid:b,websdkversion:U,a2:e.getA2Key()||void 0,tinyid:e.getTinyID()||void 0,status_instid:e.getStatusInstanceID(),sdkappid:e.getSDKAppID(),contenttype:e.getContentType(),reqtime:0,identifier:e.getA2Key()?void 0:e.getUserID(),usersig:e.getA2Key()?void 0:e.getUserSig(),sdkability:192371,tjgID:""};}},{key:"genCosSpecifiedHead",value:function value(){var e=this.getModule($o);return{ver:"v4",platform:this._platform,websdkappid:b,websdkversion:U,sdkappid:e.getSDKAppID(),contenttype:e.getContentType(),reqtime:0,identifier:e.getUserID(),usersig:e.getUserSig(),status_instid:e.getStatusInstanceID(),sdkability:192371};}},{key:"genSSOReportHead",value:function value(){var e=this.getModule($o);return{ver:"v4",platform:this._platform,websdkappid:b,websdkversion:U,sdkappid:e.getSDKAppID(),contenttype:"",reqtime:0,identifier:"",usersig:"",status_instid:e.getStatusInstanceID(),sdkability:192371};}},{key:"getProtocolData",value:function value(e){return this._protocolHandler.getProtocolData(e);}},{key:"trans",value:function value(e){var o=e.servcmd,n=e.data,a={head:t(t({},this.genCommonHead()),{},{servcmd:o}),body:n};return this.getModule(nn).send(a);}},{key:"onErrorCodeNotZero",value:function value(e){var t=e.errorCode;if(t===_n.HELLO_ANSWER_KICKED_OUT){var o=e.kickType,n=e.newInstanceInfo,a=void 0===n?{}:n;1===o?this.onMultipleAccountKickedOut(a):2===o?this.onMultipleDeviceKickedOut(a):3===o&&this.onRestApiKickedOut(a);}t!==_n.MESSAGE_A2KEY_EXPIRED&&t!==_n.ACCOUNT_A2KEY_EXPIRED||(this._onUserSigExpired(),this.getModule(nn).reConnect());}},{key:"onMessage",value:function value(e){var t=e.body,o=t.needAck,n=void 0===o?0:o,a=t.sessionData;1===n&&this._sendACK(a),this._messageDispatcher.onMessage(e);}},{key:"onReconnected",value:function value(){this._reLoginOnReconnected();}},{key:"reLoginOnKickOther",value:function value(){je.log("".concat(this._className,".reLoginOnKickOther")),this._reLogin();}},{key:"_reLoginOnReconnected",value:function value(){je.log("".concat(this._className,"._reLoginOnReconnected")),this._reLogin();}},{key:"_reLogin",value:function value(){var e=this;if(this.isLoggedIn()){var t=0,o=this.getModule(dn);o.canIUseOfflinePush()&&(t=o.getUniAppPlatform()),this.request({protocolName:Mn,requestData:{isWebUniapp:t}}).then(function(t){var o=t.data.instanceID;e.getModule($o).setStatusInstanceID(o),je.log("".concat(e._className,"._reLogin ok. start to sync unread messages")),e.getModule(jo).syncConversationList().then(function(){e.getModule(cn).start();}),e.getModule(Ko).updateLocalMainSequenceOnReconnected();var n=e.getModule(Yo);n.resetGetTopicTime(),n.getTopicListOnReconnected();});}}},{key:"onMultipleAccountKickedOut",value:function value(e){this.getModule(Fo).onMultipleAccountKickedOut(e);}},{key:"onMultipleDeviceKickedOut",value:function value(e){this.getModule(Fo).onMultipleDeviceKickedOut(e);}},{key:"_onUserSigExpired",value:function value(){this.getModule(Fo).onUserSigExpired();}},{key:"onRestApiKickedOut",value:function value(e){this.getModule(Fo).onRestApiKickedOut(e);}},{key:"_sendACK",value:function value(e){this.request({protocolName:Ja,requestData:{sessionData:e}});}},{key:"_isFrequencyOverLimit",value:function value(e){var t=e.split(".")[1];if(!this._commandFrequencyLimitMap.has(t))return!1;if(!this._commandRequestInfoMap.has(t))return this._commandRequestInfoMap.set(t,{startTime:Date.now(),requestCount:1}),!1;var o=this._commandFrequencyLimitMap.get(t),n=o.count,a=o.interval,s=this._commandRequestInfoMap.get(t),r=s.startTime,i=s.requestCount;if(Date.now()-r>1e3*a)return this._commandRequestInfoMap.set(t,{startTime:Date.now(),requestCount:1}),!1;i+=1,this._commandRequestInfoMap.set(t,{startTime:r,requestCount:i});var c=!1;return i>n&&(c=!0),c;}},{key:"_isServerOverload",value:function value(e){if(!this._serverOverloadInfoMap.has(e))return!1;var t=this._serverOverloadInfoMap.get(e),o=t.overloadTime,n=t.waitingTime,a=!1;return Date.now()-o<=1e3*n?a=!0:(this._serverOverloadInfoMap.delete(e),a=!1),a;}},{key:"onPushedServerOverload",value:function value(e){var t=e.overloadCommand,o=e.waitingTime;this._serverOverloadInfoMap.set(t,{overloadTime:Date.now(),waitingTime:o}),je.warn("".concat(this._className,".onPushedServerOverload waitingTime:").concat(o,"s"));}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._updateCommandFrequencyLimitMap(zi),this._commandRequestInfoMap.clear(),this._serverOverloadInfoMap.clear();}}]),a;}(mn),Xi=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="MessageLossDetectionModule",a._maybeLostSequencesMap=new Map(),a._firstRoundRet=[],a;}return s(o,[{key:"onMessageMaybeLost",value:function value(e,t,o){this._maybeLostSequencesMap.has(e)||this._maybeLostSequencesMap.set(e,[]);for(var n=this._maybeLostSequencesMap.get(e),a=0;a<o;a++){-1===n.indexOf(t+a)&&n.push(t+a);}}},{key:"detectFirstRound",value:function value(e,t){var o=this._maybeLostSequencesMap.get(e);if(!no(o)&&!no(t)){var n=o.filter(function(e){return-1===t.indexOf(e);});0===n.length?je.info("".concat(this._className,".detectFirstRound no message loss. conversationID:").concat(e)):this._firstRoundRet=this._firstRoundRet.concat(n),o.length=0;}}},{key:"detectSecondRound",value:function value(e,t){if(!no(this._firstRoundRet)&&!no(t)){var o=this._firstRoundRet.filter(function(e){return-1===t.indexOf(e);});this._firstRoundRet.length=0;var n,a=o.length;if(0!==a)a<=5?n=e+"-"+o.join("-"):(o.sort(function(e,t){return e-t;}),n=e+" start:"+o[0]+" end:"+o[a-1]+" count:"+a),new Os(Ls.MESSAGE_LOSS).setMessage(n).setNetworkType(this.getNetworkType()).setLevel("warning").end(),je.info("".concat(this._className,".detectSecondRound message loss detected. conversationID:").concat(e," lostSequences:").concat(o));}}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._maybeLostSequencesMap.clear(),this._firstRoundRet.length=0;}}]),o;}(mn),Qi=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="CloudControlModule",a._cloudConfig=new Map(),a._expiredTime=0,a._version=0,a._isFetching=!1,a;}return s(o,[{key:"getCloudConfig",value:function value(e){return pt(e)?this._cloudConfig:this._cloudConfig.has(e)?this._cloudConfig.get(e):void 0;}},{key:"_canFetchConfig",value:function value(){return this.isLoggedIn()&&!this._isFetching&&Date.now()>=this._expiredTime;}},{key:"fetchConfig",value:function value(){var e=this,t=this._canFetchConfig();if(je.log("".concat(this._className,".fetchConfig canFetchConfig:").concat(t)),t){var o=new Os(Ls.FETCH_CLOUD_CONTROL_CONFIG),n=this.getModule($o).getSDKAppID();this._isFetching=!0,this.request({protocolName:es,requestData:{SDKAppID:n,version:this._version}}).then(function(t){e._isFetching=!1,o.setMessage("version:".concat(e._version," newVersion:").concat(t.data.version," config:").concat(t.data.cloudControlConfig)).setNetworkType(e.getNetworkType()).end(),je.log("".concat(e._className,".fetchConfig ok")),e._parseCloudControlConfig(t.data);}).catch(function(t){e._isFetching=!1,e.probeNetwork().then(function(e){var n=m(e,2),a=n[0],s=n[1];o.setError(t,a,s).end();}),je.log("".concat(e._className,".fetchConfig failed. error:"),t),e._setExpiredTimeOnResponseError(12e4);});}}},{key:"onPushedCloudControlConfig",value:function value(e){je.log("".concat(this._className,".onPushedCloudControlConfig")),new Os(Ls.PUSHED_CLOUD_CONTROL_CONFIG).setNetworkType(this.getNetworkType()).setMessage("newVersion:".concat(e.version," config:").concat(e.cloudControlConfig)).end(),this._parseCloudControlConfig(e);}},{key:"onCheckTimer",value:function value(e){this._canFetchConfig()&&this.fetchConfig();}},{key:"_parseCloudControlConfig",value:function value(e){var t=this,o="".concat(this._className,"._parseCloudControlConfig"),n=e.errorCode,a=e.errorMessage,s=e.cloudControlConfig,r=e.version,i=e.expiredTime;if(0===n){if(this._version!==r){var c=null;try{c=JSON.parse(s);}catch(u){this.isPrivateNetWork()||je.error("".concat(o," JSON parse error. cloudControlConfig:"),s);}c&&(this._cloudConfig.clear(),Object.keys(c).forEach(function(e){t._cloudConfig.set(e,c[e]);}),this._version=r,this.emitInnerEvent(ur));}this._expiredTime=Date.now()+1e3*i;}else pt(n)?(je.log("".concat(o," failed. Invalid message format:"),e),this._setExpiredTimeOnResponseError(36e5)):(je.error("".concat(o," errorCode:").concat(n," errorMessage:").concat(a)),this._setExpiredTimeOnResponseError(12e4));}},{key:"_setExpiredTimeOnResponseError",value:function value(e){this._expiredTime=Date.now()+e;}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._cloudConfig.clear(),this._expiredTime=0,this._version=0,this._isFetching=!1;}}]),o;}(mn),Zi=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="RecoverMessageModule",a.PULL_LIMIT_COUNT=15,a;}return s(o,[{key:"start",value:function value(){this._recoverGroupChat(),this._recoverC2CChat();}},{key:"_recoverGroupChat",value:function value(){var e,t,o=this,n=this._getLocalConversationList().filter(function(e){return e.type===N.CONV_GROUP&&e.groupProfile.type!==N.GRP_AVCHATROOM;}),a=this.getModule(jo),s=0,r=0,i=0;n.forEach(function(n){var c=n.conversationID,u=n.lastMessage;t=c.replace(N.CONV_GROUP,""),e=a.getLocalLastMessage(c),u&&0!==u.lastSequence&&e&&(r=u.lastSequence,s=e.sequence,i=r-s,s>0&&i>=1&&i<300&&o._recoverGroupMessage({groupID:t,localLastMessageSequence:s,remoteLastMessageSequence:r}));});}},{key:"_recoverC2CChat",value:function value(){var e,t=this,o=this._getLocalConversationList().filter(function(e){return e.type===N.CONV_C2C;}),n=this.getModule(jo),a=0,s=0,r=0,i=[Promise.resolve()];o.forEach(function(o){var c=o.conversationID,u=o.lastMessage;e=n.getLocalLastMessage(c),u&&0!==u.lastTime&&e&&(s=u.lastTime,a=e.time,r=s-a,a>0&&r>=1&&r<=600&&i.push(t._recoverC2CMessage({conversationID:c,localLastMessageTime:a,remoteLastMessageTime:s})));}),Promise.all(i).then(function(){je.log("".concat(t._className,"._recoverC2CChat all promise fulfilled, start to sync unread messages")),t.getModule(tn).startSyncOnReconnected();});}},{key:"_getLocalConversationList",value:function value(){return this.getModule(jo).getLocalConversationList();}},{key:"_recoverGroupMessage",value:function value(e){var t=this,o="".concat(this._className,"._recoverGroupMessage");je.log("".concat(o," options:"),e);var n=e.groupID,a=e.localLastMessageSequence,s=e.remoteLastMessageSequence;this._getGroupRomaingMessage({groupID:n,sequence:a}).then(function(e){var a=e.data,r=a.complete,i=a.messageList;if(!pt(i)){var c=i[0].sequence;je.log("".concat(o," pkgLastMessageSequence:").concat(c," complete:").concat(r)),c<s&&2!==r&&t._recoverGroupMessage({groupID:n,localLastMessageSequence:c,remoteLastMessageSequence:s}),new Os(Ls.RECOVER_MESSAGE).setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(n," complete:").concat(r," messageList length:").concat(i.length)).end(),t.getModule(Ko).onNewGroupMessage({dataList:i,isInstantMessage:!1,updateUnreadCount:!1});}});}},{key:"_getGroupRomaingMessage",value:function value(e){var t=e.groupID,o=e.sequence;return this.request({protocolName:fa,requestData:{groupID:t,count:this.PULL_LIMIT_COUNT,sequence:o+this.PULL_LIMIT_COUNT-1}});}},{key:"_recoverC2CMessage",value:function value(e){var t=this,o="".concat(this._className,"._recoverC2CMessage");je.log("".concat(this._className,"._recoverC2CMessage options:"),e);var n=e.conversationID,a=e.localLastMessageTime,s=e.remoteLastMessageTime;return this._getC2CRoamingMessage({conversationID:n,time:a}).then(function(e){var a=e.data,r=a.complete,i=a.messageList;if(!pt(i)){new Os(Ls.RECOVER_MESSAGE).setNetworkType(t.getNetworkType()).setMessage("".concat(n," complete:").concat(r," messageList length:").concat(c)).end(),t.getModule(Bo).onNewC2CMessage({dataList:i,isInstantMessage:!0});var c=i.length,u=i[c-1].time;if(je.log("".concat(o," pkgLastMessageTime:").concat(u," complete:").concat(r)),u<s&&1!==r)return t._recoverC2CMessage({conversationID:n,localLastMessageTime:u,remoteLastMessageTime:s});}});}},{key:"_getC2CRoamingMessage",value:function value(e){var t=e.conversationID,o=e.time;return this.request({protocolName:Un,requestData:{peerAccount:t.replace(N.CONV_C2C,""),count:this.PULL_LIMIT_COUNT+1,lastMessageTime:o,direction:1}});}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset"));}}]),o;}(mn),ec=function(){function e(){n(this,e),this._className="AvgE2EDelay",this._e2eDelayArray=[];}return s(e,[{key:"addMessageDelay",value:function value(e){var t=Ke()-e;t>=0&&this._e2eDelayArray.push(t);}},{key:"_calcAvg",value:function value(e,t){if(0===t)return 0;var o=0;return e.forEach(function(e){o+=e;}),Yt(o/t,1);}},{key:"_calcCountWithLimit",value:function value(e){var t=e.e2eDelayArray,o=e.min,n=e.max;return t.filter(function(e){return o<=e&&e<n;}).length;}},{key:"_calcPercent",value:function value(e,t){var o=Yt(e/t*100,2);return o>100&&(o=100),o;}},{key:"_checkE2EDelayException",value:function value(e,t){var o=e.filter(function(e){return e>t;});if(o.length>0){var n=o.length,a=Math.min.apply(Math,M(o)),s=Math.max.apply(Math,M(o)),r=this._calcAvg(o,n),i=Yt(n/e.length*100,2);if(i>50)new Os(Ls.MESSAGE_E2E_DELAY_EXCEPTION).setMessage("message e2e delay exception. count:".concat(n," min:").concat(a," max:").concat(s," avg:").concat(r," percent:").concat(i)).setLevel("warning").end();}}},{key:"getStatResult",value:function value(){var e=this._e2eDelayArray.length;if(0===e)return null;var t=M(this._e2eDelayArray),o=this._calcCountWithLimit({e2eDelayArray:t,min:0,max:1}),n=this._calcCountWithLimit({e2eDelayArray:t,min:1,max:3}),a=this._calcPercent(o,e),s=this._calcPercent(n,e),r=this._calcAvg(t,e);return this._checkE2EDelayException(t,3),t.length=0,this.reset(),{totalCount:e,countLessThan1Second:o,percentOfCountLessThan1Second:a,countLessThan3Second:n,percentOfCountLessThan3Second:s,avgDelay:r};}},{key:"reset",value:function value(){this._e2eDelayArray.length=0;}}]),e;}(),tc=function(){function e(){n(this,e),this._className="AvgRTT",this._requestCount=0,this._rttArray=[];}return s(e,[{key:"addRequestCount",value:function value(){this._requestCount+=1;}},{key:"addRTT",value:function value(e){this._rttArray.push(e);}},{key:"_calcTotalCount",value:function value(){return this._requestCount;}},{key:"_calcRTTCount",value:function value(e){return e.length;}},{key:"_calcSuccessRateOfRequest",value:function value(e,t){if(0===t)return 0;var o=Yt(e/t*100,2);return o>100&&(o=100),o;}},{key:"_calcAvg",value:function value(e,t){if(0===t)return 0;var o=0;return e.forEach(function(e){o+=e;}),parseInt(o/t);}},{key:"_calcMax",value:function value(){return Math.max.apply(Math,M(this._rttArray));}},{key:"_calcMin",value:function value(){return Math.min.apply(Math,M(this._rttArray));}},{key:"getStatResult",value:function value(){var e=this._calcTotalCount(),t=M(this._rttArray);if(0===e)return null;var o=this._calcRTTCount(t),n=this._calcSuccessRateOfRequest(o,e),a=this._calcAvg(t,o);return je.log("".concat(this._className,".getStatResult max:").concat(this._calcMax()," min:").concat(this._calcMin()," avg:").concat(a)),this.reset(),{totalCount:e,rttCount:o,successRateOfRequest:n,avgRTT:a};}},{key:"reset",value:function value(){this._requestCount=0,this._rttArray.length=0;}}]),e;}(),oc=function(){function e(){n(this,e),this._map=new Map();}return s(e,[{key:"initMap",value:function value(e){var t=this;e.forEach(function(e){t._map.set(e,{totalCount:0,successCount:0,failedCountOfUserSide:0,costArray:[],fileSizeArray:[]});});}},{key:"addTotalCount",value:function value(e){return!(pt(e)||!this._map.has(e))&&(this._map.get(e).totalCount+=1,!0);}},{key:"addSuccessCount",value:function value(e){return!(pt(e)||!this._map.has(e))&&(this._map.get(e).successCount+=1,!0);}},{key:"addFailedCountOfUserSide",value:function value(e){return!(pt(e)||!this._map.has(e))&&(this._map.get(e).failedCountOfUserSide+=1,!0);}},{key:"addCost",value:function value(e,t){return!(pt(e)||!this._map.has(e))&&(this._map.get(e).costArray.push(t),!0);}},{key:"addFileSize",value:function value(e,t){return!(pt(e)||!this._map.has(e))&&(this._map.get(e).fileSizeArray.push(t),!0);}},{key:"_calcSuccessRateOfBusiness",value:function value(e){if(pt(e)||!this._map.has(e))return-1;var t=this._map.get(e),o=Yt(t.successCount/t.totalCount*100,2);return o>100&&(o=100),o;}},{key:"_calcSuccessRateOfPlatform",value:function value(e){if(pt(e)||!this._map.has(e))return-1;var t=this._map.get(e),o=this._calcSuccessCountOfPlatform(e)/t.totalCount*100;return(o=Yt(o,2))>100&&(o=100),o;}},{key:"_calcTotalCount",value:function value(e){return pt(e)||!this._map.has(e)?-1:this._map.get(e).totalCount;}},{key:"_calcSuccessCountOfBusiness",value:function value(e){return pt(e)||!this._map.has(e)?-1:this._map.get(e).successCount;}},{key:"_calcSuccessCountOfPlatform",value:function value(e){if(pt(e)||!this._map.has(e))return-1;var t=this._map.get(e);return t.successCount+t.failedCountOfUserSide;}},{key:"_calcAvg",value:function value(e){return pt(e)||!this._map.has(e)?-1:e===Cs?this._calcAvgSpeed(e):this._calcAvgCost(e);}},{key:"_calcAvgCost",value:function value(e){var t=this._map.get(e).costArray.length;if(0===t)return 0;var o=0;return this._map.get(e).costArray.forEach(function(e){o+=e;}),parseInt(o/t);}},{key:"_calcAvgSpeed",value:function value(e){var t=0,o=0;return this._map.get(e).costArray.forEach(function(e){t+=e;}),this._map.get(e).fileSizeArray.forEach(function(e){o+=e;}),parseInt(1e3*o/t);}},{key:"getStatResult",value:function value(e){var t=this._calcTotalCount(e);if(0===t)return null;var o=this._calcSuccessCountOfBusiness(e),n=this._calcSuccessRateOfBusiness(e),a=this._calcSuccessCountOfPlatform(e),s=this._calcSuccessRateOfPlatform(e),r=this._calcAvg(e);return this.reset(e),{totalCount:t,successCountOfBusiness:o,successRateOfBusiness:n,successCountOfPlatform:a,successRateOfPlatform:s,avgValue:r};}},{key:"reset",value:function value(e){pt(e)?this._map.clear():this._map.set(e,{totalCount:0,successCount:0,failedCountOfUserSide:0,costArray:[],fileSizeArray:[]});}}]),e;}(),nc=function(){function e(){n(this,e),this._lastMap=new Map(),this._currentMap=new Map();}return s(e,[{key:"initMap",value:function value(e){var t=this;e.forEach(function(e){t._lastMap.set(e,new Map()),t._currentMap.set(e,new Map());});}},{key:"addMessageSequence",value:function value(e){var t=e.key,o=e.message;if(pt(t)||!this._lastMap.has(t)||!this._currentMap.has(t))return!1;var n=o.conversationID,a=o.sequence,s=n.replace(N.CONV_GROUP,"");if(0===this._lastMap.get(t).size)this._addCurrentMap(e);else if(this._lastMap.get(t).has(s)){var r=this._lastMap.get(t).get(s),i=r.length-1;a>r[0]&&a<r[i]?(r.push(a),r.sort(),this._lastMap.get(t).set(s,r)):this._addCurrentMap(e);}else this._addCurrentMap(e);return!0;}},{key:"_addCurrentMap",value:function value(e){var t=e.key,o=e.message,n=o.conversationID,a=o.sequence,s=n.replace(N.CONV_GROUP,"");this._currentMap.get(t).has(s)||this._currentMap.get(t).set(s,[]),this._currentMap.get(t).get(s).push(a);}},{key:"_copyData",value:function value(e){if(!pt(e)){this._lastMap.set(e,new Map());var t,o=this._lastMap.get(e),n=E(this._currentMap.get(e));try{for(n.s();!(t=n.n()).done;){var a=m(t.value,2),s=a[0],r=a[1];o.set(s,r);}}catch(i){n.e(i);}finally{n.f();}o=null,this._currentMap.set(e,new Map());}}},{key:"getStatResult",value:function value(e){if(pt(this._currentMap.get(e))||pt(this._lastMap.get(e)))return null;if(0===this._lastMap.get(e).size)return this._copyData(e),null;var t=0,o=0;if(this._lastMap.get(e).forEach(function(e,n){var a=M(e.values()),s=a.length,r=a[s-1]-a[0]+1;t+=r,o+=s;}),0===t)return null;var n=Yt(o/t*100,2);return n>100&&(n=100),this._copyData(e),{totalCount:t,successCountOfMessageReceived:o,successRateOfMessageReceived:n};}},{key:"reset",value:function value(){this._currentMap.clear(),this._lastMap.clear();}}]),e;}(),ac=function(e){i(a,e);var o=f(a);function a(e){var t;n(this,a),(t=o.call(this,e))._className="QualityStatModule",t.TAG="im-ssolog-quality-stat",t.reportIndex=0,t.wholePeriod=!1,t._qualityItems=[ms,Ms,vs,ys,Is,Ts,Cs,Es,Ss,Ds],t._messageSentItems=[vs,ys,Is,Ts,Cs],t._messageReceivedItems=[Es,Ss,Ds],t.REPORT_INTERVAL=120,t.REPORT_SDKAPPID_BLACKLIST=[],t.REPORT_TINYID_WHITELIST=[],t._statInfoArr=[],t._avgRTT=new tc(),t._avgE2EDelay=new ec(),t._rateMessageSent=new oc(),t._rateMessageReceived=new nc();var s=t.getInnerEmitterInstance();return s.on(cr,t._onLoginSuccess,_(t)),s.on(ur,t._onCloudConfigUpdated,_(t)),t;}return s(a,[{key:"_onLoginSuccess",value:function value(){var e=this;this._rateMessageSent.initMap(this._messageSentItems),this._rateMessageReceived.initMap(this._messageReceivedItems);var t=this.getModule(zo),o=t.getItem(this.TAG,!1);!no(o)&&_t(o.forEach)&&(je.log("".concat(this._className,"._onLoginSuccess get quality stat logs from local storage, count:").concat(o.length)),o.forEach(function(t){e._statInfoArr.push(t);}),t.removeItem(this.TAG,!1));}},{key:"_onCloudConfigUpdated",value:function value(){var e=this.getCloudConfig("q_rpt_interval"),t=this.getCloudConfig("q_rpt_sdkappid_bl"),o=this.getCloudConfig("q_rpt_tinyid_wl");pt(e)||(this.REPORT_INTERVAL=Number(e)),pt(t)||(this.REPORT_SDKAPPID_BLACKLIST=t.split(",").map(function(e){return Number(e);})),pt(o)||(this.REPORT_TINYID_WHITELIST=o.split(","));}},{key:"onCheckTimer",value:function value(e){this.isLoggedIn()&&e%this.REPORT_INTERVAL==0&&(this.wholePeriod=!0,this._report());}},{key:"addRequestCount",value:function value(){this._avgRTT.addRequestCount();}},{key:"addRTT",value:function value(e){this._avgRTT.addRTT(e);}},{key:"addMessageDelay",value:function value(e){this._avgE2EDelay.addMessageDelay(e);}},{key:"addTotalCount",value:function value(e){this._rateMessageSent.addTotalCount(e)||je.warn("".concat(this._className,".addTotalCount invalid key:"),e);}},{key:"addSuccessCount",value:function value(e){this._rateMessageSent.addSuccessCount(e)||je.warn("".concat(this._className,".addSuccessCount invalid key:"),e);}},{key:"addFailedCountOfUserSide",value:function value(e){this._rateMessageSent.addFailedCountOfUserSide(e)||je.warn("".concat(this._className,".addFailedCountOfUserSide invalid key:"),e);}},{key:"addCost",value:function value(e,t){this._rateMessageSent.addCost(e,t)||je.warn("".concat(this._className,".addCost invalid key or cost:"),e,t);}},{key:"addFileSize",value:function value(e,t){this._rateMessageSent.addFileSize(e,t)||je.warn("".concat(this._className,".addFileSize invalid key or size:"),e,t);}},{key:"addMessageSequence",value:function value(e){this._rateMessageReceived.addMessageSequence(e)||je.warn("".concat(this._className,".addMessageSequence invalid key:"),e.key);}},{key:"_getQualityItem",value:function value(e){var o={},n=ks[this.getNetworkType()];pt(n)&&(n=8);var a={qualityType:Ns[e],timestamp:xe(),networkType:n,extension:""};switch(e){case ms:o=this._avgRTT.getStatResult();break;case Ms:o=this._avgE2EDelay.getStatResult();break;case vs:case ys:case Is:case Ts:case Cs:o=this._rateMessageSent.getStatResult(e);break;case Es:case Ss:case Ds:o=this._rateMessageReceived.getStatResult(e);}return null===o?null:t(t({},a),o);}},{key:"_report",value:function value(e){var t=this,o=[],n=null;pt(e)?this._qualityItems.forEach(function(e){null!==(n=t._getQualityItem(e))&&(n.reportIndex=t.reportIndex,n.wholePeriod=t.wholePeriod,o.push(n));}):null!==(n=this._getQualityItem(e))&&(n.reportIndex=this.reportIndex,n.wholePeriod=this.wholePeriod,o.push(n)),je.debug("".concat(this._className,"._report"),o),this._statInfoArr.length>0&&(o=o.concat(this._statInfoArr),this._statInfoArr=[]);var a=this.getModule($o),s=a.getSDKAppID(),r=a.getTinyID();jt(this.REPORT_SDKAPPID_BLACKLIST,s)&&!$t(this.REPORT_TINYID_WHITELIST,r)&&(o=[]),o.length>0&&this._doReport(o);}},{key:"_doReport",value:function value(e){var o=this,n={header:ii(this),quality:e};this.request({protocolName:Ya,requestData:t({},n)}).then(function(){o.reportIndex++,o.wholePeriod=!1;}).catch(function(t){je.warn("".concat(o._className,"._doReport, online:").concat(o.getNetworkType()," error:"),t),o._statInfoArr=o._statInfoArr.concat(e),o._flushAtOnce();});}},{key:"_flushAtOnce",value:function value(){var e=this.getModule(zo),t=e.getItem(this.TAG,!1),o=this._statInfoArr;if(no(t))je.log("".concat(this._className,"._flushAtOnce count:").concat(o.length)),e.setItem(this.TAG,o,!0,!1);else{var n=o.concat(t);n.length>10&&(n=n.slice(0,10)),je.log("".concat(this.className,"._flushAtOnce count:").concat(n.length)),e.setItem(this.TAG,n,!0,!1);}this._statInfoArr=[];}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._report(),this.reportIndex=0,this.wholePeriod=!1,this.REPORT_SDKAPPID_BLACKLIST=[],this.REPORT_TINYID_WHITELIST=[],this._avgRTT.reset(),this._avgE2EDelay.reset(),this._rateMessageSent.reset(),this._rateMessageReceived.reset();}}]),a;}(mn),sc=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="WorkerTimerModule",a._isWorkerEnabled=!0,a._workerTimer=null,a._init(),a.getInnerEmitterInstance().on(ur,a._onCloudConfigUpdated,_(a)),a;}return s(o,[{key:"isWorkerEnabled",value:function value(){return this._isWorkerEnabled&&Le;}},{key:"startWorkerTimer",value:function value(){je.log("".concat(this._className,".startWorkerTimer")),this._workerTimer&&this._workerTimer.postMessage("start");}},{key:"stopWorkerTimer",value:function value(){je.log("".concat(this._className,".stopWorkerTimer")),this._workerTimer&&this._workerTimer.postMessage("stop");}},{key:"_init",value:function value(){if(Le){var e=URL.createObjectURL(new Blob(['let interval = -1;onmessage = function(event) {  if (event.data === "start") {    if (interval > 0) {      clearInterval(interval);    }    interval = setInterval(() => {      postMessage("");    }, 1000)  } else if (event.data === "stop") {    clearInterval(interval);    interval = -1;  }};'],{type:"application/javascript; charset=utf-8"}));this._workerTimer=new Worker(e);var t=this;this._workerTimer.onmessage=function(){t._moduleManager.onCheckTimer();};}}},{key:"_onCloudConfigUpdated",value:function value(){var e=this.getCloudConfig("enable_worker");je.log("".concat(this._className,"._onCloudConfigUpdated enableWorker:").concat(e)),pt(e)||"1"===e?!this._isWorkerEnabled&&Le&&(this._isWorkerEnabled=!0,this.startWorkerTimer(),this._moduleManager.onWorkerTimerEnabled()):this._isWorkerEnabled&&Le&&(this._isWorkerEnabled=!1,this.stopWorkerTimer(),this._moduleManager.onWorkerTimerDisabled());}},{key:"terminate",value:function value(){je.log("".concat(this._className,".terminate")),this._workerTimer&&(this._workerTimer.terminate(),this._workerTimer=null);}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset"));}}]),o;}(mn),rc=function(){function e(){n(this,e),this._className="PurchasedFeatureHandler",this._purchasedFeatureMap=new Map();}return s(e,[{key:"isValidPurchaseBits",value:function value(e){return e&&"string"==typeof e&&e.length>=1&&e.length<=64&&/[01]{1,64}/.test(e);}},{key:"parsePurchaseBits",value:function value(e){var t="".concat(this._className,".parsePurchaseBits");if(this.isValidPurchaseBits(e)){this._purchasedFeatureMap.clear();for(var o=null,n=e.length-1,a=0;n>=0;n--,a++){o=a<32?new L(0,Math.pow(2,a)).toString():new L(Math.pow(2,a-32),0).toString(),"1"===e[n]?this._purchasedFeatureMap.set(o,!0):this._purchasedFeatureMap.set(o,!1);}}else je.warn("".concat(t," invalid purchase bits:").concat(e));}},{key:"hasPurchasedFeature",value:function value(e){return!!this._purchasedFeatureMap.get(e);}},{key:"isFeatureEnabled",value:function value(e){for(var t=parseInt(e).toString(2),o=void 0,n=!0,a=t.length-1,s=0;a>=0;a--,s++){if("1"===t.charAt(a)&&(o=s<32?new L(0,Math.pow(2,s)).toString():new L(Math.pow(2,s-32),0).toString(),!this._purchasedFeatureMap.get(o))){n=!1;break;}}return je.log("".concat(this._className,".isFeatureEnabled decimalNumber:").concat(e," binaryString:").concat(t," ret:").concat(n)),ar({enabled:n});}},{key:"clear",value:function value(){this._purchasedFeatureMap.clear();}}]),e;}(),ic=function(){function e(t){n(this,e),this._moduleManager=t,this._className="CommercialConfigModule",this._expiredTime=0,this._isFetching=!1,this._purchasedFeatureHandler=new rc();}return s(e,[{key:"_canFetch",value:function value(){return this._getModule($o).isLoggedIn()?!this._isFetching&&Date.now()>=this._expiredTime:(this._expiredTime=Date.now()+2e3,!1);}},{key:"onCheckTimer",value:function value(e){this._canFetch()&&this.fetchConfig();}},{key:"fetchConfig",value:function value(){var e=this,t=this._canFetch(),o="".concat(this._className,".fetchConfig");if(je.log("".concat(o," canFetch:").concat(t)),t){var n=this._getModule(Xo),a=new Os(Ls.FETCH_COMMERCIAL_CONFIG);a.setNetworkType(n.getNetworkType());var s=this._getModule($o).getSDKAppID(),r=this._getModule(on);this._isFetching=!0,r.request({protocolName:os,requestData:{SDKAppID:s}}).then(function(t){a.setMessage("purchaseBits:".concat(t.data.purchaseBits)).end(),je.log("".concat(o," ok.")),e._parseConfig(t.data),e._isFetching=!1;}).catch(function(t){n.probe().then(function(e){var o=m(e,2),n=o[0],s=o[1];a.setError(t,n,s).end();}),e._isFetching=!1;});}}},{key:"onPushedConfig",value:function value(e){var t="".concat(this._className,".onPushedConfig");je.log("".concat(t)),new Os(Ls.PUSHED_COMMERCIAL_CONFIG).setNetworkType(this._getModule(Xo).getNetworkType()).setMessage("purchaseBits:".concat(e.purchaseBits)).end(),this._parseConfig(e);}},{key:"_parseConfig",value:function value(e){var t="".concat(this._className,"._parseConfig"),o=e.errorCode,n=e.errorMessage,a=e.purchaseBits,s=e.expiredTime;0===o?(this._purchasedFeatureHandler.parsePurchaseBits(a),this._expiredTime=Date.now()+1e3*s):pt(o)?(je.log("".concat(t," failed. Invalid message format:"),e),this._setExpiredTimeOnResponseError(36e5)):(je.error("".concat(t," errorCode:").concat(o," errorMessage:").concat(n)),this._setExpiredTimeOnResponseError(12e4));}},{key:"_setExpiredTimeOnResponseError",value:function value(e){this._expiredTime=Date.now()+e;}},{key:"canIUse",value:function value(e){return this._purchasedFeatureHandler.hasPurchasedFeature(e);}},{key:"isFeatureEnabled",value:function value(e){return this._purchasedFeatureHandler.isFeatureEnabled(e);}},{key:"_getModule",value:function value(e){return this._moduleManager.getModule(e);}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._expiredTime=0,this._isFetching=!1,this._purchasedFeatureHandler.clear();}}]),e;}(),cc=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._moduleManager=e,a._className="OfflinePushModule",a._offlinePushPlugin=void 0,a._androidPushConfig={huaweiPushBussinessId:"",xiaomiPushBussinessId:"",xiaomiPushAppId:"",xiaomiPushAppKey:"",meizuPushBussinessId:"",meizuPushAppId:"",meizuPushAppKey:"",vivoPushBussinessId:"",fcmPushBussinessId:"",oppoPushBussinessId:"",oppoPushAppKey:"",oppoPushAppSecret:""},a._deviceToken="",a._businessID=0,a._iosBusinessID=0,a._c2cUnreadCount=0,a._groupUnreadCount=0,a._isWebUniapp=0,a;}return s(o,[{key:"registerPlugin",value:function value(e){if(ue){this._offlinePushPlugin=e["tim-offline-push-plugin"];var t=e.offlinePushConfig||{},o=t.huaweiBusinessID,n=t.xiaomiBusinessID,a=t.xiaomiAppID,s=t.xiaomiAppKey,r=t.meizuBusinessID,i=t.meizuAppID,c=t.meizuAppKey,u=t.vivoBusinessID,l=t.oppoBusinessID,d=t.oppoAppKey,p=t.oppoAppSecret,g=t.iosBusinessID;this._androidPushConfig.huaweiPushBussinessId=o,this._androidPushConfig.xiaomiPushBussinessId=n,this._androidPushConfig.xiaomiPushAppId=a,this._androidPushConfig.xiaomiPushAppKey=s,this._androidPushConfig.meizuPushBussinessId=r,this._androidPushConfig.meizuPushAppId=i,this._androidPushConfig.meizuPushAppKey=c,this._androidPushConfig.vivoPushBussinessId=u,this._androidPushConfig.oppoPushBussinessId=l,this._androidPushConfig.oppoPushAppKey=d,this._androidPushConfig.oppoPushAppSecret=p,new Os(Ls.REGISTER_PLUGIN).setMessage("tim-offline-push-plugin").setMoreMessage("isExist:".concat(!pt(this._offlinePushPlugin))).end(!0),je.log("".concat(this._className,".registerPlugin ok. offlinePushConfig:").concat(JSON.stringify(e.offlinePushConfig))),this._iosBusinessID=g,this._setAppShowListener();}else this.isIntl()||je.warn("！！！离线推送插件仅支持在 uni-app 打包的 native app 环境使用");}},{key:"init",value:function value(){this._isWebUniapp=this.getUniAppPlatform(),this._getDeviceToken();}},{key:"_getDeviceToken",value:function value(){var e=this,t="".concat(this._className,"._getDeviceToken");if(_t(this._offlinePushPlugin.getDeviceToken)){var o="androidPushConfig:".concat(JSON.stringify(this._androidPushConfig),", iosBusinessID:").concat(this._iosBusinessID);je.log("".concat(t," start. ").concat(o)),new Os(Ls.GET_DEVICE_TOKEN).setMessage("".concat(o)).end(!0),this._offlinePushPlugin.getDeviceToken(this._androidPushConfig,function(n){var a=new Os(Ls.GET_DEVICE_TOKEN_RES),s=n.code,r=n.msg;if(0===s){var i=n.data,c=i.deviceToken,u=i.deviceBrand,l=i.deviceType,d=i.bussinessId;e._deviceToken=c,e._businessID=d||e._iosBusinessID,o="deviceToken:".concat(c,", deviceBrand:").concat(u||l,", businessID:").concat(e._businessID),je.log("".concat(t," ok. ").concat(o)),a.setMessage(o).end(!0),e._setToken();}else a.setMessage("code:".concat(s,", msg:").concat(r)).end(!0),je.error("".concat(t," failed. error:"),n);});}else je.error("".concat(t," getDeviceToken is not a function"));}},{key:"canIUseOfflinePush",value:function value(){return ue&&!pt(this._offlinePushPlugin);}},{key:"_setAppShowListener",value:function value(){var e=this,t="".concat(this._className,"._setAppShowListener");pt(this._offlinePushPlugin)?je.error("".concat(t," offlinePushPlugin is undefined")):_t(this._offlinePushPlugin.setAppShowListener)?(new Os(Ls.SET_APP_SHOW_LISTENER).end(!0),je.log("".concat(t," start")),this._offlinePushPlugin.setAppShowListener(function(o){var n=(o||{}).appShow;new Os(Ls.SET_APP_SHOW_LISTENER_RES).setMessage("appShow:".concat(n)).end(!0),je.log("".concat(t," ok. appShow:").concat(n)),e._moduleManager.isReady()&&(0===n?(e._getConvUnreadCount(),e._onBackground()):1===n&&e._onForeground());})):je.error("".concat(t," setAppShowListener is not a function"));}},{key:"getDeviceBrand",value:function value(){if(!pt(this._offlinePushPlugin)&&_t(this._offlinePushPlugin.getDeviceType)){var e=(this._offlinePushPlugin.getDeviceType()||{}).deviceType;return je.log("".concat(this._className,".getDeviceBrand ok. deviceType:").concat(e)),e;}}},{key:"_setToken",value:function value(){var e,t=this,o="".concat(this._className,"._setToken"),n=this.getModule($o),a=1,s="",r="";no(this._deviceToken)&&(a=0);var i=this.getUniAppPlatform(),c=this.getDeviceBrand();i===P.IOS||i===P.IPAD||i===P.MAC?r=this._deviceToken:i===P.ANDROID&&(s=this._deviceToken);var u=new Os(Ls.OFFLINE_PUSH_SET_TOKEN);return e="deviceToken:".concat(r||s,", businessID:").concat(this._businessID,", ")+"deviceBrand:".concat(c,", isWebUniapp:").concat(this._isWebUniapp,", pushMsg:").concat(a,", platform:").concat(i),u.setMessage("".concat(e)),je.log("".concat(o," ").concat(e)),this.request({protocolName:hs,requestData:{tokenID:s,pushMsg:a,sdkAppID:n.getSDKAppID(),businessID:parseInt(this._businessID),deviceBrand:c,deviceToken:r,isWebUniapp:this._isWebUniapp}}).then(function(e){return u.end(),je.log("".concat(o," ok")),e;}).catch(function(e){return t.probeNetwork().then(function(t){var o=m(t,2),n=o[0],a=o[1];u.setError(e,n,a).end();}),je.error("".concat(o," failed. error:"),e),sr(e);});}},{key:"_getConvUnreadCount",value:function value(){var e=this;this._c2cUnreadCount=0,this._groupUnreadCount=0,this.getModule(jo).getLocalConversationList().forEach(function(t){t.type===N.CONV_C2C&&(e._c2cUnreadCount+=t.unreadCount),t.type===N.CONV_GROUP&&(e._groupUnreadCount+=t.unreadCount);});}},{key:"_onBackground",value:function value(){var e=this,t="".concat(this._className,"._onBackground"),o=new Os(Ls.ON_BACKGROUND);this.request({protocolName:gs,requestData:{c2cUnreadCount:this._c2cUnreadCount,groupUnreadCount:this._groupUnreadCount,isWebUniapp:this._isWebUniapp}}).then(function(n){return o.setMessage("c2cUnreadCount: ".concat(e._c2cUnreadCount,", groupUnreadCount: ").concat(e._groupUnreadCount)).end(),je.log("".concat(t," ok")),n;}).catch(function(n){e.probeNetwork().then(function(e){var t=m(e,2),a=t[0],s=t[1];o.setError(n,a,s).end();}),je.error("".concat(t," failed. error:"),n);});}},{key:"_onForeground",value:function value(){var e=this,t="".concat(this._className,"._onForeground"),o=new Os(Ls.ON_FOREGROUND);this.request({protocolName:_s,requestData:{isWebUniapp:this._isWebUniapp}}).then(function(e){return o.end(),je.log("".concat(t," ok")),e;}).catch(function(n){e.probeNetwork().then(function(e){var t=m(e,2),a=t[0],s=t[1];o.setError(n,a,s).end();}),je.error("".concat(t," failed. error:"),n);});}},{key:"getUniAppPlatform",value:function value(){var e=uni.getSystemInfoSync().platform,t=this.getDeviceBrand();return"ios"===e?P.IOS:"android"===e?P.ANDROID:1002===t?P.IPAD:1001===t?P.MAC:void 0;}},{key:"reset",value:function value(){this._deviceToken="",this._businessID=0,this._c2cUnreadCount=0,this._groupUnreadCount=0,this._isWebUniapp=0,je.log("".concat(this._className,".reset"));}}]),o;}(mn),uc=function(e){i(o,e);var t=f(o);function o(e){var a;return n(this,o),(a=t.call(this,e))._className="ProfanityFilterModule",a._plugin=null,a._filterConfigMap=new Map(),a._startIndex=0,a._version=0,a._canIUseLexicon=!1,a._isFetching=!1,a._expiredTime=0,a;}return s(o,[{key:"init",value:function value(){var e=this.getModule(en).getPlugin("tim-profanity-filter-plugin");e?(this._plugin=new e({logger:je,isArray:dt,isMap:st,isDevMode:this.isDevMode()}),this._getLexicon()):je.warn("TIMProfanityFilterPlugin not found! See https://www.npmjs.com/package/tim-profanity-filter-plugin ");}},{key:"onCheckTimer",value:function value(){this._plugin&&this._canIUseLexicon&&this.isLoggedIn()&&!this._isFetching&&Date.now()>=this._expiredTime&&this._getLexicon();}},{key:"filterMessage",value:function value(e){var t=!0;if(!this._plugin||!this._canIUseLexicon)return t;var o,n=e.type,a=e.conversationType;if(n!==N.MSG_TEXT&&n!==N.MSG_CUSTOM)return t;if(je.log("".concat(this._className,".filterMessage")),n===N.MSG_TEXT){if(a===N.CONV_C2C?o=j:a===N.CONV_GROUP&&(o=z),!this._isConfigOn(o))return t;var s=this._plugin.filter(e.payload.text),r=s.type,i=s.modifiedText;1===r?t=!1:2===r&&(e.payload.text=i);}else if(n===N.MSG_CUSTOM){if(a===N.CONV_C2C?o=$:a===N.CONV_GROUP&&(o=J),!this._isConfigOn(o))return t;var c=this._plugin.filter(e.payload.data),u=this._plugin.filter(e.payload.description),l=this._plugin.filter(e.payload.extension);1===c.type||1===u.type||1===l.type?t=!1:(2===c.type&&(e.payload.data=c.modifiedText),2===u.type&&(e.payload.description=u.modifiedText),2===l.type&&(e.payload.extension=l.modifiedText));}return je.log("".concat(this._className,".filterMessage done. isAllowedToSend:").concat(t)),t;}},{key:"filterText",value:function value(e,t){var o={isAllowedToSend:!0,modifiedText:e};if(!this._plugin||!this._canIUseLexicon)return o;if(!this._isConfigOn(t))return o;je.log("".concat(this._className,".filterText"));var n=this._plugin.filter(e),a=n.type,s=n.modifiedText;return 1===a?o.isAllowedToSend=!1:2===a&&(o.modifiedText=s),je.log("".concat(this._className,".filterText done. ret:"),o),o;}},{key:"_getLexicon",value:function value(){var e=this,t=new Os(Ls.PROFANITY_FILTER),o="".concat(this._className,"._getLexicon");this._isFetching=!0,this.request({protocolName:fs,requestData:{startIndex:this._startIndex,version:this._version}}).then(function(n){var a=n.data,s=a.errorInfo,r=a.filterConfig,i=a.lexicon,c=a.strToken,u=a.completeFlag,l=a.nextStartIndex,d=a.version,p=a.expiredTime,g=s.errorCode,_=s.errorMessage;return 0!==g?(e._isFetching=!1,je.warn("".concat(o," failed. error:"),s),void t.setCode(g).setMessage(_).end()):(e._onFilterConfig(r),e._getToken(c),1===u?(je.log("".concat(e._className,"._getLexicon done. version:").concat(d," expiredTime:").concat(p)),e._version=d,e._canIUseLexicon=!0,e._isFetching=!1,e._expiredTime=Date.now()+1e3*p,void e._plugin.onLexiconCompleted(i)):(e._startIndex=l,e._plugin.onLexiconSliced(i),void e._getLexicon()));}).catch(function(n){e.probeNetwork().then(function(e){var o=m(e,2),a=o[0],s=o[1];t.setError(n,a,s).end();}),e._isFetching=!1,je.log("".concat(o," failed. error:"),n);});}},{key:"_onFilterConfig",value:function value(e){var t=this;no(e)||(this._filterConfigMap.clear(),Object.keys(e).forEach(function(o){t._filterConfigMap.set(o,e[o]);}),je.log("".concat(this._className,"._onFilterConfig. keys:").concat(Array.from(this._filterConfigMap.keys())," values:").concat(Array.from(this._filterConfigMap.values()))));}},{key:"_isConfigOn",value:function value(e){return 1===this._filterConfigMap.get(e);}},{key:"_getToken",value:function value(e){if(ct(e)){var t=e.length,o="";if(t%2==0)for(var n=0;n<=t-1;n+=2){o+=e[n+1],o+=e[n];}else{for(var a=0;a<t-1;a+=2){o+=e[a+1],o+=e[a];}o+=e[t-1];}this._plugin.onToken(o);}}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),this._plugin&&(this._plugin.reset(),this._plugin=null),this._filterConfigMap.clear(),this._startIndex=0,this._version=0,this._canIUseLexicon=!1,this._isFetching=!1,this._expiredTime=0;}}]),o;}(mn),lc=function(){function e(t){n(this,e),this._moduleManager=t,this._className="TransCmdModule";}return s(e,[{key:"sendTRTCCustomData",value:function value(e){return this._trans(t({serv:W.NAME.TUIROOM_SVR},e));}},{key:"_trans",value:function value(e){je.log("".concat(this._className,"._trans. options:").concat(JSON.stringify(e)));var t=e.serv,o=e.data;return this._moduleManager.getModule(on).trans({servcmd:"".concat(t,".*"),data:ct(o)?JSON.parse(o):o});}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset"));}}]),e;}(),dc=function(){function e(t){n(this,e);var o=new Os(Ls.SDK_CONSTRUCT);this._className="ModuleManager",this._isReady=!1,this._reason=_n.USER_NOT_LOGGED_IN,this._startLoginTs=0,this._moduleMap=new Map(),this._innerEmitter=null,this._outerEmitter=null,this._checkCount=0,this._checkTimer=-1,this._moduleMap.set($o,new oi(this,t)),this._moduleMap.set(ln,new ic(this)),this._moduleMap.set(sn,new Qi(this)),this._moduleMap.set(rn,new sc(this)),this._moduleMap.set(un,new ac(this)),this._moduleMap.set(nn,new Ki(this)),this._moduleMap.set(on,new Ji(this)),this._moduleMap.set(Fo,new ni(this)),this._moduleMap.set(qo,new Ii(this)),this._moduleMap.set(Vo,new Ti(this)),this._moduleMap.set(xo,new ti(this)),this._moduleMap.set(Bo,new rr(this)),this._moduleMap.set(jo,new Nr(this)),this._moduleMap.set(Ko,new Kr(this)),this._moduleMap.set(Wo,new Wr(this)),this._moduleMap.set(Yo,new zr(this)),this._moduleMap.set(zo,new si(this)),this._moduleMap.set(Jo,new ci(this)),this._moduleMap.set(Xo,new pi(this)),this._moduleMap.set(Qo,new _i(this)),this._moduleMap.set(Zo,new fi(this)),this._moduleMap.set(en,new Ci(this)),this._moduleMap.set(tn,new Ei(this)),this._moduleMap.set(an,new Xi(this)),this._moduleMap.set(cn,new Zi(this)),this._moduleMap.set(dn,new cc(this)),this._moduleMap.set(pn,new uc(this)),this._moduleMap.set(gn,new lc(this)),this._eventThrottleMap=new Map();var a=t.instanceID,s=t.oversea,r=t.SDKAppID,i="instanceID:".concat(a," SDKAppID:").concat(r," host:").concat(xt()," oversea:").concat(s," inBrowser:").concat(pe," inMiniApp:").concat(de)+" workerAvailable:".concat(Le," UserAgent:").concat(he);Os.bindEventStatModule(this._moduleMap.get(Jo)),o.setMessage("".concat(i," ").concat(function(){var e="";if(de)try{var t=ge.getSystemInfoSync(),o=t.model,n=t.version,a=t.system,s=t.platform,r=t.SDKVersion;e="model:".concat(o," version:").concat(n," system:").concat(a," platform:").concat(s," SDKVersion:").concat(r);}catch(i){e="";}return e;}())).end(),je.info("SDK ".concat(i)),tr.prototype._isIntl=this._moduleMap.get($o).isIntl(),this._readyList=void 0,this._ssoLogForReady=null,this._initReadyList();}return s(e,[{key:"_startTimer",value:function value(){var e=this._moduleMap.get(rn),t=e.isWorkerEnabled();je.log("".concat(this._className,".startTimer isWorkerEnabled:").concat(t," seed:").concat(this._checkTimer)),t?e.startWorkerTimer():this._startMainThreadTimer();}},{key:"_startMainThreadTimer",value:function value(){je.log("".concat(this._className,"._startMainThreadTimer")),this._checkTimer<0&&(this._checkTimer=setInterval(this.onCheckTimer.bind(this),1e3));}},{key:"stopTimer",value:function value(){var e=this._moduleMap.get(rn),t=e.isWorkerEnabled();je.log("".concat(this._className,".stopTimer isWorkerEnabled:").concat(t," seed:").concat(this._checkTimer)),t?e.stopWorkerTimer():this._stopMainThreadTimer();}},{key:"_stopMainThreadTimer",value:function value(){je.log("".concat(this._className,"._stopMainThreadTimer")),this._checkTimer>0&&(clearInterval(this._checkTimer),this._checkTimer=-1,this._checkCount=0);}},{key:"_stopMainThreadSocket",value:function value(){je.log("".concat(this._className,"._stopMainThreadSocket"));var e=this._moduleMap.get(nn);e.setIsWorkerEnabled(!0),e.reConnect();}},{key:"_startMainThreadSocket",value:function value(){je.log("".concat(this._className,"._startMainThreadSocket"));var e=this._moduleMap.get(nn);e.setIsWorkerEnabled(!1),e.reConnect();}},{key:"onWorkerTimerEnabled",value:function value(){je.log("".concat(this._className,".onWorkerTimerEnabled, disable main thread timer and socket")),this._stopMainThreadTimer(),this._stopMainThreadSocket();}},{key:"onWorkerTimerDisabled",value:function value(){je.log("".concat(this._className,".onWorkerTimerDisabled, enable main thread timer and socket")),this._startMainThreadTimer(),this._startMainThreadSocket();}},{key:"onCheckTimer",value:function value(){this._checkCount+=1;var e,t=E(this._moduleMap);try{for(t.s();!(e=t.n()).done;){var o=m(e.value,2)[1];o.onCheckTimer&&o.onCheckTimer(this._checkCount);}}catch(n){t.e(n);}finally{t.f();}}},{key:"_initReadyList",value:function value(){var e=this;this._readyList=[this._moduleMap.get(Fo),this._moduleMap.get(jo)],this._readyList.forEach(function(t){t.ready(function(){return e._onModuleReady();});});}},{key:"_onModuleReady",value:function value(){var e=!0;if(this._readyList.forEach(function(t){t.isReady()||(e=!1);}),e&&!this._isReady){this._isReady=!0,this._outerEmitter.emit(D.SDK_READY);var t=Date.now()-this._startLoginTs;je.warn("SDK is ready. cost ".concat(t," ms")),this._startLoginTs=Date.now();var o=this._moduleMap.get(Xo).getNetworkType(),n=this._ssoLogForReady.getStartTs()+Ve;this._ssoLogForReady.setNetworkType(o).setMessage(t).start(n).end();}}},{key:"login",value:function value(){0===this._startLoginTs&&(Be(),this._startLoginTs=Date.now(),this._startTimer(),this._moduleMap.get(Xo).start(),this._ssoLogForReady=new Os(Ls.SDK_READY),this._reason=_n.LOGGING_IN);}},{key:"onLoginFailed",value:function value(){this._startLoginTs=0;}},{key:"getOuterEmitterInstance",value:function value(){return null===this._outerEmitter&&(this._outerEmitter=new gi(),nr(this._outerEmitter),this._outerEmitter._emit=this._outerEmitter.emit,this._outerEmitter.emit=function(e,t){var o=this;if(e===D.CONVERSATION_LIST_UPDATED||e===D.FRIEND_LIST_UPDATED||e===D.GROUP_LIST_UPDATED||e===D.TOTAL_UNREAD_MESSAGE_COUNT_UPDATED){if(this._eventThrottleMap.has(e)){var n=Date.now(),a=this._eventThrottleMap.get(e);n-a.last<1e3?(a.timeoutID&&clearTimeout(a.timeoutID),a.timeoutID=setTimeout(function(){a.last=n,o._outerEmitter._emit.apply(o._outerEmitter,[e,{name:e,data:o._getEventData(e)}]);},500)):(a.last=n,this._outerEmitter._emit.apply(this._outerEmitter,[e,{name:e,data:this._getEventData(e)}]));}else this._eventThrottleMap.set(e,{last:Date.now(),timeoutID:-1}),this._outerEmitter._emit.apply(this._outerEmitter,[e,{name:e,data:this._getEventData(e)}]);}else this._outerEmitter._emit.apply(this._outerEmitter,[e,{name:e,data:arguments[1]}]);}.bind(this)),this._outerEmitter;}},{key:"_getEventData",value:function value(e){return e===D.CONVERSATION_LIST_UPDATED?this._moduleMap.get(jo).getLocalConversationList():e===D.FRIEND_LIST_UPDATED?this._moduleMap.get(Ho).getLocalFriendList(!1):e===D.GROUP_LIST_UPDATED?this._moduleMap.get(Ko).getLocalGroupList():e===D.TOTAL_UNREAD_MESSAGE_COUNT_UPDATED?this._moduleMap.get(jo).getTotalUnreadMessageCount():void 0;}},{key:"getInnerEmitterInstance",value:function value(){return null===this._innerEmitter&&(this._innerEmitter=new gi(),this._innerEmitter._emit=this._innerEmitter.emit,this._innerEmitter.emit=function(e,t){var o;lt(arguments[1])&&arguments[1].data?(je.warn("inner eventData has data property, please check!"),o=[e,{name:arguments[0],data:arguments[1].data}]):o=[e,{name:arguments[0],data:arguments[1]}],this._innerEmitter._emit.apply(this._innerEmitter,o);}.bind(this)),this._innerEmitter;}},{key:"hasModule",value:function value(e){return this._moduleMap.has(e);}},{key:"getModule",value:function value(e){return this._moduleMap.get(e);}},{key:"isReady",value:function value(){return this._isReady;}},{key:"isIntl",value:function value(){return this.getModule($o).isIntl();}},{key:"getNotReadyReason",value:function value(){return this._reason;}},{key:"setNotReadyReason",value:function value(e){this._reason=e;}},{key:"onError",value:function value(e){var t="code:".concat(e.code," message:").concat(e.message);je.warn("Oops! ".concat(t)),new Os(Ls.ERROR).setMessage(t).setNetworkType(this.getModule(Xo).getNetworkType()).setLevel("error").end(),this.getOuterEmitterInstance().emit(D.ERROR,e);}},{key:"reset",value:function value(){je.log("".concat(this._className,".reset")),Be();var e,t=E(this._moduleMap);try{for(t.s();!(e=t.n()).done;){var o=m(e.value,2)[1];o.reset&&o.reset();}}catch(r){t.e(r);}finally{t.f();}this._startLoginTs=0,this._initReadyList(),this._isReady=!1,this.stopTimer(),this._outerEmitter.emit(D.SDK_NOT_READY);var n,a=E(this._eventThrottleMap);try{for(a.s();!(n=a.n()).done;){var s=m(n.value,2)[1];s.timeoutID&&clearTimeout(s.timeoutID);}}catch(r){a.e(r);}finally{a.f();}this._eventThrottleMap.clear();}}]),e;}(),pc=function(){function e(t){n(this,e),this._isIntl=t,this._funcMap=new Map();}return s(e,[{key:"defense",value:function value(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if("string"!=typeof e)return null;if(0===e.length)return null;if("function"!=typeof t)return null;if(this._funcMap.has(e)&&this._funcMap.get(e).has(t))return this._funcMap.get(e).get(t);this._funcMap.has(e)||this._funcMap.set(e,new Map());var n=null;return this._funcMap.get(e).has(t)?n=this._funcMap.get(e).get(t):(n=this._pack(e,t,o),this._funcMap.get(e).set(t,n)),n;}},{key:"defenseOnce",value:function value(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return"function"!=typeof t?null:this._pack(e,t,o);}},{key:"find",value:function value(e,t){return"string"!=typeof e||0===e.length||"function"!=typeof t?null:this._funcMap.has(e)&&this._funcMap.get(e).has(t)?this._funcMap.get(e).get(t):(je.warn("Callback function for event ".concat(e," cannot be found")),null);}},{key:"delete",value:function value(e,t){return"function"==typeof t&&!!this._funcMap.has(e)&&!!this._funcMap.get(e).has(t)&&(this._funcMap.get(e).delete(t),0===this._funcMap.get(e).size&&this._funcMap.delete(e),!0);}},{key:"_pack",value:function value(e,t,o){var n=this;return function(){try{t.apply(o,Array.from(arguments));}catch(i){var a=Object.values(D).indexOf(e);if(-1!==a){var s=Object.keys(D)[a];n._isIntl?je.warn("There is a logic error with the corresponding callback function for event TIM.EVENT.".concat(s),"error: ".concat(i)):je.warn("接入侧事件 TIM.EVENT.".concat(s," 对应的回调函数逻辑存在问题！"),"error: ".concat(i));}var r=new Os(Ls.CALLBACK_FUNCTION_ERROR);r.setMessage("eventName:".concat(e)).setMoreMessage(i.message).end();}};}}]),e;}(),gc=function(){function e(t){n(this,e);var o={SDKAppID:t.SDKAppID,unlimitedAVChatRoom:t.unlimitedAVChatRoom||!1,scene:t.scene||"",oversea:t.oversea||!1,instanceID:Vt(),devMode:t.devMode||!1,proxyServer:t.proxyServer||void 0};this._moduleManager=new dc(o),this._safetyCallbackFactory=new pc(this.isIntl());}return s(e,[{key:"onError",value:function value(e){this._moduleManager.onError(e);}},{key:"login",value:function value(e){return this._moduleManager.login(),this._moduleManager.getModule(Fo).login(e);}},{key:"logout",value:function value(){var e=this;return this._moduleManager.getModule(Fo).logout().then(function(t){return e._moduleManager.reset(),t;});}},{key:"isReady",value:function value(){return this._moduleManager.isReady();}},{key:"isIntl",value:function value(){return this._moduleManager.isIntl();}},{key:"getNotReadyReason",value:function value(){return this._moduleManager.getNotReadyReason();}},{key:"destroy",value:function value(){var e=this;return this.logout().finally(function(){e._moduleManager.stopTimer(),e._moduleManager.getModule(rn).terminate(),e._moduleManager.getModule(nn).dealloc();var t=e._moduleManager.getOuterEmitterInstance(),o=e._moduleManager.getModule($o);t.emit(D.SDK_DESTROY,{SDKAppID:o.getSDKAppID()});});}},{key:"on",value:function value(e,t,o){e===D.GROUP_SYSTEM_NOTICE_RECEIVED&&je.warn("！！！TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED v2.6.0起弃用，为了更好的体验，请在 TIM.EVENT.MESSAGE_RECEIVED 事件回调内接收处理群系统通知，详细请参考：https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.GroupSystemNoticePayload"),je.debug("on","eventName:".concat(e)),this._moduleManager.getOuterEmitterInstance().on(e,this._safetyCallbackFactory.defense(e,t,o),o);}},{key:"once",value:function value(e,t,o){je.debug("once","eventName:".concat(e)),this._moduleManager.getOuterEmitterInstance().once(e,this._safetyCallbackFactory.defenseOnce(e,t,o),o||this);}},{key:"off",value:function value(e,t,o,n){je.debug("off","eventName:".concat(e));var a=this._safetyCallbackFactory.find(e,t);null!==a&&(this._moduleManager.getOuterEmitterInstance().off(e,a,o,n),this._safetyCallbackFactory.delete(e,t));}},{key:"registerPlugin",value:function value(e){pt(e["tim-offline-push-plugin"])?this._moduleManager.getModule(en).registerPlugin(e):this._moduleManager.getModule(dn).registerPlugin(e);}},{key:"setLogLevel",value:function value(e){if(e<=0){if(console.log([""," ________  ______  __       __  __       __  ________  _______","|        \\|      \\|  \\     /  \\|  \\  _  |  \\|        \\|       \\"," \\$$$$$$$$ \\$$$$$$| $$\\   /  $$| $$ / \\ | $$| $$$$$$$$| $$$$$$$\\","   | $$     | $$  | $$$\\ /  $$$| $$/  $\\| $$| $$__    | $$__/ $$","   | $$     | $$  | $$$$\\  $$$$| $$  $$$\\ $$| $$  \\   | $$    $$","   | $$     | $$  | $$\\$$ $$ $$| $$ $$\\$$\\$$| $$$$$   | $$$$$$$\\","   | $$    _| $$_ | $$ \\$$$| $$| $$$$  \\$$$$| $$_____ | $$__/ $$","   | $$   |   $$ \\| $$  \\$ | $$| $$$    \\$$$| $$     \\| $$    $$","    \\$$    \\$$$$$$ \\$$      \\$$ \\$$      \\$$ \\$$$$$$$$ \\$$$$$$$","",""].join("\n")),this._printDocLink(),!this.isIntl()){console.log(["","参考以下文档，会更快解决问题哦！(#^.^#)\n","IM 智能客服：https://cloud.tencent.com/act/event/smarty-service?from=im-doc\n","WebSocket 升级指引：https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-02-upgradeguideline.html\n","SDK 更新日志: https://cloud.tencent.com/document/product/269/38492\n","常见问题: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-01-faq.html\n","如果您需要在生产环境关闭上面的日志，请 tim.setLogLevel(1)\n"].join("\n"));}}je.setLevel(e);}},{key:"_printDocLink",value:function value(){var e="https://web.sdk.qcloud.com/im/doc/".concat(this.isIntl()?"en":"zh-cn","/SDK.html");eo()?console.log("%c ".concat("IM SDK API ->"," %c"),"background:#ff9d00; padding:1px; border-radius:3px; color: #fff","background:transparent",e):console.log("IM SDK API ->",e);}},{key:"createTextMessage",value:function value(e){return this._moduleManager.getModule(qo).createTextMessage(e);}},{key:"createTextAtMessage",value:function value(e){return this._moduleManager.getModule(qo).createTextMessage(e);}},{key:"createImageMessage",value:function value(e){return this._moduleManager.getModule(qo).createImageMessage(e);}},{key:"createAudioMessage",value:function value(e){return this._moduleManager.getModule(qo).createAudioMessage(e);}},{key:"createVideoMessage",value:function value(e){return this._moduleManager.getModule(qo).createVideoMessage(e);}},{key:"createCustomMessage",value:function value(e){return this._moduleManager.getModule(qo).createCustomMessage(e);}},{key:"createFaceMessage",value:function value(e){return this._moduleManager.getModule(qo).createFaceMessage(e);}},{key:"createFileMessage",value:function value(e){return this._moduleManager.getModule(qo).createFileMessage(e);}},{key:"createLocationMessage",value:function value(e){return this._moduleManager.getModule(qo).createLocationMessage(e);}},{key:"createMergerMessage",value:function value(e){return this._moduleManager.getModule(qo).createMergerMessage(e);}},{key:"downloadMergerMessage",value:function value(e){return e.type!==N.MSG_MERGER?sr({code:_n.MESSAGE_MERGER_TYPE_INVALID}):no(e.payload.downloadKey)?sr({code:_n.MESSAGE_MERGER_KEY_INVALID}):this._moduleManager.getModule(qo).downloadMergerMessage(e).catch(function(e){return sr({code:_n.MESSAGE_MERGER_DOWNLOAD_FAIL});});}},{key:"createForwardMessage",value:function value(e){return this._moduleManager.getModule(qo).createForwardMessage(e);}},{key:"sendMessage",value:function value(e,t){return e instanceof $s?this._moduleManager.getModule(qo).sendMessageInstance(e,t):sr({code:_n.MESSAGE_SEND_NEED_MESSAGE_INSTANCE});}},{key:"callExperimentalAPI",value:function value(e,t){return"handleGroupInvitation"===e?this._moduleManager.getModule(Ko).handleGroupInvitation(t):"isCommercialAbilityEnabled"===e?this._moduleManager.getModule(ln).isFeatureEnabled(t):"isIntl"===e?this.isIntl():"sendTRTCCustomData"===e?this._moduleManager.getModule(gn).sendTRTCCustomData(t):sr({code:_n.INVALID_OPERATION});}},{key:"revokeMessage",value:function value(e){return this._moduleManager.getModule(qo).revokeMessage(e);}},{key:"resendMessage",value:function value(e){return this._moduleManager.getModule(qo).resendMessage(e);}},{key:"deleteMessage",value:function value(e){return this._moduleManager.getModule(qo).deleteMessage(e);}},{key:"setMessageExtensions",value:function value(e,t){return this._moduleManager.getModule(Vo).setMessageExtensions(e,t);}},{key:"getMessageExtensions",value:function value(e){return this._moduleManager.getModule(Vo).getMessageExtensions(e);}},{key:"deleteMessageExtensions",value:function value(e,t){return this._moduleManager.getModule(Vo).deleteMessageExtensions(e,t);}},{key:"modifyMessage",value:function value(e){return this._moduleManager.getModule(qo).modifyRemoteMessage(e);}},{key:"getMessageList",value:function value(e){return this._moduleManager.getModule(jo).getMessageList(e);}},{key:"getMessageListHopping",value:function value(e){return this._moduleManager.getModule(jo).getMessageListHopping(e);}},{key:"sendMessageReadReceipt",value:function value(e){return this._moduleManager.getModule(jo).sendReadReceipt(e);}},{key:"getMessageReadReceiptList",value:function value(e){return this._moduleManager.getModule(jo).getReadReceiptList(e);}},{key:"getGroupMessageReadMemberList",value:function value(e){return this._moduleManager.getModule(Ko).getReadReceiptDetail(e);}},{key:"findMessage",value:function value(e){return this._moduleManager.getModule(jo).findMessage(e);}},{key:"setMessageRead",value:function value(e){return this._moduleManager.getModule(jo).setMessageRead(e);}},{key:"getConversationList",value:function value(e){return this._moduleManager.getModule(jo).getConversationList(e);}},{key:"getConversationProfile",value:function value(e){return this._moduleManager.getModule(jo).getConversationProfile(e);}},{key:"deleteConversation",value:function value(e){return this._moduleManager.getModule(jo).deleteConversation(e);}},{key:"clearHistoryMessage",value:function value(e){return this._moduleManager.getModule(jo).clearHistoryMessage(e);}},{key:"pinConversation",value:function value(e){return this._moduleManager.getModule(jo).pinConversation(e);}},{key:"setAllMessageRead",value:function value(e){return this._moduleManager.getModule(jo).setAllMessageRead(e);}},{key:"setMessageRemindType",value:function value(e){return this._moduleManager.getModule(jo).setMessageRemindType(e);}},{key:"getTotalUnreadMessageCount",value:function value(){return this._moduleManager.getModule(jo).getTotalUnreadMessageCount();}},{key:"setConversationCustomData",value:function value(e){return this._moduleManager.getModule(jo).setConversationCustomData(e);}},{key:"markConversation",value:function value(e){return this._moduleManager.getModule(jo).markConversation(e);}},{key:"getConversationGroupList",value:function value(){return this._moduleManager.getModule(jo).getConversationGroupList();}},{key:"createConversationGroup",value:function value(e){return this._moduleManager.getModule(jo).createConversationGroup(e);}},{key:"deleteConversationGroup",value:function value(e){return this._moduleManager.getModule(jo).deleteConversationGroup(e);}},{key:"renameConversationGroup",value:function value(e){return this._moduleManager.getModule(jo).renameConversationGroup(e);}},{key:"addConversationsToGroup",value:function value(e){return this._moduleManager.getModule(jo).addConversationsToGroup(e);}},{key:"deleteConversationsFromGroup",value:function value(e){return this._moduleManager.getModule(jo).deleteConversationsFromGroup(e);}},{key:"getMyProfile",value:function value(){return this._moduleManager.getModule(xo).getMyProfile();}},{key:"getUserProfile",value:function value(e){return this._moduleManager.getModule(xo).getUserProfile(e);}},{key:"updateMyProfile",value:function value(e){return this._moduleManager.getModule(xo).updateMyProfile(e);}},{key:"getBlacklist",value:function value(){return this._moduleManager.getModule(xo).getLocalBlacklist();}},{key:"addToBlacklist",value:function value(e){return this._moduleManager.getModule(xo).addBlacklist(e);}},{key:"removeFromBlacklist",value:function value(e){return this._moduleManager.getModule(xo).deleteBlacklist(e);}},{key:"setSelfStatus",value:function value(e){return this._moduleManager.getModule(xo).setSelfStatus(e);}},{key:"getUserStatus",value:function value(e){return this._moduleManager.getModule(xo).getUserStatus(e);}},{key:"subscribeUserStatus",value:function value(e){return this._moduleManager.getModule(xo).subscribeUserStatus(e);}},{key:"unsubscribeUserStatus",value:function value(e){return this._moduleManager.getModule(xo).unsubscribeUserStatus(e);}},{key:"getFriendList",value:function value(){var e=this._moduleManager.getModule(Ho);return e?e.getLocalFriendList():sr({code:_n.CANNOT_FIND_MODULE});}},{key:"addFriend",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.addFriend(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"deleteFriend",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.deleteFriend(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"checkFriend",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.checkFriend(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"getFriendProfile",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.getFriendProfile(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"updateFriend",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.updateFriend(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"getFriendApplicationList",value:function value(){var e=this._moduleManager.getModule(Ho);return e?e.getLocalFriendApplicationList():sr({code:_n.CANNOT_FIND_MODULE});}},{key:"acceptFriendApplication",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.acceptFriendApplication(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"refuseFriendApplication",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.refuseFriendApplication(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"deleteFriendApplication",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.deleteFriendApplication(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"setFriendApplicationRead",value:function value(){var e=this._moduleManager.getModule(Ho);return e?e.setFriendApplicationRead():sr({code:_n.CANNOT_FIND_MODULE});}},{key:"getFriendGroupList",value:function value(){var e=this._moduleManager.getModule(Ho);return e?e.getLocalFriendGroupList():sr({code:_n.CANNOT_FIND_MODULE});}},{key:"createFriendGroup",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.createFriendGroup(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"deleteFriendGroup",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.deleteFriendGroup(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"addToFriendGroup",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.addToFriendGroup(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"removeFromFriendGroup",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.removeFromFriendGroup(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"renameFriendGroup",value:function value(e){var t=this._moduleManager.getModule(Ho);return t?t.renameFriendGroup(e):sr({code:_n.CANNOT_FIND_MODULE});}},{key:"getGroupList",value:function value(e){return this._moduleManager.getModule(Ko).getGroupList(e);}},{key:"getGroupProfile",value:function value(e){return this._moduleManager.getModule(Ko).getGroupProfile(e);}},{key:"createGroup",value:function value(e){return this._moduleManager.getModule(Ko).createGroup(e);}},{key:"dismissGroup",value:function value(e){return this._moduleManager.getModule(Ko).dismissGroup(e);}},{key:"updateGroupProfile",value:function value(e){return this._moduleManager.getModule(Ko).updateGroupProfile(e);}},{key:"joinGroup",value:function value(e){return this._moduleManager.getModule(Ko).joinGroup(e);}},{key:"quitGroup",value:function value(e){return this._moduleManager.getModule(Ko).quitGroup(e);}},{key:"searchGroupByID",value:function value(e){return this._moduleManager.getModule(Ko).searchGroupByID(e);}},{key:"getGroupOnlineMemberCount",value:function value(e){return this._moduleManager.getModule(Ko).getGroupOnlineMemberCount(e);}},{key:"changeGroupOwner",value:function value(e){return this._moduleManager.getModule(Ko).changeGroupOwner(e);}},{key:"getGroupApplicationList",value:function value(){return this._moduleManager.getModule(Ko).getGroupApplicationList();}},{key:"handleGroupApplication",value:function value(e){return this._moduleManager.getModule(Ko).handleGroupApplication(e);}},{key:"initGroupAttributes",value:function value(e){return this._moduleManager.getModule(Ko).initGroupAttributes(e);}},{key:"setGroupAttributes",value:function value(e){return this._moduleManager.getModule(Ko).setGroupAttributes(e);}},{key:"deleteGroupAttributes",value:function value(e){return this._moduleManager.getModule(Ko).deleteGroupAttributes(e);}},{key:"getGroupAttributes",value:function value(e){return this._moduleManager.getModule(Ko).getGroupAttributes(e);}},{key:"getGroupMemberList",value:function value(e){return this._moduleManager.getModule(Wo).getGroupMemberList(e);}},{key:"getGroupMemberProfile",value:function value(e){return this._moduleManager.getModule(Wo).getGroupMemberProfile(e);}},{key:"addGroupMember",value:function value(e){return this._moduleManager.getModule(Wo).addGroupMember(e);}},{key:"deleteGroupMember",value:function value(e){return this._moduleManager.getModule(Wo).deleteGroupMember(e);}},{key:"setGroupMemberMuteTime",value:function value(e){return this._moduleManager.getModule(Wo).setGroupMemberMuteTime(e);}},{key:"setGroupMemberRole",value:function value(e){return this._moduleManager.getModule(Wo).setGroupMemberRole(e);}},{key:"setGroupMemberNameCard",value:function value(e){return this._moduleManager.getModule(Wo).setGroupMemberNameCard(e);}},{key:"setGroupMemberCustomField",value:function value(e){return this._moduleManager.getModule(Wo).setGroupMemberCustomField(e);}},{key:"markGroupMemberList",value:function value(e){return this._moduleManager.getModule(Wo).markGroupMemberList(e);}},{key:"getJoinedCommunityList",value:function value(){return this._moduleManager.getModule(Yo).getJoinedCommunityList();}},{key:"createTopicInCommunity",value:function value(e){return this._moduleManager.getModule(Yo).createTopicInCommunity(e);}},{key:"deleteTopicFromCommunity",value:function value(e){return this._moduleManager.getModule(Yo).deleteTopicFromCommunity(e);}},{key:"updateTopicProfile",value:function value(e){return this._moduleManager.getModule(Yo).updateTopicProfile(e);}},{key:"getTopicList",value:function value(e){return this._moduleManager.getModule(Yo).getTopicList(e);}}]),e;}(),_c={login:"login",logout:"logout",destroy:"destroy",on:"on",off:"off",ready:"ready",setLogLevel:"setLogLevel",joinGroup:"joinGroup",quitGroup:"quitGroup",registerPlugin:"registerPlugin",getGroupOnlineMemberCount:"getGroupOnlineMemberCount"};function hc(e,t){if(e.isReady()||void 0!==_c[t])return!0;var o=e.getNotReadyReason(),n=e.isIntl(),a="";Object.getOwnPropertyNames(_n).forEach(function(e){_n[e]===o&&(a=n?fn[o]:hn[o]);});var s={code:o,message:"".concat(a," | ").concat(t," | ").concat(n?fn[_n.SDK_IS_NOT_READY]:hn[_n.SDK_IS_NOT_READY])};return e.onError(s),s;}var fc={},mc={};return mc.create=function(e){var o=0,n=e.SDKAppID,a=Zt(n);if(it(n))o=n;else if(a?je.warn("TIM.create The type of the SDKAppID must be Number!"):je.warn("TIM.create SDKAppID 的类型应该为 Number，请修改！"),o=parseInt(n),isNaN(n))return a?je.error("TIM.create failed. Parse the SDKAppID failed, please check the arguments"):je.error("TIM.create failed. 解析 SDKAppID 失败，请检查传参！"),null;if(o&&fc[o])return fc[o];je.log("TIM.create");var s=new gc(t(t({},e),{},{SDKAppID:o}));s.on(D.SDK_DESTROY,function(e){fc[e.data.SDKAppID]=null,delete fc[e.data.SDKAppID];});var r=function(e){var t=Object.create(null);return Object.keys(wo).forEach(function(o){if(e[o]){var n=wo[o],a=new A();t[n]=function(){var t=Array.from(arguments);return a.use(function(t,n){var a=hc(e,o);return!0===a?n():sr(a);}).use(function(e,t){if(!0===ao(e,bo[o],n))return t();}).use(function(t,n){return e[o].apply(e,t);}),a.run(t);};}}),t;}(s);return fc[o]=r,bo.setIsIntl(a),je.log("TIM.create ok"),r;},mc.TYPES=N,mc.EVENT=D,mc.VERSION="2.24.2",je.log("TIM.VERSION:".concat(mc.VERSION)),mc;});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"]))

/***/ }),

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/chat/index.vue":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/chat/index.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_d980bb1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d980bb1e&scoped=true& */ "./src/packageMsg/pages/chat/index.vue?vue&type=template&id=d980bb1e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/packageMsg/pages/chat/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_d980bb1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_d980bb1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "d980bb1e",
  "1e32ea63"
  
)

component.options.__file = "src/packageMsg/pages/chat/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/chat/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/chat/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/packageMsg/pages/chat/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../TUIKit/lib/tim-wx-sdk */ "./TUIKit/lib/tim-wx-sdk.js");
/* harmony import */ var _TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TUIKit_debug_GenerateTestUserSig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../TUIKit/debug/GenerateTestUserSig */ "./TUIKit/debug/GenerateTestUserSig.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/index */ "./src/api/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "chat",
  data: function data() {
    return {
      bottomVal: 0,
      triggered: false,
      userInfo: {},
      userArr: [],
      msg: "",
      $TUIKit: null,
      msgList: [],
      userID: "",
      list: [],
      config: {
        userID: "",
        //User ID
        SDKAPPID: 1400783847,
        // Your SDKAppID
        SECRETKEY: "3ba3f99ba20d5218ed211c641679a7ce2f6fc2091e285b6e77bc9c48fa2ff862",
        // Your secretKey
        EXPIRETIME: 604800
      },
      pageNum: 1,
      pageSize: 10
    };
  },
  methods: {
    // 下拉 但是没松手！！！
    onPulling: function onPulling() {
      console.log("自定义下拉刷新被触发");
    },
    // 回弹复位
    onRestore: function onRestore(event, ownerInstance) {
      console.log("onRestore 自定义下拉刷新被复位");
    },
    // 被中止
    onAbort: function onAbort() {
      console.log("onAbort 自定义下拉刷新被中止");
    },
    // 下拉 松手了！！！
    onRefresh: function onRefresh() {
      console.log("onRefresh 下拉松手 请求数据");
      this.triggered = true;
      this.pageNum++;
      this.addMsgInfo({
        page: this.pageNum,
        per_page: this.pageSize,
        to_account: this.userArr[0].uuid
      });
    },
    inputBindFocus: function inputBindFocus(e) {
      // 获取手机键盘的高度，赋值给input 所在盒子的 bottom 值
      // 注意!!! 这里的 px 至关重要!!! 我搜到的很多解决方案都没有说这里要添加 px
      // this.$emit("changeBottomVal", e.detail.height + "px");
      this.bottomVal = e.detail.height + "px";
    },
    inputBindBlur: function inputBindBlur() {
      // input 失去焦点，键盘隐藏，设置 input 所在盒子的 bottom 值为0
      // this.$emit("changeBottomVal", 0);
      this.bottomVal = 0;
    },
    init_TIM: function init_TIM() {
      //初始化im实时聊天
      if (this.globalData.globalData_TIM.isInit) {
        //这里设置了一个全局变量isLogin来标记是否已登录,避免重复创建im实例
        return false;
      }

      var options = {
        SDKAppID: this.config.SDKAPPID // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID

      };
      var that = this; // 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例

      this.$TUIKit = _TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.create(options); // SDK 实例通常用 tim 表示
      // 设置 SDK 日志输出级别，详细分级请参见 setLogLevel 接口的说明

      this.$TUIKit.setLogLevel(0); // 普通级别，日志量较多，接入时建议使用
      // tim.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用
      // 注册 COS SDK 插件   此处暂时隐藏有需求要传图片,文件等的请放开进行配置,记住头部引入
      // tim.registerPlugin({'cos-wx-sdk': COS})
      // 监听事件，例如：

      this.$TUIKit.on(_TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.SDK_READY, function (event) {
        console.log("1111111"); // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
        // event.name - TIM.EVENT.SDK_READY
      });
      this.$TUIKit.on(_TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.MESSAGE_RECEIVED, function (event) {
        console.log("收到消息");
        var data = event.data[0];
        console.log(data); // if (data.from != this.config.userID) {

        that.list.push({
          from_account_profile: {
            uuid: that.userInfo.uuid,
            nick_name: data.nick,
            face_url: data.avatar
          },
          from_account: data.from,
          to_account: data.to,
          msg_content: data.payload.text
        }); // }
        // 收到推送的单聊、群聊、群提示、群系统通知的新消息，可通过遍历 event.data 获取消息列表数据并渲染到页面
        // event.name - TIM.EVENT.MESSAGE_RECEIVED
        // event.data - 存储 Message 对象的数组 - [Message]
      });
      this.$TUIKit.on(_TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.MESSAGE_READ_BY_PEER, function (event) {
        console.log("2222222"); // SDK 收到对端已读消息的通知，即已读回执。使用前需要将 SDK 版本升级至 v2.7.0 或以上。仅支持单聊会话。
        // event.name - TIM.EVENT.MESSAGE_READ_BY_PEER
        // event.data - event.data - 存储 Message 对象的数组 - [Message] - 每个 Message 对象的 isPeerRead 属性值为 true
      });
      this.$TUIKit.on(_TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.CONVERSATION_LIST_UPDATED, function (event) {
        console.log("333333333", event.data);
        this.msgList = event.data; // 收到会话列表更新通知，可通过遍历 event.data 获取会话列表数据并渲染到页面
        // event.name - TIM.EVENT.CONVERSATION_LIST_UPDATED
        // event.data - 存储 Conversation 对象的数组 - [Conversation]
      });
      this.$TUIKit.on(_TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.ERROR, function (event) {// 收到 SDK 发生错误通知，可以获取错误码和错误信息
        // event.name - TIM.EVENT.ERROR
        // event.data.code - 错误码
        // event.data.message - 错误信息
      });
      this.$TUIKit.on(_TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.SDK_NOT_READY, function (event) {// 收到 SDK 进入 not ready 状态通知，此时 SDK 无法正常工作
        // event.name - TIM.EVENT.SDK_NOT_READY
      });
      this.$TUIKit.on(_TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.KICKED_OUT, function (event) {// 收到被踢下线通知
        // event.name - TIM.EVENT.KICKED_OUT
        // event.data.type - 被踢下线的原因，例如:
        //    - TIM.TYPES.KICKED_OUT_MULT_ACCOUNT 多实例登录被踢
        //    - TIM.TYPES.KICKED_OUT_MULT_DEVICE 多终端登录被踢
        //    - TIM.TYPES.KICKED_OUT_USERSIG_EXPIRED 签名过期被踢 （v2.4.0起支持）。
      });
      this.$TUIKit.on(_TUIKit_lib_tim_wx_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.NET_STATE_CHANGE, function (event) {//  网络状态发生改变（v2.5.0 起支持）。
        // event.name - TIM.EVENT.NET_STATE_CHANGE
        // event.data.state 当前网络状态，枚举值及说明如下：
        //     \- TIM.TYPES.NET_STATE_CONNECTED - 已接入网络
        //     \- TIM.TYPES.NET_STATE_CONNECTING - 连接中。很可能遇到网络抖动，SDK 在重试。接入侧可根据此状态提示“当前网络不稳定”或“连接中”
        //    \- TIM.TYPES.NET_STATE_DISCONNECTED - 未接入网络。接入侧可根据此状态提示“当前网络不可用”。SDK 仍会继续重试，若用户网络恢复，SDK 会自动同步消息
      });
    },
    login_TIM: function login_TIM(userID) {
      //登录im实时聊天
      var promise = this.$TUIKit.login({
        userID: userID,
        userSig: Object(_TUIKit_debug_GenerateTestUserSig__WEBPACK_IMPORTED_MODULE_4__[/* genTestUserSig */ "a"])(this.config).userSig
      });
      promise.then(function (imResponse) {
        console.log("登录成功");
        console.log(imResponse.data); // 登录成功

        if (imResponse.data.repeatLogin === true) {
          // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
          console.log("当前重复登录");
          console.log(imResponse.data.errorInfo);
        }
      }).catch(function (imError) {
        console.warn("login error:", imError); // 登录失败的相关信息
      });
    },
    getMsgList_TIM: function getMsgList_TIM(userID) {
      // 打开某个会话时，第一次拉取消息列表
      var promise = this.$TUIKit.getMessageList({
        conversationID: "C2C" + userID,
        count: 15
      });
      promise.then(function (imResponse) {
        var messageList = imResponse.data.messageList; // 消息列表。

        var nextReqMessageID = imResponse.data.nextReqMessageID; // 用于续拉，分页续拉时需传入该字段。

        var isCompleted = imResponse.data.isCompleted; // 表示是否已经拉完所有消息。

        console.log(imResponse);
        var msgarr = this.globalData.globalData_TIM.msg;
        var conversationTo = userID; // 定义会话键值

        if (msgarr[conversationTo] != undefined) {
          msgarr[conversationTo].concat(messageList);
        } else {
          msgarr[conversationTo] = messageList;
        }

        this.globalData.globalData_TIM.msg = msgarr;
        console.log(msgarr, "msgarr");
      });
    },
    logout_TIM: function logout_TIM() {
      var promise = this.$TUIKit.logout();
      promise.then(function (imResponse) {
        console.log(imResponse.data); // 登出成功
      }).catch(function (imError) {
        console.warn("logout error:", imError);
      });
    },
    sendMessage: function sendMessage() {
      this.sendMsg({
        from_account: this.userArr[1].uuid,
        to_account: this.userArr[0].uuid,
        text_messages: this.msg
      });
    },
    sendMsg: function sendMsg(params) {
      var _this = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_5__[/* sendMsg */ "eb"])(params);

              case 3:
                res = _context.sent;
                _this.msg = ""; // this.list.push({
                //   from_account_profile: {
                //     uuid: this.userInfo.uuid,
                //     nick_name: this.userInfo.nickname,
                //     face_url: this.userInfo.avatar,
                //   },
                //   from_account: params.from_account,
                //   to_account: params.to_account,
                //   msg_content: params.text_messages,
                // });

                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    addImUser: function addImUser(params) {
      var _this2 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_5__[/* addImUser */ "a"])(params);

              case 3:
                res = _context2.sent;

                _this2.login_TIM(_this2.config.userID);

                _this2.msgInfo({
                  page: _this2.pageNum,
                  per_page: _this2.pageSize,
                  to_account: params[0].uuid
                });

                _context2.next = 10;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    msgInfo: function msgInfo(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_5__[/* msgInfo */ "K"])(params);

              case 3:
                res = _context3.sent;
                _this3.list = res.data.data.items;
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
    addMsgInfo: function addMsgInfo(params) {
      var _this4 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_5__[/* msgInfo */ "K"])(params);

              case 3:
                res = _context4.sent;
                _this4.list = res.data.data.items.concat(_this4.list);
                _this4.triggered = false;
                _context4.next = 12;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                _this4.triggered = false;
                Object(_utils_util__WEBPACK_IMPORTED_MODULE_6__[/* errortip */ "a"])("没有更多数据了～");

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    }
  },
  onLoad: function onLoad(options) {
    this.init_TIM(); //在需要的页面初始化
    // this.login_TIM(this.config.userID);

    if (options.uuid) {
      var userInfo = wx.getStorageSync("userInfo");
      this.userInfo = userInfo;
      var meObj = {
        uuid: userInfo.uuid,
        nick_name: userInfo.nickname,
        face_url: userInfo.avatar
      };
      var arr = [{
        uuid: options.uuid,
        nick_name: options.nickname,
        face_url: options.avatar
      }, meObj];
      this.config.userID = meObj.uuid;
      this.userArr = arr;
      wx.setNavigationBarTitle({
        title: this.userArr[0].nick_name
      });
      this.addImUser(arr);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/chat/index.vue?vue&type=template&id=d980bb1e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packageMsg/pages/chat/index.vue?vue&type=template&id=d980bb1e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "chat" },
    [
      _c(
        "scroll-view",
        {
          attrs: {
            "scroll-y": true,
            "refresher-enabled": true,
            "refresher-triggered": _vm.triggered,
          },
          on: {
            refresherpulling: _vm.onPulling,
            refresherrefresh: _vm.onRefresh,
            refresherrestore: _vm.onRestore,
            refresherabort: _vm.onAbort,
          },
        },
        [
          _c(
            "view",
            { staticClass: "chat-list" },
            _vm._l(_vm.list, function (item, index) {
              return _c(
                "view",
                {
                  key: index,
                  staticClass: "chat-box",
                  class:
                    item.from_account == _vm.userInfo.uuid ? "chat-right" : "",
                },
                [
                  _c("image", {
                    attrs: { src: item.from_account_profile.face_url },
                  }),
                  _c("view", { staticClass: "chat-txt" }, [
                    _vm._v(" " + _vm._s(item.msg_content) + " "),
                  ]),
                ]
              )
            }),
            0
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: "chat-send", style: { bottom: _vm.bottomVal } },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.msg,
                expression: "msg",
              },
            ],
            staticClass: "send-input",
            attrs: { "adjust-position": false },
            domProps: { value: _vm.msg },
            on: {
              focus: _vm.inputBindFocus,
              blur: _vm.inputBindBlur,
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.msg = $event.target.value
              },
            },
          }),
          _c(
            "text",
            { staticClass: "send-btn", on: { tap: _vm.sendMessage } },
            [_vm._v("发送")]
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

/***/ "./src/packageMsg/pages/chat/index.scss":
/*!**********************************************!*\
  !*** ./src/packageMsg/pages/chat/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageMsg/pages/chat/index.vue":
/*!*********************************************!*\
  !*** ./src/packageMsg/pages/chat/index.vue ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/packageMsg/pages/chat/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageMsg/pages/chat/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/packageMsg/pages/chat/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/packageMsg/pages/chat/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/chat/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/packageMsg/pages/chat/index.vue?vue&type=template&id=d980bb1e&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/packageMsg/pages/chat/index.vue?vue&type=template&id=d980bb1e&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d980bb1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d980bb1e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/packageMsg/pages/chat/index.vue?vue&type=template&id=d980bb1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d980bb1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d980bb1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/packageMsg/pages/chat/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map