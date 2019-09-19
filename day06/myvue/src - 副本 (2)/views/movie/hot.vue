<template>
  <div class='hot'>
      <!-- {{movieList}} -->
      <hotItem v-for="(item,index) in movieList" :key="index" :options="item"/>
  </div>
</template>

<script>
import hotItem from '@/components/hotItem'
import {mapState, mapActions } from "vuex";
export default {
  computed: {
      ...mapState(['movieList'])
  },
  created() {
    // this.$store.dispatch("getMovieList");
    this.getMovieList();
  },
  methods: {
    ...mapActions(["getMovieList"])
  },
  components:{hotItem}
};
</script>

<style>
</style>
