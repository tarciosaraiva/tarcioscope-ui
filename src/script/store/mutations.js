import Vue from 'vue'
import * as types from './mutationTypes'

const mutations = {
  [types.CHANGE_METER_MODE] (state, meterMode) {
    Vue.set(state.settings, 'meterMode', meterMode)
  },
  [types.CHANGE_ISO] (state, iso) {
    Vue.set(state.settings, 'iso', iso)
  },
  [types.CHANGE_EXPOSURE_MODE] (state, exposureMode) {
    Vue.set(state.settings, 'exposureMode', exposureMode)
  },
  [types.PHOTO] (state, photoUrl) {
    const snaps = state.photos
    snaps.push({ photoUrl })
    Vue.set(state, 'photos', snaps)
  },
  [types.REQUEST_PENDING] (state) {
    Vue.set(state, 'loading', true)
    Vue.set(state, 'error', false)
  },
  [types.REQUEST_FAILED] (state) {
    Vue.set(state, 'loading', false)
    Vue.set(state, 'error', true)
  },
  [types.REQUEST_SUCCESSFUL] (state) {
    Vue.set(state, 'loading', false)
    Vue.set(state, 'error', false)
  },
  [types.START_SNAP] (state) {
    Vue.set(state, 'snapping', true)
  },
  [types.END_SNAP] (state) {
    Vue.set(state, 'snapping', false)
  }
}

export default mutations
