<template>
  <div class="cover">
    <div class="container">
        <listItem v-for="(item,index) in getShopData" :key='index' :options='item' :index='index'/>
    </div>
  </div>
</template>

<script>
import listItem from "./listItem";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getShopData"])
  },
  components: { listItem }
};
</script>

<style scoped lang='scss'>
.cover {
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  .container{
      background: #fff
  }
}
</style>
