import '@/bs.scss'
import '@fortawesome/fontawesome-free/scss/fontawesome'
import '@fortawesome/fontawesome-free/scss/brands'
import '@fortawesome/fontawesome-free/scss/regular'
import '@fortawesome/fontawesome-free/scss/solid'
import 'animate.css/animate.css'
import '@/main.scss'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import Vue from 'vue'
import ElementUI from 'element-ui'

import VueMq from 'vue-mq'
import CompositionApi from '@vue/composition-api'

import { sync } from 'vuex-router-sync'

import i18n from '@/i18n'

import App from '@/App'
import router from '@/router'
import store from '@/store'
import { NODE_ENV, DEV_TOOL } from '@/env'

const HIDE_DEV_TOOL = NODE_ENV === 'production' && !DEV_TOOL
Vue.config.silent = HIDE_DEV_TOOL
Vue.config.debug = !HIDE_DEV_TOOL
Vue.config.devtools = !HIDE_DEV_TOOL
Vue.config.productionTip = !HIDE_DEV_TOOL

if (NODE_ENV === 'production') {
  OfflinePluginRuntime.install()
}

Vue.use(CompositionApi)
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
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
  i18n,
  render: h => h(App)
})

/**
 * Router inteceptions
 */
router.beforeEach((to, from, next) => {
  console.log(vm)
  next()
})
