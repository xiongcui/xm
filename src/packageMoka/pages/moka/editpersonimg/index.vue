<template>
  <view class="editpersonimg">
    <view class="personimgs ub">
      <view class="side_gap"></view>
      <view class="ub-f1">
        <view class="imgsblock">
          <view class="imgs">
            <view class="preview_img" v-for="(item, index) in imgs" :key="item">
              <image
                :id="index"
                :markImgindex="index"
                mode="widthFix"
                :src="item.url"
              ></image>
              <view bindtap="delete_preview" class="preview_delet" :id="index"
                >编辑</view
              >
              <view class="icon_coverimg" v-if="index == 0"> 封面 </view>
            </view>
            <view bindtap="choosePersonImg" class="pick_img" v-if="addImgbtn">
              <view class="pick_img_btn">
                <image
                  src="../../../../assets/images/common/add_icon.png"
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
      <view class="side_gap_right"></view>
    </view>
    <view class="sub_btn">
      <button formType="submit" type="primary">保存</button>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "editpersonimg",
  data() {
    return {
      imgs: [],
      addImgbtn: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
