// pages/discover/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageindex: 1,
    imgUrls: [
      {
        path: 'https://mp.lotaai.com//upload/adImage/WechatIMG511.jpeg',
        title: '全新黑白 Off-White x Nike Zoom Fly SP'
      },
      {
        path: 'https://mp.lotaai.com///upload/adImage/WechatIMG50.jpeg',
        title: '要风度也要温度，你的衣柜少了一件卫衣'
      },
      {
        path: 'https://mp.lotaai.com//upload/adImage/WechatIMG52.jpeg',
        title: 'BAPE x READYMADE 联名@RBRICK发售'
      },
      {
        path: 'https://mp.lotaai.com//upload/adImage/WechatIMG533.jpeg',
        title: 'The NorthFace x Supreme'
      }
    ],
    commidity: [
      {
        image: '../discover/image/commidity-1.jpg',
        titile: 'Dangerous people满印纸袋人连帽套头卫衣',
        price: '529.00',
        pastPrice: '599.00'
      },
      {
        image: '../discover/image/commidity-2.jpg',
        titile: 'Dangerous people高街黑白条纹半高领套头卫衣',
        price: '499.00',
        pastPrice: '539.00'
      },
      {
        image: '../discover/image/commidity-3.jpg',
        titile: 'Dangerous people纸袋人小丑提花宽松圆领毛衣',
        price: '399.00',
        pastPrice: '429.00'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.hideTabBar()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})