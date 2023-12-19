export default definePageConfig({
  navigationBarTitleText: "",
  enablePullDownRefresh: true,
  navigationStyle: "custom",
  navigationBarBackgroundColor: "#FE5457",
  navigationBarTextStyle: "white",
  backgroundColor: "#FE5457",
  backgroundColorTop: "#FE5457",
  backgroundColorBottom: "#f7f7f7",
  backgroundTextStyle: "dark",
  usingComponents: {
    "selector-component": "plugin://citySelector/selector-component",
  },
});
