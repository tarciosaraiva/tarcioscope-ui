import Vue from 'vue'
import VueProgressbar from 'vue-progressbar'
import 'normalize.css'

import store from './store'
import App from './components/App.vue'

import colors from './colors'

Vue.use(VueProgressbar, { color: colors.backgroundControl })

export default new Vue({ // eslint-disable-line
  el: '#app',
  store,
  render: h => h(App)
})

if (module.hot) {
  module.hot.accept()
}
