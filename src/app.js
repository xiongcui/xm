import Vue from "vue";
// import { wxlogin } from "./api/index";

import "./app.scss";

const App = {
  onLaunch: () => {
    // 微信登陆
    let _this = App;
    // let token = wx.getStorageSync("token");
    // if (!token) {
    //   openPage("/pages/login/index");
    // }
    // 判断是否为iphoneX
    Vue.prototype.globalData = _this.globalData;
    wx.getSystemInfo({
      success: (res) => {
        let model = res.model;
        if (
          /iphone\sx/i.test(model) ||
          (/iphone/i.test(model) && /unknown/.test(model)) ||
          /iphone\s11/i.test(model) ||
          /iphone\s12/i.test(model) ||
          /iphone\s13/i.test(model)
        ) {
          _this.globalData.isIphoneX = true;
        } else {
          _this.globalData.isIphoneX = false;
        }
      },
    });
    // 获取导航栏信息
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: (res) => {
        //导航高度
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          navObjWid =
            res.windowWidth - menuButtonObject.right + menuButtonObject.width, // 胶囊按钮与右侧的距离 = windowWidth - right+胶囊宽度
          navHeight =
            statusBarHeight +
            menuButtonObject.height +
            (menuButtonObject.top - statusBarHeight) * 2;
        _this.globalData.navHeight = navHeight; //导航栏总体高度
        _this.globalData.navTop = navTop; //胶囊距离顶部距离
        _this.globalData.navObj = menuButtonObject.height; //胶囊高度
        _this.globalData.navObjWid = navObjWid; //胶囊宽度(包括右边距离)
      },
      fail(err) {
        console.log(err);
      },
    });
  },
  onShow(options) {},
  // async getWxLogin(params) {
  //   try {
  //     let res = await wxlogin(params);
  //     console.log("成功！", res);
  //     const token = res.data.data.token;
  //     wx.setStorageSync("token", token);
  //     this.pageshow = "bindphone";
  //   } catch (error) {}
  // },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h("block", this.$slots.default);
  },
  globalData: {
    isIphoneX: false,
    globalData_TIM: {
      isInit: false,
    },
  },
};

export default App;
