export default defineAppConfig({
  pages: [
    "pages/home/index",
    "pages/login/index",
    "pages/register/index",
    "pages/my/index",
    "pages/release/index",
    // "pages/position/index",
    "pages/msg/index",
    "pages/release/appointment/index",
    "pages/release/field/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "虾米约拍",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#343434",
    selectedColor: "#fe5457",
    borderStyle: "white",
    backgroundColor: "#FFFFFF",
    list: [
      {
        pagePath: "pages/home/index",
        iconPath: "assets/images/home.png",
        selectedIconPath: "assets/images/home-sel.png",
        text: "首页",
      },
      // {
      //   pagePath: "pages/position/index",
      //   iconPath: "assets/images/position.png",
      //   selectedIconPath: "assets/images/position-sel.png",
      //   text: "同城",
      // },
      {
        pagePath: "pages/release/index",
        iconPath: "assets/images/release.png",
        selectedIconPath: "assets/images/release-sel.png",
        text: "发布",
      },
      {
        pagePath: "pages/msg/index",
        iconPath: "assets/images/msg.png",
        selectedIconPath: "assets/images/msg-sel.png",
        text: "消息",
      },
      {
        pagePath: "pages/my/index",
        iconPath: "assets/images/wode.png",
        selectedIconPath: "assets/images/wode-sel.png",
        text: "我的",
      },
    ],
  },
  subPackages: [
    {
      root: "packageAdd/",
      name: "packadd",
      pages: [
        "pages/user/identity/index",
        "pages/user/editinfor/index",
        "pages/user/editusertro/index",
        "pages/user/editlabel/index",
        "pages/user/addresslist/index",
        "pages/user/addressedit/index",
        "pages/user/launchyuepai/index",
        "pages/user/sensationlist/index",
        "pages/user/addfans/index",
        "pages/user/contact/index",
        "pages/user/collection/index",
        "pages/user/coin/index",
        "pages/user/rechargecoin/index",
        "pages/user/we-cropper/index",
        "pages/user/invite/index",
        "pages/user/follow/index",
        "pages/user/platform/index",
        "pages/yuedan/add_yuedan/index",
        "pages/yuedan/yuedan_detail/index",
        "pages/yuedan/yuedan_manage/index",
        "pages/zuopin/add_zuopin/index",
        "pages/zuopin/zuopin_detail/index",
        "pages/zuopin/zuopin_list/index",
        "pages/tips/index",
        "pages/user/followAndfans/index",
        "pages/user/realnameAuth/index",
        "pages/user/baiduRealnameAuth/index",
      ],
    },
    {
      root: "packageMoka/",
      name: "packmoka",
      pages: [
        "pages/moka/editshow/index",
        "pages/moka/editpersondata/index",
        "pages/moka/editpersonimg/index",
        "pages/moka/editvideo/index",
      ],
    },
    {
      root: "packageTonggao/",
      name: "packtonggao",
      pages: [
        "pages/index/index",
        "pages/add/index",
        "pages/shop/index",
        "pages/brand/index",
        "pages/detail/index",
        "pages/tonggao_manage/index",
        "pages/open_recruitment/index",
      ],
    },
    {
      root: "packageMsg/",
      name: "packagemsg",
      pages: [
        "pages/msgList/index",
        "pages/livevisitor/index",
        "pages/invite/index",
        "pages/inviteDetail/index",
        "pages/signup/index",
        "pages/manageSignup/index",
        "pages/tgregreceiveshow/index",
        "pages/complaint/index",
        "pages/creditGuarantee/index",
        "pages/chat/index",
      ],
    },
    {
      root: "packageVip/",
      name: "packagevip",
      pages: ["pages/vip/index"],
    },
    {
      root: "packageSet/",
      name: "packageset",
      pages: [
        "pages/index/index",
        "pages/about/index",
        "pages/serviceAgreement/index",
        "pages/customerCenter/index",
        "pages/feedback/index",
        "pages/cheatPrevention/index",
      ],
    },
  ],
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示", // 高速公路行驶持续后台定位
    },
  },
  requiredPrivateInfos: [
    "chooseAddress",
    "chooseLocation",
    "choosePoi",
    "getLocation",
    "onLocationChange",
    "startLocationUpdateBackground",
    "startLocationUpdate",
  ],
  lazyCodeLoading: "requiredComponents",
});
