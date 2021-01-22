import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import '@/assets/fonts/test/style.css'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
