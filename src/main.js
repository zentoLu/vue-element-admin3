import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/scss/index.scss'
import '@/assets/css/app.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css
import './config'
import App from './App'
import router from './router'
import store from './store'

import httpRequest from '@/utils/httpRequest' // api: https://github.com/axios/axios
import { isAuth } from '@/utils'
import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog' // error log
import './permission' // permission control
// import './mock' // simulation data
import VueCookie from 'vue-cookie' // api: https://github.com/alfhen/vue-cookie

import * as filters from './filters' // global filters
Vue.use(VueCookie)
Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

// 挂载全局
Vue.prototype.$http = httpRequest // ajax请求方法
Vue.prototype.isAuth = isAuth // 权限方法

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
