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
      <view class="select-item" @tap="goyuedan('10002', '主播')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/zhubo.png"
        ></image>
        <text>约主播</text>
      </view>
      <view class="select-item" @tap="goyuedan('10003', '演员')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/direct.png"
        ></image>
        <text>约演员</text>
      </view>
      <view class="select-item" @tap="goyuedan('10004', '主持')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/economicman.png"
        ></image>
        <text>约主持</text>
      </view>
      <view class="select-item" @tap="goyuedan('10007', '红人')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/hongren.png"
        ></image>
        <text>约红人</text>
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
      this.publishVerify(
        {
          project_code: "NE",
        },
        code,
        name
      );
    },
    async publishVerify(params, code, name) {
      try {
        let res = await publishVerify(params);
        wx.navigateTo({
          url:
            "/packageAdd/pages/yuedan/add_yuedan/index?id=" +
            code +
            "&name=" +
            name,
        });
      } catch (error) {
        if (error.data.error_code == 21030 || error.data.error_code == 21040) {
          openPage(
            `/packageAdd/pages/guideTips/index?msg=${error.data.msg}&code=${error.data.error_code}`
          );
        } else if (error.data.error_code == 22010) {
          wx.showModal({
            title: "温馨提示",
            content: "你的主身份不符约拍发布，建议修改身份或发布通告",
            cancelText: "修改身份",
            confirmText: "发布通告",
            success: function (res) {
              if (res.confirm) {
                console.log("用户点击确定");
                openPage("/packageTonggao/pages/index/index");
              } else if (res.cancel) {
                openPage("/packageAdd/pages/user/identity/index");
                console.log("用户点击取消");
              }
            },
          });
        } else if (error.data.error_code == 21060) {
          wx.showModal({
            title: "温馨提示",
            content: "还未完善个人资料，请前往完善个人资料",
            confirmText: "完善资料",
            success: function (res) {
              if (res.confirm) {
                console.log("用户点击确定");
                openPage("/packageAdd/pages/user/editinfor/index");
              } else if (res.cancel) {
                console.log("用户点击取消");
              }
            },
          });
        } else {
          errortip(error.data.msg);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
