/* eslint-disable */
import { expect } from 'chai'
import { createSandbox, SinonSandbox } from 'sinon'

import { playListData } from '@/hooks/play-list-data'
import { useVideos, IVideoComposition } from '@/hooks/useVideos'
import mountComposition, { waitForInitialization } from './helpers'

describe("useVideos.ts", () => {
  let sut: IVideoComposition
  let sandbox: SinonSandbox
  let currentVideo: any

  beforeEach(() => {
    sandbox = createSandbox()

    global.localStorage = {
      ...global.localStorage,
      setItem: sandbox.spy(),
      getItem: sandbox.spy()
    }

    currentVideo = playListData[0]

    mountComposition(() => sut = useVideos())
  })

  afterEach(() => {
    sandbox.restore()
  })

  it("playlist: returns an array of videos when accessing it.", done => {
    waitForInitialization(() => {
      expect(sut.playList.value).to.not.be.empty
      expect(sut.playList.value[0]).to.eql(currentVideo)
      expect(sut.currentPlayingVideo.value).to.eql(currentVideo)
      done()
    })
  })

  it("@selectVideo(): selects a video from the playlist given an id.", done => {
    const nowPlaying = playListData[2]
    
    waitForInitialization(() => {
      sut.selectVideo(3, 1)
      expect(sut.currentPlayingVideo.value).to.eql(nowPlaying)
      done()
    })
  })

  it("@showNextVideo(): increments the tileIndex while it is less than video's length.", done => {
    const nextVid = playListData[2]

    waitForInitialization(() => {
      sut.showNextVideo()
      expect(sut.currentPlayingVideo.value).to.eql(nextVid)
      done()
    })
  })

  it("@showPreviousVideo(): does not decrements the tileIndex when the tileIndex is already at zero.", done => {
    const prevVid = playListData[1]

    waitForInitialization(() => {
      sut.showPreviousVideo()
      expect(sut.currentPlayingVideo.value).to.eql(prevVid)
      done()
    })
  })

  it("@videoFinishedPlaying(): ", done => {
    waitForInitialization(() => {
      sut.setAutoPlay({ target: { checked: true } })

      sut.videoFinishedPlaying(1)

      expect(sut.currentPlayingVideo.value).to.eql(playListData[2])
      done()
    })
  })
})
