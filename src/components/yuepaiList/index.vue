<template>
  <view class="componets-list">
    <view class="componets-box">
      <view class="list_top">
        <view class="list_top_left">
          <image
            :src="'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'"
            class="avatar"
          ></image>
          <view class="list_info">
            <view class="list_name">
              Anne
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                class="list_sex"
              ></image>
              <!-- <block v-if="item.author.sex !== null">
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                          class="list_sex"
                          v-if="item.author.sex == 1"
                        ></image>
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                          class="list_sex"
                          v-if="item.author.sex == 0"
                        ></image>
                      </block> -->
            </view>
            <view class="list_p">
              <text> 摄影</text>
              <view class="icon_real">已实名</view>
              <view class="icon_pledge">已担保</view>
            </view>
          </view>
        </view>
        <view class="list_top_rt">
          <view class="list_loction"> 北京 </view>
          <view class="list_date">1小时前来过</view>
        </view>
      </view>
      <view class="list_content">
        <view class="list_title">
          <view class="recommend-label"> 约摄影师 </view>
          <view class="recommend-label2"> 愿意付费：200 </view>
        </view>
        <view class="list_title_desc">故宫汉服需要模特故宫汉服需要模特</view>
      </view>
      <view class="list_desc">
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </view>
      <view class="list_img">
        <scroll-view :enhanced="true" :scrollX="true">
          <image
            :src="url"
            mode="aspectFill"
            class="list_img_item"
            v-for="(url, coverIndex) in cover"
            :key="coverIndex"
            @tap.stop="previewImage(url, cover)"
          ></image>
        </scroll-view>
      </view>
      <!-- <view class="list_video" v-if="item.file_type == 'video'">
                <video
                  objectFit="cover"
                  :poster="item.cover[0]"
                  :src="item.video_cover && item.video_cover[0]"
                  class="list_video-width"
                  @tap.stop=""
                ></video>
              </view> -->
      <view class="list_bottom">
        <view class="list_time">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
          ></image>
          1
        </view>
        <view class="list_yuepai">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
          ></image>
          收到约拍 3
        </view>
        <view class="list_read">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
          ></image>
          阅读 2
        </view>
      </view>
    </view>
    <view class="componets-box">
      <view class="list_top">
        <view class="list_top_left">
          <image
            :src="'https://yuepai-oss.qubeitech.com/static/images/avatar_default.png'"
            class="avatar"
          ></image>
          <view class="list_info">
            <view class="list_name">
              Anne
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                class="list_sex"
              ></image>
              <!-- <block v-if="item.author.sex !== null">
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                          class="list_sex"
                          v-if="item.author.sex == 1"
                        ></image>
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                          class="list_sex"
                          v-if="item.author.sex == 0"
                        ></image>
                      </block> -->
            </view>
            <view class="list_p">
              <text> 摄影</text>
              <view class="icon_real">已实名</view>
              <view class="icon_pledge">已担保</view>
            </view>
          </view>
        </view>
        <view class="list_top_rt">
          <view class="list_loction"> 北京 </view>
          <view class="list_date">1小时前来过</view>
        </view>
      </view>
      <view class="list_content">
        <view class="list_title">
          <view class="recommend-label"> 约摄影师 </view>
          <view class="recommend-label2"> 愿意付费：200 </view>
        </view>
        <view class="list_title_desc">故宫汉服需要模特故宫汉服需要模特</view>
      </view>
      <view class="list_desc">
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </view>
      <view class="list_img">
        <scroll-view :enhanced="true" :scrollX="true">
          <image
            :src="url"
            mode="aspectFill"
            class="list_img_item"
            v-for="(url, coverIndex) in cover"
            :key="coverIndex"
            @tap.stop="previewImage(url, cover)"
          ></image>
        </scroll-view>
      </view>
      <!-- <view class="list_video" v-if="item.file_type == 'video'">
                <video
                  objectFit="cover"
                  :poster="item.cover[0]"
                  :src="item.video_cover && item.video_cover[0]"
                  class="list_video-width"
                  @tap.stop=""
                ></video>
              </view> -->
      <view class="list_bottom">
        <view class="list_time">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
          ></image>
          1
        </view>
        <view class="list_yuepai">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
          ></image>
          收到约拍 3
        </view>
        <view class="list_read">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
          ></image>
          阅读 2
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "yuepaiList",
  data() {
    return {
      cover: [
        "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
        "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
        "https://yuepai-oss.qubeitech.com/static/images/avatar_default.png",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
