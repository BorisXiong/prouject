// pages/inquire/inquire.js
var util = require('../../utils/util.js');
var jilou ;
var zjihao ;
var sno ;
var u_name ;
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    times: [],
    idx: 0,//控制选中天

    jilous: '',//座位信息
    jihaos: '',
    
    user_xinxi:'',

    select: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    grade_name: '  今天', //下拉列表的数据
    grades: [  //下拉列表的数据
      '今天',
      '明天',
      '后天',
    ],
    xiala: 'icon-xiajiantou',//下拉样式


    time: '12:01',//选择时间选项


    // 位置信息和判断
    lng: '',
    lat: '',

    lngs: [
      // 114.414399, 114.428932
      24.414399, 184.428932
    ],
    lats: [
      // 30.584014, 30.599512
      10.584014, 50.599512
    ],
  },
  // 点击切换样式
  getIndexValue: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx: index
    });

  },
  /**
   * 下拉框
   */
  bindShowMsg() {
    this.setData({
      select: !this.data.select,
    });
    if (this.data.xiala == 'icon-xiajiantou') {
      this.setData({
        xiala: 'icon-shangjiantou'
      });
    } else {
      this.setData({
        xiala: 'icon-xiajiantou'
      });
    }
  },
  /**
   * 已选下拉框
   */
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      grade_name: name,
      select: false
    });
    if (this.data.xiala == 'icon-xiajiantou') {
      this.setData({
        xiala: 'icon-shangjiantou'
      });
    } else {
      this.setData({
        xiala: 'icon-xiajiantou'
      });
    };
    for (let i = 0; i < this.data.grades.length; i++) {
      if (this.data.grade_name == this.data.grades[i]) {
        this.setData({
          idx: i
        });
      }
    }
  },

  
  // 获取时间
  onLoad: function () {
    var user_xinxi = wx.getStorageSync('user_xinxi');
    this.setData({
      user_xinxi:user_xinxi,
    }) 
    
   
    // 计算星期几
    var today = new Date(); 
    var currentDate = today.getDay();//获取存储当前日期
    // console.log(today);  
    // 月份
    var yuefen = today.getMonth()+1;
    //  var yuefen = 5;
    // console.log(yuefen); 
    // 日
    var jinday = today.getDate();
    // var jinday = 9;
    // console.log(jinday);  
    // 计算日期 
    var rili = [31,28,31,30,31,30,31,31,30,31,30,31];

    var TIME0 = util.formatTime0(new Date());//今天日期
    // 本月天数
    var yuedays = rili[yuefen-1];
    // console.log(yuedays);
    if (jinday > yuedays-2) {
      yuefen=yuefen+1;
      jinday=jinday-yuedays+1;
      // console.log(jinday); 
      var jinday2 = jinday+1;
      // console.log(jinday2);
      if (jinday < 9) {
        var TIME1 = String(yuefen)+"-0"+String(jinday);
        var TIME2 = String(yuefen)+"-0"+String(jinday2);
      }else if (jinday >9) {
        var TIME1 = String(yuefen)+"-"+String(jinday);
        var TIME2 = String(yuefen)+"-"+String(jinday2);
      }else{
        var TIME1 = String(yuefen)+"-0"+String(jinday);
        var TIME2 = String(yuefen)+"-"+String(jinday2);
      }
    }else{
      var jinday2 = jinday+1;
      if (jinday < 9) {
        var TIME1 = String(yuefen)+"-0"+String(jinday);
        var TIME2 = String(yuefen)+"-0"+String(jinday2);
      }else if (jinday >9) {
        var TIME1 = String(yuefen)+"-"+String(jinday);
        var TIME2 = String(yuefen)+"-"+String(jinday2);
      }else{
        var TIME1 = String(yuefen)+"-0"+String(jinday);
        var TIME2 = String(yuefen)+"-"+String(jinday2);
      }
    }
    // var TIME1 = util.formatTime1(new Date());
    // var TIME2 = util.formatTime2(new Date());

    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var xinqi = weekday[currentDate];
    var xinqi1 = weekday[currentDate + 1];
    var xinqi2 = weekday[currentDate + 2];
    this.setData({
      times: this.data.times.concat({ time: TIME0, xinqi: xinqi, day: "今天", id: 1, }),
    });
    this.setData({
      times: this.data.times.concat({ time: TIME1, xinqi: xinqi1, day: "明天", id: 2, }),
    });
    this.setData({
      times: this.data.times.concat({ time: TIME2, xinqi: xinqi2, day: "后天", id: 3, }),
    });




  },


  //每次进入页面加载
  onShow() {
    // 加载获取座位
    var jilou = wx.getStorageSync('louceng');
    var jihao = wx.getStorageSync('zuowhao');
    var inzuo = wx.getStorageSync('inzuo');
    var zjihao = wx.getStorageSync('zzuohao');
    var that = this;
    
    if(inzuo == true){
      wx.navigateTo({
        url: '../inquire_ture/inquire_ture',
      })
    }
    this.setData({
      jilous: '',
      jihaos: ''
    })
    if (jilou !== null) {
      this.setData({
        jilous: jilou + '楼',
        jihaos: zjihao + '号座'
      })
    }

  },

  bindTimeChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },













  //but
  go_yuyue() {
    if (this.data.jilous == '' || this.data.jihaos == '') {
      wx.showToast({
        title: '座位未选',
        icon: 'none',
        duration: 1000//持续的时间
      })
    } else {
      // 开始获取位置并判断
      var that = this;
      //检查地理位置授权
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
            console.log('location', res);
            // 调起客户端设置界面
            wx.openSetting({
              success: function (data) {
                if (data.authSetting["scope.userLocation"] == true) {
                  //  wx.showToast({
                  //    title: '授权成功',
                  //    icon: 'success',
                  //    duration: 5000
                  //  })
                  that.getLocation();
                } else {
                  //  wx.showToast({
                  //    title: '授权失败',
                  //    icon: 'success',
                  //    duration: 5000
                  //  })
                }
              }
            })
          } else {
      
              that.getLocation();
       
          }
        }
      })
    }


  },

  /**
  * 调用wx.getLocation系统API,获取并设置当前位置经纬度
  */
  getLocation: function () {
    var inzuo = wx.getStorageSync('inzuo');
    if (inzuo == true) {
      wx.showModal({
        title: '提示',
        content: '您已预约过座位',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            wx.navigateTo({
              url: '../inquire_ture/inquire_ture',
            })
          } else {//这里是点击了取消以后
           
          }
        }
      })
    }else{

      wx.showToast({
        title: '正在获取您的位置信息',
        icon: 'loading',
        duration: 800//持续的时间
      })

      var that = this;
      //获取位置
      wx.getLocation({
        type: '坐标，gcj02',//默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
        isHighAccuracy: true,
        //成功
        success: function (res) {
          that.setData({
            lng: res.longitude,
            lat: res.latitude,
          })
          var latt = that.data.lat;
          var lngg = that.data.lng;
          var lat_0 = that.data.lats[0];
          var lat_1 = that.data.lats[1];
          var lng_0 = that.data.lngs[0];
          var lng_1 = that.data.lngs[1];
          if ((latt > lat_0 && latt < lat_1) && (lngg > lng_0 && lngg < lng_1)) {
            wx.showModal({
              title: '座位号：' + that.data.jilous + that.data.jihaos,
              content: '到达时间：' + that.data.grades[that.data.idx] + that.data.time,
              success: function (res) {
          
                if (res.confirm) {//这里是点击了确定以后
                  jilou = wx.getStorageSync('louceng');
                  zjihao = wx.getStorageSync('zzuohao');
                  sno = that.data.user_xinxi.sno;
                  u_name = that.data.user_xinxi.user_name;
                  // console.log(jilou);
                  // console.log(zjihao);
                  // console.log(sno);
                  // console.log(u_name);
                    wx.request({
                      method: 'POST',
                      header: {'content-type': 'application/x-www-form-urlencoded'  },
                      data:{
                        sno:sno,
                        user_name:u_name,
                        seat_id:zjihao,
                        state:1,
                      },
                      url: 'https://myshool.icu/seat/weixinseat',
                      success:function(res){
                        // console.log(res);
                        wx.navigateTo({
                          url: '../inquire_ture/inquire_ture',
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
                } else {//这里是点击了取消以后
                  // console.log('用户点击取消')
                }
              }
            })
          } else {
            wx.showModal({
              title: '抱歉',
              content: '您的位置不在服务区',
              success: function (res) {
                if (res.confirm) {//这里是点击了确定以后

                } else {//这里是点击了取消以后

                }
              }
            })
          }
        },
        //失败
        fail: function (e) {
          console.log("error", e);
        },


      });
    }




  },


})