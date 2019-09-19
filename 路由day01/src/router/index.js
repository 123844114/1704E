/**
 * 配置路由
 */
import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
// import home from '../views/home'
// import list from '../views/list'
// import page404 from '../views/404'
// 路由懒加载
const home = () => import('../views/home')
const list = () => import('../views/list')
const my = () => import('../views/my')
const lease = () => import('../views/lease')
const page404 = () => import('../views/404')
const detail = () => import('../views/detail')
export default new vueRouter({
  mode:'hash',
  routes: [
    {
      path: '/',
      component:home
      // redirect: 'home'
    },
    {
      path: '/home',//访问路径
      name: 'home',
      component: home,//对应的页面
    },
    {
      path: '/list/:id', //动态路由配置
      name: 'list',
      component: list
    },
    {
      path: '/lease',
      name: 'lease',
      component: lease
    },
    {
      path:'/detail/:id',
      component:detail
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }, {
      path: '*',
      component: page404
    }
  ]
})