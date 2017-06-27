/**
 * @fileOverview 微信小程序的入口文件
 */

var qcloud = require('./vendor/qcloud-weapp-client-sdk/index');
var config = require('./config');

App({
    /**
     * 小程序初始化时执行，我们初始化客户端的登录地址，以支持所有的会话操作
     */
    onLaunch() {
        qcloud.setLoginUrl(config.service.loginUrl);
    },
    getUserInfo: function (cb){
      var that = this
      if(this.globalData.userInfo){
        typeof cb == "function" && cb(this.globalData.userInfo)
      }else{
        //调用登录接口
        wx.login({
          success: function (login) {
            wx.getUserInfo({
              success: function (res) {
                if (login.code) {
                  that.globalData.code = login.code
                }
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })
          }
        })
      }
    },
    setCity: function ({city}) {
      if (!city) return
      this.globalData.city = city
    },
    globalData:{
      code: null,
      userInfo:null,
      city:null
    }
});