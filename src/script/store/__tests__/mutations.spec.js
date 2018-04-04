import Vue from 'vue'
import * as mutations from '../mutations'
import * as types from '../mutationTypes'

jest.mock('vue', () => ({ set: jest.fn() }))

describe('mutations', () => {
  const state = { settings: {}, photos: [] }

  describe(types.CHANGE_METER_MODE, () => {
    it('should set "meterMode" under "settings" on state', () => {
      mutations.default[types.CHANGE_METER_MODE](state, 'average')
      expect(Vue.set).toHaveBeenCalledWith(state.settings, 'meterMode', 'average')
    })
  })

  describe(types.CHANGE_ISO, () => {
    it('should set "iso" under "settings" on state', () => {
      mutations.default[types.CHANGE_ISO](state, '200')
      expect(Vue.set).toHaveBeenCalledWith(state.settings, 'iso', '200')
    })
  })

  describe(types.CHANGE_EXPOSURE_MODE, () => {
    it('should set "exposureMode" under "settings" on state', () => {
      mutations.default[types.CHANGE_EXPOSURE_MODE](state, 'fireworks')
      expect(Vue.set).toHaveBeenCalledWith(state.settings, 'exposureMode', 'fireworks')
    })
  })

  describe(types.PHOTO, () => {
    it('should push a photo URL to the array of photos', () => {
      mutations.default[types.PHOTO](state, 'http://photo.url')
      expect(Vue.set).toHaveBeenCalledWith(state, 'photos', [{ photoUrl: 'http://photo.url' }])
    })
  })

  describe(types.REQUEST_PENDING, () => {
    beforeEach(() => {
      mutations.default[types.REQUEST_PENDING](state)
    })

    it('should set "loading" to true', () => {
      expect(Vue.set).toHaveBeenCalledWith(state, 'loading', true)
    })

    it('should set "error" to false', () => {
      expect(Vue.set).toHaveBeenCalledWith(state, 'error', false)
    })
  })

  describe(types.REQUEST_FAILED, () => {
    beforeEach(() => {
      mutations.default[types.REQUEST_FAILED](state)
    })

    it('should set "loading" to false', () => {
      expect(Vue.set).toHaveBeenCalledWith(state, 'loading', false)
    })

    it('should set "error" to true', () => {
      expect(Vue.set).toHaveBeenCalledWith(state, 'error', true)
    })
  })

  describe(types.REQUEST_SUCCESSFUL, () => {
    beforeEach(() => {
      mutations.default[types.REQUEST_SUCCESSFUL](state)
    })

    it('should set "loading" to false', () => {
      expect(Vue.set).toHaveBeenCalledWith(state, 'loading', false)
    })

    it('should set "error" to false', () => {
      expect(Vue.set).toHaveBeenCalledWith(state, 'error', false)
    })
  })

  describe(types.START_SNAP, () => {
    it('should set "snapping" to true', () => {
      mutations.default[types.START_SNAP](state)
      expect(Vue.set).toHaveBeenCalledWith(state, 'snapping', true)
    })
  })

  describe(types.END_SNAP, () => {
    it('should set "snapping" to false', () => {
      mutations.default[types.END_SNAP](state)
      expect(Vue.set).toHaveBeenCalledWith(state, 'snapping', false)
    })
  })

})
