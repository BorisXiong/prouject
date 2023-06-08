// pages/seatmake/seatmake.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 1,
    sousuos: '',//搜索的数据
    bools1: '',
    bools2: '',
    bools3:'',
    bools4: '',
    bools5: '',
    bools6: '',
    bools7: '',
    bools8: '',
    bools9: '',
    bools10: '',
    bools11: '',
  },
  onLoad() {

    // 搜索自动有书
    var that = this;
    wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '0',
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          sousuos: res.data.data,
        })

      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    })


    // 存书信息 
    // 11111111111
    wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '2', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          bools1: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });
     // 22222222
     wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '3', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          bools2: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });


     // 333333333
     wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '4', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          bools3: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });


     // 444444444444
     wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '5', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          bools4: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });

     // 55555555555555555
     wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '6', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          bools5: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });


     // 66666666666666
     wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '7', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res);
        that.setData({
          bools6: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });

     // 7777777777777777777
     wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '8', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          bools7: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });

     // 88888888888888
     wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '9', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          bools8: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });


     // 99999999999999
     wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '10', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          bools9: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });

     // 10 10 10 10
     wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '11', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          bools10: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });

     // 11 11 11 11 11 11
     wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_classes: '12', 
      },
      url: 'https://myshool.icu/book/classes',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          bools11: res.data.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });
  },




  switchRightTab: function (e) {
    let id = e.target.dataset.id;
    // console.log(id);
    this.setData({
      curNav: id
    })
  },


  // 搜索
  sousuo(e) {
    var sou_va = e.detail.value;
    console.log(sou_va);
    var that = this;
    wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        b_name: sou_va,
      },
      url: 'https://myshool.icu//book/findmohu',
      success: function (res) {

        // console.log(res.data);
        that.setData({
          sousuos: res.data.data,
        })

      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
          duration: 1000//持续的时间
        });
      }
    })
  },

  onShow() {
    wx.setStorageSync('curNav', 1);
  },

  xiangqing(e) {
    var bookid = e.currentTarget.dataset.id;
    var curNav = this.data.curNav;
    
    wx.setStorageSync('curNav', curNav);
    wx.setStorageSync('book_in', bookid);
   
    wx.navigateTo({
      url: '../book_in/book_in',
    })

  },

})