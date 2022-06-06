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

// header拦截 wx.getStorageSync('token')
export const request = (obj) => {
  let param = Object.assign(
    {
      header: {
        "identity-authentic-request-header": wx.getStorageSync("token") || "",
      },
    },
    obj
  );
  // console.log(param);
  // 拦截器
  const successcb = param.success;
  param.success = (res) => {
    if (res && res.data && (res.data.code == 10103 || res.data.code == 10104)) {
      //登录状态失效，需重新登录
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

export const errortip = (txt) => {
  wx.showToast({
    title: txt,
    icon: "error",
    duration: 2000,
  });
};
