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
    <!-- <view class="appointment-list">
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
    </view> -->
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
