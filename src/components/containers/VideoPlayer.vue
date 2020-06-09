<template lang="pug">
  div
    h2 {{ currentPlayingVideo.title }}
    TileNavigator(@onShowNextSlide="showNextVideo" @onShowPreviousSlide="showPreviousVideo")
</template>

<script lang="ts">
import * as R from 'ramda'
import { defineComponent, computed, ref, SetupContext, toRefs } from '@vue/composition-api'

import { TileNavigator } from '../ui'
import { useVideos } from '@/hooks/useVideos'

export default defineComponent({
  components: { TileNavigator },

  setup() {
    const { showNextVideo, showPreviousVideo, currentPlayingVideo } = useVideos()

    return {
      showNextVideo, 
      showPreviousVideo,
      currentPlayingVideo
    }
  }
})
</script>

<style lang="stylus">
  
</style>