<template>
  <div class="header">
    <a class="logo" alt="logo">
      <img alt="Vue logo" width="55" src="../assets/logo.png">
    </a>
    <div class="nav">
      <ul class="nav-ul">
        <li v-for="(item, index) in navItems" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navItems: ['首页', '电影', '电视', '博客', '知乎', '微博']
      }
    },
  }
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    background-color: #4185F2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .logo {
      width: 55px;
    }
    .nav-ul {
      display: flex;
      font-size: 16px;
      color: white;
      li {
        height: 80px;
        line-height: 80px;
        padding: 0 10px;
        margin-right: 30px;
        cursor: pointer;
      }
    }
  }
</style>