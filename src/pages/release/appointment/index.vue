<template>
  <view class="appointment">
    <view class="appointment-list">
      <view class="appointment-item" @tap="goyuedan('20001', '摄影师')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/cameraman.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">摄影师</text>
      </view>
      <view class="appointment-item" @tap="goyuedan('20002', '摄像师')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/cameraman1.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">摄像师</text>
      </view>
      <view class="appointment-item" @tap="goyuedan('20003', '造型师')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/makeup.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">造型师</text>
      </view>
      <view class="appointment-item" @tap="goyuedan('20007', '经纪人')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/model.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">经纪人</text>
      </view>
      <view class="appointment-item" @tap="goyuedan('20011', '导演')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/ps.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">导演</text>
      </view>
      <view class="appointment-item" @tap="goyuedan('20012', '商家')">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/business.png"
          mode="aspectFit"
          class="appointment-image"
        >
        </image>
        <text class="appointment-txt">商家</text>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "appointment",
  methods: {
    goyuedan(code, name) {
      wx.navigateTo({
        url:
          "/packageAdd/pages/yuedan/add_yuedan/index?id=" +
          code +
          "&name=" +
          name,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
