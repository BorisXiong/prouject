// pages/bk_Collection/bk_Collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    souc_books:'',

    imagesrc:'http://m.qpic.cn/psc?/V519zvyD1C0EL63KyDum1jWkcI0Igc3R/ruAMsa53pVQWN7FLK88i5rey09U9sIdBhKcduZPtlCXGlptNPOkefhWsb.OpxSyOO9dUdxbQfnCFN3St70s65QizbyZ3jgizGwL13vWrp1Y!/b&bo=8ADwAPAA8AADFzI!&rf=viewer_4',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var souc_books = this.data.souc_books.length;
    if (souc_books == 0) {
      this.setData({
        imagesrc:'http://m.qpic.cn/psc?/V519zvyD1C0EL63KyDum1jWkcI0Igc3R/ruAMsa53pVQWN7FLK88i5rey09U9sIdBhKcduZPtlCXGlptNPOkefhWsb.OpxSyOO9dUdxbQfnCFN3St70s65QizbyZ3jgizGwL13vWrp1Y!/b&bo=8ADwAPAA8AADFzI!&rf=viewer_4'
      })
    }else{
      this.setData({
        imagesrc:''
      })
    }
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