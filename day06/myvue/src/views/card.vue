<template>
    <div class="card">
        <myHeader/>
        {{counter}}
        <div class="content">
          <h4 v-if="currentData">{{currentData.question}}</h4>
          <ul>
            <template v-if="currentData">
              <li v-for="(item,index) in currentData.allAnswer" :key="index"  @click="answerFn(item)">
              <span class="dot" v-if="item.isok===null"></span>
              <span class="dot" v-if="item.isok===true" style="background:green;color:#fff">√</span>
              <span class="dot" v-if="item.isok===false" style="background:red;color:#fff">×</span>
              {{item.key}}.{{item.value}}
            </li>
            </template>
          </ul>
        </div>
        <myFooter/>
    </div>
</template>

<script>
import myHeader from '../components/header'
import myFooter from '../components/footer'
import {mapState,mapActions, mapMutations} from 'vuex'
export default {
  data(){
    return{
      // counter:0
    }
  },
  computed:{
    ...mapState(['dataJson','counter']),
    currentData(){
      return this.dataJson[this.$route.params.id]
    }
  },
components:{
  myHeader, myFooter 
},
created(){
  console.log('created')
  this.getList()
},
// beforeRouteUpdate(to,from,next){
//   this.isAnswerd=false
//   console.log('beforeRouteUpdate')
//   next()
// },
methods:{
  ...mapActions(['getList']),
  ...mapMutations(['setCounter']),
  /**
   * 选择答案
   */
  answerFn(item){
    if(this.currentData.isAnswerd){return}
    this.currentData.isAnswerd=true
    if(item.key===this.currentData.answer){
      item.isok=true
      // this.counter++
    // this.setCounter()
    let counter = localStorage.counter
    counter++
    localStorage.counter=counter
    }else{
      item.isok=false
    }
  }
}
}
</script>

<style scoped lang='scss'>
.card{
  display:flex;
  flex-direction: column;
  .content{
    flex:1;
    overflow: hidden;
  }
}
.dot{
  border: 1px solid #8a8686;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
</style>
