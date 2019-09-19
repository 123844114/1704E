import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const tuijian = ()=>import('../views/tuijian')
const beijing = ()=>import('../views/beijing')
const my = ()=>import('../views/my')
export default new VueRouter({
    routes:[
        {path:'/',redirect:'/tuijian'},
        {
            path:'/tuijian',component:tuijian
        },
        {
            path:'/beijing',component:beijing
        },{
            path:'/my',component:my
        }

    ]
})