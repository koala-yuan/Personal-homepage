import '@fortawesome/fontawesome-free/scss/fontawesome'
import '@fortawesome/fontawesome-free/scss/brands'
import '@fortawesome/fontawesome-free/scss/regular'
import '@fortawesome/fontawesome-free/scss/solid'
import 'animate.css/animate.css'
import '@/main.scss'

import Vue from 'vue'
import ElementUI from 'element-ui'

import { sync } from 'vuex-router-sync'

import App from '@/App'
import router from '@/router'
import store from '@/store'

Vue.prototype.BASE_ASSETS_URL = 'https://lingyun-1303231715.cos.ap-chengdu.myqcloud.com'

Vue.use(ElementUI, {
  size: 'small'
})

sync(store, router, { moduleName: 'route' })

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

/**
 * Router inteceptions
 */
router.beforeEach((to, from, next) => {
  console.log(vm)
  next()
})
