****vuex***
1、Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
  状态：数据。
  模式：语法，规则。
2、使用vuex
   1、npm install vuex --save
   2、引入  import Vuex from 'vuex'
            Vue.use(Vuex)
3、vuex语法
#store的创建：new Vuex.Store({state:{},mutations:{},actions:{},})
  #state：存数据
  #mutations：写方法同步，来修改state里的数据；
    *方法的参数：两个参数，第一个state，第二个可传可不传的自定义参数，payload
    *调用方式：store.commit('add',参数配置)
  #actions:写异步方法，通常axios调接口
    *方法的参数：三个参数，第一个context（上下文对象,dispatch,commit,state,getter）,第二个参数payload
    *调用方法：store.dispatch('getList',参数配置)
  #getters:对state中的数据进行二次变形，返回的值还是数据
4、vue中如何引入vuex？new Vue({store,...})
5、辅助函数 
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  语法：...mapState([*,*])
  (1)mapState,mapGetters在computed中使用
  (2)mapMutations,mapActions在methods中使用