<template>
  <div id="app">
    <!--组件调用 -->
   <p><span v-for="(item,index) in dataJson" :key="index" @click="tabFn(index)" :class="{active:current===index}">{{item.name}}</span></p> 
    <div class="content">
      <Item class="box" v-for="(item,index) in getData()" :key="index" :options='item'/>
    </div>
  </div>
</template>

<script>
import Item from './components/item'
import dataJson from './data.json'
export default {
  name: 'App',
  data(){
    return {
      dataJson,
      current:0
    }
  },
  components: {//当前页面中所使用到的组件，必须先注册一下，才能使用
  Item
  },
  methods:{
    tabFn(index){
      this.current=index
    },
    getData(){
      let newArr=[]
      if(this.current===0){
        this.dataJson.forEach(item=>{
          if(item.list){
            newArr.push(item.list)
          }
        })
        return newArr.flat()
      }else{
       return this.dataJson[this.current].list
      }
    }
  }
}
</script>

<style>
p span{padding: 0 10px}
span.active{color: red}
.content{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between */
}
.box{
  width: 25%;
  border: 1px solid red;
  box-sizing: border-box;
}
.box img{
  width: 100%
}
</style>

