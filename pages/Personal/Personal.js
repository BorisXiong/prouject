// pages/Personal/Personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav:1,

    user_xinxis:'',

   

    shuquan:[
      {
        id:0,
        shuoshuo:"  很好，送小朋友的，还没送 不要因为累，就放弃读书，因为读书是成功的阶梯；不要因为工作累，就放弃工作，因为努力才能有所回报；更不要因为爱一个人很累，就拒绝去爱，因为人生仍然值得期待。",
        times:'4-21',
        dianzan:1222,
        pinglun:212,
      },
      {
        id:1,
        shuoshuo:"  父亲丢了块表，他抱怨着翻腾着四处寻找，可半天也找不到。等他出去了，儿子悄悄进屋，不一会找到了表。父亲问：怎么找到的？儿子说：我就安静的坐着，一会就能听到滴答滴答的声音，表就找到了。",
        times:'4-22',
        dianzan:152,
        pinglun:22,
      }

    ],

    user_xinxis:'',

    tuijian_books:'',
  },

  onLoad(){
    
    var  tuijian_books =  wx.getStorageSync('tuijian_books');
    var  user_xinxi =  wx.getStorageSync('user_xinxi');
    var  boolssss =  wx.getStorageSync('book_julen');
    this.setData({
      user_xinxis:user_xinxi,
      books:boolssss,
      tuijian_books:tuijian_books
    })
  },
  tiao_yemian(){
    wx.navigateTo({
      url: '../user_xinxi/user_xinxi',
    })
  },

  switchRightTab: function (e) {
    let id = e.target.dataset.id;
    // console.log(id);
    this.setData({
      curNav: id
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})