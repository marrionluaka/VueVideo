<template lang="pug">
  .playlist.rounded.overflow-hidden
    .playlist-playing-banner.flex.flex-row.items-center.px-2.py-4
      img.w-20.mr-3(src="../../assets/logo.png" alt="Vue logo")
      p.text-xl Build a responsive video player with Tailwind and Vue 3 composition api

    PlayListMeta(
      :progress="progress"
      :lessonsWatched="state.lessonsWatched"
      :numberOfLessons="state.numberOfLessons"
      :autoPlayEnabled="autoPlay"
      @onChange="setAutoPlay"
    )

    ul.playlist-tile-container
      li(v-for="(video, index) in state.playList" :key="video.id")
        Tile(
          :video="video"
          :tileIndex="index"
          :nowPlaying="video.id === currentPlayingVideo.id"
          :upNext="tileIndex + 1 === index"
          @onSelected="selectVideo"
        )
</template>

<script lang="ts">
import * as R from 'ramda'
import { useState, useGetters, useMutations, useActions } from 'vuex-composition-helpers'
import { defineComponent, computed, ref, onMounted, reactive } from '@vue/composition-api'

import { Tile, PlayListMeta } from '../ui'
import { SET_AUTO_PLAY, VIDEO_FINISHED_PLAYING } from '@/store'

interface PlayListState {
  playList: Array<any>
  lessonsWatched: number
  numberOfLessons: number
}

export default defineComponent({
  components: {
    Tile,
    PlayListMeta
  },

  setup(_, { root: { $store } }) {
    const { playList } = useGetters(['playList'])
    const { set_auto_play: setAutoPlay } = useMutations([SET_AUTO_PLAY])
    const { selectVideo, getPlayList } = useActions(['selectVideo', 'getPlayList'])
    const { autoPlay, tileIndex, currentPlayingVideo } = useState(['autoPlay', 'tileIndex', 'currentPlayingVideo'])

    const state = reactive({
      playList: [],
      lessonsWatched: 0,
      numberOfLessons: 0
    })

    onMounted(async() => {
      await getPlayList()

      state.playList = playList.value
      _setLessonsData(state)

      $store.subscribe((mutation: any, storeState: any) => {
        if (mutation.type !== VIDEO_FINISHED_PLAYING) return

        state.playList = Array.from(storeState.playList.values())
        _setLessonsData(state)
      })
    })

    return {
      state,
      autoPlay,
      tileIndex,
      currentPlayingVideo,
      progress: computed(() => (state.lessonsWatched / state.numberOfLessons) * 100),

      setAutoPlay: (e: any) => setAutoPlay(e.target.checked),
      selectVideo: (id: number, index: number) => selectVideo({ id, index })
    }

    function _setLessonsData(state: PlayListState) {
      state.lessonsWatched = state.playList.filter((p:any) => p.watched).length
      state.numberOfLessons = state.playList.length
    }
  }
})
</script>

<style lang="stylus" scoped>
  .playlist
    background #fafafa

    &-tile-container
      max-height 470px
      overflow hidden
      overflow-y scroll

    &-playing-banner
      background #cccccc
</style>
