<template>
    <div class="footer">
       <router-link to="/home" tag='p'>
           <span class="iconfont icon-shouye"></span>
           <span>首页</span>
       </router-link>
       <router-link to="/discover" tag='p'>
           <span class="iconfont icon-faxian"></span>
           <span>发现</span>
       </router-link>
       <router-link to="/order" tag='p'>
           <span class="iconfont icon-dingdan"></span>
           <span>订单</span>
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
    justify-content: space-around
}
p{
    display: flex;
    text-align: center;
    flex-direction: column
}
.router-link-active{
  color: #3ab4c4
}
.iconfont{
    font-size: 18px
}
</style>
