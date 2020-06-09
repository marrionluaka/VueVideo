/* eslint-disable */
import Vue from 'vue'
import { expect } from 'chai'
import VueCompositionAPI from '@vue/composition-api'
import { createSandbox, SinonSpy, SinonSandbox } from 'sinon'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import { PlayList } from '@/components/containers'

Vue.config.silent = true
describe("PlayList.vue", () => {
  let wrapper: any
  let sandbox: SinonSandbox

  beforeEach(() => {
    const localVue = createLocalVue()

    localVue.use(VueCompositionAPI)
    localVue.config.silent = true

    sandbox = createSandbox()

    global.localStorage = {
      ...global.localStorage,
      setItem: sandbox.spy(),
      getItem: sandbox.spy()
    }

    wrapper = shallowMount(PlayList, {
      localVue
    })
  })

  afterEach(() => {
    sandbox.restore()
  })

  it("@setAutoPlay(): set the autoPlay state to true or false.", () => {
    const e = {
      target: {
        checked: true
      }
    }

    wrapper.vm.setAutoPlay(e)
    expect(wrapper.vm.autoPlayEnabled).to.be.true

    e.target.checked = false
    wrapper.vm.setAutoPlay(e)
    expect(wrapper.vm.autoPlayEnabled).to.be.false
  })
})
