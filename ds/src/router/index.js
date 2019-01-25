import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Huodong from '@/components/huodong'
import Dongtai from '@/components/dongtai'
import Home from '@/components/home'
import DingWei from '../views/dingwei'
import FaBuXuQiu from '../views/fabuxuqiu'
import Search from '../views/search'

Vue.use(Router)

export default new Router({
  routes: [
    //首页
    { path: '/',name: 'Index',component: Index},
          //定位页面
          {path:'/dingwei',name:'dingwei',component:DingWei},
          //发布需求
          {path:'/fabuxuqiu',name:'fabuxuqiu',component:FaBuXuQiu},
          //搜素
          {path:'/search',name:'search',component:Search},
    { path: '/huodong',name: 'huodng',component: Huodong},
    { path:'/dongtai',name:'dongtai',component:Dongtai},
    { path:'/home',name:'home',component:Home}
  ]
})
