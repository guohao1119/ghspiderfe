<template>
  <div>
    <ul class="list">
      <li v-for="(item, index) in movieList" :key="index">
        <movie-list-item :data="item"></movie-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/utils/axios'
import MovieListItem from '@/components/MovieListItem.vue'
  export default {
    components: {
      MovieListItem,
    },
    data() {
      return {
        movieList: []
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async getData() {
        const res = await axios({
          url: 'movielist'
        })
        this.movieList = res.data || []
      }
    },
  }
</script>

<style lang="scss" scoped>
  .list {
    margin: 10px auto;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>