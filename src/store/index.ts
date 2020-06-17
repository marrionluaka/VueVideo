import Vue from "vue"
import Vuex from "vuex"
import * as R from 'ramda'

import { fetchPlayListData } from './play-list-data'

Vue.use(Vuex)

export const SET_PLAYLIST = 'set_playlist'
export const SET_AUTO_PLAY = 'set_auto_play'
export const SET_TILE_INDEX = 'set_tile_index'
export const VIDEO_FINISHED_PLAYING = 'video_finished_playing'
export const SET_CURRENT_PLAYING_VIDEO = 'set_current_playing_video'

export interface IStoreState {
  tileIndex: number
  autoPlay: boolean
  playList: Map<number, any>
  currentPlayingVideo: any
}

export default new Vuex.Store({
  state: {
    tileIndex: 0,
    autoPlay: false,
    playList: new Map(),
    currentPlayingVideo: null
  },

  getters: {
    playList(state) {
      return Array.from(state.playList.values())
    }
  },

  actions: {
    async getPlayList({ commit }): Promise<void> {
      const playListData = await fetchPlayListData(true, 1000)

      const playList: Map<number, any> = playListData.reduce((acc: Map<number, any>, video: object, idx: number) => {
        return (acc.set(idx + 1, video) || 1) && acc
      }, new Map())

      R.forEach((id: number) => {
        if (!playList.has(id)) return

        _setWatchedVideos(playList, id)

      }, _getStorageItem('watchedVideos'))

      commit(SET_PLAYLIST, playList)
      commit(SET_CURRENT_PLAYING_VIDEO, playList.get(1))
      commit(SET_AUTO_PLAY, localStorage.getItem('autoPlay') === "true")
    },

    selectVideo({ commit, state }, { id, index } ): void {
      if (!state.playList.has(id)) throw "The video you are trying to view does not exists in this play list."

      commit(SET_TILE_INDEX, index)
      commit(SET_CURRENT_PLAYING_VIDEO, state.playList.get(id))
    }
  },

  mutations: {
    [SET_TILE_INDEX](state, index: number): void {
      Vue.set(state, 'tileIndex', index)
    },

    [SET_PLAYLIST](state, playList: Map<number, object>): void {
      Vue.set(state, 'playList', playList)
    },

    [SET_CURRENT_PLAYING_VIDEO](state, currentPlayingVideo: object): void {
      Vue.set(state, 'currentPlayingVideo', currentPlayingVideo)
    },

    [VIDEO_FINISHED_PLAYING](state, id: number): void {
      if (!state.playList.has(id)) throw 'Invalid video id passed in.'

      _setWatchedVideos(state.playList, id)

      localStorage.setItem('watchedVideos', JSON.stringify([..._getStorageItem('watchedVideos'), id]))
    },

    [SET_AUTO_PLAY](state, payload: boolean): void {
      Vue.set(state, 'autoPlay', payload)
      localStorage.setItem('autoPlay', String(payload))
    }
  }
})

function _setWatchedVideos(playList: Map<number, any>, id: number) {
  playList.set(id, R.set(R.lensProp("watched"), true, playList.get(id)))
}

function _getStorageItem(key: string): Array<any> {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : []
}
