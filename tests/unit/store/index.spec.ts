/* eslint-disable */
import { expect } from 'chai'
import { createSandbox, SinonSandbox } from 'sinon'

import store, { SET_AUTO_PLAY, VIDEO_FINISHED_PLAYING } from '@/store'

describe("store/index.ts", () => {
  let sandbox: SinonSandbox
  let currentPlayingVideo: Object
  let playList: Map<Number, Object>

  beforeEach(() => {
    sandbox = createSandbox()

    global.localStorage = {
      ...global.localStorage,
      setItem: sandbox.spy(),
      getItem: sandbox.spy()
    }

    currentPlayingVideo = {
      id: 7,
      title: 'tutorial 1',
      duration: 500000,
      source: '',
      watched: false
    }

    playList = new Map([
      [7, currentPlayingVideo]
    ])
  })

  afterEach(() => {
    sandbox.restore()
  })

  context("action specs", () => {
    it("getVideoPlayList(): retrieves a list of videos and sets the current playing video.", async() => {
      const currentVideo = {
        id: 1,
        title: 'tutorial 1',
        duration: 200000,
        source: '',
        watched: false
      }
  
      await store.dispatch('getVideoPlayList')
  
      expect(store.state.autoPlay).to.be.false
      expect(store.state.playList.get(0)).to.eql(currentVideo)
      expect(store.state.currentPlayingVideo).to.eql(currentVideo)
    })

    it("getVideoPlayList(): .", async () => {
      global.localStorage.getItem = sandbox.stub().returns('[1]')

      await store.dispatch('getVideoPlayList')

      expect(store.state.playList.get(1).watched).to.be.true
    })
  
    it("setCurrentPlayingVideo(): sets the current playing video.", () => {
      store.state.playList = playList
  
      store.dispatch('setCurrentPlayingVideo', 7)
  
      expect(store.state.videoId).to.equal(7)
      expect(store.state.currentPlayingVideo).to.eql(currentPlayingVideo)
    })
  })


  context("commit specs", () => {
    it("VIDEO_FINISHED_PLAYING(): sets the current playing video's watched property to true.", () => {
      store.state.playList = playList
  
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
