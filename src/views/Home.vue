<template>
  <div class="home">
    <carousel :dataList="sliderDataList"></carousel>
    <div class="home-list">
      <home-list title="热门电影" :imgUrl="require('@/assets/images/icon/movie.svg')" :data="movieList"></home-list>
      <home-list title="热门电视剧" :imgUrl="require('@/assets/images/icon/tv.svg')" :data="tvlist"></home-list>
      <home-list title="微博热搜" :imgUrl="require('@/assets/images/icon/weibo.svg')" :data="weibolist"></home-list>
      <home-list title="最新日报" :imgUrl="require('@/assets/images/icon/zhihu.svg')" :data="zhihulist"></home-list>
      <home-list title="最新博客" :imgUrl="require('@/assets/images/icon/juejin.svg')" :data="juejinlist"></home-list>
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
      sliderDataList: [],
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
      this.getSliderData()
      this.getDataOfMovie()
      this.getDataOfTV()
      this.getDataOfWeibo()
      this.getDataOfZhihu()
      this.getDataOfJuejin()
    },
    async getSliderData() {
      const res = await axios({
        url: 'sliderdatalist'
      })
      console.log(res)
      // this.sliderDataList = []
      // res.data.forEach(item => {
      //   this.sliderDataList.push()
      // });
      this.sliderDataList = res.data
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
