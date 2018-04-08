import nock from 'nock'

import main from '../main'
import store from '../store'
import { instance, getSettings, snap, applySettings } from '../api'

jest.mock('../main', () => ({
  '$Progress': {
    start: jest.fn(),
    finish: jest.fn(),
    fail: jest.fn(),
  }
}))

jest.mock('../store', () => ({
  commit: jest.fn()
}))

const BASE_URL = `http://${process.env.CAMERA_SERVER_HOST}:${process.env.CAMERA_SERVER_PORT}`

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('axios instance', () => {
    it('should have a baseURL pointing to an /api endpoint', () => {
      expect(instance.defaults).toHaveProperty('baseURL', `${BASE_URL}/api`)
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
    beforeEach(() => {
      jest.spyOn(instance, 'get')
    })

    afterEach(() => {
      instance.get.mockRestore()
    })

    describe('when successful', () => {
      beforeEach(() => {
        nock(BASE_URL)
          .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
          .get('/api/config')
          .reply(200, { iso: 400, meter_mode: 'spot', exposure_mode: 'auto' })
      })

      afterEach(() => {
        nock.cleanAll()
      })

      it('should have returned a HTTP 200 OK response', () => {
        return getSettings()
          .then(({ data }) => {
            expect(data).toHaveProperty('iso', 400)
            expect(data).toHaveProperty('meter_mode', 'spot')
            expect(data).toHaveProperty('exposure_mode', 'auto')

            expect(instance.get).toHaveBeenCalledWith('/config', { headers: { 'Content-Type': 'application/json' }} )

            expect(main.$Progress.start).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_PENDING')
            expect(main.$Progress.finish).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_SUCCESSFUL')
            expect(main.$Progress.fail).not.toHaveBeenCalled()
            expect(store.commit).not.toHaveBeenCalledWith('REQUEST_FAILED')
          })
      })
    })

    describe('when unsuccessful', () => {
      beforeEach(() => {
        nock(BASE_URL)
          .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
          .get('/api/config')
          .reply(500, { message: 'bollocks' })
      })

      afterEach(() => {
        nock.cleanAll()
      })

      it('should have returned a HTTP 500 Internal Server Error response', () => {
        return getSettings()
          .catch(({ response }) => {
            expect(response.data).toHaveProperty('message', 'bollocks')
            expect(response.status).toEqual(500)

            expect(main.$Progress.start).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_PENDING')
            expect(main.$Progress.fail).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_FAILED')
            expect(main.$Progress.finish).not.toHaveBeenCalled()
            expect(store.commit).not.toHaveBeenCalledWith('REQUEST_SUCCESSFUL')
          })
      })
    })
  })

  describe('#snap', () => {
    beforeEach(() => {
      jest.spyOn(instance, 'get')
    })

    afterEach(() => {
      instance.get.mockRestore()
    })

    describe('when successful', () => {
      beforeEach(() => {
        nock(BASE_URL)
          .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
          .get('/api/snap')
          .reply(200, new Blob([JSON.stringify({ foo: 'bar' }, null, 2)], {type : 'application/json'}))
      })

      afterEach(() => {
        nock.cleanAll()
      })

      it('should have returned a HTTP 200 OK response', () => {
        return snap()
          .then(({ data }) => {
            expect(data).toBeDefined()

            expect(instance.get).toHaveBeenCalledWith('/snap', { responseType: 'blob', timeout: 15000 })

            expect(main.$Progress.start).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_PENDING')
            expect(main.$Progress.finish).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_SUCCESSFUL')
            expect(main.$Progress.fail).not.toHaveBeenCalled()
            expect(store.commit).not.toHaveBeenCalledWith('REQUEST_FAILED')
          })
      })
    })

    describe('when unsuccessful', () => {
      beforeEach(() => {
        nock(BASE_URL)
          .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
          .get('/api/snap')
          .reply(500)
      })

      afterEach(() => {
        nock.cleanAll()
      })

      it('should have returned a HTTP 500 Internal Server Error response', () => {
        return snap()
          .catch(({ response }) => {
            expect(response.status).toEqual(500)

            expect(main.$Progress.start).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_PENDING')
            expect(main.$Progress.fail).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_FAILED')
            expect(main.$Progress.finish).not.toHaveBeenCalled()
            expect(store.commit).not.toHaveBeenCalledWith('REQUEST_SUCCESSFUL')
          })
        })
    })
  })

  describe('#applySettings', () => {
    beforeEach(() => {
      jest.spyOn(instance, 'post')
    })

    afterEach(() => {
      instance.post.mockRestore()
    })

    describe('when successful', () => {
      beforeEach(() => {
        nock(BASE_URL)
          .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
          .post('/api/config')
          .reply(200, { iso: 400, meter_mode: 'spot', exposure_mode: 'auto' })
      })

      afterEach(() => {
        nock.cleanAll()
      })

      it('should have returned a HTTP 200 OK response', () => {
        return applySettings({ iso: 200 })
          .then(({ data }) => {
            expect(data).toBeDefined()

            expect(instance.post).toHaveBeenCalledWith('/config', { iso: 200 }, { headers: { 'Content-Type': 'application/json' } })

            expect(main.$Progress.start).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_PENDING')
            expect(main.$Progress.finish).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_SUCCESSFUL')
            expect(main.$Progress.fail).not.toHaveBeenCalled()
            expect(store.commit).not.toHaveBeenCalledWith('REQUEST_FAILED')
          })
      })
    })

    xdescribe('when unsuccessful', () => {
      beforeEach(() => {
        nock(BASE_URL)
          .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
          .post('/api/config')
          .reply(500)
      })

      afterEach(() => {
        nock.cleanAll()
      })

      it('should have returned a HTTP 500 Internal Server Error response', () => {
        return snap()
          .catch(({ response }) => {
            expect(response.status).toEqual(500)

            expect(main.$Progress.start).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_PENDING')
            expect(main.$Progress.fail).toHaveBeenCalled()
            expect(store.commit).toHaveBeenCalledWith('REQUEST_FAILED')
            expect(main.$Progress.finish).not.toHaveBeenCalled()
            expect(store.commit).not.toHaveBeenCalledWith('REQUEST_SUCCESSFUL')
          })
        })
    })
  })
})
