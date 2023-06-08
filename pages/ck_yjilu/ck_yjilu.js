// pages/ck_yjilu/ck_yjilu.js
var wxCharts = require("../../icons/wxcharts.js");//相对路径
Page({

  /**
   * 页面的初始数据
   */
  data: {
    U_yyjl:'',
    U_xinxis:'',
    curNav: 1,



    imageWidth:0,
  },



  onLoad: function () {
    this.zhexianbiao1();
    
    var U_xinxi =  wx.getStorageSync('user_xinxi');
    this.setData({
      U_xinxis:U_xinxi
    })
    var U_sno = U_xinxi.sno;
    var that = this;
    wx.request({
      url: 'https://myshool.icu/seatrecord/records',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        sno: U_sno,
      },
      success: function (res) {
        that.setData({
          U_yyjl:res.data.data
        })
        for(let i = 0;i<res.data.data.length;i++){
          var newtime = "U_yyjl["+i+"].newtime"
          var newrecord = "U_yyjl["+i+"].newrecord"
          var nts =res.data.data[i].creattime.slice(0,10);
          var nrecord = res.data.data[i].record.slice(8);
          that.setData({
            [newtime]:nts,
            [newrecord]:nrecord
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
    })

  },


  onShow:function(){
    
  },
  
  zhexianbiao1(){
    var windowWidth = 320;
   
    let that = this;
    try {
     var res = wx.getSystemInfoSync();
     windowWidth = res.windowWidth;
    } catch (e) {
     console.error('getSystemInfoSync failed!');
    }
    new wxCharts({ //当月线图配置
     canvasId: 'yueEle1',
     type: 'line',
     categories: [1,2 , '3', '4', '5', '6', '7'], //categories X轴
     animation: true,
     series: [{
      // name: '',
      data: [0, 0, 0, 2.1, 0, 2.1,2],
      format: function (val, name) {
       return val + '';
      }
     }
     ],
     xAxis: {
      disableGrid: true
     },
     yAxis: {
      title: '',
      format: function (val) {
       return val;
      },
      /*max: 20,*/
      min: 0
     },
     width:300,
     height: 200,
     dataLabel: true,
     dataPointShape: true,
     extra: {
      lineStyle: 'curve'
     }
    });
  },

  zhexianbiao2(){
    var windowWidth = 320;
   
    let that = this;
    try {
     var res = wx.getSystemInfoSync();
     windowWidth = res.windowWidth;
    } catch (e) {
     console.error('getSystemInfoSync failed!');
    }
    new wxCharts({ //当月线图配置
     canvasId: 'yueEle2',
     type: 'line',
     categories: [0,5,15, 20,25, 30], //categories X轴
     animation: true,
     series: [{
      // name: '',
      data: [8,4, 1, 5, 7.2, 12],
      format: function (val, name) {
       return val + '';
      }
     }
     ],
     xAxis: {
      disableGrid: true
     },
     yAxis: {
      title: '',
      format: function (val) {
       return val;
      },
      /*max: 20,*/
      min: 0
     },
     width:300,
     height: 200,
     dataLabel: true,
     dataPointShape: true,
     extra: {
      lineStyle: 'curve'
     }
    });
  },

  switchRightTab: function (e) {
    let id = e.target.dataset.id;
    // console.log(id);
    this.setData({
      curNav: id
    })
    if(id == 1){
      this.zhexianbiao1();
    }else if(id == 2){
      this.zhexianbiao2();
    }
  },

})