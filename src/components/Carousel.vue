<template>
  <div style="width:100%;margin:10px auto;height:400px">
    <slider ref="slider" :options="options">
      <slideritem v-for="(item,index) in list" :key="index" :style="item.style">
        <img :src="item.img_url" alt="">
      </slideritem>
    </slider>
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
  components: {
    slider,
    slideritem
  },
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      options: {
        autoplay: 5000,
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 300,
        infinite: 5,
        slidesToScroll: 5,
        loop: true
      },
    }
  },
  computed: {
    list() {
      this.dataList.forEach(element => {
        element.style = {
          'width': '18%',
          'margin-right': '2%'
        }
      })
      return this.dataList
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