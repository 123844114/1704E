<template>
    <div class="home">
        <!-- home页面 -->
        <router-view class="home-main"></router-view>
        <myfooter/>
    </div>
</template>

<script>
import myfooter from '@/components/footer'
export default {
components:{myfooter}
}
</script>

<style lang='scss' scoped>
.home{
    height: 100%;
    display: flex;
    flex-direction: column
}
.home-main{
    flex:1;
    overflow: auto
}
</style>
