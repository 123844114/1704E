<template>
  <div>this is my</div>
</template>

<script>
export default {
//   beforeRouteEnter(to, from, next) {
//     console.log("my:beforeRouteEnter");
//     if(localStorage.user){
//         next()
//     }else{
//         next({path:'/login',query:{toPath:to.path}})
//     }
//   },
  beforeRouteUpdate(to, from, next) {
    console.log("my:beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("my:beforeRouteLeave");
    next();
  },
  beforeCreate() {
    console.log("my:beforeCreate");
  },
  created() {
    console.log("my:created");
  }
};
</script>

<style>
</style>
