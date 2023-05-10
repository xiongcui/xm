<template>
  <view class="editpersonimg">
    <view class="personimgs ub">
      <view class="ub-f1">
        <view class="imgsblock">
          <view class="imgs">
            <view class="preview_img" v-for="(item, index) in imgs" :key="item">
              <image
                :id="index"
                :markImgindex="index"
                mode="widthFix"
                :src="item"
              ></image>
              <view
                @tap="delete_preview(index)"
                class="preview_delet"
                :id="index"
                v-if="myself"
                >编辑</view
              >
              <view class="icon_coverimg" v-if="index == 0"> 封面 </view>
            </view>
            <view
              @tap="choosePersonImg"
              class="pick_img"
              v-if="imgs.length < 9 && myself"
            >
              <view class="pick_img_btn">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
                ></image>
              </view>
              <view class="upload-text">
                <view>添加形象照</view>
              </view>
            </view>
          </view>
        </view>
        <view style="clear: both"></view>
      </view>
    </view>
    <view class="sub_btn" v-if="myself">
      <button @tap="submit" type="primary">保存</button>
    </view>
  </view>
</template>

<script>
import { errortip, openPage } from "../../../../utils/util";
import {
  userAlbum,
  uploadImagePhoto,
  userAlbumDetail,
} from "../../../../api/index";
import "./index.scss";
export default {
  name: "editpersonimg",
  data() {
    return {
      imgs: [],
      uploadImgList: [],
      myself: true,
    };
  },
  methods: {
    choosePersonImg() {
      if (this.imgs.length >= 9) {
        wx.showToast({
          title: "最多上传9张图！",
          icon: "none",
        });
        return false;
      }
      wx.chooseMedia({
        count: 9 - this.imgs.length,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success(res) {
          let arr = res.tempFiles.map((item) => {
            return item.tempFilePath;
          });
          wx.setStorageSync("imgList", arr);
          openPage("/packageAdd/pages/user/we-cropper/index?type=imgList");
        },
      });
    },
    delete_preview(index) {
      let _this = this;
      wx.showActionSheet({
        itemList: ["设为封面", "替换", "删除"],
        success(res) {
          switch (res.tapIndex) {
            case 0:
              let first = _this.imgs[index];
              _this.imgs.splice(index, 1);
              _this.imgs.unshift(first);
              break;
            case 1:
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
                    "/packageAdd/pages/user/we-cropper/index?type=imgId&imgId=" +
                      index +
                      "&imgSrc=" +
                      arr[0]
                  );
                },
              });
              break;
            case 2:
              _this.imgs.splice(index, 1);
              break;
          }
        },
        fail(res) {
          console.log(res.errMsg);
        },
      });
    },
    submit() {
      if (this.imgs.length < 3) {
        errortip("形象照不能少于3张哦");
        return;
      }
      let arr = [];
      this.imgs.map((item, index) => {
        console.log(item.indexOf("https:") < 0);
        if (item.indexOf("https:") < 0) {
          // if (item.indexOf("http:") != -1 || item.indexOf("wxfile://" != -1)) {
          arr[index] = this.uploadImagePhoto(
            item,
            {
              scr_type: "album",
            },
            index
          );
        }
      });
      Promise.all(arr)
        .then(() => {
          this.userAlbum({
            scr_type: "album",
            file_type: "photo",
            photo_album: this.imgs,
            video_album: [],
          });
        })
        .catch(() => {
          wx.showToast({
            title: "有图片上传失败！",
            icon: "none",
          });
          this.imgs = this.uploadImgList;
        });
    },
    async userAlbum(params) {
      try {
        let res = await userAlbum(params);
        this.uploadImgList = [];
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
    async uploadImagePhoto(path, params, index) {
      try {
        let res = await uploadImagePhoto(path, params);
        this.imgs[index] = res.data.file1;
      } catch (error) {}
    },
    async userAlbumDetail(params) {
      try {
        let res = await userAlbumDetail(params);
        this.imgs = res.data.data.photo_album;
      } catch (error) {}
    },
  },
  created() {
    this.userAlbumDetail();
  },
  onShow() {
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1]; //当前页面
    if (currPage.data.updateimg) {
      this.imgs = this.imgs.concat(this.globalData.imgList);
      this.globalData.imgList = [];
    }
    if (currPage.data.imgId) {
      this.imgs[Number(currPage.data.imgId)] = currPage.data.homeimg;
      this.imgs = JSON.parse(JSON.stringify(this.imgs));
    }
  },
  onLoad: function (options) {
    this.myself = options.myself === "true" ? true : false;
  },
};
</script>

<style lang="scss" scoped></style>
