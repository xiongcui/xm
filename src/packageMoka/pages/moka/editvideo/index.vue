<template>
  <view class="editvideomain">
    <view class="editvideo">
      <block v-if="videoData.length">
        <view v-for="(item, index) in videoData" :key="index">
          <video
            class="video_item"
            objectFit="cover"
            :poster="item.cover"
            :src="item.file"
            :key="item.file"
          ></video>
          <view class="item_bottom ub" v-if="myself">
            <view class="setVideoLeft">
              <view @tap="deleteVideo(index)" class="btn_set btn_delete"
                >删除</view
              >
              <view @tap="changeVideo(index)" class="btn_set">更换</view>
            </view>
            <view @tap="setVideoCover(index)" class="btn_set"
              >设置视频封面</view
            >
          </view>
        </view>
      </block>
      <view
        @tap="chooesVideo"
        class="video_none"
        v-if="videoData.length < 6 && myself"
      >
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
        ></image>
        <view>添加形象视频</view>
      </view>
    </view>
    <view catchtap="sub" class="sub_btn" v-if="videoData.length && myself">
      <button type="primary" @tap="submit">保存</button>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { Base64 } from "js-Base64";
import { errortip, openPage } from "../../../../utils/util";
import { userAlbum, userAlbumDetail } from "../../../../api/index";
export default {
  name: "editvideo",
  data() {
    return {
      videoData: [],
      myself: true,
    };
  },
  methods: {
    deleteVideo(index) {
      this.videoData.splice(index, 1);
    },
    setVideoCover(index) {
      wx.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success(res) {
          let arr = res.tempFiles.map((item) => {
            return item.tempFilePath;
          });
          openPage(
            "/packageAdd/pages/user/we-cropper/index?type=videoId&videoId=" +
              index +
              "&imgSrc=" +
              arr[0]
          );
        },
      });
    },
    changeVideo(index) {
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
            _this.uploadVideo(videoInfo, index);
          }
        },
      });
    },
    chooesVideo() {
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
    uploadVideo(dataInfo, index) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "album",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            if (index != undefined) {
              console.log("更换");
              let oldVideoData = [];
              this.videoData[index] = {
                cover: "",
                file: data.data.file1,
              };
              oldVideoData = this.videoData;
              this.videoData = [];
              this.videoData = JSON.parse(JSON.stringify(oldVideoData));
            } else {
              this.videoData.push({
                cover: "",
                file: data.data.file1,
              });
            }
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    upCover(path, index) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: path,
        formData: {
          scr_type: "album",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.videoData[index].cover = data.data.file1;
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    submit() {
      this.userAlbum({
        scr_type: "album",
        file_type: "video",
        photo_album: [],
        video_album: this.videoData,
      });
    },
    async userAlbum(params) {
      try {
        let res = await userAlbum(params);
        this.videoData = [];
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
    async userAlbumDetail(params) {
      try {
        let res = await userAlbumDetail(params);
        this.videoData = res.data.data.video_album;
      } catch (error) {}
    },
  },
  created() {
    this.userAlbumDetail("");
  },
  onShow() {
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1]; //当前页面
    if (currPage.data.videoId) {
      this.upCover(currPage.data.homeimg, Number(currPage.data.videoId));
    }
  },
  onLoad: function (options) {
    this.myself = options.myself === "true" ? true : false;
  },
};
</script>

<style lang="scss" scoped></style>
