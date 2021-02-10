<template>
  <div id="app">
    <common-header></common-header>
    <div class="content" :style="{height: contentHeight + 'px'}">
      <router-view/>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/Header.vue'
import CommonFooter from '@/components/Footer.vue'
export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  data() {
    return {
      contentHeight: 0
    }
  },
  mounted() {
    this.setContentHeight()
    this.resize()
  },
  methods: {
    setContentHeight() {
      this.contentHeight = window.innerHeight - 220
    },
    resize() {
      window.addEventListener('resize', () => {
        this.contentHeight = window.innerHeight - 220
      })
    }
  }
}
</script>

<style lang="scss">
  .content {
    padding-top: 80px;
  }
</style>
