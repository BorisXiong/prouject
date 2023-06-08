// pages/book_in/book_in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: '',

    sccolr:'#C0C4CD',
    t_iocn:'icon-tianjiashoucang_huaban1',
    sc_books:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    var book_xinxi = wx.getStorageSync('book_in');
   
      var that = this;
      wx.request({

        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          b_isbn: book_xinxi
        },
        url: 'https://myshool.icu//book/details',
        success: function (res) {
          
          that.setData({
            books: res.data.data[0]
          })
          var newtime = that.data.books.creattime.slice(0,16);
          var newtimes = "books.creattime";
          that.setData({
            [newtimes]: newtime
          })
          var books_ibsn = that.data.books;
          var sc_books_ibsn = that.data.sc_books;
          for (let i = 0; i < sc_booksss.length; i++) {
            var nbin_ibsn = sc_books_ibsn[i].b_isbn;
            var b_isbn = books_ibsn.b_isbn;
            // console.log(nbin_ibsn);
            // console.log(b_isbn);
            if(nbin_ibsn == b_isbn){
              that.setData({
                sccolr:'#68A7DA',
                t_iocn:'icon-tianjiashoucang1',
               
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
      })

  
    

  },
  scanCodeEvent: function () {
    var that = this;
    wx.scanCode({
      onlyFromCamera: true,// 只允许从相机扫码
      success(res) {
        var ress = JSON.stringify(res.result);
      },

    })
  },

  jy_book(){
    var bool_id = this.data.books.b_myid;
    var user_sno = wx.getStorageSync('user_xinxi');
    var that = this;
    wx.showToast({
      title: '请扫书本ID',
      icon: 'none',
      duration: 2000//持续的时间
    })
 

    wx.scanCode({
      onlyFromCamera: true,// 只允许从相机扫码
      success(res) {
        var ress = JSON.stringify(res.result);   
        wx.request({
          method: 'POST',
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          data: {
            sno:user_sno.sno,
            b_myid:ress
          },
          url: 'https://myshool.icu/book/borrow',
          success: function (res) {
            // console.log(res.data.message);
            if (res.data.message == "借阅图书成功！") {
                 wx.showToast({
                   title: '借阅图书成功！',
                   icon: 'none',
                   duration: 1500//持续的时间
                 })
                //  wx.switchTab({
                //   // duration: 1500,
                //   //  url: '../seatmake/seatmake',
                //  })
            }
          },
          fail: function () {
            wx.showToast({
              icon: "none",
              mask: true,
              title: "接口调用失败，请稍后再试。",
            });
          }
        })
      },

    })
      
  },

  shoucang(){
    var sccolr = this.data.sccolr;

    if (sccolr == '#C0C4CD') {
      this.setData({
        sccolr:'#68A7DA',
        t_iocn:'icon-tianjiashoucang1',
       
      })
      
     
     
    }else if(sccolr == '#68A7DA'){
      // wx.setStorageSync('sc_books', 0);
      this.setData({
        sccolr:'#C0C4CD',
        t_iocn:'icon-tianjiashoucang_huaban1',
      })
    }
    
  },
})