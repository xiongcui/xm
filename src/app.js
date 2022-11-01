import Vue from "vue";
import { wxlogin } from "./api/index";
import { openPage } from "./utils/util";

import "./app.scss";
import "taro-ui/dist/style/index.scss"; // 全局引入一次即可

const App = {
  onLaunch: () => {
    // 微信登陆
    let _this = App;
    let token = wx.getStorageSync("token");
    if (!token) {
      openPage("/pages/login/index");
    } else {
      // wx.switchTab({
      //   url: "/pages/home/index",
      // });
    }
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
  },
  onShow(options) {},
  async getWxLogin(params) {
    try {
      let res = await wxlogin(params);
      console.log("成功！", res);
      const token = res.data.data.token;
      wx.setStorageSync("token", token);
      this.pageshow = "bindphone";
    } catch (error) {}
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h("block", this.$slots.default);
  },
  globalData: {
    isIphoneX: false,
  },
};

export default App;
