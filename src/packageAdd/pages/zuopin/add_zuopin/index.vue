<template>
  <view class="zuopin">
    <view class="zuopin-item">
      <view class="zuopin-upload">
        <view class="zuopin-upload-list">
          <block v-if="imgList.length">
            <view
              class="zuopin-upload-img"
              v-for="(item, index) in imgList"
              :key="index"
            >
              <image
                :src="item"
                class="upload-width"
                mode="aspectFill"
                @tap="previewImage(item, imgList)"
              ></image>
              <text class="upload-close" @tap="uploadImgClose(index)"></text>
            </view>
          </block>
          <block v-else>
            <view
              v-for="(item, index) in videolist"
              :key="index"
              class="upload-video-item"
            >
              <video
                :src="item"
                class="upload-video-width"
                objectFit="cover"
                :poster="videoCoverList[0]"
                @ended="bindended"
                id="video"
              ></video>
              <text class="upload-close" @tap="uploadVideoClose(index)"></text>
            </view>
          </block>
          <view
            class="zuopin-upload-img"
            @tap="chooseImage"
            v-if="!videolist.length"
          >
            <image
              src="../../../../assets/images/upload-img.png"
              class="upload-img"
              mode="aspectFit"
            ></image>
            <view>
              <text class="upload-txt">上传照片</text>
            </view>
          </view>
          <view
            class="zuopin-upload-video"
            @tap="chooseVideo"
            v-if="!imgList.length && !videolist.length"
          >
            <image
              src="../../../../assets/images/upload-video.png"
              class="upload-video"
              mode="aspectFit"
            ></image>
            <view>
              <text class="upload-txt">上传视频</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="zuopin-item">
      <input
        class="zuopin-input"
        placeholder="给作品起个名字有更多邀约哦～"
        v-model="name"
      />
      <textarea
        class="zuopin-name"
        auto-height
        placeholder="请分享作品背后的故事吧（内容中不得含有任何联系方式，敏感语句、私房话题等，否则审核不予通过，选填）"
        v-model="desc"
      />
    </view>
    <view class="zuopin-item">
      <view class="zuopin-localtion" @tap="onChooseLocation">
        <view class="zuopin-item-left">
          <image
            class="zuopin-icon"
            src="../../../../assets/images/position.png"
          >
          </image>
          <text>添加位置</text>
        </view>
        <view class="zuopin-item-right">
          <image
            mode="aspectFit"
            src="../../../../assets/images/common/icon_right.png"
          ></image>
        </view>
      </view>
      <view class="zuopin-localtion">
        <view class="zuopin-item-left">
          <image class="zuopin-icon" src="../../../../assets/images/time.png">
          </image>
          <text>约拍返片</text>
        </view>
        <view class="zuopin-item-right">
          <switch :checked="checked" @change="switchChange" color="#fe5457" />
        </view>
      </view>
      <view class="zuopin-localtion">
        <view class="zuopin-item-left">
          <image
            class="zuopin-icon"
            src="../../../../assets/images/user/index/yuepai.png"
          >
          </image>
          <text>拍摄设备</text>
        </view>
        <view class="zuopin-item-right">
          <input
            placeholder="请填写拍摄设备"
            class="works-input"
            v-model="place"
          />
        </view>
      </view>
    </view>
    <view class="zuopin-item">
      <view class="zuopin-localtion">
        <view>
          <text>主题标签</text>
        </view>
        <picker
          @change="bindPickerChange"
          :value="themeIndex"
          :range="themeList"
          :range-key="'value'"
        >
          <view class="zuopin-item-right">
            <view class="zuopin-select-item" v-if="theme">{{ theme }}</view>
            <view class="zuopin-select-item" v-else>请选择</view>
            <image
              mode="aspectFit"
              src="../../../../assets/images/common/icon_right.png"
            ></image>
          </view>
        </picker>
      </view>
      <view class="zuopin-localtion">
        <view>
          <text>作品标签</text>
        </view>
        <picker
          @change="bindPickerChange"
          :value="worksIndex"
          :range="worksList"
          :range-key="'value'"
        >
          <view class="zuopin-item-right">
            <view class="zuopin-select-item" v-if="works">{{ theme }}</view>
            <view class="zuopin-select-item" v-else>请选择</view>
            <image
              mode="aspectFit"
              src="../../../../assets/images/common/icon_right.png"
            ></image>
          </view>
        </picker>
      </view>
    </view>
    <cover-view
      class="subbtn_bottom_block"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <cover-view class="subbtn_bottom">
        <button @tap="submit">保存</button>
      </cover-view>
    </cover-view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "addZuopin",
  data() {
    return {
      isIphoneX: false,
      name: "",
      desc: "",
      imgList: [], // 图片集合
      videolist: [],
      videoCoverList: [],
      checked: true,
      place: "",
      theme: "",
      themeIndex: "",
      themeList: [],
      worksIndex: "",
      worksList: [],
      works: "",
    };
  },
  methods: {
    bindPickerChange() {},
    switchChange() {},
    uploadImgClose(index) {
      this.imgList.splice(index, 1);
    },
    uploadVideoClose(index) {
      this.videolist.splice(index, 1);
    },
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    onChooseLocation() {
      wx.chooseLocation({
        success: (res) => {
          console.log(res, "--------------");
        },
      });
    },
    chooseImage() {
      if (this.imgList.length >= 9) {
        wx.showToast({
          title: "最多上传9张图！",
          icon: "none",
        });
        return false;
      }
      let _this = this;
      wx.chooseMedia({
        count: 9 - this.imgList.length,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success(res) {
          wx.showLoading({
            title: "正在上传中",
          });
          let arr = res.tempFiles;
          var imgInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            imgInfo = v;
            _this.upImgs(imgInfo);
          });
        },
      });
    },
    chooseVideo() {
      let _this = this;
      wx.chooseMedia({
        count: 1,
        mediaType: ["video"],
        sourceType: ["album", "camera"],
        maxDuration: 58,
        camera: "back",
        success: (res) => {
          let arr = res.tempFiles;
          let videoInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            videoInfo = v;
          });
          console.log(videoInfo, "videoInfo");
          //获取临时存放的视频资源
          // let tempFilePath = res.tempFiles[0].tempFilePath;
          //获取该视频的播放时间
          let duration = res.tempFiles[0].duration;
          console.log("视频播放时间为" + duration);
          //获取视频的大小(MB单位)
          let size = parseFloat(res.tempFiles[0].size / 1024 / 1024).toFixed(1);
          console.log("视频大小为" + size);
          //获取视频的高度
          let height = res.tempFiles[0].height;
          console.log("视频高度为" + height);
          //获取视频的宽度
          let width = res.tempFiles[0].width;
          console.log("视频宽度为" + width);
          //校验大小后，符合进行上传
          if (size > 20) {
            let beyongSize = size - 20; //获取视频超出限制大小的数量
            wx.showToast({
              title: "上传的视频大小超限,超出" + beyongSize + "MB,请重新上传！",
              icon: "none",
            });
            return;
          } else {
            //符合大小限制，进行上传
            _this.uploadVideo(videoInfo);
          }
        },
      });
    },
    upCover(dataInfo) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://tapi.cupz.cn/v1/file/upload",
        filePath: dataInfo.thumbTempFilePath,
        formData: {
          scr_type: "invite",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.videoCoverList.push(data.data.file1);
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    upImgs(dataInfo) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://tapi.cupz.cn/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "invite",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.imgList.push(data.data.file1);
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    uploadVideo(dataInfo) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://tapi.cupz.cn/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "invite",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            // let videoData = res;
            // console.log("视频地址：", videoData);
            // console.log(
            //   "视频封面：",
            //   res,
            //   "?spm=qipa250&x-oss-process=video/snapshot,t_1000,f_jpg,w_800,h_400,m_fast"
            // );
            this.upCover(dataInfo);
            this.videolist.push(data.data.file1);
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    submit() {},
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
};
</script>

<style lang="scss">
.wx-switch-input {
  width: 80rpx !important;
  height: 48rpx !important;
}
.wx-switch-input::before {
  width: 75rpx !important;
  height: 44rpx !important;
}
.wx-switch-input::after {
  width: 40rpx !important;
  height: 40rpx !important;
}
</style>
