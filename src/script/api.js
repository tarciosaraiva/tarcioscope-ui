import axios from 'axios'

const instance = axios.create({
  baseURL: `http://${process.env.CAMERA_SERVER_HOST}:${process.env.CAMERA_SERVER_PORT}/`,
  timeout: 15000,
});

export const getSettings = () => {
  return instance.get('/', { headers: { 'Content-Type': 'application/json' } })
}

export const applySettings = (cameraSettings) => {
  return instance.post('/', cameraSettings, { headers: { 'Content-Type': 'application/json' } })
}

export const snap = () => {
  return instance.get('/snap')
}
