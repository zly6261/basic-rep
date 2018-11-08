// component/tabBar/tabBar.js

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
        pagenum:{
          type:Number,
          value:''
        }
  },

  /**
   * 组件的初始数据
   */
  data: {
     tabData:[
       {
        iconClass:'icon-home1',
        pagePath:'/pages/index/index'
      },
      {
        iconClass:'icon-yuan',
        pagePath:'/pages/discover/discover'
      },
      {
        iconClass:'icon-gouwuche2',
        pagePath:'/pages/cart/cart'
      },
      {
        iconClass:'icon-user3',
        pagePath:'/pages/user/user'
      }
    ],
    
  },

  /**
   * 组件的方法列表
   */
ready:function(e){
  this.setData({
    tabinx: this.properties.pagenum
  })

},

  methods: {
      //  tabClick(e){
      //     let tabinx =  e.currentTarget.dataset.index
      //   //  console.log(this.data.tabData[tabinx])
      //           this.setData({
      //             tabinx: tabinx
      //           })
      //    this.triggerEvent('myevent', {num:tabinx})
      //  }
  }
})
