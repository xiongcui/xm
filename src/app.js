import Vue from "vue";
import { wxlogin } from "./api/index";

import "./app.scss";

const App = {
  onLaunch: () => {
    // 微信登陆
    let _this = App;
    wx.login({
      success(res) {
        _this.getWxLogin({
          account: res.code,
          secret: "",
          type: 200,
        });
      },
      fail(err) {
        console.log(err);
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
};

export default App;
