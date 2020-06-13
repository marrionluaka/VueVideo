<template lang="pug">
  div
    video#video.video-js(controls)
    TileNavigator(
      :nextVideo="nextVideo"
      :previousVideo="previousVideo"
      @onShowNextSlide="showNextVideo"
      @onShowPreviousSlide="showPreviousVideo"
    )
</template>

<script lang="ts">
import * as R from 'ramda'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { defineComponent, computed, onMounted, onUnmounted } from '@vue/composition-api'

import { TileNavigator } from '../ui'
import { useStore, useMapState, useMapGetters } from '@/hooks/useStore'
import { SET_CURRENT_PLAYING_VIDEO, SET_TILE_INDEX, VIDEO_FINISHED_PLAYING } from '@/store'

export default defineComponent({
  components: { TileNavigator },

  setup() {
    const store: any = useStore()
    const mapState: any = useMapState(store.state)
    const mapGetters: any = useMapGetters(store.getters)
    let player: any

    onMounted(() => {
      player = videojs('video', { 
        controls: true,
        preload: 'auto' 
      })

      player.on('ended', _onVideoEnded)
      player.ready(_onPlayerReady(player))
      store.subscribe(_onStoreSubscribe(player))
    })

    onUnmounted(() => !!player && player.dispose())

    return {
      nextVideo: computed(() => mapGetters.playList()[mapState.tileIndex() + 1]),
      previousVideo: computed(() => mapGetters.playList()[mapState.tileIndex() - 1]),

      showPreviousVideo() {
        if (!mapGetters.playList().length || R.lte(mapState.tileIndex(), 0)) return
        _handleNavigation(true)
      },

      showNextVideo: _showNextVideo
    }

    function _onPlayerReady(player: any) {
      return function() {
        const sources = mapState.currentPlayingVideo().sources
        sources && player.src(sources)
      }
    }

    function _onVideoEnded() {
      store.commit(VIDEO_FINISHED_PLAYING, mapState.currentPlayingVideo().id)

      if (mapState.autoPlay()){
        _showNextVideo()
      }
    }

    function _onStoreSubscribe(player: any) {
      return function (mutation: any, storeState: any) {
        if (mutation.type !== SET_CURRENT_PLAYING_VIDEO) return

        if (localStorage.getItem('autoPlay') === "true") {
          player.autoplay('play')
        }

        player.src(storeState.currentPlayingVideo.sources)
      }
    }

    function _showNextVideo() {
      if (!mapGetters.playList().length || R.gte(mapState.tileIndex(), mapGetters.playList().length - 1)) return
      _handleNavigation()
    }

    function _handleNavigation(negate = false) {
      const idx = negate ? mapState.tileIndex() - 1 : mapState.tileIndex() + 1
      const id = R.prop('id', mapGetters.playList()[idx])

      store.commit(SET_TILE_INDEX, idx)
      store.commit(SET_CURRENT_PLAYING_VIDEO, mapState.playList().get(id))
    }
  }
})
</script>

<style lang="stylus" scoped>
  .video-js
    width 100%
    max-height 450px
    @media (min-width: 992px)
      min-height 100%

    video
      height 100%
      width 100%
      object-fit fill
      position absolute
</style>
