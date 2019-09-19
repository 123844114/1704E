<template>
  <dl>
    <dt>
      <img :src="options.img" alt  style="width:80%"/>
    </dt>
    <dd>
      <p>{{options.nm}}</p>
      <p>观众评{{options.sc}}</p>
      <p>主演：{{options.star}}</p>
    </dd>
    <dd>
      <button v-if='options.preShow' :class="{red:options.preShow}" @click="goToDetail">购票</button>
      <button v-else @click="goToDetail">预售</button>
    </dd>
  </dl>
</template>

<script>
export default {
    props:['options'],
    methods:{
      /**
       * 跳到详情页
       */
      goToDetail(){
        this.$router.push({path:`/detail/${this.options.id}/${this.options.nm}`})
      }
    }
};
</script>

<style scoped lang='scss'>
dl {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid red;
}
.red{
    background: red
}
</style>
