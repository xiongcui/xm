<template>
  <view>
    <view @tap="close" class="modal-bg" v-if="showModelSign"></view>
    <view class="modal_box sign_modal" v-if="showModelSign">
      <view class="sign_md_close_btn">
        <image
          @tap="close"
          src="https://yuepai-oss.qubeitech.com/static/images/common/tipclose.png"
        ></image>
      </view>
      <view class="sign_modal_main">
        <form class="main">
          <view class="sign_md_top">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/user/sign/addcoin.png"
            ></image>
          </view>
          <view class="sign_md_title">
            <view>签到成功</view>
          </view>
          <view class="sign_md_content">
            <view>{{ hyper_desc }}</view>
          </view>
          <view class="sign_md_bottom">
            <view class="sign_md_bottom">
              <button open-type="share" class="share-btn">马上邀请</button>
            </view>
          </view>
          <view class="sign_md_txt">每邀请1位好友可赚3金币哦！</view>
        </form>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "sign",
  data() {
    return {
      showModelSign: false,
      hyper_desc: "",
      shareTitle: "",
      shareImg: "",
      sharePath: "",
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visible: {
      handler(newVal, oldVal) {
        this.showModelSign = newVal;
      },
      deep: true,
      immediate: true,
    },
    msg: {
      handler(newVal, oldVal) {
        this.hyper_desc = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped></style>
