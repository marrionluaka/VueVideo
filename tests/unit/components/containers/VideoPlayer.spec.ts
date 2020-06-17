/* eslint-disable */
import Vue from 'vue'
import { expect } from 'chai'
import * as videojs from 'video.js'
import VueCompositionAPI from '@vue/composition-api'
import { createSandbox, SinonSandbox } from 'sinon'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import { playListData } from '@/hooks/play-list-data'
import { VideoPlayer } from '@/components/containers'
import { SET_TILE_INDEX, SET_CURRENT_PLAYING_VIDEO } from '@/store'

Vue.config.silent = true
describe("VideoPlayer.vue", () => {
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
        currentPlayingVideo: null
      },

      commit: sandbox.spy(),
      subscribe: sandbox.spy(),

      getters: {
        playList: [{}]
      }
    }

    sandbox.stub(videojs, 'default').returns({
      ...videojs.default.prototype,
      on: sandbox.spy(),
      ready: sandbox.spy()
    })

    wrapper = shallowMount(VideoPlayer, {
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

  it("@showNextVideo(): increments the tileIndex while it is less than video's length.", () => {
    const nextVid = playListData[1]
    store.state.playList.set(2, nextVid)
    store.getters.playList.push(nextVid)

    wrapper.vm.showNextVideo()

    expect(store.commit.calledWith(SET_TILE_INDEX, 1)).to.be.true
    expect(store.commit.calledWith(SET_CURRENT_PLAYING_VIDEO, nextVid)).to.be.true
  })

  it("@showPreviousVideo(): does not decrements the tileIndex when the tileIndex is already at zero.", () => {
    const prevVid = playListData[0]
    store.state.tileIndex = 1
    store.state.playList.set(1, prevVid)
    store.getters.playList = [prevVid]

    wrapper.vm.showPreviousVideo()

    expect(store.commit.calledWith(SET_TILE_INDEX, 0)).to.be.true
    expect(store.commit.calledWith(SET_CURRENT_PLAYING_VIDEO, prevVid)).to.be.true
  })
})
