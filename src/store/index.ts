import Vue from "vue"
import Vuex from "vuex"
import * as R from 'ramda'

import { fetchPlayListData } from './play-list-data'

Vue.use(Vuex)

export const SET_VIDEO_ID = 'set_video_id'
export const SET_PLAYLIST = 'set_playlist'
export const SET_AUTO_PLAY = 'set_auto_play'
export const VIDEO_FINISHED_PLAYING = 'video_finished_playing'
export const SET_CURRENT_PLAYING_VIDEO = 'set_current_playing_video'

function _setWatchedVideos(playList: Map<number, any>, id: number) {
  playList.set(id, R.set(R.lensProp("watched"), true, playList.get(id))
  )
}

function _getStorageItem(key: string): Array<any> {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : []
}

export default new Vuex.Store({
  state: {
    videoId: null,
    autoPlay: false,
    playList: new Map(),
    currentPlayingVideo: null
  },

  actions: {
    async getVideoPlayList({ commit }): Promise<void> {
      const playListData = await fetchPlayListData(true, 1000)

      const playList: Map<number, any> = playListData.reduce((acc: Map<number, any>, video: object, idx: number) => {
        return (acc.set(idx, video) || 1) && acc
      }, new Map())

      R.forEach((id: number) => {
        if (!playList.has(id)) return

        _setWatchedVideos(playList, id)

      }, _getStorageItem('watchedVideos'))

      commit(SET_PLAYLIST, playList)

      // -- setting defaults
      commit(SET_CURRENT_PLAYING_VIDEO, playList.get(0))
      commit(SET_AUTO_PLAY, Boolean(localStorage.getItem('autoPlay')))
    },

    setCurrentPlayingVideo({ commit, state }, id: number): void {
      if (!state.playList.has(id)) throw 'Invalid video id passed in.'

      commit(SET_VIDEO_ID, id)
      commit(SET_CURRENT_PLAYING_VIDEO, state.playList.get(id))
    }
  },

  mutations: {
    [SET_VIDEO_ID](state, id: number): void {
      Vue.set(state, 'videoId', id)
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
