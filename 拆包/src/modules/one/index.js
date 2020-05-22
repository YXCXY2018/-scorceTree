/**
 * Created by Administrator on 2018/4/22.
 */
import Vue from 'vue'
import App from './App'
import router from './router'
 

import '@/utils/until.js'
 


import moment from 'moment'
  Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD   ') {
    return moment(dataStr).format(pattern)
  })
  Vue.filter('dateFormat1', function(dataStr, pattern = 'YYYY-MM-DD HH:mm  ') {
    return moment(dataStr).format(pattern)
  })

// 上传图片的设置的一些的操作来的
  Vue.prototype.$getImage = '/wx/obsFile/getImage?objectKey=' // 图片的路径
  let params = {
    signUrl: window.location.href
  }
  // api.getJsApiSign(params).then(res => {
  //   if (res.data.code === 0) {
    
  //     console.log(res.data);
  //     let data = res.data.data
  //     wx.config({
  //       beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
  //       debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //       appId: data.appId, // 必填，企业微信的corpID
  //       timestamp: data.timestamp, // 必填，生成签名的时间戳
  //       nonceStr: data.nonceStr, // 必填，生成签名的随机串
  //       signature: data.sign,// 必填，签名，见 附录-JS-SDK使用权限签名算法
  //       jsApiList: ['chooseImage','previewImage','uploadImage'] // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
  //     });
  //   } else {
    
  //     conole.log(res.data.msg);
  //   }
  // });




Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
