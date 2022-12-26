<template>
  <!-- <view @tap="payClick"> 测试支付 </view> -->
  <view>
    <!-- <view @tap="test1"> 第一步 </view> -->
    <web-view :src="url" class="webview"></web-view>
  </view>
</template>

<script>
import { paymina, faceToken, facePrint } from "../../api/index";
export default {
  name: "position",
  data() {
    return {
      // url: "https://tapi.cupz.cn/face/print/statement/statement?token=fjNqd290n19FM4AqwGkZMsuF",
      url: "",
    };
  },
  methods: {
    test() {
      wx.checkIsSoterEnrolledInDevice({
        checkAuthMode: "facial",
        success(res) {
          console.log(res.isEnrolled);
        },
      });
    },
    payClick() {
      this.paymina("");
    },
    test1() {
      this.faceToken();
    },
    async paymina(params) {
      try {
        let res = await paymina(params);
        let data = res.data.data;
        wx.requestPayment({
          timeStamp: data.result.timeStamp,
          nonceStr: data.result.nonceStr,
          package: data.result.package,
          signType: data.result.signType,
          paySign: data.result.paySign,
          success: function (res) {
            console.log(res, "成功了");
          },
          fail: function (res) {},
          complete: function (res) {},
        });
      } catch (error) {}
    },
    async faceToken(params) {
      try {
        let res = await faceToken(params);
        this.url =
          "https://tapi.cupz.cn/face/print/statement/statement?token=" +
          res.data.data.result.verify_token;
      } catch (error) {}
    },
    async facePrint(params) {
      try {
        let res = await facePrint(params);
        console.log(res);
      } catch (error) {}
    },
  },
  created() {
    this.test1();
  },
};
</script>

<style lang="scss" scoped>
.webview {
  width: 100%;
  // height: 600px;
}
</style>
