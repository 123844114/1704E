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
  created() {
    let id = this.$route.params.id;
    //调接口获取详情
    this.$axios.post('/detail',{id:id}).then(({data})=>{
      console.log(data)
      this.data=data
    })
    // this.data = this.detailJson.detailList[id];
  }
};
</script>

<style scoped lang='scss'>
img{
    width: 100%
}
</style>
