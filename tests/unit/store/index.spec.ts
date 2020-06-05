/* eslint-disable */
import { expect } from 'chai'
import store from '@/store'

describe("store/index.ts", () => {
  let currentPlayingVideo: Object
  let playList: Map<Number, Object>

  beforeEach(() => {
    currentPlayingVideo = {
      id: 7,
      title: 'tutorial 1',
      duration: 500000,
      source: ''
    }

    playList = new Map([
      [7, currentPlayingVideo]
    ])
  })

  it("setCurrentPlayingVideo(): sets the current playing video.", () => {
    store.state.playList = playList

    store.dispatch('setCurrentPlayingVideo', 7)

    expect(store.state.videoId).to.equal(7)
    expect(store.state.currentPlayingVideo).to.eql(currentPlayingVideo)
  })

  it("getVideoPlayList(): retrieves a list of videos and sets the current playing video.", async() => {
    const currentVideo = {
      id: 1,
      title: 'tutorial 1',
      duration: 200000,
      source: ''
    }

    await store.dispatch('getVideoPlayList')

    expect(store.state.playList.get(0)).to.eql(currentVideo)
    expect(store.state.currentPlayingVideo).to.eql(currentVideo)
  })
})
