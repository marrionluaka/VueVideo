import Vue from "vue"
import VueCompositionApi from '@vue/composition-api'

import App from "./App.vue"
import store from "./store"
import './assets/styles/index.css'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")
