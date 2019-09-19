<template>
  <div>
    <p class="toolbar">
      <span
        v-for="(item,index) in toolbar"
        :key="index"
        @click="toolbarFn(index)"
        :class="{active:currentIndex===index}"
      >{{item}}</span>
    </p>
    <div ref="wrapper" class="wrapper">
      <div class="content">
        <listItem v-for="(item,index) in listJson" :key="index" :options="item" />
        <p><span class="iconfont icon-91jiazai"></span>加载中...</p>
      </div>
    </div>
  </div>
</template>

<script>
import listItem from "@/components/listItem";
import BScroll from "better-scroll";
//辅助函数
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      toolbar: ["综合", "销量", "价格", "最新"],
      currentIndex: 0, //下标
      scroll: null,
      pageSize:5,
      pageNum:1
    };
  },
  computed: {
    ...mapState(["listJson"])
  },
  components: { listItem },
  created() {
    this.getListJson({pageSize:this.pageSize,pageNum:this.pageNum});
  },
  mounted() {
    this.$nextTick(()=>{
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:true,
        tap:true,
      pullUpLoad: {
        threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
      }
    });
    //监听pullingUp事件
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载");
      //上拉加载时，重新调接口，同时pageNum++
      this.pageNum++
      this.getListJson({pageSize:this.pageSize,pageNum:this.pageNum});
      this.scroll.finishPullUp() //必须加上这一句，说明上一次加载已完成，可以进行下一次加载
    });
    })
  },
  methods: {
    toolbarFn(index) {
      this.currentIndex = index;
      if (index === 0) {
        //综合，从接口中重新拿
        this.getListJson();
      }
      // 如果点击的是销量
      if (index == 1) {
        this.sortFn();
      }
      if (index == 2) {
        //价格排序
        this.sortPrice();
      }
    },
    sortPrice() {
      //价格排序
      this.listJson.sort((a, b) => {
        return a.Price - b.Price;
      });
    },
    sortFn() {
      //销量的排序
      this.listJson.sort((a, b) => {
        return this.saleFormat(a) - this.saleFormat(b);
      });
    },
    saleFormat(a) {
      //销量数字格式化
      return a.Sales.includes("万")
        ? parseFloat(a.Sales) * 10000
        : parseFloat(a.Sales);
    },
    ...mapActions(["getListJson"])
  }
};
</script>

<style scoped lang='scss'>
.toolbar {
  display: flex;
  line-height: 40px;
  justify-content: space-around;
}
.active {
  color: red;
}
.wrapper {
  display: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 505px;
  overflow: hidden;
}
@keyframes myloading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: myloading 2s infinite;
}
</style>
