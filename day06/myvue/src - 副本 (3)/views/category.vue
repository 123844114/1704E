<template>
  <div class="cata">
    <catagoryItem v-for='(item,index) in catagoryJson' :key='index' :pIndex='index' :options='item'/>
  </div>
</template>

<script>
import catagoryItem from "@/components/catagoryItem";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["catagoryJson"])
  },
  components: { catagoryItem }
};
</script>

<style>
</style>
