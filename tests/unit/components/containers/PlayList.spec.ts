/* eslint-disable */
import { expect } from 'chai'
import VueCompositionAPI from 'vue-function-api'
import { createSandbox, SinonSpy, SinonSandbox } from 'sinon'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import { SET_VIDEO_ID } from '@/store'
import { PlayList } from '@/components/containers'

describe("PlayList.vue", () => {
  let wrapper: any
  let dispatch: SinonSpy
  let onSelected: SinonSpy
  let sandbox: SinonSandbox

  beforeEach(() => {
    const localVue = createLocalVue()

    localVue.use(VueCompositionAPI)
    localVue.config.silent = true

    sandbox = createSandbox()

    onSelected = sandbox.spy()
    dispatch = sandbox.spy()

    wrapper = shallowMount(PlayList, {
      propsData: {
        videos: [
          { id: 3 },
          { id: 7 }
        ]
      },
      localVue,
      mocks: {
        $store: { dispatch }
      }
    })
  })

  afterEach(() => {
    sandbox.restore()
  })

  it("@onVideoSelected(): dispatches a videoSelected event to vuex.", () => {
    const id = 1
    const index = 2

    wrapper.vm.onVideoSelected(id, index)

    expect(wrapper.vm.tileIndex).to.equal(index)
    expect(dispatch.calledWith(SET_VIDEO_ID, id)).to.be.true
  })

  it("@onShowNext(): increments the tileIndex while it is less than video's length.", () => {
    wrapper.vm.onShowNext()
    expect(wrapper.vm.tileIndex).to.equal(1)
    expect(dispatch.calledWith(SET_VIDEO_ID, 7)).to.be.true
  })

  it("@onShowPrev(): decrements the tileIndex while it is more than 0.", () => {
    wrapper.vm.tileIndex = 1

    wrapper.vm.onShowPrev()

    expect(wrapper.vm.tileIndex).to.equal(0)
    expect(dispatch.calledWith(SET_VIDEO_ID, 3)).to.be.true
  })

  it("@onShowPrev(): does not decrements the tileIndex when the tileIndex is already at zero.", () => {
    wrapper.vm.onShowPrev()
    expect(wrapper.vm.tileIndex).to.equal(0)
  })
})
