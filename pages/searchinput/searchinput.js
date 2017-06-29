Page({
  data: {
    searchWords: '',
    placeholder: '上海周边游'
  },
  onLoad: function () {
  },
  onShow: function () {
  },
  // 文本输入框
  inputSearch: function (e) {
    this.setData({
      searchWords: e.detail.value
    });
  },
  doSearch: function () {
    this.setData({
      showResult: true
    });
  }
});
