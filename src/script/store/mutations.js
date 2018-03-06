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
  [types.PHOTO] (state, photoBlob) {
    const snaps = state.photos
    snaps.push({ photoUrl: URL.createObjectURL(photoBlob), content: photoBlob })
    Vue.set(state, 'photos', snaps)
  }
}

export default mutations
