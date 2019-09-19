<template>
    <div>
        <input type="text" v-model="user">
        <button @click="submit">提交</button>
    </div>
</template>

<script>
export default {
data(){
    return{
        user:''
    }
},
methods:{
    submit(){
        let data = new Date()
        document.cookie=`user=${this.user};expires=${new Date()+1000*60*60*24}`
        console.log(document.cookie)
    }
}
}
</script>

<style>

</style>
