import * as types from './mutationTypes'
import * as api from '../api'

const actions = {
  loadCameraSettings: ({ commit, state }) =>
    api.getSettings()
      .then(({ data }) => {
        commit(types.CHANGE_ISO, data.iso)
        commit(types.CHANGE_METER_MODE, data.meter_mode)
        commit(types.CHANGE_EXPOSURE_MODE, data.exposure_mode)
      }),
  changeCameraSettings({ commit, state }, payload) {
    api.applySettings(payload)
      .then(({ data }) => {
        commit(types.CHANGE_ISO, data.iso)
        commit(types.CHANGE_METER_MODE, data.meter_mode)
        commit(types.CHANGE_EXPOSURE_MODE, data.exposure_mode)
      })
  },
  snap({ commit, state }) {
    api.snap()
      .then(({ data }) => {
        commit(types.PHOTO, new Blob([data],{ type: 'image/png' }))
      })
  }
}

export default actions
