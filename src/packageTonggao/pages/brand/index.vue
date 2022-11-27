<template>
  <view class="brand">
    <view class="brand-box">
      <view class="brand-item">
        <view class="brand-left"> 任务标题 </view>
        <view class="brand-rt">
          <input
            class="brand-input"
            placeholder="请输入标题(包含店铺名称)"
            v-model="title"
          />
        </view>
      </view>
      <view class="brand-item">
        <view class="brand-left"> 推广平台</view>
        <view class="brand-rt">
          <picker
            @change="platformChange"
            :value="platformIndex"
            :range="platformList"
            :range-key="'value'"
            class="brand-select"
          >
            <view class="brand-select-item" v-if="platform">{{
              platform
            }}</view>
            <view class="brand-select-item" v-else>请选择</view>
          </picker>
        </view>
      </view>
      <view class="brand-item">
        <view class="brand-left"> 产品名称 </view>
        <view class="brand-rt">
          <input
            class="brand-input"
            placeholder="请输入产品名称"
            v-model="productName"
          />
        </view>
      </view>
      <view class="brand-item">
        <view class="brand-left"> 品牌匿名 </view>
        <view class="brand-rt">
          <switch
            :checked="anonymous"
            @change="anonymousChange"
            color="#fe5457"
          />
        </view>
      </view>
    </view>
    <view class="brand-box">
      <view class="brand-item">
        <view class="brand-left"> 任务奖励 </view>
      </view>
      <view class="brand-item">
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
      <view class="brand-item" v-if="taskIndex == 1 || taskIndex == 3">
        <view class="brand-left"> 人均稿费 </view>
        <view class="brand-rt">
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
      <view class="brand-item" v-if="taskIndex == 2 || taskIndex == 3">
        <view class="brand-left"> 赠送产品 </view>
        <view class="brand-rt">
          <input
            class="brand-input"
            placeholder="请输入赠送产品"
            v-model="product"
          />
        </view>
      </view>
      <view class="brand-item" v-if="taskIndex == 2 || taskIndex == 3">
        <view class="brand-left"> 赠品价值 </view>
        <view class="brand-rt">
          <input
            class="brand-input"
            placeholder="请输入赠送产品价值"
            v-model="giftsValue"
          />
          <text style="color: #333333; margin-left: 6px">元</text>
        </view>
      </view>
      <view class="brand-item">
        <view class="brand-left"> 招募人数 </view>
        <view class="brand-rt">
          <input
            class="brand-input"
            placeholder="请输入招募人数"
            v-model="recruitNum"
          />
        </view>
      </view>
      <view class="brand-item">
        <view class="brand-left"> 需要红人自我报价 </view>
        <view class="brand-rt">
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
    <view class="brand-box">
      <view class="brand-item">
        <view class="brand-left"> 粉丝要求 </view>
        <view class="brand-rt">
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
                :checked="checked3"
                class="payment_range"
                @tap="checkClick3"
                @blur="fansChange"
              />
            </block>
          </block>
        </view>
      </view>
      <view class="brand-item">
        <view class="brand-left"> 截止日期 </view>
        <view class="brand-rt">
          <picker
            @change="dateChange"
            mode="date"
            start="1960-09-01"
            value="2000-01-01"
            class="brand-select"
          >
            <view class="brand-select-item" v-if="date">{{ date }}</view>
            <view class="brand-select-item" v-else>请选择</view>
          </picker>
        </view>
      </view>
      <view class="brand-item">
        <view class="brand-left"> 收件地址 </view>
        <view class="brand-rt">
          <view class="need">
            <text :class="checked4 ? 'active' : ''">需要</text>
            <checkbox :checked="checked4" @tap="checkClick4" class="checked" />
          </view>
          <view class="no-need">
            <text :class="!checked4 ? 'active' : ''">不需要</text>
            <checkbox :checked="!checked4" @tap="checkClick4" class="checked" />
          </view>
        </view>
      </view>
      <view class="brand-item">
        <view class="brand-left"> 任务描述 </view>
      </view>
      <view class="brand-item">
        <textarea
          class="tonggao-width"
          auto-height
          placeholder="您需要什么样的合作？请介绍您的产品特征、产品价格、合作费用、合作要求等，但不得含有联系方式，否则不予通过。"
          v-model="desc"
        />
      </view>
      <view class="brand-item">
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
                <text class="upload-txt">上传产品照片</text>
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
import "./index.scss";
import { Base64 } from "js-Base64";
import { publicConfig, submitNotice } from "../../../api/index.js";
import { errortip } from "../../../utils/util";
export default {
  name: "brand",
  data() {
    return {
      isIphoneX: false,
      title: "",
      platform: "",
      platformIndex: "",
      platformList: [],
      productName: "",
      taskIndex: "",
      checked: false,
      checked1: false,
      checked3: true,
      checked4: false,
      amount: "",
      minAmount: "",
      maxAmount: "",
      payment_range: "",
      minFans: "",
      maxFans: "",
      product: "",
      giftsValue: "",
      recruitNum: "",
      anonymous: false,
      date: "",
      desc: "",
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
    platformChange(e) {
      this.platform = this.platformList[e.detail.value].value;
      this.platformIndex = e.detail.value;
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
    checkClick3() {
      this.checked3 = !this.checked3;
    },
    checkClick4() {
      this.checked4 = !this.checked4;
    },
    anonymousChange() {
      this.anonymous = !this.anonymous;
    },
    dateChange(e) {
      this.date = e.detail.value;
    },
    fansChange(e) {
      if (this.minFans || this.maxFans) {
        this.checked3 = false;
      } else {
        this.checked3 = true;
      }
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
          scr_type: "notice",
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
    submit() {
      if (!this.title) {
        errortip("请填写任务标题！");
        return false;
      }
      if (!this.platform) {
        errortip("请选择推广平台！");
        return false;
      }
      if (!this.productName) {
        errortip("请填写产品名称！");
        return false;
      }
      if (!this.taskIndex) {
        errortip("请填写任务奖励！");
        return false;
      }
      if (this.taskIndex == 1 || this.taskIndex == 3) {
        if (this.checked1 && !this.amount) {
          errortip("请填写人均稿费！");
          return false;
        }
        if (
          (!this.checked1 && !this.minAmount) ||
          (!this.checked1 && !this.maxAmount)
        ) {
          errortip("请填写人均稿费！");
          return false;
        }
      }
      if (this.taskIndex == 2 || this.taskIndex == 3) {
        if (!this.product) {
          errortip("请填写赠送产品！");
          return false;
        }
        if (!this.giftsValue) {
          errortip("请填写赠品价值！");
          return false;
        }
      }
      if (!this.recruitNum) {
        errortip("请填写招募人数！");
        return false;
      }
      if (!this.date) {
        errortip("请填写截止日期！");
        return false;
      }
      if (!this.desc) {
        errortip("请填写任务描述！");
        return false;
      }
      if (!this.imgList.length) {
        errortip("请上传图片！");
        return false;
      }
      let params = {
        type: 20,
        first_code: "celebrity_spread",
        second_code: "CS8002",
        second_name: "品牌种草",
        title: this.title,
        spread_platform_code: this.platformList[Number(this.platformIndex)].key,
        spread_platform_name:
          this.platformList[Number(this.platformIndex)].value,
        product_brand: this.productName,
        is_hide_brand: this.anonymous ? 1 : 0,
        is_deliver_address: this.checked4 ? 1 : 0, //收货地址（1:需要; 0:不需要）
        task_reward_type: this.taskIndex + "00",
        task_reward_name: this.taskData[Number(this.taskIndex - 1)].name,
        payment_range: this.checked1 ? 0 : 1, // 费用区间(1:区间；0非区间)
        payment_amount: 0, // 付费金额(非金额区间),
        payment_min_amount: 0,
        payment_max_amount: 0,
        payment_unit: "元",
        reward_good_name: "",
        reward_good_price: 0,
        no_limit_number: 0, // 不限人数(不限制：1)
        recruit_number: this.recruitNum, //招募人数
        is_quoted_price: this.checked ? 1 : 0, // 自报价格(1:是，0:否)
        no_limit_fans: this.checked3 ? 1 : 0, // 不限粉丝(1:不限；0:限制)
        fans_min_number: Number(this.minFans),
        fans_max_number: Number(this.maxFans),
        no_limit_deadline: 0, // 是否长期（长期:1，此时deadline_date为空，短期:0,此时deadline_date填日期）
        deadline_date: this.date,
        content: this.desc,
        scr_type: "notice",
        file_type: "picture",
        cover: this.imgList,
      };
      if (this.taskIndex == 1 || this.taskIndex == 3) {
        params.payment_amount = this.checked1 ? Number(this.amount) : 0;
        params.payment_min_amount = Number(this.minAmount);
        params.payment_max_amount = Number(this.maxAmount);
      }
      if (this.taskIndex == 2 || this.taskIndex == 3) {
        params.reward_good_name = this.product;
        params.reward_good_price = Number(this.giftsValue);
      }
      console.log(params);
      this.submitNotice(params);
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        this.platformList = res.data.data;
      } catch (error) {}
    },
    async submitNotice(params) {
      try {
        let res = await submitNotice(params);
        errortip("提交成功！");
        // 跳转首页
        wx.switchTab({
          url: "/pages/home/index",
          success: function (e) {
            var page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
            page.onLoad();
          },
        });
      } catch (error) {}
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.publicConfig({
      type: ["spread_platform"],
    });
  },
};
</script>

<style lang="scss" scoped></style>
