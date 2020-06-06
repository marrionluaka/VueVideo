<template lang="pug">
  .playlist.pb-10.rounded.overflow-hidden
    .playlist-playing-banner.flex.flex-row.items-center.px-4.py-4
      img.w-20.mr-3(src="../../assets/logo.png" alt="Vue logo")
      p.text-xl Build a video player with Tailwind and Vue 3 composition api

    PlayListMeta(
      @onChange="test"
      :lessonsWatched="1"
      :progress="progress"
      :numberOfLessons="12"
      :autoPlayEnabled="false"
    )

    ul
      li(v-for="(video, index) in videos" :key="video.id")
        Tile(:tileIndex="index" :tileId="video.id")
</template>

<script lang="ts">
import * as R from 'ramda'
import { defineComponent, computed, ref, SetupContext } from '@vue/composition-api'

import { SET_VIDEO_ID } from '@/store'
import { Tile, PlayListMeta, TileNavigator, PlayListProgressBar } from '../ui'
import { ExtractPropTypes } from 'vue-function-api/dist/component/componentProps'

export default defineComponent({
  components: {
    Tile,
    PlayListMeta,
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

      progress: computed(() => (3/12) * 100),

      test(e: any) {
        console.log(e.target.checked)
      },

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

<style lang="stylus">
  .playlist
    background #fafafa

    &-playing-banner
      background #cccccc
</style>