<template>
    <div>
        <p>
            <router-link tag="span" to='/discover/hot'>正在热映</router-link>
            <router-link tag="span" to='/discover/future'>即将上映</router-link>
        </p>
        <router-view class="dis"/>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
.router-link-active{
    background: red
}
</style>
