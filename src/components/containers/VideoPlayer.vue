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
import { useState, useGetters, useMutations } from 'vuex-composition-helpers'
import { defineComponent, computed, onMounted, onUnmounted } from '@vue/composition-api'

import { TileNavigator } from '../ui'
import { IStoreState } from '@/store'
import { SET_CURRENT_PLAYING_VIDEO, SET_TILE_INDEX, VIDEO_FINISHED_PLAYING } from '@/store'

export default defineComponent({
  components: { TileNavigator },

  setup(_, { root: { $store } }) {
    const {
      set_tile_index: setTileIndex,
      video_finished_playing: videoFinishedPlaying,
      set_current_playing_video: setCurrentPlayingVideo
    } = useMutations([SET_TILE_INDEX, VIDEO_FINISHED_PLAYING, SET_CURRENT_PLAYING_VIDEO])
    const { playList: playListArray } = useGetters(['playList'])
    const {
      autoPlay,
      playList,
      tileIndex,
      currentPlayingVideo
    } = useState<IStoreState>([
      'autoPlay',
      'playList',
      'tileIndex',
      'currentPlayingVideo'
    ])
    let player: any

    onMounted(() => {
      player = videojs('video', { 
        controls: true,
        preload: 'auto' 
      })

      player.on('ended', _onVideoEnded)
      player.ready(_onPlayerReady(player))
      $store.subscribe(_onStoreSubscribe(player))
    })

    onUnmounted(() => !!player && player.dispose())

    return {
      nextVideo: computed(() => playListArray.value[tileIndex.value + 1]),
      previousVideo: computed(() => playListArray.value[tileIndex.value - 1]),

      showPreviousVideo() {
        if (!playListArray.value.length || R.lte(tileIndex.value, 0)) return
        _handleNavigation(true)
      },

      showNextVideo: _showNextVideo
    }

    function _onPlayerReady(player: any) {
      return function() {
        const sources = currentPlayingVideo.value.sources
        sources && player.src(sources)
      }
    }

    function _onVideoEnded() {
      videoFinishedPlaying(currentPlayingVideo.value.id)

      if (autoPlay.value){
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
      if (!playListArray.value.length || R.gte(tileIndex.value, playListArray.value.length - 1)) return
      _handleNavigation()
    }

    function _handleNavigation(negate = false) {
      const idx = negate ? tileIndex.value - 1 : tileIndex.value + 1
      const id = R.prop('id', playListArray.value[idx])

      setTileIndex(idx)
      setCurrentPlayingVideo(playList.value.get(id))
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
