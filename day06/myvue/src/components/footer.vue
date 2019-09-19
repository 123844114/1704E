<template>
  <footer>
    <p  @click="prev">
      <span class="iconfont icon-shouye"></span>
      <span>上一题</span>
    </p>
    <p @click="submit">
      <span class="iconfont icon-dingdan"></span>
      <span>提交</span>
    </p>
    <p @click="next">
      <span class="iconfont icon-weidenglu"></span>
      <span>下一题</span>
    </p>
  </footer>
</template>

<script>
export default {
  methods: {
      /**
       * 下一题
       */
    next() {
      let id = this.$route.params.id;
     
      if (id < 3) {
        id++;
      } else {
        id = 3;
      }
       console.log(id)
      this.$router.push('/card/'+id)
    },
    /**
     * 上一题
     */
    prev(){
        //获取id
        let id = this.$route.params.id
        if(id>0){
            id--
        }else{
            id=0
        }
        this.$router.push('/card/'+id)
    },
    /**
     * 交卷
     * 1、答对几道题    3中方案：data中定义counter，vuex定义，本地存储counter
     * 2、用时多少时间
     */
    submit(){
        let end= new Date()*1
        let start= localStorage.start
        let cha = (end-start)/1000
        let min = parseInt(cha/60)
        let sec= parseInt(cha%60)
        alert(`答对${localStorage.counter}题，用时${min}分，${sec}秒`)
    }
  }
};
</script>

<style scoped lang='scss'>
footer {
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
.router-link-active {
  color: red;
}
</style>
