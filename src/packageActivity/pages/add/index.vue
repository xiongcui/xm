<template>
  <view class="add-activity">
    <view class="activity-title">
      <view class="activity-lable">
        <text class="required">*</text>
        <text>标题</text>
      </view>
      <input
        class="activity-name-input"
        placeholder="简明的标题更具吸引力哦"
        v-model="title"
      />
    </view>
    <view class="activity-info">
      <view class="activity-info-left">
        <view class="activity-info-item">
          <view class="activity-lable">
            <text class="required">*</text>
            <text>活动日期</text>
          </view>
          <view class="activity-content">
            <picker @change="dateChange" mode="date" class="picker w100">
              <view class="picker_children picked" v-if="date">{{ date }}</view>
              <view class="picker_children" v-else>请选择活动日期</view>
            </picker>
          </view>
        </view>
        <view class="activity-info-item">
          <view class="activity-lable">
            <text class="required">*</text>
            <text>活动时间</text>
          </view>
          <view class="activity-content-time">
            <picker @change="startTimeChange" mode="time" class="picker">
              <view class="picker_children picked" v-if="startTime">{{
                startTime
              }}</view>
              <view class="picker_children" v-else>开始时间</view>
            </picker>
            <text class="to">至</text>
            <picker @change="endTimeChange" mode="time" class="picker">
              <view class="picker_children picked" v-if="endTime">{{
                endTime
              }}</view>
              <view class="picker_children" v-else>结束时间</view>
            </picker>
          </view>
        </view>
        <view class="activity-info-item">
          <view class="activity-lable">
            <text class="required">*</text>
            <text>报名截止时间</text>
          </view>
          <view class="activity-content-time">
            <picker
              @change="registrationDeadlineChange"
              :value="registrationDeadlineIndex"
              :range="deadlineList"
              :range-key="'key'"
            >
              <view
                class="picker_children picked"
                v-if="registrationDeadline"
                >{{ registrationDeadline }}</view
              >
              <view class="picker_children" v-else>请选择</view>
            </picker>
          </view>
        </view>
        <view class="activity-info-item">
          <view class="activity-lable">
            <text class="required">*</text>
            <text>取消报名截至时间</text>
          </view>
          <view class="activity-content-time">
            <picker
              @change="deadlineChange"
              :value="deadlineIndex"
              :range="deadlineList"
              :range-key="'key'"
            >
              <view class="picker_children picked" v-if="deadline">{{
                deadline
              }}</view>
              <view class="picker_children" v-else>请选择</view>
            </picker>
          </view>
        </view>
      </view>
      <view class="activity-info-right">
        <view class="upload-cover" v-if="cover">
          <image :src="cover" class="upload-width" mode="aspectFill"></image>
          <text class="upload-close" @tap="uploadCoverClose"></text>
        </view>
        <view class="upload-cover" @tap="chooseCoverImage" v-else>
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
            class="cover-img"
            mode="aspectFit"
          ></image>
          <view>
            <text class="cover-txt">上传封面主图</text>
          </view>
        </view>
      </view>
    </view>
    <view class="activity-venue">
      <view class="activity-info-item">
        <view class="activity-lable">
          <text class="required">*</text>
          <text>活动地点</text>
        </view>
        <picker
          mode="region"
          value="region"
          class="activity-location"
          level="city"
          @change="bindRegionChange"
        >
          <view class="picker_children picked" v-if="select_city">{{
            select_city
          }}</view>
          <view class="picker_children" v-else>请选择</view>
        </picker>
      </view>
      <view class="activity-info-item">
        <view class="activity-lable">
          <text class="required">*</text>
          <text>活动场地</text>
        </view>
        <view class="activity-location">
          <input
            class="activity-location-input"
            placeholder="请输入具体的场地，能够精确定位"
            v-model="venue"
          />
        </view>
      </view>
    </view>
    <view class="activity-desc">
      <view class="activity-info-item">
        <view class="activity-lable">
          <text class="required">*</text>
          <text>活动描述</text>
        </view>
      </view>
      <textarea
        class="activity-desc-input"
        auto-height
        placeholder="请尽可能详细的描述活动内容、主要细节、活动安排等"
        v-model="desc"
      />
    </view>
    <view class="activity-upload">
      <view class="activity-info-item">
        <view class="activity-lable">
          <text class="required">*</text>
          <text>上传图片（最多上传9张）</text>
        </view>
      </view>
      <view class="works-upload-list">
        <view
          class="works-upload-img"
          v-for="(item, index) in imgList"
          :key="index"
        >
          <image
            :src="item"
            class="upload-width"
            mode="aspectFill"
            @tap="previewImage(item, imgList)"
          ></image>
          <text class="upload-close" @tap="uploadImgClose(index)"></text>
        </view>
        <view class="works-upload-img" @tap="chooseImage">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/upload-img.png"
            class="upload-img"
            mode="aspectFit"
          ></image>
          <view>
            <text class="upload-txt">上传图片</text>
          </view>
        </view>
      </view>
    </view>
    <view class="set-scene">
      <view class="set-scene-title"
        ><text class="required">*</text> 设置场景
      </view>
      <view
        class="set-scene-box"
        v-for="(item, index) in sceneList"
        :key="index"
      >
        <view class="scene-theme">
          <text class="theme-name">场景主题</text>
          <input
            class="theme-input"
            placeholder="请输入场景名称(限8字)"
            v-model="item.sceneName"
          />
          <view
            class="theme-delete"
            @tap="deleteTheme(index)"
            v-if="sceneList.length > 1"
          >
            删除
          </view>
        </view>
        <view class="scene-item">
          <view class="tab">
            <view
              class="tab-item"
              :class="item.sceneTab == 0 ? 'on' : ''"
              @tap="changeItem(index, 0)"
              >常规配置
            </view>
            <view
              class="tab-item"
              :class="item.sceneTab == 1 ? 'on' : ''"
              @tap="changeItem(index, 1)"
              >角色配置
            </view>
          </view>
          <view class="scene-tips" v-if="item.sceneTab == 0">
            *若招募时对用户参与的角色无特殊要求，建议选择此配置
          </view>
          <view class="scene-tips" v-else
            >*此需设置报名时可供选择的角色，请按所需设置至少2个角色</view
          >
          <view
            class="set-scene-ct"
            v-for="(sceneitem, scenekey) in item.list"
            :key="scenekey"
          >
            <view
              class="role-delete"
              @tap="deleteRole(index, scenekey)"
              v-if="item.sceneTab == 1 && item.list.length > 2"
            >
              删除
            </view>
            <view class="activity-info-item" v-if="item.sceneTab == 1">
              <view class="activity-lable">
                <text class="required">*</text>
                <text>角色名称</text>
              </view>
              <input
                class="role-name"
                placeholder="参与人员的角色名称(如模特等)"
                v-model="sceneitem.roleName"
              />
            </view>
            <view class="activity-info-item">
              <view class="activity-lable">
                <text class="required">*</text>
                <text>收费模式</text>
              </view>
              <picker
                @change="
                  (e) => {
                    chargeChange(e, index, scenekey);
                  }
                "
                :value="sceneitem.chargeIndex"
                :range="chargeList"
                :range-key="'key'"
              >
                <view class="picker_children picked" v-if="sceneitem.charge">{{
                  sceneitem.charge
                }}</view>
                <view class="picker_children" v-else>请选择</view>
              </picker>
            </view>
            <view class="activity-info-item" v-if="sceneitem.showAmount">
              <view class="activity-lable">
                <text class="required">*</text>
                <text>报名费用</text>
              </view>
              <view class="charge-box">
                <input
                  placeholder="请输入收费金额"
                  v-model="sceneitem.chargeAmount"
                  type="number"
                  class="charge-amount"
                />
                <text class="early-bird-unit">元/人</text>
              </view>
            </view>
            <view class="activity-info-item">
              <view class="activity-lable">
                <text class="required">*</text>
                <text>报名人数</text>
              </view>
              <view class="charge-box">
                <input
                  placeholder="请输入报名人数"
                  v-model="sceneitem.enrollment"
                  type="number"
                  class="charge-amount"
                />
                <text class="early-bird-unit">人</text>
              </view>
            </view>
            <view class="activity-info-item">
              <view class="activity-lable">
                <text>报名对象</text>
              </view>
              <view class="object">
                <view
                  class="object-item"
                  @tap="objectChange(index, scenekey, 100)"
                >
                  <image
                    :src="
                      sceneitem.objectRadio == 100
                        ? 'https://yuepai-oss.qubeitech.com/static/images/common/select_1.png'
                        : 'https://yuepai-oss.qubeitech.com/static/images/common/select_0.png'
                    "
                  ></image>
                  <text>公向众开放</text>
                </view>
                <view
                  class="object-item"
                  @tap="objectChange(index, scenekey, 200)"
                >
                  <image
                    :src="
                      sceneitem.objectRadio == 200
                        ? 'https://yuepai-oss.qubeitech.com/static/images/common/select_1.png'
                        : 'https://yuepai-oss.qubeitech.com/static/images/common/select_0.png'
                    "
                  ></image>
                  <text>仅邀请参与</text>
                </view>
                <view
                  class="object-item"
                  @tap="objectChange(index, scenekey, 300)"
                >
                  <image
                    :src="
                      sceneitem.objectRadio == 300
                        ? 'https://yuepai-oss.qubeitech.com/static/images/common/select_1.png'
                        : 'https://yuepai-oss.qubeitech.com/static/images/common/select_0.png'
                    "
                  ></image>
                  <text>混合</text>
                </view>
              </view>
            </view>
            <view class="activity-info-item" v-if="sceneitem.objectRadio !== 0">
              <view class="activity-lable">
                <text>邀请成员</text>
              </view>
              <view
                class="picker_children picked member-row"
                v-if="sceneitem.member.length"
                @tap="memberClick(index, scenekey)"
                >{{ formatMember(sceneitem.member) }}</view
              >
              <view
                class="picker_children"
                v-else
                @tap="memberClick(index, scenekey)"
                >邀请报名成员,待对方确认后有效</view
              >
            </view>
            <view class="activity-info-item">
              <view class="activity-lable">
                <text>邀请成员是否展示在详情页</text>
              </view>
              <view class="activity-check-box">
                <view
                  @tap="chooseShowMember(index, scenekey)"
                  class="check_box"
                  :class="sceneitem.showMember === 1 ? 'check_box_ed' : ''"
                  data-status="1"
                >
                  是
                  <image
                    :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                      sceneitem.showMember === 1 ? 1 : 0
                    }.png`"
                  ></image>
                </view>
                <view
                  @tap="chooseShowMember(index, scenekey)"
                  class="check_box"
                  :class="sceneitem.showMember === 0 ? 'check_box_ed' : ''"
                  data-status="2"
                >
                  否
                  <image
                    :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                      sceneitem.showMember === 0 ? 1 : 0
                    }.png`"
                  ></image>
                </view>
              </view>
            </view>
          </view>
          <view
            class="add-role"
            @tap="addRole(index)"
            v-if="item.sceneTab == 1"
          >
            <image src="../../../assets/images/add-role.png"></image>
            新建角色
          </view>
        </view>
      </view>
      <view class="add-scene-mode" @tap="addScene">
        <image src="../../../assets/images/add-scene.png"></image>
        新建场景
      </view>
    </view>
    <view class="activity-cost" v-if="false">
      <view class="activity-info-item">
        <view class="activity-lable">
          <text>活动费用</text>
        </view>
      </view>
      <view class="activity-info-item">
        <view class="activity-lable">
          <text>特享优惠</text>
        </view>
        <picker
          @change="preferentialChange"
          :value="preferentialIndex"
          :range="preferentialList"
          :range-key="'key'"
          v-if="deductionChecked"
        >
          <view class="picker_children picked" v-if="preferential">{{
            preferential
          }}</view>
          <view class="picker_children" v-else>请选择优惠</view>
        </picker>
        <view class="deduction-box" v-if="deductionChecked">
          <text class="required">*</text>
          <input
            placeholder="请输入减免金额"
            v-model="deductionAmount"
            type="number"
            class="deduction-amount"
          />
        </view>
        <switch
          :checked="deductionChecked"
          @change="switchDeductionChange"
          color="#fe5457"
        />
      </view>
      <view class="activity-info-item">
        <view class="activity-lable">
          <text>早鸟优惠</text>
        </view>
        <switch
          :checked="earlyBirdChecked"
          @change="earlyBirdChange"
          color="#fe5457"
        />
      </view>
      <view class="activity-info-item" v-if="earlyBirdChecked">
        <view class="early-bird-discount">
          <view class="activity-lable early-bird-mr">
            <text class="required">*</text>
            <text>活动开始前</text>
          </view>
          <picker
            @change="beforeChange"
            :value="beforeIndex"
            :range="beforeList"
            :range-key="'key'"
          >
            <view class="picker_children picked" v-if="before">{{
              before
            }}</view>
            <view class="picker_children" v-else>请选择</view>
          </picker>
        </view>
        <view class="early-bird-discount">
          <view class="activity-lable">
            <text class="required">*</text>
            <text>减免金额</text>
          </view>
          <input
            placeholder="请输入"
            v-model="earlyBirdDeductionAmount"
            type="number"
            class="deduction-amount2"
          />
          <text class="early-bird-unit">元/人</text>
        </view>
      </view>
      <!-- <view class="tab">
        <view
          class="tab-item"
          :class="applicationTab == 0 ? 'on' : ''"
          @tap="changeItem(0)"
          >统一报名
        </view>
        <view
          class="tab-item"
          :class="applicationTab == 1 ? 'on' : ''"
          @tap="changeItem(1)"
          >分场报名
        </view>
      </view>
      <view class="application" v-if="applicationTab == 0">
        <view class="activity-info-item">
          <view class="activity-lable">
            <text class="required">*</text>
            <text>场次名称</text>
          </view>
          <view class="charge-box">
            <input
              placeholder="请输入场次名称"
              v-model="sessionName"
              class="charge-amount"
            />
          </view>
        </view>
        <view class="activity-info-item">
          <view class="activity-lable">
            <text class="required">*</text>
            <text>收费模式</text>
          </view>
          <picker
            @change="chargeChange"
            :value="chargeIndex"
            :range="chargeList"
            :range-key="'key'"
          >
            <view class="picker_children picked" v-if="charge">{{
              charge
            }}</view>
            <view class="picker_children" v-else>请选择</view>
          </picker>
        </view>
        <view class="activity-info-item" v-if="showAmount">
          <view class="activity-lable">
            <text class="required">*</text>
            <text>报名费用</text>
          </view>
          <view class="charge-box">
            <input
              placeholder="请输入收费金额"
              v-model="chargeAmount"
              type="number"
              class="charge-amount"
            />
            <text class="early-bird-unit">元/人</text>
          </view>
        </view>
        <view class="activity-info-item">
          <view class="activity-lable">
            <text class="required">*</text>
            <text>报名人数</text>
          </view>
          <view class="charge-box">
            <input
              placeholder="请输入报名人数"
              v-model="enrollment"
              type="number"
              class="charge-amount"
            />
            <text class="early-bird-unit">人</text>
          </view>
        </view>
        <view class="active-echo" v-if="activityModeTab === ''">
          <view class="active-echo-item">
            <view class="activity-lable">
              <text>常规活动</text>
            </view>
            <view class="active-echo-txt">无活动分组，无邀请成员</view>
          </view>
        </view>
        <view
          class="active-echo"
          v-if="activityModeTab === 0"
          @tap="editActivity"
        >
          <view class="active-echo-item">
            <view class="activity-lable">
              <text>常规活动</text>
            </view>
            <view class="active-echo-txt"
              >已邀请{{ this.member.length }}名成员</view
            >
          </view>
        </view>
        <view
          class="active-echo"
          v-if="activityModeTab === 1"
          @tap="editActivity"
        >
          <view class="active-echo-item">
            <view class="activity-lable">
              <text>随机分组</text>
            </view>
            <view class="active-echo-txt font22"
              >随机分组成{{ formatGroupNum }}组，每组{{
                groupNum
              }}名，成员由如下候选区构成</view
            >
          </view>
          <view
            class="active-echo-item"
            v-for="(item, index) in candidateAreaList"
            :key="index"
          >
            <view class="active-echo-content">
              {{ item.constituencyName }}候选区选{{
                item.groupNum
              }}名成员，已邀请{{ item.member.length }}名成员
              <view class="active-echo-edit" @tap="editActivity">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/edit.png"
                ></image>
              </view>
            </view>
          </view>
        </view>
        <view
          class="active-echo"
          v-if="activityModeTab === 2"
          @tap="editActivity"
        >
          <view class="active-echo-item">
            <view class="activity-lable">
              <text>固定分组</text>
            </view>
            <view class="active-echo-txt font22"
              >该场活动被固定分成{{
                fixedGroupList.length
              }}组，成员由如下候选区构成</view
            >
          </view>
          <view
            class="active-echo-item"
            v-for="(item, index) in fixedGroupList"
            :key="index"
          >
            <view class="active-echo-content">
              {{ formatFixedGroup(item) }}
              <view class="active-echo-edit" @tap="editActivity">
                <image
                  src="https://yuepai-oss.qubeitech.com/static/images/edit.png"
                ></image>
              </view>
            </view>
          </view>
        </view>
        <view
          class="add-packet-mode"
          @tap="setPacketMode"
          v-if="activityModeTab === ''"
        >
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
          ></image>
          设置分组模式
        </view>
        <view class="application-padding"></view>
      </view>
      <view class="application" v-if="applicationTab == 1">
        <block v-for="(item, index) in applicationList" :key="index">
          <view class="session-title">
            场次{{ index + 1 }}
            <text
              class="session-delete"
              @tap="sessionDelete(index)"
              v-if="applicationList.length >= 3"
              >删除</text
            >
          </view>
          <view class="activity-info-item">
            <view class="activity-lable">
              <text class="required">*</text>
              <text>场次名称</text>
            </view>
            <view class="charge-box">
              <input
                placeholder="请输入场次名称"
                v-model="item.sessionName"
                class="charge-amount"
              />
            </view>
          </view>
          <view class="activity-info-item">
            <view class="activity-lable">
              <text class="required">*</text>
              <text>收费模式</text>
            </view>
            <picker
              @change="
                (e) => {
                  chargeItemChange(e, index);
                }
              "
              :value="item.chargeIndex"
              :range="chargeList"
              :range-key="'key'"
            >
              <view class="picker_children picked" v-if="item.charge">{{
                item.charge
              }}</view>
              <view class="picker_children" v-else>请选择</view>
            </picker>
          </view>
          <view class="activity-info-item" v-if="item.showAmount">
            <view class="activity-lable">
              <text class="required">*</text>
              <text>报名费用</text>
            </view>
            <view class="charge-box">
              <input
                placeholder="请输入收费金额"
                v-model="item.chargeAmount"
                type="number"
                class="charge-amount"
              />
              <text class="early-bird-unit">元/人</text>
            </view>
          </view>
          <view class="activity-info-item">
            <view class="activity-lable">
              <text class="required">*</text>
              <text>报名人数</text>
            </view>
            <view class="charge-box">
              <input
                placeholder="请输入报名人数"
                v-model="item.enrollment"
                type="number"
                class="charge-amount"
              />
              <text class="early-bird-unit">人</text>
            </view>
          </view>
          <view class="active-echo" v-if="item.activityModeTab === ''">
            <view class="active-echo-item">
              <view class="activity-lable">
                <text>常规活动</text>
              </view>
              <view class="active-echo-txt">无活动分组，无邀请成员</view>
            </view>
          </view>
          <view
            class="active-echo"
            v-if="item.activityModeTab === 0"
            @tap="editActivity(index)"
          >
            <view class="active-echo-item">
              <view class="activity-lable">
                <text>常规活动</text>
              </view>
              <view class="active-echo-txt"
                >已邀请{{ item.member.length }}名成员</view
              >
            </view>
          </view>
          <view
            class="active-echo"
            v-if="item.activityModeTab === 1"
            @tap="editActivity(index)"
          >
            <view class="active-echo-item">
              <view class="activity-lable">
                <text>随机分组</text>
              </view>
              <view class="active-echo-txt font22"
                >随机分组成{{ item.formatGroupNum }}组，每组{{
                  item.groupNum
                }}名，成员由如下候选区构成</view
              >
            </view>
            <view
              class="active-echo-item"
              v-for="(items, indexs) in item.candidateAreaList"
              :key="indexs"
            >
              <view class="active-echo-content">
                {{ items.constituencyName }}候选区选{{
                  items.groupNum
                }}名成员，已邀请{{ items.member.length }}名成员
                <view class="active-echo-edit" @tap="editActivity(index)">
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/edit.png"
                  ></image>
                </view>
              </view>
            </view>
          </view>
          <view class="active-echo" v-if="item.activityModeTab === 2">
            <view class="active-echo-item">
              <view class="activity-lable">
                <text>固定分组</text>
              </view>
              <view class="active-echo-txt font22"
                >该场活动被固定分成{{
                  item.fixedGroupList.length
                }}组，成员由如下候选区构成</view
              >
            </view>
            <view
              class="active-echo-item"
              v-for="(items, indexs) in item.fixedGroupList"
              :key="indexs"
            >
              <view class="active-echo-content">
                {{ formatFixedGroup(items) }}
                <view class="active-echo-edit" @tap="editActivity(index)">
                  <image
                    src="https://yuepai-oss.qubeitech.com/static/images/edit.png"
                  ></image>
                </view>
              </view>
            </view>
          </view>
          <view
            class="add-packet-mode"
            @tap="setPacketMode(index)"
            v-if="item.activityModeTab === ''"
          >
            <image
              src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
            ></image>
            设置分组模式
          </view>
        </block>
        <view class="application-padding"></view>
        <view class="add-application" @tap="addApplication">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
          ></image>
          添加场次
        </view>
        <view class="application-padding"></view>
      </view> -->
    </view>
    <view class="activity-security">
      <view class="activity-info-item">
        <view class="activity-lable">
          <text>活动担保</text>
        </view>
        <switch
          :checked="securityChecked"
          @change="securityChange"
          color="#fe5457"
        />
      </view>
      <view class="activity-info-item" v-if="securityChecked">
        <view class="activity-lable">
          <text>担保金额</text>
        </view>
        <input
          placeholder="请输入担保金额"
          v-model="securityAmount"
          type="number"
          class="security-amount"
        />
      </view>
      <view class="activity-info-item" v-if="securityChecked">
        <view class="activity-lable">
          <text>是否返押</text>
        </view>
        <view class="activity-check-box">
          <view
            @tap="chooseRemand"
            class="check_box"
            :class="remand === 1 ? 'check_box_ed' : ''"
            data-status="1"
          >
            是
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                remand === 1 ? 1 : 0
              }.png`"
            ></image>
          </view>
          <view
            @tap="chooseRemand"
            class="check_box"
            :class="remand === 0 ? 'check_box_ed' : ''"
            data-status="2"
          >
            否
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                remand === 0 ? 1 : 0
              }.png`"
            ></image>
          </view>
        </view>
        <view class="remand-ratio">
          <view class="activity-lable">
            <text>返押比例</text>
          </view>
          <input
            placeholder="请输入返押比例"
            v-model="remandRatio"
            type="number"
            class="remand-ratio-input"
          />
          <text>%</text>
        </view>
      </view>
    </view>
    <!-- <view class="activity-task">
      <view class="activity-info-item">
        <view class="activity-lable">
          <text>活动任务</text>
        </view>
        <switch :checked="taskChecked" @change="taskChange" color="#fe5457" />
      </view>
      <block v-if="taskChecked">
        <view class="task-box" v-for="(item, index) in taskList" :key="index">
          <view
            class="task-delete"
            @tap="taskDelete(index)"
            v-if="taskList.length >= 2"
            >删除</view
          >
          <view class="activity-info-item">
            <view class="activity-lable">
              <text>任务类型</text>
            </view>
            <picker
              @change="
                (e) => {
                  taskItemChange(e, index);
                }
              "
              :value="item.taskIndex"
              :range="taskValueList"
              :range-key="'value'"
              class="mleft"
            >
              <view class="picker_children picked" v-if="item.taskType">{{
                item.taskType
              }}</view>
              <view class="picker_children" v-else>请选择</view>
            </picker>
          </view>
          <view class="activity-info-item">
            <view class="activity-lable">
              <text>截至时间</text>
            </view>
            <view class="activity-time">
              <view class="end-day-time"> 活动结束后 </view>
              <picker
                @change="
                  (e) => {
                    endDayTimeChange(e, index);
                  }
                "
                :value="item.endDayTimeIndex"
                :range="endDayTimeList"
                :range-key="'value'"
                class="mleft"
              >
                <view class="picker_children picked" v-if="item.endDayTime">{{
                  item.endDayTime
                }}</view>
                <view class="picker_children" v-else>请选择</view>
              </picker>
              <view class="end-day-time">天内完成任务</view>
            </view>
          </view>
          <view class="activity-info-item">
            <view class="activity-lable">
              <text>是否设置为返押条件</text>
            </view>
            <view class="activity-check-box">
              <view
                @tap="chooseActivityRemand(index)"
                class="check_box"
                :class="item.activityRemand === 1 ? 'check_box_ed' : ''"
                data-status="1"
              >
                是
                <image
                  :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                    item.activityRemand === 1 ? 1 : 0
                  }.png`"
                ></image>
              </view>
              <view
                @tap="chooseActivityRemand(index)"
                class="check_box"
                :class="item.activityRemand === 0 ? 'check_box_ed' : ''"
                data-status="2"
              >
                否
                <image
                  :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                    item.activityRemand === 0 ? 1 : 0
                  }.png`"
                ></image>
              </view>
            </view>
          </view>
        </view>
        <view class="add-application" @tap="addTask">
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
          ></image>
          新建任务
        </view>
        <view class="split" v-if="taskList.length"></view>
      </block>
    </view> -->
    <view class="setup">
      <view class="activity-info-item">
        <view class="activity-lable">
          <text>更多设置</text>
        </view>
      </view>
      <view class="activity-setup-item">
        <view class="activity-lable">
          <text>公开活动</text>
        </view>
        <view class="activity-check-box">
          <view
            @tap="choosePublicActivity"
            class="check_box"
            :class="publicActivity === 1 ? 'check_box_ed' : ''"
            data-status="1"
          >
            是
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                publicActivity === 1 ? 1 : 0
              }.png`"
            ></image>
          </view>
          <view
            @tap="choosePublicActivity"
            class="check_box"
            :class="publicActivity === 0 ? 'check_box_ed' : ''"
            data-status="2"
          >
            否
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                publicActivity === 0 ? 1 : 0
              }.png`"
            ></image>
          </view>
        </view>
      </view>
      <view class="activity-setup-item">
        <view class="activity-lable">
          <text>容许等位</text>
        </view>
        <view class="activity-check-box">
          <view
            @tap="chooseSetupAllow"
            class="check_box"
            :class="setupAllow === 1 ? 'check_box_ed' : ''"
            data-status="1"
          >
            是
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                setupAllow === 1 ? 1 : 0
              }.png`"
            ></image>
          </view>
          <view
            @tap="chooseSetupAllow"
            class="check_box"
            :class="setupAllow === 0 ? 'check_box_ed' : ''"
            data-status="2"
          >
            否
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                setupAllow === 0 ? 1 : 0
              }.png`"
            ></image>
          </view>
        </view>
        <view class="activity-tips"> 报名满员后，可报名等位候补 </view>
      </view>
      <view class="activity-setup-item" v-if="false">
        <view class="activity-lable">
          <text>容许转让</text>
        </view>
        <view class="activity-check-box">
          <view
            @tap="chooseTransference"
            class="check_box"
            :class="transference === 1 ? 'check_box_ed' : ''"
            data-status="1"
          >
            是
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                transference === 1 ? 1 : 0
              }.png`"
            ></image>
          </view>
          <view
            @tap="chooseTransference"
            class="check_box"
            :class="transference === 0 ? 'check_box_ed' : ''"
            data-status="2"
          >
            否
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                transference === 0 ? 1 : 0
              }.png`"
            ></image>
          </view>
        </view>
        <view class="activity-tips"> 已报名成员可转让给某人等位的人 </view>
      </view>
      <view class="activity-setup-item">
        <view class="activity-lable">
          <text>实名报名</text>
        </view>
        <view class="activity-check-box">
          <view
            @tap="chooseRealName"
            class="check_box"
            :class="realName === 1 ? 'check_box_ed' : ''"
            data-status="1"
          >
            是
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                realName === 1 ? 1 : 0
              }.png`"
            ></image>
          </view>
          <view
            @tap="chooseRealName"
            class="check_box"
            :class="realName === 0 ? 'check_box_ed' : ''"
            data-status="2"
          >
            否
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                realName === 0 ? 1 : 0
              }.png`"
            ></image>
          </view>
        </view>
        <view class="activity-tips"> 报名时需进行实名校验 </view>
      </view>
      <view class="activity-setup-item">
        <view class="activity-lable">
          <text>定时开启报名</text>
        </view>
        <view class="activity-check-box">
          <view
            @tap="chooseRegularTime"
            class="check_box"
            :class="regularTime === 1 ? 'check_box_ed' : ''"
            data-status="1"
          >
            是
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                regularTime === 1 ? 1 : 0
              }.png`"
            ></image>
          </view>
          <view
            @tap="chooseRegularTime"
            class="check_box"
            :class="regularTime === 0 ? 'check_box_ed' : ''"
            data-status="2"
          >
            否
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                regularTime === 0 ? 1 : 0
              }.png`"
            ></image>
          </view>
        </view>
        <view class="activity-tips"> 发布后即可报名 </view>
      </view>
      <view class="activity-setup-item" v-if="regularTime == 1">
        <view class="activity-lable">
          <text>活动当前</text>
        </view>
        <picker
          @change="nowDayChange"
          :value="nowDayIndex"
          :range="nowDayList"
          :range-key="'key'"
          class="mleft"
        >
          <view class="picker_children picked" v-if="nowDay">{{ nowDay }}</view>
          <view class="picker_children" v-else>请选择</view>
        </picker>
        <text class="now-day-txt">天的</text>
        <picker @change="nowTimeChange" mode="time" class="mleft">
          <view class="picker_children picked" v-if="nowTime">{{
            nowTime
          }}</view>
          <view class="picker_children" v-else>请选择</view>
        </picker>
        <text class="now-day-txt">开放报名</text>
      </view>
    </view>
    <view class="activity-agreement" v-if="false">
      <view class="activity-info-item">
        <view class="activity-lable">
          <text>协议文本</text>
        </view>
        <view class="activity-tips"> (建议线下拟好协议后直接粘贴) </view>
      </view>
      <view
        class="agreement-item"
        v-for="(item, index) in agreementList"
        :key="index"
      >
        <view class="activity-lable">
          <text>{{ item.name }}</text>
        </view>
        <textarea
          auto-height
          v-model="item.agreementContent"
          class="agreement-content"
        />
        <view class="activity-check-box">
          <view
            @tap="chooseAgreement(index)"
            class="check_box"
            :class="item.checked === 1 ? 'check_box_ed' : ''"
          >
            <image
              :src="`https://yuepai-oss.qubeitech.com/static/images/common/select2_${
                item.checked === 1 ? 1 : 0
              }.png`"
            ></image>
          </view>
        </view>
      </view>
      <view class="add-agreement" @tap="addAgreement">
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/add_icon.png"
        ></image>
        新建协议
      </view>
      <view class="split"></view>
    </view>
    <!--新建协议-->
    <view class="create-agreement" v-if="agreementVisble" @tap="closeAgreement">
      <view class="agreement-box">
        <view class="agreement-title">
          新建协议
          <view class="agreement-close" @tap="closeAgreement"></view>
        </view>
        <view class="activity-info-item">
          <view class="activity-lable">
            <text>协议名称</text>
          </view>
          <input
            placeholder="请输入协议名称"
            v-model="agreementName"
            class="agreement-name"
            @tap.stop=""
          />
        </view>
        <view class="agreement-item">
          <view class="activity-lable">
            <text>协议内容</text>
          </view>
          <textarea
            auto-height
            v-model="agreementContent"
            class="agreement-content"
            @tap.stop=""
          />
        </view>
        <view class="agreement-btns" @tap.stop="agreementDetermine">
          确定
        </view>
      </view>
    </view>
    <!--新建协议-->
    <view class="add_bottom" :class="isIphoneX ? 'fix-iphonex-button' : ''">
      <view class="add_btn" @tap="submit">确认发布</view>
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
  </view>
</template>

<script>
import { errortip, openPage } from "../../../utils/util";
import {
  publishConfig,
  publishCreate,
  userSearch,
} from "../../../api/index.js";
import "./index.scss";
import { Base64 } from "js-Base64";
export default {
  name: "addActivity",
  data() {
    return {
      isIphoneX: false,
      title: "",
      enrollment: "",
      date: "",
      startTime: "",
      endTime: "",
      cover: "",
      deadline: "",
      deadlineList: [],
      deadlineIndex: "",
      registrationDeadlineIndex: "",
      registrationDeadline: "",
      preferential: "",
      preferentialList: [],
      preferentialIndex: "",
      beforeIndex: "",
      before: "",
      beforeList: [],
      chargeIndex: "",
      charge: "",
      chargeList: [],
      applicationTargetIndex: "",
      applicationTarget: "",
      applicationTargetList: [],
      activityMemberIndex: "",
      activityMember: "",
      activityMemberList: [],
      groupIndex: "",
      group: 1,
      groupList: [],
      nowDay: "",
      nowDayIndex: "",
      nowDayList: [],
      locale_address: "",
      select_city: "",
      regionList: [],
      venue: "",
      desc: "",
      imgList: [],
      deductionAmount: "",
      earlyBirdDeductionAmount: "",
      deductionChecked: false,
      earlyBirdChecked: false,
      applicationTab: 0,
      chargeAmount: "",
      enrollment: "",
      sessionName: "",
      applicationList: [
        {
          sessionName: "",
          charge: "",
          chargeIndex: "",
          chargeAmount: "",
          enrollment: "",
          sessionIndex: "",
          activityModeTab: "",
          formatGroupNum: "",
          candidateAreaList: [],
          fixedGroupList: [],
          showAmount: true,
        },
        {
          sessionName: "",
          charge: "",
          chargeIndex: "",
          chargeAmount: "",
          enrollment: "",
          sessionIndex: "",
          activityModeTab: "",
          formatGroupNum: "",
          candidateAreaList: [],
          fixedGroupList: [],
          showAmount: true,
        },
      ],
      activityModeTab: "",
      allow: 1,
      groupNum: "",
      formatGroupNum: "",
      groupNumIndex: "",
      groupNumList: [],
      nowTime: "",
      nowTimeIndex: "",
      nowTimeList: [],
      groupChecked: true,
      member: [],
      candidateAreaList: [],
      fixedGroupList: [],
      securityChecked: false,
      securityAmount: "",
      remand: 1,
      remandRatio: "",
      taskChecked: false,
      taskValueList: [
        {
          value: 0,
          name: "上传作品",
        },
        {
          value: 1,
          name: "发布自媒体",
        },
        {
          value: 2,
          name: "转发截图",
        },
      ],
      taskList: [
        {
          taskIndex: "",
          taskType: "",
          endDayTimeIndex: "",
          endDayTime: "",
          activityRemand: 1,
        },
      ],
      endDayTimeList: [],
      publicActivity: 1,
      setupAllow: 1,
      transference: 0,
      realName: 0,
      regularTime: 0,
      agreementList: [
        {
          name: "活动协议",
          agreementContent: "",
          checked: 0,
        },
        {
          name: "免责声明",
          agreementContent: "",
          checked: 0,
        },
        {
          name: "授权协议",
          agreementContent: "",
          checked: 0,
        },
      ],
      agreementName: "",
      agreementContent: "",
      agreementVisble: false,
      queryMethods: 1,
      query: "",
      userMemberList: [],
      invitedList: [],
      inviteVisble: false,
      memberType: "",
      memberSelectedList: [],
      memberItemIndex: "",
      activeEchoIndex: "",
      showAmount: true,
      sceneList: [
        {
          sceneName: "",
          sceneTab: 0,
          list: [
            {
              roleName: "",
              charge: "",
              chargeIndex: "",
              showAmount: true,
              chargeAmount: "",
              enrollment: "",
              object: "",
              objectRadio: 300,
              member: [],
              showMember: 1,
            },
          ],
        },
      ],
    };
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
    bindRegionChange(e) {
      this.select_city = e.detail.value.join("-");
      this.regionList = e.detail.code;
    },
    dateChange(e) {
      this.date = e.detail.value;
    },
    startTimeChange(e) {
      this.startTime = e.detail.value;
    },
    nowTimeChange(e) {
      this.nowTime = e.detail.value;
    },
    endTimeChange(e) {
      this.endTime = e.detail.value;
    },
    uploadCoverClose() {
      this.cover = "";
    },
    registrationDeadlineChange(e) {
      this.registrationDeadline = this.deadlineList[e.detail.value].key;
      this.registrationDeadlineIndex = e.detail.value;
    },
    deadlineChange(e) {
      this.deadline = this.deadlineList[e.detail.value].key;
      this.deadlineIndex = e.detail.value;
    },
    preferentialChange(e) {
      this.preferential = this.preferentialList[e.detail.value].key;
      this.preferentialIndex = e.detail.value;
    },
    beforeChange(e) {
      this.before = this.beforeList[e.detail.value].key;
      this.beforeIndex = e.detail.value;
    },
    chargeChange(e, parentIndex, sceneIndex) {
      console.log(this.chargeList[e.detail.value].value);
      this.sceneList[parentIndex].list[sceneIndex].charge =
        this.chargeList[e.detail.value].key;
      this.sceneList[parentIndex].list[sceneIndex].chargeIndex = e.detail.value;
      if (
        this.chargeList[e.detail.value].value == 100 ||
        this.chargeList[e.detail.value].value == 300
      ) {
        this.sceneList[parentIndex].list[sceneIndex].showAmount = false;
      } else {
        this.sceneList[parentIndex].list[sceneIndex].showAmount = true;
      }
    },
    groupChange(e) {
      this.group = this.groupList[e.detail.value].value;
      this.groupIndex = e.detail.value;
    },
    chargeItemChange(e, index) {
      this.applicationList[index].charge = this.chargeList[e.detail.value].key;
      this.applicationList[index].chargeIndex = e.detail.value;
      if (
        this.chargeList[e.detail.value].value == 100 ||
        this.chargeList[e.detail.value].value == 300
      ) {
        this.applicationList[index].showAmount = false;
      } else {
        this.applicationList[index].showAmount = true;
      }
    },
    switchDeductionChange(e) {
      this.deductionChecked = e.detail.value;
    },
    earlyBirdChange(e) {
      this.earlyBirdChecked = e.detail.value;
    },
    switchGroupChange() {
      this.groupChecked = !this.groupChecked;
    },
    securityChange() {
      this.securityChecked = !this.securityChecked;
    },
    taskChange() {
      this.taskChecked = !this.taskChecked;
    },
    taskItemChange(e, index) {
      this.taskList[index].taskType = this.taskValueList[e.detail.value].value;
      this.taskList[index].taskIndex = e.detail.value;
    },
    endDayTimeChange(e, index) {
      this.taskList[index].endDayTime = this.taskValueList[e.detail.value].key;
      this.taskList[index].endDayTimeIndex = e.detail.value;
    },
    sessionDelete(index) {
      this.applicationList.splice(index, 1);
    },
    groupDelete(index) {
      this.candidateAreaList.splice(index, 1);
    },
    taskDelete(index) {
      this.taskList.splice(index, 1);
    },
    deleteTheme(index) {
      this.sceneList.splice(index, 1);
    },
    deleteRole(parentindex, index) {
      this.sceneList[parentindex].list.splice(index, 1);
    },
    objectChange(parentIndex, sceneIndex, radioindex) {
      this.sceneList[parentIndex].list[sceneIndex].objectRadio = radioindex;
    },
    addApplication() {
      this.applicationList.push({
        sessionName: "",
        charge: "",
        chargeIndex: "",
        chargeAmount: "",
        enrollment: "",
        sessionIndex: "",
        activityModeTab: "",
        formatGroupNum: "",
        candidateAreaList: [],
        fixedGroupList: [],
        showAmount: true,
      });
    },
    addGroup() {
      this.candidateAreaList.push({
        constituencyName: "",
        groupNum: "",
        groupNumIndex: "",
        member: "",
        allow: 1,
      });
    },
    addTask() {
      if (this.taskList.length < 2) {
        this.taskList.push({
          taskIndex: "",
          taskType: "",
          endDayTimeIndex: "",
          endDayTime: "",
          activityRemand: 1,
        });
      } else {
        errortip("最多可建2个任务");
      }
    },
    addAgreement() {
      if (this.agreementList.length <= 3) {
        this.agreementVisble = true;
        return false;
      }
      errortip("只能新建一个协议");
    },
    agreementDetermine() {
      if (!this.agreementName) {
        errortip("请输入协议名称！");
        return false;
      }
      this.agreementList.push({
        name: this.agreementName,
        agreementContent: this.agreementContent,
        checked: 1,
      });
      this.agreementVisble = false;
    },
    closeAgreement() {
      this.agreementVisble = false;
    },
    changeItem(index, tabindex) {
      this.sceneList[index].sceneTab = tabindex;
      if (this.sceneList[index].sceneTab) {
        this.sceneList[index].list = [
          {
            roleName: "",
            charge: "",
            chargeIndex: "",
            showAmount: true,
            chargeAmount: "",
            enrollment: "",
            object: "",
            objectRadio: 300,
            member: [],
            showMember: 1,
          },
          {
            roleName: "",
            charge: "",
            chargeIndex: "",
            showAmount: true,
            chargeAmount: "",
            enrollment: "",
            object: "",
            objectRadio: 300,
            member: [],
            showMember: 1,
          },
        ];
      } else {
        this.sceneList[index].list = [
          {
            roleName: "",
            charge: "",
            chargeIndex: "",
            showAmount: true,
            chargeAmount: "",
            enrollment: "",
            object: "",
            objectRadio: 300,
            member: [],
            showMember: 1,
          },
        ];
      }
    },
    activityModeChange(index) {
      if (this.activityModeTab === index) {
        return false;
      } else {
        this.activityModeTab = index;
      }
    },
    memberClick(parentIndex, sceneIndex) {
      this.memberItemIndex = [parentIndex, sceneIndex];
      this.inviteVisble = true;
      if (this.sceneList[parentIndex].list[sceneIndex].member.length) {
        this.invitedList = this.sceneList[parentIndex].list[sceneIndex].member;
      }
    },
    memberItemClick(index) {
      this.memberType = 2;
      this.memberItemIndex = index;
      this.inviteVisble = true;
    },
    onChooseLocation() {
      wx.chooseLocation({
        success: (res) => {
          this.localtion = res.address;
          this.locale_address = res;
          //   console.log(res, "--------------", this.localtion);
        },
      });
    },
    chooseAllow() {
      this.allow = !this.allow ? 1 : 0;
    },
    chooseItemAllow(index) {
      this.candidateAreaList[index].allow = this.candidateAreaList[index].allow
        ? 1
        : 0;
    },
    chooseGroup() {
      this.group = !this.group ? 1 : 0;
    },
    chooseRemand() {
      this.remand = !this.remand ? 1 : 0;
    },
    chooseActivityRemand(index) {
      this.taskList[index].activityRemand = !this.taskList[index].activityRemand
        ? 1
        : 0;
    },
    choosePublicActivity() {
      this.publicActivity = !this.publicActivity ? 1 : 0;
    },
    chooseShowMember(parenIndex, index) {
      this.sceneList[parenIndex].list[index].showMember = !this.sceneList[
        parenIndex
      ].list[index].showMember
        ? 1
        : 0;
    },
    chooseSetupAllow() {
      this.setupAllow = !this.setupAllow ? 1 : 0;
    },
    chooseTransference() {
      this.transference = !this.transference ? 1 : 0;
    },
    chooseRealName() {
      this.realName = !this.realName ? 1 : 0;
    },
    chooseRegularTime() {
      this.regularTime = !this.regularTime ? 1 : 0;
    },
    chooseAgreement(index) {
      this.agreementList[index].checked = !this.agreementList[index].checked
        ? 1
        : 0;
    },
    chooseQueryMethods() {
      this.queryMethods = !this.queryMethods ? 1 : 0;
    },
    groupNumChange() {
      this.groupNum = this.groupNumList[e.detail.value].value;
      this.groupNumIndex = e.detail.value;
    },
    nowDayChange(e) {
      this.nowDay = this.nowDayList[e.detail.value].key;
      this.nowDayIndex = e.detail.value;
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
    clearUserMember() {
      this.userMemberList = [];
    },
    closeInvitation() {
      this.inviteVisble = false;
      this.invitedList = [];
      this.userMemberList = [];
    },
    invitedDelete(index) {
      this.invitedList.splice(index, 1);
    },
    confirmInvitation() {
      this.inviteVisble = false;
      this.sceneList[this.memberItemIndex[0]].list[
        this.memberItemIndex[1]
      ].member = this.invitedList;
      this.invitedList = [];
    },
    formatMember(data) {
      let arr = [];
      arr = data.map((item) => {
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
    formatFixedGroup(data) {
      let str = data.groupName + "（";
      let groupIdentityArr = [];
      let count = 0;
      data.list.map((item) => {
        let groupIdentityStr = item.groupIdentity + item.groupNum;
        count += item.member.length;
        groupIdentityArr.push(groupIdentityStr);
      });
      str += groupIdentityArr.join(",");
      str += "）,已邀请" + count + "名成员";
      return str;
    },
    setPacketMode(index) {
      if (this.applicationTab === 0) {
        if (!this.enrollment) {
          errortip("请填写报名人数");
          return false;
        }
        openPage(
          "/packageActivity/pages/packetmode/index?applicationType=" +
            this.applicationTab +
            "&enrollment=" +
            this.enrollment
        );
      } else if (this.applicationTab === 1) {
        if (!this.applicationList[index].enrollment) {
          errortip("请填写报名人数");
          return false;
        }
        openPage(
          "/packageActivity/pages/packetmode/index?applicationType=" +
            this.applicationTab +
            "&sessionIndex=" +
            index +
            "&enrollment=" +
            this.applicationList[index].enrollment
        );
      }
    },
    editActivity(index) {
      if (this.applicationTab === 0 && this.activityModeTab === 0) {
        if (!this.enrollment) {
          errortip("请填写报名人数");
          return false;
        }
        openPage(
          "/packageActivity/pages/packetmode/index?applicationType=" +
            this.applicationTab +
            "&enrollment=" +
            this.enrollment +
            "&member=" +
            JSON.stringify(this.member) +
            "&allow=" +
            this.allow +
            "&activityModeTab=" +
            this.activityModeTab
        );
      } else if (this.applicationTab === 0 && this.activityModeTab === 1) {
        if (!this.enrollment) {
          errortip("请填写报名人数");
          return false;
        }
        openPage(
          "/packageActivity/pages/packetmode/index?applicationType=" +
            this.applicationTab +
            "&enrollment=" +
            this.enrollment +
            "&candidateAreaList=" +
            JSON.stringify(this.candidateAreaList) +
            "&groupNum=" +
            this.groupNum +
            "&activityModeTab=" +
            this.activityModeTab
        );
      } else if (this.applicationTab === 0 && this.activityModeTab === 2) {
        if (!this.enrollment) {
          errortip("请填写报名人数");
          return false;
        }
        openPage(
          "/packageActivity/pages/packetmode/index?applicationType=" +
            this.applicationTab +
            "&fixedGroupList=" +
            JSON.stringify(this.fixedGroupList) +
            "&activityModeTab=" +
            this.activityModeTab
        );
      } else if (
        this.applicationTab === 1 &&
        this.applicationList[index].activityModeTab === 0
      ) {
        let sessionIndex = index;
        if (!this.applicationList[sessionIndex].enrollment) {
          errortip("请填写报名人数");
          return false;
        }
        openPage(
          "/packageActivity/pages/packetmode/index?applicationType=" +
            this.applicationTab +
            "&enrollment=" +
            this.applicationList[sessionIndex].enrollment +
            "&member=" +
            JSON.stringify(this.applicationList[sessionIndex].member) +
            "&allow=" +
            this.applicationList[sessionIndex].allow +
            "&activityModeTab=" +
            this.applicationList[sessionIndex].activityModeTab +
            "&sessionIndex=" +
            index
        );
      } else if (
        this.applicationTab === 1 &&
        this.applicationList[index].activityModeTab === 1
      ) {
        let sessionIndex = index;
        if (!this.applicationList[sessionIndex].enrollment) {
          errortip("请填写报名人数");
          return false;
        }
        openPage(
          "/packageActivity/pages/packetmode/index?applicationType=" +
            this.applicationTab +
            "&enrollment=" +
            this.applicationList[sessionIndex].enrollment +
            "&candidateAreaList=" +
            JSON.stringify(
              this.applicationList[sessionIndex].candidateAreaList
            ) +
            "&groupNum=" +
            this.applicationList[sessionIndex].groupNum +
            "&activityModeTab=" +
            this.applicationList[sessionIndex].activityModeTab +
            "&sessionIndex=" +
            index
        );
      } else if (
        this.applicationTab === 1 &&
        this.applicationList[index].activityModeTab === 2
      ) {
        let sessionIndex = index;
        if (!this.applicationList[sessionIndex].enrollment) {
          errortip("请填写报名人数");
          return false;
        }
        openPage(
          "/packageActivity/pages/packetmode/index?applicationType=" +
            this.applicationTab +
            "&fixedGroupList=" +
            JSON.stringify(this.applicationList[sessionIndex].fixedGroupList) +
            "&activityModeTab=" +
            this.applicationList[sessionIndex].activityModeTab +
            "&sessionIndex=" +
            index
        );
      }
    },
    chooseCoverImage() {
      let _this = this;
      wx.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success(res) {
          wx.showLoading({
            title: "正在上传中",
          });
          let arr = res.tempFiles;
          var imgInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            imgInfo = v;
            _this.upCoverImgs(imgInfo);
          });
        },
      });
    },
    upCoverImgs(dataInfo) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "invite",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.cover = data.data.file1;
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    chooseImage() {
      if (this.imgList.length >= 9) {
        wx.showToast({
          title: "最多上传9张图！",
          icon: "none",
        });
        return false;
      }
      let _this = this;
      wx.chooseMedia({
        count: 9 - this.imgList.length,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success(res) {
          wx.showLoading({
            title: "正在上传中",
          });
          let arr = res.tempFiles;
          var imgInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            imgInfo = v;
            _this.upImgs(imgInfo);
          });
        },
      });
    },
    upImgs(dataInfo) {
      let header = {};
      let token = wx.getStorageSync("token");
      header["Authorization"] = "Basic " + Base64.encode(token + ":");
      wx.showLoading({
        title: "上传中",
        mask: true,
      });
      wx.uploadFile({
        url: "https://pai.qubeitech.com/v1/file/upload",
        filePath: dataInfo.tempFilePath,
        formData: {
          scr_type: "invite",
        },
        name: "file",
        header,
        success: (res) => {
          wx.hideLoading();
          //判断上传的是图片还是视频
          let data = JSON.parse(res.data);
          if (data.code == 200) {
            this.imgList.push(data.data.file1);
          } else {
            wx.showToast({
              title: "上传失败！",
              icon: "none",
            });
          }
        },
      });
    },
    addScene() {
      if (this.sceneList.length == 5) {
        errortip("只能新建5个场景");
        return false;
      }
      this.sceneList.push({
        sceneName: "",
        sceneTab: 0,
        list: [
          {
            roleName: "",
            charge: "",
            chargeIndex: "",
            showAmount: true,
            chargeAmount: "",
            enrollment: "",
            object: "",
            objectRadio: 300,
            member: [],
            showMember: 1,
          },
        ],
      });
    },
    addRole(index) {
      this.sceneList[index].list.push({
        roleName: "",
        charge: "",
        chargeIndex: "",
        showAmount: true,
        chargeAmount: "",
        enrollment: "",
        object: "",
        objectRadio: 300,
        member: [],
        showMember: 1,
      });
    },
    submit() {
      if (!this.title) {
        errortip("请输入标题！");
        return false;
      }
      if (!this.date) {
        errortip("请选择活动日期！");
        return false;
      }
      if (!this.desc) {
        errortip("请输入活动描叙！");
        return false;
      }
      if (!this.startTime) {
        errortip("请选择活动开始时间！");
        return false;
      }
      if (!this.endTime) {
        errortip("请选择活动结束时间！");
        return false;
      }
      if (!this.registrationDeadline) {
        errortip("请选择报名截止时间！");
        return false;
      }
      if (!this.deadline) {
        errortip("请选择取消报名截至时间！");
        return false;
      }
      if (!this.select_city) {
        errortip("请选择活动地点！");
        return false;
      }
      if (!this.venue) {
        errortip("请填写活动场地！");
        return false;
      }
      if (!this.cover) {
        errortip("请上传封面主图！");
        return false;
      }
      if (!this.imgList.length) {
        errortip("请上传图片！");
        return false;
      }
      //   if (this.deductionChecked && !this.preferential) {
      //     errortip("请选择优惠！");
      //     return false;
      //   }
      //   if (this.deductionChecked && !this.deductionAmount) {
      //     errortip("请输入减免金额！");
      //     return false;
      //   }
      //   if (this.earlyBirdChecked && !this.before) {
      //     errortip("请选择活动开始前！");
      //     return false;
      //   }
      //   if (this.earlyBirdChecked && !this.earlyBirdDeductionAmount) {
      //     errortip("请输入减免金额！");
      //     return false;
      //   }
      //   if (this.applicationTab == 0 && !this.sessionName) {
      //     errortip("请输入场次名称！");
      //     return false;
      //   }
      //   if (this.applicationTab == 0 && !this.charge) {
      //     errortip("请选择收费模式！");
      //     return false;
      //   }
      //   if (this.applicationTab == 0 && !this.chargeAmount && this.showAmount) {
      //     errortip("请输入报名费用！");
      //     return false;
      //   }
      //   if (this.applicationTab == 0 && !this.enrollment) {
      //     errortip("请输入报名人数！");
      //     return false;
      //   }

      //   if (this.applicationTab == 1) {
      //     let off = false;
      //     this.applicationList.map((item) => {
      //       if (
      //         !item.sessionName ||
      //         !item.charge ||
      //         (!item.chargeAmount && item.showAmount) ||
      //         !item.enrollment
      //       ) {
      //         off = true;
      //       }
      //     });
      //     if (off) {
      //       errortip("请填写分场报名必填项！");
      //       return false;
      //     }
      //   }
      if (this.regularTime && !this.nowDay) {
        errortip("请选择活动当前天数！");
        return false;
      }
      if (this.regularTime && !this.nowTime) {
        errortip("请选择活动当前时间！");
        return false;
      }
      let params = {
        title: this.title,
        content_type: "text",
        content_body: this.desc,
        begin_date: this.date,
        begin_time: this.startTime,
        finish_time: this.endTime,
        deadline_hour:
          this.deadlineList[Number(this.registrationDeadlineIndex)].value,
        cancel_deadline_hour:
          this.deadlineList[Number(this.deadlineIndex)].value,
        addressName: this.select_city,
        address: this.regionList,
        locale_address: this.venue,
        main_cover: this.cover,
        content_cover: this.imgList,
        scene: [],
        is_required_certify: this.securityChecked ? 1 : 0,
        required_security_amount: Number(this.securityAmount),
        is_return_security: this.remand,
        return_security_ratio: this.remandRatio,
        is_required_task: 0,
        is_public: this.publicActivity,
        is_wait: this.setupAllow,
        // is_transfer: this.transference,
        is_certify: this.realName,
        is_schedule_publish: this.regularTime,
        agreement: {},
      };
      //   if (this.deductionChecked) {
      //     params.special_discount_type = Number(
      //       this.preferentialList[this.preferentialIndex].value
      //     );
      //     params.special_discount_name = this.preferential;
      //     params.special_discount_amount = Number(this.deductionAmount);
      //   }
      //   if (this.earlyBirdChecked) {
      //     params.early_discount_hour = Number(
      //       this.beforeList[this.beforeIndex].value
      //     );
      //     params.early_discount_amount = this.earlyBirdDeductionAmount;
      //   }

      params.scene = this.sceneList.map((item) => {
        let obj = {
          scene_name: item.sceneName,
          roles_type: item.sceneTab ? 200 : 100,
          roles_item: [],
        };
        item.list.map((sceneItem) => {
          obj.roles_item.push({
            roles_name: sceneItem.roleName,
            payment_type: Number(this.chargeList[sceneItem.chargeIndex].value),
            payment_name: sceneItem.charge,
            payment_amount: sceneItem.showAmount
              ? Number(sceneItem.chargeAmount)
              : 0,
            enter_member_num: Number(sceneItem.enrollment),
            enter_member_type: sceneItem.objectRadio,
            invite_member_list: sceneItem.member,
            invite_member_show: sceneItem.showMember,
          });
        });
        return obj;
      });
      //   if (this.applicationTab === 0) {
      //     params.scene = [
      //       {
      //         enter_type: 100,
      //         enter_name: "统一报名",
      //         enter_number: Number(this.enrollment),
      //         payment_type: Number(this.chargeList[this.chargeIndex].value),
      //         payment_name: this.charge,
      //         payment_amount: this.showAmount ? Number(this.chargeAmount) : 0,
      //         scene_name: this.sessionName,
      //         teams: {},
      //       },
      //     ];
      //     if (this.activityModeTab === 0) {
      //       // 常规活动
      //       params.scene[0].teams = {
      //         divide_teams_type: 100,
      //         divide_teams_name: "常规活动",
      //         invite_member: this.member.length,
      //         allow_enter: this.allow,
      //         invite_member_list: this.member,
      //       };
      //     }
      //     if (this.activityModeTab === 1) {
      //       // 随机活动
      //       params.scene[0].teams = {
      //         divide_teams_type: 200,
      //         divide_teams_name: "随机活动",
      //         every_teams_number: this.groupNum,
      //         candidate_area_flag: this.candidateAreaList.length ? 1 : 0,
      //         candidate_area_list: this.candidateAreaList.map((item) => {
      //           return {
      //             candidate_area_name: item.constituencyName,
      //             candidate_area_number: item.groupNum,
      //             allow_enter: item.allow,
      //             invite_member: item.member.length,
      //             invite_member_list: item.member,
      //           };
      //         }),
      //       };
      //     }
      //     if (this.activityModeTab === 2) {
      //       // 固定活动
      //       params.scene[0].teams = {
      //         divide_teams_type: 300,
      //         divide_teams_name: "固定分组",
      //         divide_teams_list: this.fixedGroupList.map((item) => {
      //           console.log(item);
      //           return {
      //             teams_area_name: item.groupName,
      //             group_list: item.list.map((items) => {
      //               return {
      //                 teams_group_name: items.groupIdentity,
      //                 teams_group_number: items.groupNum,
      //                 allow_enter: items.allow,
      //                 invite_member: items.member.length,
      //                 invite_member_list: items.member,
      //               };
      //             }),
      //           };
      //         }),
      //       };
      //     }
      //   } else if (this.applicationTab === 1) {
      //     params.scene = this.applicationList.map((item) => {
      //       let obj = {
      //         enter_type: 200,
      //         enter_name: "分场报名",
      //         enter_number: Number(item.enrollment),
      //         payment_type: Number(this.chargeList[item.chargeIndex].value),
      //         payment_name: item.charge,
      //         payment_amount: item.showAmount ? Number(item.chargeAmount) : 0,
      //         scene_name: item.sessionName,
      //         teams: {},
      //       };
      //       if (item.activityModeTab === 0) {
      //         // 常规活动
      //         obj.teams = {
      //           divide_teams_type: 100,
      //           divide_teams_name: "常规活动",
      //           invite_member: item.member.length,
      //           allow_enter: item.allow,
      //           invite_member_list: item.member,
      //         };
      //       }
      //       if (item.activityModeTab === 1) {
      //         // 随机活动
      //         obj.teams = {
      //           divide_teams_type: 200,
      //           divide_teams_name: "随机活动",
      //           every_teams_number: item.groupNum,
      //           candidate_area_flag: item.candidateAreaList.length ? 1 : 0,
      //           candidate_area_list: item.candidateAreaList.map((items) => {
      //             return {
      //               candidate_area_name: items.constituencyName,
      //               candidate_area_number: items.groupNum,
      //               allow_enter: items.allow,
      //               invite_member: items.member.length,
      //               invite_member_list: items.member,
      //             };
      //           }),
      //         };
      //       }
      //       if (item.activityModeTab === 2) {
      //         // 固定活动
      //         obj.teams = {
      //           divide_teams_type: 300,
      //           divide_teams_name: "固定分组",
      //           divide_teams_list: item.fixedGroupList.map((items) => {
      //             return {
      //               teams_area_name: items.groupName,
      //               group_list: items.list.map((groupItems) => {
      //                 return {
      //                   teams_group_name: groupItems.groupIdentity,
      //                   teams_group_number: groupItems.groupNum,
      //                   allow_enter: groupItems.allow,
      //                   invite_member: groupItems.member.length,
      //                   invite_member_list: groupItems.member,
      //                 };
      //               }),
      //             };
      //           }),
      //         };
      //       }
      //       return obj;
      //     });
      //   }
      if (this.regularTime) {
        params.schedule_publish_day = this.nowDayList[this.nowDayIndex].value;
        params.schedule_publish_hour = this.nowTime;
      }
      //   let agreement = {};
      //   this.agreementList.map((item) => {
      //     agreement[item.name] = {
      //       body: item.agreementContent,
      //       checked: item.checked,
      //     };
      //   });
      //   params.agreement = agreement;
      console.log(params);
      console.log(JSON.stringify(params));
      this.publishCreate(params);
    },
    async publishConfig(params) {
      try {
        let res = await publishConfig(params);
        if (res.data.data.timedelta_hour) {
          this.deadlineList = [];
          this.beforeList = [];
          res.data.data.timedelta_hour.map((item) => {
            let key = Object.keys(item);
            let value = Object.values(item);
            this.deadlineList.push({
              key: key[0],
              value: value[0],
            });
          });
          this.beforeList = this.deadlineList;
        }
        if (res.data.data.special_discount) {
          this.preferentialList = [];
          res.data.data.special_discount.map((item) => {
            let key = Object.keys(item);
            let value = Object.values(item);
            this.preferentialList.push({
              key: value[0],
              value: key[0],
            });
          });
        }
        if (res.data.data.payment_method) {
          this.chargeList = [];
          res.data.data.payment_method.map((item) => {
            let key = Object.keys(item);
            let value = Object.values(item);
            this.chargeList.push({
              key: value[0],
              value: key[0],
            });
          });
        }
        if (res.data.data.timedelta_day) {
          this.endDayTimeList = [];
          this.nowDayList = [];
          res.data.data.timedelta_day.map((item) => {
            let key = Object.keys(item);
            let value = Object.values(item);
            this.endDayTimeList.push({
              key: key[0],
              value: value[0],
            });
          });
          this.nowDayList = this.endDayTimeList;
        }
      } catch (error) {}
    },
    async publishCreate(params) {
      try {
        let res = await publishCreate(params);
        // 跳转首页
        wx.switchTab({
          url: "/pages/home/index",
        });
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
  created() {
    this.isIphoneX = this.globalData.isIphoneX;
    this.publishConfig({
      code: [
        "timedelta_hour",
        "special_discount",
        "payment_method",
        "timedelta_day",
      ],
    });
  },
  onShow() {
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1]; //当前页面
    if (
      currPage.data.applicationType === 0 &&
      currPage.data.activityModeTab === 0
    ) {
      this.member = currPage.data.member ? currPage.data.member : [];
      this.allow = currPage.data.allow;
      this.activityModeTab = currPage.data.activityModeTab;
    } else if (
      currPage.data.applicationType === 0 &&
      currPage.data.activityModeTab === 1
    ) {
      this.candidateAreaList = currPage.data.candidateAreaList;
      this.groupNum = currPage.data.groupNum;
      this.formatGroupNum = currPage.data.formatGroupNum;
      this.activityModeTab = currPage.data.activityModeTab;
    } else if (
      currPage.data.applicationType === 0 &&
      currPage.data.activityModeTab === 2
    ) {
      this.fixedGroupList = currPage.data.fixedGroupList;
      this.activityModeTab = currPage.data.activityModeTab;
    } else if (
      currPage.data.applicationType === 1 &&
      currPage.data.activityModeTab === 0
    ) {
      let sessionIndex = Number(currPage.data.sessionIndex);
      this.applicationList[sessionIndex].member = currPage.data.member
        ? currPage.data.member
        : [];
      this.applicationList[sessionIndex].allow = currPage.data.allow;
      this.applicationList[sessionIndex].activityModeTab =
        currPage.data.activityModeTab;
    } else if (
      currPage.data.applicationType === 1 &&
      currPage.data.activityModeTab === 1
    ) {
      let sessionIndex = Number(currPage.data.sessionIndex);
      this.applicationList[sessionIndex].candidateAreaList =
        currPage.data.candidateAreaList;
      this.applicationList[sessionIndex].groupNum = currPage.data.groupNum;
      this.applicationList[sessionIndex].formatGroupNum =
        currPage.data.formatGroupNum;
      this.applicationList[sessionIndex].activityModeTab =
        currPage.data.activityModeTab;
    } else if (
      currPage.data.applicationType === 1 &&
      currPage.data.activityModeTab === 2
    ) {
      let sessionIndex = Number(currPage.data.sessionIndex);
      this.applicationList[sessionIndex].fixedGroupList =
        currPage.data.fixedGroupList;
      this.applicationList[sessionIndex].activityModeTab =
        currPage.data.activityModeTab;
    }
  },
};
</script>

<style lang="scss" scoped></style>
