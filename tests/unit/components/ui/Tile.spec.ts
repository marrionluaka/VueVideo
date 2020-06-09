/* eslint-disable */
import { expect } from 'chai'
import { createSandbox, SinonSpy, SinonSandbox } from 'sinon'
import { shallowMount } from '@vue/test-utils'

import { Tile } from '@/components/ui'

describe("Tile.vue", () => {
  let sandbox: SinonSandbox
  let wrapper: any
  let onSelected: SinonSpy

  beforeEach(() => {
    sandbox = createSandbox()

    onSelected = sandbox.spy()

    wrapper = shallowMount(Tile, {
      propsData: {
        video: {
          id: 357
        },
        tileIndex: 1
      },

      listeners: {
        onSelected
      }
    })
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('@onSelected: emits an "onSelected" event when a user clicks on it.', () => {
    wrapper.find('a').trigger('click')
    expect(onSelected.calledWith(357, 1)).to.be.true
  })
})
