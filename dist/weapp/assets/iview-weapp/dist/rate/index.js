(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["assets/iview-weapp/dist/rate/index"],{

/***/ "./src/assets/iview-weapp/dist/rate/index.js":
/*!***************************************************!*\
  !*** ./src/assets/iview-weapp/dist/rate/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

Component({
  externalClasses: ['i-class'],
  properties: {
    count: {
      type: Number,
      value: 5
    },
    value: {
      type: Number,
      value: 0
    },
    disabled: {
      type: Boolean,
      value: false
    },
    size: {
      type: Number,
      value: 20
    },
    name: {
      type: String,
      value: ''
    }
  },
  data: {
    touchesStart: {
      pageX: 0
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      var data = this.data;

      if (data.disabled) {
        return;
      }

      var index = e.currentTarget.dataset.index;
      this.triggerEvent('change', {
        index: index + 1
      });
    },
    handleTouchMove: function handleTouchMove(e) {
      var data = this.data;

      if (data.disabled) {
        return;
      }

      if (!e.changedTouches[0]) {
        return;
      }

      var movePageX = e.changedTouches[0].pageX;
      var space = movePageX - data.touchesStart.pageX;

      if (space <= 0) {
        return;
      }

      var setIndex = Math.ceil(space / data.size);
      setIndex = setIndex > data.count ? data.count : setIndex;
      this.triggerEvent('change', {
        index: setIndex
      });
    }
  },
  ready: function ready() {
    var _this = this;

    var className = '.i-rate';
    var query = wx.createSelectorQuery().in(this);
    query.select(className).boundingClientRect(function (res) {
      _this.data.touchesStart.pageX = res.left || 0;
    }).exec();
  }
});

/***/ })

},[["./src/assets/iview-weapp/dist/rate/index.js","runtime"]]]);
//# sourceMappingURL=index.js.map