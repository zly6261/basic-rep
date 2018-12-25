//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[],
    hotgoods:[],
    goodsList:[],
    goodsWidth:'',
    goodsHeight:'',
    goodsTop:'',
    goodsLeft:'',
    windowHeight:'',
    harr:[0,0],
    imglen:0,
    pageindex:0,
    noderes:''
  },
  onLoad:function(){
    let self = this
    wx.hideTabBar()
      wx.getSystemInfo({ //设置商品图片宽度
        success (res) {
        let goodsWidth = res.windowWidth / 2;
        let windowHeight = res.windowHeight;
        self.setData({
            goodsWidth :goodsWidth,
            windowHeight : windowHeight
          },()=>{
            self.loadMoreImg()
          })
        }
      })

   },
 
//图片请求完毕方法，瀑布流布局
   loadImage : function(e){
       let owidth =  e.detail.width,//获取图片原始高宽
           oheight =  e.detail.height,
           index = e.currentTarget.dataset.index,
           goodsWidth =this.data.goodsWidth,
           goodsHeight =this.data.goodsHeight,
           goodsList = this.data.goodsList,
           harr = this.data.harr;
           goodsHeight =goodsWidth * (oheight / owidth) //计算图片等比高度
           var firtColH = this.data.harr[0], secondColH = this.data.harr[1];//图片高度数组

           var obj = goodsList[index];
           obj.height = goodsHeight; 
            if (firtColH < secondColH) { //比对数组两个值，判断图片放置位置
              obj.left = 0;
              obj.top = firtColH;
              firtColH += obj.height+90;
            }else {
              obj.left = goodsWidth;
              obj.top = secondColH;
              secondColH += obj.height+90;
            }
            this.setData({
              goodsList,
              harr:[firtColH, secondColH]
            })
   },
  loadMoreImg: function () {//商品图片信息请求
   
    let self = this
    wx.request({
      url: 'http://192.168.0.112:8080/',
      success(res) {
        self.setData({
          noderes: res.data
          })
      }
    })
      wx.request({
        url: 'https://mp.lotaai.com/xcxlogin/shopHome?shop_store_id=2',
        header: {'content-type': 'application/json'},
        success (res) { 
            for(let i = 0;i< res.data.data.productHome.length;i++){

              if(res.data.data.productHome[i].productTypeTitle == "热点"){
                  self.setData({
                    hotgoods:res.data.data.productHome[i].productList
                  })
                }

              if(res.data.data.productHome[i].productTypeTitle == "热销"){
                      let resData = res.data.data.productHome[i].productList
                      let goodsList = self.data.goodsList
                      for(let j = 0 ; j < resData.length;j++){
                            goodsList.push(resData[j])
                             self.setData({
                              goodsList
                            })
                      }
                }
            }  
            self.setData({
              imgUrls:res.data.data.shopAd
            })
        }
      })
   }
  
})
