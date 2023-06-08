// pages/user_xinxi/user_xinxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_xinxis: '',

    imgs: [],//本地图片地址数组
    picPaths: [],//网络路径
    newimg: '',


    //普通选择器数据
    array: ['男', '女'],
    //普通选择器值索引
    index: 0,
  },
  onShow() {
    var user_xinxi = wx.getStorageSync('user_xinxi');
    this.setData({
      user_xinxis: user_xinxi
    })

    // console.log(user_xinxi.sex);
    if (user_xinxi.sex == '女') {
      this.setData({
        index: 1
      })
    }
  },

  // 上传图片
  newimgs: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#00000",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },
  // 图片本地路径
  chooseWxImage: function (type) {
    var that = this;
    var imgsPaths = that.data.imgs;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        // console.log(res.tempFilePaths[0]);
        that.upImgs(res.tempFilePaths[0], 0) //调用上传方法
      }
    })
  },
  //上传服务器
  upImgs: function (imgurl, index) {
    var that = this;
    wx.uploadFile({
      url: 'https://myshool.icu/upload',//
      filePath: imgurl,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: null,
      success: function (res) {
        // console.log(res);//接口返回网络路径
        // console.log(res.data);
        var jsonObj = JSON.parse(res.data);
        var user_newimg = "user_xinxis.userimg";
        that.setData({
          newimg: jsonObj.data,
          [user_newimg]: jsonObj.data,
        })
      },
      fail: function () {
        wx.showToast({
          icon: "none",
          mask: true,
          title: "图片上传失败，请稍后再试。",
        });
      }
    })
  },

  // 修改昵称
  nname(e) {
    var nnames = "user_xinxis.nname";
    this.setData({
      [nnames]: e.detail.value
    })
  },


  // 性别
  //普通选择器值改变时触发
  changeValue(e) {
    this.setData({
      index: e.detail.value
    })
    var sexs = "user_xinxis.sex";
    this.setData({
      [sexs]: this.data.array[this.data.index],
    })

  },

  //年龄
  // nl_birthday(e){
  //   var birthdays = "user_xinxis.birthday";
  //   this.setData({
  //     [birthdays]: e.detail.value
  //   })
  // },

  // 手机号
  phones(e) {
    var phones = "user_xinxis.phone";
    this.setData({
      [phones]: e.detail.value
    })
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


  xiugai() {
    var new_userxx = this.data.user_xinxis;
    wx.setStorageSync('user_xinxi', new_userxx);
    const that = this;

    wx.request({
      url: 'https://myshool.icu/weixinlogin/wxupdate',
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: this.data.user_xinxis.id,
        user_name: this.data.user_xinxis.user_name,
        sno: this.data.user_xinxis.sno,
        department_name: this.data.user_xinxis.department_name,
        class_name: this.data.user_xinxis.class_name,
        role: this.data.user_xinxis.role,
        sex: this.data.user_xinxis.sex,
        nname: this.data.user_xinxis.nname,
        userimg: this.data.user_xinxis.userimg,
        phone: this.data.user_xinxis.phone,

        // major: this.data.user_xinxis.major,
        // enter_time: this.data.user_xinxis.enter_time,
        // birthday: this.data.user_xinxis.birthday,
        // class_id: this.data.user_xinxis.class_id,
        // creattime: this.data.user_xinxis.creattime,
        // department_id: this.data.user_xinxis.department_id,
        // updatetime: this.data.user_xinxis.updatetime,
        
      },
      success(res) {
        // console.log(res);
        if (res.data.flag == true) {
          wx.showToast({
            title: '修改成功！',
            icon: 'none',
            duration: 2000//持续的时间
          })
        }else{
          wx.showToast({
            title: '系统繁忙，请稍后再试！',
            icon: 'none',
            duration: 2000//持续的时间
          })
        }
      },
      fail(err) {
        console.log("请求失败!");
        wx.showToast({
          icon: 'none',
          title: '链接错误!',
        })
      }
    })

  },
})