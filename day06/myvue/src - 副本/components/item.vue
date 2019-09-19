// 此处为文档注释
/**
*作者：
*日期：
*功能： 列表组件
*/
<template>
  <dl @click="goDetail">
    <dt>
      <img :src="'static/images/'+options.frontImg" alt />
    </dt>
    <dd>
      <h3>{{options.name}}</h3>
      <p>{{options.address}}{{options.description}}</p>
      <p class="bot">
        <span class="price">{{options.nowPrice}}元</span>
        <span class="sale">{{options.saleNum}}</span>
      </p>
    </dd>
  </dl>
</template>

<script>
export default {
  props: ["options"],
  methods:{
      /**
       * 跳到详情页
       */
      goDetail(){
        this.$router.push('/detail/'+this.options.id)
        // this.$router.push({path:'/detail',query:{id:this.options.id,name:this.options.name}})
        // this.$router.push({name:'detail',params:{id:this.options.id,name:this.options.name}})
        
      }
  }
};
</script>

<style lang='scss' scoped>
dl {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  dd {
    flex: 2;
  }
  .price {
    color: #04bcd4;
  }
  .bot {
    display: flex;
    justify-content: space-between;
  }
}
</style>
