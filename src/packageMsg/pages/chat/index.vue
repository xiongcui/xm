<template>
  <view class="chat">
    <scroll-view
      :scroll-y="true"
      :refresher-enabled="true"
      :refresher-triggered="triggered"
      @refresherpulling="onPulling"
      @refresherrefresh="onRefresh"
      @refresherrestore="onRestore"
      @refresherabort="onAbort"
    >
      <view class="chat-list">
        <view
          class="chat-box"
          v-for="(item, index) in list"
          :key="index"
          :class="item.from_account == userInfo.uuid ? 'chat-right' : ''"
        >
          <image :src="item.from_account_profile.face_url"></image>
          <view class="chat-txt">
            {{ item.msg_content }}
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="chat-send">
      <input v-model="msg" class="send-input" />
      <text class="send-btn" @tap="sendMessage">发送</text>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import TIM from "../../../../TUIKit/lib/tim-wx-sdk";
import { genTestUserSig } from "../../../../TUIKit/debug/GenerateTestUserSig";
import { sendMsg, addImUser, msgInfo } from "../../../api/index";
import { errortip } from "../../../utils/util";
export default {
  name: "chat",
  data() {
    return {
      triggered: false,
      userInfo: {},
      userArr: [],
      msg: "",
      $TUIKit: null,
      msgList: [],
      userID: "",
      list: [],
      config: {
        userID: "", //User ID
        SDKAPPID: 1400783847, // Your SDKAppID
        SECRETKEY:
          "3ba3f99ba20d5218ed211c641679a7ce2f6fc2091e285b6e77bc9c48fa2ff862", // Your secretKey
        EXPIRETIME: 604800,
      },
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
    // 下拉 但是没松手！！！
    onPulling() {
      console.log("自定义下拉刷新被触发");
    },

    // 回弹复位
    onRestore(event, ownerInstance) {
      console.log("onRestore 自定义下拉刷新被复位");
    },

    // 被中止
    onAbort() {
      console.log("onAbort 自定义下拉刷新被中止");
    },

    // 下拉 松手了！！！
    onRefresh() {
      console.log("onRefresh 下拉松手 请求数据");
      this.triggered = true;
      this.pageNum++;
      this.addMsgInfo({
        page: this.pageNum,
        per_page: this.pageSize,
        to_account: this.userArr[0].uuid,
      });
    },
    init_TIM() {
      //初始化im实时聊天
      if (this.globalData.globalData_TIM.isInit) {
        //这里设置了一个全局变量isLogin来标记是否已登录,避免重复创建im实例
        return false;
      }
      let options = {
        SDKAppID: this.config.SDKAPPID, // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
      };

      let that = this;
      // 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例
      this.$TUIKit = TIM.create(options); // SDK 实例通常用 tim 表示
      // 设置 SDK 日志输出级别，详细分级请参见 setLogLevel 接口的说明
      this.$TUIKit.setLogLevel(0); // 普通级别，日志量较多，接入时建议使用
      // tim.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用
      // 注册 COS SDK 插件   此处暂时隐藏有需求要传图片,文件等的请放开进行配置,记住头部引入
      // tim.registerPlugin({'cos-wx-sdk': COS})

      // 监听事件，例如：
      this.$TUIKit.on(TIM.EVENT.SDK_READY, function (event) {
        console.log("1111111");
        // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
        // event.name - TIM.EVENT.SDK_READY
      });

      this.$TUIKit.on(TIM.EVENT.MESSAGE_RECEIVED, function (event) {
        console.log("收到消息");
        let data = event.data[0];
        console.log(data);
        that.list.push({
          from_account_profile: {
            uuid: that.userInfo.uuid,
            nick_name: data.nick,
            face_url: data.avatar,
          },
          from_account: data.from,
          to_account: data.to,
          msg_content: data.payload.text,
        });
        // 收到推送的单聊、群聊、群提示、群系统通知的新消息，可通过遍历 event.data 获取消息列表数据并渲染到页面
        // event.name - TIM.EVENT.MESSAGE_RECEIVED
        // event.data - 存储 Message 对象的数组 - [Message]
      });

      this.$TUIKit.on(TIM.EVENT.MESSAGE_READ_BY_PEER, function (event) {
        console.log("2222222");
        // SDK 收到对端已读消息的通知，即已读回执。使用前需要将 SDK 版本升级至 v2.7.0 或以上。仅支持单聊会话。
        // event.name - TIM.EVENT.MESSAGE_READ_BY_PEER
        // event.data - event.data - 存储 Message 对象的数组 - [Message] - 每个 Message 对象的 isPeerRead 属性值为 true
      });

      this.$TUIKit.on(TIM.EVENT.CONVERSATION_LIST_UPDATED, function (event) {
        console.log("333333333", event.data);
        this.msgList = event.data;
        // 收到会话列表更新通知，可通过遍历 event.data 获取会话列表数据并渲染到页面
        // event.name - TIM.EVENT.CONVERSATION_LIST_UPDATED
        // event.data - 存储 Conversation 对象的数组 - [Conversation]
      });

      this.$TUIKit.on(TIM.EVENT.ERROR, function (event) {
        // 收到 SDK 发生错误通知，可以获取错误码和错误信息
        // event.name - TIM.EVENT.ERROR
        // event.data.code - 错误码
        // event.data.message - 错误信息
      });

      this.$TUIKit.on(TIM.EVENT.SDK_NOT_READY, function (event) {
        // 收到 SDK 进入 not ready 状态通知，此时 SDK 无法正常工作
        // event.name - TIM.EVENT.SDK_NOT_READY
      });

      this.$TUIKit.on(TIM.EVENT.KICKED_OUT, function (event) {
        // 收到被踢下线通知
        // event.name - TIM.EVENT.KICKED_OUT
        // event.data.type - 被踢下线的原因，例如:
        //    - TIM.TYPES.KICKED_OUT_MULT_ACCOUNT 多实例登录被踢
        //    - TIM.TYPES.KICKED_OUT_MULT_DEVICE 多终端登录被踢
        //    - TIM.TYPES.KICKED_OUT_USERSIG_EXPIRED 签名过期被踢 （v2.4.0起支持）。
      });

      this.$TUIKit.on(TIM.EVENT.NET_STATE_CHANGE, function (event) {
        //  网络状态发生改变（v2.5.0 起支持）。
        // event.name - TIM.EVENT.NET_STATE_CHANGE
        // event.data.state 当前网络状态，枚举值及说明如下：
        //     \- TIM.TYPES.NET_STATE_CONNECTED - 已接入网络
        //     \- TIM.TYPES.NET_STATE_CONNECTING - 连接中。很可能遇到网络抖动，SDK 在重试。接入侧可根据此状态提示“当前网络不稳定”或“连接中”
        //    \- TIM.TYPES.NET_STATE_DISCONNECTED - 未接入网络。接入侧可根据此状态提示“当前网络不可用”。SDK 仍会继续重试，若用户网络恢复，SDK 会自动同步消息
      });
    },
    login_TIM(userID) {
      //登录im实时聊天
      let promise = this.$TUIKit.login({
        userID: userID,
        userSig: genTestUserSig(this.config).userSig,
      });
      promise
        .then(function (imResponse) {
          console.log("登录成功");
          console.log(imResponse.data); // 登录成功
          if (imResponse.data.repeatLogin === true) {
            // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
            console.log("当前重复登录");
            console.log(imResponse.data.errorInfo);
          }
        })
        .catch(function (imError) {
          console.warn("login error:", imError); // 登录失败的相关信息
        });
    },
    getMsgList_TIM(userID) {
      // 打开某个会话时，第一次拉取消息列表
      let promise = this.$TUIKit.getMessageList({
        conversationID: "C2C" + userID,
        count: 15,
      });
      promise.then(function (imResponse) {
        const messageList = imResponse.data.messageList; // 消息列表。
        const nextReqMessageID = imResponse.data.nextReqMessageID; // 用于续拉，分页续拉时需传入该字段。
        const isCompleted = imResponse.data.isCompleted; // 表示是否已经拉完所有消息。
        console.log(imResponse);
        let msgarr = this.globalData.globalData_TIM.msg;
        let conversationTo = userID; // 定义会话键值
        if (msgarr[conversationTo] != undefined) {
          msgarr[conversationTo].concat(messageList);
        } else {
          msgarr[conversationTo] = messageList;
        }
        this.globalData.globalData_TIM.msg = msgarr;
        console.log(msgarr, "msgarr");
      });
    },
    logout_TIM() {
      let promise = this.$TUIKit.logout();
      promise
        .then(function (imResponse) {
          console.log(imResponse.data); // 登出成功
        })
        .catch(function (imError) {
          console.warn("logout error:", imError);
        });
    },
    sendMessage() {
      this.sendMsg({
        from_account: this.userArr[1].uuid,
        to_account: this.userArr[0].uuid,
        text_messages: this.msg,
      });
    },
    async sendMsg(params) {
      try {
        let res = await sendMsg(params);
        this.msg = "";
      } catch (error) {}
    },
    async addImUser(params) {
      try {
        let res = await addImUser(params);
        this.login_TIM(this.config.userID);
        this.msgInfo({
          page: this.pageNum,
          per_page: this.pageSize,
          to_account: params[0].uuid,
        });
      } catch (error) {}
    },
    async msgInfo(params) {
      try {
        let res = await msgInfo(params);
        this.list = res.data.data.items;
      } catch (error) {}
    },
    async addMsgInfo(params) {
      try {
        let res = await msgInfo(params);
        this.list = res.data.data.items.concat(this.list);
        this.triggered = false;
      } catch (error) {
        this.triggered = false;
        errortip("没有更多数据了～");
      }
    },
  },
  onLoad(options) {
    this.init_TIM(); //在需要的页面初始化
    // this.login_TIM(this.config.userID);
    if (options.uuid) {
      let userInfo = wx.getStorageSync("userInfo");
      this.userInfo = userInfo;
      let meObj = {
        uuid: userInfo.uuid,
        nick_name: userInfo.nickname,
        face_url: userInfo.avatar,
      };
      let arr = [
        {
          uuid: options.uuid,
          nick_name: options.nickname,
          face_url: options.avatar,
        },
        meObj,
      ];
      this.config.userID = meObj.uuid;
      this.userArr = arr;
      wx.setNavigationBarTitle({
        title: options.nickname,
      }); // 查询账号领域

      this.addImUser(arr);
    }
  },
};
</script>

<style lang="scss" scoped></style>
