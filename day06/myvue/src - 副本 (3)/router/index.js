import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入页面
const layout=()=>import('@/views/layout')
const list=()=>import('@/views/list')
const home=()=>import('@/views/home')
const my=()=>import('@/views/my')
const category=()=>import('@/views/category')
const p404=()=>import('@/views/404')
const login=()=>import('@/views/login')
export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            component:layout, //布局
            redirect:'/home',
            children:[
                {
                    path:'home',
                    component:home,
                    meta:{flag:true}
                },
                {
                    path:'list/:name',
                    component:list
                },{
                    path:'my',
                    component:my,
                    beforeEnter(to,from,next){
                        if(document.cookie.user){
                            next()
                        }else{
                            next('/login')
                        }
                    }
                },{
                    path:'category',
                    component:category
                }
            ]
        },{
            path:'*',
            component:p404
        },{
            path:'/login',
            component:login
        }
    ]
})