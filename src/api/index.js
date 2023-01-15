import { request, requestUpload } from "../utils/util";
const baseUrl = "https://pai.qubeitech.com";
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
    method: "post",
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
    method: "post",
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
    method: "post",
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
    method: "post",
    data,
  });
};
// 获取相册和视频
export const userAlbumDetail = (data) => {
  return request({
    url: baseUrl + "/v1/user/album",
    method: "post",
    data,
  });
};
// 获取标签
export const userSticker = (data) => {
  return request({
    url: baseUrl + "/v1/user/sticker",
    method: "post",
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
    method: "post",
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
    method: "post",
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
    method: "post",
    data,
  });
};
// 获取地址列表
export const addressList = (data) => {
  return request({
    url: baseUrl + "/v1/user/address/list",
    method: "post",
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
    method: "post",
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
// 收藏
export const recordCollect = (data) => {
  return request({
    url: baseUrl + "/v1/record/collect",
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
// 作品管理和约拍管理按钮操作
export const manageEvent = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/event",
    method: "post",
    data,
  });
};
// 作品列表
export const photoListOwn = (data) => {
  return request({
    url: baseUrl + "/v1/note/photo/list/own",
    method: "post",
    data,
  });
};
// 收藏列表
export const collectList = (data) => {
  return request({
    url: baseUrl + "/v1/record/collect/list",
    method: "post",
    data,
  });
};
// 开通会员
export const memberOpen = (data) => {
  return request({
    url: baseUrl + "/v1/member/open",
    method: "post",
    data,
  });
};
// 会员信息
export const memberInfo = (data) => {
  return request({
    url: baseUrl + "/v1/member/info",
    method: "post",
    data,
  });
};
// 金币用途、赚取金币
export const coinList = (data) => {
  return request({
    url: baseUrl + "/v1/coin/rule/list",
    method: "post",
    data,
  });
};
// 金币明细
export const coinItemList = (data) => {
  return request({
    url: baseUrl + "/v1/coin/item/list",
    method: "post",
    data,
  });
};
// 获取金币数量
export const coinAcct = (data) => {
  return request({
    url: baseUrl + "/v1/coin/acct",
    method: "post",
    data,
  });
};
// 金币充值
export const coinStore = (data) => {
  return request({
    url: baseUrl + "/v1/coin/store",
    method: "post",
    data,
  });
};
// 消息通知
export const notifyNumber = (data) => {
  return request({
    url: baseUrl + "/v1/notify/number/warn",
    method: "post",
    data,
  });
};

export const faceToken = (data) => {
  return request({
    url: baseUrl + "/v1/identify/face/token",
    method: "post",
    data,
  });
};

export const facePrint = (data) => {
  return request({
    url: "https://brain.baidu.com/face/print",
    method: "post",
    data,
  });
};

// 收到操作
export const applyManage = (data) => {
  return request({
    url: baseUrl + "/v1/record/apply/manage",
    method: "post",
    data,
  });
};

// 投诉
export const publicComplain = (data) => {
  return request({
    url: baseUrl + "/v1/public/complain",
    method: "post",
    data,
  });
};

// 存保证金
export const securityOpen = (data) => {
  return request({
    url: baseUrl + "/v1/security/open",
    method: "post",
    data,
  });
};

// 查询用户保障金或会员
export const securityInfo = (data) => {
  return request({
    url: baseUrl + "/v1/security/info",
    method: "post",
    data,
  });
};

// 通告列表
export const manageList = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/list",
    method: "post",
    data,
  });
};

// 通告管理-操作
export const manageOperation = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/event",
    method: "post",
    data,
  });
};

// 开放招募-详情
export const pushInit = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/event/push/init",
    method: "post",
    data,
  });
};

// 开放招募-提交
export const subOpenRecruitment = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/event/push",
    method: "post",
    data,
  });
};

// 生成海报
export const inviteImage = (data) => {
  return request({
    url: baseUrl + "/v1/share/invite/image",
    method: "post",
    data,
  });
};

// 转发
export const shareInvite = (data) => {
  return request({
    url: baseUrl + "/v1/share/invite/mina",
    method: "post",
    data,
  });
};

// https://brain.baidu.com/face/print/?token=xxx

// 金币支付：[POST] -> /v1/coin/apply/pay
// {"oid": 'NE221210223505487819987', 'rule_code': 'apply_invite'}
