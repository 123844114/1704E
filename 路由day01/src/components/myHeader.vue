<template>
  <div class="header">
    <p class="logo">
      <img src="static/images/logo.png" alt />
      <input type="text" />
      <button>登陆</button>
    </p>
    <p class="link">
      <router-link to="/" tag="span">首页</router-link>
      <router-link to="/list/html" tag="span">html</router-link>
      <router-link to="/list/java" tag="span">java</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.header {
  // height: 120px;
  .logo {
    height: 27px;
    line-height: 27px;
    img {
      float: left;
    }
    button {
      float: right;
    }
  }
  .link {
    height: 24px;
    background: pink;
    display: flex;
    justify-content: space-around;
    line-height: 24px;
  }
}
</style>
