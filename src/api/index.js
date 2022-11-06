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
// 获得参数
export const publicConfig = (data) => {
  return request({
    url: baseUrl + "/v1/public/config",
    method: "post",
    data,
  });
};
// 创建约拍
export const creatInvite = (data) => {
  return request({
    url: baseUrl + "/v1/note/publish/invite",
    method: "post",
    data,
  });
};

// 约拍列表
export const inviteList = (data) => {
  return request({
    url: baseUrl + "/v1/note/invite/list",
    method: "post",
    data,
  });
};
// 约拍详情页
export const inviteInfo = (data) => {
  return request({
    url: baseUrl + "/v1/note/invite/info",
    method: "post",
    data,
  });
};
