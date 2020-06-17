/* eslint-disable */
import Vue from 'vue'
import { expect } from 'chai'
import VueCompositionAPI from '@vue/composition-api'
import { createSandbox, SinonSandbox } from 'sinon'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import { SET_AUTO_PLAY } from '@/store'
import { PlayList } from '@/components/containers'

Vue.config.silent = true
describe("PlayList.vue", () => {
  let store: any
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

    store = {
      state: {
        playList: new Map(),
        tileIndex: 0,
        autoPlay: false,
        currentPlayingVideo: {}
      },

      commit: sandbox.spy(),
      dispatch: sandbox.spy(),
      subscribe: sandbox.spy(),

      getters: {
        playList: [{}]
      }
    }

    wrapper = shallowMount(PlayList, {
      store,
      localVue,
      mocks: {
        $store: store
      }
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

    expect(store.commit.calledWith(SET_AUTO_PLAY, e.target.checked)).to.be.true
  })

  it("@selectVideo(): selects a video from the play list.", () => {
    const id = 2
    const index = 1

    wrapper.vm.selectVideo(id, index)

    expect(store.dispatch.calledWith('selectVideo', { id, index })).to.be.true
  })
})
