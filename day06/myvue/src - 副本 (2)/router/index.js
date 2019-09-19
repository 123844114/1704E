import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入页面
const home = () => import('@/views/home')
const movie = () => import('@/views/movie')
const cinema = () => import('@/views/cinema')
const my = () => import('@/views/my')
const login = () => import('@/views/login')
const detail = () => import('@/views/detail')
const hot = () => import('@/views/movie/hot')
const future = () => import('@/views/movie/future')
const search = () => import('@/views/search')

export default new VueRouter({
    mode: 'hash',//默认
    routes: [
        {
            path: '/',
            component: home,
            redirect: '/movie/hot',
            children: [
                {
                    path: 'movie',
                    component: movie,
                    children: [
                        {
                            path: 'hot',
                            component: hot,
                            meta:{title:'猫眼电影'}
                        },
                        {
                            path: 'future',
                            component: future,
                            meta:{title:'猫眼电影'}
                        }
                    ]
                }, {
                    path: 'cinema',
                    component: cinema,
                    meta:{title:'影院'}
                },
                {
                    path: 'my',
                    component: my,
                    beforeEnter:(to,from,next)=>{
                        if(localStorage.user){
                            next()
                        }else{
                            next({path:'/login',query:{toPath:to.fullPath}})
                        }
                    }
                }
            ]
            // redirect:'/movie'
        }, {
            path: '/login',
            component: login,
            meta:{title:'猫眼电影',isShow:true}
        }, {
            path: '/detail/:id/:name',
            component: detail,
            meta:{isShow:true}
        },{
            path:'/search',
            component:search,
            meta:{title:'猫眼电影',isShow:true}
        }
    ]
})