import Vue from "vue"
import VueRoutrer from "vue-router"

Vue.use(VueRoutrer)

const home = () => import("../views/home")
const discover = () => import("../views/discover")
const order = () => import("../views/order")
const my = () => import("../views/my")
const detail = () => import('@/views/detail')
const login = () => import('@/views/login')
const hot = () => import('@/views/discover/hot')
const future = () => import('@/views/discover/future')
let router = new VueRoutrer({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: "/home",
        component: home,
        meta: { title: '首页', isFlag: true }
    }, {
        path: "/discover",
        component: discover,
        meta: { title: '发现' },
        redirect:'/discover/hot', //路由重定向
        children:[
            {
                path:'hot',
                component:hot,
                meta: { title: '发现' },
            },{
                path:'future',
                component:future,
                meta: { title: '发现' },
            }
        ]
    }, {
        path: "/order",
        component: order,
        meta: { title: '订单' ,isRequire:true},
        // beforeEnter:(to,from,next)=>{
        //     console.log(to)
        //     localStorage.toPath=to.path
        //     if(localStorage.user){
        //         next()
        //     }else{
        //         next('/login')  //跳到登录页
        //     }

        // }
    }, {
        path: "/my",
        component: my,
        meta: { title: '我的',isRequire:true }
    },
    {
        path: '/detail/:id',
        component: detail,
        meta: { title: "详情" }
    }, {
        path: '/login',
        component: login
    }
    ]
})
/**
 * 全局校验
 */
router.beforeEach((to, from, next) => {
    if(to.meta.isRequire){//需要校验项
        if (localStorage.user) {
            next()
        } else {
            next({ path: 'login',query:{toPath:to.path}})
        }
    }else{//不需要校验
        next()
    }
})
export default router