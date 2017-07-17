const search = require('../../utils/search')

const app = getApp()

Page({
  data: {
    searchWords: '',
    placeholder: '输入线路名、出发城市',
    array: ['美国', '中国', '巴西', '日本'],
  },
  onLoad: function (options) {
    const id = options['id']
    function barTitle (id) {
      let title = ''
      switch (Number(id)) {
        case 0:
         title = '所有线路'
        break
        case 1:
         title = '国内长线'
        break
        case 2:
         title = '国内中线'
        break
        case 3:
         title = '周边短线'
        break
        case 4:
         title = '自驾游'
        default:
         title = '所有线路'
      }
      return title
    }
    const title = barTitle(id)
    wx.setNavigationBarTitle({
      title: title
    })
  },
  onShow: function () {
    app.getUserInfo(user => {
      this.setData({
        search: {
          city: app.globalData.city || '上海市',
          avatarUrl: user.avatarUrl
        },
      })
    })
  },
  tapSearchInput: search.tapSearchInput,
  tapSearchIndex: search.tapSearchIndex,
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
});
