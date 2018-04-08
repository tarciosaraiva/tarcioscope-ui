import { shallow } from '@vue/test-utils'

import AppFooter from '../AppFooter.vue'

describe('<AppFooter />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(AppFooter)
  })

  it('renders a footer block', () => {
    expect(wrapper.contains('footer')).toBe(true)
  })

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
