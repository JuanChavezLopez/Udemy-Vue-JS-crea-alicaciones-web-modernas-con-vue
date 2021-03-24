import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store, /* viene a ser como un objeto global */
  render: h => h(App)
}).$mount('#app')
