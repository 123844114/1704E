<template>
  <div>
    <span style="float:left" v-if="$route.meta.isShow" @click="$router.back()">&lt;</span>
    {{$route.meta.title?$route.meta.title:$route.params.name}}
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
div {
  height: 60px;
  line-height: 60px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  text-align: center;
}
</style>
