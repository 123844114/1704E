<template>
  <div class="my">
    <pre>思路：1、从本地中读取list，渲染页面;
      2、为了实现全选，我们加了flag属性
      3、全选、不全选
      4、删除
          
    </pre>
    <p v-for="item in data" :key="item.id">
      {{item.flag}}
      <input type="checkbox" v-model="item.flag" @change='checkFn'/>
      <span>{{item.title}}</span>
    </p>
    <p>
      <input type="checkbox" v-model="isCheckAll" @change='checkAllFn'/>全选
      <button @click="delFn">删除</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      isCheckAll:false
    };
  },
  watch:{
    data:{
      handler:(n,o)=>{
        console.log(n)
      },
      deep:true,
      immediate:true
    }
  },
  created() {
    this.getData();
  },
  methods: {
    /**
     * 获取数据
     */
    getData() {
     let list = localStorage.list ? JSON.parse(localStorage.list) : [];
      this.data = list.map(item => {
        item.flag = false;
        return item;
      });
    },
    /**
     * 点击每一个
     */
    checkFn(){
     this.isCheckAll= this.data.every(item=>item.flag)
    },
    /**
     * 全选按钮
     */
    checkAllFn(){
      this.data.forEach(item=>item.flag=this.isCheckAll)
    },
    /**
     * 删除
     * 剩下的falg:false，重新存入本地存储
     */
    delFn(){
     this.data= this.data.filter(item=>item.flag==false)
     localStorage.list=JSON.stringify(this.data)
    }
  }
};
</script>

<style>
</style>
