
import Vue from 'vue'

new Vue({
    el: '#app',
    data: {
        tabs: [{
            title: '标题一',
            content: '内容一'
        }, {
            title: '标题二',
            content: '内容二'
        }, {
            title: '标题三',
            content: '内容三'
        }],
        current:0,
        checkAll:false,
        stars:[{
            name:'李易峰',
            isCheck:true
        },{
            name:'易烊千玺',
            isCheck:false
        },{
            name:'彭于晏',
            isCheck:false
        },{
            name:'周星驰',
            isCheck:false
        }],
        ckList:[]
    },
    methods:{
        /**
         * tab切换
         * 1、变样式
         * 2、变内容
         */
        tabFn(index){
            this.current=index
            console.log(index)
        },
        /**
         * 全选功能
         */
        checkAllFn(){
            console.log(this.checkAll)
            this.stars.forEach(item=>item.isCheck=this.checkAll)
        },
        /**
         * 不全选
         * every  true  false
         */
        checkFn(item){
           this.checkAll= this.stars.every(item=>item.isCheck)
        }
    }
})