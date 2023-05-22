import { Base64 } from "js-Base64";

export const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

export const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

export const openPage = (url) => {
  console.log("open page:", url);
  wx.navigateTo({
    url: url,
  });
};

export const timeformat = function (date, fmt) {
  fmt = fmt || "yyyy-MM-dd HH:mm:ss";
  const o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    "H+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  const week = {
    0: "/u65e5",
    1: "/u4e00",
    2: "/u4e8c",
    3: "/u4e09",
    4: "/u56db",
    5: "/u4e94",
    6: "/u516d",
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? "/u661f/u671f"
          : "/u5468"
        : "") + week[date.getDay() + ""]
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

export const request = (params) => {
  let header = {};
  let token = wx.getStorageSync("token");
  header["Authorization"] = "Basic " + Base64.encode(token + ":");
  let data = Object.assign(header, params);
  return new Promise((resolve, reject) => {
    wx.request({
      ...data,
      header,
      url: params.url,
      success: (res) => {
        if (res.data.code == 200) {
          resolve(res);
        } else if (
          res.data.error_code == 1001 ||
          res.data.error_code == 1002 ||
          res.data.error_code == 1003 ||
          res.data.error_code == 1004
        ) {
          wx.removeStorage({
            key: "userInfo",
          });
          wx.removeStorage({
            key: "token",
          });
        } else {
          errortip(res.data.msg);
          reject(res);
        }
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};

export const requestUpload = (path, params) => {
  let header = {};
  let token = wx.getStorageSync("token");
  header["Authorization"] = "Basic " + Base64.encode(token + ":");
  let formData = params;
  wx.showLoading({
    title: "上传中",
    mask: true,
  });
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: "https://pai.qubeitech.com/v1/file/upload",
      filePath: path,
      formData,
      name: "file",
      header,
      success: (res) => {
        wx.hideLoading();
        //判断上传的是图片还是视频
        let data = JSON.parse(res.data);
        if (data.code == 200 && res.statusCode == 200) {
          resolve(data);
        } else {
          wx.showToast({
            title: "上传失败！",
            icon: "none",
          });
          reject(res);
        }
      },
      fail: (error) => {
        wx.showToast({
          title: "上传失败！",
          icon: "none",
        });
        reject(error);
      },
    });
  });
};

export const errortip = (txt) => {
  wx.showToast({
    title: txt,
    icon: "none",
    duration: 3000,
  });
};

export const isLogin = () => {
  let token = wx.getStorageSync("token");
  if (token) return true;
  return false;
};

export const throttle = (fn, t) => {
  let flag = true;
  const interval = t;
  return function () {
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, interval);
    }
  };
};
