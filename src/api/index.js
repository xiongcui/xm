import { request, requestUpload } from "../utils/util";
const baseUrl = "https://pai.qubeitech.com";
// const baseUrl = "https://dev.qubeitech.com";
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

// 注册
export const userRegister = (data) => {
  return request({
    url: baseUrl + "/v1/user/register",
    method: "post",
    data,
  });
};
// 更新个人资料
export const profileUpdate = (data) => {
  return request({
    url: baseUrl + "/v1/user/register",
    method: "post",
    data,
  });
};

// 获得身份
export const getCareer = (data) => {
  return request({
    url: baseUrl + "/v1/user/career/list",
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
    url: baseUrl + "/v1/note/explore/invite/list",
    method: "post",
    data,
  });
};
// 约拍详情页
export const inviteInfo = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/invite/info",
    method: "post",
    data,
  });
};
// 用户主页信息
export const userInfo = (data) => {
  return request({
    // url: baseUrl + "/v1/user/info",
    url: baseUrl + "/v1/home/user/explore/info",
    method: "post",
    data,
  });
};
// 我的-用户主页信息
export const userHomeInfo = (data) => {
  return request({
    url: baseUrl + "/v1/home/user/homepage/info",
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
    url: baseUrl + "/v1/user/shape/info",
    method: "post",
    data,
  });
};
// 获取相册和视频
export const userAlbumDetail = (data) => {
  return request({
    url: baseUrl + "/v1/user/album/list",
    method: "post",
    data,
  });
};
// 获取标签
export const userSticker = (data) => {
  return request({
    url: baseUrl + "/v1/user/sticker/info",
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
    url: baseUrl + "/v1/note/publish/photo",
    method: "post",
    data,
  });
};
// 作品列表
export const photoList = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/photo/list",
    method: "post",
    data,
  });
};
// 作品详情
export const photoInfo = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/photo/info",
    method: "post",
    data,
  });
};
// 通告详情
export const noticeTemplate = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/notice/template",
    method: "post",
    data,
  });
};
// 提交通告
export const submitNotice = (data) => {
  return request({
    url: baseUrl + "/v1/note/publish/notice",
    method: "post",
    data,
  });
};
// 通告列表页筛选
export const noticeFilter = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/notice/filter",
    method: "post",
    data,
  });
};
// 通告列表
export const noticeList = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/notice/list",
    method: "post",
    data,
  });
};
// 通告详情
export const noticeInfo = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/notice/info",
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
    url: baseUrl + "/v1/note/apply/template",
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
    url: baseUrl + "/v1/user/contact/list",
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
    url: baseUrl + "/v1/note/apply/commit",
    method: "post",
    data,
  });
};
// 收到约拍列表
export const applyList = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/receive/list",
    method: "post",
    data,
  });
};
// 收到约拍详情
export const applyInfo = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/receive/info",
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
    url: baseUrl + "/v1/note/manage/publish/list",
    method: "post",
    data,
  });
};
// 作品管理和约拍管理按钮操作
export const manageEvent = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/publish/event",
    method: "post",
    data,
  });
};
// 作品列表
export const photoListOwn = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/photo/list/own",
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
    url: baseUrl + "/v1/pay/wx/mina/member",
    method: "post",
    data,
  });
};
// 会员信息
export const memberInfo = (data) => {
  return request({
    url: baseUrl + "/v1/acct/info",
    method: "post",
    data,
  });
};
// 金币用途、赚取金币
export const coinList = (data) => {
  return request({
    url: baseUrl + "/v1/acct/coin/order/rule",
    method: "post",
    data,
  });
};
// 金币明细
export const coinItemList = (data) => {
  return request({
    url: baseUrl + "/v1/acct/coin/order/list",
    method: "post",
    data,
  });
};
// 获取金币数量
export const coinAcct = (data) => {
  return request({
    url: baseUrl + "/v1/acct/info",
    method: "post",
    data,
  });
};
// 金币充值
export const coinStore = (data) => {
  return request({
    url: baseUrl + "/v1/pay/wx/mina/coin",
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
    url: baseUrl + "/v1/note/manage/receive/event",
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
    url: baseUrl + "/v1/pay/wx/mina/security",
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
    url: baseUrl + "/v1/note/manage/publish/list",
    method: "post",
    data,
  });
};

// 通告管理-操作
export const manageOperation = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/publish/event",
    method: "post",
    data,
  });
};

// 开放招募-详情
export const pushInit = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/publish/notice/open/template",
    method: "post",
    data,
  });
};

// 开放招募-提交
export const subOpenRecruitment = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/publish/notice/open/payment",
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
// 转发详情
export const shareInviteInfo = (data) => {
  return request({
    url: baseUrl + "/v1/share/invite/mina/info",
    method: "post",
    data,
  });
};

// 是否签到
export const isSign = (data) => {
  return request({
    url: baseUrl + "/v1/sign/check/logs",
    method: "post",
    data,
  });
};
// 提交签到
export const submitSign = (data) => {
  return request({
    url: baseUrl + "/v1/sign/event/logs",
    method: "post",
    data,
  });
};
// 关注公众号
export const followRedirect = (data) => {
  return request({
    url: baseUrl + "/v1/wechat/follow/redirect",
    method: "post",
    data,
  });
};
// 邀请好友列表
export const shareInviteList = (data) => {
  return request({
    url: baseUrl + "/v1/share/invite/list",
    method: "post",
    data,
  });
};
// 客服中心
export const categoryList = (data) => {
  return request({
    url: baseUrl + "/v1/clientele/category/list",
    method: "post",
    data,
  });
};
// 意见反馈
export const feedback = (data) => {
  return request({
    url: baseUrl + "/v1/public/feedback",
    method: "post",
    data,
  });
};

// 添加用户
export const addImUser = (data) => {
  return request({
    url: baseUrl + "/v1/im/add/user",
    method: "post",
    data,
  });
};

// 发送消息
export const sendMsg = (data) => {
  return request({
    url: baseUrl + "/v1/im/send/msg",
    method: "post",
    data,
  });
};

// 消息列表
export const msgList = (data) => {
  return request({
    url: baseUrl + "/v1/im/msg/list",
    method: "post",
    data,
  });
};

// 消息详情
export const msgInfo = (data) => {
  return request({
    url: baseUrl + "/v1/im/msg/info",
    method: "post",
    data,
  });
};

// 公众号
export const checkFollow = (data) => {
  return request({
    url: baseUrl + "/v1/notify/check/follow/gzh",
    method: "post",
    data,
  });
};

// 金币支付
export const applyPay = (data) => {
  return request({
    url: baseUrl + "/v1/note/apply/payment",
    method: "post",
    data,
  });
};

// 关注
export const userFollow = (data) => {
  return request({
    url: baseUrl + "/v1/user/follow",
    method: "post",
    data,
  });
};

// 取关
export const userUnfollow = (data) => {
  return request({
    url: baseUrl + "/v1/user/unfollow",
    method: "post",
    data,
  });
};

// 关注列表
export const followerList = (data) => {
  return request({
    url: baseUrl + "/v1/user/follower/list",
    method: "post",
    data,
  });
};

// 粉丝列表
export const followedList = (data) => {
  return request({
    url: baseUrl + "/v1/user/followed/list",
    method: "post",
    data,
  });
};

// 消息通知列表
export const systemList = (data) => {
  return request({
    url: baseUrl + "/v1/notify/system/list",
    method: "post",
    data,
  });
};

// OCR识别接口
export const ocrCard = (data) => {
  return request({
    url: baseUrl + "/v1/identify/ocr/id_card",
    method: "post",
    data,
  });
};

// 信息上报接口
export const submitCard = (data) => {
  return request({
    url: baseUrl + "/v1/identify/submit/id_card",
    method: "post",
    data,
  });
};

// 识别结果接口
export const idcardInfo = (data) => {
  return request({
    url: baseUrl + "/v1/identify/ocr/id_card/info",
    method: "post",
    data,
  });
};

// 击提交后调用信息上报接口
export const ocrIdcard = (data) => {
  return request({
    url: baseUrl + "/v1/identify/submit/id_card",
    method: "post",
    data,
  });
};

// 约拍推荐
export const inviteAdviseList = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/invite/list/advise",
    method: "post",
    data,
  });
};

// 通告推荐
export const noticeAdviseList = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/notice/list/advise",
    method: "post",
    data,
  });
};

// 用户选择城市
export const userSelectCity = (data) => {
  return request({
    url: baseUrl + "/v1/user/select/city",
    method: "post",
    data,
  });
};

// 当前城市和签到
export const userStatus = (data) => {
  return request({
    url: baseUrl + "/v1/user/status",
    method: "post",
    data,
  });
};

// 筛选-约拍下拉选项
export const inviteFilter = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/invite/filter",
    method: "post",
    data,
  });
};
// 筛选-作品下拉选项
export const photoFilter = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/photo/filter",
    method: "post",
    data,
  });
};
// 用户推荐筛选
export const userFilter = (data) => {
  return request({
    url: baseUrl + "/v1/user/list/filter",
    method: "post",
    data,
  });
};
// 用户推荐列表
export const userList = (data) => {
  return request({
    url: baseUrl + "/v1/home/user/explore/list",
    method: "post",
    data,
  });
};
// 查看联系方式-支付
export const receivePayment = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/receive/payment",
    method: "post",
    data,
  });
};
// 约拍支付
export const invitePayment = (data) => {
  return request({
    url: baseUrl + "/v1/note/publish/invite/payment",
    method: "post",
    data,
  });
};
// 通告支付
export const noticePayment = (data) => {
  return request({
    url: baseUrl + "/v1/note/publish/notice/payment",
    method: "post",
    data,
  });
};
// 发布校验
export const publishVerify = (data) => {
  return request({
    url: baseUrl + "/v1/note/publish/verify",
    method: "post",
    data,
  });
};
// 申请报名检验
export const applyVerify = (data) => {
  return request({
    url: baseUrl + "/v1/note/apply/verify",
    method: "post",
    data,
  });
};
// 订阅模版
export const subscribeEvent = (data) => {
  return request({
    url: baseUrl + "/v1/wechat/nina/subscribe/msg/event",
    method: "post",
    data,
  });
};
// banner
export const bannerList = (data) => {
  return request({
    url: baseUrl + "/v1/banner/list",
    method: "post",
    data,
  });
};
// 我的申请列表
export const manageApplyList = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/apply/list",
    method: "post",
    data,
  });
};
// 申请-列表操作
export const manageApplyEvent = (data) => {
  return request({
    url: baseUrl + "/v1/note/manage/apply/event",
    method: "post",
    data,
  });
};
// 沟通校验
export const imVerify = (data) => {
  return request({
    url: baseUrl + "/v1/im/verify",
    method: "post",
    data,
  });
};
// 获取小程序码
export const qrcode = (data) => {
  return request({
    url: baseUrl + "/v1/public/user/unlimited/qrcode",
    method: "post",
    data,
  });
};
// 子用户列表
export const nonpersonalList = (data) => {
  return request({
    url: baseUrl + "/v1/user/shape/non_personal/list",
    method: "post",
    data,
  });
};
// 创建模卡
export const userMocha = (data) => {
  return request({
    url: baseUrl + "/v1/user/mocha",
    method: "post",
    data,
  });
};
// 模卡列表
export const mochaList = (data) => {
  return request({
    url: baseUrl + "/v1/user/mocha/list",
    method: "post",
    data,
  });
};
// 模卡操作
export const mochaEvent = (data) => {
  return request({
    url: baseUrl + "/v1/user/mocha/event",
    method: "post",
    data,
  });
};
// 来源
export const sourceItems = (data) => {
  return request({
    url: baseUrl + "/v1/public/promotion/source/items",
    method: "post",
    data,
  });
};
// 首页弹框操作
export const popupLogs = (data) => {
  return request({
    url: baseUrl + "/v1/task/popup/logs",
    method: "post",
    data,
  });
};
// 活动获得参数
export const publishConfig = (data) => {
  return request({
    url: baseUrl + "/v1/sport/publish/config",
    method: "post",
    data,
  });
};
// 搜索用户
export const userSearch = (data) => {
  return request({
    url: baseUrl + "/v1/user/search",
    method: "post",
    data,
  });
};
// 活动发布
export const publishCreate = (data) => {
  return request({
    url: baseUrl + "/v1/sport/publish/create",
    method: "post",
    data,
  });
};
// 活动列表
export const exploreList = (data) => {
  return request({
    url: baseUrl + "/v1/sport/explore/list",
    method: "post",
    data,
  });
};
// 活动详情
export const exploreInfo = (data) => {
  return request({
    url: baseUrl + "/v1/sport/explore/info",
    method: "post",
    data,
  });
};
// 活动报名详情
export const sceneInfo = (data) => {
  return request({
    url: baseUrl + "/v1/sport/apply/select/info",
    method: "post",
    data,
  });
};
// 报名支付
export const applicationPay = (data) => {
  return request({
    url: baseUrl + "/v1/sport/apply/commit",
    method: "post",
    data,
  });
};
// 获取报名成员列表
export const applyMember = (data) => {
  return request({
    url: baseUrl + "/v1/sport/apply/member",
    method: "post",
    data,
  });
};
// 获取报名状态
export const applyResult = (data) => {
  return request({
    url: baseUrl + "/v1/sport/apply/result",
    method: "post",
    data,
  });
};
// 活动校验
export const activityVerify = (data) => {
  return request({
    url: baseUrl + "/v1/sport/apply/verify",
    method: "post",
    data,
  });
};
// 活动列表（我的活动）
export const myActivityList = (data) => {
  return request({
    url: baseUrl + "/v1/sport/manage/apply/list",
    method: "post",
    data,
  });
};
// 订单操作（我的活动）
export const myActivityEvent = (data) => {
  return request({
    url: baseUrl + "/v1/sport/manage/apply/event",
    method: "post",
    data,
  });
};
// 订单详情接口
export const sportInfo = (data) => {
  return request({
    url: baseUrl + "/v1/sport/manage/apply/info",
    method: "post",
    data,
  });
};

// 发布作品
export const publishWorks = (data) => {
  return request({
    url: baseUrl + "/v1/games/publish/works",
    method: "post",
    data,
  });
};

// 作品列表
export const worksList = (data) => {
  return request({
    url: baseUrl + "/v1/games/explore/works/list",
    method: "post",
    data,
  });
};
// 赛事列表
export const guideList = (data) => {
  return request({
    url: baseUrl + "/v1/games/explore/guide/list",
    method: "post",
    data,
  });
};
// 赛事详情
export const guideInfo = (data) => {
  return request({
    url: baseUrl + "/v1/games/explore/guide/info",
    method: "post",
    data,
  });
};

// 作品列表（自己）
export const worksListOwn = (data) => {
  return request({
    url: baseUrl + "/v1/games/explore/works/list/own",
    method: "post",
    data,
  });
};

// 作品详情
export const worksInfo = (data) => {
  return request({
    url: baseUrl + "/v1/games/explore/works/info",
    method: "post",
    data,
  });
};

// 留言详情
export const commentInfo = (data) => {
  return request({
    url: baseUrl + "/v1/games/explore/works/comment/info",
    method: "post",
    data,
  });
};

// 创建留言
export const commentCreate = (data) => {
  return request({
    url: baseUrl + "/v1/games/explore/works/comment/create",
    method: "post",
    data,
  });
};

// 作品点赞
export const worksEvent = (data) => {
  return request({
    url: baseUrl + "/v1/games/explore/works/event",
    method: "post",
    data,
  });
};

// 资料列表
export const materialsList = (data) => {
  return request({
    url: baseUrl + "/v1/task/receive/materials/list",
    method: "post",
    data,
  });
};

// 领取资料
export const materialsEvent = (data) => {
  return request({
    url: baseUrl + "/v1/task/receive/materials/event",
    method: "post",
    data,
  });
};

// 领取支付
export const materialsPayment = (data) => {
  return request({
    url: baseUrl + "/v1/task/receive/materials/payment",
    method: "post",
    data,
  });
};

//  加入社群 -详情页
export const posterInfo = (data) => {
  return request({
    url: baseUrl + "/v1/social/poster/info",
    method: "post",
    data,
  });
};

// 社群支付check
export const socialCheck = (data) => {
  return request({
    url: baseUrl + "/v1/social/apply/check",
    method: "post",
    data,
  });
};

// 社群获取支付结果
export const socialResult = (data) => {
  return request({
    url: baseUrl + "/v1/social/apply/result",
    method: "post",
    data,
  });
};

// 社群支付接口，唤起微信支付
export const socialPay = (data) => {
  return request({
    url: baseUrl + "/v1/social/wx/mina/social/poster",
    method: "post",
    data,
  });
};

// 钱包信息
export const acctInfo = (data) => {
  return request({
    url: baseUrl + "/v1/acct/info",
    method: "post",
    data,
  });
};

// 任务规则
export const ruleList = (data) => {
  return request({
    url: baseUrl + "/v1/acct/order/rule/list",
    method: "post",
    data,
  });
};

// 快速升级-table
export const growthRuleList = (data) => {
  return request({
    url: baseUrl + "/v1/acct/growth/rule/list",
    method: "post",
    data,
  });
};

// 钱包明细
export const walletOrder = (data) => {
  return request({
    url: baseUrl + "/v1/acct/wallet/order/items",
    method: "post",
    data,
  });
};

// 签到计划列表
export const signinList = (data) => {
  return request({
    url: baseUrl + "/v1/signin/event/plan",
    method: "post",
    data,
  });
};

// 成长详情
export const growthInfo = (data) => {
  return request({
    url: baseUrl + "/v1/acct/growth/info",
    method: "post",
    data,
  });
};

// 邀请好友列表
export const inviteFriendsList = (data) => {
  return request({
    url: baseUrl + "/v1/acct/invite/friends/list",
    method: "post",
    data,
  });
};

// 钱包充值（获取数据后唤起微信支付）
export const walletRecharge = (data) => {
  return request({
    url: baseUrl + "/v1/pay/wx/mina/recharge",
    method: "post",
    data,
  });
};

// 签到
export const signinLogs = (data) => {
  return request({
    url: baseUrl + "/v1/signin/event/logs",
    method: "post",
    data,
  });
};

// 弹窗接口
export const checkStatus = (data) => {
  return request({
    url: baseUrl + "/v1/poster/check/status",
    method: "post",
    data,
  });
};

// 弹窗点击行为接口
export const checkEvent = (data) => {
  return request({
    url: baseUrl + "/v1/poster/click/event",
    method: "post",
    data,
  });
};

// 提现的接口
export const wxTransfer = (data) => {
  return request({
    url: baseUrl + "/v1/pay/wx/mina/transfer",
    method: "post",
    data,
  });
};

// 提现进度
export const orderInfo = (data) => {
  return request({
    url: baseUrl + "/v1/acct/wallet/order/info",
    method: "post",
    data,
  });
};

// 评论
export const comment = (data) => {
  return request({
    url: baseUrl + "/v1/sport/explore/comment/info",
    method: "post",
    data,
  });
};

// 分享秀
export const sharingInfo = (data) => {
  return request({
    url: baseUrl + "/v1/sport/explore/sharing/info",
    method: "post",
    data,
  });
};

// 评价晒单
export const sunbathingCreate = (data) => {
  return request({
    url: baseUrl + "/v1/sport/publish/comment/create",
    method: "post",
    data,
  });
};

// 解锁
export const unlockCommit = (data) => {
  return request({
    url: baseUrl + "/v1/unlock/apply/commit",
    method: "post",
    data,
  });
};

// 解锁确认支付
export const unlockPayment = (data) => {
  return request({
    url: baseUrl + "/v1/unlock/apply/payment",
    method: "post",
    data,
  });
};

// 解锁详情列表
export const unlockList = (data) => {
  return request({
    url: baseUrl + "/v1/unlock/apply/list",
    method: "post",
    data,
  });
};

// 约拍动态
export const trendsList = (data) => {
  return request({
    url: baseUrl + "/v1/note/explore/trends/list",
    method: "post",
    data,
  });
};

// 点击关闭
export const posterClick = (data) => {
  return request({
    url: baseUrl + "/v1/poster/click/event",
    method: "post",
    data,
  });
};

// // 加入社群
// export const socialCheck = (data) => {
//   return request({
//     url: baseUrl + "/v1/social/apply/check",
//     method: "post",
//     data,
//   });
// };
