<template>
  <div class="plun">
    <span @click="setShow(false)" class="close">&times;</span>
    <ul>
      <li v-for="(item,index) in dataJson" :key="index">
        <span>{{item.title}}</span>
        <!-- <span :class="{active:item.flag}" @click="pinglunFn(item)">{{item.count}}</span> -->
        <span :class="{active:item.flag}" @click="pinglunFn(index)">{{item.count}}</span>
        
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["dataJson"])
  },
  methods: {
    ...mapMutations(["setShow","pinglunFn"]),
    // pinglunFn(item) {
    //   if (!item.flag) {
    //     item.flag = true;
    //     item.count++;
    //   }else{
    //     item.flag=false
    //     item.count--
    //   }
    // }
  }
};
</script>

<style scoped lang='scss'>
.plun {
  height: 80%;
  background: rgba(0, 0, 0, 0.8);
  top: 200px;
  left: 0;
  width: 100%;
  position: fixed;
  .close {
    color: #fff;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    padding: 5px;
  }
  ul {
    color: #fff;
    overflow: hidden;
    font-size: 13px;
  }
}
.active{
  color: red;
  font-size: 30px
}
</style>
