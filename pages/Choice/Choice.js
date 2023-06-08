// pages/Choice/Choice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 1,

    zuowei1: '',
    zuowei2: '',
    zuowei3: '',
    zuowei4: '',
  },


  switchRightTab: function (e) {
    let id = e.target.dataset.id;
    // console.log(id);
    this.setData({
      curNav: id
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 1111111111111111111111111111
    var that = this;
    wx.request({
      url: 'https://myshool.icu/seat/findtowis',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        tower: 1,
      },
      success: function (res) {
        // console.log(res);
        that.setData({
          zuowei1: res.data.data
        })
        for (let i = 0; i < that.data.zuowei1.length; i++) {
          var zw1 = "zuowei1[" + i + "].wid";
          var zw2 = "zuowei1[" + i + "].color";
          that.setData({
            [zw1]: i
          })
          if (that.data.zuowei1[i].state == '2') {
            that.setData({
              [zw2]: '#234572',
            })
          } else if (that.data.zuowei1[i].state == '1') {
            that.setData({
              [zw2]: '#EDA867',
            })
          } else {
            that.setData({
              [zw2]: '',
            })
          }
        }

      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });
    //  2222222222222222222222222222222
    wx.request({
      url: 'https://myshool.icu/seat/findtowis',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        tower: 2,
      },

      success: function (res) {
        // console.log(res);
        that.setData({
          zuowei2: res.data.data
        })

        for (let i = 0; i < that.data.zuowei2.length; i++) {
          var zw1 = "zuowei2[" + i + "].wid";
          var zw2 = "zuowei2[" + i + "].color";
          that.setData({
            [zw1]: i
          })
          if (that.data.zuowei2[i].state == '2') {
            that.setData({
              [zw2]: '#234572',
            })
          } else if (that.data.zuowei2[i].state == '1') {
            that.setData({
              [zw2]: '#EDA867',
            })
          } else {
            that.setData({
              [zw2]: '',
            })
          }
        }
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });
    //3333333333333333333333333333333333333333
    wx.request({
      url: 'https://myshool.icu/seat/findtowis',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        tower: 3,
      },

      success: function (res) {
        // console.log(res);
        that.setData({
          zuowei3: res.data.data
        })

        for (let i = 0; i < that.data.zuowei3.length; i++) {
          var zw1 = "zuowei3[" + i + "].wid";
          var zw2 = "zuowei3[" + i + "].color";
          that.setData({
            [zw1]: i
          })
          if (that.data.zuowei3[i].state == '2') {
            that.setData({
              [zw2]: '#234572',
            })
          } else if (that.data.zuowei3[i].state == '1') {
            that.setData({
              [zw2]: '#EDA867',
            })
          } else {
            that.setData({
              [zw2]: '',
            })
          }
        }
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });
    //44444444444444444444444444444444
    wx.request({
      url: 'https://myshool.icu/seat/findtowis',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        tower: 4,
      },
      success: function (res) {
        // console.log(res);
        that.setData({
          zuowei4: res.data.data
        })

        for (let i = 0; i < that.data.zuowei4.length; i++) {
          var zw1 = "zuowei4[" + i + "].wid";
          var zw2 = "zuowei4[" + i + "].color";
          that.setData({
            [zw1]: i
          })
          if (that.data.zuowei4[i].state == '2') {
            that.setData({
              [zw2]: '#234572',
            })
          } else if (that.data.zuowei4[i].state == '1') {
            that.setData({
              [zw2]: '#EDA867',
            })
          } else {
            that.setData({
              [zw2]: '',
            })
          }
        }
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "接口调用失败，请稍后再试。",
        });
      }
    });
    // wx.showToast({
    //   title: '可缩放选座',
    //   icon: 'none',
    //   duration: 2000//持续的时间
    // });
    //初始化
    wx.setStorageSync('oneci', null);
    wx.setStorageSync('louceng', null);
    wx.setStorageSync('zuowhao', null);

    this.setData({
      undefined,
      zuowei1: this.data.zuowei1,

    });
  },



  // 选座
  dianzuowei(e) {
    //只能预约一个
    var pd_oneci = wx.getStorageSync('oneci');
    var loucengs = wx.getStorageSync('louceng');
    var zuowhaos = wx.getStorageSync('zuowhao');
    var lou = this.data.curNav;
    var zuohao = e.currentTarget.dataset.id;
    // console.log(this.data.curNav);
    var gaizhi = 'zuowei' + lou + '[' + zuohao + '].color';

    if (loucengs == lou && zuowhaos == zuohao) {
      this.setData({
        [gaizhi]: ''
      })
      wx.setStorageSync('oneci', null);
      wx.setStorageSync('louceng', null);
      wx.setStorageSync('zuowhao', null);
    } else {
      if (pd_oneci == 1) {
        wx.showToast({
          title: '您已选过座位了',
          icon: 'none',
          duration: 1000//持续的时间
        })
      } else {
        if (lou == 1) {
          var zzuohao = this.data.zuowei1[zuohao].seat_id;
          if (this.data.zuowei1[zuohao].color == '#EDA867') {
            wx.showToast({
              title: '座位已被预定',
              icon: 'none',
              duration: 1000//持续的时间
            })
          } else if (this.data.zuowei1[zuohao].color == '#234572') {
            wx.showToast({
              title: '座位有人',
              icon: 'none',
              duration: 1000//持续的时间
            })
          } else {
            wx.setStorageSync('oneci', 1);
            wx.setStorageSync('louceng', lou);
            wx.setStorageSync('zuowhao', zuohao);
            wx.setStorageSync('zzuohao', zzuohao);
            this.setData({
              [gaizhi]: '#58D12B'
            })
            wx.showToast({
              title: '选座' + zzuohao + '号座',
              icon: 'none',
              duration: 1000//持续的时间
            })
          }
        }
        // 2
        if (lou == 2) {
          var zzuohao = this.data.zuowei2[zuohao].seat_id;
          if (this.data.zuowei2[zuohao].color == '#EDA867') {
            wx.showToast({
              title: '座位已被预定',
              icon: 'none',
              duration: 1000//持续的时间
            })
          } else if (this.data.zuowei2[zuohao].color == '#234572') {
            wx.showToast({
              title: '座位有人',
              icon: 'none',
              duration: 1000//持续的时间
            })
          } else {
            wx.setStorageSync('oneci', 1);
            wx.setStorageSync('louceng', lou);
            wx.setStorageSync('zuowhao', zuohao);
            wx.setStorageSync('zzuohao', zzuohao);
            this.setData({
              [gaizhi]: '#58D12B'
            })
            wx.showToast({
              title: '选座' + zzuohao + '号座',
              icon: 'none',
              duration: 1000//持续的时间
            })
          }
        }
        // 3
        if (lou == 3) {
          var zzuohao = this.data.zuowei3[zuohao].seat_id;
          if (this.data.zuowei3[zuohao].color == '#EDA867') {
            wx.showToast({
              title: '座位已被预定',
              icon: 'none',
              duration: 1000//持续的时间
            })
          } else if (this.data.zuowei3[zuohao].color == '#234572') {
            wx.showToast({
              title: '座位有人',
              icon: 'none',
              duration: 1000//持续的时间
            })
          } else {
            wx.setStorageSync('oneci', 1);
            wx.setStorageSync('louceng', lou);
            wx.setStorageSync('zuowhao', zuohao);
            wx.setStorageSync('zzuohao', zzuohao);
            this.setData({
              [gaizhi]: '#58D12B'
            })
            wx.showToast({
              title: '选座' + zzuohao + '号座',
              icon: 'none',
              duration: 1000//持续的时间
            })
          }
        }
        // 4
        if (lou == 4) {
          var zzuohao = this.data.zuowei4[zuohao].seat_id;
          if (this.data.zuowei4[zuohao].color == '#EDA867') {
            wx.showToast({
              title: '座位已被预定',
              icon: 'none',
              duration: 1000//持续的时间
            })
          } else if (this.data.zuowei4[zuohao].color == '#234572') {
            wx.showToast({
              title: '座位有人',
              icon: 'none',
              duration: 1000//持续的时间
            })
          } else {
            wx.setStorageSync('oneci', 1);
            wx.setStorageSync('louceng', lou);
            wx.setStorageSync('zuowhao', zuohao);
            wx.setStorageSync('zzuohao', zzuohao);
            this.setData({
              [gaizhi]: '#58D12B'
            })
            wx.showToast({
              title: '选座' + zzuohao + '号座',
              icon: 'none',
              duration: 1000//持续的时间
            })
          }
        }
      }
    }
  },


  // 确定按钮
  queding() {
    var qued = wx.getStorageSync('oneci');
    var jilou = wx.getStorageSync('louceng');
    var jihao = wx.getStorageSync('zuowhao');
    var zjihao = wx.getStorageSync('zzuohao');
    if (qued == 1) {
      wx.showModal({
        // title: '确定',
        content: '选择' + jilou + '楼' + zjihao + "号座位",
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            wx.switchTab({
              url: '../inquire/inquire',
            })
          } else {//这里是点击了取消以后
            // console.log('用户点击取消')
          }
        }
      })
    } else {
      wx.showModal({
        // title: '确定',
        content: '您还未选座位,是否退出？',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            wx.switchTab({
              url: '../inquire/inquire',
            })
          } else {//这里是点击了取消以后
            // console.log('用户点击取消')
          }
        }
      })
    }

  },

})