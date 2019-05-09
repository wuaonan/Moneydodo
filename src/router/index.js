import Vue from 'vue'
import Router from 'vue-router'
//home
import home from '@/components/home/home'

//顶级权限
import authorityIndex from '../components/Topauthority/index'
import saleList from '../components/Topauthority/salesList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/authorityIndex',
      name: 'Topauthority',
      component: authorityIndex
    },
    {
      path: '/saleList',
      name: 'Topauthority',
      component: saleList
    },
  ]
})
