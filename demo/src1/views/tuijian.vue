<template>
  <div class="tj">
    <tuijianItem v-for="i in 5" :key="i" />
    <rightBar />
    <!-- 评论黑屏 -->
    <pinglunBox v-if="show" />
  </div>
</template>

<script>
import tuijianItem from "../components/tuijianItem";
import rightBar from "../components/rightBar";
import pinglunBox from "../components/pinglunBox.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["show"])
  },
  components: {
    tuijianItem,
    rightBar,
    pinglunBox
  },
  methods: {}
};
</script>

<style scoped lang='scss'>
</style>
