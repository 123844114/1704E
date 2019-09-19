<template>
    <div>{{arr}}</div>
</template>

<script>
export default {
data(){
    return{
        arr:JSON.parse(localStorage.list)
    }
},
// created(){
//    this.arr=JSON.parse(localStorage.list)
// }
}
</script>

<style>

</style>
