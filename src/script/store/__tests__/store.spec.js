import store from '../'

jest.mock('../actions', () => ({}))
jest.mock('../mutations', () => ({}))

describe('store', () => {
  it('should have strict parameter set to true', () => {
    expect(store.strict).toBe(true)
  })

  it('should have initial state', () => {
    expect(store.state).toEqual({
      settings: {
        meterMode: 'spot',
        iso: 200,
        exposureMode: 'antishake',
      },
      photos: [],
      loading: false,
      error: false,
      snapping: false
    })
  })

  it('should have empty actions', () => {
    expect(store._actions).toEqual({})
  })

  it('should have mutations actions', () => {
    expect(store._mutations).toEqual({})
  })
})
