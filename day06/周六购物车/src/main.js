// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/font/iconfont.css'
Vue.config.productionTip = false
//全局配置axios
import axios from 'axios'
Vue.prototype.$axios=axios
/* eslint-disable no-new */
let vm=new Vue({
  el: '#app',
  data:{},
  components: { App },
  template: '<App/>'
})
window.vm=vm
