import Vue from 'vue'
import * as R from 'ramda'
import { computed, onMounted, ref, Ref } from '@vue/composition-api'

import { fetchPlayListData } from '@/hooks/play-list-data'

interface IState {
  playList: Map<number, any>
  currentPlayingVideo: any
}

export interface IVideoComposition {
  currentPlayingVideo: any
  showNextVideo: () => void
  showPreviousVideo: () => void
  selectVideo: (id: number, index: number) => any
  videoFinishedPlaying: (id: number) => void
  playList: Readonly<Ref<readonly any[]>>
}

const _state = Vue.observable({
  tileIndex: 0,
  playList: new Map(),
  currentPlayingVideo: {}
})

export function useVideos(): IVideoComposition {
  onMounted(async () => await _getPlayList(_state))

  const playList = computed(() => Array.from(_state.playList.values()))

	return {
    playList,
    currentPlayingVideo: computed(() => _state.currentPlayingVideo),

    selectVideo: (id: number, index: number): any => {
      if (!_state.playList.has(id)) throw "The video you are trying to view does not exists in this play list."
      _state.tileIndex = index
      _state.currentPlayingVideo = _state.playList.get(id)
    },

    showNextVideo: () => {
      if (!playList.value.length || R.gte(_state.tileIndex, playList.value.length - 1)) return
      const id = R.prop('id', playList.value[_state.tileIndex += 1])
      _state.currentPlayingVideo = _state.playList.get(id)
    },

    showPreviousVideo: () => {
      if (!playList.value.length || R.lte(_state.tileIndex, 0)) return
      const id = R.prop('id', playList.value[_state.tileIndex -= 1])
      _state.currentPlayingVideo = _state.playList.get(id)
    },

    videoFinishedPlaying(id: number): void {
      if (!_state.playList.has(id)) throw 'Invalid video id passed in.'

      _setWatchedVideos(_state.playList, id)

      localStorage.setItem('watchedVideos', JSON.stringify([..._getStorageItem('watchedVideos'), id]))
    }
  }

  async function _getPlayList(state: IState) {
    const playListData = await fetchPlayListData(true, 250)
    const playList: Map<number, any> = playListData.reduce((acc: Map<number, any>, video: object, idx: number) => {
      return (acc.set(idx + 1, video) || 1) && acc
    }, new Map())

    R.forEach((id: number) => {
      if (!playList.has(id)) return

      _setWatchedVideos(playList, id)

    }, _getStorageItem('watchedVideos'))

    state.playList = playList
    state.currentPlayingVideo = playList.get(1)
  }
  
  function _setWatchedVideos(playList: Map<number, any>, id: number) {
    playList.set(id, R.set(R.lensProp("watched"), true, playList.get(id)))
  }
  
  function _getStorageItem(key: string): Array<any> {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : []
  }
}
