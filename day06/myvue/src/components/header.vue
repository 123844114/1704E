<template>
    <div><span style="float:left" @click="$router.back()" v-if="!$route.meta.flag">&lt;</span>{{$route.params.name?$route.params.name:'模拟考试'}}</div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
div{
      height: 60px;
  line-height: 60px;
  text-align: center;
  background: #0089d1;
  color: #fff;
  font-size: 24px;
}
</style>
