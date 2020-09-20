import '@fortawesome/fontawesome-free/scss/fontawesome'
import '@fortawesome/fontawesome-free/scss/brands'
import '@fortawesome/fontawesome-free/scss/regular'
import '@fortawesome/fontawesome-free/scss/solid'
import 'animate.css/animate.css'
import '@/main.scss'

import Vue from 'vue'
import ElementUI from 'element-ui'

import VueMq from 'vue-mq'
import CompositionApi from '@vue/composition-api'

import { sync } from 'vuex-router-sync'

import App from '@/App'
import router from '@/router'
import store from '@/store'

Vue.use(CompositionApi)
Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(VueMq, {
  breakpoints: {
    narrow: 1260,
    lg: 1900,
    xl: Infinity
  }
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
