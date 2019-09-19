<template>
  <div id="app">
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import myheader from '@/components/header'

export default {
  components:{myheader}
};
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
  flex: 1;
  overflow-y: auto
}
</style>
