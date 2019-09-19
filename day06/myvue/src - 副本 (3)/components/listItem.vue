<template>
    <dl>
        <dt><img :src="options.Image" alt=""></dt>
        <dd>
            <p>{{options.Name}}</p>
            <p>{{options.Introduction}}</p>
            <p><span>￥{{options.Price}}</span><span>￥{{options.LinePrice}}</span></p>
            <p>已销售{{options.Sales}}</p>
        </dd>
    </dl>
</template>

<script>
export default {
    props:['options']

}
</script>

<style scoped lang='scss'>
dl{
    display: flex
}
dt{
    flex: 1;
    img{
        width: 100%
    }
}
dd{
    flex: 2
}
</style>
