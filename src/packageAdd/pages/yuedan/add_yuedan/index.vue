<template>
  <view class="works">
    <view class="works-item">
      <view class="works-title">
        标题
        <text class="check-tips">*</text>
      </view>
      <input
        class="works-name"
        placeholder="填写标题会有更多邀约哦～"
        :value="name"
        @blur="nameBlur"
      />
    </view>
    <view class="works-item">
      <view class="works-title">
        描述
        <text class="check-tips">*</text>
      </view>
      <textarea
        class="works-name"
        auto-height
        placeholder="请描述您的约单内容，如您的特长、才艺、需求、地点、时间等（内容中不得含有任何联系方式，敏感语句、私房话题等，否则审核不予通过，至少7字以上）"
        :value="name"
        @blur="nameBlur"
      />
    </view>
    <view class="works-item">
      <view class="works-title">
        上传照片/视频
        <text class="check-tips">*</text>
      </view>
      <view class="works-upload">
        <view class="works-upload-list">
          <block v-if="imgList.length">
            <view
              class="works-upload-img"
              v-for="(item, index) in imgList"
              :key="index"
            >
              <image :src="item" class="upload-width" mode="aspectFit"></image>
              <text class="upload-close" @tap="uploadImgClose(index)"></text>
            </view>
          </block>
          <block v-else>
            <view
              v-for="(item, index) in videolist"
              :key="index"
              class="upload-video-item"
            >
              <video :src="item" class="upload-video-width"></video>
              <text class="upload-close" @tap="uploadVideoClose(index)"></text>
            </view>
          </block>
          <view
            class="works-upload-img"
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
            class="works-upload-video"
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
    <view class="works-item">
      <view class="works-info">
        <text>时间</text>
        <input
          placeholder="您期望的合作时间（选填）"
          class="works-input"
          :value="device"
        />
      </view>
      <view class="works-info">
        <text>地点</text>
        <input
          placeholder="您期望的合作地点（选填）"
          class="works-input"
          :value="place"
        />
      </view>
      <view class="works-info">
        <text>收费模式</text>
        <!-- <picker
          mode="selector"
          range="chargeList"
          class="works-select"
          range-key="value"
          value="0"
        >
          <view class="works-select-item" v-if="charge">{{ charge }}</view>
          <view class="works-select-item" v-else>请选择</view>
        </picker> -->
        <picker
          @change="bindPickerChange"
          :value="chargeIndex"
          :range="chargeList"
          :range-key="'value'"
        >
          <view class="works-select-item" v-if="charge">{{ charge }}</view>
          <view class="works-select-item" v-else>请选择</view>
        </picker>
      </view>
      <view class="works-info">
        <text>面向地区</text>
        <picker mode="region" value="region" class="works-select">
          <view class="works-select-item" v-if="select_city">{{
            select_city
          }}</view>
          <view class="works-select-item" v-else>请选择</view>
        </picker>
      </view>
    </view>

    <view class="works-item">
      <view class="works-title">
        风格标签
        <text class="check-tips">*</text>
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
    </view>
    <view class="works-item">
      <view class="works-title">
        约拍通告
        <text class="check-tips">*</text>
      </view>
      <view class="tag-list">
        <text
          class="tag-txt"
          :class="item.checked ? 'active' : ''"
          v-for="(item, index) in taglist"
          :key="index"
          @tap="chooseTag(index)"
          >{{ item.value }}</text
        >
      </view>
    </view>
    <view class="works-btn">
      <text class="release" @tap="submit">确认发布</text>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { errortip } from "../../../../utils/util";
import { publicConfig, creatInvite } from "../../../../api/index";
import { Base64 } from "js-Base64";
export default {
  name: "works",
  data() {
    return {
      id: "",
      name: "",
      device: "",
      place: "",
      imgList: [], // 图片集合
      videolist: [],
      styleTaglist: [],
      taglist: [],
      switchChecked: false,
      charge: "",
      chargeIndex: 0,
      chargeList: [],
      select_city: "",
    };
  },
  methods: {
    bindPickerChange(e) {
      this.charge = this.chargeList[e.detail.value].value;
      this.chargeIndex = e.detail.value;
    },
    uploadImgClose(index) {
      this.imgList.splice(index, 1);
    },
    uploadVideoClose(index) {
      this.videolist.splice(index, 1);
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
        count: 9,
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
          type: "avatar",
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
          type: "invite",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            let videoData = res;
            console.log("视频地址：" + videoData);
            console.log(
              "视频封面：" +
                res +
                "?spm=qipa250&x-oss-process=video/snapshot,t_1000,f_jpg,w_800,h_400,m_fast"
            );
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
    switchChange(e) {
      this.switchChecked = e.detail.value;
    },
    chooseStyleTag(index) {
      this.styleTaglist[index].checked = !this.styleTaglist[index].checked;
    },
    chooseTag(index) {
      this.taglist[index].checked = !this.taglist[index].checked;
    },
    nameBlur(e) {
      this.name = e.detail.value;
    },
    submit() {
      // if (!this.name) {
      //   errortip("请输入作品名称/描述！");
      //   return false;
      // }
      // if (!this.imgList.length && !this.videolist.length) {
      //   errortip("请上传作品！");
      //   return false;
      // }
      // let checkTag = this.taglist.some((item) => item.checked);
      // if (!checkTag) {
      //   errortip("请选择主题标签！");
      //   return false;
      // }
      let params = {
        type: this.id,
        name: this.name,
      };
      console.log(params, "params");
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        res.data.data.map((item) => {
          if (item.type == "style_label") {
            item.checked = false;
            arr.push(item);
          }
          if (item.type == "notice_label") {
            item.checked = false;
            arr1.push(item);
          }
          if (item.type == "payment_type") {
            item.checked = false;
            arr2.push(item);
          }
        });
        this.styleTaglist = arr;
        this.taglist = arr1;
        this.chargeList = arr2;
        console.log(this.chargeList, "chargeList");
      } catch (error) {}
    },
    async creatInvite(params) {
      try {
        let res = await creatInvite(params);
        let arr = [];
        let arr1 = [];
        res.data.data.map((item) => {
          if (item.type == "style_label") {
            item.checked = false;
            arr.push(item);
          }
          if (item.type == "notice_label") {
            item.checked = false;
            arr1.push(item);
          }
        });
        this.styleTaglist = arr;
        this.taglist = arr1;
        //         收费模式：payment_type
      } catch (error) {}
    },
  },
  created() {
    this.publicConfig({
      type: ["notice_label", "payment_type", "style_label"],
    });
  },
  onLoad: function (options) {
    this.id = options.id;
  },
};
</script>
