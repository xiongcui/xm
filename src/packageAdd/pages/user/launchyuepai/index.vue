<template>
  <view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tipnone'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
        ></image>
      </view>
      <view class="none_tiptext">{{ result.message }}</view>
      <view catchtap="backpage" class="none_btn">返回首页</view>
    </view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tiprealname'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
        ></image>
      </view>
      <view class="none_tiptext">对方需要你实名才能报名～</view>
      <view catchtap="goRealname" class="none_btn">去实名</view>
    </view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tippledge'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
        ></image>
      </view>
      <view class="none_tiptext">对方需要你交纳保证金才能报名～</view>
      <view catchtap="pledgeCash" class="none_btn">交纳保证金</view>
    </view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tipvip'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
        ></image>
      </view>
      <view class="none_tiptext">对方需要会员才能报名</view>
      <view catchtap="goVip" class="none_btn">去充值会员</view>
    </view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tipmadou'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
        ></image>
      </view>
      <view class="none_tiptext">金豆不足！</view>
      <view catchtap="goCoin" class="none_btn">去获取金豆</view>
    </view>
    <view class="main ub ub-ver none_main" v-if="pageshow == 'tiphasmeet'">
      <view class="none_tipimg">
        <image
          mode="widthFix"
          src="https://yuepai-oss.qubeitech.com/static/images/common/tip_success.png"
        ></image>
      </view>
      <view class="none_tiptext">您已经报过名了</view>
    </view>
    <view class="main none_main" v-if="pageshow == 'sub_success'">
      <view catchtap="tipSub" class="toptip fl">
        <image
          class="toptip_icon"
          src="https://yuepai-oss.qubeitech.com/static/images/common/tongzhi3.png"
        ></image>
        <view class="toptip_text fl-g1">关注公众号及时接收消息通知</view>
        <view class="toptip_btn">关注</view>
      </view>
      <view class="subtip_img">
        <image
          mode="widthFix"
          src="https://yuepai-oss.qubeitech.com/static/images/common/tip_success.png"
        ></image>
      </view>
      <view class="subtip_title">报名成功</view>
      <view class="subtip_tiptext">您的报名请求发送成功，等待对方联系您~</view>
      <view catchtap="backpage" class="subtip_btn">返回</view>
    </view>
    <view v-if="pageshow == 'normal'">
      <view catchtap="" class="toptip ub">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/icon_tongzhi.png"
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
                  src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                  class="yuepai_sex"
                  v-if="yuepaiInfo.author.sex == 1"
                ></image>
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
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
          v-model="yuepaiInfo.content"
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
        <view @tap="editContact" class="info_item ub" v-if="showContact">
          <view class="info_type">
            <view class="type_icon">
              <image
                mode="widthFix"
                src="https://yuepai-oss.qubeitech.com/static/images/tonggao/user.png"
              ></image>
            </view>
            <view class="type_text">我的联系信息</view>
          </view>
          <view class="info_content ub ub-ver ub-f1">
            <view class="ub-f1"></view>
            <view class="content_text"
              >联系人：{{
                data.contact.person ? data.contact.person : "未设置"
              }}</view
            >
            <view v-if="data.contact.is_mobile"
              >手机号：{{
                data.contact.mobile ? data.contact.mobile : "未设置"
              }}</view
            >
            <view class="content_text" v-if="data.contact.is_wechat"
              >微信号：{{ data.contact.wechat ? data.contact.wechat : "未设置"
              }}<text
                class="qrcode"
                v-if="data.contact.wechat_links"
                @tap.stop="showQRcode"
                >查看二维码</text
              ></view
            >
            <view class="ub-f1"></view>
          </view>
          <view class="info_btn">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/right.png"
            ></image>
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
                src="https://yuepai-oss.qubeitech.com/static/images/tonggao/reg_hongren.png"
              ></image>
            </view>
            <view class="type_text">红人账号</view>
          </view>
          <view
            class="info_content ub ub-ver ub-f1"
            v-if="data.celebrity.nickname"
          >
            <view class="ub-f1"></view>
            <view class="content_text"
              >昵称：{{ data.celebrity.nickname }}</view
            >
            <view class="content_text"
              >粉丝：{{ data.celebrity.fans_number }}</view
            >
            <view class="ub-f1"></view>
          </view>
          <view class="info_content_none ub ub-f1" v-else>
            <view class="add_icon">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
              ></image>
            </view>
            <view class="add_text">选择账号</view>
          </view>
          <view class="info_btn">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/right.png"
            ></image>
          </view>
        </view>
        <view @tap="chooseAddress" class="info_item ub" v-if="showAddress">
          <view class="info_type">
            <view class="type_icon">
              <image
                mode="widthFix"
                src="https://yuepai-oss.qubeitech.com/static/images/tonggao/reg_address.png"
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
                src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
              ></image>
            </view>
            <view class="add_text">选择地址</view>
          </view>
          <view class="info_btn">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/right.png"
            ></image>
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
              <text class="vip-tips" v-if="!is_member">
                开通会员仅需2金豆 >>
              </text>
            </view>
            <view class="surplus_coin">剩余：{{ balance_coin }} 金豆</view>
          </view>
          <view class="ub-f1"></view>
          <view class="sub_btn">
            <button @tap="submit" type="primary">确认提交</button>
          </view>
        </block>
        <view class="subbtn_bottom" v-else>
          <button @tap="submit" type="primary">确认提交</button>
        </view>
      </view>
    </view>
    <view class="modal_box" v-if="visible">
      <view>
        <view class="modal_title">温馨提示</view>
        <view class="modal_content">
          <view class="comment_content">
            提交约拍请求需要消耗{{ pay_coin }}积分，确定发送吗？
          </view>
          <view class="ub commentbox">
            <view class="comment_cancel ub-f1">
              <view @tap="closecomment">取消</view>
            </view>
            <view class="comment_confirm ub-f1">
              <view @tap="paysubmit">确认</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="modal_box" v-if="showModel">
      <view class="modal_content">
        <view> 微信二维码 </view>
        <image class="qrcode-img" :src="data.contact.wechat_links"></image>
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png"
          class="close-img"
          @tap="closeQRcode"
        ></image>
        <view class="save" @tap="clickSaveImg">保存到相册</view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { inviteTemplate, subApply, applyPay } from "../../../../api/index";
import { errortip, openPage } from "../../../../utils/util";
export default {
  name: "launchyuepai",
  data() {
    return {
      oid: "",
      visited_id: "",
      isIphoneX: false,
      pageshow: "normal",
      showModel: false,
      showTipModel: false,
      pay_coin: 0,
      balance_coin: 0,
      is_member: 0,
      visible: false,
      sid: "",
      rule_code: "",
      yuepaiInfo: {
        title: "",
        content: "",
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
    closecomment() {
      this.visible = false;
    },
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
    chooseAddress() {
      openPage(
        "/packageAdd/pages/user/addresslist/index?oid=" + this.data.address.oid
      );
    },
    editContact() {
      openPage("/packageAdd/pages/user/contact/index");
    },
    submit() {
      if (!this.yuepaiInfo.content) {
        errortip("请输入" + this.yuepaiInfo.title);
        return false;
      }
      if (this.showCelebrity && !this.data.celebrity.nickname) {
        errortip("请选择红人账号");
        return false;
      }
      if (this.showAddress && !this.data.address.name) {
        errortip("请选择收货地址");
        return false;
      }
      let params = {
        oid: this.oid,
        type: "NT",
        visited_id: this.visited_id,
        content: this.yuepaiInfo.content,
        contact: this.data.contact,
        celebrity: this.data.celebrity,
        address: this.data.address,
        visitor_coin: this.pay_coin,
      };
      this.subApply(params);
    },
    paysubmit() {
      let params = {
        sid: this.sid,
        rule_code: this.rule_code,
      };
      this.applyPay(params);
    },
    clickSaveImg() {
      //先授权相册
      wx.getSetting({
        success: (res) => {
          if (!res.authSetting["scope.writePhotosAlbum"]) {
            //未授权的话发起授权
            wx.authorize({
              scope: "scope.writePhotosAlbum",
              success: () => {
                //用户允许授权，保存到相册
                this.saveImg();
              },
              fail: () => {
                //用户拒绝授权，然后就引导授权（这里的话如果用户拒绝，不会立马弹出引导授权界面，坑就是上边所说的官网原因）
                wx.openSetting({
                  success: () => {
                    wx.authorize({
                      scope: "scope.writePhotosAlbum",
                      succes: () => {
                        //授权成功，保存图片
                        this.saveImg();
                      },
                    });
                  },
                });
              },
            });
          } else {
            //已经授权
            this.saveImg();
          }
        },
      });
    },
    saveImg() {
      //保存到相册
      let url = this.data.contact.wechat_links;
      wx.downloadFile({
        //这里如果有报错就按照上边的解决方案来处理
        url: url,
        success: (res) => {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: (res) => {
              wx.showToast({
                title: "保存成功！",
              });
            },
            faile: (err) => {
              console.log("失败！");
            },
          });
        },
      });
    },
    async inviteTemplate(params) {
      try {
        let res = await inviteTemplate(params);
        this.yuepaiInfo.author = res.data.data.visited;
        this.yuepaiInfo.tips = res.data.data.input.tips;
        this.yuepaiInfo.title = res.data.data.input.title;
        this.yuepaiInfo.warning = res.data.data.warning;
        if (res.data.data.contact) {
          this.showContact = res.data.data.contact.is_enable;
          this.data.contact = res.data.data.contact.body;
        }
        if (res.data.data.celebrity) {
          this.showCelebrity = res.data.data.celebrity.is_enable;
          this.data.celebrity = res.data.data.celebrity.body;
          this.media_info.platform_name = this.data.celebrity.platform_name =
            res.data.data.celebrity.body.platform_name;
          this.media_info.platform_code = this.data.celebrity.platform_type =
            res.data.data.celebrity.body.platform_type;
        }
        if (res.data.data.visitor_acct) {
          this.pay_coin = res.data.data.visitor_acct.pay_coin;
          this.balance_coin = res.data.data.visitor_acct.balance_coin;
        }
        if (res.data.data.address) {
          this.showAddress = res.data.data.address.is_enable;
          this.data.address = res.data.data.address.body;
        }
        this.visited_id = res.data.data.visited_id;
        this.is_member = res.data.data.visitor_acct.is_member;
      } catch (error) {}
    },
    async subApply(params) {
      try {
        let res = await subApply(params);
        this.visible = true;
        this.sid = res.data.data.sid;
        this.rule_code = res.data.data.rule_code;
      } catch (error) {}
    },
    async applyPay(params) {
      try {
        let res = await applyPay(params);
        openPage(`/packageAdd/pages/tips/index?type=2&msg=${res.data.data}`);
      } catch (error) {
        openPage(`/packageAdd/pages/tips/index?type=3&msg=${error.data.msg}`);
      }
    },
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
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
    if (currPage.data.address) {
      this.data.address = currPage.data.address;
    }
    if (currPage.data.contact) {
      this.data.contact = currPage.data.contact;
    }
  },
};
</script>

<style lang="scss" scoped></style>
