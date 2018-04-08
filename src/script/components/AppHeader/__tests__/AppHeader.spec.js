import { shallow } from '@vue/test-utils'

import AppHeader from '../AppHeader.vue'

describe('<AppHeader />', () => {
  let wrapper

  describe('created behaviour', () => {
    beforeEach(() => {
      jest.spyOn(AppHeader.methods, 'defineLogoHeight').mockImplementation(() => {})
      wrapper = shallow(AppHeader)
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('renders a footer block', () => {
      expect(wrapper.contains('header')).toBe(true)
    })

    it('matches snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('should have invoked "defineLogoHeight"', () => {
      expect(AppHeader.methods.defineLogoHeight).toHaveBeenCalled()
    })

    it('should have data with height property and a default value', () => {
      expect(wrapper.vm.height).toEqual(30)
    })
  })

  describe('#defineLogoHeight', () => {
    beforeEach(() => {
      wrapper = shallow(AppHeader)
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should have kept height at 30 when window width is lower than 768 px', () => {
      jest.spyOn(wrapper.vm, 'windowWidthGreaterThan768').mockImplementation(() => false)
      wrapper.vm.defineLogoHeight()
      expect(wrapper.vm.height).toEqual(30)
    })

    it('should have kept height at 60 when window width is greater than 768 px', () => {
      jest.spyOn(wrapper.vm, 'windowWidthGreaterThan768').mockImplementation(() => true)
      wrapper.vm.defineLogoHeight()
      expect(wrapper.vm.height).toEqual(60)
    })
  })
})
