<template>
  <div>
    <Item v-for="(item,index) in data.list" :key="index" :options="item" />
  </div>
</template>

<script>
import Item from "@/components/item";
export default {
  components: { Item },
  props: ["data"],
  beforeCreate() {
    console.log("home:beforeCreate");
  },
  created() {
    console.log("home:created");
  },
  beforeMount() {
    console.log("home:beforeMount");
  },
  mounted() {
    console.log("home:mounted");
  },
  updated() {
    console.log("home:updated");
  },
  destroyed() {
      this.$bus.$emit('toEvent',this.data.list)
    console.log("home:destroyed");
  }
};
</script>

<style scoped lang='scss'>
</style>
