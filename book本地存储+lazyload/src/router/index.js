import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//路由的异步加载
const list = ()=>import('@/views/list.vue')
const detail = ()=>import('@/views/detail.vue')
const my = ()=>import('@/views/my.vue')
const page404 = ()=>import('@/views/404.vue')

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/list',//重定向
    },{
      path:'/list',
      name:'list',
      component:list
    },{
      path:'/detail/:id',
      name:'detail',
      component:detail
    },{
      path:'/my',
      name:'my',
      component:my
    },{
      path:'*',
      component:page404
    }
  ]
})
