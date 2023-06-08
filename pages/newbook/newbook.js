// pages/newbook/newbook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: '',

    h1_title: '新书入馆',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;
    var u_son = wx.getStorageSync('user_xinxi'); //信息
    var tj_newb = wx.getStorageSync('tj_newbooks');
    if (tj_newb == true) {
      this.setData({
        h1_title: '推荐图书'
      })

      wx.request({
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          b_classes: '0'
        },
        url: 'https://myshool.icu/book/classes',
        success: function (res) {
          // console.log(res.data);
          // that.setData({
          //   books: res.data.data,
          // })
          var lens = res.data.data.length;
          if (lens > 10) {
            lens = 10;
          }

          for (let i = 0; i < lens; i++) {
            var book = "books[" + i + "]";
            var bookss = "books[" + i + "].wid";
            that.setData({
              [book]: res.data.data[i],
              [bookss]: i
            })
          }
          wx.setStorageSync('tuijian_books', that.data.books); 
        },
        fail: function () {
          wx.showToast({
            icon: "none",
            mask: true,
            title: "接口调用失败，请稍后再试。",
          });
        }
      });
    } else if (tj_newb == false) {
      this.setData({
        h1_title: '新书入馆'
      })

      wx.request({
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          b_classes: '1'
        },
        url: 'https://myshool.icu/book/classes',
        success: function (res) {
          // console.log(res.data);
          // that.setData({
          //   books: res.data.data,
          // })
          var lens = res.data.data.length;
          if (lens > 10) {
            lens = 10;
          }

          for (let i = 0; i < lens; i++) {
            var book = "books[" + i + "]";
            var bookss = "books[" + i + "].wid";
            that.setData({
              [book]: res.data.data[i],
              [bookss]: i
            })
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
    }


  },

  dianji_books(e) {
    wx.setStorageSync('curNav', 18);
    var booksisbn = e.currentTarget.dataset.id;
    wx.setStorageSync('book_in', booksisbn);
    // console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/book_in/book_in',
    })

  },
})