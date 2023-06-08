//index.js
//获取应用实例

Page({
  data: {
    username: '',
    password: '',
    IID: '',//用户登陆成功id

    user_xinxis: '',
  },
  wj_poss() {
    wx.showToast({
      title: '该功能未上线！请联系管理员',
      icon: 'none',
      duration: 1200
    })
  },
  //获取输入款内容
  content(e) {
    this.setData({
      username: e.detail.value
    })

  },
  password(e) {
    this.setData({
      password: e.detail.value
    })
  },
  //登录事件
  goadmin(e) {

    var passlen = this.data.password.length;

    if (this.data.username == '') {
      wx.showToast({
        icon: 'none',
        title: '账号不能为空',
      })
    } else if (this.data.password == '') {
      wx.showToast({
        icon: 'none',
        title: '密码不能为空',
      })
    } else if (passlen >= 3 && passlen < 9) {
      const that = this;
      wx.request({
        url: 'https://myshool.icu/weixinlogin/findlogin',
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          sno: this.data.username,
          password: this.data.password,
        },
        success(res) {
          // console.log("请求成功!");
          // console.log(res);
          that.setData({
            user_xinxis: res.data[0]
          })
          var users = 'user_xinxis.sno';
          that.setData({
            [users]: that.data.username,
          })
          var user_xinxi = res.data[0];
          wx.setStorageSync('user_xinxi', user_xinxi);
          if (res.data.length == 0) {
            wx.showToast({
              icon: 'none',
              title: '账号或密码错误!',
            })
          } else {

            wx.switchTab({
              url: '../index/index',
            })
          }
        },

        fail(err) {
         
          console.log("请求失败!");
          wx.showToast({
            icon: 'none',
            title: '链接错误!',
          })
        }
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '密码长度3~9之间',
      })

    }
  },
})