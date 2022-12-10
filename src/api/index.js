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
// 通告列表页筛选
export const noticeFilter = (data) => {
  return request({
    url: baseUrl + "/v1/note/notice/filter",
    method: "get",
    data,
  });
};
// 通告列表
export const noticeList = (data) => {
  return request({
    url: baseUrl + "/v1/note/notice/list",
    method: "post",
    data,
  });
};
// 通告详情
export const noticeInfo = (data) => {
  return request({
    url: baseUrl + "/v1/note/notice/info",
    method: "post",
    data,
  });
};
// 支付
export const paymina = (data) => {
  return request({
    url: baseUrl + "/v1/pay/mina",
    method: "post",
    data,
  });
};
// 获取发起约拍页模版
export const inviteTemplate = (data) => {
  return request({
    url: baseUrl + "/v1/record/invite/template",
    method: "post",
    data,
  });
};
// 发起约拍提交
export const inviteApply = (data) => {
  return request({
    url: baseUrl + "/v1/record/invite/apply",
    method: "post",
    data,
  });
};
// 红人列表
export const celebrityList = (data) => {
  return request({
    url: baseUrl + "/v1/user/celebrity/list",
    method: "get",
    data,
  });
};
// 创建|更新红人账号
export const userCelebrity = (data) => {
  return request({
    url: baseUrl + "/v1/user/celebrity",
    method: "post",
    data,
  });
};
// 红人详情
export const celebrityInfo = (data) => {
  return request({
    url: baseUrl + "/v1/user/celebrity/info",
    method: "get",
    data,
  });
};
// 获取地址列表
export const addressList = (data) => {
  return request({
    url: baseUrl + "/v1/user/address/list",
    method: "get",
    data,
  });
};
// 创建｜更新地址
export const submitAddress = (data) => {
  return request({
    url: baseUrl + "/v1/user/address",
    method: "post",
    data,
  });
};
// 地址详情
export const addressInfo = (data) => {
  return request({
    url: baseUrl + "/v1/user/address/info",
    method: "post",
    data,
  });
};
// 获取我的联系方式
export const userContact = (data) => {
  return request({
    url: baseUrl + "/v1/user/contact",
    method: "get",
    data,
  });
};
// 提交我的联系方式
export const subContact = (data) => {
  return request({
    url: baseUrl + "/v1/user/contact",
    method: "post",
    data,
  });
};
// 提交我的联系方式
export const subApply = (data) => {
  return request({
    url: baseUrl + "/v1/record/invite/apply",
    method: "post",
    data,
  });
};
// 收到约拍列表
export const applyList = (data) => {
  return request({
    url: baseUrl + "/v1/record/apply/list",
    method: "post",
    data,
  });
};
// 收到约拍详情
export const applyInfo = (data) => {
  return request({
    url: baseUrl + "/v1/record/apply/info",
    method: "post",
    data,
  });
};
// 我的访客
export const visitorList = (data) => {
  return request({
    url: baseUrl + "/v1/record/visitor/list",
    method: "post",
    data,
  });
};
// 收到的赞
export const voteList = (data) => {
  return request({
    url: baseUrl + "/v1/record/vote/list",
    method: "post",
    data,
  });
};
// 点赞
export const giveUp = (data) => {
  return request({
    url: baseUrl + "/v1/record/vote",
    method: "post",
    data,
  });
};
// 约单管理
export const noteManageList = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/list",
    method: "post",
    data,
  });
};
