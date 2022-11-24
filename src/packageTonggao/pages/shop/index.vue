<template>
  <view class="shop">
    <view class="shop-box">
      <view class="shop-item">
        <view class="shop-left"> 任务标题 </view>
        <view class="shop-rt">
          <input
            class="shop-input"
            placeholder="请输入标题(包含店铺名称)"
            v-model="date"
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
            v-model="date"
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
            v-model="date"
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
      <view class="shop-item">
        <view class="shop-left"> 招募人数 </view>
        <view class="shop-rt">
          <input
            class="shop-input"
            placeholder="请输入招募人数"
            v-model="date"
          />
        </view>
      </view>
      <view class="shop-item">
        <view class="shop-left"> 需要红人自我报价 </view>
        <view class="shop-rt"> </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "shop",
  data() {
    return {
      platform: "",
      platformIndex: "",
      platformList: [],
      localtion: "",
      taskData: [
        {
          name: "支付稿费",
          value: 0,
        },
        {
          name: "赠送产品",
          value: 1,
        },
        {
          name: "稿费+赠送",
          value: 2,
        },
      ],
    };
  },
  methods: {
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
  },
};
</script>

<style lang="scss" scoped></style>
