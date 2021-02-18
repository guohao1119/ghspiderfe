<template>
  <div>
    <el-input class="input" v-model="companyName" placeholder="请输入要查询的公司名称"></el-input>
    <el-button type="primary" @click="onSearch">查询</el-button>
    <!-- <el-button type="primary" @click="onDownload('zxgk')" v-show="isShow">下载</el-button> -->
    <ul class="ul-result">
      <li v-for="(item, key) in fileList" :key="key">
        <p>{{item}} <a class="download-link" target="_blank" :href="download(item)">下载</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/utils/axios'
export default {
  data() {
    return {
      companyName: '',
      isShow: true,
      fileList: []
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
      this.fileList = []
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
      this.fileList = res.data
    },
    download(item) {
      // python后台路径
      return 'http://127.0.0.1:5000/download?filepath=' + item
    }
  }
}
</script>

<style lang="scss" scoped>
  .input {
    width: 300px;
    margin: 30px;
  }
  .ul-result {
    margin: 0 30px;
    font-size: 18px;
  }
  .download-link {
    margin-left: 30px;
  }
</style>