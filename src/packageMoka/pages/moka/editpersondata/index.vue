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
              src="https://yuepai-oss.qubeitech.com/static/images/common/icon_right.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/common/icon_right.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/common/icon_right.png"
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
              src="https://yuepai-oss.qubeitech.com/static/images/common/icon_right.png"
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
import { userShape, userShapeDetail } from "../../../../api/index";
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
    async userShapeDetail(params) {
      try {
        let res = await userShapeDetail(params);
        //默认下拉数据
        if (res.data.data.shape_list.height) {
          this.heights = res.data.data.shape_list.height;
        }
        if (res.data.data.shape_list.weight) {
          this.weights = res.data.data.shape_list.weight;
        }
        if (res.data.data.shape_list.bwh) {
          this.BWHs = [
            res.data.data.shape_list.bwh,
            res.data.data.shape_list.bwh,
            res.data.data.shape_list.bwh,
          ];
        }
        if (res.data.data.shape_list.size) {
          this.shoes = res.data.data.shape_list.size;
        }
        // 数据回显
        if (res.data.data.current_shape.height) {
          this.heightIndex = this.heights.findIndex((item) => {
            return item == res.data.data.current_shape.height;
          });
        }
        if (res.data.data.current_shape.weight) {
          this.weightIndex = this.weights.findIndex((item) => {
            return item == res.data.data.current_shape.weight;
          });
        }
        if (res.data.data.current_shape.bust) {
          this.BWHIndex[0] = this.BWHs[0].findIndex((item) => {
            return item == res.data.data.current_shape.bust;
          });
        }
        if (res.data.data.current_shape.waist) {
          this.BWHIndex[1] = this.BWHs[1].findIndex((item) => {
            return item == res.data.data.current_shape.waist;
          });
        }
        if (res.data.data.current_shape.hip) {
          this.BWHIndex[2] = this.BWHs[2].findIndex((item) => {
            return item == res.data.data.current_shape.hip;
          });
        }
        if (res.data.data.current_shape.size) {
          this.shoeIndex = this.shoes.findIndex((item) => {
            return item == res.data.data.current_shape.size;
          });
        }
        this.BWHIndex = JSON.parse(JSON.stringify(this.BWHIndex));
      } catch (error) {}
    },
  },
  created() {
    this.userShapeDetail("");
  },
};
</script>

<style lang="scss" scoped></style>
