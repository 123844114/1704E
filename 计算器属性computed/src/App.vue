<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <h1 @click="str='bawei'">{{str}}</h1>
    <p>单价:<input type="text" v-model="price"></p>
    <p>数量:<input type="text" v-model="num"> <button @click='num++'>+</button></p>
    <p>总和：{{total}}</p>
  </div>
</template>

<script>
export default {
data(){
  return {
    msg:'hello world',
    price:80,
    num:0
  }
},
computed:{ //定义计算属性,是一个变量，不能在data中重名;当msg发生变化的时候，str自动跟新
    str:{
      get(){
        return this.msg.toUpperCase()
      },
      set(newvalue){
        this.msg+=newvalue
      }
    },
    total(){
      return this.price*this.num
    }
}
}
</script>

<style>

</style>
