<template>
  <view class="editpersondata">
    <view class="infor">
      <picker
        @change="heightChange"
        :range="heights"
        :value="heightIndex ? heightIndex : 125"
      >
        <view class="item ub item-b">
          <view class="ub-f1 ub item_mid">
            <view class="item_label">身高（cm）</view>
            <view class="ub-f1 item_input">
              <view class="picker" v-if="heightIndex === ''">请选择</view>
              <view class="picker" v-else>{{ heights[heightIndex] }}cm</view>
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="../../../../assets/images/common/icon_right.png"
            ></image>
          </view>
        </view>
      </picker>
      <picker
        @change="weightChange"
        :range="weights"
        :value="weightIndex ? weightIndex : 35"
      >
        <view class="item ub item-b">
          <view class="ub-f1 ub item_mid">
            <view class="item_label">体重（kg）</view>
            <view class="ub-f1 item_input">
              <view class="picker" v-if="weightIndex === ''">请选择</view>
              <view class="picker" v-else>{{ weights[weightIndex] }}kg</view>
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="../../../../assets/images/common/icon_right.png"
            ></image>
          </view>
        </view>
      </picker>
      <picker
        @change="BWHChange"
        mode="multiSelector"
        :range="BWHs"
        :value="BWHIndex"
      >
        <view class="item ub item-b">
          <view class="ub-f1 ub item_mid">
            <view class="item_label">三围</view>
            <view class="ub-f1 item_input">
              <view class="picker" v-if="BWHIndex.length">
                胸围{{ BWHs[0][BWHIndex[0]] }} 腰围{{
                  BWHs[1][BWHIndex[1]]
                }}
                臀围{{ BWHs[2][BWHIndex[2]] }}
              </view>
              <view class="picker" v-else>请选择</view>
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="../../../../assets/images/common/icon_right.png"
            ></image>
          </view>
        </view>
      </picker>
      <picker
        @change="shoeChange"
        :range="shoes"
        :value="shoeIndex ? shoeIndex : 18"
      >
        <view class="item ub">
          <view class="ub-f1 ub item_mid">
            <view class="item_label">鞋码</view>
            <view class="ub-f1 item_input">
              <view class="picker" v-if="shoeIndex === ''">请选择</view>
              <view class="picker" v-else>{{ shoes[shoeIndex] }}</view>
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="../../../../assets/images/common/icon_right.png"
            ></image>
          </view>
        </view>
      </picker>
    </view>
    <view class="sub_btn">
      <button @tap="sub" type="primary">保存</button>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { publicConfig, userShape } from "../../../../api/index";
import { errortip } from "../../../../utils/util";
export default {
  name: "editpersondata",
  data() {
    return {
      heights: [],
      heightIndex: "",
      weights: [],
      weightIndex: "",
      shoes: [],
      shoeIndex: "",
      BWHs: [[], [], []],
      BWHIndex: Array(),
      isshowBWH: true,
    };
  },
  methods: {
    heightChange(e) {
      this.heightIndex = e.detail.value;
    },
    weightChange(e) {
      this.weightIndex = e.detail.value;
    },
    BWHChange(e) {
      this.BWHIndex = e.detail.value;
    },
    shoeChange(e) {
      this.shoeIndex = e.detail.value;
    },
    sub() {
      let height = this.heights[this.heightIndex];
      let weight = this.weights[this.weightIndex];
      let bust = this.BWHs[0][this.BWHIndex[0]];
      let waist = this.BWHs[1][this.BWHIndex[1]];
      let hip = this.BWHs[2][this.BWHIndex[2]];
      let size = this.shoes[this.shoeIndex];
      if (!height) {
        errortip("请选择身高！");
        return;
      }
      if (!weight) {
        errortip("请选择体重！");
        return;
      }
      if (!bust && !waist && !hip) {
        errortip("请选择三围！");
        return;
      }
      if (!size) {
        errortip("请选择鞋码！");
        return;
      }
      let params = {
        height: height,
        weight: weight,
        bust: bust,
        waist: waist,
        hip: hip,
        size: size,
      };
      this.userShape(params);
    },
    async userShape(params) {
      try {
        let res = await userShape(params);
        wx.navigateBack({
          delta: 1,
        });
      } catch (error) {}
    },
    async publicConfig(params) {
      try {
        let res = await publicConfig(params);
        let arr = [];
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        res.data.data.map((item) => {
          if (item.type == "shape_height") {
            arr.push(item.value);
          }
          if (item.type == "shape_weight") {
            arr2.push(item.value);
          }
          if (item.type == "shape_bwh") {
            arr3.push(item.value);
          }
          if (item.type == "shape_size") {
            arr4.push(item.value);
          }
        });
        this.heights = arr;
        this.weights = arr2;
        this.BWHs = [arr3, arr3, arr3];
        this.shoes = arr4;
      } catch (error) {}
    },
  },
  created() {
    this.publicConfig({
      type: ["shape_height", "shape_weight", "shape_bwh", "shape_size"],
    });
  },
};
</script>

<style lang="scss" scoped></style>
