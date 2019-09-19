import Vue from 'vue'
//创建一个vue的实例--对象
let vm=new Vue({
    el:'#app',//挂载点
    data:{//数据
        msg:'hello world',
        span:'<span>你好</span>',
        link:'https://www.baidu.com/',
        sex:'female',
        flag:true,
        isOk:false,
        list:[
           {name:'Apple/苹果 iPhone 8',id:0,price:12312},{name:'Apple/苹果 iPhone 8 Plus',id:1,price:12312}
        ],
        obj:{name:'jim',age:18,sex:'male'},
        num:10,
        checks:[],
        ck:true
    }, 
   methods:{//方法
    changeClass(){
       this.isOk=!this.isOk 
    }
   }
})
window.vm=vm
