import { shallowMount } from '@vue/test-utils'

import App from '../App.vue'
import AppHeader from '../AppHeader'
import AppFooter from '../AppFooter'
import CameraWrapper from '../CameraWrapper'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(App, {
      stubs: { 'vue-progress-bar': true }
    })
  })

  it('renders the main block', () => {
    expect(wrapper.contains('main')).toBe(true)
    expect(wrapper.contains(AppHeader)).toBe(true)
    expect(wrapper.contains(AppFooter)).toBe(true)
    expect(wrapper.contains(CameraWrapper)).toBe(true)
  })

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
