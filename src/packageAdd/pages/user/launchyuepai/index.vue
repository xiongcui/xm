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
        <!-- <view class="yuepai_top_rt"> 1小时来过 </view> -->
      </view>
      <view class="reg_remark">
        <view class="reg_title ub">
          <view class="title_icon"></view>
          <view class="title_text">{{ yuepaiInfo.title }}</view>
        </view>
        <textarea
          id=""
          name="content"
          :placeholder="yuepaiInfo.tips"
          placeholderClass="placeholder_style"
        ></textarea>
      </view>
      <view class="reg_info">
        <view class="reg_title ub">
          <view class="title_icon"></view>
          <view class="title_text"
            >申请信息<text style="color: rgba(0, 0, 0, 0.3)"
              >（确保准确）</text
            ></view
          >
        </view>
        <view catchtap="editContact" class="info_item ub" v-if="showContact">
          <view class="info_type">
            <view class="type_icon">
              <image
                mode="widthFix"
                src="../../../../assets/images/tonggao/user.png"
              ></image>
            </view>
            <view class="type_text">我的联系信息</view>
          </view>
          <view class="info_content ub ub-ver ub-f1" @tap="showQRcode">
            <view class="ub-f1"></view>
            <view class="content_text"
              >联系人：{{
                data.contact.person ? data.contact.person : "未设置"
              }}</view
            >
            <view
              >手机号：{{
                data.contact.mobile ? data.contact.mobile : "未设置"
              }}</view
            >
            <view class="content_text"
              >微信号：{{ data.contact.wechat ? data.contact.wechat : "未设置"
              }}<text class="qrcode" v-if="data.contact.wechat_links"
                >查看二维码</text
              ></view
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
          v-if="showCelebrity"
          @tap="goSensationlist"
        >
          <text class="hr_icon">{{ media_info.platform_name }}</text>
          <view class="info_type">
            <view class="type_icon">
              <image
                mode="widthFix"
                src="../../../../assets/images/tonggao/reg_hongren.png"
              ></image>
            </view>
            <view class="type_text">红人账号</view>
          </view>
          <view
            class="info_content ub ub-ver ub-f1"
            v-if="data.celebrity.nickname"
          >
            <view class="ub-f1"></view>
            <view class="content_text">{{ data.celebrity.nickname }}</view>
            <view class="content_text"
              >粉丝：{{ data.celebrity.fans_number }}</view
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
        <view catchtap="chooseAddress" class="info_item ub" v-if="showAddress">
          <view class="info_type">
            <view class="type_icon">
              <image
                mode="widthFix"
                src="../../../../assets/images/tonggao/reg_address.png"
              ></image>
            </view>
            <view class="type_text">收货地址</view>
          </view>
          <view class="info_content ub ub-ver ub-f1" v-if="data.address.name">
            <view class="ub-f1"></view>
            <view class="content_text">{{ data.address.name }}</view>
            <view class="content_text">手机号：{{ data.address.mobile }}</view>
            <view class="content_address"
              >地址：{{ data.address.detail_address }}</view
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
        <view
          >{{ yuepaiInfo.warning
          }}<text catchtap="jubao" class="complain">「投诉」</text>
        </view>
      </view>
      <view class="bottom ub" :class="isIphoneX ? 'fix-iphonex-button' : ''">
        <block v-if="pay_coin > 0">
          <view class="bottom_coin">
            <view class="needcoin">
              <text> {{ pay_coin }} 金豆 </text>
              <text class="vip-tips"> 开通会员仅需2金豆 >> </text>
            </view>
            <view class="surplus_coin">剩余：{{ balance_coin }} 金豆</view>
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
    <view class="modal_box" v-if="showModel">
      <view class="modal_content">
        <view> 微信二维码 </view>
        <image
          class="qrcode-img"
          src="https://yuepai-oss.oss-cn-zhangjiakou.aliyuncs.com/invite/upVg5cIs/41625d80-73b2-11ed-ae45-473a871aac32.jpg"
        ></image>
        <image
          src="../../../../assets/images/common/x_icon.png"
          class="close-img"
          @tap="closeQRcode"
        ></image>
        <view class="save">保存到相册</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { inviteTemplate } from "../../../../api/index";
import { openPage } from "../../../../utils/util";
export default {
  name: "launchyuepai",
  data() {
    return {
      oid: "",
      isIphoneX: false,
      pageshow: "normal",
      showModel: false,
      showTipModel: false,
      pay_coin: 0,
      balance_coin: 0,
      yuepaiInfo: {
        title: "",
        warning: "",
        author: {
          avatar: "",
          nickname: "",
          sex: 0,
          career_list: [],
          province_name: "",
        },
      },
      showContact: false,
      showCelebrity: false,
      showAddress: false,
      data: {
        contact: {
          person: "",
          wechat: "",
          wechat_links: "",
          mobile: "",
        },
        celebrity: {
          oid: "",
          nickname: "",
          fans_number: "",
        },
        address: {
          oid: "",
          detail_address: "",
          mobile: "",
          name: "",
        },
      },
      media_info: {
        platform_name: "",
        platform_code: "",
      },
    };
  },
  methods: {
    showQRcode() {
      this.showModel = true;
    },
    closeQRcode() {
      this.showModel = false;
    },
    goSensationlist() {
      openPage(
        "/packageAdd/pages/user/sensationlist/index?platform_code=" +
          this.media_info.platform_code +
          "&platform_name=" +
          this.media_info.platform_name +
          "&oid=" +
          this.data.celebrity.oid
      );
    },
    async inviteTemplate(params) {
      try {
        let res = await inviteTemplate(params);
        console.log(res);
        this.yuepaiInfo.author = res.data.data.visited;
        this.yuepaiInfo.tips = res.data.data.tips;
        this.yuepaiInfo.title = res.data.data.title;
        this.yuepaiInfo.warning = res.data.data.warning;

        this.showContact = res.data.data.contact.is_enable;
        this.showCelebrity = res.data.data.celebrity.is_enable;
        this.showAddress = res.data.data.address.is_enable;

        this.data.contact = res.data.data.contact.body;
        // res.data.data.celebrity = {
        //   body: {
        //     date_humanize: "1天前",
        //     fans_number: 600,
        //     nickname: "小摄影红书",
        //     platform_code: 201,
        //     platform_name: "红薯",
        //   },
        //   is_enable: 1,
        //   platform_name: "红薯",
        //   platform_type: "201",
        // };
        // res.data.data.address = {
        //   body: {
        //     detail_address: "北京市石景山区惠新西街5号院",
        //     mobile: 13716186230,
        //     name: "王先生",
        //   },
        //   is_enable: 1,
        // };
        this.data.celebrity = res.data.data.celebrity.body;
        this.data.address = res.data.data.address.body;
        this.media_info.platform_name = res.data.data.celebrity.platform_name;
        this.media_info.platform_code = res.data.data.celebrity.platform_type;
        this.pay_coin = res.data.data.visitor.pay_coin;
        this.balance_coin = res.data.data.visitor.balance_coin;
      } catch (error) {}
    },
  },
  onLoad: function (options) {
    this.oid = options.oid;
    this.inviteTemplate({
      oid: this.oid,
    });
  },
  onShow() {
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1]; //当前页面
    if (currPage.data.celebrity) {
      this.data.celebrity = currPage.data.celebrity;
    }
  },
};
</script>

<style lang="scss" scoped></style>
