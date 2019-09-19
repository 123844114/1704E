import Vue from 'vue'
let vm=new Vue({
    el:'#app',
    data:{
        msg:'hello world',
        isShow:true
    },
    methods:{
        tabFn(){
            console.log(11)
        }
    },
    // template:`<span>你好</span>`
    beforeCreate(){
        console.log('-----beforeCreate-----')
        console.log(this.msg)
        console.log(this.$el)
        console.log(this.tabFn)
    },
    created(){
        setTimeout(()=>{
            console.log('接口数据')
            // console.log(this)
            this.isShow=false
        },5000)
        console.log('-----created-----')
        console.log(this.msg)
        console.log(this.tabFn)
        console.log(this.$el)
    },
    beforeMount(){
        console.log('-----beforeMount-----')
        console.log(this.msg)
        console.log(this.tabFn)
        console.log(this.$el)
        console.log(document.querySelector("h1"))
        console.log(document.querySelector("li"))
    },
    mounted(){ //挂载
        console.log('-----mounted-----')
        console.log(this.msg)
        console.log(this.tabFn)
        console.log(this.$el)
        console.log(document.querySelector("h1"))
        console.log(document.querySelector("li"))
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('Updated')
    },
    destroyed(){
        console.log('destroyed')
    }

})
window.vm=vm