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
  const start = +new Date();
  return new Promise((resolve, reject) => {
    wx.request({
      ...data,
      header,
      url: params.url,
      success: (res) => {
        // 上报接口性能
        wx.reportEvent &&
          wx.reportEvent("wxdata_perf_monitor", {
            //接口ID，可以使用URL相似的ID，也可以另外命名
            wxdata_perf_monitor_id: params.url,
            //接口等级，0为普通，非0为重要，数值越大越重要。根据实际业务情况进行设置
            wxdata_perf_monitor_level: 1,
            //错误码，0为调用成功，非0为调用失败
            wxdata_perf_error_code: res.data.code == 200 ? 0 : -1,
            //错误信息，选填，可以上报错误相关信息，方便后续排查问题
            wxdata_perf_error_msg: res.data.msg,
            //接口耗时，选填
            wxdata_perf_cost_time: +new Date() - start,
            //以下为补充字段，可额外上报其他监控信息，用于事件分析，非必填
            wxdata_perf_extra_info1: JSON.stringify(res.data),
            wxdata_perf_extra_info2: "",
            wxdata_perf_extra_info3: "",
          });
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

export const platformMap = {
  XM: "虾米约拍",
  YPTG: "约拍通告",
  ZCTG: "种草通告",
};

export const platformLogo = {
  XM: "https://yuepai-oss.qubeitech.com/static/banner/xiamiyuepai.png",
  YPTG: "https://yuepai-oss.qubeitech.com/static/banner/yuepaitonggao.png",
  ZCTG: "https://yuepai-oss.qubeitech.com/static/banner/zhongcaotonggao.png",
};
