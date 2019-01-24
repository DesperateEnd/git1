import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Huodong from '@/components/huodong'
import Dongtai from '@/components/dongtai'
import Home from '@/components/home'
import DingWei from '../views/dingwei'

Vue.use(Router)

export default new Router({
  routes: [
    //首页
    { path: '/',name: 'Index',component: Index},
    //定位页面
    {path:'/dingwei',name:'dingwei',component:DingWei},
    { path: '/huodong',name: 'huodng',component: Huodong},
    { path:'/dongtai',name:'dongtai',component:Dongtai},
    { path:'/home',name:'home',component:Home}
  ]
})
