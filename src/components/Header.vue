<template>
  <div class="header">
    <a class="logo" alt="logo">
      <img alt="Vue logo" width="55" src="../assets/logo.png">
    </a>
    <div class="nav">
      <ul class="nav-ul">
        <li v-for="(item, index) in navItems" :key="index" @click="itemClick(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navItems: ['首页', '电影', '电视', '微博', '知乎', '掘金', '股市', '体育', '信息查询']
      }
    },
    methods: {
      itemClick(item) {
        if (item === '首页') {
          if (this.$route.name === 'Home') return
          this.$router.push({path: '/'})
          return
        }
        if (item === '电影') {
          if (this.$route.name === 'Movie') return
          this.$router.push({path: '/movie'})
          return
        }
        if (item === '信息查询') {
          if (this.$route.name === 'InfoSearch') return
          this.$router.push({path: '/infosearch'})
          return
        }
        this.$message({
          message: '功能开发中，敬请期待~',
          type: 'success'
        })
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
    // z-index: 9999;
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