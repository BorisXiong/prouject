// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    books: [

    ],
    tongzhiss:'',//通知公告
    tz_color:'',
    tz_animate:'',


    content: '',//填充
    lenbook: '1',//判断实时背景

      // 轮播图
    currentItemId: 1,
    expert_list:[
      
    ],
    expert_lsss:[
      {
        id:1,
        i_imgsrc:"https://wisdombook.myshool.icu/2022/04/281651131343250.jpg",
      },
      {
        id:2,
        i_imgsrc:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F113020142315%2F201130142315-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653736110&t=e7b39834fcbff51675297e8453b7d01d",
      },
      {
        id:3,
        i_imgsrc:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653736127&t=5f31ba28b3d111b412feeb2ce79cf587",
      }, 
      {
        id:4,
        i_imgsrc:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-11-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653736127&t=34cc380df8f41f251612ebf2f058a73c",
      },
    ],
  },

   
   onLoad:function() {
    
    var that = this;

    //获取轮播图
    wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      url: 'https://myshool.icu/adminimg/weixinlunbo',
      success: function (res) {
        // console.log(res);
        that.setData({
          expert_list:res.data.data
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
  //书
    //获取推荐
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
          books: res.data.data,
        })
          // 自动填充背景

        var lenb =  res.data.data.length;
        let lenbook1 = Math.ceil(lenb / 3);
        that.setData({
          lenbook: lenbook1
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


     // 获取消息
     var that = this;
     wx.request({
       method: 'POST',
       header: { 'content-type': 'application/x-www-form-urlencoded' },
       url: 'https://myshool.icu/papogand/weixinpapogand',
       success: function (res) {
         wx.setStorageSync('tongzhi', res.data.data[0]);
        //  console.log(res.data.data[0]);
         that.setData({ 
           tongzhiss:res.data.data.id
         })
         if(that.data.tongzhiss !== ''){
           that.setData({
             tz_color:'red',
             tz_animate:'tz_an'
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
  },
// 推荐进入
tj_newbooks(){
  wx.setStorageSync('tj_newbooks', true);
  wx.navigateTo({
    url: '/pages/newbook/newbook',
  })
},
// 新书进入
newbks(){
  wx.setStorageSync('tj_newbooks', false);
  wx.navigateTo({
    url: '/pages/newbook/newbook',
  })
},
// books_sousuo 图书查询
books_sousuo(){
  wx.switchTab({
    url: '/pages/seatmake/seatmake',
  })


},
// 点击最下推荐图书
dianji_books(e){
  wx.setStorageSync('curNav', 18);
  var booksisbn = e.currentTarget.dataset.id;
  wx.setStorageSync('book_in', booksisbn);
  // console.log(e.currentTarget.dataset.id);
  wx.navigateTo({
    url: '/pages/book_in/book_in',
  })

},



  swiperChange: function (e) {
    // console.log(e);
    // console.log(e.detail);
    var  sources =e.detail.source;
    if (sources == 'autoplay' || sources == 'touch') {
      var currentItemId = e.detail.current;
      // console.log(currentItemId);
      this.setData({
        currentItemId: currentItemId
      })
    }
   
  },

  // clickChange: function (e) {
  //   var itemId = e.currentTarget.dataset.itemId;
  //   // console.log(e.detail);
  //   // console.log(itemId);
  //   this.setData({
  //     currentItemId: itemId
  //   })
  // },

  // 
  gengduo() {
    if(this.data.tz_color !== ''){
      wx.navigateTo({
        url: '/pages/newnews/newnews',
      })
      this.setData({
        tz_color:'#424242',
        tz_animate:''
      })
    }

  },
  // 
  guihuan(){
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
          url: 'https://myshool.icu/book/return',
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


  //  -------------扫码
  scanCodeEvent: function () {
       wx.showToast({
         title: '请扫书本ISBN',
         icon: 'none',
         duration: 2000//持续的时间
       })
    
    var that = this;
    wx.scanCode({
      onlyFromCamera: true,// 只允许从相机扫码
      success(res) {
        var ress = JSON.stringify(res.result);
        wx.setStorageSync('book_in', res.result);
        wx.navigateTo({
          url: '../book_in/book_in',
        })
        // 扫码成功后  在此处理接下来的逻辑
        // that.setData({
        //   scanCode: res.result
        // })
        // if (res.result !== null) {
        //   wx.showModal({
        //     title: '扫码成功',
        //     // content: res.result,
        //   })
        // } else {
        //   wx.showModal({
        //     title: '扫码失败了哦',
        //     content: "亲,需要再次扫码吗？",
        //   })
        // }
      },

    })
  },

  t_yuyue(){
    wx.switchTab({
      url: '../inquire/inquire',
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

})
