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
        v-model="name"
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
        v-model="desc"
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
            class="works-upload-img"
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
            class="works-upload-video"
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
    <view class="works-item">
      <view class="works-info">
        <text>时间</text>
        <input
          placeholder="您期望的合作时间（选填）"
          class="works-input"
          v-model="time"
        />
      </view>
      <view class="works-info">
        <text>地点</text>
        <input
          placeholder="您期望的合作地点（选填）"
          class="works-input"
          v-model="place"
        />
      </view>
      <view class="works-info">
        <view>
          <text>收费模式</text>
          <text class="check-tips">*</text>
        </view>
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
      <view
        class="works-info"
        v-if="
          (this.charge && this.chargeList[this.chargeIndex].key == 300) ||
          (this.charge && this.chargeList[this.chargeIndex].key == 400)
        "
      >
        <view>
          <text>收费金额</text>
          <text class="check-tips">*</text>
        </view>

        <block class="payment-amount" v-if="!checked">
          <input placeholder="请输入" class="amount1" v-model="amount" />
          <picker
            @change="companyChange"
            :value="companyIndex"
            :range="companyList"
            :range-key="'value'"
          >
            <view class="works-select-item company" v-if="company"
              >元{{ company }}</view
            >
            <view class="works-select-item company" v-else>元/单位</view>
          </picker>
          <text class="split">|</text>
          <block>
            <checkbox
              :value="payment_range"
              :checked="checked"
              class="payment_range"
              @tap="checkClick"
            />
            <text class="payment_range_text">区间</text>
          </block>
        </block>
        <block class="payment-amount" v-if="checked">
          <input
            placeholder="最小金额"
            class="min-amount"
            v-model="minAmount"
          />
          <text class="split">-</text>
          <input
            placeholder="最大金额"
            class="max-amount"
            v-model="maxAmount"
          />
          <picker
            @change="companyChange"
            :value="companyIndex"
            :range="companyList"
            :range-key="'value'"
          >
            <view class="works-select-item company" v-if="company"
              >元{{ company }}</view
            >
            <view class="works-select-item company" v-else>元/单位</view>
          </picker>
          <text class="split">|</text>
          <block>
            <checkbox
              :value="payment_range"
              :checked="checked"
              class="payment_range"
              @tap="checkClick"
            />
            <text class="payment_range_text">区间</text>
          </block>
        </block>
      </view>
      <view class="works-info">
        <view><text>面向地区</text> <text class="check-tips">*</text></view>
        <picker
          mode="region"
          value="region"
          class="works-select"
          @change="bindRegionChange"
        >
          <view class="works-select-item" v-if="select_city">{{
            select_city
          }}</view>
          <view class="works-select-item" v-else>请选择</view>
        </picker>
      </view>
      <view class="works-info">
        <view>
          <text>信用担保</text>
          <text class="check-tips">*</text>
        </view>
        <picker
          @change="securityChange"
          :value="securityIndex"
          :range="securityList"
          :range-key="'value'"
          class="works-select"
        >
          <view class="works-select-item" v-if="security">{{ security }}</view>
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
import { errortip, openPage } from "../../../../utils/util";
import {
  publicConfig,
  creatInvite,
  invitePayment,
} from "../../../../api/index";
import { Base64 } from "js-Base64";
export default {
  name: "works",
  data() {
    return {
      face_cid: "",
      face_career: "",
      name: "",
      desc: "",
      time: "",
      place: "",
      imgList: [], // 图片集合
      videolist: [],
      videoCoverList: [],
      styleTaglist: [],
      taglist: [],
      switchChecked: false,
      charge: "",
      chargeIndex: 0,
      chargeList: [],
      security: "",
      securityList: [],
      securityIndex: 0,
      select_city: "",
      regionList: [],
      company: "",
      companyList: [],
      companyIndex: 0,
      checked: false,
      payment_range: 0,
      amount: "",
      minAmount: "",
      maxAmount: "",
    };
  },
  methods: {
    bindPickerChange(e) {
      this.charge = this.chargeList[e.detail.value].value;
      this.chargeIndex = e.detail.value;
    },
    companyChange(e) {
      this.company = this.companyList[e.detail.value].value;
      this.companyIndex = e.detail.value;
    },
    securityChange(e) {
      this.security = this.securityList[e.detail.value].value;
      this.securityIndex = e.detail.value;
    },
    bindRegionChange(e) {
      this.select_city = e.detail.value.join("-");
      this.regionList = e.detail.code;
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
    checkClick() {
      this.checked = !this.checked;
    },
    bindended() {
      wx.createVideoContext("video").exitFullScreen();
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
        url: "https://pai.qubeitech.com/v1/file/upload",
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
        url: "https://pai.qubeitech.com/v1/file/upload",
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
    descBlur(e) {
      this.desc = e.detail.value;
    },
    submit() {
      if (!this.name) {
        errortip("请输入标题！");
        return false;
      }
      if (!this.desc) {
        errortip("请输入描述！");
        return false;
      }
      if (!this.imgList.length && !this.videolist.length) {
        errortip("请上传照片/视频！");
        return false;
      }
      if (!this.charge) {
        errortip("请选择收费模式！");
        return false;
      }
      if (
        this.chargeList[this.chargeIndex].key == 300 ||
        this.chargeList[this.chargeIndex].key == 400
      ) {
        if (!this.checked && !this.amount) {
          errortip("请填写收费金额！");
          return false;
        }
        if (
          (this.checked && !this.minAmount) ||
          (this.checked && !this.maxAmount)
        ) {
          errortip("请填写收费金额区间！");
          return false;
        }
        if (
          (!this.checked && !this.company) ||
          (this.checked && !this.company)
        ) {
          errortip("请选择单位！");
          return false;
        }
      }

      if (!this.select_city) {
        errortip("请选择面向地区！");
        return false;
      }
      if (!this.security) {
        errortip("请选择信用担保！");
        return false;
      }
      let checkTag = this.styleTaglist.some((item) => item.checked);
      if (!checkTag) {
        errortip("请选择风格标签！");
        return false;
      }
      let checkTag2 = this.taglist.some((item) => item.checked);
      if (!checkTag2) {
        errortip("请选择约拍通告！");
        return false;
      }
      if (this.name.length < 4 || this.name.length > 20) {
        errortip("标题长度必须在4~20之间");
        return false;
      }
      let params = {
        type: 1,
        face_cid: this.face_cid,
        face_career: this.face_career,
        title: this.name,
        content: this.desc,
        expect_time: this.time,
        expect_locale: this.place,
        payment_type: this.chargeList[this.chargeIndex].key,
        payment_name: this.charge,
        payment_amount: 0,
        payment_min_amount: 0,
        payment_max_amount: 0,
        payment_unit: "",
        addressName: this.select_city,
        address: this.regionList,
        security_type: this.securityList[this.securityIndex].key,
        security_name: this.security,
        style_label: "",
        notice_label: "",
        ip_address: "",
        payment_range: this.checked ? 1 : 0,
        scr_type: "invite",
        file_type: this.imgList.length ? "picture" : "video",
        cover: this.imgList.length ? this.imgList : this.videoCoverList,
        video_cover: this.videolist,
      };
      if (
        this.chargeList[this.chargeIndex].key == 300 ||
        this.chargeList[this.chargeIndex].key == 400
      ) {
        if (this.checked) {
          params.payment_min_amount = Number(this.minAmount);
          params.payment_max_amount = Number(this.maxAmount);
        } else {
          params.payment_amount = Number(this.amount);
        }
        params.payment_unit = this.company;
      }
      let style_label = [];
      let notice_label = [];
      this.styleTaglist.map((item) => {
        if (item.checked) {
          style_label.push(item.value);
        }
      });
      this.taglist.map((item) => {
        if (item.checked) {
          notice_label.push(item.value);
        }
      });
      params.style_label = style_label.join(",");
      params.notice_label = notice_label.join(",");
      this.creatInvite(params);
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        res.data.data.map((item) => {
          if (item.type == "style_label") {
            item.checked = false;
            arr.push(item);
          }
          if (item.type == "notice_sticker") {
            item.checked = false;
            arr1.push(item);
          }
          if (item.type == "payment_type") {
            item.checked = false;
            arr2.push(item);
          }
          if (item.type == "payment_unit") {
            item.checked = false;
            arr3.push(item);
          }
          if (item.type == "security_type") {
            item.checked = false;
            arr4.push(item);
          }
        });
        this.styleTaglist = arr;
        this.taglist = arr1;
        this.chargeList = arr2;
        this.companyList = arr3;
        this.securityList = arr4;
      } catch (error) {}
    },
    async creatInvite(params) {
      try {
        let res = await creatInvite(params);
        let data = res.data.data;
        let _this = this;
        wx.showModal({
          title: "温馨提示",
          content: `发布约拍信息消耗${data.coin}个金豆，确定发布吗？`,
          success: function (res) {
            if (res.confirm) {
              console.log("用户点击确定");
              _this.invitePayment({
                oid: data.oid,
              });
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      } catch (error) {}
    },
    async invitePayment(params) {
      try {
        let res = await invitePayment(params);
        openPage(`/packageAdd/pages/tips/index?type=1&msg=${res.data.data}`);
      } catch (error) {}
    },
  },
  created() {
    this.publicConfig({
      type: [
        "notice_sticker",
        "payment_type",
        "style_label",
        "payment_unit",
        "security_type",
      ],
    });
  },
  onLoad: function (options) {
    this.face_cid = options.id;
    this.face_career = options.name;
  },
};
</script>
