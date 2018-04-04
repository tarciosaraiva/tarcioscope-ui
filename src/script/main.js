import Vue from 'vue'
import 'normalize.css'
import VueProgressbar from 'vue-progressbar'

import store from './store'
import App from './components/App.vue'

Vue.use(VueProgressbar, { color: '#ffb347' })

export default new Vue({ // eslint-disable-line
  el: '#app',
  store,
  render: h => h(App)
})

if (module.hot) {
  module.hot.accept()
}
