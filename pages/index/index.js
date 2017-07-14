const search = require('../../utils/search')

const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    show: [{
      type: '国内长线',
      imgurl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      discount: '9.7',
      title: '兰州、青海湖、茶卡盐湖、祁连、张掖丹霞、嘉峪关、敦煌、莫高窟、鸣沙山双飞7日游',
      reason: '推荐理由】 【设计理念】 ★ 选择甘肃和青海两省精华景点，集湖泊、草原、沙漠、遗址于一线； ★ 兰州起止，一车一导、汽车去硬卧回，坐车不走回头路，行程更舒适； ★ 硬卧可升级兰新高铁，乘坐最美高铁线兰新高铁',
      feature: ['最热', '优惠'],
      originalPrice: '18000',
      realPrice: '14300'
    }, {
      type: '国内中线',
      imgurl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      discount: '9.7',
      title: '兰州、青海湖、茶卡盐湖、祁连、张掖丹霞、嘉峪关、敦煌、莫高窟、鸣沙山双飞7日游',
      reason: '推荐理由】 【设计理念】 ★ 选择甘肃和青海两省精华景点，集湖泊、草原、沙漠、遗址于一线； ★ 兰州起止，一车一导、汽车去硬卧回，坐车不走回头路，行程更舒适； ★ 硬卧可升级兰新高铁，乘坐最美高铁线兰新高铁',
      feature: ['最热', '优惠'],
      originalPrice: '18000',
      realPrice: '14300'
    }, {
      type: '周边短线',
      imgurl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      discount: '9.7',
      title: '兰州、青海湖、茶卡盐湖、祁连、张掖丹霞、嘉峪关、敦煌、莫高窟、鸣沙山双飞7日游',
      reason: '推荐理由】 【设计理念】 ★ 选择甘肃和青海两省精华景点，集湖泊、草原、沙漠、遗址于一线； ★ 兰州起止，一车一导、汽车去硬卧回，坐车不走回头路，行程更舒适； ★ 硬卧可升级兰新高铁，乘坐最美高铁线兰新高铁',
      feature: ['最热', '优惠'],
      originalPrice: '18000',
      realPrice: '14300'
    }, {
      type: '自驾游',
      imgurl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      discount: '9.7',
      title: '兰州、青海湖、茶卡盐湖、祁连、张掖丹霞、嘉峪关、敦煌、莫高窟、鸣沙山双飞7日游',
      reason: '推荐理由】 【设计理念】 ★ 选择甘肃和青海两省精华景点，集湖泊、草原、沙漠、遗址于一线； ★ 兰州起止，一车一导、汽车去硬卧回，坐车不走回头路，行程更舒适； ★ 硬卧可升级兰新高铁，乘坐最美高铁线兰新高铁',
      feature: ['最热', '优惠'],
      originalPrice: '18000',
      realPrice: '14300'
    }]
  },
  scroll: function(e) {
  },
  onLoad: function () {
  },
  onShow: function () {
    app.getUserInfo(user => {
      this.setData({
        scrollDown: true,
        address: "定位中",
        search: {
          city: app.globalData.city || '上海市',
          avatarUrl: user.avatarUrl
        },
        user: user,
        city: app.globalData.city || '上海市',
      })
    })
  },
  // 进入用户中心
  tapUser: function () {
    wx.navigateTo({ url: '../user/user' });
  },
  // get city location
  switchCity: function () {
    wx.navigateTo({ url: '../switchcity/switchcity' });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },
  tapSearchInput: search.tapSearchInput,
  tapSearchIndex: search.tapSearchIndex,
});
