import axios from 'axios'

import app from './main'
import store from './store'
import * as types from './store/mutationTypes'

const headers = { 'Content-Type': 'application/json' }

export const instance = axios.create({
  baseURL: `http://${process.env.CAMERA_SERVER_HOST}:${process.env.CAMERA_SERVER_PORT}`,
  timeout: 1000
})

const errorFn = (error) => {
  app.$Progress.fail()
  store.commit(types.REQUEST_FAILED)
  return Promise.reject(error)
}

instance.interceptors.request.use(config => {
  app.$Progress.start()
  store.commit(types.REQUEST_PENDING)
  return config
}, errorFn)

instance.interceptors.response.use(response => {
  app.$Progress.finish()
  store.commit(types.REQUEST_SUCCESSFUL)
  return response
}, errorFn)

export const getSettings = () => {
  return instance.get('/config', { headers })
}

export const applySettings = (cameraSettings) => {
  return instance.post('/config', cameraSettings, { headers })
}

export const snap = () => {
  return instance.get('/api/snap', { responseType: 'blob', timeout: 15000 })
}
