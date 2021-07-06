import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './router/routerRight'
import reg from './components/height/reg'

Vue.config.productionTip = false
Vue.use(reg)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
