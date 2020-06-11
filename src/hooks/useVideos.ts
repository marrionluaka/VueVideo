import Vue from 'vue'
import * as R from 'ramda'
import { computed, onMounted, Ref } from '@vue/composition-api'

import { fetchPlayListData } from '@/hooks/play-list-data'
import { getStorageItem } from '@/utils'

interface IState {
  tileIndex: number
  playList: Map<number, any>
  autoPlayEnabled: boolean
  currentPlayingVideo: any
}

export interface IVideoComposition {
  currentPlayingVideo: any
  tileIndex: Readonly<Ref<number>>
  playList: Readonly<Ref<readonly any[]>>
  autoPlayEnabled: Readonly<Ref<boolean>>
  showNextVideo: () => void
  showPreviousVideo: () => void
  setAutoPlay: (e: any) => void
  videoFinishedPlaying: (id: number) => void
  selectVideo: (id: number, index: number) => any
}

const _state = Vue.observable({
  tileIndex: 0,
  playList: new Map(),
  currentPlayingVideo: {},
  autoPlayEnabled: false
})

export function useVideos(): IVideoComposition {
  onMounted(async () => {
    await _getPlayList(_state)
    _state.autoPlayEnabled = localStorage.getItem('autoPlay') === "true"
  })

  const showNextVideo = () => {
    if (!playList.value.length || R.gte(_state.tileIndex, playList.value.length - 1)) return
    const id = R.prop('id', playList.value[_state.tileIndex += 1])
    _state.currentPlayingVideo = _state.playList.get(id)
  }

  const playList = computed(() => Array.from(_state.playList.values()))
  
	return {
    playList,
    tileIndex: computed(() => _state.tileIndex),
    autoPlayEnabled: computed(() => _state.autoPlayEnabled),
    currentPlayingVideo: computed(() => _state.currentPlayingVideo),

    selectVideo: (id: number, index: number): any => {
      if (!_state.playList.has(id)) throw "The video you are trying to view does not exists in this play list."
      _state.tileIndex = index
      _state.currentPlayingVideo = _state.playList.get(id)
    },

    showNextVideo,

    showPreviousVideo: () => {
      if (!playList.value.length || R.lte(_state.tileIndex, 0)) return
      const id = R.prop('id', playList.value[_state.tileIndex -= 1])
      _state.currentPlayingVideo = _state.playList.get(id)
    },

    setAutoPlay: (e: any) => {
      _state.autoPlayEnabled = e.target.checked
      localStorage.setItem('autoPlay', String(e.target.checked))
    },

    videoFinishedPlaying(id: number): void {
      if (!_state.playList.has(id)) throw 'Invalid video id passed in.'

      localStorage.setItem('watchedVideos', JSON.stringify([...getStorageItem('watchedVideos'), id]))

      if (_state.autoPlayEnabled) showNextVideo()
    }
  }

  async function _getPlayList(state: IState) {
    const playListData = await fetchPlayListData(true, 250)
    const playList: Map<number, any> = playListData.reduce((acc: Map<number, any>, video: object, idx: number) => {
      return (acc.set(idx + 1, video) || 1) && acc
    }, new Map())

    R.forEach((id: number) => {
      if (!playList.has(id)) return

      playList.set(id, R.set(R.lensProp("watched"), true, playList.get(id)))

    }, getStorageItem('watchedVideos'))

    state.playList = playList
    state.currentPlayingVideo = playList.get(1)
  }
}
