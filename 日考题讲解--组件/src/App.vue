<template>
  <div id="app">
    <div class="tab-title">切换</div>
    <div class="tab-content">
      <BoxItem v-for="(item,index) in dataJson" :key="index" :options="item"></BoxItem>
    </div>
  </div>
</template>

<script>
import BoxItem from "@components/BoxItem";
import axios from "axios";
export default {
  data(){
    return{
      dataJson:null
    }
  },
  created() {
    //调接口
    axios.get('/list').then(({data})=>{
      this.dataJson=data
    })
  },
  components: { BoxItem }
};
</script>

<style scoped>
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.tab-title {
  height: 60px;
  background: pink;
}
.tab-content {
  flex: 1;
  overflow-y: auto;
}
</style>
