<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="(item, index) in carouselList" :key="index">
      <img class="item" :src="item.url" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    data() {
      return {
        carouselList: [
          { id: '', url: require('@/assets/images/homecarousle/1.webp') },
          { id: '', url: require('@/assets/images/homecarousle/2.webp') },
          { id: '', url: require('@/assets/images/homecarousle/3.webp') },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  height: 100%;
}
</style>