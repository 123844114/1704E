<template>
  <div id="app">
    <header>
      <router-link to="/tuijian" tag='span'>推荐</router-link>
      <router-link to="/beijing" tag='span'>北京</router-link>
    </header>
    <router-view class="main"></router-view>
    <footer>
      <router-link to="/tuijian">首页</router-link>
      <router-link to="/my">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang='scss'>
#app{
  height: 100%;
  background: pink;
  display: flex;
  flex-direction: column
}
.main{
  flex: 1;
  overflow: auto
}
header,footer{
  height: 60px;
  line-height: 60px;
}
.router-link-active{background: red}
</style>
