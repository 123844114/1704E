import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import dataJson from '../data/data.json'
import { stat } from 'fs';
export default new Vuex.Store({
    state:{
        show:false,//显隐
        dataJson:[]
    },
    getters:{},
    mutations:{
        setShow(state,payload){
            state.show=payload
        },
        /**
         * 
         * count变化
         * flag变化
         */
        pinglunFn(state,index){
            let flag=state.dataJson[index].flag
            if(!flag){
                state.dataJson[index].flag=true
                state.dataJson[index].count++
            }else{
                state.dataJson[index].flag=false
                state.dataJson[index].count--
            }
        }
    },
    actions:{}
})