
<template>
  <div class="movie">
  <p>
    北京  <router-link to="/movie/hot" tag='span'>正在热映</router-link>
    <router-link to="/movie/future" tag='span'>即将上映</router-link>
  </p>
  <router-view class="movie-main"/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
.movie{
  display: flex;
  height:100%;
  flex-direction: column;
  p{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee
  }
  .movie-main{
    flex:1;
    overflow: auto;
  }

}
.router-link-active{color: red}
</style>
