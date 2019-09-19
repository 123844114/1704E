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
        <button @click="options.count++">+</button>
        <span>{{options.count}}</span>
        <button>-</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props:['options','msg'],
    methods:{
        /**
         * 点击选择按钮
         * 控制自己样式
         * 控制全选样式
         */
        checkOne(){
            this.options.flag=!this.options.flag
            this.$emit('checkOneEvent')  //子传父
        }
    }
};
</script>

<style scoped>
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
    width: 30px
}
</style>
