<template>
  <div class="layout">
    <router-view class="layout-main" />
    <myfooter />
  </div>
</template>

<script>
import myfooter from "@/components/footer";
export default {
  components: { myfooter }
};
</script>

<style scoped lang='scss'>
.layout {
  display: flex;
  flex-direction: column;
  .layout-main {
    overflow: auto;
    flex: 1;
  }
}
</style>
