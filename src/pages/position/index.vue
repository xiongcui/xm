<template>
  <view @tap="payClick"> 测试支付 </view>
</template>

<script>
import { paymina } from "../../api/index";
export default {
  name: "position",
  methods: {
    payClick() {
      this.paymina("");
    },
    async paymina(params) {
      try {
        let res = await paymina(params);
        console.log(res);
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
  },
};
</script>

<style lang="scss" scoped></style>
