import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const list = ()=>import('../views/list')
export default new Router({
  routes: [
    {
      path: '/',
      component:list
    }
  ]
})
