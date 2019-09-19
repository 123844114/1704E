import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        list: [],
        show: false
    },
    getters: {
        /**
         * 得到购物车里的回显数据,拿到count!=0
         */
        getShopData(state) {
            return state.list.filter(item => item.count != 0)
        },
        /**
         * 总个数
         */
        totalCount(state) {
            return state.list.reduce((total, current) => {
                return total += current.count
            }, 0)
        },
        /**
         * 总价  单价*数量
         */
        totalPrice(state) {
            return state.list.reduce((total, current) => {
                return total += current.count * current.price
            }, 0)
        }
    },
    mutations: {
        setList(state, payload) {
            state.list = payload
        },
        /**
         * 加按钮
         */
        add(state, options) {
            // debugger
            // state.list[index].count++
            options.count++
        },
        /**
         * 减法按钮
         */
        sub(state, index) {
            state.list[index].count--
        },
        /**
         * 设置显隐
         */
        setShow(state) {
            state.show = !state.show
        }
    },
    actions: {
        getList({ commit }) {
            axios.get('/list').then(({ data }) => {
                commit('setList', data)
            })
        }
    }
})