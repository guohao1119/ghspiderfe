<template>
  <div class="item">
    <img :src="data.poster" width="120" height="161" alt="">
    <p class="title">{{data.title}}<span>{{data.rate}}</span></p>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {
          return {}
        }
      },
    },
    mounted () {
      console.log(this.data)
    },
  }
</script>

<style lang="scss" scoped>
  .item {
    margin: 0 25px 10px 0;
    .title {
      text-align: center;
      span {
        color: #e09015;
      }
    }
  }
</style>