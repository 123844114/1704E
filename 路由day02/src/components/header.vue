<template>
    <div>
        <span style="float:left" v-if="!$route.meta.isFlag" @click="$router.back()">&lt;</span>
      <slot/>
    </div>
</template>

<script>
export default {

}
</script>

<style >

</style>
