/* eslint-disable */
import { expect } from 'chai'
import { createSandbox, SinonSpy, SinonSandbox } from 'sinon'
import { shallowMount } from '@vue/test-utils'

import { TileNavigator } from '@/components/ui'

describe("TileNavigator.vue", () => {
  let sandbox: SinonSandbox
  let wrapper: any
  let onShowNextSlide: SinonSpy
  let onShowPreviousSlide: SinonSpy

  beforeEach(() => {
    sandbox = createSandbox()

    onShowNextSlide = sandbox.spy()
    onShowPreviousSlide = sandbox.spy()

    wrapper = shallowMount(TileNavigator, {
      listeners: {
        onShowNextSlide,
        onShowPreviousSlide
      }
    })
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('@onShowNextSlide: emits an event that indicates that the next slide is being selected.', () => {
    wrapper.find('.showNextSlide').trigger('click')
    expect(onShowNextSlide.called).to.be.true
  })

  it('@onShowPreviousSlide: emits an event that indicates that the previous slide is being selected.', () => {
    wrapper.find('.showPreviousSlide').trigger('click')
    expect(onShowPreviousSlide.called).to.be.true
  })
})
