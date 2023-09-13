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
          <view class="activity-price">¥{{ current_price }}</view>
          <view class="original-price"
            ><text v-if="original_price !== '免费' && original_price !== '置换'"
              >原价</text
            >¥{{ original_price }}</view
          >
        </view>
        <view class="activity-right"> {{ enter_deadline_time }} </view>
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
    </view>
    <view class="info-box">
      <view class="guarantee-deposit" v-if="is_required_certify">
        <view class="security-image">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/security-icon.png"
          ></image>
        </view>
        <view class="security-box">
          <view class="security-title">{{ certify_title }}</view>
          <view class="security-txt">{{ certify_desc }}</view>
        </view>
      </view>
      <!-- <view class="task">
        <view class="security-image">
          <image src="https://yuepai-oss.qubeitech.com/static/images/task-icon.png"></image>
        </view>
        <view class="task-box">
          <view class="task-top">
            <view class="security-title">活动任务</view>
            <view class="security-txt m16">需在活动结束后5天内完成</view>
          </view>
          <view class="task-tag">
            <view class="tag">上传作品</view>
            <view class="tag">发布自媒体</view>
          </view>
        </view>
      </view> -->
      <view class="activity-box">
        <view class="activity-time">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/time.png"
            class="activity-icon"
          ></image>
          活动时间 {{ time }}
        </view>
        <view class="activity-loction">
          <view class="loction-title">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/local.png"
            ></image
            >{{ address }}
          </view>
          <view class="loction-detail">
            {{ position }}
          </view>
        </view>
      </view>
    </view>
    <view class="registered">
      <view class="registered-title">
        <view>
          <text class="border-left"></text>
          已报名
          <text class="registered-num"
            >（{{ enter_current_number }}/{{ enter_total_number }}）</text
          >
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
          :src="item.avatar"
        ></image>
      </view>
      <view class="session" v-else>
        <block v-for="(item, index) in sessionList" :key="index">
          <view class="session-title" v-if="item.enter_display == 'folded'">
            <view class="session-lable">
              <text class="session-txt"> {{ item.scene_name }}</text>
              <view class="session-line"></view>
            </view>
          </view>
          <view
            class="distinguish"
            v-for="(sceneItem, sceneIndex) in item.scene_data"
            :key="sceneIndex"
          >
            <view class="candidate-name" v-if="sceneItem.teams_name">{{
              sceneItem.teams_name
            }}</view>
            <view class="group-box" v-if="sceneItem.teams_list.listed">
              <view class="group-title">
                <text class="group-blod">{{
                  sceneItem.teams_list.listed.info.title
                }}</text>
                <text class="group-num">{{
                  sceneItem.teams_list.listed.info.desc
                }}</text>
              </view>
              <block v-if="sceneItem.teams_list.listed.show">
                <block
                  v-for="(sceneDetailItem, sceneDetailIndex) in sceneItem
                    .teams_list.listed.details"
                  :key="sceneDetailIndex"
                >
                  <view class="group" v-if="sceneDetailItem.member_list.length">
                    <view
                      class="group-top"
                      v-if="
                        item.enter_display == 'folded' &&
                        sceneDetailItem.group_name
                      "
                    >
                      <view class="group-left">
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/group.png"
                        ></image>
                        {{ sceneDetailItem.group_name }}
                      </view>
                    </view>
                    <view
                      class="group-list"
                      v-for="(
                        memberItem, memberIndex
                      ) in sceneDetailItem.member_list"
                      :key="memberIndex"
                    >
                      <image :src="memberItem.apply_avatar"></image>
                      <view class="group-identity-list">{{
                        memberItem.apply_career
                      }}</view>
                      <view
                        class="group-home"
                        @tap="goZhuye(memberItem.apply_uuid)"
                        >看主页</view
                      >
                    </view>
                  </view>
                </block>
              </block>
              <view class="none-data" v-else> 暂无报名信息 </view>
            </view>
            <view class="group-box" v-if="sceneItem.teams_list.waiting">
              <view class="group-title">
                <text class="group-blod">{{
                  sceneItem.teams_list.waiting.info.title
                }}</text>
                <text class="group-num">{{
                  sceneItem.teams_list.waiting.info.desc
                }}</text>
              </view>
              <block v-if="sceneItem.teams_list.waiting.show">
                <block
                  v-for="(sceneDetailItem, sceneDetailIndex) in sceneItem
                    .teams_list.waiting.details"
                  :key="sceneDetailIndex"
                >
                  <view class="group" v-if="sceneDetailItem.member_list.length">
                    <view
                      class="group-top"
                      v-if="
                        item.enter_display == 'folded' &&
                        sceneDetailItem.group_name
                      "
                    >
                      <view class="group-left">
                        <image
                          src="https://yuepai-oss.qubeitech.com/static/images/group.png"
                        ></image>
                        {{ sceneDetailItem.group_name }}
                      </view>
                    </view>
                    <view
                      class="group-list"
                      v-for="(
                        memberItem, memberIndex
                      ) in sceneDetailItem.member_list"
                      :key="memberIndex"
                    >
                      <image :src="memberItem.apply_avatar"></image>
                      <view class="group-identity-list">{{
                        memberItem.apply_career
                      }}</view>
                      <view
                        class="group-home"
                        @tap="goZhuye(memberItem.apply_uuid)"
                        >看主页</view
                      >
                    </view>
                  </view>
                </block>
              </block>
              <view class="none-data" v-else> 暂无报名信息 </view>
            </view>
          </view>
        </block>
      </view>
    </view>
    <view class="userinfo">
      <view class="userinfo-top">
        <image :src="avatar"></image>
        <view class="userinfo-content">
          <view class="userinfo-title"> {{ nickname }} </view>
          <view class="userinfo-lable-box">
            <text class="self-support">{{ labelTxt }}</text>
            <text class="lable">发布活动 ｜ {{ publish_num }}场</text>
            <text class="lable">好评率 ｜ {{ evaluate_score }}%</text>
          </view>
        </view>
      </view>
      <view class="userinfo-btns">
        <view class="gohome" @tap="goZhuye">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/home-icon.png"
          ></image>
          进入主页
        </view>
        <view class="contact" @tap="communicate">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/phone-icon.png"
          ></image>
          联系沟通
        </view>
      </view>
    </view>
    <view class="event-details">
      <view class="event-title">
        <text class="border-left"></text>
        活动详情
      </view>
      <view class="activity-desc"> {{ content }} </view>
      <image
        v-for="(item, index) in desc_detail_cover"
        :key="index"
        :src="item"
        mode="widthFix"
      ></image>
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
          <view class="application-price"> ¥{{ price }} </view>
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
            已选：{{ item.scene_name }}｜总{{ item.enter_number }}人
            <text v-if="selectedGroup.length"
              >｜{{ selectedGroup[0].group_name }}</text
            >
            <text v-if="selectedTeams.length"
              >｜{{ selectedTeams[0].teams_name }}</text
            >
          </view>
        </view>
        <view
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
        </view>
        <view class="insure-box">
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
        </view>
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
      enter_current_number: "",
      enter_total_number: "",
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
      steamid: "",
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
      if (this.groupVisible) {
        let groupData = this.groupList.find((item) => {
          return item.is_select == 1;
        });
        if (!groupData) {
          errortip("请选择分组！");
          return false;
        }
        this.steamid = this.selectedGroup[0].group_oid;
      }
      if (this.characterVisible) {
        let teamsData = this.characterList.find((item) => {
          return item.is_select == 1;
        });
        if (!teamsData) {
          errortip("请选择角色！");
          return false;
        }
        this.steamid = this.selectedTeams[0].teams_oid;
      }
      if (!this.groupVisible && !this.characterVisible) {
        this.steamid = this.selectedSessions[0].teams_oid;
      }

      this.visible = false;
      this.scene = this.selectedSessions[0];
      console.log(JSON.stringify(this.scene));
      let data = this.selectable.service.find((item) => {
        return item.is_select == 1;
      });
      if (data) {
        this.service = data.name;
      }
      this.current_price = this.price;
    },
    nowApplication() {
      if (!this.scene.scene_name && !this.scene.scene_desc) {
        errortip("请选择场次！");
        return false;
      }
      if (!clickThrottle()) return;
      this.activityVerify({
        teams_oid: this.steamid,
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
        this.label = res.data.data.topic.label;
        this.enter_deadline_time = res.data.data.topic.enter_deadline_time;
        this.original_price = res.data.data.topic.original_price;
        this.price = this.current_price = res.data.data.topic.current_price;
        this.desc_cover = res.data.data.basic.main_cover;
        this.is_required_certify = res.data.data.certify.is_required_certify;
        this.certify_title =
          res.data.data.certify.name + "：" + res.data.data.certify.amount;
        this.certify_desc = res.data.data.certify.desc;
        this.time =
          res.data.data.time.begin_date +
          " " +
          res.data.data.time.begin_time +
          "~" +
          res.data.data.time.finish_time;
        this.address = res.data.data.address.address;
        this.position = res.data.data.address.position;
        this.avatar = res.data.data.publisher.avatar;
        this.nickname = res.data.data.publisher.nickname;
        this.labelTxt = res.data.data.publisher.label;
        this.publish_num = res.data.data.publisher.publish_num;
        this.evaluate_score = res.data.data.publisher.evaluate_score * 10;
        this.content = res.data.data.details.content;
        this.desc_detail_cover = res.data.data.details.desc_cover;
        this.guide = res.data.data.guide;
        this.service = res.data.data.selectable.service[0];
        this.enter_current_number = res.data.data.enter.enter_current_number;
        this.enter_total_number = res.data.data.enter.enter_total_number;
        this.enter_current_member = res.data.data.enter.enter_current_member;
        this.selectable = res.data.data.selectable;
        this.sceneList = res.data.data.selectable.scene.scene.list.map(
          (item) => {
            item.is_select = 0;
            return item;
          }
        );
        this.selectable.service = res.data.data.selectable.service.map(
          (item) => {
            return {
              name: item,
              is_select: this.service == item ? 1 : 0,
            };
          }
        );
        if (res.data.data.selected.scene.show_type == "select") {
          this.scenemsg = res.data.data.selected.scene.data;
        } else if (res.data.data.selected.scene.show_type == "direct") {
          this.scene = res.data.data.selected.scene.data;
          this.steamid = res.data.data.selected.scene.data.teams_oid;
          this.selectedSessions = [res.data.data.selected.scene.data];
          this.sceneList[0].is_select = 1;
        }
        this.applyMember({
          sport_oid: res.data.data.basic.oid,
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
    async activityVerify(params) {
      try {
        let res = await activityVerify(params);
        openPage(
          "/packageActivity/pages/application/index?scene_oid=" +
            this.scene.scene_oid +
            "&service=" +
            this.service +
            "&steamid=" +
            this.steamid
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
