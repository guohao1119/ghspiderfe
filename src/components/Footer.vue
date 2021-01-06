<template>
  <div class="footer">
    <div class="div-links">
      <span class="title">友情链接：</span>
      <ul class="links">
        <li v-for="(item, index) in links" :key="index" @click="toLink(item.url)">{{item.label}}</li>
      </ul>
    </div>
    <div class="myinfo">
      <div class="ecode">
        <img width="80" src="@/assets/images/weixin.png" alt="作者微信">
      </div>
      <div class="info">
        <div class="email">个人邮箱：guoh@pcl.ac.cn</div>
        <div class="sourcecode">项目源码：
          <span class="link" @click="toCode(1)">前端</span>&nbsp;
          <span class="link" @click="toCode(2)">后端</span></div>
      </div>
      <div class="ask">
        提问
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {label: '豆瓣', url: 'https://www.douban.com/'},
          {label: '微博', url: 'https://weibo.com/'},
          {label: '知乎', url: 'https://www.zhihu.com/'},
          {label: '掘金', url: 'https://juejin.cn/'},
          {label: '股市', url: 'http://stock.eastmoney.com/'},
          {label: '体育', url: 'https://www.zhibo8.cc/'}
        ]
      }
    },
    methods: {
      toLink(url) {
        window.open(url, '_blank')
      },
      toCode(type) {
        window.open(type === 1 ? 'https://github.com/guohao1119/ghspiderfe': 'https://github.com/guohao1119/ghspiderbe', '_blank')
      }
    },
  }
</script>

<style lang="scss" scoped>
  .footer {
    .div-links {
      height: 40px;
      line-height: 40px;
      background: #424242;
      font-size: 14px;
      color: rgb(153,153,153);
      font-family: "微软雅黑";
      font-weight: lighter;
      display: flex;
      padding-left: 15px;
      .links {
        display: flex;
        li {
          padding: 0 10px;
          cursor: pointer;
        }
      }
    }
    .myinfo {
      display: flex;
      height: 100px;
      background-color: #333333;
      justify-content: space-evenly;
      align-items: center;
      color: #999999;
      .link {
        cursor: pointer;
      }
    }
  }
</style>