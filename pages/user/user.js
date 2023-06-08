// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      user_xinxis:'',

      book_julen:'',

      gerenxinxdonghua: '-100%',

      u_biaozhi:'',
    settings: [
      {
        url: '../user_xinxi/user_xinxi',
        text: "修改资料",
      },
     
      {
        url: '../newnews/newnews',
        text: "消息中心",
      },
      {
        url: '../u_center/u_center',
        text: "使用中心",
      },
    
    
    ],
   


  },

  onLoad:function(){
    this.setData({
      gerenxinxdonghua:'-100%',
    });
    
    setTimeout(()=>
    {
      this.setData({
        gerenxinxdonghua:0
      })
    },100)
  },

  onShow:function(){
    

    var  user_xinxi =  wx.getStorageSync('user_xinxi');
    this.setData({
      user_xinxis:user_xinxi
    })

    var book_julen =  wx.getStorageSync('book_julen');
    this.setData({
      book_julen:book_julen
    })
  
    if(this.data.user_xinxis.role == 0){
      this.setData({
        u_biaozhi:'学生'
      })
    }else if(this.data.user_xinxis.role == 1){
      this.setData({
        u_biaozhi:'老师'
      })
    }else{
      this.setData({
        u_biaozhi:'无职业'
      })
    }
  },


  // 退出登陆
  exit() {

    wx.showModal({
      title: '退出',
      content: '确定退出登录吗?',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          wx.reLaunch({
            url: '../Sign_in/Sign_in'
          })
        } else {//这里是点击了取消以后
        }
      }
    })

  },

  bindViewTap() {
    wx.navigateTo({
      url: '../Personal/Personal'
    })
  },


  //跳转mybook
  mybook(){
    wx.navigateTo({
      url: '../mybook/mybook',
    })
  },
})