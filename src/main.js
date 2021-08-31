import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueBootstrap from 'bootstrap-vue'

import VeeValidate from 'vee-validate'

import msg from "./../pt_BR"

Vue.config.productionTip = false

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  
  dictionary: {

    pt_BR: {
      messages: msg
    }

  }

})

new Vue({
  router,
  VueBootstrap,
  render: h => h(App)
}).$mount('#app')
