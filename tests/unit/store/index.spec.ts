/* eslint-disable */
import { expect } from 'chai'
import { createSandbox, SinonSandbox } from 'sinon'

import { playListData } from '@/hooks/play-list-data'
import store, { SET_AUTO_PLAY, VIDEO_FINISHED_PLAYING } from '@/store'

describe("store/index.ts", () => {
  let sandbox: SinonSandbox
  let currentVideo: Object

  beforeEach(() => {
    sandbox = createSandbox()

    global.localStorage = {
      ...global.localStorage,
      setItem: sandbox.spy(),
      getItem: sandbox.spy()
    }

    currentVideo = playListData[0]
  })

  afterEach(() => {
    sandbox.restore()
  })

  context("action specs", () => {
    it("getVideoPlayList(): retrieves a list of videos and sets the current playing video.", async() => {
      await store.dispatch('getPlayList')
  
      expect(store.state.playList.get(1)).to.eql(currentVideo)
      expect(store.state.currentPlayingVideo).to.eql(currentVideo)
    })

    it("getVideoPlayList(): retrieves a list of watched videos.", async () => {
      global.localStorage.getItem = sandbox.stub().returns('[1]')

      await store.dispatch('getPlayList')

      expect(store.state.playList.get(1).watched).to.be.true
    })
  
    it("selectVideo(): sets the current playing video.", async () => {
      await store.dispatch('getPlayList')

      store.dispatch('selectVideo', { id: 2, index: 1 })

      expect(store.state.tileIndex).to.equal(1)
      expect(store.state.currentPlayingVideo).to.eql(playListData[1])
    })
  })

  context("commit specs", () => {
    it("VIDEO_FINISHED_PLAYING(): sets the current playing video's watched property to true.", async() => {
      await store.dispatch('getPlayList')
  
      store.commit(VIDEO_FINISHED_PLAYING, 7)
  
      expect(store.state.playList.get(7).watched).to.be.true
    })
  
    it("SET_AUTOPLAY(): set the autoPlay state to true or false.", () => {
      store.commit(SET_AUTO_PLAY, true)
      expect(store.state.autoPlay).to.be.true
  
      store.commit(SET_AUTO_PLAY, false)
      expect(store.state.autoPlay).to.be.false
    })
  })
})
