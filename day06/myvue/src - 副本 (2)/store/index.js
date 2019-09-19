import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
// import movieList from '@/data/movieList.json'
export default new Vuex.Store({
    state:{
        movieList:[],//存放数据列表
        movieDetail:{},// 存放详情数据
        cinemaList:[]// 存放详情数据
    },
    getters:{},
    mutations:{
        setMovieList(state,payload){
            state.movieList=payload
        },
        setMovieDetail(state,payload){
            state.movieDetail=payload
        },
        setCinemaList(state,payload){
            state.cinemaList=payload
        },
    },
    actions:{
        /**
         * 获取‘正在热映’列表
         */
        getMovieList({state,commit}){
            axios.get('/movieList').then(({data})=>{
                commit('setMovieList',data)
            })
        },
        /**
         * 获取详情
         */
        getDetailData({state,commit},id){
            axios.get('/movieDetail?id='+id).then(({data})=>{
                console.log(data)
            //    if(code){
            //     // commit('setMovieDetail',{})
            //    }else{
                commit('setMovieDetail',data)
            //    }
            })
        },
        /**
         * 获取影院列表
         */
        getCinemaList({state,commit}){
            axios.get('/cinemaList').then(({data})=>{
                console.log(data.cinemas)
                commit('setCinemaList',data.cinemas)
            })
        }
    }
})