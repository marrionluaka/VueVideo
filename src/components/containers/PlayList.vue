<template lang="pug">
  .playlist.rounded.overflow-hidden
    .playlist-playing-banner.flex.flex-row.items-center.px-2.py-4
      img.w-20.mr-3(src="../../assets/logo.png" alt="Vue logo")
      p.text-xl Build a responsive video player with Tailwind and Vue 3 composition api

    PlayListMeta(
      :progress="progress"
      :lessonsWatched="state.lessonsWatched"
      :numberOfLessons="state.numberOfLessons"
      :autoPlayEnabled="autoPlayEnabled"
      @onChange="setAutoPlay"
    )

    ul.playlist-tile-container
      li(v-for="(video, index) in state.playList" :key="video.id")
        Tile(
          :video="video"
          :tileIndex="index"
          :nowPlaying="video.id === nowPlaying"
          :upNext="tileIndex + 1 === index"
          @onSelected="selectVideo"
        )
</template>

<script lang="ts">
import * as R from 'ramda'
import { defineComponent, computed, ref, onMounted, reactive } from '@vue/composition-api'

import { SET_AUTO_PLAY, VIDEO_FINISHED_PLAYING } from '@/store'
import { Tile, PlayListMeta, PlayListProgressBar } from '../ui'
import { useStore, useMapState, useMapGetters } from '@/hooks/useStore'

interface PlayListState {
  playList: Array<any>
  lessonsWatched: number
  numberOfLessons: number
}

export default defineComponent({
  components: {
    Tile,
    PlayListMeta,
    PlayListProgressBar
  },

  setup() {
    const store: any = useStore()
    const mapState: any = useMapState(store.state)
    const mapGetters: any = useMapGetters(store.getters)

    const state = reactive({
      playList: [],
      lessonsWatched: 0,
      numberOfLessons: 0
    })

    onMounted(async() => {
      await store.dispatch('getPlayList')

      state.playList = mapGetters.playList()
      _setLessonsData(state)

      store.subscribe((mutation: any, storeState: any) => {
        if (mutation.type !== VIDEO_FINISHED_PLAYING) return

        state.playList = Array.from(storeState.playList.values())
        _setLessonsData(state)
      })
    })

    return {
      state,
      tileIndex: computed(() => mapState.tileIndex()),
      autoPlayEnabled: computed(() => mapState.autoPlay()),
      nowPlaying: computed(() => mapState.currentPlayingVideo().id),
      progress: computed(() => (state.lessonsWatched / state.numberOfLessons) * 100),

      setAutoPlay: (e: any) => store.commit(SET_AUTO_PLAY, e.target.checked),
      selectVideo: (id: number, index: number) => store.dispatch('selectVideo', { id, index })
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
