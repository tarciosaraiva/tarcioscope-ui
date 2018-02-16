import Vue from 'vue'
import 'normalize.css'

import App from './components/App.vue'

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})

if (module.hot) {
  module.hot.accept()
}
