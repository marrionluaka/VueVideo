/* eslint-disable */
import { expect } from 'chai'
import { createSandbox, SinonSpy, SinonSandbox } from 'sinon'
import { shallowMount } from '@vue/test-utils'

import { TileNavigator } from '@/components/ui'

describe("TileNavigator.vue", () => {
  let sandbox: SinonSandbox
  let wrapper: any
  let listeners: any

  beforeEach(() => {
    sandbox = createSandbox()

    listeners = {
      onShowNextSlide: sandbox.spy(),
      onShowPreviousSlide: sandbox.spy()
    }
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('@onShowNextSlide: emits an event that indicates that the next slide is being selected.', () => {
    wrapper = shallowMount(TileNavigator, {
      listeners,
      propsData: {
        nextVideo: {
          title: 'next video'
        }
      }
    })

    wrapper.find('.showNextSlide').trigger('click')

    expect(listeners.onShowNextSlide.called).to.be.true
  })

  it('@onShowPreviousSlide: emits an event that indicates that the previous slide is being selected.', () => {
    wrapper = shallowMount(TileNavigator, {
      listeners,
      propsData: {
        previousVideo: {
          title: 'previous video'
        }
      }
    })

    wrapper.find('.showPreviousSlide').trigger('click')

    expect(listeners.onShowPreviousSlide.called).to.be.true
  })
})
