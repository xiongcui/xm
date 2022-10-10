<template>
  <view class="works">
    <view class="works-item">
      <view class="works-title">
        作品名称/描述
        <text class="check-tips">*</text>
      </view>
      <textarea
        class="works-name"
        auto-height
        placeholder="请输入作品名称/描述…（不能包含任何联系方式，照片中不能有漏点图片，否则审核不通过，5个字以上）"
        :value="name"
        @blur="nameBlur"
      />
    </view>
    <view class="works-item">
      <view class="works-title">
        上传作品
        <text class="check-tips">*</text>
        <text class="works-tips">必须本人拍摄/本人照片</text>
      </view>
      <view class="works-upload">
        <view class="works-upload-list">
          <view
            class="works-upload-img"
            v-for="(item, index) in imglist"
            :key="index"
          >
            <image
              :src="item.imgurl"
              class="upload-width"
              mode="aspectFit"
            ></image>
          </view>
        </view>
        <view class="works-upload-list">
          <view
            class="works-upload-video"
            v-for="(item, index) in videolist"
            :key="index"
          >
            <image
              :src="item.thumbTempFilePath"
              class="upload-width"
              mode="aspectFit"
            ></image>
          </view>
        </view>
        <view class="works-upload-img" @tap="chooseImage">
          <image
            src="../../../assets/images/upload-img.png"
            class="upload-img"
            mode="aspectFit"
          ></image>
          <view>
            <text class="upload-txt">上传照片</text>
          </view>
        </view>
        <view class="works-upload-video" @tap="chooseVideo">
          <image
            src="../../../assets/images/upload-video.png"
            class="upload-video"
            mode="aspectFit"
          ></image>
          <view>
            <text class="upload-txt">上传视频</text>
          </view>
        </view>
      </view>
    </view>
    <view class="works-item">
      <view class="works-title">
        使用设备
        <input
          placeholder="请输入使用设备（选填）"
          class="works-input"
          :value="device"
        />
      </view>
      <view class="works-title">
        拍摄地点
        <input
          placeholder="请输入拍摄地点（选填）"
          class="works-input"
          :value="place"
        />
      </view>
      <view class="works-title">
        约拍返片
        <view class="works-switch">
          <text>是否约拍返片</text>
          <switch
            name="switch"
            class="switch-btn"
            color="#ff6467"
            :checked="switchChecked"
            @change="switchChange"
          />
        </view>
      </view>
    </view>
    <view class="works-item">
      <view class="works-title">
        主题标签
        <text class="check-tips">*</text>
      </view>
      <view class="tag-list">
        <text
          class="tag-txt"
          :class="item.checked ? 'active' : ''"
          v-for="(item, index) in taglist"
          :key="index"
          @tap="chooseTag(index)"
          >{{ item.name }}</text
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
import { errortip } from "../../../utils/util";
export default {
  name: "works",
  data() {
    return {
      name: "",
      device: "",
      place: "",
      imglist: [
        // {
        //   imgurl: "",
        // },
      ],
      videolist: [],
      taglist: [
        {
          name: "情侣",
          checked: false,
        },
        {
          name: "商务",
          checked: false,
        },
        {
          name: "民国",
          checked: false,
        },
        {
          name: "汉服",
          checked: false,
        },
        {
          name: "孕照",
          checked: false,
        },
        {
          name: "儿童摄影",
          checked: false,
        },
        {
          name: "暗黑",
          checked: false,
        },
        {
          name: "情绪",
          checked: false,
        },
        {
          name: "夜景",
          checked: false,
        },
        {
          name: "校园",
          checked: false,
        },
        {
          name: "妆容",
          checked: false,
        },
        {
          name: "古风",
          checked: false,
        },
        {
          name: "淘宝",
          checked: false,
        },
        {
          name: "时尚",
          checked: false,
        },
        {
          name: "和服",
          checked: false,
        },
        {
          name: "旗袍",
          checked: false,
        },
        {
          name: "韩系",
          checked: false,
        },
        {
          name: "欧美",
          checked: false,
        },
        {
          name: "森系",
          checked: false,
        },
        {
          name: "少女",
          checked: false,
        },
        {
          name: "宝丽来",
          checked: false,
        },
        {
          name: "清新",
          checked: false,
        },
        {
          name: "婚礼",
          checked: false,
        },
        {
          name: "cosplay",
          checked: false,
        },
        {
          name: "胶片",
          checked: false,
        },
        {
          name: "黑白",
          checked: false,
        },
        {
          name: "纪实",
          checked: false,
        },
        {
          name: "日系",
          checked: false,
        },
        {
          name: "复古",
          checked: false,
        },
      ],
      switchChecked: false,
    };
  },
  methods: {
    chooseImage() {
      let _this = this;
      wx.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success(res) {
          let arr = res.tempFiles;
          var imgInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            imgInfo = v;
          });
          console.log(imgInfo.tempFilePath);
          _this.imglist.push({
            imgurl: imgInfo.tempFilePath,
          });
          _this.upImgs(imgInfo, "image");
        },
      });
    },
    chooseVideo() {
      let _this = this;
      wx.chooseMedia({
        count: 1,
        mediaType: ["video"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success: (res) => {
          console.log(res, "res");
          let arr = res.tempFiles;
          let videoInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            videoInfo = v;
          });
          this.videolist.push(videoInfo);
          console.log(videoInfo);
          _this.upImgs(videoInfo, "video");
        },
      });
    },
    upImgs(dataInfo, type) {
      let _this = this;
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://tapi.cupz.cn/f/v1/file/upload",
        filePath: type == "video" ? dataInfo.tempFilePath : dataInfo.path,
        formData: {
          type: "avatar",
        },
        name: "file",
        header: {
          "content-type": "multipart/form-data",
        },
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          if (type == "video") {
            // _this.setData({
            console.log("视频地址：" + data.data.src);
            console.log(
              "视频封面：" +
                data.data.src +
                "?spm=qipa250&x-oss-process=video/snapshot,t_1000,f_jpg,w_800,h_400,m_fast"
            );
            // ))
          } else {
            console.log("图片地址：" + data.data.src);
          }
        },
      });
    },
    switchChange(e) {
      this.switchChecked = e.detail.value;
    },
    chooseTag(index) {
      this.taglist[index].checked = !this.taglist[index].checked;
    },
    nameBlur(e) {
      this.name = e.detail.value;
    },
    submit() {
      if (!this.name) {
        errortip("请输入作品名称/描述！");
        return false;
      }
      if (!this.imglist.length && !this.videolist.length) {
        errortip("请上传作品！");
        return false;
      }
      let checkTag = this.taglist.some((item) => item.checked);
      if (!checkTag) {
        errortip("请选择主题标签！");
        return false;
      }
      let params = {
        name: this.name,
      };
      console.log(params, "params");
    },
  },
};
</script>
