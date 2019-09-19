<template>
  <div class="list">
    <!-- {{datalist}} -->
    <ListItem v-for="item in datalist" :key='item.id' :options='item'/>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
export default {
  props:['datalist'],
  components:{ListItem}
};
</script>

<style>
</style>
