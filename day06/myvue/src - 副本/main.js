// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import './assets/font/iconfont.css'
import axios from 'axios'

//配全局
Vue.prototype.$axios=axios
Vue.prototype.$bus=new Vue()
let vm =new Vue({
  el: '#app',
  router, //引入路由配置
  components: { App },
  template: '<App/>'
})
window.vm=vm