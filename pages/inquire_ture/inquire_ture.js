// pages/inquire_ture/inquire_ture.js

var num = 600;//定义开始秒数
//定义一个布尔变量，用于停止计时器
var ynStop = false;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    user_xinxi:'',

    jilu_yid:'-60',
    //用于显示
    hidden: true,
    dd: 0,
    mm: 0,
    time_id: false,
    stop_id: 0,

    css: '#5c9ed4',
    css_tishi: '(签到剩余时间)',
    txt_iocn: 'icon-xiajiantou',// iocn

    // 签到按钮
    qiandao: '立即签到',
    quxiao_btn:'取消预约',

    louceng_xx:'',
    zwh_xx:'',

    // text
    text_s: [
      {
        id: 1,
        text: '业精于勤而荒于嬉,行成于思而毁于随',
      },
      {
        id: 2,
        text: '书当快意读易尽，客有可人期不来。',
      },
      {
        id: 3,
        text: '人生天地之间，若白驹过隙，忽然而已。',
      },
      {
        id: 4,
        text: '书到用时方恨少，事非经过不知难。',
      },
      {
        id: 5,
        text: '天行健，君子以自强不息。',
      },
    ],
  },




  onLoad() {
    var user_xinxi = wx.getStorageSync('user_xinxi');
    this.setData({
      user_xinxi:user_xinxi,
    }) 

    var jilou = wx.getStorageSync('louceng');
    var zjihao = wx.getStorageSync('zzuohao');
    this.setData({
      louceng_xx:jilou,
      zwh_xx:zjihao
    }) 


    // 每次进入页面初始化
    // wx.setStorageSync('inzuo', false);
    var inzuo = wx.getStorageSync('inzuo');
    if (inzuo == true){
      this.setData({
        stop_id: 1,
        qiandao: '返回首页',
        quxiao_btn:'取消签到'
      })
    }else{
      num = 600;
      ynStop = false;
      this.setData({
      hidden: true,
      dd: 0,
      mm: 0,
      time_id: false,
      stop_id: 0,
      css: '#5c9ed4',
      css_tishi: '(签到剩余时间)',
    })
    }
    
    // 每次进入页面初始化


    //function里直接用this会出错
    var that = this
    //延时显示函数
    setTimeout(function () {
      //设置隐藏属性为否
      that.setData({
        hidden: true,

      })
    }
      //设置延时为2s
      , 1000);
    that.start();
  },









  // 成功按钮  
  but_stop() {
    var that =this;

    var inzuo = wx.getStorageSync('inzuo');
    if (inzuo == true) {
      wx.switchTab({
        url: '../index/index',
      })
    } else {
      if (this.data.css == '#5c9ed4') {
        var jilou = wx.getStorageSync('louceng');
        var zjihao = wx.getStorageSync('zzuohao');
        var sno = that.data.user_xinxi.sno;
        var u_name = that.data.user_xinxi.user_name;
        wx.request({
          method: 'POST',
          header: {'content-type': 'application/x-www-form-urlencoded'  },
          data:{
            sno:sno,
            user_name:u_name,
            seat_id:zjihao,
            state:2,
          },
          url: 'https://myshool.icu/seat/weixinseat',
          success:function(res){
            // console.log(res);
            // wx.navigateTo({
            //   url: '../inquire_ture/inquire_ture',
            // })
          },
          fail: function () {
            wx.showToast({
                icon: "none",
                mask: true,
                title: "接口调用失败，请稍后再试。",
             });
          }
        })
        wx.showToast({
          title: '签到成功',
          icon: 'none',
          duration: 1200,//持续的时间
        })
        this.setData({
          stop_id: 1,
          qiandao: '返回首页',
          quxiao_btn:'取消签到'
        })
        wx.setStorageSync('inzuo', true);
      } else {
        wx.showToast({
          title: '失败,时间已过',
          icon: 'none',
          duration: 1200,//持续的时间
        })
      }
    }

  },
  //quexiaoyuyeu点头像退出预约
  quexiaoyuyeu() {
    var that = this;
    var inzuo = wx.getStorageSync('inzuo');
    if (inzuo == true) {

      wx.showModal({
        title: '离开',
        content: '您确定离开，并取消座位吗？',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            wx.setStorageSync('inzuo', false);


            var jilou = wx.getStorageSync('louceng');
            var zjihao = wx.getStorageSync('zzuohao');
            var sno = that.data.user_xinxi.sno;
            var u_name = that.data.user_xinxi.user_name;
            wx.request({
              method: 'POST',
              header: {'content-type': 'application/x-www-form-urlencoded'  },
              data:{
                sno:sno,
                user_name:u_name,
                seat_id:zjihao,
                state:0,
              },
              url: 'https://myshool.icu/seat/weixinseat',
              success:function(res){
                console.log(res);
                wx.navigateTo({
                  url: '../inquire/inquire',
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

           
            wx.switchTab({
              url: '../inquire/inquire',
            })
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })

    }
  },


  // 取消
  quxiao() {
    if (this.data.stop_id == 1) {
      this.quexiaoyuyeu();
    } else {
      ynStop = true;
      num = -1;
      this.setData({
        num: 0,
      })
      var that =this;
      // 
      var jilou = wx.getStorageSync('louceng');
      var zjihao = wx.getStorageSync('zzuohao');
      var sno = that.data.user_xinxi.sno;
      var u_name = that.data.user_xinxi.user_name;

        wx.request({
          method: 'POST',
          header: {'content-type': 'application/x-www-form-urlencoded'  },
          data:{
            sno:sno,
            user_name:u_name,
            seat_id:zjihao,
            state:0,
          },
          url: 'https://myshool.icu/seat/weixinseat',
          success:function(res){
            wx.switchTab({
              url: '../inquire/inquire',
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
     
    }
  },




  start: function () { //开始计时函数
    //设置显示器值为当前值减一
    this.setData({
      num: num--,
      dd: Math.floor((num % 3600) / 60) + ':',
      mm: num % 60
    })
    //调用timer函数
    this.timer()
  },
  timer: function () { //计时函数

    if (this.data.stop_id == 0) {
      if (num > 0 && ynStop == false) {
        //隔一秒回调start函数，注意setTimeout里函数不要加括号，或者用function（）{}
        setTimeout(this.start, 1000);
      } else if (num == -1){
        
      }else if(num == 0){
        this.setData({
          num: 0,
          css: 'red',
          css_tishi: '',
        })
        this.setData({
          dd: '时间',
          mm: '已过'
        })
        wx.setStorageSync('inzuo', false);

        const that = this;
        var jilou = wx.getStorageSync('louceng');
        var zjihao = wx.getStorageSync('zzuohao');
        var sno = that.data.user_xinxi.sno;
        var u_name = that.data.user_xinxi.user_name;
        // wx.request({
        //   method: 'POST',
        //   header: {'content-type': 'application/x-www-form-urlencoded'  },
        //   data:{
        //     sno:sno,
        //     user_name:u_name,
        //     seat_id:zjihao,
        //     state:0,
        //   },
        //   url: 'https://myshool.icu/seat/weixinseat',
        //   success:function(res){
        //     console.log(res);
        //     wx.navigateTo({
        //       url: '../inquire/inquire',
        //     })
        //   },
        //   fail: function () {
        //     wx.showToast({
        //         icon: "none",
        //         mask: true,
        //         title: "接口调用失败，请稍后再试。",
        //      });
        //   }
        // });
      }

    } else if(this.data.stop_id == 1){
      this.setData({
        num: 0,
        dd: '签到',
        mm: '成功'
      })
    }
  },


  // text_iocn
  txt_iocn() {
    if (this.data.txt_iocn == 'icon-xiajiantou') {
      this.setData({
        txt_iocn: 'icon-shangjiantou',
        jilu_yid: 48
      })
    } else {
      this.setData({
        txt_iocn: 'icon-xiajiantou',
        jilu_yid: -60
      })
    }

  },

  ck_yjilu(){
    wx.navigateTo({
      url: '../ck_yjilu/ck_yjilu',
    })

  },
})