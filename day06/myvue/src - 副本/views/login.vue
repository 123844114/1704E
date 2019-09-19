<template>
    <div>
        <input type="text" v-model="user">
        <input type="text" v-model="pwd">
        <button @click="submit">登陆</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:'',
            pwd:''
        }
    },
methods:{
    submit(){
        if(this.user){
           localStorage.user=this.user
           this.$router.push(this.$route.query.toPath)
        }
    }
}
}
</script>

<style>

</style>
