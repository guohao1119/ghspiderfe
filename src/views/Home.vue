<template>
  <div class="home">
    <carousel></carousel>
    <div class="home-list">
      <home-list title="热门电影" icon="el-icon-video-camera-solid" :data="movieList"></home-list>
      <home-list title="热门电视剧" icon="el-icon-video-camera-solid" :data="tvlist"></home-list>
      <home-list title="微博热搜" icon="el-icon-video-camera-solid" :data="weibolist"></home-list>
      <home-list title="最新日报" icon="el-icon-video-camera-solid" :data="zhihulist"></home-list>
      <home-list title="最新博客" icon="el-icon-video-camera-solid" :data="juejinlist"></home-list>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import HomeList from '@/components/HomeList.vue'
import axios from '@/utils/axios'

export default {
  name: 'Home',
  components: {
    Carousel,
    HomeList
  },
  data() {
    return {
      showNumber: 10,
      movieList: [],
      tvlist: [],
      weibolist: [],
      zhihulist: [],
      juejinlist: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData() {
      this.getDataOfMovie()
      this.getDataOfTV()
      this.getDataOfWeibo()
      this.getDataOfZhihu()
      this.getDataOfJuejin()
    },
    async getDataOfMovie() {
      const res = await axios({
        url: 'movielist'
      })
      this.movieList = this.getShowData(res.data)
    },
    async getDataOfTV() {
      const res = await axios({
        url: 'tvlist'
      })
      this.tvlist = this.getShowData(res.subjects)
    },
    async getDataOfWeibo() {
      const res = await axios({
        url: 'weibolist'
      })
      this.weibolist = this.getShowData(res.data)
    },
    async getDataOfZhihu() {
      const res = await axios({
        url: 'zhihulist'
      })
      this.zhihulist = this.getShowData(res.data)
    },
    async getDataOfJuejin() {
      const res = await axios({
        url: 'juejinlist',
        method: 'post'
      })
      this.juejinlist = this.getShowData(res.data)
    },
    getShowData(data) {
      return data.length > this.showNumber ? data.slice(0, this.showNumber) : data
    }
  },
}
</script>

<style lang="scss" scoped>
  .home-list {
    display: flex;
    justify-content: space-evenly;
  }
</style>
