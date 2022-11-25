<template>
  <view class="shop">
    <view class="shop-box">
      <view class="shop-item">
        <view class="shop-left"> 任务标题 </view>
        <view class="shop-rt">
          <input
            class="shop-input"
            placeholder="请输入标题(包含店铺名称)"
            v-model="title"
          />
        </view>
      </view>
      <view class="shop-item">
        <view class="shop-left"> 推广平台</view>
        <view class="shop-rt">
          <picker
            @change="platformChange"
            :value="platformIndex"
            :range="platformList"
            :range-key="'value'"
            class="shop-select"
          >
            <view class="shop-select-item" v-if="platform">{{ platform }}</view>
            <view class="shop-select-item" v-else>请选择</view>
          </picker>
        </view>
      </view>
    </view>
    <view class="shop-box">
      <view class="shop-item">
        <view class="shop-left"> 店铺名称 </view>
        <view class="shop-rt">
          <input
            class="shop-input"
            placeholder="请输入店铺名称"
            v-model="name"
          />
        </view>
      </view>
      <view class="shop-item">
        <view class="shop-left"> 店铺地址 </view>
        <view class="shop-rt" @tap="onChooseLocation">
          <image class="shop-icon" src="../../../assets/images/position.png">
          </image>
          <text v-if="localtion"> {{ localtion }}</text>
          <text v-else> 请选择店铺地址</text>
          <view class="shop-item-right">
            <image
              mode="aspectFit"
              src="../../../assets/images/right.png"
            ></image>
          </view>
        </view>
      </view>
      <view class="shop-item">
        <view class="shop-left"> 门牌号码 </view>
        <view class="shop-rt">
          <input
            class="shop-input"
            placeholder="请输入详细地址，如x单元x层x室"
            v-model="doorplate"
          />
        </view>
      </view>
    </view>
    <view class="shop-box">
      <view class="shop-item">
        <view class="shop-left"> 任务奖励 </view>
      </view>
      <view class="shop-item">
        <view class="tags">
          <text
            @tap="select_tag(item)"
            class="tag_item"
            :class="item.ispick ? 'tag_itemed' : ''"
            v-for="(item, index) in taskData"
            :key="index"
            >{{ item.name }}</text
          >
        </view>
      </view>
      <view class="shop-item" v-if="taskIndex == 1 || taskIndex == 3">
        <view class="shop-left"> 人均稿费 </view>
        <view class="shop-rt">
          <block class="payment-amount" v-if="checked1">
            <input placeholder="请输入" class="amount1" v-model="amount" />
            <text class="yuan">元</text>
            <text class="tonggao-split">|</text>
            <block>
              <text class="payment_range_text">额定</text>
              <checkbox
                :value="payment_range"
                :checked="checked1"
                class="payment_range"
                @tap="checkClick1"
              />
            </block>
          </block>
          <block class="payment-amount" v-if="!checked1">
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
            <text class="yuan">元</text>
            <text class="tonggao-split">|</text>
            <block>
              <text class="payment_range_text">额定</text>
              <checkbox
                :value="payment_range"
                :checked="checked1"
                class="payment_range"
                @tap="checkClick1"
              />
            </block>
          </block>
        </view>
      </view>
      <view class="shop-item" v-if="taskIndex == 2 || taskIndex == 3">
        <view class="shop-left"> 赠送产品 </view>
        <view class="shop-rt">
          <input
            class="shop-input"
            placeholder="请输入赠送产品"
            v-model="product"
          />
        </view>
      </view>
      <view class="shop-item" v-if="taskIndex == 2 || taskIndex == 3">
        <view class="shop-left"> 赠品价值 </view>
        <view class="shop-rt">
          <input
            class="shop-input"
            placeholder="请输入赠送产品价值"
            v-model="giftsValue"
          />
          <text style="color: #333333; margin-left: 6px">元</text>
        </view>
      </view>
      <view class="shop-item">
        <view class="shop-left"> 招募人数 </view>
        <view class="shop-rt">
          <input
            class="shop-input"
            placeholder="请输入招募人数"
            v-model="recruitNum"
          />
        </view>
      </view>
      <view class="shop-item">
        <view class="shop-left"> 需要红人自我报价 </view>
        <view class="shop-rt">
          <view class="need">
            <text :class="checked ? 'active' : ''">需要</text>
            <checkbox :checked="checked" @tap="checkClick" class="checked" />
          </view>
          <view class="no-need">
            <text :class="!checked ? 'active' : ''">不需要</text>
            <checkbox :checked="!checked" @tap="checkClick" class="checked" />
          </view>
        </view>
      </view>
    </view>
    <view class="shop-box">
      <view class="shop-item">
        <view class="shop-left"> 粉丝要求 </view>
        <view class="shop-rt">
          <block class="payment-amount">
            <input
              placeholder="最低粉丝数"
              class="min-fans"
              v-model="minFans"
              @blur="fansChange"
            />
            <text class="tonggao-split">-</text>
            <input
              placeholder="最高粉丝数"
              class="max-fans"
              v-model="maxFans"
            />
            <text class="tonggao-split">|</text>
            <block>
              <text class="payment_range_text">不限</text>
              <checkbox
                :checked="checked2"
                class="payment_range"
                @tap="checkClick2"
                @blur="fansChange"
              />
            </block>
          </block>
        </view>
      </view>
      <view class="shop-item">
        <view class="shop-left"> 截止日期 </view>
        <view class="shop-rt">
          <picker
            @change="dateChange"
            end="2020-09-01"
            mode="date"
            start="1960-09-01"
            value="2000-01-01"
            class="shop-select"
          >
            <view class="shop-select-item" v-if="date">{{ date }}</view>
            <view class="shop-select-item" v-else>请选择</view>
          </picker>
        </view>
      </view>
      <view class="shop-item">
        <view class="shop-left"> 任务描述 </view>
      </view>
      <view class="shop-item">
        <textarea
          class="tonggao-width"
          auto-height
          placeholder="您需要什么样的合作？请介绍您的店铺、产品、合作费用、合作要求等，但不得含有联系方式，否则不予通过。"
          v-model="desc"
        />
      </view>
      <view class="shop-item">
        <view class="tonggao-upload">
          <view class="tonggao-upload-title">上传照片</view>
          <view class="tonggao-upload-list">
            <block v-if="imgList.length">
              <view
                class="tonggao-upload-img"
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
            <view class="tonggao-upload-img" @tap="chooseImage">
              <image
                src="../../../assets/images/upload-img.png"
                class="upload-img"
                mode="aspectFit"
              ></image>
              <view>
                <text class="upload-txt">上传店铺照片</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <cover-view
      class="subbtn_bottom_block"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <cover-view class="subbtn_bottom">
        <button @tap="submit">发布</button>
      </cover-view>
    </cover-view>
  </view>
</template>

<script>
import { Base64 } from "js-Base64";
import "./index.scss";
export default {
  name: "shop",
  data() {
    return {
      isIphoneX: false,
      name: "",
      title: "",
      doorplate: "",
      platform: "",
      platformIndex: "",
      platformList: [],
      localtion: "",
      recruitNum: "",
      product: "",
      giftsValue: "",
      desc: "",
      checked: false,
      checked1: false,
      checked2: true,
      amount: "",
      minAmount: "",
      maxAmount: "",
      payment_range: "",
      minFans: "",
      maxFans: "",
      taskIndex: "",
      date: "",
      imgList: [],
      taskData: [
        {
          name: "支付稿费",
          value: 1,
          ispick: false,
        },
        {
          name: "赠送产品",
          value: 2,
          ispick: false,
        },
        {
          name: "稿费+赠送",
          value: 3,
          ispick: false,
        },
      ],
    };
  },
  methods: {
    uploadImgClose(index) {
      this.imgList.splice(index, 1);
    },
    previewImage(src, urls) {
      // 微信预览图片的方法
      wx.previewImage({
        current: src, // 图片的地址url
        urls: urls, // 预览的地址url
      });
    },
    platformChange() {},
    onChooseLocation() {
      wx.chooseLocation({
        success: (res) => {
          this.localtion = res.address;
          this.locale_address = res;
          //   console.log(res, "--------------", this.localtion);
        },
      });
    },
    select_tag(row) {
      this.taskIndex = row.value;
      this.taskData.map((item) => {
        item.ispick = false;
      });
      this.taskData[row.value - 1].ispick = true;
    },
    checkClick() {
      this.checked = !this.checked;
    },
    checkClick1() {
      this.checked1 = !this.checked1;
    },
    checkClick2() {
      this.checked2 = !this.checked2;
    },
    fansChange(e) {
      if (e.target.value) {
        this.checked2 = false;
      } else {
        this.checked2 = true;
      }
    },
    dateChange(e) {
      this.date = e.detail.value;
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
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
};
</script>

<style lang="scss" scoped></style>
