<template>
  <view class="packetmode">
    <view class="activity-mode">
      <view class="tab">
        <view
          class="tab-item"
          :class="activityModeTab == 0 ? 'on' : ''"
          @tap="activityModeChange(0)"
          >常规活动
        </view>
        <view
          class="tab-item"
          :class="activityModeTab == 1 ? 'on' : ''"
          @tap="activityModeChange(1)"
          >随机分组
        </view>
        <view
          class="tab-item"
          :class="activityModeTab == 2 ? 'on' : ''"
          @tap="activityModeChange(2)"
          >固定分组
        </view>
      </view>
      <view class="regularActivities" v-if="activityModeTab == 0">
        <view class="activity-info-item">
          <view class="activity-lable">
            <text>邀请成员</text>
          </view>
          <view
            class="picker_children picked member-row"
            v-if="member.length"
            @tap="memberClick"
            >{{ formatMember(member) }}</view
          >
          <view class="picker_children" v-else @tap="memberClick"
            >邀请成员,待对方确认后，即可报名成功</view
          >
        </view>
        <view class="activity-info-item">
          <view class="activity-lable">
            <text>容许报名</text>
          </view>
          <view class="activity-check-box">
            <view
              @tap="chooseAllow"
              class="check_box"
              :class="allow === 1 ? 'check_box_ed' : ''"
              data-status="1"
            >
              是
              <image
                :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                  allow === 1 ? 1 : 0
                }.png`"
              ></image>
            </view>
            <view
              @tap="chooseAllow"
              class="check_box"
              :class="allow === 0 ? 'check_box_ed' : ''"
              data-status="2"
            >
              否
              <image
                :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                  allow === 0 ? 1 : 0
                }.png`"
              ></image>
            </view>
          </view>
        </view>
      </view>
      <block v-if="activityModeTab == 1">
        <view class="randomization">
          <view class="activity-info-item">
            <view class="activity-lable">
              <text>每组人数</text>
            </view>
            <picker
              @change="groupNumChange"
              :value="groupNumIndex"
              :range="groupNumList"
              :range-key="'key'"
            >
              <view class="picker_children picked font26" v-if="groupNum">{{
                groupNum
              }}</view>
              <view class="picker_children font26" v-else>选择分组人数</view>
            </picker>
            <text class="font26">人/组</text>
            <view class="group-text"
              >当前计划下活动可分<text class="group-red">{{
                formatGroup(this.enrollment, this.groupNum)
              }}</text
              >组</view
            >
          </view>
          <view class="activity-info-item">
            <view class="activity-lable">
              <text>设定分组候选区</text>
            </view>
            <switch
              :checked="groupChecked"
              @change="switchGroupChange"
              color="#fe5457"
            />
          </view>
          <block v-if="groupChecked">
            <view
              class="group-box"
              v-for="(item, index) in candidateAreaList"
              :key="index"
            >
              <view
                class="group-delete"
                @tap="groupDelete(index)"
                v-if="candidateAreaList.length >= 3"
                >删除</view
              >
              <view class="activity-info-item">
                <view class="activity-lable">
                  <text>选区名称</text>
                </view>
                <input
                  placeholder="请输入候选区名称（限4字）"
                  class="constituency-name"
                  v-model="item.constituencyName"
                  @input="
                    (e) => {
                      constituencyNameChange(e, index);
                    }
                  "
                />
              </view>
              <view
                class="error-label"
                v-if="item.iserror && item.constituencyName === ''"
                >请输入候选区名称</view
              >
              <view class="activity-info-item">
                <view class="activity-lable">
                  <text>组内人数</text>
                </view>
                <picker
                  @change="
                    (e) => {
                      groupNumItemChange(e, index);
                    }
                  "
                  :value="item.groupNumIndex"
                  :range="groupNumList"
                  :range-key="'value'"
                >
                  <view
                    class="picker_children picked font22"
                    v-if="item.groupNum"
                    >{{ item.groupNum }}</view
                  >
                  <view class="picker_children font22" v-else
                    >选择本区内的人数，与另一区相加等于每组总人数</view
                  >
                </picker>
              </view>
              <view
                class="error-label"
                v-if="item.iserror && item.groupNum === ''"
                >请选择组内人数</view
              >
              <view class="activity-info-item">
                <view class="activity-lable">
                  <text>邀请成员</text>
                </view>
                <view
                  class="picker_children picked font22"
                  v-if="item.member.length"
                  @tap="memberItemClick(index)"
                  >{{ formatItemMember(item.member) }}</view
                >
                <view
                  class="picker_children font22"
                  v-else
                  @tap="memberItemClick(index)"
                  >可邀请成员,但须对方确认,确认后将占用报名人数</view
                >
              </view>
              <view class="activity-info-item">
                <view class="activity-lable">
                  <text>容许报名</text>
                </view>
                <view class="activity-check-box">
                  <view
                    @tap="chooseItemAllow(index)"
                    class="check_box"
                    :class="item.allow === 1 ? 'check_box_ed' : ''"
                    data-status="1"
                  >
                    是
                    <image
                      :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                        item.allow === 1 ? 1 : 0
                      }.png`"
                    ></image>
                  </view>
                  <view
                    @tap="chooseItemAllow(index)"
                    class="check_box"
                    :class="item.allow === 0 ? 'check_box_ed' : ''"
                    data-status="2"
                  >
                    否
                    <image
                      :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                        item.allow === 0 ? 1 : 0
                      }.png`"
                    ></image>
                  </view>
                </view>
              </view>
            </view>
            <view class="add-group" @tap="addGroup">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
              ></image>
              新建选区
            </view>
            <view class="split" v-if="candidateAreaList.length"></view>
          </block>
        </view>
      </block>
      <view class="fixed-group" v-if="activityModeTab == 2">
        <view
          class="fixed-group-list"
          v-for="(item, index) in fixedGroupList"
          :key="index"
        >
          <view class="group-name">
            <view class="activity-lable">
              <text>分组名称</text>
            </view>
            <input
              class="group-name-input"
              placeholder="请输入分组名称（限8字）"
              v-model="item.groupName"
              @input="
                (e) => {
                  groupNameChange(e, index);
                }
              "
            />
            <view
              class="fixed-group-name-delete"
              v-if="fixedGroupList.length > 1"
              @tap="fixedGroupNameDelete(index)"
              >删除</view
            >
          </view>
          <view class="error-label" v-if="item.iserror && item.groupName === ''"
            >请输入分组名称</view
          >
          <view class="fixed-group-box" v-for="(items, indexs) in item.list">
            <view
              class="fixed-group-delete"
              v-if="item.list.length > 2"
              @tap="fixedGroupDelete(index, indexs)"
              >删除</view
            >
            <view class="activity-info-item">
              <view class="activity-lable">
                <text>组员身份</text>
              </view>
              <input
                placeholder="请输入组员身份"
                v-model="items.groupIdentity"
                class="fixed-group-input"
              />
            </view>
            <view
              class="error-label"
              v-if="items.iserror && items.groupIdentity === ''"
              >请输入组员身份</view
            >
            <view class="activity-info-item">
              <view class="activity-lable">
                <text>组员人数</text>
              </view>
              <input
                placeholder="请输入组员人数"
                v-model="items.groupNum"
                type="number"
                class="fixed-group-input"
              />
            </view>
            <view
              class="error-label"
              v-if="items.iserror && items.groupNum === ''"
              >请输入组员人数</view
            >
            <view class="activity-info-item">
              <view class="activity-lable">
                <text>邀请成员</text>
              </view>
              <view
                class="picker_children picked font22"
                v-if="items.member.length"
                @tap="memberGroupClick(index, indexs)"
                >{{ formatItemMember(items.member) }}</view
              >
              <view
                class="picker_children font22"
                v-else
                @tap="memberGroupClick(index, indexs)"
                >可邀请成员,但须对方确认,确认后将占用报名人数</view
              >
            </view>
            <view class="activity-info-item">
              <view class="activity-lable">
                <text>容许报名</text>
              </view>
              <view class="activity-check-box">
                <view
                  @tap="chooseGroupItemAllow(index, indexs)"
                  class="check_box"
                  :class="items.allow === 1 ? 'check_box_ed' : ''"
                  data-status="1"
                >
                  是
                  <image
                    :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                      items.allow === 1 ? 1 : 0
                    }.png`"
                  ></image>
                </view>
                <view
                  @tap="chooseGroupItemAllow(index, indexs)"
                  class="check_box"
                  :class="items.allow === 0 ? 'check_box_ed' : ''"
                  data-status="2"
                >
                  否
                  <image
                    :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                      items.allow === 0 ? 1 : 0
                    }.png`"
                  ></image>
                </view>
              </view>
            </view>
          </view>
          <view class="add-fixed-group" @tap="addFixedGroup(index)">
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
            ></image>
            新建组员身份
          </view>
          <view class="split"></view>
        </view>
      </view>
    </view>
    <view class="create-group" @tap="createGroup" v-if="activityModeTab == 2">
      <view class="add-fixed-group">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
        ></image>
        新建分组
      </view>
      <view class="split"></view>
    </view>
    <!--邀请成员-->
    <view class="invite" v-if="inviteVisble">
      <view class="invite-members" @tap="clearUserMember">
        <view class="invite-title">
          邀请成员
          <view class="invite-close" @tap="closeInvitation"></view>
        </view>
        <view class="invite-item">
          <view class="activity-lable">
            <text>查询方式</text>
          </view>
          <view class="activity-check-box">
            <view
              @tap="chooseQueryMethods"
              class="check_box"
              :class="queryMethods === 1 ? 'check_box_ed' : ''"
              data-status="1"
            >
              用户ID
              <image
                :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                  queryMethods === 1 ? 1 : 0
                }.png`"
              ></image>
            </view>
            <view
              @tap="chooseQueryMethods"
              class="check_box"
              :class="queryMethods === 0 ? 'check_box_ed' : ''"
              data-status="2"
            >
              用户昵称
              <image
                :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                  queryMethods === 0 ? 1 : 0
                }.png`"
              ></image>
            </view>
          </view>
        </view>
        <view class="invite-item">
          <view class="activity-lable">
            <text>查询条件</text>
          </view>
          <view class="query-box">
            <input
              placeholder="请输入查询条件"
              v-model="query"
              class="query-input"
              @input="queryInput"
            />
            <view class="group" v-if="userMemberList.length">
              <view
                class="group-item"
                v-for="(item, index) in userMemberList"
                :key="index"
                @tap.stop="userMemberClick(index)"
              >
                <view class="group-item-left">
                  <image :src="item.avatar"></image>
                </view>
                <view class="group-item-center">
                  <view class="uuid"> {{ item.uuid }} </view>
                  <view class="name">
                    {{ item.nickname }}
                    <text class="identity">{{ item.career }}</text>
                  </view>
                </view>
                <view class="group-item-right" v-if="item.checked">
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/common/select2_1.png"
                  ></image>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="invited-num"
          >已邀请成员（{{ invitedList.length }}/{{ enrollment }}）</view
        >
        <scroll-view
          :scroll-y="true"
          :style="{ height: 200 + 'px' }"
          class="invited-box"
          v-if="invitedList.length"
        >
          <view class="invited-user">
            <view
              class="invited-user-item"
              v-for="(item, index) in invitedList"
              :key="index"
            >
              <image :src="item.avatar"></image>
              <view class="invited-uuid">{{ item.uuid }}</view>
              <view class="invited-name"> {{ item.nickname }} </view>
              <view class="invited-identity">{{ item.career }}</view>
              <view class="invited-delete" @tap="invitedDelete(index)"
                >删除</view
              >
            </view>
          </view>
        </scroll-view>
        <view class="confirm-invitation" @tap="confirmInvitation"
          >确认邀请</view
        >
      </view>
    </view>
    <!--邀请成员-->
    <view
      class="packetmode_bottom"
      :class="isIphoneX ? 'fix-iphonex-button' : ''"
    >
      <view class="packetmode_btn" @tap="submit">确定</view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { publishConfig, userSearch } from "../../../api/index.js";
import { errortip } from "../../../utils/util";
export default {
  name: "packetmode",
  data() {
    return {
      isIphoneX: false,
      applicationType: "",
      activityModeTab: 0,
      member: [],
      allow: 1,
      queryMethods: 1,
      query: "",
      userMemberList: [
        // {
        //   src: "https://yuepai-oss.qubeitech.com/invite/145697/7504e5af-1c5e-11ee-8f3a-812b5b24112e-qa60.jpg",
        //   nickname: "虾米A",
        //   uuid: 111111,
        //   identity: "模特",
        //   checked: false,
        // },
        // {
        //   src: "https://yuepai-oss.qubeitech.com/invite/145697/7504e5af-1c5e-11ee-8f3a-812b5b24112e-qa60.jpg",
        //   nickname: "虾米A2",
        //   uuid: 222222,
        //   identity: "模特",
        //   checked: false,
        // },
      ],
      inviteVisble: false,
      invitedList: [
        // {
        //   src: "https://yuepai-oss.qubeitech.com/invite/145697/7504e5af-1c5e-11ee-8f3a-812b5b24112e-qa60.jpg",
        //   nickname: "虾米A",
        //   uuid: 111111,
        //   identity: "模特",
        // },
        // {
        //   src: "https://yuepai-oss.qubeitech.com/invite/145697/7504e5af-1c5e-11ee-8f3a-812b5b24112e-qa60.jpg",
        //   nickname: "虾米A2",
        //   uuid: 222222,
        //   identity: "模特",
        // },
      ],
      memberType: "",
      memberSelectedList: [],
      groupIndex: "",
      memberItemIndex: "",
      candidateAreaList: [
        {
          constituencyName: "",
          groupNum: "",
          groupNumIndex: "",
          member: [],
          allow: 1,
          iserror: false,
        },
        {
          constituencyName: "",
          groupNum: "",
          groupNumIndex: "",
          member: [],
          allow: 1,
          iserror: false,
        },
      ],
      groupChecked: true,
      groupList: [
        {
          value: "group",
          name: "kk",
        },
      ],
      groupNum: 0,
      groupNumIndex: "",
      groupNumList: [],
      fixedGroupList: [
        {
          groupName: "",
          iserror: false,
          list: [
            {
              groupIdentity: "",
              groupNum: "",
              member: [],
              allow: 1,
              iserror: false,
            },
            {
              groupIdentity: "",
              groupNum: "",
              member: [],
              allow: 1,
              iserror: false,
            },
          ],
        },
      ],
      enrollment: 0,
      sessionIndex: "",
    };
  },
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
  },
  methods: {
    queryInput(e) {
      if (e.detail.value) {
        let params = {
          query_value: e.detail.value,
        };
        if (this.queryMethods) {
          params.query_method = "uuid";
        } else {
          params.query_method = "nickname";
        }
        this.userSearch(params);
      }
    },
    activityModeChange(index) {
      if (this.activityModeTab === index) {
        return false;
      } else {
        this.activityModeTab = index;
      }
    },
    formatGroup(enrollment, groupNum) {
      if (!groupNum) return 0;
      return parseInt(enrollment / groupNum);
    },
    formatMember() {
      let arr = [];
      arr = this.member.map((item) => {
        return item.nickname;
      });
      return arr.join(",");
    },
    formatItemMember(data) {
      let arr = [];
      arr = data.map((item) => {
        return item.nickname;
      });
      return arr.join(",");
    },
    memberClick() {
      this.memberType = 1;
      this.inviteVisble = true;
      if (this.member.length) {
        this.invitedList = this.member;
      }
    },
    memberItemClick(index) {
      this.memberType = 2;
      this.memberItemIndex = index;
      this.inviteVisble = true;
      if (this.candidateAreaList[index].member.length) {
        this.invitedList = this.candidateAreaList[index].member;
      }
    },
    memberGroupClick(groupIndex, index) {
      this.memberType = 3;
      (this.groupIndex = groupIndex), (this.memberItemIndex = index);
      this.inviteVisble = true;
      if (this.fixedGroupList[groupIndex].list[index].member.length) {
        this.invitedList = this.fixedGroupList[groupIndex].list[index].member;
      }
    },
    chooseAllow() {
      this.allow = !this.allow ? 1 : 0;
    },
    chooseItemAllow(index) {
      this.candidateAreaList[index].allow = !this.candidateAreaList[index].allow
        ? 1
        : 0;
    },
    chooseGroupItemAllow(groupIndex, index) {
      this.fixedGroupList[groupIndex].list[index].allow = !this.fixedGroupList[
        groupIndex
      ].list[index].allow
        ? 1
        : 0;
    },
    clearUserMember() {
      this.userMemberList = [];
    },
    closeInvitation() {
      this.inviteVisble = false;
      this.query = "";
      this.invitedList = [];
      this.userMemberList = [];
    },
    invitedDelete(index) {
      this.invitedList.splice(index, 1);
    },
    groupDelete(index) {
      this.candidateAreaList.splice(index, 1);
    },
    fixedGroupDelete(groupIndex, index) {
      this.fixedGroupList[groupIndex].list.splice(index, 1);
    },
    fixedGroupNameDelete(index) {
      this.fixedGroupList.splice(index, 1);
    },
    constituencyNameChange(e, index) {
      if (this.candidateAreaList[index].constituencyName.length > 4) {
        this.candidateAreaList[index].constituencyName = this.candidateAreaList[
          index
        ].constituencyName.slice(0, 4);
      }
    },
    groupNameChange(e, index) {
      if (this.fixedGroupList[index].groupName.length > 8) {
        this.fixedGroupList[index].groupName = this.fixedGroupList[
          index
        ].groupName.slice(0, 4);
      }
    },
    confirmInvitation() {
      this.inviteVisble = false;
      if (this.memberType == 1) {
        this.member = this.invitedList;
      }
      if (this.memberType == 2) {
        this.candidateAreaList[this.memberItemIndex].member = this.invitedList;
      }
      if (this.memberType == 3) {
        this.fixedGroupList[this.groupIndex].list[this.memberItemIndex].member =
          this.invitedList;
      }
      this.invitedList = [];
    },
    chooseQueryMethods() {
      this.queryMethods = !this.queryMethods ? 1 : 0;
    },
    userMemberClick(index) {
      this.userMemberList[index].checked = !this.userMemberList[index].checked;
      let data = this.invitedList.find((item) => {
        return item.uuid == this.userMemberList[index].uuid;
      });
      if (!data && this.userMemberList[index].checked) {
        this.invitedList.push(this.userMemberList[index]);
      }
    },
    groupNumChange(e) {
      this.groupNum = this.groupNumList[e.detail.value].value;
      this.groupNumIndex = e.detail.value;
      this.formatGroup(this.enrollment, this.groupNum);
    },
    groupNumItemChange(e, index) {
      let num = this.groupNum - this.candidateAreaList.length + 1;
      if (this.groupNumList[e.detail.value].value <= num) {
        this.candidateAreaList[index].groupNum =
          this.groupNumList[e.detail.value].value;
        this.candidateAreaList[index].groupNumIndex = e.detail.value;
      } else {
        errortip("组内人数不能超过" + num + "人");
      }
    },
    switchGroupChange() {
      this.groupChecked = !this.groupChecked;
    },
    addGroup() {
      this.candidateAreaList.push({
        constituencyName: "",
        groupNum: "",
        groupNumIndex: "",
        member: [],
        allow: 1,
        iserror: false,
      });
    },
    addFixedGroup(index) {
      this.fixedGroupList[index].list.push({
        groupIdentity: "",
        groupNum: "",
        member: [],
        allow: 1,
      });
    },
    createGroup() {
      this.fixedGroupList.push({
        groupName: "",
        iserror: false,
        list: [
          {
            groupIdentity: "",
            groupNum: "",
            member: [],
            allow: 1,
            iserror: false,
          },
          {
            groupIdentity: "",
            groupNum: "",
            member: [],
            allow: 1,
            iserror: false,
          },
        ],
      });
    },
    submit() {
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2];
      if (this.applicationType === 0 && this.activityModeTab === 0) {
        prevPage.setData({
          member: this.member,
          allow: this.allow,
          applicationType: this.applicationType,
          activityModeTab: this.activityModeTab,
        });
        wx.navigateBack({
          delta: 1,
        });
      } else if (this.applicationType === 0 && this.activityModeTab === 1) {
        let off = false;
        if (this.groupChecked) {
          let count = 0;
          this.candidateAreaList.map((item, index) => {
            count += item.groupNum;
            if (!item.constituencyName || !item.groupNum) {
              this.candidateAreaList[index].iserror = true;
              off = true;
            }
          });
          if (off) {
            return false;
          }
          if (count > this.groupNum) {
            errortip("请修改组内人数，不允许超过每组人数");
          } else if (count < this.groupNum) {
            errortip("请修改组内人数，组内人数没达到每组人数");
          } else {
            prevPage.setData({
              candidateAreaList: this.candidateAreaList,
              groupNum: this.groupNum,
              formatGroupNum: this.formatGroup(this.enrollment, this.groupNum),
              applicationType: this.applicationType,
              activityModeTab: this.activityModeTab,
            });
            wx.navigateBack({
              delta: 1,
            });
          }
        } else {
          prevPage.setData({
            candidateAreaList: [],
            groupNum: this.groupNum,
            formatGroupNum: this.formatGroup(this.enrollment, this.groupNum),
            applicationType: this.applicationType,
            activityModeTab: this.activityModeTab,
          });
          wx.navigateBack({
            delta: 1,
          });
        }
      } else if (this.applicationType === 0 && this.activityModeTab === 2) {
        let off = false;
        this.fixedGroupList.map((item, index) => {
          if (!item.groupName) {
            this.fixedGroupList[index].iserror = true;
            off = true;
          }
          item.list.map((items, indexs) => {
            if (!items.groupNum || !items.groupIdentity) {
              this.fixedGroupList[index].list[indexs].iserror = true;
              off = true;
            }
          });
        });
        if (off) {
          return false;
        }
        prevPage.setData({
          fixedGroupList: this.fixedGroupList,
          applicationType: this.applicationType,
          activityModeTab: this.activityModeTab,
        });
        wx.navigateBack({
          delta: 1,
        });
      } else if (this.applicationType === 1 && this.activityModeTab === 0) {
        prevPage.setData({
          member: this.member,
          allow: this.allow,
          applicationType: this.applicationType,
          activityModeTab: this.activityModeTab,
          sessionIndex: this.sessionIndex,
        });
        wx.navigateBack({
          delta: 1,
        });
      } else if (this.applicationType === 1 && this.activityModeTab === 1) {
        if (this.groupChecked) {
          let count = 0;
          let off = false;
          this.candidateAreaList.map((item, index) => {
            count += item.groupNum;
            if (!item.constituencyName || !item.groupNum) {
              this.candidateAreaList[index].iserror = true;
              off = true;
            }
          });
          if (off) {
            return false;
          }
          if (count > this.groupNum) {
            errortip("请修改组内人数，不允许超过每组人数");
          } else if (count < this.groupNum) {
            errortip("请修改组内人数，组内人数没达到每组人数");
          } else {
            prevPage.setData({
              candidateAreaList: this.candidateAreaList,
              groupNum: this.groupNum,
              formatGroupNum: this.formatGroup(this.enrollment, this.groupNum),
              applicationType: this.applicationType,
              activityModeTab: this.activityModeTab,
              sessionIndex: this.sessionIndex,
            });
            wx.navigateBack({
              delta: 1,
            });
          }
        } else {
          prevPage.setData({
            candidateAreaList: [],
            groupNum: this.groupNum,
            formatGroupNum: this.formatGroup(this.enrollment, this.groupNum),
            applicationType: this.applicationType,
            activityModeTab: this.activityModeTab,
            sessionIndex: this.sessionIndex,
          });
          wx.navigateBack({
            delta: 1,
          });
        }
      } else if (this.applicationType === 1 && this.activityModeTab === 2) {
        let off = false;
        this.fixedGroupList.map((item, index) => {
          if (!item.groupName) {
            this.fixedGroupList[index].iserror = true;
            off = true;
          }
          item.list.map((items, indexs) => {
            if (!items.groupNum || !items.groupIdentity) {
              this.fixedGroupList[index].list[indexs].iserror = true;
              off = true;
            }
          });
        });
        if (off) {
          return false;
        }
        prevPage.setData({
          fixedGroupList: this.fixedGroupList,
          applicationType: this.applicationType,
          activityModeTab: this.activityModeTab,
          sessionIndex: this.sessionIndex,
        });
        wx.navigateBack({
          delta: 1,
        });
      }
    },
    async publishConfig(params) {
      try {
        let res = await publishConfig(params);
        if (res.data.data.user_number) {
          this.groupNumList = [];
          res.data.data.user_number.map((item) => {
            let key = Object.keys(item);
            let value = Object.values(item);
            this.groupNumList.push({
              key: key[0],
              value: value[0],
            });
          });
        }
      } catch (error) {}
    },
    async userSearch(params) {
      try {
        let res = await userSearch(params);
        if (res.data.data) {
          this.userMemberList = [];
          res.data.data.map((item) => {
            item.checked = false;
            this.userMemberList.push(item);
          });
        }
      } catch (error) {}
    },
  },
  onShow() {
    this.publishConfig({
      code: ["user_number"],
    });
  },
  onLoad: function (options) {
    if (options.applicationType) {
      this.applicationType = Number(options.applicationType);
      this.enrollment = Number(options.enrollment);
    }
    if (options.sessionIndex) {
      this.sessionIndex = Number(options.sessionIndex);
    }
    if (options.activityModeTab) {
      this.activityModeTab = Number(options.activityModeTab);
    }
    if (
      (Number(options.applicationType) === 0 &&
        Number(options.activityModeTab) === 0) ||
      (Number(options.applicationType) === 1 &&
        Number(options.activityModeTab) === 0)
    ) {
      if (options.member.length) {
        this.member = JSON.parse(options.member);
      }
      this.allow = Number(options.allow);
    }
    if (
      (Number(options.applicationType) === 0 &&
        Number(options.activityModeTab) === 1) ||
      (Number(options.applicationType) === 1 &&
        Number(options.activityModeTab) === 1)
    ) {
      let candidateAreaList = JSON.parse(options.candidateAreaList);
      if (candidateAreaList.length) {
        this.candidateAreaList = JSON.parse(options.candidateAreaList);
      } else {
        this.groupChecked = false;
      }
      this.enrollment = Number(options.enrollment);
      this.groupNum = Number(options.groupNum);
      this.groupNumIndex = this.groupNum - 1; // 下拉框值回显
    }
    if (
      (Number(options.applicationType) === 0 &&
        Number(options.activityModeTab) === 2 &&
        options.fixedGroupList.length) ||
      (Number(options.applicationType) === 1 &&
        Number(options.activityModeTab) === 2 &&
        options.fixedGroupList.length)
    ) {
      this.fixedGroupList = JSON.parse(options.fixedGroupList);
    }
  },
};
</script>

<style lang="scss" scoped></style>
