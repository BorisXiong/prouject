// pages/mybook/mybook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:'',

    


     // 设置开始的位置
     startX: 0,
     startY: 0,
  },

  onLoad:function(){
    // for(let i = 0;i<this.data.dataList.length;i++){
    //   var datL = 'dataList['+i+'].color';
    //   // console.log(i);
    //   // console.log(this.data.dataList[i].expire_);
    //   if(this.data.dataList[i].expire_ == true){ 
    //     this.setData({
    //       [datL]:'#C4C4C4',
    //     })
    //   }

    // }
    var user_sno = wx.getStorageSync('user_xinxi');
    var that = this;
    wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        sno:user_sno.sno,
      },
      url: 'https://myshool.icu/book/findrecords',
      success: function (res) {
        that.setData({
          dataList:res.data.data,
        })
        var book_julen = res.data.data.length;
        wx.setStorageSync('book_julen', book_julen);
        for(let i = 0;i<res.data.data.length;i++){
          var pand = "dataList["+i+"].color";
          var times = "dataList["+i+"].newtime";
          var timess = that.data.dataList[i].creattime.slice(0,10);
          that.setData({
            [times]:timess
          })
          if(that.data.dataList[i].bookrecord == "已成功借阅！"){
            that.setData({
              [pand]:"#C4C4C4",
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
  
  // 开始滑动
  touchStart(e) {
    // console.log('touchStart=====>', e);
    let dataList = [...this.data.dataList]
    dataList.forEach(item => {
    // 让原先滑动的块隐藏
      if (item.isTouchMove) {
        item.isTouchMove = !item.isTouchMove;
      }
    });
   // 初始化开始位置
    this.setData({
      dataList: dataList,
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
  },
// 滑动~
  touchMove(e) {
    // console.log('touchMove=====>', e);
    let moveX = e.changedTouches[0].clientX;
    let moveY = e.changedTouches[0].clientY;
    let indexs = e.currentTarget.dataset.index;
    let dataList = [...this.data.dataList]
// 拿到滑动的角度，判断是否大于 30°，若大于，则不滑动
    let angle = this.angle({
      X: this.data.startX,
      Y: this.data.startY
    }, {
      X: moveX,
      Y: moveY
    });

    dataList.forEach((item, index) => {
      item.isTouchMove = false;
      // 如果滑动的角度大于30° 则直接return；
      if (angle > 30) {
        return
      }
	
	// 判断是否是当前滑动的块，然后对应修改 isTouchMove 的值，实现滑动效果
      if (indexs === index) {
        if (moveX > this.data.startX) { // 右滑
          item.isTouchMove = false;
        } else { // 左滑
          item.isTouchMove = true;
        }
      }
    })

    this.setData({
      dataList
    })
  },

  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  // 删除
  delItem(e) {
    let id = e.currentTarget.dataset.id;
    let dataList = [...this.data.dataList];
    for (let i = 0; i < dataList.length; i++) {
      const item = dataList[i];
      item.isTouchMove = false;
      if (item.id === id) {
        dataList.splice(i, 1);
        break;
      }
    }

    this.setData({
      dataList
    })
  }
})