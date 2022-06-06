import { request } from "./util";
const baseUrl = "https://tiot.sinochem-tech.com/shianlianwxdev/";
// WX登录,拿code换登录
export const wxlogin = (data, successcb, failcb) => {
  console.log("执行登录逻辑");
  wx.login({
    success(res) {
      console.log(res);
      request({
        url: baseUrl + "wx/wexinLogin",
        data: { code: res.code },
        method: "POST",
        dataType: "json",
        responseType: "text",
        success: function (res) {
          if (successcb) {
            successcb(res.data || res);
          }
        },
        fail: function (res) {
          if (failcb) {
            failcb(res);
          }
        },
        complete: function (res) {},
      });
    },
    fail(err) {
      console.log(err);
    },
  });
};
