<template>
    <div class="dialog" v-show='show'>
        <div class="body">
            <span v-show='closable' @click="$parent.basicDialog.open=false">&times;</span>
            <h1 ref='title'>标题</h1>
            <slot/>
            <div >
                <button v-for="(item,index) in btns" :key="index" @click="item.handler">{{item.text}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
props:['show','btns','title','closable'],
methods:{
    demo(){
        console.log(this)
    }
},
mounted(){
    console.log(this.$refs)
}
}
</script>

<style scoped lang='scss'>
.dialog{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba($color: #000000, $alpha: 0.6);
    .body{
        width: 200px;
    height: 200px;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -100px;
    }
}
</style>
