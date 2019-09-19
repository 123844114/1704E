<template>
  <div>
    <div style="position:sticky;top:0px">
      <img src="static/2019-07-24_142820.png" @click="$router.push('/search')" />
      <!-- 功能条 -->
      <p class="toolbar">
        <span @click="sortFn" :class="{active:flag}">
          价格
          <i :class="{dropdown:!flag,dropup:flag}"></i>
        </span>
        <span @click='sortFn1' :class="{active:flag1}">
          距离
          <i :class="{dropdown:!flag1,dropup:flag1}"></i>
        </span>
      </p>
    </div>
    <!-- 列表子组件 -->
    <cinemaItem v-for="item in cinemaList" :key="item.id" :options="item" />
  </div>
</template>

<script>
import cinemaItem from "@/components/cinemaItem";
import { mapActions, mapState } from "vuex";
export default {
  data(){
    return{
      flag:false,// 价格开关
      flag1:false,// 价格开关
    }
  },
  computed: {
    ...mapState(["cinemaList"])
  },
  components: { cinemaItem },
  created() {
    this.getCinemaList();
  },
  methods: {
    ...mapActions(["getCinemaList"]),
    /**
     * 价格排序
     */
    sortFn() {
      this.flag=!this.flag //点击取反
      this.cinemaList.sort((a, b) => {
        if(this.flag){
          return a.sellPrice - b.sellPrice;
        }else{
          return b.sellPrice - a.sellPrice;
        }
      });
    },
    sortFn1(){
      this.flag1=!this.flag1 //点击取反
      this.cinemaList.sort((a,b)=>{
        if(this.flag1){
          return parseFloat(b.distance)-parseFloat(a.distance)
        }else{
          return parseFloat(a.distance)-parseFloat(b.distance)

        }
      })
    }
  }
};
</script>

<style scoped lang='scss'>
.toolbar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  z-index: 10;
  background-color: #fff;
  span {
    display: inline-block;
    width: 125px;
    text-align: center;
    color: #969696;
    font-size: 13px;
    position: relative;
    &:after {
      position: absolute;
      height: 10px;
      background: red;
      width: 1px;
      top: 0;
      right: 0;
    }
    i {
      position: absolute;
      left: 80px;
    }
    .dropdown {
      top: 15px;
      border: 4px solid transparent;
      border-top-color: #969696;
    }
    .dropup {
        top: 12px;
      border: 4px solid transparent;
      border-bottom-color: red;
    }
  }
}
.toolbar .active{
  color: red;
}
</style>
