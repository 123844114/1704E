// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import './assets/font/iconfont.css'
Vue.config.productionTip = false
//全局配置axios
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.prototype.$bus=new Vue()
/* eslint-disable no-new */
// 全局注册组件
// 引入路由

let vm=new Vue({
  el: '#app',
  router,//简写
  components: { App },
  template: '<App/>'
})
window.vm=vm
