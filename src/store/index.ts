import Vue from "vue"
import Vuex from "vuex"

import { fetchPlayListData } from './play-list-data'

Vue.use(Vuex)

export const SET_VIDEO_ID = 'set_video_id'
export const SET_PLAYLIST = 'set_playlist'
export const SET_CURRENT_PLAYING_VIDEO = 'set_current_playing_video'

export default new Vuex.Store({
  state: {
    videoId: null,
    playList: new Map(),
    currentPlayingVideo: null
  },

  actions: {
    async getVideoPlayList({ commit }): Promise<void> {
      const playListData = await fetchPlayListData(true, 1000)

      const playList: Map<number, object> = playListData.reduce((acc: Map<number, object>, video: object, idx: number) => {
        return (acc.set(idx, video) || 1) && acc
      }, new Map())

      commit(SET_PLAYLIST, playList)
      commit(SET_CURRENT_PLAYING_VIDEO, playList.get(0))
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
    }
  }
})
