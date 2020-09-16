import Vue from 'vue'
import VueI18n from 'vue-i18n'

// import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import * as cn from './cn'
// import * as en from './en'

Vue.use(VueI18n)

const messages = {
  // en: {
  //   ...en,
  //   ...enLocale
  // },
  cn: {
    ...cn,
    ...zhLocale
  }
}

const DEFAULT_LANG = 'cn'

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  messages
})

export default i18n
