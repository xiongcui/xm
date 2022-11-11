<template>
  <view class="editvideomain">
    <view class="editvideo">
      <block v-if="videoData.video_url">
        <video
          class="video_item"
          :poster="videoData.video_cover"
          :src="videoData.video_url"
        ></video>
        <view class="item_bottom ub">
          <view class="setVideoLeft">
            <view catchtap="deleteVideo" class="btn_set btn_delete">删除</view>
            <view catchtap="chooesVideo" class="btn_set">更换</view>
          </view>
          <view catchtap="setVideoCover" class="btn_set">设置视频封面</view>
        </view>
      </block>
      <view catchtap="chooesVideo" class="video_none" v-else>
        <image src="../../../../assets/images/common/add_icon.png"></image>
        <view>添加形象视频</view>
      </view>
    </view>
    <view catchtap="sub" class="sub_btn" v-if="videoData.video_url">
      <button type="primary">保存</button>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "editvideo",
  data() {
    return {
      videoData: {
        video_url: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
