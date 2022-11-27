<template>
  <view class="add-tonggao">
    <view class="tonggao-box">
      <view class="tonggao-item">
        <view class="tonggao-left"> 通告类型 </view>
        <view class="tonggao-rt">{{ type }}</view>
      </view>
      <view class="tonggao-item">
        <view class="tonggao-left"> 面向身份 </view>
        <view class="tonggao-rt">
          <picker
            @change="identityChange"
            :value="identityIndex"
            :range="identityList"
            :range-key="'name'"
            class="tonggao-select"
          >
            <view class="tonggao-select-item" v-if="identity">{{
              identity
            }}</view>
            <view class="tonggao-select-item" v-else>请选择</view>
          </picker>
        </view>
      </view>
      <view class="tonggao-item">
        <view class="tonggao-left"> 面向地区 </view>
        <view class="tonggao-rt">
          <picker
            mode="region"
            value="region"
            class="tonggao-select"
            @change="bindRegionChange"
          >
            <view class="tonggao-select-item" v-if="select_city">{{
              select_city
            }}</view>
            <view class="tonggao-select-item" v-else>请选择公告面向地区</view>
          </picker>
        </view>
      </view>
      <view class="tonggao-item">
        <view class="tonggao-left"> 截止日期 </view>
        <view class="tonggao-rt">
          <view class="tonggao-dete">
            <input
              class="tonggao-name"
              placeholder="请选择报名截止日期"
              v-model="date"
              @blur="dateBlur"
            />
            <text class="tonggao-split">|</text>
            <text class="long-term">长期</text>
            <checkbox :checked="checked" @tap="checkClick" />
          </view>
        </view>
      </view>
      <view class="tonggao-item">
        <view class="tonggao-left"> 性别要求 </view>
        <view class="tonggao-rt">
          <view class="tags">
            <text
              @tap="select_tag(item)"
              class="tag_item"
              :class="item.ispick ? 'tag_itemed' : ''"
              v-for="(item, index) in sexData"
              :key="index"
              >{{ item.name }}</text
            >
          </view>
        </view>
      </view>
    </view>
    <view class="tonggao-box">
      <view class="tonggao-item">
        <view class="tonggao-left"> 通告费用 </view>
        <view class="tonggao-rt">
          <picker
            @change="costChange"
            :value="costIndex"
            :range="costList"
            :range-key="'value'"
            class="tonggao-select"
          >
            <view class="tonggao-select-item" v-if="cost">{{ cost }}</view>
            <view class="tonggao-select-item" v-else>请选择</view>
          </picker>
        </view>
      </view>
      <view
        class="tonggao-item"
        v-if="costList.length && costList[Number(this.costIndex)].key == 400"
      >
        <view class="tonggao-left"> 收费金额 </view>
        <view class="tonggao-rt">
          <block class="payment-amount" v-if="!checked1">
            <input placeholder="请输入" class="amount1" v-model="amount" />
            <picker
              @change="companyChange"
              :value="companyIndex"
              :range="companyList"
              :range-key="'value'"
            >
              <view class="tonggao-select-item company" v-if="company"
                >元{{ company }}</view
              >
              <view class="tonggao-select-item company" v-else>元/单位</view>
            </picker>
            <text class="tonggao-split">|</text>
            <block>
              <checkbox
                :value="payment_range"
                :checked="checked1"
                class="payment_range"
                @tap="checkClick1"
              />
              <text class="payment_range_text">区间</text>
            </block>
          </block>
          <block class="payment-amount" v-if="checked1">
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
              <view class="tonggao-select-item company" v-if="company"
                >元{{ company }}</view
              >
              <view class="tonggao-select-item company" v-else>元/单位</view>
            </picker>
            <text class="tonggao-split">|</text>
            <block>
              <checkbox
                :value="payment_range"
                :checked="checked1"
                class="payment_range"
                @tap="checkClick1"
              />
              <text class="payment_range_text">区间</text>
            </block>
          </block>
        </view>
      </view>
      <view class="tonggao-item">
        <view class="tonggao-left"> 招募人数 </view>
        <view class="tonggao-rt">
          <input
            class="tonggao-name"
            placeholder="请输入招募人数"
            v-model="recruitNum"
            @blur="recruitBlur"
          />
          <text class="tonggao-split">|</text>
          <text class="long-term">不限</text>
          <checkbox :checked="checked2" @tap="checkClick2" class="checked2" />
        </view>
      </view>
    </view>
    <view class="tonggao-box">
      <view class="tonggao-item">
        <input
          placeholder="给通告取个名字会有更多报名哦～"
          v-model="name"
          class="tonggao-width"
        />
      </view>
      <view class="tonggao-item">
        <textarea
          class="tonggao-width"
          auto-height
          placeholder="您需要什么样的合作? 比如：模特形象、模特风格、模特经验、合作费用等。配图更佳，但不得含有联系方式，否则不予通过。"
          v-model="desc"
        />
      </view>
      <view class="tonggao-item">
        <text>时间</text>
        <input
          placeholder="您期望的合作时间（选填）"
          class="tonggao-input"
          v-model="time"
        />
      </view>
      <view class="tonggao-item">
        <text>地点</text>
        <input
          placeholder="您期望的合作地点（选填）"
          class="tonggao-input"
          v-model="place"
        />
      </view>
      <view class="tonggao-item">
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
                <text class="upload-txt">上传照片</text>
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
import { noticeTemplate, submitNotice } from "../../../api/index.js";
import { errortip } from "../../../utils/util";
export default {
  name: "addtonggao",
  data() {
    return {
      isIphoneX: false,
      type: "",
      key: "",
      code: "",
      identity: "",
      identityIndex: "",
      identityList: [],
      select_city: "",
      regionList: [],
      date: "",
      checked: false,
      desc: "",
      recruitNum: "",
      sexData: [
        {
          name: "男",
          value: 1,
          ispick: false,
        },
        {
          name: "女",
          value: 0,
          ispick: false,
        },
        {
          name: "不限",
          value: 100,
          ispick: true,
        },
      ],
      cost: "",
      costIndex: "",
      costList: [],
      company: "",
      companyList: [],
      companyIndex: 0,
      checked1: false,
      payment_range: 0,
      amount: "",
      minAmount: "",
      maxAmount: "",
      checked2: false,
      name: "",
      time: "",
      place: "",
      imgList: [],
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
    identityChange(e) {
      this.identityIndex = e.detail.value;
      this.identity = this.identityList[this.identityIndex].name;
    },
    bindRegionChange(e) {
      this.select_city = e.detail.value.join("-");
      this.regionList = e.detail.code;
    },
    checkClick() {
      this.checked = !this.checked;
      if (this.checked) {
        this.date = "";
      }
    },
    checkClick1() {
      this.checked1 = !this.checked1;
    },
    dateBlur() {
      if (this.date) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    },
    recruitBlur() {
      if (this.recruitNum) {
        this.checked2 = false;
      } else {
        this.checked2 = true;
      }
    },
    select_tag(row) {
      this.sexData.map((item) => {
        item.ispick = false;
      });
      row.ispick = !row.ispick;
    },
    costChange(e) {
      this.cost = this.costList[e.detail.value].value;
      this.costIndex = e.detail.value;
    },
    companyChange(e) {
      this.company = this.companyList[e.detail.value].value;
      this.companyIndex = e.detail.value;
    },
    checkClick2() {
      this.checked2 = !this.checked2;
      if (this.checked2) {
        this.recruitNum = "";
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
      if (!this.identity) {
        errortip("请选择身份！");
        return false;
      }
      if (!this.select_city) {
        errortip("请选择面向地区！");
        return false;
      }
      if (!this.date && !this.checked) {
        errortip("请填写截止日期！");
        return false;
      }
      if (!this.cost) {
        errortip("请填写通告费用！");
        return false;
      }
      if (this.costList[this.costIndex].key == 400) {
        if (!this.checked1 && !this.amount) {
          errortip("请填写收费金额！");
          return false;
        }
        if (
          (this.checked1 && !this.minAmount) ||
          (this.checked1 && !this.maxAmount)
        ) {
          errortip("请填写收费金额区间！");
          return false;
        }
        if (
          (!this.checked1 && !this.company) ||
          (this.checked1 && !this.company)
        ) {
          errortip("请选择单位！");
          return false;
        }
      }
      if (!this.recruitNum && !this.checked2) {
        errortip("请填写招募人数！");
        return false;
      }
      if (!this.name) {
        errortip("请填写通告名称！");
        return false;
      }
      if (!this.desc) {
        errortip("请填写通告描述！");
        return false;
      }
      if (!this.imgList.length) {
        errortip("请上传图片！");
        return false;
      }
      let sexData = this.sexData.find((item) => {
        return item.ispick;
      });
      let params = {
        type: 20,
        first_code: this.code,
        second_code: this.key,
        second_name: this.type,
        face_cid: this.identityList[Number(this.identityIndex)].cid,
        face_career: this.identityList[Number(this.identityIndex)].name,
        addressName: this.select_city,
        address: this.regionList,
        no_limit_deadline: this.checked ? 1 : 0, // 是否长期（长期:1，此时deadline_date为空，短期:0,此时deadline_date填日期）
        deadline_date: this.checked ? "" : this.date,
        face_sex: sexData.value,
        payment_type: this.costList[this.costIndex].key,
        payment_name: this.cost,
        payment_amount: 0,
        payment_min_amount: 0,
        payment_max_amount: 0,
        payment_unit: "",
        payment_range: this.checked1 ? 1 : 0,
        no_limit_number: this.checked2 ? 1 : 0, // 不限人数(不限制：1)
        recruit_number: this.checked2 ? 0 : this.recruitNum,
        title: this.name,
        content: this.desc,
        expect_time: this.time,
        expect_locale: this.place,
        scr_type: "notice",
        file_type: "picture",
        cover: this.imgList,
      };
      if (this.costList[this.costIndex].key == 400) {
        if (this.checked1) {
          params.payment_min_amount = Number(this.minAmount);
          params.payment_max_amount = Number(this.maxAmount);
        } else {
          params.payment_amount = Number(this.amount);
        }
        params.payment_unit = this.company;
      }
      console.log(params);
      this.submitNotice(params);
    },
    async noticeTemplate(params) {
      try {
        let res = await noticeTemplate(params);
        if (res.data.data.career.length == 1) {
          this.identity = res.data.data.career[0].name;
        }
        this.identityList = res.data.data.career;
        this.costList = res.data.data.payment_type;
        this.companyList = res.data.data.payment_unit;
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
  },
  onLoad: function (options) {
    this.type = options.type;
    this.key = options.key;
    this.code = options.code;
    if (this.type) {
      wx.setNavigationBarTitle({
        title: "发布" + options.type + "通告",
      });
      this.noticeTemplate({
        second_code: options.key,
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
