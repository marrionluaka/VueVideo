/* eslint-disable */
import { expect } from 'chai'
import { createSandbox, SinonSandbox } from 'sinon'

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

    currentVideo = {
      id: 1,
      title: 'Food qualities braise chicken cuts bowl through slices butternut',
      author: 'Super Mario',
      duration: 200000,
      source: '',
      watched: false
    }

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
    const nowPlaying = {
      id: 3,
      title: 'Sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder',
      author: 'Super Mario',
      duration: 400000,
      source: '',
      watched: false
    }
    
    waitForInitialization(() => {
      sut.selectVideo(3, 1)
      expect(sut.currentPlayingVideo.value).to.eql(nowPlaying)
      done()
    })
  })

  it("@showNextVideo(): increments the tileIndex while it is less than video's length.", done => {
    const nextVid = {
      id: 3,
      title: 'Sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder',
      author: 'Super Mario',
      duration: 400000,
      source: '',
      watched: false
    }

    waitForInitialization(() => {
      sut.showNextVideo()
      expect(sut.currentPlayingVideo.value).to.eql(nextVid)
      done()
    })
  })

  it("@showPreviousVideo(): does not decrements the tileIndex when the tileIndex is already at zero.", done => {
    const prevVid =  {
      id: 2,
      title: 'One-pot low heat plenty of time adobo fat raw soften fruit',
      author: 'Super Mario',
      duration: 300000,
      source: '',
      watched: false
    }
    waitForInitialization(() => {
      sut.showPreviousVideo()
      expect(sut.currentPlayingVideo.value).to.eql(prevVid)
      done()
    })
  })

  it("@videoFinishedPlaying(): ", done => {
    waitForInitialization(() => {
      sut.videoFinishedPlaying(1)
      expect(sut.playList.value[0].watched).to.be.true
      done()
    })
  })
})
