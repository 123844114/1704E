<template>
  <div class="footer">
    <span class="count" @click="setShow">{{totalCount}}</span>
     <span class="price">{{totalPrice}}</span>
    <span class="btn" :class="{active:totalCount}">确认添加</span>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed:{
    ...mapGetters(['totalCount','totalPrice'])
  },
  methods:{
    ...mapMutations(['setShow'])
  }
};
</script>

<style scoped lang='scss'>
.footer {
  height: 60px;
  line-height: 60px;
  background: #383838;
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 10;
  .count {
    display: inline-block;
    width: 80px;
    height: 80px;
    border: 1px solid red;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: -35px;
    left: 35px;
    text-align: center;
    line-height: 80px;
  }
  .price {
    display: inline-block;
    width: 80px;
    height: 80px;
    border: 1px solid red;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: -35px;
    left: 130px;
    text-align: center;
    line-height: 80px;
  }
  .btn {
    position: absolute;
    right: 0;
    width: 120px;
    height: 40px;
    background: #cbc0c0;
    line-height: 40px;
    text-align: center;
    top: 10px;
    right: 10px;
  }
  .active{
      background: #FF6634
  }
}
</style>
