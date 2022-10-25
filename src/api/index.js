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
    url: baseUrl + "/v1/user/decrypt/mobile",
    method: "POST",
    data,
  });
};
// 上传文件
export const uploadFile = (data) => {
  return request({
    url: baseUrl + "/v1/file/upload",
    method: "POST",
    data,
  });
};
// 更新个人资料
export const updateUser = (data) => {
  return request({
    url: baseUrl + "/v1/user",
    method: "PUT",
    data,
  });
};
// 获得身份
export const getCareer = (data) => {
  return request({
    url: baseUrl + "/v1/user/career",
    method: "get",
    data,
  });
};
// 创建身份
export const creatCareer = (data) => {
  return request({
    url: baseUrl + "/v1/user/career",
    method: "post",
    data,
  });
};
