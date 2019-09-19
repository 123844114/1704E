<template>
    <router-link :to="'/detail/'+options.id" tag='div'>
        <h1>{{options.title}}</h1>
        <p><span>{{options.author}}</span><span>{{options.count}}</span><span>{{options.date}}</span></p>
    </router-link>
</template>

<script>
export default {
props:['options']
}
</script>

<style>

</style>
