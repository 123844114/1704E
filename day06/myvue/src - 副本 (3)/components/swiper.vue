<template>
  <div class="swiper-main">
    <!-- {{bannerJson}} -->
    <div class="tabbar">
        <span v-for="(item,index) in BannerList" :key='index' @click="tabFn(index)" :class="{active:currentIndex==index}">{{item.Linkage}}</span>
    </div>
    <swiper :options="swiperOption" ref="mySwiper" @touchStart='changeTab'>
      <!-- slides -->
      <swiper-slide v-for="(item,index) in BannerList" :key="index">
        <img :src="item.ImageUrl" alt @click="$router.push('/list/'+item.LabelName)"/>
        <div class="txt">
          <p>{{item.LabelName}}</p>
          <p>{{item.Desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      swiperOption: {
        //轮播图的配置项
        loop: true
      },
      currentIndex:0
    };
  },
  computed: {
    ...mapGetters(["BannerList"])
  },
  components: { swiper, swiperSlide },
  created() {
    this.getBannerJson();
  },
  methods: {
    ...mapActions(["getBannerJson"]),
    changeTab(){
        console.log(this.$refs.mySwiper.swiper.activeIndex)
        this.currentIndex=this.$refs.mySwiper.swiper.activeIndex+1
    },
    tabFn(index){
        this.currentIndex=index
        this.$refs.mySwiper.swiper.slideTo(index, 1000, false)
    }
  }
};
// 调接口 actions,生命周期中调接口，
//拿数据 state-》bannerJson
</script>

<style scoped lang='scss'>
.swiper-slide {
  img {
    width: 80%;
    margin-left: 10%;
    border-radius: 10px
  }
  .txt {
    position: absolute;
    bottom: 40%;
    color: #fff;
    text-align: center;
    width: 100%;
  }
}
.tabbar{
    display: flex;
    justify-content: space-between
}
.active{color: red}
</style>
