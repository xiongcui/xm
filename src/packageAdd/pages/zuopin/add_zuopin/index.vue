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
              src="https://yuepai-oss.qubeitech.com/static/images/upload-img.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/upload-video.png"
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
            src="https://yuepai-oss.qubeitech.com/static/images/position.png"
          >
          </image>
          <text v-if="localtion"> {{ localtion }}</text>
          <text v-else> 添加位置</text>
        </view>
        <view class="zuopin-item-right">
          <image
            mode="aspectFit"
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_right.png"
          ></image>
        </view>
      </view>
      <view class="zuopin-localtion">
        <view class="zuopin-item-left">
          <image
            class="zuopin-icon"
            src="https://yuepai-oss.qubeitech.com/static/images/time.png"
          >
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
            src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
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
      </view>
      <view class="tag-list">
        <text
          class="tag-txt"
          :class="item.checked ? 'active' : ''"
          v-for="(item, index) in styleTaglist"
          :key="index"
          @tap="chooseStyleTag(index)"
          >{{ item.value }}</text
        >
      </view>
      <view class="zuopin-localtion">
        <view>
          <text>作品标签</text>
        </view>
      </view>
      <view class="tag-list">
        <text
          class="tag-txt"
          :class="item.checked ? 'active' : ''"
          v-for="(item, index) in photoTaglist"
          :key="index"
          @tap="choosePhotoTag(index)"
          >{{ item.value }}</text
        >
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
import { errortip, openPage } from "../../../../utils/util";
import { publicConfig, subNotePhoto } from "../../../../api/index";
import clickThrottle from "../../../../utils/clickThrottle";
import { Base64 } from "js-Base64";
export default {
  name: "addZuopin",
  data() {
    return {
      isIphoneX: false,
      name: "",
      desc: "",
      localtion: "",
      imgList: [], // 图片集合
      videolist: [],
      videoCoverList: [],
      checked: true,
      place: "",
      styleTaglist: [],
      photoTaglist: [],
      locale_address: {},
    };
  },
  methods: {
    bindended() {
      wx.createVideoContext("video").exitFullScreen();
    },
    chooseStyleTag(index) {
      this.styleTaglist[index].checked = !this.styleTaglist[index].checked;
    },
    choosePhotoTag(index) {
      this.photoTaglist[index].checked = !this.photoTaglist[index].checked;
    },
    switchChange(e) {
      this.checked = e.detail.value;
    },
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
          this.localtion = res.address;
          this.locale_address = res;
          //   console.log(res, "--------------", this.localtion);
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
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.thumbTempFilePath,
        formData: {
          scr_type: "photo",
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
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "photo",
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
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "photo",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
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
    submit() {
      if (!this.imgList.length && !this.videolist.length) {
        errortip("请上传照片/视频！");
        return false;
      }
      if (!this.name) {
        errortip("请填写作品名称！");
        return false;
      }
      if (!this.desc) {
        errortip("请填写作品背后的故事！");
        return false;
      }
      let checkTag = this.styleTaglist.some((item) => item.checked);
      if (!checkTag) {
        errortip("请选择主题标签！");
        return false;
      }
      let checkTag2 = this.photoTaglist.some((item) => item.checked);
      if (!checkTag2) {
        errortip("请选择作品标签！");
        return false;
      }
      let params = {
        type: 30,
        title: this.name,
        content: this.desc,
        style_label: [],
        photo_label: [],
        capture_locale: this.localtion,
        return_photo: this.checked ? 1 : 0,
        capture_tools: this.place,
        scr_type: "photo",
        file_type: this.imgList.length ? "picture" : "video",
        cover: this.imgList.length ? this.imgList : this.videoCoverList,
        video_cover: this.videolist,
        locale_address: this.locale_address,
      };
      let style_label = [];
      let photo_label = [];
      this.styleTaglist.map((item) => {
        if (item.checked) {
          style_label.push(item.value);
        }
      });
      this.photoTaglist.map((item) => {
        if (item.checked) {
          photo_label.push(item.value);
        }
      });
      params.style_label = style_label.join(",");
      params.photo_label = photo_label.join(",");
      if (!clickThrottle()) return;
      this.subNotePhoto(params);
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        let arr = [];
        let arr1 = [];
        res.data.data.map((item) => {
          if (item.type == "style_label") {
            item.checked = false;
            arr.push(item);
          }
          if (item.type == "photo_label") {
            item.checked = false;
            arr1.push(item);
          }
        });
        this.styleTaglist = arr;
        this.photoTaglist = arr1;
      } catch (error) {}
    },
    async subNotePhoto(params) {
      try {
        let res = await subNotePhoto(params);
        openPage(`/packageAdd/pages/tips/index?type=1&msg=${res.data.data}`);
      } catch (error) {
        openPage(
          `/packageAdd/pages/tips/index?type=0&msg=${res.data.data.msg}`
        );
      }
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.publicConfig({
      type: ["style_label", "photo_label"],
    });
  },
};
</script>

<style lang="scss"></style>
