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
import {
  defineComponent,
  computed,
  ref,
  SetupContext,
  toRefs,
  onMounted,
  onUnmounted,
  watch
} from '@vue/composition-api'

import { TileNavigator } from '../ui'
import { useVideos } from '@/hooks/useVideos'

export default defineComponent({
  components: { TileNavigator },

  setup() {
    let player: any
    const {
      showNextVideo,
      showPreviousVideo,
      currentPlayingVideo,
      videoFinishedPlaying,
      tileIndex,
      playList
    } = useVideos()

    onMounted(() => {
      player = videojs('video', { 
        controls: true,
        preload: 'auto' 
      })

      player.ready(function() {
        const sources = R.path(['value', 'sources'], currentPlayingVideo)
        sources && player.src(sources)

        if (localStorage.getItem('autoPlay') === "true") {
          player.autoplay('play')
        }

        watch(
          () => currentPlayingVideo.value.title,
          (title, prevTitle) => {
            if (prevTitle && prevTitle !== title) {
              player.src(currentPlayingVideo.value.sources)
              player.play()
            }
          }
        )
      })

      player.on('ended', () => videoFinishedPlaying(currentPlayingVideo.value.id))
    })

    onUnmounted(() => !!player && player.dispose())

    return {
      showNextVideo, 
      showPreviousVideo,
      currentPlayingVideo,
      nextVideo: computed(() => playList.value[tileIndex.value + 1]),
      previousVideo: computed(() => playList.value[tileIndex.value - 1])
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
