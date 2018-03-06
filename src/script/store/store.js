import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    settings: {
      meterMode: 'spot',
      iso: 200,
      exposureMode: 'antishake',
    },
    photos: [],
  },
  actions,
  mutations
})

export default store
