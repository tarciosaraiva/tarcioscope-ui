import Vue from 'vue'
import 'normalize.css'
import VueProgressbar from 'vue-progressbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera, faCog } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import store from './store'
import App from './components/App.vue'

Vue.use(VueProgressbar, { color: '#ffb347' })

library.add(faCamera)
library.add(faCog)
Vue.component('font-awesome-icon', FontAwesomeIcon)


export default new Vue({ // eslint-disable-line
  el: '#app',
  store,
  render: h => h(App)
})

if (module.hot) {
  module.hot.accept()
}
