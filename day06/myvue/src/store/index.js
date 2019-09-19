//vuex
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let store= new Vuex.Store({
    state:{
        dataJson:[],
        counter:0  //统计正确题数
    },
    getters:{},
    mutations:{
        setDataJson(state,payload){
            state.dataJson=payload
        },
        setCounter(state){
            state.counter++
        }
    },
    actions:{
        getList({commit}){
            axios.get('/list').then(({data})=>{
                commit('setDataJson',data)
            })
        }
    }
})
export default store