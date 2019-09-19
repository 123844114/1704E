
import Vue from 'vue'
import dataJson from './data.json'
new Vue({
    el: '#app',
    data: {
        dataJson,
        current: 1,//当前选中下标
    },
    methods: {
        /**
         * tab切换
         * 1、样式
         * 2、数据
         */
        tabFn(index) {
            this.current = index
            console.log(this.dataJson[index])
        },
        /**
         * 拼数组
         */
        getAllList() {
            let newArr = []
            this.dataJson.forEach(item => {
                if (item.list) {
                    newArr.push(item.list)
                }
            })
            console.log(newArr.flat())
            return newArr.flat()
        },
        /**
         * 返回列表要渲染的数据
         * 当current=0
         * 其他
         */
        getList() {
            if (this.current === 0) {
                return this.getAllList()
            } else {
                return this.dataJson[this.current].list
            }
        }
    }

})