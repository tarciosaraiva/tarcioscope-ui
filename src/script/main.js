import Vue from 'vue'
import 'normalize.css'

import store from './store'
import App from './components/App.vue'

new Vue({ // eslint-disable-line
  el: '#app',
  store,
  render: h => h(App)
})

if (module.hot) {
  module.hot.accept()
}
