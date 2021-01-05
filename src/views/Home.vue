<template>
  <div class="home">
    <carousel></carousel>
    <div class="home-list">
      <home-list title="最新电影" icon="el-icon-video-camera-solid"></home-list>
      <home-list title="最新电视剧" icon="el-icon-video-camera-solid"></home-list>
      <home-list title="最新微博" icon="el-icon-video-camera-solid"></home-list>
      <home-list title="最新知乎" icon="el-icon-video-camera-solid"></home-list>
      <home-list title="最新博客" icon="el-icon-video-camera-solid"></home-list>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import HomeList from '@/components/HomeList.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    HomeList
  }
}
</script>

<style lang="scss" scoped>
  .home-list {
    display: flex;
    justify-content: space-evenly;
  }
</style>
