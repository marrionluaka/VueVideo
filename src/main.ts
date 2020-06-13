import Vue from "vue"
import VueCompositionApi from '@vue/composition-api'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faCheck } from '@fortawesome/free-solid-svg-icons'

import App from "./App.vue"
import store from "./store"
import './assets/styles/index.css'

library.add(faPlay, faCheck)

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")
