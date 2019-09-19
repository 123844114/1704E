<template>
  <div id="app">
   <myHeader class="header"/>
   <router-view class="main"/>
   <!-- <myFooter class="footer"/> -->
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'
export default {
components:{
  myHeader,myFooter
}
}
</script>

<style scoped lang='scss'>
#app{
  height: 100%;
  display: flex;
  flex-direction: column
}
.main{
  flex:1;
  overflow: auto;
}
.router-link-active{color: red}
</style>
