import { request, requestUpload } from "../utils/util";
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
// 用户主页信息
export const userInfo = (data) => {
  return request({
    url: baseUrl + "/v1/user/info",
    method: "get",
    data,
  });
};
// 地理位置
export const getGeometry = (data) => {
  return request({
    url: baseUrl + "/v1/public/geometry",
    method: "post",
    data,
  });
};
// 自我简介
export const userResume = (data) => {
  return request({
    url: baseUrl + "/v1/user/resume",
    method: "post",
    data,
  });
};
// 获取编辑资料
export const userProfile = (data) => {
  return request({
    url: baseUrl + "/v1/user/profile",
    method: "get",
    data,
  });
};
// 更新头像
export const updateAvatar = (data) => {
  return request({
    url: baseUrl + "/v1/user/avatar",
    method: "PUT",
    data,
  });
};
// 保存体型
export const userShape = (data) => {
  return request({
    url: baseUrl + "/v1/user/shape",
    method: "post",
    data,
  });
};
// 保存形象视频&主页视频
export const userAlbum = (data) => {
  return request({
    url: baseUrl + "/v1/user/album",
    method: "post",
    data,
  });
};
// 上传形象照片
export const uploadImagePhoto = (path, params) => {
  return requestUpload(path, params);
};
// 获取形象信息
export const userShapeDetail = (data) => {
  return request({
    url: baseUrl + "/v1/user/shape",
    method: "get",
    data,
  });
};
// 获取相册和视频
export const userAlbumDetail = (data) => {
  return request({
    url: baseUrl + "/v1/user/album",
    method: "get",
    data,
  });
};
// 获取标签
export const userSticker = (data) => {
  return request({
    url: baseUrl + "/v1/user/sticker",
    method: "get",
    data,
  });
};
// 提交标签
export const subUserSticker = (data) => {
  return request({
    url: baseUrl + "/v1/user/sticker",
    method: "post",
    data,
  });
};
// 创建作品
export const subNotePhoto = (data) => {
  return request({
    url: baseUrl + "/v1/note/photo",
    method: "post",
    data,
  });
};
// 作品列表
export const photoList = (data) => {
  return request({
    url: baseUrl + "/v1/note/photo/list",
    method: "post",
    data,
  });
};
// 作品详情
export const photoInfo = (data) => {
  return request({
    url: baseUrl + "/v1/note/photo/info",
    method: "post",
    data,
  });
};
// 通告详情
export const noticeTemplate = (data) => {
  return request({
    url: baseUrl + "/v1/note/notice/template",
    method: "post",
    data,
  });
};
// 提交通告
export const submitNotice = (data) => {
  return request({
    url: baseUrl + "/v1/note/notice",
    method: "post",
    data,
  });
};
