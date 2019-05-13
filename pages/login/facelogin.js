// pages/pp/pp.js
Page({
  /**
   * 页面的初始数据
   */

  data: {
    base64: "",
    token: "",
    msg: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  devicePosition() {
    this.setData({
      device: !this.data.device,
    })
    console.log("当前相机摄像头为:", this.data.device ? "后置" : "前置");
  },

  takePhoto() {
    //拍照并编码
    const ctx = wx.createCameraContext();
    var that = this;
    var imgurl = "";
    ctx.takePhoto({
      quality: 'high',
      success: function (d) {
        imgurl = d.tempImagePath;
        wx.uploadFile({
          url: 'http://192.168.0.6:8086/wudi/faceLogin',
          filePath: d.tempImagePath,
          name: 'file',
          header: {
            'Content-Type': 'multipart/form-data'
          },
          formData: null,
          success: function (re) {
            console.log(re.data);
            that.setData({
              resultt: re.data
            });

          }
        })
      },
      complete: function () {
        console.log("complete");
      }
    });

  }
})