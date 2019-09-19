<template>
    <div class="footer">
       <router-link to="/movie/hot" tag='p'>
           <span class="iconfont icon-shouye"></span>
           <span>电影</span>
       </router-link>
       <router-link to="/cinema" tag='p'>
           <span class="iconfont icon-faxian"></span>
           <span>影院</span>
       </router-link>
       <router-link to="/my" tag='p'>
           <span class="iconfont icon-weidenglu"></span>
           <span>我的</span>
       </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
.footer{
    display: flex;
    justify-content: space-around;
    height: 60px;
    background: #ccc
}
p{
    display: flex;
    text-align: center;
    flex-direction: column
}
.router-link-active{
  color:red
}
.iconfont{
    font-size: 18px
}
</style>
