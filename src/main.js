import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Carousel, CarouselItem, Message, MessageBox } from 'element-ui';

import '@/assets/css/common.css'
import '@/assets/icon/iconfont.css'

Vue.config.productionTip = false

Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
