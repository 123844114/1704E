<template>
  <div>
    <img :src="options.img" alt />
    <p>{{options.title}}</p>
    <p>{{options.desc}}</p>
    <p>{{options.price}}元</p>
  </div>
</template>

<script>
export default {
  props: ["options"]
};
</script>

<style scoped>
div {
  /* float: left; */
}
h1 {
  color: green;
}
</style>
