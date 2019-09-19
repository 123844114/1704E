<template>
  <div>
    a
    <input type="text" v-model="a" v-focus:click.stop='show' v-on:click.stop='show'>
  </div>
</template>

<script>
export default {
    name:'mya',
  data() {
    return {
      a: ""
    };
  },
  methods:{
      show(){
          alert(1)
      }
  },
  directives:{
      focus:{
          bind:(el,binding)=>{
              console.log(el,binding)
              el.style.borderColor='red'
          },
          inserted:(el)=>{
              console.log(el)
              el.focus()
          }
      }
  },
  beforeCreate(){
      console.log('a:beforeC')
  },
  created(){
      console.log('a:created')
  },
  beforeMount(){
      console.log('a:beforeMount')
  },
  mounted(){
      console.log('a:mounted')
  },
  beforeUpdate(){
      console.log('a:beforeUpdate')
  },
  updated(){
      console.log('a:updated')
  },
  beforeDestroy(){
     console.log('a:beforeDestroy') 
  },
  destroyed(){
      console.log('a:destroyed')
  },
  activated() {
    console.log("a:actived");
  },
  deactivated() {
    console.log("a:deactived");
  }
};
</script>

<style>
</style>
