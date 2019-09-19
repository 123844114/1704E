<template>
    <div class="listitem">
        <div class="img"><img :src='"static/images/"+options.src' alt=""></div>
        <div class="txt">
            <p>{{options.title}}</p>
            <div class="price"><span>￥{{options.price}}</span> 
            
                <p>
                    <button v-if='options.count' @click="sub(index)">-</button>
                    <span v-if='options.count'>{{options.count}}</span>
                    <button @click="add(options)">+</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
props:['options','index'],
methods:{
    ...mapMutations(['add','sub'])
}
}
</script>

<style scoped lang='scss'>
.listitem{
    display: flex;
    justify-content:space-between;
    padding-bottom: 10px;
    margin: 10px;
    border-bottom: 1px solid #ccc;
    .img{
        flex: 1;
        img{
            width:100%  
        }
    }
    .txt{
       flex: 2;
       margin-left: 20px
    }
}
.price{
    display: flex;
    justify-content: space-between
}
</style>
