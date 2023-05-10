<template>
  <view class="signup">
    <!-- 230:待定 410:合适 420:不符 430:放弃合作 440:完成合作 -->
    <view class="tab">
      <view
        class="tab-item"
        :class="currentTab == 0 ? 'on' : ''"
        @tap="changeItem(0, 230)"
        >待定</view
      >
      <view
        class="tab-item"
        :class="currentTab == 1 ? 'on' : ''"
        @tap="changeItem(1, 410)"
        >合适</view
      >
      <view
        class="tab-item"
        :class="currentTab == 2 ? 'on' : ''"
        @tap="changeItem(2, 420)"
        >不符</view
      >
      <view
        class="tab-item"
        :class="currentTab == 3 ? 'on' : ''"
        @tap="changeItem(3, 430)"
        >放弃合作</view
      >
      <view
        class="tab-item"
        :class="currentTab == 4 ? 'on' : ''"
        @tap="changeItem(4, 440)"
        >完成合作</view
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
                class="signup-box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="signup-top">
                  <view class="signup-img">
                    <image :src="item.visitor.avatar"></image>
                  </view>
                  <view class="signup-info">
                    <view class="signup-name">
                      {{ item.visitor.nickname }}
                      <image
                        v-if="item.visitor.sex == 1"
                        src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                        class="list_sex"
                      ></image>
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visitor.career_list[0] }} ｜
                      {{ item.visitor.province_name }}</view
                    >
                  </view>
                  <view class="signup-rt">
                    <view class="contact" @tap="contactNow(item)"
                      >立即联系</view
                    >
                    <view class="time">{{ item.date_humanize }}报名</view>
                  </view>
                </view>
                <view class="notice">
                  来自通告：{{ item.title }}
                  <text class="notice-btn" @tap="signupAllDetail(item.oid)"
                    >查看全部报名</text
                  ></view
                >
                <view class="remark" v-if="item.remark">
                  备注：{{ item.remark }}</view
                >
                <view class="signup-cotent">
                  <text class="signup-desc">{{ item.content }}</text>
                  <text
                    class="signup-detail"
                    @tap="signupDetail(item.sid, item.visited_status)"
                    >查看详情</text
                  >
                </view>
                <view class="signup-btns">
                  <view class="signup-btn-left">
                    <text class="more" @tap="moreClick(item.sid, item)"
                      >更多</text
                    >
                    <text class="remarks" @tap="saveRemarks(item)">备注</text>
                  </view>
                  <view class="signup-btn-rt">
                    <view
                      class="btn-yellow"
                      @tap="noConformance(item.sid)"
                      v-if="item.visited_status == 230"
                      ><icon type="cancel" size="12" color="#ffffff"></icon
                      >不符</view
                    >
                    <view
                      class="btn-red"
                      @tap="appropriate(item.sid)"
                      v-if="item.visited_status == 230"
                      ><icon
                        type="success_no_circle"
                        size="12"
                        color="#ffffff"
                      ></icon
                      >合适</view
                    >
                    <view
                      class="btn-yellow"
                      v-if="item.visited_status == 410"
                      @tap="abandonCooperation(item.sid)"
                      >放弃合作</view
                    >
                    <view
                      class="btn-red"
                      v-if="item.visited_status == 410"
                      @tap="completeCooperation(item.sid)"
                      >完成合作</view
                    >
                    <view
                      class="btn-blue"
                      v-if="item.visited_status == 420"
                      @tap="recoveryPending(item.sid)"
                      >恢复待定</view
                    >
                    <view
                      class="btn-yellow"
                      v-if="item.visited_status == 430"
                      @tap="restoreAppropriately(item.sid)"
                      >恢复合适</view
                    >
                    <view
                      class="btn-del"
                      v-if="item.visited_status == 440"
                      @tap="Delete(item.sid)"
                      >删除</view
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
                class="signup-box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="signup-top">
                  <view class="signup-img">
                    <image :src="item.visitor.avatar"></image>
                  </view>
                  <view class="signup-info">
                    <view class="signup-name">
                      {{ item.visitor.nickname }}
                      <image
                        v-if="item.visitor.sex == 1"
                        src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                        class="list_sex"
                      ></image>
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visitor.career_list[0] }} ｜
                      {{ item.visitor.province_name }}</view
                    >
                  </view>
                  <view class="signup-rt">
                    <view class="contact" @tap="contactNow(item)"
                      >立即联系</view
                    >
                    <view class="time">{{ item.date_humanize }}报名</view>
                  </view>
                </view>
                <view class="notice">
                  来自通告：{{ item.summary }}
                  <text class="notice-btn" @tap="signupAllDetail(item.oid)"
                    >查看全部报名</text
                  ></view
                >
                <view class="remark" v-if="item.remark">
                  备注：{{ item.remark }}</view
                >
                <view class="signup-cotent">
                  <text class="signup-desc">{{ item.content }}</text>
                  <text
                    class="signup-detail"
                    @tap="signupDetail(item.sid, item.visited_status)"
                    >查看详情</text
                  >
                </view>
                <view class="signup-btns">
                  <view class="signup-btn-left">
                    <text class="more" @tap="moreClick(item.sid, item)"
                      >更多</text
                    >
                    <text class="remarks" @tap="saveRemarks(item)">备注</text>
                  </view>
                  <view class="signup-btn-rt">
                    <view
                      class="btn-yellow"
                      @tap="noConformance(item.sid)"
                      v-if="item.visited_status == 230"
                      ><icon type="cancel" size="12" color="#ffffff"></icon
                      >不符</view
                    >
                    <view
                      class="btn-red"
                      @tap="appropriate(item.sid)"
                      v-if="item.visited_status == 230"
                      ><icon
                        type="success_no_circle"
                        size="12"
                        color="#ffffff"
                      ></icon
                      >合适</view
                    >
                    <view
                      class="btn-yellow"
                      v-if="item.visited_status == 410"
                      @tap="abandonCooperation(item.sid)"
                      >放弃合作</view
                    >
                    <view
                      class="btn-red"
                      v-if="item.visited_status == 410"
                      @tap="completeCooperation(item.sid)"
                      >完成合作</view
                    >
                    <view
                      class="btn-blue"
                      v-if="item.visited_status == 420"
                      @tap="recoveryPending(item.sid)"
                      >恢复待定</view
                    >
                    <view
                      class="btn-yellow"
                      v-if="item.visited_status == 430"
                      @tap="restoreAppropriately(item.sid)"
                      >恢复合适</view
                    >
                    <view
                      class="btn-del"
                      v-if="item.visited_status == 440"
                      @tap="Delete(item.sid)"
                      >删除</view
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
                class="signup-box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="signup-top">
                  <view class="signup-img">
                    <image :src="item.visitor.avatar"></image>
                  </view>
                  <view class="signup-info">
                    <view class="signup-name">
                      {{ item.visitor.nickname }}
                      <image
                        v-if="item.visitor.sex == 1"
                        src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                        class="list_sex"
                      ></image>
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visitor.career_list[0] }} ｜
                      {{ item.visitor.province_name }}</view
                    >
                  </view>
                  <view class="signup-rt">
                    <view class="contact" @tap="contactNow(item)"
                      >立即联系</view
                    >
                    <view class="time">{{ item.date_humanize }}报名</view>
                  </view>
                </view>
                <view class="notice">
                  来自通告：{{ item.summary }}
                  <text class="notice-btn" @tap="signupAllDetail(item.oid)"
                    >查看全部报名</text
                  ></view
                >
                <view class="remark" v-if="item.remark">
                  备注：{{ item.remark }}</view
                >
                <view class="signup-cotent">
                  <text class="signup-desc">{{ item.content }}</text>
                  <text
                    class="signup-detail"
                    @tap="signupDetail(item.sid, item.visited_status)"
                    >查看详情</text
                  >
                </view>
                <view class="signup-btns">
                  <view class="signup-btn-left">
                    <text class="more" @tap="moreClick(item.sid, item)"
                      >更多</text
                    >
                    <text class="remarks" @tap="saveRemarks(item)">备注</text>
                  </view>
                  <view class="signup-btn-rt">
                    <view
                      class="btn-yellow"
                      @tap="noConformance(item.sid)"
                      v-if="item.visited_status == 230"
                      ><icon type="cancel" size="12" color="#ffffff"></icon
                      >不符</view
                    >
                    <view
                      class="btn-red"
                      @tap="appropriate(item.sid)"
                      v-if="item.visited_status == 230"
                      ><icon
                        type="success_no_circle"
                        size="12"
                        color="#ffffff"
                      ></icon
                      >合适</view
                    >
                    <view
                      class="btn-yellow"
                      v-if="item.visited_status == 410"
                      @tap="abandonCooperation(item.sid)"
                      >放弃合作</view
                    >
                    <view
                      class="btn-red"
                      v-if="item.visited_status == 410"
                      @tap="completeCooperation(item.sid)"
                      >完成合作</view
                    >
                    <view
                      class="btn-blue"
                      v-if="item.visited_status == 420"
                      @tap="recoveryPending(item.sid)"
                      >恢复待定</view
                    >
                    <view
                      class="btn-yellow"
                      v-if="item.visited_status == 430"
                      @tap="restoreAppropriately(item.sid)"
                      >恢复合适</view
                    >
                    <view
                      class="btn-del"
                      v-if="item.visited_status == 440"
                      @tap="Delete(item.sid)"
                      >删除</view
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
                class="signup-box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="signup-top">
                  <view class="signup-img">
                    <image :src="item.visitor.avatar"></image>
                  </view>
                  <view class="signup-info">
                    <view class="signup-name">
                      {{ item.visitor.nickname }}
                      <image
                        v-if="item.visitor.sex == 1"
                        src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                        class="list_sex"
                      ></image>
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visitor.career_list[0] }} ｜
                      {{ item.visitor.province_name }}</view
                    >
                  </view>
                  <view class="signup-rt">
                    <view class="contact" @tap="contactNow(item)"
                      >立即联系</view
                    >
                    <view class="time">{{ item.date_humanize }}报名</view>
                  </view>
                </view>
                <view class="notice">
                  来自通告：{{ item.summary }}
                  <text class="notice-btn" @tap="signupAllDetail(item.oid)"
                    >查看全部报名</text
                  ></view
                >
                <view class="remark" v-if="item.remark">
                  备注：{{ item.remark }}</view
                >
                <view class="signup-cotent">
                  <text class="signup-desc">{{ item.content }}</text>
                  <text
                    class="signup-detail"
                    @tap="signupDetail(item.sid, item.visited_status)"
                    >查看详情</text
                  >
                </view>
                <view class="signup-btns">
                  <view class="signup-btn-left">
                    <text class="more" @tap="moreClick(item.sid, item)"
                      >更多</text
                    >
                    <text class="remarks" @tap="saveRemarks(item)">备注</text>
                  </view>
                  <view class="signup-btn-rt">
                    <view
                      class="btn-yellow"
                      @tap="noConformance(item.sid)"
                      v-if="item.visited_status == 230"
                      ><icon type="cancel" size="12" color="#ffffff"></icon
                      >不符</view
                    >
                    <view
                      class="btn-red"
                      @tap="appropriate(item.sid)"
                      v-if="item.visited_status == 230"
                      ><icon
                        type="success_no_circle"
                        size="12"
                        color="#ffffff"
                      ></icon
                      >合适</view
                    >
                    <view
                      class="btn-yellow"
                      v-if="item.visited_status == 410"
                      @tap="abandonCooperation(item.sid)"
                      >放弃合作</view
                    >
                    <view
                      class="btn-red"
                      v-if="item.visited_status == 410"
                      @tap="completeCooperation(item.sid)"
                      >完成合作</view
                    >
                    <view
                      class="btn-blue"
                      v-if="item.visited_status == 420"
                      @tap="recoveryPending(item.sid)"
                      >恢复待定</view
                    >
                    <view
                      class="btn-yellow"
                      v-if="item.visited_status == 430"
                      @tap="restoreAppropriately(item.sid)"
                      >恢复合适</view
                    >
                    <view
                      class="btn-del"
                      v-if="item.visited_status == 440"
                      @tap="Delete(item.sid)"
                      >删除</view
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
                class="signup-box"
                v-for="(item, index) in list"
                :key="index"
              >
                <view class="signup-top">
                  <view class="signup-img">
                    <image :src="item.visitor.avatar"></image>
                  </view>
                  <view class="signup-info">
                    <view class="signup-name">
                      {{ item.visitor.nickname }}
                      <image
                        v-if="item.visitor.sex == 1"
                        src="https://yuepai-oss.qubeitech.com/static/images/nan.png"
                        class="list_sex"
                      ></image>
                      <image
                        src="https://yuepai-oss.qubeitech.com/static/images/nv.png"
                        class="list_sex"
                        v-if="item.visitor.sex == 0"
                      ></image>
                    </view>
                    <view class="identity"
                      >{{ item.visitor.career_list[0] }} ｜
                      {{ item.visitor.province_name }}</view
                    >
                  </view>
                  <view class="signup-rt">
                    <view class="contact" @tap="contactNow(item)"
                      >立即联系</view
                    >
                    <view class="time">{{ item.date_humanize }}报名</view>
                  </view>
                </view>
                <view class="notice">
                  来自通告：{{ item.summary }}
                  <text class="notice-btn" @tap="signupAllDetail(item.oid)"
                    >查看全部报名</text
                  ></view
                >
                <view class="remark" v-if="item.remark">
                  备注：{{ item.remark }}</view
                >
                <view class="signup-cotent">
                  <text class="signup-desc">{{ item.content }}</text>
                  <text
                    class="signup-detail"
                    @tap="signupDetail(item.sid, item.visited_status)"
                    >查看详情</text
                  >
                </view>
                <view class="signup-btns">
                  <view class="signup-btn-left">
                    <text class="more" @tap="moreClick(item.sid, item)"
                      >更多</text
                    >
                    <text class="remarks" @tap="saveRemarks(item)">备注</text>
                  </view>
                  <view class="signup-btn-rt">
                    <view
                      class="btn-yellow"
                      @tap="noConformance(item.sid)"
                      v-if="item.visited_status == 230"
                      ><icon type="cancel" size="12" color="#ffffff"></icon
                      >不符</view
                    >
                    <view
                      class="btn-red"
                      @tap="appropriate(item.sid)"
                      v-if="item.visited_status == 230"
                      ><icon
                        type="success_no_circle"
                        size="12"
                        color="#ffffff"
                      ></icon
                      >合适</view
                    >
                    <view
                      class="btn-yellow"
                      v-if="item.visited_status == 410"
                      @tap="abandonCooperation(item.sid)"
                      >放弃合作</view
                    >
                    <view
                      class="btn-red"
                      v-if="item.visited_status == 410"
                      @tap="completeCooperation(item.sid)"
                      >完成合作</view
                    >
                    <view
                      class="btn-blue"
                      v-if="item.visited_status == 420"
                      @tap="recoveryPending(item.sid)"
                      >恢复待定</view
                    >
                    <view
                      class="btn-yellow"
                      v-if="item.visited_status == 430"
                      @tap="restoreAppropriately(item.sid)"
                      >恢复合适</view
                    >
                    <view
                      class="btn-del"
                      v-if="item.visited_status == 440"
                      @tap="Delete(item.sid)"
                      >删除</view
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
    <view class="modal_box" v-if="visible">
      <view class="modal_content">
        <view> 添加备注信息 </view>
        <textarea
          :autoHeight="true"
          class="intro_content"
          maxlength="500"
          name="intro"
          placeholder="请输入您的备注信息"
          placeholderClass="intro_content_none"
          v-model="remarks"
        ></textarea>
        <image
          src="https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png"
          class="close-img"
          @tap="close"
        ></image>
        <view class="save" @tap="clickSave">保存</view>
      </view>
    </view>
    <!--联系方式-->
    <!-- <view class="modal_box" v-if="contactVisible">
      <view class="modal_content">
        <view class="modal_title">
          <view> 联系方式 </view>
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png"
            class="close-img"
            @tap="contactClose"
          ></image>
        </view>
        <view class="modal_wechat">
          <view> 微信号：{{ contact.wechat }} </view>
          <view class="copy" @tap="copy(contact.wechat)">复制</view>
        </view>
      </view>
    </view> -->
    <view class="modal_box" v-if="contactVisible" @tap="contactClose">
      <view class="contact_box">
        <view class="modal_title">
          <view> 联系方式 </view>
          <image
            src="https://yuepai-oss.qubeitech.com/static/images/common/x_icon.png"
            class="close-img"
            @tap="contactClose"
          ></image>
        </view>
        <view class="contact_info" v-if="showAddress">
          <view class="contact_info_left">
            <view>手机号：</view>
            <view>{{ data.address.mobile }}</view>
          </view>
          <view class="copy" @tap="copy(data.address.mobile)">复制</view>
        </view>
        <view class="contact_info" v-if="showAddress">
          <view class="contact_info_left">
            <view>地址：</view>
            <view>{{ data.address.detail_address }}</view>
          </view>
          <view class="copy" @tap="copy(data.address.detail_address)"
            >复制</view
          >
        </view>
        <view class="contact_info" v-if="showCelebrity">
          <view class="contact_info_left">
            <view>红人账号：</view>
            <view>{{ data.celebrity.nickname }}</view>
          </view>
          <view class="copy" @tap="copy(data.celebrity.nickname)">复制</view>
        </view>
        <view class="contact_info" v-if="showContact">
          <view class="contact_info_left">
            <view>微信号：</view>
            <view>{{ data.contact.wechat }}</view>
          </view>
          <view class="copy" @tap="showQRcode">点击查看微信二维码</view>
        </view>
      </view>
    </view>
    <!--微信二维码-->
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
import {
  applyList,
  applyManage,
  applyInfo,
  receivePayment,
} from "../../../api/index";
import { errortip, openPage } from "../../../utils/util";
import "./index.scss";
export default {
  name: "sigup",
  data() {
    return {
      currentTab: 0,
      list: [],
      // 页面配置
      winWidth: 0,
      winHeight: 0,
      status: 230,
      pageNum: 1,
      pageSize: 10,
      remarks: "",
      visible: false,
      contactVisible: false,
      showModel: false,
      loading: true,
      // contact: {
      //   wechat: "",
      // },
      showContact: true,
      showCelebrity: true,
      showAddress: true,
      data: {
        contact: {
          person: "",
          wechat: "",
          wechat_links: "",
          mobile: "",
          is_wechat: 1,
          is_mobile: 1,
        },
        celebrity: {
          nickname: "",
          fans_number: "",
        },
        address: {
          detail_address: "",
          mobile: "",
          name: "",
        },
      },
    };
  },
  methods: {
    copy(txt) {
      wx.setClipboardData({
        data: txt, //这个是要复制的数据
        success(res) {
          wx.getClipboardData({
            success(res) {
              console.log(res.data); // data
              if (res.data) {
                errortip("复制成功");
              }
            },
          });
        },
      });
    },
    closeQRcode() {
      this.showModel = false;
    },
    showQRcode() {
      this.showModel = true;
    },
    contactClose() {
      console.log(3333);
      this.contactVisible = false;
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
    saveRemarks(row) {
      this.visible = true;
      this.remarks = row.remark;
      this.currentdata = row;
    },
    close() {
      this.visible = false;
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
    signupAllDetail(oid) {
      openPage(
        "/packageMsg/pages/manageSignup/index?oid=" +
          oid +
          "&type=" +
          this.status +
          "&currentTab=" +
          this.currentTab
      );
    },
    signupDetail(sid, visited_status) {
      // openPage(
      //   "/packageMsg/pages/tgregreceiveshow/index?sid=" +
      //     sid +
      //     "&visited_status=" +
      //     visited_status
      // );
      openPage(
        "/packageMsg/pages/inviteDetail/index?sid=" +
          sid +
          "&visited_status=" +
          visited_status
      );
    },
    clickSave() {
      this.applyManage({
        visited_status: 500,
        sid: this.currentdata.sid,
        remark: this.remarks,
      });
    },
    moreClick(sid, row) {
      wx.showActionSheet({
        itemList: ["删除", "投诉"],
        success(res) {
          switch (res.tapIndex) {
            case 0:
              this.Delete({
                visited_status: -200,
                sid: sid,
              });
              break;
            case 1:
              console.log("投诉");
              openPage(
                "/packageMsg/pages/complaint/index?visitor_id=" +
                  row.visitor_id +
                  "&avatar=" +
                  row.visitor.avatar +
                  "&nickname=" +
                  row.visitor.nickname +
                  "&province_name=" +
                  row.visitor.province_name +
                  "&career=" +
                  row.visitor.career_list[0]
              );
              break;
          }
        },
        fail(res) {
          console.log(res.errMsg);
        },
      });
    },
    appropriate(sid) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定标记该报名为合适吗？",
        success: function (res) {
          if (res.confirm) {
            _this.applyManage({
              visited_status: 410,
              sid: sid,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    noConformance(sid) {
      let _this = this;
      wx.showModal({
        title: "温馨提示",
        content: "确定标记该报名为不符吗？",
        success: function (res) {
          if (res.confirm) {
            _this.applyManage({
              visited_status: 420,
              sid: sid,
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    completeCooperation(sid) {
      this.applyManage({
        visited_status: 440,
        sid: sid,
      });
    },
    abandonCooperation(sid) {
      this.applyManage({
        visited_status: 430,
        sid: sid,
      });
    },
    Delete(sid) {
      this.applyManage({
        visited_status: -200,
        sid: sid,
      });
    },
    recoveryPending(sid) {
      this.applyManage({
        visited_status: 230,
        sid: sid,
      });
    },
    restoreAppropriately(sid) {
      this.applyManage({
        visited_status: 410,
        sid: sid,
      });
    },
    query() {
      let params = {
        type: "NT",
        page: this.pageNum,
        per_page: this.pageSize,
      };
      if (this.status != 230) {
        params.visited_status = this.status;
      }
      this.loading = false;
      this.applyList(params);
    },
    scrollToLower() {
      this.pageNum++;
      this.query();
    },
    contactNow(row) {
      let _this = this;
      wx.showActionSheet({
        itemList: ["立即沟通", "查看联系方式"],
        success(res) {
          switch (res.tapIndex) {
            case 0:
              console.log("立即沟通");
              openPage(
                "/packageMsg/pages/chat/index?uuid=" +
                  row.visitor.uuid +
                  "&nickname=" +
                  row.visitor.nickname +
                  "&avatar=" +
                  row.visitor.avatar
              );
              break;
            case 1:
              console.log("查看联系方式");
              _this.contactVisible = true;
              _this.applyInfo({ sid: row.sid });
              break;
          }
        },
        fail(res) {
          console.log(res.errMsg);
        },
      });
    },
    async applyList(params) {
      try {
        let res = await applyList(params);
        this.loading = true;
        if (!res.data.data || !res.data.data.items.length) {
          errortip("没有更多数据了～");
          return false;
        }
        let data = res.data.data.items;
        this.list = this.list.concat(data);
      } catch (error) {}
    },
    async applyManage(params) {
      try {
        let res = await applyManage(params);
        this.visible = false;
        this.pageNum = 1;
        this.list = [];
        this.query();
      } catch (error) {}
    },
    async applyInfo(params) {
      try {
        let res = await applyInfo(params);
        this.showContact = res.data.data.contact.is_enable;
        this.showCelebrity = res.data.data.celebrity.is_enable;
        this.showAddress = res.data.data.address.is_enable;

        this.data.contact = res.data.data.contact.body;
        this.data.celebrity = res.data.data.celebrity.body;
        this.data.address = res.data.data.address.body;
      } catch (error) {}
    },
    async receivePayment(params) {
      try {
        let res = await receivePayment(params);
        errortip("支付成功");
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
    this.pageNum = 1;
    this.list = [];
    this.query();
  },
};
</script>

<style lang="scss" scoped></style>
