import Vue from 'vue'
import Router from 'vue-router'

 
Vue.use(Router)
//新闻推送的开发
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'
    },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: 'two'
    },
    component: resolve => require(['@/modules/two/pages/index'], resolve)
  },


  // {
  //   path: '*',
  //   component: resolve => require(['@/modules/error/404'], r/pagesesolve)
  // }
    
  ]
})
