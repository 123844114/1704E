<template>
  <div id="app">
    <Header class="header">{{$route.meta.title}}</Header>
    <router-view class="main" :data='dataJson'></router-view>
    <Footer class="footer" />
  </div>
</template>

<script>
import dataJson from './data/list.json'
import Header from "./components/header";
import Footer from "./components/footer";

export default {
  components: {
    Header,
    Footer
  },
  data(){
    return {
      dataJson
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #04bcd4;
  color: #fff;
}
.main {
  flex: 1;
  overflow-y: auto;
}
.footer {
  height: 50px;
  line-height: 25px;
  // background: #3ab4c4;
}
</style>
