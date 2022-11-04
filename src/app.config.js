export default defineAppConfig({
  pages: [
    // "pages/vip/index",
    "pages/home/index",
    "pages/login/index",
    "pages/register/index",
    "pages/my/index",
    "pages/release/index",
    "pages/position/index",
    "pages/msg/index",
    "pages/release/appointment/index",
    "pages/release/field/index",
    "pages/index/index",
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
      {
        pagePath: "pages/position/index",
        iconPath: "assets/images/position.png",
        selectedIconPath: "assets/images/position-sel.png",
        text: "同城",
      },
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
        "pages/yuedan/add_yuedan/index",
        "pages/user/identity/index",
        "pages/yuedan/yuedan_detail/index",
      ],
    },
  ],
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示", // 高速公路行驶持续后台定位
    },
  },
  requiredPrivateInfos: ["getLocation"],
});
