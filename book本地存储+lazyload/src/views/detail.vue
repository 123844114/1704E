<template>
  <div>
    <pre>详情页思路：根据id找数据</pre>
    {{$route.params.id}} {{data}}
    <AddToMe :opt="data"/>
  </div>
</template>

<script>
//详情页
import AddToMe from "@/components/AddToMe";
export default {
components:{AddToMe},
props:['datalist'],
data(){
  return {
    data:{}
  }
},
created(){
 this.data= this.datalist.find(item=>item.id==this.$route.params.id)
}
};
</script>

<style scoped lang='scss'>
.btn {
  height: 24px;
  line-height: 24px;
  color: #fff;
  border: 0;
  width: 70px;
  font-size: 12px;
  cursor: pointer;
  outline: none;
}
.btn-detail {
  background: red;
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
