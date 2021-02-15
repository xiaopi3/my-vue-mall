import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' //引入swiper样式，不同版本路径不一样.

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
