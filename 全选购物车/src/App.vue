<template>
  <div id="app">
    <!-- {{dataJson}}  -->
    <!-- 上中下布局 -->
    <headerVue />
    <div class="content">
      <BoxItem  v-for="(item,index) in dataJson" :key="index" :options="item" msg='hello' @checkOneEvent="checkOneToAll"/>
    </div>
    <div class="total"><span class="iconfont icon-duigou " :class="{active:isCheckAll}" @click="checkAll"></span>全选 总价：{{totalPrice}} 总个数：{{totalCount}}</div>
    <footerVue />
  </div>
</template>

<script>
import headerVue from "./components/header";
import footerVue from "./components/footer";
import BoxItem from "./components/BoxItem";
import axios from 'axios'
export default {
  data(){return{
    dataJson:[],
    isCheckAll:false
  }},
  components: { headerVue, footerVue, BoxItem },
  created(){
  this.$axios.get('/list').then(({data})=>{
    console.log(data)
    this.dataJson=data
  })
  },
  computed:{
    totalPrice(){
    return  this.dataJson.reduce((total,current)=>{
        if(current.flag){
          total+=current.price*current.count
        }
        return total
      },0)
    },
    totalCount(){
    return  this.dataJson.reduce((total,current)=>{
        if(current.flag){
          total+=current.count
        }
        return total
      },0)
    }
  },
  methods:{
    /**
     * 全选按钮
     * 控制自己样式
     * 控制全部样式
     */
    checkAll(){
      this.isCheckAll=!this.isCheckAll
      this.dataJson.forEach(item=>item.flag=this.isCheckAll)
    },
    /**
     * 联动全选效果
     */
    checkOneToAll(){
    this.isCheckAll=  this.dataJson.every(item=>item.flag)
    }
  }
};
</script>

<style>
.active{
  color: red
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: auto;
}
.total{
  width: 100%;
  position: fixed;
  bottom: 85px;
  height: 60px;
  background: rgba(0,0,0,.8);
  color: #fff;
      font-size: 28px;
}
</style>
