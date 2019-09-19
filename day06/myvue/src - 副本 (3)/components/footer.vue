<template>
    <footer>
        <router-link tag='p' to='/home'>
            <span class="iconfont icon-shouye"></span>
            <span>首页</span>
        </router-link>
        <router-link tag='p' to='/category'>
            <span class="iconfont icon-dingdan"></span>
            <span>分类</span>
        </router-link>
        <router-link tag='p' to='/my'>
            <span class="iconfont icon-weidenglu"></span>
            <span>我的</span>
        </router-link>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
footer{
height: 60px;
display: flex;
justify-content: space-around;
align-items: center;
p{
    display: flex;
    flex-direction: column;
    text-align: center
}
}
.router-link-active{color: red}
</style>
