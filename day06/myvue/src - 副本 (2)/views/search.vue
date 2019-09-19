<template>
  <div class="search">
    <input type="text" v-model="keyword" @input="getSearch" />
    <button @click='$router.back()'>取消</button>
    <cinemaItem v-for="item in newList" :key="item.id" :options="item" />
  </div>
</template>

<script>
import cinemaItem from "@/components/cinemaItem";
import { mapState } from "vuex";
export default {
  data() {
    return {
      keyword: "",
      newList: []
    };
  },
  components: { cinemaItem },
  computed: {
    ...mapState(["cinemaList"])
  },
  methods: {
    getSearch() {
      let keyword = this.keyword;
      this.newList = this.cinemaList.filter(item => item.nm.includes(keyword));
    }
  }
};
</script>

<style>
</style>
