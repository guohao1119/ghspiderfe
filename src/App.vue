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
import CommonHeader from '@/components/Header.vue'
import CommonFooter from '@/components/Footer.vue'
export default {
  components: {
    CommonHeader,
    CommonFooter
  }
}
</script>

<style lang="scss">
  .content {
    padding-top: 80px;
  }
</style>
