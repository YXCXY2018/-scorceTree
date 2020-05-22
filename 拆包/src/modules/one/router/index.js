
import index from '../pages/index'

 
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export  default new  Router({
  routes:[
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        title: '动态圈'
      },
      component: index
    },


  ]

})

 
