<template>
    <div><span style="float:left" @click="$router.back()" v-if="!$route.meta.flag">&lt;</span>{{$route.params.name?$route.params.name:'鲜花网'}}</div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
div{
    height: 60px;
    line-height: 60px;
    background: red;
    color: #fff;
    text-align: center
}
</style>
