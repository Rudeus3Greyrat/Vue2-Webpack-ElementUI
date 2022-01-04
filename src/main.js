import Vue from 'vue'

import 'normalize.css' // a modern alternative to CSS resets

import './plugins/element.js'

import './styles/element-variables.scss'
import './styles/theme/index.css'
import './styles/index.scss'  // global css

import App from './App.vue'
import store from './store'
import router from './router'

import '@/utils/compatible'

import './icons' // icon
import './permission' // permission control


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
