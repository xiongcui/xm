<template>
  <view
    class="activity-detail"
    :style="{
      overflow: visible ? 'hidden' : 'auto',
      height: visible ? 'calc(100vh - 300px)' : 'auto',
    }"
  >
    <view class="activity-cover">
      <image mode="aspectFill" :src="desc_cover"></image>
    </view>
    <view class="activity-ct">
      <view class="activity-top">
        <view class="activity-left">
          <view class="activity-price">
            <text v-if="current_price !== '免费' && current_price !== '置换'"
              >¥</text
            >
            {{ current_price }}
          </view>
          <!-- <view class="original-price"
            >
            <text v-if="original_price !== '免费' && original_price !== '置换'"
              >原价</text
            >¥{{ original_price }}
            </view
          > -->
        </view>
        <view class="activity-right">
          <text>报名结束时间</text>
          <text>{{ enter_deadline_time }}</text>
        </view>
      </view>
      <view class="activity-title"> {{ title }} </view>
      <view class="activity-info">
        <view class="activity-tags">
          <view class="tag" v-for="(item, index) in label" :key="index">{{
            item
          }}</view>
        </view>
      </view>
    </view>
    <view class="service">
      <view class="service-item" @tap="showSession">
        <view class="service-label">
          <image src="../../../assets/images/scene-icon.png"></image>
          场景
        </view>
        <view class="service-content" v-if="scene.scene_name">
          <view class="service-title service-acitve">
            <text>{{ scene.scene_name }}</text>
            <text v-if="selectedRole[0] && selectedRole.length">
              | {{ selectedRole[0] && selectedRole[0].roles_name }}</text
            >
          </view>
        </view>
        <view class="service-content" v-else>
          <view class="service-select"> {{ scenemsg }} </view>
        </view>
        <view class="service-right">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_down.png"
          ></image>
        </view>
      </view>
      <view class="service-item" v-if="required_certify && return_security">
        <view class="service-box">
          <view class="service-label">
            <image src="../../../assets/images/security.png"></image>
            担保
          </view>
          <view class="service-txt">
            <text class="deposit">
              {{ required_certify }}
            </text>
            <text class="deposit-tips">
              {{ return_security }}
            </text>
          </view>
        </view>
        <view class="service-right">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_down.png"
          ></image>
        </view>
      </view>
      <view class="service-item">
        <view class="service-box">
          <view class="service-label">
            <image src="../../../assets/images/time-icon.png"></image>
            时间
          </view>
          <view class="service-txt"> {{ time }} </view>
        </view>
      </view>
      <view class="service-item">
        <view class="service-box">
          <view class="service-label">
            <image src="../../../assets/images/address-icon.png"></image>
            地点
          </view>
          <view class="service-txt"> {{ address }} </view>
        </view>
      </view>
      <view class="service-item">
        <view class="service-box">
          <view class="service-label">
            <image src="../../../assets/images/site-icon.png"></image>
            场地
          </view>
          <view class="service-txt"> </view>
        </view>
      </view>
    </view>
    <!-- <view class="service">
      <view class="service-item" @tap="showSession">
        <view class="service-label"> 场次 </view>
        <view
          class="service-content"
          v-if="scene.scene_name && scene.scene_desc"
        >
          <view class="service-title">
            <text>{{ scene.scene_name }}</text>
            <text v-if="selectedGroup.length"
              >| {{ selectedGroup[0].group_name }}</text
            >
            <text v-if="selectedTeams.length"
              >| {{ selectedTeams[0].teams_name }}</text
            >
          </view>
          <view class="service-p">
            <view class="service-tag">{{ scene.divide_teams }}</view>
            <view>{{ scene.scene_desc }}</view>
          </view>
        </view>
        <view class="service-content" v-else>
          <view class="service-select"> {{ scenemsg }} </view>
        </view>
        <view class="service-right">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_down.png"
          ></image>
        </view>
      </view>
      <view class="service-item" @tap="showSession">
        <view class="service-box">
          <view class="service-label"> 服务 </view>
          <view class="service-txt">{{ service }}</view>
        </view>
        <view class="service-right">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_down.png"
          ></image>
        </view>
      </view>
    </view> -->
    <view class="specially-invite" v-if="invitedList.length">
      <view class="specially-invite-title">
        <text class="border-left"></text>
        特邀嘉宾
      </view>
      <view class="specially-invite-box">
        <view
          class="specially-invite-item"
          v-for="(item, index) in invitedList"
          :key="index"
        >
          <image :src="item.apply_avatar"></image>
          <view class="specially-invite-txt">{{ item.apply_nickname }}</view>
          <view class="specially-invite-txt">{{ item.apply_career }}</view>
        </view>
      </view>
    </view>
    <view class="registered">
      <view class="registered-title">
        <view>
          <text class="border-left"></text>
          已报名
          <text class="registered-num">{{ enter_current_babel }}</text>
        </view>
        <view class="expand" v-if="!open" @tap="expand">
          展开
          <image
            class="down"
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_down.png"
          ></image>
        </view>
        <view class="expand" v-else @tap="expand">
          收起
          <image
            class="up"
            src="https://yuepai-oss.qubeitech.com/static/images/common/icon_down.png"
          ></image>
        </view>
      </view>
      <view class="registered-img" v-if="!open">
        <image
          v-for="(item, index) in enter_current_member"
          :key="index"
          :src="item"
        ></image>
      </view>
      <view class="application-list" v-else>
        <view
          class="application-list-item"
          v-for="(item, index) in memberList"
          :key="index"
        >
          <view class="application-title"> {{ item.scene_name }} </view>
          <view
            class="application-box"
            v-for="(sceneItem, sceneIndex) in item.scene_items"
            :key="sceneIndex"
          >
            <view class="application-role" v-if="sceneItem.is_show_roles_name"
              ><text>{{ sceneItem.roles_name }}</text></view
            >
            <view class="application-tip">{{ sceneItem.apply_desc }}</view>
            <view
              class="application-user"
              v-for="(user, userIndex) in sceneItem.apply_items.listed"
              :key="userIndex"
            >
              <view class="application-left">
                <image :src="user.apply_avatar"></image>
                <text>{{ user.apply_nickname }}</text>
              </view>
              <view class="application-ct">
                <block v-if="user.sex !== null">
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/boy.png"
                    v-if="user.sex == 1"
                  ></image>
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/girl.png"
                    v-if="user.sex == 0"
                  ></image>
                </block>
                <text>{{ user.apply_career }}</text>
              </view>
              <view class="application-rt" @tap="goZhuye(user.apply_uuid)"
                >看主页</view
              >
            </view>
            <view class="gradeing" v-if="sceneItem.apply_items.waiting.length">
              <text>等位中</text>
            </view>
            <view
              class="application-user"
              v-for="(waituser, waituserIndex) in sceneItem.apply_items.waiting"
              :key="waituserIndex"
            >
              <view class="application-left">
                <image :src="waituser.apply_avatar"></image>
                <text>{{ waituser.apply_nickname }}</text>
              </view>
              <view class="application-ct">
                <block v-if="waituser.sex !== null">
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/boy.png"
                    v-if="waituser.sex == 1"
                  ></image>
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/girl.png"
                    v-if="waituser.sex == 0"
                  ></image>
                </block>
                <text>{{ waituser.apply_career }}</text>
              </view>
              <view class="application-rt" @tap="goZhuye(waituser.apply_uuid)"
                >看主页</view
              >
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="userinfo">
      <view class="userinfo-box">
        <view class="userinfo-top">
          <image :src="avatar"></image>
          <view class="userinfo-content">
            <view class="userinfo-title"> {{ nickname }} </view>
            <view class="userinfo-lable-box">
              <text class="self-support">{{ labelTxt }}</text>
              <text class="lable">发布活动 ｜ {{ publish_num }}场</text>
              <text class="lable">好评率 ｜ {{ evaluate_score }}</text>
            </view>
          </view>
        </view>
        <view class="userinfo-btns">
          <view class="gohome" @tap="goZhuye">
            <!-- <image
              src="https://yuepai-oss.qubeitech.com/static/images/home-icon.png"
            ></image> -->
            进入主页
          </view>
          <view class="contact" @tap="communicate">
            <!-- <image
              src="https://yuepai-oss.qubeitech.com/static/images/phone-icon.png"
            ></image> -->
            联系沟通
          </view>
        </view>
      </view>

      <view class="evaluate">
        <view class="evaluate-title">
          <view class="evaluate-left">
            <text class="evaluate-label"> 评价 </text>
            <text class="evaluate-num">({{ commentTotal }})</text>
          </view>
          <view class="evaluate-rt" @tap="goComment">好评度96% ></view>
        </view>
        <view class="evaluate-list">
          <view
            class="evaluate-item"
            v-for="(item, index) in commentList"
            :key="index"
          >
            <view class="evaluate-list-top">
              <image :src="item.comment_avatar"></image>
              <view class="evaluate-list-info">
                <view class="evaluate-nickname">{{
                  item.comment_nickname
                }}</view>
                <i-rate
                  class="evaluate-rate"
                  :size="16"
                  :value="item.score"
                  :key="index"
                >
                </i-rate>
              </view>
            </view>
            <view class="evaluate-desc"> {{ item.content }}</view>
          </view>
          <!-- <view class="evaluate-item">
            <view class="evaluate-list-top">
              <image
                src="https://yuepai-oss.qubeitech.com/avatar/195034/c52c097f-369c-11ee-8f44-812b5b24112e-qa60.jpg"
              ></image>
              <view class="evaluate-list-info">
                <view class="evaluate-nickname">Anne</view>
                <i-rate
                  class="evaluate-rate"
                  @change="rateChange"
                  :size="16"
                  :value="rateindex"
                  :key="2"
                >
                </i-rate>
              </view>
            </view>
            <view class="evaluate-desc"> 内容内容内容内容内容内容内容内容</view>
          </view> -->
        </view>
      </view>
      <view class="share-show">
        <view class="share-show-title">
          <view class="share-show-left">
            <text class="share-show-label"> 分享秀 </text>
            <text class="share-show-num">(100人正在参与分享)</text>
          </view>
          <view class="share-show-rt" @tap="goShareShow">查看全部 ></view>
        </view>
        <view class="share-show-list">
          <view
            class="share-show-item"
            v-for="(item, index) in sharingList"
            :key="index"
          >
            <image mode="aspectFill" :src="item.share_cover[0]"></image>
            <text class="share-show-txt">{{ item.share_content }}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="event-details">
      <view class="event-title">
        <text class="border-left"></text>
        活动详情
      </view>
      <block v-if="contentType == 'text'">
        <view class="activity-desc"> {{ content }} </view>
        <image
          v-for="(item, index) in desc_detail_cover"
          :key="index"
          :src="item"
          mode="widthFix"
        ></image>
      </block>
      <rich-text v-else :nodes="content"></rich-text>
    </view>
    <view class="notes">
      <view class="event-title">
        <text class="border-left"></text>
        报名须知
      </view>
      <view class="note-box" v-for="(item, index) in guide" :key="index">
        <view class="note-title">{{ item.title }}</view>
        <view class="note-desc">{{ item.desc }}</view>
      </view>
      <view class="note-box">
        <view class="note-title">退款说明</view>
        <view class="note-desc">这里是退款说明</view>
      </view>
    </view>
    <view
      class="activity_fixed_bottom"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <view class="activity_fixed_left">
        <view class="activity_fixed_item">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/home.png"
          ></image>
        </view>
        <view class="activity_fixed_item">
          <button open-type="share" class="share-btn">
            <view class="share">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/icon_share.png"
              ></image>
            </view>
          </button>
          <!-- 分享 -->
        </view>
      </view>
      <view class="activity_fixed_rt" @tap="nowApplication"> 立即报名 </view>
    </view>
    <!--报名选择框-->
    <view class="application-select" v-if="visible" @tap="close">
      <view class="application-content">
        <view class="application-top">
          <view class="application-price">
            <text v-if="price !== '免费' && price !== '置换'">¥</text>
            <text>{{ price }}</text>
          </view>
          <view class="close-img">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png"
              @tap="close"
            ></image>
          </view>
          <view
            class="selected"
            v-for="item in selectedSessions"
            :key="item.scene_name"
          >
            已选：{{ item.scene_name }}
            <text v-if="selectedRole[0] && selectedRole.length"
              >｜{{ selectedRole[0] && selectedRole[0].roles_name }}</text
            >
          </view>
        </view>
        <view
          class="application-ct"
          :style="{
            paddingTop: selectedSessions.length > 0 ? '200rpx' : '80rpx',
          }"
        >
          <view class="event-frequency-title">选择场景</view>
          <view
            class="select-scene"
            :class="item.scene_default_select ? 'select-scene-active' : ''"
            v-for="(item, index) in sceneList"
            :key="index"
            @tap.stop="sceneClick(item, index)"
          >
            <view class="select-scene-left">
              <view
                class="select-scene-status1"
                v-if="item.scene_apply_schedule.status_code == 'todo'"
              >
                {{ item.scene_apply_schedule.status_name }}
              </view>
              <view
                class="select-scene-status2"
                v-if="item.scene_apply_schedule.status_code == 'wait'"
              >
                {{ item.scene_apply_schedule.status_name }}
              </view>
              <view
                class="select-scene-status3"
                v-if="item.scene_apply_schedule.status_code == 'done'"
              >
                {{ item.scene_apply_schedule.status_name }}
              </view>
              <text class="select-scene-label">{{ item.scene_name }}</text>
            </view>
            <view class="select-scene-rt">
              {{ item.scene_apply_schedule.status_desc }}
            </view>
          </view>
          <!-- <view class="select-scene select-scene-active">
            <view class="select-scene-left">
              <view class="select-scene-status2"> 等位中 </view>
              <text class="select-scene-label">汉服人像（14:00-16:00）</text>
            </view>
            <view class="select-scene-rt"> 进度 5/10 </view>
          </view>
          <view class="select-scene">
            <view class="select-scene-left">
              <view class="select-scene-status3"> 已满员 </view>
              <text class="select-scene-label">汉服人像（14:00-16:00）</text>
            </view>
            <view class="select-scene-rt"> 进度 5/10 </view>
          </view> -->
          <block v-if="roleVisible">
            <view class="event-frequency-title">选择角色</view>
            <view class="role">
              <view
                class="role-item"
                :class="item.is_select ? 'active' : ''"
                v-for="(item, index) in roleList"
                :key="index"
                @tap.stop="roleClick(item, index)"
                >{{ item.roles_name }}</view
              >
            </view>
          </block>
        </view>
        <!-- <view
          class="application-ct"
          :style="{
            paddingTop: selectedSessions.length > 0 ? '200rpx' : '80rpx',
          }"
        >
          <view class="event-frequency-title">活动场次</view>
          <view
            v-for="(item, sceneIndex) in sceneList"
            :key="sceneIndex"
            @tap.stop="eventFrequency(item, sceneIndex)"
          >
            <view
              class="event-frequency-box"
              :class="[item.is_select ? 'event-active' : '']"
            >
              <view class="event-frequency-item">
                <view>{{ item.scene_name }}</view>
                <view class="application-txt"
                  >成员总数：{{ item.enter_number }}</view
                >
              </view>
              <view class="event-frequency-bt">
                <view class="application-tag">{{ item.divide_teams }}</view>
                <view class="application-txt">{{ item.scene_desc }}</view>
              </view>
            </view>
          </view>
          <block v-if="groupVisible">
            <view class="event-frequency-title">选择分组</view>
            <view
              class="select-group"
              v-for="(item, index) in groupList"
              :key="index"
            >
              <view
                class="select-group-item"
                :class="[item.is_select ? 'select-group-active' : '']"
                @tap.stop="groupClick(item, index)"
              >
                <text>{{ item.group_name }}</text>
                <text>每组成员：{{ item.every_number }}</text>
              </view>
            </view>
          </block>
          <block v-if="characterVisible">
            <view class="event-frequency-title">选择角色</view>
            <view
              class="select-character"
              v-for="(item, index) in characterList"
              :key="index"
              @tap.stop="teamsClick(item, index)"
            >
              <view
                class="select-character-item"
                :class="[item.is_select ? 'select-group-active' : '']"
              >
                <text>{{ item.teams_name }}</text>
              </view>
            </view>
          </block>
        </view> -->
        <!-- <view class="insure-box">
          <view class="insure-title">保险服务</view>
          <view
            class="insure-item"
            :class="[items.is_select ? 'active' : '']"
            v-for="(items, indexs) in selectable.service"
            :key="indexs"
            @tap.stop="serviceClick(indexs)"
          >
            {{ items.name }}
          </view>
        </view> -->
      </view>
      <view class="determine-box">
        <view class="determine-btn" @tap.stop="submit">确定</view>
      </view>
    </view>
    <!--报名选择框-->
  </view>
</template>

<script>
import "./index.scss";
import {
  exploreInfo,
  imVerify,
  applyMember,
  shareInvite,
  shareInviteInfo,
  activityVerify,
  comment,
  sharingInfo,
} from "../../../api/index.js";
import { errortip, openPage } from "../../../utils/util";
import clickThrottle from "../../../utils/clickThrottle";
export default {
  name: "activityDetail",
  data() {
    return {
      isIphoneX: false,
      open: false,
      visible: false,
      oid: "",
      title: "",
      label: [],
      enter_deadline_time: "",
      original_price: "",
      current_price: "",
      desc_cover: "",
      is_required_certify: "",
      certify_title: "",
      address: "",
      position: "",
      avatar: "",
      nickname: "",
      labelTxt: "",
      publish_num: "",
      evaluate_score: "",
      content: "",
      desc_detail_cover: [],
      guide: [],
      service: "",
      enter_current_babel: "",
      scene: {},
      time: "",
      enter_current_member: [],
      selectable: {
        enter_type: "",
        scene: {},
        service: [],
      },
      selectedSessions: [],
      selectedGroup: [],
      selectedTeams: [],
      price: "",
      roles_oid: "",
      teams_name: "",
      sessionList: [],
      shareTitle: "",
      shareImg: "",
      sharePath: "",
      shareFriendsTitle: "",
      shareFriendsImg: "",
      shareFriendsPath: "",
      groupVisible: false,
      characterVisible: false,
      sceneList: [],
      groupList: [],
      characterList: [],
      scenemsg: "请选择",
      rateindex: 0,
      roleVisible: false,
      roleList: [],
      selectedRole: [],
      invitedList: [],
      memberList: [],
      commentList: [],
      sharingList: [],
      commentTotal: 0,
      contentType: "text",
      required_certify: "",
      return_security: "",
    };
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  onShareAppMessage() {
    this.shareInvite({
      source: "share_details",
      type: "wechat",
      oid: this.oid,
    });
    return {
      title: this.shareTitle,
      imageUrl: this.shareImg,
      path: this.sharePath, // 路径，传递参数到指定页面。
    };
  },
  onShareTimeline() {
    this.shareFriendsInvite({
      source: "friends_circle",
      type: "wechat",
      oid: this.oid,
    });
    return {
      title: this.shareFriendsTitle,
      imageUrl: this.shareFriendsImg,
      path: this.shareFriendsPath, // 路径，传递参数到指定页面。
    };
  },
  onLoad: function (options) {
    if (options.scene) {
      this.oid = options.scene;
    }
    if (options.oid) {
      this.oid = options.oid;
    }
    if (this.oid) {
      this.exploreInfo({
        oid: this.oid,
      });
      this.shareInviteInfo({
        oid: this.oid,
        source: "share_details",
        project: "sport",
      });
      this.shareFriendsInviteInfo({
        oid: this.oid,
        source: "friends_circle",
        project: "sport",
      });
    }
  },
  methods: {
    rateChange(e) {
      this.rateindex = e.detail.index;
    },
    goComment() {
      openPage("/packageActivity/pages/comment/index?pid=" + this.pid);
    },
    goShareShow() {
      openPage("/packageActivity/pages/shareShow/index?pid=" + this.pid);
    },
    goZhuye(uuid) {
      if (!clickThrottle()) return;
      openPage("/packageMoka/pages/moka/editshow/index?uuid=" + uuid);
    },
    expand() {
      this.open = !this.open;
    },
    close() {
      this.visible = false;
    },
    sceneClick(data, index) {
      if (data.scene_apply_schedule.status_code == "done") {
        return false;
      }
      this.selectedSessions = [data];
      this.sceneList.map((item) => {
        item.scene_default_select = 0;
      });
      this.sceneList[index].scene_default_select = 1;
      this.sceneList = this.sceneList.concat([]);
      let roleData = this.selectable.roles[data.scene_oid];
      console.log(roleData, roleData.length > 1, "roleData----");
      if (roleData.length > 1) {
        this.roleVisible = true;
        this.roleList = roleData;
      } else {
        this.roleVisible = false;
        this.roleList = [];
        this.selectedRole = [];
        this.roles_oid = roleData[0].roles_oid;
      }
      this.price =
        roleData[0].roles_apply_schedule.original_amount.show == "text"
          ? roleData[0].roles_apply_schedule.original_amount.label
          : roleData[0].roles_apply_schedule.original_amount.amount;
    },
    roleClick(data, index) {
      this.selectedRole = [data];
      this.roleList.map((item) => {
        item.is_select = 0;
      });
      this.roleList[index].is_select = 1;
      this.roleList = this.roleList.concat([]);
      this.price =
        data.roles_apply_schedule.original_amount.show == "text"
          ? data.roles_apply_schedule.original_amount.label
          : data.roles_apply_schedule.original_amount.amount;
    },
    eventFrequency(data, index) {
      this.selectedSessions = [data];
      this.sceneList.map((item) => {
        item.is_select = 0;
      });
      this.sceneList[index].is_select = 1;
      this.sceneList = this.sceneList.concat([]);
      let group = this.selectable.scene.group[data.scene_oid];
      this.price = this.sceneList[index].original_amount.amount;
      if (group.show) {
        this.groupVisible = true;
        this.groupList = [];
        this.groupList = group.list.map((item) => {
          item.is_select = 0;
          return item;
        });
        this.selectedGroup = [];
        // 清除角色
        this.characterVisible = false;
        this.characterList = [];
        this.selectedTeams = [];
      } else {
        if (data.select_type == "select") {
          let group = this.selectable.scene.group[data.scene_oid];
          let groupOid = group.list[0].group_oid;
          // 显示角色数据
          let teams = this.selectable.scene.teams[groupOid];
          if (teams.show) {
            // 清除分组
            this.groupVisible = false;
            this.groupList = [];
            this.selectedGroup = [];

            this.characterVisible = true;
            this.characterList = [];
            this.characterList = teams.list.map((item) => {
              item.is_select = 0;
              return item;
            });
            this.selectedTeams = [];
          }
        } else {
          // 清除分组
          this.groupList = [];
          this.selectedGroup = [];
          // 清除角色
          this.characterList = [];
          this.selectedTeams = [];

          this.groupVisible = false;
          this.characterVisible = false;
        }
      }
    },
    groupClick(data, index) {
      this.selectedGroup = [data];
      this.groupList.map((item) => {
        item.is_select = 0;
      });
      this.groupList[index].is_select = 1;
      this.groupList = this.groupList.concat([]);
      let teams = this.selectable.scene.teams[data.group_oid];
      if (teams.show) {
        this.characterVisible = true;
        this.characterList = [];
        this.characterList = teams.list.map((item) => {
          item.is_select = 0;
          return item;
        });
        this.selectedTeams = [];
      } else {
        this.characterList = [];
        this.selectedTeams = [];
      }
    },
    teamsClick(data, index) {
      this.selectedTeams = [data];
      this.characterList.map((item) => {
        item.is_select = 0;
      });
      this.characterList[index].is_select = 1;
      this.characterList = this.characterList.concat([]);
    },
    serviceClick(index) {
      this.selectable.service.map((item) => {
        item.is_select = 0;
      });
      this.selectable.service[index].is_select = 1;
      this.service = this.selectable.service[index].name;
      this.visible = false;
    },
    showSession() {
      this.visible = true;
    },
    determine() {
      this.visible = false;
      this.scene = this.selectedSessions[0];
      let data = this.selectable.service.find((item) => {
        return item.is_select == 1;
      });
      if (data) {
        this.service = data.name;
      }
      if (this.scene.is_show_select_details === 0) {
        this.steamid = this.scene.select_details[0].list[0].teams_oid;
      }
      this.current_price = this.price;
    },
    submit() {
      if (this.roleVisible && this.roleList.length) {
        let roleData = this.roleList.find((item) => {
          return item.is_select == 1;
        });
        if (!roleData) {
          errortip("请选择角色！");
          return false;
        }
        this.roles_oid = this.selectedRole[0].roles_oid;
      }
      this.visible = false;
      this.scene = this.selectedSessions[0];
      console.log(JSON.stringify(this.scene));
      this.current_price = this.price;
    },
    nowApplication() {
      console.log(this.scene, "this.scene-----");
      if (!this.scene.scene_name) {
        this.visible = true;
        return false;
      }
      if (!clickThrottle()) return;
      this.activityVerify({
        roles_oid: this.roles_oid,
      });
    },
    myJoin(item, index, steamid, teams_name) {
      this.selectedSessions = [item];
      this.selectable.scene.map((item) => {
        item.is_select = 0;
      });
      this.selectable.scene[index].is_select = 1;
      this.price = this.selectable.scene[index].original_amount.amount;
      this.determine();
      this.steamid = steamid;
      this.teams_name = teams_name;
    },
    goZhuye() {
      if (!clickThrottle()) return;
      openPage("/packageMoka/pages/moka/editshow/index?uuid=" + this.uuid);
    },
    sendMsg() {
      openPage(
        "/packageMsg/pages/chat/index?uuid=" +
          this.uuid +
          "&nickname=" +
          this.nickname +
          "&avatar=" +
          this.avatar
      );
    },
    communicate() {
      this.imVerify({
        to_account: this.uuid,
      });
    },
    goRegistrationPayment() {
      openPage(
        "/packageActivity/pages/application/index?scene_oid=" +
          this.scene.scene_oid +
          "&service=" +
          this.service +
          "&steamid=" +
          this.steamid +
          "&wait=1"
      );
    },
    async imVerify(params) {
      try {
        let res = await imVerify(params);
        this.sendMsg();
      } catch (error) {
        errortip(error.data.msg);
        if (error.data.error_code == 21050 || error.data.error_code == 21040) {
          openPage(
            `/packageAdd/pages/guideTips/index?msg=${error.data.msg}&code=${error.data.error_code}`
          );
        }
      }
    },
    async applyMember(params) {
      try {
        let res = await applyMember(params);
        this.sessionList = res.data.data;
      } catch (error) {}
    },
    async exploreInfo(params) {
      try {
        let res = await exploreInfo(params);
        this.uuid = res.data.data.basic.uuid;
        this.title = res.data.data.topic.title;
        this.label = res.data.data.topic.keynote_label;
        this.enter_deadline_time = res.data.data.topic.deadline_time;
        this.original_price = res.data.data.topic.original_price;
        this.price = this.current_price =
          res.data.data.topic.original_amount.show == "text"
            ? res.data.data.topic.original_amount.label
            : res.data.data.topic.original_amount.amount;
        this.desc_cover = res.data.data.basic.main_cover;
        this.enter_current_babel = res.data.data.member.schedule;
        this.time = res.data.data.selected.datetime;
        this.address = res.data.data.selected.address;
        this.scenemsg = res.data.data.selected.scene;
        this.avatar = res.data.data.partner.basic.avatar;
        this.nickname = res.data.data.partner.basic.name;
        this.labelTxt = res.data.data.partner.basic.mode;
        this.publish_num = res.data.data.partner.basic.publish_cnt;
        this.evaluate_score = res.data.data.partner.basic.favorable_rate;
        this.enter_current_member = res.data.data.member.overview;
        this.required_certify = res.data.data.selected.certify.required_certify;
        this.return_security = res.data.data.selected.certify.return_security;
        this.invitedList = res.data.data.invited.details;
        this.selectable = res.data.data.selectable;
        this.sceneList = res.data.data.selectable.scene;
        res.data.data.selectable.scene.map((item) => {
          if (item.scene_default_select) {
            this.selectedSessions = [item];
            let roleData = this.selectable.roles[item.scene_oid];
            if (roleData.length > 1) {
              this.roleVisible = true;
              this.roleList = roleData;
            } else {
              this.roleVisible = false;
              this.roleList = [];
              this.roles_oid =
                this.selectable.roles[item.scene_oid][0].roles_oid;
            }
          }
        });
        this.memberList = res.data.data.member.details;
        this.pid = res.data.data.partner.basic.pid;
        this.contentType = res.data.data.content.type;
        if (this.contentType == "text") {
          this.content = res.data.data.content.body;
          this.desc_detail_cover = res.data.data.content.cover;
        } else {
          this.content = res.data.data.content.body;
        }
        this.comment({
          partner_pid: this.pid,
          page: 1,
          per_page: 3,
        });
        this.sharingInfo({
          partner_pid: this.pid,
          page: 1,
          per_page: 10,
        });
      } catch (error) {}
    },
    async shareInvite(params) {
      try {
        let res = await shareInvite(params);
      } catch (error) {}
    },
    async shareFriendsInvite(params) {
      try {
        let res = await shareInvite(params);
      } catch (error) {}
    },
    async shareInviteInfo(params) {
      try {
        let res = await shareInviteInfo(params);
        this.shareTitle = res.data.data.title;
        this.shareImg = res.data.data.imageUrl;
        this.sharePath = res.data.data.path;
      } catch (error) {}
    },
    async shareFriendsInviteInfo(params) {
      try {
        let res = await shareInviteInfo(params);
        this.shareFriendsTitle = res.data.data.title;
        this.shareFriendsImg = res.data.data.imageUrl;
        this.shareFriendsPath = res.data.data.path;
      } catch (error) {}
    },
    async comment(params) {
      try {
        let res = await comment(params);
        this.commentList = res.data.data.items;
        this.commentTotal = res.data.data.total;
      } catch (error) {}
    },
    async sharingInfo(params) {
      try {
        let res = await sharingInfo(params);
        this.sharingList = res.data.data.items;
      } catch (error) {}
    },
    async activityVerify(params) {
      try {
        let res = await activityVerify(params);
        openPage(
          "/packageActivity/pages/application/index?roles_oid=" + this.roles_oid
        );
      } catch (error) {
        if (error.data.error_code == 50170) {
          let _this = this;
          wx.showModal({
            title: "温馨提示",
            content: `已满员，是否加入到等位区`,
            cancelText: "再考虑下",
            confirmText: "我要等位",
            success: function (res) {
              if (res.confirm) {
                console.log("用户点击确定");
                _this.goRegistrationPayment();
              } else if (res.cancel) {
                console.log("用户点击取消");
              }
            },
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
