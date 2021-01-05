import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Carousel, CarouselItem } from 'element-ui';

import '@/assets/css/common.css'

Vue.config.productionTip = false

Vue.use(Carousel)
Vue.use(CarouselItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
