<template>
  <div>
    <img :src="'static/images/detail/'+data.detailImg" alt />
    <p><span>{{data.nowPrice}}元</span></p>
  </div>
</template>

<script>
import detailJson from "../data/detail.json";
export default {
  data() {
    return {
      detailJson,
      data: {}
    };
  },
  beforeCreate() {
    console.log("detail:beforeCreate");
  },
  created() {
      this.$bus.$on('toEvent',(v)=>{console.log(v)})
    console.log("detail:created");
    let id = this.$route.params.id;
    this.data = this.detailJson.detailList[id];
  },
  beforeMount() {
    console.log("detail:beforeMount");
  },
  mounted() {
    console.log("detail:mounted");
  },
  updated() {
    console.log("detail:updated");
  },
  destroyed() {
    console.log("detail:destroyed");
  }
};
</script>

<style scoped lang='scss'>
img{
    width: 100%
}
</style>
