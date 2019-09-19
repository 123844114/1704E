<template>
  <div id="app">
    <router-view :datalist='data'/> 
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:[],
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData(){
      this.$axios.get('/list').then(({data})=>{
        this.data=data.data
      })
    }
  }
};
</script>

<style scoped lang='scss'>
#app {
  display: flex;
  .main {
    width: 800px;
    margin: 0 auto;
  }
}
</style>
