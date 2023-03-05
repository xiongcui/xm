<template>
  <view class="tonggao-manage">
    <view class="tab">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0, 0)"
        >全部</view
      >
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1, 120)"
        >待开放</view
      >
      <view
        class="tab-item"
        :class="currentTab == 2 ? 'on' : ''"
        @tap="changeItem(2, 200)"
        >招募中</view
      >
      <view
        class="tab-item"
        :class="currentTab == 3 ? 'on' : ''"
        @tap="changeItem(3, 300)"
        >已结束</view
      >
      <view
        class="tab-item"
        :class="currentTab == 4 ? 'on' : ''"
        @tap="changeItem(4, 600)"
        >审核失败</view
      >
    </view>
    <view class="content">
      <swiper
        :current="currentTab"
        class="swiper-box"
        duration="300"
        @change="bindChange"
      >
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_left">
                    <view class="list_title"> {{ item.major_subject }} </view>
                    <view class="list_desc">
                      {{ item.summary }}
                    </view>
                    <view class="list_info">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/position.png"
                      ></image>
                      面向地区：{{ item.author.province_name }}
                    </view>
                    <view class="list_info"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/sex1.png"
                      ></image
                      >性别要求：{{ formatSex(item.author.sex) }}</view
                    >
                  </view>
                  <view class="list_rt">
                    <image :src="item.cover[0]" mode="aspectFill"></image>
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >{{ item.publish_status_name }}</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                  <view class="list_tag">{{ item.second_name }}</view>
                </view>
                <view class="list_num">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_bottom">
                  <view class="list_bt_left">
                    <view
                      class="btn-grey"
                      @tap="deleteTonggao(item.oid)"
                      v-if="
                        item.publish_status == 100 ||
                        item.publish_status == 120 ||
                        item.publish_status == 400 ||
                        item.publish_status == 300 ||
                        item.publish_status == 600
                      "
                      >删除通告</view
                    >
                    <view
                      class="btn-grey"
                      @tap="overTonggao(item.oid)"
                      v-if="item.publish_status == 200"
                      >结束报名</view
                    >
                  </view>
                  <view class="list_bt_rt">
                    <view
                      class="btn-red"
                      @tap="openTonggao(item.oid)"
                      v-if="item.publish_status == 120"
                      >开放招募</view
                    >
                    <view
                      class="btn-red"
                      @tap="refreshTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 700
                      "
                      >刷新排名</view
                    >
                    <view
                      class="btn-red"
                      @tap="reopenTonggao(item.oid)"
                      v-if="item.publish_status == 300"
                      >重新打开</view
                    >
                    <view
                      class="btn-red"
                      @tap="manageTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 300
                      "
                      >管理报名</view
                    >
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_left">
                    <view class="list_title"> {{ item.major_subject }} </view>
                    <view class="list_desc">
                      {{ item.summary }}
                    </view>
                    <view class="list_info">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/position.png"
                      ></image>
                      面向地区：{{ item.author.province_name }}
                    </view>
                    <view class="list_info"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/sex1.png"
                      ></image
                      >性别要求：{{ formatSex(item.author.sex) }}</view
                    >
                  </view>
                  <view class="list_rt">
                    <image :src="item.cover[0]" mode="aspectFill"></image>
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >{{ item.publish_status_name }}</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                  <view class="list_tag">{{ item.second_name }}</view>
                </view>
                <view class="list_num">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_bottom">
                  <view class="list_bt_left">
                    <view
                      class="btn-grey"
                      @tap="deleteTonggao(item.oid)"
                      v-if="
                        item.publish_status == 100 ||
                        item.publish_status == 120 ||
                        item.publish_status == 400 ||
                        item.publish_status == 300 ||
                        item.publish_status == 600
                      "
                      >删除通告</view
                    >
                    <view
                      class="btn-grey"
                      @tap="overTonggao(item.oid)"
                      v-if="item.publish_status == 200"
                      >结束报名</view
                    >
                  </view>
                  <view class="list_bt_rt">
                    <view
                      class="btn-red"
                      @tap="openTonggao(item.oid)"
                      v-if="item.publish_status == 120"
                      >开放招募</view
                    >
                    <view
                      class="btn-red"
                      @tap="refreshTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 700
                      "
                      >刷新排名</view
                    >
                    <view
                      class="btn-red"
                      @tap="reopenTonggao(item.oid)"
                      v-if="item.publish_status == 300"
                      >重新打开</view
                    >
                    <view
                      class="btn-red"
                      @tap="manageTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 300
                      "
                      >管理报名</view
                    >
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_left">
                    <view class="list_title"> {{ item.major_subject }} </view>
                    <view class="list_desc">
                      {{ item.summary }}
                    </view>
                    <view class="list_info">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/position.png"
                      ></image>
                      面向地区：{{ item.author.province_name }}
                    </view>
                    <view class="list_info"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/sex1.png"
                      ></image
                      >性别要求：{{ formatSex(item.author.sex) }}</view
                    >
                  </view>
                  <view class="list_rt">
                    <image :src="item.cover[0]" mode="aspectFill"></image>
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >{{ item.publish_status_name }}</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                  <view class="list_tag">{{ item.second_name }}</view>
                </view>
                <view class="list_num">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_bottom">
                  <view class="list_bt_left">
                    <view
                      class="btn-grey"
                      @tap="deleteTonggao(item.oid)"
                      v-if="
                        item.publish_status == 100 ||
                        item.publish_status == 120 ||
                        item.publish_status == 400 ||
                        item.publish_status == 300 ||
                        item.publish_status == 600
                      "
                      >删除通告</view
                    >
                    <view
                      class="btn-grey"
                      @tap="overTonggao(item.oid)"
                      v-if="item.publish_status == 200"
                      >结束报名</view
                    >
                  </view>
                  <view class="list_bt_rt">
                    <view
                      class="btn-red"
                      @tap="openTonggao(item.oid)"
                      v-if="item.publish_status == 120"
                      >开放招募</view
                    >
                    <view
                      class="btn-red"
                      @tap="refreshTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 700
                      "
                      >刷新排名</view
                    >
                    <view
                      class="btn-red"
                      @tap="reopenTonggao(item.oid)"
                      v-if="item.publish_status == 300"
                      >重新打开</view
                    >
                    <view
                      class="btn-red"
                      @tap="manageTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 300
                      "
                      >管理报名</view
                    >
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_left">
                    <view class="list_title"> {{ item.major_subject }} </view>
                    <view class="list_desc">
                      {{ item.summary }}
                    </view>
                    <view class="list_info">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/position.png"
                      ></image>
                      面向地区：{{ item.author.province_name }}
                    </view>
                    <view class="list_info"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/sex1.png"
                      ></image
                      >性别要求：{{ formatSex(item.author.sex) }}</view
                    >
                  </view>
                  <view class="list_rt">
                    <image :src="item.cover[0]" mode="aspectFill"></image>
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >{{ item.publish_status_name }}</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                  <view class="list_tag">{{ item.second_name }}</view>
                </view>
                <view class="list_num">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_bottom">
                  <view class="list_bt_left">
                    <view
                      class="btn-grey"
                      @tap="deleteTonggao(item.oid)"
                      v-if="
                        item.publish_status == 100 ||
                        item.publish_status == 120 ||
                        item.publish_status == 400 ||
                        item.publish_status == 300 ||
                        item.publish_status == 600
                      "
                      >删除通告</view
                    >
                    <view
                      class="btn-grey"
                      @tap="overTonggao(item.oid)"
                      v-if="item.publish_status == 200"
                      >结束报名</view
                    >
                  </view>
                  <view class="list_bt_rt">
                    <view
                      class="btn-red"
                      @tap="openTonggao(item.oid)"
                      v-if="item.publish_status == 120"
                      >开放招募</view
                    >
                    <view
                      class="btn-red"
                      @tap="refreshTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 700
                      "
                      >刷新排名</view
                    >
                    <view
                      class="btn-red"
                      @tap="reopenTonggao(item.oid)"
                      v-if="item.publish_status == 300"
                      >重新打开</view
                    >
                    <view
                      class="btn-red"
                      @tap="manageTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 300
                      "
                      >管理报名</view
                    >
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_left">
                    <view class="list_title"> {{ item.major_subject }} </view>
                    <view class="list_desc">
                      {{ item.summary }}
                    </view>
                    <view class="list_info">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/position.png"
                      ></image>
                      面向地区：{{ item.author.province_name }}
                    </view>
                    <view class="list_info"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/sex1.png"
                      ></image
                      >性别要求：{{ formatSex(item.author.sex) }}</view
                    >
                  </view>
                  <view class="list_rt">
                    <image :src="item.cover[0]" mode="aspectFill"></image>
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >{{ item.publish_status_name }}</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                  <view class="list_tag">{{ item.second_name }}</view>
                </view>
                <view class="list_num">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_bottom">
                  <view class="list_bt_left">
                    <view
                      class="btn-grey"
                      @tap="deleteTonggao(item.oid)"
                      v-if="
                        item.publish_status == 100 ||
                        item.publish_status == 120 ||
                        item.publish_status == 400 ||
                        item.publish_status == 300 ||
                        item.publish_status == 600
                      "
                      >删除通告</view
                    >
                    <view
                      class="btn-grey"
                      @tap="overTonggao(item.oid)"
                      v-if="item.publish_status == 200"
                      >结束报名</view
                    >
                  </view>
                  <view class="list_bt_rt">
                    <view
                      class="btn-red"
                      @tap="openTonggao(item.oid)"
                      v-if="item.publish_status == 120"
                      >开放招募</view
                    >
                    <view
                      class="btn-red"
                      @tap="refreshTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 700
                      "
                      >刷新排名</view
                    >
                    <view
                      class="btn-red"
                      @tap="reopenTonggao(item.oid)"
                      v-if="item.publish_status == 300"
                      >重新打开</view
                    >
                    <view
                      class="btn-red"
                      @tap="manageTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 300
                      "
                      >管理报名</view
                    >
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_left">
                    <view class="list_title"> {{ item.major_subject }} </view>
                    <view class="list_desc">
                      {{ item.summary }}
                    </view>
                    <view class="list_info">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/position.png"
                      ></image>
                      面向地区：{{ item.author.province_name }}
                    </view>
                    <view class="list_info"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/sex1.png"
                      ></image
                      >性别要求：{{ formatSex(item.author.sex) }}</view
                    >
                  </view>
                  <view class="list_rt">
                    <image :src="item.cover[0]" mode="aspectFill"></image>
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >{{ item.publish_status_name }}</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                  <view class="list_tag">{{ item.second_name }}</view>
                </view>
                <view class="list_num">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_bottom">
                  <view class="list_bt_left">
                    <view
                      class="btn-grey"
                      @tap="deleteTonggao(item.oid)"
                      v-if="
                        item.publish_status == 100 ||
                        item.publish_status == 120 ||
                        item.publish_status == 400 ||
                        item.publish_status == 300 ||
                        item.publish_status == 600
                      "
                      >删除通告</view
                    >
                    <view
                      class="btn-grey"
                      @tap="overTonggao(item.oid)"
                      v-if="item.publish_status == 200"
                      >结束报名</view
                    >
                  </view>
                  <view class="list_bt_rt">
                    <view
                      class="btn-red"
                      @tap="openTonggao(item.oid)"
                      v-if="item.publish_status == 120"
                      >开放招募</view
                    >
                    <view
                      class="btn-red"
                      @tap="refreshTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 700
                      "
                      >刷新排名</view
                    >
                    <view
                      class="btn-red"
                      @tap="reopenTonggao(item.oid)"
                      v-if="item.publish_status == 300"
                      >重新打开</view
                    >
                    <view
                      class="btn-red"
                      @tap="manageTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 300
                      "
                      >管理报名</view
                    >
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_left">
                    <view class="list_title"> {{ item.major_subject }} </view>
                    <view class="list_desc">
                      {{ item.summary }}
                    </view>
                    <view class="list_info">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/position.png"
                      ></image>
                      面向地区：{{ item.author.province_name }}
                    </view>
                    <view class="list_info"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/sex1.png"
                      ></image
                      >性别要求：{{ formatSex(item.author.sex) }}</view
                    >
                  </view>
                  <view class="list_rt">
                    <image :src="item.cover[0]" mode="aspectFill"></image>
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >{{ item.publish_status_name }}</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                  <view class="list_tag">{{ item.second_name }}</view>
                </view>
                <view class="list_num">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_bottom">
                  <view class="list_bt_left">
                    <view
                      class="btn-grey"
                      @tap="deleteTonggao(item.oid)"
                      v-if="
                        item.publish_status == 100 ||
                        item.publish_status == 120 ||
                        item.publish_status == 400 ||
                        item.publish_status == 300 ||
                        item.publish_status == 600
                      "
                      >删除通告</view
                    >
                    <view
                      class="btn-grey"
                      @tap="overTonggao(item.oid)"
                      v-if="item.publish_status == 200"
                      >结束报名</view
                    >
                  </view>
                  <view class="list_bt_rt">
                    <view
                      class="btn-red"
                      @tap="openTonggao(item.oid)"
                      v-if="item.publish_status == 120"
                      >开放招募</view
                    >
                    <view
                      class="btn-red"
                      @tap="refreshTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 700
                      "
                      >刷新排名</view
                    >
                    <view
                      class="btn-red"
                      @tap="reopenTonggao(item.oid)"
                      v-if="item.publish_status == 300"
                      >重新打开</view
                    >
                    <view
                      class="btn-red"
                      @tap="manageTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 300
                      "
                      >管理报名</view
                    >
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_left">
                    <view class="list_title"> {{ item.major_subject }} </view>
                    <view class="list_desc">
                      {{ item.summary }}
                    </view>
                    <view class="list_info">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/position.png"
                      ></image>
                      面向地区：{{ item.author.province_name }}
                    </view>
                    <view class="list_info"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/sex1.png"
                      ></image
                      >性别要求：{{ formatSex(item.author.sex) }}</view
                    >
                  </view>
                  <view class="list_rt">
                    <image :src="item.cover[0]" mode="aspectFill"></image>
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >{{ item.publish_status_name }}</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                  <view class="list_tag">{{ item.second_name }}</view>
                </view>
                <view class="list_num">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_bottom">
                  <view class="list_bt_left">
                    <view
                      class="btn-grey"
                      @tap="deleteTonggao(item.oid)"
                      v-if="
                        item.publish_status == 100 ||
                        item.publish_status == 120 ||
                        item.publish_status == 400 ||
                        item.publish_status == 300 ||
                        item.publish_status == 600
                      "
                      >删除通告</view
                    >
                    <view
                      class="btn-grey"
                      @tap="overTonggao(item.oid)"
                      v-if="item.publish_status == 200"
                      >结束报名</view
                    >
                  </view>
                  <view class="list_bt_rt">
                    <view
                      class="btn-red"
                      @tap="openTonggao(item.oid)"
                      v-if="item.publish_status == 120"
                      >开放招募</view
                    >
                    <view
                      class="btn-red"
                      @tap="refreshTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 700
                      "
                      >刷新排名</view
                    >
                    <view
                      class="btn-red"
                      @tap="reopenTonggao(item.oid)"
                      v-if="item.publish_status == 300"
                      >重新打开</view
                    >
                    <view
                      class="btn-red"
                      @tap="manageTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 300
                      "
                      >管理报名</view
                    >
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_left">
                    <view class="list_title"> {{ item.major_subject }} </view>
                    <view class="list_desc">
                      {{ item.summary }}
                    </view>
                    <view class="list_info">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/position.png"
                      ></image>
                      面向地区：{{ item.author.province_name }}
                    </view>
                    <view class="list_info"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/sex1.png"
                      ></image
                      >性别要求：{{ formatSex(item.author.sex) }}</view
                    >
                  </view>
                  <view class="list_rt">
                    <image :src="item.cover[0]" mode="aspectFill"></image>
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >{{ item.publish_status_name }}</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                  <view class="list_tag">{{ item.second_name }}</view>
                </view>
                <view class="list_num">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_bottom">
                  <view class="list_bt_left">
                    <view
                      class="btn-grey"
                      @tap="deleteTonggao(item.oid)"
                      v-if="
                        item.publish_status == 100 ||
                        item.publish_status == 120 ||
                        item.publish_status == 400 ||
                        item.publish_status == 300 ||
                        item.publish_status == 600
                      "
                      >删除通告</view
                    >
                    <view
                      class="btn-grey"
                      @tap="overTonggao(item.oid)"
                      v-if="item.publish_status == 200"
                      >结束报名</view
                    >
                  </view>
                  <view class="list_bt_rt">
                    <view
                      class="btn-red"
                      @tap="openTonggao(item.oid)"
                      v-if="item.publish_status == 120"
                      >开放招募</view
                    >
                    <view
                      class="btn-red"
                      @tap="refreshTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 700
                      "
                      >刷新排名</view
                    >
                    <view
                      class="btn-red"
                      @tap="reopenTonggao(item.oid)"
                      v-if="item.publish_status == 300"
                      >重新打开</view
                    >
                    <view
                      class="btn-red"
                      @tap="manageTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 300
                      "
                      >管理报名</view
                    >
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
          <scroll-view
            :scroll-y="true"
            @scrolltolower="scrollToLower"
            :style="{ height: winHeight + 'px' }"
          >
            <block v-if="list.length">
              <view
                class="tonggao-manage-list"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="list-content">
                  <view class="list_left">
                    <view class="list_title"> {{ item.major_subject }} </view>
                    <view class="list_desc">
                      {{ item.summary }}
                    </view>
                    <view class="list_info">
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/position.png"
                      ></image>
                      面向地区：{{ item.author.province_name }}
                    </view>
                    <view class="list_info"
                      ><image
                        src="https://yuepai-oss.qubeitech.com/static/images/sex1.png"
                      ></image
                      >性别要求：{{ formatSex(item.author.sex) }}</view
                    >
                  </view>
                  <view class="list_rt">
                    <image :src="item.cover[0]" mode="aspectFill"></image>
                  </view>
                  <view
                    class="list_status_sucess"
                    v-if="item.publish_status == 200"
                    >{{ item.publish_status_name }}</view
                  >
                  <view class="list_status" v-else>{{
                    item.publish_status_name
                  }}</view>
                  <view class="list_tag">{{ item.second_name }}</view>
                </view>
                <view class="list_num">
                  <view class="list_time">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/common/time.png"
                    ></image>
                    {{ item.date_humanize }}
                  </view>
                  <view class="list_yuepai">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/user/index/yuepai.png"
                    ></image>
                    收到约拍 {{ item.statistic.invite_cnt }}
                  </view>
                  <view class="list_read">
                    <image
                      src="https://yuepai-oss.qubeitech.com/static/images/eyes.png"
                    ></image>
                    阅读 {{ item.statistic.read_cnt }}
                  </view>
                </view>
                <view class="list_bottom">
                  <view class="list_bt_left">
                    <view
                      class="btn-grey"
                      @tap="deleteTonggao(item.oid)"
                      v-if="
                        item.publish_status == 100 ||
                        item.publish_status == 120 ||
                        item.publish_status == 400 ||
                        item.publish_status == 300 ||
                        item.publish_status == 600
                      "
                      >删除通告</view
                    >
                    <view
                      class="btn-grey"
                      @tap="overTonggao(item.oid)"
                      v-if="item.publish_status == 200"
                      >结束报名</view
                    >
                  </view>
                  <view class="list_bt_rt">
                    <view
                      class="btn-red"
                      @tap="openTonggao(item.oid)"
                      v-if="item.publish_status == 120"
                      >开放招募</view
                    >
                    <view
                      class="btn-red"
                      @tap="refreshTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 700
                      "
                      >刷新排名</view
                    >
                    <view
                      class="btn-red"
                      @tap="reopenTonggao(item.oid)"
                      v-if="item.publish_status == 300"
                      >重新打开</view
                    >
                    <view
                      class="btn-red"
                      @tap="manageTonggao(item.oid)"
                      v-if="
                        item.publish_status == 200 || item.publish_status == 300
                      "
                      >管理报名</view
                    >
                  </view>
                </view>
              </view>
            </block>
            <view v-else class="none-data">
              <image
                src="https://yuepai-oss.qubeitech.com/static/images/common/none.png"
                mode="aspectFill"
                class="none-img"
              ></image>
              <view>当前暂无信息哦～</view>
            </view>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import { manageList, manageOperation } from "../../../api/index";
import { errortip, openPage } from "../../../utils/util";
export default {
  name: "tonggao_manage",
  data() {
    return {
      optionMap: {
        NE: "约拍",
        NT: "通告",
        PH: "作品",
      },
      currentTab: 0,
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      list: [],
      status: 0,
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
    formatSex(sex) {
      if (sex == 1) {
        return "男";
      }
      if (sex == 0) {
        return "女";
      }
      return "不限";
    },
    // 点击tab切换
    changeItem(index, type) {
      if (this.currentTab === index) {
        return false;
      } else {
        this.currentTab = index;
        this.status = type;
        this.pageNum = 1;
        this.list = [];
        this.query();
      }
    },
    bindChange(e) {
      this.currentTab = e.detail.current;
    },
    scrollToLower() {
      this.pageNum++;
      this.query();
    },
    deleteTonggao(oid) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定删除该通告吗？",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
            _this.manageOperation({
              oid: oid,
              even_type: 400,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    openTonggao(oid) {
      openPage("/packageTonggao/pages/open_recruitment/index?oid=" + oid);
    },
    overTonggao(oid) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定结束该通告，不再接收报名么？",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
            _this.manageOperation({
              oid: oid,
              even_type: 300,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    refreshTonggao(oid) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "刷新当前通告需消耗5金币，确定刷新吗？",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
            _this.manageOperation({
              oid: oid,
              even_type: 700,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    manageTonggao(oid) {
      openPage("/packageMsg/pages/manageSignup/index?oid=" + oid);
    },
    reopenTonggao(oid) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定重新打开该通告吗？",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
            _this.manageOperation({
              oid: oid,
              even_type: 200,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    query() {
      let params = {
        type: "NT",
        publish_status: this.status,
        page: this.pageNum,
        per_page: this.pageSize,
      };
      this.manageList(params);
    },
    async manageList(params) {
      try {
        let res = await manageList(params);
        this.loading = true;
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
    async manageOperation(params) {
      try {
        let res = await manageOperation(params);
        this.pageNum = 1;
        this.list = [];
        this.query();
      } catch (error) {}
    },
  },
  onShow() {
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1]; //当前页面
    if (currPage.data.refresh) {
      this.pageNum = 1;
      this.list = [];
      this.query();
    }
  },
  onLoad: function (options) {
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.winWidth = res.windowWidth;
        that.winHeight = res.windowHeight;
      },
    });
    this.query();
  },
};
</script>

<style lang="scss" scoped></style>
