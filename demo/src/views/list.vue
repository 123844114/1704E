<template>
  <div class="list">
    <!-- {{list}} -->
    <header>&lt;选择参与投票的商户</header>
    <listItem v-for="(item,index) in list" :key="index" :options="item" :index="index" />
    <myfooter />
    <cover v-if='show'/>
  </div>
</template>

<script>
import cover from "../components/cover";
import listItem from "../components/listItem";
import myfooter from "../components/footer";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["list",'show'])
  },
  components: { listItem, myfooter, cover },
  created() {
    this.getList();
  },
  methods: {
    ...mapActions(["getList"])
  }
};
</script>

<style scoped lang='scss'>
header {
  height: 60px;
  line-height: 60px;
  background: #df3956;
  font-size: 20px;
  color: #e8e3e3;
}
</style>
