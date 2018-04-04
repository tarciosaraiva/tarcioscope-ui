import * as api from '../../api'
import * as actions from '../actions'
import * as types from '../mutationTypes'

jest.mock('../../api', () => ({
  snap: jest.fn(),
  getSettings: jest.fn(),
  applySettings: jest.fn()
}))

describe('actions', () => {
  const commit = jest.fn()
  const state = {}

  describe('#loadCameraSettings', () => {
    beforeEach(() => {
      api.getSettings.mockResolvedValue({
        data: { iso: 100, meter_mode: 'spot', exposure_mode: 'auto' }
      })

      actions.default.loadCameraSettings({ commit, state })
    })

    it('should have invoked API', () => {
      expect(api.getSettings).toHaveBeenCalled()
    })

    it('should have committed CHANGE_ISO', () => {
      expect(commit).toHaveBeenCalledWith(types.CHANGE_ISO, 100)
    })

    it('should have committed CHANGE_METER_MODE', () => {
      expect(commit).toHaveBeenCalledWith(types.CHANGE_METER_MODE, 'spot')
    })

    it('should have committed CHANGE_EXPOSURE_MODE', () => {
      expect(commit).toHaveBeenCalledWith(types.CHANGE_EXPOSURE_MODE, 'auto')
    })
  })

  describe('#changeCameraSettings', () => {
    const payload = { exposure_mode: 'fireworks' }

    beforeEach(() => {
      api.applySettings.mockResolvedValue({
        data: { iso: 100, meter_mode: 'spot', exposure_mode: 'auto' }
      })

      actions.default.changeCameraSettings({ commit, state }, payload)
    })

    it('should have invoked API', () => {
      expect(api.applySettings).toHaveBeenCalledWith({ exposure_mode: 'fireworks' })
    })

    it('should have committed CHANGE_ISO', () => {
      expect(commit).toHaveBeenCalledWith(types.CHANGE_ISO, 100)
    })

    it('should have committed CHANGE_METER_MODE', () => {
      expect(commit).toHaveBeenCalledWith(types.CHANGE_METER_MODE, 'spot')
    })

    it('should have committed CHANGE_EXPOSURE_MODE', () => {
      expect(commit).toHaveBeenCalledWith(types.CHANGE_EXPOSURE_MODE, 'auto')
    })
  })

  describe('#snap', () => {
    beforeEach(() => {
      global.URL = { createObjectURL: jest.fn(() => 'modified stuff') }
      api.snap.mockResolvedValue({ data: 'stuff' })
      return actions.default.snap({ commit, state })
    })

    afterEach(() => {
      global.URL = undefined
    })

    it('should have invoked API', () => {
      expect(api.snap).toHaveBeenCalled()
    })

    it('should have committed START_SNAP', () => {
      expect(commit).toHaveBeenCalledWith(types.START_SNAP)
    })

    it('should have created an object URL with data passed from api response', () => {
      expect(URL.createObjectURL).toHaveBeenCalledWith('stuff')
    })

    it('should have committed PHOTO', () => {
      expect(commit).toHaveBeenCalledWith(types.PHOTO, 'modified stuff')
    })

    it('should have committed END_SNAP', () => {
      expect(commit).toHaveBeenCalledWith(types.END_SNAP)
    })
  })
})
