<template>
  <view class="appointment">
    <view class="select-list">
      <view class="select-item" @tap="goyuedan('20001', '摄影师')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/cameraman.png"
        ></image>
        <text>约摄影师</text>
      </view>
      <view class="select-item" @tap="goyuedan('10001', '模特')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/icon_model.png"
        ></image>
        <text>约模特</text>
      </view>
      <view class="select-item" @tap="goyuedan('20003', '化妆师')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/makeup.png"
        ></image>
        <text>约化妆师</text>
      </view>
      <view class="select-item" @tap="goyuedan('20004', '造型师')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/makeup.png"
        ></image>
        <text>约造型师</text>
      </view>
      <view class="select-item" @tap="goyuedan('20002', '摄像师')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/take.png"
        ></image>
        <text>约摄像师</text>
      </view>
      <view class="select-item" @tap="goyuedan('20005', '修图师')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/ps.png"
        ></image>
        <text>约修图师</text>
      </view>
      <view class="select-item" @tap="goyuedan('20008', '经纪人')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/economicman.png"
        ></image>
        <text>约经纪人</text>
      </view>
      <view class="select-item" @tap="goyuedan('20013', '商家')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/business.png"
        ></image>
        <text>约商家</text>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { publishVerify } from "../../../api/index";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "appointment",
  data() {
    return {
      verifyP1: null,
    };
  },
  methods: {
    goyuedan(code, name) {
      this.verifyP1 = this.publishVerify({
        project_code: "NE",
      });
      Promise.all([this.verifyP1]).then(() => {
        wx.navigateTo({
          url:
            "/packageAdd/pages/yuedan/add_yuedan/index?id=" +
            code +
            "&name=" +
            name,
        });
      });
    },
    async publishVerify(params) {
      try {
        let res = await publishVerify(params);
      } catch (error) {
        if (error.data.error_code == 21030 || error.data.error_code == 21040) {
          openPage(
            `/packageAdd/pages/guideTips/index?msg=${error.data.msg}&code=${error.data.error_code}`
          );
        } else {
          errortip(error.data.msg);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
