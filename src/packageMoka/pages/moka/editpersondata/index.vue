<template>
  <form
    bindreset="reset"
    bindsubmit="sub"
    class="editpersondata"
    reportSubmit="true"
  >
    <view class="infor">
      <picker
        bindchange="heightChange"
        range="heights"
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
        bindchange="weightChange"
        range="weights"
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
        bindchange="BWHChange"
        mode="multiSelector"
        range="BWHs"
        value="BWHIndex"
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
        bindchange="shoeChange"
        range="shoes"
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
      <button formType="submit" type="primary">保存</button>
    </view>
  </form>
</template>

<script>
import "./index.scss";
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
      BWHs: [],
      BWHIndex: Array(),
      isshowBWH: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
