<template>
  <div class="detail">
    <div v-if='movieDetail.img'>
      <!-- 顶部 -->
      <div class="de-top">
        <img :src="movieDetail.img" alt />
        <div>
          <p>{{movieDetail.nm}}</p>
          <p>{{movieDetail.enm}}</p>
          <p>{{movieDetail.cat}}</p>
          <p>{{movieDetail.pubDesc}}</p>
        </div>
      </div>
      <!-- 工具条 -->
      <div class="toolbar"></div>
      <!-- 列表区域 -->
      <div class="de-list"></div>
    </div>
    <div v-else>
      兜底
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    //获取vuex中的数据
    ...mapState(["movieDetail"])
  },
  created() {
    this.getDetailData(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getDetailData"])
  }
};
</script>

<style scoped lang='scss'>
.de-top {
  height: 188px;
  background: #333;
  display: flex;
  color: #fff;
}
.toolbar {
  height: 40px;
  background: red;
  position: sticky; //吸顶
  top: 0;
}
.de-list {
  height: 1900px;
}
</style>
