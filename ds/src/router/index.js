import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Huodong from '@/components/huodong'
import Dongtai from '@/components/dongtai'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'Index',component: Index },
    { path: '/huodong',name: 'huodng',component: Huodong },
    { path:'/dongtai',name:'dongtai',component:Dongtai},
    { path:'/home',name:'home',component:Home}
  ]
})
