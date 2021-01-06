<template>
  <div id="app">
    <common-header></common-header>
    <div class="content">
      <router-view/>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import axios from '@/utils/axios'
import CommonHeader from '@/components/Header.vue'
import CommonFooter from '@/components/Footer.vue'
export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData() {
      const res = await axios({
        url: 'list'
      })
      console.log(res)
    }
  },
}
</script>

<style lang="scss">
  .content {
    padding-top: 80px;
  }
</style>
