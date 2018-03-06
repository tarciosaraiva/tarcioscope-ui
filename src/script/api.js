import axios from 'axios'

import app from './main'
import store from './store'
import * as types from './store/mutationTypes'

const instance = axios.create({
  baseURL: `http://${process.env.CAMERA_SERVER_HOST}:${process.env.CAMERA_SERVER_PORT}/`,
  timeout: 15000,
});

instance.interceptors.request.use(config => {
  app.$Progress.start()
  store.commit(types.REQUEST_PENDING)
  return config
}, error => {
  app.$Progress.fail()
  store.commit(types.REQUEST_FAILED)
  return Promise.reject(error)
});

instance.interceptors.response.use(response => {
  app.$Progress.finish()
  store.commit(types.REQUEST_SUCCESSFUL)
  return response
}, error => {
  app.$Progress.fail()
  store.commit(types.REQUEST_FAILED)
  return Promise.reject(error)
});

export const getSettings = () => {
  return instance.get('/', { headers: { 'Content-Type': 'application/json' } })
}

export const applySettings = (cameraSettings) => {
  return instance.post('/', cameraSettings, { headers: { 'Content-Type': 'application/json' } })
}

export const snap = () => {
  return instance.get('/snap', { responseType: 'blob' })
}
