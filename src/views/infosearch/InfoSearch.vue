<template>
  <div>
    <el-input class="input" v-model="companyName" placeholder="请输入要查询的公司名称"></el-input>
    <el-button type="primary" @click="onSearch">查询</el-button>
    <el-button type="primary" @click="onDownload('zxgk')" v-show="isShow">下载</el-button>
  </div>
</template>

<script>
import axios from '@/utils/axios'
export default {
  data() {
    return {
      companyName: '',
      isShow: true
    }
  },
  methods: {
    onSearch() {
      if (!this.companyName) {
        this.$message({
          message: '请先输入公司名称',
          type: 'error'
        })
        return
      }
      this.getData()
    },
    async getData() {
      const res = await axios({
        url: 'info_search',
        params: {
          companyName: this.companyName
        }
      })
      if (res.code !== 0) return
      this.isShow = true
      console.log(res)
    },
    async onDownload(path) {
      const res = await axios({
        url: 'download',
        params: {
          filepath: path,
          time: new Date().getMilliseconds()
        }
      })
      window.open(res, '_blank')
      // if (res.code !== 0) return
    }
  }
}
</script>

<style lang="scss" scoped>
  .input {
    width: 300px;
    margin: 30px;
  }
</style>