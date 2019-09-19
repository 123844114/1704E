//vuex
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import catagoryJson from '../data/catagory.json'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        bannerJson:[],//存banner
        listJson:[],//存list
        catagoryJson,
        list:[]
    },
    getters:{
        BannerList(state){
            return state.bannerJson.BannerList
        }
    },
    mutations:{
        setBannerJson(state,payload){
            state.bannerJson=payload
        },
        setListJson(state,payload){
            state.listJson=state.listJson.concat(payload)
        }
    },
    actions:{
        //获取bannerJson
        getBannerJson({commit}){
            axios.get('/banner').then(({data})=>{
                commit('setBannerJson',data)
            })
        },
        //获取list数据,根据当前页码和每页显示几条
        getListJson({commit},payload){
            //pageSize 一页几条，pageNum 当前页码
            let {pageNum,pageSize} =payload
            axios.get('/list',{
                params:{
                    pageNum:pageNum,
                    pageSize:pageSize
                }
            }).then(({data})=>{
                if(data.length<pageSize){
                    alert('已经到最后一页')
                }else{
                    commit('setListJson',data)
                }
               
            })
        }
    }
})
export default store