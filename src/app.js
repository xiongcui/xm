import Vue from "vue";
import { wxlogin } from "./utils/auth";
import "./app.scss";

const App = {
  onLaunch: () => {
    // 微信登陆
    wxlogin({}, (res) => {
      console.log(res);
      if (res.code === 0 && res.result.openId) {
        const openId = res.result.openId;
        console.log(openId);
        wx.setStorageSync("openId", openId);
      }
    });
  },
  onShow(options) {},
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h("block", this.$slots.default);
  },
};

export default App;
