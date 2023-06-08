// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jishu: 0 ,
    texts:'',
  },

  shuru_txt:function(options){
    // console.log(options.detail.value);
    var txt_length = options.detail.value.length;
    // console.log(txt_length);
    this.setData({
      jishu:txt_length,
      texts:options.detail.value,
    })
  },

  tijiao_txt(){
   wx.showToast({
     title: '提交成功！',
     icon: 'none',
     duration: 1600//持续的时间
   })
   setTimeout(()=>
    {
       wx.switchTab({
         url: '/pages/index/index',
       })
    }, 2000)

  },
})