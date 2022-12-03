<template>
  <view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tipnone'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="../../../../assets/images/common/none.png"
        ></image>
      </view>
      <view class="none_tiptext">{{ result.message }}</view>
      <view catchtap="backpage" class="none_btn">返回首页</view>
    </view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tiprealname'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="../../../../assets/images/common/none.png"
        ></image>
      </view>
      <view class="none_tiptext">对方需要你实名才能报名～</view>
      <view catchtap="goRealname" class="none_btn">去实名</view>
    </view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tippledge'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="../../../../assets/images/common/none.png"
        ></image>
      </view>
      <view class="none_tiptext">对方需要你交纳保证金才能报名～</view>
      <view catchtap="pledgeCash" class="none_btn">交纳保证金</view>
    </view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tipvip'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="../../../../assets/images/common/none.png"
        ></image>
      </view>
      <view class="none_tiptext">对方需要会员才能报名</view>
      <view catchtap="goVip" class="none_btn">去充值会员</view>
    </view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tipmadou'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="../../../../assets/images/common/none.png"
        ></image>
      </view>
      <view class="none_tiptext">金豆不足！</view>
      <view catchtap="goCoin" class="none_btn">去获取金豆</view>
    </view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tiphasmeet'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="../../../../assets/images/common/tip_success.png"
        ></image>
      </view>
      <view class="none_tiptext">您已经报过名了</view>
    </view>
    <view class="main none_main" v-if="pageshow == 'sub_success'">
      <view catchtap="tipSub" class="toptip fl">
        <image
          class="toptip_icon"
          src="../../../../assets/images/common/tongzhi3.png"
        ></image>
        <view class="toptip_text fl-g1">关注公众号及时接收消息通知</view>
        <view class="toptip_btn">关注</view>
      </view>
      <view class="subtip_img">
        <image
          mode="widthFix"
          src="../../../../assets/images/common/tip_success.png"
        ></image>
      </view>
      <view class="subtip_title">报名成功</view>
      <view class="subtip_tiptext">您的报名请求发送成功，等待对方联系您~</view>
      <view catchtap="backpage" class="subtip_btn">返回</view>
    </view>
    <form
      bindreset="reset"
      bindsubmit="sub"
      reportSubmit="true"
      v-if="pageshow == 'normal'"
    >
      <view catchtap="" class="toptip ub">
        <image
          src="../../../../assets/images/common/icon_tongzhi.png"
          mode="widthFix"
          class="warning"
        ></image>
        <view class="toptip_text ub-f1"
          >安全提示：①切勿独自与陌生人在室内约拍；②请勿相信未见面先收费的合作；③切勿轻信兼职刷单、虚拟网购等骗局。</view
        >
      </view>
      <view class="yuepai_top">
        <view class="yuepai_top_left">
          <image :src="yuepaiInfo.author.avatar" class="avatar"></image>
          <view class="yuepai_info">
            <view class="yuepai_name">
              {{ yuepaiInfo.author.nickname }}
              <block v-if="yuepaiInfo.author.sex !== null">
                <image
                  src="../../../../assets/images/nan.png"
                  class="yuepai_sex"
                  v-if="yuepaiInfo.author.sex == 1"
                ></image>
                <image
                  src="../../../../assets/images/nv.png"
                  class="yuepai_sex"
                  v-if="yuepaiInfo.author.sex == 0"
                ></image>
              </block>
            </view>
            <view class="yuepai_p">
              <text>
                {{ yuepaiInfo.author.career_list[0] }} |
                {{ yuepaiInfo.author.province_name }}
              </text>
            </view>
          </view>
        </view>
        <view class="yuepai_top_rt"> 1小时来过 </view>
      </view>
      <view class="reg_remark">
        <view class="reg_title ub">
          <view class="title_icon"></view>
          <view class="title_text">约拍理由</view>
        </view>
        <textarea
          id=""
          name="content"
          placeholder="请简要输入约拍理由"
          placeholderClass="placeholder_style"
        ></textarea>
      </view>
      <view class="reg_info">
        <view class="reg_title ub">
          <view class="title_icon"></view>
          <view class="title_text"
            >报名信息<text style="color: rgba(0, 0, 0, 0.3)"
              >（确保准确）</text
            ></view
          >
        </view>
        <view catchtap="editContact" class="info_item ub">
          <view class="info_type">
            <view class="type_icon">
              <image
                mode="widthFix"
                src="../../../../assets/images/tonggao/user.png"
              ></image>
            </view>
            <view class="type_text">我的联系信息</view>
          </view>
          <view class="info_content ub ub-ver ub-f1">
            <view class="ub-f1"></view>
            <view class="content_text"
              >联系人：{{ data.contact.contact_name }}</view
            >
            <view v-if="data.contact.phone"
              >手机号：{{ data.contact.phone }}</view
            >
            <view class="content_text" v-if="data.contact.wxid"
              >微信号：{{ data.contact.wxid
              }}<text class="qrcode">查看二维码</text></view
            >
            <view class="ub-f1"></view>
          </view>
          <view class="info_btn">
            <image src="../../../../assets/images/right.png"></image>
          </view>
        </view>
        <view
          catchtap="chooseFans"
          class="info_item ub"
          v-if="data.show_hongren"
        >
          <image class="hr_icon" :src="media_info.logo_mini"></image>
          <view class="info_type">
            <view class="type_icon">
              <image
                mode="widthFix"
                src="../../../../assets/images/tonggao/reg_hongren.png"
              ></image>
            </view>
            <view class="type_text">红人账号</view>
          </view>
          <view class="info_content ub ub-ver ub-f1" v-if="regdata_fans">
            <view class="ub-f1"></view>
            <view class="content_text">{{ regdata_fans.nickname }}</view>
            <view class="content_text"
              >粉丝：{{ regdata_fans.follow_count }}</view
            >
            <view class="ub-f1"></view>
          </view>
          <view class="info_content_none ub ub-f1" v-else>
            <view class="add_icon">
              <image
                src="../../../../assets/images/common/add_icon.png"
              ></image>
            </view>
            <view class="add_text">选择账号</view>
          </view>
          <view class="info_btn">
            <image src="../../../../assets/images/right.png"></image>
          </view>
        </view>
        <view
          catchtap="chooseAddress"
          class="info_item ub"
          v-if="data.show_address"
        >
          <view class="info_type">
            <view class="type_icon">
              <image
                mode="widthFix"
                src="../../../../assets/images/tonggao/reg_address.png"
              ></image>
            </view>
            <view class="type_text">收货地址</view>
          </view>
          <view
            class="info_content ub ub-ver ub-f1"
            v-if="regdata_address.contact_name"
          >
            <view class="ub-f1"></view>
            <view class="content_text">{{ regdata_address.contact_name }}</view>
            <view class="content_text"
              >手机号：{{ regdata_address.phone }}</view
            >
            <view class="content_address"
              >地址：{{ regdata_address.full_address }}</view
            >
            <view class="ub-f1"></view>
          </view>
          <view class="info_content_none ub ub-f1" v-else>
            <view class="add_icon">
              <image
                src="../../../../assets/images/common/add_icon.png"
              ></image>
            </view>
            <view class="add_text">选择地址</view>
          </view>
          <view class="info_btn">
            <image src="../../../../assets/images/right.png"></image>
          </view>
        </view>
      </view>
      <view class="prompt">
        <view>温馨提示：</view>
        <view
          >双方私下沟通时注意防骗，切勿相信先缴纳费用的合作。如遇虚假通告、敲诈信息等不良行为，请立即向平台<text
            catchtap="jubao"
            class="complain"
            >「投诉」</text
          >
        </view>
      </view>
      <view class="bottom ub" :class="isIphoneX ? 'fix-iphonex-button' : ''">
        <block v-if="need_coin > 0">
          <view class="bottom_coin">
            <view class="needcoin">
              <text> {{ need_coin }} 金豆 </text>
              <text class="vip-tips"> 开通会员仅需2金豆 >> </text>
            </view>
            <view class="surplus_coin">剩余：{{ coin }} 金豆</view>
          </view>
          <view class="ub-f1"></view>
          <view class="sub_btn">
            <button formType="submit" type="primary">确认提交</button>
          </view>
        </block>
        <view class="subbtn_bottom" v-else>
          <button formType="submit" type="primary">确认提交</button>
        </view>
      </view>
    </form>
    <view
      bindtap="closecomment"
      catchtouchmove="kong"
      class="modal_bg"
      v-if="showModel || showTipModel"
    ></view>
    <view class="modal_box" v-if="false">
      <form
        bindreset="reset"
        bindsubmit="subcomment"
        class="main"
        reportSubmit="true"
      >
        <view class="modal_title">温馨提示</view>
        <view class="modal_content">
          <view class="comment_content">
            提交约拍请求需要消耗5积分，当前剩余8积分！
          </view>
        </view>
        <view class="ub">
          <view class="comment_cancel ub-f1">
            <button bindtap="closecomment" size="default">取消</button>
          </view>
          <view class="comment_confirm ub-f1">
            <button formType="submit" size="default">确认</button>
          </view>
        </view>
      </form>
    </view>
  </view>
</template>

<script>
import "./index.scss";
export default {
  name: "launchyuepai",
  data() {
    return {
      isIphoneX: false,
      pageshow: "normal",
      showModel: false,
      showTipModel: false,
      need_coin: 1,
      coin: 0,
      yuepaiInfo: {
        author: {
          avatar: "",
          nickname: "",
          sex: 0,
          career_list: ["11"],
          province_name: "beijing",
        },
      },
      data: {
        show_hongren: true,
        show_address: true,
        contact: {
          contact_name: "熊翠",
          wxid: "22",
          phone: 13693628075,
        },
      },
      media_info: {
        logo_mini: "",
      },
      regdata_fans: {
        nickname: "nickname",
        follow_count: 100,
      },
      //   regdata_fans: null,
      regdata_address: {
        contact_name: "熊翠",
        phone: 13693628075,
        full_address: "惠新里223号楼",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
