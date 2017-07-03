const tourlinelist = require('../../utils/tourline.js');

const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    app.getUserInfo(user => {
      this.setData({
        scrollDown: true,
        address: "定位中",
        user: user
      })
    })
  },
  onShow: function () {
    this.setData({
      city: app.globalData.city || '上海市',
      recomment: [{
        id: 1,
        title: '美食线路',
        salePrice: 1200,
        originalPrice: 1430,
        reason: '专业定制',
        saleCount: 120,
        feature: '热门',
        hang: '免预约',
        imgurl: 'https://wx.qlogo.cn/mmopen/vi_32/b54K8Bpv1QkIw51JNBafm5rMJ1Xib6LNLOYzjqs4md1snTQ7Bb0McianrHe02atGA0baGNJakWHCoibbibcicDiaHYOg/0'
      }, {
        id: 2,
        title: '香港线路',
        salePrice: 2561,
        originalPrice: 3200,
        reason: '专业定制，免签证，好玩as大是大非爱ad哈斯',
        saleCount: 1690,
        feature: '热门',
        hang: '免预约',
        imgurl: 'https://wx.qlogo.cn/mmopen/vi_32/b54K8Bpv1QkIw51JNBafm5rMJ1Xib6LNLOYzjqs4md1snTQ7Bb0McianrHe02atGA0baGNJakWHCoibbibcicDiaHYOg/0'
      }, {
        id: 3,
        title: '泰国线路',
        salePrice: 2561,
        originalPrice: 3200,
        reason: '专业定阿萨德制，免签证，好玩as大是大非爱ad哈斯',
        saleCount: 1690,
        feature: '热门',
        hang: '免预约',
        imgurl: 'https://wx.qlogo.cn/mmopen/vi_32/b54K8Bpv1QkIw51JNBafm5rMJ1Xib6LNLOYzjqs4md1snTQ7Bb0McianrHe02atGA0baGNJakWHCoibbibcicDiaHYOg/0'
      }]
    })
  },
  onScroll: function (e) {
    if (e.detail.scrollTop > 100 && !this.data.scrollDown) {
      this.setData({
        scrollDown: true
      });
    } else if (e.detail.scrollTop < 100 && this.data.scrollDown) {
      this.setData({
        scrollDown: false
      });
    }
  },
  // 进入搜索框界面
  tapSearchInput: function () {
    wx.navigateTo({ url: '../searchinput/searchinput' });
  },
  // 进入搜索主界面
  tapSearchIndex: function (event) {
    const id = event.currentTarget.id || 1
    const url = '../search/search?id=' + id
    wx.navigateTo({ url })
  },
  // 进入用户中心
  tapUser: function () {
    wx.navigateTo({ url: '../user/user' });
  },
  // 定位
  toNearby: function () {
    var that = this
    // 1.查看接口是否可用
    wx.getSetting({
      success(res) {
        if (!res['userLocation']) {
          // 2.如果接口不能调用，请求调用
          wx.authorize({
            scope: 'scope.userInfo',
            success(authorizeRes) {
              // 3.获取当前的地理位置、速度
              wx.getLocation({
                type: 'wgs84',
                success: function (getLocationRes) {
                  // // 纬度，浮点数，范围为-90~90，负数表示南纬
                  // let latitude = getLocationRes.latitude;
                  // // 经度，浮点数，范围为-180~180，负数表示西经
                  // let longitude = getLocationRes.longitude;
                  // // 速度，浮点数，单位m/s
                  // let speed = getLocationRes.speed;
                  // // 位置的精确度
                  // let accuracy = getLocationRes.accuracy;
                  // // 高度，单位 m
                  // let altitude = getLocationRes.altitude;
                  // // 垂直精度，单位 m（Android 无法获取，返回 0）
                  // let verticalAccuracy = getLocationRes.verticalAccuracy;
                  // // 水平精度，单位 m
                  // let horizontalAccuracy = getLocationRes.horizontalAccuracy;

                  // 4.打开地图,选择位置
                  wx.chooseLocation({
                    success(chooseLocationRes) {
                      // 位置名称
                      let name = chooseLocationRes.name;
                      // 详细地址
                      let address = chooseLocationRes.address;
                      // 纬度
                      let latitude = chooseLocationRes.latitude;
                      // 经度
                      let longitude = chooseLocationRes.longitude;

                      that.setData({ address: name })
                    },
                    // 用户取消时调用
                    cancel() {
                      console.log("用户取消调用")
                    }
                  })

                  //  5.使用微信内置地图查看位置
                  // wx.openLocation({
                  //   // 纬度，范围为-90~90，负数表示南纬
                  //   latitude: getLocationRes.latitude,
                  //   // 经度，范围为-180~180，负数表示西经
                  //   longitude: getLocationRes.longitude,
                  //   // 缩放比例，范围5~18，默认为18
                  //   scale: 18,
                  //   name: "位置名",
                  //   address: "地址的详细说明",
                  //   success() {
                  //   }
                  // })
                },
              })
            }
          })
        }
      }
    })
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
  tapTourlineDetail: tourlinelist.tapTourlineDetail
});
