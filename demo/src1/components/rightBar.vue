<template>
    <div class="rightBar">
        <span>关注</span>
        <span :class="{active:flag}" @click="flag=!flag">心</span>
        <span @click="setShow(true)">评论</span>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
            flag:false
        }
    },
methods:{
...mapMutations(['setShow'])
}
}
</script>

<style scoped lang='scss'>
.rightBar{
        position: fixed;
    right: 0;
    bottom: 190px;
    height: 99px;
    width: 50px;
  span{
      float: left;
      display: inline-block;
      border: 1px solid red;
          width: 50px;
    height: 30px;
  }  
}
.active{
    background: red
}
</style>
