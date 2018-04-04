import { instance, getSettings } from '../api'
import store from '../store'

jest.mock('../main', () => ({
  '$Progress': jest.fn(() => ({
    start: jest.fn(),
    finish: jest.fn(),
    fail: jest.fn(),
  }))
}))

jest.mock('../store', () => ({
  commit: jest.fn()
}))

describe('api', () => {
  describe('axios instance', () => {
    it('should have a baseURL pointing to an /api endpoint', () => {
      expect(instance.defaults).toHaveProperty('baseURL', `http://${process.env.CAMERA_SERVER_HOST}:${process.env.CAMERA_SERVER_PORT}/api`)
    })

    it('should have a timeout of 1000 ms', () => {
      expect(instance.defaults).toHaveProperty('timeout', 1000)
    })

    it('should have request interceptor', () => {
      expect(instance.interceptors.request).toHaveProperty('handlers')
      expect(instance.interceptors.request.handlers).toHaveLength(1)
    })

    it('should have response interceptor', () => {
      expect(instance.interceptors.response).toHaveProperty('handlers')
      expect(instance.interceptors.response.handlers).toHaveLength(1)
    })
  })

  describe('#getSettings', () => {
    describe('when successful', () => {

    })

    describe('when unsuccessful', () => {

    })
  })
})
