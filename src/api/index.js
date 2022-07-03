import { request } from "../utils/util";
const baseUrl = "https://tapi.cupz.cn";
// WX登录,拿code换登录
export const wxlogin = (data) => {
  return request({
    url: baseUrl + "/v1/token",
    method: "POST",
    data,
  });
};
// 获取手机号码
export const getPhone = (data) => {
  return request({
    url: baseUrl + "/v1/phone",
    method: "POST",
    data,
  });
};
