<template>
  <div class="box">
    <span class="iconfont icon-duigou" :class="{active:options.flag}" @click="checkOne"></span>
    <!-- <img :src='require("../images/"+options.src)' alt /> -->
    <div class="ig"><img :src='"static/images/"+options.src' alt=""></div>
    <div class="right">
      <h3>{{options.title}}</h3>
      <p>黑色</p>
      <p>￥{{options.price}}</p>
      <p class="btn">
        <button @click="$emit('delEvent',index)">删除</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      str:'bawei'
    }
  },
    props:['options','msg','data','index'],
    methods:{
      /**
       * 加法
       */
      addFn(){
        
        this.options.count++
      },
      /**
       * 减法
       */
      decFn(){
        if(this.options.count>0){
          this.options.count--
        }
      },
      /**
       * 单选
       * 1、自身样式
       * 2、全选
       */
      checkOne(){
        this.options.flag=!this.options.flag
       //触发自定义事件
      this.$emit('checkOneEvent')
      }
    }
};
</script>

<style scoped lang='scss'>
.active{color: red}
.box {
  display: flex;
  width: 100%;
  border: 1px solid #d7d3d3;
  justify-content: space-between;
}
.icon-duigou {
  flex: 1;
}
.ig {
  flex: 2;
}
.ig img{width: 85%;}
.right {
  flex: 4;
  display: flex;
  flex-direction: column;
}
.btn {
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
}
button{
    width: 60px
}
</style>
