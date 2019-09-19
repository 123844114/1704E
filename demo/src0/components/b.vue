<template>
  <div>{{b | fatter}}</div>
</template>

<script>
export default {
    data(){
        return {
            b:2
        }
    },
    filters:{ //自定义过滤器
        fatter:(value)=>{
          return  `￥${value.toFixed(1)}`
        }
    },
  beforeCreate() {
    console.log("b:beforeC");
  },
  created() {
    console.log("b:created");
  },
  beforeMount() {
    console.log("b:beforeMount");
  },
  mounted() {
    console.log("b:mounted");
  },
  beforeUpdate() {
    console.log("b:beforeUpdate");
  },
  updated() {
    console.log("b:updated");
  },
  beforeDestroy() {
    console.log("b:beforeDestroy");
  },
  destroyed() {
    console.log("b:destroyed");
  },
  activated() {
    console.log("b:actived");
  },
  deactivated() {
    console.log("b:deactived");
  }
};
</script>

<style>
</style>
