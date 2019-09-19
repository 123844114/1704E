import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入页面
const card=()=>import('@/views/card')
const home=()=>import('@/views/home')
const p404=()=>import('@/views/404')
export default new VueRouter({
    mode:'hash',
    routes:[{
        path:'*',
        component:p404
    },{
        path:'/home',
        component:home
    },{
        path:'/card/:id',
        component:card
    },{
        path:'/',
        redirect:'/home'
    }]
})