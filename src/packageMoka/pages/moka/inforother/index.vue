<template>
  <view class="inforother">
    <view class="title">基本信息</view>
    <view class="infor">
      <view class="item ub item-b">
        <view class="ub-f1 ub item_mid">
          <view class="item_label">姓名/昵称</view>
          <view class="ub-f1 item_input">
            <input
              maxlength="60"
              name="nickname"
              placeholder="请输入姓名/昵称"
              type="text"
              v-model="nickname"
            />
          </view>
        </view>
        <view class="item_right"></view>
      </view>
      <picker @change="sexChange" :range="sexs" v-model="sex">
        <view class="item ub item-b">
          <view class="ub-f1 ub item_mid">
            <view class="item_label">性别</view>
            <view class="ub-f1 item_input">
              <view class="picker-value" v-if="sex">{{ sexs[sex] }}</view>
              <view class="picker" v-else>请选择</view>
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="../../../../assets/images/right.png"
            ></image>
          </view>
        </view>
      </picker>
      <picker
        @change="birthdayChange"
        end="2020-09-01"
        value="2005-01-01"
        mode="date"
        start="1960-09-01"
        v-model="birthday"
      >
        <view class="item ub">
          <view class="ub-f1 ub item_mid">
            <view class="item_label">生日</view>
            <view class="ub-f1 item_input">
              <view class="picker-value" v-if="birthday">{{ birthday }}</view>
              <view class="picker" v-else>请选择</view>
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="../../../../assets/images/right.png"
            ></image>
          </view>
        </view>
      </picker>
    </view>
    <view class="title">形象信息</view>
    <view class="mid_gap"></view>
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
              <view class="picker-value" v-else
                >{{ heights[heightIndex] }}cm</view
              >
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="../../../../assets/images/right.png"
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
              <view class="picker-value" v-else
                >{{ weights[weightIndex] }}kg</view
              >
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="../../../../assets/images/right.png"
            ></image>
          </view>
        </view>
      </picker>
      <picker
        @change="BWHChange"
        mode="multiSelector"
        :range="BWHs"
        v-model="BWHIndex"
      >
        <view class="item ub item-b">
          <view class="ub-f1 ub item_mid">
            <view class="item_label">三围</view>
            <view class="ub-f1 item_input">
              <view class="picker-value" v-if="BWHIndex.length">
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
              src="../../../../assets/images/right.png"
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
              <view class="picker-value" v-else>{{ shoes[shoeIndex] }}</view>
            </view>
          </view>
          <view class="item_right">
            <image
              mode="aspectFit"
              src="../../../../assets/images/right.png"
            ></image>
          </view>
        </view>
      </picker>
    </view>
    <view class="bottom_gap"></view>
    <cover-view
      :class="`subbtn_bottom_block ${isIphoneX ? 'fix-iphonex-button' : ''}`"
    >
      <cover-view class="subbtn_bottom">
        <button @tap="sub">下一步</button>
      </cover-view>
    </cover-view>
  </view>
</template>

<script>
import "./index.scss";
import { userShapeDetail } from "../../../../api/index";
import { errortip } from "../../../../utils/util";
export default {
  name: "inforother",
  data() {
    return {
      isIphoneX: false,
      birthday: "",
      avatar: "",
      nickname: "",
      sexs: ["请选择性别", "男", "女"],
      sex: "",
      heights: [],
      heightIndex: "",
      weights: [],
      weightIndex: "",
      shoes: [],
      shoeIndex: "",
      BWHs: [[], [], []],
      BWHIndex: Array(),
      isshowBWH: true,
      isshowBirthday: true,
      region: [],
    };
  },
  methods: {
    sexChange(e) {
      this.sex = e.detail.value;
    },
    birthdayChange(e) {
      this.birthday = String(e.detail.value);
    },
    heightChange(e) {
      this.heightIndex = String(e.detail.value);
    },
    weightChange(e) {
      this.weightIndex = String(e.detail.value);
    },
    BWHChange(e) {
      this.BWHIndex = String(e.detail.value);
    },
    shoeChange(e) {
      this.shoeIndex = String(e.detail.value);
    },
    sub() {
      if (!this.nickname) {
        errortip("请输入昵称");
        return false;
      }
      if (this.sex === "") {
        errortip("请选择性别");
        return false;
      }
      if (!this.birthday) {
        errortip("请选择生日");
        return false;
      }
      if (!this.heightIndex) {
        errortip("请选择身高");
        return false;
      }
      if (!this.weightIndex) {
        errortip("请选择体重");
        return false;
      }
      if (!this.BWHIndex.length) {
        errortip("请选择三围");
        return false;
      }
      if (!this.shoeIndex) {
        errortip("请选择鞋码");
        return false;
      }
      let carduserinfo = {
        avatar:
          "https://yuepai-oss.qubeitech.com/avatar/111111/2f6e9fa5-0353-11ee-8f34-812b5b24112e-qa60.jpg",
        nickname: "nickname",
        province: "province",
        city: "city",
        area: "area",
        province_name: "province_name",
        city_name: "city_name",
        area_name: "area_name",
        sex: 0,
        birthday: "1994-08-29",
        height: 100,
        weight: 200,
        bwh_b: 38,
        bwh_w: 39,
        bwh_h: 40,
        shoe: 41,
        is_bwh: true,
        is_birthday: true,
      };
      wx.setStorageSync("carduserinfo", carduserinfo);
      if ("vertical" == wx.getStorageSync("card-type")) {
        openPage("/packageMoka/pages/moka/makecardv/index");
      } else {
        openPage("/packageMoka/pages/moka/makecard/index");
      }
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
        // if (res.data.data.current_shape.height) {
        //   this.heightIndex = this.heights.findIndex((item) => {
        //     return item == res.data.data.current_shape.height;
        //   });
        // }
        // if (res.data.data.current_shape.weight) {
        //   this.weightIndex = this.weights.findIndex((item) => {
        //     return item == res.data.data.current_shape.weight;
        //   });
        // }
        // if (res.data.data.current_shape.bust) {
        //   this.BWHIndex[0] = this.BWHs[0].findIndex((item) => {
        //     return item == res.data.data.current_shape.bust;
        //   });
        // }
        // if (res.data.data.current_shape.waist) {
        //   this.BWHIndex[1] = this.BWHs[1].findIndex((item) => {
        //     return item == res.data.data.current_shape.waist;
        //   });
        // }
        // if (res.data.data.current_shape.hip) {
        //   this.BWHIndex[2] = this.BWHs[2].findIndex((item) => {
        //     return item == res.data.data.current_shape.hip;
        //   });
        // }
        // if (res.data.data.current_shape.size) {
        //   this.shoeIndex = this.shoes.findIndex((item) => {
        //     return item == res.data.data.current_shape.size;
        //   });
        // }
        // this.BWHIndex = JSON.parse(JSON.stringify(this.BWHIndex));
      } catch (error) {}
    },
  },
  created() {
    this.userShapeDetail("");
  },
};
</script>

<style lang="scss" scoped></style>
