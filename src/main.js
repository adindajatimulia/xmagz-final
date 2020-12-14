import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import i18n from './i18n'
import axios from 'axios'
import SvgIcon from '@/components/SvgIcon.vue'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.component('svg-icon', SvgIcon);

window.vm = new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
