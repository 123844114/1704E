<template>
    <div class="box-item">
        <div class="top" :style="{background:options.bgcolor}">
            <b>￥ {{options.price}}</b>
            <b>{{options.type}}</b>
        </div>
        <div class="bottom">
            <p>使用门槛：{{options.desc}}</p>
            <p>使用时间：{{options.desc}}</p>
        </div>
    </div>
</template>

<script>
export default {
props:['options']
}
</script>

<style scoped>
.box-item{
        width: 90%;
    margin-left: 5%;
        margin-top: 20px;
}
.top{
    height: 70px;
    background: red
}
p{overflow: hidden;/*超出部分隐藏*/
    text-overflow:ellipsis;/* 超出部分显示省略号 */
    white-space: nowrap;/*规定段落中的文本不进行换行 */
    width: 100%;/*需要配合宽度来使用*/}
</style>
