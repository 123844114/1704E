<template>
  <button class="btn btn-my" @click="addBook" :class="{disable:disable}">加入书架</button>
</template>

<script>
export default{
  props:['opt'],
  data(){
    return{
      disable:false
    }
  },
  watch:{ //监听器
    opt:{
      handler: function (newValue, oldVal) {
        let id= newValue.id
        //去本地查找val.id存不存在
        if(localStorage.list){
          let list=JSON.parse(localStorage.list)
          let index= list.findIndex(item=>item.id==id)
          if(index!==-1){
            this.disable=true
          }else{
            this.disable=false
          }
        }
       },
      immediate: true,
      deep:true
    }
  },
  methods:{
    /**
     * 1、该条数据存本地  localStorage.list
     * 2、样式变灰
     */
   addBook(){
     if(this.disable){
       return;
     }
    //  1、第一步
    let list = localStorage.list?JSON.parse(localStorage.list):[]
    list.push(this.opt)
    //存入
    localStorage.list=JSON.stringify(list)
    //2、第二步
    this.disable=true
   }
  }
}
</script>

<style scoped lang='scss'>
.btn {
  height: 24px;
  line-height: 24px;
  color: #fff;
  border: 0;
  width: 60px;
  font-size: 12px;
  cursor: pointer;
  outline: none;
}
.btn-my {
  border: 1px solid blue;
  color: blue;
}
.disable {
  border: 1px solid #666;
  color: #666;
}
</style>
