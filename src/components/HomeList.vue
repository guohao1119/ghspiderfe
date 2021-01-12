<template>
  <div class="list">
    <div class="title">
      <img class="icon" :src="imgUrl">
      <span class="titletext">{{title}}</span>
    </div>
    <ul class="infolist">
      <li class="item" v-for="(item, index) in data" :key="index">
        <span class="index">{{index+1}}</span>
        <p class="info">{{item.title}}</p>
        <p class="rate">{{item.rate || ''}}</p>
      </li>
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
      imgUrl: {
        type: String,
        default: ''
      },
      iconColor: {
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
    methods: {
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
      display: flex;
      .icon {
        width: 20px;
      }
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
      .item {
        display: flex;
        font-size: 14px;
        cursor: pointer;
        .info {
          color: #0078b6;
        }
        .rate {
          margin-left: 5px;
          color: #e09015;
        }
      }
      .index {
        color: red;
        display: inline-block;
        width: 20px;
        text-align: center;
      }
    }
  }
</style>