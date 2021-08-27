import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueBootstrap from "bootstrap-vue"

Vue.config.productionTip = false

new Vue({
  router,
  VueBootstrap,
  render: h => h(App)
}).$mount('#app')
