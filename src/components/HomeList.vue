<template>
  <div class="list">
    <div class="title">
      <i :class="icon"></i>
      <span class="titletext">{{title}}</span>
    </div>
    <ul class="infolist">
      <li v-for="(item, index) in data" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      data: {
        type: Array,
        default: () => {
          return []
        }
      }
    },

  }
</script>

<style lang="scss" scoped>
  .list {
    min-height: 282px;
    // margin: 0 16px 16px 0;
    border: 1px #e5e5e5 solid;
    background: #FFF;
    padding: 5px 12px;
    float: left;
    .title {
      border-bottom: 1px #e5e5e5 solid;
      .titletext {
        font-size: 14px;
        color: red;
      }
    }
    .infolist {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
</style>