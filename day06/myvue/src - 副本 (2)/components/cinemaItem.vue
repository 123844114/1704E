<template>
  <div class="cima-item">
    <h3 class="title">
      <span>{{options.nm}}</span>
      <span>{{options.sellPrice}}元起</span>
    </h3>
    <p class="info">
      <span>{{options.addr}}</span>
      <span>{{options.distance}}</span>
    </p>
    <p class="tag">
      <span>改签</span>
      <span>小吃</span>
      <span>折扣卡</span>
    </p>
  </div>
</template>

<script>
export default {
  props:['options']
};
</script>

<style scoped lang='scss'>
.cima-item {
  border-bottom: 1px solid #b1afaf;
  padding: 10px;
  .title {
    display: flex;
    // justify-content: space-between;
    span:last-child {
      color: red;
      margin-left: 50px;
    }
  }
  .info{
     display: flex;
    justify-content: space-between; 
  }
}
.tag {
  span {
    display: inline-block;
    padding: 3px;
    border: 1px solid #009688;
    margin: 0 2px;
    font-size: 12px;
  }
}
</style>
