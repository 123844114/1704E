import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state: { //存放数据，访问器属性(...)
      count:0,
      str:'helloworld',
      list:[]
    },
    getters:{
      a(state,{b}){
        console.log(arguments)
       return state.str.split('').reverse().join('')+b
        // console.log(arguments)
      },
      b(state){
        console.log(arguments)
       return state.str.toUpperCase()
        // console.log(arguments)
      }
    },
    mutations:{//存放方法（同步函数）, 修改state中的值,this指向store实例本身,store.commit()
      add(state,payload){//参数：默认第一个是state，第二个自己可传可不传，只能接受俩参数
        state.count+=payload
      },
      setList(state,payload){
        state.list=payload
      }
    },
    actions:{//存放方法（异步函数）,store.dispatch('getList')
      getList({state,commit}){  // 参数3：第一个默认是个对象context:{commit,dispatch,state}
        axios.get('/list').then(({data})=>{
          console.log(data)
          // state.list=data
          commit('setList',data)
        })
      }
    }
  })