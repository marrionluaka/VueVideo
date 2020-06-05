<template lang="pug">
  ul
    li Currently playing: My video
    li(v-for="(video, index) in videos" :key="video.id")
      Tile(:tileIndex="index" :tileId="video.id")
</template>

<script lang="ts">
import * as R from 'ramda'
import { createComponent, computed, ref, SetupContext } from 'vue-function-api'

import { SET_VIDEO_ID } from '@/store'
import { Tile, TileNavigator, PlayListProgressBar } from '../ui'
import { ExtractPropTypes } from 'vue-function-api/dist/component/componentProps'

export default createComponent({
  components: {
    Tile,
    TileNavigator,
    PlayListProgressBar
  },

  props: {
    videos: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  setup({ videos }, { root: { $store } }) {
    const tileIndex = ref(0)
    const videoLength = videos.length

    return {
      tileIndex,

      onVideoSelected(id: number, index: number) {
        tileIndex.value = index
        $store.dispatch(SET_VIDEO_ID, id)
      },

      onShowNext() {
        if (!videoLength || R.gte(tileIndex.value, videoLength)) return
        tileIndex.value += 1
        $store.dispatch(SET_VIDEO_ID, R.path(['id'], videos[tileIndex.value]))
      },

      onShowPrev() {
        if (!videoLength || R.lte(tileIndex.value, 0)) return
        tileIndex.value -= 1
        $store.dispatch(SET_VIDEO_ID, R.path(['id'], videos[tileIndex.value]))
      }
    }
  }
})
</script>

<style lang="pug">
  
</style>