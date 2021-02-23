<template>
  <div>
    <el-input class="input" v-model="companyName" placeholder="请输入要查询的公司名称"></el-input>
    <el-button type="primary" @click="onSearch">查询</el-button>
    <ul class="ul-result" v-show="isShow">
      <li v-for="(item, key) in fileList" :key="key">
        <p>{{item}} <a :ref="'link' + key" class="download-link" target="_blank" :href="download(item, key)">下载</a></p>
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
      isShow: false,
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
      const loading = this.$loading({
        lock: true,
        text: '正在为您查询该公司的相关信用信息，请耐心等候~',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      const res = await axios({
        url: 'info_search',
        params: {
          companyName: this.companyName
        }
      })
      loading.close();
      if (res.code !== 0 || res.data.length === 0) return
      this.isShow = true
      this.fileList = ['全部', ...res.data]
      this.$nextTick(() => {
        this.$refs['link0'][0].click()
      })
    },
    download(item, key) {
      // python后台路径
      if (key === 0) return 'http://127.0.0.1:5000/download_zip?filepath=zip/download_zip'
      return 'http://127.0.0.1:5000/download?filepath=result/' + item + '.png'
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