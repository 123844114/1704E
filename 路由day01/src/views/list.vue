<template>
    <div>
        {{$route.params.id}}
        <MyItem v-for="(item,index) in getList()" :key="index" :options="item"/>
    </div>
</template>

<script>
import listJson from '../data/csdn.json'
import MyItem from '../components/MyItem'
export default {
data(){
    return {
        listJson
    }
},
components:{
    MyItem
},
methods:{
    goPath(){
        alert()
        this.$router.push('/detail')
    },
    getList(){
      return  this.listJson.filter(item=>item.type===this.$route.params.id)
    }
}
}
</script>

<style>

</style>
