// pages/u_center/u_center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goto_library1(){
    wx.navigateTo({
      url: '/pages/library1/library1',
    })

  },
  goto_library2(){
    wx.navigateTo({
      url: '/pages/library2/library2',
    })

  },
  goto_library3(){
    wx.navigateTo({
      url: '/pages/library3/library3',
    })

  },
})